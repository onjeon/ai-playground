// Tes Tipe Kamu Saat Pakai Ojol (Ojek Online)
// Gaya pakai Gojek/Grab-mu mencerminkan kepribadian!

export const questions = [
  {
    id: 1,
    question: "Saat pesan ojol, kamu biasanya...",
    options: [
      { text: "Langsung pesan, tidak pilih-pilih driver", type: "A" },
      { text: "Cek rating driver dulu", type: "B" },
      { text: "Chat driver untuk konfirmasi lokasi", type: "C" },
      { text: "Tunggu promo dulu baru pesan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat driver nyasar atau bingung lokasi...",
    options: [
      { text: "Telepon dan kasih arahan jelas", type: "A" },
      { text: "Share live location di chat", type: "B" },
      { text: "Sabar nunggu sambil chat bantuin", type: "C" },
      { text: "Cancel dan pesan baru", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Selama perjalanan, kamu...",
    options: [
      { text: "Ngobrol sama driver, seru!", type: "A" },
      { text: "Cek maps, pastikan rutenya bener", type: "B" },
      { text: "Scroll HP, tidak banyak interaksi", type: "C" },
      { text: "Tidur atau dengerin musik", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Soal helmet dari driver...",
    options: [
      { text: "Pakai aja, sudah biasa", type: "A" },
      { text: "Bawa helmet sendiri lebih aman", type: "B" },
      { text: "Minta yang bersih kalau ada pilihan", type: "C" },
      { text: "Males pakai tapi tetap nurut", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Rating dan review setelah sampai...",
    options: [
      { text: "Selalu kasih bintang 5 dan tip", type: "A" },
      { text: "Sesuai performa, fair assessment", type: "B" },
      { text: "Bintang 5 tapi jarang kasih tip", type: "C" },
      { text: "Skip, males ngisi review", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Fitur ojol yang paling sering kamu pakai...",
    options: [
      { text: "GoCar/GrabCar - lebih nyaman", type: "A" },
      { text: "GoRide/GrabBike - cepat dan murah", type: "B" },
      { text: "GoFood/GrabFood - males keluar", type: "C" },
      { text: "GoSend/GrabExpress - kirim barang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat hujan dan surge pricing naik...",
    options: [
      { text: "Tetap pesan, kebutuhan mendesak", type: "A" },
      { text: "Tunggu harga turun dulu", type: "B" },
      { text: "Cari alternatif transportasi lain", type: "C" },
      { text: "Cancel plans, di rumah aja", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau driver chat terlalu banyak...",
    options: [
      { text: "Reply dengan ramah, ga keberatan", type: "A" },
      { text: "Balas seperlunya, to the point", type: "B" },
      { text: "Sedikit annoyed tapi tetap sopan", type: "C" },
      { text: "Read only, nanti aja kalau penting", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Lokasi penjemputan biasanya...",
    options: [
      { text: "Titik pasti, mudah ditemukan", type: "A" },
      { text: "Koordinat GPS yang akurat", type: "B" },
      { text: "Deskripsi landmark sekitar", type: "C" },
      { text: "Pin sembarangan, nanti diarahin", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat barang ketinggalan di ojol...",
    options: [
      { text: "Langsung hubungi driver via app", type: "A" },
      { text: "Lapor customer service dengan detail", type: "B" },
      { text: "Panik tapi coba sabar", type: "C" },
      { text: "Pasrah, udah nasib", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Pakai GoPay/OVO atau cash...",
    options: [
      { text: "GoPay/OVO selalu, cashless lover", type: "A" },
      { text: "GoPay/OVO karena cashback", type: "B" },
      { text: "Tergantung saldo dan promo", type: "C" },
      { text: "Cash aja, lebih simpel", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pengalaman ojol paling memorable...",
    options: [
      { text: "Driver yang super ramah dan helpful", type: "A" },
      { text: "Sampai tujuan super cepat", type: "B" },
      { text: "Ngobrol seru sampe tuker kontak", type: "C" },
      { text: "Drama yang jadi cerita lucu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Penumpang Ramah",
    emoji: "😊",
    description: "Kamu adalah penumpang idaman driver! Ramah, komunikatif, dan selalu kasih rating bagus. Perjalanan sama kamu selalu menyenangkan.",
    traits: ["Ramah", "Komunikatif", "Appreciative", "Easy going"],
    strengths: ["Disukai driver", "Smooth experience", "Good karma"],
    weaknesses: ["Kadang terlalu baik, kurang kritis"],
    tips: ["Tetap beri feedback jujur bila perlu", "Kebaikan jangan dimanfaatkan"],
  },
  B: {
    type: "B",
    title: "Penumpang Cerdas",
    emoji: "🧠",
    description: "Kamu adalah penumpang yang smart dan efisien! Cek rating, compare harga, dan selalu punya plan B. Tidak mau rugi dan selalu informed.",
    traits: ["Smart", "Careful", "Detail oriented", "Efficient"],
    strengths: ["Rarely have bad experience", "Good value for money", "Prepared"],
    weaknesses: ["Kadang terlalu overthink", "Trust issues"],
    tips: ["Sesekali go with the flow", "Not everything needs research"],
  },
  C: {
    type: "C",
    title: "Penumpang Chill",
    emoji: "😌",
    description: "Kamu adalah penumpang yang santai dan tidak ribet! Pesan ojol ya udah, tidak banyak drama. Mindset: yang penting sampai tujuan.",
    traits: ["Relaxed", "Low maintenance", "Patient", "Adaptable"],
    strengths: ["Tidak stres", "Easy to deal with", "Flexible"],
    weaknesses: ["Kadang kurang proactive", "Miss out on promos"],
    tips: ["Cek promo sesekali", "Jangan terlalu pasrah kalau ada masalah"],
  },
  D: {
    type: "D",
    title: "Penumpang Praktis",
    emoji: "⚡",
    description: "Kamu adalah penumpang yang mengutamakan praktis dan efisiensi! Tidak mau ribet, yang penting cepat selesai. Waktu adalah uang.",
    traits: ["Practical", "Time conscious", "Straightforward", "Independent"],
    strengths: ["Efficient", "No drama", "Self-sufficient"],
    weaknesses: ["Bisa kurang sabar", "Miss human connection"],
    tips: ["Sesekali be more patient", "Good experience butuh effort juga"],
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
