// Tes Deret Angka
// Uji kemampuan mengenali pola angka!

export const questions = [
  {
    id: 1,
    question: "2, 4, 6, 8, ... Angka selanjutnya adalah?",
    options: [
      { text: "10", type: "A" },
      { text: "9", type: "B" },
      { text: "12", type: "C" },
      { text: "11", type: "D" },
    ],
  },
  {
    id: 2,
    question: "1, 4, 9, 16, 25, ... Angka selanjutnya adalah?",
    options: [
      { text: "36", type: "A" },
      { text: "30", type: "B" },
      { text: "35", type: "C" },
      { text: "49", type: "D" },
    ],
  },
  {
    id: 3,
    question: "2, 6, 18, 54, ... Angka selanjutnya adalah?",
    options: [
      { text: "162", type: "A" },
      { text: "108", type: "B" },
      { text: "72", type: "C" },
      { text: "216", type: "D" },
    ],
  },
  {
    id: 4,
    question: "1, 1, 2, 3, 5, 8, ... Angka selanjutnya adalah?",
    options: [
      { text: "13", type: "A" },
      { text: "11", type: "B" },
      { text: "10", type: "C" },
      { text: "12", type: "D" },
    ],
  },
  {
    id: 5,
    question: "100, 95, 90, 85, ... Angka selanjutnya adalah?",
    options: [
      { text: "80", type: "A" },
      { text: "75", type: "B" },
      { text: "70", type: "C" },
      { text: "82", type: "D" },
    ],
  },
  {
    id: 6,
    question: "3, 6, 12, 24, 48, ... Angka selanjutnya adalah?",
    options: [
      { text: "96", type: "A" },
      { text: "72", type: "B" },
      { text: "84", type: "C" },
      { text: "60", type: "D" },
    ],
  },
  {
    id: 7,
    question: "1, 2, 4, 7, 11, 16, ... Angka selanjutnya adalah?",
    options: [
      { text: "22", type: "A" },
      { text: "21", type: "B" },
      { text: "20", type: "C" },
      { text: "23", type: "D" },
    ],
  },
  {
    id: 8,
    question: "2, 3, 5, 7, 11, 13, ... Angka selanjutnya adalah?",
    options: [
      { text: "17", type: "A" },
      { text: "15", type: "B" },
      { text: "19", type: "C" },
      { text: "16", type: "D" },
    ],
  },
  {
    id: 9,
    question: "1, 8, 27, 64, ... Angka selanjutnya adalah?",
    options: [
      { text: "125", type: "A" },
      { text: "100", type: "B" },
      { text: "81", type: "C" },
      { text: "128", type: "D" },
    ],
  },
  {
    id: 10,
    question: "5, 10, 8, 16, 14, 28, ... Angka selanjutnya adalah?",
    options: [
      { text: "26", type: "A" },
      { text: "32", type: "B" },
      { text: "30", type: "C" },
      { text: "24", type: "D" },
    ],
  },
  {
    id: 11,
    question: "1, 3, 7, 15, 31, ... Angka selanjutnya adalah?",
    options: [
      { text: "63", type: "A" },
      { text: "47", type: "B" },
      { text: "62", type: "C" },
      { text: "45", type: "D" },
    ],
  },
  {
    id: 12,
    question: "2, 5, 10, 17, 26, ... Angka selanjutnya adalah?",
    options: [
      { text: "37", type: "A" },
      { text: "35", type: "B" },
      { text: "36", type: "C" },
      { text: "38", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Master Pola Angka",
    emoji: "🔢",
    description: "Kamu sangat jago mengenali pola dalam deret angka! Kemampuan matematika dan pengenalan pattern kamu excellent. Otak kamu sangat baik dalam processing numerical sequences.",
    traits: ["Matematika kuat", "Pattern recognition", "Analitis", "Sistematis"],
    strengths: ["Cepat lihat pola", "Numeracy tinggi", "Problem solving bagus"],
    weaknesses: ["Mungkin over-kompleksifikasi kadang"],
    tips: ["Cocok untuk data science, finance", "Terus asah dengan puzzle matematika"],
  },
  B: {
    type: "B",
    title: "Pola Angka Baik",
    emoji: "📊",
    description: "Kemampuan mengenali pola angka kamu cukup baik! Kamu bisa handle deret sederhana dengan baik, tapi deret yang kompleks masih challenging.",
    traits: ["Cukup matematika", "Logis", "Berkembang"],
    strengths: ["Dasar kuat", "Mau mencoba", "Potensi bagus"],
    weaknesses: ["Pola kompleks masih challenging", "Perlu latihan"],
    tips: ["Latih dengan berbagai jenis deret", "Pelajari common patterns"],
  },
  C: {
    type: "C",
    title: "Pola Angka Perlu Latihan",
    emoji: "📈",
    description: "Kemampuan mengenali pola angka kamu masih perlu dikembangkan. Tapi jangan khawatir, ini skill yang bisa dilatih dengan practice.",
    traits: ["Masih belajar", "Perlu latihan", "Potensi ada"],
    strengths: ["Awareness ada", "Mau mencoba"],
    weaknesses: ["Belum familiar dengan patterns", "Perlu fondasi matematika"],
    tips: ["Mulai dari deret sederhana", "Pelajari: aritmatika, geometri, fibonacci"],
  },
  D: {
    type: "D",
    title: "Pola Angka Dasar",
    emoji: "🌱",
    description: "Kemampuan mengenali pola angka kamu masih di tahap awal. Tidak masalah - matematika adalah skill yang bisa dikembangkan dengan latihan teratur.",
    traits: ["Pemula", "Butuh latihan", "Dapat berkembang"],
    strengths: ["Mengambil tes ini langkah bagus", "Potensi untuk berkembang"],
    weaknesses: ["Fondasi perlu diperkuat", "Banyak ruang improvement"],
    tips: ["Jangan takut matematika", "Mulai dari basic dan tingkatkan bertahap"],
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
