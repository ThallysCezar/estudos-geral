import fs from 'node:fs';

const html = fs.readFileSync('cadernos/python-para-java.html', 'utf8');

// Quizzes
const exercises = [...html.matchAll(/<div class="topico-exercicio"[\s\S]*?<\/div>\s*<\/div>/g)];
console.log('Total de exercícios em python-para-java.html:', exercises.length);

exercises.forEach((ex, i) => {
  const optMatches = [...ex[0].matchAll(/<button class="te-opt"[^>]*data-correct="([^"]*)"[^>]*>([\s\S]*?)<\/button>/g)];
  const letters = ['A', 'B', 'C', 'D'];
  let correctLetter = '';
  optMatches.forEach((m, idx) => {
    if (m[1] === 'true') correctLetter = letters[idx];
  });
  console.log(`Q${i + 1}: Correta = ${correctLetter}`);
});
