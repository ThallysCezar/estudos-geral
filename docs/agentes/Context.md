# Context.md — o que existe no site e em que ponto estamos

Última atualização: 2026-10-18. Atualize ao fechar um marco (regra em `Agent.md`). Se algo aqui parecer antigo, confira no disco antes de agir.

## Caderno de finanças e investimentos (2026-10-18)

- Criada `cadernos/financas-investimentos.html` como material educacional geral: orçamento/objetivos, reserva, liquidez, renda fixa, Tesouro/CDB/CDI/FGC, ações, FIIs, ETFs, diversificação, avaliação, plataformas, custos, tributação geral e prevenção a golpes. Não registra dados pessoais nem recomenda ativos.
- A sugestão recebida foi contextualizada: 6 meses é referência ajustável (CVM apresenta estimativa de 6–12); D+0 depende das condições do produto; FGC cobre créditos elegíveis e não Tesouro; 100% CDI não significa retorno líquido; divisão 25/25/25/25 e quantidade fixa de ativos não são regras universais.
- Fontes listadas: CVM/Portal do Investidor, FGC e B3; Investidor10 foi descrito como ferramenta privada, com permissões e termos a conferir. Integrada à Home, Acervo, paletas, progresso e README. Backup pré-catálogo: `Arquivados/2026-10-18-antes-nota-financas/`. Sem commit/publicação.
- Imagem enviada pelo usuário incorporada no início do caderno em `assets/img/financas/mapa-mental-financas-investimentos.png`, no padrão `figure.topic-img`, com alt/legenda e visualizador compartilhado `img-modal`; asset local, sem dependência remota. Check-links agora verifica 328 alvos e contratos seguem 11/11.
- Adicionada uma etapa navegável de plano em três fases, com percentuais do material marcados como cenário didático, fórmulas parametrizadas, simulação fictícia e automação segura. Removidos dados pessoais do anexo (aporte, despesas, perfil/trabalho) e nomes/taxas promocionais de bancos; incluídos limites sobre a meta de reserva, volatilidade de IPCA+ e rendimentos de FIIs. A contagem do caderno passa a 15 e a do widget global a 502. Tributação resumida com ressalvas e fonte da Receita Federal.
- Contratos (11/11) e links locais passaram; auditoria específica do chassi ainda reporta lacunas por tópico, e a renderização visual não foi feita. Ver HANDOFF antes de declarar conformidade completa.

- **Certificados e cursos de IA (2026-10-21):** bloco recolhido "Para ir além" no tópico `#t7-canais` de `trilhas/ia.html`, com o resumo da análise de vagas de AI Engineer feita pelo Thallys (RAG/evals/agentes 80–90%, Azure 45%, AWS/MLOps 40%, GCP 35%, MCP 30%), 9 credenciais gratuitas e a ordem sugerida. Sem dado pessoal, sem preço fixo; itens não confirmados ficaram de fora. A versão completa (com LinkedIn e opções descartadas) é do Thallys e não vai para o site.

- **Caderno Python para quem vem de Java (2026-10-21):** `cadernos/python-para-java.html` + `assets/js/python-para-java.inline.js` (chassi clonado do caderno de governança; chaves `python-para-java-CL-*`). 12 tópicos em 5 partes (ambiente e módulos; tipagem, coleções, funções/decorators, exceções/with; dataclass e Pydantic; FastAPI e async; pytest e Docker) + "Como aprender". Cada tópico tem a caixa "a ponte com o Java" e um "Projeto do conceito" que alimenta o Projeto 1 da trilha de IA. Card no acervo; a barra "Python" de `#vagas` na trilha de IA aponta para ele. Totalmente integrado ao ecossistema: registrado em `regression-contracts.test.mjs` (DOCUMENTOS_ESPERADOS), `DOCS` e `PALETTE_DATA` de `acervo.inline.js`, `PALETTE_DATA` de `index.inline.js`, `README.md` e `audit-quiz-lengths.mjs`.

