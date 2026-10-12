// Reconstroi cadernos/governanca-seguranca.html no chassi do projeto,
// usando cadernos/git.html como molde estrutural e assets/js/git.inline.js
// como motor da trilha. Nao inventa marcacao: copia a existente.
import fs from 'node:fs';
import path from 'node:path';

const RAIZ = process.argv[2];
const GRAVAR = process.argv.includes('--gravar');
const S = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));

const { META } = await import('file://' + S + '/gov-conteudo.mjs');
const { TOPICOS_A } = await import('file://' + S + '/gov-topicos-a.mjs');
const { TOPICOS_B } = await import('file://' + S + '/gov-topicos-b.mjs');
const { TOPICOS_C, COMO_APRENDER } = await import('file://' + S + '/gov-topicos-c.mjs');
const { DG, figura } = await import('file://' + S + '/gov-dg.mjs');

const TOPICOS = [...TOPICOS_A, ...TOPICOS_B, ...TOPICOS_C];
const esc = (s) => s;

// ---------------------------------------------------------------- topicos
let ORDEM = 0;
function bloco(t) {
  const L = [];
  L.push(`      <article class="topic" id="${t.id}">`);
  L.push(`        <div class="th"><h3>${t.titulo}</h3><div class="badges">${t.badges.map((b) => `<span class="badge b-ess">${b}</span>`).join('')}</div></div>`);
  L.push(`        <p class="direto"><b>Direto:</b> ${t.direto}</p>`);
  L.push('');
  if (t.caso) L.push(`        <div class="caso"><b>${t.caso[0]}</b>\n          <p>${t.caso[1]}</p>\n        </div>`);
  if (t.analogia) L.push(`        <div class="analogia"><i class="ic">≈</i><p><b>Analogia.</b> ${t.analogia}</p></div>`);
  if (t.duo) {
    L.push('        <div class="duo o">');
    L.push(`          <div><h4>${t.duo.surgiu[0]}</h4><p>${t.duo.surgiu[1]}</p>`);
    L.push(`            <div class="repl"><b>Veio substituir:</b> ${t.duo.repl}</div>`);
    L.push('          </div>');
    L.push(`          <div><h4>O mecanismo</h4>${t.mecanismo.join('\n            ')}</div>`);
    L.push('        </div>');
  } else {
    L.push(`        ${t.mecanismo.join('\n        ')}`);
  }
  if (t.dg) L.push(figura(t.dg));
  if (t.serve) {
    L.push('        <div class="duo">');
    L.push(`          <div><h4>Para que serve</h4><p>${t.serve}</p></div>`);
    L.push(`          <div><h4>Por que é importante</h4><p>${t.importa}</p></div>`);
    L.push('        </div>');
  }
  if (t.pratica) L.push(`        <div class="cs">${t.pratica.join('<br>')}</div>`);
  if (t.alem) {
    L.push('        <details class="alem">');
    L.push(`          <summary><span class="alem-tag">${t.alem.tag}</span><span class="alem-opt">${t.alem.opt}</span></summary>`);
    L.push(`          <div class="alem-body">${t.alem.corpo.join('')}<small class="alem-src">${t.alem.fonte}</small></div>`);
    L.push('        </details>');
  }
  if (t.ver) L.push(`        <div class="ver"><b>onde a teoria mora</b>${t.ver}</div>`);
  if (t.gotcha) {
    L.push(`        <div class="gotcha"><b>${t.gotcha[0]}</b>`);
    L.push('          <ul>');
    for (const g of t.gotcha[1]) L.push(`            <li>${g}</li>`);
    L.push('          </ul>');
    L.push('        </div>');
  }
  if (t.fechamento) L.push(fechamento(t, ORDEM++));
  L.push(`        <button class="done" type="button" data-k="${t.id}">marcar dominado</button>`);
  L.push('      </article>');
  return L.join('\n');
}

