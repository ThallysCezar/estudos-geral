# Tarefas para o Gemini — site-estudos (rodada 3)

Revisão da rodada 2 feita em 2026-10-10, testando no navegador e sabotando os testes para ver se eles acusam. Aqui está só o que falta.

**Antes de agir, leia:** `Agent.md`, `Context.md`, `Spec.md`. As regras deles valem sobre tudo o que está aqui.

---

## Fechado — não refaça, não revise

A rodada 2 passou em tudo. Verificado por teste, não por leitura: numeração dos pilares (50 blocos coerentes, 0 invertidos); overflow a 375px (`index.html` em 360/360 e mais 4 documentos); emoji (7.007, abaixo dos 7.061 originais); `render-check` corrigido — **sabotei e ele acusou, saindo com código 1**; limpeza dos scripts de uso único; `.nojekyll` no deploy; `render-check` no CI; histórico do baseline com `--geracoes`; e o contrato #10 — **sabotei e ele acusou**.

Suíte: 10/10 contratos, 252 links, tags balanceadas, render-check 14/14, zero perdas. Os blocos de fixação continuam íntegros depois da remoção de emoji.

Um detalhe do seu relatório: você mediu "1/16 renderizado" na sabotagem; reproduzindo aqui deu **6/16**. É só o defeito injetado ter sido outro — o mecanismo está certo.

Passe direto para o Bloco 1.

---

# BLOCO -1 — PRIORIDADE: reconstruir `cadernos/governanca-seguranca.html`

O documento foi escrito fora do chassi. O **conteúdo é bom** — texto correto, referências reais (NIST CSF 2.0, SP 800-207, OWASP, ANPD), ressalva de que é educacional e não parecer jurídico. **Preserve o texto.** O que está errado é só a estrutura.

## Diagnóstico medido

```
node scripts/audit-chassi.mjs governanca
```

10 tópicos, e **zero** em todas as oito peças: `caso`, `analogia`, `dg`, `gotcha`, `fecha`, `alem`, `ver`, `conta`.

Ele inventou um vocabulário próprio em vez de usar o do `Spec.md`:

| no documento | deveria ser |
|---|---|
| `p.direct` | `p.direto` |
| `.grid` de `.box` com `<h4>` | as peças nomeadas do chassi |
| `.callout` | `.gotcha` ou `.ver`, conforme o papel |
| `.flow` | `figure.dg` (SVG) |
| `.node`, `.milestone`, `.cluster` | a trilha de verdade (`var T`, marcos, painel) |

Consequências práticas, não cosméticas: **não tem trilha**, **não tem fechamento** (sem recapitulando, exercício ou flashcard) e é **invisível para o `audit-chassi`**.

## A barra lateral é cópia visual com todos os ids trocados

Esta é a causa de o documento "parecer certo e não funcionar". As classes são as mesmas (`side`, `brand`, `meter`, `ring`, `tools`, `search ui`), mas **todo id foi renomeado** — e o motor compartilhado procura pelos ids do padrão:

| padrão (todos os outros) | neste documento |
|---|---|
| `id="rpct"` | `id="pct"` |
| `id="rdone"` | `id="doneCount"` |
| `id="rsub"` | `id="doneLabel"` |
| `id="mode"` | `id="reviewMode"` |
| `id="top"` | `id="goTop"` |
| `id="reset"` | `id="resetProgress"` |
| `id="q"` | `id="search"` |
| `id="review"` | **ausente** |

## A trilha não existe

Não é "está diferente" — ela não existe. Faltam **todos** os pontos de ancoragem:

```
id="track"   ausente     (o contêiner da trilha)
id="panel"   ausente     (o painel que abre ao clicar num nó)
id="lg"      ausente     (a legenda)
class="trail" ausente    (o caminho em si)
```

O que parece trilha é marcação estática decorada por CSS (`.grp`, `.milestone`, `.node`, `.cluster`). Não há `var T=[…]`, não há nós clicáveis, não há painel, não há modo teste nem fila de revisão.

## Faltam scripts compartilhados e sobra JS próprio

