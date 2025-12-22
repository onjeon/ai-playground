// Kepribadian dari Gaya Belanja di Pasar
// Tes ini mengungkap kepribadianmu berdasarkan cara belanja di pasar tradisional!

export const questions = [
  {
    id: 1,
    question: "Persiapan sebelum ke pasar...",
    options: [
      { text: "Buat list lengkap, budgeting detail", type: "A" },
      { text: "List sederhana, fleksibel sama kondisi", type: "B" },
      { text: "Ingat-ingat di kepala aja", type: "C" },
      { text: "Tidak ada persiapan, lihat di tempat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat tawar menawar harga...",
    options: [
      { text: "Jago nawar, bisa dapat harga terbaik", type: "A" },
      { text: "Nawar sedikit, yang penting dapat diskon", type: "B" },
      { text: "Malas nawar, bayar aja langsung", type: "C" },
      { text: "Tergantung mood, kadang nawar kadang tidak", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hubungan dengan pedagang langganan...",
    options: [
      { text: "Akrab banget, sudah seperti kenal lama", type: "A" },
      { text: "Kenal baik, saling sapa dan ngobrol", type: "B" },
      { text: "Ingat muka aja, interaksi seperlunya", type: "C" },
      { text: "Tidak punya langganan, beli random", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Memilih bahan makanan...",
    options: [
      { text: "Teliti banget, periksa satu-satu", type: "A" },
      { text: "Lihat sekilas, pilih yang terlihat bagus", type: "B" },
      { text: "Percaya sama pedagang langganan", type: "C" },
      { text: "Ambil cepat, yang penting dapat", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Waktu favorit belanja di pasar...",
    options: [
      { text: "Pagi-pagi, dapat yang segar", type: "A" },
      { text: "Agak siang, tidak terlalu ramai", type: "B" },
      { text: "Sore, biar dapat harga murah", type: "C" },
      { text: "Kapanpun ada waktu luang", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Reaksi saat melihat pedagang dadakan dengan barang unik...",
    options: [
      { text: "Skip, fokus pada list yang sudah ada", type: "A" },
      { text: "Lihat sebentar, kalau menarik baru beli", type: "B" },
      { text: "Tertarik, sering beli yang tidak direncanakan", type: "C" },
      { text: "Pasti mampir, suka cari yang unik-unik", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara bawa belanjaan...",
    options: [
      { text: "Troli atau tas belanja besar, siap tempur", type: "A" },
      { text: "Tas belanja lipat, praktis", type: "B" },
      { text: "Kantong dari pedagang, beli di tempat", type: "C" },
      { text: "Tangan kosong, belanja sedikit-sedikit", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat harga naik drastis...",
    options: [
      { text: "Cari alternatif, ganti dengan yang lebih murah", type: "A" },
      { text: "Tetap beli tapi kurangi jumlahnya", type: "B" },
      { text: "Nawar lebih keras dari biasanya", type: "C" },
      { text: "Tetap beli, kebutuhan tetap harus dipenuhi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Keliling pasar biasanya...",
    options: [
      { text: "Sistematis, lorong per lorong", type: "A" },
      { text: "Langsung ke langganan, efisien", type: "B" },
      { text: "Jalan-jalan dulu, window shopping", type: "C" },
      { text: "Random, ikuti arus dan mood", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat dikasih bonus oleh pedagang...",
    options: [
      { text: "Senang dan berterima kasih tulus", type: "A" },
      { text: "Appreciate, jadi alasan tetap langganan", type: "B" },
      { text: "Harapkan lebih, minta tambahan lagi", type: "C" },
      { text: "Biasa aja, memang haknya pembeli", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Belanja untuk berapa lama?",
    options: [
      { text: "Mingguan, belanja besar sekali", type: "A" },
      { text: "3-4 hari sekali, fresh terus", type: "B" },
      { text: "Harian, beli secukupnya", type: "C" },
      { text: "Tidak tentu, kalau ingat baru beli", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pengalaman pasar yang paling kamu suka...",
    options: [
      { text: "Dapat harga bagus setelah nawar", type: "A" },
      { text: "Ngobrol hangat dengan pedagang", type: "B" },
      { text: "Menemukan bahan yang dicari", type: "C" },
      { text: "Suasana ramai dan seru", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Strategis Pasar",
    emoji: "📋",
    description: "Kamu adalah ahli strategi pasar! Dengan perencanaan matang dan skill nawar yang mumpuni, kamu selalu mendapat hasil maksimal. Pedagang hormat sama kamu karena kamu pembeli yang cerdas dan fair.",
    traits: ["Terencana", "Hemat", "Jago nawar", "Sistematis"],
    strengths: ["Efisien waktu dan uang", "Dapat harga terbaik", "Tidak mudah tertipu"],
    weaknesses: ["Kadang terlalu kaku", "Kurang spontan"],
    tips: ["Sesekali beli yang tidak direncanakan", "Enjoy the experience juga"],
  },
  B: {
    type: "B",
    title: "Ibu Rumah Tangga Ideal",
    emoji: "🛒",
    description: "Kamu adalah pelanggan favorit pedagang! Ramah, fair dalam nawar, dan punya hubungan baik dengan langganan. Belanja jadi aktivitas sosial yang menyenangkan bagimu.",
    traits: ["Ramah", "Loyal", "Seimbang", "Sosial"],
    strengths: ["Relasi baik dengan pedagang", "Dapat pelayanan ekstra", "Balanced approach"],
    weaknesses: ["Kadang terlalu loyal walau ada yang lebih murah", "Segan untuk pindah langganan"],
    tips: ["Sesekali compare harga", "Jangan takut coba yang baru"],
  },
  C: {
    type: "C",
    title: "Si Praktis",
    emoji: "⚡",
    description: "Kamu adalah pembeli yang efisien! Tidak mau ribet dengan proses tawar menawar, yang penting dapat yang dibutuhkan dengan cepat. Waktumu sangat berharga.",
    traits: ["Praktis", "Efisien", "Tidak ribet", "Cepat"],
    strengths: ["Hemat waktu", "Tidak stress", "Simple approach"],
    weaknesses: ["Bisa lebih hemat kalau mau nawar", "Kurang interaksi sosial"],
    tips: ["Coba nawar sesekali, seru lho", "Kenalan sama pedagang bisa dapat benefit"],
  },
  D: {
    type: "D",
    title: "Si Petualang Pasar",
    emoji: "🎪",
    description: "Kamu adalah explorer pasar! Setiap kunjungan ke pasar adalah petualangan baru. Kamu suka kejutan dan menemukan hal-hal unik yang tidak direncanakan.",
    traits: ["Spontan", "Petualang", "Curious", "Fleksibel"],
    strengths: ["Menemukan hal baru", "Menikmati proses", "Tidak stress"],
    weaknesses: ["Sering over budget", "Beli yang tidak perlu"],
    tips: ["Buat list basic supaya tidak lupa", "Set budget maximum"],
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
