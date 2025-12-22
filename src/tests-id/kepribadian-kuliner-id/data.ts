// Tes Kepribadian dari Kebiasaan Kuliner
// Cara kamu makan dan menikmati makanan mencerminkan kepribadian!

export const questions = [
  {
    id: 1,
    question: "Saat makan di restoran baru...",
    options: [
      { text: "Pesan best seller atau signature dish", type: "A" },
      { text: "Research review dulu, pesan yang paling recommended", type: "B" },
      { text: "Coba menu yang belum pernah dimakan", type: "C" },
      { text: "Pilih yang familiar dan aman", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Porsi makan kamu biasanya...",
    options: [
      { text: "Besar, makan adalah kebahagiaan", type: "A" },
      { text: "Secukupnya, tidak berlebihan", type: "B" },
      { text: "Tergantung mood dan makanan", type: "C" },
      { text: "Kecil tapi sering snacking", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat makanan tidak sesuai ekspektasi...",
    options: [
      { text: "Tetap makan, sayang kalau dibuang", type: "A" },
      { text: "Komplain dengan sopan", type: "B" },
      { text: "Makan sedikit lalu stop", type: "C" },
      { text: "Diam tapi tidak akan balik lagi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kuliner favorit kamu untuk date...",
    options: [
      { text: "Fine dining atau tempat romantic", type: "A" },
      { text: "Cafe aesthetic dan cozy", type: "B" },
      { text: "Street food atau hidden gem lokal", type: "C" },
      { text: "Anywhere, yang penting sama orangnya", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Review makanan di sosmed...",
    options: [
      { text: "Selalu foto dan review dengan detail", type: "A" },
      { text: "Kadang-kadang kalau makanannya special", type: "B" },
      { text: "Jarang, lebih suka eat without documenting", type: "C" },
      { text: "Tidak pernah, makan ya makan aja", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Budget makan per hari...",
    options: [
      { text: "Fleksibel, kalau enak tidak masalah mahal", type: "A" },
      { text: "Ada budget tapi bisa adjust", type: "B" },
      { text: "Hemat, cari yang murah tapi enak", type: "C" },
      { text: "Tidak terlalu ditrack", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Masak sendiri atau makan di luar...",
    options: [
      { text: "Makan di luar lebih sering", type: "A" },
      { text: "Balance keduanya", type: "B" },
      { text: "Masak lebih hemat dan sehat", type: "C" },
      { text: "Tergantung situasi dan waktu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau teman ajak ke tempat makan yang mahal...",
    options: [
      { text: "Ayok! Treat yourself kadang-kadang", type: "A" },
      { text: "Cek menu dan harga dulu", type: "B" },
      { text: "Suggest alternatif yang lebih affordable", type: "C" },
      { text: "Ikut aja, bisa adjust pesanan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Antri panjang untuk makanan viral...",
    options: [
      { text: "Worth it! FOMO kalau tidak coba", type: "A" },
      { text: "Antri kalau reviewnya memang bagus", type: "B" },
      { text: "Skip, tidak worth waktu", type: "C" },
      { text: "Tunggu sepi baru datang", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Makanan comfort food kamu...",
    options: [
      { text: "Sesuatu yang indulgent dan satisfying", type: "A" },
      { text: "Makanan rumahan yang familiar", type: "B" },
      { text: "Apapun yang gampang didapat", type: "C" },
      { text: "Berbeda-beda tergantung mood", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Dietary preference kamu...",
    options: [
      { text: "Makan apapun, no restrictions", type: "A" },
      { text: "Trying to be healthier", type: "B" },
      { text: "Picky tapi tidak extreme", type: "C" },
      { text: "Makan apa yang ada", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Makan adalah...",
    options: [
      { text: "Pleasure dan experience", type: "A" },
      { text: "Fuel untuk tubuh", type: "B" },
      { text: "Social activity dengan orang lain", type: "C" },
      { text: "Kebutuhan dasar yang harus dipenuhi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Foodie Explorer",
    emoji: "🍽️",
    description: "Kamu adalah pecinta kuliner sejati! Makan bukan sekadar memenuhi kebutuhan tapi pengalaman yang harus dinikmati. Selalu excited untuk coba tempat dan makanan baru.",
    traits: ["Adventurous eater", "Experience seeker", "Social", "Indulgent"],
    strengths: ["Rich culinary experiences", "Great recommendations", "Appreciate good food"],
    weaknesses: ["Budget bisa membengkak", "FOMO terhadap food trends"],
    tips: ["Budget management penting", "Tidak semua viral food itu enak"],
  },
  B: {
    type: "B",
    title: "Mindful Eater",
    emoji: "🥗",
    description: "Kamu adalah tipe yang conscious tentang apa yang dimakan! Balance antara menikmati makanan dan memperhatikan kesehatan. Quality over quantity.",
    traits: ["Mindful", "Health conscious", "Balanced", "Informed"],
    strengths: ["Healthy habits", "Good self-control", "Thoughtful choices"],
    weaknesses: ["Kadang terlalu strict", "Miss out on indulgence"],
    tips: ["Sesekali cheat day okay", "Food is also about enjoyment"],
  },
  C: {
    type: "C",
    title: "Practical Eater",
    emoji: "🍱",
    description: "Kamu adalah tipe yang praktis soal makan! Yang penting kenyang, sehat, dan tidak bikin kantong jebol. Efisiensi adalah kunci.",
    traits: ["Practical", "Budget conscious", "Efficient", "Simple"],
    strengths: ["Good with money", "Not wasteful", "Low maintenance"],
    weaknesses: ["Miss culinary experiences", "Too practical sometimes"],
    tips: ["Treat yourself sesekali", "Good food is worth the investment"],
  },
  D: {
    type: "D",
    title: "Flexible Eater",
    emoji: "🍜",
    description: "Kamu adalah tipe yang go with the flow soal makan! Tidak terlalu picky atau demanding. Apapun yang ada dinikmati dengan syukur.",
    traits: ["Flexible", "Easy going", "Adaptable", "Content"],
    strengths: ["Easy to please", "No drama", "Grateful"],
    weaknesses: ["Might not have strong preferences", "Miss exploring options"],
    tips: ["Develop your palate", "Know what you like is also important"],
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