- **Projetos na trilha de IA (2026-10-21):** Partes 07 e 08 padronizadas e harmonizadas: Parte 07 com id="p7" e tópicos `#t7-ciclo` (ciclo do zero ao deploy), `#t7-escada` (os quatro projetos em escada: 1 chat com ferramentas, 2 RAG, 3 agente com MCP, 4 carro-chefe) e `#t7-ancora` (o carro-chefe); Parte 08 com id="p8" e tópicos `#t8-ciclo` (o ciclo de aprendizado), `#t8-canais` (canais e cursos em português) e `#t8-pratica` (como pesquisar e o que praticar). Todos os 6 tópicos equipados com chassi pedagógico completo (casos, analogias, armadilhas, fontes, exercícios +50 XP com quizzes equilibrados e flashcards). Os 36 tópicos dos Níveis 1 a 6 terminam com a caixa `.projeto` ("Projeto do conceito": o que construir, qual projeto alimenta, "Pronto quando" mensurável, linha "Em Java"), antes do `topico-fechamento`; CSS em `<style id="projeto-css">`. Python é a linguagem principal. Marco novo na trilha "Nível 7: Projetos" com ids explícitos (`n-proj-*`), para não deslocar o progresso. O domingo do `index` abre direto a trilha de IA (o Thallys não quis opção separada de projetos). Laboratório (`lab/projetos.html`) não é pré-requisito.

- **Vagas de AI Engineer e barra do topo (2026-10-21):** seção `#vagas` ("O que as vagas pedem") no topo de `trilhas/ia.html`, antes da trilha: barras das 15 skills mais pedidas (amostra de 20 vagas, out/2026), cada uma ligada ao tópico que a ensina; em laranja, o que o site não cobre (Python/FastAPI, 95%: maior lacuna do site). Tabela por faixa, conclusões, roteiro para quem vem de Java e limitações ficam recolhidos. O bloco de certificados em `#t7-canais` aponta para `#vagas` em vez de repetir números. Saíram do topo da trilha de IA o link quebrado "Ver Versão V1" (apontava para a própria página) e o link do `docs-md` (continua no `index.html` e no `acervo.html`). Barra `.island` do `index.html` e do `acervo.html`: bloco `<style id="island-fix">` iguala altura e fonte dos itens, impede quebra de texto e passa para duas linhas quando não cabe (antes vazava; a barra precisa de ~1.175px e o bloco tem 1.120px).

## Revisão didática transversal (2026-10-17)

- Pedido: revisar as demais áreas com o mesmo cuidado didático aplicado à IA, sem redesenhar os documentos. Mantidos estrutura, ordem e chassi; alterados explicações, cenários, resumos e exercícios nos sete arquivos de `trilhas/` (Arquitetura, Docker/Kubernetes, Java, Mensageria, Nuvem, Spring e System Design) e sete `cadernos/` (Biblioteca, Conceitos de Backend, Git, Governança e Segurança, Inglês, Linux e Oratória). A trilha de IA não foi modificada nesta passada.
- Corrigidos números e resultados hipotéticos que pareciam medições reais, regras universais sem contexto e garantias excessivas. Exemplos relevantes: custo de memória e capacidade de Virtual Threads; streaming de arquivos; segurança de uso do load factor; entrega/ack/idempotência em mensageria; limites de cache e semântica de contêiner; responsabilidade compartilhada; locking S3 do Terraform; progresso do Git reflog; e regra dos 95% no estudo de inglês.
- Exercícios e resumos dos tópicos foram alinhados onde a explicação principal mudou. Cenários inventados agora estão identificados como hipotéticos/ilustrativos; preservados exemplos numéricos quando eram definições, configurações ou entradas explicitamente exemplificativas.
- Backups anteriores à revisão: `Arquivados/2026-10-17-revisao-didatica-outras-areas/` (14 HTML). Não regravar baseline; `diff-snapshot` compara com alterações preexistentes e reporta mudanças históricas também. Verificações executadas após a edição final devem ser registradas no handoff desta revisão.
- Revisão de conteúdo dirigida, não certificação linha a linha de todas as afirmações. Inspeção visual não realizada: navegador local bloqueou URL `file://` por política. Nenhum commit ou publicação.

### Segunda passada — cenários, complexidade e garantias

