// Suíte de testes automatizados de regressão e contratos (Node:test)
// Garante que nenhuma alteração arquitetural ou migração quebre rotas, links,
// estados de localStorage, segurança de backup, dados da paleta ou contratos de tema.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const RAIZ = path.resolve(new URL('../..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));

/**
 * Le um documento junto com o JavaScript dos <script src> locais que ele carrega.
 * Desde 2026-10-09 o JS inline foi extraido para assets/js/*.inline.js, para sair
 * do caminho critico de renderizacao. Contratos como PALETTE_DATA, SEM e as
 * protecoes de backup vivem nesses arquivos agora, entao ler so o HTML daria
 * falso negativo.
 */
function lerComScripts(docRelativo) {
  const abs = path.join(RAIZ, docRelativo);
  const html = fs.readFileSync(abs, 'utf8');
  const base = path.posix.dirname(docRelativo.replace(/\\/g, '/'));
  let juntos = html;
  for (const m of html.matchAll(/<script\b[^>]*\ssrc="([^"]+)"/gi)) {
    const src = m[1];
    if (/^(https?:)?\/\//i.test(src)) continue;
    try {
      juntos += '\n' + fs.readFileSync(path.join(RAIZ, path.posix.join(base, src)), 'utf8');
    } catch { /* ausencia de arquivo e coberta pelo teste de links */ }
  }
  return juntos;
}

const DOCUMENTOS_ESPERADOS = [
  'index.html',
  'acervo.html',
  'trilhas/java.html',
  'trilhas/spring.html',
  'trilhas/arquitetura.html',
  'trilhas/docker-kubernetes.html',
  'trilhas/nuvem.html',
  'trilhas/mensageria.html',
  'trilhas/system-design.html',
  'trilhas/ia.html',
  'cadernos/conceitos-backend.html',
  'cadernos/biblioteca.html',
  'cadernos/linux.html',
  'cadernos/git.html',
  'cadernos/ingles.html',
  'cadernos/oratoria.html',
  'cadernos/governanca-seguranca.html',
  'cadernos/financas-investimentos.html',
  'lab/projetos.html',
  'ferramentas/pomodoro.html'
];

test('1. Existência e integridade de todos os 18 documentos fundamentais', () => {
  for (const doc of DOCUMENTOS_ESPERADOS) {
    const abs = path.join(RAIZ, doc);
    assert.ok(fs.existsSync(abs), `Documento obrigatório não encontrado: ${doc}`);
    const stat = fs.statSync(abs);
    const tamanhoMinimo = doc === 'ferramentas/pomodoro.html' ? 3000 : 5000;
    assert.ok(stat.size > tamanhoMinimo, `Documento ${doc} parece truncado ou vazio (${stat.size} bytes)`);
  }
});

