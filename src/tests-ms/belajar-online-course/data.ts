// Gaya Online Course Anda
// Macam mana anda belajar online?

export const questions = [
  {
    id: 1,
    question: "Bila beli online course, anda...",
    options: [
      { text: "Habiskan semua dalam seminggu", type: "A" },
      { text: "Buat jadual dan ikut pace", type: "B" },
      { text: "Tengok sikit-sikit bila free", type: "C" },
      { text: "Beli je, tengok entah bila", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kenapa anda ambil online course?",
    options: [
      { text: "Nak upgrade skill untuk career", type: "A" },
      { text: "Interest dalam topik tu", type: "B" },
      { text: "Kawan recommend", type: "C" },
      { text: "Discount menarik, beli dulu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Masa tengok video course, anda...",
    options: [
      { text: "Fokus 100%, buat notes", type: "A" },
      { text: "Tengok sambil buat kerja lain", type: "B" },
      { text: "2x speed semua video", type: "C" },
      { text: "Play, then scroll phone", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Assignment dalam course, anda...",
    options: [
      { text: "Siapkan semua dengan teliti", type: "A" },
      { text: "Buat yang penting je", type: "B" },
      { text: "Skip, tengok video je", type: "C" },
      { text: "Ada assignment ke?", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Berapa online course anda ada sekarang?",
    options: [
      { text: "Sikit je, habiskan dulu baru beli baru", type: "A" },
      { text: "Beberapa, dalam progress", type: "B" },
      { text: "Banyak, separuh tak start", type: "C" },
      { text: "Tak ingat dah berapa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Platform course favorite anda?",
    options: [
      { text: "Coursera/edX - academic", type: "A" },
      { text: "Udemy - practical skills", type: "B" },
      { text: "YouTube - free content", type: "C" },
      { text: "Mana-mana yang ada sale", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila stuck dalam course, anda...",
    options: [
      { text: "Research sampai faham", type: "A" },
      { text: "Tanya dalam forum/community", type: "B" },
      { text: "Skip bahagian tu", type: "C" },
      { text: "Give up, tukar course lain", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Certificate selepas habis course...",
    options: [
      { text: "Penting! Update LinkedIn terus", type: "A" },
      { text: "Nice to have", type: "B" },
      { text: "Tak kisah sangat", type: "C" },
      { text: "Tak pernah sampai dapat cert", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila ada sale online course...",
    options: [
      { text: "Beli yang memang dalam wishlist", type: "A" },
      { text: "Check dulu, beli kalau perlu", type: "B" },
      { text: "Beli banyak sebab murah", type: "C" },
      { text: "Add to cart semua!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Progress completion rate course anda?",
    options: [
      { text: "90-100% semua course", type: "A" },
      { text: "50-80% kebanyakan", type: "B" },
      { text: "20-50% je biasanya", type: "C" },
      { text: "Apa tu completion rate?", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Course Completionist",
    emoji: "🎓",
    description: "Anda serius dalam learning! Beli course, habiskan, dapat cert, apply knowledge. Role model untuk semua online learner!",
    traits: ["Dedicated", "Disciplined", "Goal-oriented", "Serious learner"],
    strengths: ["High completion rate", "Actually learns", "Career-focused"],
    weaknesses: ["Kadang-kadang terlalu rigid", "Perlu enjoy process"],
    tips: ["Celebrate small wins", "Learn for fun too"],
  },
  B: {
    type: "B",
    title: "Balanced Learner",
    emoji: "📊",
    description: "Anda belajar dengan pace yang comfortable! Tak rush, tak abandon. Steady progress adalah key anda!",
    traits: ["Balanced", "Consistent", "Practical", "Realistic"],
    strengths: ["Sustainable learning", "Good retention", "Realistic goals"],
    weaknesses: ["Kadang-kadang slow progress", "Could push more"],
    tips: ["Set deadlines", "Challenge yourself sikit"],
  },
  C: {
    type: "C",
    title: "Casual Collector",
    emoji: "🛒",
    description: "Anda suka collect courses! Beli masa sale, tengok bila ada mood. Library course anda impressive, completion rate... kita tak cakap!",
    traits: ["Collector", "Casual", "Sale hunter", "Optimistic"],
    strengths: ["Wide interests", "Good at finding deals", "Positive attitude"],
    weaknesses: ["Low completion", "Shiny object syndrome"],
    tips: ["One course at a time", "Set learning goals"],
  },
  D: {
    type: "D",
    title: "Course Hoarder",
    emoji: "💸",
    description: "Beli course = self improvement kan? Tengok bila-bila la... maybe never! Tapi perasaan beli tu yang best!",
    traits: ["Impulsive buyer", "Dreamer", "Optimistic", "Spontaneous"],
    strengths: ["Enthusiastic", "Always ready to learn (theoretically)"],
    weaknesses: ["Never actually learn", "Wasting money"],
    tips: ["Stop buying, start learning", "Finish one first before buying"],
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
