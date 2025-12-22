export const questions = [
  {
    id: 1,
    question: "Sebuah toko menjual 100 buku dalam 5 hari. Berapa rata-rata buku terjual per hari?",
    options: [
      { text: "20 buku", type: "A" },
      { text: "25 buku", type: "B" },
      { text: "15 buku", type: "C" },
      { text: "50 buku", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Jika 3 pekerja menyelesaikan pekerjaan dalam 6 jam, berapa jam yang dibutuhkan 6 pekerja untuk pekerjaan yang sama?",
    options: [
      { text: "3 jam", type: "A" },
      { text: "12 jam", type: "B" },
      { text: "9 jam", type: "C" },
      { text: "4 jam", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dari 50 siswa, 30 suka matematika dan 25 suka IPA. Jika 10 siswa suka keduanya, berapa yang tidak suka keduanya?",
    options: [
      { text: "5 siswa", type: "A" },
      { text: "15 siswa", type: "B" },
      { text: "10 siswa", type: "C" },
      { text: "20 siswa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Harga sebuah baju diskon 20%. Harga awal Rp 250.000. Berapa harga setelah diskon?",
    options: [
      { text: "Rp 200.000", type: "A" },
      { text: "Rp 230.000", type: "B" },
      { text: "Rp 180.000", type: "C" },
      { text: "Rp 225.000", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kereta berangkat pukul 08:45 dan tiba pukul 11:15. Berapa lama perjalanan?",
    options: [
      { text: "2 jam 30 menit", type: "A" },
      { text: "3 jam", type: "B" },
      { text: "2 jam", type: "C" },
      { text: "2 jam 45 menit", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Dalam survey, 60% dari 500 orang memilih produk A. Berapa orang yang memilih produk A?",
    options: [
      { text: "300 orang", type: "A" },
      { text: "200 orang", type: "B" },
      { text: "250 orang", type: "C" },
      { text: "350 orang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sebuah mobil menempuh 240 km dalam 3 jam. Berapa kecepatan rata-rata mobil tersebut?",
    options: [
      { text: "80 km/jam", type: "A" },
      { text: "60 km/jam", type: "B" },
      { text: "100 km/jam", type: "C" },
      { text: "70 km/jam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Perbandingan umur ayah dan anak adalah 5:2. Jika umur anak 10 tahun, berapa umur ayah?",
    options: [
      { text: "25 tahun", type: "A" },
      { text: "20 tahun", type: "B" },
      { text: "30 tahun", type: "C" },
      { text: "35 tahun", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tabel menunjukkan: Jan: 100, Feb: 150, Mar: 120, Apr: 130. Bulan apa penjualan tertinggi?",
    options: [
      { text: "Februari", type: "A" },
      { text: "Januari", type: "B" },
      { text: "April", type: "C" },
      { text: "Maret", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Jika 1 USD = Rp 15.000, berapa rupiah untuk 50 USD?",
    options: [
      { text: "Rp 750.000", type: "A" },
      { text: "Rp 500.000", type: "B" },
      { text: "Rp 1.000.000", type: "C" },
      { text: "Rp 600.000", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sebuah ruangan memiliki 4 sudut. Jika ditambah pembatas di tengah menjadi 2 ruangan, berapa total sudut?",
    options: [
      { text: "8 sudut", type: "A" },
      { text: "6 sudut", type: "B" },
      { text: "10 sudut", type: "C" },
      { text: "4 sudut", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Data nilai: 70, 80, 75, 85, 90. Berapa median (nilai tengah)?",
    options: [
      { text: "80", type: "A" },
      { text: "75", type: "B" },
      { text: "85", type: "C" },
      { text: "70", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Analis Handal",
    emoji: "🔍",
    description: "Excellent! Kamu memiliki kemampuan analisis yang sangat baik! Kamu bisa memecah masalah kompleks menjadi bagian-bagian yang bisa dipahami dan menemukan solusi dengan efektif. Cocok untuk bidang analitik!",
    traits: ["Analitis", "Problem solver", "Detail-oriented", "Logis"],
    strengths: ["Mampu menganalisis data dengan akurat", "Berpikir sistematis", "Bisa memecahkan masalah kompleks"],
    weaknesses: ["Mungkin terlalu detail-oriented"],
    tips: ["Pertimbangkan karir di data science atau consulting", "Terus latih dengan case studies", "Share skill ini dengan tim"],
  },
  B: {
    type: "B",
    title: "Pemikir Analitis",
    emoji: "📊",
    description: "Bagus! Kemampuan analisismu cukup solid. Kamu bisa memahami dan menyelesaikan sebagian besar masalah analitis. Dengan latihan lebih lanjut, kamu bisa menjadi analis yang lebih baik.",
    traits: ["Cukup analitis", "Berkembang", "Teliti", "Logis"],
    strengths: ["Fondasi analisis yang baik", "Bisa memahami data", "Konsisten"],
    weaknesses: ["Kadang terburu-buru dengan perhitungan"],
    tips: ["Double-check kalkulasimu", "Latih dengan problem solving sehari-hari", "Pelajari spreadsheet dan tools analisis"],
  },
  C: {
    type: "C",
    title: "Belajar Analisis",
    emoji: "📈",
    description: "Kamu masih dalam tahap mempelajari analisis data. Tidak masalah! Dengan pemahaman konsep yang lebih baik dan latihan, kemampuanmu akan meningkat.",
    traits: ["Perlu latihan", "Berpotensi", "Bisa berkembang"],
    strengths: ["Potensi untuk meningkat", "Bisa belajar dari kesalahan"],
    weaknesses: ["Perlu lebih banyak latihan", "Kadang bingung dengan soal kompleks"],
    tips: ["Mulai dari soal sederhana", "Pahami konsep dasar matematika", "Gunakan visualisasi untuk memahami data"],
  },
  D: {
    type: "D",
    title: "Mulai dari Dasar",
    emoji: "🌱",
    description: "Analisis mungkin bukan bidang yang sering kamu praktikkan. Tapi jangan khawatir, kemampuan analitis bisa dibangun dengan fondasi yang benar dan latihan konsisten.",
    traits: ["Perlu fondasi", "Fresh learner", "Bisa berkembang"],
    strengths: ["Bisa belajar dengan cara yang benar dari awal"],
    weaknesses: ["Perlu membangun fondasi"],
    tips: ["Review dasar-dasar matematika", "Latihan dengan masalah sehari-hari", "Gunakan apps untuk latihan"],
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
