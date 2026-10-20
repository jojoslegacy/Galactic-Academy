// Run with: node tests/validate-reading.js
// Confirms the current band-based literacy modules and Reading Support Lab exist.
const fs = require('fs');
const s = fs.readFileSync('content/phonics.js', 'utf8');
const must = [
  "band('phon_basic'", "band('phon_intermediate'", "band('phon_middle'",
  'window.COURSES.readinglab', 'window.SURVIVAL.phon_basic',
  'window.SURVIVAL.phon_intermediate', 'window.SURVIVAL.phon_middle',
  'window.SURVIVAL.readinglab', 'Kindergarten', 'Grade 5', 'main idea',
  'Reading Support Lab', 'not a diagnosis'
];
for (const x of must) if (!s.includes(x)) throw new Error('Missing required literacy marker: ' + x);
const count = (re) => (s.match(re) || []).length;
const gradeBands = count(/add\('(?:🌱 Kindergarten|🚀 Grade 1|🪐 Grade 2|🌌 Grade 3|🛰️ Grade 4|🌠 Grade 5)/g);
const supportLevels = count(/sAdd\('rs/g);
if (gradeBands < 20) throw new Error(`Expected cumulative K–5 reading lessons; found ${gradeBands}`);
if (supportLevels < 6) throw new Error(`Expected multiple Reading Support Lab lessons; found ${supportLevels}`);
console.log('Reading/phonics bands and Support Lab registration passed.');
console.log('K–5 lesson definitions:', gradeBands);
console.log('Reading Support Lab definitions:', supportLevels);
