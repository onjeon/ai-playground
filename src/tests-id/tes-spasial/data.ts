export const questions = [
  {
    id: 1,
    question: "Jika sebuah kubus diputar 90° ke kanan, sisi mana yang akan menghadap ke atas jika sisi depan awalnya berwarna merah dan sisi atas berwarna biru?",
    options: [
      { text: "Sisi yang tadinya di kiri", type: "A" },
      { text: "Sisi merah (depan)", type: "B" },
      { text: "Sisi biru (atas)", type: "C" },
      { text: "Sisi yang tadinya di kanan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Berapa banyak kubus kecil yang diperlukan untuk membuat kubus besar 3×3×3?",
    options: [
      { text: "27 kubus", type: "A" },
      { text: "9 kubus", type: "B" },
      { text: "18 kubus", type: "C" },
      { text: "24 kubus", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Jika kamu berdiri menghadap utara, lalu berputar 180°, kamu akan menghadap ke arah?",
    options: [
      { text: "Selatan", type: "A" },
      { text: "Timur", type: "B" },
      { text: "Barat", type: "C" },
      { text: "Utara", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bentuk jaring-jaring manakah yang TIDAK bisa dilipat menjadi kubus?",
    options: [
      { text: "6 persegi dalam satu baris lurus", type: "A" },
      { text: "Bentuk T dengan 4 persegi horizontal dan 2 di atas", type: "B" },
      { text: "Bentuk salib (4 persegi memanjang, 1 di kiri, 1 di kanan)", type: "C" },
      { text: "Bentuk L dengan penambahan yang tepat", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Jika cermin diletakkan di sisi kanan huruf 'b', apa yang akan terlihat di cermin?",
    options: [
      { text: "d", type: "A" },
      { text: "b", type: "B" },
      { text: "p", type: "C" },
      { text: "q", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sebuah kertas persegi dilipat dua kali lalu dilubangi di tengah. Berapa lubang yang muncul saat dibuka?",
    options: [
      { text: "4 lubang", type: "A" },
      { text: "2 lubang", type: "B" },
      { text: "1 lubang", type: "C" },
      { text: "8 lubang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Dari atas (bird's eye view), sebuah piramida segi empat akan terlihat seperti?",
    options: [
      { text: "Persegi dengan garis diagonal dari sudut ke sudut", type: "A" },
      { text: "Segitiga", type: "B" },
      { text: "Persegi tanpa garis", type: "C" },
      { text: "Lingkaran", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Jika sebuah balok memiliki panjang 4, lebar 3, dan tinggi 2, berapa volume totalnya?",
    options: [
      { text: "24", type: "A" },
      { text: "9", type: "B" },
      { text: "20", type: "C" },
      { text: "14", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Manakah bentuk yang akan terbentuk jika segitiga diputar 360° pada satu sisinya sebagai poros?",
    options: [
      { text: "Kerucut", type: "A" },
      { text: "Silinder", type: "B" },
      { text: "Bola", type: "C" },
      { text: "Prisma", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kamu berjalan 3 blok ke utara, 2 blok ke timur, 3 blok ke selatan. Di mana posisimu relatif terhadap titik awal?",
    options: [
      { text: "2 blok ke timur dari titik awal", type: "A" },
      { text: "Kembali ke titik awal", type: "B" },
      { text: "3 blok ke utara", type: "C" },
      { text: "5 blok dari titik awal", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Berapa sisi yang dimiliki oleh sebuah dodecahedron?",
    options: [
      { text: "12 sisi", type: "A" },
      { text: "10 sisi", type: "B" },
      { text: "20 sisi", type: "C" },
      { text: "8 sisi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Jika dua kubus identik ditumpuk, berapa total sisi yang terlihat dari luar?",
    options: [
      { text: "10 sisi", type: "A" },
      { text: "12 sisi", type: "B" },
      { text: "8 sisi", type: "C" },
      { text: "11 sisi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Jenius Spasial",
    emoji: "🧊",
    description: "Luar biasa! Kemampuan spasialmu sangat tinggi! Kamu bisa membayangkan dan memanipulasi objek 3D dalam pikiran dengan mudah. Kamu cocok untuk bidang arsitektur, desain, atau engineering!",
    traits: ["Visual-spatial kuat", "3D thinking", "Navigasi baik", "Geometris"],
    strengths: ["Bisa visualisasi objek 3D", "Navigasi dan orientasi yang baik", "Problem solving visual"],
    weaknesses: ["Mungkin kurang sabar dengan teks panjang"],
    tips: ["Pertimbangkan karir di arsitektur, desain, atau game development", "Latih dengan puzzle 3D dan origami", "Gunakan kemampuanmu untuk planning dan design"],
  },
  B: {
    type: "B",
    title: "Pemikir Visual",
    emoji: "🎯",
    description: "Bagus! Kemampuan spasialmu cukup baik. Kamu bisa memahami sebagian besar konsep 3D dan transformasi objek. Dengan latihan lebih, kamu bisa meningkat lebih jauh!",
    traits: ["Cukup visual", "Berkembang", "Logis", "Terstruktur"],
    strengths: ["Fondasi spasial yang baik", "Bisa memahami diagram dan peta", "Berpotensi meningkat"],
    weaknesses: ["Beberapa transformasi kompleks masih challenging"],
    tips: ["Latih dengan puzzle dan games 3D", "Coba origami atau model building", "Visualisasikan sebelum menjawab"],
  },
  C: {
    type: "C",
    title: "Belajar Spasial",
    emoji: "📈",
    description: "Kemampuan spasialmu masih dalam pengembangan. Tidak masalah! Dengan latihan dan eksposur yang lebih banyak terhadap konsep 3D, kamu bisa meningkat.",
    traits: ["Perlu latihan", "Berpotensi", "Bisa berkembang"],
    strengths: ["Potensi untuk meningkat", "Bisa belajar dari visualisasi"],
    weaknesses: ["Visualisasi 3D perlu dilatih"],
    tips: ["Main puzzle 3D dan game strategi", "Coba menggambar objek dari berbagai sudut", "Gunakan model fisik untuk memahami konsep"],
  },
  D: {
    type: "D",
    title: "Mulai Eksplorasi 3D",
    emoji: "🌱",
    description: "Kemampuan spasial mungkin bukan yang sering kamu latih. Tapi ini skill yang bisa dikembangkan! Mulai dengan aktivitas sederhana seperti puzzle atau navigasi.",
    traits: ["Perlu fondasi", "Fresh start", "Berpotensi"],
    strengths: ["Bisa belajar dengan cara yang benar"],
    weaknesses: ["Fondasi perlu dibangun"],
    tips: ["Mulai dengan puzzle sederhana", "Main game yang membutuhkan navigasi", "Coba menggambar dan origami"],
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
  
  const score = typeCount['A'];
  if (score >= 10) return results.A;
  if (score >= 7) return results.B;
  if (score >= 4) return results.C;
  return results.D;
}
