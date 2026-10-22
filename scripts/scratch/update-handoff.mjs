import fs from 'node:fs';

// Update docs/agentes/Context.md
let ctx = fs.readFileSync('docs/agentes/Context.md', 'utf8');
ctx = ctx.replace(
  'Fora da lista de contratos de `regression-contracts.test.mjs` (pode entrar depois).',
  'Totalmente integrado ao ecossistema: registrado em `regression-contracts.test.mjs` (DOCUMENTOS_ESPERADOS), `DOCS` e `PALETTE_DATA` de `acervo.inline.js`, `PALETTE_DATA` de `index.inline.js`, `README.md` e `audit-quiz-lengths.mjs`.'
);
ctx = ctx.replace(
  'parte nova `#projetos` (07) em `trilhas/ia.html`, antes de "Como aprender" (agora 08): ciclo do zero ao deploy (`#t8-ciclo`), os quatro projetos em escada (`#t8-escada`: 1 chat com ferramentas, 2 RAG, 3 agente com MCP, 4 **carro-chefe**, o projeto de vitrine no GitHub e no LinkedIn) e o carro-chefe (`#t8-ancora`).',
  'Partes 07 e 08 padronizadas e harmonizadas: Parte 07 com id="p7" e tópicos `#t7-ciclo` (ciclo do zero ao deploy), `#t7-escada` (os quatro projetos em escada: 1 chat com ferramentas, 2 RAG, 3 agente com MCP, 4 carro-chefe) e `#t7-ancora` (o carro-chefe); Parte 08 com id="p8" e tópicos `#t8-ciclo` (o ciclo de aprendizado), `#t8-canais` (canais e cursos em português) e `#t8-pratica` (como pesquisar e o que praticar). Todos os 6 tópicos equipados com chassi pedagógico completo (casos, analogias, armadilhas, fontes, exercícios +50 XP com quizzes equilibrados e flashcards).'
);
fs.writeFileSync('docs/agentes/Context.md', ctx, 'utf8');
console.log('Updated Context.md');

// Update docs/agentes/HANDOFF.md
let handoff = fs.readFileSync('docs/agentes/HANDOFF.md', 'utf8');
const novaEntrada = `- **2026-10-21 — revisão e harmonização de IA e integração completa do caderno Python para Java:**
  - **Revisão e Chassi da Trilha de IA (\`trilhas/ia.html\`):** Padronização e harmonização das Partes 07 ("Projetos da trilha", \`id="p7"\`, tópicos \`#t7-ciclo\`, \`#t7-escada\`, \`#t7-ancora\`) e 08 ("Como aprender de verdade", \`id="p8"\`, tópicos \`#t8-ciclo\`, \`#t8-canais\`, \`#t8-pratica\`). Os 6 tópicos foram equipados com o chassi pedagógico integral: caso prático, analogia com \`<i class="ic">≈</i>\`, armadilhas técnicas (\`.gotcha\`), fontes oficiais/prática (\`.ver\`), revisão rápida e desafios práticos +50 XP com gabaritos distribuídos e balanceados (comprimento da alternativa correta sob o limiar seguro) e flashcards interativos.
  - **Correção de Links e Âncoras:** Corrigidas todas as referências cruzadas nos cards de projeto (\`.pj-onde\` para \`#t7-escada\`), o link em \`#vagas\` para \`#t8-canais\`, e as referências em \`cadernos/python-para-java.html\` apontando para \`../trilhas/ia.html#t7-escada\`. O validador \`check-links\` confirmou 362 alvos locais íntegros sem nenhuma âncora ou link quebrado.
  - **Integração Global do Caderno Python para Java (\`cadernos/python-para-java.html\`):**
    - Registrado em \`DOCUMENTOS_ESPERADOS\` do teste de regressão \`scripts/tests/regression-contracts.test.mjs\`.
    - Registrado no array \`DOCS\` (n:"17") e na busca Ctrl+K (\`PALETTE_DATA\`) em \`assets/js/acervo.inline.js\`.
    - Registrado na busca Ctrl+K (\`PALETTE_DATA\`) da Home em \`assets/js/index.inline.js\`.
    - Adicionado à tabela oficial de cadernos no \`README.md\`.
    - Integrado à auditoria global de testes em \`scripts/audit-quiz-lengths.mjs\` (12 questões, taxa de 41.7% de alternativa mais longa, totalmente calibrada).
  - **Validações Globais:**
    - Contratos de Regressão: 11/11 testes passando sem advertências.
    - \`check-tags.mjs\`: 100% de tags de bloco balanceadas em todos os documentos.
    - \`check-links.mjs\`: 362 alvos verificados, 0 links quebrados.
    - \`diff-snapshot.mjs\`: 0 diff em relação ao baseline de 24 documentos.
    - NENHUM commit ou push efetuado.\n\n`;

handoff = handoff.replace('## 2. Onde paramos\n', `## 2. Onde paramos\n${novaEntrada}`);
fs.writeFileSync('docs/agentes/HANDOFF.md', handoff, 'utf8');
console.log('Updated HANDOFF.md');
