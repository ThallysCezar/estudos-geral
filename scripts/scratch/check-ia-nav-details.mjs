import fs from 'node:fs';

const html = fs.readFileSync('trilhas/ia.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, i) => {
  if (l.includes('<nav') || (l.includes('nav') && l.includes('appendChild'))) {
    console.log(i + 1, l.slice(0, 100));
  }
});
