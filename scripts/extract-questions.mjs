import fs from 'node:fs';
import path from 'node:path';

export function extractQuestions(filePath) {
  const content = fs.readFileSync(path.resolve(filePath), 'utf8');
  const exRegex = /<div class="topico-exercicio" data-exercise-id="([^"]+)">([\s\S]*?<div class="te-feedback"[^>]*><\/div>\s*<\/div>\s*<\/div>)/g;
  let match;
  const questions = [];

  while ((match = exRegex.exec(content)) !== null) {
    const id = match[1];
    const block = match[2];

    const pMatch = block.match(/<p class="te-pergunta">([\s\S]*?)<\/p>/);
    const iMatch = block.match(/<p class="te-instrucao">([\s\S]*?)<\/p>/);
    const pergunta = pMatch ? pMatch[1].trim() : '';
    const instrucao = iMatch ? iMatch[1].trim() : '';

    const bRegex = /<button class="te-opt"[^>]*data-correct="([^"]*)"[^>]*data-rationale="([^"]*)"[^>]*>([\s\S]*?)<\/button>/g;
    let bm;
    const options = [];
    while ((bm = bRegex.exec(block)) !== null) {
      const isCorrect = bm[1] === 'true';
      const rationale = bm[2];
      const rawText = bm[3].trim();
      const letMatch = rawText.match(/<span class="te-letter">([A-D])<\/span>\s*([\s\S]*)/);
      const letter = letMatch ? letMatch[1] : '';
      const text = letMatch ? letMatch[2].trim() : rawText;
      options.push({ letter, isCorrect, text, rationale });
    }

    questions.push({ id, pergunta, instrucao, options, fullBlock: match[0] });
  }

  return questions;
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const q = extractQuestions('cadernos/oratoria.html');
  console.log(`Extraídas ${q.length} questões de oratoria.html`);
  console.log(JSON.stringify(q[0], null, 2));
}