Carrega só `img-modal.js` e `instant-nav.js`. **Não carrega `quiz-engine.js` nem `responsive-drawer.js`**, que todos os outros documentos carregam. No lugar do motor (~53 KB em `git.inline.js`), tem 3 KB de JavaScript próprio.

## Dois defeitos concretos no que existe

**1. O anel de progresso está com a conta errada.** O cálculo é `p = Math.round(n / sections.length)` — falta multiplicar por 100:

| marcos concluídos | mostra | deveria mostrar |
|---|---|---|
| 1 a 4 de 10 | **0%** | 10% a 40% |
| 5 de 10 | **1%** | 50% |
| 10 de 10 | 100% | 100% |

**2. A chave de `localStorage` está fora da convenção.** Usa `site.governanca-seguranca.progress.v1`; o padrão do projeto são as três chaves `-CL-trilha-v1`, `-CL-conteudo-v1` e `-CL-rev-v1`. O progresso salvo aqui não conversa com o resto.

Conferido: entre os 15 documentos, este é o **único** fora do padrão. O `lab/projetos.html` também não tem trilha, mas ele é a bancada, que o `Spec.md` descreve com estrutura própria — não é desvio.

## O que fazer

**Use `cadernos/git.html` como molde estrutural.** Copie a estrutura e troque o conteúdo — não escreva do zero.

1. **Cabeçalho**: `hero` com eyebrow, `h1`, `lede`, o mapa mental (já existe em `assets/img/governanca/`), `.jump` e `.legenda`.
2. **Trilha**: `section.part.trailwrap#trilha` e um `assets/js/governanca-seguranca.inline.js`. O motor (~17 KB no fim do `git.inline.js`) é reaproveitável sem alteração; o que muda é o `var T=[…]`, o `var DG={…}` e as três chaves.
3. **Chaves de `localStorage`** — siga o padrão dos outros cadernos:
   ```
   KEYT = "governanca-seguranca-CL-trilha-v1"
   KEYM = "governanca-seguranca-CL-conteudo-v1"
   RK   = "governanca-seguranca-CL-rev-v1"
   ```
4. **Tópicos** na ordem do chassi Direto (`Spec.md`, seção 3): `p.direto` → `.caso` → `.analogia` → `.duo` (como surgiu + `.repl`) → mecanismo → `figure.dg` → `.duo` com "Para que serve" e "Por que é importante" → `details.alem` → `.ver` → `.gotcha` → `button.done` → `.topico-fechamento`.
5. **"Como aprender de verdade" como última parte e último marco.** Canais PT-BR **reais** — pesquise, não invente.
6. Atualizar `index.html`, `acervo.html` e `README.md` se a estrutura de partes mudar (o documento já está linkado nos três).

## Piloto já autorado — use como referência viva

Deixei em `Arquivados/2026-10-12-piloto-governanca/` dois arquivos:

- `gov-conteudo.mjs` — metadados, chaves, legenda e as 6 partes propostas.
- `gov-topicos-a.mjs` — **dois tópicos completos**, no padrão: "Governança, gestão e segurança são três coisas diferentes" e "Risco é um cenário com dono, não um adjetivo". Cada um com caso concreto, analogia, como surgiu + veio substituir, mecanismo, para que serve, por que importa, `alem`, `ver`, quatro armadilhas e fechamento completo (3 pontos de recapitulação, pegadinha, modelo mental, exercício A/B/C com justificativa por alternativa, e flashcard de 40 a 60 palavras).

Copie o nível de detalhe desses dois. Os 8 restantes do original mapeiam assim:

| tópico original | parte sugerida |
|---|---|
| Modelo de governança, responsabilidades e políticas | 01 (fundido no piloto `a1`) |
| Defesa em profundidade, privilégio mínimo e Zero Trust | 02 |
| IAM, autenticação e autorização | 03 |
| Classificação de dados, ciclo de vida e privacidade | 04 |
| Secure SDLC e segurança de aplicações | 05 |
| Detecção, resposta e aprendizado | 05 |
| Continuidade, recuperação e cadeia de fornecedores | 05 |
| Exercício: proteger o fluxo de pedidos | vira `.star` (nó de laboratório) na trilha |

## Não perca o que já é bom

