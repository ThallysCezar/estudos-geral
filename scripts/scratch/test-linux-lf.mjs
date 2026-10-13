import fs from 'node:fs';
import path from 'node:path';
import { RAIZ, inventario } from '../lib-html.mjs';

const baseline = JSON.parse(fs.readFileSync('scripts/baseline.json', 'utf8'));
let failures = 0;

for (const doc of Object.keys(baseline.site)) {
  const filePath = path.join(RAIZ, doc);
  if (!fs.existsSync(filePath)) continue;
  const raw = fs.readFileSync(filePath, 'utf8');
  // simulate LF
  const linuxLf = raw.replace(/\r\n/g, '\n');
  fs.writeFileSync(filePath, linuxLf, 'utf8');
  
  const metricas = inventario(doc);
  const baseDoc = baseline.site[doc];

  const perdidos = baseDoc.ids.filter(id => !metricas.ids.includes(id));
  if (perdidos.length > 0) {
    console.error(`FALHA em ${doc}: IDs perdidos com LF:`, perdidos);
    failures++;
  }

  // restore CRLF
  fs.writeFileSync(filePath, raw, 'utf8');
}

if (failures === 0) {
  console.log('Perfeito! 0 IDs perdidos ao simular checkout puro em Linux LF!');
} else {
  process.exit(1);
}
