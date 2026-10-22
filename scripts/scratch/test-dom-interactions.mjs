import fs from 'node:fs';

const js = fs.readFileSync('assets/js/index.inline.js', 'utf8');

// Test 1: SEM evaluation
const semMatch = js.match(/var\s+SEM\s*=\s*(\[[\s\S]*?\n\]);/);
if (!semMatch) {
  console.error('ERRO: SEM não encontrado!');
  process.exit(1);
}

const SEM = new Function(`return ${semMatch[1]}`)();
console.log('SEM dias carregados:', SEM.length);

SEM.forEach(d => {
  console.log(`- ${d.sig}: ${d.tema} (${d.opcoes ? d.opcoes.length + ' opções' : 'único'})`);
  if (d.opcoes) {
    d.opcoes.forEach(o => {
      if (!o.f || !o.nome || !o.nota) {
        console.error(`ERRO: opção inválida em ${d.sig}:`, o);
        process.exit(1);
      }
    });
  }
});

console.log('Todos os dias e opções de SEM validados com sucesso!');
