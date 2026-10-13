import fs from 'node:fs';

const docsUrl = 'https://thallyscezar.github.io/docs-md/';
const linkNavBtn = `      <a href="${docsUrl}" class="nav-btn" target="_blank" rel="noopener noreferrer" style="color:var(--lime);border-color:color-mix(in srgb,var(--lime) 40%,transparent);background:color-mix(in srgb,var(--lime) 10%,transparent)">📄 Docs IA ↗</a>\n`;

// 1. ferramentas/prompt-studio.html
let ps = fs.readFileSync('ferramentas/prompt-studio.html', 'utf8');
if (!ps.includes(docsUrl)) {
  const target = '<a href="tutorial-api.html" class="nav-btn primary">🔑 Guia de APIs</a>\n';
  if (ps.includes(target)) {
    ps = ps.replace(target, target + linkNavBtn);
    fs.writeFileSync('ferramentas/prompt-studio.html', ps, 'utf8');
    console.log('✔ Link adicionado em ferramentas/prompt-studio.html');
  } else {
    // try with \r\n
    const targetCRLF = '<a href="tutorial-api.html" class="nav-btn primary">🔑 Guia de APIs</a>\r\n';
    if (ps.includes(targetCRLF)) {
      ps = ps.replace(targetCRLF, targetCRLF + linkNavBtn.replace(/\n/g, '\r\n'));
      fs.writeFileSync('ferramentas/prompt-studio.html', ps, 'utf8');
      console.log('✔ Link adicionado em ferramentas/prompt-studio.html (CRLF)');
    } else {
      console.error('Falha ao encontrar alvo em prompt-studio.html');
    }
  }
}

// 2. ferramentas/refinador.html
let ref = fs.readFileSync('ferramentas/refinador.html', 'utf8');
if (!ref.includes(docsUrl)) {
  const target = '<a href="tutorial-api.html" class="nav-btn">🔑 Guia de APIs</a>\n';
  const targetCRLF = '<a href="tutorial-api.html" class="nav-btn">🔑 Guia de APIs</a>\r\n';
  if (ref.includes(target)) {
    ref = ref.replace(target, target + linkNavBtn);
    fs.writeFileSync('ferramentas/refinador.html', ref, 'utf8');
    console.log('✔ Link adicionado em ferramentas/refinador.html');
  } else if (ref.includes(targetCRLF)) {
    ref = ref.replace(targetCRLF, targetCRLF + linkNavBtn.replace(/\n/g, '\r\n'));
    fs.writeFileSync('ferramentas/refinador.html', ref, 'utf8');
    console.log('✔ Link adicionado em ferramentas/refinador.html (CRLF)');
  } else {
    console.error('Falha ao encontrar alvo em refinador.html');
  }
}

// 3. ferramentas/tutorial-api.html
let tut = fs.readFileSync('ferramentas/tutorial-api.html', 'utf8');
if (!tut.includes(docsUrl)) {
  const target = '<a href="tutorial-api.html" class="nav-btn primary">🔑 Guia de APIs</a>\n';
  const targetCRLF = '<a href="tutorial-api.html" class="nav-btn primary">🔑 Guia de APIs</a>\r\n';
  if (tut.includes(target)) {
    tut = tut.replace(target, target + linkNavBtn);
    fs.writeFileSync('ferramentas/tutorial-api.html', tut, 'utf8');
    console.log('✔ Link adicionado em ferramentas/tutorial-api.html');
  } else if (tut.includes(targetCRLF)) {
    tut = tut.replace(targetCRLF, targetCRLF + linkNavBtn.replace(/\n/g, '\r\n'));
    fs.writeFileSync('ferramentas/tutorial-api.html', tut, 'utf8');
    console.log('✔ Link adicionado em ferramentas/tutorial-api.html (CRLF)');
  } else {
    console.error('Falha ao encontrar alvo em tutorial-api.html');
  }
}

// 4. trilhas/ia.html
let ia = fs.readFileSync('trilhas/ia.html', 'utf8');
if (!ia.includes(docsUrl)) {
  const target = '<a href="ia.html" style="color:var(--muted)">Ver Versão V1 (Fundações &amp; Vault) →</a>';
  const replacement = `${target}\n        <span style="color:var(--line2)">|</span>\n        <a href="${docsUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--lime);font-weight:700">📄 Documentações IA &amp; Context MDs (docs-md) ↗</a>`;
  if (ia.includes(target)) {
    ia = ia.replace(target, replacement);
    fs.writeFileSync('trilhas/ia.html', ia, 'utf8');
    console.log('✔ Link adicionado em trilhas/ia.html');
  } else {
    console.error('Falha ao encontrar alvo em trilhas/ia.html');
  }
}

// 5. README.md
let rm = fs.readFileSync('README.md', 'utf8');
if (!rm.includes(docsUrl)) {
  const target = '| [Guia de APIs](ferramentas/tutorial-api.html) | Passo a passo para obter chaves gratuitas sem necessidade de cartão de crédito |\n';
  const newRow = `| [Documentações IA (docs-md)](${docsUrl}) | Repositório de documentações Markdown, modelos de Context e regras de IA |\n`;
  if (rm.includes(target)) {
    rm = rm.replace(target, target + newRow);
    fs.writeFileSync('README.md', rm, 'utf8');
    console.log('✔ Link adicionado em README.md');
  } else {
    const targetCRLF = '| [Guia de APIs](ferramentas/tutorial-api.html) | Passo a passo para obter chaves gratuitas sem necessidade de cartão de crédito |\r\n';
    if (rm.includes(targetCRLF)) {
      rm = rm.replace(targetCRLF, targetCRLF + newRow.replace(/\n/g, '\r\n'));
      fs.writeFileSync('README.md', rm, 'utf8');
      console.log('✔ Link adicionado em README.md (CRLF)');
    } else {
      console.error('Falha ao encontrar alvo em README.md');
    }
  }
}
