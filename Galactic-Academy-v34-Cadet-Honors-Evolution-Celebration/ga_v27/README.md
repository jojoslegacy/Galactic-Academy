# Galactic Academy

## v30 — Playful TTS

- Read Aloud now prefers the least-robotic natural/enhanced voices first (Samantha Enhanced, Ava, neural Microsoft/Google, etc.).
- Slightly higher pitch (~1.12) with small random rate/pitch variation so it feels livelier and less flat.

## v29 — Gentle Background Wind-Down

- On swipe-away / background, ambient music now fades out over ~2 s before the AudioContext is suspended. This removes the harsh twang that happened when the oscillators were cut mid-cycle.
- On return, it resumes cleanly if Focus sound is still enabled.

## v28 — Sharper Tuned Twinkles

- Focus ambient twinkles are sharper (shorter decay ~0.3–0.8s, snappier attack) and more tightly tuned to the current drone/pad (minimal detune, harmonic multiples of chord tones).

## v27 — Pets & Faster Focus Music

- **Focus music** progression is twice as fast (calm ~6–10s, intense ~3.5–6s).
- Music no longer stays stopped after popups (locked school alerts resume ambient).
- **Pets** block added as the 9th dashboard tile. Unlocks after completing the entire Basic Academy.
- 10 unique space-elemental pets (Fire Fox, Water Otter, Earth Bear, Air Hawk, Lightning Lion, Ice Wolf, Solar Phoenix, Lunar Cat, Void Serpent, Crystal Beetle). Each evolves 3 times after eating 1,000 / 5,000 / 25,000 crystals (fed with Star Shards).
- Pet Gauntlet: unique runs drawn from all completed knowledge, available once per day per mastered subject.
- Shop gains a **New Pet** option for 10,000 credits.

## v26 — Subject-by-subject progression

- Main navigation is organized into **Basic, Intermediate, Middle, High, and Advanced Academy**.
- Foundation subjects progress independently: earning **3 stars on every mission** in one course unlocks the next course in that same subject path. For example, completing Basic Mathematics unlocks Intermediate Mathematics without requiring other Basic subjects to be completed.
- Unavailable courses remain visible as locked pathways, with the exact prerequisite shown. Course access is checked in the interface and again when opening a course.
- Mastery Trials continue to award Master badges and unlock the relevant Endless Gauntlet. Existing subject-specific Math Time Attacks remain on their course maps.
- **Advanced Academy is the exception:** every available course in Basic, Intermediate, Middle, and High must be fully completed with 3 stars on every mission and have its Master badge. Then the learner must spend **2,000 Star Shards** to unlock Advanced Academy, with an additional shard cost for each advanced course.
- Existing learner progress and profile storage are retained.


Static, offline-friendly learning app for Cloudflare Pages.

## Curriculum (v22)

**157 missions · 861 challenges** across math, reading/phonics, geography, Spanish, civics, science, and Advanced Academy.

New in v22:
- **Progress Report & Transcript** include Time Attack metrics (modes unlocked, runs, bests per 2/3/5 min)
- **Higher focus music volume ceiling** (~1.95× master gain + stronger pad peaks)

Carried from v21:
- **Time Attack in every math school** — Basic (+/−, ×/÷), Intermediate (Fractions & Decimals, Percents & Life Math), Middle (Order of Operations, One-Step Equations), High (Two-Step Equations, Geometry Sprint). Unlock after the relevant missions; message on unlock.

Carried from v20:
- **Time Attack unlocks by ops**: +/− after completing Addition + Subtraction; ×/÷ after Multiplication + Division (Basic School). Unlock message on mission complete.
- **Focus ambient twinkles** — soft star-like clusters over the adventure pads

Carried from v19:
- **Focus ambient retuned** — slightly faster motion, smoother chord crossfades, clearer mid-register voicings, less low-end mud and binaural beating; feels more like adventuring in space than being trapped in it

Carried from v18:
- **Time Attack** (math modules): +/− and ×/÷ speed runs — pick 2, 3, or 5 minutes; solve as many as you can; unlock after finishing the band's missions; **no coins or shards**
- **Intense focus music** during Endless Gauntlets and Time Attacks (faster chord motion, brighter pads, more shimmer)

Carried from v17:
- **Harder shop prices** — customization costs raised so ships, themes, skins, and effects take real progress (credits & Star Shards) to unlock

Carried from v16:
- **Deep space focus ambient** — cosmic pad sound inspired by pure space relaxation music, with soft dust & shimmer; louder volume headroom
- **Shop expansion** — new ships (Star Dragon, Star Whale, Crystal Voyager…), themes (Lunar Quiet, Red Planet, Ice Moon), skins, logos, buildings, fonts, shapes & effects (Floating Bubbles, Orbiting Stars, Victory Confetti, Soft Halo)
- (v15) Expanded curriculum, SVG diagrams, Progress Report

## Features

Onboarding · Focus sound & volume · Focus layout · Adaptive extra practice · Advanced free preview · Mastery trials · Gauntlets · 10 profiles

## Deploy

Upload this folder to Cloudflare Pages. Hard-refresh after deploy if the browser retains an older offline cache.

## v32 placement scholarship and pet update
- Added the Galactic Placement Exam: 50 randomized multiple-choice questions sampled evenly across all prerequisite courses, using later/harder lesson banks. At least 48/50 is required to pass (the minimum whole score above 95%).
- Passing grants a scholarship to Advanced Academy and opens Advanced Mathematics as the first course. Other advanced courses retain their existing prerequisite and Star Shard unlock rules. Standard admission still requires foundation graduation and 2,000 Star Shards.
- Pet adoption cards clearly identify which companion is being selected; players can choose any available pet.
- Removed pet feeding cooldowns and per-session fullness limits. The slider still caps each feeding at 500 Star Shards, and lifetime crystal totals continue to drive evolution.
- Lengthened synthesized pet vocalizations and added more note variation so chirps, feed sounds, and bubble sounds last longer without becoming loud or disruptive.
- Pet Gauntlet remains endless survival with three hearts and Star Shard rewards; subject gauntlets remain endless.


## v33 pet progression and naming
- The Pet Store now unlocks when a player fully completes any one Basic Academy subject (all missions at three stars plus that subject's Mastery Trial), instead of requiring the entire Basic Academy.
- Players can rename their active companion at any time; names persist through evolutions and profile saves. Newly purchased pets can also be named when adopted.
- Pet growth now rewards deliberate reinforcement: each cleared round in a subject's Endless Gauntlet earns 5 bond crystals for the active companion, and each correct round in the Pet Gauntlet earns 10 bond crystals plus 2 Star Shards.
- Feeding Star Shards remains an optional accelerator. The evolution track now describes total bond crystals, combining practice-earned crystals and feeding.


## v34 — Cadet Honors & Evolution Celebration
- Moved Achievements off the home dashboard into My HQ, leaving exactly nine home tiles.
- Added an honors collection for achievement seals, completed mission symbols/tokens, and academy-style mastery insignia.
- Styled academy ranks as insignia with rank-specific colors and chevrons.
- Added persistent achievements for all three pet evolution milestones.
- Pet evolution now opens a full celebration screen with animated confetti, a fanfare, pet vocalization, a dramatic reveal, and a named achievement moment.
