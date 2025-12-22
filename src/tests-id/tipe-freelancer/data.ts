// Cocok Jadi Freelancer?
// Tes ini mengungkap apakah kamu cocok untuk jadi freelancer!

export const questions = [
  {
    id: 1,
    question: "Self-discipline tanpa supervision...",
    options: [
      { text: "Excellent, I'm highly self-motivated", type: "A" },
      { text: "Good, dengan routine yang jelas", type: "B" },
      { text: "Struggle kadang-kadang", type: "C" },
      { text: "Need external accountability", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Income yang tidak fixed setiap bulan...",
    options: [
      { text: "Exciting! Potential untuk earn more", type: "A" },
      { text: "Okay kalau ada planning yang baik", type: "B" },
      { text: "Bikin anxious tapi bisa cope", type: "C" },
      { text: "Stressful, need stable income", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Finding your own clients...",
    options: [
      { text: "Love it! Networking is my thing", type: "A" },
      { text: "Can do it kalau perlu", type: "B" },
      { text: "Not comfortable tapi willing to learn", type: "C" },
      { text: "Really don't want to do this", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bekerja sendirian tanpa tim...",
    options: [
      { text: "Perfect! Love working independently", type: "A" },
      { text: "Fine untuk most tasks", type: "B" },
      { text: "Miss collaboration sometimes", type: "C" },
      { text: "Really need team environment", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Handling semua aspects (admin, finance, marketing)...",
    options: [
      { text: "Excited untuk learn everything", type: "A" },
      { text: "Will figure it out", type: "B" },
      { text: "Overwhelmed by the thought", type: "C" },
      { text: "Just want to do my craft", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Dealing with difficult clients...",
    options: [
      { text: "Part of the game, can handle", type: "A" },
      { text: "Will set clear boundaries", type: "B" },
      { text: "Dreading it already", type: "C" },
      { text: "Major concern for me", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tidak ada benefits (insurance, pension)...",
    options: [
      { text: "Will plan dan manage myself", type: "A" },
      { text: "Concern tapi solvable", type: "B" },
      { text: "Significant worry", type: "C" },
      { text: "Deal breaker honestly", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Setting your own schedule...",
    options: [
      { text: "Dream! Maximum flexibility", type: "A" },
      { text: "Great, will create good routine", type: "B" },
      { text: "Might struggle dengan structure", type: "C" },
      { text: "Prefer someone else sets schedule", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Dry periods tanpa projects...",
    options: [
      { text: "Normal, will use for marketing/upskilling", type: "A" },
      { text: "Stressful tapi manageable", type: "B" },
      { text: "Very anxious about this", type: "C" },
      { text: "Can't handle financial uncertainty", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Motivation tanpa career ladder...",
    options: [
      { text: "Self-driven, don't need titles", type: "A" },
      { text: "Can create own milestones", type: "B" },
      { text: "Might feel stagnant", type: "C" },
      { text: "Need clear progression path", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Work from home/anywhere setup...",
    options: [
      { text: "Already have it figured out", type: "A" },
      { text: "Can make it work", type: "B" },
      { text: "Distractions concern me", type: "C" },
      { text: "Need office environment", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Alasan utama tertarik freelance...",
    options: [
      { text: "Freedom, control, unlimited earning potential", type: "A" },
      { text: "Flexibility dan work-life balance", type: "B" },
      { text: "Escape current job situation", type: "C" },
      { text: "Not really sure, just curious", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Born to Freelance",
    emoji: "🚀",
    description: "You're a natural freelancer! Semua qualities yang dibutuhkan ada: self-discipline, risk tolerance, hustle mindset. If you haven't started yet, what are you waiting for?",
    traits: ["Self-driven", "Risk-tolerant", "Independent", "Entrepreneurial"],
    strengths: ["All the right mindset", "Ready for challenges", "Will thrive"],
    weaknesses: ["May underestimate some challenges"],
    tips: ["Start side hustle first kalau mau aman", "Build runway before jumping", "Network hard from day one"],
  },
  B: {
    type: "B",
    title: "Freelance Ready",
    emoji: "💪",
    description: "You have strong potential untuk freelance! Dengan proper planning dan preparation, kamu bisa succeed. Consider starting part-time dulu untuk test the waters.",
    traits: ["Prepared", "Realistic", "Adaptable", "Planful"],
    strengths: ["Good balance of caution dan ambition", "Will plan properly", "Realistic expectations"],
    weaknesses: ["May overthink the jump"],
    tips: ["Start small dengan side projects", "Build 6-month runway", "Get comfortable dengan uncertainty gradually"],
  },
  C: {
    type: "C",
    title: "Freelance Curious",
    emoji: "🤔",
    description: "Kamu tertarik freelance tapi ada significant concerns. It's not impossible tapi perlu honest reflection - is it right for you? Maybe try side gigs first.",
    traits: ["Curious", "Cautious", "Some concerns", "Testing waters"],
    strengths: ["Aware of challenges", "Not rushing in blind"],
    weaknesses: ["Several areas need development", "May not be right fit"],
    tips: ["Try freelance projects di samping full-time job", "Work on weak areas first", "Be honest dengan yourself tentang fit"],
  },
  D: {
    type: "D",
    title: "Traditional Path Fits Better",
    emoji: "🏢",
    description: "Honest truth: Freelance probably bukan best path for you right now. Nothing wrong dengan that! Traditional employment offers things you value. Focus on finding the right company.",
    traits: ["Stability-seeking", "Team-oriented", "Structure-loving", "Security-focused"],
    strengths: ["Know yourself", "Clear preferences"],
    weaknesses: ["Freelance would be stressful"],
    tips: ["Find a great company with flexibility", "Remote roles bisa kasih some freedom", "Freelance isn't the only path to happiness"],
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
