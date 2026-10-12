import fs from 'node:fs';
import path from 'node:path';

/**
 * Replaces the options for questions in a given file safely.
 * updates is an array of objects:
 * {
 *   id: string, // data-exercise-id
 *   options: [
 *     { text: string, isCorrect: boolean, rationale: string },
 *     ...
 *   ]
 * }
 */
export function injectBalancedQuiz(filePath, updates) {
  const fullPath = path.resolve(filePath);
  let content = fs.readFileSync(fullPath, 'utf8');

  for (const q of updates) {
    // Match the specific exercise block options without 'g' flag
    const exRegex = new RegExp(`(<div class="topico-exercicio"[^>]*data-exercise-id="${q.id}"[\\s\\S]*?<div class="te-options">)([\\s\\S]*?)(<\\/div>\\s*<div class="te-feedback")`);
    
    const letters = ['A', 'B', 'C', 'D'];
    const newOptionsHtml = '\n' + q.options.map((opt, idx) => {
      const letter = letters[idx];
      const correctAttr = opt.isCorrect ? 'true' : 'false';
      const ratEscaped = opt.rationale
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return `                  <button class="te-opt" type="button" data-correct="${correctAttr}" data-rationale="${ratEscaped}">\n                    <span class="te-letter">${letter}</span> ${opt.text}\n                  </button>`;
    }).join('\n') + '\n                ';

    if (!exRegex.test(content)) {
      console.warn(`[WARN] Exercício ${q.id} não encontrado em ${filePath}`);
    } else {
      // Use replacer function so '$' inside text is not interpreted as backreference
      content = content.replace(exRegex, (match, p1, p2, p3) => `${p1}${newOptionsHtml}${p3}`);
    }
  }

  fs.writeFileSync(fullPath, content, 'utf8');
}
