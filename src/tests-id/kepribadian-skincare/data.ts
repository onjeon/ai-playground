// Kepribadian dari Rutinitas Skincare
// Tes ini mengungkap kepribadianmu berdasarkan skincare routine!

export const questions = [
  {
    id: 1,
    question: "Skincare routine kamu...",
    options: [
      { text: "10+ steps, dedicated ritual", type: "A" },
      { text: "5-7 steps, comprehensive", type: "B" },
      { text: "Basic 3-step routine", type: "C" },
      { text: "Minimal, cuci muka aja kadang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pemilihan produk skincare...",
    options: [
      { text: "Research ingredients, baca reviews", type: "A" },
      { text: "Recommendations dari trusted sources", type: "B" },
      { text: "Trial error, apa yang cocok", type: "C" },
      { text: "Apa yang available/affordable", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Skincare budget per bulan...",
    options: [
      { text: "Significant, invest untuk kulit", type: "A" },
      { text: "Reasonable, quality products", type: "B" },
      { text: "Drugstore mostly", type: "C" },
      { text: "Minimal, beli kalau habis aja", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sunscreen usage...",
    options: [
      { text: "Daily, reapply every 2-3 hours", type: "A" },
      { text: "Daily sebelum keluar", type: "B" },
      { text: "When remember atau panas", type: "C" },
      { text: "Rarely atau never", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Aktif ingredients knowledge...",
    options: [
      { text: "Know them all: retinol, niacinamide, AHA/BHA...", type: "A" },
      { text: "Know the common ones", type: "B" },
      { text: "Basic understanding", type: "C" },
      { text: "What ingredients?", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat kulit breakout...",
    options: [
      { text: "Adjust routine, spot treatment, analyze cause", type: "A" },
      { text: "Use targeted products", type: "B" },
      { text: "Wait it out", type: "C" },
      { text: "Ignore, eventually gone", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sheet masks atau special treatments...",
    options: [
      { text: "Regular self-care ritual", type: "A" },
      { text: "Occasional treat", type: "B" },
      { text: "Rarely, special occasions", type: "C" },
      { text: "Never tried", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dermatologist visits...",
    options: [
      { text: "Regular check-ups, facials", type: "A" },
      { text: "When having issues", type: "B" },
      { text: "Rarely", type: "C" },
      { text: "Never been", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Skincare content consumption...",
    options: [
      { text: "Follow skinfluencers, research constantly", type: "A" },
      { text: "Watch reviews before buying", type: "B" },
      { text: "Occasional scrolling", type: "C" },
      { text: "Not interested", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Product collection size...",
    options: [
      { text: "Extensive, for different concerns", type: "A" },
      { text: "Decent, curated selection", type: "B" },
      { text: "Few essentials", type: "C" },
      { text: "One or two products", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Consistency dengan routine...",
    options: [
      { text: "Religious, never skip", type: "A" },
      { text: "Mostly consistent", type: "B" },
      { text: "When I remember", type: "C" },
      { text: "What routine?", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Skincare adalah...",
    options: [
      { text: "Self-care ritual, me-time", type: "A" },
      { text: "Maintenance, taking care of skin", type: "B" },
      { text: "Basic hygiene", type: "C" },
      { text: "Unnecessary honestly", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Skincare Enthusiast",
    emoji: "✨",
    description: "Glass skin is the goal! Kamu dedicated skincare addict yang tau setiap ingredient, follows routine religiously, dan skin is investment. Your bathroom is basically Sephora!",
    traits: ["Dedicated", "Knowledgeable", "Self-care focused", "Invested"],
    strengths: ["Great skin probably", "Help others with recommendations", "Self-care ritual"],
    weaknesses: ["Expensive hobby", "Might overcomplicate", "Product hoarding"],
    tips: ["Simple sometimes better", "Skin needs rest too", "Don't over-exfoliate!"],
  },
  B: {
    type: "B",
    title: "The Skincare Conscious",
    emoji: "💆",
    description: "Kamu care about skin tanpa obsessing! Good routine, smart products, dan results-focused. Healthy skincare relationship yang sustainable.",
    traits: ["Balanced", "Informed", "Practical", "Results-oriented"],
    strengths: ["Effective routine", "Good skin maintenance", "Sustainable approach"],
    weaknesses: ["Could explore more treatments"],
    tips: ["You're doing great!", "Maybe try professional facial sometime"],
  },
  C: {
    type: "C",
    title: "The Skincare Casual",
    emoji: "🧴",
    description: "Basic is enough for you! Cleanse, moisturize, done. No complicated routines, no stress about products. Skincare simplified!",
    traits: ["Simple", "Low-maintenance", "Practical", "Unfussy"],
    strengths: ["Save money", "Save time", "No product stress"],
    weaknesses: ["Could take better care of skin", "Missing prevention"],
    tips: ["Sunscreen really matters!", "Small additions big difference", "Your future skin will thank you"],
  },
  D: {
    type: "D",
    title: "The Skincare Skeptic",
    emoji: "🤷",
    description: "Skincare? Not your thing! Genetics do the work, or you just don't care much. Fair enough - there's more to life than serums!",
    traits: ["Minimalist", "Unbothered", "Genetics-blessed?", "Practical"],
    strengths: ["Save lots of money", "No product stress", "Simple life"],
    weaknesses: ["Future skin concerns possible", "Missing self-care opportunity"],
    tips: ["At minimum: sunscreen!", "Basic care prevents issues", "It's not vanity, it's health"],
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
