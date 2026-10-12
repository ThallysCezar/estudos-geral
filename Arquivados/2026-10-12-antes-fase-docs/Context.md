# Context.md — o que existe no site e em que ponto estamos

Última atualização: 2026-10-12. Atualize ao fechar um marco (regra em `Agent.md`). Se algo aqui parecer antigo, confira no disco antes de agir.

## Performance: corrigida (2026-10-09)

**A causa era o JS inline bloquear a renderização, e a correção é tirá-lo do caminho crítico.** Medido com instrumentação por bloco: num documento típico, um único bloco de ~84 KB responde por ~83% do tempo até interativo.

A correção: mover os blocos `<script>` inline para `assets/js/<doc>.inline.js` e referenciar com `<script defer>`. A ordem de execução é preservada (defer mantém a ordem entre si), e os `<script src>` existentes recebem `defer` quando ainda não tiverem.

Piloto em `trilhas/arquitetura.html`: mediana de 4 execuções caiu de **664 ms para 93 ms**. Tópicos, grupos, nós, diagramas e globais conferidos; progresso salvo e painel funcional. Backup em `Arquivados/2026-10-09-antes-defer/`.

**Escalado para 17 documentos** em 2026-10-09, com `node scripts/extrai-js-inline.mjs --gravar`. Medido contra o backup em `Arquivados/2026-10-09-antes-defer/`, mediana por documento:

| documento | antes | depois |
|---|---|---|
| java | 763 ms | **99 ms** |
| arquitetura | 664 ms | **93 ms** |
| system-design | 1252 ms | **71 ms** |
| cadernos/linux | 463 ms | **52 ms** |
| conceitos-backend | 402 ms | **74 ms** |
| nuvem | 1420 ms | **109 ms** |
| docker-kubernetes | 919 ms | **87 ms** |
| spring | 779 ms | **87 ms** |
| mensageria | 662 ms | **73 ms** |
| biblioteca / inglês / oratória | 238 / 221 / 145 ms | **51 / 47 / 41 ms** |
| index / acervo | 55 / 64 ms | **25 / 36 ms** |

Conteúdo conferido igual em todos (tópicos, grupos da trilha, nós, diagramas, fechamentos), progresso salvando com a chave certa e painel da trilha abrindo em 8 documentos testados, console limpo.

`cadernos/git.html` entrou depois, uma vez corrigido o escape (ver abaixo): 48 ms, 16 tópicos.

**Um documento ficou de fora, de propósito:** `trilhas/ia.html` foi **convertido e revertido** — já era rápido (94 ms) e a requisição extra o deixou 2x mais lento (201 ms). A transformação só compensa onde há JS caro bloqueando. Não reconverta sem medir.

`ferramentas/prompt-studio.html` ficou dentro do ruído (35 → 33 ms); mantido por simplicidade. `lab/tutorial-api.html` e `ferramentas/tutorial-api.html` não têm JS inline.

Script da transformação: `scripts/extrai-js-inline.mjs`. É idempotente (pula o que já converteu) e recusa documento com `<script>` desbalanceado.

### As ferramentas tiveram que aprender a seguir o `<script src>`

Tirar o JS do HTML quebrou três verificadores, todos com a mesma causa — liam só o HTML:
- `lib-html.mjs`: `ids`, `marcadores`, `marcos`, `localStorage` e `alvos` agora usam `textoComScripts()`. Sem isso o `diff-snapshot` acusava perda de 8 ids, 3 chaves e 46 alvos de link que apenas tinham mudado de arquivo.
- `check-links.mjs`: passou a seguir os `<script src>` locais. A cobertura foi de 242 alvos para **259** — e isso revelou **4 links quebrados reais** em `assets/js/microlearning-data.js`, nunca verificado antes: `java.html#b1` e `java.html#e1` (falta o prefixo `trilhas/`), `trilhas/ia.html#a3` e `#b2` (âncoras inexistentes). Não corrigidos.
- `scripts/tests/regression-contracts.test.mjs` (do Gemini): ganhou `lerComScripts()`. Sem isso, 3 dos 9 contratos falhavam porque `PALETTE_DATA`, `SEM` e a proteção de backup saíram do `index.html`.

Duas coisas que **não** funcionaram, para não repetir:
- **Fatiar o bloco grande em vários `<script>` inline**: ganho pequeno (23%) e o DOM perdeu 1.422 nós. Descartado.
- **`content-visibility`**: sem efeito nenhum (841 → 839 ms).

### Abandono do Angular e consolidação do site estático (2026-10-09)

