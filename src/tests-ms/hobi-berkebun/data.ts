// Gaya Berkebun Anda
// Jenis tukang kebun mana anda?

export const questions = [
  {
    id: 1,
    question: "Kenapa anda berkebun?",
    options: [
      { text: "Passion! Love seeing things grow", type: "A" },
      { text: "Nak tanam sayur/buah sendiri", type: "B" },
      { text: "Therapy dan relaxation", type: "C" },
      { text: "Instagram aesthetic je", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tanaman favorite anda?",
    options: [
      { text: "Pokok bunga - cantik!", type: "A" },
      { text: "Sayur dan herbs - praktis", type: "B" },
      { text: "Succulents - low maintenance", type: "C" },
      { text: "Monstera, pothos - trendy!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Siram pokok routine anda?",
    options: [
      { text: "Everyday dengan penuh kasih sayang", type: "A" },
      { text: "Ikut schedule yang proper", type: "B" },
      { text: "Bila ingat je", type: "C" },
      { text: "Harap hujan tolong", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila pokok mati...",
    options: [
      { text: "Sedih gila, post memorial!", type: "A" },
      { text: "Analyze apa salah, learn", type: "B" },
      { text: "Takpe, beli pokok baru", type: "C" },
      { text: "Maybe gardening bukan untuk aku", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kebun/balcony anda macam mana?",
    options: [
      { text: "Jungle vibes! Banyak pokok", type: "A" },
      { text: "Organized raised beds", type: "B" },
      { text: "Few plants, manageable", type: "C" },
      { text: "One or two statement plants", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Garden shopping habits?",
    options: [
      { text: "Buy all the plants! Can't resist", type: "A" },
      { text: "Planned purchases untuk needs", type: "B" },
      { text: "Occasionally bila nampak cantik", type: "C" },
      { text: "Rare, stick dengan yang ada", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Fertilizer dan care routine?",
    options: [
      { text: "Full routine - fertilizer, pruning, repotting", type: "A" },
      { text: "Basic care, follow guidelines", type: "B" },
      { text: "Minimal, plants are resilient", type: "C" },
      { text: "What's fertilizer?", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila harvest sayur/buah sendiri...",
    options: [
      { text: "Best feeling ever! Photo shoot!", type: "A" },
      { text: "Satisfied, worth the effort", type: "B" },
      { text: "Nice bonus bila jadi", type: "C" },
      { text: "Haven't successfully harvested yet", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Gardening knowledge anda?",
    options: [
      { text: "Deep - soil pH, pest control, composting", type: "A" },
      { text: "Good basics, still learning", type: "B" },
      { text: "Basic - siram dan harap survive", type: "C" },
      { text: "Minimal, wing it je", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Impian gardening anda?",
    options: [
      { text: "Full edible garden, self-sustaining!", type: "A" },
      { text: "Nice veggie patch dan herb garden", type: "B" },
      { text: "Low maintenance beautiful space", type: "C" },
      { text: "Keep plants alive more than a month", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Green Thumb Expert",
    emoji: "🌱",
    description: "Plants THRIVE under your care! Anda adalah plant whisperer. Passion dan dedication maksimum! Garden goals!",
    traits: ["Passionate", "Knowledgeable", "Dedicated", "Nurturing"],
    strengths: ["Plants flourish", "Deep knowledge", "Inspiring others"],
    weaknesses: ["May overdo it", "Plant obsession real"],
    tips: ["Share your knowledge!", "Teach others to grow"],
  },
  B: {
    type: "B",
    title: "Practical Gardener",
    emoji: "🥬",
    description: "Gardening dengan purpose! Grow what you eat, practical approach. Sustainable dan smart gardening!",
    traits: ["Practical", "Sustainable", "Organized", "Purposeful"],
    strengths: ["Productive garden", "Useful harvests", "Smart planning"],
    weaknesses: ["May miss aesthetic beauty"],
    tips: ["Add some flowers too!", "Beauty feeds the soul"],
  },
  C: {
    type: "C",
    title: "Casual Plant Parent",
    emoji: "🪴",
    description: "Plants are nice tapi tak obsess. Anda keep it chill, low maintenance choices. Relaxed plant parenthood!",
    traits: ["Relaxed", "Low-key", "Selective", "Practical"],
    strengths: ["No pressure", "Sustainable hobby", "Balanced approach"],
    weaknesses: ["Could nurture more", "Plants may struggle"],
    tips: ["Try a bit more care!", "Plants reward attention"],
  },
  D: {
    type: "D",
    title: "Aspiring Gardener",
    emoji: "🌿",
    description: "The spirit is willing tapi thumb belum green! Anda try your best. Every plant parent started somewhere!",
    traits: ["Beginner", "Hopeful", "Trendy", "Learning"],
    strengths: ["Enthusiasm", "Room to grow", "Aesthetic eye"],
    weaknesses: ["Needs more knowledge", "Plants may not survive"],
    tips: ["Start with easy plants!", "YouTube tutorials help"],
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
