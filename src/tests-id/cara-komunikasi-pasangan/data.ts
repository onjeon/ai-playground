// Tes Cara Komunikasi dengan Pasangan
// Bagaimana style komunikasimu dalam hubungan romantis?

export const questions = [
  {
    id: 1,
    question: "Saat ada masalah dengan pasangan...",
    options: [
      { text: "Langsung bicara, selesaikan saat itu juga", type: "A" },
      { text: "Pilih waktu yang tepat untuk discuss", type: "B" },
      { text: "Hints dan harap dia notice", type: "C" },
      { text: "Diam dan harap masalah hilang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu mengekspresikan kebutuhan...",
    options: [
      { text: "Langsung dan jelas bilang apa yang dibutuhkan", type: "A" },
      { text: "Discuss dan negotiate together", type: "B" },
      { text: "Kode-kode dan hints", type: "C" },
      { text: "Jarang express, takut demanding", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat pasangan cerita tentang harinya...",
    options: [
      { text: "Listen aktif dan kasih response/advice", type: "A" },
      { text: "Dengarkan dengan penuh perhatian", type: "B" },
      { text: "Sambil multitask tapi tetap dengar", type: "C" },
      { text: "Kurang fokus, mind elsewhere", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu mengkritik atau memberi feedback...",
    options: [
      { text: "Direct dan honest, no sugarcoating", type: "A" },
      { text: "Sandwich method - positive-negative-positive", type: "B" },
      { text: "Very careful, takut menyakiti", type: "C" },
      { text: "Avoid criticism, keep peace", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Daily communication dengan pasangan...",
    options: [
      { text: "Constant, share everything sepanjang hari", type: "A" },
      { text: "Regular check-ins dan meaningful convos", type: "B" },
      { text: "Sesekali, not too intense", type: "C" },
      { text: "Minimal, kalau ada yang penting saja", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat tidak setuju dengan pasangan...",
    options: [
      { text: "Argue dan defend position dengan kuat", type: "A" },
      { text: "Discuss calmly, cari common ground", type: "B" },
      { text: "Express tapi easily back down", type: "C" },
      { text: "Mengalah untuk avoid konflik", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara menunjukkan apresiasi ke pasangan...",
    options: [
      { text: "Sering verbally express thank you dan love", type: "A" },
      { text: "Mix of words dan actions", type: "B" },
      { text: "Lebih ke actions, words kurang", type: "C" },
      { text: "Assume dia sudah tau", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat pasangan mengecewakan...",
    options: [
      { text: "Langsung bilang dan express kekecewaan", type: "A" },
      { text: "Cool down dulu baru bicara constructive", type: "B" },
      { text: "Diam tapi sikap berubah", type: "C" },
      { text: "Pendam dan act normal", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Important life decisions...",
    options: [
      { text: "Discuss extensively, every detail", type: "A" },
      { text: "Talk through together, reach consensus", type: "B" },
      { text: "Discuss but often follow one person", type: "C" },
      { text: "One person usually decides", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Comfort level dengan vulnerable conversations...",
    options: [
      { text: "Very comfortable, open book", type: "A" },
      { text: "Comfortable dengan effort", type: "B" },
      { text: "Struggle tapi trying", type: "C" },
      { text: "Avoid vulnerability", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat ada misunderstanding...",
    options: [
      { text: "Langsung clarify sampai crystal clear", type: "A" },
      { text: "Talk it through calmly", type: "B" },
      { text: "Hope it resolves somehow", type: "C" },
      { text: "Let it slide, not worth discussion", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall communication quality dengan pasangan...",
    options: [
      { text: "Sangat open dan honest tentang semua", type: "A" },
      { text: "Good, mostly effective", type: "B" },
      { text: "Bisa lebih baik, ada gaps", type: "C" },
      { text: "Kurang, banyak yang tidak dibicarakan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Open Communicator",
    emoji: "📣",
    description: "Kamu adalah communicator yang sangat open dan direct! Tidak ada filter, semua dibicarakan. Transparency tinggi dalam hubungan.",
    traits: ["Open", "Direct", "Honest", "Assertive"],
    strengths: ["No guessing games", "Clear expectations", "Problems addressed"],
    weaknesses: ["Bisa overwhelming", "Sometimes too blunt", "Partner needs to keep up"],
    tips: ["Sensitivity matters too", "Not everything needs immediate discussion"],
  },
  B: {
    type: "B",
    title: "Balanced Communicator",
    emoji: "💬",
    description: "Kamu memiliki communication style yang balanced! Open tapi juga thoughtful. Know when dan how to communicate effectively.",
    traits: ["Balanced", "Thoughtful", "Effective", "Considerate"],
    strengths: ["Healthy communication", "Partner feels heard", "Constructive"],
    weaknesses: ["Occasional miscommunication"],
    tips: ["Keep nurturing this skill", "Every relationship is different"],
  },
  C: {
    type: "C",
    title: "Passive Communicator",
    emoji: "🌫️",
    description: "Kamu cenderung passive dalam komunikasi! Hints lebih banyak dari direct expression. Partner might struggle to understand needs.",
    traits: ["Passive", "Indirect", "Hints-based", "Non-confrontational"],
    strengths: ["Avoids conflict", "Gentle"],
    weaknesses: ["Miscommunication", "Unmet needs", "Building resentment"],
    tips: ["Learn to express directly", "Your needs matter", "Hints don't always work"],
  },
  D: {
    type: "D",
    title: "Avoidant Communicator",
    emoji: "🙊",
    description: "Kamu avoid communication dalam hubungan! Banyak yang tidak dibicarakan dan problems tidak addressed. Ini bisa merusak relationship.",
    traits: ["Avoidant", "Closed", "Non-verbal", "Suppressing"],
    strengths: ["Avoids immediate conflict"],
    weaknesses: ["Problems accumulate", "Partner feels distant", "Relationship suffers"],
    tips: ["Communication is foundation", "Seek help if struggling", "Partner deserves to know your thoughts"],
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
