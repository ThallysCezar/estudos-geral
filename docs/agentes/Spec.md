# Spec.md — o que produzir no site e como saber que está pronto

Para o comportamento do agente, veja `Agent.md`. Para o estado atual, `Context.md`.

Site estático: um HTML autocontido por documento (sem framework e sem build), tema Dracula, progresso em `localStorage`, publicado no GitHub Pages a partir da raiz do branch `main` (`.nojekyll` presente).

---

## 1. As seis perguntas (regra de conteúdo número um)

É assim que eu aprendo. Todo tópico de estudo responde a estas perguntas, cada uma no seu próprio bloco:

1. **O que é?** Categoria, o que faz e o mecanismo central, em linguagem do dia a dia.
2. **Como funciona por baixo dos panos?** O mecanismo real, com diagrama quando ajudar.
3. **Para que serve?** O problema que resolve, com um caso concreto.
4. **Como usar / aplicar?** Exemplo prático. Em Java (ou Spring) sempre que o assunto permitir; se não permitir, o exemplo concreto da área (comando, configuração, frase, cálculo).
5. **O que veio substituir?** Quando houver um antes: o jeito antigo e por que deixou de bastar.
6. **Por que é importante?** O que muda na prática: produção, custo, entrevista, decisão.

- Sempre há resposta para 1, 2, 3, 4 e 6. Não pule nenhuma com "não se aplica"; se parecer não haver resposta, pense mais ou pergunte. Só a 5 é opcional.
- As seis perguntas se somam ao resto do tópico (caso, armadilhas, prova de domínio, fixação); não substituem nada.
- O chassi de 7 pilares já tem um bloco por pergunta. O chassi "Direto" ainda não responde todas de forma explícita (principalmente 3 e 6); a adaptação segue a regra de piloto (`Context.md`).
- Esta é a mesma regra do vault de notas. Assunto que nasce numa nota do vault só vem para cá com o meu OK.

---

## 2. Estrutura

```
index.html        o dia de hoje e a semana (cronograma) — ponto de entrada
acervo.html       índice de todos os documentos, busca e ordem de leitura
trilhas/          os documentos grandes: java, spring, arquitetura, docker-kubernetes,
                  nuvem, mensageria, system-design, ia
cadernos/         apoio: conceitos-backend, biblioteca, linux, git, ingles, oratoria,
                  governanca-seguranca
lab/              projetos.html (a bancada)
ferramentas/      prompt-studio, refinador, tutorial-api, pomodoro
assets/           css, js e img compartilhados
Arquivados/       versões anteriores e backups
docs/             documentação histórica e planos
README.md, SECURITY.md, Agent.md, Spec.md, Context.md
```

- Uma versão por assunto. Versão antiga vai para `Arquivados/`.
- Documento novo ou removido: `index.html`, `acervo.html` e `README.md` atualizados na mesma tarefa. O caminho também entra no índice pesquisável `DOCS` e nas paletas `PALETTE_DATA` da Home e do Acervo; o contrato 11 verifica a cobertura do inventário.

### Regras fixas

- **Só Dracula.** Nunca tema claro, nunca botão de alternar tema.
- **Chassi de navegação dos documentos de estudo:** use a barra lateral no padrão de `trilhas/system-design.html`: marca/ícone + nome do documento, frase curta que resume a tese, indicador de progresso, controles funcionais, busca e navegação agrupada por marcos/partes e tópicos. Não substituir por sidebar genérica composta apenas de introdução e links simples (como era a primeira versão da nota de Governança e Segurança).
- A barra lateral deve refletir a estrutura real do documento; busca filtra conteúdo e navegação; links levam a âncoras existentes; estado ativo/progresso são perceptíveis; controles não podem ser decorativos. Em cadernos menores, adapte quantidade e nomes, mas preserve o chassi. Progresso no navegador usa chave de `localStorage` exclusiva por documento. Em telas estreitas, a navegação deve continuar acessível e rolável, sem ocupar permanentemente uma coluna lateral.
- **Imagens didáticas:** quando uma imagem principal ou mapa mental fizer parte do documento, salve o arquivo em `assets/img/` e apresente-o no início do assunto/documento em `<figure class="topic-img">`, seguindo `trilhas/system-design.html`: `<img>` com `alt` descritivo, `loading="lazy"` e título que indique ampliação; `<figcaption>` com um rótulo curto e uma legenda que explique o papel do visual. Reutilize `assets/css/img-modal.css`, o modal compartilhado e `assets/js/img-modal.js` para zoom/visualização; não invente um visualizador por página. Imagem remota não deve ser a única cópia. O texto ao redor precisa contextualizar, explicar limites e cobrir a informação essencial — não dependa da imagem para ensinar nem trate infográfico como fonte normativa.
- **Público.** Só documento de estudo curado; nada pessoal.
- **Nuvem sem vendor:** conceito primeiro, com mapa de tradução entre provedores.
- Chaves de `localStorage` **únicas por documento** (trilha, modo teste, fila de revisão, exercícios).
- O timer Pomodoro é um widget opcional compartilhado nas páginas ativas: começa identificado como “Técnica Pomodoro”, sem mostrar minutos ou iniciar sozinho; a configuração é salva em `ferramentas/pomodoro.html` (`site.pomodoro.config.v1`) e a sessão usa `site.pomodoro.session.v1`. Som local só após gesto explícito.
- Na semana: dia sem documento (domingo) não é link; dia de dois documentos (terça, sábado) abre a escolha, não um deles no chute.
- Chave de API de terceiros (MicroLearning) fica só no `localStorage`, nunca no código nem em backup exportado (ver `SECURITY.md`).

