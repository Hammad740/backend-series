const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('module/content/first.txt', 'utf-8');
const second = readFileSync('module/content/second.txt', 'utf-8');

console.log(first, second);
console.log('hello');

writeFileSync(
  'module/content/result-sync.txt',
  `Here is the result : ${first},${second}`
);
