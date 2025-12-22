// Tes Tipe Rekan Kerja Kamu
// Kamu tipe colleague seperti apa di kantor?

export const questions = [
  {
    id: 1,
    question: "Saat rekan kerja butuh bantuan...",
    options: [
      { text: "Langsung bantu walau lagi sibuk", type: "A" },
      { text: "Bantu kalau waktuku memungkinkan", type: "B" },
      { text: "Arahkan ke resource yang tepat", type: "C" },
      { text: "Fokus kerjaan sendiri dulu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Lunch break di kantor...",
    options: [
      { text: "Selalu ajak teman-teman makan bareng", type: "A" },
      { text: "Join kalau diajak, kadang sendiri", type: "B" },
      { text: "Prefer makan sendiri, recharge", type: "C" },
      { text: "Makan sambil kerja, efisien", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tentang gossip dan drama kantor...",
    options: [
      { text: "Tau semua update tapi tidak spread", type: "A" },
      { text: "Dengerin sesekali, tidak terlalu involve", type: "B" },
      { text: "Completely avoid, not interested", type: "C" },
      { text: "What drama? Terlalu fokus kerja", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat ada project kolaborasi...",
    options: [
      { text: "Take initiative coordinate dan organize", type: "A" },
      { text: "Contribute bagian dan collaborate well", type: "B" },
      { text: "Do my part, minimal coordination", type: "C" },
      { text: "Prefer kerja sendiri kalau bisa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Office events dan gathering...",
    options: [
      { text: "Selalu ikut dan jadi life of party", type: "A" },
      { text: "Ikut kalau interesting atau wajib", type: "B" },
      { text: "Sesekali ikut, prefer skip", type: "C" },
      { text: "Almost never ikut, bukan style-ku", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Hubungan sama rekan kerja di luar kantor...",
    options: [
      { text: "Banyak yang jadi teman dekat", type: "A" },
      { text: "Beberapa yang klop", type: "B" },
      { text: "Pisahkan professional dan personal", type: "C" },
      { text: "Strictly work relationship", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat ada rekan kerja yang struggle...",
    options: [
      { text: "Check in dan offer support", type: "A" },
      { text: "Help kalau mereka ask", type: "B" },
      { text: "Respect privacy, tidak ikut campur", type: "C" },
      { text: "Bukan urusan saya", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Communication style dengan colleagues...",
    options: [
      { text: "Chatty dan personal", type: "A" },
      { text: "Friendly tapi professional", type: "B" },
      { text: "To the point dan efficient", type: "C" },
      { text: "Minimal, as needed only", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Credit untuk team success...",
    options: [
      { text: "Highlight everyone's contribution", type: "A" },
      { text: "Give credit where due", type: "B" },
      { text: "Accept proportional credit", type: "C" },
      { text: "Focused on individual contribution", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat tidak setuju dengan rekan kerja...",
    options: [
      { text: "Discuss dengan cara yang supportive", type: "A" },
      { text: "Voice opinion professionally", type: "B" },
      { text: "Compromise atau let it go", type: "C" },
      { text: "Stand firm on position", type: "D" },
    ],
  },
  {
    id: 11,
    question: "New employee joins the team...",
    options: [
      { text: "Welcome dan bantu onboarding", type: "A" },
      { text: "Friendly dan open untuk questions", type: "B" },
      { text: "Wave hi, let them settle", type: "C" },
      { text: "They'll figure it out", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Rekan kerja ideal menurutmu...",
    options: [
      { text: "Friendly, supportive, fun to work with", type: "A" },
      { text: "Professional, reliable, collaborative", type: "B" },
      { text: "Competent dan tidak drama", type: "C" },
      { text: "Does their job well, minimal interaction", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Office BFF",
    emoji: "🤗",
    description: "Kamu adalah rekan kerja yang super friendly dan supportive! Selalu ada untuk bantu, tahu semua orang, dan bikin office vibe lebih menyenangkan. Team's social glue!",
    traits: ["Friendly", "Supportive", "Social", "Helpful"],
    strengths: ["Great rapport", "Team morale booster", "Network builder"],
    weaknesses: ["Might get distracted", "Can be taken advantage of"],
    tips: ["Set boundaries juga", "Fokus ke productivity too"],
  },
  B: {
    type: "B",
    title: "Solid Teammate",
    emoji: "🤝",
    description: "Kamu adalah rekan kerja yang reliable dan professional! Balance antara friendly dan focus kerja. Collaborative tapi tidak over-social. The ideal colleague!",
    traits: ["Professional", "Reliable", "Balanced", "Collaborative"],
    strengths: ["Trusted", "Good team player", "Consistent"],
    weaknesses: ["Not always memorable", "Could be more proactive"],
    tips: ["Keep this balance", "Sesekali extra mile builds relationships"],
  },
  C: {
    type: "C",
    title: "Independent Worker",
    emoji: "🎯",
    description: "Kamu prefer kerja independently dan menjaga boundaries! Professional tapi tidak terlalu personal. Fokus ke deliverables dan efficiency.",
    traits: ["Independent", "Focused", "Boundary setter", "Efficient"],
    strengths: ["High productivity", "No drama", "Professional boundaries"],
    weaknesses: ["Might seem cold", "Miss team bonding"],
    tips: ["Little connection builds trust", "Collaboration has benefits too"],
  },
  D: {
    type: "D",
    title: "Solo Player",
    emoji: "🦅",
    description: "Kamu sangat prefer kerja sendiri! Minimal interaction, maximum focus. Work relationships strictly professional dan no personal mixing.",
    traits: ["Solo", "Task focused", "Distant", "Independent"],
    strengths: ["Deep focus", "No office politics", "Self-sufficient"],
    weaknesses: ["Isolated", "Miss team dynamics", "Career may suffer"],
    tips: ["Some connection is necessary for career", "Humans are social creatures"],
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