function fechamento(t, ordem) {
  const f = t.fechamento;
  const dots = ['teal', 'purple', 'rose'];
  const itens = f.revisao.map(([cor, titulo, txt], i) =>
    `                <div class="tr-item">
                  <span class="tr-dot ${cor || dots[i]}"></span>
                  <div class="tr-corpo">
                    <b>${titulo}</b>
                    <p>${txt}</p>
                  </div>
                </div>`).join('\n');
  // Rotaciona as alternativas de forma deterministica por topico, para a correta
  // nao ficar sempre na mesma letra. O conteudo nao muda; so a ordem.
  const giro = ordem % f.exercicio.opcoes.length;
  const ordenadas = f.exercicio.opcoes.slice(giro).concat(f.exercicio.opcoes.slice(0, giro));
  const opts = ordenadas.map(([txt, certa, racional], i) =>
    `                  <button class="te-opt" type="button" data-correct="${certa}" data-rationale="${racional.replace(/"/g, '&quot;')}">
                    <span class="te-letter">${'ABC'[i]}</span> ${txt}
                  </button>`).join('\n');
  return `
          <div class="topico-fechamento">

            <div class="topico-revisao">
              <div class="tr-header">
                <span class="tr-badge">RECAPITULANDO O ASSUNTO</span>
                <h4 class="tr-title">${f.titulo}</h4>
              </div>
              <div class="tr-grid">
${itens}
              </div>
              <div class="tr-takeaway">
                <div class="tr-takeaway-item alert">
                  <span class="tr-icon alert-icon">!</span>
                  <div><b>${f.pegadinha[0]}:</b><p>${f.pegadinha[1]}</p></div>
                </div>
                <div class="tr-takeaway-item tip">
                  <span class="tr-icon tip-icon">i</span>
                  <div><b>Modelo mental:</b><p><strong>${f.modelo[0]}</strong>. ${f.modelo[1]}</p></div>
                </div>
              </div>
            </div>

            <div class="topico-exercicio" data-exercise-id="ex-gov-${t.id}">
              <div class="te-header">
                <div class="te-badge"><span>DESAFIO PRÁTICO DE FIXAÇÃO #${t.id}</span></div>
                <div class="te-reward"><span class="te-xp-badge">+50 XP</span><span class="te-status">Aguardando resposta</span></div>
              </div>
              <div class="te-body">
                <p class="te-pergunta"><strong>${f.exercicio.cenario}</strong></p>
                <p class="te-instrucao">${f.exercicio.pergunta}</p>
                <div class="te-options">
${opts}
                </div>
              </div>
            </div>

            <div class="topico-flashcard">
              <div class="tf-tag ok">FLASHCARD</div>
              <div class="tf-pergunta">${f.flashcard[0]}</div>
              <div class="tf-resposta">${f.flashcard[1]}<span class="tf-hint">← Toque para voltar à pergunta</span></div>
            </div>

          </div>
`;
}

// ---------------------------------------------------------------- montagem
const molde = fs.readFileSync(path.join(RAIZ, 'cadernos/git.html'), 'utf8');
const motor = fs.readFileSync(path.join(RAIZ, 'assets/js/git.inline.js'), 'utf8');

const iHero = molde.indexOf('<header class="hero">');
const iTrail = molde.indexOf('<section class="part trailwrap"');
const fimTrail = molde.indexOf('</section>', molde.indexOf('id="track"')) + 10;
const iFooter = molde.indexOf('<footer');

let cabeca = molde.slice(0, iHero);
cabeca = cabeca
  .replace(/<title>[^<]*<\/title>/, `<title>${META.titulo} — trilha visual e conteúdo</title>`)
  .replace(/<i>⑂<\/i><b>Git<\/b>/, '<i>§</i><b>Governança e Segurança</b>')
  .replace(/<p class="sub">[^<]*<\/p>/, '<p class="sub">Quem decide, quem responde, e o que sobra de risco.</p>')
  .replace(/placeholder="buscar em tudo…[^"]*"/, 'placeholder="buscar em tudo… (risco, IAM, LGPD)"');

const hero = `<header class="hero">
      <span class="eyebrow">${META.eyebrow}</span>
      <h1>${META.h1}</h1>
      <p class="lede">${META.lede}</p>

      <figure class="topic-img">
        <img src="../assets/img/governanca/governanca_ti_mapa_mental.png" alt="Mapa mental: governança de TI e segurança da informação" loading="lazy" title="Clique para abrir no visualizador ampliado" onclick="openImgModal(this.src, this.alt, 'MAPA MENTAL PRINCIPAL')" decoding="async">
        <figcaption>
          <span>MAPA MENTAL PRINCIPAL</span>
          <em>GOVERNANÇA DE TI E SEGURANÇA DA INFORMAÇÃO</em>
        </figcaption>
      </figure>

      <div class="jump">
        <a href="#trilha"><b>↓ A trilha visual</b>navegar, consultar e revisar</a>
        <a href="#p1"><b>↓ O conteúdo</b>da decisão ao incidente</a>
      </div>
      <div class="legenda">
${META.legenda.map(([b, s]) => `        <div><b>${b}</b><span>${s}</span></div>`).join('\n')}
      </div>
    </header>

    `;

const trilha = `<section class="part trailwrap" id="trilha">
      <div class="ph"><span class="num">↗</span><div><h2>A trilha: da decisão ao incidente</h2><p>Comece por aqui. Siga o caminho de cima para baixo, clique em qualquer nó para abrir o painel — e use o modo teste para revisar sem reler.</p></div></div>
      <div class="legend" id="lg"></div>
      <div class="trail" id="track"></div>
    </section>

`;

