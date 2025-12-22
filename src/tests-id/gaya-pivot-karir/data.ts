// Tes Gaya Pivot Karir Kamu
// Bagaimana style kamu saat ganti jalur karir?

export const questions = [
  {
    id: 1,
    question: "Alasan utama mau pivot karir...",
    options: [
      { text: "Passion dan interest yang berbeda", type: "A" },
      { text: "Better opportunity dan kompensasi", type: "B" },
      { text: "Current field tidak berkembang", type: "C" },
      { text: "Burnout atau tidak cocok", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Preparation sebelum pivot...",
    options: [
      { text: "Deep research, courses, certifications", type: "A" },
      { text: "Network building dan informational interviews", type: "B" },
      { text: "Side projects untuk build portfolio", type: "C" },
      { text: "Jump dulu, belajar sambil jalan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Financial preparation untuk pivot...",
    options: [
      { text: "Runway 6-12 bulan savings", type: "A" },
      { text: "Some savings, tapi tidak terlalu banyak", type: "B" },
      { text: "Pivot sambil masih kerja", type: "C" },
      { text: "Yolo, figure it out later", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Risiko pivot yang paling kamu takuti...",
    options: [
      { text: "Starting from scratch lagi", type: "A" },
      { text: "Salary cut significant", type: "B" },
      { text: "Age dan competition dengan yang lebih muda", type: "C" },
      { text: "Tidak takut, excited for change", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Transferable skills dari karir sebelumnya...",
    options: [
      { text: "Identify dan highlight secara strategic", type: "A" },
      { text: "Ada beberapa yang relevant", type: "B" },
      { text: "Susah untuk relate", type: "C" },
      { text: "Fresh start, tidak terlalu rely on old skills", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Timeline ideal untuk pivot...",
    options: [
      { text: "6-12 bulan preparation", type: "A" },
      { text: "3-6 bulan, cukup intense", type: "B" },
      { text: "Flexible, as long as it takes", type: "C" },
      { text: "ASAP, tidak mau tunggu lama", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Support system untuk pivot...",
    options: [
      { text: "Strong: mentor, coach, community", type: "A" },
      { text: "Some friends dan family support", type: "B" },
      { text: "Mostly solo, figure it out sendiri", type: "C" },
      { text: "Tidak perlu support, confident", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Handling rejection saat pivot...",
    options: [
      { text: "Part of process, learn dan improve", type: "A" },
      { text: "Demotivating tapi keep going", type: "B" },
      { text: "Question if this is right move", type: "C" },
      { text: "Brush off, their loss", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Willingness untuk start dari entry level...",
    options: [
      { text: "If needed, worth it untuk new path", type: "A" },
      { text: "Prefer lateral move at least", type: "B" },
      { text: "Struggle dengan ego tapi bisa", type: "C" },
      { text: "Tidak mau, experience should count", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Success measurement untuk pivot...",
    options: [
      { text: "Fulfillment dan happiness in new career", type: "A" },
      { text: "Reaching same atau better compensation", type: "B" },
      { text: "Getting first job di new field", type: "C" },
      { text: "Escaping old career", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Backup plan kalau pivot tidak berhasil...",
    options: [
      { text: "Clear Plan B dan C", type: "A" },
      { text: "Could go back to old field", type: "B" },
      { text: "Tidak ada, all in", type: "C" },
      { text: "Wing it, something will work out", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Advice untuk orang yang mau pivot...",
    options: [
      { text: "Plan well, but don't over-plan", type: "A" },
      { text: "Network is everything", type: "B" },
      { text: "Just start, perfectionism kills progress", type: "C" },
      { text: "Follow your heart, life is short", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Strategic Pivoter",
    emoji: "🎯",
    description: "Kamu approach pivot dengan sangat strategic! Deep preparation, financial runway, dan clear plan. Minimize risk sambil maximize chance of success.",
    traits: ["Strategic", "Prepared", "Risk-aware", "Methodical"],
    strengths: ["High success rate", "Sustainable transition", "Well-planned"],
    weaknesses: ["Might over-prepare", "Analysis paralysis risk"],
    tips: ["At some point, just start", "Perfect plan doesn't exist"],
  },
  B: {
    type: "B",
    title: "Networked Pivoter",
    emoji: "🤝",
    description: "Kamu pivot through connections dan relationships! Leverage network, informational interviews, dan referrals. Who you know matters as much as what you know.",
    traits: ["Networker", "Relationship builder", "Opportunistic", "Social"],
    strengths: ["Opens doors", "Gets insider info", "Warm introductions"],
    weaknesses: ["Might rely too much on others", "Need strong network first"],
    tips: ["Skills masih penting", "Balance networking dengan capability building"],
  },
  C: {
    type: "C",
    title: "Gradual Pivoter",
    emoji: "🐢",
    description: "Kamu pivot secara gradual dan careful. Build skills sambil masih di old job, test waters sebelum full commitment. Safe and steady approach.",
    traits: ["Cautious", "Gradual", "Risk-averse", "Practical"],
    strengths: ["Financial stability", "Test before commit", "Less pressure"],
    weaknesses: ["Takes longer", "Might never fully commit"],
    tips: ["Set deadline untuk full transition", "Sometimes leap of faith needed"],
  },
  D: {
    type: "D",
    title: "Bold Pivoter",
    emoji: "🚀",
    description: "Kamu pivot dengan bold dan decisive! Tidak mau tunggu lama, jump dulu dan figure it out. High risk high reward mentality.",
    traits: ["Bold", "Decisive", "Risk-taker", "Action oriented"],
    strengths: ["Fast mover", "Committed", "No regrets"],
    weaknesses: ["Financial risk", "Might struggle initially"],
    tips: ["Some preparation helps", "Have basic safety net at least"],
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
