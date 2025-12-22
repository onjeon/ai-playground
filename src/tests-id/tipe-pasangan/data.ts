// Tipe Pasangan Ideal Kamu
// Tes ini mengungkap karakteristik pasangan yang cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Kualitas terpenting yang kamu cari di pasangan?",
    options: [
      { text: "Ambisius dan punya drive dalam hidup", type: "A" },
      { text: "Hangat, pengertian, dan supportive", type: "B" },
      { text: "Seru, spontan, dan adventurous", type: "C" },
      { text: "Stabil, reliable, dan bertanggung jawab", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Weekend ideal dengan pasangan?",
    options: [
      { text: "Diskusi deep talk tentang masa depan", type: "A" },
      { text: "Cuddling dan quality time di rumah", type: "B" },
      { text: "Adventure atau coba hal baru bersama", type: "C" },
      { text: "Aktivitas produktif atau hobi bersama", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dalam konflik, kamu butuh pasangan yang...",
    options: [
      { text: "Bisa berdiskusi logis dan mencari solusi", type: "A" },
      { text: "Sabar mendengarkan dan memahami", type: "B" },
      { text: "Bisa cooling down dulu, lanjut bicara nanti", type: "C" },
      { text: "Langsung selesaikan tanpa drama", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Komunikasi ideal dalam hubungan menurutmu?",
    options: [
      { text: "Intellectual, bisa diskusi berbagai topik", type: "A" },
      { text: "Emosional, sharing perasaan dalam", type: "B" },
      { text: "Light dan fun, banyak humor", type: "C" },
      { text: "Praktis dan to the point", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Soal karir pasangan, preferensimu?",
    options: [
      { text: "Ambisius dan sukses di bidangnya", type: "A" },
      { text: "Yang penting bahagia dengan pekerjaannya", type: "B" },
      { text: "Fleksibel, bisa diajak traveling kapan saja", type: "C" },
      { text: "Stabil dengan income yang konsisten", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Gesture romantis yang paling kamu hargai?",
    options: [
      { text: "Support dan push untuk mencapai goals", type: "A" },
      { text: "Perhatian kecil dan care sehari-hari", type: "B" },
      { text: "Surprise dan kejutan spontan", type: "C" },
      { text: "Konsistensi dan kehadiran yang reliable", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Soal kemandirian dalam hubungan, kamu suka...",
    options: [
      { text: "Masing-masing punya goals dan support satu sama lain", type: "A" },
      { text: "Banyak quality time bersama", type: "B" },
      { text: "Balance, ada waktu bareng dan sendiri", type: "C" },
      { text: "Kebersamaan yang terstruktur dan jelas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Red flag terbesar dalam hubungan menurutmu?",
    options: [
      { text: "Tidak punya ambisi atau tujuan hidup", type: "A" },
      { text: "Tidak pengertian dan tidak empati", type: "B" },
      { text: "Terlalu serius dan membosankan", type: "C" },
      { text: "Tidak reliable dan tidak konsisten", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Dalam mengambil keputusan bersama, kamu suka...",
    options: [
      { text: "Diskusi rational dan berbasis data", type: "A" },
      { text: "Mempertimbangkan perasaan masing-masing", type: "B" },
      { text: "Spontan dan ikuti feeling", type: "C" },
      { text: "Plan matang dan terstruktur", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Love language yang paling kamu hargai dari pasangan?",
    options: [
      { text: "Support untuk goals dan ambisi", type: "A" },
      { text: "Quality time dan physical affection", type: "B" },
      { text: "Surprise dan adventures bersama", type: "C" },
      { text: "Acts of service dan reliability", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bagaimana pasangan idealmu handle stress?",
    options: [
      { text: "Solve problems dengan approach terstruktur", type: "A" },
      { text: "Komunikasi terbuka dan saling support", type: "B" },
      { text: "Refresh dengan aktivitas fun", type: "C" },
      { text: "Tenang dan handle dengan mature", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Jika harus memilih satu trait, pasangan idealmu adalah...",
    options: [
      { text: "Visioner dengan ambisi besar", type: "A" },
      { text: "Penuh kasih sayang dan pengertian", type: "B" },
      { text: "Fun dan membuat hidup seru", type: "C" },
      { text: "Solid dan bisa diandalkan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Achiever Partner",
    emoji: "🚀",
    description: "Kamu cocok dengan pasangan yang ambisius dan driven! Kamu butuh seseorang yang punya goals, bisa diajak diskusi deep, dan saling support untuk mencapai impian.",
    traits: ["Ambitious", "Intellectual", "Goal-oriented", "Supportive of growth"],
    strengths: ["Power couple potential", "Saling push untuk lebih baik"],
    weaknesses: ["Bisa kompetitif", "Kurang romantic gestures"],
    tips: ["Balance ambisi dengan quality time", "Ingat romance di tengah hustle"],
  },
  B: {
    type: "B",
    title: "The Nurturing Partner",
    emoji: "💕",
    description: "Kamu cocok dengan pasangan yang hangat dan nurturing! Kamu butuh seseorang yang sabar, pengertian, dan bisa jadi safe space untukmu.",
    traits: ["Warm", "Empathetic", "Supportive", "Patient"],
    strengths: ["Deep emotional connection", "Feeling truly understood"],
    weaknesses: ["Bisa terlalu comfortable", "Avoid conflict"],
    tips: ["Communicate needs clearly", "Appreciate their patience"],
  },
  C: {
    type: "C",
    title: "The Adventurous Partner",
    emoji: "🎢",
    description: "Kamu cocok dengan pasangan yang fun dan spontan! Kamu butuh seseorang yang bisa membuat hidup seru, penuh surprise, dan selalu ada excitement.",
    traits: ["Fun", "Spontaneous", "Adventurous", "Flexible"],
    strengths: ["Never boring", "Always something new"],
    weaknesses: ["Bisa kurang stability", "Planning bukan forte"],
    tips: ["Balance fun dengan responsibility", "Appreciate steady moments too"],
  },
  D: {
    type: "D",
    title: "The Steady Partner",
    emoji: "⚓",
    description: "Kamu cocok dengan pasangan yang stabil dan reliable! Kamu butuh seseorang yang konsisten, bisa diandalkan, dan memberi rasa aman.",
    traits: ["Stable", "Reliable", "Consistent", "Responsible"],
    strengths: ["Security and trust", "Long-term thinking"],
    weaknesses: ["Bisa terkesan boring", "Kurang spontaneous"],
    tips: ["Inject some spontaneity", "Appreciate their reliability"],
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
