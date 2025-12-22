// Tipe Content Creator Kamu
// Tes ini mengungkap personality kamu sebagai content creator!

export const questions = [
  {
    id: 1,
    question: "Platform utama untuk create content...",
    options: [
      { text: "TikTok/Reels - short form video", type: "A" },
      { text: "YouTube - long form content", type: "B" },
      { text: "Instagram - visual/photo based", type: "C" },
      { text: "Twitter/Blog - written content", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Content creation frequency...",
    options: [
      { text: "Daily posting schedule", type: "A" },
      { text: "Few times a week, quality focused", type: "B" },
      { text: "When inspiration hits", type: "C" },
      { text: "Occasional, not consistent", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Niche atau variety content...",
    options: [
      { text: "Strong niche, expert in one area", type: "A" },
      { text: "Few related topics", type: "B" },
      { text: "Whatever I feel like", type: "C" },
      { text: "Still figuring out my niche", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Planning content...",
    options: [
      { text: "Content calendar, scheduled ahead", type: "A" },
      { text: "General ideas, execute when ready", type: "B" },
      { text: "Spontaneous, trend reactive", type: "C" },
      { text: "Random, no system", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Editing level...",
    options: [
      { text: "Heavy editing, polished final product", type: "A" },
      { text: "Moderate editing, clean content", type: "B" },
      { text: "Quick edits, authenticity matters", type: "C" },
      { text: "Minimal, raw content", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Engagement dengan audience...",
    options: [
      { text: "Reply semua, community focused", type: "A" },
      { text: "Regular engagement, select replies", type: "B" },
      { text: "Occasional, when time permits", type: "C" },
      { text: "Post and go, minimal interaction", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Monetization approach...",
    options: [
      { text: "Full business, multiple revenue streams", type: "A" },
      { text: "Growing towards monetization", type: "B" },
      { text: "Would be nice, not priority", type: "C" },
      { text: "Hobby, money not the goal", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Equipment investment...",
    options: [
      { text: "Professional setup, proper gear", type: "A" },
      { text: "Decent equipment, upgraded over time", type: "B" },
      { text: "Phone is enough", type: "C" },
      { text: "Whatever I have", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Dealing dengan negative comments...",
    options: [
      { text: "Part of the game, handle professionally", type: "A" },
      { text: "Ignore or delete, protect mental health", type: "B" },
      { text: "Affects me, working on it", type: "C" },
      { text: "Haven't experienced much", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Collaboration dengan others...",
    options: [
      { text: "Actively seek collaborations", type: "A" },
      { text: "Open to right opportunities", type: "B" },
      { text: "Prefer solo content", type: "C" },
      { text: "Haven't done collaborations", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Analytics dan metrics...",
    options: [
      { text: "Check daily, optimize based on data", type: "A" },
      { text: "Regular check, learn from patterns", type: "B" },
      { text: "Occasional check, not obsessed", type: "C" },
      { text: "Don't really check", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Content creation adalah...",
    options: [
      { text: "Career/business goal", type: "A" },
      { text: "Serious side hustle", type: "B" },
      { text: "Creative outlet, expression", type: "C" },
      { text: "Just for fun", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Professional Creator",
    emoji: "🎬",
    description: "Content creation is your business! Strategic, consistent, dan building real brand. You treat this seriously dan it shows in your growth!",
    traits: ["Professional", "Strategic", "Consistent", "Business-minded"],
    strengths: ["Clear growth path", "Revenue potential", "Strong brand"],
    weaknesses: ["Burnout risk", "Pressure to perform", "Might lose authenticity"],
    tips: ["Don't forget why you started", "Rest is important", "Stay authentic"],
  },
  B: {
    type: "B",
    title: "The Growing Creator",
    emoji: "📈",
    description: "Kamu on the path! Building skills, growing audience, dan improving consistently. Sweet spot antara hobby dan business potential!",
    traits: ["Growing", "Learning", "Ambitious", "Balanced"],
    strengths: ["Room to grow", "Learning mindset", "Balanced approach"],
    weaknesses: ["Not yet optimized", "Could be more consistent"],
    tips: ["Keep going!", "Consistency is key", "You're on the right track"],
  },
  C: {
    type: "C",
    title: "The Expressive Creator",
    emoji: "🎨",
    description: "Creating untuk expression! Tidak terlalu focused on metrics, more on the creative process. Authenticity is your superpower!",
    traits: ["Creative", "Authentic", "Expressive", "Passion-driven"],
    strengths: ["Genuine content", "Creative freedom", "No pressure"],
    weaknesses: ["Growth might be slow", "Inconsistent"],
    tips: ["Some structure could help", "Your authenticity is valuable", "Consider consistency"],
  },
  D: {
    type: "D",
    title: "The Casual Creator",
    emoji: "✌️",
    description: "Create for fun! No pressure, no expectations, just sharing what you like. Hobby level tanpa stress of performance.",
    traits: ["Casual", "Relaxed", "Hobby-ist", "No-pressure"],
    strengths: ["No stress", "Pure enjoyment", "Authentic"],
    weaknesses: ["Limited growth", "Inconsistent presence"],
    tips: ["If you enjoy it, maybe explore more!", "Could turn into something", "But fun is valid goal!"],
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
