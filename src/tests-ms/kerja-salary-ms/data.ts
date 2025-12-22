// Gaya Spend Gaji
// How do you spend your salary?

export const questions = [
  {
    id: 1,
    question: "Gaji baru masuk! First thing kau buat?",
    options: [
      { text: "Transfer savings/investment terus!", type: "A" },
      { text: "Pay bills dulu, then organize", type: "B" },
      { text: "Treat yourself sikit, deserve it!", type: "C" },
      { text: "Shopping spree incoming!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Budget bulanan kau...",
    options: [
      { text: "Detailed spreadsheet, setiap sen tracked!", type: "A" },
      { text: "General categories, roughly followed", type: "B" },
      { text: "Mental budget je, flexible", type: "C" },
      { text: "Budget? YOLO je la!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Mid-month, duit tinggal sikit. Kau...",
    options: [
      { text: "Tak pernah happen, I budget properly!", type: "A" },
      { text: "Cut spending, survive sampai gaji", type: "B" },
      { text: "Use credit card, bayar next month", type: "C" },
      { text: "Pinjam kawan dulu, nanti settle", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Savings percentage dari gaji...",
    options: [
      { text: "30%+ Minimum! Financial freedom goal!", type: "A" },
      { text: "10-20%, reasonable amount", type: "B" },
      { text: "Whatever left over end of month", type: "C" },
      { text: "Savings? In this economy?!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sales/promotion besar-besaran. Kau...",
    options: [
      { text: "Buy only kalau dalam wishlist dan budget", type: "A" },
      { text: "Good deals on needs? Okay consider", type: "B" },
      { text: "Opportunity tak boleh lepas!", type: "C" },
      { text: "Add to cart everything, think later!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Makan out vs masak sendiri...",
    options: [
      { text: "Meal prep, pack lunch, save money!", type: "A" },
      { text: "Mix - some home food, some eat out", type: "B" },
      { text: "Grab food mostly, malas masak", type: "C" },
      { text: "Fine dining bila gaji masuk!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Unexpected windfall (bonus/angpau). Plan?",
    options: [
      { text: "100% to savings/investment!", type: "A" },
      { text: "Split - some save, some spend", type: "B" },
      { text: "Finally can buy that thing I wanted!", type: "C" },
      { text: "Party time! Treat everyone!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Financial knowledge kau...",
    options: [
      { text: "Invest, compound interest, portfolio - I know!", type: "A" },
      { text: "Basic understanding, learning more", type: "B" },
      { text: "Know I should learn, haven't started", type: "C" },
      { text: "Money confusing, spend while have!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "End of month, bank account kau biasanya...",
    options: [
      { text: "Still have good balance, planned well!", type: "A" },
      { text: "Okay la, enough to survive", type: "B" },
      { text: "Counting days to gaji next", type: "C" },
      { text: "Negative sometimes, overdraft buddy", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Financial goal 5 tahun kau...",
    options: [
      { text: "Clear - house deposit, investment targets!", type: "A" },
      { text: "General idea - save more, secure future", type: "B" },
      { text: "Vague - be more comfortable kot", type: "C" },
      { text: "Survive bulan ni dulu, 5 tahun jauh!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Financial Ninja",
    emoji: "💰",
    description: "Dave Ramsey would be proud! Kau track every sen, save religiously, dan invest wisely. Future millionaire in the making!",
    traits: ["Financial disciplined", "Savings pro", "Investment savvy", "Goal-oriented"],
    strengths: ["Financial security coming", "Good habits", "Stress-free about money"],
    weaknesses: ["May be too restrictive", "Miss enjoying present", "Cheap reputation?"],
    tips: ["Treat yourself occasionally!", "Money is tool, not goal"],
  },
  B: {
    type: "B",
    title: "Balanced Spender",
    emoji: "⚖️",
    description: "Save some, spend some - balanced approach! Kau enjoy life tapi still plan for future. Adulting done reasonably well!",
    traits: ["Balanced finances", "Reasonable spending", "Future-conscious", "Flexible budget"],
    strengths: ["Enjoy present dan future", "Sustainable approach", "Low financial stress"],
    weaknesses: ["Could save more", "Sometimes overspend"],
    tips: ["Try increase savings gradually", "You're doing okay!"],
  },
  C: {
    type: "C",
    title: "YOLO Spender",
    emoji: "💸",
    description: "Life is short, spend it! Kau enjoy gaji to the max, worry about savings... eventually. Present > Future untuk kau!",
    traits: ["Present-focused", "Lifestyle lover", "Flexible with money", "Credit card user"],
    strengths: ["Enjoy life fully", "Great experiences", "No deprivation"],
    weaknesses: ["Future uncertain", "Debt possible", "Stress end of month"],
    tips: ["Start small savings!", "Future you akan thank present you"],
  },
  D: {
    type: "D",
    title: "Gaji Habis Champion",
    emoji: "🔥",
    description: "Gaji masuk, gaji habis - speedrun edition! Money flows through kau macam air. Financial planning? Never heard of her!",
    traits: ["Zero savings", "Maximum spending", "Live for today", "Budget-free lifestyle"],
    strengths: ["No FOMO", "Live life fully", "Generous with money"],
    weaknesses: ["Financial disaster waiting", "Zero security", "Debt likely"],
    tips: ["SERIOUS: Start budgeting!", "Emergency fund is essential"],
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
