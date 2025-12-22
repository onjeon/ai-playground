export const questions = [
  {
    id: 1,
    question: "Jika semua X adalah Y, dan semua Y adalah Z, maka...",
    options: [
      { text: "Semua X adalah Z", type: "A" },
      { text: "Semua Z adalah X", type: "B" },
      { text: "Beberapa Z adalah X", type: "C" },
      { text: "Tidak ada hubungan pasti", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ali lebih tua dari Budi. Citra lebih muda dari Budi. Doni lebih tua dari Ali. Siapa yang paling muda?",
    options: [
      { text: "Citra", type: "A" },
      { text: "Budi", type: "B" },
      { text: "Ali", type: "C" },
      { text: "Doni", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Jika cuaca cerah, maka piknik akan diadakan. Piknik tidak diadakan. Maka...",
    options: [
      { text: "Cuaca tidak cerah", type: "A" },
      { text: "Cuaca cerah", type: "B" },
      { text: "Piknik dibatalkan karena alasan lain", type: "C" },
      { text: "Tidak bisa disimpulkan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Beberapa guru adalah penulis. Semua penulis adalah pembaca. Maka...",
    options: [
      { text: "Beberapa guru adalah pembaca", type: "A" },
      { text: "Semua guru adalah pembaca", type: "B" },
      { text: "Semua pembaca adalah guru", type: "C" },
      { text: "Tidak ada guru yang pembaca", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kotak A lebih berat dari B. B lebih berat dari C. C lebih berat dari D. Mana yang paling ringan?",
    options: [
      { text: "D", type: "A" },
      { text: "C", type: "B" },
      { text: "B", type: "C" },
      { text: "A", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Jika P maka Q. Jika Q maka R. Jika R maka S. P terjadi. Maka...",
    options: [
      { text: "S pasti terjadi", type: "A" },
      { text: "Hanya Q yang terjadi", type: "B" },
      { text: "S mungkin terjadi", type: "C" },
      { text: "Tidak bisa dipastikan", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tidak ada burung yang bisa terbang ke luar angkasa. Elang adalah burung. Maka...",
    options: [
      { text: "Elang tidak bisa terbang ke luar angkasa", type: "A" },
      { text: "Elang bisa terbang ke luar angkasa", type: "B" },
      { text: "Beberapa elang bisa", type: "C" },
      { text: "Elang bukan burung biasa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Jika dan hanya jika hujan, maka jalan basah. Jalan basah. Maka...",
    options: [
      { text: "Pasti hujan", type: "A" },
      { text: "Mungkin hujan", type: "B" },
      { text: "Tidak hujan", type: "C" },
      { text: "Tidak bisa disimpulkan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Lima orang duduk berurutan: A, B, C, D, E. B duduk di sebelah kanan A. D tidak duduk di ujung. C duduk di tengah. Siapa yang duduk di ujung kanan?",
    options: [
      { text: "E", type: "A" },
      { text: "D", type: "B" },
      { text: "B", type: "C" },
      { text: "A", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Semua yang rajin akan sukses. Andi sukses. Maka...",
    options: [
      { text: "Andi mungkin rajin, mungkin tidak", type: "A" },
      { text: "Andi pasti rajin", type: "B" },
      { text: "Andi tidak rajin", type: "C" },
      { text: "Semua orang sukses rajin", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Jika tidak A maka B. Jika B maka C. Tidak C. Maka...",
    options: [
      { text: "A terjadi", type: "A" },
      { text: "B terjadi", type: "B" },
      { text: "Tidak A dan tidak B", type: "C" },
      { text: "Tidak bisa disimpulkan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Setiap mahasiswa membawa laptop atau buku (atau keduanya). Ani tidak membawa laptop. Maka...",
    options: [
      { text: "Ani membawa buku", type: "A" },
      { text: "Ani tidak membawa buku", type: "B" },
      { text: "Ani membawa keduanya", type: "C" },
      { text: "Ani bukan mahasiswa", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ahli Penalaran",
    emoji: "🧠",
    description: "Luar biasa! Kemampuan penalaranmu sangat tinggi! Kamu bisa mengikuti rantai logika yang kompleks dan menarik kesimpulan dengan akurat. Kamu cocok untuk bidang yang membutuhkan analytical thinking!",
    traits: ["Logis", "Sistematis", "Analytical", "Precise"],
    strengths: ["Penalaran deduktif yang kuat", "Bisa mengikuti argumen kompleks", "Tidak mudah tertipu logical fallacy"],
    weaknesses: ["Kadang terlalu kaku dalam berpikir"],
    tips: ["Gunakan skillmu untuk problem solving", "Pertimbangkan karir di bidang analitis", "Balance logika dengan intuisi"],
  },
  B: {
    type: "B",
    title: "Penalar Solid",
    emoji: "🎯",
    description: "Bagus! Kemampuan penalaranmu cukup baik. Kamu bisa menangani sebagian besar masalah logika dengan benar. Dengan latihan lebih lanjut, kamu bisa mencapai level expert!",
    traits: ["Cukup logis", "Berkembang", "Teliti", "Konsisten"],
    strengths: ["Dasar logika yang baik", "Bisa menangani soal standar", "Berpotensi meningkat"],
    weaknesses: ["Kadang miss di soal yang tricky"],
    tips: ["Latih dengan soal logika variatif", "Baca premis dengan lebih hati-hati", "Keep practicing!"],
  },
  C: {
    type: "C",
    title: "Penalar Berkembang",
    emoji: "📈",
    description: "Kemampuan penalaranmu masih dalam pengembangan. Dengan memahami dasar-dasar logika dan latihan rutin, kamu bisa meningkatkan kemampuan ini secara signifikan.",
    traits: ["Perlu latihan", "Berpotensi", "Bisa berkembang"],
    strengths: ["Potensi untuk meningkat", "Bisa belajar dari kesalahan"],
    weaknesses: ["Dasar logika perlu diperkuat"],
    tips: ["Pelajari struktur silogisme dasar", "Latih setiap hari", "Jangan terburu-buru menjawab"],
  },
  D: {
    type: "D",
    title: "Pemula Logika",
    emoji: "🌱",
    description: "Penalaran formal mungkin bukan bidang yang sering kamu latih. Tapi tidak masalah - logika adalah skill yang bisa dipelajari siapa saja dengan latihan yang konsisten!",
    traits: ["Perlu fondasi", "Fresh start", "Berpotensi"],
    strengths: ["Bisa belajar dengan cara yang benar dari awal"],
    weaknesses: ["Fondasi logika perlu dibangun"],
    tips: ["Mulai dari basic logic", "Gunakan diagram untuk visualisasi", "Consistency is key"],
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
