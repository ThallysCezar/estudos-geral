import fs from 'node:fs';

const lab = fs.readFileSync('lab/projetos.html', 'utf8');
const matches = [...lab.matchAll(/id="([^"]*I0\d[^"]*)"/g)].map(m => m[1]);
console.log('Matches com I0 em lab/projetos.html:', matches);
