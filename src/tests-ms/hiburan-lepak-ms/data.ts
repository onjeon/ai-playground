// Gaya Lepak Kau
// Test viral tentang hanging out style

export const questions = [
  {
    id: 1,
    question: "Lepak spot favorite kau?",
    options: [
      { text: "Cafe aesthetic dan cozy!", type: "A" },
      { text: "Mamak, klassik!", type: "B" },
      { text: "Mall atau shopping area", type: "C" },
      { text: "Rumah sendiri/kawan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Lepak dengan berapa orang best?",
    options: [
      { text: "Big group! The more the merrier!", type: "A" },
      { text: "Small group, 4-5 orang", type: "B" },
      { text: "One-on-one, intimate", type: "C" },
      { text: "Solo lepak pun okay", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Timing lepak biasa?",
    options: [
      { text: "Night owl! 10PM onwards!", type: "A" },
      { text: "Evening, after work/class", type: "B" },
      { text: "Weekend afternoons", type: "C" },
      { text: "Anytime, whenever free", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Lepak activities kau usually?",
    options: [
      { text: "Deep talks dan gossip!", type: "A" },
      { text: "Makan dan chill", type: "B" },
      { text: "Games atau activities", type: "C" },
      { text: "Just exist together", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Phone usage masa lepak?",
    options: [
      { text: "No phone! Focus on friends!", type: "A" },
      { text: "Occasional check je", type: "B" },
      { text: "Scroll together, share content", type: "C" },
      { text: "Everyone on phone but still together", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ajak orang lepak, kau...",
    options: [
      { text: "I'm the organizer! Plan everything!", type: "A" },
      { text: "Sometimes initiate", type: "B" },
      { text: "Wait for others to ajak", type: "C" },
      { text: "Prefer be invited than invite", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Lepak budget kau?",
    options: [
      { text: "Splurge! Treat yourself!", type: "A" },
      { text: "Reasonable spending", type: "B" },
      { text: "Budget conscious", type: "C" },
      { text: "Free activities preferred", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila cancel last minute...",
    options: [
      { text: "Frustrated! I planned!", type: "A" },
      { text: "Okay la, things happen", type: "B" },
      { text: "Relief sometimes honestly", type: "C" },
      { text: "I'm the one canceling usually", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Duration lepak biasa?",
    options: [
      { text: "Hours! Dari petang sampai malam!", type: "A" },
      { text: "2-3 hours sweet spot", type: "B" },
      { text: "1-2 hours enough", type: "C" },
      { text: "Quick coffee/meal and go", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Post-lepak feeling?",
    options: [
      { text: "Energized! Can't wait for next!", type: "A" },
      { text: "Content, good time", type: "B" },
      { text: "Tired but worth it", type: "C" },
      { text: "Need alone time to recharge", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Social Butterfly",
    emoji: "🦋",
    description: "Lepak adalah life kau! Always organizing hangouts, full social calendar, energized by people. FOMO is real!",
    traits: ["Social", "Energetic", "Organizer", "Connector"],
    strengths: ["Great network", "Fun to be around", "Brings people together"],
    weaknesses: ["Might neglect alone time", "Overcommit socially"],
    tips: ["Alone time is healthy too", "Quality over quantity sometimes!"],
  },
  B: {
    type: "B",
    title: "Balanced Lepaker",
    emoji: "☕",
    description: "Kau enjoy lepak dengan healthy balance! Appreciate hangouts tapi also value alone time. Social life sorted!",
    traits: ["Balanced", "Selective", "Enjoyable", "Moderate"],
    strengths: ["Good boundaries", "Quality friendships", "Balanced social life"],
    weaknesses: ["Might miss some events", "Could be more adventurous"],
    tips: ["Perfect balance!", "Maybe try new spots!"],
  },
  C: {
    type: "C",
    title: "Quality Time Person",
    emoji: "💎",
    description: "Kau prefer deep connections! Small groups, meaningful conversations, not about quantity. Intimate hangouts best!",
    traits: ["Deep", "Intimate", "Selective", "Quality-focused"],
    strengths: ["Strong friendships", "Meaningful interactions", "Not superficial"],
    weaknesses: ["Miss larger social scene", "Limited network"],
    tips: ["Sometimes big groups are fun", "Expand circle occasionally!"],
  },
  D: {
    type: "D",
    title: "Introvert Lepaker",
    emoji: "🏠",
    description: "Lepak is draining untuk kau! Prefer small doses, recharge alone. Quality introvert who still values friendships!",
    traits: ["Introverted", "Selective", "Low-key", "Recharger"],
    strengths: ["Know limits", "Quality over quantity", "Self-aware"],
    weaknesses: ["Might miss bonding", "Friends might feel neglected"],
    tips: ["Show up sometimes", "Friends appreciate your presence!"],
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
