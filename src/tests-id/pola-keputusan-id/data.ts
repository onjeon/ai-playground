// Pola Pengambilan Keputusan
// Bagaimana caramu membuat keputusan penting dalam hidup?

export const questions = [
  {
    id: 1,
    question: "Saat harus memilih antara dua opsi yang sama baiknya...",
    options: [
      { text: "Analisis pro-cons dengan detail", type: "A" },
      { text: "Ikuti intuisi dan gut feeling", type: "B" },
      { text: "Tanya pendapat orang lain", type: "C" },
      { text: "Pilih yang paling aman dan familiar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Deadline keputusan sudah dekat...",
    options: [
      { text: "Kumpulkan semua data yang bisa", type: "A" },
      { text: "Trust the process, decide now", type: "B" },
      { text: "Quick consultation dengan trusted people", type: "C" },
      { text: "Minta perpanjangan waktu kalau bisa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Setelah membuat keputusan penting...",
    options: [
      { text: "Review ulang untuk validasi", type: "A" },
      { text: "Move on, tidak melihat ke belakang", type: "B" },
      { text: "Share dan minta feedback", type: "C" },
      { text: "Worry apakah keputusan sudah tepat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Informasi yang kamu butuhkan untuk decide...",
    options: [
      { text: "Data lengkap dan comprehensive", type: "A" },
      { text: "Cukup untuk merasa confident", type: "B" },
      { text: "Pengalaman orang lain yang relevan", type: "C" },
      { text: "Semua worst case scenario", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Keputusan finansial seperti investasi atau pembelian besar...",
    options: [
      { text: "Research mendalam, compare options", type: "A" },
      { text: "Kalau feel right, go for it", type: "B" },
      { text: "Konsultasi expert atau teman yang paham", type: "C" },
      { text: "Pilih yang paling konservatif", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ketika keputusan melibatkan orang lain...",
    options: [
      { text: "Pertimbangkan semua perspective objektif", type: "A" },
      { text: "Ikuti heart, tapi consider others", type: "B" },
      { text: "Diskusi dan decide bersama", type: "C" },
      { text: "Prioritaskan kenyamanan semua pihak", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Risiko dalam keputusan...",
    options: [
      { text: "Calculated risk dengan mitigasi", type: "A" },
      { text: "Risk is part of life, take it", type: "B" },
      { text: "Shared risk dengan support system", type: "C" },
      { text: "Minimize risk sebisa mungkin", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Keputusan karir penting...",
    options: [
      { text: "Analisis career path dan growth", type: "A" },
      { text: "Follow passion dan calling", type: "B" },
      { text: "Consider advice dari mentor dan keluarga", type: "C" },
      { text: "Pilih yang stable dan secure", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat hasil keputusan tidak sesuai harapan...",
    options: [
      { text: "Analisis apa yang salah, learn from it", type: "A" },
      { text: "Accept, tidak ada yang bisa diprediksi 100%", type: "B" },
      { text: "Seek support dan perspective", type: "C" },
      { text: "Regret dan self-blame", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Keputusan spontan vs terencana...",
    options: [
      { text: "Hampir selalu terencana", type: "A" },
      { text: "Sering spontan kalau feel right", type: "B" },
      { text: "Tergantung magnitude keputusan", type: "C" },
      { text: "Avoid spontan, prefer certainty", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Emosi dalam pengambilan keputusan...",
    options: [
      { text: "Berusaha objektif, minimize emosi", type: "A" },
      { text: "Emosi adalah kompas penting", type: "B" },
      { text: "Balance antara logic dan feeling", type: "C" },
      { text: "Emosi sering overwhelming", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kecepatan mengambil keputusan...",
    options: [
      { text: "Butuh waktu untuk analysis proper", type: "A" },
      { text: "Cepat, decisive", type: "B" },
      { text: "Tergantung kompleksitas dan input", type: "C" },
      { text: "Lambat, banyak pertimbangan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Analytical Decision Maker",
    emoji: "📊",
    description: "Kamu adalah decision maker yang analytical! Data dan fakta adalah fondasi keputusanmu. Kamu tidak buru-buru dan selalu mempertimbangkan dengan matang. Methodical dan thorough!",
    traits: ["Logical", "Data-driven", "Methodical", "Thorough"],
    strengths: ["Well-informed decisions", "Minimize surprises", "Defensible choices"],
    weaknesses: ["Analysis paralysis", "Slow in urgent situations", "Over-thinking"],
    tips: ["Sometimes good enough is enough", "Trust your analysis dan move on"],
  },
  B: {
    type: "B",
    title: "Intuitive Decision Maker",
    emoji: "💫",
    description: "Kamu adalah decision maker yang intuitive! Gut feeling dan inner wisdom memandu keputusanmu. Kamu decisive dan tidak takut ambil leap of faith. Trust the universe!",
    traits: ["Intuitive", "Decisive", "Bold", "Confident"],
    strengths: ["Quick decisions", "Authentic choices", "Low anxiety post-decision"],
    weaknesses: ["Bisa miss important data", "Regret if intuition wrong"],
    tips: ["Some analysis still helps", "Balance gut with data"],
  },
  C: {
    type: "C",
    title: "Collaborative Decision Maker",
    emoji: "🤝",
    description: "Kamu adalah decision maker yang collaborative! Input dari orang lain valuable dan kamu menghargai wisdom dari berbagai perspektif. Decision making is a team sport!",
    traits: ["Collaborative", "Open-minded", "Considerate", "Inclusive"],
    strengths: ["Multiple perspectives", "Supported decisions", "Less lonely in choices"],
    weaknesses: ["Bisa terlalu dependent", "Slow jika banyak input"],
    tips: ["Some decisions are yours alone", "Trust yourself too"],
  },
  D: {
    type: "D",
    title: "Cautious Decision Maker",
    emoji: "🛡️",
    description: "Kamu adalah decision maker yang cautious. Safety dan minimizing risk adalah prioritas. Kamu prefer certainty dan familiarity. Better safe than sorry!",
    traits: ["Cautious", "Risk-averse", "Conservative", "Careful"],
    strengths: ["Avoid big mistakes", "Stable outcomes", "Low-risk profile"],
    weaknesses: ["Miss opportunities", "Slow to act", "High anxiety in uncertainty"],
    tips: ["Some risk is necessary for growth", "Not all change is bad"],
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