- A pedido do Thallys, a revisão foi ampliada nos mesmos 14 documentos (as sete trilhas e sete cadernos), sem reestruturar páginas. Antes desta passada, cópias do estado revisado ficaram em `Arquivados/2026-10-17-revisao-didatica-segunda-passada/` (14 HTML).
- Em 311 blocos, o rótulo sem comprovação “INCIDENTE REAL DE PRODUÇÃO” passou a “CENÁRIO HIPOTÉTICO DE PRODUÇÃO”. Cabeçalhos genéricos “Falhas Reais” também foram corrigidos para “Falhas comuns” ou “Riscos comuns”; exemplos e números permanecem como premissas de ensino, não evidência empírica.
- Corrigidos outros excessos localizados: O(1) atribuído à paginação keyset; custos de threads/heap e streaming; pinning de Virtual Threads (diferença entre JDK 21–23 e 24+, com fonte JEP 444/491); `maxUnavailable` tratado como garantia de zero downtime; disponibilidade garantida em Kubernetes gerenciado; assinatura Git como prova de identidade; e tarifação de rede apresentada como igual entre provedores.
- `Spec.md` passou a exigir que cenário real tenha fonte, que números hipotéticos sejam tratados como premissas e que complexidade venha acompanhada de condições.
- Fontes primárias conferidas: JEP 444 e JEP 491 do OpenJDK; documentação do Kubernetes sobre Deployment/rolling update; documentação Java de `Files.lines`; PostgreSQL `LIMIT/OFFSET`; documentação do Git sobre commit/assinatura; e orientação de preços de rede da AWS. Esta é uma revisão dirigida, não uma auditoria formal linha a linha.
- Verificações finais a registrar no HANDOFF: manter sem quebras links, contratos, tags, quiz e diff-snapshot; baseline não deve ser regravado. Inspeção visual continua bloqueada para `file://`; sem commit/publicação.
- Passe complementar autorizada pelo Thallys: corrigidas também afirmações remanescentes de maior impacto em Java, Nuvem e Mensageria. Exemplos numéricos de benchmark foram explicitados como hipotéticos ou dependentes de medição; DBaaS/PITR, escolha NoSQL, prefetch, throughput persistente e quorum deixaram de prometer números ou garantias universais. Backup anterior deste passe: `Arquivados/2026-10-17-revisao-didatica-passe-final/` (5 documentos). Links locais e contratos seguem válidos; quizzes dessas três páginas permanecem abaixo do teto heurístico; `git diff --check` sem erros. Nenhum redesign, commit ou baseline regravado.

## IA aplicada ao desenvolvimento (2026-10-17)

- O pedido foi melhorar didática preservando estrutura: a trilha `trilhas/ia.html` mantém seções, ordem, chassi, navegação e visual; a intervenção revisa explicações e exemplos já existentes.
- Corrigidos modelos mentais que tratavam delimitadores de prompt como barreira contra injection, prompt como contrato de correção, spec como fonte infalível e agente como executor autônomo. Tool calling: o backend valida, autoriza, executa e limita cada ferramenta.
- A bancada tem a missão `I04` (agente Spring com consulta read-only, isolamento por tenant, limites, aprovação humana e testes locais); total de projetos foi atualizado de 18 para 19 na bancada e Home. Aquecimentos continuam 18.
- A missão verifica suporte a tool calling do modelo/provider escolhido; quando não houver suporte local, a integração é testada com modelo falso. Nenhum segredo ou dado real nos exercícios.
- Referências técnicas oficiais consultadas: Spring AI Tool Calling e documentação de Prompt Engineering da OpenAI. Sem mudança na estrutura da trilha e sem baseline regravado.
- Revisão didática adicional: removidos resultados de negócio e métricas apresentados sem evidência como fatos; cenários agora são identificados como hipotéticos e pedem validação. Corrigidas explicações absolutas sobre memorização de LLM, pré-treino/SFT/RLHF/DPO, gargalo PCIe, model tiering, avaliação de RAG e quality gates. Painel de nós e corpo foram alinhados nos conceitos tocados; a trilha segue preservando estrutura e ordem.
- Verificação desta passada: `check-links` (302 alvos, sem quebras), contratos 11/11, auditor de quiz da IA 18/36 (50%, abaixo do teto de 60%), `audit-chassi` sem tags desbalanceadas e `git diff --check` limpo. `diff-snapshot` aponta alterações acumuladas desde 2026-10-13 e nenhum tópico removido; baseline não regravado. Inspeção visual não executada.

## Novos tópicos (2026-10-17)

Pedido do Thallys: acrescentar assuntos que faltavam e responder duas perguntas de entrevista.

