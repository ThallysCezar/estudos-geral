import fs from 'node:fs';

const html = fs.readFileSync('trilhas/ia.html', 'utf8');
const p7Idx = html.indexOf('<section class="part" id="projetos">');
const endIdx = html.indexOf('<!-- FOOTER -->');

console.log('Parte 7 e 8 comprimento:', endIdx - p7Idx);
fs.writeFileSync('scripts/scratch/current-p7-p8.html', html.slice(p7Idx, endIdx), 'utf8');
console.log('Salvo em scripts/scratch/current-p7-p8.html para inspeção.');
