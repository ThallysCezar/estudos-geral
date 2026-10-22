import fs from 'node:fs';

const lab = fs.readFileSync('lab/projetos.html', 'utf8');
const lines = lab.split('\n');

lines.forEach((l, i) => {
  if (l.includes('I01') || l.includes('I02') || l.includes('I03') || l.includes('I04') || l.includes('Oficina 6') || l.includes('oficina-6')) {
    console.log(`${i + 1}: ${l.trim()}`);
  }
});
