// Tes Tingkat Introvert-Ekstrovert Kamu
// Di mana posisimu dalam spektrum sosial?

export const questions = [
  {
    id: 1,
    question: "Setelah seharian kerja atau kuliah, kamu prefer...",
    options: [
      { text: "Hangout dengan teman-teman", type: "A" },
      { text: "Quality time dengan beberapa orang dekat", type: "B" },
      { text: "Me time di rumah", type: "C" },
      { text: "Alone time total, tidak mau diganggu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Di pesta atau gathering besar...",
    options: [
      { text: "Life of the party, kenalan banyak orang", type: "A" },
      { text: "Enjoy tapi stick dengan orang yang dikenal", type: "B" },
      { text: "Awkward tapi berusaha sosialisasi", type: "C" },
      { text: "Menghindari sebisa mungkin", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara kamu recharge energy...",
    options: [
      { text: "Being around people", type: "A" },
      { text: "Mix of social dan alone time", type: "B" },
      { text: "Quiet time sendiri", type: "C" },
      { text: "Total solitude", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Jumlah teman dekat yang kamu punya...",
    options: [
      { text: "Banyak, I love people!", type: "A" },
      { text: "Beberapa circle yang berbeda", type: "B" },
      { text: "Sedikit tapi sangat dekat", type: "C" },
      { text: "Sangat sedikit atau hampir tidak ada", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat harus small talk dengan stranger...",
    options: [
      { text: "Easy dan enjoy", type: "A" },
      { text: "Can do kalau perlu", type: "B" },
      { text: "Uncomfortable tapi manage", type: "C" },
      { text: "Sangat tidak nyaman", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Weekend ideal menurutmu...",
    options: [
      { text: "Packed dengan social activities", type: "A" },
      { text: "Mix: hangout dan me time", type: "B" },
      { text: "Mostly at home dengan sedikit social", type: "C" },
      { text: "Completely at home, alone", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Dalam grup discussion atau meeting...",
    options: [
      { text: "Aktif bicara dan share ide", type: "A" },
      { text: "Contribute tapi tidak dominate", type: "B" },
      { text: "Lebih banyak dengar, bicara kalau ditanya", type: "C" },
      { text: "Prefer tidak bicara sama sekali", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Setelah social event yang panjang...",
    options: [
      { text: "Energized dan happy", type: "A" },
      { text: "Content tapi butuh sedikit rest", type: "B" },
      { text: "Drained dan butuh recovery", type: "C" },
      { text: "Completely exhausted", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Prefer kerja dalam environment...",
    options: [
      { text: "Open office dengan banyak interaksi", type: "A" },
      { text: "Balance antara collaboration dan focus time", type: "B" },
      { text: "Quiet space dengan minimal interruption", type: "C" },
      { text: "Work from home atau completely alone", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat punya masalah...",
    options: [
      { text: "Langsung cerita ke banyak orang", type: "A" },
      { text: "Share dengan beberapa orang terpercaya", type: "B" },
      { text: "Process sendiri dulu baru mungkin share", type: "C" },
      { text: "Keep to myself completely", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Phone call dari nomor tidak dikenal...",
    options: [
      { text: "Angkat, siapa tau penting", type: "A" },
      { text: "Angkat tapi wary", type: "B" },
      { text: "Prefer tidak angkat", type: "C" },
      { text: "Never angkat, anxiety inducing", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kebutuhan sosial kamu...",
    options: [
      { text: "Tinggi, butuh people around", type: "A" },
      { text: "Moderate, balanced needs", type: "B" },
      { text: "Rendah, bisa survive dengan minimal", type: "C" },
      { text: "Very low, prefer solitude", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ekstrovert",
    emoji: "🎉",
    description: "Kamu adalah ekstrovert sejati! Energi datang dari interaksi sosial. People person yang thrives in social settings. Life is better with people around!",
    traits: ["Outgoing", "Social", "Energetic", "Talkative"],
    strengths: ["Great networker", "Good at connecting", "Brings energy"],
    weaknesses: ["Can struggle alone", "Might overwhelm introverts"],
    tips: ["Respect others' need for quiet", "Learn to enjoy some alone time"],
  },
  B: {
    type: "B",
    title: "Ambivert",
    emoji: "⚖️",
    description: "Kamu adalah ambivert - balanced antara introvert dan ekstrovert! Bisa enjoy both social dan alone time. Adaptable dalam berbagai situasi.",
    traits: ["Balanced", "Flexible", "Adaptable", "Versatile"],
    strengths: ["Can relate to both types", "Adjustable", "Well-rounded"],
    weaknesses: ["Might feel pulled in both directions"],
    tips: ["Embrace your flexibility", "Honor what you need in the moment"],
  },
  C: {
    type: "C",
    title: "Introvert",
    emoji: "📚",
    description: "Kamu adalah introvert! Recharge dengan solitude dan prefer deep connections over broad social circle. Quality over quantity dalam relationships.",
    traits: ["Reflective", "Deep thinker", "Selective", "Observant"],
    strengths: ["Good listener", "Deep relationships", "Self-sufficient"],
    weaknesses: ["Can isolate", "Miss opportunities", "Misunderstood"],
    tips: ["Push yourself socially sometimes", "Your presence matters"],
  },
  D: {
    type: "D",
    title: "Highly Introverted",
    emoji: "🌙",
    description: "Kamu highly introverted, dengan preference kuat untuk solitude. Social situations draining dan butuh significant alone time. Nothing wrong with this!",
    traits: ["Very private", "Solitary", "Independent", "Introspective"],
    strengths: ["Self-reliant", "Deep inner world", "Can focus intensely"],
    weaknesses: ["Risk of isolation", "May miss connections", "Can be lonely"],
    tips: ["Some connection is healthy", "Find your people even if few", "Online community bisa help"],
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
