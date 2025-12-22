// Tes Gaya Backstreet Kamu
// Kalau lagi backstreet, gaya kamu gimana?

export const questions = [
  {
    id: 1,
    question: "Alasan utama kamu backstreet (kalau pernah)...",
    options: [
      { text: "Ortu belum kasih restu atau terlalu strict", type: "A" },
      { text: "Masih fokus kuliah/kerja dulu", type: "B" },
      { text: "Belum siap go public aja", type: "C" },
      { text: "Lebih seru kalau rahasia", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu komunikasi sama pacar kalau backstreet...",
    options: [
      { text: "Chat normal tapi hapus history", type: "A" },
      { text: "Pakai code name atau samaran", type: "B" },
      { text: "Hidden folder dan app tersembunyi", type: "C" },
      { text: "Berani aja, yang penting hati-hati", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kalau ketemu di tempat umum...",
    options: [
      { text: "Pura-pura ga kenal, salamnya biasa aja", type: "A" },
      { text: "Ngobrol normal kayak teman biasa", type: "B" },
      { text: "Hindari aja biar aman", type: "C" },
      { text: "Yaudah ketemu aja, act natural", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Soal upload foto bareng...",
    options: [
      { text: "Tidak sama sekali, terlalu risiko", type: "A" },
      { text: "Close friends atau private story", type: "B" },
      { text: "Upload tapi crop atau blur", type: "C" },
      { text: "Sesekali upload, YOLO", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat ada yang nanya 'udah punya pacar?'...",
    options: [
      { text: "Masih single, fokus diri sendiri dulu", type: "A" },
      { text: "Mengalihkan topik dengan halus", type: "B" },
      { text: "Senyum misterius, biarin nebak sendiri", type: "C" },
      { text: "Jujur ke beberapa orang terpercaya", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Date sama pacar backstreet biasanya...",
    options: [
      { text: "Di tempat jauh dari rumah/zona aman", type: "A" },
      { text: "Mall atau tempat ramai tapi incognito", type: "B" },
      { text: "Virtual date atau home date", type: "C" },
      { text: "Tempat random, yang penting bareng", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Perasaan kamu soal backstreet...",
    options: [
      { text: "Terpaksa karena situasi, pengen segera terang", type: "A" },
      { text: "Biasa aja, ini pilihan terbaik sementara", type: "B" },
      { text: "Kadang capek sembunyi-sembunyi", type: "C" },
      { text: "Ada thrill-nya tersendiri sih", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Yang tau hubungan kamu paling...",
    options: [
      { text: "Tidak ada sama sekali", type: "A" },
      { text: "Satu atau dua bestie", type: "B" },
      { text: "Inner circle yang bisa dipercaya", type: "C" },
      { text: "Lumayan banyak orang tau", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau hampir ketahuan...",
    options: [
      { text: "Panik dan langsung cari alasan", type: "A" },
      { text: "Stay calm dan alibi yang sudah disiapkan", type: "B" },
      { text: "Jujur aja sebagian, ga full", type: "C" },
      { text: "Yaudah kalau ketahuan ya ketahuan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Rencana ke depan soal backstreet ini...",
    options: [
      { text: "Go public secepatnya kalau kondisi memungkinkan", type: "A" },
      { text: "Tunggu timing yang tepat", type: "B" },
      { text: "Lihat situasi, ga buru-buru", type: "C" },
      { text: "Nikmatin aja dulu prosesnya", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Anniversary atau hari spesial...",
    options: [
      { text: "Rayain private, yang penting bermakna", type: "A" },
      { text: "Kirim hadiah lewat ojol, no name sender", type: "B" },
      { text: "Virtual celebration kalau ga bisa ketemu", type: "C" },
      { text: "Cari cara kreatif biar tetap spesial", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Menurutmu, backstreet itu...",
    options: [
      { text: "Kadang perlu untuk jaga hubungan", type: "A" },
      { text: "Solusi sementara, bukan permanen", type: "B" },
      { text: "Capek tapi worth it kalau orangnya tepat", type: "C" },
      { text: "Ada seru-serunya juga sih", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Backstreet Aman Terkendali",
    emoji: "🔐",
    description: "Kamu sangat hati-hati dalam menjalani backstreet! Setiap langkah dipikirkan matang-matang. Tujuanmu jelas: go public secepatnya kalau kondisi memungkinkan.",
    traits: ["Super hati-hati", "Planner", "Serius", "Goal oriented"],
    strengths: ["Minim risiko ketahuan", "Jelas tujuannya", "Tidak main-main"],
    weaknesses: ["Kadang terlalu paranoid", "Kurang spontan"],
    tips: ["Sesekali enjoy the moment", "Komunikasi sama pasangan tentang timeline"],
  },
  B: {
    type: "B",
    title: "Backstreet Strategis",
    emoji: "🎯",
    description: "Kamu punya strategi jelas dalam backstreet! Alibi sudah disiapkan, cover story rapi, dan selective soal siapa yang tau. Profesional banget mainnya!",
    traits: ["Strategis", "Calculated", "Smooth", "Prepared"],
    strengths: ["Alibi rapi", "Tidak panik", "Well prepared"],
    weaknesses: ["Terlalu complicated", "Capek maintain cover"],
    tips: ["Jangan lupa enjoy relationship-nya", "Simplicity kadang lebih baik"],
  },
  C: {
    type: "C",
    title: "Backstreet Realistis",
    emoji: "⚖️",
    description: "Kamu menjalani backstreet dengan realistis. Tau ini bukan kondisi ideal tapi terima situasinya. Capek memang, tapi kalau orangnya tepat, worth it.",
    traits: ["Realistis", "Sabar", "Adaptif", "Mature"],
    strengths: ["Tidak over-expect", "Balance", "Grounded"],
    weaknesses: ["Kadang pesimis", "Terlalu pasrah"],
    tips: ["Tetap punya target untuk go public", "Jangan sampai zona nyaman"],
  },
  D: {
    type: "D",
    title: "Backstreet YOLO",
    emoji: "🎢",
    description: "Kamu menikmati thrill dari backstreet! Tidak terlalu ribet mikirin, yang penting happy sama pasangan. Ada excitement tersendiri dari rahasia ini.",
    traits: ["Easy going", "Thrill seeker", "Spontan", "Risk taker"],
    strengths: ["Tidak stres", "Enjoy the moment", "Flexible"],
    weaknesses: ["Kurang hati-hati", "Risiko ketahuan tinggi"],
    tips: ["Tetap jaga boundaries", "Pikirkan long term juga"],
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
