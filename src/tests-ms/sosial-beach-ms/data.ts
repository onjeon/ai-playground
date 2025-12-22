// Gaya Beach
// Bagaimana di pantai?

export const questions = [
  {
    id: 1,
    question: "Bagaimana di pantai?",
    options: [
      { text: "Ya, selalu!", type: "A" },
      { text: "Kadang-kadang", type: "B" },
      { text: "Jarang", type: "C" },
      { text: "Tidak pernah", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bagaimana anda menghadapi cabaran dalam hidup?",
    options: [
      { text: "Agresif dan terus terang", type: "A" },
      { text: "Ada perancangan dan teratur", type: "B" },
      { text: "Santai dan rileks", type: "C" },
      { text: "Ikut je flow", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Apa prioriti anda dalam hidup?",
    options: [
      { text: "Kejayaan dan pencapaian", type: "A" },
      { text: "Hubungan dan connection", type: "B" },
      { text: "Ketenangan fikiran", type: "C" },
      { text: "Kebebasan dan independence", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bagaimana anda membuat keputusan?",
    options: [
      { text: "Cepat dan tegas", type: "A" },
      { text: "Dirancang dengan teliti", type: "B" },
      { text: "Ikut perasaan", type: "C" },
      { text: "Spontan je", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dalam situasi sosial, apa peranan anda?",
    options: [
      { text: "Leader dan organizer", type: "A" },
      { text: "Mediator dan peacekeeper", type: "B" },
      { text: "Observer sahaja", type: "C" },
      { text: "Ikut je apa orang buat", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Apa approach anda bila ada masalah?",
    options: [
      { text: "Selesaikan terus", type: "A" },
      { text: "Analisa dulu", type: "B" },
      { text: "Fikir kemudian", type: "C" },
      { text: "Biarkan je", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa gaya komunikasi anda?",
    options: [
      { text: "Direct dan straightforward", type: "A" },
      { text: "Diplomatik dan considerate", type: "B" },
      { text: "Senyap dan minimal", type: "C" },
      { text: "Casual dan spontan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bagaimana anda handle stress?",
    options: [
      { text: "Action terus", type: "A" },
      { text: "Planning dan organization", type: "B" },
      { text: "Relax dan self-care", type: "C" },
      { text: "Ignore je", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Apa yang anda nampak dalam diri 5 tahun akan datang?",
    options: [
      { text: "Berjaya dan di puncak", type: "A" },
      { text: "Stabil dan secure", type: "B" },
      { text: "Happy dan content", type: "C" },
      { text: "Bebas dan adventurous", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bagaimana anda express emosi?",
    options: [
      { text: "Openly dan vocal", type: "A" },
      { text: "Melalui kata-kata yang dipilih", type: "B" },
      { text: "Melalui tindakan", type: "C" },
      { text: "Jarang, simpan sendiri", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Apa weekend ideal anda?",
    options: [
      { text: "Aktiviti produktif dan adventure", type: "A" },
      { text: "Quality time dengan family", type: "B" },
      { text: "Rehat dan relaxation", type: "C" },
      { text: "Ikut flow, tiada plan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Apa motto hidup anda?",
    options: [
      { text: "Go big or go home!", type: "A" },
      { text: "Slow and steady wins", type: "B" },
      { text: "Enjoy the journey", type: "C" },
      { text: "Apa jadi, jadilah", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gaya Beach Jenis A",
    emoji: "🔥",
    description: "Anda seorang yang berani, decisive, dan action-oriented! Natural leader dan tidak takut bertindak.",
    traits: ["Berani", "Leader", "Decisive", "Action-oriented"],
    strengths: ["Natural leadership", "Quick decision maker", "Gets things done"],
    weaknesses: ["Kadang-kadang terlalu agresif", "Mungkin overwhelm orang lain"],
    tips: ["Balance action dengan reflection", "Dengar orang lain lebih banyak"],
  },
  B: {
    type: "B",
    title: "Gaya Beach Jenis B",
    emoji: "⚖️",
    description: "Anda seorang yang organized, thoughtful, dan balanced! Approach yang teratur dalam hidup.",
    traits: ["Organized", "Thoughtful", "Balanced", "Strategic"],
    strengths: ["Excellent planner", "Reliable dan consistent", "Good at analysis"],
    weaknesses: ["Kadang-kadang overthinking", "Terlalu cautious"],
    tips: ["Trust instinct anda", "Ambil calculated risks"],
  },
  C: {
    type: "C",
    title: "Gaya Beach Jenis C",
    emoji: "😌",
    description: "Anda seorang yang chill, peaceful, dan content! Prioriti adalah ketenangan.",
    traits: ["Chill", "Peaceful", "Content", "Easy-going"],
    strengths: ["Stress-free mindset", "Appreciate simple joys", "Emotionally balanced"],
    weaknesses: ["Kadang-kadang kurang ambition", "Terlalu passive"],
    tips: ["Set beberapa goals", "Push diri sendiri kadang-kadang"],
  },
  D: {
    type: "D",
    title: "Gaya Beach Jenis D",
    emoji: "🌊",
    description: "Anda seorang yang flexible, adaptable, dan spontaneous! Go with the flow.",
    traits: ["Flexible", "Adaptable", "Spontaneous", "Independent"],
    strengths: ["Highly adaptable", "Low stress levels", "Open to possibilities"],
    weaknesses: ["Kadang-kadang tiada direction", "Inconsistent"],
    tips: ["Create some structure", "Follow through on commitments"],
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