- `trilhas/ia.html`: 2.3 ampliado para temperatura, top-k e top-p; novos 4.3 "Tokens, sentenças e chunks" (RAG e streaming viraram 4.4 e 4.5), 5.6 "Frameworks de agentes: Agno, LangChain, LangGraph e Spring AI" e 6.6 "Como avaliar um agente: resultado, trajetória e Ragas". Primeira vez que a IA recebe `details.alem` (CSS `alem-css` e listener de impressão trazidos do System Design). Fatos de Agno e Ragas conferidos na documentação oficial em 2026-10-17.
- `trilhas/mensageria.html`: parte nova "Kafka na prática" (`#pkafka`, tópicos `kf1` a `kf6`: partição e chave, consumer group e rebalance, retenção e replay, acks/idempotência/transações, Spring Kafka com DLT, consumer lag), antes de "Como aprender" (que virou a parte 12). Decisão: **mais foco em Kafka, mantendo o RabbitMQ**; reescrever a trilha com Kafka como principal foi descartado. 4 nós novos no marco do Kafka.
- **As duas perguntas de entrevista ficam no caderno de dúvidas** (`cadernos/conceitos-backend.html`), no formato completo pedido pelo Thallys: conceito por trás, como funciona, como resolver passo a passo e um bloco "Como responder numa entrevista" (`.cs`): `g2b` "JWT é legível por qualquer um: por que ele é seguro" e `h2b` "A imagem Docker de 2 GB e o deploy lento". A primeira versão do Docker (`b6`, enxuta, na trilha) foi retirada; o tópico `b4` da trilha de Docker ganhou um link para o caderno. Regra derivada: **pergunta de entrevista ou dúvida do Thallys vai para o caderno de dúvidas, explicada do conceito à resposta**, e as trilhas só apontam para lá.
- Tópicos novos sem emoji; no `.caso` da IA e da Mensageria, `<b>` vira rótulo de linha própria (CSS), então negrito no meio do texto usa `<strong>`. O motor do quiz já escreve "Correto!"/"Incorreto" antes da explicação: `data-rationale` não deve começar com essas palavras.
- Backup: `Arquivados/2026-10-17-antes-novos-topicos/`. Verificado: audit-chassi, diff-snapshot sem perda, check-links, contratos 11/11, quiz-vies abaixo de 60% nos quatro documentos, console limpo, 375px sem overflow. Baseline não regravado (mudanças são só acréscimos). Nada commitado.

## Pomodoro compartilhado (2026-10-12)

Widget opcional em todas as páginas HTML ativas, criado por `assets/js/pomodoro.js`; `assets/css/pomodoro.css` fornece o estilo comum. Sem configuração, o widget mostra apenas “Técnica Pomodoro”; salvar etapas em `ferramentas/pomodoro.html` habilita o timer. Sugestões: quatro focos de 25 min, pausas de 5 min e pausa longa de 15 min após o quarto foco. Preferências e sessão usam `site.pomodoro.config.v1` e `site.pomodoro.session.v1`. A sessão usa `endsAt`, avança as etapas automaticamente e mantém a contagem ao navegar entre páginas no mesmo perfil/origem. Sinais sintetizados com Web Audio marcam início, fim e começo automático da etapa seguinte; a configuração oferece “Testar som” e informa quando o navegador bloqueia áudio. A posição do widget sobe quando a página também exibe os botões “Início” e “voltar ao topo”. `localStorage` não sincroniza entre notebooks.

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

- Organização da documentação: arquivos internos de agentes agrupados em `docs/agentes/` (`Agent.md`, `Spec.md`, `Context.md`, `HANDOFF.md`), planos em `docs/planos/` (`PLANO-MELHORIAS.md`, `TAREFAS-GEMINI.md`) e relatórios em `docs/historico/`; `SECURITY.md` em `.github/`; `package-lock.json` removido da raiz.
- A raiz de `site-estudos/` agora mantém estritamente os 6 arquivos essenciais (`index.html`, `acervo.html`, `README.md`, `LICENSE`, `.gitignore`, `.nojekyll`).
- Higienização e deduplicação de `assets/img/`: 19 arquivos soltos na raiz de `assets/img/` foram organizados em suas subpastas temáticas (15 cópias duplicadas excluídas, economizando ~6.5 MB; SVGs de IA movidos para `ia/`; mapa de Governança para `governanca/`). Todos os caminhos `<img src>` atualizados sem quebra de links (275 alvos verificados).
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

- **`privado/plano.html` (2026-10-19):** página cifrada com senha (AES-GCM, decifrada no navegador). É gerada fora deste repositório; não edite à mão e não a inclua no inventário de documentos. A entrada é um clique triplo no título de `cadernos/financas-investimentos.html` (código no fim de `assets/js/financas-investimentos.inline.js`).
