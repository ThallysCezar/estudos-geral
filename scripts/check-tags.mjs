import fs from 'node:fs';
import path from 'node:path';

const files = [];
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (f.startsWith('.') || f === 'node_modules' || f === 'site-angular' || f === 'Arquivados' || f === 'site-estudos-claude') continue;
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
}
walk('.');

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  for (const tag of ['script', 'style', 'div', 'p', 'article', 'section', 'details', 'figure']) {
    const open = (content.match(new RegExp('<' + tag + '(\\s|>)', 'gi')) || []).length;
    const close = (content.match(new RegExp('</' + tag + '>', 'gi')) || []).length;
    if (open !== close) {
      console.log(`${file}: <${tag}> open=${open}, close=${close}, diff=${open - close}`);
    }
  }
}
