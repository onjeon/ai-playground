// Tipe Kamu Saat ke Mall
// Tes ini mengungkap kepribadianmu berdasarkan gaya ke mall!

export const questions = [
  {
    id: 1,
    question: "Tujuan utama kamu ke mall biasanya?",
    options: [
      { text: "Belanja sesuai list yang udah disiapkan", type: "A" },
      { text: "Window shopping, lihat-lihat aja", type: "B" },
      { text: "Hangout dan nongkrong sama teman", type: "C" },
      { text: "Makan-makan di food court atau restoran", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Berapa lama biasanya kamu di mall?",
    options: [
      { text: "1-2 jam, sesuai keperluan", type: "A" },
      { text: "3-4 jam, explore pelan-pelan", type: "B" },
      { text: "Setengah hari atau lebih", type: "C" },
      { text: "Tergantung mood, bisa cepat bisa lama", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Area mall yang paling sering kamu kunjungi?",
    options: [
      { text: "Department store atau toko kebutuhan", type: "A" },
      { text: "Toko fashion dan aksesori", type: "B" },
      { text: "Kafe dan area nongkrong", type: "C" },
      { text: "Food court dan area kuliner", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau ada sale besar-besaran, kamu...",
    options: [
      { text: "Tetap beli yang dibutuhkan aja", type: "A" },
      { text: "Serbu! Kapan lagi dapat diskon gede", type: "B" },
      { text: "Lihat-lihat dulu, kalau cocok baru beli", type: "C" },
      { text: "Skip, males desak-desakan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Soal parkir di mall, kamu...",
    options: [
      { text: "Cari yang deket entrance, hemat waktu", type: "A" },
      { text: "Muter-muter cari spot yang nyaman", type: "B" },
      { text: "Parkir di basement, yang penting aman", type: "C" },
      { text: "Naik transportasi umum atau ojol aja", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Weekend di mall, ekspektasimu?",
    options: [
      { text: "Datang pagi biar gak rame", type: "A" },
      { text: "Sore aja, lebih santai", type: "B" },
      { text: "Malam, sekalian dinner", type: "C" },
      { text: "Kapan aja, rame juga gapapa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Makan di mall, pilihanmu?",
    options: [
      { text: "Food court, cepat dan banyak pilihan", type: "A" },
      { text: "Restoran yang lagi viral", type: "B" },
      { text: "Kafe buat ngobrol lama", type: "C" },
      { text: "Fast food, udah pasti enak", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau ke mall sendirian, aktivitasmu?",
    options: [
      { text: "Belanja cepat, langsung pulang", type: "A" },
      { text: "Me time, explore santai", type: "B" },
      { text: "Agak awkward, prefer sama teman", type: "C" },
      { text: "Makan enak sendirian, self-treat", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Soal toilet mall, kamu...",
    options: [
      { text: "Cari yang paling deket aja", type: "A" },
      { text: "Tau toilet terbersih di mana", type: "B" },
      { text: "Di restoran atau kafe aja lebih nyaman", type: "C" },
      { text: "Tahan sampai pulang kalau bisa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Belanja impulsif di mall, seberapa sering?",
    options: [
      { text: "Jarang, selalu sesuai rencana", type: "A" },
      { text: "Kadang-kadang, kalau nemu yang bagus", type: "B" },
      { text: "Sering, mall itu tempat healing", type: "C" },
      { text: "Hampir selalu, self-control lemah", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Lihat orang berfoto OOTD di mall, reaksimu?",
    options: [
      { text: "Biasa aja, gak terlalu peduli", type: "A" },
      { text: "Inspire, pengen foto juga", type: "B" },
      { text: "Ikutan foto, sekalian content", type: "C" },
      { text: "Senyum aja, tiap orang beda-beda", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mall yang ideal menurutmu?",
    options: [
      { text: "Lengkap dan praktis, semua ada", type: "A" },
      { text: "Aesthetic dan Instagramable", type: "B" },
      { text: "Banyak tempat nongkrong nyaman", type: "C" },
      { text: "Banyak pilihan kuliner enak", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Shopper Efisien",
    emoji: "🎯",
    description: "Kamu adalah shopper yang punya tujuan jelas! Mall adalah tempat untuk menyelesaikan keperluan, bukan tempat buang waktu. Efisiensi adalah kunci hidupmu.",
    traits: ["Efisien", "Terencana", "Praktis", "Fokus"],
    strengths: ["Hemat waktu", "Tidak boros", "Produktif"],
    weaknesses: ["Kurang spontan", "Miss hidden gems di mall"],
    tips: ["Sesekali explore tanpa agenda", "Mall juga bisa jadi tempat refreshing"],
  },
  B: {
    type: "B",
    title: "Explorer Trendy",
    emoji: "👗",
    description: "Mall adalah playground-mu! Kamu suka explore, update tren terbaru, dan menikmati proses window shopping. Kamu selalu tau mana yang lagi hits.",
    traits: ["Trendy", "Curious", "Up-to-date", "Stylish"],
    strengths: ["Selera bagus", "Tau barang berkualitas", "Fashion-forward"],
    weaknesses: ["Bisa impulsif", "Tergoda diskon terus"],
    tips: ["Set budget sebelum ke mall", "Bedakan antara want dan need"],
  },
  C: {
    type: "C",
    title: "Social Mall-goer",
    emoji: "☕",
    description: "Mall adalah tempat hangout favoritmu! Bukan soal belanja, tapi soal quality time sama teman. Kafe dan spot nongkrong adalah destinasi utamamu.",
    traits: ["Sosial", "Hangout-lover", "Relaxed", "Friend-oriented"],
    strengths: ["Networking bagus", "Tau tempat nongkrong terbaik", "Fun to be around"],
    weaknesses: ["Sering lupa tujuan awal", "Bisa boros di kafe"],
    tips: ["Sesekali belanja juga perlu", "Balance antara hangout dan produktif"],
  },
  D: {
    type: "D",
    title: "Food Hunter Mall",
    emoji: "🍜",
    description: "Mall = surga kuliner! Kamu datang untuk makan, sisanya bonus. Kamu tau semua hidden gems kuliner di setiap mall yang pernah dikunjungi.",
    traits: ["Foodie", "Explorer kuliner", "Easygoing", "Hedonist sehat"],
    strengths: ["Tau tempat makan enak", "Selera kuliner bagus", "Bisa jadi guide kuliner"],
    weaknesses: ["Bisa over-eating", "Budget sering jebol untuk makan"],
    tips: ["Balance antara makan dan aktivitas lain", "Coba masak sendiri juga sesekali"],
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
