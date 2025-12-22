// Seberapa Overthinking Kamu?
// Tes ini mengukur kecenderungan overthinking dalam kehidupan sehari-hari!

export const questions = [
  {
    id: 1,
    question: "Sebelum tidur, pikiranmu biasanya...",
    options: [
      { text: "Langsung tidur, pikiran tenang", type: "A" },
      { text: "Sebentar review hari ini, lalu tidur", type: "B" },
      { text: "Mikirin banyak hal, agak susah tidur", type: "C" },
      { text: "Kepikiran macam-macam, insomnia sering", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Setelah mengirim pesan penting, kamu...",
    options: [
      { text: "Lupa dan lanjut aktivitas", type: "A" },
      { text: "Sesekali cek tapi tidak obsesif", type: "B" },
      { text: "Baca ulang terus, khawatir salah kata", type: "C" },
      { text: "Panik, mau delete tapi sudah terkirim", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat harus membuat keputusan, kamu...",
    options: [
      { text: "Decide cepat dan move on", type: "A" },
      { text: "Pertimbangkan sewajarnya lalu decide", type: "B" },
      { text: "Lama mikir, takut salah pilih", type: "C" },
      { text: "Sangat sulit, analisis berlebihan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Percakapan yang tidak enak, setelahnya kamu...",
    options: [
      { text: "Lupa dan lanjut hidup", type: "A" },
      { text: "Sedikit kepikiran tapi hilang sendiri", type: "B" },
      { text: "Replay terus di kepala, 'harusnya bilang ini'", type: "C" },
      { text: "Kepikiran berhari-hari, susah move on", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat ada masalah di masa depan (belum terjadi), kamu...",
    options: [
      { text: "Cross that bridge when we get there", type: "A" },
      { text: "Plan sedikit tapi tidak berlebihan", type: "B" },
      { text: "Mikirin berbagai skenario worst case", type: "C" },
      { text: "Sangat cemas sampai mengganggu hari ini", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Orang tertawa tapi kamu tidak tau kenapa, pikiranmu...",
    options: [
      { text: "Bodo amat, pasti bukan soal aku", type: "A" },
      { text: "Mungkin soal aku, mungkin bukan", type: "B" },
      { text: "Jangan-jangan soal aku?", type: "C" },
      { text: "Pasti soal aku, apa yang salah?", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Setelah meeting/presentasi, kamu...",
    options: [
      { text: "Done, move on ke task berikutnya", type: "A" },
      { text: "Quick review, lalu lanjut", type: "B" },
      { text: "Replay terus, 'tadi aku ngomong apa sih'", type: "C" },
      { text: "Sangat khawatir soal performa, minta feedback terus", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Menerima feedback yang ambigu, kamu...",
    options: [
      { text: "Terima apa adanya, gak terlalu dipikirin", type: "A" },
      { text: "Clarify kalau perlu, lalu move on", type: "B" },
      { text: "Analisis apa maksudnya sebenarnya", type: "C" },
      { text: "Obsesif cari tau makna tersembunyi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tentang kesalahan masa lalu, kamu...",
    options: [
      { text: "Sudah lupa, hidup terus berjalan", type: "A" },
      { text: "Ingat tapi tidak mengganggu", type: "B" },
      { text: "Kadang flashback dan malu sendiri", type: "C" },
      { text: "Sering teringat dan menyesal", type: "D" },
    ],
  },
  {
    id: 10,
    question: "'What if' scenario seberapa sering muncul di kepalamu?",
    options: [
      { text: "Jarang banget", type: "A" },
      { text: "Kadang-kadang, wajar", type: "B" },
      { text: "Sering, terutama yang negatif", type: "C" },
      { text: "Hampir selalu, mengganggu fokus", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat harus menunggu hasil penting, kamu...",
    options: [
      { text: "Santai, yang terjadi ya terjadi", type: "A" },
      { text: "Agak cemas tapi masih produktif", type: "B" },
      { text: "Susah fokus hal lain, kepikiran terus", type: "C" },
      { text: "Sangat cemas, mempengaruhi tidur dan makan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Apakah kamu sering merasa 'otak tidak bisa diam'?",
    options: [
      { text: "Jarang, bisa relax dengan mudah", type: "A" },
      { text: "Kadang-kadang di situasi tertentu", type: "B" },
      { text: "Sering, susah mematikan pikiran", type: "C" },
      { text: "Hampir selalu, exhausting", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pikiran Tenang",
    emoji: "🌊",
    description: "Kamu jarang overthinking! Pikiranmu tenang dan tidak mudah terjebak dalam spiral analisis berlebihan. Kemampuan ini sangat berharga di era yang penuh distraksi.",
    traits: ["Tenang", "Present-focused", "Decisive", "Relaxed"],
    strengths: ["Tidur nyenyak", "Produktif", "Tidak mudah cemas"],
    weaknesses: ["Kadang kurang anticipate", "Bisa terkesan ceroboh"],
    tips: ["Tetap refleksi yang sehat", "Balance antara santai dan thoughtful"],
  },
  B: {
    type: "B",
    title: "Pemikir Sehat",
    emoji: "💭",
    description: "Level thinkingmu seimbang! Kamu memikirkan hal-hal penting tapi tidak berlebihan. Balance yang sehat antara reflektif dan spontan.",
    traits: ["Balanced", "Thoughtful", "Adaptif", "Reasonable"],
    strengths: ["Pertimbangan matang", "Tidak impulsif", "Bisa move on"],
    weaknesses: ["Kadang bisa lebih decisive", "Sesekali terlalu mikir"],
    tips: ["Maintain keseimbangan ini", "Trust your gut feeling juga"],
  },
  C: {
    type: "C",
    title: "Overthinker",
    emoji: "🔄",
    description: "Kamu sering terjebak dalam loop pikiran! Analisis berlebihan bisa menguras energi dan mengganggu ketenangan. Awareness adalah langkah pertama untuk berubah.",
    traits: ["Analitis berlebihan", "Worry-prone", "Detail-oriented", "Ruminator"],
    strengths: ["Thorough", "Mempertimbangkan banyak hal", "Hati-hati"],
    weaknesses: ["Energy draining", "Susah tidur", "Decision paralysis"],
    tips: ["Coba teknik grounding", "Set time limit untuk berpikir", "Journaling bisa membantu"],
  },
  D: {
    type: "D",
    title: "Chronic Overthinker",
    emoji: "🌀",
    description: "Overthinking sudah menjadi pola yang mengganggu hidupmu. Pikiran yang tidak berhenti bisa sangat melelahkan. Pertimbangkan bantuan profesional.",
    traits: ["Chronic worrier", "Anxious", "Exhausted", "Trapped in thoughts"],
    strengths: ["Sangat detail", "Anticipate banyak hal", "Thorough"],
    weaknesses: ["Mental exhaustion", "Anxiety tinggi", "Quality of life terganggu"],
    tips: ["Pertimbangkan terapi CBT", "Meditasi dan mindfulness", "Batasi waktu berpikir tentang satu topik"],
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
