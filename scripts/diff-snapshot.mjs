// Compara o site de hoje com scripts/baseline.json e diz o que mudou.
//
//   node scripts/diff-snapshot.mjs            tudo
//   node scripts/diff-snapshot.mjs trilhas/java.html   so um documento
//
// Sai com codigo 1 quando algo foi PERDIDO (topico, id, chave de
// localStorage, marcador de progresso, alvo de link, peca do chassi) ou
// quando uma tag passou a estar desbalanceada. Conteudo reescrito e coisa
// nova aparecem como aviso, nao como erro: isso e trabalho normal.
import fs from 'node:fs';
import path from 'node:path';
import { RAIZ, documentos, inventario } from './lib-html.mjs';

const modoGeracoes = process.argv.includes('--geracoes');
const modoAnterior = process.argv.includes('--anterior');

const ARQ_BASE = path.join(RAIZ, 'scripts', (modoGeracoes || modoAnterior) ? 'baseline.anterior.json' : 'baseline.json');
const ARQ_NOVO = path.join(RAIZ, 'scripts', 'baseline.json');

if (!fs.existsSync(ARQ_BASE)) {
  console.error(`${path.basename(ARQ_BASE)} nao existe. Rode: node scripts/snapshot.mjs --gravar`);
  process.exit(2);
}
if (modoGeracoes && !fs.existsSync(ARQ_NOVO)) {
  console.error('baseline.json nao existe para comparacao entre geracoes.');
  process.exit(2);
}

const base = JSON.parse(fs.readFileSync(ARQ_BASE, 'utf8'));
const baseNova = modoGeracoes ? JSON.parse(fs.readFileSync(ARQ_NOVO, 'utf8')) : null;
const filtro = process.argv.slice(2).filter((a) => !a.startsWith('--'));

const perdas = [];
const avisos = [];
const P = (doc, msg) => perdas.push(`${doc}: ${msg}`);
const A = (doc, msg) => avisos.push(`${doc}: ${msg}`);

const faltando = (antes = [], depois = []) => antes.filter((x) => !depois.includes(x));
const novos = (antes = [], depois = []) => depois.filter((x) => !antes.includes(x));

const resumoLista = (l, max = 6) =>
  l.slice(0, max).join(', ') + (l.length > max ? ` … (+${l.length - max})` : '');

const atuais = modoGeracoes ? Object.keys(baseNova.site) : documentos();
const docs = (filtro.length ? filtro : [...new Set([...Object.keys(base.site), ...atuais])]).sort();

