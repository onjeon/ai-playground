// Kepribadian dari Martabak Favorit Kamu
// Tes ini mengungkap kepribadianmu berdasarkan martabak favorit!

export const questions = [
  {
    id: 1,
    question: "Martabak manis atau martabak telur?",
    options: [
      { text: "Martabak manis dong! Sweet tooth", type: "A" },
      { text: "Martabak telur, savory is the way", type: "B" },
      { text: "Dua-duanya! Kenapa harus pilih", type: "C" },
      { text: "Tergantung mood dan lapar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Topping martabak manis favorit...",
    options: [
      { text: "Coklat klasik, tidak perlu macam-macam", type: "A" },
      { text: "Keju meler, makin banyak makin enak", type: "B" },
      { text: "Ovomaltine atau Nutella, yang kekinian", type: "C" },
      { text: "Mix semua! Coklat keju kacang Ovomaltine", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Isian martabak telur pilihan...",
    options: [
      { text: "Original - telur, daging, daun bawang", type: "A" },
      { text: "Special dengan ekstra daging", type: "B" },
      { text: "Ayam atau kornet, alternatif", type: "C" },
      { text: "Campur semua isian!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tekstur martabak manis yang disukai...",
    options: [
      { text: "Tipis dan garing pinggirnya", type: "A" },
      { text: "Tebal dan fluffy", type: "B" },
      { text: "Medium, balance sempurna", type: "C" },
      { text: "Tidak terlalu picky soal tekstur", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Makan martabak biasanya...",
    options: [
      { text: "Sendiri, me time dengan martabak", type: "A" },
      { text: "Bagi-bagi sama keluarga atau teman", type: "B" },
      { text: "Patungan beli rame-rame", type: "C" },
      { text: "Tergantung situasi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Porsi martabak yang biasa dibeli...",
    options: [
      { text: "Setengah, cukup untuk sendiri", type: "A" },
      { text: "Satu full, bisa untuk besok juga", type: "B" },
      { text: "Sesuai jumlah orang yang makan", type: "C" },
      { text: "Beli banyak, stok di kulkas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara makan martabak...",
    options: [
      { text: "Langsung makan dari kotak, praktis", type: "A" },
      { text: "Pindah ke piring dulu, lebih proper", type: "B" },
      { text: "Potong-potong rapi sebelum makan", type: "C" },
      { text: "Langsung gigit aja, tidak ribet", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tempat beli martabak favorit...",
    options: [
      { text: "Langganan, sudah tau enak", type: "A" },
      { text: "Yang viral dan recommended", type: "B" },
      { text: "Yang paling dekat dan praktis", type: "C" },
      { text: "Explore terus, cari yang terbaik", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Waktu paling sering makan martabak...",
    options: [
      { text: "Malam, snack before bed", type: "A" },
      { text: "Weekend, treat time", type: "B" },
      { text: "Kapanpun craving muncul", type: "C" },
      { text: "Pas ada acara atau gathering", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Martabak sisa yang disimpan...",
    options: [
      { text: "Panaskan lagi, harus hangat", type: "A" },
      { text: "Makan dingin, masih enak", type: "B" },
      { text: "Jarang sisa, habis sekali makan", type: "C" },
      { text: "Kasih ke orang lain", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tambahan selain martabak...",
    options: [
      { text: "Teh atau kopi, wajib!", type: "A" },
      { text: "Minuman dingin untuk balance", type: "B" },
      { text: "Martabak aja cukup", type: "C" },
      { text: "Snack lain juga kalau masih lapar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Martabak buat kamu adalah...",
    options: [
      { text: "Comfort food terbaik!", type: "A" },
      { text: "Jajanan nostalgia sejak kecil", type: "B" },
      { text: "Makanan untuk merayakan sesuatu", type: "C" },
      { text: "Salah satu opsi snack yang enak", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Tradisionalis",
    emoji: "🍫",
    description: "Kamu adalah pencinta martabak klasik! Prefer yang original dan proven enak. Tidak perlu macam-macam topping, yang penting rasanya terjamin. Kamu orang yang tau apa yang kamu suka.",
    traits: ["Traditional", "Consistent", "Reliable", "Simple taste"],
    strengths: ["Tau mau apa", "Tidak ribet", "Appreciate classics"],
    weaknesses: ["Bisa lebih adventurous", "Miss new flavors"],
    tips: ["Coba topping baru sesekali", "Classics are great tapi variety juga seru"],
  },
  B: {
    type: "B",
    title: "Si Maximalist",
    emoji: "🧀",
    description: "Kamu adalah martabak maximalist! Makin banyak topping makin happy. Keju meler, extra everything! Hidup terlalu singkat untuk martabak biasa-biasa aja.",
    traits: ["Generous", "Indulgent", "Go big or go home", "Experience seeker"],
    strengths: ["Full experience", "Never boring", "Generous with self"],
    weaknesses: ["Bisa over-indulgent", "Expectations tinggi"],
    tips: ["Kadang simple is beautiful too", "Balance indulgence dengan moderation"],
  },
  C: {
    type: "C",
    title: "Si Social Sharer",
    emoji: "👨‍👩‍👧‍👦",
    description: "Martabak adalah makanan sosial bagimu! Lebih suka beli rame-rame dan bagi-bagi. Makan martabak adalah bonding experience, bukan cuma soal makanannya.",
    traits: ["Social", "Generous", "Family-oriented", "Sharing culture"],
    strengths: ["Build connections", "Generous spirit", "Appreciate togetherness"],
    weaknesses: ["Jarang treat diri sendiri", "Dependent on others to enjoy"],
    tips: ["Solo martabak time juga oke", "Treat yourself kadang"],
  },
  D: {
    type: "D",
    title: "Si Flexibel",
    emoji: "🎲",
    description: "Kamu adalah pencinta martabak yang fleksibel! Tidak terpaku pada satu jenis atau topping. Mood dan situasi menentukan pilihan. Adaptable dan open-minded.",
    traits: ["Flexible", "Open-minded", "Adventurous", "Mood-based"],
    strengths: ["Try new things", "Not picky", "Enjoy variety"],
    weaknesses: ["Susah decide kadang", "No signature order"],
    tips: ["Find your go-to untuk situasi tertentu", "Variety is the spice of life"],
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
