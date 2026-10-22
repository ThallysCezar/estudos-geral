import fs from 'node:fs';

const html = fs.readFileSync('cadernos/python-para-java.html', 'utf8');
const idx = html.indexOf('<div class="topico-exercicio"');
console.log(html.slice(idx, idx + 1500));
