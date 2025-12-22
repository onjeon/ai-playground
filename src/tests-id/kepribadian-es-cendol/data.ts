// Kepribadian dari Es Favorit
// Es tradisional mana yang menggambarkan kepribadianmu?

export const questions = [
  {
    id: 1,
    question: "Saat cuaca panas terik...",
    options: [
      { text: "Langsung cari es yang segar banget", type: "A" },
      { text: "Es yang manis dan mengenyangkan", type: "B" },
      { text: "Es yang unik dan beda dari biasanya", type: "C" },
      { text: "Es yang simple dan familiar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Preferensi rasa...",
    options: [
      { text: "Segar dan menyegarkan", type: "A" },
      { text: "Manis dan creamy", type: "B" },
      { text: "Kombinasi rasa yang kompleks", type: "C" },
      { text: "Classic dan tidak berlebihan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tekstur yang kamu suka...",
    options: [
      { text: "Kenyal dan chewy", type: "A" },
      { text: "Lembut dan smooth", type: "B" },
      { text: "Bervariasi, ada yang crunchy dan soft", type: "C" },
      { text: "Simple, es serut atau es batu", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu menikmati sesuatu...",
    options: [
      { text: "Slow, nikmati setiap bagian", type: "A" },
      { text: "Full experience, semua dimakan", type: "B" },
      { text: "Eksplorasi, coba kombinasi berbeda", type: "C" },
      { text: "Quick dan practical", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Di sosial gathering, kamu...",
    options: [
      { text: "Easy going, blend dengan semua", type: "A" },
      { text: "Sweet dan ramah ke semua orang", type: "B" },
      { text: "Unik, stand out dengan caramu sendiri", type: "C" },
      { text: "Low profile tapi reliable", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat memilih sesuatu...",
    options: [
      { text: "Yang refreshing dan energizing", type: "A" },
      { text: "Yang comforting dan satisfying", type: "B" },
      { text: "Yang interesting dan memorable", type: "C" },
      { text: "Yang proven dan ga ribet", type: "D" },
    ],
  },
  {
    id: 7,
    question: "First impression orang tentangmu...",
    options: [
      { text: "Ceria dan menyegarkan", type: "A" },
      { text: "Sweet dan caring", type: "B" },
      { text: "Interesting dan unique", type: "C" },
      { text: "Calm dan dependable", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Warna yang paling menggambarkanmu...",
    options: [
      { text: "Hijau segar", type: "A" },
      { text: "Coklat warm", type: "B" },
      { text: "Colorful dan beragam", type: "C" },
      { text: "Putih atau natural", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cara kamu refresh diri...",
    options: [
      { text: "Aktivitas yang menyegarkan", type: "A" },
      { text: "Comfort food atau comfort activity", type: "B" },
      { text: "Coba hal baru yang exciting", type: "C" },
      { text: "Istirahat simple dan tenang", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Dalam relationship...",
    options: [
      { text: "Refreshing, selalu ada yang baru", type: "A" },
      { text: "Sweet dan penuh perhatian", type: "B" },
      { text: "Adventurous, suka surprise", type: "C" },
      { text: "Stable dan consistent", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat stress...",
    options: [
      { text: "Cari sesuatu yang menyegarkan pikiran", type: "A" },
      { text: "Cari comfort dan kehangatan", type: "B" },
      { text: "Distraksi dengan hal baru", type: "C" },
      { text: "Kembali ke routine yang familiar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Orang mengenalmu sebagai...",
    options: [
      { text: "Penyegar suasana", type: "A" },
      { text: "Yang sweet dan caring", type: "B" },
      { text: "Yang unik dan beda", type: "C" },
      { text: "Yang reliable dan steady", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Es Cendol",
    emoji: "🟢",
    description: "Kamu adalah Es Cendol! Segar, menyegarkan, dan disukai banyak orang. Seperti cendol yang kenyal dan gula aren yang manis, kamu punya kombinasi yang balance antara fun dan substance. Kehadiranmu selalu menyegarkan!",
    traits: ["Refreshing", "Balanced", "Popular", "Easy-going"],
    strengths: ["Disukai semua orang", "Good vibes", "Reliable friend"],
    weaknesses: ["Bisa terlalu common", "Kurang stand out"],
    tips: ["Embrace your uniqueness", "Classic is classic for a reason"],
  },
  B: {
    type: "B",
    title: "Es Teler",
    emoji: "🥥",
    description: "Kamu adalah Es Teler! Sweet, rich, dan full of goodness. Seperti es teler yang penuh dengan buah-buahan dan santan, kamu adalah orang yang generous dan nurturing. Kehadiranmu selalu mengenyangkan hati!",
    traits: ["Sweet", "Generous", "Nurturing", "Warm"],
    strengths: ["Great caretaker", "Loyal friend", "Comforting presence"],
    weaknesses: ["Bisa too much", "Over-giving"],
    tips: ["Take care of yourself too", "Boundaries are okay"],
  },
  C: {
    type: "C",
    title: "Es Campur",
    emoji: "🍨",
    description: "Kamu adalah Es Campur! Beragam, interesting, dan selalu ada surprise. Seperti es campur yang punya banyak topping, kamu adalah orang yang multifaceted dan tidak pernah membosankan. Layer demi layer, selalu ada yang baru!",
    traits: ["Diverse", "Interesting", "Surprising", "Creative"],
    strengths: ["Never boring", "Versatile", "Full of surprises"],
    weaknesses: ["Bisa overwhelming", "Terlalu banyak"],
    tips: ["Sometimes simplicity wins", "Focus on few strengths"],
  },
  D: {
    type: "D",
    title: "Es Kelapa Muda",
    emoji: "🥥",
    description: "Kamu adalah Es Kelapa Muda! Simple, natural, dan refreshing tanpa drama. Seperti kelapa muda yang straightforward dan menyegarkan, kamu adalah orang yang uncomplicated dan reliable. Simple but satisfying!",
    traits: ["Simple", "Natural", "Reliable", "Straightforward"],
    strengths: ["No drama", "Dependable", "Authentic"],
    weaknesses: ["Bisa terkesan plain", "Kurang exciting"],
    tips: ["Simple is beautiful", "Add little spice sometimes"],
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
