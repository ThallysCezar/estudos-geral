// Mede vies nas alternativas dos quizzes: se a correta e sempre a mais longa,
// ou se fica sempre na mesma posicao, da para acertar tudo sem saber o assunto.
//
//   node scripts/audit-quiz-vies.mjs            tudo
//   node scripts/audit-quiz-vies.mjs --limite 60  muda o teto aceitavel (%)
//
// Sai com 1 quando um banco passa do teto. Padrao: 60% para "mais longa"
// (acaso e 33% com 3 opcoes e 25% com 4) e 60% para concentracao de posicao.
import fs from 'node:fs';
import path from 'node:path';
import { RAIZ, documentos, ler } from './lib-html.mjs';

const arg = process.argv.indexOf('--limite');
const LIMITE = arg > 0 ? Number(process.argv[arg + 1]) : 60;

const pct = (a, b) => (b ? (a / b) * 100 : 0);
const fmt = (a, b) => `${a}/${b} (${pct(a, b).toFixed(0)}%)`;

/** Alternativas dos exercicios embutidos no HTML dos documentos. */
function doHtml(doc) {
  const t = ler(doc);
  const r = [];
  for (const m of t.matchAll(/data-exercise-id="([^"]+)"/g)) {
    const bloco = t.slice(m.index, m.index + 9000);
    const opts = [];
    const re = /<button class="te-opt"[^>]*data-correct="(true|false)"[^>]*>([\s\S]*?)<\/button>/g;
    let o;
    while ((o = re.exec(bloco))) {
      opts.push({ certa: o[1] === 'true', n: o[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length });
    }
    if (opts.length >= 2 && opts.some((x) => x.certa)) r.push({ id: m[1], opts });
  }
  return r;
}

/** Banco do microlearning da home, que e JS e nao HTML. */
function doBanco() {
  const p = path.join(RAIZ, 'assets/js/microlearning-data.js');
  if (!fs.existsSync(p)) return [];
  const win = {};
  try { new Function('window', fs.readFileSync(p, 'utf8'))(win); } catch { return []; }
  return (win.MICROLEARNING_QUESTIONS || [])
    .filter((q) => Array.isArray(q.opcoes) && q.opcoes.length >= 2)
    .map((q) => ({ id: q.id, opts: q.opcoes.map((o) => ({ certa: !!o.correct, n: (o.text || '').length })) }));
}

function analisa(nome, itens) {
  if (!itens.length) return null;
  let longa = 0, curta = 0, somaC = 0, somaE = 0, nC = 0, nE = 0;
  const pos = {};
  for (const { opts } of itens) {
    const c = opts.find((x) => x.certa);
    if (!c) continue;
    const tam = opts.map((x) => x.n);
    if (c.n === Math.max(...tam)) longa++;
    if (c.n === Math.min(...tam)) curta++;
    somaC += c.n; nC++;
    for (const x of opts) if (!x.certa) { somaE += x.n; nE++; }
    const letra = 'ABCDE'[opts.indexOf(c)];
    pos[letra] = (pos[letra] || 0) + 1;
  }
  const maiorPos = Math.max(...Object.values(pos));
  return {
    nome, total: itens.length, longa, curta, pos,
    mediaCerta: Math.round(somaC / nC), mediaErrada: Math.round(somaE / nE),
    pctLonga: pct(longa, itens.length), pctPos: pct(maiorPos, itens.length),
  };
}

const bancos = [];
for (const d of documentos()) {
  const a = analisa(d, doHtml(d));
  if (a) bancos.push(a);
}
const banco = analisa('assets/js/microlearning-data.js (revisão da home)', doBanco());
if (banco) bancos.push(banco);

console.log('banco'.padEnd(46) + 'correta = mais longa'.padEnd(22) + 'posição mais comum   tamanho certa/errada');
console.log('-'.repeat(110));
const ruins = [];
for (const b of bancos.sort((x, y) => y.pctLonga - x.pctLonga)) {
  const alerta = b.pctLonga > LIMITE || b.pctPos > LIMITE;
  if (alerta) ruins.push(b);
  const posTxt = Object.entries(b.pos).sort((a, c) => c[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(' ');
  console.log(
    (alerta ? '! ' : '  ') + b.nome.padEnd(44) +
    fmt(b.longa, b.total).padEnd(22) +
    posTxt.padEnd(20) +
    `${b.mediaCerta} / ${b.mediaErrada}`
  );
}

console.log(`\nteto: ${LIMITE}%  ·  acaso: 33% com 3 alternativas, 25% com 4`);
if (ruins.length) {
  console.log(`\n${ruins.length} banco(s) acima do teto — da para acertar sem saber o assunto:`);
  for (const b of ruins) {
    const quê = [];
    if (b.pctLonga > LIMITE) quê.push(`a correta é a mais longa em ${b.pctLonga.toFixed(0)}% (média ${b.mediaCerta} contra ${b.mediaErrada} caracteres)`);
    if (b.pctPos > LIMITE) quê.push(`a correta se concentra numa posição`);
    console.log(`  ${b.nome}: ${quê.join('; ')}`);
  }
  console.log('\nCorreção: reescrever os distratores para ficarem tão densos quanto a correta.');
  console.log('Embaralhar a ordem resolve a posição, mas não resolve o tamanho.');
  process.exitCode = 1;
} else {
  console.log('\nNenhum banco acima do teto.');
}
