// Kepribadian dari Menu Starbucks
// Tes ini mengungkap kepribadianmu berdasarkan order Starbucks!

export const questions = [
  {
    id: 1,
    question: "Go-to Starbucks order...",
    options: [
      { text: "Espresso-based: Americano, Latte", type: "A" },
      { text: "Frappuccino, blended drinks", type: "B" },
      { text: "Seasonal/limited edition drinks", type: "C" },
      { text: "Non-coffee: Tea, Refreshers", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Customization level...",
    options: [
      { text: "Standard, trust the recipe", type: "A" },
      { text: "Minor tweaks: less ice, extra shot", type: "B" },
      { text: "Full custom: specific milk, syrup, etc", type: "C" },
      { text: "Secret menu atau complex orders", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Alasan ke Starbucks...",
    options: [
      { text: "Coffee fix, caffeine needed", type: "A" },
      { text: "Work/study spot, need WiFi", type: "B" },
      { text: "Meeting point, social", type: "C" },
      { text: "Treat yourself, experience", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Starbucks frequency...",
    options: [
      { text: "Daily, it's routine", type: "A" },
      { text: "Few times a week", type: "B" },
      { text: "Weekly treat", type: "C" },
      { text: "Occasional, special times", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Starbucks rewards/points...",
    options: [
      { text: "Actively collect, redeem strategically", type: "A" },
      { text: "Have app, use sometimes", type: "B" },
      { text: "What rewards?", type: "C" },
      { text: "Too complicated to track", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ordering method...",
    options: [
      { text: "Mobile order, skip the line", type: "A" },
      { text: "In person, enjoy the process", type: "B" },
      { text: "Depends on crowd", type: "C" },
      { text: "Delivery, don't even go there", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Trying new menu items...",
    options: [
      { text: "Stick to favorites, why risk?", type: "A" },
      { text: "Occasionally try recommendations", type: "B" },
      { text: "Always try new seasonal items", type: "C" },
      { text: "Research first before trying", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cup size biasanya...",
    options: [
      { text: "Venti, maximize value", type: "A" },
      { text: "Grande, standard", type: "B" },
      { text: "Tall, just need a bit", type: "C" },
      { text: "Depends on drink", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Starbucks merchandise...",
    options: [
      { text: "Collect cups, tumblers", type: "A" },
      { text: "Have a few favorites", type: "B" },
      { text: "Not interested", type: "C" },
      { text: "Bought once, use daily", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Food pairing...",
    options: [
      { text: "Pastry atau sandwich combo", type: "A" },
      { text: "Sometimes, if hungry", type: "B" },
      { text: "Drinks only", type: "C" },
      { text: "Food elsewhere, drinks here", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Starbucks vs local coffee shops...",
    options: [
      { text: "Starbucks, consistency matters", type: "A" },
      { text: "Both, depends on mood", type: "B" },
      { text: "Prefer local actually", type: "C" },
      { text: "Starbucks for certain things only", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Saat Starbucks rame banget...",
    options: [
      { text: "Wait, worth it", type: "A" },
      { text: "Mobile order, pickup", type: "B" },
      { text: "Find another branch", type: "C" },
      { text: "Go somewhere else", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Starbucks Regular",
    emoji: "☕",
    description: "Barista knows your name dan order! Starbucks adalah part of daily routine. Consistent, reliable, dan kamu appreciate the predictability.",
    traits: ["Consistent", "Routine-oriented", "Loyal", "Practical"],
    strengths: ["Know exactly what you want", "Efficient ordering", "Maximize rewards"],
    weaknesses: ["Expensive habit", "Might miss variety", "Brand dependent"],
    tips: ["Try new things occasionally", "Local coffee can surprise you", "Budget check?"],
  },
  B: {
    type: "B",
    title: "The Balanced Starbucks-er",
    emoji: "🎯",
    description: "Kamu enjoy Starbucks dengan balance! Good frequency, explore menu, dan use it for multiple purposes. Healthy coffee shop relationship!",
    traits: ["Balanced", "Flexible", "Appreciative", "Moderate"],
    strengths: ["Best of both worlds", "Variety enjoyment", "Not addicted"],
    weaknesses: ["Could be more adventurous"],
    tips: ["You're doing great!", "Maybe try that secret menu?"],
  },
  C: {
    type: "C",
    title: "The Seasonal Visitor",
    emoji: "🎃",
    description: "Starbucks untuk special occasions dan seasonal drinks! Pumpkin Spice season, holiday drinks, dan limited editions bring you in. Event-driven customer!",
    traits: ["Event-driven", "Trendy", "Social", "Experience-seeker"],
    strengths: ["Catch all the specials", "Part of seasonal fun", "Instagram worthy"],
    weaknesses: ["Miss the everyday good stuff", "FOMO driven"],
    tips: ["Regular menu has gems too", "Don't just follow hype"],
  },
  D: {
    type: "D",
    title: "The Occasional Treat-er",
    emoji: "🎁",
    description: "Starbucks adalah treat, not routine! Special occasions, meeting friends, atau when craving hits. Appreciate it more karena not frequent!",
    traits: ["Occasional", "Appreciative", "Budget-conscious", "Special-occasion"],
    strengths: ["Every visit is special", "Save money", "Not dependent"],
    weaknesses: ["Miss rewards benefits", "Out of loop on menu"],
    tips: ["Rewards app could save money when you do go", "Treat yourself more sometimes!"],
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
