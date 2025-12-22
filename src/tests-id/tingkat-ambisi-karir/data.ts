// Tes Tingkat Ambisi Karir Kamu
// Seberapa ambitious kamu dalam berkarir?

export const questions = [
  {
    id: 1,
    question: "Career goal utama kamu...",
    options: [
      { text: "Top of the ladder, C-suite atau equivalent", type: "A" },
      { text: "Senior position dengan impact", type: "B" },
      { text: "Comfortable position dengan stability", type: "C" },
      { text: "Tidak terlalu memikirkan karir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Willingness untuk sacrifice untuk karir...",
    options: [
      { text: "Sacrifice banyak, career is priority", type: "A" },
      { text: "Some sacrifice yang reasonable", type: "B" },
      { text: "Minimal, life comes first", type: "C" },
      { text: "Career tidak worth sacrificing anything", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Learning dan skill development...",
    options: [
      { text: "Constant, always upskilling", type: "A" },
      { text: "Regular, stay relevant", type: "B" },
      { text: "When required atau interesting", type: "C" },
      { text: "Minimal, enough for current job", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Taking career risks...",
    options: [
      { text: "Embrace risks untuk bigger rewards", type: "A" },
      { text: "Calculated risks dengan potential", type: "B" },
      { text: "Prefer stability, avoid risks", type: "C" },
      { text: "Very risk averse", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Comparison dengan peers dalam karir...",
    options: [
      { text: "Want to be ahead, drive competition", type: "A" },
      { text: "Aware tapi not obsessed", type: "B" },
      { text: "Not really compare", type: "C" },
      { text: "Tidak peduli posisi relatif", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Work beyond job description...",
    options: [
      { text: "Always, looking for more responsibility", type: "A" },
      { text: "Often, kalau ada opportunity", type: "B" },
      { text: "Sometimes, kalau diminta", type: "C" },
      { text: "Stick to my role only", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Response ke rejection atau setback...",
    options: [
      { text: "Fuel untuk work harder", type: "A" },
      { text: "Learn dan move forward", type: "B" },
      { text: "Accept dan continue", type: "C" },
      { text: "Demotivating", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Mentorship dan guidance...",
    options: [
      { text: "Actively seek mentors untuk accelerate", type: "A" },
      { text: "Appreciate dan learn from mentors", type: "B" },
      { text: "Take advice kalau offered", type: "C" },
      { text: "Prefer figure things out myself", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Changing jobs atau companies...",
    options: [
      { text: "Strategic moves untuk advancement", type: "A" },
      { text: "When growth opportunity calls", type: "B" },
      { text: "Prefer stability, rarely move", type: "C" },
      { text: "Avoid change", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Money dan title...",
    options: [
      { text: "Very important, measure of success", type: "A" },
      { text: "Important tapi not everything", type: "B" },
      { text: "Nice to have, not driving factor", type: "C" },
      { text: "Not that important to me", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Long-term career vision...",
    options: [
      { text: "Clear vision dengan aggressive timeline", type: "A" },
      { text: "General direction dengan flexibility", type: "B" },
      { text: "Vague atau short-term focused", type: "C" },
      { text: "Don't really think about it", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Career defines who you are...",
    options: [
      { text: "Yes, major part of identity", type: "A" },
      { text: "Important but not everything", type: "B" },
      { text: "Just what I do, not who I am", type: "C" },
      { text: "Career is just for income", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Highly Ambitious",
    emoji: "🚀",
    description: "Kamu sangat ambitious dalam karir! Career is central to life, always striving untuk more. High achiever mindset dengan clear goals.",
    traits: ["Highly ambitious", "Driven", "Goal-oriented", "Competitive"],
    strengths: ["Fast advancement", "High achievement", "Determined"],
    weaknesses: ["Burnout risk", "Life imbalance", "Never satisfied"],
    tips: ["Balance is not weakness", "Enjoy the journey", "Health matters"],
  },
  B: {
    type: "B",
    title: "Balanced Ambition",
    emoji: "📊",
    description: "Kamu memiliki ambisi yang balanced! Want to succeed tapi also value other aspects of life. Sustainable drive untuk growth.",
    traits: ["Balanced", "Driven but grounded", "Goal-oriented", "Realistic"],
    strengths: ["Sustainable success", "Well-rounded", "Long-term mindset"],
    weaknesses: ["Might not maximize all opportunities"],
    tips: ["Great approach", "Push when it matters"],
  },
  C: {
    type: "C",
    title: "Content Achiever",
    emoji: "☀️",
    description: "Kamu tidak terlalu ambitious tapi content! Career is means to end, not the end itself. Value stability dan life over career ladder.",
    traits: ["Content", "Stable-seeking", "Life-focused", "Low stress"],
    strengths: ["Work-life balance", "Low career stress", "Present enjoyment"],
    weaknesses: ["Might not reach potential", "Could be overlooked"],
    tips: ["Nothing wrong with this", "But don't sell yourself short either"],
  },
  D: {
    type: "D",
    title: "Minimal Career Drive",
    emoji: "🌊",
    description: "Kamu memiliki minimal career ambition! Career is just income source, not focus. This might limit opportunities dan growth.",
    traits: ["Low ambition", "Job-focused not career", "Minimal drive", "Status quo"],
    strengths: ["Low stress", "Simple life"],
    weaknesses: ["Limited growth", "Might struggle with changes", "Financial limitations"],
    tips: ["Some ambition helps security", "Growth keeps things interesting", "You have potential"],
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
