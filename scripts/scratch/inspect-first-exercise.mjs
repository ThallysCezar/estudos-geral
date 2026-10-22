import fs from 'node:fs';

const html = fs.readFileSync('cadernos/python-para-java.html', 'utf8');
const match = html.match(/<div class="topico-exercicio"[\s\S]*?<\/div>\s*<\/div>/);
if (match) {
  console.log(match[0]);
} else {
  console.log('Não encontrou topico-exercicio');
}
