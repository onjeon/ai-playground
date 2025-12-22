// Tes Kecepatan Aritmatika
// Tes ini mengukur kecepatan dan akurasi perhitungan matematika dasar kamu!

export const questions = [
  {
    id: 1,
    question: "Berapa hasil dari: 47 + 86 = ?",
    options: [
      { text: "133", type: "A" },
      { text: "123", type: "B" },
      { text: "143", type: "C" },
      { text: "131", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Berapa hasil dari: 156 - 79 = ?",
    options: [
      { text: "77", type: "A" },
      { text: "87", type: "B" },
      { text: "67", type: "C" },
      { text: "97", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Berapa hasil dari: 12 x 15 = ?",
    options: [
      { text: "180", type: "A" },
      { text: "170", type: "B" },
      { text: "165", type: "C" },
      { text: "190", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Berapa hasil dari: 144 ÷ 12 = ?",
    options: [
      { text: "12", type: "A" },
      { text: "14", type: "B" },
      { text: "11", type: "C" },
      { text: "13", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Berapa hasil dari: 25 x 4 + 17 = ?",
    options: [
      { text: "117", type: "A" },
      { text: "127", type: "B" },
      { text: "107", type: "C" },
      { text: "137", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Berapa hasil dari: 200 - 45 - 38 = ?",
    options: [
      { text: "117", type: "A" },
      { text: "127", type: "B" },
      { text: "107", type: "C" },
      { text: "123", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Berapa hasil dari: 8 x 7 x 2 = ?",
    options: [
      { text: "112", type: "A" },
      { text: "102", type: "B" },
      { text: "122", type: "C" },
      { text: "98", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Berapa hasil dari: 500 ÷ 25 = ?",
    options: [
      { text: "20", type: "A" },
      { text: "25", type: "B" },
      { text: "15", type: "C" },
      { text: "22", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Berapa hasil dari: 63 + 49 + 28 = ?",
    options: [
      { text: "140", type: "A" },
      { text: "130", type: "B" },
      { text: "150", type: "C" },
      { text: "145", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Berapa hasil dari: 16 x 16 = ?",
    options: [
      { text: "256", type: "A" },
      { text: "246", type: "B" },
      { text: "266", type: "C" },
      { text: "236", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kalkulator Manusia",
    emoji: "🧮",
    description: "WOW! Kemampuan aritmatikamu luar biasa! Kamu seperti kalkulator berjalan - cepat dan akurat. Matematika dasar adalah mainanmu!",
    traits: ["Super cepat", "Akurat", "Numerically gifted", "Sharp"],
    strengths: ["Perhitungan instan", "Jarang salah hitung", "Efisien dalam matematika sehari-hari"],
    weaknesses: ["Mungkin terlalu bergantung pada mental math"],
    tips: ["Coba tantangan matematika yang lebih kompleks", "Kemampuanmu bisa berguna di finance atau data!"],
  },
  B: {
    type: "B",
    title: "Penghitung Handal",
    emoji: "📊",
    description: "Bagus! Kemampuan aritmatikamu di atas rata-rata. Kamu bisa menghitung dengan cukup cepat dan akurat untuk kebanyakan situasi.",
    traits: ["Reliable", "Cukup cepat", "Akurat", "Competent"],
    strengths: ["Solid dalam matematika dasar", "Cukup untuk kebutuhan sehari-hari", "Bisa diandalkan"],
    weaknesses: ["Kadang butuh waktu lebih untuk soal kompleks"],
    tips: ["Latih terus dengan soal-soal mental math", "Speed akan meningkat dengan practice"],
  },
  C: {
    type: "C",
    title: "Penghitung Berkembang",
    emoji: "📈",
    description: "Kemampuan aritmatikamu masih dalam tahap berkembang. Beberapa perhitungan masih butuh waktu atau bantuan, tapi ini bisa dilatih!",
    traits: ["Berkembang", "Methodical", "Careful", "Learning"],
    strengths: ["Teliti walau lambat", "Mau belajar", "Bisa improve"],
    weaknesses: ["Butuh waktu lebih lama", "Kadang kurang percaya diri"],
    tips: ["Latihan rutin 15 menit sehari", "Gunakan aplikasi math games", "Perlahan tapi pasti!"],
  },
  D: {
    type: "D",
    title: "Tim Kalkulator",
    emoji: "📱",
    description: "Matematika bukan kekuatanmu, dan itu tidak apa-apa! Di era digital ini, kalkulator selalu ada di genggaman. Kamu punya kelebihan di bidang lain!",
    traits: ["Non-numerical", "Creative minded", "Other strengths", "Calculator-friendly"],
    strengths: ["Mungkin lebih kuat di bidang verbal atau kreatif", "Honest about limitations"],
    weaknesses: ["Struggle dengan perhitungan cepat"],
    tips: ["Tidak semua orang harus jago math", "Gunakan tools yang ada", "Fokus ke kelebihanmu!"],
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
