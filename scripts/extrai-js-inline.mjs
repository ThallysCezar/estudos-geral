// Tira o JavaScript inline do caminho critico de renderizacao.
//
// Move os blocos <script> inline de um documento para assets/js/<nome>.inline.js
// e os substitui por um unico <script defer src>. A ordem de execucao e
// preservada: defer mantem a ordem entre scripts deferidos, e os <script src>
// que ainda nao tiverem defer recebem um.
//
// Medido em trilhas/arquitetura.html: 664 ms -> 93 ms ate interativo, com o
// mesmo DOM. Ver Context.md, secao "Performance: a correcao".
//
//   node scripts/extrai-js-inline.mjs                      simula em todos
//   node scripts/extrai-js-inline.mjs --gravar             aplica em todos
//   node scripts/extrai-js-inline.mjs trilhas/java.html --gravar
import fs from 'node:fs';
import path from 'node:path';
import { RAIZ, documentos } from './lib-html.mjs';

const GRAVAR = process.argv.includes('--gravar');
const alvos = process.argv.slice(2).filter((a) => !a.startsWith('--'));

// Documentos que nao podem passar por aqui, com o motivo.
const BLOQUEADOS = {
  // cadernos/git.html foi desbloqueado em 2026-10-09, quando o <script> literal
  // nao escapado da linha 1237 virou &lt;script&gt; e as fronteiras voltaram a casar.
};

function converte(doc) {
  const arq = path.join(RAIZ, doc);
  const original = fs.readFileSync(arq, 'utf8');
  const NL = original.includes('\r\n') ? '\r\n' : '\n';

  const nome = path.basename(doc, '.html');
  const profundidade = doc.split('/').length - 1;
  const href = '../'.repeat(profundidade) + `assets/js/${nome}.inline.js`;
  const destinoJs = path.join(RAIZ, 'assets', 'js', `${nome}.inline.js`);

  if (original.includes(`src="${href}"`)) return { doc, estado: 'ja convertido' };

  // sanidade: aberturas e fechamentos de script tem que casar
  const ab = (original.match(/<script\b/gi) || []).length;
  const fe = (original.match(/<\/script/gi) || []).length;
  if (ab !== fe) return { doc, estado: `PULADO: ${ab} <script contra ${fe} </script` };

  const blocos = [];
  let html = original.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (m, attrs, corpo) => {
    if (/\ssrc=/i.test(attrs) || !corpo.trim()) return m;
    blocos.push(corpo);
    return `<!--js-extraido-${blocos.length - 1}-->`;
  });
  if (!blocos.length) return { doc, estado: 'sem JS inline' };

  let comDefer = 0;
  html = html.replace(/<script\b([^>]*\ssrc="[^"]*"[^>]*)>/gi, (m, attrs) => {
    if (/\b(defer|async)\b/i.test(attrs)) return m;
    comDefer++;
    return `<script defer${attrs}>`;
  });

  html = html.replace(/<!--js-extraido-0-->/, `<script defer src="${href}"></script>`);
  html = html.replace(/[ \t]*<!--js-extraido-\d+-->\r?\n?/g, '');

  const js =
    `/* Extraido de ${doc} para tirar o JS do caminho critico de renderizacao.` + NL +
    ` * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma` + NL +
    ` * ordem em que os blocos apareciam no documento.` + NL +
    ` * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */` + NL + NL +
    blocos.map((b, i) => `/* ---------- bloco ${i + 1} de ${blocos.length} ---------- */${NL}${b}`).join(NL + NL);

  if (GRAVAR) {
    fs.mkdirSync(path.dirname(destinoJs), { recursive: true });
    fs.writeFileSync(destinoJs, js);
    fs.writeFileSync(arq, html);
  }
  return {
    doc, estado: 'convertido', blocos: blocos.length, comDefer,
    kbAntes: Math.round(original.length / 1024), kbDepois: Math.round(html.length / 1024),
    kbJs: Math.round(js.length / 1024),
  };
}

const lista = (alvos.length ? alvos : documentos()).filter((d) => d.endsWith('.html'));
const res = [];
for (const doc of lista) {
  if (BLOQUEADOS[doc]) { res.push({ doc, estado: 'BLOQUEADO', motivo: BLOQUEADOS[doc] }); continue; }
  try { res.push(converte(doc)); }
  catch (e) { res.push({ doc, estado: 'ERRO: ' + e.message }); }
}

for (const r of res) {
  if (r.estado === 'convertido') {
    console.log(`${r.doc.padEnd(32)} ${r.blocos} bloco(s)  HTML ${r.kbAntes}->${r.kbDepois} KB  JS ${r.kbJs} KB` +
      (r.comDefer ? `  (+defer em ${r.comDefer} externo)` : ''));
  } else {
    console.log(`${r.doc.padEnd(32)} ${r.estado}`);
    if (r.motivo) console.log(`${' '.repeat(34)}${r.motivo}`);
  }
}
const n = res.filter((r) => r.estado === 'convertido').length;
console.log(`\n${n} convertido(s) de ${lista.length}.` + (GRAVAR ? '' : '  (simulacao — use --gravar)'));
