import fs from 'fs';
import path from 'path';

function walk(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    if (f.startsWith('.') || f === 'node_modules' || f === 'scripts' || f === 'Arquivados') continue;
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(walk(p));
    else if (p.endsWith('.html')) res.push(p);
  }
  return res;
}

const isFix = process.argv.includes('--fix');
const htmls = walk('.');
let total = 0;
let modifiedDocs = 0;

for (const h of htmls) {
  let content = fs.readFileSync(h, 'utf8');
  let changed = false;

  const newContent = content.replace(/<img\b([^>]*)>/gi, (match, attrs) => {
    if (attrs.includes('id="imImg"')) {
      if (!attrs.includes('decoding=')) {
        changed = true;
        return `<img${attrs} decoding="async">`;
      }
      return match;
    }

    let updated = attrs;
    let localChanged = false;

    if (!/loading=["']lazy["']/i.test(updated)) {
      updated += ' loading="lazy"';
      localChanged = true;
    }

    if (!/decoding=["']async["']/i.test(updated)) {
      updated += ' decoding="async"';
      localChanged = true;
    }

    if (localChanged) {
      changed = true;
      total++;
      return `<img${updated}>`;
    }
    return match;
  });

  if (changed && isFix) {
    fs.writeFileSync(h, newContent, 'utf8');
    modifiedDocs++;
    console.log(`Updated images in: ${h}`);
  }
}

console.log(`Total active images updated/needing update: ${total}. Mode: ${isFix ? 'FIX APPLIED' : 'DRY RUN'}`);
