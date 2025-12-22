// Kepribadian dari Gaya di Mall
// Tes ini mengungkap kepribadianmu dari cara kamu menghabiskan waktu di mall!

export const questions = [
  {
    id: 1,
    question: "Tujuan utama ke mall biasanya...",
    options: [
      { text: "Belanja, sudah ada list yang harus dibeli", type: "A" },
      { text: "Jalan-jalan, window shopping santai", type: "B" },
      { text: "Hangout sama teman, mall cuma tempat ketemu", type: "C" },
      { text: "Nonton atau makan, entertainment utama", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Durasi rata-rata di mall...",
    options: [
      { text: "Cepat, 1-2 jam maksimal, langsung cabut", type: "A" },
      { text: "Sedang, 3-4 jam, explore beberapa tempat", type: "B" },
      { text: "Lama, bisa seharian kalau nyaman", type: "C" },
      { text: "Tergantung agenda, bisa cepat bisa lama", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Area favorit di mall...",
    options: [
      { text: "Department store dan brand fashion", type: "A" },
      { text: "Food court atau restoran", type: "B" },
      { text: "Bioskop dan area entertainment", type: "C" },
      { text: "Semua area, tergantung mood", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat ada sale besar-besaran...",
    options: [
      { text: "Datang pagi-pagi, siap berburu", type: "A" },
      { text: "Cek dulu dari jauh, kalau menarik baru masuk", type: "B" },
      { text: "Skip, tidak suka keramaian", type: "C" },
      { text: "Nanti aja, sale biasanya lama", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Gaya berpakaian ke mall...",
    options: [
      { text: "Rapi dan stylish, mall itu catwalk", type: "A" },
      { text: "Nyaman dan casual, yang penting enak jalan", type: "B" },
      { text: "Tergantung mau ketemu siapa", type: "C" },
      { text: "Apa adanya, tidak terlalu mikirin", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat lapar di mall...",
    options: [
      { text: "Food court, murah dan banyak pilihan", type: "A" },
      { text: "Restoran favorit yang sudah langganan", type: "B" },
      { text: "Cafe untuk ngopi dan snack light", type: "C" },
      { text: "Coba yang baru, explore resto yang belum pernah", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Reaksi saat melihat barang bagus tapi mahal...",
    options: [
      { text: "Beli! YOLO, sekali hidup", type: "A" },
      { text: "Pikir-pikir dulu, nanti balik kalau masih pengen", type: "B" },
      { text: "Foto dulu, cari yang lebih murah online", type: "C" },
      { text: "Appreciate dari jauh, tidak perlu beli", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Parkir di mall...",
    options: [
      { text: "Cari yang paling dekat pintu masuk", type: "A" },
      { text: "Lantai favorit yang sudah hafal", type: "B" },
      { text: "Mana aja yang kosong, tidak pilih-pilih", type: "C" },
      { text: "Naik transportasi umum/ojol, tidak bawa kendaraan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat mall ramai banget...",
    options: [
      { text: "Tetap maju, sudah biasa dengan keramaian", type: "A" },
      { text: "Cari waktu lain yang lebih sepi", type: "B" },
      { text: "Fokus ke tujuan, skip yang tidak perlu", type: "C" },
      { text: "Cari spot sepi untuk istirahat dulu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Budget belanja ke mall...",
    options: [
      { text: "Sudah direncanakan, tidak boleh over", type: "A" },
      { text: "Fleksibel, kalau ada yang bagus ya beli", type: "B" },
      { text: "Window shopping aja, tidak plan beli", type: "C" },
      { text: "Tergantung gajian atau tanggal berapa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Fitur mall yang paling kamu appreciate...",
    options: [
      { text: "AC! Adem dan nyaman", type: "A" },
      { text: "Kelengkapan, semua ada di satu tempat", type: "B" },
      { text: "Entertainment dan hangout spots", type: "C" },
      { text: "Clean dan well-maintained", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mall buat kamu adalah...",
    options: [
      { text: "Surga belanja, tempat retail therapy", type: "A" },
      { text: "Tempat hangout dan sosialisasi", type: "B" },
      { text: "Escape dari panas dan rumah", type: "C" },
      { text: "Tempat praktis untuk berbagai keperluan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Shopaholic Mall",
    emoji: "🛍️",
    description: "Kamu adalah pengunjung mall yang datang dengan misi! Belanja adalah tujuan utama dan kamu tau persis mau beli apa. Mall adalah surga retail therapy-mu.",
    traits: ["Fokus", "Retail therapy lover", "Brand conscious", "Decisive"],
    strengths: ["Efisien belanja", "Tau mau apa", "Tidak buang waktu"],
    weaknesses: ["Bisa boros", "Terlalu fokus belanja", "Miss experience lain"],
    tips: ["Sesekali jalan-jalan tanpa agenda", "Enjoy the atmosphere juga"],
  },
  B: {
    type: "B",
    title: "Mall Explorer",
    emoji: "🚶",
    description: "Kamu adalah explorer mall yang suka jalan-jalan santai! Window shopping adalah hobby dan kamu menikmati experience mall tanpa harus beli banyak.",
    traits: ["Santai", "Explorer", "Budget-conscious", "Relaxed"],
    strengths: ["Tidak impulsive buying", "Menikmati proses", "Hemat"],
    weaknesses: ["Kadang terlalu lama deciding", "Bisa miss good deals"],
    tips: ["Kadang spontan juga seru", "Treat yourself sesekali"],
  },
  C: {
    type: "C",
    title: "Social Mall-goer",
    emoji: "👫",
    description: "Kamu ke mall untuk sosializing! Mall adalah tempat ketemu teman, hangout, dan quality time. Belanja itu bonus, yang penting momennya.",
    traits: ["Social", "Relationship-oriented", "Fun seeker", "Extrovert"],
    strengths: ["Quality time dengan orang tersayang", "Memorable experiences", "Good memories"],
    weaknesses: ["Kadang tidak produktif", "Bisa over budget untuk F&B"],
    tips: ["Balance antara hangout dan keperluan", "Sesekali solo trip juga bagus"],
  },
  D: {
    type: "D",
    title: "Practical Mall User",
    emoji: "✅",
    description: "Kamu adalah pengguna mall yang praktis! Datang untuk keperluan spesifik, selesai langsung pulang. Mall adalah tempat fungsional, bukan destinasi.",
    traits: ["Praktis", "Efisien", "No-nonsense", "Purposeful"],
    strengths: ["Hemat waktu", "Hemat uang", "Tidak terdistraksi"],
    weaknesses: ["Miss fun part of mall", "Terlalu task-oriented"],
    tips: ["Sesekali coba experience lain di mall", "Tidak harus selalu cepat-cepat"],
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
