import fs from 'node:fs';
import path from 'node:path';

const files = ['index.html', 'acervo.html', 'README.md', 'assets/js/index.inline.js', 'lab/projetos.html', 'trilhas/ia.html'];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/t[78]-[a-z0-9_-]+/g) || [];
    if (matches.length > 0) {
      console.log(`${f}:`, [...new Set(matches)]);
    }
  }
});
