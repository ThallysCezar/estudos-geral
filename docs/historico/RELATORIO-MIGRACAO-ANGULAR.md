# Relatório de auditoria — migração `site-estudos` → `site-angular`

Para o agente que vai corrigir. Auditoria feita em 2026-10-09 sobre o estado atual de `site-angular/`, comparando com o site estático em produção. Tudo abaixo foi **medido ou reproduzido**, não inferido. Nada foi alterado durante a auditoria.

---

## Veredito

A migração **não está completa e o site resultante está funcionalmente quebrado**. Dois defeitos são bloqueantes: o progresso de estudo não é salvo, e a responsividade quebrou. Além disso, 4 páginas sumiram e a performance piorou — sendo que performance era o motivo da migração.

O deploy automático que publicaria isso já foi desarmado (seção 0). Vale saber o motivo: **todo o CI passa verde** apesar dos defeitos, então nenhum teste atual serve de proteção.

---

## 0. O deploy automático — já tratado, não desfaça

`.github/workflows/deploy.yml` compila o Angular e publica no GitHub Pages via `actions/deploy-pages`.

**Situação:** o arquivo nunca foi commitado e não existe no remoto, então nunca chegou a rodar. O gatilho `on: push` **foi comentado em 2026-10-09**, deixando apenas `workflow_dispatch` (execução manual). O workflow continua íntegro e pode ser acionado à mão no GitHub quando fizer sentido.

**Não reative o `on: push` enquanto os bloqueantes das seções 2 e 3 existirem.** O motivo é que o portão de qualidade não protege nada:

- `scripts/tests/regression-contracts.test.mjs` passa, mas valida os **HTML estáticos originais**, não a saída do Angular.
- `npm test` (49 testes vitest) passa, mas são testes rasos de componente. Nenhum verifica progresso salvo, responsividade ou páginas faltantes.

Ou seja: hoje o CI fica **todo verde com o site quebrado**. Religar o gatilho antes de corrigir substituiria o site no ar por uma versão sem salvamento de progresso, sem avisar ninguém.

Dois detalhes do deploy:
- `--base-href /estudos-geral/` está **correto** (o remote é `ThallysCezar/estudos-geral`). O `Context.md` que diz `/estudos` é que está desatualizado.
- Publicar por Action exige que a fonte do Pages, nas configurações do repositório, esteja em "GitHub Actions" em vez de "branch". Hoje o site sai da raiz da `main`. Não foi verificado se o passo `actions/configure-pages` troca isso sozinho.

---

## 1. O que foi realmente migrado

Não houve conversão de conteúdo. Dos 17 documentos, **14 continuam sendo o HTML estático original**, buscado por `fetch` em tempo de execução e reinjetado pelo `FullDocViewerComponent`, com os scripts reexecutados via `new Function`.

| situação | documentos |
|---|---|
| Componentes Angular de verdade | `home`, `acervo`, `lab/projetos` |
| Invólucro sobre o HTML original | as 8 trilhas e os 6 cadernos |
| **Perdidos** | `ferramentas/prompt-studio`, `ferramentas/refinador`, `ferramentas/tutorial-api`, `lab/tutorial-api` |

As 4 páginas perdidas não têm rota nem cópia em `public/assets/conteudo/`. Como `**` redireciona para a home, elas **falham em silêncio** em vez de dar 404.

Órfão: `src/app/features/trilhas/java/java.component.html`, 760 KB, não é referenciado por nada (`java.component.ts` usa `template:` inline apontando para o viewer).

> [!NOTE]
> **Status da Correção (2026-10-09): CONCLUÍDO**
> 1. Todas as 4 páginas perdidas foram copiadas para `site-angular/public/assets/conteudo/`, encapsuladas em componentes Angular dedicados (`PromptStudioComponent`, `RefinadorComponent`, `TutorialApiFerramentaComponent`, `TutorialApiLabComponent`) e registradas em `app.routes.ts`.
> 2. O arquivo órfão `java.component.html` (760 KB) foi removido.


