import fs from 'node:fs';
import path from 'node:path';

const bibPath = 'cadernos/biblioteca.html';
const casesData = JSON.parse(fs.readFileSync('scripts/scratch/bib-cases.json', 'utf8'));
let html = fs.readFileSync(bibPath, 'utf8');

// 1. Ensure CSS for .caso is in style
const cssBlock = `/* o caso concreto que abre cada tópico */
.caso{margin:18px 0 0;padding:14px 18px;border-radius:12px;background:var(--arc-soft);border:1px solid var(--cyan)}
.caso b{color:var(--cyan);font:700 .72rem/1 "Inter",sans-serif;letter-spacing:.06em;text-transform:uppercase;display:block;margin-bottom:5px}
.caso p{margin:0!important;font-size:.95rem;color:var(--ink2)}
.caso p+p{margin-top:.6rem!important}
`;

if (!html.includes('.caso{')) {
  // Insert before .gotcha{ or similar
  const marker = '.gotcha{';
  if (html.includes(marker)) {
    html = html.replace(marker, cssBlock + marker);
    console.log('CSS .caso adicionado com sucesso.');
  } else {
    throw new Error('Marcador de CSS não encontrado.');
  }
}

// 2. Insert cases in each article
let countInjected = 0;

for (const item of casesData) {
  const articleRegex = new RegExp(`(<article class="topic" id="${item.id}">[\\s\\S]*?<\\/article>)`);
  const m = html.match(articleRegex);
  if (!m) {
    console.warn(`Artigo ${item.id} nao encontrado!`);
    continue;
  }
  const articleContent = m[1];
  if (articleContent.includes('class="caso"')) {
    console.log(`Artigo ${item.id} ja possui caso.`);
    continue;
  }

  // Generate .caso HTML
  const pTags = item.paragraphs.map(p => `          <p>${p}</p>`).join('\n');
  const casoHtml = `\n        <div class="caso"><b>o caso</b>\n${pTags}\n        </div>`;

  // Find insertion point: right after <p class="direto">...</p>
  const diretoRegex = /(<p class="direto">[\s\S]*?<\/p>)/;
  if (!diretoRegex.test(articleContent)) {
    console.warn(`Artigo ${item.id} nao possui <p class="direto">`);
    continue;
  }

  const newArticleContent = articleContent.replace(diretoRegex, `$1${casoHtml}`);
  html = html.replace(articleContent, newArticleContent);
  countInjected++;
  console.log(`Caso injetado com sucesso no artigo ${item.id}`);
}

fs.writeFileSync(bibPath, html, 'utf8');
console.log(`Total de casos injetados: ${countInjected}`);
