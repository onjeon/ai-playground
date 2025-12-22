// Jenis Gamer Kau
// Test viral tentang gaming personality

export const questions = [
  {
    id: 1,
    question: "Platform gaming kau?",
    options: [
      { text: "PC Master Race!", type: "A" },
      { text: "Console - PlayStation/Xbox!", type: "B" },
      { text: "Mobile gaming cukup", type: "C" },
      { text: "Tak gaming sangat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Genre game favorite?",
    options: [
      { text: "FPS/Battle Royale!", type: "A" },
      { text: "RPG dan story-driven", type: "B" },
      { text: "Casual dan puzzle", type: "C" },
      { text: "Anything fun je", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Gaming hours sehari?",
    options: [
      { text: "5+ jam! No life mode!", type: "A" },
      { text: "2-3 jam regular", type: "B" },
      { text: "30 min - 1 jam casual", type: "C" },
      { text: "Jarang, bila bored je", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Competitive atau casual?",
    options: [
      { text: "Competitive! Rank is life!", type: "A" },
      { text: "Mix of both", type: "B" },
      { text: "Casual je, for fun", type: "C" },
      { text: "Single player preferred", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila kalah dalam game...",
    options: [
      { text: "RAGE! Keyboard/controller in danger!", type: "A" },
      { text: "Frustrated sikit, move on", type: "B" },
      { text: "It's just a game, chill", type: "C" },
      { text: "Tak affect sangat", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Gaming setup kau?",
    options: [
      { text: "Full RGB! Mechanical keyboard! Gaming chair!", type: "A" },
      { text: "Decent setup, functional", type: "B" },
      { text: "Basic laptop/phone", type: "C" },
      { text: "Whatever available", type: "D" },
    ],
  },
  {
    id: 7,
    question: "In-game purchases/topup?",
    options: [
      { text: "Whale alert! Semua skins nak!", type: "A" },
      { text: "Occasional battle pass", type: "B" },
      { text: "F2P je, no spending", type: "C" },
      { text: "Don't understand microtransactions", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Gaming dengan kawan atau solo?",
    options: [
      { text: "Squad up! Team games best!", type: "A" },
      { text: "Both, depends on game", type: "B" },
      { text: "Solo mainly, own pace", type: "C" },
      { text: "Whoever is available", type: "D" },
    ],
  },
  {
    id: 9,
    question: "New game release, kau...",
    options: [
      { text: "Pre-order! Day one purchase!", type: "A" },
      { text: "Wait for reviews first", type: "B" },
      { text: "Wait for sale/discount", type: "C" },
      { text: "Eventually maybe try", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Gaming affect sleep/work/study?",
    options: [
      { text: "Yes... worth it though!", type: "A" },
      { text: "Sometimes, need to balance", type: "B" },
      { text: "Not really, controlled", type: "C" },
      { text: "Gaming not priority anyway", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Hardcore Gamer",
    emoji: "🎮",
    description: "Gaming adalah life kau! Rank grind, setup padu, hours invested. You're not just playing, you're GAMING!",
    traits: ["Dedicated", "Competitive", "Invested", "Skilled"],
    strengths: ["Good at games", "Strong community", "Know the scene"],
    weaknesses: ["Might affect life", "Spending issues", "Sleep deprivation"],
    tips: ["Balance is key", "Touch grass sometimes!"],
  },
  B: {
    type: "B",
    title: "Regular Gamer",
    emoji: "🕹️",
    description: "Kau enjoy gaming dengan healthy! Play regularly, enjoy the hobby, but life comes first. Balanced gamer lifestyle!",
    traits: ["Balanced", "Hobbyist", "Enjoyable", "Moderate"],
    strengths: ["Healthy relationship with gaming", "Good hobby", "Social gaming"],
    weaknesses: ["Might not be super skilled", "Casual territory"],
    tips: ["Perfect balance!", "Gaming should be fun!"],
  },
  C: {
    type: "C",
    title: "Casual Gamer",
    emoji: "📱",
    description: "Gaming for you is time-filler! Quick games, mobile gaming, nothing too serious. Light entertainment!",
    traits: ["Casual", "Light", "Mobile", "Relaxed"],
    strengths: ["No addiction", "Light entertainment", "Time-efficient"],
    weaknesses: ["Miss deeper gaming experiences", "Basic games only"],
    tips: ["Try proper games sometime", "Gaming has evolved!"],
  },
  D: {
    type: "D",
    title: "Non-Gamer",
    emoji: "🤷",
    description: "Gaming tak really your thing! Maybe tried, didn't stick. Other hobbies more interesting!",
    traits: ["Non-gamer", "Different interests", "Selective", "Independent"],
    strengths: ["Not addicted", "Other productive hobbies", "Time for other things"],
    weaknesses: ["Miss gaming culture", "Out of loop with friends"],
    tips: ["Some games might surprise you", "Try co-op with friends!"],
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
