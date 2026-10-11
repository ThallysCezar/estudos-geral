// scripts/tests/render-check.mjs
// Verifica que o DOM renderizado por um navegador headless contem
// exatamente o mesmo numero de <article class="topic"> que o codigo-fonte.
// Previne bugs como o de cadernos/git.html (onde um <script> nao escapado
// no texto fazia o parser do navegador descartar 10 dos 16 topicos).

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '../..');

// Candidatos para o executavel do navegador
const CANDIDATES = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'google-chrome',
  'chromium',
  'chromium-browser',
  'msedge'
];

function findBrowserBinary() {
  for (const candidate of CANDIDATES) {
    if (path.isAbsolute(candidate)) {
      if (fs.existsSync(candidate)) return candidate;
    } else {
      try {
        // Tenta achar no PATH (Linux / Mac)
        const res = execFileSync('which', [candidate], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
        if (res && res.trim()) return res.trim();
      } catch (e) {
        // ignora
      }
    }
  }
  return null;
}

const browser = findBrowserBinary();
if (!browser) {
  const msg = 'render-check: nenhum navegador headless encontrado.';
  if (process.env.CI) {
    console.error(msg + ' Em CI isto e falha.');
    process.exit(1);
  }
  console.warn(msg + ' Pulando (execucao local).');
  process.exit(0);
}

const files = [
  'cadernos/biblioteca.html',
  'cadernos/conceitos-backend.html',
  'cadernos/git.html',
  'cadernos/ingles.html',
  'cadernos/linux.html',
  'cadernos/oratoria.html',
  'trilhas/arquitetura.html',
  'trilhas/docker-kubernetes.html',
  'trilhas/ia.html',
  'trilhas/java.html',
  'trilhas/mensageria.html',
  'trilhas/nuvem.html',
  'trilhas/spring.html',
  'trilhas/system-design.html'
];

let failed = false;
console.log(`render-check: Usando navegador [${browser}] para inspecionar ${files.length} documentos...`);

for (const rel of files) {
  const fullPath = path.join(ROOT, rel);
  if (!fs.existsSync(fullPath)) continue;

  const src = fs.readFileSync(fullPath, 'utf8');
  const srcMatches = (src.match(/<article\s+class=["'][^"']*topic[^"']*["']/gi) || []).length;

  const fileUrl = 'file:///' + fullPath.replace(/\\/g, '/');
  try {
    const dumpedDom = execFileSync(browser, [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      '--dump-dom',
      fileUrl
    ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 30 * 1024 * 1024 });

    const limpo = dumpedDom.replace(/<script[\s\S]*?<\/script>/gi, '');
    const domMatches = (limpo.match(/<article\s+class=["'][^"']*topic[^"']*["']/gi) || []).length;

    if (domMatches !== srcMatches) {
      console.error(`ERRO: ${rel} tem ${srcMatches} topicos no fonte, mas o navegador renderizou apenas ${domMatches}!`);
      failed = true;
    } else {
      console.log(`✔ ${rel}: ${domMatches}/${srcMatches} topicos renderizados perfeitamente.`);
    }
  } catch (err) {
    console.error(`ERRO ao renderizar ${rel}: ${err.message}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('\nTodos os documentos renderizaram 100% dos seus topicos no DOM.');
}
