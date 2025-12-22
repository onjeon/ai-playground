export const questions = [
  {
    id: 1,
    question: "2 + 2 × 2 = ?",
    options: [
      { text: "6", type: "A" },
      { text: "8", type: "B" },
      { text: "4", type: "C" },
      { text: "10", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Apa yang lebih berat: 1 kg besi atau 1 kg kapas?",
    options: [
      { text: "Sama beratnya", type: "A" },
      { text: "1 kg besi", type: "B" },
      { text: "1 kg kapas", type: "C" },
      { text: "Tergantung kondisi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Jika kamu memiliki 3 jeruk dan memberikan 2 kepada temanmu, berapa jeruk yang kamu miliki?",
    options: [
      { text: "1 jeruk", type: "A" },
      { text: "3 jeruk", type: "B" },
      { text: "2 jeruk", type: "C" },
      { text: "0 jeruk", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Huruf apa yang muncul sekali di 'Senin' tapi dua kali di 'Selasa'?",
    options: [
      { text: "S", type: "A" },
      { text: "A", type: "B" },
      { text: "E", type: "C" },
      { text: "L", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Jika A = 1, B = 2, C = 3, maka CAB = ?",
    options: [
      { text: "312", type: "A" },
      { text: "123", type: "B" },
      { text: "321", type: "C" },
      { text: "213", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Berapa hasil dari 100 - 99 + 98 - 97?",
    options: [
      { text: "2", type: "A" },
      { text: "1", type: "B" },
      { text: "0", type: "C" },
      { text: "100", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pukul berapa jarum jam pendek dan panjang berimpit sempurna?",
    options: [
      { text: "12:00", type: "A" },
      { text: "6:00", type: "B" },
      { text: "3:00", type: "C" },
      { text: "9:00", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sebuah kotak berisi 5 bola merah dan 3 bola biru. Ambil 1 bola. Peluang mendapat bola merah?",
    options: [
      { text: "5/8", type: "A" },
      { text: "3/8", type: "B" },
      { text: "1/2", type: "C" },
      { text: "5/3", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kebalikan dari kata 'BESAR' adalah...",
    options: [
      { text: "Kecil", type: "A" },
      { text: "Raseb", type: "B" },
      { text: "Pendek", type: "C" },
      { text: "Tipis", type: "D" },
    ],
  },
  {
    id: 10,
    question: "50% dari 50% dari 100 adalah?",
    options: [
      { text: "25", type: "A" },
      { text: "50", type: "B" },
      { text: "75", type: "C" },
      { text: "12.5", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Jika 5 mesin memproduksi 5 barang dalam 5 menit, berapa menit untuk 100 mesin memproduksi 100 barang?",
    options: [
      { text: "5 menit", type: "A" },
      { text: "100 menit", type: "B" },
      { text: "20 menit", type: "C" },
      { text: "1 menit", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Seekor ayam setengah bisa bertelur setengah butir dalam sehari setengah. Berapa telur dari 3 ayam dalam 3 hari?",
    options: [
      { text: "3 butir", type: "A" },
      { text: "6 butir", type: "B" },
      { text: "1.5 butir", type: "C" },
      { text: "9 butir", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Quick Thinker Pro",
    emoji: "⚡",
    description: "Impressive! Kamu bisa berpikir cepat dan akurat! Kemampuanmu memproses informasi dan menemukan jawaban dengan cepat sangat baik. IQ quick response-mu tinggi!",
    traits: ["Quick thinker", "Akurat", "Sharp", "Efisien"],
    strengths: ["Proses informasi cepat", "Jawaban akurat di bawah tekanan", "Mental math yang baik"],
    weaknesses: ["Mungkin terlalu cepat sampai miss detail kadang"],
    tips: ["Gunakan untuk situasi yang butuh keputusan cepat", "Balance antara speed dan accuracy", "Great for competitive environments"],
  },
  B: {
    type: "B",
    title: "Solid Quick Thinker",
    emoji: "🎯",
    description: "Bagus! Kemampuan berpikir cepatmu cukup baik. Kamu bisa menangani sebagian besar pertanyaan dengan cepat dan akurat.",
    traits: ["Cukup cepat", "Berkembang", "Reliable", "Konsisten"],
    strengths: ["Fondasi berpikir cepat yang baik", "Konsisten", "Berpotensi meningkat"],
    weaknesses: ["Beberapa trick questions masih challenging"],
    tips: ["Latih dengan brain games dan quiz", "Jangan terburu-buru di soal tricky", "Keep practicing"],
  },
  C: {
    type: "C",
    title: "Learning Quick Thinker",
    emoji: "📈",
    description: "Kemampuan berpikir cepatmu masih berkembang. Dengan latihan rutin, kamu bisa meningkatkan speed dan akurasi berpikir secara signifikan.",
    traits: ["Perlu latihan", "Berpotensi", "Bisa berkembang"],
    strengths: ["Potensi untuk meningkat", "Bisa belajar dari kesalahan"],
    weaknesses: ["Kecepatan perlu ditingkatkan", "Kadang terjebak di detail"],
    tips: ["Latih dengan apps brain training", "Coba mental math setiap hari", "Start slow, build speed gradually"],
  },
  D: {
    type: "D",
    title: "Deliberate Thinker",
    emoji: "🌱",
    description: "Kamu mungkin lebih suka berpikir dengan lebih teliti dan tidak terburu-buru. Itu tidak buruk! Tapi melatih quick thinking akan membantu untuk situasi tertentu.",
    traits: ["Teliti", "Tidak terburu-buru", "Methodical", "Thorough"],
    strengths: ["Teliti dan menyeluruh", "Tidak asal jawab"],
    weaknesses: ["Kecepatan perlu ditingkatkan untuk situasi tertentu"],
    tips: ["Latih dengan timer untuk build speed", "Brain games bisa membantu", "Balance thoroughness dengan efficiency"],
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
