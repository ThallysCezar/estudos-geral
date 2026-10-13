// Funcoes de leitura dos documentos, compartilhadas pelo snapshot e pelo diff.
// Node puro, sem dependencia. Nunca escreve nada.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export const RAIZ = path.resolve(
  new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
);

const PASTAS = ['trilhas', 'cadernos', 'lab', 'ferramentas'];
const SOLTOS = ['index.html', 'acervo.html'];

/** Os documentos publicados, em ordem estavel. Arquivados fica de fora. */
export function documentos() {
  const r = SOLTOS.filter((f) => fs.existsSync(path.join(RAIZ, f)));
  for (const d of PASTAS) {
    const dir = path.join(RAIZ, d);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).sort()) if (f.endsWith('.html')) r.push(`${d}/${f}`);
  }
  return r.sort();
}

export const ler = (doc) => fs.readFileSync(path.join(RAIZ, doc), 'utf8');

export const semScriptEstilo = (t) =>
  t.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');

/** Texto visivel, normalizado, para servir de impressao digital do conteudo. */
export function textoNormalizado(html) {
  return semScriptEstilo(html)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const hash = (s) => crypto.createHash('sha1').update(s, 'utf8').digest('hex').slice(0, 12);

/** As pecas do chassi exigidas pelo Spec.md, secao 3. */
export const PECAS = {
  caso: 'class="caso',
  conta: 'class="conta"',
  analogia: 'class="analogia',
  duo: 'class="duo',
  repl: 'class="repl"',
  dg: 'class="dg"',
  ver: 'class="ver"',
  gotcha: 'gotcha',
  alem: 'class="alem',
  fechamento: 'topico-fechamento',
  exercicio: 'topico-exercicio',
  flashcard: 'topico-flashcard',
};

/** Um registro por <article class="topic">, na ordem do documento. */
export function topicos(t) {
  const partes = t.split('<article class="topic"').slice(1);
  return partes.map((bruto, i) => {
    const corpo = bruto.split('</article>')[0];
    const titulo = (corpo.match(/<h3[^>]*>([^<]*)/) || ['', ''])[1]
      .replace(/&amp;/g, '&')
      .trim();
    const id = (bruto.match(/^[^>]*\bid="([^"]+)"/) || ['', ''])[1];
    const pecas = {};
    for (const [nome, marca] of Object.entries(PECAS)) pecas[nome] = corpo.includes(marca);
    return {
      n: i + 1,
      id,
      titulo,
      pecas,
      texto: hash(textoNormalizado(corpo)),
      tamanho: corpo.length,
      tags: desbalanco(corpo),
    };
  });
}

const BLOCOS = ['article', 'section', 'div', 'details', 'figure', 'ul', 'table'];

/** Tags de bloco cuja abertura e fechamento nao casam. Vazio = equilibrado. */
export function desbalanco(html) {
  const r = {};
  for (const tag of BLOCOS) {
    const ab = (html.match(new RegExp('<' + tag + '(?=[\\s>/])', 'gi')) || []).length;
    const fe = (html.match(new RegExp('</' + tag + '\\s*>', 'gi')) || []).length;
    if (ab !== fe) r[tag] = `${ab}/${fe}`;
  }
  return r;
}

export const ids = (t) => [...new Set([...t.matchAll(/\sid="([^"\s>]+)"/g)].map((m) => m[1]))].sort();

/** Os atributos que o progresso e o quiz usam como identidade. Mudar um apaga dado. */
export function marcadores(t) {
  const col = (re) => [...new Set([...t.matchAll(re)].map((m) => m[1]))].sort();
  return {
    dataK: col(/\sdata-k="([^"]+)"/g),
    exercicios: col(/\sdata-exercise-id="([^"]+)"/g),
    gabarito: gabarito(t),
  };
}

/**
 * Gabarito por exercicio: { "ex-sd-a1": "B", ... }.
 * Guardar so o conjunto de valores nao serve — trocar B por A num exercicio
 * nao mudaria o conjunto, e a resposta errada passaria despercebida.
 */
export function gabarito(t) {
  const r = {};
  const blocos = [...t.matchAll(/<div class="topico-exercicio"[^>]*\sdata-exercise-id="([^"]+)"/g)];
  for (let i = 0; i < blocos.length; i++) {
    const ini = blocos[i].index;
    const fim = i + 1 < blocos.length ? blocos[i + 1].index : t.length;
    const trecho = t.slice(ini, fim);
    const certas = [...trecho.matchAll(/\sdata-correct="([^"]+)"/g)].map((m) => m[1]);
    r[blocos[i][1]] = certas.join(',');
  }
  return r;
}

/** Chaves de localStorage: as literais e as que moram em constante (KEYT/KEYM/RK). */
export function chavesLocalStorage(t) {
  const s = new Set();
  for (const m of t.matchAll(/localStorage\.(?:get|set|remove)Item\(\s*["']([^"']+)["']/g)) s.add(m[1]);
  for (const m of t.matchAll(/\b(?:KEYT|KEYM|RK|KEY|stateKey)\s*=\s*["']([^"']+)["']/g)) s.add(m[1]);
  return [...s].sort();
}

/** Ordem das partes do conteudo: o Spec exige "Como aprender" por ultimo. */
export function partes(t) {
  const r = [];
  for (const m of t.matchAll(
    /<section class="part[^"]*" id="([^"]+)">\s*<div class="ph"><span class="num">([^<]*)<\/span><div><h2>([^<]*)/g
  )) {
    r.push({ id: m[1], num: m[2].trim(), titulo: m[3].replace(/&amp;/g, '&').trim() });
  }
  return r;
}

/** Ordem dos marcos da trilha (array T). Serve para os dois formatos do arquivo. */
export function marcos(t) {
  return [...t.matchAll(/\bg:\s*"(\d+)"[\s\S]{0,160}?\bn:\s*"([^"]*)"/g)].map((m) => ({
    g: m[1],
    n: m[2].replace(/&amp;/g, '&').trim(),
  }));
}