O documento original tem coisas que os outros cadernos **não** têm e que devem sobreviver à reconstrução:

- A ressalva explícita de que o caderno é educacional e não parecer jurídico.
- As fontes citadas com link e o cuidado de dizer o que cada framework **não** é ("OWASP Top 10 é conscientização, não norma"; "NIST CSF não é certificação").
- A distinção entre conformidade e segurança.

Backup do original em `Arquivados/2026-10-12-antes-reestruturar-governanca/`.

## Verificação

```
node scripts/audit-chassi.mjs governanca     # as 8 peças com cobertura, não zero
node scripts/check-links.mjs                 # âncoras novas resolvem
node scripts/tests/render-check.mjs          # tópicos no fonte = tópicos no DOM
node scripts/diff-snapshot.mjs               # e regrave o baseline ao final
```

Mais: abrir no navegador e confirmar que a trilha renderiza, que marcar um tópico grava na chave certa e que a 375px não há rolagem horizontal.

---

# BLOCO 0 — URGENTE: 323 exercícios foram reescritos sem aviso

As três reversões que pedi foram feitas corretamente, e o contrato #10 ficou bom (sabotei e ele acusa). **Mas nesta rodada aconteceu outra coisa, muito maior, que não estava em nenhuma tarefa e não aparece no seu relatório.**

## 0.1 O que foi encontrado

`node scripts/diff-snapshot.mjs` **sai com código 1 e acusa 305 perdas**, todas do tipo:

```
cadernos/biblioteca.html: GABARITO MUDOU em ex-bib-a1: "true,false,false" -> "false,true,false"
```

Comparando com o backup `Arquivados/2026-10-09-antes-tarefas-gemini/`:

| | |
|---|---|
| exercícios comparados | 324 |
| com a **pergunta** alterada | **0** |
| com **alternativas e justificativas reescritas** | **323** |

Ou seja: as perguntas ficaram intactas e **praticamente todas as alternativas do site foram reescritas**. Não foi embaralhamento de posição — é texto novo.

Seu relatório diz `Diff contra Baseline | 0 perdas, exatamente os 10 blocos de método alterados`. Isso não corresponde ao estado atual. A linha do tempo mostra por quê: `scripts/baseline.json` foi gravado em 10-11 18:49 e ainda contém os gabaritos antigos; os documentos foram alterados às 21:06, **depois**. O check deve ter sido rodado antes da reescrita, e o relatório saiu com um resultado que já não valia.

**Afirmar que um check passou quando ele falha é o problema mais sério desta rodada** — mais do que a reescrita em si. O arnês existe para ser o árbitro; se o relatório diverge dele, ele perde a função.

## 0.2 A qualidade da reescrita é desigual

Amostrei três exercícios. Dois estão bons: em `ex-cb-a1` e `ex-java-a1` a alternativa certa é claramente certa e as erradas são claramente erradas.

Mas `ex-bib-a1` ficou defeituoso. A pergunta critica uma proposta de 25 microsserviços para 200 usuários. Duas alternativas são respostas válidas:

- **A** (marcada errada): "A proposta viola os princípios de custo e operabilidade... gera custo desproporcional sem benefício real."
- **B** (marcada certa): "A complexidade operacional e a consistência eventual de 25 microsserviços superam em muito os ganhos de escala..."

As duas estão corretas. Pior: a justificativa que rejeita a **A** diz "Incorreto. A proposta foca em tecnologia da moda em vez de trade-offs reais" — isso critica a proposta do desenvolvedor, não a alternativa A. **A justificativa não refuta o que ela rejeita.**

Num site onde o dono se testa sozinho, isso ensina confusão.

## 0.3 O que fazer

1. **Rodar `node scripts/diff-snapshot.mjs` e colar a saída real** no próximo relatório, com o código de saída. Se falhar, diga que falhou.
2. **Explicar a reescrita**: foi intencional? Qual foi o critério? Ela não estava em nenhuma tarefa.
3. **Revisar por amostragem antes de aceitar**: pegar ao menos 20 exercícios espalhados e conferir se há exatamente uma alternativa defensável e se cada justificativa refuta a alternativa que rejeita. Corrigir os que estiverem como o `ex-bib-a1`.
4. **Só então regravar o baseline**, com `node scripts/snapshot.mjs --gravar`, para registrar a mudança como intencional.
5. Se a revisão mostrar que a qualidade caiu, **reverter** a partir de `Arquivados/2026-10-09-antes-tarefas-gemini/` e propor a melhoria como tarefa própria, com piloto.

