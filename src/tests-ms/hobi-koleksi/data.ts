// Gaya Koleksi Anda
// Jenis collector mana anda?

export const questions = [
  {
    id: 1,
    question: "Apa yang anda collect?",
    options: [
      { text: "Figurines/toys - display collection", type: "A" },
      { text: "Trading cards/stamps - classic", type: "B" },
      { text: "Vintage items - unique finds", type: "C" },
      { text: "Random stuff - receipts, tickets", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kenapa anda collect?",
    options: [
      { text: "Passion! Love the hunt!", type: "A" },
      { text: "Investment dan value", type: "B" },
      { text: "Nostalgia dan memories", type: "C" },
      { text: "Tak tahu, just accumulate", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Display collection anda macam mana?",
    options: [
      { text: "Showcase cabinet, proper lighting!", type: "A" },
      { text: "Organized boxes, catalogued", type: "B" },
      { text: "Around the house, visible", type: "C" },
      { text: "Dalam drawer somewhere", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Budget untuk collection?",
    options: [
      { text: "Significant! Worth the investment", type: "A" },
      { text: "Set budget, stick to it", type: "B" },
      { text: "Occasional purchases", type: "C" },
      { text: "Free items mostly", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila jumpa rare item...",
    options: [
      { text: "MUST HAVE! Whatever the cost", type: "A" },
      { text: "Negotiate, find best deal", type: "B" },
      { text: "If affordable, consider", type: "C" },
      { text: "Nice to look at", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Collection knowledge anda?",
    options: [
      { text: "Expert - values, editions, history", type: "A" },
      { text: "Good knowledge dalam niche", type: "B" },
      { text: "Basic appreciation", type: "C" },
      { text: "Minimal, just like having stuff", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Trading/selling dari collection?",
    options: [
      { text: "Never! Sentimental value", type: "A" },
      { text: "Sometimes, upgrade collection", type: "B" },
      { text: "Rarely, bila need money", type: "C" },
      { text: "Tak terfikir pun nak jual", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Connect dengan other collectors?",
    options: [
      { text: "Active dalam community!", type: "A" },
      { text: "Few collector friends", type: "B" },
      { text: "Solo collector", type: "C" },
      { text: "Tak tahu ada community", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Family/friends reaction pada collection?",
    options: [
      { text: "Impressed! They understand", type: "A" },
      { text: "Supportive, nice hobby", type: "B" },
      { text: "Confused but accept", type: "C" },
      { text: "Buang la tu semua!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Collection goal anda?",
    options: [
      { text: "Complete set! Every piece!", type: "A" },
      { text: "Curated selection terbaik", type: "B" },
      { text: "Meaningful items only", type: "C" },
      { text: "No goal, just have stuff", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Hardcore Collector",
    emoji: "🏆",
    description: "Collection adalah obsession (good kind)! Serious about your hobby, impressive collection. Museum-worthy!",
    traits: ["Passionate", "Dedicated", "Knowledgeable", "Invested"],
    strengths: ["Impressive collection", "Expert knowledge", "Valuable hobby"],
    weaknesses: ["May overspend", "Space issues"],
    tips: ["Enjoy responsibly!", "Your passion is valid"],
  },
  B: {
    type: "B",
    title: "Smart Collector",
    emoji: "💎",
    description: "Collect dengan strategy! Value-conscious, curated choices. Investment mindset dengan passion!",
    traits: ["Strategic", "Smart", "Curated", "Value-focused"],
    strengths: ["Good investments", "Quality collection"],
    weaknesses: ["May miss spontaneous finds"],
    tips: ["Sometimes heart over head!", "Enjoy the hunt"],
  },
  C: {
    type: "C",
    title: "Sentimental Collector",
    emoji: "💝",
    description: "Collection adalah memories! Each item has story, emotional value > monetary. Heart collector!",
    traits: ["Sentimental", "Nostalgic", "Personal", "Meaningful"],
    strengths: ["Rich in meaning", "Personal connection"],
    weaknesses: ["May accumulate too much", "Hard to let go"],
    tips: ["Curate sometimes!", "Keep the most meaningful"],
  },
  D: {
    type: "D",
    title: "Accidental Collector",
    emoji: "📦",
    description: "Tak sedar pun anda collector! Just keep stuff, somehow accumulate. Unintentional collection!",
    traits: ["Casual", "Accidental", "Keeper", "Unbothered"],
    strengths: ["No pressure", "Potential treasures"],
    weaknesses: ["Clutter risk", "No organization"],
    tips: ["Organize your stuff!", "You might have treasures"],
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
