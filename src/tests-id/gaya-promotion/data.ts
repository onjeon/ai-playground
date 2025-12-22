// Tes Gaya Mengejar Promosi Kamu
// Bagaimana cara kamu untuk naik jabatan?

export const questions = [
  {
    id: 1,
    question: "Strategi utama kamu untuk dapat promosi...",
    options: [
      { text: "Exceed expectations dan showcase hasil", type: "A" },
      { text: "Build relationship dengan decision makers", type: "B" },
      { text: "Kerja keras dan tunggu dinotice", type: "C" },
      { text: "Promosi bukan prioritas utama", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tentang self-promotion di kantor...",
    options: [
      { text: "Actively share achievements dan wins", type: "A" },
      { text: "Kasih visibility ke work secara strategis", type: "B" },
      { text: "Let work speak for itself", type: "C" },
      { text: "Uncomfortable dengan self-promotion", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat ada opportunity untuk high-visibility project...",
    options: [
      { text: "Volunteer dan grab the chance", type: "A" },
      { text: "Take kalau sesuai strength", type: "B" },
      { text: "Lihat situasi dulu", type: "C" },
      { text: "Avoid, too much pressure", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Komunikasi career goals ke atasan...",
    options: [
      { text: "Jelas dan regularly discuss", type: "A" },
      { text: "Sampaikan saat performance review", type: "B" },
      { text: "Hints tapi tidak explicit", type: "C" },
      { text: "Tidak pernah discuss", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Extra responsibilities di luar job desc...",
    options: [
      { text: "Ambil sebanyak mungkin untuk prove capability", type: "A" },
      { text: "Selective yang aligned dengan career goals", type: "B" },
      { text: "Ambil kalau diminta", type: "C" },
      { text: "Stick to job desc aja", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat orang lain yang dapat promosi...",
    options: [
      { text: "Analyze kenapa mereka menang, adjust strategy", type: "A" },
      { text: "Congrats dan refleksi untuk diri sendiri", type: "B" },
      { text: "Kecewa tapi terima", type: "C" },
      { text: "Tidak terlalu peduli", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Networking dengan senior management...",
    options: [
      { text: "Actively seek opportunities untuk connect", type: "A" },
      { text: "Professional relationship when paths cross", type: "B" },
      { text: "Intimidated, prefer avoid", type: "C" },
      { text: "Tidak perlu, fokus kerja aja", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Skill development untuk promosi...",
    options: [
      { text: "Constantly upskill dan get certifications", type: "A" },
      { text: "Develop skills yang relevant untuk next role", type: "B" },
      { text: "Learn on the job aja", type: "C" },
      { text: "Cukup dengan current skills", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau promosi tidak kunjung datang...",
    options: [
      { text: "Ask directly dan seek feedback", type: "A" },
      { text: "Consider other opportunities", type: "B" },
      { text: "Keep working, sabar menunggu", type: "C" },
      { text: "Ya sudah, bukan rejeki", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tentang office politics untuk promosi...",
    options: [
      { text: "Play the game strategically", type: "A" },
      { text: "Navigate dengan professional", type: "B" },
      { text: "Avoid, focus on merit", type: "C" },
      { text: "Hate politics, tidak mau participate", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Timeline ekspektasi untuk promosi...",
    options: [
      { text: "Clear timeline dan milestones", type: "A" },
      { text: "Within 2-3 tahun", type: "B" },
      { text: "Kapanpun ready, tidak buru-buru", type: "C" },
      { text: "Tidak ada specific timeline", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Hal yang willing kamu sacrifice untuk promosi...",
    options: [
      { text: "Extra hours dan personal time", type: "A" },
      { text: "Comfort zone dan take calculated risks", type: "B" },
      { text: "Tidak mau sacrifice terlalu banyak", type: "C" },
      { text: "Promosi tidak worth sacrifice besar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Promotion Hunter",
    emoji: "🎯",
    description: "Kamu sangat ambitious dan proaktif kejar promosi! Strategic visibility, strong network, dan always exceed expectations. Fast track career adalah goal-mu.",
    traits: ["Ambitious", "Strategic", "Proactive", "Visibility seeker"],
    strengths: ["Career advancement", "Clear goals", "Action oriented"],
    weaknesses: ["Burnout risk", "Might step on toes"],
    tips: ["Sustainable pace penting", "Relationships matter beyond utility"],
  },
  B: {
    type: "B",
    title: "Calculated Climber",
    emoji: "📈",
    description: "Kamu pursue promosi dengan strategic dan balanced! Tau kapan push dan kapan wait. Career growth penting tapi dengan cara yang sustainable.",
    traits: ["Strategic", "Balanced", "Patient", "Selective"],
    strengths: ["Sustainable growth", "Good judgment", "Quality over speed"],
    weaknesses: ["Might miss windows", "Could be more aggressive"],
    tips: ["Sometimes bold moves needed", "Keep the momentum"],
  },
  C: {
    type: "C",
    title: "Merit Believer",
    emoji: "⚖️",
    description: "Kamu percaya kerja bagus akan dinotice eventually. Fokus ke deliver results dan hope for recognition. Tidak aggressive promote diri sendiri.",
    traits: ["Hardworking", "Humble", "Patient", "Merit focused"],
    strengths: ["Quality work", "No politics", "Genuine"],
    weaknesses: ["Often overlooked", "Slow advancement"],
    tips: ["Merit is baseline, visibility is key", "Advocate for yourself"],
  },
  D: {
    type: "D",
    title: "Promotion Indifferent",
    emoji: "🌴",
    description: "Promosi bukan prioritas utama kamu! Content dengan current level atau punya goals lain. Work-life balance dan happiness lebih penting dari title.",
    traits: ["Content", "Different priorities", "Balanced", "Alternative goals"],
    strengths: ["Less stress", "Clear priorities", "Life balance"],
    weaknesses: ["Career might stall", "Might regret later"],
    tips: ["Make sure it's choice not fear", "Career growth has benefits beyond title"],
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
