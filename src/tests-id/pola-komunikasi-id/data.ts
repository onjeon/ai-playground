// Pola Komunikasi Kamu
// Tes ini mengungkap gaya komunikasi kamu dalam berbagai situasi!

export const questions = [
  {
    id: 1,
    question: "Saat menyampaikan pendapat yang berbeda...",
    options: [
      { text: "Tegas tapi tetap respectful", type: "A" },
      { text: "Hati-hati, tidak mau menyinggung", type: "B" },
      { text: "Blak-blakan, langsung to the point", type: "C" },
      { text: "Menahan diri, lebih baik diam", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Dalam diskusi kelompok, kamu biasanya...",
    options: [
      { text: "Balance antara bicara dan mendengar", type: "A" },
      { text: "Lebih banyak mendengar, bicara kalau perlu", type: "B" },
      { text: "Dominan, suka lead conversation", type: "C" },
      { text: "Pasif, jarang contribute", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat ada konflik atau ketidaksetujuan...",
    options: [
      { text: "Address langsung, cari solusi bareng", type: "A" },
      { text: "Coba mediasi, cari common ground", type: "B" },
      { text: "Fight for my point, harus menang", type: "C" },
      { text: "Menghindar, tidak suka konflik", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu express kebutuhan atau keinginan...",
    options: [
      { text: "Jelas dan direct tanpa demanding", type: "A" },
      { text: "Subtle hints, harap orang lain ngerti", type: "B" },
      { text: "Demanding, harus dituruti", type: "C" },
      { text: "Jarang express, takut merepotkan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bahasa tubuh saat berkomunikasi...",
    options: [
      { text: "Open dan approachable", type: "A" },
      { text: "Tergantung situasi dan lawan bicara", type: "B" },
      { text: "Dominant, take space", type: "C" },
      { text: "Defensive atau tertutup", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mendengarkan orang lain...",
    options: [
      { text: "Active listening, fully present", type: "A" },
      { text: "Listen tapi kadang distracted", type: "B" },
      { text: "Waiting for my turn to speak", type: "C" },
      { text: "Sering miss points karena anxious", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat merasa tersinggung atau hurt...",
    options: [
      { text: "Communicate dengan calm, explain feelings", type: "A" },
      { text: "Diam dulu, process, baru communicate", type: "B" },
      { text: "React langsung, kadang menyesal", type: "C" },
      { text: "Pendam dan pretend fine", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Giving feedback ke orang lain...",
    options: [
      { text: "Constructive dan actionable", type: "A" },
      { text: "Sangat careful, sandwich dengan pujian", type: "B" },
      { text: "Blunt dan direct, tidak filter", type: "C" },
      { text: "Avoid giving feedback", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Dalam relationship, cara express affection...",
    options: [
      { text: "Verbal dan actions, express openly", type: "A" },
      { text: "Actions more than words", type: "B" },
      { text: "Expect them to know, tidak perlu express", type: "C" },
      { text: "Struggle to express affection", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Setting boundaries dengan orang lain...",
    options: [
      { text: "Clear dan firm tapi kind", type: "A" },
      { text: "Susah tapi trying", type: "B" },
      { text: "Very strict, take it or leave it", type: "C" },
      { text: "Tidak punya boundaries yang jelas", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat tidak setuju dengan atasan atau figure of authority...",
    options: [
      { text: "Express respectfully dengan reasoning", type: "A" },
      { text: "Agree di depan, vent di belakang", type: "B" },
      { text: "Challenge langsung, tidak peduli hierarchy", type: "C" },
      { text: "Selalu ikut saja, tidak berani beda", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall communication style kamu...",
    options: [
      { text: "Assertive - clear, honest, respectful", type: "A" },
      { text: "Passive - accommodate, avoid conflict", type: "B" },
      { text: "Aggressive - dominant, forceful", type: "C" },
      { text: "Passive-aggressive - indirect, resentful", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Assertive Communicator",
    emoji: "💬",
    description: "Kamu adalah communicator yang assertive! Kamu express thoughts dan feelings dengan jelas tanpa melanggar hak orang lain. Ini adalah gaya komunikasi yang paling healthy.",
    traits: ["Clear", "Respectful", "Confident", "Honest"],
    strengths: ["Healthy relationships", "Effective communication", "Good boundaries"],
    weaknesses: ["Bisa terlihat terlalu confident", "Not everyone appreciates directness"],
    tips: ["Adapt to different people", "Continue developing this skill"],
  },
  B: {
    type: "B",
    title: "Passive Communicator",
    emoji: "🤫",
    description: "Kamu cenderung passive dalam komunikasi. Kamu sering mengalah dan menghindari konflik, kadang dengan mengorbankan kebutuhan sendiri. Voice-mu penting untuk didengar!",
    traits: ["Accommodating", "Conflict-avoidant", "People-pleaser", "Quiet"],
    strengths: ["Easy to get along with", "Good listener", "Keeps peace"],
    weaknesses: ["Needs not met", "Resentment build up", "Overlooked"],
    tips: ["Practice speaking up", "Your needs matter too", "Start with small assertions"],
  },
  C: {
    type: "C",
    title: "Aggressive Communicator",
    emoji: "🗣️",
    description: "Gaya komunikasimu cenderung aggressive. Kamu express diri dengan kuat tapi kadang dengan cara yang bisa hurt orang lain. Assertiveness is better than aggression.",
    traits: ["Dominant", "Direct", "Forceful", "Intimidating"],
    strengths: ["Gets things done", "Clear about wants", "Not pushover"],
    weaknesses: ["Hurts relationships", "Creates conflict", "People defensive"],
    tips: ["Practice empathy", "Consider others' feelings", "Firm ≠ aggressive"],
  },
  D: {
    type: "D",
    title: "Passive-Aggressive Communicator",
    emoji: "😶",
    description: "Kamu cenderung passive-aggressive - tidak express langsung tapi show displeasure dengan cara tidak langsung. Ini bisa bikin relationships complicated.",
    traits: ["Indirect", "Resentful", "Sarcastic", "Avoidant"],
    strengths: ["Avoids direct conflict", "Protects self short-term"],
    weaknesses: ["Confusing for others", "Builds resentment", "Unhealthy patterns"],
    tips: ["Learn to express directly", "Identify root of resentment", "Consider therapy"],
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