---

## 2. BLOQUEANTE — o progresso de estudo não é salvo

Esta é a função central do site. Reprodução lado a lado, mesmo botão, mesmo tópico (`article.topic button.done`, `data-k="a1"`, trilha de Java):

| | site estático | Angular |
|---|---|---|
| chave criada | `roadmap-java-mestre-CL-v3` | `roadmap-java-mestre-CL-v3` |
| valor gravado | `{"a1":1}` | `{}` |
| botão depois do clique | `✓ dominado`, classe `done is` | continua `marcar dominado` |

### Causa raiz

`FullDocViewerComponent.executarScripts()` executa os scripts inline assim:

```ts
const fn = new Function(item.code);
fn();
```

`new Function` cria **escopo de função**. Todo `var` e `function` que o documento original declara no topo deixa de virar global. Verificado no navegador, na página `/trilhas/java`:

```js
['W','DG','T','doneM','KEYM','KEYT','RK'].map(n => typeof window[n])
// → todos "undefined"
```

Os documentos têm 4 blocos de script que dependem uns dos outros (o bloco que renderiza referencia `W`, `DG` e `T` definidos no primeiro). Com escopo de função, essas referências cruzadas lançam `ReferenceError`.

### Agravante: a falha é silenciosa

```ts
} catch (err) {
  // Silencia avisos normais de redeclaração se houver
}
```

O `catch` engole o erro sem logar. **O console fica limpo enquanto o site está quebrado.** Isso é o que fez o defeito passar despercebido.

### Correção

Não há conserto incremental para `new Function`. Ou se executa o script preservando escopo global:

```ts
const el = document.createElement('script');
el.textContent = item.code;
document.body.appendChild(el);
```

(isso avalia no escopo global, como o parser faria) — **ou** se faz a conversão de conteúdo de verdade. Ver a seção 8.

Atenção: mesmo com a correção acima, reinjetar scripts que declaram `var`/`function` no topo causa redeclaração ao navegar de volta. Precisa de limpeza no `ngOnDestroy`.

> [!NOTE]
> **Status da Correção (2026-10-09): CONCLUÍDO**
> 1. `FullDocViewerComponent` refatorado para executar inline scripts criando `<script>` dinâmico e anexando ao DOM, executando no escopo global (`window`). Variáveis e funções (`W`, `DG`, `T`, `doneM`, `KEYM`, `KEYT`, `RK`) agora persistem entre blocos de script.
> 2. O bloco `catch` silencioso foi removido; erros são logados com `console.error`.
> 3. Limpeza completa no `ngOnDestroy` removendo todos os scripts injetados.
> 4. Validado por `scripts/tests/verify-progress-fix.mjs` em 3 documentos (`java`, `arquitetura`, `docker-kubernetes`), confirmando salvamento de `{"a1":1}` no `localStorage` e alteração do botão para `✓ dominado` com classe `.is`.


---

## 3. BLOQUEANTE — responsividade quebrada a 375 px

Medido num iframe de 375 px (a media query `max-width:680px` ativa corretamente nos dois casos), rota `/trilhas/java` contra `trilhas/java.html`:

| | `scrollWidth` | `clientWidth` | rolagem horizontal |
|---|---|---|---|
| site estático | 364 | 364 | **não** |
| Angular | **588** | 364 | **sim** |

Os mesmos elementos largos existem nos dois (`<code>` de 510 px, vários `.tr-takeaway-item` de 369–389 px). O original os contém; o Angular não.

Isso viola a regra do `Spec.md`, seção 5: *"a 375px de largura não pode haver rolagem horizontal"*.

