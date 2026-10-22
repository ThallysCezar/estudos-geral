import fs from 'node:fs';

// 1. Fix trilhas/ia.html
let ia = fs.readFileSync('trilhas/ia.html', 'utf8');
// Fix href="#t7-canais" -> href="#t8-canais"
ia = ia.replace(/href="#t7-canais"/g, 'href="#t8-canais"');
// Fix href="#t8-escada" -> href="#t7-escada"
ia = ia.replace(/href="#t8-escada"/g, 'href="#t7-escada"');
fs.writeFileSync('trilhas/ia.html', ia, 'utf8');
console.log('Fixed links in trilhas/ia.html');

// 2. Fix cadernos/python-para-java.html
let py = fs.readFileSync('cadernos/python-para-java.html', 'utf8');
// Fix href="../trilhas/ia.html#t8-escada" -> href="../trilhas/ia.html#t7-escada"
py = py.replace(/href="\.\.\/trilhas\/ia\.html#t8-escada"/g, 'href="../trilhas/ia.html#t7-escada"');
// Also check if any local #t8-escada exists
py = py.replace(/href="#t8-escada"/g, 'href="../trilhas/ia.html#t7-escada"');
fs.writeFileSync('cadernos/python-para-java.html', py, 'utf8');
console.log('Fixed links in cadernos/python-para-java.html');
