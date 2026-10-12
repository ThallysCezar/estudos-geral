// Rotaciona as alternativas de cada questao do banco da home, de forma
// deterministica, para a correta nao ficar sempre em A ou B. O texto nao muda;
// muda a ordem e a letra, que o widget renderiza a partir do campo `letter`.
import fs from 'node:fs';
import path from 'node:path';

const RAIZ = process.argv[2];
const GRAVAR = process.argv.includes('--gravar');
const ARQ = path.join(RAIZ, 'assets/js/microlearning-data.js');

const src = fs.readFileSync(ARQ, 'utf8');
const win = {};
new Function('window', src)(win);
const Q = win.MICROLEARNING_QUESTIONS || [];

let texto = src;
let n = 0;
const LETRAS = 'ABCD';

Q.forEach((q, idx) => {
  const o = q.opcoes;
  if (!Array.isArray(o) || o.length < 2) return;
  const giro = idx % o.length;
  if (!giro) return;
  const nova = o.slice(giro).concat(o.slice(0, giro));
  // reescreve o bloco de opcoes inteiro, preservando o texto e a marca de correta
  const antes = JSON.stringify(o.map((x) => ({ letter: x.letter, text: x.text, correct: x.correct })));
  const depois = JSON.stringify(nova.map((x, i) => ({ letter: LETRAS[i], text: x.text, correct: x.correct })));
  // localiza por cada texto, na ordem, e troca letra+ordem reconstruindo o array
  const marcadores = o.map((x) => JSON.stringify(x.text));
  if (!marcadores.every((m) => texto.includes(m))) return;
  // reconstroi o trecho literal do array de opcoes no arquivo
  const ini = texto.indexOf(marcadores[0]);
  const blocoIni = texto.lastIndexOf('opcoes:', ini);
  const blocoFim = texto.indexOf('\n    ],', blocoIni);
  if (blocoIni < 0 || blocoFim < 0) return;
  const novoBloco = 'opcoes: [\n' + nova.map((x, i) =>
    `      { letter: ${JSON.stringify(LETRAS[i])}, text: ${JSON.stringify(x.text)}, correct: ${x.correct} }`
  ).join(',\n') + '\n    ]';
  texto = texto.slice(0, blocoIni) + novoBloco + texto.slice(blocoFim + 6);
  n++;
});

console.log(`questoes rotacionadas: ${n} de ${Q.length}`);
if (GRAVAR) { fs.writeFileSync(ARQ, texto); console.log('gravado.'); }
else console.log('(simulacao)');
