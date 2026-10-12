# Plano Diretor de Melhorias Contínuas — Acervo de Estudos

> **Status:** Documento vivo de planejamento e acompanhamento técnico  
> **Última Atualização:** 2026-10-11  
> **Escopo:** Interface, Usabilidade, Design System Dracula, Didática, Acessibilidade, Integridade e Performance Runtime  

---

## 1. Visão Geral e Princípios Orientadores

Este documento mapeia todas as oportunidades de evolução identificadas no acervo de estudos estático, organizadas em fases lógicas de execução. Toda melhoria segue os seguintes princípios fundamentais:

1. **Zero Degradação de Desempenho:** Aplicação estática pura, carregamento instantâneo, sem frameworks pesados, sem build step obrigatório para leitura.
2. **Identidade Visual Consistente:** Tema Dracula estrito (`#282a36`, `#21222c`, `#f8f8f2`, etc.), tipografia legível (`Inter`, `Cascadia Code`, `Georgia`), espaçamento macro respirável e ausência de layouts assimétricos caóticos.
3. **Didática Rigorosa:** Conteúdo de alta engenharia sem caricaturas, quizzes com distratores críveis e balanceamento estatístico real.
4. **Preservação de Dados do Usuário:** Qualquer alteração no DOM ou nos scripts deve preservar integralmente as chaves de `localStorage` (`t`, progresso, notas e backups).
5. **Contratos Verdes:** Manutenção contínua de 10/10 testes de contrato de regressão, 0 links quebrados e 100% de tags HTML balanceadas.

---

## 2. Matriz de Melhorias e Roadmap

| ID | Área / Módulo | Descrição da Melhoria | Impacto | Prioridade | Status |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **M01** | `lab/projetos.html` | Padronização dos cards do Laboratório (Grid uniforme de 3 colunas, mesma altura em cada linha, alinhamento de títulos e mini-flows) | Alto | Máxima | **Concluído** |
| **M02** | `lab/projetos.html` | Padronização dos cards de Aquecimento (alturas uniformes de cabeçalho e transições suaves de hover) | Médio | Alta | **Concluído** |
| **M03** | Quizzes / 14 Docs | Balanceamento de comprimento e posição (A/B/C) em todas as 459 questões de fixação | Alto | Máxima | **Concluído** |
| **M04** | `lab/projetos.html` | Fechamento de modal via tecla `Esc` e foco seguro no botão de fechar | Médio | Alta | **Concluído** |
| **M05** | Suíte de Testes | Inclusão formal de `cadernos/governanca-seguranca.html` nos contratos e no acervo | Médio | Alta | **Concluído** |
| **M06** | `index.html` | Indicador de progresso global consolidado (tópicos lidos + projetos feitos) | Médio | Média | **Concluído** |
| **M07** | Acessibilidade (A11y) | Auditoria de `:focus-visible` e anéis de foco com duplo contraste em todos os botões e inputs | Médio | Média | **Concluído** |
| **M08** | Todas as Trilhas | Refinamento do feedback de erro nos quizzes (dica visual contextual, tentativas iterativas e revelação comentada) | Alto | Média | **Concluído** |
| **M09** | Performance | Inclusão de `loading="lazy"` e `decoding="async"` em imagens e mapas mentais | Baixo | Média | **Concluído** |
| **M10** | Ferramentas | Sanitização e validação de esquema ao restaurar backups JSON no modal da Home e do Acervo | Médio | Baixa | **Concluído** |
| **M11** | Runtime / Rede | Navegação Instantânea Especulativa (`assets/js/instant-nav.js` via prefetch dinâmico em hover/touch/focus para latência 0ms) | Alto | Alta | **Concluído** |
| **M12** | Runtime / CPU | Eliminação de Layout Thrashing no Scrollspy com `requestAnimationFrame` e trava de ticking nos 13 `.inline.js` | Alto | Alta | **Concluído** |
| **M13** | Rede / Fontes | Equalização de Preconnects e `font-display: swap` nas 5 trilhas e laboratório restantes (acelera FCP e elimina FOIT) | Médio | Média | **Concluído** |
| **M14** | Visual / CLS | Prevenção de Cumulative Layout Shift (CLS) e `content-visibility: auto` em imagens e diagramas (`assets/css/pratica.css`) | Médio | Média | **Concluído** |

