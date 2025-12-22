// Tipe Kamu Saat Nongkrong di Warkop
// Tes ini mengungkap kepribadianmu berdasarkan gaya nongkrong di warkop!

export const questions = [
  {
    id: 1,
    question: "Alasan utama kamu ke warkop?",
    options: [
      { text: "Butuh kopi untuk fokus kerja/belajar", type: "A" },
      { text: "Nongkrong sama teman-teman", type: "B" },
      { text: "Me time, nikmati suasana", type: "C" },
      { text: "WiFi gratis dan colokan!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pesanan andalan di warkop?",
    options: [
      { text: "Kopi hitam/tubruk, biar nendang", type: "A" },
      { text: "Kopi susu/es kopi, enak dan seger", type: "B" },
      { text: "Non-kopi (teh, coklat, jus)", type: "C" },
      { text: "Ganti-ganti, explore menu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Snack pendamping di warkop?",
    options: [
      { text: "Gorengan atau roti bakar", type: "A" },
      { text: "Indomie telur atau nasi goreng", type: "B" },
      { text: "Gak pesen snack, kopi aja", type: "C" },
      { text: "Apa aja yang ada, yang penting makan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Jam berapa biasanya ke warkop?",
    options: [
      { text: "Pagi, butuh boost caffeine", type: "A" },
      { text: "Sore/maghrib, setelah aktivitas", type: "B" },
      { text: "Malam, begadang produktif", type: "C" },
      { text: "Kapan aja ada waktu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Berapa lama biasanya nongkrong di warkop?",
    options: [
      { text: "30 menit - 1 jam, quick stop", type: "A" },
      { text: "2-3 jam, ngobrol santai", type: "B" },
      { text: "4 jam atau lebih, kayak rumah kedua", type: "C" },
      { text: "Tergantung mood dan kebutuhan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Di warkop, kamu duduk di mana?",
    options: [
      { text: "Dekat colokan, penting untuk charge", type: "A" },
      { text: "Meja besar, biar muat banyak teman", type: "B" },
      { text: "Pojok/sudut, lebih private", type: "C" },
      { text: "Di luar/teras, bisa ngerokok atau lihat jalanan", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Aktivitas utama saat di warkop?",
    options: [
      { text: "Kerja/belajar dengan laptop", type: "A" },
      { text: "Ngobrol dan ketawa sama teman", type: "B" },
      { text: "Scrolling HP atau main game", type: "C" },
      { text: "Nonton pertandingan bola di TV", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tentang WiFi warkop, kamu...",
    options: [
      { text: "Selalu tanya password, penting banget", type: "A" },
      { text: "Pakai kalau butuh, kadang gak", type: "B" },
      { text: "Gak pake, mending kuota sendiri", type: "C" },
      { text: "Cari warkop yang WiFi-nya kencang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau warkop langganan penuh, kamu...",
    options: [
      { text: "Cari warkop lain yang kosong", type: "A" },
      { text: "Nunggu sampai ada meja kosong", type: "B" },
      { text: "Gabung meja sama orang lain", type: "C" },
      { text: "Beli takeaway, minum di tempat lain", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Warkop vs coffee shop modern?",
    options: [
      { text: "Warkop, lebih affordable dan authentic", type: "A" },
      { text: "Coffee shop, lebih nyaman dan estetik", type: "B" },
      { text: "Dua-duanya oke, tergantung mood", type: "C" },
      { text: "Yang penting ada kopi dan tempat duduk", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Hubunganmu dengan owner/penjaga warkop?",
    options: [
      { text: "Kenal baik, sering ngobrol", type: "A" },
      { text: "Tau muka tapi gak ngobrol", type: "B" },
      { text: "Gak peduli, yang penting dilayani", type: "C" },
      { text: "Kadang nitip barang atau minta charge HP", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Warkop buat kamu adalah...",
    options: [
      { text: "Kantor kedua yang lebih santai", type: "A" },
      { text: "Tempat kumpul dan healing", type: "B" },
      { text: "Sumber caffeine yang murah", type: "C" },
      { text: "Bagian dari gaya hidup Indonesia", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pekerja Warkop",
    emoji: "💼",
    description: "Warkop adalah kantor keduamu! Kamu produktif dengan background suara warkop dan aromanya kopi. Caffeine adalah fuel untuk kreativitas dan fokusmu.",
    traits: ["Produktif", "Focused", "Caffeinated", "Workaholic positif"],
    strengths: ["Bisa kerja dimana aja", "Efisien", "Self-motivated"],
    weaknesses: ["Kadang lupa istirahat", "Terlalu bergantung kopi"],
    tips: ["Sesekali nongkrong tanpa kerja", "Kurangi kopi kalau udah malam"],
  },
  B: {
    type: "B",
    title: "Socialite Warkop",
    emoji: "👋",
    description: "Warkop adalah markas sosialmu! Tempat ketemu teman, update gosip, dan bonding. Kopi cuma alasan, yang penting kebersamaan.",
    traits: ["Sosial", "Friendly", "Connector", "Hangout lover"],
    strengths: ["Networking luas", "Banyak teman", "Good listener/talker"],
    weaknesses: ["Bisa terlalu lama nongkrong", "Kadang kurang produktif"],
    tips: ["Balance antara sosial dan produktif", "Sesekali me-time juga penting"],
  },
  C: {
    type: "C",
    title: "Solo Warkop Enjoyer",
    emoji: "🎧",
    description: "Warkop adalah sanctuary-mu! Tempat escape dari keramaian, nikmatin kopi sendirian, dan recharge. Introvert paradise.",
    traits: ["Introvert", "Independent", "Self-reflective", "Peaceful"],
    strengths: ["Comfortable alone", "Deep thinker", "Low maintenance"],
    weaknesses: ["Kadang terlalu isolated", "Kurang networking"],
    tips: ["Sesekali ajak teman", "Interaksi sosial juga dibutuhkan"],
  },
  D: {
    type: "D",
    title: "Warkop Adventurer",
    emoji: "🗺️",
    description: "Kamu explorer warkop! Suka coba tempat baru, menu baru, dan pengalaman baru. Warkop adalah bagian dari petualangan kuliner dan sosialmu.",
    traits: ["Adventurous", "Curious", "Flexible", "Open-minded"],
    strengths: ["Tau banyak tempat bagus", "Tidak membosankan", "Adaptif"],
    weaknesses: ["Susah settle di satu tempat", "Kadang kurang loyal"],
    tips: ["Punya satu tempat langganan juga oke", "Tidak semua yang baru itu lebih baik"],
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
