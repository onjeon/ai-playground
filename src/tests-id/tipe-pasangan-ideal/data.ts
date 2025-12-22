// Tes Tipe Pasangan Ideal Kamu
// Temukan karakteristik pasangan yang cocok untukmu!

export const questions = [
  {
    id: 1,
    question: "Dalam hubungan, yang paling penting adalah...",
    options: [
      { text: "Komunikasi terbuka dan deep talk", type: "A" },
      { text: "Kesetiaan dan komitmen total", type: "B" },
      { text: "Fun dan bisa tertawa bareng", type: "C" },
      { text: "Saling support untuk berkembang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Weekend ideal dengan pasangan...",
    options: [
      { text: "Ngobrol sambil ngopi, quality time", type: "A" },
      { text: "Quality time di rumah, masak bareng", type: "B" },
      { text: "Adventure: jalan-jalan atau coba hal baru", type: "C" },
      { text: "Support aktivitas masing-masing", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara menunjukkan cinta yang paling bermakna...",
    options: [
      { text: "Kata-kata sayang dan perhatian", type: "A" },
      { text: "Aksi nyata dan kehadiran", type: "B" },
      { text: "Surprise dan pengalaman bersama", type: "C" },
      { text: "Respect dan support untuk mimpi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat ada konflik dalam hubungan...",
    options: [
      { text: "Bicarakan sampai clear dan paham", type: "A" },
      { text: "Selesaikan dengan sabar dan pengertian", type: "B" },
      { text: "Cool off dulu baru bahas santai", type: "C" },
      { text: "Cari solusi praktis bersama", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tipe kepribadian pasangan yang prefer...",
    options: [
      { text: "Deep thinker dan good listener", type: "A" },
      { text: "Reliable dan down to earth", type: "B" },
      { text: "Adventurous dan spontan", type: "C" },
      { text: "Ambitious dan goal-oriented", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Komunikasi dengan pasangan idealnya...",
    options: [
      { text: "Intens dan frequent, share everything", type: "A" },
      { text: "Consistent dan meaningful", type: "B" },
      { text: "Fun dan lighthearted", type: "C" },
      { text: "Efficient dan purposeful", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Financial approach dalam hubungan...",
    options: [
      { text: "Open discussion dan transparansi penuh", type: "A" },
      { text: "Stable dan planning bersama", type: "B" },
      { text: "Flexible, nikmati hidup", type: "C" },
      { text: "Goal-oriented, invest untuk masa depan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Space dan kemandirian dalam hubungan...",
    options: [
      { text: "Balance, ada togetherness dan individual time", type: "A" },
      { text: "Lebih banyak togetherness", type: "B" },
      { text: "Freedom penting untuk keduanya", type: "C" },
      { text: "Support masing-masing punya passion", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tentang keluarga dan masa depan...",
    options: [
      { text: "Diskusi mendalam tentang values dan goals", type: "A" },
      { text: "Traditional values, family-oriented", type: "B" },
      { text: "Flexible, lihat situasi nanti", type: "C" },
      { text: "Plan bersama dengan clear milestones", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cara pasangan menunjukkan care yang kamu appreciate...",
    options: [
      { text: "Remember details dan perhatian kecil", type: "A" },
      { text: "Selalu ada dan reliable", type: "B" },
      { text: "Bikin surprise dan memorable moments", type: "C" },
      { text: "Support goals dan push untuk lebih baik", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Dealbreaker dalam hubungan...",
    options: [
      { text: "Tidak bisa komunikasi terbuka", type: "A" },
      { text: "Tidak setia atau tidak reliable", type: "B" },
      { text: "Terlalu serius dan boring", type: "C" },
      { text: "Tidak punya ambisi atau growth mindset", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Hubungan ideal menurutmu...",
    options: [
      { text: "Soulmate yang truly understand kamu", type: "A" },
      { text: "Partner hidup yang bisa diandalkan", type: "B" },
      { text: "Best friend yang juga kekasih", type: "C" },
      { text: "Power couple yang saling elevate", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Butuh Deep Connector",
    emoji: "💬",
    description: "Pasangan idealmu adalah seseorang yang bisa connect di level mendalam! Butuh partner yang good listener, emotional intelligence tinggi, dan bisa deep talk.",
    traits: ["Deep connection", "Emotional intimacy", "Open communication"],
    strengths: ["Meaningful relationship", "Strong emotional bond", "Understanding partner"],
    weaknesses: ["Might expect too much depth", "Draining jika tidak match"],
    tips: ["Appreciate surface-level fun too", "Not every moment needs to be deep"],
  },
  B: {
    type: "B",
    title: "Butuh Stable Partner",
    emoji: "🏠",
    description: "Pasangan idealmu adalah seseorang yang reliable dan committed! Butuh partner yang stable, trustworthy, dan family-oriented. Traditional values appreciated.",
    traits: ["Stability", "Reliability", "Commitment", "Family values"],
    strengths: ["Secure relationship", "Long-term potential", "Trustworthy partner"],
    weaknesses: ["Might be too traditional", "Resist change"],
    tips: ["Embrace some spontaneity", "Growth requires some discomfort"],
  },
  C: {
    type: "C",
    title: "Butuh Fun Partner",
    emoji: "🎢",
    description: "Pasangan idealmu adalah seseorang yang fun dan adventurous! Butuh partner yang bisa bikin tertawa, spontan, dan bring excitement ke hidupmu.",
    traits: ["Fun", "Spontaneous", "Adventurous", "Light-hearted"],
    strengths: ["Exciting relationship", "Never boring", "Great memories"],
    weaknesses: ["Might lack depth", "Struggle with serious topics"],
    tips: ["Deep moments juga penting", "Fun doesn't mean avoiding hard conversations"],
  },
  D: {
    type: "D",
    title: "Butuh Growth Partner",
    emoji: "📈",
    description: "Pasangan idealmu adalah seseorang yang ambitious dan growth-oriented! Butuh partner yang punya drive, support goalmu, dan bisa elevate each other.",
    traits: ["Ambitious", "Growth-oriented", "Supportive", "Goal-driven"],
    strengths: ["Power couple potential", "Mutual growth", "Inspiring relationship"],
    weaknesses: ["Might be too focused on achievements", "Miss present moments"],
    tips: ["Success isn't everything", "Enjoy the journey together"],
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
