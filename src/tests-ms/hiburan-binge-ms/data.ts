// Gaya Binge-Watch Kau
// Test viral tentang binge-watching behavior

export const questions = [
  {
    id: 1,
    question: "Binge-watch session biasa berapa lama?",
    options: [
      { text: "Full season dalam sehari!", type: "A" },
      { text: "3-4 episodes per sitting", type: "B" },
      { text: "1-2 episodes je", type: "C" },
      { text: "Tak binge, satu episode enough", type: "D" },
    ],
  },
  {
    id: 2,
    question: "'One more episode' trap, kau...",
    options: [
      { text: "Every time! No self-control!", type: "A" },
      { text: "Sometimes, cliffhangers get me", type: "B" },
      { text: "Can stop when needed", type: "C" },
      { text: "Never fall for it", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Binge snacks kau?",
    options: [
      { text: "Full meal setup beside me!", type: "A" },
      { text: "Chips and drinks", type: "B" },
      { text: "Maybe some snacks", type: "C" },
      { text: "Too focused to eat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sleep sacrifice for binge?",
    options: [
      { text: "Sleep is optional when show is good!", type: "A" },
      { text: "Sometimes stay up late", type: "B" },
      { text: "Rarely, sleep is priority", type: "C" },
      { text: "Never, disciplined", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Work/responsibilities during binge period?",
    options: [
      { text: "Affected badly... oops", type: "A" },
      { text: "Slightly impacted", type: "B" },
      { text: "Managed, work comes first", type: "C" },
      { text: "Never compromise responsibilities", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Binge alone atau dengan orang?",
    options: [
      { text: "Alone! My pace, no interruptions!", type: "A" },
      { text: "With someone, share experience", type: "B" },
      { text: "Depends on show", type: "C" },
      { text: "Always with others", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Phone during binge?",
    options: [
      { text: "Full attention on screen!", type: "A" },
      { text: "Check occasionally", type: "B" },
      { text: "Second screen always", type: "C" },
      { text: "Phone more interesting sometimes", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Multiple shows at once?",
    options: [
      { text: "One show until finish!", type: "A" },
      { text: "2-3 in rotation", type: "B" },
      { text: "Many, switch when bored", type: "C" },
      { text: "Don't track, random watching", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Post-binge feeling?",
    options: [
      { text: "Empty... what do I watch now?", type: "A" },
      { text: "Satisfied, good show", type: "B" },
      { text: "Ready for next one", type: "C" },
      { text: "Didn't even finish most shows", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Rewatch binge shows?",
    options: [
      { text: "Yes! Multiple comfort shows!", type: "A" },
      { text: "Occasionally, favorites", type: "B" },
      { text: "Rarely, new content waiting", type: "C" },
      { text: "Never rewatch", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Binge Monster",
    emoji: "🍿",
    description: "Kau professional binge-watcher! Full seasons disappear, sleep is negotiable, snacks always ready. Living for that autoplay!",
    traits: ["Dedicated", "Immersive", "Committed", "All-in"],
    strengths: ["Full story experience", "Complete immersion", "Strong opinions on shows"],
    weaknesses: ["Affects schedule", "Unhealthy habits", "Post-show emptiness"],
    tips: ["Set limits", "Real life needs attention too!"],
  },
  B: {
    type: "B",
    title: "Balanced Binger",
    emoji: "📺",
    description: "Kau binge with some control! Enjoy sessions tapi know when to stop. Healthy binge-watching relationship!",
    traits: ["Balanced", "Controlled", "Enjoyable", "Moderate"],
    strengths: ["Good viewing habits", "Life balance", "Enjoy shows properly"],
    weaknesses: ["Sometimes restraint too much", "Miss out on full immersion"],
    tips: ["Perfect approach!", "Keep it balanced!"],
  },
  C: {
    type: "C",
    title: "Controlled Viewer",
    emoji: "⏯️",
    description: "Kau have discipline dengan watching! One or two episodes, then stop. Self-control champion!",
    traits: ["Disciplined", "Controlled", "Patient", "Moderate"],
    strengths: ["Great self-control", "No addiction", "Balanced life"],
    weaknesses: ["Shows take forever to finish", "Might forget plot between sessions"],
    tips: ["Sometimes binge is okay", "Let loose occasionally!"],
  },
  D: {
    type: "D",
    title: "Show Hopper",
    emoji: "🔀",
    description: "Kau start many, finish few! Attention span short, new shows always tempting. Eternal 'watching' list!",
    traits: ["Short attention", "Variety seeker", "Uncommitted", "Explorer"],
    strengths: ["Know many shows", "No attachment", "Flexible"],
    weaknesses: ["Never finish anything", "Miss great endings"],
    tips: ["Commit to one show", "Endings are worth it!"],
  },
};

export function calculateResult(answers: number[]): typeof results.A {
  const typeCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeCount[type] = (typeCount[type] || 0) + 1;
    }
  });
  const dominantType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
  return results[dominantType as keyof typeof results];
}
