// Kepribadian dari Nasi Goreng Favorit
// Nasi goreng mana yang menggambarkan kepribadianmu?

export const questions = [
  {
    id: 1,
    question: "Level pedas yang kamu handle...",
    options: [
      { text: "Extra pedas! Cabai banyak", type: "A" },
      { text: "Sedang, yang masih nikmat", type: "B" },
      { text: "Tidak pedas, fokus ke rasa lain", type: "C" },
      { text: "Tergantung mood", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Topping yang paling penting...",
    options: [
      { text: "Telur ceplok setengah matang", type: "A" },
      { text: "Ayam atau daging yang banyak", type: "B" },
      { text: "Seafood atau kerupuk", type: "C" },
      { text: "Sayuran dan acar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Waktu paling nikmat makan nasi goreng...",
    options: [
      { text: "Tengah malam, abis begadang", type: "A" },
      { text: "Sarapan, energi untuk hari", type: "B" },
      { text: "Makan siang atau malam biasa", type: "C" },
      { text: "Kapan aja, nasi goreng always right", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nasi goreng buatan...",
    options: [
      { text: "Warung atau gerobak, authentic!", type: "A" },
      { text: "Restoran, quality assured", type: "B" },
      { text: "Rumah sendiri, sesuai selera", type: "C" },
      { text: "Mana aja yang available", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Karakteristik nasi goreng ideal...",
    options: [
      { text: "Wangi dan smoky, gosong dikit enak", type: "A" },
      { text: "Bumbu rich dan meresap", type: "B" },
      { text: "Fresh dan ringan", type: "C" },
      { text: "Simple tapi mengenyangkan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sifatmu dalam menjalani hidup...",
    options: [
      { text: "Adventurous dan berani", type: "A" },
      { text: "Ambitious dan goal-oriented", type: "B" },
      { text: "Calm dan balanced", type: "C" },
      { text: "Practical dan down to earth", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Di weekend malam, kamu biasanya...",
    options: [
      { text: "Hangout sampai larut", type: "A" },
      { text: "Productive activity atau side project", type: "B" },
      { text: "Quality time dengan orang terdekat", type: "C" },
      { text: "Santai di rumah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cara kamu memulai sesuatu yang baru...",
    options: [
      { text: "Jump in, learn as you go", type: "A" },
      { text: "Plan dan prepare dengan baik", type: "B" },
      { text: "Research dan pertimbangkan", type: "C" },
      { text: "Ikut arus, kalau ada kesempatan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kompleksitas yang kamu suka...",
    options: [
      { text: "Complex dan challenging", type: "A" },
      { text: "Rich tapi terstruktur", type: "B" },
      { text: "Moderate, tidak berlebihan", type: "C" },
      { text: "Simple dan straightforward", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Dalam persahabatan, kamu...",
    options: [
      { text: "Yang rame dan bikin seru", type: "A" },
      { text: "Yang bisa diandalkan", type: "B" },
      { text: "Yang menenangkan", type: "C" },
      { text: "Yang ada kapan aja dibutuhkan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Definisi comfort food...",
    options: [
      { text: "Yang bikin excited dan puas", type: "A" },
      { text: "Yang mengenyangkan dan berisi", type: "B" },
      { text: "Yang menenangkan dan familiar", type: "C" },
      { text: "Yang gampang didapat", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kondimen tambahan...",
    options: [
      { text: "Sambal extra!", type: "A" },
      { text: "Kecap atau saus", type: "B" },
      { text: "Kerupuk atau emping", type: "C" },
      { text: "Udah enak, ga perlu tambahan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nasi Goreng Gila",
    emoji: "🔥",
    description: "Kamu adalah Nasi Goreng Gila! Extra everything - extra pedas, extra topping, extra flavor. Hidup adalah untuk dinikmati dengan full intensity. Kamu adventurous, berani, dan tidak takut keluar dari zona nyaman. Hidup ini pendek, makan yang enak!",
    traits: ["Adventurous", "Bold", "Intense", "Fun-loving"],
    strengths: ["Full of life", "Exciting friend", "No regrets"],
    weaknesses: ["Bisa too much", "Impulsive"],
    tips: ["Kadang simple juga okay", "Balance is key"],
  },
  B: {
    type: "B",
    title: "Nasi Goreng Spesial",
    emoji: "⭐",
    description: "Kamu adalah Nasi Goreng Spesial! Complete package - protein, karbohidrat, semua seimbang. Kamu ambitious, well-rounded, dan selalu memberikan yang terbaik. Kalau melakukan sesuatu, harus quality!",
    traits: ["Ambitious", "Complete", "Quality-oriented", "Reliable"],
    strengths: ["High standards", "Dependable", "Well-balanced"],
    weaknesses: ["Bisa perfectionist", "High maintenance"],
    tips: ["Sometimes good enough is okay", "Enjoy the process"],
  },
  C: {
    type: "C",
    title: "Nasi Goreng Kampung",
    emoji: "🌿",
    description: "Kamu adalah Nasi Goreng Kampung! Simple, authentic, dan penuh dengan karakter. Kamu menghargai hal-hal genuine dan tidak perlu fancy. Ketulusan dan keaslian adalah valuemu. Less is more!",
    traits: ["Authentic", "Genuine", "Calm", "Grounded"],
    strengths: ["True to self", "Reliable", "Calming presence"],
    weaknesses: ["Bisa terkesan plain", "Resistant to change"],
    tips: ["Try new things sometimes", "Authenticity is your strength"],
  },
  D: {
    type: "D",
    title: "Nasi Goreng Biasa",
    emoji: "🍚",
    description: "Kamu adalah Nasi Goreng Biasa! Unpretentious, practical, dan selalu ada. Tidak perlu drama, tidak perlu extra - yang penting mengenyangkan dan available. Kamu adalah teman yang reliable dan easy-going. Simple but essential!",
    traits: ["Practical", "Reliable", "Easy-going", "Consistent"],
    strengths: ["Always available", "No drama", "Dependable"],
    weaknesses: ["Might be overlooked", "Too passive"],
    tips: ["Speak up sometimes", "You matter more than you think"],
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
