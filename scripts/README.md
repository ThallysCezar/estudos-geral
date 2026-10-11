# Arnês de Ferramentas e Testes (`scripts/`)

Guia de referência das ferramentas de qualidade, auditoria e testes automatizados do `site-estudos`.

---

## Sumário Rápido

| Ferramenta | Comando | Quando Rodar | O Que Significa Falhar (Exit 1) |
|---|---|---|---|
| **Contratos de Regressão** | `node --test scripts/tests/regression-contracts.test.mjs` | Antes de qualquer alteração de layout, JS, chassi ou rotas; no CI | Violação de contrato Dracula, Viewport, sintaxe, Ctrl+K, SEM, backup ou numeração dos pilares |
| **Integridade de Links** | `node scripts/check-links.mjs` | Ao criar/editar links, âncoras, caminhos de imagens ou scripts; no CI | Link quebrado (`href`), script/imagem ausente (`src`) ou âncora inexistente (`#id`) |
| **Balanço Estrutural** | `node scripts/check-tags.mjs` | Após qualquer edição manual ou em lote no HTML; no CI | Desbalanceamento entre tags de abertura e fechamento (`article`, `section`, `div`, etc.) |
| **Auditoria do Chassi** | `node scripts/audit-chassi.mjs` | Para medir cobertura das peças pedagógicas ou verificar tags por tópico; no CI | Tópico com tags estruturais quebradas (com `--resumo` ou sem flags) |
| **Diff contra Baseline** | `node scripts/diff-snapshot.mjs` | Após refatorações para garantir que nenhum tópico ou dado foi perdido; no CI | Conteúdo encolheu, tópicos sumiram ou regressão de metadados em relação ao baseline |
| **Geração de Snapshot** | `node scripts/snapshot.mjs` | Ao concluir uma rodada estável e intencional de novos tópicos/conteúdo | Arquivo de baseline não pôde ser gerado ou salvo |
| **Renderização Headless** | `node scripts/tests/render-check.mjs` | Após alterações de marcação para validar renderização real no DOM; no CI | DOM renderizado tem menos tópicos que o fonte (ex: `<script>` não escapado engoliu HTML) |
| **Extração de JS** | `node scripts/extrai-js-inline.mjs` | Quando scripts inline precisarem ser movidos para `assets/js/*.inline.js` | Erro de I/O ou HTML malformado sem bloco de script |

---

## Guia Detalhado de Cada Ferramenta

### 1. `scripts/tests/regression-contracts.test.mjs`
- **O que faz:** Executa os 10 contratos invioláveis de integridade do projeto usando o runner nativo `node:test`:
  1. Existência e tamanho mínimo dos 17 documentos fundamentais.
  2. Tema Dracula estrito (`#282a36`, `#f8f8f2`, etc.) e viewport responsivo.
  3. Ausência de realce de sintaxe em cascata ou corrupção de tags como texto.
  4. Contrato da Paleta de Comandos (`Ctrl+K` / `PALETTE_DATA`) em `index.html`.
  5. Contrato do Cronograma Semanal (`SEM`) em `index.html`.
  6. Contrato de Segurança de Backup e Restauração (`localStorage`).
  7. Integridade de links e âncoras locais em todos os documentos.
  8. Balanço de tags de bloco estruturais por tópico.
  9. Existência de elementos DOM de interação essenciais em `index.html`.
  10. Contrato de correspondência e numeração dos pilares do chassi (site-wide e seção de método).
- **Quando rodar:** Obrigatoriamente antes de concluir qualquer tarefa ou PR, e automaticamente no GitHub Actions.
- **Falha (Exit 1):** Um ou mais contratos foram violados. O log detalha o documento, linha e valor esperado vs recebido.

### 2. `scripts/check-links.mjs`
- **O que faz:** Varre todos os arquivos `.html` em busca de `<a href>`, `<link href>`, `<script src>` e `<img src>`. Valida a existência dos alvos locais e a presença das âncoras `#hash` no documento de destino.
- **Quando rodar:** Sempre que renomear arquivos, alterar IDs ou referenciar novas páginas.
- **Falha (Exit 1):** Caminho relativo apontando para arquivo inexistente ou âncora `#id` que não existe no destino.

### 3. `scripts/check-tags.mjs`
- **O que faz:** Verificador cirúrgico de paridade de tags estruturais (`article`, `section`, `div`, `details`, `figure`).
- **Quando rodar:** Após qualquer edição em documentos HTML para evitar que uma tag não fechada quebre o layout responsivo.
- **Falha (Exit 1):** Algum documento possui contagem desigual entre abertura e fechamento de qualquer uma das tags monitoradas.

