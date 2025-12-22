// Kepribadian Bos Ideal Untukmu
// Tes ini mengungkap tipe bos yang paling cocok dengan kepribadianmu!

export const questions = [
  {
    id: 1,
    question: "Cara kerja yang kamu prefer...",
    options: [
      { text: "Diberi arahan jelas dan dipercaya eksekusi", type: "A" },
      { text: "Diskusi dulu sebelum action", type: "B" },
      { text: "Bebas explore dengan support mentorship", type: "C" },
      { text: "Autonomy penuh, diukur dari hasil", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kalau kamu bikin kesalahan di kerjaan...",
    options: [
      { text: "Mau dikasih tau langsung supaya improve", type: "A" },
      { text: "Diskusi bareng cari solusi", type: "B" },
      { text: "Dibimbing untuk reflect dan belajar", type: "C" },
      { text: "Biar gue handle sendiri, jangan micromanage", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Feedback yang paling efektif buatmu...",
    options: [
      { text: "Direct dan to the point", type: "A" },
      { text: "Constructive dengan contoh konkret", type: "B" },
      { text: "Supportive dan encouraging", type: "C" },
      { text: "Minimalist, yang penting hasil tercapai", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Frekuensi check-in dengan bos yang ideal...",
    options: [
      { text: "Daily standup, biar aligned", type: "A" },
      { text: "Weekly 1-on-1 yang meaningful", type: "B" },
      { text: "Regular touchpoints plus ad-hoc", type: "C" },
      { text: "Monthly review aja cukup", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat dapat project baru, kamu mau bos...",
    options: [
      { text: "Kasih brief jelas dengan expectations", type: "A" },
      { text: "Brainstorm bareng approach-nya", type: "B" },
      { text: "Share context dan let me figure out", type: "C" },
      { text: "Assign aja, gue handle", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Recognition yang meaningful buatmu...",
    options: [
      { text: "Public acknowledgment di team meeting", type: "A" },
      { text: "Detailed feedback tentang good work", type: "B" },
      { text: "Personal appreciation dan growth opportunities", type: "C" },
      { text: "Bonus atau promotion, action speaks louder", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau stuck di problem, kamu mau bos...",
    options: [
      { text: "Kasih direction atau decision", type: "A" },
      { text: "Problem solve bareng", type: "B" },
      { text: "Ask questions untuk guide thinking", type: "C" },
      { text: "Kasih space untuk figure out sendiri", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Career development yang kamu harapkan dari bos...",
    options: [
      { text: "Clear path dan milestones", type: "A" },
      { text: "Regular coaching dan skill building", type: "B" },
      { text: "Mentorship dan wisdom sharing", type: "C" },
      { text: "Opportunities dan trust untuk grow", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Komunikasi dengan bos idealnya...",
    options: [
      { text: "Structured dan scheduled", type: "A" },
      { text: "Open door, bisa kapan aja", type: "B" },
      { text: "Casual tapi meaningful", type: "C" },
      { text: "Minimal, hanya yang perlu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat ada conflict dengan tim lain...",
    options: [
      { text: "Bos yang defend dan back up", type: "A" },
      { text: "Bos yang facilitate resolution", type: "B" },
      { text: "Bos yang coach how to handle", type: "C" },
      { text: "Bos yang let me handle it", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Work-life balance, bos ideal menurutmu...",
    options: [
      { text: "Set boundaries dan expectations jelas", type: "A" },
      { text: "Flexible tapi accountable", type: "B" },
      { text: "Genuinely care tentang wellbeing", type: "C" },
      { text: "Focus on output, bukan hours", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Relationship dengan bos yang ideal...",
    options: [
      { text: "Professional dan respect mutual", type: "A" },
      { text: "Collaborative partner", type: "B" },
      { text: "Mentor dan mentee", type: "C" },
      { text: "Minimal involvement, maximum trust", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Structured Leader",
    emoji: "📊",
    description: "Kamu butuh bos yang structured dan clear! Tipe bos yang punya vision jelas, kasih arahan tegas, dan appreciate consistent delivery. Someone who leads from the front.",
    traits: ["Clear communicator", "Decisive", "Organized", "Results-driven"],
    strengths: ["Always know expectations", "Clear career path", "Efficient workflow"],
    weaknesses: ["Kurang flexibility", "Bisa feel micromanaged", "Less room for creativity"],
    tips: ["Jangan takut suggest ideas", "Ask for why behind decisions", "Proactive communication helps"],
  },
  B: {
    type: "B",
    title: "The Collaborative Partner",
    emoji: "🤝",
    description: "Kamu thrive dengan bos yang collaborative! Tipe yang mau diskusi, value input-mu, dan work together as partners. Relationship yang two-way dan equal.",
    traits: ["Approachable", "Open-minded", "Supportive", "Communicative"],
    strengths: ["Feel valued", "Growth through discussion", "Strong working relationship"],
    weaknesses: ["Decision bisa slow", "Need more initiative", "Boundaries bisa blur"],
    tips: ["Come prepared with solutions", "Don't over-rely on bos", "Take ownership more"],
  },
  C: {
    type: "C",
    title: "The Wise Mentor",
    emoji: "🎓",
    description: "Kamu flourish dengan bos yang mentor! Tipe yang invest in your growth, share wisdom, dan guide dengan patience. Someone who helps you become better version of yourself.",
    traits: ["Patient", "Insightful", "Caring", "Development-focused"],
    strengths: ["Accelerated growth", "Learn from experience", "Strong support system"],
    weaknesses: ["May become dependent", "Transition bisa hard", "Growth might be slower"],
    tips: ["Ask tough questions", "Challenge yourself", "Pay it forward ke juniors"],
  },
  D: {
    type: "D",
    title: "The Hands-off Enabler",
    emoji: "🚀",
    description: "Kamu excel dengan bos yang hands-off! Tipe yang trust completely, judge by results, dan give maximum autonomy. Perfect untuk self-starters.",
    traits: ["Trusting", "Empowering", "Results-focused", "Minimal interference"],
    strengths: ["Maximum freedom", "Ownership penuh", "Fast decision making"],
    weaknesses: ["Bisa feel unsupported", "Less guidance", "Need strong self-direction"],
    tips: ["Proactive update progress", "Ask for help when needed", "Don't isolate yourself"],
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
