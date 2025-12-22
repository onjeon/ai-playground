// Gaya Membaca Anda
// Jenis pembaca mana anda?

export const questions = [
  {
    id: 1,
    question: "Berapa banyak buku anda baca setahun?",
    options: [
      { text: "20+ books! Bookworm sejati", type: "A" },
      { text: "5-20 buku, consistent reader", type: "B" },
      { text: "1-5 buku, bila ada masa", type: "C" },
      { text: "Kurang dari 1, jarang baca", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Format bacaan preferred?",
    options: [
      { text: "Physical books - feel the pages!", type: "A" },
      { text: "E-books - convenient", type: "B" },
      { text: "Audiobooks - multitask friendly", type: "C" },
      { text: "Articles/threads je mostly", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Genre favorite anda?",
    options: [
      { text: "Fiction - escape reality!", type: "A" },
      { text: "Non-fiction - learn something", type: "B" },
      { text: "Self-help - personal growth", type: "C" },
      { text: "Tak specific, depends mood", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Reading spot favorite?",
    options: [
      { text: "Cozy corner di rumah", type: "A" },
      { text: "Café dengan coffee", type: "B" },
      { text: "Commute - train, bus", type: "C" },
      { text: "Before sleep di katil", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila start buku baru...",
    options: [
      { text: "Cannot stop sampai habis!", type: "A" },
      { text: "Steady pace, chapter by chapter", type: "B" },
      { text: "Start strong, then slow", type: "C" },
      { text: "Takes forever to finish", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Book collection anda?",
    options: [
      { text: "Library worth of books!", type: "A" },
      { text: "Nice collection, curated", type: "B" },
      { text: "Few books here and there", type: "C" },
      { text: "Minimal, borrow atau digital", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Book recommendations, anda...",
    options: [
      { text: "Always have suggestions ready!", type: "A" },
      { text: "Share bila relevant", type: "B" },
      { text: "Ask for recommendations more", type: "C" },
      { text: "Tak ingat buku yang baca", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila buku boring halfway...",
    options: [
      { text: "Push through, must finish!", type: "A" },
      { text: "Skim to see if gets better", type: "B" },
      { text: "DNF, life's too short", type: "C" },
      { text: "Abandon completely", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Reading goals/challenges?",
    options: [
      { text: "Yearly reading challenge!", type: "A" },
      { text: "Informal goal, flexible", type: "B" },
      { text: "No goals, read when want", type: "C" },
      { text: "Goal is to read more next year", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Books influence anda macam mana?",
    options: [
      { text: "Deeply! Change perspectives", type: "A" },
      { text: "Learn new things", type: "B" },
      { text: "Entertainment mostly", type: "C" },
      { text: "Minimal influence", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bookworm Sejati",
    emoji: "📚",
    description: "Books are life! Constant reader dengan impressive collection. Knowledge dan imagination overflow!",
    traits: ["Avid reader", "Knowledgeable", "Imaginative", "Curious"],
    strengths: ["Wide knowledge", "Great vocabulary", "Creative mind"],
    weaknesses: ["May neglect other activities", "Book hoarding"],
    tips: ["Balance reading with action!", "Share your knowledge"],
  },
  B: {
    type: "B",
    title: "Consistent Reader",
    emoji: "📖",
    description: "Steady reading habits! Balance life dan books dengan baik. Healthy relationship dengan reading!",
    traits: ["Consistent", "Balanced", "Curious", "Practical"],
    strengths: ["Sustainable habit", "Continuous learning"],
    weaknesses: ["Could push for more"],
    tips: ["Challenge yourself sometimes!", "Try new genres"],
  },
  C: {
    type: "C",
    title: "Casual Reader",
    emoji: "📄",
    description: "Read bila ada masa dan mood! No pressure approach to reading. Quality over quantity!",
    traits: ["Casual", "Selective", "Relaxed", "Practical"],
    strengths: ["No reading guilt", "Purposeful reading"],
    weaknesses: ["Could read more"],
    tips: ["Set aside reading time!", "Start with short books"],
  },
  D: {
    type: "D",
    title: "Aspiring Reader",
    emoji: "📱",
    description: "Want to read more! Good intentions, execution pending. Every reader started somewhere!",
    traits: ["Hopeful", "Busy", "Distracted", "Potential reader"],
    strengths: ["Aware of benefits", "Open to starting"],
    weaknesses: ["Hasn't developed habit"],
    tips: ["Start with 10 pages/day!", "Audiobooks are valid"],
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
