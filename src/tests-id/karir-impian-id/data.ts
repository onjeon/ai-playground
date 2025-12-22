// Karir Impian Berdasarkan Kepribadian
// Tes ini mengungkap karir yang paling cocok dengan kepribadianmu!

export const questions = [
  {
    id: 1,
    question: "Weekend ideal menurutmu...",
    options: [
      { text: "Networking event atau workshop", type: "A" },
      { text: "Deep work atau belajar skill baru", type: "B" },
      { text: "Creative projects atau hobi", type: "C" },
      { text: "Quality time dengan orang tersayang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kalau dapat uang 1 miliar, kamu akan...",
    options: [
      { text: "Invest dan start business", type: "A" },
      { text: "Research investment terbaik carefully", type: "B" },
      { text: "Travel dan pursue passion projects", type: "C" },
      { text: "Secure keluarga dulu, sisanya charity", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Di group project, kamu biasanya...",
    options: [
      { text: "Lead dan coordinate", type: "A" },
      { text: "Research dan analyze", type: "B" },
      { text: "Come up dengan creative ideas", type: "C" },
      { text: "Support tim dan handle communication", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Success menurut definisimu...",
    options: [
      { text: "Influence dan impact besar", type: "A" },
      { text: "Expertise dan recognition di bidang", type: "B" },
      { text: "Freedom untuk express diri", type: "C" },
      { text: "Meaningful relationships dan balance", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Environment kerja ideal...",
    options: [
      { text: "Fast-paced dengan big challenges", type: "A" },
      { text: "Focused dengan deep work time", type: "B" },
      { text: "Creative dengan freedom berekspresi", type: "C" },
      { text: "Collaborative dengan good culture", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Skill yang paling kamu banggakan...",
    options: [
      { text: "Leadership dan influence", type: "A" },
      { text: "Problem-solving dan analytical", type: "B" },
      { text: "Creativity dan innovation", type: "C" },
      { text: "Communication dan empathy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau stuck di pekerjaan, kamu akan...",
    options: [
      { text: "Take bold action untuk change situation", type: "A" },
      { text: "Analyze options dan plan carefully", type: "B" },
      { text: "Find creative solution atau pivot", type: "C" },
      { text: "Seek advice dari trusted people", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Motivasi utama dalam bekerja...",
    options: [
      { text: "Achievement dan recognition", type: "A" },
      { text: "Mastery dan continuous learning", type: "B" },
      { text: "Passion dan self-expression", type: "C" },
      { text: "Making difference di lives orang lain", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Risk tolerance kamu di karir...",
    options: [
      { text: "High risk high reward, let's go!", type: "A" },
      { text: "Calculated risks dengan research", type: "B" },
      { text: "Worth it kalau untuk passion", type: "C" },
      { text: "Prefer stability dan security", type: "D" },
    ],
  },
  {
    id: 10,
    question: "5 tahun dari sekarang, kamu berharap...",
    options: [
      { text: "Lead organization atau own business", type: "A" },
      { text: "Jadi expert di field-mu", type: "B" },
      { text: "Living your creative dream", type: "C" },
      { text: "Happy dan balanced life", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kamu paling frustasi kalau...",
    options: [
      { text: "Progress lambat dan banyak birokrasi", type: "A" },
      { text: "Keputusan dibuat tanpa data", type: "B" },
      { text: "Ga ada ruang untuk creativity", type: "C" },
      { text: "Toxic environment dan people", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Legacy yang mau kamu tinggalkan...",
    options: [
      { text: "Built something big dan impactful", type: "A" },
      { text: "Advanced knowledge di field", type: "B" },
      { text: "Created art atau innovation", type: "C" },
      { text: "Touched many lives positively", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Entrepreneur/Leader",
    emoji: "🚀",
    description: "Kamu born to lead! Karir ideal: Entrepreneur, CEO, Business Development, atau Management Consultant. Kamu punya drive untuk build something big dan influence banyak orang.",
    traits: ["Ambitious", "Decisive", "Visionary", "Risk-taker"],
    strengths: ["Natural leadership", "Big picture thinking", "Drive to succeed"],
    weaknesses: ["Impatient", "Can overlook details", "Work-life balance challenge"],
    tips: ["Build strong team around you", "Learn to delegate", "Take care of your health"],
  },
  B: {
    type: "B",
    title: "The Expert/Specialist",
    emoji: "🔬",
    description: "Kamu destined untuk jadi expert! Karir ideal: Data Scientist, Engineer, Researcher, atau Financial Analyst. Kamu thrive dengan deep knowledge dan problem-solving.",
    traits: ["Analytical", "Detail-oriented", "Curious", "Methodical"],
    strengths: ["Deep expertise", "Quality work", "Trusted advisor"],
    weaknesses: ["Perfectionism", "Can get lost in details", "May avoid leadership"],
    tips: ["Share your knowledge", "Don't over-analyze", "Step up untuk lead"],
  },
  C: {
    type: "C",
    title: "The Creative/Innovator",
    emoji: "🎨",
    description: "Kamu born untuk create! Karir ideal: Designer, Content Creator, Artist, atau Product Manager. Kamu punya gift untuk innovate dan express ideas dengan unique ways.",
    traits: ["Creative", "Innovative", "Expressive", "Unconventional"],
    strengths: ["Original ideas", "Aesthetic sense", "Think outside the box"],
    weaknesses: ["Inconsistent", "Struggle dengan routine", "May lack follow-through"],
    tips: ["Build systems untuk consistency", "Collaborate dengan executors", "Balance passion dengan practicality"],
  },
  D: {
    type: "D",
    title: "The Connector/Helper",
    emoji: "💝",
    description: "Kamu made untuk connect dan help! Karir ideal: HR, Counselor, Teacher, atau Healthcare. Kamu punya gift untuk understand people dan make positive impact.",
    traits: ["Empathetic", "Communicative", "Caring", "Patient"],
    strengths: ["Strong relationships", "Emotional intelligence", "Trusted confidant"],
    weaknesses: ["Can neglect self", "Avoid conflict", "May be taken advantage of"],
    tips: ["Set healthy boundaries", "Your needs matter too", "Learn to say no"],
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