/** Alvos locais de navegacao, com a ancora, para o check de links. */
export function alvosLocais(t) {
  const semCodigo = semScriptEstilo(t)
    .replace(/<pre[\s\S]*?<\/pre>/gi, '')
    .replace(/<code[\s\S]*?<\/code>/gi, '');
  const s = new Set();
  for (const m of semCodigo.matchAll(/\s(?:href|src)="([^"]+)"/g)) s.add(m[1]);
  for (const m of t.matchAll(/\burl\s*:\s*"([^"]+)"/g)) s.add(m[1]);
  return [...s].filter((u) => !/^(https?:|\/\/|mailto:|tel:|data:|javascript:|#$)/i.test(u)).sort();
}

const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2300}-\u{27BF}\u{FE0F}\u{2B00}-\u{2BFF}]/gu;

/**
 * O texto do documento somado ao dos scripts locais que ele carrega.
 * Necessario desde que o JS passou a ser extraido para assets/js/: sem isto,
 * tirar um bloco inline do HTML pareceria perda de chave de localStorage.
 */
export function textoComScripts(doc) {
  const t = ler(doc);
  const base = path.posix.dirname(doc);
  let extra = '';
  for (const m of t.matchAll(/<script\b[^>]*\ssrc="([^"]+)"/gi)) {
    const src = m[1];
    if (/^(https?:)?\/\//i.test(src)) continue;
    const alvo = path.join(RAIZ, path.posix.join(base, src));
    try { extra += '\n' + fs.readFileSync(alvo, 'utf8'); } catch { /* ausente: o check-links reporta */ }
  }
  return t + extra;
}

/** Tudo o que define o documento hoje. E isto que a migracao nao pode perder. */
export function inventario(doc) {
  const t = ler(doc);
  const tc = textoComScripts(doc);
  const inline = {
    js: [...t.matchAll(/<script\b(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]),
    css: [...t.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]),
  };
  const externos = [...t.matchAll(/<script\b[^>]*\ssrc="([^"]+)"/gi)].map((m) => m[1]);
  const tp = topicos(t);
  return {
    bytes: t.length,
    titulo: (t.match(/<title>([^<]*)/) || ['', ''])[1].trim(),
    topicos: tp.length,
    nosAprox: (t.match(/<[a-zA-Z][^>]*>/g) || []).length,
    emoji: (semScriptEstilo(t).match(EMOJI) || []).length,
    inlineJsKB: Math.round(inline.js.join('').length / 1024),
    inlineCssKB: Math.round(inline.css.join('').length / 1024),
    blocosJs: inline.js.length,
    scriptsExternos: externos, // repetido de proposito: duplicata e defeito
    // tudo o que pode viver no HTML ou no JS extraido usa o texto combinado
    partes: partes(t),
    marcos: marcos(tc),
    ids: ids(tc),
    marcadores: marcadores(tc),
    localStorage: chavesLocalStorage(tc),
    alvos: alvosLocais(tc),
    desbalanco: desbalanco(t),
    lista: tp,
  };
}
