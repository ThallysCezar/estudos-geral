import fs from 'node:fs';

const text = fs.readFileSync('trilhas/ia.html', 'utf8');
const lines = text.split('\n');

console.log('Total de linhas em trilhas/ia.html:', lines.length);

lines.forEach((l, i) => {
  if (l.includes('<article class="topic"')) {
    console.log(`${i + 1}: ${l.trim()}`);
  }
});
