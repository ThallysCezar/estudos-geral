import fs from 'node:fs';
import path from 'node:path';

const files = [
  'cadernos/biblioteca.html',
  'cadernos/conceitos-backend.html',
  'cadernos/git.html',
  'cadernos/ingles.html',
  'cadernos/linux.html',
  'cadernos/oratoria.html',
  'trilhas/arquitetura.html',
  'trilhas/docker-kubernetes.html',
  'trilhas/ia.html',
  'trilhas/java.html',
  'trilhas/mensageria.html',
  'trilhas/nuvem.html',
  'trilhas/spring.html',
  'trilhas/system-design.html'
];

let totalQuestions = 0;
let correctIsLongest = 0;
let fileStats = {};

for (const rel of files) {
  const fullPath = path.resolve(rel);
  if (!fs.existsSync(fullPath)) continue;
  const content = fs.readFileSync(fullPath, 'utf8');

  // Regex to extract each topico-exercicio
  const exerciseRegex = /<div class="topico-exercicio"[\s\S]*?<\/div>\s*<\/div>/g;
  // Or match te-options
  const optBlockRegex = /<div class="te-options">([\s\S]*?)<\/div>/g;
  let match;
  let fileQ = 0;
  let fileLongest = 0;

  while ((match = optBlockRegex.exec(content)) !== null) {
    const block = match[1];
    const buttonRegex = /<button class="te-opt"[^>]*data-correct="([^"]*)"[^>]*>([\s\S]*?)<\/button>/g;
    let bMatch;
    let options = [];
    while ((bMatch = buttonRegex.exec(block)) !== null) {
      const isCorrect = bMatch[1] === 'true';
      // clean html tags inside option text
      const text = bMatch[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      options.push({ isCorrect, length: text.length, text });
    }
    if (options.length >= 2) {
      fileQ++;
      totalQuestions++;
      const correctOpt = options.find(o => o.isCorrect);
      const wrongOpts = options.filter(o => !o.isCorrect);
      if (correctOpt && wrongOpts.length > 0) {
        const maxWrongLen = Math.max(...wrongOpts.map(o => o.length));
        if (correctOpt.length > maxWrongLen) {
          fileLongest++;
          correctIsLongest++;
        }
      }
    }
  }

  fileStats[rel] = { total: fileQ, longest: fileLongest, pct: fileQ ? ((fileLongest / fileQ) * 100).toFixed(1) + '%' : '0%' };
}

console.log('=== AUDITORIA DE COMPRIMENTO DAS RESPOSTAS CORRETAS ===');
console.table(fileStats);
console.log(`TOTAL DE QUESTÕES: ${totalQuestions}`);
console.log(`QUESTÕES ONDE A CORRETA É A MAIS LONGA: ${correctIsLongest} (${((correctIsLongest/totalQuestions)*100).toFixed(1)}%)`);
