export const questions = [
  {
    id: 1,
    question: "Apa angka selanjutnya dari deret: 2, 4, 6, 8, ...?",
    options: [
      { text: "10", type: "A" },
      { text: "9", type: "B" },
      { text: "12", type: "C" },
      { text: "11", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Apa angka selanjutnya dari deret: 1, 4, 9, 16, 25, ...?",
    options: [
      { text: "36", type: "A" },
      { text: "30", type: "B" },
      { text: "35", type: "C" },
      { text: "32", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Apa angka selanjutnya dari deret: 3, 6, 12, 24, ...?",
    options: [
      { text: "48", type: "A" },
      { text: "36", type: "B" },
      { text: "30", type: "C" },
      { text: "42", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Apa angka selanjutnya dari deret: 1, 1, 2, 3, 5, 8, ...?",
    options: [
      { text: "13", type: "A" },
      { text: "11", type: "B" },
      { text: "10", type: "C" },
      { text: "12", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Apa angka selanjutnya dari deret: 100, 95, 90, 85, ...?",
    options: [
      { text: "80", type: "A" },
      { text: "75", type: "B" },
      { text: "82", type: "C" },
      { text: "78", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Apa angka selanjutnya dari deret: 2, 6, 18, 54, ...?",
    options: [
      { text: "162", type: "A" },
      { text: "108", type: "B" },
      { text: "72", type: "C" },
      { text: "144", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa angka selanjutnya dari deret: 1, 3, 6, 10, 15, ...?",
    options: [
      { text: "21", type: "A" },
      { text: "20", type: "B" },
      { text: "18", type: "C" },
      { text: "22", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Apa angka selanjutnya dari deret: 5, 10, 20, 40, ...?",
    options: [
      { text: "80", type: "A" },
      { text: "60", type: "B" },
      { text: "50", type: "C" },
      { text: "70", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Apa angka yang hilang: 2, 5, ?, 11, 14?",
    options: [
      { text: "8", type: "A" },
      { text: "7", type: "B" },
      { text: "9", type: "C" },
      { text: "10", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Apa angka selanjutnya dari deret: 1, 8, 27, 64, ...?",
    options: [
      { text: "125", type: "A" },
      { text: "100", type: "B" },
      { text: "81", type: "C" },
      { text: "128", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Apa angka selanjutnya dari deret: 2, 3, 5, 7, 11, ...?",
    options: [
      { text: "13", type: "A" },
      { text: "12", type: "B" },
      { text: "14", type: "C" },
      { text: "15", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Apa angka yang hilang: 4, 8, ?, 32, 64?",
    options: [
      { text: "16", type: "A" },
      { text: "12", type: "B" },
      { text: "20", type: "C" },
      { text: "24", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Jenius Matematika",
    emoji: "🔢",
    description: "Luar biasa! Kamu memiliki kemampuan numerik yang sangat baik! Kamu dengan mudah mengenali pola dalam deret angka dan bisa memprediksi angka selanjutnya dengan akurat. Otakmu sangat terlatih untuk matematika!",
    traits: ["Numerik kuat", "Pattern recognition", "Analitis", "Detail-oriented"],
    strengths: ["Mudah mengenali pola angka", "Kalkulasi cepat dan akurat", "Cocok untuk bidang STEM"],
    weaknesses: ["Mungkin kurang sabar dengan hal non-numerik"],
    tips: ["Pertahankan dengan latihan rutin", "Coba competitive math", "Explore data science atau programming"],
  },
  B: {
    type: "B",
    title: "Matematika Solid",
    emoji: "📊",
    description: "Bagus! Kemampuan mengenali pola angkamu cukup baik. Kamu bisa melihat sebagian besar pola dengan benar. Dengan latihan lebih, kamu bisa mencapai level yang lebih tinggi!",
    traits: ["Cukup numerik", "Berkembang", "Teliti", "Logis"],
    strengths: ["Fondasi matematika yang baik", "Bisa dikembangkan lebih lanjut", "Konsisten"],
    weaknesses: ["Kadang miss di pola yang lebih kompleks"],
    tips: ["Latih dengan soal deret yang lebih variatif", "Pelajari berbagai jenis pola", "Jangan terburu-buru"],
  },
  C: {
    type: "C",
    title: "Belajar Pola",
    emoji: "📈",
    description: "Kamu masih dalam tahap mempelajari pola-pola angka. Tidak masalah! Dengan pemahaman konsep yang lebih baik dan latihan rutin, kemampuanmu pasti meningkat.",
    traits: ["Perlu latihan", "Berpotensi", "Bisa berkembang"],
    strengths: ["Potensi untuk meningkat", "Bisa belajar dari kesalahan"],
    weaknesses: ["Perlu lebih banyak latihan", "Kurang familiar dengan tipe pola tertentu"],
    tips: ["Mulai dari pola sederhana", "Pahami konsep di balik setiap pola", "Latihan 15 menit sehari"],
  },
  D: {
    type: "D",
    title: "Mulai dari Dasar",
    emoji: "🌱",
    description: "Matematika dan pola angka mungkin bukan bidang yang sering kamu latih. Jangan khawatir, dengan fondasi yang benar dan latihan konsisten, kamu bisa meningkat pesat!",
    traits: ["Perlu fondasi", "Fresh learner", "Bisa berkembang"],
    strengths: ["Bisa belajar dengan cara yang benar dari awal", "Tidak terkontaminasi metode salah"],
    weaknesses: ["Perlu membangun fondasi"],
    tips: ["Pelajari dasar-dasar deret aritmatika dan geometri", "Gunakan apps atau games matematika", "Konsisten lebih penting dari intensitas"],
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
  
  const score = typeCount['A'];
  if (score >= 10) return results.A;
  if (score >= 7) return results.B;
  if (score >= 4) return results.C;
  return results.D;
}