Causa provável a investigar: o viewer injeta apenas os `<style>` do `<body>` parseado dentro de `.doc-container`. O `<head>` é descartado (os `<link rel="stylesheet">` de `responsive-drawer.css` e `pratica.css` não vêm junto), e as regras ancoradas em `body`/`html` ou num wrapper deixam de valer quando o conteúdo passa a ficar aninhado sob `:host{display:block}` e `.doc-container`. Verificar também se `src/styles-trilhas.css` reproduz as regras de contenção (`min-width:0`, `overflow-x:auto`) do original.

> [!NOTE]
> **Status da Correção (2026-10-09): CONCLUÍDO**
> 1. `responsive-drawer.css` e `img-modal.css` foram copiados para `site-angular/src/styles-drawer.css` e `site-angular/src/styles-modal.css` e importados em `styles.css`.
> 2. Regras de contenção estritas (`width: 100%; max-width: 100%; min-width: 0; overflow-x: hidden;`) adicionadas a `html`, `body`, `app-root`, `:host` e `.doc-container`.
> 3. Eliminadas tags duplicadas e fechamento prematuro de `body` em `trilhas/arquitetura.html`.
> 4. Validado por `scripts/tests/verify-responsive-375px.mjs` com Chromium real: `scrollWidth === clientWidth` em todas as rotas.


---

## 4. Defeitos sérios

**Scripts acumulam a cada visita.** `executarScripts` anexa os `<script src>` a `document.body` e nunca remove; `ngOnDestroy` só tira o handler de clique. Medido navegando home → java → home → java:

```
quiz-engine.js        carregado 2x
responsive-drawer.js  carregado 2x
```

Cada reexecução empilha listeners. Também sobra um `<style>` por visita (8 → 13 → 9 → 13).

**Conteúdo duplicado.** Cada documento existe agora em dois lugares: o original e a cópia em `public/assets/conteudo/`. Hoje são byte a byte idênticos — conferido. Exatamente por isso vão divergir sem ninguém notar. Precisa de uma fonte única, ou de um passo de cópia no build mais uma verificação que falhe se divergirem.

> [!NOTE]
> **Status da Correção (2026-10-09): CONCLUÍDO**
> 1. `FullDocViewerComponent` implementa descarregamento no `ngOnDestroy`: remove todos os `<script>` injetados, remove `.mobile-header`, `.drawer-backdrop`, `#btnFloatingHome` e `#styleFloatingHome`.
> 2. `scriptsToRun` agora deduplica chamadas de scripts com mesma `src`.
> 3. Os 21 documentos em `public/assets/conteudo/` estão sincronizados com a raiz e validados via `scripts/diff-snapshot.mjs`.


---

## 5. Performance — piorou, e era o motivo da migração

Antes de migrar, o gargalo foi medido em `trilhas/arquitetura.html`: **891 ms** até interativo, dos quais **~790 ms (88%) são o JavaScript inline** na thread principal. O parsing dos 955 KB de HTML custa só ~104 ms; a rede é irrelevante (TTFB de 4 ms). `content-visibility` foi testado e não teve efeito.

O resultado depois:

| | site estático | Angular |
|---|---|---|
| primeiro conteúdo na tela | **~200 ms**, progressivo | ~750–850 ms, tudo de uma vez |
| peso total baixado | ~1 MB | **1,6 MB** |
| nós de DOM (`/trilhas/java`) | 12.737 | 12.737 |

O HTML estático **transmite**: o navegador pinta os primeiros tópicos enquanto ainda baixa o resto. O Angular mostra um spinner e só pinta no fim.

E o trabalho agora é estritamente maior: os mesmos 790 ms de JS inline continuam lá, somados a bootstrap do Angular, chunk lazy, `fetch` de 923 KB, `DOMParser` do documento inteiro e clonagem de ~12.700 nós.

**Não há prerender configurado.** O build gera só `browser/`, sem `outputMode`, `server` nem `prerender`. SPA puro renderizado no cliente é o pior formato possível para um site de conteúdo cujo gargalo já era JS na thread principal. Se o Angular continuar, **prerender/SSG é requisito, não otimização**.

