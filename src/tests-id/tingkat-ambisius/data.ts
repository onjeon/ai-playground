// Seberapa Ambisius Kamu?
// Tes ini mengukur tingkat ambisi dan drive dalam hidupmu!

export const questions = [
  {
    id: 1,
    question: "Goal hidupmu dalam 5 tahun ke depan?",
    options: [
      { text: "Sangat detail dan ambisius, sudah ada roadmap", type: "A" },
      { text: "Ada target tapi fleksibel", type: "B" },
      { text: "Vague, yang penting happy", type: "C" },
      { text: "Tidak pernah mikir sejauh itu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat mencapai satu target, kamu...",
    options: [
      { text: "Langsung set target berikutnya yang lebih tinggi", type: "A" },
      { text: "Celebrate dulu, baru mikir next step", type: "B" },
      { text: "Enjoy dan maintain, tidak perlu lebih", type: "C" },
      { text: "Lega dan tidak ingin mulai perjuangan baru", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tentang work-life balance, menurutmu...",
    options: [
      { text: "Kerja keras dulu, balance belakangan", type: "A" },
      { text: "Penting, tapi kadang harus sacrifice untuk goal", type: "B" },
      { text: "Sangat penting, tidak mau overwork", type: "C" },
      { text: "Life dulu, work sebagai necessity", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Melihat kesuksesan orang lain, reaksimu?",
    options: [
      { text: "Termotivasi, aku juga harus bisa!", type: "A" },
      { text: "Terinspirasi tapi tetap di pace sendiri", type: "B" },
      { text: "Happy for them, jalur masing-masing", type: "C" },
      { text: "Tidak terlalu peduli", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kesempatan promosi atau tantangan baru, kamu...",
    options: [
      { text: "Selalu ambil, growth opportunity!", type: "A" },
      { text: "Pertimbangkan dulu, kalau cocok ambil", type: "B" },
      { text: "Tergantung, kalau terlalu berat skip", type: "C" },
      { text: "Lebih suka zona nyaman yang sekarang", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Weekend biasanya kamu pakai untuk...",
    options: [
      { text: "Side project atau upskilling", type: "A" },
      { text: "Mix antara produktif dan rest", type: "B" },
      { text: "Full rest dan hiburan", type: "C" },
      { text: "Tidak ada agenda, mengalir saja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Definisi sukses menurutmu?",
    options: [
      { text: "Pencapaian besar: karir, finansial, recognition", type: "A" },
      { text: "Balance antara achievement dan kebahagiaan", type: "B" },
      { text: "Hidup tenang dan cukup", type: "C" },
      { text: "Tidak pernah mikir tentang ini", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat ada obstacle dalam mencapai goal, kamu...",
    options: [
      { text: "Cari jalan apapun untuk overcome", type: "A" },
      { text: "Usaha tapi kalau terlalu sulit, adjust goal", type: "B" },
      { text: "Mungkin ini bukan jalanku", type: "C" },
      { text: "Menyerah dan cari yang lebih mudah", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Investasi waktu dan uang untuk self-development?",
    options: [
      { text: "Prioritas tinggi, selalu alokasi", type: "A" },
      { text: "Sesekali kalau ada kesempatan bagus", type: "B" },
      { text: "Jarang, lebih untuk kebutuhan lain", type: "C" },
      { text: "Tidak pernah, tidak prioritas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Networking dan building connections, menurutmu...",
    options: [
      { text: "Sangat penting, aktif expand network", type: "A" },
      { text: "Penting, tapi tidak agresif", type: "B" },
      { text: "Tidak terlalu suka, merasa transaksional", type: "C" },
      { text: "Tidak peduli soal networking", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau besok tidak perlu kerja untuk uang, kamu akan...",
    options: [
      { text: "Tetap kerja atau build something besar", type: "A" },
      { text: "Pursue passion project", type: "B" },
      { text: "Enjoy hidup, travel, hobi", type: "C" },
      { text: "Tidak ngapa-ngapain, santai aja", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kompetisi dan comparison, kamu...",
    options: [
      { text: "Thrive on it, memotivasi untuk lebih baik", type: "A" },
      { text: "Kadang memotivasi, kadang stressful", type: "B" },
      { text: "Tidak suka, prefer fokus diri sendiri", type: "C" },
      { text: "Menghindari, tidak nyaman dengan kompetisi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Highly Ambitious",
    emoji: "🚀",
    description: "Kamu sangat ambisius dan driven! Goals besar dan kerja keras adalah bagian dari DNAmu. Kamu tidak puas dengan biasa-biasa saja dan selalu ingin lebih.",
    traits: ["Ambisius", "Driven", "Goal-oriented", "Kompetitif"],
    strengths: ["High achiever", "Self-motivated", "Leadership potential"],
    weaknesses: ["Bisa burnout", "Kurang work-life balance", "Never satisfied"],
    tips: ["Ingat untuk appreciate journey", "Rest is productive too", "Relationships juga penting"],
  },
  B: {
    type: "B",
    title: "Balanced Achiever",
    emoji: "⚖️",
    description: "Ambisimu seimbang! Kamu punya goals dan berusaha mencapainya, tapi tidak sampai mengorbankan kesehatan dan kebahagiaan. Sweet spot yang ideal!",
    traits: ["Balanced", "Realistic", "Self-aware", "Sustainable drive"],
    strengths: ["Sustainable success", "Good work-life balance", "Healthy mindset"],
    weaknesses: ["Kadang bisa push lebih", "Miss big opportunities"],
    tips: ["Keep the balance", "Sesekali boleh go all in untuk hal penting"],
  },
  C: {
    type: "C",
    title: "Contentment Seeker",
    emoji: "🌸",
    description: "Kamu lebih mencari ketenangan daripada pencapaian besar. Hidup nyaman dan bahagia lebih penting dari status atau kekayaan. Valid choice!",
    traits: ["Content", "Peace-seeking", "Low-key", "Present-focused"],
    strengths: ["Jarang stress", "Grateful", "Inner peace"],
    weaknesses: ["Mungkin miss potential", "Kurang challenge diri"],
    tips: ["Sesekali keluar dari comfort zone", "Explore apa yang bisa dicapai"],
  },
  D: {
    type: "D",
    title: "Go-with-the-Flow",
    emoji: "🍃",
    description: "Ambisi bukan prioritasmu. Kamu mengalir dengan hidup tanpa banyak goals atau plans. Ini bisa berarti zen, atau mungkin ada yang perlu diexplore.",
    traits: ["Laid-back", "No pressure", "Spontan", "Present-focused"],
    strengths: ["Tidak stress soal achievement", "Flexible", "Easy-going"],
    weaknesses: ["Mungkin kurang direction", "Potential tidak tercapai"],
    tips: ["Coba set small goals", "Explore apa yang membuatmu excited", "Purpose memberi meaning"],
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
