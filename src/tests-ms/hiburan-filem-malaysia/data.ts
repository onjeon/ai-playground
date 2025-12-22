// Gaya Filem Malaysia Anda
// Filem Malaysia apa yang represent anda?

export const questions = [
  {
    id: 1,
    question: "Genre filem Malaysia favorite anda?",
    options: [
      { text: "Horror - hantu Malaysia the best!", type: "A" },
      { text: "Komedi - gelak sampai sakit perut", type: "B" },
      { text: "Drama - cerita deep dan meaningful", type: "C" },
      { text: "Action/Adventure - adrenaline!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tengok filem Malaysia di mana?",
    options: [
      { text: "Opening day di cinema!", type: "A" },
      { text: "Weekend movie dengan family", type: "B" },
      { text: "Stream kat rumah je", type: "C" },
      { text: "Bila orang recommend", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pelakon Malaysia favorite anda jenis?",
    options: [
      { text: "Versatile - boleh buat semua role", type: "A" },
      { text: "Comedian - natural funny", type: "B" },
      { text: "Serious actor - deep acting", type: "C" },
      { text: "Rising stars - fresh faces", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila tengok filem Malaysia yang bagus...",
    options: [
      { text: "Proud! Share review everywhere", type: "A" },
      { text: "Recommend pada semua orang", type: "B" },
      { text: "Appreciate quietly", type: "C" },
      { text: "Compare dengan foreign films", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Filem Malaysia yang tak bagus, anda...",
    options: [
      { text: "Still support, kita kena sokong!", type: "A" },
      { text: "Bagi constructive feedback", type: "B" },
      { text: "Diam je, tak recommend", type: "C" },
      { text: "Critique openly", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Scene paling anda suka dalam filem Malaysia?",
    options: [
      { text: "Jump scare yang buat teriak!", type: "A" },
      { text: "Punchline yang hilarious", type: "B" },
      { text: "Emotional scene yang buat nangis", type: "C" },
      { text: "Epic action sequences", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Nostalgia filem Malaysia lama...",
    options: [
      { text: "P. Ramlee forever dalam hati!", type: "A" },
      { text: "Senario era was gold!", type: "B" },
      { text: "90s/2000s drama the best", type: "C" },
      { text: "Prefer filem baru, modern", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila ada filem Malaysia viral...",
    options: [
      { text: "First day kena tengok!", type: "A" },
      { text: "Tunggu review dulu", type: "B" },
      { text: "Eventually bila ada masa", type: "C" },
      { text: "Skip kalau tak minat genre", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Support filem Malaysia macam mana?",
    options: [
      { text: "Buy tickets, merchandise, everything!", type: "A" },
      { text: "Watch legally, share reviews", type: "B" },
      { text: "Watch bila best quality available", type: "C" },
      { text: "Free streaming je biasanya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Harapan untuk industri filem Malaysia?",
    options: [
      { text: "Go international, Oscar dream!", type: "A" },
      { text: "More diverse stories", type: "B" },
      { text: "Better production quality", type: "C" },
      { text: "More original content", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Filem Patriot",
    emoji: "🇲🇾",
    description: "You are filem Malaysia's biggest fan! Support 100%, first day tickets, share reviews - anda adalah backbone industri!",
    traits: ["Patriotic", "Supportive", "Enthusiastic", "Loyal"],
    strengths: ["True supporter", "Helps industry grow"],
    weaknesses: ["May overlook flaws", "Biased sometimes"],
    tips: ["Constructive criticism helps too!", "Your support matters!"],
  },
  B: {
    type: "B",
    title: "Casual Supporter",
    emoji: "🎬",
    description: "Support filem Malaysia dengan cara yang balanced! Appreciate yang bagus, honest dengan yang kurang. Fair viewer!",
    traits: ["Balanced", "Fair", "Supportive", "Honest"],
    strengths: ["Gives honest feedback", "Reasonable expectations"],
    weaknesses: ["May be too critical sometimes"],
    tips: ["Keep supporting!", "Your feedback helps improve quality"],
  },
  C: {
    type: "C",
    title: "Selective Viewer",
    emoji: "🎭",
    description: "Quality over quantity untuk anda! Tengok bila cerita menarik, appreciate bila truly good. Discerning taste!",
    traits: ["Selective", "Quality-focused", "Discerning", "Thoughtful"],
    strengths: ["High standards", "Appreciates true quality"],
    weaknesses: ["May miss hidden gems", "Too picky"],
    tips: ["Give more films a chance!", "Some surprise you"],
  },
  D: {
    type: "D",
    title: "Genre Specific Fan",
    emoji: "🎯",
    description: "Anda tahu apa anda suka! Certain genres je yang menarik minat. Specialist viewer dengan preference yang jelas!",
    traits: ["Specific taste", "Focused", "Clear preferences", "Honest"],
    strengths: ["Knows what you like", "Expert in preferred genres"],
    weaknesses: ["Limited exposure", "Miss diverse content"],
    tips: ["Expand horizons!", "Try new genres sometimes"],
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
