export const questions = [
  {
    id: 1,
    question: "Jika semua kucing adalah hewan, dan semua hewan bernapas, maka...",
    options: [
      { text: "Semua kucing bernapas", type: "A" },
      { text: "Semua yang bernapas adalah kucing", type: "B" },
      { text: "Beberapa hewan adalah kucing", type: "C" },
      { text: "Tidak ada hubungan yang pasti", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ani lebih tinggi dari Budi. Citra lebih pendek dari Budi. Maka...",
    options: [
      { text: "Ani lebih tinggi dari Citra", type: "A" },
      { text: "Citra lebih tinggi dari Ani", type: "B" },
      { text: "Budi paling tinggi", type: "C" },
      { text: "Tidak bisa ditentukan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Jika hujan, jalan basah. Jalan basah. Maka...",
    options: [
      { text: "Pasti hujan", type: "B" },
      { text: "Mungkin hujan, mungkin tidak", type: "A" },
      { text: "Tidak mungkin hujan", type: "C" },
      { text: "Jalan akan kering", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Semua dokter adalah manusia. Beberapa manusia adalah atlet. Maka...",
    options: [
      { text: "Semua dokter adalah atlet", type: "B" },
      { text: "Beberapa dokter mungkin atlet", type: "A" },
      { text: "Tidak ada dokter yang atlet", type: "C" },
      { text: "Semua atlet adalah dokter", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Jika A maka B. Jika B maka C. Jika A, maka...",
    options: [
      { text: "C pasti terjadi", type: "A" },
      { text: "C mungkin terjadi", type: "B" },
      { text: "C tidak terjadi", type: "C" },
      { text: "Tidak bisa ditentukan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Di sebuah keluarga ada 5 anak. A lahir sebelum B. C lahir setelah D. B lahir sebelum D. Siapa yang lahir paling awal?",
    options: [
      { text: "A", type: "A" },
      { text: "B", type: "B" },
      { text: "C", type: "C" },
      { text: "D", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tidak ada burung yang bisa berenang di bawah air. Penguin adalah burung. Maka...",
    options: [
      { text: "Penguin bisa berenang di bawah air", type: "B" },
      { text: "Penguin tidak bisa berenang di bawah air (menurut premis)", type: "A" },
      { text: "Beberapa burung adalah penguin", type: "C" },
      { text: "Penguin bukan burung", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Jika X = Y, dan Y ≠ Z, maka...",
    options: [
      { text: "X ≠ Z", type: "A" },
      { text: "X = Z", type: "B" },
      { text: "Y = Z", type: "C" },
      { text: "Tidak ada hubungan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Rina selalu pergi ke kantor dengan kereta. Hari ini Rina tidak naik kereta. Maka...",
    options: [
      { text: "Rina tidak pergi ke kantor", type: "A" },
      { text: "Rina pergi ke kantor dengan cara lain", type: "B" },
      { text: "Rina sakit", type: "C" },
      { text: "Kereta tidak beroperasi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Semua siswa di kelas A lulus ujian. Doni adalah siswa kelas A. Maka...",
    options: [
      { text: "Doni lulus ujian", type: "A" },
      { text: "Doni mungkin lulus", type: "B" },
      { text: "Doni tidak lulus", type: "C" },
      { text: "Tidak bisa ditentukan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Jika tidak A maka B. Tidak B terjadi. Maka...",
    options: [
      { text: "A terjadi", type: "A" },
      { text: "A tidak terjadi", type: "B" },
      { text: "B terjadi", type: "C" },
      { text: "Tidak bisa ditentukan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "P lebih berat dari Q. R lebih ringan dari Q. S lebih berat dari P. Urutkan dari paling ringan:",
    options: [
      { text: "R, Q, P, S", type: "A" },
      { text: "S, P, Q, R", type: "B" },
      { text: "Q, R, P, S", type: "C" },
      { text: "R, P, Q, S", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Master Logika",
    emoji: "🧠",
    description: "Selamat! Kamu memiliki kemampuan logika yang sangat baik! Kamu mampu menganalisis premis dan menarik kesimpulan dengan akurat. Penalaran deduktif dan induktifmu sangat kuat.",
    traits: ["Analitis", "Sistematis", "Kritis", "Terstruktur"],
    strengths: ["Kemampuan analisis yang tajam", "Berpikir sistematis", "Mampu melihat hubungan antar konsep"],
    weaknesses: ["Kadang terlalu kaku dalam berpikir", "Kurang menghargai intuisi"],
    tips: ["Terus asah dengan puzzle dan teka-teki", "Coba pelajari filosofi dan matematika", "Gunakan logikamu untuk problem-solving sehari-hari"],
  },
  B: {
    type: "B",
    title: "Pemikir Baik",
    emoji: "🎯",
    description: "Bagus! Kamu memiliki dasar logika yang solid. Dengan latihan lebih lanjut, kamu bisa meningkatkan kemampuan penalaran. Kamu cukup baik dalam melihat pola dan hubungan.",
    traits: ["Cukup analitis", "Berkembang", "Teliti", "Belajar cepat"],
    strengths: ["Dasar logika yang baik", "Mau belajar dan berkembang", "Bisa dilatih lebih lanjut"],
    weaknesses: ["Kadang terburu-buru menarik kesimpulan", "Perlu lebih teliti"],
    tips: ["Latih dengan soal-soal logika secara rutin", "Baca premis dengan lebih hati-hati", "Jangan terburu-buru menjawab"],
  },
  C: {
    type: "C",
    title: "Pemikir Berkembang",
    emoji: "📈",
    description: "Kamu masih dalam tahap pengembangan kemampuan logika. Jangan khawatir, dengan latihan yang konsisten, kemampuanmu akan meningkat. Fokus pada pemahaman dasar silogisme dan penalaran.",
    traits: ["Perlu latihan", "Berpotensi", "Intuitif", "Kreatif"],
    strengths: ["Potensi untuk berkembang", "Mungkin lebih kuat di area lain", "Bisa belajar dari kesalahan"],
    weaknesses: ["Dasar logika perlu diperkuat", "Kadang mengabaikan detail"],
    tips: ["Mulai dari dasar-dasar logika", "Latih setiap hari walau sedikit", "Pahami struktur argumen yang valid"],
  },
  D: {
    type: "D",
    title: "Pemula Logika",
    emoji: "🌱",
    description: "Logika formal mungkin bukan bidang yang sering kamu latih. Ini bukan berarti kamu tidak pintar - mungkin kekuatanmu ada di area lain seperti kreativitas atau kecerdasan emosional.",
    traits: ["Perlu fondasi", "Intuitif", "Kreatif", "Berbeda"],
    strengths: ["Mungkin kuat di kecerdasan lain", "Fresh perspective", "Bisa belajar dari awal dengan benar"],
    weaknesses: ["Fondasi logika formal perlu dibangun"],
    tips: ["Jangan menyerah, mulai dari basic", "Cari mentor atau sumber belajar yang baik", "Ingat, logika bisa dipelajari siapa saja"],
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
