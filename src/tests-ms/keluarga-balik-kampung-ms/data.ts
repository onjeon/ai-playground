// Gaya Balik Kampung
// Test viral tentang balik kampung style

export const questions = [
  {
    id: 1,
    question: "Balik kampung timing kau biasanya?",
    options: [
      { text: "Awal, elak jam!", type: "A" },
      { text: "Normal timing, expect sikit jam", type: "B" },
      { text: "Malam, less traffic", type: "C" },
      { text: "Random, bila-bila je", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Packing untuk balik kampung...",
    options: [
      { text: "Days before, organized list!", type: "A" },
      { text: "Night before, reasonable", type: "B" },
      { text: "Morning of, panic mode", type: "C" },
      { text: "Beli apa perlu sampai sana je", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Journey balik kampung kau macam mana?",
    options: [
      { text: "Excited! Playlist ready, snacks packed!", type: "A" },
      { text: "Sleep je dalam kereta", type: "B" },
      { text: "Scroll phone sepanjang jalan", type: "C" },
      { text: "Count down bila sampai", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Buah tangan/oleh-oleh kau bawa?",
    options: [
      { text: "Banyak! For everyone!", type: "A" },
      { text: "Standard gifts untuk orang penting", type: "B" },
      { text: "Last minute grab something", type: "C" },
      { text: "Duit je senang", type: "D" },
    ],
  },
  {
    id: 5,
    question: "First thing sampai kampung?",
    options: [
      { text: "Salam semua orang tua-tua!", type: "A" },
      { text: "Unpack dulu, settle in", type: "B" },
      { text: "Find my room, rest!", type: "C" },
      { text: "Check wifi connection", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Aktiviti kat kampung kau usually?",
    options: [
      { text: "Catch up dengan semua relatives!", type: "A" },
      { text: "Mix of rest and socializing", type: "B" },
      { text: "Mostly rest and eat", type: "C" },
      { text: "Lock in room, my own world", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kampung food, kau...",
    options: [
      { text: "Eat everything! Mak masak sedap!", type: "A" },
      { text: "Enjoy favourites, control portion", type: "B" },
      { text: "Miss city food tbh", type: "C" },
      { text: "Picky, kampung food not my style", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kampung life vs city life preference?",
    options: [
      { text: "Kampung best! Peaceful!", type: "A" },
      { text: "Both have their charms", type: "B" },
      { text: "City life is life", type: "C" },
      { text: "Just visiting is enough", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Berapa lama kau stay kat kampung?",
    options: [
      { text: "As long as possible!", type: "A" },
      { text: "Standard 3-5 days", type: "B" },
      { text: "1-2 days max", type: "C" },
      { text: "Quick visit, few hours", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Leaving kampung, feeling kau?",
    options: [
      { text: "Sedih sangat, tak nak balik!", type: "A" },
      { text: "Bittersweet, till next time", type: "B" },
      { text: "Okay, back to normal life", type: "C" },
      { text: "Finally, my own space!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kampung Kid At Heart",
    emoji: "🏡",
    description: "Kampung adalah home untuk kau! Love everything about it - the family, food, peace. City is just work, kampung is life!",
    traits: ["Nostalgic", "Family-oriented", "Traditional", "Rooted"],
    strengths: ["Strong roots", "Appreciate origins", "Good family bonds"],
    weaknesses: ["Might be too attached", "City life struggles"],
    tips: ["Bloom where planted", "Both are home!"],
  },
  B: {
    type: "B",
    title: "Balanced Balik",
    emoji: "⚖️",
    description: "Kau enjoy kampung visits dengan healthy balance! Appreciate it but also comfortable in city. Best of both worlds!",
    traits: ["Balanced", "Adaptable", "Appreciative", "Moderate"],
    strengths: ["Flexible", "Good perspective", "Enjoy both lifestyles"],
    weaknesses: ["Jack of both, master of none?", "Sometimes torn"],
    tips: ["Perfect balance!", "Keep enjoying both!"],
  },
  C: {
    type: "C",
    title: "City Soul",
    emoji: "🌆",
    description: "Kau city person yang balik kampung sebab kena! Appreciate family tapi kampung life not your vibe. Urban through and through!",
    traits: ["Urban", "Modern", "Independent", "City-lover"],
    strengths: ["Know yourself", "Comfortable in city", "Independent"],
    weaknesses: ["Miss kampung connections", "Family might feel hurt"],
    tips: ["Appreciate kampung more", "Roots matter!"],
  },
  D: {
    type: "D",
    title: "Reluctant Visitor",
    emoji: "😅",
    description: "Balik kampung is a chore untuk kau! Family obligations je yang bawa. Maybe complicated history atau just very independent!",
    traits: ["Independent", "Detached", "Private", "Self-sufficient"],
    strengths: ["Own identity", "Independent life", "Self-reliant"],
    weaknesses: ["Family disconnection", "Missing out on bonds"],
    tips: ["Try to reconnect", "Family won't be forever!"],
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
