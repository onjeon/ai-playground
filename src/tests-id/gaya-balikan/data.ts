// Tes Gaya Balikan dengan Mantan
// Gimana style kamu kalau balikan sama mantan?

export const questions = [
  {
    id: 1,
    question: "Setelah putus, biasanya kamu...",
    options: [
      { text: "Block semua kontak dan medsos", type: "A" },
      { text: "Tetap teman, sesekali masih chat", type: "B" },
      { text: "No contact tapi tidak block", type: "C" },
      { text: "Stalking diem-diem walau ga chat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Alasan yang bisa bikin kamu consider balikan...",
    options: [
      { text: "Tidak akan pernah balikan, move on total", type: "A" },
      { text: "Kalau masalahnya sudah clear dan fix", type: "B" },
      { text: "Kalau masih ada feelings yang kuat", type: "C" },
      { text: "Kalau dia berubah jadi lebih baik", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Yang harus terjadi sebelum balikan...",
    options: [
      { text: "Serius, tidak ada kemungkinan balikan", type: "A" },
      { text: "Diskusi serius tentang apa yang salah", type: "B" },
      { text: "Waktu yang cukup untuk healing", type: "C" },
      { text: "Bukti nyata dia sudah berubah", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Siapa yang harus inisiasi balikan?",
    options: [
      { text: "Tidak ada, karena tidak mau balikan", type: "A" },
      { text: "Yang merasa salah atau lebih butuh", type: "B" },
      { text: "Yang duluan reach out", type: "C" },
      { text: "Yang dulu mutus harus chase", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Reaksi kamu kalau mantan tiba-tiba chat...",
    options: [
      { text: "Ignore atau balas singkat aja", type: "A" },
      { text: "Balas normal, lihat maunya apa", type: "B" },
      { text: "Excited tapi coba stay cool", type: "C" },
      { text: "Balas tapi jaga jarak", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Menurutmu, balikan dengan mantan itu...",
    options: [
      { text: "Bad idea, putus ya sudah", type: "A" },
      { text: "Tergantung situasi dan orangnya", type: "B" },
      { text: "Kadang perlu second chance", type: "C" },
      { text: "Risky tapi bisa worth it", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau balikan, yang paling penting...",
    options: [
      { text: "Tidak mau balikan sama sekali", type: "A" },
      { text: "Clear communication dan boundaries baru", type: "B" },
      { text: "Memastikan feelings masih ada", type: "C" },
      { text: "Commitment untuk tidak ulangi kesalahan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat lagi move on, kamu mikirin mantan?",
    options: [
      { text: "Tidak, sudah delete dari pikiran", type: "A" },
      { text: "Kadang-kadang, tapi tidak lama", type: "B" },
      { text: "Sering, terutama pas lagi sendiri", type: "C" },
      { text: "Compare sama orang baru sih kadang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau mantan bilang 'masih sayang'...",
    options: [
      { text: "Tidak peduli, terlalu late", type: "A" },
      { text: "Perlu bukti, bukan cuma kata-kata", type: "B" },
      { text: "Hati langsung melunak", type: "C" },
      { text: "Mixed feelings, bingung", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Deal breaker untuk tidak balikan...",
    options: [
      { text: "Pernah putus sekali = selesai", type: "A" },
      { text: "Kalau ada cheating atau toxic behavior", type: "B" },
      { text: "Kalau sudah tidak ada chemistry", type: "C" },
      { text: "Kalau tidak ada effort untuk berubah", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Teman-teman kamu soal balikan sama mantan...",
    options: [
      { text: "Pasti dilarang dan didukung move on", type: "A" },
      { text: "Kasih perspektif objektif", type: "B" },
      { text: "Support apapun keputusanku", type: "C" },
      { text: "Campur-campur pendapatnya", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kalau akhirnya balikan, ekspektasimu...",
    options: [
      { text: "Tidak akan balikan, period", type: "A" },
      { text: "Harus lebih baik dari sebelumnya", type: "B" },
      { text: "Berharap bisa work out kali ini", type: "C" },
      { text: "Take it slow dan lihat progressnya", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anti Balikan Total",
    emoji: "🚫",
    description: "Buat kamu, putus ya putus! Tidak ada kata balikan dalam kamusmu. Sekali chapter ditutup, kamu move forward tanpa lihat belakang. No exes allowed!",
    traits: ["Tegas", "Forward looking", "Clean cut", "Decisive"],
    strengths: ["Tidak buang waktu", "Clear boundaries", "Strong willpower"],
    weaknesses: ["Kadang terlalu rigid", "Miss second chances yang worth it"],
    tips: ["Tetap evaluasi case by case", "Kadang orang memang berubah"],
  },
  B: {
    type: "B",
    title: "Balikan Rasional",
    emoji: "🧠",
    description: "Kamu approach balikan dengan logika dan analisis! Butuh diskusi serius, clear problem solving, dan bukti perubahan. Bukan soal feelings doang.",
    traits: ["Logical", "Analytical", "Cautious", "Mature"],
    strengths: ["Tidak impulsif", "Set clear expectations", "Problem solver"],
    weaknesses: ["Kadang over-analyze", "Kurang trust feelings"],
    tips: ["Balance logic dan emotions", "Tidak semua harus perfect"],
  },
  C: {
    type: "C",
    title: "Balikan Romantis",
    emoji: "💕",
    description: "Kalau masih ada cinta, kenapa tidak dicoba lagi? Kamu percaya sama second chances dan power of love. Feelings adalah compass utamamu.",
    traits: ["Romantic", "Hopeful", "Forgiving", "Emotional"],
    strengths: ["Open to reconciliation", "Believes in love", "Compassionate"],
    weaknesses: ["Kadang terlalu cepat maafin", "Ignore red flags"],
    tips: ["Jangan cuma ikut feelings", "Evaluasi pattern yang dulu"],
  },
  D: {
    type: "D",
    title: "Balikan Bersyarat",
    emoji: "⚖️",
    description: "Kamu open untuk balikan TAPI dengan syarat yang jelas! Yang dulu mutus harus effort, harus ada bukti perubahan, dan track record yang lebih baik.",
    traits: ["Conditional", "Fair", "Observant", "Balanced"],
    strengths: ["Set boundaries", "Require proof", "Tidak gampang"],
    weaknesses: ["Kadang terlalu menuntut", "Trust issues"],
    tips: ["Balance antara guarded dan open", "Healing dulu sebelum decide"],
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
