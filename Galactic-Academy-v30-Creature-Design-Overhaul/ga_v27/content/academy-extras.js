/* Galactic Academy: child-friendly rewards, mentor lines, and shop. */
window.EXTRAS = Object.assign({
  "mentor": {
    "name": "Zyx",
    "icon": "👽",
    "ok": [
      "Excellent work, Space Cadet! You did more than guess. You noticed the clues, connected the ideas, and chose an answer that makes sense. That is how real learning grows.",
      "Brilliant discovery! Every time you solve a challenge, you strengthen the skills you will use in harder missions. Take a moment to notice what worked, then get ready for the next step.",
      "That is a galaxy-class answer! You stayed with the problem, used the information available, and found the right path. Keep building that careful, confident thinking.",
      "Mission accomplished! You are learning how to turn clues into understanding. The goal is not just to collect points. It is to know why an answer works, so you can use the idea somewhere new.",
      "Great focus, Space Cadet! You made a strong choice and showed that your practice is paying off. Carry that strategy into the next challenge.",
      "Wonderful reasoning! Your brain is making useful connections. Remember what helped you succeed here, because the same kind of thinking may help you on a tougher mission."
    ],
    "no": [
      "Not quite yet, Space Cadet, and that is all right. A wrong answer is useful information. Read the explanation carefully, look for the clue you missed, and try again using what you learned.",
      "This one slipped past us! Slow down and check the important details. Compare each choice with the clue in the lesson, then choose the answer that fits best. You can learn from this attempt.",
      "Close, but not quite. Do not rush to guess again. First, read the explanation and say the main idea in your own words. Then return to the question and give it another try.",
      "Every expert has to work through confusing problems. Look at the step where your thinking may have changed direction. Once you find that step, the answer should make more sense.",
      "That answer does not fit the evidence yet. Check the clue, rule, or example from the lesson. Learning to explain why an answer is right is more powerful than memorizing the answer alone.",
      "No worries, Space Cadet. This challenge has shown us what to practice next. Take a breath, review the explanation, and try again. Progress comes from using feedback, not from getting everything right on the first attempt."
    ],
    "late": [
      "Time is up for this round. That does not mean you cannot solve it. Review the explanation, notice the key step, and try the challenge again when you are ready. Speed will grow as the idea becomes familiar.",
      "The clock got there first this time! Take a breath. Understanding matters more than rushing. Review the clue, make sure you know what the question is asking, and then give it another go.",
      "Mission timer complete. You still have something valuable to take away: a chance to learn the method. Study the explanation now, and your next attempt may feel much easier."
    ],
    "okBySubject": {
      "math": [
        "Excellent calculation! You used the numbers carefully and found a result that fits. Think about which step mattered most, because that strategy will help with harder problems.",
        "Your number sense is growing! Check how the quantities relate to each other. Seeing that relationship, rather than just memorizing a rule, is what makes math useful.",
        "That math checks out! You followed the clues and reached a sound answer. Keep an eye on the steps, the units, and whether the result makes sense."
      ],
      "reading": [
        "Strong reading! You used the words and details in the passage to support your answer. Good readers do more than remember what they read. They connect details to meaning.",
        "You understood that well! Think about which phrase gave you the strongest clue. Finding evidence in the text is a skill that will help you understand more challenging stories and explanations.",
        "Clear thinking with the text! You looked beyond a single word and considered the meaning. Keep asking what the author is saying, and which details support that idea."
      ],
      "geography": [
        "Great map thinking! You connected the place with the right geographic clue. Keep noticing direction, location, landforms, and nearby places. Maps become easier when you look for relationships.",
        "You found the right place! Geography is more than names on a map. It helps explain how land, water, climate, people, and communities connect.",
        "Solid geography skills! Picture where this place sits in relation to the places around it. That mental map will help you remember locations and understand the wider world."
      ],
      "spanish": [
        "¡Excelente! You recognized the Spanish phrase and matched it to the meaning. Keep listening for the sounds and word patterns. Little by little, they will become more familiar.",
        "Your Spanish orbit is growing! Practice the phrase aloud and notice how the words flow together. Understanding and speaking both improve with steady, repeated practice.",
        "Muy bien! You made a useful connection between the phrase and its meaning. Keep reviewing it in context, so you can recognize it naturally when you meet it again."
      ],
      "civics": [
        "Solid civic thinking! You connected the idea to how communities and government work. Keep asking who has responsibility, what rights are protected, and what evidence supports the answer.",
        "You understand that civic idea well! Laws, rights, responsibilities, and public institutions all affect real people. Thinking about how they work together makes civics easier to understand.",
        "Great citizenship knowledge! You considered the principle behind the question, not just a familiar phrase. That kind of reasoning helps you understand how communities make decisions."
      ],
      "science": [
        "Sharp scientific thinking! You used the evidence to support your answer. Scientists observe carefully, ask questions, test ideas, and revise their explanations when the evidence points somewhere new.",
        "Evidence is on your side! Think about what was observed and what can reasonably be concluded from it. Separating evidence from a guess is one of the most important scientific skills.",
        "Clear lab reasoning! You connected the science idea to the question. Keep asking what causes a result, what changes, and what evidence would help you check your explanation."
      ],
      "advanced": [
        "Advanced-level insight! You handled a challenging idea by connecting details and reasoning through the problem. Keep breaking difficult tasks into smaller steps, then check how those steps fit together.",
        "That is galaxy-class reasoning! You did not just spot an answer. You worked through a more demanding challenge and made a defensible choice. Carry that method into the next mission.",
        "Endgame challenge cleared! Hard problems often become manageable when you identify what you know, what you need to find, and which step can get you closer."
      ]
    },
    "noBySubject": {
      "math": [
        "Check the steps again. Write down what you know, identify what the question asks, and work through the calculation one step at a time. Then check whether your answer is reasonable.",
        "Revisit the numbers in the explanation. Look carefully at the operation, place value, and any units. One small detail can change the result, and finding it is part of learning math."
      ],
      "reading": [
        "Look back at the words and try again. Find the sentence that gives you evidence, then compare that evidence with each answer choice.",
        "Re-read the passage clue carefully. Ask what the text actually says, what it suggests, and which answer is best supported rather than merely familiar."
      ],
      "geography": [
        "Picture the map once more. Use nearby places, direction, borders, landforms, or bodies of water to narrow down the answer.",
        "Review the place names in the explanation. Try to locate the place in your mind, then connect it to the region and the geographic clues in the question."
      ],
      "spanish": [
        "Listen to the phrase again, then try. Focus on the meaning of the whole phrase before worrying about every individual word.",
        "Check the phrase in the lesson and echo it once more. Notice the sound pattern and the situation where you would use it."
      ],
      "civics": [
        "Re-read the civic idea and try again. Identify the right, responsibility, law, or government role involved, then compare it with the choices.",
        "Check the explanation about rights, laws, or government. Ask which institution or principle fits the situation described in the question."
      ],
      "science": [
        "Check the evidence in the lesson again. Separate what you observed from what you are guessing, then choose the explanation that best fits the evidence.",
        "Revisit the science idea and try once more. Think about cause and effect, what changed, and what the example demonstrates."
      ],
      "advanced": [
        "Re-read the advanced explanation carefully. Break the challenge into smaller parts, solve what you can first, and then connect the pieces.",
        "Try a different route through the problem. List what you know, identify the missing piece, and check each step before choosing an answer."
      ]
    }
  },
  "bosses": [
    "Nebula Guardian",
    "Captain Comet",
    "Asteroid Sentinel",
    "The Void Warden"
  ],
  "shop": [
    {
      "id": "rocket",
      "kind": "ship",
      "icon": "🚀",
      "name": "Classic Rocket",
      "cost": 0
    },
    {
      "id": "ufo",
      "kind": "ship",
      "icon": "🛸",
      "name": "Saucer Cruiser",
      "cost": 350
    },
    {
      "id": "comet",
      "kind": "ship",
      "icon": "☄️",
      "name": "Comet Runner",
      "cost": 420
    },
    {
      "id": "sat",
      "kind": "ship",
      "icon": "🛰️",
      "name": "Sat Hopper",
      "cost": 500
    },
    {
      "id": "star",
      "kind": "ship",
      "icon": "🌠",
      "name": "Shooting Star",
      "cost": 700
    },
    {
      "id": "nebula",
      "kind": "theme",
      "icon": "🌌",
      "name": "Nebula Night",
      "cost": 0
    },
    {
      "id": "sunset",
      "kind": "theme",
      "icon": "🌅",
      "name": "Solar Sunset",
      "cost": 450
    },
    {
      "id": "aurora",
      "kind": "theme",
      "icon": "🌿",
      "name": "Aurora Green",
      "cost": 450
    },
    {
      "id": "void",
      "kind": "theme",
      "icon": "⚫",
      "name": "Void Mono",
      "cost": 550
    },
    {
      "id": "logo-star",
      "kind": "logo",
      "icon": "🌟",
      "name": "Star Logo",
      "cost": 0
    },
    {
      "id": "logo-bolt",
      "kind": "logo",
      "icon": "⚡",
      "name": "Bolt Logo",
      "cost": 200
    },
    {
      "id": "logo-uni",
      "kind": "logo",
      "icon": "🦄",
      "name": "Unicorn Logo",
      "cost": 250
    },
    {
      "id": "logo-octo",
      "kind": "logo",
      "icon": "🐙",
      "name": "Octo Logo",
      "cost": 250
    },
    {
      "id": "logo-gem",
      "kind": "logo",
      "icon": "💎",
      "name": "Gem Logo",
      "cost": 320
    },
    {
      "id": "b-fountain",
      "kind": "building",
      "icon": "⛲",
      "name": "Plasma Fountain",
      "cost": 280
    },
    {
      "id": "b-cafe",
      "kind": "building",
      "icon": "🍔",
      "name": "Cosmic Café",
      "cost": 300
    },
    {
      "id": "b-green",
      "kind": "building",
      "icon": "🌿",
      "name": "Sky Greenhouse",
      "cost": 360
    },
    {
      "id": "b-arcade",
      "kind": "building",
      "icon": "🕹️",
      "name": "Arcade",
      "cost": 400
    },
    {
      "id": "b-obs",
      "kind": "building",
      "icon": "🔭",
      "name": "Observatory",
      "cost": 420
    },
    {
      "id": "b-hangar",
      "kind": "building",
      "icon": "✈️",
      "name": "Hangar",
      "cost": 480
    },
    {
      "id": "b-pit",
      "kind": "building",
      "icon": "🤖",
      "name": "Robot Pit Crew",
      "cost": 600
    },
    {
      "id": "skin-default",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌌",
      "name": "Galactic Default",
      "cost": 0
    },
    {
      "id": "skin-neon",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌃",
      "name": "Neon Tokyo",
      "cost": 700
    },
    {
      "id": "skin-candy",
      "kind": "skin",
      "cur": "shards",
      "icon": "🍭",
      "name": "Candy Pop",
      "cost": 700
    },
    {
      "id": "skin-gold",
      "kind": "skin",
      "cur": "shards",
      "icon": "🪙",
      "name": "Gold Rush",
      "cost": 850
    },
    {
      "id": "skin-ocean",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌊",
      "name": "Ocean Deep",
      "cost": 850
    },
    {
      "id": "skin-matrix",
      "kind": "skin",
      "cur": "shards",
      "icon": "🟩",
      "name": "Matrix Green",
      "cost": 1000
    },
    {
      "id": "skin-vapor",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌴",
      "name": "Vaporwave",
      "cost": 1100
    },
    {
      "id": "skin-lava",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌋",
      "name": "Lava Lamp",
      "cost": 1200
    },
    {
      "id": "skin-royal",
      "kind": "skin",
      "cur": "shards",
      "icon": "👑",
      "name": "Royal Velvet",
      "cost": 1400
    },
    {
      "id": "font-default",
      "kind": "font",
      "cur": "shards",
      "icon": "Aa",
      "name": "Standard",
      "cost": 0
    },
    {
      "id": "font-mono",
      "kind": "font",
      "cur": "shards",
      "icon": "🖥️",
      "name": "Terminal",
      "cost": 450
    },
    {
      "id": "font-serif",
      "kind": "font",
      "cur": "shards",
      "icon": "📖",
      "name": "Storybook",
      "cost": 450
    },
    {
      "id": "font-marker",
      "kind": "font",
      "cur": "shards",
      "icon": "✏️",
      "name": "Doodle",
      "cost": 550
    },
    {
      "id": "font-tech",
      "kind": "font",
      "cur": "shards",
      "icon": "🛸",
      "name": "Futura Tech",
      "cost": 550
    },
    {
      "id": "font-round",
      "kind": "font",
      "cur": "shards",
      "icon": "🫧",
      "name": "Bubble",
      "cost": 700
    },
    {
      "id": "shape-round",
      "kind": "shape",
      "cur": "shards",
      "icon": "⬜",
      "name": "Rounded",
      "cost": 0
    },
    {
      "id": "shape-sharp",
      "kind": "shape",
      "cur": "shards",
      "icon": "◼️",
      "name": "Sharp Edges",
      "cost": 400
    },
    {
      "id": "shape-pill",
      "kind": "shape",
      "cur": "shards",
      "icon": "💊",
      "name": "Super Pill",
      "cost": 480
    },
    {
      "id": "shape-blob",
      "kind": "shape",
      "cur": "shards",
      "icon": "🫠",
      "name": "Blobby",
      "cost": 550
    },
    {
      "id": "fx-pulse",
      "kind": "fx",
      "cur": "shards",
      "icon": "💓",
      "name": "Pulsing Buttons",
      "cost": 550
    },
    {
      "id": "fx-rainbow",
      "kind": "fx",
      "cur": "shards",
      "icon": "🌈",
      "name": "Rainbow Titles",
      "cost": 700
    },
    {
      "id": "fx-stars",
      "kind": "fx",
      "cur": "shards",
      "icon": "☄️",
      "name": "Meteor Shower",
      "cost": 800
    },
    {
      "id": "fx-glow",
      "kind": "fx",
      "cur": "shards",
      "icon": "💡",
      "name": "Neon Glow",
      "cost": 800
    },
    {
      "id": "fx-flow",
      "kind": "fx",
      "cur": "shards",
      "icon": "🌀",
      "name": "Living Nebula",
      "cost": 950
    },
    {
      "id": "fx-sparkle",
      "kind": "fx",
      "cur": "shards",
      "icon": "✨",
      "name": "Tap Sparkles",
      "cost": 1100
    },
    {
      "id": "accent-studio",
      "kind": "accent",
      "cur": "shards",
      "icon": "🎨",
      "name": "Accent Color Studio",
      "cost": 1600
    },
    {
      "id": "dragon",
      "kind": "ship",
      "icon": "🐉",
      "name": "Star Dragon",
      "cost": 850
    },
    {
      "id": "whale",
      "kind": "ship",
      "icon": "🐋",
      "name": "Star Whale",
      "cost": 800
    },
    {
      "id": "balloon",
      "kind": "ship",
      "icon": "🎈",
      "name": "Sky Balloon",
      "cost": 300
    },
    {
      "id": "crystal",
      "kind": "ship",
      "icon": "🔮",
      "name": "Crystal Voyager",
      "cost": 950
    },
    {
      "id": "paper",
      "kind": "ship",
      "icon": "📜",
      "name": "Paper Glider",
      "cost": 220
    },
    {
      "id": "butterfly",
      "kind": "ship",
      "icon": "🦋",
      "name": "Flutter Scout",
      "cost": 550
    },
    {
      "id": "lunar",
      "kind": "theme",
      "icon": "🌙",
      "name": "Lunar Quiet",
      "cost": 520
    },
    {
      "id": "mars",
      "kind": "theme",
      "icon": "🔴",
      "name": "Red Planet",
      "cost": 520
    },
    {
      "id": "ice",
      "kind": "theme",
      "icon": "🧊",
      "name": "Ice Moon",
      "cost": 540
    },
    {
      "id": "logo-fox",
      "kind": "logo",
      "icon": "🦊",
      "name": "Fox Badge",
      "cost": 220
    },
    {
      "id": "logo-cat",
      "kind": "logo",
      "icon": "🐱",
      "name": "Cat Badge",
      "cost": 220
    },
    {
      "id": "logo-blossom",
      "kind": "logo",
      "icon": "🌸",
      "name": "Blossom Badge",
      "cost": 280
    },
    {
      "id": "logo-bot",
      "kind": "logo",
      "icon": "🤖",
      "name": "Bot Badge",
      "cost": 300
    },
    {
      "id": "logo-rocket",
      "kind": "logo",
      "icon": "🚀",
      "name": "Rocket Badge",
      "cost": 260
    },
    {
      "id": "b-library",
      "kind": "building",
      "icon": "📚",
      "name": "Library Dome",
      "cost": 450
    },
    {
      "id": "b-music",
      "kind": "building",
      "icon": "🎵",
      "name": "Music Hall",
      "cost": 500
    },
    {
      "id": "b-lab",
      "kind": "building",
      "icon": "🧪",
      "name": "Lab Pod",
      "cost": 560
    },
    {
      "id": "b-garden",
      "kind": "building",
      "icon": "🪴",
      "name": "Zero-G Garden",
      "cost": 480
    },
    {
      "id": "skin-blossom",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌸",
      "name": "Blossom Drift",
      "cost": 900
    },
    {
      "id": "skin-frost",
      "kind": "skin",
      "cur": "shards",
      "icon": "❄️",
      "name": "Frostbite",
      "cost": 950
    },
    {
      "id": "skin-saturn",
      "kind": "skin",
      "cur": "shards",
      "icon": "🪐",
      "name": "Saturn Rings",
      "cost": 1050
    },
    {
      "id": "skin-prism",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌈",
      "name": "Prism Glow",
      "cost": 1150
    },
    {
      "id": "skin-citrus",
      "kind": "skin",
      "cur": "shards",
      "icon": "🍊",
      "name": "Citrus Orbit",
      "cost": 800
    },
    {
      "id": "skin-midnight",
      "kind": "skin",
      "cur": "shards",
      "icon": "🌌",
      "name": "Midnight Observatory",
      "cost": 1000
    },
    {
      "id": "font-hand",
      "kind": "font",
      "cur": "shards",
      "icon": "✍️",
      "name": "Handwritten",
      "cost": 600
    },
    {
      "id": "font-pixel",
      "kind": "font",
      "cur": "shards",
      "icon": "👾",
      "name": "Pixel Cadet",
      "cost": 650
    },
    {
      "id": "shape-hex",
      "kind": "shape",
      "cur": "shards",
      "icon": "⬡",
      "name": "Hex Corners",
      "cost": 520
    },
    {
      "id": "shape-soft",
      "kind": "shape",
      "cur": "shards",
      "icon": "☁️",
      "name": "Cloud Soft",
      "cost": 480
    },
    {
      "id": "fx-bubbles",
      "kind": "fx",
      "cur": "shards",
      "icon": "🫧",
      "name": "Floating Bubbles",
      "cost": 750
    },
    {
      "id": "fx-orbit",
      "kind": "fx",
      "cur": "shards",
      "icon": "💫",
      "name": "Orbiting Stars",
      "cost": 900
    },
    {
      "id": "fx-confetti",
      "kind": "fx",
      "cur": "shards",
      "icon": "🎉",
      "name": "Victory Confetti",
      "cost": 1000
    },
    {
      "id": "fx-softglow",
      "kind": "fx",
      "cur": "shards",
      "icon": "✨",
      "name": "Soft Halo",
      "cost": 700
    }
  ],
  "accents": [
    "#35f0c0",
    "#ff5f8d",
    "#ffc857",
    "#4de1ff",
    "#b6ff00",
    "#c084fc",
    "#ff8a3d",
    "#ff4d4d",
    "#ffffff",
    "#7a8cff",
    "#00ffa3",
    "#ff00e6"
  ],
  "capstones": {}
}, { ach: [
    {id:"first",icon:"🥇",name:"First Discovery",desc:"Complete your first mission in any subject.",test:(S) => Object.values(S.progress).some((p) => Object.keys(p.done).length > 0)},
    {id:"flawless",icon:"💎",name:"Perfect Solution",desc:"Finish a mission with 3 stars.",test:(S) => Object.values(S.progress).some((p) => Object.values(p.done).some((s) => s === 3))},
    {id:"boss",icon:"👾",name:"Boss Challenger",desc:"Defeat a sector boss.",test:(S) => Object.keys(S.bosses).length > 0},
    {id:"master",icon:"🏅",name:"Foundation Master",desc:"Earn a mastery badge in any foundation.",test:(S) => Object.values(S.bonus).some((b) => b.badge)},
    {id:"poly",icon:"🌐",name:"Curious Explorer",desc:"Earn mastery badges in two foundations.",test:(S) => Object.values(S.bonus).filter((b) => b.badge).length >= 2},
    {id:"poly6",icon:"🛸",name:"Multi-Field Cadet",desc:"Earn Master badges in six different bands.",test:(S) => Object.values(S.bonus).filter((b) => b.badge).length >= 6},
    {id:"advunlock",icon:"🌌",name:"Advanced Initiate",desc:"Unlock any Advanced Academy course.",test:(S) => S.advanced && Object.keys(S.advanced).some((k) => S.advanced[k])},
    {id:"speed",icon:"⚡",name:"Quick Thinker",desc:"Win a Mastery Trial quickly.",test:(S) => !!S.stats.speedTrial},
    {id:"daily3",icon:"📅",name:"Daily Brain Builder",desc:"Complete 3 daily challenges.",test:(S) => S.dailyCount >= 3},
    {id:"streak7",icon:"🔥",name:"Week of Wonder",desc:"Reach a 7-day learning streak.",test:(S) => S.streak >= 7},
    {id:"clients",icon:"📨",name:"Practice Champion",desc:"Solve 5 extra practice rounds.",test:(S) => S.stats.requests >= 5},
    {id:"builder",icon:"🏗️",name:"Galaxy Builder",desc:"Own 3 academy buildings.",test:(S) => Object.keys(S.owned).filter((k) => k.indexOf('b-') === 0).length >= 3},
    {id:"capstone",icon:"🎓",name:"Learning Graduate",desc:"Complete a capstone activity.",test:(S) => Object.keys(S.capstoneDone).length > 0},
    {id:"ceo",icon:"👑",name:"Galaxy Legend",desc:"Reach the top academy rank.",test:(S) => S.xp >= 1600},
    {id:"survivor",icon:"🔥",name:"Gauntlet Survivor",desc:"Reach round 10 in the Endless Gauntlet.",test:(S) => Object.values(S.survival).some((s) => s.best >= 10)},
    {id:"unstoppable",icon:"🚀",name:"Gauntlet Champion",desc:"Reach round 25 in the Endless Gauntlet.",test:(S) => Object.values(S.survival).some((s) => s.best >= 25)},
    {id:"designer",icon:"🎨",name:"Academy Designer",desc:"Own 3 customization items.",test:(S) => ['skin-', 'font-', 'shape-', 'fx-', 'accent-'].reduce((n, p) => n + Object.keys(S.owned).filter((k) => k.indexOf(p) === 0).length, 0) >= 3}
  ] });
