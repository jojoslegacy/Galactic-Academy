// Run with: node tests/validate-reading.js
const fs = require('fs');
const s = fs.readFileSync('content/phonics.js','utf8');
const must = ['COURSES.phonics','COURSES.readinglab','SURVIVAL.phonics','SURVIVAL.readinglab','Kindergarten','Grade 5','main idea','dyslexia'];
for (const x of must) if (!s.includes(x)) throw new Error('Missing required content: '+x);
const count = (x) => (s.match(new RegExp(x,'g'))||[]).length;
console.log('Reading module registrations and required scope markers passed.');
console.log('Phonics level definitions:', (s.match(/add\('(?:🌱 Kindergarten|🚀 Grade 1|🪐 Grade 2|🌌 Grade 3|🛰️ Grade 4|🌠 Grade 5)/g)||[]).length);
console.log('Support level definitions:', (s.match(/sAdd\('rs/g)||[]).length);
