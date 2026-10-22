import fs from 'node:fs';

const lab = fs.readFileSync('lab/projetos.html', 'utf8');
['i01', 'i02', 'i03', 'i04', 'i1', 'i2', 'i3', 'i4'].forEach(id => {
  console.log(`ID ${id} existe:`, lab.includes(`id="${id}"`) || lab.includes(`id='${id}'`));
});