O Angular foi abandonado definitivamente:
1. O site estático com scripts diferidos (`assets/js/*.inline.js`) atinge tempo até conteúdo entre 25 ms e 109 ms (contra ~190–850 ms no Angular).
2. O código-fonte do Angular foi resgatado e preservado em `Arquivados/2026-10-09-site-angular-src.zip`.
3. Os 3 simuladores interativos do Angular (Circuit Breaker, Kubernetes Probes e VPC Network) foram convertidos e embutidos diretamente nos tópicos de Arquitetura, Docker/Kubernetes e Nuvem.
4. A pasta `site-angular` (273 MB) e o script `scripts/sync-angular.mjs` foram removidos.
5. O workflow `.github/workflows/deploy.yml` foi reescrito para executar o harness de testes estáticos e publicar diretamente no GitHub Pages via GitHub Actions. O site estático é a única fonte da verdade.

## Dois defeitos de produção corrigidos (2026-10-09)

- **`cadernos/git.html` mostrava 6 de 16 tópicos e a trilha não carregava**, no site estático em produção. Causa: `<script>` literal não escapado dentro de um texto de pergunta (`'git bisect run <script>'`), que o parser tratava como abertura de tag e engolia o resto do documento. Trocado por `&lt;script&gt;`. Agora 16 tópicos, 9 grupos, 32 nós, `window.T` vivo. Dez tópicos estavam invisíveis.
- **4 links quebrados no MicroLearning da home** (`assets/js/microlearning-data.js`), invisíveis até o `check-links` passar a seguir os `.js`. Os dois de Java apontavam para caminho **e** âncora errados: `java.html#b1` (que em `trilhas/java.html` é "Referências, null e passagem por valor") virou `trilhas/java.html#i2` (Java Memory Model), e `java.html#e1` virou `trilhas/java.html#i6` (Virtual threads). Os de IA: `#b2` → `#t4-rag`, `#a3` → `#t1-transformer-math`, que é onde o KV Cache é de fato explicado. Conferido pelo título de cada âncora, não pelo nome.

### Por que era isso, e o que não era

Diagnóstico original: **88% do tempo era JavaScript inline na thread principal** — não peso de HTML (parsear 955 KB custa ~104 ms), não rede (TTFB de 4 ms), não falta de framework.

Decidido em 2026-10-09: corrigir as causas medidas primeiro; Angular fica para depois, com prerender obrigatório (SPA puro piora o gargalo medido) e exigindo reescrever a regra "sem framework e sem build" do `Spec.md`.

Falta ainda: o travamento no hover do `index.html`, que é outra causa — a aura escrevia `marginLeft`/`marginTop` a cada frame num elemento de tela inteira com `filter:blur(12px)`. Há correção na árvore (wrapper com `translate3d`), **não commitada e não escrita por mim**. Não consegui cronometrar os frames: a aba perde `requestAnimationFrame` fora de foco.

## Feito em 2026-10-09 — rede de testes (Fase 0)

`scripts/lib-html.mjs` (leitura compartilhada), `scripts/snapshot.mjs` e `scripts/diff-snapshot.mjs`, mais o golden master `scripts/baseline.json`. Detalhe de uso no `Spec.md`, "Definição de pronto".

A rede foi **testada contra regressão real**, não só escrita: num espelho descartável, injetei seis defeitos típicos de migração (chave de `localStorage` renomeada, peça do chassi perdida, tópico apagado, gabarito trocado, texto alterado, tag desbalanceada). As seis são detectadas. A primeira versão deixava passar a troca de gabarito, porque eu guardava `data-correct` como conjunto único do documento; agora é guardado **por exercício**. Em `system-design` o `data-correct` é `true`/`false`, não letra.

## Feito em 2026-10-08