for (const doc of docs) {
  const b = base.site[doc];
  const existe = modoGeracoes ? !!(baseNova && baseNova.site[doc]) : atuais.includes(doc);

  if (b && !existe) { P(doc, 'DOCUMENTO SUMIU'); continue; }
  if (!b && existe) { A(doc, 'documento novo (nao estava no baseline)'); continue; }
  if (!b) continue;

  const a = modoGeracoes ? baseNova.site[doc] : inventario(doc);

  // --- perdas estruturais ---
  const idsSumidos = faltando(b.ids, a.ids);
  if (idsSumidos.length) P(doc, `${idsSumidos.length} id sumiu: ${resumoLista(idsSumidos)}`);

  for (const campo of ['dataK', 'exercicios']) {
    const f = faltando(b.marcadores[campo], a.marcadores[campo]);
    if (f.length) P(doc, `marcador "${campo}" sumiu (${f.length}): ${resumoLista(f)}`);
  }

  // gabarito: resposta certa trocada e corrupcao silenciosa, nunca aviso
  const gb = b.marcadores.gabarito || {}, ga = a.marcadores.gabarito || {};
  for (const [ex, certa] of Object.entries(gb)) {
    if (!(ex in ga)) continue; // a perda do exercicio ja e relatada acima
    if (ga[ex] !== certa) P(doc, `GABARITO MUDOU em ${ex}: "${certa}" -> "${ga[ex]}"`);
  }
  const exNovos = Object.keys(ga).filter((e) => !(e in gb));
  if (exNovos.length) A(doc, `exercicio novo: ${resumoLista(exNovos)}`);

  const lsSumidas = faltando(b.localStorage, a.localStorage);
  if (lsSumidas.length) P(doc, `CHAVE DE localStorage SUMIU: ${lsSumidas.join(', ')} — isso apaga progresso`);
  const lsNovas = novos(b.localStorage, a.localStorage);
  if (lsNovas.length) A(doc, `chave de localStorage nova: ${lsNovas.join(', ')}`);

  const alvosSumidos = faltando(b.alvos, a.alvos);
  if (alvosSumidos.length) A(doc, `${alvosSumidos.length} alvo de link saiu: ${resumoLista(alvosSumidos)}`);

  // --- tags ---
  const antesTortas = Object.keys(b.desbalanco || {});
  const agoraTortas = Object.keys(a.desbalanco || {});
  for (const tag of novos(antesTortas, agoraTortas)) P(doc, `tag <${tag}> passou a estar desbalanceada (${a.desbalanco[tag]})`);
  for (const tag of faltando(antesTortas, agoraTortas)) A(doc, `tag <${tag}> foi equilibrada (era ${b.desbalanco[tag]}) — defeito corrigido`);

  // --- topicos ---
  if (a.topicos !== b.topicos) {
    (a.topicos < b.topicos ? P : A)(doc, `topicos: ${b.topicos} -> ${a.topicos}`);
  }
  const porId = (l) => Object.fromEntries(l.filter((t) => t.id).map((t) => [t.id, t]));
  const bi = porId(b.lista), ai = porId(a.lista);
  for (const [id, tb] of Object.entries(bi)) {
    const ta = ai[id];
    if (!ta) { P(doc, `topico "${tb.titulo.slice(0, 40)}" (#${id}) sumiu`); continue; }
    const pecasPerdidas = Object.keys(tb.pecas).filter((k) => tb.pecas[k] && !ta.pecas[k]);
    if (pecasPerdidas.length) P(doc, `topico #${id} perdeu peca: ${pecasPerdidas.join(', ')}`);
    const pecasGanhas = Object.keys(tb.pecas).filter((k) => !tb.pecas[k] && ta.pecas[k]);
    if (pecasGanhas.length) A(doc, `topico #${id} ganhou peca: ${pecasGanhas.join(', ')}`);
    if (tb.titulo !== ta.titulo) A(doc, `topico #${id} renomeado: "${tb.titulo.slice(0, 34)}" -> "${ta.titulo.slice(0, 34)}"`);
    else if (tb.texto !== ta.texto) A(doc, `topico #${id} "${tb.titulo.slice(0, 34)}" teve o texto alterado`);
  }

  // --- ordem das partes e dos marcos ---
  const seq = (l, f) => (l || []).map(f).join(' | ');
  if (seq(b.partes, (x) => x.titulo) !== seq(a.partes, (x) => x.titulo))
    A(doc, `ordem ou titulo das partes mudou (${b.partes.length} -> ${a.partes.length})`);
  if (seq(b.marcos, (x) => x.n) !== seq(a.marcos, (x) => x.n))
    A(doc, `ordem ou nome dos marcos da trilha mudou (${b.marcos.length} -> ${a.marcos.length})`);

  // --- sinais de peso, so informativo ---
  const d = (k) => a[k] - b[k];
  if (Math.abs(d('inlineJsKB')) >= 3) A(doc, `JS inline: ${b.inlineJsKB} -> ${a.inlineJsKB} KB`);
  if (Math.abs(d('inlineCssKB')) >= 3) A(doc, `CSS inline: ${b.inlineCssKB} -> ${a.inlineCssKB} KB`);
  if (d('emoji')) A(doc, `emoji: ${b.emoji} -> ${a.emoji}`);
  const extraSumiu = faltando(b.scriptsExternos, a.scriptsExternos);
  if (extraSumiu.length) A(doc, `script externo removido: ${resumoLista(extraSumiu)}`);
}

// --- saida ---
if (perdas.length) {
  console.log(`PERDAS (${perdas.length}) — algo que existia nao existe mais:\n`);
  for (const p of perdas) console.log('  ' + p);
}
if (avisos.length) {
  console.log(`${perdas.length ? '\n' : ''}Mudancas (${avisos.length}):\n`);
  for (const x of avisos) console.log('  ' + x);
}
if (!perdas.length && !avisos.length) console.log('Nenhuma diferenca em relacao ao baseline.');

console.log(`\nbaseline de ${base.gerado} · ${docs.length} documento(s) comparado(s)`);
if (perdas.length) {
  console.log('Se a perda for intencional, regrave o baseline: node scripts/snapshot.mjs --gravar');
  process.exitCode = 1;
}
