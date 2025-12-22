// Tes Kemampuan Numerik
// Tes ini mengukur kemampuan numerik dan logika matematika kamu!

export const questions = [
  {
    id: 1,
    question: "Jika harga naik 20%, lalu diskon 20%, maka harga akhir...",
    options: [
      { text: "Sama dengan harga awal", type: "B" },
      { text: "Lebih rendah dari harga awal", type: "A" },
      { text: "Lebih tinggi dari harga awal", type: "C" },
      { text: "Tidak bisa ditentukan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sebuah mobil menempuh 120 km dalam 2 jam. Berapa kecepatan rata-ratanya?",
    options: [
      { text: "60 km/jam", type: "A" },
      { text: "50 km/jam", type: "B" },
      { text: "70 km/jam", type: "C" },
      { text: "55 km/jam", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Jika 3 orang bisa menyelesaikan pekerjaan dalam 12 hari, berapa lama jika dikerjakan 4 orang?",
    options: [
      { text: "9 hari", type: "A" },
      { text: "10 hari", type: "B" },
      { text: "8 hari", type: "C" },
      { text: "6 hari", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Rasio umur Ani dan Budi adalah 3:5. Jika selisih umur mereka 10 tahun, berapa umur Ani?",
    options: [
      { text: "15 tahun", type: "A" },
      { text: "20 tahun", type: "B" },
      { text: "12 tahun", type: "C" },
      { text: "18 tahun", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sebuah toko memberikan diskon 30%. Jika harga setelah diskon Rp 70.000, berapa harga aslinya?",
    options: [
      { text: "Rp 100.000", type: "A" },
      { text: "Rp 91.000", type: "B" },
      { text: "Rp 95.000", type: "C" },
      { text: "Rp 85.000", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Berapa % dari 80 adalah 20?",
    options: [
      { text: "25%", type: "A" },
      { text: "20%", type: "B" },
      { text: "30%", type: "C" },
      { text: "15%", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seorang pedagang untung 25% dari modal. Jika untungnya Rp 50.000, berapa modalnya?",
    options: [
      { text: "Rp 200.000", type: "A" },
      { text: "Rp 150.000", type: "B" },
      { text: "Rp 250.000", type: "C" },
      { text: "Rp 175.000", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Rata-rata nilai 5 siswa adalah 80. Jika satu siswa ditambah dengan nilai 92, rata-rata baru adalah...",
    options: [
      { text: "82", type: "A" },
      { text: "84", type: "B" },
      { text: "81", type: "C" },
      { text: "83", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sebuah bak diisi air dengan keran A dalam 6 jam, keran B dalam 3 jam. Jika keduanya dibuka bersamaan...",
    options: [
      { text: "2 jam", type: "A" },
      { text: "3 jam", type: "B" },
      { text: "4 jam", type: "C" },
      { text: "4.5 jam", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bunga majemuk 10% per tahun. Modal Rp 1.000.000 setelah 2 tahun menjadi...",
    options: [
      { text: "Rp 1.210.000", type: "A" },
      { text: "Rp 1.200.000", type: "B" },
      { text: "Rp 1.220.000", type: "C" },
      { text: "Rp 1.100.000", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Jenius Numerik",
    emoji: "🏆",
    description: "Kemampuan numerikmu sangat excellent! Kamu bisa menangkap konsep matematika dengan cepat dan menerapkannya dengan akurat. Problem solving numerik adalah keahlianmu!",
    traits: ["Analitis", "Numerically gifted", "Problem solver", "Accurate"],
    strengths: ["Cepat memahami soal numerik", "Jarang salah hitung", "Logika kuat"],
    weaknesses: ["Mungkin kurang sabar dengan orang yang lambat di math"],
    tips: ["Pertimbangkan karir di finance, data science, atau engineering", "Kemampuanmu sangat berharga!"],
  },
  B: {
    type: "B",
    title: "Penghitung Kompeten",
    emoji: "📐",
    description: "Kemampuan numerikmu solid dan bisa diandalkan! Kamu paham konsep dasar dengan baik dan bisa menyelesaikan kebanyakan masalah numerik.",
    traits: ["Kompeten", "Reliable", "Methodical", "Practical"],
    strengths: ["Cukup untuk kebutuhan profesional", "Bisa belajar konsep baru", "Steady performer"],
    weaknesses: ["Soal yang kompleks butuh waktu lebih"],
    tips: ["Latih terus dengan soal-soal applied math", "Kemampuanmu cukup untuk banyak pekerjaan!"],
  },
  C: {
    type: "C",
    title: "Numerik Dasar",
    emoji: "📊",
    description: "Kemampuan numerikmu mencakup dasar-dasar yang diperlukan. Beberapa konsep lanjutan mungkin masih challenging, tapi bisa dipelajari.",
    traits: ["Dasar", "Learning", "Developing", "Practical"],
    strengths: ["Menguasai operasi dasar", "Bisa improve dengan latihan"],
    weaknesses: ["Konsep lanjutan masih sulit"],
    tips: ["Review konsep persentase dan rasio", "Latih dengan aplikasi seperti Khan Academy"],
  },
  D: {
    type: "D",
    title: "Perlu Latihan Numerik",
    emoji: "📚",
    description: "Kemampuan numerikmu butuh pengembangan lebih lanjut. Tidak apa-apa, banyak orang di posisi yang sama! Dengan latihan yang tepat, pasti bisa meningkat.",
    traits: ["Developing", "Non-numerical", "Other strengths", "Learning"],
    strengths: ["Mungkin lebih kuat di bidang verbal atau kreatif"],
    weaknesses: ["Struggle dengan soal numerik"],
    tips: ["Mulai dari dasar, bangun fondasi dulu", "Gunakan visual dan contoh konkret", "Jangan malu bertanya!"],
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
