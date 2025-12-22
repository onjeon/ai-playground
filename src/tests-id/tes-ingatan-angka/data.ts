// Tes Ingatan Angka
// Uji kemampuan mengingat dan mengenali pola angka!

export const questions = [
  {
    id: 1,
    question: "Ingat urutan ini: 3-7-2. Mana yang benar?",
    options: [
      { text: "3-7-2", type: "A" },
      { text: "3-2-7", type: "B" },
      { text: "7-3-2", type: "C" },
      { text: "2-7-3", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ingat urutan: 5-1-8-4. Mana yang benar?",
    options: [
      { text: "5-1-8-4", type: "A" },
      { text: "5-8-1-4", type: "B" },
      { text: "1-5-8-4", type: "C" },
      { text: "5-1-4-8", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ingat urutan: 9-2-6-3-7. Mana yang benar?",
    options: [
      { text: "9-2-6-3-7", type: "A" },
      { text: "9-6-2-3-7", type: "B" },
      { text: "9-2-3-6-7", type: "C" },
      { text: "2-9-6-3-7", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nomor telepon: 0812-3456. Dua digit terakhir adalah?",
    options: [
      { text: "56", type: "A" },
      { text: "46", type: "B" },
      { text: "65", type: "C" },
      { text: "45", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ingat: 147-258-369. Angka tengah adalah?",
    options: [
      { text: "258", type: "A" },
      { text: "147", type: "B" },
      { text: "369", type: "C" },
      { text: "285", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Urutan: 8-3-9-1-5-2. Angka ketiga adalah?",
    options: [
      { text: "9", type: "A" },
      { text: "3", type: "B" },
      { text: "1", type: "C" },
      { text: "8", type: "D" },
    ],
  },
  {
    id: 7,
    question: "PIN: 7294. Jika dibalik, menjadi?",
    options: [
      { text: "4927", type: "A" },
      { text: "9274", type: "B" },
      { text: "2947", type: "C" },
      { text: "7429", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kode: 159-753. Jumlah digit pertama dan terakhir?",
    options: [
      { text: "4 (1+3)", type: "A" },
      { text: "8 (1+7)", type: "B" },
      { text: "6 (3+3)", type: "C" },
      { text: "12 (5+7)", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Urutan: 2-4-6-8-10. Angka ke-4 adalah?",
    options: [
      { text: "8", type: "A" },
      { text: "6", type: "B" },
      { text: "10", type: "C" },
      { text: "4", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Plat nomor: B 1234 ABC. Empat angka di tengah adalah?",
    options: [
      { text: "1234", type: "A" },
      { text: "2134", type: "B" },
      { text: "1324", type: "C" },
      { text: "1243", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ingat: 86-42-75-31. Pasangan kedua adalah?",
    options: [
      { text: "42", type: "A" },
      { text: "86", type: "B" },
      { text: "75", type: "C" },
      { text: "31", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kode OTP: 847362. Tiga digit terakhir adalah?",
    options: [
      { text: "362", type: "A" },
      { text: "736", type: "B" },
      { text: "263", type: "C" },
      { text: "473", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Memory Master",
    emoji: "🧠",
    description: "Kemampuan ingatan angka kamu excellent! Working memory kamu kuat dan bisa retain numerical information dengan baik. Skill yang sangat berguna!",
    traits: ["Strong memory", "Detail oriented", "Focused", "Retentive"],
    strengths: ["Remember numbers easily", "Good working memory", "Accurate recall"],
    weaknesses: ["Might over-rely on memory"],
    tips: ["Skill ini bagus untuk banyak profesi", "Terus latih untuk maintain"],
  },
  B: {
    type: "B",
    title: "Memory Baik",
    emoji: "💭",
    description: "Kemampuan ingatan angka kamu cukup baik! Sebagian besar angka bisa diingat dengan akurat. Terus latih untuk menambah capacity!",
    traits: ["Good memory", "Consistent", "Reliable"],
    strengths: ["Decent recall", "Can improve further"],
    weaknesses: ["Longer sequences challenging"],
    tips: ["Practice chunking technique", "Use mnemonics"],
  },
  C: {
    type: "C",
    title: "Memory Berkembang",
    emoji: "📝",
    description: "Kemampuan ingatan angka kamu masih berkembang. Short sequences oke tapi lebih panjang mulai challenging. Memory adalah muscle yang bisa dilatih!",
    traits: ["Developing", "Needs practice", "Potential"],
    strengths: ["Short term okay", "Can improve"],
    weaknesses: ["Longer sequences difficult"],
    tips: ["Start with shorter sequences", "Practice daily"],
  },
  D: {
    type: "D",
    title: "Memory Perlu Latihan",
    emoji: "🌱",
    description: "Kemampuan ingatan angka kamu masih perlu dilatih. Tidak perlu khawatir - memory skills bisa dikembangkan dengan teknik dan latihan yang tepat.",
    traits: ["Needs training", "Can develop", "Room to grow"],
    strengths: ["Awareness of weakness"],
    weaknesses: ["Working memory needs strengthening"],
    tips: ["Learn memory techniques", "Practice with apps atau games"],
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
