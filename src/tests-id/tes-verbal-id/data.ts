export const questions = [
  {
    id: 1,
    question: "Apa sinonim dari kata 'GIGIH'?",
    options: [
      { text: "Tekun", type: "A" },
      { text: "Malas", type: "B" },
      { text: "Cepat", type: "C" },
      { text: "Lambat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Apa antonim dari kata 'DERMAWAN'?",
    options: [
      { text: "Kikir", type: "A" },
      { text: "Murah hati", type: "B" },
      { text: "Baik", type: "C" },
      { text: "Ramah", type: "D" },
    ],
  },
  {
    id: 3,
    question: "DOKTER : PASIEN = GURU : ?",
    options: [
      { text: "Murid", type: "A" },
      { text: "Sekolah", type: "B" },
      { text: "Buku", type: "C" },
      { text: "Kelas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Manakah kata yang TIDAK sekelompok?",
    options: [
      { text: "Matahari", type: "A" },
      { text: "Merkurius", type: "B" },
      { text: "Venus", type: "C" },
      { text: "Mars", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Apa arti kata 'KONTEMPLATIF'?",
    options: [
      { text: "Suka merenung dan berpikir mendalam", type: "A" },
      { text: "Suka berbicara banyak", type: "B" },
      { text: "Suka berjalan-jalan", type: "C" },
      { text: "Suka berkompetisi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "BUKU : PERPUSTAKAAN = MOBIL : ?",
    options: [
      { text: "Garasi", type: "A" },
      { text: "Jalan", type: "B" },
      { text: "Bensin", type: "C" },
      { text: "Pengemudi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa sinonim dari kata 'ENIGMATIS'?",
    options: [
      { text: "Misterius", type: "A" },
      { text: "Jelas", type: "B" },
      { text: "Ceria", type: "C" },
      { text: "Berani", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Manakah kata yang memiliki arti PALING MIRIP dengan 'APOKALIPTIK'?",
    options: [
      { text: "Kehancuran besar", type: "A" },
      { text: "Kebahagiaan", type: "B" },
      { text: "Kedamaian", type: "C" },
      { text: "Kemewahan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "PANAS : DINGIN = TERANG : ?",
    options: [
      { text: "Gelap", type: "A" },
      { text: "Cahaya", type: "B" },
      { text: "Siang", type: "C" },
      { text: "Lampu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Apa arti dari kata 'PRAGMATIS'?",
    options: [
      { text: "Bersifat praktis dan realistis", type: "A" },
      { text: "Bersifat idealis", type: "B" },
      { text: "Bersifat emosional", type: "C" },
      { text: "Bersifat artistik", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Manakah pasangan kata yang memiliki hubungan yang SAMA dengan PENULIS : NOVEL?",
    options: [
      { text: "Komposer : Simfoni", type: "A" },
      { text: "Penonton : Film", type: "B" },
      { text: "Pembaca : Majalah", type: "C" },
      { text: "Toko : Barang", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Apa antonim dari kata 'PROLIFERASI'?",
    options: [
      { text: "Pengurangan", type: "A" },
      { text: "Penyebaran", type: "B" },
      { text: "Pertumbuhan", type: "C" },
      { text: "Perkembangan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ahli Bahasa",
    emoji: "📚",
    description: "Luar biasa! Kemampuan verbalmu sangat tinggi! Kamu memahami nuansa bahasa, kosakata yang luas, dan mampu menangkap hubungan antar kata dengan sangat baik. Kamu adalah wordsmith sejati!",
    traits: ["Kaya kosakata", "Articulate", "Literate", "Ekspresif"],
    strengths: ["Komunikasi tertulis yang baik", "Memahami konteks dan nuansa", "Vocabulari yang kaya"],
    weaknesses: ["Mungkin sulit berkomunikasi dengan yang vocabularinya terbatas"],
    tips: ["Gunakan kemampuanmu untuk menulis atau public speaking", "Terus baca untuk memperkaya kosakata", "Bagikan pengetahuanmu"],
  },
  B: {
    type: "B",
    title: "Komunikator Baik",
    emoji: "🗣️",
    description: "Bagus! Kemampuan verbalmu cukup solid. Kamu memahami bahasa dengan baik dan memiliki kosakata yang cukup untuk berkomunikasi efektif dalam berbagai situasi.",
    traits: ["Komunikatif", "Cukup literate", "Berkembang", "Jelas"],
    strengths: ["Komunikasi yang jelas", "Fondasi bahasa yang baik", "Bisa dikembangkan"],
    weaknesses: ["Beberapa kata atau konsep mungkin masih asing"],
    tips: ["Perbanyak membaca untuk memperluas kosakata", "Latih dengan menulis secara rutin", "Catat kata-kata baru yang kamu temui"],
  },
  C: {
    type: "C",
    title: "Belajar Verbal",
    emoji: "📖",
    description: "Kemampuan verbalmu masih dalam tahap pengembangan. Tidak masalah! Dengan membaca lebih banyak dan berlatih, kosakata dan pemahaman bahasamu akan meningkat.",
    traits: ["Berkembang", "Berpotensi", "Perlu latihan"],
    strengths: ["Potensi untuk berkembang", "Bisa belajar dari membaca"],
    weaknesses: ["Kosakata perlu diperluas", "Beberapa konsep bahasa masih asing"],
    tips: ["Baca buku, artikel, atau apa saja yang kamu suka", "Catat dan pelajari kata-kata baru", "Gunakan kamus saat menemukan kata asing"],
  },
  D: {
    type: "D",
    title: "Pemula Verbal",
    emoji: "🌱",
    description: "Kemampuan verbal mungkin bukan fokus utamamu selama ini. Tidak masalah - setiap orang punya kekuatan di area berbeda. Mulai dengan membaca hal-hal yang kamu sukai untuk mengembangkan ini.",
    traits: ["Perlu fondasi", "Berpotensi", "Fresh start"],
    strengths: ["Bisa belajar dari awal dengan benar", "Mungkin kuat di area lain"],
    weaknesses: ["Kosakata perlu dibangun"],
    tips: ["Mulai membaca apa saja yang menarik bagimu", "Tidak harus buku berat - artikel atau fiksi juga ok", "Consistency lebih penting dari intensitas"],
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
