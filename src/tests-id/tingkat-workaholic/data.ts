// Tes Tingkat Workaholic Kamu
// Seberapa workaholic kamu dalam bekerja?

export const questions = [
  {
    id: 1,
    question: "Jam kerja kamu biasanya...",
    options: [
      { text: "Strict 9-5, setelah itu off", type: "A" },
      { text: "Kadang overtime kalau perlu", type: "B" },
      { text: "Sering overtime, work comes first", type: "C" },
      { text: "Hampir selalu kerja, no real off time", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Weekend kamu biasanya...",
    options: [
      { text: "Fully off, tidak sentuh kerjaan", type: "A" },
      { text: "Mostly off, sesekali cek email", type: "B" },
      { text: "Often work, even dari rumah", type: "C" },
      { text: "Tidak beda dengan weekday", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Liburan dan cuti...",
    options: [
      { text: "Ambil semua cuti, fully disconnect", type: "A" },
      { text: "Ambil cuti tapi masih check email", type: "B" },
      { text: "Jarang cuti, takut miss kerjaan", type: "C" },
      { text: "Hampir tidak pernah cuti", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat sakit...",
    options: [
      { text: "Rest dan recover, work can wait", type: "A" },
      { text: "WFH light kalau bisa", type: "B" },
      { text: "Still work, unless really can't", type: "C" },
      { text: "Work through it, always", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Identity di luar pekerjaan...",
    options: [
      { text: "Banyak hobi dan interests lain", type: "A" },
      { text: "Some hobbies, try to maintain", type: "B" },
      { text: "Work is my main identity", type: "C" },
      { text: "Tidak tau siapa saya tanpa work", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Email atau chat kerja di malam hari...",
    options: [
      { text: "Turn off notifications, deal tomorrow", type: "A" },
      { text: "Kadang check tapi mostly ignore", type: "B" },
      { text: "Usually respond same day", type: "C" },
      { text: "Always checking dan responding", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Guilt saat tidak kerja...",
    options: [
      { text: "No guilt, off time is important", type: "A" },
      { text: "Occasional guilt, manageable", type: "B" },
      { text: "Often guilty kalau tidak productive", type: "C" },
      { text: "Constant guilt, rest feels wrong", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Social life dan relationships...",
    options: [
      { text: "Prioritas, work tidak mengganggu", type: "A" },
      { text: "Try to balance, sometimes struggle", type: "B" },
      { text: "Often sacrifice for work", type: "C" },
      { text: "Almost no social life, work dominates", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Definisi sukses menurutmu...",
    options: [
      { text: "Balance dan happiness", type: "A" },
      { text: "Career success plus personal life", type: "B" },
      { text: "Career achievements mainly", type: "C" },
      { text: "Work success is everything", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sebelum tidur, pikiran kamu...",
    options: [
      { text: "Wind down, work off my mind", type: "A" },
      { text: "Sometimes think about work", type: "B" },
      { text: "Often planning tomorrow's work", type: "C" },
      { text: "Can't stop thinking about work", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau dikasih pilihan lebih banyak kerja...",
    options: [
      { text: "Decline kalau sudah cukup", type: "A" },
      { text: "Consider carefully", type: "B" },
      { text: "Usually say yes", type: "C" },
      { text: "Always say yes, more is better", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Health dan self-care...",
    options: [
      { text: "Prioritas, schedule untuk itu", type: "A" },
      { text: "Try to maintain, varying success", type: "B" },
      { text: "Often neglect untuk kerja", type: "C" },
      { text: "Rarely prioritize, work comes first", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Work-Life Master",
    emoji: "⚖️",
    description: "Kamu memiliki work-life balance yang excellent! Work hard during work hours, tapi life outside work juga prioritas. Sustainable dan healthy approach.",
    traits: ["Balanced", "Boundaried", "Healthy", "Sustainable"],
    strengths: ["Sustainable career", "Full life", "Low burnout risk"],
    weaknesses: ["Might miss some career opportunities"],
    tips: ["Keep maintaining", "This is actually successful living"],
  },
  B: {
    type: "B",
    title: "Balanced with Tendencies",
    emoji: "📊",
    description: "Kamu mostly balanced tapi ada workaholic tendencies! Overall healthy tapi sometimes work creeps into personal time. Watch the balance.",
    traits: ["Mostly balanced", "Some overwork", "Aware", "Managing"],
    strengths: ["Functional balance", "Self-aware", "Can adjust"],
    weaknesses: ["Can slip into overwork", "Boundaries sometimes blur"],
    tips: ["Set firmer boundaries", "Monitor the creep", "Rest is productive"],
  },
  C: {
    type: "C",
    title: "Workaholic Tendency",
    emoji: "💼",
    description: "Kamu memiliki workaholic tendencies yang significant! Work often comes first dan personal life sacrificed. This isn't sustainable long-term.",
    traits: ["Workaholic", "Work-focused", "Sacrificing", "Driven"],
    strengths: ["Career progress", "High output"],
    weaknesses: ["Burnout risk", "Relationship strain", "Health impacts"],
    tips: ["Evaluate priorities", "Success includes wellbeing", "Schedule non-work time"],
  },
  D: {
    type: "D",
    title: "Severe Workaholic",
    emoji: "🔥",
    description: "Kamu adalah workaholic severe! Work adalah hampir satu-satunya identity dan life. This is unsustainable dan damaging. Please seek help.",
    traits: ["Severe workaholic", "Work-obsessed", "Unbalanced", "At risk"],
    strengths: ["High output temporarily"],
    weaknesses: ["Burnout imminent", "Health crisis risk", "Relationship damage", "Identity issues"],
    tips: ["This is serious", "Seek professional help", "Work is not worth your health", "Life is more than career"],
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
