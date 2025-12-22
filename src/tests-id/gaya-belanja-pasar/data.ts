// Gaya Kamu Saat Belanja di Pasar Tradisional
// Tes ini mengungkap kepribadianmu berdasarkan gaya belanja di pasar!

export const questions = [
  {
    id: 1,
    question: "Persiapan sebelum ke pasar?",
    options: [
      { text: "Bikin list belanjaan lengkap", type: "A" },
      { text: "Ada list tapi sering nambah di tempat", type: "B" },
      { text: "Langsung aja, lihat apa yang bagus", type: "C" },
      { text: "Tanya ibu/istri dulu mau beli apa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Jam berapa biasanya ke pasar?",
    options: [
      { text: "Subuh/pagi buta, biar dapat yang fresh", type: "A" },
      { text: "Pagi, setelah sarapan", type: "B" },
      { text: "Siang, lebih santai", type: "C" },
      { text: "Kapan sempat aja", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Soal tawar-menawar, kamu...",
    options: [
      { text: "Jago nawar, bisa dapat harga miring", type: "A" },
      { text: "Nawar dikit-dikit aja", type: "B" },
      { text: "Gak berani nawar, malu", type: "C" },
      { text: "Tergantung barangnya, kalau mahal baru nawar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Hubunganmu dengan pedagang langganan?",
    options: [
      { text: "Akrab banget, suka ngobrol lama", type: "A" },
      { text: "Kenal muka, senyum-senyum aja", type: "B" },
      { text: "Gak punya langganan, beli random", type: "C" },
      { text: "Ada beberapa langganan untuk barang tertentu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cara pilih sayur dan buah?",
    options: [
      { text: "Teliti banget, pilih satu-satu", type: "A" },
      { text: "Lihat secara umum, yang keliatan fresh", type: "B" },
      { text: "Percaya sama pedagang, minta yang bagus", type: "C" },
      { text: "Asal ambil, yang penting cepat", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bawa apa ke pasar?",
    options: [
      { text: "Tas belanja sendiri, anti plastik", type: "A" },
      { text: "Keranjang atau troli kecil", type: "B" },
      { text: "Pakai plastik dari pedagang aja", type: "C" },
      { text: "Tergantung banyaknya belanjaan", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ketemu tetangga atau kenalan di pasar, kamu...",
    options: [
      { text: "Ngobrol lama, update gosip", type: "A" },
      { text: "Sapa singkat, lanjut belanja", type: "B" },
      { text: "Pura-pura gak lihat, males ngobrol", type: "C" },
      { text: "Tanya rekomendasi pedagang bagus", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Budget belanja pasar, kamu...",
    options: [
      { text: "Sudah dipatok dari rumah, stick to it", type: "A" },
      { text: "Ada budget tapi fleksibel", type: "B" },
      { text: "Gak dipatok, beli sesuai kebutuhan", type: "C" },
      { text: "Bawa cash secukupnya biar gak kalap", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Pasar tradisional vs supermarket?",
    options: [
      { text: "Pasar tradisional, lebih murah dan segar", type: "A" },
      { text: "Supermarket, lebih nyaman dan bersih", type: "B" },
      { text: "Dua-duanya, tergantung kebutuhan", type: "C" },
      { text: "Online aja, lebih praktis", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat harga naik drastis, reaksimu?",
    options: [
      { text: "Nawar lebih keras atau cari alternatif", type: "A" },
      { text: "Tetap beli, kebutuhan harus terpenuhi", type: "B" },
      { text: "Kurangi jumlah yang dibeli", type: "C" },
      { text: "Komplain ke pedagang, tapi tetap beli", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Setelah belanja, biasanya...",
    options: [
      { text: "Langsung pulang, sortir di rumah", type: "A" },
      { text: "Mampir makan di warung pasar", type: "B" },
      { text: "Jajan jajanan pasar dulu", type: "C" },
      { text: "Istirahat sebentar, capek!", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pasar tradisional menurutmu?",
    options: [
      { text: "Bagian dari budaya yang harus dijaga", type: "A" },
      { text: "Tempat dapat barang segar dan murah", type: "B" },
      { text: "Pengalaman belanja yang autentik", type: "C" },
      { text: "Pilihan alternatif yang oke", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ibu/Bapak Rumah Tangga Pro",
    emoji: "🛒",
    description: "Kamu adalah master belanja pasar! Tau cara nawar, kenal pedagang, dan selalu dapat barang terbaik dengan harga terbaik. Skill yang patut dibanggakan!",
    traits: ["Terorganisir", "Hemat", "Jago nawar", "Teliti"],
    strengths: ["Hemat budget rumah tangga", "Dapat barang berkualitas", "Jaringan luas"],
    weaknesses: ["Bisa terlalu perfeksionis", "Suka lama di pasar"],
    tips: ["Sesekali percayakan ke orang lain", "Tidak semua harus sempurna"],
  },
  B: {
    type: "B",
    title: "Belanja Santai",
    emoji: "😊",
    description: "Kamu belanja dengan santai tapi tetap on track. Tidak terlalu ribet tapi juga tidak sembarangan. Balance antara efisiensi dan menikmati proses.",
    traits: ["Balanced", "Fleksibel", "Easygoing", "Praktis"],
    strengths: ["Tidak stress belanja", "Adaptif", "Efisien waktu"],
    weaknesses: ["Kadang kurang teliti", "Bisa over-budget"],
    tips: ["Sesekali lebih teliti pilih barang", "Coba teknik nawar"],
  },
  C: {
    type: "C",
    title: "Belanja Minimalis",
    emoji: "⚡",
    description: "Kamu tipe yang belanja cepat dan praktis. Tidak mau ribet, yang penting dapat barang yang dibutuhkan. Waktu adalah prioritas.",
    traits: ["Praktis", "Efisien", "Tidak ribet", "Time-oriented"],
    strengths: ["Hemat waktu", "Tidak kebanyakan mikir", "Langsung action"],
    weaknesses: ["Bisa kurang teliti", "Miss kesempatan dapat harga bagus"],
    tips: ["Sesekali slow down", "Belajar nawar bisa hemat banyak"],
  },
  D: {
    type: "D",
    title: "Belanja Helper",
    emoji: "🤝",
    description: "Kamu adalah pendukung setia! Biasa membantu atau menemani orang lain belanja. Kolaboratif dan supportive dalam urusan rumah tangga.",
    traits: ["Supportive", "Kolaboratif", "Helpful", "Team player"],
    strengths: ["Bisa diandalkan", "Tidak egois", "Good helper"],
    weaknesses: ["Kurang inisiatif sendiri", "Bergantung pada arahan"],
    tips: ["Coba belanja sendiri sesekali", "Develop skill tawar-menawar sendiri"],
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
