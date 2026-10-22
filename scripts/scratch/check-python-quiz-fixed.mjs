import fs from 'node:fs';

const html = fs.readFileSync('cadernos/python-para-java.html', 'utf8');

const optBlocks = [...html.matchAll(/<div class="te-options">([\s\S]*?)<\/div>/g)];
console.log('Total de blocos te-options:', optBlocks.length);

const dist = { A: 0, B: 0, C: 0, D: 0 };
optBlocks.forEach((block, i) => {
  const buttons = [...block[1].matchAll(/<button class="te-opt"[^>]*data-correct="([^"]*)"[^>]*>([\s\S]*?)<\/button>/g)];
  let found = '';
  buttons.forEach(b => {
    const isCorrect = b[1] === 'true';
    const letterMatch = b[2].match(/<span class="te-letter">([A-D])<\/span>/);
    const letter = letterMatch ? letterMatch[1] : '?';
    if (isCorrect) {
      found = letter;
      dist[letter] = (dist[letter] || 0) + 1;
    }
  });
  console.log(`Q${i + 1}: Correta = ${found}`);
});

console.log('Distribuição:', dist);
