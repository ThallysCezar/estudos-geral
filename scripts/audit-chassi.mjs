// scripts/audit-chassi.mjs
// Auditoria de cobertura do chassi de conteudo por topico e documento.
// Exige conformidade com a "Definicao de pronto" do Spec.md.
//
// Uso:
//   node scripts/audit-chassi.mjs                    # Varre todos os documentos e exibe matriz completa
//   node scripts/audit-chassi.mjs --resumo           # Exibe apenas os resumos e rankings (sem despejar topicos)
//   node scripts/audit-chassi.mjs java               # Filtra apenas documentos que contenham 'java'
//   node scripts/audit-chassi.mjs --peca caso        # Audita focado na peca 'caso'
//   node scripts/audit-chassi.mjs sys --resumo       # Resumo de System Design

import fs from 'node:fs';
import path from 'node:path';

const RAIZ = path.resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const PASTAS = ['trilhas', 'cadernos', 'lab'];

function documentos() {
  const r = [];
  for (const d of PASTAS) {
    const dir = path.join(RAIZ, d);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith('.html')) r.push(`${d}/${f}`);
    }
  }
  return r.sort();
}

// Pecas do chassi exigidas pelo Spec.md (secao 3 e 4)
const PECAS = [
  ['caso', 'class="caso'],
  ['analogia', 'class="analogia'],
  ['dg', 'class="dg"'],
  ['gotcha', 'gotcha'],
  ['fecha', 'topico-fechamento'],
  ['alem', 'class="alem'],
  ['ver', 'class="ver'],
  ['conta', 'class="conta']
];

const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2300}-\u{27BF}\u{FE0F}\u{2B00}-\u{2BFF}]/gu;
const semScript = (t) =>
  t.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');

// Elementos de bloco que estruturam o topico: abertura e fechamento tem que casar.
const BLOCOS = ['article', 'section', 'div', 'details', 'figure'];

function desbalanco(html) {
  const r = [];
  for (const tag of BLOCOS) {
    const ab = (html.match(new RegExp('<' + tag + '(?=[\\s>/])', 'gi')) || []).length;
    const fe = (html.match(new RegExp('</' + tag + '\\s*>', 'gi')) || []).length;
    if (ab !== fe) r.push(`${tag} ${ab}/${fe}`);
  }
  return r;
}

// Analise de argumentos CLI
const args = process.argv.slice(2);
let flagResumo = false;
let pecaFiltro = null;
const docFiltros = [];

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--resumo' || arg === '--summary') {
    flagResumo = true;
  } else if (arg.startsWith('--peca=')) {
    pecaFiltro = arg.slice(7).toLowerCase();
  } else if (arg === '--peca' && i + 1 < args.length) {
    pecaFiltro = args[++i].toLowerCase();
  } else if (arg === '-h' || arg === '--help') {
    console.log(`Uso: node scripts/audit-chassi.mjs [opções] [documento-ou-filtro ...]
Opções:
  --resumo, --summary   Mostra apenas o sumário executivo e matriz de cobertura
  --peca <nome>         Filtra/destaca uma peça (caso, analogia, dg, gotcha, fecha, alem, ver, conta)
  -h, --help            Exibe esta ajuda`);
    process.exit(0);
  } else if (!arg.startsWith('-')) {
    docFiltros.push(arg);
  }
}

const todosDocs = documentos();
let docs = todosDocs;

if (docFiltros.length > 0) {
  docs = todosDocs.filter(d => docFiltros.some(filtro => {
    const fNorm = filtro.replace(/\\/g, '/').toLowerCase();
    const dLower = d.toLowerCase();
    return dLower === fNorm || dLower.includes(fNorm) || path.basename(dLower, '.html') === fNorm;
  }));

  if (docs.length === 0) {
    for (const f of docFiltros) {
      const abs = path.resolve(RAIZ, f);
      if (fs.existsSync(abs)) docs.push(f);
    }
  }

  if (docs.length === 0) {
    console.error(`audit-chassi: nenhum documento encontrado para os filtros: ${docFiltros.join(', ')}`);
    process.exit(1);
  }
}

const pecasAuditadas = pecaFiltro
  ? PECAS.filter(([n]) => n === pecaFiltro)
  : PECAS;

if (pecaFiltro && pecasAuditadas.length === 0) {
  console.error(`audit-chassi: peca '${pecaFiltro}' invalida. Opcoes: ${PECAS.map(([n]) => n).join(', ')}`);
  process.exit(1);
}

let totalTopicosGlobal = 0;
const totaisGlobais = Object.fromEntries(PECAS.map(([n]) => [n, 0]));
const relatorioDocs = [];
const todosQuebrados = [];

