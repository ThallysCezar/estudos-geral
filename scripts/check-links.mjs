// Valida a navegacao do site: arquivos e ancoras.
// Uso: node scripts/check-links.mjs [arquivo.html ...]
// Sem argumento, varre os documentos publicados.
// Sai com codigo 1 se algo estiver quebrado.
import fs from 'node:fs';
import path from 'node:path';

const RAIZ = path.resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const PASTAS = ['trilhas', 'cadernos', 'lab', 'ferramentas'];
const SOLTOS = ['index.html', 'acervo.html'];

function documentos() {
  const r = SOLTOS.filter((f) => fs.existsSync(path.join(RAIZ, f)));
  for (const d of PASTAS) {
    const dir = path.join(RAIZ, d);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) if (f.endsWith('.html')) r.push(`${d}/${f}`);
  }
  return r.sort();
}

// Remove exemplos de codigo: href/src dentro de <pre> ou <code> sao ilustracao,
// nao navegacao (ex.: bundle.js em trilhas/nuvem.html).
const semCodigo = (t) => t.replace(/<pre[\s\S]*?<\/pre>/gi, '').replace(/<code[\s\S]*?<\/code>/gi, '');
const semScript = (t) => t.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');

const EXTERNO = /^(https?:|\/\/|mailto:|tel:|data:|javascript:|#$)/i;

const cacheIds = new Map();
function ids(abs) {
  if (!cacheIds.has(abs)) {
    let s = new Set();
    try {
      const t = fs.readFileSync(abs, 'utf8');
      for (const m of t.matchAll(/\sid\s*=\s*"([^"]+)"/g)) s.add(m[1]);
      for (const m of t.matchAll(/\sname\s*=\s*"([^"]+)"/g)) s.add(m[1]);
      // ia.html monta ids posicionais ("t_"+i) em tempo de execucao
      if (/"t_"\s*\+/.test(t)) for (let i = 0; i < 60; i++) s.add('t_' + i);
    } catch { s = null; }
    cacheIds.set(abs, s);
  }
  return cacheIds.get(abs);
}

const alvos = []; // {doc, origem, bruto}
for (const doc of (process.argv.slice(2).length ? process.argv.slice(2) : documentos())) {
  const abs = path.join(RAIZ, doc);
  if (!fs.existsSync(abs)) { console.error(`arquivo inexistente: ${doc}`); process.exitCode = 1; continue; }
  const texto = fs.readFileSync(abs, 'utf8');

  // 1. atributos href/src na marcacao
  for (const m of semCodigo(semScript(texto)).matchAll(/\s(?:href|src)\s*=\s*"([^"]+)"/g)) {
    alvos.push({ doc, origem: 'href/src', bruto: m[1] });
  }

  // Os arrays de dados podem estar inline ou num assets/js/*.js carregado pelo
  // documento. Desde que o JS saiu do HTML, e preciso seguir o <script src>,
  // senao os url: do acervo deixariam de ser verificados.
  const fontes = [{ rotulo: 'inline', txt: texto }];
  for (const m of texto.matchAll(/<script\b[^>]*\ssrc="([^"]+)"/gi)) {
    const src = m[1];
    if (/^(https?:)?\/\//i.test(src)) continue;
    const alvoJs = path.join(RAIZ, path.posix.join(path.posix.dirname(doc), src));
    try { fontes.push({ rotulo: src, txt: fs.readFileSync(alvoJs, 'utf8') }); } catch { /* o passo 1 ja reporta ausencia */ }
  }

  for (const { rotulo, txt } of fontes) {
    // 2. url:"..." nos arrays de dados (PALETTE_DATA, DOCS)
    for (const m of txt.matchAll(/\burl\s*:\s*"([^"]+)"/g)) {
      alvos.push({ doc, origem: `array url: (${rotulo})`, bruto: m[1] });
    }
    // 3. doc:"..." e f:"..." do cronograma (index.html)
    for (const m of txt.matchAll(/\b(?:doc|f)\s*:\s*"([^"]+\.html[^"]*)"/g)) {
      alvos.push({ doc, origem: `array doc:/f: (${rotulo})`, bruto: m[1] });
    }
  }
}

const erros = [];
const vistos = new Set();
for (const { doc, origem, bruto } of alvos) {
  if (!bruto || EXTERNO.test(bruto)) continue;
  const chave = `${doc}|${bruto}`;
  if (vistos.has(chave)) continue;
  vistos.add(chave);

  const [alvo, frag] = bruto.split('#');
  const destino = alvo === '' ? doc : path.posix.join(path.posix.dirname(doc), alvo);
  const abs = path.join(RAIZ, destino);

  if (alvo !== '' && !fs.existsSync(abs)) {
    erros.push(`${doc}  [${origem}]  arquivo nao existe: ${bruto}  ->  ${destino}`);
    continue;
  }
  if (frag) {
    const s = ids(abs);
    if (s && !s.has(frag)) erros.push(`${doc}  [${origem}]  ancora nao existe: ${bruto}  (#${frag} ausente em ${destino})`);
  }
}

console.log(`check-links: ${vistos.size} alvos locais distintos verificados.`);
if (erros.length) {
  console.log(`\n${erros.length} problema(s):\n`);
  for (const e of erros.sort()) console.log('  ' + e);
  process.exitCode = 1;
} else {
  console.log('Nenhum link ou ancora quebrada.');
}
