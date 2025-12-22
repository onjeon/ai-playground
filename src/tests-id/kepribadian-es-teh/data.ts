export const questions = [
  {
    id: 1,
    question: "Level kemanisan yang kamu suka?",
    options: [
      { text: "Manis banget, gula full!", type: "A" },
      { text: "Manis sedang, balance", type: "B" },
      { text: "Agak manis aja", type: "C" },
      { text: "Tawar atau less sugar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kapan kamu biasanya minum es teh?",
    options: [
      { text: "Setiap makan, wajib!", type: "A" },
      { text: "Saat cuaca panas", type: "B" },
      { text: "Kalau lagi pengen aja", type: "C" },
      { text: "Jarang, prefer minuman lain", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Es teh dari mana yang paling kamu suka?",
    options: [
      { text: "Warung pinggir jalan, paling mantap!", type: "A" },
      { text: "Resto atau cafe, yang proper", type: "B" },
      { text: "Bikin sendiri di rumah", type: "C" },
      { text: "Es teh kemasan juga ok", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Topping atau tambahan untuk es teh?",
    options: [
      { text: "Es batu yang banyak!", type: "A" },
      { text: "Lemon atau jeruk", type: "B" },
      { text: "Plain aja, no topping", type: "C" },
      { text: "Tergantung mood", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bagaimana sikapmu kalau es teh kurang manis?",
    options: [
      { text: "Komplain dan minta tambah gula", type: "A" },
      { text: "Terima aja, masih ok", type: "B" },
      { text: "Lebih suka yang less sweet anyway", type: "C" },
      { text: "Tergantung seberapa kurang manisnya", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Harga es teh berapa yang kamu rela bayar?",
    options: [
      { text: "Rp 3.000 - 5.000 aja", type: "A" },
      { text: "Rp 10.000 - 15.000 kalau enak", type: "B" },
      { text: "Rp 15.000+ untuk yang premium", type: "C" },
      { text: "Yang penting enak, harga nomor dua", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Es teh pair dengan makanan apa?",
    options: [
      { text: "Gorengan! Perfect combo", type: "A" },
      { text: "Nasi goreng atau mie goreng", type: "B" },
      { text: "Makanan berat apapun", type: "C" },
      { text: "Snack atau cemilan ringan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau di cafe, kamu order es teh atau minuman lain?",
    options: [
      { text: "Tetap es teh, loyal!", type: "A" },
      { text: "Coba menu signature mereka", type: "B" },
      { text: "Kopi atau minuman fancy", type: "C" },
      { text: "Tergantung menu dan mood", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Gimana kalau es tehnya habis es batu?",
    options: [
      { text: "Minta tambah es, wajib dingin!", type: "A" },
      { text: "Diminum aja, masih ok", type: "B" },
      { text: "Tidak masalah, yang penting tehnya", type: "C" },
      { text: "Sedikit kecewa tapi lanjut", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Es teh versi apa yang kamu suka?",
    options: [
      { text: "Es teh manis klasik", type: "A" },
      { text: "Thai tea atau teh tarik", type: "B" },
      { text: "Green tea atau matcha", type: "C" },
      { text: "Semua jenis teh ok", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat beli es teh, kamu usually?",
    options: [
      { text: "Langsung minum di tempat", type: "A" },
      { text: "Take away untuk dibawa", type: "B" },
      { text: "Beli banyak untuk stock", type: "C" },
      { text: "Tergantung situasi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kalau harus pilih, es teh atau...?",
    options: [
      { text: "Es teh always, no question!", type: "A" },
      { text: "Tergantung cuaca dan mood", type: "B" },
      { text: "Bisa diganti minuman lain", type: "C" },
      { text: "Es teh cuma salah satu option", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Es Teh Manis Loyalist",
    emoji: "🧊",
    description: "Kamu adalah penggemar es teh manis sejati! Gula banyak, es banyak, dan harus dari warung! Seperti es teh manis yang simple tapi selalu dirindukan, kamu adalah orang yang down to earth, unpretentious, dan tahu apa yang kamu mau!",
    traits: ["Simple", "Loyal", "Traditional", "Unpretentious"],
    strengths: ["Tahu apa yang kamu suka", "Tidak ribet", "Easy to please"],
    weaknesses: ["Kadang kurang mau coba hal baru", "Bisa resistant to change"],
    tips: ["Sesekali coba variant baru", "Simple is good!", "Your loyalty is admirable"],
  },
  B: {
    type: "B",
    title: "Es Teh Moderate",
    emoji: "🍵",
    description: "Kamu suka es teh tapi dengan balance! Manis secukupnya, bisa dari mana saja, dan terbuka untuk variasi. Seperti es teh yang versatile, kamu adalah orang yang adaptable dan bisa enjoy berbagai situasi!",
    traits: ["Balanced", "Adaptable", "Open-minded", "Flexible"],
    strengths: ["Bisa menikmati berbagai jenis", "Tidak terlalu picky", "Easy going"],
    weaknesses: ["Kadang susah decide", "Bisa terlalu flexible"],
    tips: ["Balance is your strength", "Trust your taste", "Variety is good!"],
  },
  C: {
    type: "C",
    title: "Es Teh Sophisticated",
    emoji: "🌿",
    description: "Kamu suka teh tapi dengan twist yang lebih refined! Less sugar, variant premium, atau DIY adalah stylemu. Seperti teh premium yang diapresiasi connoisseur, kamu adalah orang dengan taste yang developed!",
    traits: ["Refined", "Health-conscious", "Quality-oriented", "Discerning"],
    strengths: ["Taste yang bagus", "Health aware", "Appreciate quality"],
    weaknesses: ["Bisa terkesan snobbish", "Kadang terlalu picky"],
    tips: ["Your refined taste is valid", "Simple pleasures are also good", "Share your knowledge!"],
  },
  D: {
    type: "D",
    title: "Es Teh Casual",
    emoji: "🥤",
    description: "Es teh buatmu adalah salah satu dari banyak pilihan! Kamu tidak terlalu attached dan bisa enjoy minuman apapun. Seperti orang yang flexible, kamu tidak suka terikat pada satu hal saja!",
    traits: ["Flexible", "Non-attached", "Variety seeker", "Casual"],
    strengths: ["Open to new experiences", "Tidak boring", "Adaptable"],
    weaknesses: ["Kadang susah loyal", "Bisa overwhelmed dengan choices"],
    tips: ["Flexibility is strength", "Sometimes commitment is good too", "Explore freely!"],
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
