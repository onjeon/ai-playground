// Tipe Sahabat yang Kamu Butuhkan
// Tes ini mengungkap karakteristik sahabat yang paling cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Saat kamu punya masalah, kamu butuh sahabat yang...",
    options: [
      { text: "Beri solusi dan langkah konkret", type: "A" },
      { text: "Dengerin dan validasi perasaanmu", type: "B" },
      { text: "Ajak refreshing untuk lupakan masalah", type: "C" },
      { text: "Beri ruang dan hadir tanpa banyak kata", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Aktivitas favorit dengan sahabat?",
    options: [
      { text: "Diskusi serius atau brainstorm ide", type: "A" },
      { text: "Deep talk tentang hidup dan perasaan", type: "B" },
      { text: "Hangout seru, nonton, atau adventure", type: "C" },
      { text: "Quality time tenang, ngopi atau jalan pelan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Komunikasi dengan sahabat idealnya...",
    options: [
      { text: "Produktif, saling push untuk lebih baik", type: "A" },
      { text: "Emosional, bisa share apapun tanpa judge", type: "B" },
      { text: "Fun dan penuh jokes", type: "C" },
      { text: "Nyaman tanpa harus ngobrol terus", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kamu lebih suka sahabat yang...",
    options: [
      { text: "Ambisius dan menginspirasi", type: "A" },
      { text: "Empatik dan pengertian", type: "B" },
      { text: "Spontan dan full of surprises", type: "C" },
      { text: "Calm dan grounding", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat kamu sukses, kamu ingin sahabat yang...",
    options: [
      { text: "Push untuk achieve lebih lagi", type: "A" },
      { text: "Celebrate dan genuinely happy for you", type: "B" },
      { text: "Party dan rayakan besar-besaran", type: "C" },
      { text: "Quietly proud dan supportive", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Konflik dengan sahabat, kamu prefer ditangani dengan...",
    options: [
      { text: "Bicara langsung dan selesaikan", type: "A" },
      { text: "Proses feelings dulu baru bicara", type: "B" },
      { text: "Lupakan dengan aktivitas bareng", type: "C" },
      { text: "Beri waktu, nanti juga baik sendiri", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Frekuensi komunikasi ideal dengan sahabat?",
    options: [
      { text: "Regular untuk accountability", type: "A" },
      { text: "Sering untuk emotional connection", type: "B" },
      { text: "Kapan aja ada waktu bareng", type: "C" },
      { text: "Jarang tapi deep, quality over quantity", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Honest feedback dari sahabat, kamu...",
    options: [
      { text: "Butuh dan appreciate, helps me grow", type: "A" },
      { text: "Butuh tapi dengan cara yang gentle", type: "B" },
      { text: "Sesekali aja, mostly mau have fun", type: "C" },
      { text: "Jarang butuh, prefer process sendiri", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sahabat yang berbeda pendapat denganmu...",
    options: [
      { text: "Bagus untuk challenge perspective", type: "A" },
      { text: "Oke selama saling respect", type: "B" },
      { text: "Tidak masalah, variety is fun", type: "C" },
      { text: "Prefer yang similar biar nyaman", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Support dari sahabat saat kamu gagal, yang kamu butuhkan?",
    options: [
      { text: "Analysis apa yang salah dan plan next", type: "A" },
      { text: "Validation dan comfort", type: "B" },
      { text: "Distraksi dan cheer up", type: "C" },
      { text: "Space dan unconditional presence", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Trust dalam persahabatan, yang paling penting?",
    options: [
      { text: "Reliability dan consistency", type: "A" },
      { text: "Confidentiality dan no judgment", type: "B" },
      { text: "Loyalty dan always have my back", type: "C" },
      { text: "Understanding dan patience", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sahabat ideal adalah seseorang yang...",
    options: [
      { text: "Bikin kamu jadi versi terbaik", type: "A" },
      { text: "Terima kamu apa adanya", type: "B" },
      { text: "Bikin hidupmu lebih seru", type: "C" },
      { text: "Bikin kamu merasa tenang", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Butuh Sahabat Motivator",
    emoji: "🚀",
    description: "Kamu butuh sahabat yang mendorong untuk terus berkembang! Seseorang yang ambisius, memberi challenge, dan bikin kamu jadi versi terbaik.",
    traits: ["Growth-oriented", "Achievement-focused", "Driven", "Progressive"],
    strengths: ["Mutual growth", "Accountability partner", "Inspiring"],
    weaknesses: ["Bisa kompetitif", "Kurang emotional support"],
    tips: ["Balance dengan sahabat yang lebih emotional juga"],
  },
  B: {
    type: "B",
    title: "Butuh Sahabat Empatik",
    emoji: "💝",
    description: "Kamu butuh sahabat yang deeply understanding! Seseorang yang bisa menjadi safe space, dengerin tanpa judge, dan validate perasaanmu.",
    traits: ["Emotional", "Supportive", "Understanding", "Deep connection"],
    strengths: ["True confidant", "Emotional safety", "Authentic bond"],
    weaknesses: ["Bisa terlalu heavy", "Kurang push untuk action"],
    tips: ["Juga butuh sahabat yang bisa kasih honest feedback"],
  },
  C: {
    type: "C",
    title: "Butuh Sahabat Fun",
    emoji: "🎉",
    description: "Kamu butuh sahabat yang bikin hidup lebih seru! Seseorang yang spontan, penuh ide menarik, dan selalu ready untuk adventure.",
    traits: ["Fun-seeking", "Adventurous", "Light-hearted", "Social"],
    strengths: ["Great memories", "Stress relief", "Life more colorful"],
    weaknesses: ["Kurang depth", "Not there for serious stuff"],
    tips: ["Juga butuh sahabat untuk deep conversations sesekali"],
  },
  D: {
    type: "D",
    title: "Butuh Sahabat Calm",
    emoji: "🌿",
    description: "Kamu butuh sahabat yang grounding dan menenangkan! Seseorang yang low-maintenance, comfortable in silence, dan memberi ruang.",
    traits: ["Peaceful", "Low-key", "Comfortable", "Patient"],
    strengths: ["No pressure friendship", "Calming presence", "Stable bond"],
    weaknesses: ["Might miss excitement", "Kurang push untuk keluar comfort zone"],
    tips: ["Sesekali butuh sahabat yang memberi energi lebih"],
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
