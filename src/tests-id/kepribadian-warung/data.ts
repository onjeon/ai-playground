// Tipe Kepribadian Berdasarkan Warung Favorit
// Tes ini mengungkap kepribadianmu berdasarkan pilihan warung makan!

export const questions = [
  {
    id: 1,
    question: "Kalau lagi lapar banget, warung mana yang kamu pilih?",
    options: [
      { text: "Warteg, lengkap dan murah meriah", type: "A" },
      { text: "Warung Padang, selalu puas pedesnya", type: "B" },
      { text: "Warung Sunda, lalapan segar!", type: "C" },
      { text: "Warung kopi dan gorengan aja cukup", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat makan di warung, kamu lebih suka...",
    options: [
      { text: "Duduk di dalam, adem dan tenang", type: "A" },
      { text: "Di teras, bisa lihat orang berlalu-lalang", type: "B" },
      { text: "Di lesehan, santai dan rileks", type: "C" },
      { text: "Bungkus aja, makan di rumah", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Menu andalan kamu di warung biasanya...",
    options: [
      { text: "Nasi campur/nasi rames, banyak pilihan", type: "A" },
      { text: "Menu pedas dan bersantan", type: "B" },
      { text: "Sayuran dan lalapan segar", type: "C" },
      { text: "Yang simpel: nasi telor atau mie instan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau makan sama teman-teman, kamu biasanya...",
    options: [
      { text: "Ngajak ke warung favorit yang udah langganan", type: "A" },
      { text: "Cari warung yang paling rame", type: "B" },
      { text: "Ikut aja mau ke mana", type: "C" },
      { text: "Lebih suka makan sendiri sih", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Hal yang paling penting di warung menurutmu...",
    options: [
      { text: "Porsi besar, harga terjangkau", type: "A" },
      { text: "Rasa yang mantap dan memorable", type: "B" },
      { text: "Suasana nyaman dan bersih", type: "C" },
      { text: "Cepat saji dan praktis", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat antri panjang di warung, reaksi kamu...",
    options: [
      { text: "Sabar nunggu, pasti worth it", type: "A" },
      { text: "Excited, berarti makanannya enak!", type: "B" },
      { text: "Ngobrol sama orang di antrian", type: "C" },
      { text: "Cari warung lain yang sepi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Minuman favorit kamu di warung...",
    options: [
      { text: "Es teh manis, klasik!", type: "A" },
      { text: "Es jeruk atau es kelapa", type: "B" },
      { text: "Jus buah segar", type: "C" },
      { text: "Air putih aja cukup", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau makanan yang datang kurang enak, kamu...",
    options: [
      { text: "Tetap makan, sayang kalau dibuang", type: "A" },
      { text: "Komplain dengan sopan ke penjual", type: "B" },
      { text: "Diam aja tapi ga balik lagi", type: "C" },
      { text: "Makan seadanya, yang penting kenyang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat nemuin warung baru yang enak...",
    options: [
      { text: "Langsung jadi langganan tetap", type: "A" },
      { text: "Share ke semua teman dan keluarga", type: "B" },
      { text: "Simpan sendiri, takut jadi rame", type: "C" },
      { text: "Sesekali aja, tetap explore yang lain", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Uang receh kembalian dari warung biasanya...",
    options: [
      { text: "Simpan rapi di dompet", type: "A" },
      { text: "Kasih ke kotak amal warung", type: "B" },
      { text: "Kasih tip ke yang jaga warung", type: "C" },
      { text: "Bilang 'gausah kembalian' biar cepat", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Pagi-pagi di warung, kamu pesan...",
    options: [
      { text: "Sarapan lengkap: nasi uduk/bubur ayam", type: "A" },
      { text: "Lontong sayur atau ketoprak", type: "B" },
      { text: "Roti bakar dan kopi", type: "C" },
      { text: "Skip sarapan, kopi aja", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kalau warung langganan tutup...",
    options: [
      { text: "Sedih, tunggu sampai buka lagi", type: "A" },
      { text: "Cari warung alternatif yang mirip", type: "B" },
      { text: "Masak sendiri di rumah", type: "C" },
      { text: "Pesen online aja", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Setia Warung",
    emoji: "🍛",
    description: "Kamu adalah tipe yang setia dan konsisten! Sekali nemuin warung yang cocok, kamu bakal jadi pelanggan tetap seumur hidup. Kamu menghargai kenyamanan dan kepastian dalam hidup.",
    traits: ["Loyal", "Konsisten", "Praktis", "Hemat"],
    strengths: ["Mudah puas", "Bisa diandalkan", "Tidak boros"],
    weaknesses: ["Kurang suka coba hal baru", "Terlalu nyaman di zona aman"],
    tips: ["Sesekali coba warung baru untuk pengalaman berbeda", "Terbuka dengan rekomendasi teman"],
  },
  B: {
    type: "B",
    title: "Si Petualang Rasa",
    emoji: "🌶️",
    description: "Kamu suka tantangan dan sensasi! Warung yang rame dan makanan yang punya karakter kuat adalah favoritmu. Kamu ekstrovert dan senang berbagi pengalaman kuliner.",
    traits: ["Ekspresif", "Sosial", "Berani", "Antusias"],
    strengths: ["Mudah bergaul", "Banyak referensi kuliner", "Menyenangkan"],
    weaknesses: ["Bisa terlalu impulsif", "Susah fokus satu pilihan"],
    tips: ["Belajar menikmati momen sendiri", "Coba menu yang lebih mild sesekali"],
  },
  C: {
    type: "C",
    title: "Si Penikmat Suasana",
    emoji: "🥗",
    description: "Kamu mengutamakan kenyamanan dan keharmonisan. Warung yang bersih, adem, dengan makanan sehat adalah surgamu. Kamu orangnya kalem dan easy-going.",
    traits: ["Tenang", "Adaptif", "Peduli kesehatan", "Ramah"],
    strengths: ["Fleksibel", "Tidak ribet", "Menyenangkan untuk diajak makan"],
    weaknesses: ["Kadang terlalu pasif", "Susah mengungkapkan preferensi"],
    tips: ["Lebih vokal tentang keinginanmu", "Jangan selalu mengalah"],
  },
  D: {
    type: "D",
    title: "Si Praktis Efisien",
    emoji: "⚡",
    description: "Waktu adalah uang bagimu! Kamu mengutamakan kepraktisan dan efisiensi dalam segala hal, termasuk makan. Simple dan tidak ribet adalah filosofi hidupmu.",
    traits: ["Efisien", "Mandiri", "Fokus", "Minimalis"],
    strengths: ["Tidak buang waktu", "Produktif", "Tidak manja"],
    weaknesses: ["Kurang menikmati proses", "Bisa terkesan dingin"],
    tips: ["Sesekali slow down dan nikmati makanan", "Quality time dengan teman itu penting"],
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
