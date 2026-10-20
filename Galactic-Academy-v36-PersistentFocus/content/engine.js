/**
 * Galactic Academy Core Engine
 * Lightweight reusable backbone for text-based learning games.
 * Exposes window.AcademyEngine with progress, rewards, and question helpers.
 * Safe to include before or after app.js — falls back gracefully.
 */
(function (global) {
  if (global.AcademyEngine) return;

  const Engine = {
    version: '1.0',

    /** Create a fresh progress record for a course */
    freshProgress() {
      return { done: {}, stars: {}, attempts: 0, lastPlayed: 0 };
    },

    /** Award credits and optionally track by subject */
    awardCredits(state, amount, subjectId) {
      if (!state || amount <= 0) return 0;
      state.xp = (state.xp || 0) + amount;
      if (subjectId) {
        state.earnedBy = state.earnedBy || {};
        state.earnedBy[subjectId] = (state.earnedBy[subjectId] || 0) + amount;
      }
      return amount;
    },

    /** Award Star Shards (crystals) */
    awardShards(state, amount) {
      if (!state || amount <= 0) return 0;
      state.shards = (state.shards || 0) + amount;
      state.shardsEarned = (state.shardsEarned || 0) + amount;
      return amount;
    },

    /** Check if a course is fully three-starred */
    isCourseMastered(progress, levels) {
      if (!progress || !levels) return false;
      return levels.every((l) => (progress.done && progress.done[l.id] || 0) >= 3);
    },

    /** Simple spaced-review scheduler stub (expandable) */
    scheduleReview(state, questionId, quality) {
      // quality: 0-5 (SM-2 style). For now just record.
      state.review = state.review || [];
      state.review.push({ id: questionId, q: quality, t: Date.now() });
      if (state.review.length > 200) state.review = state.review.slice(-200);
    },


    /** Playful encouragement messages */
    encouragement(streak) {
      const msgs = [
        'Nice work, Cadet!',
        'Your pet is cheering!',
        'Stars are aligning!',
        'Keep that streak glowing!',
        'Zyx is impressed!',
        'Cosmic progress!'
      ];
      if (streak >= 5) msgs.push('On fire!', 'Unstoppable!', 'Legend status!');
      return msgs[Math.floor(Math.random() * msgs.length)];
    },

    /** Small variable reward chance (for attention) */
    maybeBonus(state, baseAmount) {
      if (Math.random() < 0.15) { // 15% chance of tiny bonus
        const bonus = Math.max(1, Math.floor(baseAmount * 0.3));
        this.awardCredits(state, bonus);
        return bonus;
      }
      return 0;
    },
    /** Normalize an answer string for comparison */
    normalizeAnswer(s) {
      return String(s || '')
        .trim()
        .replace(/—/g, '--').replace(/–/g, '-')
        .replace(/[“”]/g, '"').replace(/[‘’]/g, "'")
        .replace(/\s+/g, ' ')
        .replace(/'/g, '"')
        .replace(/\s*([=+\-*\/%<>(),:\[\]{}])\s*/g, '$1');
    }
  };

  global.AcademyEngine = Engine;
})(typeof window !== 'undefined' ? window : globalThis);
