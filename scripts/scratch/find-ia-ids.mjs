import fs from 'node:fs';
const ia = fs.readFileSync('trilhas/ia.html', 'utf8');
const ids = [...ia.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
console.log('Total de IDs em ia.html:', ids.length);
console.log('Alguns IDs de tópicos:', ids.filter(id => id.startsWith('t') || id.startsWith('n') || id.startsWith('p')).slice(0, 20));
