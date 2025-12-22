// Gaya Healing Kamu
// Tes ini mengungkap cara kamu me-recharge dan healing!

export const questions = [
  {
    id: 1,
    question: "Weekend free, aktivitas healing pilihanmu?",
    options: [
      { text: "Keluar rumah, jalan-jalan ke tempat baru", type: "A" },
      { text: "Di rumah, rebahan dan nonton series", type: "B" },
      { text: "Kumpul sama teman-teman", type: "C" },
      { text: "Me time produktif: baca, journaling, hobi", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Setelah minggu yang melelahkan, kamu butuh...",
    options: [
      { text: "Change of scenery, pergi ke suatu tempat", type: "A" },
      { text: "Istirahat total, tidur panjang", type: "B" },
      { text: "Quality time sama orang tersayang", type: "C" },
      { text: "Waktu sendiri untuk refleksi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara efektif menghilangkan stress bagimu?",
    options: [
      { text: "Traveling atau outdoor activity", type: "A" },
      { text: "Makan enak dan tidur cukup", type: "B" },
      { text: "Curhat dan ketawa sama teman", type: "C" },
      { text: "Meditasi atau aktivitas mindful", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Budget healing biasanya kemana?",
    options: [
      { text: "Tiket dan akomodasi traveling", type: "A" },
      { text: "Makanan enak dan subscription streaming", type: "B" },
      { text: "Hangout dan treating teman", type: "C" },
      { text: "Buku, alat hobi, atau self-development", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Healing paling cepat yang pernah kamu rasakan?",
    options: [
      { text: "Lihat pemandangan indah", type: "A" },
      { text: "Makan comfort food favorit", type: "B" },
      { text: "Pelukan dari orang tersayang", type: "C" },
      { text: "Menyelesaikan sesuatu yang membanggakan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Musik yang bikin kamu healing?",
    options: [
      { text: "Upbeat yang bikin semangat", type: "A" },
      { text: "Lo-fi atau musik santai", type: "B" },
      { text: "Lagu-lagu nostalgia dengan kenangan", type: "C" },
      { text: "Instrumental atau nature sounds", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Setelah putus cinta atau kecewa berat, kamu...",
    options: [
      { text: "Distract diri dengan aktivitas baru", type: "A" },
      { text: "Healing time sendiri, proses perasaan", type: "B" },
      { text: "Cerita dan cari support dari teman", type: "C" },
      { text: "Introspeksi dan belajar dari pengalaman", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Social media saat butuh healing?",
    options: [
      { text: "Upload foto healing trip", type: "A" },
      { text: "Detox, jauh dari sosmed", type: "B" },
      { text: "Tetap aktif, chat sama teman", type: "C" },
      { text: "Scroll inspirational content", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Comfort food saat butuh healing?",
    options: [
      { text: "Makanan baru yang belum pernah dicoba", type: "A" },
      { text: "Makanan favorit yang familiar", type: "B" },
      { text: "Makan bareng orang-orang tersayang", type: "C" },
      { text: "Masakan sendiri, proses memasaknya healing", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Berapa lama biasanya kamu butuh untuk healing?",
    options: [
      { text: "Cepat, begitu distract langsung baik", type: "A" },
      { text: "Tergantung masalahnya, bisa lama", type: "B" },
      { text: "Cepat kalau ada support system", type: "C" },
      { text: "Butuh waktu untuk proses dengan benar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tempat healing favoritmu?",
    options: [
      { text: "Tempat wisata atau alam terbuka", type: "A" },
      { text: "Kamar atau rumah sendiri", type: "B" },
      { text: "Tempat nongkrong favorit", type: "C" },
      { text: "Tempat tenang: perpustakaan, taman, kafe sepi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Quote healing yang paling relate sama kamu?",
    options: [
      { text: "'Life is short, travel often'", type: "A" },
      { text: "'Rest is productive too'", type: "B" },
      { text: "'Friends are the family we choose'", type: "C" },
      { text: "'The only way out is through'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Healing Traveler",
    emoji: "✈️",
    description: "Healing kamu adalah eksplorasi dan adventure! Perubahan pemandangan dan pengalaman baru adalah obat terbaik untukmu. Kamu recharge dengan keluar dari rutinitas.",
    traits: ["Adventurous", "Active healer", "Experience-seeker", "Ekstrovert healing"],
    strengths: ["Cepat move on", "Punya banyak pengalaman", "Aktif dan energik"],
    weaknesses: ["Bisa jadi escapism", "Kurang proses emosi mendalam"],
    tips: ["Sesekali proses di tempat juga", "Healing dalam diri sendiri juga penting"],
  },
  B: {
    type: "B",
    title: "Cozy Homebody",
    emoji: "🏠",
    description: "Rumah adalah sanctuary-mu! Kamu healing dengan istirahat, comfort food, dan me time di zona nyaman. Recharge dengan memperlambat tempo dan self-care.",
    traits: ["Introvert healer", "Comfort-seeker", "Rest-oriented", "Home-loving"],
    strengths: ["Low cost healing", "Menghargai istirahat", "Self-sufficient"],
    weaknesses: ["Bisa jadi isolasi", "Kurang stimulasi baru"],
    tips: ["Sesekali keluar dari comfort zone", "Balance istirahat dengan aktivitas"],
  },
  C: {
    type: "C",
    title: "Social Healer",
    emoji: "👥",
    description: "Orang-orang adalah obatmu! Kamu healing dengan koneksi, curhat, dan quality time sama orang tersayang. Support system adalah kunci kesehatan mentalmu.",
    traits: ["People-oriented", "Social butterfly", "Connection-seeker", "Ekstrovert"],
    strengths: ["Strong support system", "Tidak sendirian dalam masalah", "Good communicator"],
    weaknesses: ["Bergantung pada orang lain", "Susah kalau sendiri"],
    tips: ["Belajar juga nyaman dengan diri sendiri", "Self-validation juga penting"],
  },
  D: {
    type: "D",
    title: "Mindful Processor",
    emoji: "🧘",
    description: "Kamu healing dengan introspeksi dan proses yang mendalam! Journaling, meditasi, atau aktivitas mindful adalah caramu memproses emosi dengan sehat.",
    traits: ["Introspektif", "Thoughtful", "Self-aware", "Growth-oriented"],
    strengths: ["Proses emosi dengan baik", "Belajar dari pengalaman", "Emotional maturity"],
    weaknesses: ["Bisa terlalu dalam dan lama", "Overthinking"],
    tips: ["Kadang action juga membantu", "Tidak semua harus dianalisis"],
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
