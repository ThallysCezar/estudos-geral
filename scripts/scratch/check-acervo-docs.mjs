import fs from 'node:fs';

const acervo = fs.readFileSync('acervo.html', 'utf8');
const docsMatch = acervo.match(/var\s+DOCS\s*=\s*(\[[\s\S]*?\]);/);
if (docsMatch) {
  const docs = new Function(`return ${docsMatch[1]}`)();
  console.log('Total DOCS no acervo:', docs.length);
  const py = docs.find(d => d.file.includes('python'));
  console.log('Python em DOCS:', py);
}
