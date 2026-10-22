import fs from 'node:fs';

let js = fs.readFileSync('assets/js/index.inline.js', 'utf8');
js = js.replace('trilhas/ia.html#t_01', 'trilhas/ia.html#t1-agentes');
fs.writeFileSync('assets/js/index.inline.js', js, 'utf8');
console.log('Atualizado para trilhas/ia.html#t1-agentes');