---

## 3. Padrão de conteúdo (como escrever um documento)

**Antes de escrever**
- Cada documento tem uma **tese** em uma frase (ex.: Git = grafo de snapshots imutáveis; Linux = o térreo que os outros pressupõem; System Design = escolher sob restrição). Ela decide o que entra e o que fica de fora.
- **Delimite a fronteira**: cruze o assunto com os documentos que já existem. O que outro documento já explica vira link ("onde a teoria mora"), não reexplicação. Reporte a sobreposição antes de começar.
- Afirmação factual (estudo, preço, ferramenta, certificação) vem de pesquisa, com a fonte nomeada. Soft skills calibradas ao meu nível real (no inglês: "leio com esforço, escuta fraca").
- **Fio condutor:** o sistema OrderFlow atravessa Java, Spring, Arquitetura, Docker/K8s, Nuvem e Mensageria. A mesma restrição aparece vista de ângulos diferentes (ex.: a conta do pool de conexões).

**Estrutura do documento**
- Topo: eyebrow, título, lede, atalhos (`.jump`) e legenda. Sem contagem de documentos em texto corrido.
- A trilha, em marcos (normalmente 9). Depois o conteúdo, em partes.
- **"Como aprender de verdade" é sempre a última parte e o último marco**: ciclo (ler → vídeo → doc oficial → laboratório → nota → repetir), canais e cursos reais em PT-BR, e como pesquisar e praticar. Parte nova entra antes dela. Atenção: são **dois** lugares a conferir — a ordem das `section.part` no corpo e a ordem dos objetos do array `T` da trilha. Mover a parte sem mover o marco deixa o documento metade certo.
- Títulos em frase normal, não em Title Case; sem ano nem versão no título.

**Tópico do conteúdo**
- Responde às seis perguntas.
- **Sempre com caso**: abre com o problema concreto e os números dele (`.caso`); quando há conta que decide, ela aparece (`.conta`). Exemplo é prática, não só definição.
- Chassi "Direto" (cadernos e System Design), nesta ordem: `p.direto` → `.caso` (com `.conta` quando há conta que decide) → `.analogia` → `.duo` (como surgiu + `.repl` "Veio substituir") → o mecanismo → `figure.dg` → `.duo` com "Para que serve" e "Por que é importante" (as perguntas 3 e 6, que o chassi não respondia) → `details.alem` → `.ver` ("onde a teoria mora") → `.gotcha` → `.done` → `.topico-fechamento`.
- **Não existe classe `.prova`.** Quem entrega a prova de domínio é o `.topico-fechamento` (recapitulando + exercício + flashcard). A legenda do cabeçalho de alguns documentos anuncia "Prova de domínio" como se fosse um bloco próprio; é promessa antiga, não componente.
- **`details.alem` ("Para ir além")** passou a existir em 2026-10-08, no piloto do System Design. CSS no bloco escopado `<style id="alem-css">` (padrão de `img-modal-styles`), com `.alem-tag`, `.alem-opt`, `.alem-body`, `.alem-f` e `.alem-src`. `details` fechado não sai na impressão: um listener de `beforeprint`/`afterprint` abre todos e devolve ao estado anterior. Ao levar o componente para outro documento, leve o bloco de CSS e o listener junto.
- **`.ver`** é a ponte entre documentos no corpo do texto: `<div class="ver"><b>onde a teoria mora</b>…<a href="…">Documento</a>…</div>`. É o par, no conteúdo, do `map` do nó da trilha.
- Chassi de 7 pilares (Java, Spring, Arquitetura, Docker/K8s, Nuvem, Mensageria): `pilar-card p-oque` (1. O que é), `pilar-box p-serve` (2. Para que serve, com `.repl`), `pilar-card p-usar` (3. Como usar), `p-importa` (4. Por que importa), `pilar-card p-funciona` (5. Como funciona, com `figure.dg` e `details.alem`), `p-exemplo` (6. Exemplo em código), `.gotcha` (7. Onde quebra em produção), `.topico-fechamento`; mais `.analogia`.
- Chassi de IA: `.direto`, `.duo`, `.vs`, `.caso`, `.analogia`, `.mental-model`, `table.didatica`, `figure.visual-diagram`, `agent-lab`.
- Reaproveite o chassi do documento que está editando; não misture.
- **Documento novo nasce no chassi, não num vocabulário próprio.** Copie a estrutura de um caderno existente (`cadernos/git.html` é a referência do chassi "Direto") e substitua o conteúdo. Inventar classes como `.direct`, `.box`, `.node` ou `.milestone` produz um documento que parece certo e não é: ele fica fora da trilha, sem progresso salvo, sem fechamento e invisível para `audit-chassi`. Antes de considerar pronto, rode `node scripts/audit-chassi.mjs <documento>` — zero em todas as peças significa que o chassi não foi usado.

