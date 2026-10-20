// Run with: node tests/validate-gauntlets.cjs
// Loads the same classic-script content modules as index.html and smoke-tests
// every course's four gauntlet tiers against generated question schemas.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const window = {};
const context = vm.createContext({ window, console, Math, Date, JSON, Set, Map, Object, Array, String, Number, RegExp });
const files = ['rnd.js','academy-extras.js','math.js','phonics.js','geography.js','spanish.js','civics.js','science.js','advanced.js','diagrams.js','expand.js'];
for (const file of files) vm.runInContext(fs.readFileSync(path.join(root, 'content', file), 'utf8'), context, { filename: file });
const courses = window.COURSES || {};
const survival = window.SURVIVAL || {};
const errors = [];
let levels = 0, authoredMc = 0, tiers = 0, generated = 0;
for (const [id, course] of Object.entries(courses)) {
  if (!course || !Array.isArray(course.levels) || !course.levels.length) errors.push(`${id}: missing/empty levels`);
  else {
    levels += course.levels.length;
    for (const level of course.levels) {
      if (!level.id || !Array.isArray(level.challenges) || !level.challenges.length) errors.push(`${id}/${level.id || '?'}: missing challenges`);
      for (const q of level.challenges || []) {
        if (q.type === 'mc') {
          authoredMc++;
          if (!Array.isArray(q.options) || q.options.length < 2 || !Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) errors.push(`${id}/${level.id}: malformed authored multiple-choice question`);
        }
      }
    }
  }
  const gens = survival[id];
  if (!Array.isArray(gens) || gens.length !== 4 || gens.some(g => typeof g !== 'function')) {
    errors.push(`${id}: expected four working gauntlet tier generators`);
    continue;
  }
  for (let tier = 0; tier < 4; tier++) {
    tiers++;
    for (let n = 0; n < 25; n++) {
      let q;
      try { q = gens[tier](); } catch (e) { errors.push(`${id} tier ${tier}: generator threw ${e.message}`); break; }
      generated++;
      if (!q || !['mc', 'fill', 'build', 'run'].includes(q.type)) errors.push(`${id} tier ${tier}: unsupported/missing question type`);
      if (q && typeof window.GAUNTLET_STANDALONE === 'function' && !window.GAUNTLET_STANDALONE(q)) errors.push(`${id} tier ${tier}: gauntlet question depends on lesson context: ${q.q}`);
      if (typeof q.q !== 'string' || !q.q.trim() || typeof q.why !== 'string' || !q.why.trim()) errors.push(`${id} tier ${tier}: missing question text or explanation`);
      if (q.type === 'mc' && (!Array.isArray(q.options) || q.options.length < 2 || !Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length)) errors.push(`${id} tier ${tier}: malformed generated multiple-choice question`);
      if (q.type === 'fill' && (!Array.isArray(q.answers) || !q.answers.length)) errors.push(`${id} tier ${tier}: malformed fill-in question`);
      if (q.type === 'build' && (!Array.isArray(q.tokens) || !q.tokens.length)) errors.push(`${id} tier ${tier}: malformed build question`);
    }
  }
}
for (const id of Object.keys(survival)) if (!courses[id]) errors.push(`${id}: gauntlet registered without a course`);
const result = { courses: Object.keys(courses).length, levels, authoredMultipleChoiceQuestions: authoredMc, gauntletTiers: tiers, generatedQuestionSamples: generated, errors };
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exit(1);
