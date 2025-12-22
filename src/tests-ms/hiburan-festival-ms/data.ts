// Gaya Festival Anda
// Macam mana anda di festival?

export const questions = [
  {
    id: 1,
    question: "Festival apa yang anda paling excited?",
    options: [
      { text: "Music festival - concerts!", type: "A" },
      { text: "Food festival - makan!", type: "B" },
      { text: "Cultural festival - heritage", type: "C" },
      { text: "Any festival, I'm there!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Persiapan sebelum pergi festival...",
    options: [
      { text: "Outfit on point, camera ready!", type: "A" },
      { text: "Research semua food stalls", type: "B" },
      { text: "Check schedule aktiviti", type: "C" },
      { text: "Spontan je, ikut flow", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kat festival, anda paling enjoy...",
    options: [
      { text: "Main stage performances!", type: "A" },
      { text: "Food hunting semua stalls", type: "B" },
      { text: "Cultural shows dan exhibitions", type: "C" },
      { text: "Vibes dan atmosphere je", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Dalam crowd besar, anda...",
    options: [
      { text: "Depan stage, tengah crowd!", type: "A" },
      { text: "Side area yang comfortable", type: "B" },
      { text: "Observe dari jauh sikit", type: "C" },
      { text: "Wherever friends are", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Budget festival anda?",
    options: [
      { text: "VIP tickets, full experience!", type: "A" },
      { text: "Majority untuk food!", type: "B" },
      { text: "Reasonable, planned spending", type: "C" },
      { text: "Minimal, enjoy for free", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Photos kat festival, anda...",
    options: [
      { text: "Instagram aesthetic semua!", type: "A" },
      { text: "Food pics priority!", type: "B" },
      { text: "Capture meaningful moments", type: "C" },
      { text: "Live in the moment, sikit je photos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pergi festival dengan siapa?",
    options: [
      { text: "Big squad untuk party!", type: "A" },
      { text: "Foodie friends!", type: "B" },
      { text: "Partner atau close friends", type: "C" },
      { text: "Anyone yang free", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila panas dan crowded kat festival...",
    options: [
      { text: "Worth it, keep going!", type: "A" },
      { text: "Find food untuk recharge", type: "B" },
      { text: "Cari tempat teduh rest", type: "C" },
      { text: "Flexible, adjust je", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Post-festival, anda...",
    options: [
      { text: "Post semua photos, tag everyone!", type: "A" },
      { text: "Share food reviews!", type: "B" },
      { text: "Reflect on experience quietly", type: "C" },
      { text: "Sleep, recover!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Best memory dari festivals biasanya...",
    options: [
      { text: "The performances and energy!", type: "A" },
      { text: "The amazing food discoveries!", type: "B" },
      { text: "Learning something new", type: "C" },
      { text: "Quality time dengan friends", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Festival Party Animal",
    emoji: "🎉",
    description: "Festivals are YOUR thing! Energy tinggi, always depan stage, living your best life! Party doesn't stop bila anda ada!",
    traits: ["Energetic", "Social", "Party lover", "Enthusiastic"],
    strengths: ["Life of the party", "Creates memories", "High energy"],
    weaknesses: ["May overdo it", "Exhausting pace"],
    tips: ["Pace yourself", "Hydrate!"],
  },
  B: {
    type: "B",
    title: "Festival Foodie",
    emoji: "🍢",
    description: "Festivals = Food tour untuk anda! Every stall must try, every cuisine must explore. Perut adalah compass anda!",
    traits: ["Food lover", "Adventurous eater", "Thorough", "Appreciative"],
    strengths: ["Never miss good food", "Great food recommendations"],
    weaknesses: ["May miss other activities", "Food coma risk"],
    tips: ["Explore other aspects too", "Share your food finds!"],
  },
  C: {
    type: "C",
    title: "Culture Enthusiast",
    emoji: "🎭",
    description: "Festivals untuk anda adalah learning experience! Appreciate the culture, history, dan meaning behind celebrations. Deep appreciation mode!",
    traits: ["Cultural", "Thoughtful", "Appreciative", "Educated"],
    strengths: ["Meaningful experiences", "Learns and grows"],
    weaknesses: ["May miss the fun parts", "Too serious"],
    tips: ["Let loose sometimes", "Fun is okay too!"],
  },
  D: {
    type: "D",
    title: "Festival Chiller",
    emoji: "😎",
    description: "Go with the flow! Anda enjoy festivals tanpa agenda specific. Vibes are everything, no pressure!",
    traits: ["Relaxed", "Flexible", "Easy-going", "Present"],
    strengths: ["No stress", "Adaptable", "Good company"],
    weaknesses: ["May miss highlights", "Too passive"],
    tips: ["Plan one thing to do", "You might enjoy it more!"],
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
