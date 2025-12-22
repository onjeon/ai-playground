// Tes Berpikir Abstrak
// Tes ini mengukur kemampuan berpikir abstrak dan konseptual kamu!

export const questions = [
  {
    id: 1,
    question: "Jika POHON : DAUN, maka BUKU : ?",
    options: [
      { text: "Kertas", type: "C" },
      { text: "Halaman", type: "A" },
      { text: "Tinta", type: "B" },
      { text: "Sampul", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Angka berikutnya dari: 2, 6, 12, 20, 30, ?",
    options: [
      { text: "40", type: "B" },
      { text: "42", type: "A" },
      { text: "44", type: "C" },
      { text: "36", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Jika semua BLORP adalah ZINK, dan beberapa ZINK adalah PLOW, maka...",
    options: [
      { text: "Beberapa BLORP mungkin PLOW", type: "A" },
      { text: "Semua BLORP adalah PLOW", type: "B" },
      { text: "Tidak ada BLORP yang PLOW", type: "C" },
      { text: "Semua PLOW adalah BLORP", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Mana yang TIDAK cocok dalam kelompok: Kucing, Anjing, Kelinci, Burung, Hamster?",
    options: [
      { text: "Burung", type: "A" },
      { text: "Kelinci", type: "B" },
      { text: "Hamster", type: "C" },
      { text: "Kucing", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Jika SENIN = 1, SELASA = 2, maka KAMIS + JUMAT = ?",
    options: [
      { text: "9", type: "A" },
      { text: "8", type: "B" },
      { text: "10", type: "C" },
      { text: "7", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sebuah jam menunjukkan 3:15. Berapa derajat sudut antara jarum jam dan menit?",
    options: [
      { text: "0 derajat", type: "B" },
      { text: "7.5 derajat", type: "A" },
      { text: "15 derajat", type: "C" },
      { text: "30 derajat", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pola: AB, BC, CD, DE, ?",
    options: [
      { text: "EF", type: "A" },
      { text: "DF", type: "B" },
      { text: "FG", type: "C" },
      { text: "EG", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Jika kamu membalik kata ALGORITHM, huruf ke-4 dari belakang adalah?",
    options: [
      { text: "I", type: "A" },
      { text: "R", type: "B" },
      { text: "O", type: "C" },
      { text: "G", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Manakah yang melanjutkan pola: 1, 1, 2, 3, 5, 8, ?",
    options: [
      { text: "13", type: "A" },
      { text: "11", type: "B" },
      { text: "10", type: "C" },
      { text: "12", type: "D" },
    ],
  },
  {
    id: 10,
    question: "LANGIT bagi BIRU seperti RUMPUT bagi...",
    options: [
      { text: "Hijau", type: "A" },
      { text: "Tanah", type: "B" },
      { text: "Taman", type: "C" },
      { text: "Daun", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pemikir Abstrak Tingkat Tinggi",
    emoji: "🧠",
    description: "Selamat! Kemampuan berpikir abstrakmu sangat tinggi! Kamu mampu melihat pola, hubungan, dan konsep dengan mudah. Otakmu bekerja dengan sangat baik dalam menyelesaikan masalah kompleks.",
    traits: ["Analitis", "Pattern-recognition", "Konseptual", "Logis"],
    strengths: ["Mudah memahami konsep baru", "Problem solving excellent", "Berpikir out of the box"],
    weaknesses: ["Kadang terlalu kompleks dalam berpikir"],
    tips: ["Asah terus dengan puzzle dan brain games", "Kemampuanmu langka, manfaatkan dengan baik!"],
  },
  B: {
    type: "B",
    title: "Pemikir Abstrak Baik",
    emoji: "💡",
    description: "Kemampuan berpikir abstrakmu di atas rata-rata! Kamu bisa menangkap pola dan konsep dengan cukup baik, walau kadang butuh waktu lebih untuk masalah yang sangat kompleks.",
    traits: ["Logis", "Methodical", "Observant", "Analytical"],
    strengths: ["Solid problem solver", "Bisa berpikir sistematis", "Paham konsep dengan baik"],
    weaknesses: ["Kadang butuh waktu lebih untuk masalah abstrak"],
    tips: ["Latihan rutin akan meningkatkan kemampuan", "Jangan ragu mencoba soal yang lebih challenging"],
  },
  C: {
    type: "C",
    title: "Pemikir Abstrak Berkembang",
    emoji: "🌱",
    description: "Kemampuan berpikir abstrakmu masih dalam tahap berkembang. Kamu bisa menangkap beberapa pola, tapi kadang kesulitan dengan yang lebih kompleks. Ini normal dan bisa ditingkatkan!",
    traits: ["Berkembang", "Practical", "Learning", "Curious"],
    strengths: ["Mau belajar", "Punya dasar yang cukup", "Bisa improve dengan latihan"],
    weaknesses: ["Masih kesulitan dengan konsep abstrak kompleks"],
    tips: ["Mulai dari puzzle sederhana", "Belajar step by step", "Jangan berkecil hati, otak bisa dilatih!"],
  },
  D: {
    type: "D",
    title: "Pemikir Konkret",
    emoji: "🔨",
    description: "Kamu lebih kuat dalam berpikir konkret daripada abstrak. Kamu lebih suka hal-hal nyata dan praktis. Ini bukan kelemahan, ini adalah style berpikir yang berbeda!",
    traits: ["Praktis", "Konkret", "Hands-on", "Real-world focused"],
    strengths: ["Bagus dalam hal praktis", "Down-to-earth", "Action-oriented"],
    weaknesses: ["Kurang nyaman dengan konsep abstrak"],
    tips: ["Tidak semua butuh pemikiran abstrak", "Latih sedikit demi sedikit kalau mau improve"],
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
