// Seberapa Tinggi Empati Kamu?
// Tes ini mengukur kemampuan empati dalam kehidupan sehari-hari!

export const questions = [
  {
    id: 1,
    question: "Saat teman sedih, reaksi naturalmu?",
    options: [
      { text: "Ikut merasakan kesedihannya, hampir nangis juga", type: "A" },
      { text: "Simpatik dan ingin membantu", type: "B" },
      { text: "Kasihan tapi tidak terlalu terpengaruh", type: "C" },
      { text: "Tidak terlalu merasakan apa-apa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Melihat orang asing menangis di publik, kamu...",
    options: [
      { text: "Ingin menghampiri dan menenangkan", type: "A" },
      { text: "Merasa tidak nyaman, berharap dia baik-baik saja", type: "B" },
      { text: "Lihat sebentar lalu lanjut aktivitas", type: "C" },
      { text: "Tidak terlalu peduli, bukan urusanku", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat mendengar berita buruk (bencana, kecelakaan), kamu...",
    options: [
      { text: "Sangat terdampak, kepikiran lama", type: "A" },
      { text: "Sedih dan berharap bisa membantu", type: "B" },
      { text: "Prihatin sebentar lalu move on", type: "C" },
      { text: "Tidak terlalu terpengaruh", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Dalam percakapan, seberapa baik kamu membaca perasaan orang?",
    options: [
      { text: "Sangat baik, bisa tau walau tidak dibilang", type: "A" },
      { text: "Cukup baik, biasanya bisa sense", type: "B" },
      { text: "Perlu dikasih tau secara eksplisit", type: "C" },
      { text: "Sering tidak sadar perasaan orang", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Menonton film atau baca buku yang emosional, kamu...",
    options: [
      { text: "Sering nangis dan sangat terbawa", type: "A" },
      { text: "Tersentuh tapi bisa kontrol", type: "B" },
      { text: "Jarang terbawa emosi", type: "C" },
      { text: "Tidak pernah terbawa, 'ini cuma fiksi'", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat orang curhat, kamu biasanya...",
    options: [
      { text: "Fokus penuh, benar-benar merasakan", type: "A" },
      { text: "Dengerin dengan simpatik", type: "B" },
      { text: "Dengerin tapi mikirin solusi", type: "C" },
      { text: "Agak tidak sabar, ingin cepat selesai", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Melihat hewan terlantar atau terluka, reaksimu?",
    options: [
      { text: "Sangat sedih, ingin langsung menolong", type: "A" },
      { text: "Kasihan dan berharap ada yang menolong", type: "B" },
      { text: "Sedikit tidak nyaman", type: "C" },
      { text: "Tidak terlalu terpengaruh", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Apakah kamu sering menyerap energi/mood orang di sekitar?",
    options: [
      { text: "Ya, sangat! Kalau mereka sedih, aku ikut sedih", type: "A" },
      { text: "Kadang-kadang, tergantung situasi", type: "B" },
      { text: "Jarang, mood-ku relatif stabil", type: "C" },
      { text: "Tidak pernah, energi orang tidak mempengaruhiku", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kemampuanmu memahami perspektif orang yang berbeda pendapat?",
    options: [
      { text: "Sangat bisa, walau tidak setuju", type: "A" },
      { text: "Cukup bisa kalau berusaha", type: "B" },
      { text: "Sulit kalau sangat berbeda", type: "C" },
      { text: "Susah, lebih fokus ke pendapatku", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat orang berbuat salah padamu, kamu...",
    options: [
      { text: "Coba memahami kenapa mereka melakukannya", type: "A" },
      { text: "Marah tapi akhirnya bisa memaafkan", type: "B" },
      { text: "Fokus ke kesalahan mereka", type: "C" },
      { text: "Sulit memaafkan, tidak peduli alasannya", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Apakah kamu sering merasa kewalahan dengan emosi orang lain?",
    options: [
      { text: "Ya, sering merasa exhausted karenanya", type: "A" },
      { text: "Kadang-kadang", type: "B" },
      { text: "Jarang", type: "C" },
      { text: "Tidak pernah", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Profesi yang melibatkan membantu orang (dokter, counselor), menurutmu...",
    options: [
      { text: "Sangat menarik, sesuai passion", type: "A" },
      { text: "Mulia, tapi mungkin berat secara emosional", type: "B" },
      { text: "Tidak tertarik, bukan bidangku", type: "C" },
      { text: "Tidak cocok untukku sama sekali", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Empath Tingkat Tinggi",
    emoji: "💝",
    description: "Kamu sangat empatik, hampir bisa merasakan apa yang dirasakan orang lain! Ini adalah gift yang luar biasa, tapi perlu dijaga agar tidak kewalahan.",
    traits: ["Sangat empatik", "Sensitif", "Caring", "Intuitive"],
    strengths: ["Koneksi mendalam", "Bisa membantu orang dengan baik", "Trusted confidant"],
    weaknesses: ["Mudah kelelahan emosional", "Sulit set boundaries", "Absorb negativity"],
    tips: ["Belajar self-care dan boundaries", "Tidak harus menanggung beban semua orang"],
  },
  B: {
    type: "B",
    title: "Empath Seimbang",
    emoji: "💛",
    description: "Tingkat empatimu sehat dan seimbang! Kamu bisa merasakan dan memahami orang lain tanpa kehilangan diri sendiri. Balance yang ideal!",
    traits: ["Balanced empathy", "Simpatik", "Self-aware", "Caring tapi stable"],
    strengths: ["Bisa membantu tanpa burnout", "Healthy relationships", "Good listener"],
    weaknesses: ["Kadang bisa lebih deep", "Sesekali kurang sensitif"],
    tips: ["Maintain keseimbangan ini", "Terus asah emotional intelligence"],
  },
  C: {
    type: "C",
    title: "Empati Kognitif",
    emoji: "🧠",
    description: "Kamu bisa memahami perasaan orang secara logis tapi tidak selalu merasakan secara emosional. Empatimu lebih ke cognitive understanding.",
    traits: ["Rational empathy", "Logical", "Detached", "Problem-solver"],
    strengths: ["Bisa memberi saran objektif", "Tidak terbawa emosi", "Stable"],
    weaknesses: ["Bisa terkesan dingin", "Orang merasa tidak dimengerti"],
    tips: ["Coba connect lebih emosional", "Kadang orang butuh dirasakan, bukan diselesaikan"],
  },
  D: {
    type: "D",
    title: "Empati Rendah",
    emoji: "🔵",
    description: "Empati bukan strong suit-mu. Kamu cenderung fokus ke diri sendiri dan kurang sensitif terhadap perasaan orang lain. Ini area yang bisa dikembangkan.",
    traits: ["Low empathy", "Self-focused", "Detached", "Pragmatic"],
    strengths: ["Tidak mudah terbawa drama", "Objektif", "Self-sufficient"],
    weaknesses: ["Hubungan bisa terganggu", "Terkesan tidak peduli", "Miss emotional cues"],
    tips: ["Latih active listening", "Coba bayangkan di posisi orang lain", "Empati bisa dipelajari"],
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
