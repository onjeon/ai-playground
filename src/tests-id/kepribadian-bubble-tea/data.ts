// Kepribadian dari Bubble Tea Favorit
// Tes ini mengungkap kepribadianmu berdasarkan preferensi bubble tea!

export const questions = [
  {
    id: 1,
    question: "Base tea favorit kamu...",
    options: [
      { text: "Black tea / Hong Kong milk tea", type: "A" },
      { text: "Oolong tea / green tea", type: "B" },
      { text: "Fruit tea / fresh fruit series", type: "C" },
      { text: "Brown sugar / caramel series", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Level gula yang selalu kamu pilih...",
    options: [
      { text: "100% atau lebih (extra sugar!)", type: "A" },
      { text: "50-70%, balanced", type: "B" },
      { text: "25-30%, less sweet", type: "C" },
      { text: "0%, no sugar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Topping favorit...",
    options: [
      { text: "Pearl/boba classic", type: "A" },
      { text: "Pudding atau cheese foam", type: "B" },
      { text: "Jelly (coconut, aloe, etc)", type: "C" },
      { text: "Multiple toppings!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Frekuensi minum boba...",
    options: [
      { text: "Hampir setiap hari", type: "A" },
      { text: "2-3x seminggu", type: "B" },
      { text: "1x seminggu", type: "C" },
      { text: "Occasional treat", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Brand bubble tea favorit...",
    options: [
      { text: "Chatime / Gong Cha (reliable classics)", type: "A" },
      { text: "Tiger Sugar / Xing Fu Tang (brown sugar)", type: "B" },
      { text: "KOI / Onezo (premium tea)", type: "C" },
      { text: "Local Indonesian brands", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat try new bubble tea place...",
    options: [
      { text: "Order signature/best seller", type: "A" },
      { text: "Ask recommendations", type: "B" },
      { text: "Try something unique/different", type: "C" },
      { text: "Order usual order, safe choice", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ice level preference...",
    options: [
      { text: "Full ice, cold cold!", type: "A" },
      { text: "Less ice, biar ga cepat encer", type: "B" },
      { text: "Depends on weather", type: "C" },
      { text: "No ice / warm", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Situasi beli bubble tea...",
    options: [
      { text: "Mood booster anytime", type: "A" },
      { text: "Work companion", type: "B" },
      { text: "Social activity sama temen", type: "C" },
      { text: "Reward untuk diri sendiri", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau antrian panjang banget...",
    options: [
      { text: "Worth the wait!", type: "A" },
      { text: "Order online pickup", type: "B" },
      { text: "Find alternative nearby", type: "C" },
      { text: "Balik lain waktu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sharing boba sama orang...",
    options: [
      { text: "No! My boba is MY boba", type: "A" },
      { text: "Sure, sedikit aja", type: "B" },
      { text: "Order bareng, split", type: "C" },
      { text: "Happy to share!", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Budget untuk bubble tea per bulan...",
    options: [
      { text: "No limit, life essential", type: "A" },
      { text: "Ada budget, tapi flexible", type: "B" },
      { text: "Fixed budget, controlled", type: "C" },
      { text: "Special occasions aja", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ekspektasi vs realita rasa boba...",
    options: [
      { text: "Selalu puas, boba is boba", type: "A" },
      { text: "Kritis, tau mana yang enak", type: "B" },
      { text: "Adventurous, accept surprises", type: "C" },
      { text: "Stick to favorites, avoid disappointment", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Boba Enthusiast",
    emoji: "🧋",
    description: "Boba adalah life! Kamu boba addict sejati yang tau setiap store, every menu, dan ga bisa hidup tanpa daily boba fix. Sweet tooth yang ga malu-malu!",
    traits: ["Passionate", "Sweet-loving", "Loyal", "Indulgent"],
    strengths: ["Know all the good spots", "Life of boba parties", "Always know what to order"],
    weaknesses: ["Wallet crying", "Sugar intake concern", "Might be too dependent"],
    tips: ["Maybe try less sugar sometimes", "Your health matters too", "Budget check?"],
  },
  B: {
    type: "B",
    title: "The Balanced Sipper",
    emoji: "☕",
    description: "Kamu enjoy boba dengan balance! Appreciate quality, moderate consumption, dan tau kapan harus indulge atau hold back. Mature boba consumer!",
    traits: ["Balanced", "Discerning", "Moderate", "Quality-focused"],
    strengths: ["Healthy relationship dengan boba", "Appreciate good tea", "Self-control"],
    weaknesses: ["Sometimes too controlled?", "Might overthink simple pleasures"],
    tips: ["It's okay to go full sugar sometimes", "Treat yourself!", "Enjoy without guilt"],
  },
  C: {
    type: "C",
    title: "The Adventurous Taster",
    emoji: "🌈",
    description: "Boba adalah adventure for you! Always trying new things, new flavors, new places. Your boba journey is about exploration dan discovery!",
    traits: ["Curious", "Adventurous", "Open-minded", "Social"],
    strengths: ["Discover hidden gems", "Great recommendations", "Fun boba buddy"],
    weaknesses: ["Sometimes disappointing experiments", "FOMO on limited editions"],
    tips: ["Some classics are classic for a reason", "Not every new thing is better", "Trust your favorites too"],
  },
  D: {
    type: "D",
    title: "The Occasional Treat-er",
    emoji: "🎁",
    description: "Boba adalah special treat! Kamu appreciate it more karena ga terlalu sering. Quality over quantity, meaningful over routine.",
    traits: ["Disciplined", "Appreciative", "Special occasion", "Mindful"],
    strengths: ["Every boba is special", "Good self-control", "Appreciate the experience"],
    weaknesses: ["Missing out on boba trends", "Sometimes too strict"],
    tips: ["It's okay to have more!", "Boba can be casual too", "Don't deprive yourself"],
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