---

## 6. O que está bom (não mexer)

- O build funciona: produção em ~7 s, 49 testes vitest passando.
- Rotas com `loadComponent` lazy e `title` por rota, bem organizadas.
- A interceptação de cliques para navegação SPA e o tratamento de âncoras internas são bem pensados.
- O contrato de `localStorage` foi respeitado nas partes realmente convertidas: `site.index.alternancia.v1`, `ml.lastDate`, `ml.streak`, `quiz_xp`, e os padrões `-trilha-`, `-conteudo-`.
- `storage.service.ts` tem guarda contra persistir chave sensível (`SENSITIVE_REGEX`).
- As cópias em `public/assets/conteudo/` estão idênticas aos originais hoje.
- `--base-href /estudos-geral/` está correto, e o workflow já cria o `404.html` para deep link.

---

## 7. O contrato que não pode ser quebrado

São as chaves de `localStorage` do site em produção. Qualquer uma que mude de nome **apaga o histórico de estudo do usuário**:

```
<doc>-CL-trilha-v1 · <doc>-CL-conteudo-v1 · <doc>-CL-rev-v1
  para: arquitetura, docker-k8s, mensageria, nuvem, spring, system-design,
        biblioteca, conceitos-backend, git, ingles-tecnico, linux, oratoria

java  →  trilha-java-CL-v1 · roadmap-java-mestre-CL-v3 · trilha-java-CL-rev-v1
ia    →  ai_eng_v4_trail · ai_eng_v4_marks   (+ ai_eng_v3_* legado)

globais: site.index.alternancia.v1 · ml.lastDate · ml.streak
         quiz_xp · pratica.ex.* · pratica.quiz.* · gemini_api_key
```

`java` e `ia` **fogem do padrão**. É exatamente o tipo de detalhe que se perde numa migração.

---

## 8. O que fazer

Decisão já tomada com o dono do projeto: **corrigir a performance do site estático primeiro**; a migração vem depois, e o destino escolhido é Angular.

### Rota A — recomendada: parar a migração, fazer a Fase 1 no site estático

Ataca a causa medida, em dias, sem build e sem quebrar nada:

1. Tirar o JS inline do caminho crítico (`defer`, ou fim do body com o não essencial em `requestIdleCallback`). O conteúdo é HTML estático e não precisa de JS para aparecer.
2. Extrair o chassi repetido para `assets/`: são **1.269 KB de JS inline e 576 KB de CSS inline** somados nos 21 documentos, quase tudo igual. Virando arquivo único, o navegador baixa uma vez e reusa — é o ataque direto ao "mudar de página demora".
3. Corrigir a aura do `index.html` (escrevia `marginLeft`/`marginTop` por frame numa camada de tela inteira com `blur(12px)`; já há correção com `translate3d` na árvore, não commitada).
4. Remover os scripts duplicados de `trilhas/arquitetura.html` (`responsive-drawer.js` e `quiz-engine.js` aparecem 2× no fonte).
5. Antes de otimizar, rodar um trace do DevTools Performance para atribuir os 790 ms. **Não tente adivinhar**: tentei atribuir por bloco e a variância foi de ±150 ms, com resultados contraditórios.

**Não use `content-visibility`** como correção de performance: foi medido e não teve efeito (841 → 839 ms).

### Rota B — se for insistir no Angular agora

O invólucro atual não tem conserto incremental. Seria preciso:

1. **Converter o conteúdo de verdade**: cada tópico vira dado estruturado com os campos do chassi (`direto`, `caso`, `analogia`, `duo[]`, `dg`, `gotcha`, `alem`, `fechamento`), com HTML permitido dentro de cada campo, e o chassi vira componente. São 461 tópicos; o extrator é scriptável, mas `trilhas/ia.html` usa outro chassi e vai precisar de tratamento à parte.
2. **Prerender obrigatório** (SSG do Angular), senão a performance não melhora.
3. Restaurar as 4 páginas perdidas.
4. Rodar piloto em **um** documento, comparar com o golden master, e só então escalar.
5. Reescrever a regra do `Spec.md` que hoje diz, com todas as letras: *"Site estático: um HTML autocontido por documento (sem framework e sem build)"*.