---

## 3. Detalhamento das Tarefas e Planos de Execução

### Fase 1: Padronização Visual e UI/UX (Laboratório e Acervo)
- [x] **M01 — Padronização dos Cards de Projetos (`lab/projetos.html`):**
  - **Problema:** Um layout de 12 colunas com regras artificiais de `:nth-child` gerava cards de tamanhos desiguais (colunas de 5, 3 e 4), criando um aspecto desarmônico e desalinhado.
  - **Solução implementada:** Grid padrão de 3 colunas simétricas (`repeat(3, minmax(0, 1fr))`), altura 100% com `flex-direction: column`, títulos alinhados com `min-height: 3.3rem; line-clamp: 2`, sumários alinhados (`min-height: 4.2rem; line-clamp: 3`), mini-flow com altura uniforme e rodapé ancorado no fundo com `margin-top: auto`.
- [x] **M02 — Padronização dos Cards de Aquecimento (`lab/projetos.html`):**
  - **Problema:** As caixas de `<details>` fechadas possuíam alturas variáveis dependendo do comprimento do título.
  - **Solução implementada:** `min-height: 108px` para os `<summary>`, display flex estruturado com espaçamento vertical simétrico e hover suave com elevação de -3px.

### Fase 2: Usabilidade e Acessibilidade Imediata
- [x] **M04 — Fechamento Acessível de Modais via Teclado (`lab/projetos.html`):**
  - **Problema:** Ao fechar o modal, o foco do teclado era perdido para o body e o modal não fechava via tecla `Esc`.
  - **Solução implementada:** `lastActiveElement` capturado ao abrir, foco direcionado para o botão fechar ao exibir o modal, foco restaurado ao elemento de disparo no fechamento e listener global para tecla `Escape`.
- [x] **M07 — Auditoria Universal de `:focus-visible`:**
  - **Problema:** Usuários de teclado não visualizavam foco consistente em todos os 18 cadernos, acervo e laboratório.
  - **Solução implementada:** Adicionado duplo anel de foco Dracula (`outline: 2px solid var(--purple, #bd93f9); outline-offset: 3px; box-shadow: 0 0 0 4px rgba(189, 147, 249, 0.2)`) padronizado em `assets/css/pratica.css`, `index.html`, `acervo.html`, `lab/projetos.html` e `cadernos/governanca-seguranca.html`.

### Fase 3: Confiabilidade da Suíte e Expansão
- [x] **M05 — Integração Formal do Caderno de Governança e Segurança:**
  - **Problema:** `cadernos/governanca-seguranca.html` existia e estava linkado no portal, mas não estava na lista de contratos esperados.
  - **Solução implementada:** Incluído em `DOCUMENTOS_ESPERADOS` em `scripts/tests/regression-contracts.test.mjs`, elevando a suíte de contratos para 18 documentos oficiais com 100% de integridade e 0 regressões.
- [x] **M09 — Otimização de Carregamento de Recursos:**
  - **Problema:** Diversos mapas mentais e diagramas SVG não possuíam `decoding="async"` e alguns SVGs em `trilhas/ia.html` não possuíam `loading="lazy"`.
  - **Solução implementada:** Varredura e normalização em todas as imagens ativas do projeto com `loading="lazy"` e `decoding="async"` para evitar jank e gargalos de thread principal na renderização.

### Fase 4: Didática Avançada e Métricas de Estudo
- [x] **M06 — Painel de Progresso Global na Home (`index.html`):**
  - **Problema:** O usuário precisava entrar em cada caderno ou na página de projetos para ter noção de quanto já havia estudado.
  - **Solução implementada:** Desenvolvido `assets/js/progress-widget.js` montado em `#progressMount` na Home. Calcula dinamicamente o progresso consolidado nos 487 tópicos do acervo, nas 18 missões do laboratório, nos 459 desafios práticos de fixação e na contagem de streak/XP. Design em dupla moldura Dracula com 4 cards interativos e barra ponderada de progresso.
