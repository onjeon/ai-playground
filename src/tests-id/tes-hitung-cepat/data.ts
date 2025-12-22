// Tes Hitung Cepat
// Uji kemampuan kalkulasi mental kamu!

export const questions = [
  {
    id: 1,
    question: "15 + 27 = ?",
    options: [
      { text: "42", type: "A" },
      { text: "43", type: "B" },
      { text: "41", type: "C" },
      { text: "44", type: "D" },
    ],
  },
  {
    id: 2,
    question: "8 × 7 = ?",
    options: [
      { text: "56", type: "A" },
      { text: "54", type: "B" },
      { text: "58", type: "C" },
      { text: "52", type: "D" },
    ],
  },
  {
    id: 3,
    question: "100 - 37 = ?",
    options: [
      { text: "63", type: "A" },
      { text: "67", type: "B" },
      { text: "73", type: "C" },
      { text: "53", type: "D" },
    ],
  },
  {
    id: 4,
    question: "144 ÷ 12 = ?",
    options: [
      { text: "12", type: "A" },
      { text: "14", type: "B" },
      { text: "11", type: "C" },
      { text: "13", type: "D" },
    ],
  },
  {
    id: 5,
    question: "25 × 4 = ?",
    options: [
      { text: "100", type: "A" },
      { text: "90", type: "B" },
      { text: "110", type: "C" },
      { text: "80", type: "D" },
    ],
  },
  {
    id: 6,
    question: "78 + 45 = ?",
    options: [
      { text: "123", type: "A" },
      { text: "133", type: "B" },
      { text: "113", type: "C" },
      { text: "125", type: "D" },
    ],
  },
  {
    id: 7,
    question: "9 × 9 = ?",
    options: [
      { text: "81", type: "A" },
      { text: "72", type: "B" },
      { text: "90", type: "C" },
      { text: "79", type: "D" },
    ],
  },
  {
    id: 8,
    question: "250 - 87 = ?",
    options: [
      { text: "163", type: "A" },
      { text: "173", type: "B" },
      { text: "153", type: "C" },
      { text: "167", type: "D" },
    ],
  },
  {
    id: 9,
    question: "15 × 15 = ?",
    options: [
      { text: "225", type: "A" },
      { text: "215", type: "B" },
      { text: "235", type: "C" },
      { text: "220", type: "D" },
    ],
  },
  {
    id: 10,
    question: "1000 ÷ 8 = ?",
    options: [
      { text: "125", type: "A" },
      { text: "115", type: "B" },
      { text: "130", type: "C" },
      { text: "120", type: "D" },
    ],
  },
  {
    id: 11,
    question: "17 + 38 + 25 = ?",
    options: [
      { text: "80", type: "A" },
      { text: "70", type: "B" },
      { text: "90", type: "C" },
      { text: "85", type: "D" },
    ],
  },
  {
    id: 12,
    question: "12 × 11 = ?",
    options: [
      { text: "132", type: "A" },
      { text: "122", type: "B" },
      { text: "142", type: "C" },
      { text: "121", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kalkulator Manusia",
    emoji: "🧮",
    description: "Kemampuan hitung cepat kamu sangat baik! Mental math kamu sharp dan akurat. Kamu bisa kalkulasi dengan cepat dan minim error.",
    traits: ["Mental math sharp", "Quick thinker", "Accurate", "Numeracy tinggi"],
    strengths: ["Fast calculations", "Good with numbers", "Reliable math skills"],
    weaknesses: ["Mungkin terlalu confident kadang"],
    tips: ["Skill ini bagus untuk finance, trading, everyday life"],
  },
  B: {
    type: "B",
    title: "Hitung Cepat Baik",
    emoji: "➕",
    description: "Kemampuan hitung cepat kamu cukup baik! Sebagian besar kalkulasi bisa dilakukan dengan tepat. Terus latih untuk speed dan accuracy!",
    traits: ["Cukup cepat", "Mostly accurate", "Berkembang"],
    strengths: ["Good foundation", "Consistent", "Room to improve"],
    weaknesses: ["Kadang slip on tricky numbers"],
    tips: ["Practice mental math daily", "Learn math tricks"],
  },
  C: {
    type: "C",
    title: "Hitung Perlu Latihan",
    emoji: "📐",
    description: "Kemampuan hitung cepat kamu masih perlu latihan. Beberapa kalkulasi basic sudah oke tapi speed dan accuracy bisa ditingkatkan.",
    traits: ["Masih belajar", "Needs practice", "Potential ada"],
    strengths: ["Basic math ada", "Willing to try"],
    weaknesses: ["Slow in calculation", "Accuracy needs work"],
    tips: ["Use apps untuk latihan", "Start with multiplication tables"],
  },
  D: {
    type: "D",
    title: "Hitung Dasar",
    emoji: "🌱",
    description: "Kemampuan hitung cepat kamu masih di tahap dasar. Tidak perlu malu - mental math adalah skill yang bisa dipelajari dan dilatih.",
    traits: ["Pemula", "Perlu fondasi", "Dapat berkembang"],
    strengths: ["Taking the test is first step"],
    weaknesses: ["Math foundations need strengthening"],
    tips: ["Practice regularly", "Use everyday situations untuk latihan"],
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
