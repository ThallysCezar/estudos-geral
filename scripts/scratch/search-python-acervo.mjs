import fs from 'node:fs';

const acervo = fs.readFileSync('acervo.html', 'utf8');
const lines = acervo.split('\n');
lines.forEach((l, i) => {
  if (l.toLowerCase().includes('python')) {
    console.log(`${i + 1}: ${l.trim()}`);
  }
});
