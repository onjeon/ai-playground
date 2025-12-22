// Level Ketagihan Shopee
// Fun test tentang tahap addiction dengan Shopee

export const questions = [
  {
    id: 1,
    question: "Notification Shopee '9.9 Sale!' masuk. First reaction?",
    options: [
      { text: "DROP EVERYTHING! CHECKOUT TIME!", type: "A" },
      { text: "Tambah cart dulu, review nanti", type: "B" },
      { text: "Check wishlist, ada sale tak", type: "C" },
      { text: "Ignore, duit tak ada pun", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Berapa kali sehari kau bukak app Shopee?",
    options: [
      { text: "Lost count! Lebih dari 10 kali!", type: "A" },
      { text: "5-10 kali, moderate la", type: "B" },
      { text: "1-2 kali je, bila perlu", type: "C" },
      { text: "Sekali seminggu pun tak sampai", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cart Shopee kau sekarang ada berapa item?",
    options: [
      { text: "100+ items, window shopping!", type: "A" },
      { text: "30-50 items, ada planning", type: "B" },
      { text: "10 ke bawah, yang perlu je", type: "C" },
      { text: "Kosong, tak add cart", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Free shipping voucher expire dalam 2 jam. Apa kau buat?",
    options: [
      { text: "Cari barang nak beli untuk guna voucher!", type: "A" },
      { text: "Check cart ada tak barang nak beli", type: "B" },
      { text: "Kalau tak perlu, biar je expire", type: "C" },
      { text: "Tak perasan pun ada voucher", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Shopee Live seller tunjuk barang best. Action?",
    options: [
      { text: "Buy terus! Live exclusive price!", type: "A" },
      { text: "Tengok review dulu sebelum buy", type: "B" },
      { text: "Skip live, check listing biasa", type: "C" },
      { text: "Tak layan Shopee Live, boring", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila last time kau tak order Shopee lebih dari seminggu?",
    options: [
      { text: "Tak ingat! Setiap hari ada parcel!", type: "A" },
      { text: "Bulan lepas kot", type: "B" },
      { text: "Selalu je tak order seminggu", type: "C" },
      { text: "Shopee? Jarang guna", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pak Guard kompleks dah hafal nama kau sebab banyak parcel. Feeling?",
    options: [
      { text: "Bangga! VIP customer!", type: "A" },
      { text: "Malu sikit tapi happy", type: "B" },
      { text: "Tak sampai tahap tu", type: "C" },
      { text: "Parcel? Apa tu?", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Gaji masuk. First thing buat?",
    options: [
      { text: "Checkout semua cart items!", type: "A" },
      { text: "Pay bills dulu, Shopee kemudian", type: "B" },
      { text: "Save dulu, Shopee bila perlu", type: "C" },
      { text: "Shopee tak dalam list priority", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tengah scroll Shopee, tiba-tiba dah 3 jam. Reaction?",
    options: [
      { text: "Normal je, every day macam ni", type: "A" },
      { text: "Terkejut tapi takpe la", type: "B" },
      { text: "Close app terus, waste of time!", type: "C" },
      { text: "Never happen, tak lama scroll", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kawan kata 'Kau ni Shopee addict la!' Response?",
    options: [
      { text: "Proud of it! At least ada hobby!", type: "A" },
      { text: "Defensive sikit, tapi tau la betul", type: "B" },
      { text: "Tak la, normal je shopping", type: "C" },
      { text: "Salah orang kot, aku jarang Shopee", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Shopee Addict Level Max",
    emoji: "🛒",
    description: "Kau ni level addiction dah tahap professional! Setiap sale kau tau, setiap voucher kau collect. Pak Guard kenal nama kau. Bank account menangis tapi hati happy!",
    traits: ["Shopaholic", "Deal hunter", "Impulsive", "Retail therapy lover"],
    strengths: ["Best deals expert", "Never miss sale", "Collection complete"],
    weaknesses: ["Bank account crying", "Storage full", "Impulse buying"],
    tips: ["Set monthly budget", "Uninstall app kejap", "Think before checkout"],
  },
  B: {
    type: "B",
    title: "Smart Shopper",
    emoji: "🧠",
    description: "Kau suka Shopee tapi dengan strategy! Buy bila perlu, use voucher wisely. Moderate spending, smart choices. The balanced e-commerce user!",
    traits: ["Strategic", "Moderate", "Practical", "Value-conscious"],
    strengths: ["Good deals", "Controlled spending", "Smart purchases"],
    weaknesses: ["Sometimes miss impulse fun", "Analysis paralysis"],
    tips: ["You're doing great", "Treat yourself sometimes"],
  },
  C: {
    type: "C",
    title: "Practical Buyer",
    emoji: "📋",
    description: "Shopee untuk kau adalah tool je. Beli bila perlu, tak tergoda dengan sale. Efficient dan practical - bank account kau sihat!",
    traits: ["Practical", "Disciplined", "Needs-focused", "Efficient"],
    strengths: ["Saving money", "No impulse", "Buy quality"],
    weaknesses: ["Miss good deals sometimes", "Too serious"],
    tips: ["Sale deals ada yang worth it", "Enjoy shopping sikit"],
  },
  D: {
    type: "D",
    title: "Shopee Immune",
    emoji: "🛡️",
    description: "Kau ni immune dengan Shopee! Tak affect, tak tempted. Hidup tanpa e-commerce obsession. Rare species in Malaysia 2024!",
    traits: ["Immune", "Traditional", "Non-digital shopper", "Old school"],
    strengths: ["Money saved", "No addiction", "Physical shopping lover"],
    weaknesses: ["Miss convenience", "Pay more sometimes"],
    tips: ["Try online shopping perks", "Convenience is nice too"],
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
