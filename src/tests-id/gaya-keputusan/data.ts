// Gaya Mengambil Keputusan
// Tes ini mengungkap bagaimana kamu membuat keputusan dalam hidup!

export const questions = [
  {
    id: 1,
    question: "Saat harus memilih menu makanan, kamu...",
    options: [
      { text: "Cepat pilih, trust instinct", type: "A" },
      { text: "Baca semua menu, baru pilih", type: "B" },
      { text: "Tanya rekomendasi orang lain", type: "C" },
      { text: "Lama mikir, sering berubah pikiran", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Membeli barang yang lumayan mahal, prosesmu?",
    options: [
      { text: "Kalau suka, langsung beli", type: "A" },
      { text: "Research dulu, compare options", type: "B" },
      { text: "Tanya pendapat teman/keluarga", type: "C" },
      { text: "Mikir lama, kadang batal karena ragu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Keputusan besar dalam hidup (karir, hubungan), kamu...",
    options: [
      { text: "Follow heart, instinct biasanya benar", type: "A" },
      { text: "Analisis pro-cons dengan detail", type: "B" },
      { text: "Diskusi dengan orang-orang terdekat", type: "C" },
      { text: "Sangat sulit, butuh waktu sangat lama", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Setelah membuat keputusan, kamu...",
    options: [
      { text: "Move on, tidak menyesal", type: "A" },
      { text: "Kadang review tapi tidak obsesif", type: "B" },
      { text: "Cek dengan orang lain apakah keputusan tepat", type: "C" },
      { text: "Sering menyesal dan what-if", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat keputusanmu ternyata salah, kamu...",
    options: [
      { text: "It's okay, belajar dan move on", type: "A" },
      { text: "Evaluasi dimana salahnya", type: "B" },
      { text: "Menyalahkan diri atau situasi", type: "C" },
      { text: "Sangat sulit memaafkan diri sendiri", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ada dua pilihan sama baiknya, kamu...",
    options: [
      { text: "Pilih satu, karena harus pilih", type: "A" },
      { text: "Cari faktor pembeda sekecil apapun", type: "B" },
      { text: "Tanya orang lain untuk tie-breaker", type: "C" },
      { text: "Stuck dan tidak bisa memilih", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Deadline keputusan mendekat tapi belum decide, kamu...",
    options: [
      { text: "Decide saat itu juga, apapun hasilnya", type: "A" },
      { text: "Fast-track analysis, lalu decide", type: "B" },
      { text: "Panik dan cari bantuan", type: "C" },
      { text: "Stress berat, mungkin minta extend deadline", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Berapa persen keputusanmu berdasarkan logika vs perasaan?",
    options: [
      { text: "Mostly feeling/gut, logika sebagai check", type: "A" },
      { text: "Balanced, 50-50", type: "B" },
      { text: "Mostly logika, feeling sebagai input", type: "C" },
      { text: "Bingung antara keduanya, sering conflict", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Orang lain tidak setuju dengan keputusanmu, kamu...",
    options: [
      { text: "Tetap yakin, ini hidupku", type: "A" },
      { text: "Pertimbangkan lagi tapi tidak necessarily berubah", type: "B" },
      { text: "Jadi ragu, mungkin mereka benar", type: "C" },
      { text: "Langsung goyah dan ingin berubah", type: "D" },
    ],
  },
  {
    id: 10,
    question: "FOMO (Fear of Missing Out) seberapa mempengaruhi keputusanmu?",
    options: [
      { text: "Tidak terlalu, punya prinsip sendiri", type: "A" },
      { text: "Kadang-kadang, tapi bisa kontrol", type: "B" },
      { text: "Cukup sering pengaruh", type: "C" },
      { text: "Sangat mempengaruhi, takut salah pilih", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Dalam tim, peranmu dalam pengambilan keputusan?",
    options: [
      { text: "Biasanya yang decide atau lead diskusi", type: "A" },
      { text: "Kontribusi analisis dan perspektif", type: "B" },
      { text: "Lebih suka ikut keputusan bersama", type: "C" },
      { text: "Ikut-ikutan saja, tidak berani berpendapat", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Menurutmu, decision-making skill-mu...",
    options: [
      { text: "Kuat, salah satu kelebihanku", type: "A" },
      { text: "Cukup baik, masih bisa improve", type: "B" },
      { text: "Biasa saja, tergantung situasi", type: "C" },
      { text: "Lemah, sering struggle decide", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Decisive Leader",
    emoji: "⚡",
    description: "Kamu adalah decision maker yang cepat dan tegas! Trust your gut dan jarang menyesal. Kemampuan ini sangat berharga dalam leadership.",
    traits: ["Decisive", "Confident", "Quick thinker", "Action-oriented"],
    strengths: ["Tidak buang waktu", "Natural leader", "Tidak ragu-ragu"],
    weaknesses: ["Bisa terlalu impulsif", "Kadang skip important analysis"],
    tips: ["Sesekali slow down untuk keputusan besar", "Input dari orang lain bisa berharga"],
  },
  B: {
    type: "B",
    title: "Analytical Decider",
    emoji: "🔍",
    description: "Kamu membuat keputusan dengan analisis yang matang! Pro-cons list, research, dan careful consideration adalah caramu. Keputusanmu biasanya well-informed.",
    traits: ["Analytical", "Thorough", "Logical", "Research-oriented"],
    strengths: ["Keputusan berkualitas", "Minimal regret", "Well-prepared"],
    weaknesses: ["Bisa lambat", "Analysis paralysis possible"],
    tips: ["Set deadline untuk analysis", "Kadang good enough is enough"],
  },
  C: {
    type: "C",
    title: "Collaborative Decider",
    emoji: "🤝",
    description: "Kamu menghargai input dari orang lain dalam membuat keputusan! Diskusi dan second opinion adalah bagian penting dari prosesmu.",
    traits: ["Collaborative", "Open-minded", "Democratic", "Relationship-oriented"],
    strengths: ["Banyak perspektif", "Tidak egois", "Keputusan diterima banyak pihak"],
    weaknesses: ["Bergantung pada orang lain", "Kurang independent"],
    tips: ["Belajar trust judgment sendiri", "Tidak semua keputusan perlu consensus"],
  },
  D: {
    type: "D",
    title: "Indecisive Overthinker",
    emoji: "🌀",
    description: "Membuat keputusan adalah struggle bagimu. Fear of making wrong choice sering menghalangi. Tapi awareness ini adalah langkah pertama untuk improve!",
    traits: ["Indecisive", "Overthinker", "Fear-driven", "Perfectionist"],
    strengths: ["Hati-hati", "Mempertimbangkan banyak hal", "Tidak ceroboh"],
    weaknesses: ["Decision fatigue", "Miss opportunities", "Stress tinggi"],
    tips: ["Latih small decisions dulu", "Tidak ada keputusan yang perfect", "Done is better than perfect"],
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
