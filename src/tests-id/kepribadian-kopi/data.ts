// Kepribadian dari Kopi Favorit
// Tes ini mengungkap kepribadianmu berdasarkan preferensi kopi!

export const questions = [
  {
    id: 1,
    question: "Kopi pagi hari harus...",
    options: [
      { text: "Strong espresso, wake up call", type: "A" },
      { text: "Cappuccino/latte, balanced start", type: "B" },
      { text: "Iced coffee, refreshing", type: "C" },
      { text: "Sweet coffee (kopi susu, dll)", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Di coffee shop, order favorit...",
    options: [
      { text: "Americano atau long black", type: "A" },
      { text: "Signature/specialty drinks", type: "B" },
      { text: "Es kopi susu kekinian", type: "C" },
      { text: "Frappuccino/blended drinks", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Roast level preference...",
    options: [
      { text: "Dark roast, bold dan strong", type: "A" },
      { text: "Medium roast, balanced", type: "B" },
      { text: "Light roast, fruity notes", type: "C" },
      { text: "Ga terlalu picky", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sugar dan cream di kopi...",
    options: [
      { text: "Black, no additions", type: "A" },
      { text: "Little bit of milk", type: "B" },
      { text: "Creamy dengan some sugar", type: "C" },
      { text: "Sweet dan creamy please!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cups of coffee per hari...",
    options: [
      { text: "3+ cups, fuel for life", type: "A" },
      { text: "2 cups, morning dan afternoon", type: "B" },
      { text: "1 cup, just need a bit", type: "C" },
      { text: "Occasional, not daily", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Home coffee setup...",
    options: [
      { text: "V60/Chemex, manual brewing", type: "A" },
      { text: "Espresso machine", type: "B" },
      { text: "French press atau Moka pot", type: "C" },
      { text: "Instant atau sachets fine", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Coffee shop vibe yang prefer...",
    options: [
      { text: "Specialty coffee shop, serious about beans", type: "A" },
      { text: "Cozy cafe, good ambiance", type: "B" },
      { text: "Trendy spots, Instagrammable", type: "C" },
      { text: "Anywhere dengan WiFi dan AC", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Reaction kalau ga dapat kopi pagi...",
    options: [
      { text: "Headache, moody, can't function", type: "A" },
      { text: "Miss it tapi survive", type: "B" },
      { text: "Find alternative caffeine", type: "C" },
      { text: "Fine, not dependent", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Knowledge tentang kopi origins...",
    options: [
      { text: "Know my beans! Single origin matters", type: "A" },
      { text: "Basic knowledge, appreciate good coffee", type: "B" },
      { text: "Tau beberapa famous ones", type: "C" },
      { text: "Coffee is coffee", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat try new coffee shop...",
    options: [
      { text: "Order pour over atau espresso based", type: "A" },
      { text: "Try their signature drink", type: "B" },
      { text: "Order usual safe choice", type: "C" },
      { text: "Whatever looks good on menu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Coffee as social activity...",
    options: [
      { text: "Enjoy talking about coffee dengan fellow enthusiasts", type: "A" },
      { text: "Nice setting untuk catch up", type: "B" },
      { text: "Love coffee dates!", type: "C" },
      { text: "Just need caffeine, not social", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Budget untuk kopi per bulan...",
    options: [
      { text: "Significant, quality beans dan cafes", type: "A" },
      { text: "Reasonable, mix home dan cafes", type: "B" },
      { text: "Mostly kopi kekinian harga normal", type: "C" },
      { text: "Minimal, sachets atau cheap options", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Coffee Connoisseur",
    emoji: "☕",
    description: "Kamu adalah coffee snob (in best way)! Know your beans, appreciate the craft, dan caffeine runs through your veins. Coffee is not drink, it's lifestyle!",
    traits: ["Knowledgeable", "Passionate", "Quality-focused", "Caffeine-dependent"],
    strengths: ["Great coffee recommendations", "Appreciate the craft", "Home barista skills"],
    weaknesses: ["Expensive habit", "Maybe too snobbish?", "Caffeine addiction real"],
    tips: ["Sometimes instant is okay too", "Your body needs breaks from caffeine", "Share knowledge without judging"],
  },
  B: {
    type: "B",
    title: "The Balanced Brewer",
    emoji: "⚖️",
    description: "Kamu appreciate good coffee tanpa being extreme! Enjoy quality tapi not obsessed. Healthy coffee relationship yang enviable!",
    traits: ["Balanced", "Appreciative", "Moderate", "Adaptable"],
    strengths: ["Enjoy without addiction", "Flexible preferences", "Good coffee buddy"],
    weaknesses: ["Might miss some coffee experiences"],
    tips: ["Maybe explore specialty coffee more", "You're doing great!"],
  },
  C: {
    type: "C",
    title: "The Social Sipper",
    emoji: "🧊",
    description: "Coffee adalah social lubricant! Es kopi dates, trendy cafe visits, dan coffee as excuse untuk hangout. About the vibes as much as caffeine!",
    traits: ["Social", "Trendy", "Fun-loving", "Experience-seeker"],
    strengths: ["Know all the aesthetic cafes", "Great for coffee dates", "Always updated trends"],
    weaknesses: ["Might prioritize aesthetics over taste", "Expensive trendy spots"],
    tips: ["Try appreciating coffee itself too", "Hole in the wall places often better", "Not everything needs to be Instagrammable"],
  },
  D: {
    type: "D",
    title: "The Casual Caffeine Consumer",
    emoji: "😌",
    description: "Kopi adalah just kopi for you! Functional caffeine delivery, no fuss, no pretense. Practical dan unfussy approach to coffee!",
    traits: ["Practical", "Unfussy", "Flexible", "Low-maintenance"],
    strengths: ["Not addicted", "Easy to please", "Save money"],
    weaknesses: ["Miss out on coffee experiences", "Could appreciate more"],
    tips: ["Try good coffee sometime!", "It might open new world", "But no pressure, you do you"],
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
