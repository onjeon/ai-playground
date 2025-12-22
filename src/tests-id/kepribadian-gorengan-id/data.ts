// Kepribadian dari Gorengan Favorit Kamu
// Tes ini mengungkap kepribadianmu berdasarkan gorengan favorit!

export const questions = [
  {
    id: 1,
    question: "Gorengan favorit nomor satu...",
    options: [
      { text: "Bakwan atau ote-ote, sayuran crispy", type: "A" },
      { text: "Tahu atau tempe goreng, protein!", type: "B" },
      { text: "Pisang goreng atau cempedak, sweet treat", type: "C" },
      { text: "Risoles atau pastel, yang fancy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sambal atau saus untuk gorengan...",
    options: [
      { text: "Cabe rawit, makin pedas makin nikmat", type: "A" },
      { text: "Sambal kacang atau petis", type: "B" },
      { text: "Kecap manis atau mayonaise", type: "C" },
      { text: "Tanpa saus, nikmati original taste", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Beli gorengan biasanya...",
    options: [
      { text: "Di abang-abang pinggir jalan", type: "A" },
      { text: "Warung makan atau kantin", type: "B" },
      { text: "Supermarket atau toko kue", type: "C" },
      { text: "Bikin sendiri di rumah", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Porsi gorengan sekali makan...",
    options: [
      { text: "1-2 aja, snack light", type: "A" },
      { text: "3-4, biar kenyang", type: "B" },
      { text: "5+, tidak bisa berhenti", type: "C" },
      { text: "Tergantung lapar dan mood", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Waktu paling sering makan gorengan...",
    options: [
      { text: "Sore hari, tea time", type: "A" },
      { text: "Pagi, sarapan cepat", type: "B" },
      { text: "Kapanpun craving", type: "C" },
      { text: "Pas hujan, wajib!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tekstur gorengan yang disuka...",
    options: [
      { text: "Crispy dan garing", type: "A" },
      { text: "Soft di dalam, crispy di luar", type: "B" },
      { text: "Yang penting berminyak banyak", type: "C" },
      { text: "Tidak terlalu picky soal tekstur", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Gorengan plus...",
    options: [
      { text: "Nasi dan lauk, jadi menu utama", type: "A" },
      { text: "Teh atau kopi hangat", type: "B" },
      { text: "Sendirian aja sudah cukup", type: "C" },
      { text: "Bubur atau makanan kuah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Gorengan sisa yang sudah dingin...",
    options: [
      { text: "Goreng ulang atau panaskan", type: "A" },
      { text: "Makan aja, masih oke", type: "B" },
      { text: "Tidak suka yang dingin, beli baru", type: "C" },
      { text: "Kasih ke orang lain", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Budget untuk gorengan...",
    options: [
      { text: "Murah, di bawah 10rb", type: "A" },
      { text: "10-20rb, lumayan banyak", type: "B" },
      { text: "Tidak hitung, yang penting enak", type: "C" },
      { text: "Hemat, cari yang paling murah", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Makan gorengan dengan...",
    options: [
      { text: "Tangan langsung, authentic", type: "A" },
      { text: "Pakai tusukan atau garpu", type: "B" },
      { text: "Tergantung jenis gorengannya", type: "C" },
      { text: "Pakai tisu, tidak mau berminyak", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau abang gorengan langganan tidak ada...",
    options: [
      { text: "Cari abang lain, gorengan harus ada", type: "A" },
      { text: "Skip aja, tunggu besok", type: "B" },
      { text: "Beli snack lain sebagai pengganti", type: "C" },
      { text: "Bikin sendiri, challenge accepted", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Gorengan buat kamu adalah...",
    options: [
      { text: "Comfort food sejati Indonesia", type: "A" },
      { text: "Snack praktis dan murah", type: "B" },
      { text: "Guilty pleasure yang nikmat", type: "C" },
      { text: "Bagian dari culture dan nostalgia", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Tradisional",
    emoji: "🍳",
    description: "Kamu adalah pecinta gorengan tradisional sejati! Bakwan, tempe, dan gorengan klasik adalah favoritmu. Tidak perlu fancy, yang penting rasa otentik dan nostalgia.",
    traits: ["Traditional", "Simple", "Nostalgic", "Down to earth"],
    strengths: ["Appreciate local food", "Not pretentious", "Easy to please"],
    weaknesses: ["Might miss new variations", "Stuck in comfort zone"],
    tips: ["Coba gorengan fusion sesekali", "Traditional is gold tapi variety juga seru"],
  },
  B: {
    type: "B",
    title: "Si Praktis",
    emoji: "⚡",
    description: "Gorengan adalah solusi praktis bagimu! Murah, cepat, dan mengenyangkan. Kamu orang yang efisien dan tidak ribet soal makanan.",
    traits: ["Practical", "Efficient", "No-fuss", "Budget-conscious"],
    strengths: ["Smart choices", "Not wasteful", "Quick satisfaction"],
    weaknesses: ["Might not enjoy food fully", "Too transactional"],
    tips: ["Sesekali slow down dan enjoy", "Food is also experience"],
  },
  C: {
    type: "C",
    title: "Si Indulgent",
    emoji: "😋",
    description: "Kamu adalah orang yang makan gorengan dengan penuh kenikmatan! Tidak peduli sehat atau tidak, yang penting nikmat. YOLO attitude dengan makanan.",
    traits: ["Indulgent", "Pleasure-seeker", "Unapologetic", "Foodie"],
    strengths: ["Enjoy life", "No guilt", "Full experience"],
    weaknesses: ["Health considerations", "Might overindulge"],
    tips: ["Balance dengan healthy food", "Indulgence sesekali oke, daily maybe tidak"],
  },
  D: {
    type: "D",
    title: "Si Sentimental",
    emoji: "💭",
    description: "Gorengan bukan cuma makanan bagimu, tapi nostalgia dan kenangan! Setiap gigitan membawa memory masa kecil dan kehangatan kampung halaman.",
    traits: ["Sentimental", "Nostalgic", "Emotional eater", "Culture-appreciator"],
    strengths: ["Deep appreciation", "Connected to roots", "Food as emotion"],
    weaknesses: ["Might idealize past", "Picky about 'authentic' taste"],
    tips: ["New memories juga bisa dibuat", "Share nostalgia dengan generasi baru"],
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
