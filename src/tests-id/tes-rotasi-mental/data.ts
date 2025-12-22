// Tes Rotasi Mental
// Uji kemampuan memutar objek dalam pikiran!

export const questions = [
  {
    id: 1,
    question: "Huruf 'L' diputar 90° searah jarum jam. Posisinya menjadi seperti?",
    options: [
      { text: "Seperti 'L' terbalik horizontal (⌐)", type: "A" },
      { text: "Seperti 'L' terbalik vertikal", type: "B" },
      { text: "Tetap seperti 'L'", type: "C" },
      { text: "Seperti angka '7'", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Segitiga dengan ujung ke atas diputar 180°. Ujungnya sekarang?",
    options: [
      { text: "Menunjuk ke bawah", type: "A" },
      { text: "Menunjuk ke atas", type: "B" },
      { text: "Menunjuk ke kanan", type: "C" },
      { text: "Menunjuk ke kiri", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Panah → diputar 90° berlawanan jarum jam. Arahnya menjadi?",
    options: [
      { text: "↑ (ke atas)", type: "A" },
      { text: "↓ (ke bawah)", type: "B" },
      { text: "← (ke kiri)", type: "C" },
      { text: "→ (tetap)", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Angka '6' diputar 180°. Akan terlihat seperti?",
    options: [
      { text: "Angka '9'", type: "A" },
      { text: "Angka '6'", type: "B" },
      { text: "Angka '8'", type: "C" },
      { text: "Angka '0'", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Persegi dengan titik di pojok kiri atas diputar 90° searah jarum jam. Titik ada di?",
    options: [
      { text: "Pojok kanan atas", type: "A" },
      { text: "Pojok kiri bawah", type: "B" },
      { text: "Pojok kanan bawah", type: "C" },
      { text: "Tetap di pojok kiri atas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Huruf 'N' diputar 90° searah jarum jam. Akan terlihat seperti?",
    options: [
      { text: "Huruf 'Z'", type: "A" },
      { text: "Huruf 'N'", type: "B" },
      { text: "Huruf 'U'", type: "C" },
      { text: "Huruf 'M'", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Jam menunjuk pukul 3 (→). Diputar 90° searah jarum jam. Sekarang menunjuk?",
    options: [
      { text: "Pukul 6 (↓)", type: "A" },
      { text: "Pukul 12 (↑)", type: "B" },
      { text: "Pukul 9 (←)", type: "C" },
      { text: "Tetap pukul 3", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Huruf 'F' diputar 180°. Akan terlihat seperti?",
    options: [
      { text: "Huruf 'F' terbalik dan flipped", type: "A" },
      { text: "Huruf 'F' sama persis", type: "B" },
      { text: "Huruf 'E'", type: "C" },
      { text: "Angka '7'", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tanda plus '+' diputar 45°. Akan terlihat seperti?",
    options: [
      { text: "Tanda 'x'", type: "A" },
      { text: "Tanda '+'", type: "B" },
      { text: "Tanda '-'", type: "C" },
      { text: "Tanda '/'", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Huruf 'b' diputar 180°. Akan terlihat seperti?",
    options: [
      { text: "Huruf 'q'", type: "A" },
      { text: "Huruf 'd'", type: "B" },
      { text: "Huruf 'p'", type: "C" },
      { text: "Huruf 'b'", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Setengah lingkaran ⌓ (cembung ke atas) diputar 180°. Bentuknya?",
    options: [
      { text: "Cembung ke bawah ⌒", type: "A" },
      { text: "Tetap cembung ke atas", type: "B" },
      { text: "Cembung ke kanan", type: "C" },
      { text: "Cembung ke kiri", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bentuk 'T' diputar 90° berlawanan jarum jam. Bentuknya?",
    options: [
      { text: "Seperti '⊢' (T rebah ke kanan)", type: "A" },
      { text: "Seperti '⊣' (T rebah ke kiri)", type: "B" },
      { text: "Seperti '⊥' (T terbalik)", type: "C" },
      { text: "Tetap 'T'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Rotasi Mental Expert",
    emoji: "🔄",
    description: "Kemampuan rotasi mental kamu excellent! Kamu bisa dengan mudah membayangkan objek berputar dalam pikiran. Spatial reasoning kamu sangat baik!",
    traits: ["Spatial genius", "Visual thinker", "3D imagination", "Accurate"],
    strengths: ["Engineering aptitude", "Architecture minded", "Good at puzzles"],
    weaknesses: ["Mungkin over-confident kadang"],
    tips: ["Cocok untuk engineering, design, surgery, pilot"],
  },
  B: {
    type: "B",
    title: "Rotasi Mental Baik",
    emoji: "🎯",
    description: "Kemampuan rotasi mental kamu cukup baik! Sebagian besar rotasi bisa dibayangkan dengan tepat. Terus latih untuk lebih kompleks!",
    traits: ["Good spatial", "Visual capable", "Developing"],
    strengths: ["Decent 3D thinking", "Can improve"],
    weaknesses: ["Complex rotations challenging"],
    tips: ["Practice with 3D puzzles", "Play spatial games"],
  },
  C: {
    type: "C",
    title: "Rotasi Mental Berkembang",
    emoji: "🧩",
    description: "Kemampuan rotasi mental kamu masih berkembang. Simple rotations oke tapi yang kompleks masih challenging. This skill can be trained!",
    traits: ["Developing", "Needs practice", "Potential"],
    strengths: ["Basic rotation okay"],
    weaknesses: ["Complex mental rotation difficult"],
    tips: ["Start with simple objects", "Use physical models to help"],
  },
  D: {
    type: "D",
    title: "Rotasi Mental Dasar",
    emoji: "🌱",
    description: "Kemampuan rotasi mental kamu masih di tahap awal. Spatial reasoning bisa dilatih dengan games dan practice yang tepat. Don't give up!",
    traits: ["Beginner", "Needs training", "Room to grow"],
    strengths: ["Identified area for improvement"],
    weaknesses: ["Spatial reasoning needs work"],
    tips: ["Rubik's cube dan Tetris help!", "Practice visualizing simple rotations"],
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
