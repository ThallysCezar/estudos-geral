import fs from 'node:fs';

const acervo = fs.readFileSync('acervo.html', 'utf8');
const index = fs.readFileSync('index.html', 'utf8');
const indexJs = fs.readFileSync('assets/js/index.inline.js', 'utf8');
const readme = fs.readFileSync('README.md', 'utf8');

console.log('acervo.html has python:', acervo.includes('python-para-java.html'));
console.log('index.html has python:', index.includes('python-para-java.html'));
console.log('index.inline.js has python:', indexJs.includes('python-para-java.html'));
console.log('README.md has python:', readme.includes('python-para-java.html'));