- **`scripts/` versionado.** `check-links.mjs` (arquivos e âncoras, incluindo os `url:` dos arrays de dados) e `audit-chassi.mjs` (peças do chassi por tópico, emoji, tags balanceadas). Node puro, sem dependência. Uso na "Definição de pronto" do `Spec.md`.
- **22 links quebrados corrigidos.** `acervo.html` tinha 16 entradas de `PALETTE_DATA` com caminho da estrutura antiga (`java.html` em vez de `trilhas/java.html`) e 3 apontando para `ia_v4.html`, arquivo que não existe mais. `index.html` tinha as mesmas 6 âncoras de IA erradas. As âncoras reais de `trilhas/ia.html` são `t3-sdd`, `t4-rag`, `t4-structured`, `t5-mcp`, `t5-react`, `t6-harness` — o que parece id (`ex-ai-…`) é `data-exercise-id` do motor de quiz, não âncora.
- **System Design reordenado.** As partes 8 Passos, 17 Sistemas e IA foram para antes de "Como aprender de verdade", no corpo e no array `T` da trilha. Numeração 01–12 refeita. Ids das `section` preservados (`p9` segue sendo "Como aprender", mesmo aparecendo por último) para não quebrar os atalhos `.jump` nem o progresso salvo.
- **Dois fechamentos estavam no tópico errado.** O `.topico-fechamento` do caso 01 (URL Shortener) estava dentro de "Model Serving", e o do caso 02 (WhatsApp) dentro de "Protocolo MCP" — os casos 01 e 02 ficavam sem fechamento e os tópicos de IA exibiam título de outro assunto. Devolvidos aos seus tópicos.
- **Parte de IA virou ponte.** A teoria de MCP, loop ReAct e guardrails saiu e virou `.ver` com link para `trilhas/ia.html`; ficou o que é System Design (custo por passo, contexto reenviado, agente como trabalho de longa duração). Ano removido do título da parte, do `<title>` e do nome do marco.
- **Piloto do chassi: `01 · Encurtador de URL`.** Único tópico do site com as seis peças (`caso`, `analogia`, `dg`, `gotcha`, `fechamento`, `alem`). Ganhou analogia, "como surgiu" + `.repl`, `.conta`, diagrama SVG, blocos explícitos de "Para que serve" e "Por que é importante", `details.alem` com a conta da colisão e cinco armadilhas. Título em frase normal.
- **`details.alem` nasceu aqui.** Não existia em nenhum documento, embora o `Spec.md` o descrevesse. CSS em `<style id="alem-css">` e listener de `beforeprint`. Detalhe no `Spec.md`, seção 3.
- **`.prova` nunca existiu.** O `Spec.md` falava dele como se existisse; quem entrega a prova de domínio é o `.topico-fechamento`. `Spec.md` corrigido.

## O site

Site de estudo de backend (Java/Spring, arquitetura, infraestrutura, IA e soft skills), publicado em `thallyscezar.github.io/estudos`. Cada documento tem duas metades: a **trilha visual** (nós clicáveis, modo teste, fila de revisão) e o **conteúdo** em tópicos, cada um com fechamento de fixação.

Documentos:
- `trilhas/`: java, spring, arquitetura, docker-kubernetes, nuvem, mensageria, system-design, ia.
- `cadernos/`: conceitos-backend (o caderno de dúvidas), biblioteca, linux, git, ingles, oratoria.
- `cadernos/governanca-seguranca.html`: fundamentos, governança, risco, controles, IAM, privacidade/LGPD, desenvolvimento seguro, incidentes e continuidade; sidebar no padrão System Design e mapa mental principal em `assets/img/governanca_ti_mapa_mental.png` com visualizador compartilhado. Em 2026-10-12, a trilha em grade foi substituída por marcos conectados no chassi vertical de System Design; largura, ritmo do cabeçalho e espaçamento das partes também foram alinhados. Verificação dos links locais passou.
- `lab/projetos.html`: a bancada (projetos com falhas injetadas e aquecimentos).
- `ferramentas/`: prompt-studio, refinador, tutorial-api.

A semana (array `SEM` do `index.html`): seg Java, ter Spring **ou** Mensageria, qua Nuvem, qui Docker/K8s (19:30-22:30), sex Arquitetura (19:30-21:00), sáb Inglês **ou** Oratória (livre, 60-90 min), dom descanso (sem pauta, sem link). Inglês e Oratória não aparecem em "Outros": o sábado já é deles.

Terça e sábado abrem um modal de escolha (feito em 2026-09-14): mostra o que foi aberto da última vez naquele dia, sugere o outro e pede confirmação se repetir. Registro em `localStorage` `site.index.alternancia.v1`.

## Pastas e colaboração

- `site-estudos/` é a aplicação publicada e a fonte de trabalho. `site-estudos-claude/` é cópia de teste; só editar se pedido.
- As instruções desta pasta valem para o site em uso. Outros agentes também podem editar; releia arquivos antes de mexer.
- A cópia de teste tem estrutura e recursos diferentes; não importar arquivos sem comparação.

Há contagens fixas em texto no acervo e páginas. Preferir rótulos/listas estáveis para que a entrada de novos documentos não desatualize a interface.

## Organização e verificações (2026-10-12)

