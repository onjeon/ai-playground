// Gaya Minta Maaf Kamu
// Tes ini mengungkap bagaimana kamu meminta maaf dan memperbaiki hubungan!

export const questions = [
  {
    id: 1,
    question: "Saat sadar kamu salah, kapan biasanya minta maaf?",
    options: [
      { text: "Langsung, tidak mau menunda", type: "A" },
      { text: "Setelah cool down sebentar", type: "B" },
      { text: "Butuh waktu lama untuk mengakui", type: "C" },
      { text: "Jarang minta maaf duluan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu mengucapkan maaf?",
    options: [
      { text: "Verbal langsung: 'Maaf ya, aku salah'", type: "A" },
      { text: "Lewat tindakan, bukan kata-kata", type: "B" },
      { text: "Chat atau pesan, lebih nyaman", type: "C" },
      { text: "Bersikap baik tanpa bilang maaf explicitly", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Isi permintaan maafmu biasanya?",
    options: [
      { text: "Akui salah + jelaskan + janji perbaikan", type: "A" },
      { text: "Maaf singkat tapi tulus", type: "B" },
      { text: "Maaf tapi dengan pembelaan/alasan", type: "C" },
      { text: "Maaf karena terpaksa situasi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Setelah minta maaf, kamu...",
    options: [
      { text: "Berusaha tidak mengulangi kesalahan", type: "A" },
      { text: "Lega dan move on", type: "B" },
      { text: "Masih merasa bersalah lama", type: "C" },
      { text: "Anggap sudah selesai, tidak dipikir lagi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Jika orang tidak langsung memaafkan, reaksimu?",
    options: [
      { text: "Beri waktu, terus berusaha", type: "A" },
      { text: "Sedih tapi menghargai prosesnya", type: "B" },
      { text: "Kesal, 'aku sudah minta maaf!'", type: "C" },
      { text: "Ya sudah, tidak bisa dipaksakan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Minta maaf ke siapa yang paling sulit?",
    options: [
      { text: "Semua sama, yang penting tulus", type: "A" },
      { text: "Orang yang lebih senior/tua", type: "B" },
      { text: "Orang yang sangat dekat", type: "C" },
      { text: "Siapapun, minta maaf itu sulit", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Minta maaf untuk hal kecil, seberapa sering?",
    options: [
      { text: "Sering, bahkan yang sepele", type: "A" },
      { text: "Kalau memang perlu saja", type: "B" },
      { text: "Jarang, yang besar-besar saja", type: "C" },
      { text: "Hampir tidak pernah untuk hal kecil", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Gift atau hadiah sebagai bentuk maaf?",
    options: [
      { text: "Kadang, tapi kata-kata lebih penting", type: "A" },
      { text: "Sering, tindakan lebih dari kata", type: "B" },
      { text: "Jarang, terkesan beli maaf", type: "C" },
      { text: "Tidak pernah terpikirkan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau kamu merasa tidak 100% salah, kamu...",
    options: [
      { text: "Tetap minta maaf untuk bagianku", type: "A" },
      { text: "Minta maaf setelah dia minta maaf juga", type: "B" },
      { text: "Tunggu dia yang minta maaf duluan", type: "C" },
      { text: "Tidak mau minta maaf kalau tidak salah", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Apakah kamu pernah minta maaf walau tidak salah?",
    options: [
      { text: "Sering, untuk menjaga harmoni", type: "A" },
      { text: "Kadang-kadang, tergantung situasi", type: "B" },
      { text: "Jarang, harus ada alasan jelas", type: "C" },
      { text: "Tidak pernah, tidak masuk akal", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Minta maaf, apakah menurutmu tanda kelemahan?",
    options: [
      { text: "Tidak! Justru tanda kekuatan dan kedewasaan", type: "A" },
      { text: "Tidak, tapi memang butuh keberanian", type: "B" },
      { text: "Kadang merasa begitu", type: "C" },
      { text: "Ya, lebih baik jaga harga diri", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bagaimana perasaanmu setelah tulus meminta maaf?",
    options: [
      { text: "Lega dan bangga sudah berani", type: "A" },
      { text: "Lega, beban terangkat", type: "B" },
      { text: "Masih tidak nyaman", type: "C" },
      { text: "Biasa saja", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Master of Apology",
    emoji: "🕊️",
    description: "Kamu sangat dewasa dalam hal minta maaf! Tulus, cepat, dan lengkap. Kamu memahami bahwa minta maaf adalah kekuatan, bukan kelemahan.",
    traits: ["Dewasa", "Tulus", "Bertanggung jawab", "Humble"],
    strengths: ["Hubungan cepat pulih", "Dihormati orang", "Self-aware tinggi"],
    weaknesses: ["Kadang over-apologize", "Bisa dimanfaatkan"],
    tips: ["Jangan minta maaf untuk hal yang bukan salahmu", "Balance antara humble dan assertive"],
  },
  B: {
    type: "B",
    title: "Action-Based Apologizer",
    emoji: "💐",
    description: "Kamu lebih suka menunjukkan penyesalan lewat tindakan daripada kata-kata. Actions speak louder than words adalah filosofimu.",
    traits: ["Action-oriented", "Practical", "Genuine", "Show don't tell"],
    strengths: ["Permintaan maaf yang nyata", "Konsisten", "Tidak empty words"],
    weaknesses: ["Kadang orang butuh dengar kata maaf", "Bisa terkesan tidak ekspresif"],
    tips: ["Kombinasikan action dengan verbal", "Orang perlu dengar 'maaf' juga"],
  },
  C: {
    type: "C",
    title: "Reluctant Apologizer",
    emoji: "😔",
    description: "Minta maaf adalah struggle bagimu. Ada barrier, entah ego atau rasa malu. Tapi awareness ini adalah langkah pertama untuk berubah.",
    traits: ["Struggle dengan vulnerability", "Protective of ego", "Takes time", "Defensive"],
    strengths: ["Tidak sembarangan minta maaf", "Punya prinsip", "Hati-hati"],
    weaknesses: ["Hubungan bisa rusak karena delay", "Terkesan tidak peduli"],
    tips: ["Latih vulnerability", "Minta maaf itu healing untuk dua pihak"],
  },
  D: {
    type: "D",
    title: "Apology Avoider",
    emoji: "🛡️",
    description: "Kamu jarang atau hampir tidak pernah minta maaf. Ini bisa berarti ego tinggi atau takut terlihat lemah. Area yang perlu diexplore.",
    traits: ["High ego", "Defensive", "Avoidant", "Pride-driven"],
    strengths: ["Tidak gampang disalahkan", "Strong stance", "Self-protective"],
    weaknesses: ["Hubungan terganggu", "Terkesan tidak empati", "Miss growth opportunity"],
    tips: ["Minta maaf bukan tanda kelemahan", "Coba mulai dari hal kecil", "Pertimbangkan dampak ke hubungan"],
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
