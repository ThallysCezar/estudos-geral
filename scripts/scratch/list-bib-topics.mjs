import fs from 'node:fs';

const html = fs.readFileSync('cadernos/biblioteca.html', 'utf8');
const regex = /<article class="topic" id="([^"]+)">[\s\S]*?<div class="th"><h3>([^<]+)<\/h3>/g;
let m;
const topics = [];
while ((m = regex.exec(html)) !== null) {
  topics.push({ id: m[1], title: m[2] });
}

console.log(JSON.stringify(topics, null, 2));
