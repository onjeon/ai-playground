// Tes Gaya Menghadapi Burnout
// Bagaimana kamu handle burnout dari kerja?

export const questions = [
  {
    id: 1,
    question: "Tanda-tanda burnout yang paling kamu rasakan...",
    options: [
      { text: "Exhaustion fisik dan mental", type: "A" },
      { text: "Cynical dan detached dari kerja", type: "B" },
      { text: "Productivity dan motivasi turun drastis", type: "C" },
      { text: "Semua di atas, it's intense", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat mulai merasa burnout, kamu...",
    options: [
      { text: "Langsung take action: cuti, rest, boundaries", type: "A" },
      { text: "Push through dulu, nanti baru istirahat", type: "B" },
      { text: "Ignore dan hope it goes away", type: "C" },
      { text: "Complain tapi tidak do anything", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Penyebab burnout kamu biasanya...",
    options: [
      { text: "Workload yang tidak realistis", type: "A" },
      { text: "Lack of control atau autonomy", type: "B" },
      { text: "Toxic environment atau relationships", type: "C" },
      { text: "Self-imposed pressure dan perfectionism", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara recovery favorit kamu...",
    options: [
      { text: "Complete disconnect, no work related anything", type: "A" },
      { text: "Hobi dan aktivitas yang enjoyable", type: "B" },
      { text: "Social time sama orang tersayang", type: "C" },
      { text: "Sleep dan rest sebanyak-banyaknya", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tentang cuti untuk mental health...",
    options: [
      { text: "Penting dan tidak ragu untuk ambil", type: "A" },
      { text: "Ambil kalau sudah parah banget", type: "B" },
      { text: "Merasa guilty kalau cuti untuk itu", type: "C" },
      { text: "Tidak pernah ambil, push through aja", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Komunikasi ke atasan tentang burnout...",
    options: [
      { text: "Open dan honest tentang kondisi", type: "A" },
      { text: "Hint tapi tidak explicit", type: "B" },
      { text: "Keep to myself, tidak professional", type: "C" },
      { text: "Takut impact ke career", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Prevention strategy kamu...",
    options: [
      { text: "Active boundaries dan self-care routine", type: "A" },
      { text: "Try to balance tapi tidak always successful", type: "B" },
      { text: "Tidak punya strategy khusus", type: "C" },
      { text: "Reactive, baru action kalau sudah burnout", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Work-life balance kamu secara honest...",
    options: [
      { text: "Prioritas dan sangat dijaga", type: "A" },
      { text: "Struggle tapi improving", type: "B" },
      { text: "Imbalanced, kerja lebih dominan", type: "C" },
      { text: "What balance? Always working", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Support system saat burnout...",
    options: [
      { text: "Strong, punya orang untuk curhat dan support", type: "A" },
      { text: "Ada beberapa orang yang bisa diandalkan", type: "B" },
      { text: "Prefer handle sendiri", type: "C" },
      { text: "Tidak ada, isolated", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Setelah recover dari burnout...",
    options: [
      { text: "Make changes untuk prevent recurrence", type: "A" },
      { text: "Grateful dan try to be more careful", type: "B" },
      { text: "Back to same pattern eventually", type: "C" },
      { text: "Never fully recover, always at risk", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat harus pilih: career advancement atau mental health...",
    options: [
      { text: "Mental health always first", type: "A" },
      { text: "Try to balance both", type: "B" },
      { text: "Career dulu, mental health later", type: "C" },
      { text: "Sacrifice mental health untuk career sering", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Professional help untuk burnout...",
    options: [
      { text: "Open dan sudah atau akan consider", type: "A" },
      { text: "Might consider kalau parah", type: "B" },
      { text: "Not for me, bisa handle sendiri", type: "C" },
      { text: "Stigma atau tidak accessible", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Burnout Aware",
    emoji: "🛡️",
    description: "Kamu sangat aware dan proactive tentang burnout! Punya boundaries jelas, tidak ragu take time off, dan prioritize mental health. Prevention is better than cure!",
    traits: ["Self-aware", "Proactive", "Boundary setter", "Health conscious"],
    strengths: ["Sustainable career", "Good self-care", "Prevention oriented"],
    weaknesses: ["Might seem tidak dedicated", "Miss some opportunities"],
    tips: ["Keep it up!", "Your approach is healthy and sustainable"],
  },
  B: {
    type: "B",
    title: "Burnout Struggler",
    emoji: "😓",
    description: "Kamu aware tentang burnout tapi struggle untuk implement prevention. Try to balance tapi tidak always successful. Work in progress untuk better habits.",
    traits: ["Aware", "Struggling", "Improving", "Well-intentioned"],
    strengths: ["Recognition of issue", "Willing to change", "Learning"],
    weaknesses: ["Inconsistent boundaries", "Reactive not proactive"],
    tips: ["Small consistent changes help", "Don't wait until crisis"],
  },
  C: {
    type: "C",
    title: "Burnout Denier",
    emoji: "🙈",
    description: "Kamu cenderung ignore atau push through burnout signs. Kerja terus sampai tidak bisa lagi. Mental health bukan prioritas atau merasa bisa handle sendiri.",
    traits: ["Denier", "Workaholic tendency", "Self-reliant", "High tolerance"],
    strengths: ["High work capacity", "Resilient short term", "Dedicated"],
    weaknesses: ["Heading for crash", "Ignoring warning signs"],
    tips: ["Burnout is real and serious", "Prevention saves you long term"],
  },
  D: {
    type: "D",
    title: "Burnout Victim",
    emoji: "🆘",
    description: "Kamu mungkin already deep in burnout atau chronic burnout cycle. Exhausted, isolated, dan tidak tau cara keluar. Professional help mungkin needed.",
    traits: ["Exhausted", "Overwhelmed", "Isolated", "Stuck"],
    strengths: ["Recognizing through this test", "Seeking understanding"],
    weaknesses: ["Severe burnout risk", "Need intervention"],
    tips: ["Please seek help", "This is not sustainable and you deserve better"],
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
