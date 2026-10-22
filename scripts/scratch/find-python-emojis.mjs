import fs from 'node:fs';

const html = fs.readFileSync('cadernos/python-para-java.html', 'utf8');
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2300}-\u{27BF}\u{FE0F}\u{2B00}-\u{2BFF}]/gu;
const semScript = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');

const matches = [...semScript.matchAll(EMOJI)];
console.log('Total emojis na marcação:', matches.length);

const lines = semScript.split('\n');
lines.forEach((l, i) => {
  if (EMOJI.test(l)) {
    console.log(`${i + 1}: ${l.trim()}`);
  }
});