- Piloto: `RELATORIO-MIGRACAO-ANGULAR.md` foi movido para `docs/historico/`; o `HANDOFF.md` aponta para o novo caminho. `TAREFAS-GEMINI.md` continua na raiz porque contém instruções ativas. Não ampliar movimentações sem classificar cada arquivo.
- `docs/planos/PLANO-MELHORIAS.md` registra os marcos M01–M14; `TAREFAS-GEMINI.md` permanece na raiz como backlog ativo.
- `package-lock.json` órfão foi removido da raiz (sem dependências npm em uso).
- Higienização e deduplicação de `assets/img/`: 19 arquivos soltos na raiz de `assets/img/` foram organizados em suas subpastas temáticas (15 cópias duplicadas excluídas, economizando ~6.5 MB; SVGs de IA movidos para `ia/`; mapa de Governança para `governanca/`). Todos os caminhos `<img src>` atualizados sem quebra de links (268 alvos verificados).
- O índice do Acervo e as duas paletas Ctrl+K agora incluem Governança e Segurança; antes ela aparecia como card, mas não era encontrada na busca. O contrato 11 compara os documentos oficiais com Acervo, paletas e README.
- Estado de verificação: contratos 11/11, links locais sem quebras e tags balanceadas. `diff-snapshot` aponta 305 gabaritos alterados e 473 tópicos com texto alterado contra o baseline de 2026-10-10; o plano M03 registra a reformulação dos 459 quizzes, mas o baseline não deve ser regravado sem revisão semântica.
- Auditoria de quizzes: 459 questões com três opções e uma correta; posições atuais A=150, B=161, C=148. Em comparação com `HEAD`, os 459 conjuntos de opções diferem; só 3 textos corretos são idênticos literalmente. A distribuição está balanceada, mas isso não prova correção semântica de cada questão.
- `render-check.mjs` não completou localmente: Edge headless encerrou com código `-1073741819` (access violation) em todos os 14 arquivos. É falha do navegador/ambiente, não evidência de defeito nos documentos; repetir em ambiente headless confiável.
- `audit-chassi.mjs --resumo` encontrou 487 tópicos em 16 documentos. O caderno de Governança não tem as peças que o auditor mede; revisar se deve seguir o chassi comum ou receber uma exceção explícita antes de editar em lote.
- A performance tem medições históricas de 2026-10-09 após diferir scripts. Não fazer novas otimizações sem medir o estado atual e comparar a mesma página em condições equivalentes.

## Auditoria de conteúdo pendente

O auditor atual quantifica lacunas por peça em `audit-chassi.mjs --resumo`; os achados de 2026-10-08 sobre consistência didática ainda são históricos. O `Spec.md` é a referência do padrão.

## Armadilhas registradas

- **Realce de código em cascata** gerou `class="s">` aparecendo no texto em 11 documentos. Passada única sempre.
- **Script de ajuste de tom** (caixa alta → minúscula, exclamação): não rode nos documentos "Direto". Ele rebaixa siglas (RAG, MCP), a notação MAIOR.MENOR.CORREÇÃO do SemVer e títulos de livro. Só com lista de siglas protegidas.
- **Seletor `.project .core` × `.project.core`**: o descendente nunca casava e deixou os cards do laboratório sem padding, com o canto cortando o marcador. Três diagnósticos por chute erraram antes de medir com `getComputedStyle`. Em defeito visual, meça antes de adivinhar.
- **Pacote vindo de fora**: o do designer trazia `index.html` e `acervo.html` anteriores ao System Design e teria apagado um documento. Compare a lista de documentos antes de aceitar.
- **Diagramas invisíveis**: sem a trava `.dganim`, um navegador sem `IntersectionObserver` deixa o diagrama escondido para sempre, sem erro no console; sem o reset de impressão, sai em branco no papel.
- **Número de documentos em texto** ("os oito documentos") envelhece a cada documento novo e já gerou cinco contagens erradas. Escreva "os documentos do acervo".
- `trilhas/ia.html` usa outro chassi e id de nó posicional; alguns verificadores contam zero tópicos nele. Não reprocessar por isso.
- Há cópias duplicadas de imagens e CSS (`img/` e `assets/img/`, `css/` e `assets/css/`, `js/`). Confira qual caminho os HTML usam antes de apagar qualquer uma.
- **Heredoc do Git Bash come barra invertida.** `cat > arquivo <<'EOF'` com JavaScript dentro corrompeu `\\s` em `new RegExp` duas vezes, gerando verificador que passava calado. Escreva arquivo de código com a ferramenta de escrita, não pelo shell; e valide com `node --check`.
- **`trilhas/ia.html` não tem âncora `ex-ai-…`**: isso é `data-exercise-id` do motor de quiz. As âncoras são `t4-rag`, `t5-mcp` e afins, sem prefixo.
- **Reordenar parte é trabalho em dois lugares**: a `section.part` no corpo e o objeto no array `T` da trilha, que usa formatos diferentes no mesmo arquivo (uma linha nos marcos antigos, identado nos novos) — grep de uma linha só não acha todos.
- **Chrome não reduz a janela** quando está maximizada: `resize_window` responde sucesso e `innerWidth` continua o mesmo. Para testar 375px de verdade, carregue a página num iframe de 375px e meça lá dentro (as media queries avaliam pela viewport do iframe).
- Bugs já corrigidos na cópia de teste: selos de seção, LaTeX cru, tags sobrando e caixa "Para ir além" no celular.

## Manutenção deste arquivo

Ao fechar um marco: atualize estado e data; reconcilie este arquivo com `HANDOFF.md`; remova pendências obsoletas. Mantenha abaixo de ~150 linhas.
