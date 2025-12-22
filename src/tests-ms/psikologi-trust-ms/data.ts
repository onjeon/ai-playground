// Tahap Trust Issue
// Sejauh mana kau percaya orang lain?

export const questions = [
  {
    id: 1,
    question: "Bila kenal orang baru, kau...",
    options: [
      { text: "Trust sampai terbukti sebaliknya", type: "A" },
      { text: "Neutral dulu, observe sikit", type: "B" },
      { text: "Skeptical, take time nak trust", type: "C" },
      { text: "Assume tak boleh dipercayai", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Partner kau keluar dengan kawan opposite gender. Kau...",
    options: [
      { text: "No problem, trust dia fully", type: "A" },
      { text: "Okay, tapi appreciate update", type: "B" },
      { text: "Uncomfortable, need reassurance", type: "C" },
      { text: "Very suspicious, tak boleh relax", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila orang offer help tanpa diminta, kau fikir...",
    options: [
      { text: "How nice of them!", type: "A" },
      { text: "Appreciate it, accept", type: "B" },
      { text: "Wonder apa motif dia", type: "C" },
      { text: "Mesti ada hidden agenda", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Berapa orang yang kau REALLY trust?",
    options: [
      { text: "Quite a few, comfortable trusting", type: "A" },
      { text: "A handful of close ones", type: "B" },
      { text: "Very few, maybe 1-2", type: "C" },
      { text: "Honestly, almost no one fully", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila share secret dengan kawan, kau...",
    options: [
      { text: "Share openly dengan trusted friends", type: "A" },
      { text: "Share dengan selected people", type: "B" },
      { text: "Very careful, edit details", type: "C" },
      { text: "Never share secrets, too risky", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila kena betrayed before, sekarang kau...",
    options: [
      { text: "Healed, dapat trust again", type: "A" },
      { text: "Cautious tapi still open", type: "B" },
      { text: "Very guarded sekarang", type: "C" },
      { text: "Completely shut off", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Colleague pinjam barang kau. Kau...",
    options: [
      { text: "Bagi je, tak worry", type: "A" },
      { text: "Bagi, mentally note bila nak balik", type: "B" },
      { text: "Reluctant tapi bagi", type: "C" },
      { text: "Prefer not to lend anything", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila orang promise something, kau...",
    options: [
      { text: "Believe them, expect follow through", type: "A" },
      { text: "Hopeful tapi realistic", type: "B" },
      { text: "Doubt until they prove it", type: "C" },
      { text: "Assume they wont keep it", type: "D" },
    ],
  },
  {
    id: 9,
    question: "In relationship, kau...",
    options: [
      { text: "Very open dan trusting", type: "A" },
      { text: "Trust dengan some boundaries", type: "B" },
      { text: "Need constant reassurance", type: "C" },
      { text: "Always expecting betrayal", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Overall trust level kau towards people?",
    options: [
      { text: "Generally trusting", type: "A" },
      { text: "Cautiously optimistic", type: "B" },
      { text: "Mostly skeptical", type: "C" },
      { text: "Very low trust", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Open Truster",
    emoji: "💚",
    description: "Kau naturally trust orang! Open heart, assume the best in people. This makes relationships easy tapi be aware not everyone deserves full trust immediately!",
    traits: ["Trusting", "Open", "Optimistic", "Warm"],
    strengths: ["Easy to connect", "Give people chance", "Not paranoid"],
    weaknesses: ["May get taken advantage of", "Can be naive", "Hurt deeper bila betrayed"],
    tips: ["Trust but verify", "Learn red flags", "Protect yourself while staying open"],
  },
  B: {
    type: "B",
    title: "Balanced Truster",
    emoji: "⚖️",
    description: "Kau ada healthy trust balance! Tak paranoid tapi tak naive. Give people chance but dengan discernment. This is actually ideal approach!",
    traits: ["Discerning", "Balanced", "Realistic", "Healthy skepticism"],
    strengths: ["Good judge of character", "Protect self while connecting", "Reasonable expectations"],
    weaknesses: ["May miss some good connections being cautious"],
    tips: ["Keep this balance", "Trust your gut", "Stay open to deserving people"],
  },
  C: {
    type: "C",
    title: "Guarded Heart",
    emoji: "🛡️",
    description: "Kau ada trust issues yang significant. Hard untuk let people in, always waiting untuk the other shoe to drop. Probably been hurt before. Its protective tapi limiting!",
    traits: ["Guarded", "Skeptical", "Cautious", "Self-protective"],
    strengths: ["Hard to manipulate", "Protect yourself well", "Independent"],
    weaknesses: ["Miss out on connections", "Exhausting to always guard", "Lonely"],
    tips: ["Consider why you guard so much", "Small steps of trust", "Not everyone will hurt you"],
  },
  D: {
    type: "D",
    title: "Trust Wounded",
    emoji: "🔒",
    description: "Kau really struggle dengan trust. Almost impossible untuk believe anyone fully. This level of guard usually comes from deep hurt. You deserve healing!",
    traits: ["Highly guarded", "Distrustful", "Isolated", "Wounded"],
    strengths: ["Very self-reliant", "Hard to fool"],
    weaknesses: ["Very lonely", "Miss all connections", "Exhausting to maintain"],
    tips: ["This level of distrust affects life quality", "Consider therapy untuk past wounds", "You deserve to trust again"],
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
