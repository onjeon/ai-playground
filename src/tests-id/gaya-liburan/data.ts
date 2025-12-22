// Gaya Liburan Kamu
// Tes ini mengungkap bagaimana style kamu dalam berlibur!

export const questions = [
  {
    id: 1,
    question: "Saat merencanakan liburan, kamu biasanya...",
    options: [
      { text: "Riset lengkap: itinerary detail, booking jauh hari", type: "A" },
      { text: "Pilih destinasi, sisanya spontan di tempat", type: "B" },
      { text: "Ikut-ikut aja kalau diajak teman/keluarga", type: "C" },
      { text: "Cari paket tour lengkap biar praktis", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Budget liburan kamu biasanya...",
    options: [
      { text: "Dihitung detail, ada spreadsheet-nya", type: "A" },
      { text: "Ada estimasi kasar, fleksibel kalau ada yang menarik", type: "B" },
      { text: "YOLO, liburan ya nikmati aja", type: "C" },
      { text: "Nabung dari jauh-jauh hari, khusus untuk trip ini", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Destinasi liburan ideal kamu...",
    options: [
      { text: "Tempat hits yang lagi viral di TikTok/IG", type: "A" },
      { text: "Hidden gem yang belum banyak orang tau", type: "B" },
      { text: "Yang penting ada pantai dan bisa santai", type: "C" },
      { text: "Kota besar dengan mall dan kuliner enak", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat liburan, kamu bangun pagi untuk...",
    options: [
      { text: "Kejar sunrise, maksimalkan waktu!", type: "A" },
      { text: "Sarapan santai, mulai aktivitas siang", type: "B" },
      { text: "Tidur sampai check-out time kalau bisa", type: "C" },
      { text: "Tergantung mood dan cuaca", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Packing untuk liburan...",
    options: [
      { text: "Checklist lengkap, semua ada cadangannya", type: "A" },
      { text: "Basic aja, beli di sana kalau kurang", type: "B" },
      { text: "Overpack, bawa yang tidak perlu juga", type: "C" },
      { text: "Last minute packing, pasti ada yang ketinggalan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Foto saat liburan...",
    options: [
      { text: "Setiap spot harus difoto, feed IG penting!", type: "A" },
      { text: "Foto seperlunya, lebih nikmati momen", type: "B" },
      { text: "Selfie-selfie aja, yang penting bukti pernah ke sana", type: "C" },
      { text: "Jarang foto, lebih suka video atau live aja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kuliner saat liburan...",
    options: [
      { text: "Harus coba makanan lokal yang terkenal", type: "A" },
      { text: "Cari warung pinggir jalan yang authentic", type: "B" },
      { text: "Makan di tempat yang sudah familiar (McD, KFC)", type: "C" },
      { text: "Yang penting halal dan murah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Transportasi liburan pilihan kamu...",
    options: [
      { text: "Sewa mobil/motor biar bebas explore", type: "A" },
      { text: "Ojol dan transportasi umum, lebih hemat", type: "B" },
      { text: "Jalan kaki kalau bisa, sekalian olahraga", type: "C" },
      { text: "Tour dengan bus, tinggal duduk manis", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat liburan tidak sesuai ekspektasi...",
    options: [
      { text: "Improvisasi, cari alternatif yang lebih seru", type: "A" },
      { text: "Komplain dan review jelek di Google Maps", type: "B" },
      { text: "Yasudah, nikmati aja apa adanya", type: "C" },
      { text: "Kapok, tidak mau ke sana lagi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Oleh-oleh saat pulang liburan...",
    options: [
      { text: "Beli banyak untuk semua orang di rumah/kantor", type: "A" },
      { text: "Beli yang unik dan khas daerah itu aja", type: "B" },
      { text: "Beli untuk diri sendiri doang", type: "C" },
      { text: "Males beli oleh-oleh, ribet", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Planner Perfeksionis",
    emoji: "📋",
    description: "Kamu adalah traveler yang super terorganisir! Setiap detail liburan sudah direncanakan dengan matang. Itinerary rapi, budget terkontrol, dan tidak ada yang terlewat.",
    traits: ["Terorganisir", "Detail-oriented", "Prepared", "Efisien"],
    strengths: ["Liburan lancar tanpa drama", "Budget terkontrol", "Tidak ketinggalan tempat penting"],
    weaknesses: ["Kurang spontan", "Stress kalau rencana gagal"],
    tips: ["Sisakan ruang untuk spontanitas", "Kadang kejutan terbaik tidak direncanakan"],
  },
  B: {
    type: "B",
    title: "Si Petualang Spontan",
    emoji: "🎒",
    description: "Kamu suka liburan yang spontan dan fleksibel! Rencana kasar ada, tapi terbuka untuk adventure yang tidak terduga. Hidupmu adalah perjalanan!",
    traits: ["Spontan", "Adventurous", "Fleksibel", "Open-minded"],
    strengths: ["Discover hidden gems", "Pengalaman unik", "Tidak gampang stress"],
    weaknesses: ["Kadang tidak efisien", "Bisa over budget"],
    tips: ["Tetap riset minimal untuk safety", "Backup plan tidak ada salahnya"],
  },
  C: {
    type: "C",
    title: "Si Santai Healing",
    emoji: "🏖️",
    description: "Buat kamu, liburan adalah waktu untuk healing dan istirahat total! Tidak perlu itinerary padat, yang penting bisa relax dan recharge energi.",
    traits: ["Relaxed", "Easy-going", "Comfort-seeker", "Low-maintenance"],
    strengths: ["Benar-benar istirahat", "Tidak gampang capek", "Enjoy the moment"],
    weaknesses: ["Bisa kurang produktif", "Miss out beberapa spot bagus"],
    tips: ["Sesekali coba aktivitas baru", "Balance antara santai dan explore"],
  },
  D: {
    type: "D",
    title: "Si Praktis Tour Package",
    emoji: "🚌",
    description: "Kamu suka liburan yang praktis dan tinggal terima beres! Paket tour adalah pilihan favorit karena tidak perlu pusing mikir itinerary.",
    traits: ["Praktis", "Effortless", "Group-oriented", "Comfortable"],
    strengths: ["Tidak perlu ribet planning", "Ada guide yang bantu", "Aman dan terstruktur"],
    weaknesses: ["Kurang fleksibel", "Kadang terlalu terburu-buru"],
    tips: ["Sesekali coba solo trip", "Customize paket sesuai keinginan"],
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