const todos = [...TOPICOS, COMO_APRENDER];
const corpo = META.partes.map((p) => {
  const meus = todos.filter((t) => t.parte === p.id);
  if (!meus.length) return '';
  return `    <!-- ===================== PARTE ${p.num} ===================== -->
    <section class="part" id="${p.id}">
      <div class="ph"><span class="num">${p.num}</span><div><h2>${p.h2}</h2><p>${p.sub}</p></div></div>

${meus.map(bloco).join('\n\n')}
    </section>

`;
}).join('');

let rodape = molde.slice(iFooter);
rodape = rodape
  .replace(/<p>Git completo[\s\S]*?<\/p>/, `<p>${META.titulo} · outubro de 2026 · caderno de apoio do acervo, em tema Dracula. Governança define quem decide e qual risco a organização aceita; segurança é o resultado contínuo disso. Material educacional: não substitui parecer jurídico nem avaliação de conformidade. Os pares deste arquivo são <code class="i">Arquitetura completa</code>, <code class="i">Nuvem completo</code> e <code class="i">System Design completo</code>.</p>`)
  .replace('../assets/js/git.inline.js', `../assets/js/${META.slug}.inline.js`);

const html = cabeca + hero + trilha + corpo + rodape;

// ---------------------------------------------------------------- motor js
const iDG = motor.indexOf('var DG=');
const iT = motor.indexOf('var T=[');
const fimT = motor.indexOf('\n];', iT) + 3;

const T = todos.map((t, i) => t).reduce((acc, t) => {
  const p = META.partes.find((x) => x.id === t.parte);
  let g = acc.find((x) => x.id === p.id);
  if (!g) { g = { id: p.id, num: p.num, nome: p.h2.split(':')[0], itens: [] }; acc.push(g); }
  g.itens.push(t);
  return acc;
}, []);

const CORES = ['--purple', '--cyan', '--green', '--orange', '--pink', '--amber'];
const arrT = 'var T=[\n' + T.map((g, i) => {
  const itens = g.itens.map((t) => {
    const cf = t.mecanismo.join(' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 300);
    const erro = t.gotcha ? t.gotcha[1][0].replace(/<[^>]+>/g, '').trim() : 'pular a etapa de decidir quem aceita o risco.';
    return ` {t:${JSON.stringify(t.titulo)},x:${JSON.stringify(t.direto.slice(0, 70) + '…')},${t.dg ? `dg:"${t.dg}",` : ''}oq:${JSON.stringify(t.direto)},ps:${JSON.stringify(t.serve || '')},cf:${JSON.stringify(cf + ' <b>Erro comum:</b> ' + erro)}${t.caso ? `,caso:${JSON.stringify(t.caso[1].replace(/<[^>]+>/g, '').trim())}` : ''}}`;
  }).join(',\n');
  return `{g:"${g.num}",n:${JSON.stringify(g.nome)},s:${JSON.stringify(META.partes[i].sub.slice(0, 80))},c:"var(${CORES[i % CORES.length]})",cs:"var(${CORES[i % CORES.length]}-soft)",items:[\n${itens}\n]}`;
}).join(',\n') + '\n];';

const linhasDG = Object.entries(DG).map(
  ([k, v]) => ' ' + JSON.stringify(k) + ':W(' + v.h + ',' + JSON.stringify(v.inner) + ')'
);
const arrDG = 'var DG={\n' + linhasDG.join(',\n') + '\n};\n';

let js = motor.slice(0, iDG) + arrDG + '\n' + arrT + motor.slice(fimT);
js = js
  .replace(/Extraido de cadernos\/git\.html/, `Extraido de cadernos/${META.slug}.html`)
  .replace(/KEYT\s*=\s*"[^"]+"/, `KEYT="${META.chaves.KEYT}"`)
  .replace(/KEYM\s*=\s*"[^"]+"/, `KEYM="${META.chaves.KEYM}"`)
  .replace(/RK\s*=\s*"[^"]+"/, `RK="${META.chaves.RK}"`);

console.log(`HTML: ${Math.round(html.length / 1024)} KB · ${todos.length} topicos · ${T.length} marcos`);
console.log(`JS  : ${Math.round(js.length / 1024)} KB`);
console.log(`chaves: ${META.chaves.KEYT} / ${META.chaves.KEYM} / ${META.chaves.RK}`);

if (GRAVAR) {
  fs.writeFileSync(path.join(RAIZ, `cadernos/${META.slug}.html`), html);
  fs.writeFileSync(path.join(RAIZ, `assets/js/${META.slug}.inline.js`), js);
  console.log('\ngravado.');
} else {
  console.log('\n(simulacao — use --gravar)');
}
