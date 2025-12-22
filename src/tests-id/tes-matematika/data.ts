export const questions = [
  {
    id: 1,
    question: "Berapakah hasil dari 15 × 8?",
    options: [
      { text: "120", type: "A" },
      { text: "115", type: "B" },
      { text: "125", type: "C" },
      { text: "110", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Jika x + 7 = 15, berapakah nilai x?",
    options: [
      { text: "8", type: "A" },
      { text: "7", type: "B" },
      { text: "22", type: "C" },
      { text: "9", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Berapakah 25% dari 200?",
    options: [
      { text: "50", type: "A" },
      { text: "25", type: "B" },
      { text: "40", type: "C" },
      { text: "75", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Jika 3 × y = 27, berapakah nilai y?",
    options: [
      { text: "9", type: "A" },
      { text: "8", type: "B" },
      { text: "81", type: "C" },
      { text: "24", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Berapakah hasil dari √144?",
    options: [
      { text: "12", type: "A" },
      { text: "14", type: "B" },
      { text: "11", type: "C" },
      { text: "13", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Jika sebuah persegi memiliki sisi 6 cm, berapakah luasnya?",
    options: [
      { text: "36 cm²", type: "A" },
      { text: "24 cm²", type: "B" },
      { text: "12 cm²", type: "C" },
      { text: "30 cm²", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Berapakah hasil dari 2³?",
    options: [
      { text: "8", type: "A" },
      { text: "6", type: "B" },
      { text: "9", type: "C" },
      { text: "5", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Jika 2x - 4 = 10, berapakah nilai x?",
    options: [
      { text: "7", type: "A" },
      { text: "3", type: "B" },
      { text: "6", type: "C" },
      { text: "8", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Berapakah hasil dari 0.5 + 0.25?",
    options: [
      { text: "0.75", type: "A" },
      { text: "0.70", type: "B" },
      { text: "0.55", type: "C" },
      { text: "1.25", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Keliling lingkaran dengan jari-jari 7 cm adalah... (π = 22/7)",
    options: [
      { text: "44 cm", type: "A" },
      { text: "22 cm", type: "B" },
      { text: "154 cm", type: "C" },
      { text: "88 cm", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Berapakah hasil dari 1/4 + 1/2?",
    options: [
      { text: "3/4", type: "A" },
      { text: "2/6", type: "B" },
      { text: "1/6", type: "C" },
      { text: "2/4", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Jika sebuah segitiga memiliki alas 10 cm dan tinggi 8 cm, berapakah luasnya?",
    options: [
      { text: "40 cm²", type: "A" },
      { text: "80 cm²", type: "B" },
      { text: "18 cm²", type: "C" },
      { text: "36 cm²", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Matematikawan Handal",
    emoji: "🧮",
    description: "Excellent! Kemampuan matematikamu sangat baik! Kamu dengan mudah menyelesaikan berbagai jenis soal matematika dari aritmatika hingga geometri. Logika matematismu kuat!",
    traits: ["Numerik kuat", "Logis", "Kalkulatif", "Akurat"],
    strengths: ["Kalkulasi cepat dan akurat", "Memahami konsep matematika dengan baik", "Problem solving yang kuat"],
    weaknesses: ["Mungkin kurang sabar dengan masalah non-matematis"],
    tips: ["Pertimbangkan karir di bidang STEM", "Terus tantang dirimu dengan soal yang lebih kompleks", "Bagikan ilmumu dengan mengajar"],
  },
  B: {
    type: "B",
    title: "Matematika Solid",
    emoji: "📐",
    description: "Bagus! Dasar matematikamu cukup kuat. Kamu bisa menyelesaikan sebagian besar soal matematika dengan benar. Dengan latihan lebih, kamu bisa lebih expert!",
    traits: ["Cukup numerik", "Berkembang", "Teliti", "Konsisten"],
    strengths: ["Fondasi matematika yang baik", "Bisa menangani soal standar", "Berpotensi meningkat"],
    weaknesses: ["Kadang kurang teliti di detail", "Beberapa konsep perlu diperdalam"],
    tips: ["Latih soal-soal yang lebih variatif", "Review konsep yang masih lemah", "Double-check perhitunganmu"],
  },
  C: {
    type: "C",
    title: "Belajar Matematika",
    emoji: "📈",
    description: "Matematika masih dalam proses penguasaan. Tidak masalah! Dengan memahami konsep dasar dan latihan rutin, kemampuanmu pasti meningkat.",
    traits: ["Perlu latihan", "Berpotensi", "Bisa berkembang"],
    strengths: ["Potensi untuk meningkat", "Bisa belajar dari kesalahan"],
    weaknesses: ["Beberapa konsep dasar perlu diperkuat"],
    tips: ["Mulai dari dasar yang kuat", "Pahami konsep, bukan hanya hafal rumus", "Latihan rutin walau sedikit"],
  },
  D: {
    type: "D",
    title: "Mulai dari Basic",
    emoji: "🌱",
    description: "Matematika mungkin bukan bidang yang sering kamu latih. Tapi tidak ada kata terlambat! Mulai dari konsep dasar dan bangun fondasi yang kuat.",
    traits: ["Perlu fondasi", "Fresh start", "Berpotensi"],
    strengths: ["Bisa belajar dengan cara yang benar dari awal"],
    weaknesses: ["Fondasi perlu dibangun"],
    tips: ["Mulai dari aritmatika dasar", "Gunakan aplikasi belajar matematika", "Jangan malu bertanya jika bingung"],
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
