import fs from 'node:fs';

const html = fs.readFileSync('trilhas/ia.html', 'utf8');

// Buscar nav links
const navMatch = html.match(/<nav[\s\S]*?<\/nav>/);
if (navMatch) {
  const links = [...navMatch[0].matchAll(/href="([^"]+)"/g)].map(m => m[1]);
  console.log('Total nav links:', links.length);
  console.log('Links das partes 7 e 8:', links.filter(l => l.includes('7') || l.includes('8') || l.includes('proj')));
}

// Buscar grupos em DATA
const dataMatch = html.match(/var\s+DATA\s*=\s*(\[[\s\S]*?\]);\s*var\s+flat/);
if (dataMatch) {
  const DATA = new Function(`return ${dataMatch[1]}`)();
  console.log('Total grupos em DATA:', DATA.length);
  DATA.forEach(g => {
    console.log(`Grupo ${g.g}: ${g.n} (${g.items.length} items)`);
  });
}