test('2. Tema Dracula estrito e meta viewport responsivo em todos os documentos', () => {
  for (const doc of DOCUMENTOS_ESPERADOS) {
    const abs = path.join(RAIZ, doc);
    const html = fs.readFileSync(abs, 'utf8');
    assert.match(html, /<meta\s+name=["']viewport["']/i, `${doc} está sem meta viewport responsivo`);
    // Verifica tema Dracula
    const temDracula = /#282a36|dracula|color-scheme:\s*dark/i.test(html);
    assert.ok(temDracula, `${doc} não está configurado com o tema escuro Dracula`);
  }
});

test('3. Ausência da armadilha de realce de sintaxe em cascata (corrupção de tags ou vazamento como texto)', () => {
  for (const doc of DOCUMENTOS_ESPERADOS) {
    const abs = path.join(RAIZ, doc);
    const htmlSemScript = fs.readFileSync(abs, 'utf8')
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '');
    // Detecta se uma tag foi inserida dentro de outra (<span ... <span) ou se class="s"> vazou fora de tag (<span class=)
    const corrupcaoCascata = /<span[^>]*<span[^>]*class="s">/i.test(htmlSemScript);
    const vazamentoComoTexto = />\s*class="s">/i.test(htmlSemScript);
    assert.ok(!corrupcaoCascata, `Regressão detectada em ${doc}: aninhamento corrompido de tags de realce`);
    assert.ok(!vazamentoComoTexto, `Regressão detectada em ${doc}: vazamento de fragmento class="s"> visível no texto`);
  }
});

test('4. Contrato da Paleta de Comandos (Ctrl+K) em index.html', () => {
  const indexHtml = lerComScripts('index.html');
  const match = indexHtml.match(/var\s+PALETTE_DATA\s*=\s*(\[[\s\S]*?\]);/);
  assert.ok(match, 'Array PALETTE_DATA não encontrado em index.html');

  // Eval seguro do array com Function
  const palette = new Function(`return ${match[1]}`)();
  assert.ok(Array.isArray(palette), 'PALETTE_DATA deve ser um array');
  assert.ok(palette.length >= 25, `PALETTE_DATA tem poucos itens (${palette.length})`);

  for (const item of palette) {
    assert.ok(item.t, 'Item da paleta sem título (t)');
    assert.ok(item.url, `Item ${item.t} sem URL`);
    const [relFile, anchor] = item.url.split('#');
    const targetPath = path.join(RAIZ, relFile);
    assert.ok(fs.existsSync(targetPath), `URL da paleta aponta para arquivo inexistente: ${relFile}`);

    if (anchor) {
      const targetHtml = fs.readFileSync(targetPath, 'utf8');
      const hasId = targetHtml.includes(`id="${anchor}"`) || targetHtml.includes(`name="${anchor}"`);
      // Exceção posicional para ia.html se id gerado dinamicamente
      const isDynamicIa = relFile.includes('ia.html') && /^t_\d+$/.test(anchor);
      assert.ok(hasId || isDynamicIa, `Âncora #${anchor} não existe no arquivo ${relFile}`);
    }
  }
});

test('5. Contrato do Cronograma Semanal (SEM) em index.html', () => {
  const indexHtml = lerComScripts('index.html');
  const match = indexHtml.match(/var\s+SEM\s*=\s*(\[[\s\S]*?\]);/);
  assert.ok(match, 'Array SEM não encontrado em index.html');

  const sem = new Function(`return ${match[1]}`)();
  assert.equal(sem.length, 7, 'SEM deve ter exatamente 7 dias');

  const diasEsperados = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'];
  sem.forEach((dia, idx) => {
    assert.equal(dia.sig, diasEsperados[idx], `Dia ${idx} deve ter sigla ${diasEsperados[idx]}`);
    assert.ok(dia.tema, `Dia ${dia.sig} sem tema`);
    assert.ok(dia.cor, `Dia ${dia.sig} sem cor definida`);
    if (dia.doc) {
      assert.ok(fs.existsSync(path.join(RAIZ, dia.doc)), `Documento principal de ${dia.sig} não existe: ${dia.doc}`);
    }
  });

  // Terça-feira (opções de alternância)
  const terca = sem[1];
  assert.ok(terca.opcoes || terca.doc2, 'Terça-feira deve ter opções de alternância (Spring/Mensageria)');

  // Sábado (opções de alternância)
  const sabado = sem[5];
  assert.ok(sabado.doc2, 'Sábado deve ter documento alternativo (Inglês/Oratória)');
});

test('6. Contrato de Segurança de Backup e Restauração', () => {
  const indexHtml = lerComScripts('index.html');
  // Deve conter proteção contra vazamento de credenciais na exportação
  assert.match(indexHtml, /api_key|token|secret|credential|password/i, 'index.html não contém filtro de credenciais na exportação');
  // Deve conter proteção contra Prototype Pollution na importação
  assert.match(indexHtml, /__proto__|constructor|prototype/, 'index.html não contém proteção contra Prototype Pollution');
});

test('7. Integridade de links e âncoras locais em todos os documentos (check-links)', () => {
  const cacheIds = new Map();
  function getIds(abs) {
    if (!cacheIds.has(abs)) {
      const s = new Set();
      try {
        const t = fs.readFileSync(abs, 'utf8');
        for (const m of t.matchAll(/\sid\s*=\s*"([^"]+)"/g)) s.add(m[1]);
        for (const m of t.matchAll(/\sname\s*=\s*"([^"]+)"/g)) s.add(m[1]);
        if (/"t_"\s*\+/.test(t)) for (let i = 0; i < 60; i++) s.add('t_' + i);
      } catch {}
      cacheIds.set(abs, s);
    }
    return cacheIds.get(abs);
  }

  const semCodigo = (t) => t.replace(/<pre[\s\S]*?<\/pre>/gi, '').replace(/<code[\s\S]*?<\/code>/gi, '');
  const semScript = (t) => t.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  const EXTERNO = /^(https?:|\/\/|mailto:|tel:|data:|javascript:|#$)/i;

  let falhas = 0;
  for (const doc of DOCUMENTOS_ESPERADOS) {
    const abs = path.join(RAIZ, doc);
    const texto = fs.readFileSync(abs, 'utf8');
    const alvos = [];
    for (const m of semCodigo(semScript(texto)).matchAll(/\s(?:href|src)\s*=\s*"([^"]+)"/g)) {
      alvos.push(m[1]);
    }

    for (const alvo of alvos) {
      if (EXTERNO.test(alvo)) continue;
      const [parteArq, ancora] = alvo.split('#');
      let alvoAbs = parteArq ? path.resolve(path.dirname(abs), parteArq) : abs;

      if (!fs.existsSync(alvoAbs)) {
        assert.fail(`Link quebrado em ${doc}: ${alvo} -> arquivo ${alvoAbs} não existe`);
        falhas++;
      }
      if (ancora) {
        const idsAlvo = getIds(alvoAbs);
        if (idsAlvo && !idsAlvo.has(ancora)) {
          // Checa se ia.html dinâmico
          const isDyn = alvoAbs.includes('ia.html') && /^t_\d+$/.test(ancora);
          if (!isDyn) {
            assert.fail(`Âncora quebrada em ${doc}: #${ancora} não existe em ${alvoAbs}`);
            falhas++;
          }
        }
      }
    }
  }
  assert.equal(falhas, 0, 'Não deve haver nenhum link ou âncora quebrada');
});

test('8. Balanço de tags de bloco estruturais por tópico (article, section, div, details, figure)', () => {
  const BLOCOS = ['article', 'section', 'div', 'details', 'figure'];

  for (const doc of DOCUMENTOS_ESPERADOS) {
    const abs = path.join(RAIZ, doc);
    const texto = fs.readFileSync(abs, 'utf8');
    const artigos = texto
      .split('<article class="topic"')
      .slice(1)
      .map((a) => a.split('</article>')[0]);

    artigos.forEach((corpo, i) => {
      const topicoHtml = '<article class="topic"' + corpo + '</article>';
      for (const tag of BLOCOS) {
        const abertas = (topicoHtml.match(new RegExp('<' + tag + '(?=[\\s>/])', 'gi')) || []).length;
        const fechadas = (topicoHtml.match(new RegExp('</' + tag + '\\s*>', 'gi')) || []).length;
        assert.equal(
          abertas,
          fechadas,
          `Desbalanço da tag <${tag}> em ${doc} (tópico #${i + 1}): ${abertas} abertas vs ${fechadas} fechadas`
        );
      }
    });
  }
});

test('9. Existência dos elementos de interação fundamentais em index.html', () => {
  const indexHtml = lerComScripts('index.html');
  const idsObrigatorios = [
    'auraWrap',
    'aura',
    'btnPalette',
    'btnBackup',
    'paletteScrim',
    'paletteInput',
    'paletteResults',
    'backupModal',
    'btnExportarJson',
    'btnRestaurarJson',
    'progressMount',
    'mdl',
    'mdlBox',
    'wk'
  ];

  for (const id of idsObrigatorios) {
    const regex = new RegExp(`id=["']${id}["']`);
    assert.ok(regex.test(indexHtml), `Elemento DOM com ID '${id}' obrigatório não encontrado em index.html`);
  }
});

test('10. Contrato de correspondência e ordem dos pilares no chassi (Como usar = 3 e Por que importa = 4)', () => {
  // A convenção canônica do site e do Spec.md exige rigorosamente:
  // 1. O que é?
  // 2. Para que serve?
  // 3. Como usar / Como aplicar?
  // 4. Por que importa? / Porque importa?
  // 5. Como funciona por baixo dos panos?
  //
  // Validação feita pelo TEXTO DO RÓTULO (não pela classe CSS, que pode ser reutilizada
  // estilisticamente em listas e sub-blocos internos como no duo de On-Behalf-Of).
  const docsComPilares = [
    'trilhas/arquitetura.html',
    'trilhas/docker-kubernetes.html',
    'trilhas/java.html',
    'trilhas/mensageria.html',
    'trilhas/nuvem.html',
    'trilhas/spring.html'
  ];

  let totalUsar = 0;
  let totalImporta = 0;
  let totalOque = 0;
  let totalServe = 0;
  let totalFunciona = 0;

  for (const doc of docsComPilares) {
    const abs = path.join(RAIZ, doc);
    const html = fs.readFileSync(abs, 'utf8');

    const regex = /(?:<div\s+class=["']pilar-header["'][^>]*>|<h[45][^>]*>|<b>)[^<\r\n]*?(?:<[^>]+>[^<\r\n]*?)*?(\d+)\s*\.\s*([^<\r\n]+)/gi;
    let m;
    while ((m = regex.exec(html)) !== null) {
      const num = parseInt(m[1], 10);
      const texto = m[2].trim();

      if (/^Como\s*usar/i.test(texto)) {
        assert.equal(num, 3, `Em ${doc}, pilar 'Como usar' deve ser estritamente 3, mas encontrado ${num} ("${texto}")`);
        totalUsar++;
      } else if (/^Por\s*qu?e\s*(?:importa|é\s*importante)/i.test(texto)) {
        assert.equal(num, 4, `Em ${doc}, pilar 'Por que importa' deve ser estritamente 4, mas encontrado ${num} ("${texto}")`);
        totalImporta++;
      } else if (/^O\s*que\s*[eé]/i.test(texto)) {
        assert.equal(num, 1, `Em ${doc}, pilar 'O que é' deve ser estritamente 1, mas encontrado ${num} ("${texto}")`);
        totalOque++;
      } else if (/^Para\s*que\s*serve/i.test(texto)) {
        assert.equal(num, 2, `Em ${doc}, pilar 'Para que serve' deve ser estritamente 2, mas encontrado ${num} ("${texto}")`);
        totalServe++;
      } else if (/^Como\s*funciona/i.test(texto)) {
        assert.equal(num, 5, `Em ${doc}, pilar 'Como funciona' deve ser estritamente 5, mas encontrado ${num} ("${texto}")`);
        totalFunciona++;
      }
    }
  }

  // Garante que todos os 5 pilares foram amplamente inspecionados (mais de 1350 blocos verificados)
  assert.ok(totalUsar >= 270, `Esperado validar ao menos 270 blocos 'Como usar', mas encontrados ${totalUsar}`);
  assert.ok(totalImporta >= 270, `Esperado validar ao menos 270 blocos 'Por que importa', mas encontrados ${totalImporta}`);
  assert.ok(totalOque >= 270, `Esperado validar ao menos 270 blocos 'O que é', mas encontrados ${totalOque}`);
  assert.ok(totalServe >= 270, `Esperado validar ao menos 270 blocos 'Para que serve', mas encontrados ${totalServe}`);
  assert.ok(totalFunciona >= 270, `Esperado validar ao menos 270 blocos 'Como funciona', mas encontrados ${totalFunciona}`);
});

test('11. Inventário de documentos consistente entre Acervo, busca global e README', () => {
  const extrairArray = (texto, nome, origem) => {
    const match = texto.match(new RegExp(`var\\s+${nome}\\s*=\\s*(\\[[\\s\\S]*?\\]);`));
    assert.ok(match, `Array ${nome} não encontrado em ${origem}`);
    return new Function(`return ${match[1]}`)();
  };

  const documentos = DOCUMENTOS_ESPERADOS.filter((doc) =>
    doc.startsWith('trilhas/') || doc.startsWith('cadernos/') || doc.startsWith('lab/') || doc.startsWith('ferramentas/')
  );
  const acervo = lerComScripts('acervo.html');
  const index = lerComScripts('index.html');
  const docsAcervo = extrairArray(acervo, 'DOCS', 'acervo.html');
  const paletaAcervo = extrairArray(acervo, 'PALETTE_DATA', 'acervo.html');
  const paletaHome = extrairArray(index, 'PALETTE_DATA', 'index.html');

  const arquivosAcervo = docsAcervo.map((item) => item.file);
  assert.equal(new Set(arquivosAcervo).size, arquivosAcervo.length, 'DOCS do Acervo não deve repetir documentos');
  for (const doc of documentos) {
    assert.ok(arquivosAcervo.includes(doc), `${doc} está fora do índice pesquisável do Acervo`);
    assert.ok(paletaAcervo.some((item) => item.url.split('#')[0] === doc), `${doc} está fora da busca Ctrl+K do Acervo`);
    assert.ok(paletaHome.some((item) => item.url.split('#')[0] === doc), `${doc} está fora da busca Ctrl+K da Home`);
    assert.ok(fs.readFileSync(path.join(RAIZ, 'README.md'), 'utf8').includes(`(${doc})`), `${doc} está fora do inventário do README`);
  }
  assert.equal(arquivosAcervo.length, documentos.length, 'Acervo contém documentos fora do inventário oficial');
});