### 4. `scripts/audit-chassi.mjs`
- **O que faz:** Analisa a aderência dos tópicos ao chassi pedagógico definido em `Spec.md`:
  - Peças monitoradas: `caso`, `analogia`, `dg`, `gotcha`, `fecha`, `alem`, `ver`, `conta`.
  - Emite:
    1. Tabela por tópico (com opção de filtro por documento ou peça).
    2. Cobertura global por peça com contagem e porcentagem.
    3. Matriz percentual por documento.
    4. Diagnóstico de lacunas críticas para planejamento de conteúdo.
    5. Verificação de tags desbalanceadas dentro de cada `<article class="topic">`.
- **Modos de uso:**
  - `node scripts/audit-chassi.mjs` (Auditoria completa de todos os tópicos e matriz)
  - `node scripts/audit-chassi.mjs --resumo` (Apenas matriz e sumário global, sem lista linha a linha)
  - `node scripts/audit-chassi.mjs java` (Filtra apenas `trilhas/java.html`)
  - `node scripts/audit-chassi.mjs --peca caso --resumo` (Foco específico na peça `caso`)
- **Falha (Exit 1):** Encontrado tópico com tags estruturais desbalanceadas no corpo do artigo.

### 5. `scripts/diff-snapshot.mjs`
- **O que faz:** Extrai os tópicos atuais e compara contra `scripts/baseline.json`. Detecta remoções inadvertidas de tópicos, encolhimento de contagem de palavras ou perda de seções.
- **Flags úteis:**
  - `node scripts/diff-snapshot.mjs` (Verificação padrão contra o baseline)
  - `node scripts/diff-snapshot.mjs --atualizar` (Atualiza `baseline.json` com o estado atual, arquivando o anterior como `baseline.anterior.json`)
  - `node scripts/diff-snapshot.mjs --geracoes` (Exibe histórico das gerações salvas)
- **Falha (Exit 1):** Houve regressão não intencional de conteúdo em relação ao baseline salvo.

### 6. `scripts/snapshot.mjs`
- **O que faz:** Gera um dump JSON estruturado contendo a lista completa de tópicos, seções e metadados de todas as trilhas e cadernos. Utilizado como base de dados para o `diff-snapshot.mjs`.
- **Quando rodar:** Quando novas seções forem aprovadas e validadas para estabelecer um novo ponto de referência.

### 7. `scripts/tests/render-check.mjs`
- **O que faz:** Executa um navegador real em modo headless (Google Chrome, Microsoft Edge ou Chromium) com `--dump-dom` e compara o número de `<article class="topic">` renderizados no DOM com a contagem do código-fonte. Previne bugs graves onde tags mal escapadas (como `<script>` ou entidades HTML soltas) fazem o parser do navegador descartar seções inteiras do DOM.
- **Quando rodar:** Após edições de texto ou blocos em tópicos; no CI do GitHub Actions.
- **Falha (Exit 1):** Divergência entre tópicos no fonte e no DOM renderizado, ou ausência de navegador headless quando executado em ambiente de CI (`process.env.CI`).

### 8. `scripts/extrai-js-inline.mjs`
- **O que faz:** Ferramenta de otimização de performance. Lê scripts declarados inline dentro de páginas HTML e os migra para arquivos `.inline.js` dedicados dentro de `assets/js/`, mantendo os links `<script src="...">` no HTML.
- **Quando rodar:** Manutenções e refatorações de código de cliente.

### 9. `scripts/lib-html.mjs`
- **O que faz:** Módulo compartilhado com funções utilitárias de leitura de arquivos, normalização de caminhos POSIX/Windows e parsing leve de atributos HTML.

---

## Executando o Arnês Completo Localmente

Para validar 100% da integridade do repositório antes de publicar:

```bash
# 1. Contratos de regressão
node --test scripts/tests/regression-contracts.test.mjs

# 2. Links e âncoras locais
node scripts/check-links.mjs

# 3. Balanceamento de tags
node scripts/check-tags.mjs

# 4. Auditoria de cobertura do chassi
node scripts/audit-chassi.mjs --resumo

# 5. Comparação contra baseline
node scripts/diff-snapshot.mjs

# 6. Renderização no navegador headless
node scripts/tests/render-check.mjs
```
Se todos os comandos acima retornarem código `0`, o repositório está pronto para deploy.