**Nó da trilha** (objetos JS em `var T=[...]`)
- Campos: `t` (título), `x` (gancho curto), `oq` (o que é), `ps` (para que serve), `cf` (como funciona), `ex` (exemplo), `dg` (chave do diagrama), `map` (ligações), `star` (nó de laboratório).
- `cf` termina com **"Erro comum:"** e o erro real.
- `ex`, quando houver, em contraste RUIM/BOM ou comando comentado.
- `map: [["Documento", "o que ele explica sobre isto"]]` liga o nó a outros documentos; é como o OrderFlow aparece na trilha.
- Ordem no script: `function W(` → `var DG=` → `var T=` → renderização (o DG chama W na definição). O id do nó é derivado do título (`t` vira slug): renomear `t` muda o id e zera o progresso daquele nó. Exceção: `trilhas/ia.html` usa id posicional (`"t_"+índice`), onde renomear é seguro e reordenar não.

**Fechamento do tópico** (`.topico-fechamento`)
- `.topico-revisao`: recapitulando (3 pontos), pegadinha e modelo mental.
- `.topico-exercicio`: cenário real de engenharia, alternativas A/B/C com `data-correct` e explicação em `data-rationale`. Melhor fonte de cenário: as armadilhas (`.gotcha`) do próprio tópico.
- **O distrator precisa ser um equívoco que alguém teria de verdade.** Alternativa errada curta, absurda ou genérica ("o Kubernetes aumenta o limite do banco automaticamente") não ensina nada e deixa a correta óbvia: dá para gabaritar escolhendo a mais longa sem ler a pergunta. As três alternativas devem ter densidade parecida, e a correta não pode ficar sempre na mesma letra. Verifique com `node scripts/audit-quiz-vies.mjs`, que mede as duas coisas e falha acima de 60% (o acaso é 33% com três alternativas).
- `.topico-flashcard`: pergunta na frente, resposta de 40 a 60 palavras atrás.
- Tópicos de método ("Como aprender", ciclo, laboratório) não recebem fechamento.

**Laboratório (`lab/projetos.html`)**
- Cada projeto: o problema, as falhas para provocar de propósito e o link de volta ao documento da teoria (mapas `D` e `TEORIA`).
- Aquecimentos de 20 a 40 minutos para as noites curtas.
- Tudo roda local primeiro; o obrigatório custa R$ 0; o OrderFlow é o projeto final.

**Inglês**: entrada antes de produção; frases no componente `.frase` (a linha em inglês e a leitura em português).

**Diagramas animados**: o estado escondido só vale sob a classe `.dganim`, posta pelo script depois de checar `prefers-reduced-motion` e `IntersectionObserver`; `@media print` mostra tudo.

---

## 4. Padrão de texto

- **"O que é" explícito**, 80 a 100 palavras, linguagem do dia a dia: categoria, o que faz, mecanismo central, por que importa. Nem curto demais, nem só analogia, nem acadêmico.
- Fórmulas e detalhe interno profundo vão para `<details class="alem">` ("Para ir além", opcional), com `.alem-tag`, `.alem-opt`, `.alem-body`, `.alem-f` e `.alem-src`.
- "Como funciona por baixo dos panos": 2 a 4 frases visíveis; o detalhe completo na caixa "Para ir além". Exceção: simulador, laboratório interativo ou seção que é o próprio conteúdo central.
- Tom neutro. **Sem emoji novo**; os que já existem (cabeçalhos dos pilares, fechamento) são dívida a remover, não modelo a copiar.
- Sem caixa alta de ênfase ("DESTRÓI"), sem linguagem de promessa ("presença serena", "sem gaguejar"), sem LaTeX cru.
- Preservar sempre: analogias, figuras, código, tabelas, simuladores, botões e acessibilidade.

---

## 5. Técnico

