// Random helpers shared by the randomized questions and the Endless Gauntlet.

  // Gauntlet items must make sense without opening a lesson or reading a passage.
  // This shared screen excludes questions that point backward to lesson-only context.
  window.GAUNTLET_STANDALONE = function (q) {
    if (!q || typeof q.q !== 'string' || !q.q.trim()) return false;
    if (q.gauntletStandalone === false || q.requiresContext === true) return false;
    if (q.gauntletStandalone === true) return true;
    var text = q.q.replace(/[“”]/g, '"').replace(/[’‘]/g, "'").toLowerCase();
    var contextCues = [
      /\baccording to (the|this) (passage|story|text|paragraph|selection)\b/,
      /\b(in|from|after|before|throughout) (the|this) (passage|story|text|paragraph|selection)\b/,
      /\b(the|this) (passage|story|text|paragraph|selection) (says|states|shows|describes|explains|suggests)\b/,
      /\b(read (the|this)|based on (the|this)|refer to (the|this)) (passage|story|text|paragraph|selection)\b/,
      /\b(which detail|what detail|which sentence|what sentence)\b/,
      /\bwhat is the (theme|main idea|best summary|author'?s purpose) of (the|this) (passage|story|text)\b/,
      /\bwhat did [a-z][a-z'-]+ (notice|do|observe|say|want|want to|decide|organize|build|plant|carry|see|find|learn|feel|think)\b/,
      /\bwhere did [a-z][a-z'-]+\b/,
      /\bwhen did [a-z][a-z'-]+\b/,
      /\bwhy did [a-z][a-z'-]+\b/,
      /\bwhat happened (after|before|when|next)\b/,
      /\bwhat was [a-z][a-z'-]+('?s)? (goal|problem|plan|reason|response|action)\b/,
      /\bwhich event from the story\b/,
      /\bin the example above\b/,
      /\bshown above\b/,
      /\bshown in the lesson\b/
    ];
    return !contextCues.some(function (re) { return re.test(text); });
  };

  window.RND = {
  int: function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
  pick: function (a) { return a[Math.floor(Math.random() * a.length)]; },
  shuf: function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; },
  // Builds multiple-choice options: the correct answer first (the app shuffles), plus unique wrong ones.
  opts: function (correct, wrongs) {
    var c = String(correct), seen = [c], n = Number(c), k = 1;
    (wrongs || []).forEach(function (w) { w = String(w); if (seen.indexOf(w) < 0) seen.push(w); });
    while (seen.length < 4 && k < 60) {
      var w = isNaN(n) ? ['None', 'Error', '(nothing)', '0', 'undefined'][k % 5] : String(n + (k % 2 ? 1 : -1) * Math.ceil(k / 2));
      if (seen.indexOf(w) < 0) seen.push(w);
      k++;
    }
    return { options: seen.slice(0, 4), answer: 0 };
  }
};