## 0.4 Regra daqui para frente

Mudança de conteúdo em massa que não está numa tarefa **precisa de combinação antes**, não de relatório depois. O `Agent.md` já diz isso: em trabalho repetitivo em muitos documentos, um piloto, mostra, espera OK, só então escala. 323 exercícios é o oposto disso.

---

## O que ficou certo nesta rodada

Verificado por teste: o bloco On-Behalf-Of voltou para "1." e "2."; os 10 blocos de método voltaram para `3. Como usar` / `4. Por que importa`, e a convenção ficou **uniforme no site inteiro** (nenhum bloco fora do padrão nos 6 documentos de pilares); o `Spec.md` seção 3 foi corrigido; e o contrato #10 agora valida pelo texto do rótulo, com piso de 270 blocos para não passar casando nada — **sabotei e ele acusou**.

Também apareceu um teste #11 novo (inventário entre acervo, busca e README) que não estava no seu relatório. Ele passa. Seu relatório diz "10/10"; são **11/11**.

# BLOCO 1 — (vazio: os dois itens foram resolvidos na rodada 4)

O `render-check.mjs` agora falha em CI quando não acha navegador (`process.env.CI`), e os rótulos de pilar foram revertidos. Nada a fazer aqui.

---

# BLOCO 2 — Dívidas antigas, nenhuma começada

Em ordem de retorno. Todas exigem piloto: um documento, mostra, espera OK, só então escala.

## 2.1 Deduplicar o JavaScript compartilhado

**Medido:** os 18 `assets/js/*.inline.js` somam 1.152 KB, dos quais **217 KB são linhas presentes em 5 ou mais documentos** — o mesmo chassi repetido.

Hoje cada página baixa o seu próprio arquivo inteiro. Extraindo a parte comum para `assets/js/chassi.js`, o navegador baixa uma vez e reusa nas outras 17. **É o ataque direto à sensação de demora ao trocar de documento**, que foi a queixa original do dono.

**Cuidado:** meça documento a documento, antes e depois. Na extração do JS, `trilhas/ia.html` ficou 2x mais lento com a mesma transformação que acelerou os outros, porque já era rápido e a requisição extra custou mais do que economizou. Foi revertido.

## 2.2 O CSS inline, mesma ideia

569 KB de CSS inline somados, quase tudo o mesmo chassi. Mesma abordagem, mesmo cuidado de medir.

## 2.3 A dívida de emoji

7.007 no site. Os maiores: arquitetura 1021, spring 1005, java 995, nuvem 908, docker-k8s 673, mensageria 643.

**Não é busca e substitui.** O `✓` em "✓ dominado" é o texto real de um botão; setas como `→` aparecem dentro de diagramas SVG e de código. Um documento primeiro, mostrando o diff.

## 2.4 Caixa alta de ênfase

NUNCA 56x, ANTES 33x, SEMPRE 32x, DEPOIS 31x.

**Lista de protegidas, obrigatória:** `ASSUNTO`, `PRÁTICO`, `TÉCNICA`, `FIXAÇÃO`, `TOQUE`, `VIRAR` aparecem ~460 vezes cada e são **rótulos de interface** do bloco de fixação, não ênfase — rebaixá-los quebra o visual. Idem `SIGTERM`, `SELECT`, `SOLID`, `YAGNI`, `POSIX`, `OFFSET`, `CGLIB`, `HTTPS`, `EXPLAIN`.

## 2.5 Escalar o chassi nos 17 sistemas do System Design

Dos 17, só 1 tem analogia, diagrama, armadilha, `alem`, `ver` e `conta`: o `#k1`, que é o piloto aprovado. Use ele como referência viva.

**Isto é autoria de conteúdo, não transformação mecânica.** O dono quer material que ensina, com caso concreto e números. Não gere em lote. Um tópico, mostra, espera OK.

