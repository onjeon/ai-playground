// Tahap Kau Maafkan Orang
// Sejauh mana kau boleh forgive and forget?

export const questions = [
  {
    id: 1,
    question: "Kawan betray trust kau. Berapa lama kau ambil untuk forgive?",
    options: [
      { text: "Quite fast, tak nak hold grudge", type: "A" },
      { text: "Take some time, then forgive", type: "B" },
      { text: "Very long, hard to let go", type: "C" },
      { text: "Never fully forgive honestly", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila forgive someone, kau still ingat apa dia buat?",
    options: [
      { text: "Genuinely forget over time", type: "A" },
      { text: "Forgive tapi remember as lesson", type: "B" },
      { text: "Forgive tapi often think about it", type: "C" },
      { text: "Never really forgive, always remember", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Orang yang hurt kau minta maaf. Kau...",
    options: [
      { text: "Accept easily, appreciate the apology", type: "A" },
      { text: "Accept bila seems sincere", type: "B" },
      { text: "Hard to accept, trust broken", type: "C" },
      { text: "Apology tak enough, damage done", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Holding grudge - how long typically?",
    options: [
      { text: "Barely, let things go fast", type: "A" },
      { text: "Short while, then release", type: "B" },
      { text: "Quite long, hard to release", type: "C" },
      { text: "Forever basically, never forget", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ex-friend yang dulu hurt kau nak reconnect. Kau...",
    options: [
      { text: "Open to it, people change", type: "A" },
      { text: "Consider it, depends on situation", type: "B" },
      { text: "Very hesitant, hard to trust again", type: "C" },
      { text: "No way, burnt bridge stays burnt", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila orang yang hurt kau struggle, kau...",
    options: [
      { text: "Feel bad for them, genuinely", type: "A" },
      { text: "Mixed feelings, some empathy", type: "B" },
      { text: "Think 'karma' in head", type: "C" },
      { text: "Feel satisfied honestly", type: "D" },
    ],
  },
  {
    id: 7,
    question: "How often kau bring up past wrongs in current conflicts?",
    options: [
      { text: "Never, past is past", type: "A" },
      { text: "Rarely, try not to", type: "B" },
      { text: "Sometimes slip out", type: "C" },
      { text: "Often, cant help it", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Forgiving diri sendiri untuk mistakes - easy ke?",
    options: [
      { text: "Yes, learn and move on", type: "A" },
      { text: "Takes time tapi eventually", type: "B" },
      { text: "Hard, very self-critical", type: "C" },
      { text: "Hardest thing, carry guilt forever", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila think about people who wronged kau, kau feel...",
    options: [
      { text: "Neutral atau compassion", type: "A" },
      { text: "Slight residual feelings, mostly okay", type: "B" },
      { text: "Still angry atau hurt", type: "C" },
      { text: "Intense negative emotions still", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Describe forgiveness approach kau.",
    options: [
      { text: "Forgive freely, life too short", type: "A" },
      { text: "Forgive dengan time and effort", type: "B" },
      { text: "Struggle to forgive, working on it", type: "C" },
      { text: "Rarely forgive, protect myself", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Gracious Forgiver",
    emoji: "🕊️",
    description: "Kau forgive dengan mudah! Tak hold grudges, let things go fast. This is beautiful dan healthy tapi make sure kau protect yourself from repeated hurt too!",
    traits: ["Forgiving", "Gracious", "Peaceful", "Letting go"],
    strengths: ["Less emotional baggage", "Maintain relationships", "Inner peace"],
    weaknesses: ["May forgive too easily", "Can be taken advantage of", "May not set boundaries"],
    tips: ["Forgiveness good, but boundaries important too", "Protect yourself", "Forgive but learn"],
  },
  B: {
    type: "B",
    title: "The Thoughtful Forgiver",
    emoji: "💚",
    description: "Kau forgive dengan process. Take time to heal, then genuinely let go. Healthy approach - not too quick, not holding forever. Good balance!",
    traits: ["Thoughtful", "Healing", "Balanced", "Genuine"],
    strengths: ["Real forgiveness", "Learn from hurts", "Maintain important relationships"],
    weaknesses: ["Process takes emotional energy"],
    tips: ["Keep this healthy approach", "Trust your timeline", "Healing is personal"],
  },
  C: {
    type: "C",
    title: "The Struggling Forgiver",
    emoji: "🌱",
    description: "Kau find forgiveness hard. Carry hurts for long, hard to let go. Understandable kalau been hurt deep tapi holding on hurts YOU most. Working on it shows growth!",
    traits: ["Guarded", "Hurt", "Struggling", "Growing"],
    strengths: ["Protect yourself", "Remember lessons", "Authentic about feelings"],
    weaknesses: ["Carry heavy load", "Affects relationships", "Energy on past"],
    tips: ["Forgiveness is for YOU", "Consider what holding on costs you", "Small steps okay"],
  },
  D: {
    type: "D",
    title: "The Grudge Keeper",
    emoji: "🔒",
    description: "Kau rarely forgive. Once hurt, never forget. This protects you tapi also imprisons you. The resentment hurts you more than them. Consider letting go for yourself!",
    traits: ["Unforgiving", "Resentful", "Protective", "Guarded"],
    strengths: ["Strong memory", "Wont repeat same mistake", "Self-protective"],
    weaknesses: ["Carry enormous weight", "Bitterness affects life", "Hard to maintain relationships"],
    tips: ["Consider therapy untuk process old hurts", "Forgiveness frees YOU", "Holding on is exhausting"],
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