- **Responsividade:** a 375px de largura não pode haver rolagem horizontal; grids empilham, `pre` e `table` rolam na horizontal. Causa raiz recorrente: grid interno sem `min-width:0`.
- **Realce de código:** regras aplicadas em passada única, nunca em cascata (senão re-realça dentro dos `<span>` já inseridos).
- **Seletor de duas classes no mesmo elemento é composto** (`.project.core`), não descendente (`.project .core`).

---

## 6. Definição de pronto

Verificado por script, de `site-estudos/`. Todos aceitam caminhos (`… trilhas/java.html`) e saem com código 1 quando algo quebra:

```
node scripts/check-links.mjs        # arquivos e âncoras, inclusive os url: dos arrays
node scripts/audit-chassi.mjs       # peças do chassi por tópico, emoji, tags balanceadas
node scripts/diff-snapshot.mjs      # o que mudou em relação ao golden master
node scripts/snapshot.mjs --gravar  # só para regravar o golden master, de propósito
```

O inventário segue os `<script src>` locais e lê o conteúdo deles. Sem isso, extrair um bloco inline para `assets/js/` pareceria perda de chave de `localStorage` — foi um falso positivo real, corrigido em 2026-10-09.

**O golden master (`scripts/baseline.json`)** congela o estado observável do site: por documento e por tópico, as peças do chassi, todos os `id`, os marcadores de progresso (`data-k`, `data-exercise-id`), o **gabarito de cada exercício**, as chaves de `localStorage`, os alvos de link, a ordem das partes e dos marcos, e um hash do texto de cada tópico.

`diff-snapshot` separa **perda** de **mudança**. Perda é algo que existia e sumiu — tópico, id, peça do chassi, chave de `localStorage`, gabarito alterado, tag que passou a ficar desbalanceada; isso falha a verificação. Texto reescrito e coisa nova são só aviso, porque é trabalho normal.

Fluxo: rode `diff-snapshot` antes de começar (tem que estar limpo), edite, rode de novo e leia. Se a perda for intencional, regrave o baseline com `snapshot.mjs --gravar` **no mesmo commit da mudança**, nunca depois.

O baseline guarda os defeitos atuais de propósito: ele descreve o site como ele é, não como deveria ser. A lista do que está torto hoje fica no `Context.md`.

- [ ] Abre no navegador sem erro no console.
- [ ] Tópico novo responde às seis perguntas, abre com caso e tem armadilhas, prova de domínio e fechamento; nó novo tem "Erro comum:". Nada entra depois de "Como aprender de verdade".
- [ ] Contagens antes/depois batem (tópicos, fechamentos, caixas "Para ir além"); tags balanceadas por tópico.
- [ ] Analogias, figuras, código e tabelas iguais ao backup.
- [ ] Sem LaTeX cru, sem `class="..."` aparecendo como texto, sem caixa alta ou exclamação de ênfase, sem emoji novo.
- [ ] Links internos sem quebra (`href`, `src`, `url`).
- [ ] 375px sem overflow horizontal.
- [ ] Backup em `Arquivados/` antes de edição em lote; fim de linha preservado.
- [ ] Documento novo ou removido: `index.html`, `acervo.html`, `README.md`, `DOCS` do Acervo e as paletas Ctrl+K da Home e do Acervo atualizados; contrato de inventário verde.

---

## 7. A cópia de teste (`site-estudos-claude/`)

Cópia usada só para testar ideias; o trabalho real é em `site-estudos/`. Segue tudo acima. O que muda:

- **Estrutura:** `materias/backend/` (java, spring, arquitetura, mensageria, conceitos-backend, system-design, biblioteca), `materias/infra/` (docker-kubernetes, nuvem, git, linux), `materias/ia/` (ia), `materias/soft-skills/` (ingles, oratoria), mais `lab/`, `ferramentas/`, `assets/`, `Arquivados/` e `cronograma.html` (redireciona para o index).
- **Fixação no lugar do fechamento `.topico-*`:** `section.fixa` com `data-topic="<id>"`, autorada à mão:
  - Recapitulando: 3 pontos, 1 pegadinha, 1 modelo mental.
  - Desafio prático `.chall` (+50 XP): alternativas A/B/C com `data-correct` e explicação em `data-r`.
  - Flashcard `.fcard`, resposta de 40 a 60 palavras.
  - XP, streak e tópicos fixados no painel lateral, com chave de `localStorage` por documento (`java_gam`, `spring_gam`, `arq_gam`, `sysd_gam`, `nuvem_gam`, `dk_gam`, `msg_gam`, `cb_gam`, `git_gam`, `linux_gam`, `bib_gam`, `ingles_gam`, `orat_gam`, `ai_eng_v4_gam`). CSS em `id="fixa-css"`.
- **Responsividade:** bloco `<style id="resp-fix">` com `@media(max-width:680px)`.
- **Sem MicroLearning** (fica a versão do site em uso).
- Os HTML usam fim de linha CRLF.
