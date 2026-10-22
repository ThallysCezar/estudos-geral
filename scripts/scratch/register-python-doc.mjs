import fs from 'node:fs';

// 1. scripts/tests/regression-contracts.test.mjs
let testContent = fs.readFileSync('scripts/tests/regression-contracts.test.mjs', 'utf8');
if (!testContent.includes("'cadernos/python-para-java.html'")) {
  testContent = testContent.replace(
    "'cadernos/financas-investimentos.html',",
    "'cadernos/financas-investimentos.html',\n  'cadernos/python-para-java.html',"
  );
  fs.writeFileSync('scripts/tests/regression-contracts.test.mjs', testContent, 'utf8');
  console.log('1. Updated regression-contracts.test.mjs');
}

// 2. assets/js/acervo.inline.js
let acervoContent = fs.readFileSync('assets/js/acervo.inline.js', 'utf8');
if (!acervoContent.includes('cadernos/python-para-java.html')) {
  // Add to DOCS
  const pythonDoc = `  {n:"17",nome:"Python para quem vem de Java",curto:"Python",file:"cadernos/python-para-java.html",cor:"var(--orange)",hex:"#ffb86c",nos:0,top:13,radar:false,\n   meta:"Caderno de transição · Python, Pydantic e FastAPI para desenvolvedores Java",\n   desc:"Não é curso do zero: cada tópico parte do que você já faz no Java e no Spring e mostra o equivalente em Python, a diferença prática e o erro comum. Termina no FastAPI, a base para serviços de IA, agents e LLMs.",\n   tags:["ponte para IA","FastAPI","Pydantic"],\n   chaves:"python java spring fastapi pydantic type hints mypy dataclass pytest uvicorn poetry venv virtualenv pip async asyncio gil decorators comprehensions duck typing ai engenharia de ia agentes"},\n`;
  
  acervoContent = acervoContent.replace(
    /chaves:"finanças[^"]+"\},/,
    (match) => match + '\n' + pythonDoc
  );

  // Add to PALETTE_DATA
  const pythonPalette = `  {t:"Python para quem vem de Java",sub:"Ambiente, tipagem, Pydantic, FastAPI, pytest e ponte para IA",cat:"DOC",url:"cadernos/python-para-java.html",cor:"var(--orange)"},\n`;
  acervoContent = acervoContent.replace(
    /(\{t:"Finanças e investimentos"[^\n]+\n)/,
    `$1${pythonPalette}`
  );

  fs.writeFileSync('assets/js/acervo.inline.js', acervoContent, 'utf8');
  console.log('2. Updated assets/js/acervo.inline.js');
}

// 3. assets/js/index.inline.js
let indexContent = fs.readFileSync('assets/js/index.inline.js', 'utf8');
if (!indexContent.includes('cadernos/python-para-java.html')) {
  const pythonPaletteIndex = `  {t:"Python para quem vem de Java",sub:"Ambiente, tipagem, Pydantic, FastAPI, pytest e ponte para IA",cat:"CADERNO",url:"cadernos/python-para-java.html",cor:"var(--orange)"},\n`;
  indexContent = indexContent.replace(
    /(\{t:"Finanças e investimentos"[^\n]+\n)/,
    `$1${pythonPaletteIndex}`
  );
  fs.writeFileSync('assets/js/index.inline.js', indexContent, 'utf8');
  console.log('3. Updated assets/js/index.inline.js');
}

// 4. README.md
let readmeContent = fs.readFileSync('README.md', 'utf8');
if (!readmeContent.includes('cadernos/python-para-java.html')) {
  const pythonReadme = `| — | [Python para quem vem de Java](cadernos/python-para-java.html) | Transição prática: ambiente, tipagem, Pydantic, FastAPI, pytest e a ponte para IA e agentes |\n`;
  readmeContent = readmeContent.replace(
    /(\| — \| \[Finanças e investimentos\]\(cadernos\/financas-investimentos\.html\)[^\n]+\n)/,
    `$1${pythonReadme}`
  );
  fs.writeFileSync('README.md', readmeContent, 'utf8');
  console.log('4. Updated README.md');
}

// 5. scripts/audit-quiz-lengths.mjs
let auditContent = fs.readFileSync('scripts/audit-quiz-lengths.mjs', 'utf8');
if (!auditContent.includes("'cadernos/python-para-java.html'")) {
  auditContent = auditContent.replace(
    "'cadernos/oratoria.html',",
    "'cadernos/oratoria.html',\n  'cadernos/python-para-java.html',"
  );
  fs.writeFileSync('scripts/audit-quiz-lengths.mjs', auditContent, 'utf8');
  console.log('5. Updated scripts/audit-quiz-lengths.mjs');
}
