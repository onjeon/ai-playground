// Kepribadian dari Gorengan Favorit
// Tes ini mengungkap kepribadianmu berdasarkan gorengan pilihanmu!

export const questions = [
  {
    id: 1,
    question: "Di gerobak gorengan, yang pertama kamu ambil?",
    options: [
      { text: "Bakwan/bala-bala, klasik!", type: "A" },
      { text: "Tahu isi, ada kejutannya", type: "B" },
      { text: "Pisang goreng, manis dan nikmat", type: "C" },
      { text: "Risoles/lumpia, lebih fancy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Level garing gorengan yang kamu suka?",
    options: [
      { text: "Super garing sampai kriuk", type: "A" },
      { text: "Garing tapi masih ada lembutnya", type: "B" },
      { text: "Agak soft, lebih chewy", type: "C" },
      { text: "Tergantung jenis gorengannya", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Gorengan paling cocok dimakan kapan?",
    options: [
      { text: "Sore hari, pas hujan-hujan", type: "A" },
      { text: "Sarapan, bareng bubur atau lontong", type: "B" },
      { text: "Kapan aja, selalu pas!", type: "C" },
      { text: "Malam, nonton TV bareng keluarga", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saus/cocolan favorit untuk gorengan?",
    options: [
      { text: "Cabe rawit langsung, tanpa saus", type: "A" },
      { text: "Sambal kecap atau saus sambal", type: "B" },
      { text: "Mayonnaise atau saus keju", type: "C" },
      { text: "Tanpa saus, pure rasa gorengannya", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Berapa banyak gorengan yang biasa kamu beli?",
    options: [
      { text: "2-3 biji, secukupnya aja", type: "A" },
      { text: "5-6 biji, biar puas", type: "B" },
      { text: "10 biji atau lebih, buat dibagi", type: "C" },
      { text: "Seribu perak, berapa dapet ya?", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tentang gorengan 'baru digoreng' vs 'udah dingin'...",
    options: [
      { text: "Harus yang baru, rela nunggu!", type: "A" },
      { text: "Yang hangat-hangat cukup", type: "B" },
      { text: "Dingin juga gapapa, tetap enak", type: "C" },
      { text: "Dihangatkan lagi di rumah", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Minuman pendamping gorengan favoritmu?",
    options: [
      { text: "Es teh manis, kombo klasik", type: "A" },
      { text: "Kopi tubruk atau kopi susu", type: "B" },
      { text: "Es jeruk atau es kelapa", type: "C" },
      { text: "Wedang/teh hangat", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Reaksimu kalau gorengan yang kamu beli rasanya kurang enak?",
    options: [
      { text: "Tetap dimakan, sayang kalau dibuang", type: "A" },
      { text: "Makan setengah, sisanya kasih orang", type: "B" },
      { text: "Gak balik lagi ke tempat itu", type: "C" },
      { text: "Komplain ke penjualnya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Gorengan untuk oleh-oleh, pilihanmu?",
    options: [
      { text: "Yang tahan lama, gak cepet alot", type: "A" },
      { text: "Yang paling populer dari tempat itu", type: "B" },
      { text: "Variasi, biar ada macam-macam", type: "C" },
      { text: "Gak bawa gorengan, takut udah dingin", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Minyak gorengan, kamu peduli gak?",
    options: [
      { text: "Peduli, harus yang masih fresh", type: "A" },
      { text: "Lihat kondisi minyaknya dulu", type: "B" },
      { text: "Gak terlalu pikirin, yang penting enak", type: "C" },
      { text: "Lebih baik goreng sendiri di rumah", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tempat beli gorengan favorit?",
    options: [
      { text: "Gerobak keliling di depan rumah", type: "A" },
      { text: "Warung langganan yang udah pasti enak", type: "B" },
      { text: "Pasar tradisional, lebih murah", type: "C" },
      { text: "Cafe atau tempat yang lebih higienis", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Menurutmu, gorengan itu...",
    options: [
      { text: "Comfort food terbaik Indonesia", type: "A" },
      { text: "Makanan rakyat yang gak lekang waktu", type: "B" },
      { text: "Guilty pleasure yang susah ditolak", type: "C" },
      { text: "Snack murah yang selalu mengenyangkan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pecinta Gorengan Klasik",
    emoji: "🥟",
    description: "Kamu adalah pecinta gorengan OG! Seperti bakwan yang klasik dan timeless, kamu adalah orang yang konsisten dan bisa diandalkan. Tradisi adalah nilai pentingmu.",
    traits: ["Klasik", "Konsisten", "Reliable", "Tradisional"],
    strengths: ["Selera gak berubah", "Tau yang enak", "Tidak gampang tergoda tren"],
    weaknesses: ["Kurang suka coba hal baru", "Bisa monoton"],
    tips: ["Sesekali coba gorengan modern", "Variety is the spice of life"],
  },
  B: {
    type: "B",
    title: "Pecinta Gorengan Surprise",
    emoji: "🎁",
    description: "Seperti tahu isi dengan kejutan di dalamnya, kamu adalah orang yang penuh surprise! Kamu suka hal-hal yang tidak terduga dan punya depth yang tidak terlihat dari luar.",
    traits: ["Surprising", "Deep", "Unpredictable", "Interesting"],
    strengths: ["Tidak membosankan", "Punya karakter unik", "Bikin penasaran"],
    weaknesses: ["Bisa susah ditebak", "Kadang terlalu misterius"],
    tips: ["Sesekali lebih terbuka", "Surprise yang baik, bukan yang bikin bingung"],
  },
  C: {
    type: "C",
    title: "Pecinta Gorengan Manis",
    emoji: "🍌",
    description: "Seperti pisang goreng yang manis dan comforting, kamu adalah orang yang hangat dan menyenangkan. Kehadiranmu seperti dessert - bikin orang senang.",
    traits: ["Hangat", "Sweet", "Comforting", "Friendly"],
    strengths: ["Disenangi banyak orang", "Aura positif", "Bikin nyaman"],
    weaknesses: ["Bisa terlalu manis", "Kadang kurang tegas"],
    tips: ["Balance antara sweet dan assertive", "Jangan takut untuk tegas"],
  },
  D: {
    type: "D",
    title: "Pecinta Gorengan Premium",
    emoji: "✨",
    description: "Seperti risoles atau lumpia yang lebih premium, kamu adalah orang yang punya standar tinggi. Kamu menghargai kualitas dan tidak asal-asalan.",
    traits: ["Berkelas", "High-standard", "Selective", "Quality-oriented"],
    strengths: ["Selera bagus", "Tidak murahan", "Punya taste tersendiri"],
    weaknesses: ["Bisa terkesan snobby", "Kadang terlalu picky"],
    tips: ["Sesekali turun ke 'level rakyat'", "Tidak semua yang sederhana itu jelek"],
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
