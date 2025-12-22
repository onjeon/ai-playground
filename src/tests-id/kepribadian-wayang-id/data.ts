// Karakter Wayang yang Mirip Denganmu
// Tes ini mengungkap karakter wayang yang paling mirip dengan kepribadianmu!

export const questions = [
  {
    id: 1,
    question: "Saat menghadapi konflik, kamu biasanya...",
    options: [
      { text: "Maju terus, hadapi langsung dengan berani", type: "A" },
      { text: "Berpikir strategi dulu, cari solusi bijak", type: "B" },
      { text: "Mediasi, cari jalan tengah untuk semua pihak", type: "C" },
      { text: "Observasi dulu, bertindak di waktu yang tepat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Peran yang biasa kamu ambil dalam kelompok...",
    options: [
      { text: "Pemimpin yang tegas dan berani", type: "A" },
      { text: "Penasihat yang bijak dan sabar", type: "B" },
      { text: "Penyeimbang yang netral dan adil", type: "C" },
      { text: "Pengamat yang cerdik dan strategis", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Nilai yang paling kamu pegang teguh...",
    options: [
      { text: "Keberanian dan kehormatan", type: "A" },
      { text: "Kebijaksanaan dan kesabaran", type: "B" },
      { text: "Keadilan dan keseimbangan", type: "C" },
      { text: "Kecerdasan dan strategi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat teman butuh bantuan...",
    options: [
      { text: "Langsung turun tangan, siap membela", type: "A" },
      { text: "Beri nasihat bijak dan dukungan moral", type: "B" },
      { text: "Bantu mencari solusi yang adil untuk semua", type: "C" },
      { text: "Analisis situasi, bantu dengan cara tersembunyi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cara kamu mengatasi masalah...",
    options: [
      { text: "Hadapi langsung, tidak takut tantangan", type: "A" },
      { text: "Renungkan dengan tenang, cari hikmah", type: "B" },
      { text: "Diskusi dengan semua pihak terkait", type: "C" },
      { text: "Rencana matang dulu, baru eksekusi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kamu paling tidak suka dengan...",
    options: [
      { text: "Ketidakadilan dan penindasan", type: "A" },
      { text: "Kebodohan dan kesombongan", type: "B" },
      { text: "Perselisihan dan perpecahan", type: "C" },
      { text: "Kebohongan dan pengkhianatan", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Dalam situasi sulit, kamu...",
    options: [
      { text: "Tetap tegar, jadikan motivasi untuk lebih kuat", type: "A" },
      { text: "Introspeksi, cari pelajaran dari kesulitan", type: "B" },
      { text: "Tetap tenang, percaya semua akan baik", type: "C" },
      { text: "Adaptasi, cari celah dan peluang", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Hubunganmu dengan keluarga...",
    options: [
      { text: "Pelindung yang setia dan loyal", type: "A" },
      { text: "Penasehat yang dihormati", type: "B" },
      { text: "Penyatu yang menjaga harmoni", type: "C" },
      { text: "Mandiri tapi tetap terhubung", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cara kamu berkomunikasi...",
    options: [
      { text: "Tegas dan langsung ke inti", type: "A" },
      { text: "Lembut dan penuh makna", type: "B" },
      { text: "Diplomatis dan menyejukkan", type: "C" },
      { text: "Cerdas dan penuh perhitungan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cita-cita terbesarmu...",
    options: [
      { text: "Menjadi pahlawan yang dikenang", type: "A" },
      { text: "Menjadi guru yang menginspirasi", type: "B" },
      { text: "Menjadi pemimpin yang adil", type: "C" },
      { text: "Menjadi mastermind di balik layar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat mengambil keputusan penting...",
    options: [
      { text: "Ikuti intuisi dan keberanian hati", type: "A" },
      { text: "Pertimbangkan semua aspek dengan bijak", type: "B" },
      { text: "Pikirkan dampak untuk semua orang", type: "C" },
      { text: "Hitung untung rugi dengan cermat", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kekuatan terbesarmu adalah...",
    options: [
      { text: "Keberanian yang tak tergoyahkan", type: "A" },
      { text: "Kebijaksanaan yang mendalam", type: "B" },
      { text: "Keadilan dan kesetiaan", type: "C" },
      { text: "Kecerdikan dan adaptabilitas", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gatotkaca",
    emoji: "💪",
    description: "Kamu adalah Gatotkaca! Ksatria perkasa dengan otot kawat tulang besi. Kamu memiliki keberanian luar biasa, loyalitas tinggi, dan selalu siap membela kebenaran. Seperti Gatotkaca yang rela mengorbankan diri untuk kebaikan, kamu juga tipe yang mengutamakan kepentingan orang lain.",
    traits: ["Pemberani", "Loyal", "Kuat", "Rela berkorban"],
    strengths: ["Keberanian tanpa batas", "Setia pada prinsip", "Pelindung yang andal"],
    weaknesses: ["Kadang terlalu impulsif", "Keras kepala"],
    tips: ["Belajar untuk lebih sabar", "Dengarkan nasihat sebelum bertindak"],
  },
  B: {
    type: "B",
    title: "Semar",
    emoji: "🙏",
    description: "Kamu adalah Semar! Sosok bijak yang menjadi panutan. Dibalik penampilanmu yang sederhana, tersimpan kebijaksanaan yang luar biasa. Kamu adalah penasehat terbaik yang selalu memberikan panduan dengan humor dan kasih sayang.",
    traits: ["Bijaksana", "Sabar", "Humoris", "Rendah hati"],
    strengths: ["Kebijaksanaan mendalam", "Kemampuan mengayomi", "Humor yang menyejukkan"],
    weaknesses: ["Terlalu sabar kadang", "Sering meremehkan diri sendiri"],
    tips: ["Tunjukkan kemampuanmu lebih", "Jangan selalu di belakang layar"],
  },
  C: {
    type: "C",
    title: "Yudhistira",
    emoji: "⚖️",
    description: "Kamu adalah Yudhistira! Raja Pandawa yang terkenal dengan keadilannya. Kamu memiliki jiwa kepemimpinan yang kuat dengan prinsip keadilan sebagai pegangan utama. Kejujuran dan integritasmu tidak bisa diragukan.",
    traits: ["Adil", "Jujur", "Tenang", "Bijaksana"],
    strengths: ["Kepemimpinan yang adil", "Integritas tinggi", "Kemampuan menyatukan"],
    weaknesses: ["Terlalu idealis", "Kadang kurang tegas"],
    tips: ["Kadang perlu ketegasan", "Realistis juga penting"],
  },
  D: {
    type: "D",
    title: "Kresna",
    emoji: "🧠",
    description: "Kamu adalah Kresna! Sang ahli strategi yang cerdas dan penuh perhitungan. Kamu selalu berpikir beberapa langkah ke depan dan mampu melihat gambaran besar. Kemampuan diplomatikmu sangat tinggi.",
    traits: ["Cerdas", "Strategis", "Visioner", "Diplomat"],
    strengths: ["Kecerdasan tinggi", "Strategi jitu", "Kemampuan mempengaruhi"],
    weaknesses: ["Kadang terlalu kalkulatif", "Kurang spontan"],
    tips: ["Sesekali ikuti hati", "Spontanitas juga menyenangkan"],
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
