// Tes Penalaran Abstrak
// Uji kemampuan berpikir abstrak dan menemukan pola tersembunyi!

export const questions = [
  {
    id: 1,
    question: "Jika ★ = 3 dan ◆ = 5, maka ★ + ◆ = ?",
    options: [
      { text: "8", type: "A" },
      { text: "15", type: "B" },
      { text: "2", type: "C" },
      { text: "35", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pola: AB, CD, EF, GH, ... Selanjutnya?",
    options: [
      { text: "IJ", type: "A" },
      { text: "HI", type: "B" },
      { text: "JK", type: "C" },
      { text: "GI", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Jika BIRU dikodekan 2-9-18-21, maka MERAH dikodekan?",
    options: [
      { text: "13-5-18-1-8", type: "A" },
      { text: "12-5-17-1-8", type: "B" },
      { text: "13-4-18-2-8", type: "C" },
      { text: "14-5-18-1-9", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pola: 1A, 2B, 4C, 8D, ... Selanjutnya?",
    options: [
      { text: "16E", type: "A" },
      { text: "12E", type: "B" },
      { text: "10E", type: "C" },
      { text: "32E", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Jika □ + □ = 10 dan □ + △ = 13, maka △ = ?",
    options: [
      { text: "8", type: "A" },
      { text: "3", type: "B" },
      { text: "5", type: "C" },
      { text: "7", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Pola: Z, X, V, T, ... Huruf selanjutnya?",
    options: [
      { text: "R", type: "A" },
      { text: "S", type: "B" },
      { text: "U", type: "C" },
      { text: "Q", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Jika KODE menghasilkan MPHG (setiap huruf +2), maka RUMAH menjadi?",
    options: [
      { text: "TWOCJ", type: "A" },
      { text: "SVNCJ", type: "B" },
      { text: "TUOBJ", type: "C" },
      { text: "SWOBH", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pola: 2-4, 3-9, 4-16, 5-? Angka kedua adalah?",
    options: [
      { text: "25", type: "A" },
      { text: "20", type: "B" },
      { text: "30", type: "C" },
      { text: "15", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Jika ● = 2, ■ = 3, ▲ = 4, maka ● × ■ + ▲ = ?",
    options: [
      { text: "10", type: "A" },
      { text: "9", type: "B" },
      { text: "14", type: "C" },
      { text: "24", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pola: ACE, BDF, CEG, DFH, ... Selanjutnya?",
    options: [
      { text: "EGI", type: "A" },
      { text: "FGH", type: "B" },
      { text: "DEF", type: "C" },
      { text: "GHI", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Jika 3★4 = 7 dan 5★2 = 7 dan 8★1 = 9, maka operasi ★ adalah?",
    options: [
      { text: "Penjumlahan (+)", type: "A" },
      { text: "Perkalian (×)", type: "B" },
      { text: "Pengurangan (-)", type: "C" },
      { text: "Pembagian (÷)", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pola: 1-1, 2-4, 3-9, 4-16. Hubungan antara angka pertama dan kedua?",
    options: [
      { text: "Angka kedua adalah kuadrat angka pertama", type: "A" },
      { text: "Angka kedua adalah dua kali angka pertama", type: "B" },
      { text: "Angka kedua adalah angka pertama + 3", type: "C" },
      { text: "Tidak ada hubungan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Penalaran Abstrak Tinggi",
    emoji: "🧠",
    description: "Kemampuan penalaran abstrak kamu excellent! Kamu bisa menemukan pola tersembunyi dan berpikir di luar kotak dengan mudah. Fluid intelligence tinggi!",
    traits: ["Abstract thinker", "Pattern finder", "Logical", "Creative problem solver"],
    strengths: ["See hidden patterns", "Novel problem solving", "High IQ potential"],
    weaknesses: ["Might overcomplicate simple things"],
    tips: ["Cocok untuk research, programming, strategy roles"],
  },
  B: {
    type: "B",
    title: "Penalaran Abstrak Baik",
    emoji: "🎯",
    description: "Kemampuan penalaran abstrak kamu cukup baik! Sebagian besar pola bisa ditemukan dengan tepat. Terus asah untuk level yang lebih tinggi!",
    traits: ["Good abstraction", "Logical", "Developing"],
    strengths: ["Pattern recognition decent", "Can handle complexity"],
    weaknesses: ["Very abstract patterns challenging"],
    tips: ["Practice with more puzzles", "Try IQ test books"],
  },
  C: {
    type: "C",
    title: "Penalaran Abstrak Berkembang",
    emoji: "📈",
    description: "Kemampuan penalaran abstrak kamu masih berkembang. Beberapa pola bisa ditemukan tapi yang lebih kompleks masih challenging.",
    traits: ["Developing", "Needs practice", "Potential"],
    strengths: ["Basic patterns okay", "Can improve"],
    weaknesses: ["Complex abstractions difficult"],
    tips: ["Start with simpler puzzles", "Build up gradually"],
  },
  D: {
    type: "D",
    title: "Penalaran Abstrak Dasar",
    emoji: "🌱",
    description: "Kemampuan penalaran abstrak kamu masih di tahap awal. Abstract thinking adalah skill yang bisa dikembangkan dengan latihan yang tepat.",
    traits: ["Beginner", "Needs foundation", "Can develop"],
    strengths: ["Identified area to work on"],
    weaknesses: ["Abstract reasoning needs strengthening"],
    tips: ["Play logic games", "Practice pattern recognition daily"],
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