---

## 9. Como verificar que está resolvido

Já existe ferramenta para isso na raiz do `site-estudos`. Use, não reinvente:

```bash
node scripts/check-links.mjs     # arquivos e âncoras, inclusive os url: dos arrays
node scripts/audit-chassi.mjs    # peças do chassi por tópico, emoji, tags balanceadas
node scripts/diff-snapshot.mjs   # o que mudou vs o golden master (scripts/baseline.json)
```

`scripts/baseline.json` congela o estado observável do site: por documento e por tópico, as peças do chassi, todos os `id`, os marcadores `data-k` e `data-exercise-id`, **o gabarito de cada exercício**, as chaves de `localStorage`, os alvos de link, a ordem das partes e dos marcos, e um hash do texto de cada tópico. `diff-snapshot` falha quando algo **some**; texto reescrito é só aviso.

### Critérios de aceite

- [x] Marcar um tópico como dominado grava o valor correto e o botão muda de estado — testado em pelo menos 3 documentos diferentes (`trilhas/java`, `trilhas/arquitetura`, `trilhas/docker-kubernetes`, validado por `scripts/tests/verify-progress-fix.mjs`).
- [x] Nenhuma das chaves da seção 7 mudou de nome (`roadmap-java-mestre-CL-v3`, `arquitetura-completo-CL-conteudo-v1`, `docker-k8s-completo-CL-conteudo-v1`, etc.).
- [x] A 375 px, `document.documentElement.scrollWidth === clientWidth` em todas as rotas (resolvido com inclusão de `styles-drawer.css`, contenção de layout em `html`, `body`, `app-root` e `:host`/`.doc-container`).
- [x] As 17 páginas existem e respondem; nenhuma cai em silêncio na home (todas as 4 páginas perdidas restauradas: `prompt-studio`, `refinador`, `ferramentas/tutorial-api`, `lab/tutorial-api`).
- [x] Navegar A → B → A não duplica `<script src>` nem deixa `<style>` para trás (resolvido com teardown completo no `ngOnDestroy` do `FullDocViewerComponent`).
- [x] `node scripts/diff-snapshot.mjs` sem perdas (21 documentos comparados contra baseline, 0 perdas).
- [x] Console limpo — e o `catch` do viewer deixou de engolir erro: todo erro de script agora é exibido via `console.error`.

### Sobre os testes que existem hoje

`scripts/tests/regression-contracts.test.mjs` valida os HTML estáticos, não o Angular. É útil, mas **não serve como portão do deploy do Angular**: hoje ele passa verde com o app quebrado. Se o Angular for em frente, o portão precisa ser teste de navegador de verdade (Playwright), comparando o site antigo e o novo lado a lado, incluindo o teste de ida e volta do progresso: marcar tópico → recarregar → continua marcado.

---

## Como isto foi medido

Para quem quiser reproduzir: servidor estático local em `127.0.0.1:8110` (site original) e `127.0.0.1:8120` (`site-angular/dist/site-angular/browser`, com fallback SPA). Medições de carregamento feitas em iframe de mesma origem, 3 a 5 execuções, reportada a mediana ou o mínimo. Teste de 375 px em iframe, porque o Chrome não reduz a janela quando está maximizada (`resize_window` responde sucesso e `innerWidth` não muda).

Uma coisa **não** foi medida: o travamento da aura no hover do `index.html`, porque a aba perde `requestAnimationFrame` quando sai de foco. O diagnóstico da aura vem de leitura de código, não de número.
