// Congela o estado observavel do site em scripts/baseline.json (golden master).
// O site de hoje, com defeitos e tudo, vira a referencia: qualquer mudanca
// posterior tem que ser intencional e aparecer no diff-snapshot.
//
//   node scripts/snapshot.mjs            mostra o resumo, nao grava
//   node scripts/snapshot.mjs --gravar   grava scripts/baseline.json
import fs from 'node:fs';
import path from 'node:path';
import { RAIZ, documentos, inventario } from './lib-html.mjs';

const DESTINO = path.join(RAIZ, 'scripts', 'baseline.json');
const ANTERIOR = path.join(RAIZ, 'scripts', 'baseline.anterior.json');
const gravar = process.argv.includes('--gravar');

const docs = documentos();
const site = {};
for (const d of docs) site[d] = inventario(d);

const total = (campo) => docs.reduce((s, d) => s + (site[d][campo] || 0), 0);

const baseline = {
  gerado: new Date().toISOString().slice(0, 10),
  nota: 'Golden master do site estatico. Gerado por scripts/snapshot.mjs. Nao editar a mao.',
  resumo: {
    documentos: docs.length,
    topicos: total('topicos'),
    bytes: total('bytes'),
    inlineJsKB: total('inlineJsKB'),
    inlineCssKB: total('inlineCssKB'),
    emoji: total('emoji'),
  },
  site,
};

// --- relatorio na tela -------------------------------------------------
console.log('Documento'.padEnd(32), 'tops'.padStart(5), 'KB'.padStart(6), 'jsKB'.padStart(6), 'ids'.padStart(5), 'lsKeys'.padStart(7));
for (const d of docs) {
  const s = site[d];
  console.log(
    d.padEnd(32),
    String(s.topicos).padStart(5),
    String(Math.round(s.bytes / 1024)).padStart(6),
    String(s.inlineJsKB).padStart(6),
    String(s.ids.length).padStart(5),
    String(s.localStorage.length).padStart(7)
  );
}
const r = baseline.resumo;
console.log(
  `\n${r.documentos} documentos · ${r.topicos} topicos · ${Math.round(r.bytes / 1024)} KB de HTML · ` +
    `${r.inlineJsKB} KB de JS inline · ${r.inlineCssKB} KB de CSS inline · ${r.emoji} emoji`
);

// --- o que ja esta torto hoje, registrado de proposito ------------------
const avisos = [];
for (const d of docs) {
  const s = site[d];
  if (Object.keys(s.desbalanco).length) avisos.push(`${d}: tags desbalanceadas ${JSON.stringify(s.desbalanco)}`);
  const vistos = new Set(), dup = new Set();
  for (const e of s.scriptsExternos) (vistos.has(e) ? dup : vistos).add(e);
  if (dup.size) avisos.push(`${d}: script externo repetido -> ${[...dup].join(', ')}`);
  const ult = s.partes[s.partes.length - 1];
  if (s.partes.length > 1 && ult && !/Como aprender/i.test(ult.titulo))
    avisos.push(`${d}: ultima parte nao e "Como aprender" (e "${ult.titulo.slice(0, 40)}")`);
  const um = s.marcos[s.marcos.length - 1];
  if (s.marcos.length > 1 && um && !/Como aprender/i.test(um.n))
    avisos.push(`${d}: ultimo marco da trilha nao e "Como aprender" (e "${um.n.slice(0, 40)}")`);
}
if (avisos.length) {
  console.log(`\nDefeitos conhecidos, congelados no baseline (${avisos.length}):`);
  for (const a of avisos) console.log('  ' + a);
}

if (gravar) {
  if (fs.existsSync(DESTINO)) {
    fs.copyFileSync(DESTINO, ANTERIOR);
    console.log(`\nBackup preservado: scripts/baseline.anterior.json (${Math.round(fs.statSync(ANTERIOR).size / 1024)} KB)`);
  }
  fs.writeFileSync(DESTINO, JSON.stringify(baseline, null, 1) + '\n');
  console.log(`Gravado: scripts/baseline.json (${Math.round(fs.statSync(DESTINO).size / 1024)} KB)`);
} else {
  console.log('\n(nada gravado — use --gravar para congelar este estado)');
}
