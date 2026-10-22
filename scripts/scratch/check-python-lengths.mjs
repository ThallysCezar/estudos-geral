import fs from 'node:fs';

const html = fs.readFileSync('cadernos/python-para-java.html', 'utf8');
const optBlocks = [...html.matchAll(/<div class="te-options">([\s\S]*?)<\/div>/g)];

let total = 0;
let longest = 0;

optBlocks.forEach((block, i) => {
  const buttons = [...block[1].matchAll(/<button class="te-opt"[^>]*data-correct="([^"]*)"[^>]*>([\s\S]*?)<\/button>/g)];
  const options = [];
  buttons.forEach(b => {
    const isCorrect = b[1] === 'true';
    const text = b[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    options.push({ isCorrect, length: text.length, text });
  });

  if (options.length >= 2) {
    total++;
    const correctOpt = options.find(o => o.isCorrect);
    const wrongOpts = options.filter(o => !o.isCorrect);
    if (correctOpt && wrongOpts.length > 0) {
      const maxWrongLen = Math.max(...wrongOpts.map(o => o.length));
      if (correctOpt.length > maxWrongLen) {
        longest++;
        console.log(`Q${i + 1}: correta é mais longa (${correctOpt.length} vs ${maxWrongLen})`);
      }
    }
  }
});

console.log(`Total: ${total}, Correta é mais longa: ${longest} (${((longest / total) * 100).toFixed(1)}%)`);
