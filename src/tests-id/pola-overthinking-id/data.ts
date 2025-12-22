// Pola Overthinking Kamu
// Tes ini mengungkap bagaimana pola overthinking kamu dan cara mengatasinya!

export const questions = [
  {
    id: 1,
    question: "Seberapa sering pikiran berputar-putar tentang satu hal?",
    options: [
      { text: "Jarang, bisa let go dengan mudah", type: "A" },
      { text: "Kadang-kadang, untuk hal-hal penting", type: "B" },
      { text: "Sering, susah berhenti mikir", type: "C" },
      { text: "Hampir selalu, pikiran tidak bisa berhenti", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Setelah conversation, kamu sering...",
    options: [
      { text: "Move on, tidak mikirin lagi", type: "A" },
      { text: "Reflect sebentar lalu lanjut", type: "B" },
      { text: "Replay dan analisis apa yang dikatakan", type: "C" },
      { text: "Obsessively analyze setiap kata", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Decision making process...",
    options: [
      { text: "Quick, trust intuition", type: "A" },
      { text: "Thoughtful tapi tidak berlebihan", type: "B" },
      { text: "Lama, analyze all possibilities", type: "C" },
      { text: "Paralyzed, susah decide apapun", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Malam sebelum tidur, pikiran biasanya...",
    options: [
      { text: "Tenang, mudah tidur", type: "A" },
      { text: "Sedikit aktif tapi manageable", type: "B" },
      { text: "Sangat aktif, susah tidur", type: "C" },
      { text: "Racing thoughts, insomnia sering", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Worst-case scenario thinking...",
    options: [
      { text: "Jarang, fokus pada yang realistic", type: "A" },
      { text: "Kadang untuk hal penting", type: "B" },
      { text: "Sering, sulit dihentikan", type: "C" },
      { text: "Default mode, selalu assume the worst", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat menunggu response atau hasil penting...",
    options: [
      { text: "Sabar, bisa fokus ke hal lain", type: "A" },
      { text: "Agak gelisah tapi manage", type: "B" },
      { text: "Sangat gelisah, check terus", type: "C" },
      { text: "Consumed by anxiety, tidak bisa fungsi", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tentang mistakes atau embarrassing moments dari masa lalu...",
    options: [
      { text: "Sudah lupa atau tidak bother", type: "A" },
      { text: "Ingat tapi tidak dwell on it", type: "B" },
      { text: "Sering ingat dan cringe", type: "C" },
      { text: "Haunted by them constantly", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Analisis tentang what others think of you...",
    options: [
      { text: "Tidak terlalu peduli", type: "A" },
      { text: "Care tapi tidak overthink", type: "B" },
      { text: "Sering analyze dan worry", type: "C" },
      { text: "Obsessed dengan others' perception", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kemampuan untuk 'turn off' thoughts...",
    options: [
      { text: "Mudah, bisa switch off kapanpun", type: "A" },
      { text: "Butuh effort tapi bisa", type: "B" },
      { text: "Susah, thoughts keep coming", type: "C" },
      { text: "Almost impossible", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Impact overthinking pada daily life...",
    options: [
      { text: "Minimal, life berjalan normal", type: "A" },
      { text: "Kadang affect tapi still function", type: "B" },
      { text: "Significant impact, productivity menurun", type: "C" },
      { text: "Severely affect, hard to function", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Strategies untuk stop overthinking...",
    options: [
      { text: "Punya dan effective", type: "A" },
      { text: "Punya beberapa yang work", type: "B" },
      { text: "Trying tapi sering tidak work", type: "C" },
      { text: "Tidak punya atau tidak work", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall, seberapa parah overthinking kamu?",
    options: [
      { text: "Minimal, not a problem", type: "A" },
      { text: "Moderate, manageable", type: "B" },
      { text: "Significant, a real issue", type: "C" },
      { text: "Severe, affecting quality of life", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Minimal Overthinker",
    emoji: "😌",
    description: "Selamat! Kamu bukan overthinker. Kamu bisa let go of thoughts dan tidak dwell on things. Pikiranmu tenang dan kamu present in the moment.",
    traits: ["Present", "Calm", "Decisive", "Unbothered"],
    strengths: ["Clear thinking", "Good sleep", "Quick decisions", "Low anxiety"],
    weaknesses: ["Mungkin kadang kurang thorough"],
    tips: ["Keep it up!", "Share tips dengan orang lain"],
  },
  B: {
    type: "B",
    title: "Occasional Overthinker",
    emoji: "🤔",
    description: "Kamu overthink kadang-kadang, terutama untuk hal-hal penting. Ini normal dan manageable. Kamu punya awareness dan coping strategies.",
    traits: ["Thoughtful", "Analytical", "Manageable anxiety", "Balanced"],
    strengths: ["Thorough thinking", "Still functional", "Aware of pattern"],
    weaknesses: ["Could spiral sometimes", "Takes effort to stop"],
    tips: ["Continue using strategies", "Don't let it escalate", "Practice mindfulness"],
  },
  C: {
    type: "C",
    title: "Frequent Overthinker",
    emoji: "🌀",
    description: "Overthinking adalah issue yang significant. Pikiran sering racing dan susah dihentikan. Ini affecting quality of life dan perlu addressed.",
    traits: ["Anxious", "Analytical overload", "Worried", "Ruminating"],
    strengths: ["Deep thinker", "Thorough", "Caring"],
    weaknesses: ["Decision paralysis", "Poor sleep", "Anxiety", "Productivity issues"],
    tips: ["Learn grounding techniques", "Consider therapy", "Journaling helps", "Set time limits for decisions"],
  },
  D: {
    type: "D",
    title: "Severe Overthinker",
    emoji: "😵‍💫",
    description: "Overthinking sangat severe dan significantly affecting your life. Ini memerlukan professional help. Kamu tidak harus hidup seperti ini.",
    traits: ["Severely anxious", "Paralyzed", "Exhausted", "Struggling"],
    strengths: ["Aware there's a problem", "Ready for change"],
    weaknesses: ["Quality of life affected", "Physical symptoms", "Relationship impact"],
    tips: ["Seek professional help immediately", "Therapy sangat membantu", "You can learn to quiet the mind", "Medication might help"],
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
