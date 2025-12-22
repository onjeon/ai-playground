// Gaya Kamu Saat Lebaran
// Tes ini mengungkap kepribadianmu berdasarkan gaya merayakan Lebaran!

export const questions = [
  {
    id: 1,
    question: "H-7 Lebaran, kamu biasanya ngapain?",
    options: [
      { text: "Sibuk beresin rumah dan siap-siap", type: "A" },
      { text: "Belanja baju baru dan perlengkapan", type: "B" },
      { text: "Santai aja, last minute baru gerak", type: "C" },
      { text: "Bantuin ortu masak-masak", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Baju Lebaran kamu biasanya?",
    options: [
      { text: "Beli baru, matching sama keluarga", type: "A" },
      { text: "Beli baru yang trendy dan kekinian", type: "B" },
      { text: "Pakai baju lama yang masih bagus", type: "C" },
      { text: "Jahit custom sesuai keinginan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Momen takbiran, kamu...",
    options: [
      { text: "Ikut takbir keliling kampung", type: "A" },
      { text: "Nonton takbir di TV sambil rebahan", type: "B" },
      { text: "Siap-siap tidur biar fresh besok", type: "C" },
      { text: "Video call keluarga yang jauh", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pagi Lebaran, jam berapa kamu bangun?",
    options: [
      { text: "Subuh, langsung mandi dan siap-siap", type: "A" },
      { text: "Setelah subuh, santai dulu sebentar", type: "B" },
      { text: "Mepet waktu shalat Ied", type: "C" },
      { text: "Pagi banget, excited!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Urutan sungkeman di keluargamu?",
    options: [
      { text: "Orangtua dulu, baru yang lain", type: "A" },
      { text: "Semua sekaligus, rame-rame", type: "B" },
      { text: "Videocall aja yang jauh", type: "C" },
      { text: "Satu-satu, sambil ngobrol lama", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Soal THR dan amplop, kamu...",
    options: [
      { text: "Udah siapin dari jauh-jauh hari", type: "A" },
      { text: "Beli amplop dadakan di jalan", type: "B" },
      { text: "Transfer aja biar praktis", type: "C" },
      { text: "Kasih pakai amplop lucu-lucu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Makanan Lebaran favorit kamu?",
    options: [
      { text: "Ketupat opor, klasik dan wajib", type: "A" },
      { text: "Rendang, gak Lebaran tanpa rendang", type: "B" },
      { text: "Kue-kue lebaran: nastar, kastengel", type: "C" },
      { text: "Semua enak! Porsi kalap!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Silaturahmi ke rumah saudara, kamu...",
    options: [
      { text: "Datang pagi biar dapat makanan lengkap", type: "A" },
      { text: "Ikut rombongan keluarga besar", type: "B" },
      { text: "Pilih-pilih, yang penting aja", type: "C" },
      { text: "Semua dikunjungi, gak ada yang ketinggalan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Foto Lebaran keluarga, gayamu...",
    options: [
      { text: "Pose formal, rapi berjajar", type: "A" },
      { text: "Candid dan natural aja", type: "B" },
      { text: "Males foto, disuruh-suruh dulu", type: "C" },
      { text: "Semangat! Berbagai pose dan angle", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ketemu saudara yang suka nanya 'kapan nikah', reaksimu?",
    options: [
      { text: "Jawab sopan dengan senyum", type: "A" },
      { text: "Bales dengan humor dan candaan", type: "B" },
      { text: "Kabur ke ruangan lain", type: "C" },
      { text: "Curhat panjang lebar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Hari kedua Lebaran, aktivitasmu?",
    options: [
      { text: "Lanjut silaturahmi ke tempat lain", type: "A" },
      { text: "Open house di rumah sendiri", type: "B" },
      { text: "Istirahat di rumah, capek!", type: "C" },
      { text: "Jalan-jalan ke tempat wisata", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Setelah Lebaran berakhir, perasaanmu?",
    options: [
      { text: "Bersyukur, siap kembali beraktivitas", type: "A" },
      { text: "Kangen suasana Lebaran", type: "B" },
      { text: "Lega, akhirnya bisa istirahat beneran", type: "C" },
      { text: "Sedih, mau Lebaran terus!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Planner Lebaran",
    emoji: "📋",
    description: "Kamu adalah master planner Lebaran! Semua sudah dipersiapkan matang dari jauh hari. Kamu menjaga tradisi dan memastikan semua berjalan lancar. Keluarga bisa diandalkan padamu!",
    traits: ["Terorganisir", "Tradisional", "Bertanggung jawab", "Reliable"],
    strengths: ["Persiapan matang", "Tidak panik", "Jadi andalan keluarga"],
    weaknesses: ["Bisa terlalu rigid", "Stress kalau ada yang meleset"],
    tips: ["Santai sedikit, nikmati momennya", "Delegasikan tugas ke anggota keluarga lain"],
  },
  B: {
    type: "B",
    title: "Si Lebaran Kekinian",
    emoji: "📱",
    description: "Kamu merayakan Lebaran dengan gaya modern! Outfit on point, foto Instagramable, dan selalu update. Kamu membawa warna baru ke tradisi keluarga.",
    traits: ["Trendy", "Adaptif", "Stylish", "Up-to-date"],
    strengths: ["Fleksibel", "Tidak kaku", "Membawa suasana fresh"],
    weaknesses: ["Kadang kurang appreciate tradisi", "Terlalu fokus penampilan"],
    tips: ["Nikmati momen tanpa HP sesekali", "Dengarkan cerita orangtua tentang Lebaran dulu"],
  },
  C: {
    type: "C",
    title: "Si Santai Lebaran",
    emoji: "😌",
    description: "Lebaran adalah waktu istirahat bagimu! Kamu tidak ribet dan mengalir aja. Yang penting quality time sama keluarga inti, sisanya bonus.",
    traits: ["Santai", "Low-key", "Praktis", "Introvert"],
    strengths: ["Tidak gampang stress", "Hemat energi", "Menikmati ketenangan"],
    weaknesses: ["Terkesan cuek", "Kurang partisipatif"],
    tips: ["Luangkan waktu lebih untuk silaturahmi", "Appreciate usaha keluarga yang sudah menyiapkan"],
  },
  D: {
    type: "D",
    title: "Si Lebaran Enthusiast",
    emoji: "🎊",
    description: "Kamu CINTA Lebaran! Dari masak bareng sampai silaturahmi, semua kamu ikuti dengan antusias. Kamu adalah jiwa dari keramaian Lebaran keluarga!",
    traits: ["Antusias", "Hangat", "Sosial", "Energik"],
    strengths: ["Menyebarkan kebahagiaan", "Perekat keluarga", "Semangat tinggi"],
    weaknesses: ["Bisa kelelahan", "Terlalu banyak aktivitas"],
    tips: ["Jaga kesehatan, jangan sampai sakit habis Lebaran", "Istirahat cukup di sela aktivitas"],
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
