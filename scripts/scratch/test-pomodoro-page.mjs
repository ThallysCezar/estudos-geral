import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '../..');
const browser = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const fullPath = path.join(ROOT, 'ferramentas/pomodoro.html');
const fileUrl = 'file:///' + fullPath.replace(/\\/g, '/');

console.log('Testando ferramentas/pomodoro.html via Headless Edge...');

try {
  const dumpedDom = execFileSync(browser, [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--dump-dom',
    fileUrl
  ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 10 * 1024 * 1024 });

  console.log('Tamanho do DOM retornado:', dumpedDom.length, 'bytes');

  // Checagens específicas
  const hasForm = dumpedDom.includes('id="pomodoroSettingsForm"');
  const hasWidget = dumpedDom.includes('class="pomodoro"');
  const hasSummary = dumpedDom.includes('id="pomodoroSummaryPhase"');
  const hasFocus = dumpedDom.includes('id="pomFocus"');
  const hasTestSound = dumpedDom.includes('id="pomodoroTestSound"');
  
  console.log('- Formulário presente:', hasForm);
  console.log('- Widget hidratado (class="pomodoro"):', hasWidget);
  console.log('- Resumo do timer presente:', hasSummary);
  console.log('- Campo de foco presente:', hasFocus);
  console.log('- Botão testar som presente:', hasTestSound);

  if (!hasForm || !hasWidget || !hasSummary || !hasFocus || !hasTestSound) {
    console.error('FALHA: Elementos essenciais não foram renderizados no DOM!');
    process.exit(1);
  } else {
    console.log('SUCESSO: DOM do Pomodoro renderizou perfeitamente!');
  }
} catch (err) {
  console.error('Erro na execução do navegador:', err);
  process.exit(1);
}
