// Tes Analogi
// Uji kemampuan mengenali hubungan antar konsep!

export const questions = [
  {
    id: 1,
    question: "PANAS : DINGIN = TINGGI : ?",
    options: [
      { text: "RENDAH", type: "A" },
      { text: "BESAR", type: "B" },
      { text: "PANJANG", type: "C" },
      { text: "KECIL", type: "D" },
    ],
  },
  {
    id: 2,
    question: "DOKTER : RUMAH SAKIT = GURU : ?",
    options: [
      { text: "SEKOLAH", type: "A" },
      { text: "KANTOR", type: "B" },
      { text: "MURID", type: "C" },
      { text: "BUKU", type: "D" },
    ],
  },
  {
    id: 3,
    question: "BURUNG : TERBANG = IKAN : ?",
    options: [
      { text: "BERENANG", type: "A" },
      { text: "BERJALAN", type: "B" },
      { text: "BERLARI", type: "C" },
      { text: "MELOMPAT", type: "D" },
    ],
  },
  {
    id: 4,
    question: "MATA : MELIHAT = TELINGA : ?",
    options: [
      { text: "MENDENGAR", type: "A" },
      { text: "BERBICARA", type: "B" },
      { text: "MENCIUM", type: "C" },
      { text: "MERASAKAN", type: "D" },
    ],
  },
  {
    id: 5,
    question: "BUKU : MEMBACA = LAGU : ?",
    options: [
      { text: "MENDENGARKAN", type: "A" },
      { text: "MENULIS", type: "B" },
      { text: "MENONTON", type: "C" },
      { text: "MENARI", type: "D" },
    ],
  },
  {
    id: 6,
    question: "KAMBING : RUMPUT = SINGA : ?",
    options: [
      { text: "DAGING", type: "A" },
      { text: "SAYUR", type: "B" },
      { text: "BUAH", type: "C" },
      { text: "RUMPUT", type: "D" },
    ],
  },
  {
    id: 7,
    question: "PULPEN : MENULIS = GUNTING : ?",
    options: [
      { text: "MEMOTONG", type: "A" },
      { text: "MENGGAMBAR", type: "B" },
      { text: "MEREKAT", type: "C" },
      { text: "MENGUKUR", type: "D" },
    ],
  },
  {
    id: 8,
    question: "RAJA : RATU = PANGERAN : ?",
    options: [
      { text: "PUTRI", type: "A" },
      { text: "IPAR", type: "B" },
      { text: "MENTERI", type: "C" },
      { text: "DAYANG", type: "D" },
    ],
  },
  {
    id: 9,
    question: "AIR : KERING = TERANG : ?",
    options: [
      { text: "GELAP", type: "A" },
      { text: "BASAH", type: "B" },
      { text: "PANAS", type: "C" },
      { text: "DINGIN", type: "D" },
    ],
  },
  {
    id: 10,
    question: "ULAT : KUPU-KUPU = BERUDU : ?",
    options: [
      { text: "KATAK", type: "A" },
      { text: "IKAN", type: "B" },
      { text: "BURUNG", type: "C" },
      { text: "NYAMUK", type: "D" },
    ],
  },
  {
    id: 11,
    question: "JARI : TANGAN = JEMPOL KAKI : ?",
    options: [
      { text: "KAKI", type: "A" },
      { text: "LUTUT", type: "B" },
      { text: "TUMIT", type: "C" },
      { text: "BETIS", type: "D" },
    ],
  },
  {
    id: 12,
    question: "INDONESIA : RUPIAH = JEPANG : ?",
    options: [
      { text: "YEN", type: "A" },
      { text: "DOLLAR", type: "B" },
      { text: "WON", type: "C" },
      { text: "PESO", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Master Analogi",
    emoji: "🎯",
    description: "Kemampuan analogi kamu sangat baik! Kamu bisa dengan mudah mengenali hubungan dan pattern antar konsep. Ini menunjukkan pemahaman konseptual yang kuat.",
    traits: ["Konseptual kuat", "Hubungan jelas", "Verbal cerdas", "Pattern thinker"],
    strengths: ["Pemahaman relasi", "Transfer knowledge", "Komunikasi efektif"],
    weaknesses: ["Mungkin terlalu rely on patterns kadang"],
    tips: ["Skill ini bagus untuk teaching, writing, leadership"],
  },
  B: {
    type: "B",
    title: "Analogi Baik",
    emoji: "👍",
    description: "Kemampuan analogi kamu cukup baik! Kamu bisa mengenali sebagian besar hubungan antar konsep dengan tepat. Terus latih untuk level yang lebih tinggi!",
    traits: ["Pemahaman cukup", "Logis", "Berkembang"],
    strengths: ["Dasar kuat", "Konsisten", "Potensi bagus"],
    weaknesses: ["Analogi kompleks masih challenging"],
    tips: ["Perbanyak membaca untuk expand vocabulary", "Latih dengan berbagai jenis analogi"],
  },
  C: {
    type: "C",
    title: "Analogi Berkembang",
    emoji: "📖",
    description: "Kemampuan analogi kamu masih dalam proses berkembang. Beberapa hubungan sudah bisa dikenali, tapi masih perlu latihan untuk yang lebih kompleks.",
    traits: ["Masih belajar", "Perlu exposure", "Potensi ada"],
    strengths: ["Mau belajar", "Dasar ada"],
    weaknesses: ["Vocabulary mungkin perlu diperluas", "Konsep relasi perlu diperkuat"],
    tips: ["Banyak membaca dan belajar konsep baru", "Practice berbagai jenis analogi"],
  },
  D: {
    type: "D",
    title: "Analogi Dasar",
    emoji: "🌱",
    description: "Kemampuan analogi kamu masih di tahap dasar. Jangan khawatir - ini bisa diperbaiki dengan memperluas pengetahuan dan latihan teratur.",
    traits: ["Pemula", "Perlu exposure", "Dapat berkembang"],
    strengths: ["Mengidentifikasi area untuk improve"],
    weaknesses: ["Fondasi konseptual perlu diperkuat"],
    tips: ["Perbanyak membaca", "Latih mengenali hubungan dalam kehidupan sehari-hari"],
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
