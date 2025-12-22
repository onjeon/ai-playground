// Tes Logika Verbal
// Uji kemampuan penalaran logika dengan kata-kata!

export const questions = [
  {
    id: 1,
    question: "Semua bunga membutuhkan air. Mawar adalah bunga. Kesimpulannya?",
    options: [
      { text: "Mawar membutuhkan air", type: "A" },
      { text: "Air membutuhkan mawar", type: "B" },
      { text: "Mawar tidak membutuhkan air", type: "C" },
      { text: "Semua yang butuh air adalah bunga", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tidak semua burung bisa terbang. Penguin adalah burung. Maka?",
    options: [
      { text: "Penguin belum tentu bisa terbang", type: "A" },
      { text: "Penguin pasti bisa terbang", type: "B" },
      { text: "Penguin bukan burung", type: "C" },
      { text: "Semua burung seperti penguin", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Jika hujan turun, jalanan basah. Jalanan basah. Maka?",
    options: [
      { text: "Pasti hujan turun", type: "B" },
      { text: "Belum tentu hujan turun", type: "A" },
      { text: "Tidak mungkin hujan turun", type: "C" },
      { text: "Jalanan akan kering", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Semua dokter adalah manusia. Beberapa manusia adalah atlet. Maka?",
    options: [
      { text: "Beberapa dokter mungkin adalah atlet", type: "A" },
      { text: "Semua dokter adalah atlet", type: "B" },
      { text: "Tidak ada dokter yang atlet", type: "C" },
      { text: "Semua atlet adalah dokter", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ani lebih tinggi dari Budi. Cici lebih pendek dari Budi. Siapa paling pendek?",
    options: [
      { text: "Cici", type: "A" },
      { text: "Budi", type: "B" },
      { text: "Ani", type: "C" },
      { text: "Tidak dapat ditentukan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Jika X maka Y. Jika Y maka Z. Jika X terjadi, maka?",
    options: [
      { text: "Z pasti terjadi", type: "A" },
      { text: "Z mungkin terjadi", type: "B" },
      { text: "Z tidak terjadi", type: "C" },
      { text: "Y tidak terjadi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Beberapa kucing berwarna hitam. Semua yang hitam menyerap panas. Maka?",
    options: [
      { text: "Beberapa kucing menyerap panas", type: "A" },
      { text: "Semua kucing menyerap panas", type: "B" },
      { text: "Tidak ada kucing yang menyerap panas", type: "C" },
      { text: "Semua yang menyerap panas adalah kucing", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tidak ada reptil yang berbulu. Semua burung berbulu. Maka?",
    options: [
      { text: "Tidak ada burung yang reptil", type: "A" },
      { text: "Beberapa reptil adalah burung", type: "B" },
      { text: "Semua reptil adalah burung", type: "C" },
      { text: "Beberapa burung adalah reptil", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Semua A adalah B. Semua B adalah C. Beberapa C adalah D. Maka?",
    options: [
      { text: "Beberapa A mungkin adalah D", type: "A" },
      { text: "Semua A adalah D", type: "B" },
      { text: "Tidak ada A yang D", type: "C" },
      { text: "Semua D adalah A", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Jika belajar maka lulus. Doni tidak belajar. Maka?",
    options: [
      { text: "Doni tidak pasti lulus atau tidak lulus", type: "A" },
      { text: "Doni pasti tidak lulus", type: "B" },
      { text: "Doni pasti lulus", type: "C" },
      { text: "Doni mungkin belajar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Semua mahasiswa harus bayar SPP. Andi tidak bayar SPP. Maka?",
    options: [
      { text: "Andi bukan mahasiswa", type: "A" },
      { text: "Andi adalah mahasiswa", type: "B" },
      { text: "Andi tidak harus bayar SPP", type: "C" },
      { text: "Tidak dapat disimpulkan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Semua yang rajin akan sukses. Tidak semua yang sukses adalah kaya. Maka?",
    options: [
      { text: "Tidak semua yang rajin akan kaya", type: "A" },
      { text: "Semua yang rajin akan kaya", type: "B" },
      { text: "Tidak ada yang rajin sukses", type: "C" },
      { text: "Semua yang kaya adalah rajin", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Logika Verbal Cemerlang",
    emoji: "🧠",
    description: "Kemampuan logika verbal kamu sangat baik! Kamu bisa memahami hubungan antar premis dan menarik kesimpulan dengan tepat. Skill berpikir kritis kamu excellent!",
    traits: ["Analitis", "Kritis", "Logis", "Teliti"],
    strengths: ["Penalaran kuat", "Memahami argumen", "Deteksi kesalahan logika"],
    weaknesses: ["Mungkin terlalu analitis kadang"],
    tips: ["Gunakan skill ini untuk evaluasi informasi", "Cocok untuk bidang hukum, penelitian"],
  },
  B: {
    type: "B",
    title: "Logika Verbal Berkembang",
    emoji: "📈",
    description: "Kemampuan logika verbal kamu cukup baik tapi masih ada ruang untuk improvement. Kadang terjebak dalam kesalahan logika umum seperti affirming the consequent.",
    traits: ["Cukup analitis", "Masih belajar", "Potensi bagus"],
    strengths: ["Dasar logika ada", "Mau berpikir", "Bisa dikembangkan"],
    weaknesses: ["Kadang terjebak logical fallacy", "Perlu latihan lebih"],
    tips: ["Latih dengan soal silogisme", "Pelajari logical fallacies"],
  },
  C: {
    type: "C",
    title: "Logika Verbal Perlu Latihan",
    emoji: "📚",
    description: "Kemampuan logika verbal kamu masih perlu dikembangkan. Mungkin sering terjebak dalam kesimpulan yang tidak valid dari premis yang diberikan.",
    traits: ["Intuitif", "Perlu struktur", "Masih berkembang"],
    strengths: ["Intuisi ada", "Mau belajar", "Awareness mulai terbentuk"],
    weaknesses: ["Kesalahan logika sering", "Kurang sistematis"],
    tips: ["Mulai dari dasar logika", "Latih step by step reasoning"],
  },
  D: {
    type: "D",
    title: "Logika Verbal Dasar",
    emoji: "🌱",
    description: "Kemampuan logika verbal kamu masih di tahap dasar. Tidak perlu khawatir - logika adalah skill yang bisa dilatih. Mulai dari pemahaman dasar silogisme.",
    traits: ["Pemula", "Perlu fondasi", "Potensi ada"],
    strengths: ["Mengambil tes ini adalah langkah pertama", "Awareness terbentuk"],
    weaknesses: ["Fondasi logika lemah", "Perlu banyak latihan"],
    tips: ["Pelajari dasar-dasar logika", "Practice makes perfect", "Jangan menyerah"],
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
