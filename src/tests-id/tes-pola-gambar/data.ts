// Tes Pola Gambar
// Uji kemampuan mengenali pola visual dan spasial!

export const questions = [
  {
    id: 1,
    question: "Pola: ○ □ ○ □ ○ ... Simbol selanjutnya adalah?",
    options: [
      { text: "□", type: "A" },
      { text: "○", type: "B" },
      { text: "△", type: "C" },
      { text: "◇", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pola: △ △ □ △ △ □ ... Simbol selanjutnya adalah?",
    options: [
      { text: "△", type: "A" },
      { text: "□", type: "B" },
      { text: "○", type: "C" },
      { text: "◇", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pola: ● ○ ● ●  ○ ● ● ● ... Simbol selanjutnya adalah?",
    options: [
      { text: "○", type: "A" },
      { text: "●", type: "B" },
      { text: "□", type: "C" },
      { text: "△", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Jika bentuk berputar 90° searah jarum jam setiap langkah, setelah 3 rotasi posisinya?",
    options: [
      { text: "270° dari posisi awal", type: "A" },
      { text: "180° dari posisi awal", type: "B" },
      { text: "90° dari posisi awal", type: "C" },
      { text: "Kembali ke posisi awal", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Pola: 1 kotak, 2 kotak, 4 kotak, 8 kotak... Jumlah kotak selanjutnya?",
    options: [
      { text: "16 kotak", type: "A" },
      { text: "12 kotak", type: "B" },
      { text: "10 kotak", type: "C" },
      { text: "14 kotak", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Jika sebuah kubus dilipat dari pola jaring-jaring, berapa sisi yang saling berhadapan?",
    options: [
      { text: "3 pasang sisi berhadapan", type: "A" },
      { text: "2 pasang sisi berhadapan", type: "B" },
      { text: "4 pasang sisi berhadapan", type: "C" },
      { text: "6 pasang sisi berhadapan", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pola: ↑ → ↓ ← ... Arah selanjutnya?",
    options: [
      { text: "↑", type: "A" },
      { text: "→", type: "B" },
      { text: "↓", type: "C" },
      { text: "←", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sebuah segitiga dicerminkan horizontal. Segitiga yang menunjuk ke atas akan?",
    options: [
      { text: "Menunjuk ke bawah", type: "A" },
      { text: "Tetap ke atas", type: "B" },
      { text: "Menunjuk ke kanan", type: "C" },
      { text: "Menunjuk ke kiri", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Pola grid 3x3 dengan 1 kotak kosong di tengah. Berapa kotak yang terisi?",
    options: [
      { text: "8 kotak", type: "A" },
      { text: "9 kotak", type: "B" },
      { text: "6 kotak", type: "C" },
      { text: "7 kotak", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pola: ○ (kecil) → ○ (sedang) → ○ (besar) → ... Apa selanjutnya?",
    options: [
      { text: "○ (kecil) - pola berulang", type: "A" },
      { text: "○ (lebih besar lagi)", type: "B" },
      { text: "□ (kecil)", type: "C" },
      { text: "Tidak ada pola", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Berapa banyak segitiga dalam bintang David (hexagram)?",
    options: [
      { text: "2 segitiga besar + 6 segitiga kecil = 8", type: "A" },
      { text: "6 segitiga", type: "B" },
      { text: "12 segitiga", type: "C" },
      { text: "2 segitiga", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pola: hitam-putih-hitam pada baris 1, putih-hitam-putih pada baris 2. Baris 3?",
    options: [
      { text: "hitam-putih-hitam", type: "A" },
      { text: "putih-hitam-putih", type: "B" },
      { text: "hitam-hitam-hitam", type: "C" },
      { text: "putih-putih-putih", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Visual Pattern Master",
    emoji: "👁️",
    description: "Kemampuan mengenali pola visual kamu excellent! Kamu punya kecerdasan spasial yang tinggi dan bisa dengan mudah melihat pattern dalam bentuk dan gambar.",
    traits: ["Visual thinker", "Spasial kuat", "Pattern recognition", "Detail oriented"],
    strengths: ["Design aptitude", "Problem solving visual", "Architecture minded"],
    weaknesses: ["Mungkin over-rely on visual cues"],
    tips: ["Cocok untuk design, architecture, art, engineering"],
  },
  B: {
    type: "B",
    title: "Visual Pattern Baik",
    emoji: "🎨",
    description: "Kemampuan pola visual kamu cukup baik! Kamu bisa mengenali sebagian besar pattern dengan tepat. Terus latih untuk level yang lebih kompleks!",
    traits: ["Cukup visual", "Observant", "Berkembang"],
    strengths: ["Dasar pattern kuat", "Logical visual thinking"],
    weaknesses: ["Pola kompleks masih challenging"],
    tips: ["Latih dengan puzzle dan game visual", "Explore spatial reasoning"],
  },
  C: {
    type: "C",
    title: "Visual Pattern Berkembang",
    emoji: "🔍",
    description: "Kemampuan pola visual kamu masih berkembang. Beberapa pattern bisa dikenali tapi yang lebih kompleks masih challenging.",
    traits: ["Masih belajar", "Perlu latihan", "Potensi ada"],
    strengths: ["Awareness ada", "Mencoba aktif"],
    weaknesses: ["Spatial reasoning perlu dikuatkan"],
    tips: ["Main puzzle, tangram, atau rubik", "Latih dengan berbagai jenis pattern"],
  },
  D: {
    type: "D",
    title: "Visual Pattern Dasar",
    emoji: "🌱",
    description: "Kemampuan pola visual kamu masih di tahap awal. Visual-spatial intelligence bisa dilatih dengan games dan latihan yang tepat.",
    traits: ["Pemula", "Perlu exposure", "Dapat berkembang"],
    strengths: ["Mengidentifikasi area improve"],
    weaknesses: ["Fondasi spatial lemah"],
    tips: ["Mulai dari pattern sederhana", "Games like Tetris help!"],
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
