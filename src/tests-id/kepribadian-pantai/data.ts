// Kepribadian dari Gaya di Pantai
// Tes ini mengungkap kepribadianmu dari cara kamu menikmati pantai!

export const questions = [
  {
    id: 1,
    question: "Aktivitas utama saat di pantai...",
    options: [
      { text: "Berenang dan main air sepuasnya", type: "A" },
      { text: "Rebahan di pasir sambil berjemur", type: "B" },
      { text: "Foto-foto untuk konten sosmed", type: "C" },
      { text: "Jalan-jalan menyusuri pantai", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Waktu favorit ke pantai...",
    options: [
      { text: "Pagi, sebelum panas dan ramai", type: "A" },
      { text: "Siang, maksimalkan waktu di pantai", type: "B" },
      { text: "Sore, sunset hunting", type: "C" },
      { text: "Kapanpun, yang penting sampai", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Barang wajib bawa ke pantai...",
    options: [
      { text: "Sunblock dan topi, protection first", type: "A" },
      { text: "Kamera dan outfit ganti, dokumentasi!", type: "B" },
      { text: "Makanan dan minuman, piknik vibes", type: "C" },
      { text: "Minimalis, HP dan dompet cukup", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat ombak besar...",
    options: [
      { text: "Challenge accepted! Main di ombak seru", type: "A" },
      { text: "Stay di pinggir, aman tapi tetap basah", type: "B" },
      { text: "No thanks, dari jauh aja lihatnya", type: "C" },
      { text: "Foto/video, moment bagus untuk konten", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Spot favorit di pantai...",
    options: [
      { text: "Di air! Berenang atau snorkeling", type: "A" },
      { text: "Di bawah payung atau pohon, teduh", type: "B" },
      { text: "Cafe atau warung pinggir pantai", type: "C" },
      { text: "Exploring, batu karang atau hidden spot", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Outfit ke pantai...",
    options: [
      { text: "Swimwear ready, langsung nyebur", type: "A" },
      { text: "Casual beach wear, nyaman dan stylish", type: "B" },
      { text: "Multiple outfits untuk ganti-ganti foto", type: "C" },
      { text: "Apa adanya, yang penting nyaman", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau pantai penuh dan ramai...",
    options: [
      { text: "Cari spot yang lebih sepi", type: "A" },
      { text: "Tetap stay, sudah terlanjur datang", type: "B" },
      { text: "Enjoy kerameannya, makin seru", type: "C" },
      { text: "Pindah pantai lain yang lebih sepi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Makan di pantai biasanya...",
    options: [
      { text: "Seafood! Fresh dari laut", type: "A" },
      { text: "Bawa bekal sendiri, piknik", type: "B" },
      { text: "Apapun yang tersedia di warung sekitar", type: "C" },
      { text: "Cari resto yang proper, hygiene penting", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Setelah main di pantai...",
    options: [
      { text: "Langsung bilas, tidak tahan lengket", type: "A" },
      { text: "Santai dulu, menikmati angin pantai", type: "B" },
      { text: "Edit dan upload foto dulu", type: "C" },
      { text: "Explore sekitar pantai, ada apa lagi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pantai ideal menurutmu...",
    options: [
      { text: "Bersih, ombak bagus untuk berenang", type: "A" },
      { text: "Sepi, tenang, dan damai", type: "B" },
      { text: "Instagramable dengan background bagus", type: "C" },
      { text: "Ada aktivitas seru, watersport dll", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ke pantai biasanya sama siapa...",
    options: [
      { text: "Rombongan teman, makin rame makin seru", type: "A" },
      { text: "Pasangan, romantic getaway", type: "B" },
      { text: "Keluarga, quality time together", type: "C" },
      { text: "Solo atau small group, lebih fleksibel", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pantai buat kamu adalah...",
    options: [
      { text: "Tempat healing dan refresh", type: "A" },
      { text: "Adventure dan exploration", type: "B" },
      { text: "Background untuk content", type: "C" },
      { text: "Koneksi dengan alam", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Beach Adventurer",
    emoji: "🏄",
    description: "Kamu adalah petualang pantai sejati! Berenang, main ombak, dan aktivitas air adalah tujuan utamamu ke pantai. Tidak sah ke pantai kalau tidak basah-basahan!",
    traits: ["Adventurous", "Energetic", "Water lover", "Active"],
    strengths: ["Fit dan aktif", "Maximize experience", "Fun to be around"],
    weaknesses: ["Kadang terlalu nekat", "Lupa safety", "Capek sendiri"],
    tips: ["Tetap perhatikan safety", "Istirahat juga penting"],
  },
  B: {
    type: "B",
    title: "Beach Relaxer",
    emoji: "🌴",
    description: "Kamu ke pantai untuk relax dan healing! Rebahan di pasir, dengar suara ombak, dan menikmati ketenangan adalah definisi liburan pantai yang sempurna.",
    traits: ["Relaxed", "Peace-seeker", "Contemplative", "Calm"],
    strengths: ["Stress-free vacation", "Appreciate nature", "Recharge effectively"],
    weaknesses: ["Bisa miss activities seru", "Terlalu passive"],
    tips: ["Sesekali coba aktivitas baru", "Balance rest dan activity"],
  },
  C: {
    type: "C",
    title: "Beach Content Creator",
    emoji: "📸",
    description: "Pantai adalah studio outdoor-mu! Setiap sudut adalah spot foto potential dan setiap moment harus didokumentasikan. Aesthetic dan content adalah prioritas.",
    traits: ["Creative", "Visual-oriented", "Social media savvy", "Stylish"],
    strengths: ["Great documentation", "Eye for beauty", "Memorable photos"],
    weaknesses: ["Miss living in the moment", "Too focused on content"],
    tips: ["Put phone down kadang", "Experience > documentation"],
  },
  D: {
    type: "D",
    title: "Beach Explorer",
    emoji: "🐚",
    description: "Kamu adalah explorer yang suka menjelajahi setiap sudut pantai! Hidden spots, batu karang, dan keunikan lokal adalah yang kamu cari. Pantai mainstream bukan style-mu.",
    traits: ["Curious", "Explorer", "Nature lover", "Independent"],
    strengths: ["Discover hidden gems", "Unique experiences", "Appreciate details"],
    weaknesses: ["Kadang terlalu jauh exploring", "Miss group activities"],
    tips: ["Share discoveries dengan others", "Safety tetap nomor satu"],
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
