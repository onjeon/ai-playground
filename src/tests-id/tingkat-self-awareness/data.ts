// Tingkat Self-Awareness Kamu
// Tes ini mengungkap seberapa baik kamu mengenal diri sendiri!

export const questions = [
  {
    id: 1,
    question: "Seberapa baik kamu memahami emosi yang sedang kamu rasakan?",
    options: [
      { text: "Sangat baik, bisa identify dan name emotions", type: "A" },
      { text: "Cukup baik, tau broad feelings", type: "B" },
      { text: "Kadang bingung dengan feelings sendiri", type: "C" },
      { text: "Sering tidak tau apa yang dirasa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat bereaksi terhadap sesuatu, kamu...",
    options: [
      { text: "Pause dan reflect sebelum respond", type: "A" },
      { text: "Kadang react dulu baru think", type: "B" },
      { text: "Sering react tanpa think", type: "C" },
      { text: "React impulsively, menyesal kemudian", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tentang strengths dan weaknesses...",
    options: [
      { text: "Tau dengan jelas dan accept keduanya", type: "A" },
      { text: "Tau tapi kadang struggle dengan weaknesses", type: "B" },
      { text: "Lebih aware strengths, avoid thinking about weaknesses", type: "C" },
      { text: "Tidak terlalu tau atau tidak mau tau", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Menerima feedback atau kritik...",
    options: [
      { text: "Welcome, gunakan untuk improvement", type: "A" },
      { text: "Terima tapi kadang defensive awalnya", type: "B" },
      { text: "Sering defensive atau dismissive", type: "C" },
      { text: "Sangat susah terima, feel attacked", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Seberapa sering kamu reflect on your actions?",
    options: [
      { text: "Regularly, part of routine", type: "A" },
      { text: "Sesekali, kalau ada yang major", type: "B" },
      { text: "Jarang, terlalu sibuk", type: "C" },
      { text: "Hampir tidak pernah", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mengenai values dan beliefs...",
    options: [
      { text: "Jelas dan actions aligned with them", type: "A" },
      { text: "Tau tapi kadang tidak konsisten", type: "B" },
      { text: "Vague, tidak terlalu defined", type: "C" },
      { text: "Tidak pernah really think about it", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Patterns dalam behavior dan keputusan...",
    options: [
      { text: "Aware dan bisa predict reactions sendiri", type: "A" },
      { text: "Notice some patterns", type: "B" },
      { text: "Sering surprised sama diri sendiri", type: "C" },
      { text: "Tidak ada awareness tentang patterns", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat membuat keputusan penting...",
    options: [
      { text: "Reflect on motives dan potential biases", type: "A" },
      { text: "Think through tapi tidak terlalu deep", type: "B" },
      { text: "Mostly follow gut atau others' opinions", type: "C" },
      { text: "Just decide without much thought", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Dampak perilakumu terhadap orang lain...",
    options: [
      { text: "Very aware dan adjust accordingly", type: "A" },
      { text: "Generally aware, kadang miss", type: "B" },
      { text: "Sering tidak aware sampai told", type: "C" },
      { text: "Rarely think about it", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Triggers yang bikin kamu reactive...",
    options: [
      { text: "Tau dan punya strategies untuk handle", type: "A" },
      { text: "Aware beberapa, masih learning", type: "B" },
      { text: "Kadang surprised saat triggered", type: "C" },
      { text: "Tidak tau apa triggers saya", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Journaling atau self-reflection practice...",
    options: [
      { text: "Regular practice", type: "A" },
      { text: "Occasionally", type: "B" },
      { text: "Rarely atau never", type: "C" },
      { text: "Tidak interested", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Secara overall, seberapa well kamu know yourself?",
    options: [
      { text: "Very well, continuous journey of discovery", type: "A" },
      { text: "Decently, still learning", type: "B" },
      { text: "Not that well, banyak yang unknown", type: "C" },
      { text: "Stranger to myself honestly", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Self-Awareness Master",
    emoji: "🪞",
    description: "Kamu memiliki self-awareness yang sangat tinggi! Kamu mengenal dirimu dengan baik - emosi, triggers, patterns, strengths dan weaknesses. Ini adalah fondasi penting untuk pertumbuhan.",
    traits: ["Introspective", "Reflective", "Emotionally intelligent", "Grounded"],
    strengths: ["Good decision making", "Healthy relationships", "Continuous growth", "Authentic"],
    weaknesses: ["Bisa over-analyze", "Sometimes too hard on self"],
    tips: ["Balance analysis dengan action", "Use awareness untuk help others"],
  },
  B: {
    type: "B",
    title: "Growing Self-Awareness",
    emoji: "🌱",
    description: "Self-awareness kamu cukup baik dan terus berkembang! Kamu aware tentang banyak hal tapi masih ada areas yang bisa di-explore lebih dalam.",
    traits: ["Learning", "Open", "Developing", "Curious"],
    strengths: ["Openness to growth", "Some self-knowledge", "Willing to improve"],
    weaknesses: ["Blind spots masih ada", "Inconsistent practice"],
    tips: ["Make reflection a habit", "Ask for feedback more", "Journal regularly"],
  },
  C: {
    type: "C",
    title: "Developing Self-Awareness",
    emoji: "🔍",
    description: "Self-awareness kamu masih dalam tahap pengembangan. Kadang kamu surprised sama reactions dan behaviors sendiri. Ada opportunity besar untuk growth di area ini.",
    traits: ["Developing", "Surface level", "Reactive", "Potential for growth"],
    strengths: ["Room for improvement", "Taking this test shows interest"],
    weaknesses: ["Limited self-knowledge", "Reactive instead of responsive", "Blind spots banyak"],
    tips: ["Start journaling", "Ask trusted people for honest feedback", "Practice mindfulness"],
  },
  D: {
    type: "D",
    title: "Self-Awareness Beginner",
    emoji: "❓",
    description: "Self-awareness adalah area yang perlu dikembangkan. Kamu mungkin sering merasa disconnected dari diri sendiri. Ini bukan judgement, tapi starting point untuk growth.",
    traits: ["Disconnected", "Unaware", "Reactive", "Growth potential high"],
    strengths: ["Aware there's work to do", "Starting the journey"],
    weaknesses: ["Very limited self-knowledge", "May repeat patterns", "Difficult relationships"],
    tips: ["Consider therapy or coaching", "Start very small with reflection", "Be patient and curious"],
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