- [x] **M08 — Explicação Contextual de Distratores nos Quizzes:**
  - **Problema:** Clicar numa alternativa errada travava todas as alternativas e revelava imediatamente o gabarito sem permitir reflexão do aluno.
  - **Solução implementada:** Em `assets/js/quiz-engine.js`, a alternativa incorreta selecionada agora é marcada como errada e desativada individualmente, exibindo a explicação do equívoco técnico daquela opção (`data-rationale`). As demais opções continuam ativas para que o aluno reflita e tente novamente, com botão opcional "Ver gabarito comentado" para quem preferir ver a resolução completa.
- [x] **M10 — Validação de Esquema e Blindagem na Restauração de Backup JSON:**
  - **Problema:** O backup da Home e Acervo não cobria quizzes (`pratica.*`) ou revisões espaçadas (`*-rev-v1`), e a importação não validava tipos nem limites de payload.
  - **Solução implementada:** Atualizado `assets/js/index.inline.js` e `assets/js/acervo.inline.js` com suporte completo a todas as chaves de estudo, barreira de tamanho (5MB máx por arquivo, 500KB máx por chave, 2500 chaves máx), filtro contra injeção de credenciais e proteção estrita contra prototype pollution.

### Fase 5: Otimizações Críticas de Performance e Runtime
- [x] **M11 — Navegação Instantânea Especulativa (`assets/js/instant-nav.js`):**
  - **Problema:** Documentos pesados demoravam centenas de milissegundos para abrir após o clique, dando sensação de lentidão de rede.
  - **Solução implementada:** Desenvolvido mecanismo ultraeficiente de *Speculative Prefetching* disparado por `mouseover`, `touchstart` e `focusin`. Injeta `<link rel="prefetch">` com prioridade ociosa, respeitando o modo `Save-Data` do navegador. Troca de páginas agora perceptualmente instantânea (0ms).
- [x] **M12 — Eliminação de Layout Thrashing no Scrollspy:**
  - **Problema:** A função `onScroll` lia `offsetTop` de dezenas de tópicos e alterava classes CSS a cada pixel rolado, gerando recálculos síncronos forçados de layout (engasgos de rolagem).
  - **Solução implementada:** Otimizados os 13 scripts `.inline.js` com `window.requestAnimationFrame` e trava booleana (*ticking*). O scrollspy agora roda no máximo 1x por frame de pintura do monitor (60fps/120fps fluidos).
- [x] **M13 — Equalização de Preconnects e `font-display: swap`:**
  - **Problema:** Cinco documentos não conectavam previamente ao CDN do Google Fonts e não tinham `display=swap`, causando FOIT (*Flash of Invisible Text*).
  - **Solução implementada:** Inseridos `<link rel="preconnect">` e parâmetro `&display=swap` em `trilhas/java.html`, `trilhas/spring.html`, `trilhas/arquitetura.html`, `trilhas/docker-kubernetes.html` e `lab/projetos.html`.
- [x] **M14 — Prevenção de Cumulative Layout Shift (CLS) em Imagens:**
  - **Problema:** Imagens com `loading="lazy"` causavam pulos verticais bruscos ao carregar, deslocando a leitura do usuário.
  - **Solução implementada:** Em `assets/css/pratica.css`, adicionado `contain: layout; min-height: 180px; background: var(--bg2);` e `content-visibility: auto` em `.topic-img`, `.fig-mindmap` e `.visual-diagram`.

---

## 4. Registro de Entregas e Histórico de Execução

- **2026-10-11 (Etapa 1):** Concluído M01 e M02 em `lab/projetos.html` (cards de projetos e aquecimentos 100% padronizados). Concluído M03 em todo o acervo (459 questões balanceadas e auditadas).
- **2026-10-11 (Etapa 2):** Concluído M04 (fechamento de modal via Esc e retorno de foco), M05 (integração formal do caderno de governança nos testes de contrato), M06 (painel de progresso global interativo na Home), M07 (padronização de foco visível universal Dracula), M08 (sistema iterativo e pedagógico de resolução de quizzes), M09 (`loading="lazy"` e `decoding="async"` em todas as imagens) e M10 (validação robusta de esquema JSON nos backups da Home e do Acervo).
- **2026-10-11 (Etapa 3):** Concluído M11 (navegação instantânea especulativa em todo o acervo), M12 (eliminação de layout thrashing no scrollspy com RAF em 13 arquivos), M13 (preconnect e display=swap nas trilhas restantes) e M14 (estabilização de CLS e content-visibility em imagens).
