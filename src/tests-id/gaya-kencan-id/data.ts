// Tes Gaya Kencan Kamu
// Temukan date style yang paling cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "First date ideal menurutmu...",
    options: [
      { text: "Dinner romantis di restoran nice", type: "A" },
      { text: "Coffee date casual untuk ngobrol", type: "B" },
      { text: "Aktivitas seru: hiking, escape room, dll", type: "C" },
      { text: "Simple hangout yang relaxed", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Siapa yang biasanya plan date...",
    options: [
      { text: "Aku yang plan semua detailnya", type: "A" },
      { text: "Bergantian atau discuss together", type: "B" },
      { text: "Spontan, decide on the spot", type: "C" },
      { text: "Prefer pasangan yang plan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Budget untuk dating...",
    options: [
      { text: "Willing to spend untuk experience bagus", type: "A" },
      { text: "Reasonable, quality tapi tidak berlebihan", type: "B" },
      { text: "Budget-friendly tapi still fun", type: "C" },
      { text: "Minimal, free atau murah preferred", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Venue date yang paling nyaman...",
    options: [
      { text: "Fancy restaurant atau rooftop", type: "A" },
      { text: "Cozy cafe atau local spots", type: "B" },
      { text: "Outdoor atau adventure spots", type: "C" },
      { text: "Home atau tempat private", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Conversation style saat date...",
    options: [
      { text: "Deep talk dan meaningful discussion", type: "A" },
      { text: "Mix of serious dan light topics", type: "B" },
      { text: "Fun dan banyak ketawa", type: "C" },
      { text: "Relaxed, tidak perlu banyak ngobrol", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Dress code saat kencan...",
    options: [
      { text: "Dress up nice, impress pasangan", type: "A" },
      { text: "Smart casual, rapi tapi comfortable", type: "B" },
      { text: "Casual sesuai aktivitas", type: "C" },
      { text: "Whatever, yang penting nyaman", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Frekuensi kencan ideal...",
    options: [
      { text: "Regular scheduled dates, at least weekly", type: "A" },
      { text: "Few times a month", type: "B" },
      { text: "Whenever we feel like it", type: "C" },
      { text: "Rare, quality over quantity", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dokumentasi date (foto, story)...",
    options: [
      { text: "Wajib foto dan post!", type: "A" },
      { text: "Beberapa foto untuk memory", type: "B" },
      { text: "Sesekali kalau momen bagus", type: "C" },
      { text: "Jarang, enjoy the moment aja", type: "D" },
    ],
  },
  {
    id: 9,
    question: "End of date yang ideal...",
    options: [
      { text: "Romantic goodbye, sweet ending", type: "A" },
      { text: "Nice closure, looking forward to next", type: "B" },
      { text: "Fun memory, excited for adventure next", type: "C" },
      { text: "Simple bye, tidak perlu dramatic", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Group date vs one-on-one...",
    options: [
      { text: "One-on-one lebih intimate", type: "A" },
      { text: "Both okay, tergantung mood", type: "B" },
      { text: "Group date bisa lebih fun", type: "C" },
      { text: "Either, yang penting comfortable", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Phone usage selama date...",
    options: [
      { text: "Phone away, full attention", type: "A" },
      { text: "Minimal, hanya untuk foto", type: "B" },
      { text: "Moderate, share funny stuff together", type: "C" },
      { text: "Relaxed, no strict rules", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Post-date follow up...",
    options: [
      { text: "Langsung chat sweet message", type: "A" },
      { text: "Thank you dan plan next date", type: "B" },
      { text: "Casual check-in nanti", type: "C" },
      { text: "Tunggu saja, tidak buru-buru", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Romantic Date Lover",
    emoji: "🌹",
    description: "Kamu suka kencan yang romantic dan thoughtful! Nice restaurants, beautiful venues, dan meaningful moments. Date adalah special occasion untuk dirayakan.",
    traits: ["Romantic", "Thoughtful", "Traditional", "Effort-oriented"],
    strengths: ["Creates memorable dates", "Partner feels special", "High quality time"],
    weaknesses: ["Can be high maintenance", "Expensive", "High expectations"],
    tips: ["Simple dates bisa meaningful juga", "It's about the person not the place"],
  },
  B: {
    type: "B",
    title: "Balanced Date Style",
    emoji: "☕",
    description: "Kamu suka kencan yang balanced! Not too fancy, not too casual. Focus pada quality time dan comfortable atmosphere. Sustainable date style.",
    traits: ["Balanced", "Practical", "Quality-focused", "Comfortable"],
    strengths: ["Sustainable", "Comfortable for partner", "Flexible"],
    weaknesses: ["Might not be exciting enough sometimes"],
    tips: ["Surprise dengan special date sesekali", "Keep variety"],
  },
  C: {
    type: "C",
    title: "Adventure Date Style",
    emoji: "🎢",
    description: "Kamu suka kencan yang fun dan adventurous! Activities, experiences, dan trying new things. Date adalah opportunity untuk adventure bersama.",
    traits: ["Adventurous", "Fun", "Active", "Experience-oriented"],
    strengths: ["Exciting dates", "Great memories", "Never boring"],
    weaknesses: ["Might miss quiet bonding time", "Can be exhausting"],
    tips: ["Quiet moments penting juga", "Not every date needs to be an adventure"],
  },
  D: {
    type: "D",
    title: "Chill Date Style",
    emoji: "🏠",
    description: "Kamu suka kencan yang relaxed dan low-key! No fancy venues, no big plans. Just comfortable time together. Less is more for you.",
    traits: ["Relaxed", "Low maintenance", "Comfortable", "Simple"],
    strengths: ["Easy to please", "Low pressure", "Comfortable"],
    weaknesses: ["Might seem unromantic", "Partner might want more effort"],
    tips: ["Some effort shows you care", "Occasional special date is nice"],
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
