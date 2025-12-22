// Tes Silogisme
// Uji kemampuan penalaran silogisme dan logika formal!

export const questions = [
  {
    id: 1,
    question: "Semua mamalia berdarah panas. Semua kucing adalah mamalia. Maka?",
    options: [
      { text: "Semua kucing berdarah panas", type: "A" },
      { text: "Beberapa kucing berdarah panas", type: "B" },
      { text: "Tidak ada kucing berdarah panas", type: "C" },
      { text: "Semua yang berdarah panas adalah kucing", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Semua siswa harus belajar. Ani adalah siswa. Maka?",
    options: [
      { text: "Ani harus belajar", type: "A" },
      { text: "Ani tidak perlu belajar", type: "B" },
      { text: "Semua yang belajar adalah Ani", type: "C" },
      { text: "Tidak dapat disimpulkan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tidak ada pohon yang bisa berjalan. Semua kelapa adalah pohon. Maka?",
    options: [
      { text: "Tidak ada kelapa yang bisa berjalan", type: "A" },
      { text: "Beberapa kelapa bisa berjalan", type: "B" },
      { text: "Semua kelapa bisa berjalan", type: "C" },
      { text: "Kelapa bukan pohon", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Semua yang rajin akan sukses. Budi sukses. Maka?",
    options: [
      { text: "Budi belum tentu rajin", type: "A" },
      { text: "Budi pasti rajin", type: "B" },
      { text: "Budi tidak rajin", type: "C" },
      { text: "Semua yang sukses adalah Budi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Beberapa guru adalah perempuan. Semua guru harus sabar. Maka?",
    options: [
      { text: "Beberapa perempuan harus sabar", type: "A" },
      { text: "Semua perempuan adalah guru", type: "B" },
      { text: "Semua yang sabar adalah perempuan", type: "C" },
      { text: "Tidak ada guru yang sabar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Semua buah mengandung vitamin. Apel adalah buah. Maka?",
    options: [
      { text: "Apel mengandung vitamin", type: "A" },
      { text: "Vitamin adalah apel", type: "B" },
      { text: "Tidak semua apel mengandung vitamin", type: "C" },
      { text: "Semua vitamin ada di apel", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tidak ada robot yang punya perasaan. Semua manusia punya perasaan. Maka?",
    options: [
      { text: "Tidak ada manusia yang robot", type: "A" },
      { text: "Beberapa robot adalah manusia", type: "B" },
      { text: "Semua robot adalah manusia", type: "C" },
      { text: "Beberapa manusia adalah robot", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Semua karyawan dapat gaji. Semua yang dapat gaji membayar pajak. Maka?",
    options: [
      { text: "Semua karyawan membayar pajak", type: "A" },
      { text: "Beberapa karyawan membayar pajak", type: "B" },
      { text: "Tidak ada karyawan membayar pajak", type: "C" },
      { text: "Semua yang bayar pajak adalah karyawan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Beberapa artis adalah penyanyi. Beberapa penyanyi adalah penulis lagu. Maka?",
    options: [
      { text: "Tidak dapat disimpulkan hubungan artis dan penulis lagu", type: "A" },
      { text: "Semua artis adalah penulis lagu", type: "B" },
      { text: "Tidak ada artis yang penulis lagu", type: "C" },
      { text: "Semua penulis lagu adalah artis", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Semua atlet harus berlatih. Doni tidak berlatih. Maka?",
    options: [
      { text: "Doni bukan atlet", type: "A" },
      { text: "Doni adalah atlet", type: "B" },
      { text: "Doni kadang berlatih", type: "C" },
      { text: "Tidak dapat disimpulkan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Semua A adalah B. Beberapa B adalah C. Maka?",
    options: [
      { text: "Beberapa A mungkin adalah C", type: "A" },
      { text: "Semua A adalah C", type: "B" },
      { text: "Tidak ada A yang C", type: "C" },
      { text: "Semua C adalah A", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tidak ada X yang Y. Semua Z adalah X. Maka?",
    options: [
      { text: "Tidak ada Z yang Y", type: "A" },
      { text: "Semua Z adalah Y", type: "B" },
      { text: "Beberapa Z adalah Y", type: "C" },
      { text: "Semua Y adalah Z", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Logika Silogisme Excellent",
    emoji: "🏆",
    description: "Kemampuan silogisme kamu sangat baik! Kamu memahami struktur logika formal dan bisa menarik kesimpulan valid dari premis. Skill berpikir sistematis kamu top!",
    traits: ["Logis", "Sistematis", "Analitis", "Presisi tinggi"],
    strengths: ["Penalaran formal kuat", "Deteksi invalid argument", "Problem solving"],
    weaknesses: ["Mungkin terlalu kaku kadang"],
    tips: ["Skill ini excellent untuk law, programming, research"],
  },
  B: {
    type: "B",
    title: "Silogisme Baik",
    emoji: "🎯",
    description: "Kemampuan silogisme kamu cukup baik! Sebagian besar penalaran sudah tepat, tapi masih ada beberapa jebakan logika yang perlu diwaspadai.",
    traits: ["Cukup logis", "Berkembang", "Potensial"],
    strengths: ["Fondasi kuat", "Konsisten", "Mau belajar"],
    weaknesses: ["Kadang terjebak pada premis yang tricky"],
    tips: ["Pelajari common fallacies", "Latih dengan soal yang lebih kompleks"],
  },
  C: {
    type: "C",
    title: "Silogisme Berkembang",
    emoji: "📚",
    description: "Kemampuan silogisme kamu masih berkembang. Beberapa konsep sudah dipahami tapi masih perlu penguatan pada logika formal.",
    traits: ["Masih belajar", "Perlu latihan", "Potensi ada"],
    strengths: ["Awareness ada", "Mau improve"],
    weaknesses: ["Struktur logika belum kokoh"],
    tips: ["Pelajari struktur silogisme", "Latih dengan step by step"],
  },
  D: {
    type: "D",
    title: "Silogisme Dasar",
    emoji: "🌱",
    description: "Kemampuan silogisme kamu masih di tahap awal. Tidak perlu khawatir - logika formal memang perlu dipelajari secara sistematis.",
    traits: ["Pemula", "Perlu fondasi", "Dapat berkembang"],
    strengths: ["Mengidentifikasi kelemahan", "Ready untuk belajar"],
    weaknesses: ["Fondasi logika formal lemah"],
    tips: ["Mulai dari dasar silogisme", "Banyak latihan soal"],
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
