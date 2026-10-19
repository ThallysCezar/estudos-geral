import fs from 'node:fs';

const content = fs.readFileSync('cadernos/financas-investimentos.html', 'utf8');
const optBlockRegex = /<div class="te-options">([\s\S]*?)<\/div>/g;
let match;
let total = 0;
let longest = 0;
const pos = { A: 0, B: 0, C: 0 };

while ((match = optBlockRegex.exec(content)) !== null) {
  const block = match[1];
  const buttonRegex = /<button class="te-opt"[^>]*data-correct="([^"]*)"[^>]*>([\s\S]*?)<\/button>/g;
  let bMatch;
  const options = [];
  const letters = ['A', 'B', 'C'];
  let idx = 0;
  while ((bMatch = buttonRegex.exec(block)) !== null) {
    const isCorrect = bMatch[1] === 'true';
    const text = bMatch[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    options.push({ isCorrect, length: text.length, text, letter: letters[idx++] });
  }
  total++;
  const correct = options.find(o => o.isCorrect);
  const wrong = options.filter(o => !o.isCorrect);
  if (correct) {
    pos[correct.letter]++;
    const maxWrong = Math.max(...wrong.map(o => o.length));
    if (correct.length > maxWrong) longest++;
  }
}

console.log({ total, longest, pct: ((longest / total) * 100).toFixed(1) + '%', pos });