for (const doc of docs) {
  const abs = path.join(RAIZ, doc);
  if (!fs.existsSync(abs)) {
    console.error(`audit-chassi: arquivo inexistente: ${doc}`);
    process.exitCode = 1;
    continue;
  }

  const texto = fs.readFileSync(abs, 'utf8');
  const artigos = texto
    .split('<article class="topic"')
    .slice(1)
    .map((a) => a.split('</article>')[0]);
  const emoji = (semScript(texto).match(EMOJI) || []).length;

  const docStats = {
    doc,
    total: artigos.length,
    emoji,
    pecas: Object.fromEntries(PECAS.map(([n]) => [n, 0])),
    faltasPorPeca: {},
    quebrados: []
  };

  if (!flagResumo && artigos.length > 0) {
    console.log(`\n=== ${doc} (${artigos.length} topicos, ${emoji} emoji na marcacao)`);
    console.log('  ' + 'n  titulo'.padEnd(46) + pecasAuditadas.map(([n]) => n.padStart(9)).join(''));
  }

  artigos.forEach((corpo, i) => {
    totalTopicosGlobal++;
    const titulo = (corpo.match(/<h3[^>]*>([^<]*)/) || ['', '(sem h3)'])[1]
      .replace(/&amp;/g, '&')
      .trim()
      .slice(0, 40);

    const db = desbalanco('<article class="topic"' + corpo + '</article>');
    if (db.length) {
      docStats.quebrados.push(`${doc} #${i + 1} "${titulo}" -> ${db.join(' ')}`);
      todosQuebrados.push(`${doc} #${i + 1} "${titulo}" -> ${db.join(' ')}`);
    }

    const marcas = pecasAuditadas.map(([n, p]) => {
      const presente = corpo.includes(p);
      if (presente) {
        docStats.pecas[n] = (docStats.pecas[n] || 0) + 1;
        totaisGlobais[n] = (totaisGlobais[n] || 0) + 1;
        return '      sim';
      }
      return '        -';
    });

    // Registra presencas tambem para as pecas nao filtradas na contagem do doc
    for (const [n, p] of PECAS) {
      if (!pecasAuditadas.some(([pa]) => pa === n)) {
        if (corpo.includes(p)) {
          docStats.pecas[n] = (docStats.pecas[n] || 0) + 1;
          totaisGlobais[n] = (totaisGlobais[n] || 0) + 1;
        }
      }
    }

    if (!flagResumo) {
      console.log(
        '  ' +
          String(i + 1).padStart(2) +
          ' ' +
          titulo.padEnd(43) +
          marcas.join('') +
          (db.length ? '  TAGS: ' + db.join(' ') : '')
      );
    }
  });

  for (const [n] of PECAS) {
    const faltam = docStats.total - (docStats.pecas[n] || 0);
    docStats.faltasPorPeca[n] = faltam;
  }

  relatorioDocs.push(docStats);
}

// =========================================================================
// RELATORIO EXECUTIVO E MATRIZ ACIONAVEL
// =========================================================================

console.log('\n' + '='.repeat(82));
console.log('                 RELATORIO DE COBERTURA DO CHASSI');
console.log('='.repeat(82));

console.log(`\n1. COBERTURA GLOBAL POR PECA (${totalTopicosGlobal} topicos em ${docs.length} documento(s)):`);
console.log('-'.repeat(82));
console.log('  Peca'.padEnd(12) + 'Presente / Total'.padEnd(20) + 'Cobertura'.padEnd(14) + 'Falta em');
for (const [n] of pecasAuditadas) {
  const presente = totaisGlobais[n] || 0;
  const pct = totalTopicosGlobal > 0 ? ((presente / totalTopicosGlobal) * 100).toFixed(1) : '0.0';
  const faltam = totalTopicosGlobal - presente;
  console.log(
    '  ' +
      n.padEnd(10) +
      `${presente} de ${totalTopicosGlobal}`.padEnd(20) +
      `${pct}%`.padStart(8).padEnd(14) +
      `${faltam} topico(s)`
  );
}

console.log(`\n2. COBERTURA POR DOCUMENTO (MATRIZ %):`);
console.log('-'.repeat(90));
const colWidth = 9;
const headerMatriz =
  '  Documento'.padEnd(35) +
  'Topicos'.padStart(7) +
  pecasAuditadas.map(([n]) => n.padStart(colWidth)).join('');
console.log(headerMatriz);

for (const stat of relatorioDocs) {
  if (stat.total === 0) continue;
  const colunas = pecasAuditadas.map(([n]) => {
    const q = stat.pecas[n] || 0;
    const pct = Math.round((q / stat.total) * 100);
    return `${pct}%`.padStart(colWidth);
  });
  console.log(
    '  ' +
      stat.doc.padEnd(35) +
      String(stat.total).padStart(7) +
      colunas.join('')
  );
}

console.log(`\n3. PLANO DE ACAO — PRINCIPAIS LACUNAS POR DOCUMENTO:`);
console.log('-'.repeat(90));
for (const stat of relatorioDocs) {
  if (stat.total === 0) continue;
  const listaFaltas = [];
  for (const [n] of pecasAuditadas) {
    const faltam = stat.faltasPorPeca[n];
    if (faltam > 0) {
      listaFaltas.push(`falta ${n} em ${faltam} de ${stat.total}`);
    }
  }
  if (listaFaltas.length > 0) {
    console.log(`  * ${stat.doc}: ${listaFaltas.join('; ')}`);
  } else {
    console.log(`  * ${stat.doc}: 100% de cobertura do chassi!`);
  }
}

console.log('\n' + '-'.repeat(82));
console.log(`--- ${docs.length} documento(s) inspecionados, ${totalTopicosGlobal} topicos no escopo.`);

if (todosQuebrados.length > 0) {
  console.log(`\n${todosQuebrados.length} topico(s) com TAGS DESBALANCEADAS:\n`);
  for (const q of todosQuebrados) console.log('  ' + q);
  process.exitCode = 1;
} else {
  console.log('--- Tags balanceadas em todos os topicos.');
}
