export const questions = [
  {
    id: 1,
    question: "Ingat urutan warna: MERAH, BIRU, HIJAU, KUNING. Warna apa yang kedua?",
    options: [
      { text: "BIRU", type: "A" },
      { text: "MERAH", type: "B" },
      { text: "HIJAU", type: "C" },
      { text: "KUNING", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ingat angka: 7, 3, 9, 1, 5. Angka apa yang ada di tengah?",
    options: [
      { text: "9", type: "A" },
      { text: "3", type: "B" },
      { text: "1", type: "C" },
      { text: "5", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ingat deret huruf: K, M, P, R, T. Huruf apa sebelum R?",
    options: [
      { text: "P", type: "A" },
      { text: "M", type: "B" },
      { text: "K", type: "C" },
      { text: "T", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ingat urutan: APEL, JERUK, MANGGA, PISANG. Buah ke-3 adalah?",
    options: [
      { text: "MANGGA", type: "A" },
      { text: "JERUK", type: "B" },
      { text: "APEL", type: "C" },
      { text: "PISANG", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ingat angka: 24, 56, 81, 33. Berapa jumlah digit pertama dari semua angka?",
    options: [
      { text: "14 (2+5+8+3)", type: "A" },
      { text: "12", type: "B" },
      { text: "18", type: "C" },
      { text: "16", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ingat urutan: SENIN, RABU, JUMAT, MINGGU. Hari apa yang TIDAK ada dalam urutan?",
    options: [
      { text: "SELASA", type: "A" },
      { text: "SENIN", type: "B" },
      { text: "RABU", type: "C" },
      { text: "JUMAT", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ingat pola: ★ ● ★ ★ ● ★ ★ ★ ●. Simbol apa yang muncul paling sedikit?",
    options: [
      { text: "● (lingkaran)", type: "A" },
      { text: "★ (bintang)", type: "B" },
      { text: "Sama banyak", type: "C" },
      { text: "Tidak bisa ditentukan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ingat deret: Jakarta, Bandung, Surabaya, Medan. Kota ke-2 dan ke-4 adalah?",
    options: [
      { text: "Bandung dan Medan", type: "A" },
      { text: "Jakarta dan Surabaya", type: "B" },
      { text: "Surabaya dan Medan", type: "C" },
      { text: "Bandung dan Surabaya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ingat angka: 15, 28, 42, 19. Angka mana yang paling besar?",
    options: [
      { text: "42", type: "A" },
      { text: "28", type: "B" },
      { text: "19", type: "C" },
      { text: "15", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ingat urutan: A1, B2, C3, D4, E5. Apa yang ada di posisi ke-4?",
    options: [
      { text: "D4", type: "A" },
      { text: "C3", type: "B" },
      { text: "B2", type: "C" },
      { text: "E5", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ingat kata: INDONESIA. Huruf apa yang muncul lebih dari sekali?",
    options: [
      { text: "I, N", type: "A" },
      { text: "I, D", type: "B" },
      { text: "N, A", type: "C" },
      { text: "O, E", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ingat urutan: 🔴 🔵 🟢 🟡 🔴 🔵. Warna apa yang muncul 2 kali?",
    options: [
      { text: "Merah dan Biru", type: "A" },
      { text: "Hijau dan Kuning", type: "B" },
      { text: "Hanya Merah", type: "C" },
      { text: "Hanya Biru", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Memori Fotografis",
    emoji: "📸",
    description: "Luar biasa! Kamu memiliki memori visual yang sangat kuat! Kamu bisa mengingat detail, urutan, dan pola dengan sangat baik. Kemampuan ini sangat berguna dalam banyak aspek kehidupan dan karir.",
    traits: ["Detail-oriented", "Visual learner", "Ingatan kuat", "Observant"],
    strengths: ["Mudah mengingat wajah dan tempat", "Baik dalam navigasi", "Bisa belajar dari diagram dan gambar"],
    weaknesses: ["Mungkin overwhelmed dengan terlalu banyak visual"],
    tips: ["Gunakan mind mapping untuk belajar", "Manfaatkan kemampuan ini untuk karir kreatif atau analitis", "Latih dengan memory games"],
  },
  B: {
    type: "B",
    title: "Memori Baik",
    emoji: "🧠",
    description: "Bagus! Memori visualmu cukup baik. Kamu bisa mengingat sebagian besar informasi visual dengan akurat. Dengan sedikit latihan, kamu bisa meningkatkan kapasitas ini lebih lanjut.",
    traits: ["Cukup observant", "Bisa fokus", "Berkembang", "Teliti"],
    strengths: ["Fondasi memori yang baik", "Bisa dilatih lebih lanjut", "Konsisten"],
    weaknesses: ["Kadang miss detail kecil"],
    tips: ["Latih dengan puzzle dan games memori", "Gunakan teknik chunking untuk mengingat", "Istirahat yang cukup untuk memori optimal"],
  },
  C: {
    type: "C",
    title: "Memori Berkembang",
    emoji: "📈",
    description: "Memori visualmu masih dalam tahap pengembangan. Tidak masalah! Memori adalah skill yang bisa dilatih. Dengan teknik yang tepat dan latihan konsisten, kamu bisa meningkatkan kemampuan ini.",
    traits: ["Perlu latihan", "Berpotensi", "Bisa berkembang"],
    strengths: ["Potensi untuk meningkat", "Bisa belajar teknik memori"],
    weaknesses: ["Perlu lebih banyak fokus", "Kadang terdistraksi"],
    tips: ["Kurangi distraksi saat perlu mengingat", "Gunakan repetisi untuk menguatkan memori", "Coba teknik memory palace"],
  },
  D: {
    type: "D",
    title: "Mulai Melatih Memori",
    emoji: "🌱",
    description: "Memori visual mungkin bukan kekuatan utamamu saat ini. Tapi jangan khawatir - memori bisa dilatih! Mungkin kamu lebih kuat di tipe memori lain seperti auditori atau kinestetik.",
    traits: ["Perlu fondasi", "Mungkin auditori learner", "Bisa berkembang"],
    strengths: ["Mungkin kuat di memori tipe lain", "Bisa belajar dari awal dengan teknik yang benar"],
    weaknesses: ["Perlu membangun fondasi memori visual"],
    tips: ["Mulai dengan mengingat hal-hal sederhana sehari-hari", "Gunakan apps memory training", "Kombinasikan dengan tipe memori yang lebih kuat"],
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