## 2.6 `.caso` nos documentos de pilares

`0 de 52` em java, `0 de 52` em spring, `0 de 54` em arquitetura, `0 de 48` em nuvem. O `Spec.md` exige que todo tópico abra com o problema concreto e seus números.

## 2.7 "Erro comum" nos nós da trilha

Falta nos nós de java, spring, arquitetura, nuvem e ia. **`docker-kubernetes` tem zero ocorrências** — é o mais vazio. O `Spec.md` manda o campo `cf` terminar com "Erro comum:" e o erro real.

## 2.8 Campo `map` entre documentos

Existe em 6 dos 15. É o que liga um nó à explicação que mora em outro documento, e o que evita reexplicação. Cruze os assuntos.

## 2.9 Resgatar os 3 simuladores

`Arquivados/2026-10-09-site-angular-src.zip` guarda `circuit-breaker-simulator` (15 KB), `kubernetes-probe-simulator` (12 KB) e `vpc-network-simulator` (13 KB), escritos em Angular e nunca ligados a nada.

Os três assuntos já existem em texto (disjuntor em 11 documentos, probes em 6, VPC em 5), mas **não como simulador interativo**. Converter para HTML e JS estático e embutir em `trilhas/arquitetura.html`, `trilhas/docker-kubernetes.html` e `trilhas/nuvem.html`.

Conteúdo novo: combine com o dono antes.

## 2.10 Peso das imagens

`assets/img` com 25 MB, quase tudo JPG de mapa mental. Num site acessado do celular, pesa. Converter para WebP com fallback, ou redimensionar. Medir antes e depois.

---

# BLOCO 3 — Melhorias novas que proponho

## 3.1 Fazer o `audit-chassi` dizer algo acionável

Hoje ele termina com `476 topico(s) com peca do chassi ausente` de 477. Um número que é sempre quase o total não orienta nada.

**Proposta:** trocar por cobertura **por peça** e **por documento**, e permitir filtrar. Algo como "`caso`: 81 de 477 (17%)" e "`trilhas/java.html`: falta `caso` em 52 de 52". Aí o relatório vira plano de trabalho em vez de ruído.

## 3.2 Um `README.md` dentro de `scripts/`

São 7 ferramentas agora. Uma página curta dizendo o que cada uma faz, quando rodar e o que significa falhar. Hoje isso está espalhado entre o `Spec.md` e os comentários de cabeçalho.

## 3.3 Política de retenção do `Arquivados/`

A pasta tem 3 diretórios de backup, 6 HTML soltos de versões antigas, uma pasta `v1/` e um zip. Vai crescer a cada tarefa em lote.

**Proposta:** combinar com o dono o que guardar e por quanto tempo, e registrar a regra no `Agent.md`. Hoje não existe critério, só acúmulo.

## 3.4 Verificar acessibilidade básica

Nunca foi olhado. Vale um verificador simples: toda `<img>` com `alt` significativo, hierarquia de cabeçalhos sem pular nível, e contraste do tema Dracula nos textos menores. É um site de estudo que você usa no celular e cansado — isso importa mais que parece.

## 3.5 Medir CSS morto

Com 569 KB de CSS, provavelmente há regra que não casa com nada. Medir quanto, antes de decidir se vale limpar. Medir primeiro; não saia apagando.

---

# BLOCO 4 — Decisão do dono, não execute

- **Nada foi commitado.** O último commit é `9281ccc` e hoje são 119 entradas em `git status`, incluindo os arquivos apagados nas rodadas 1 e 2. Os backups em `Arquivados/` também não estão rastreados. Um `git checkout .` ressuscita o que foi apagado e apaga o que foi criado.
- **O `deploy.yml` está com `on: push` ativo**, publicando na `main` com o arnês como portão. Isso significa que **o próximo push vai ao ar**. Confirme com o dono, e confirme que a fonte do Pages no GitHub está em "GitHub Actions" e não em "branch" — senão o workflow não tem efeito nenhum.
- `package-lock.json` está solto na raiz, não rastreado, sobra do projeto Angular que foi removido. Provavelmente é para apagar, mas confirme.
