// Tipe K-Popers Indonesia
// Kamu tipe K-Popers yang kayak gimana?

export const questions = [
  {
    id: 1,
    question: "Intensitas menjadi K-Pop fan...",
    options: [
      { text: "All in! Stan culture is life", type: "A" },
      { text: "Dedicated tapi balance", type: "B" },
      { text: "Casual, suka musik dan varietynya", type: "C" },
      { text: "Sesekali dengerin kalau lagi viral", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Album dan merchandise...",
    options: [
      { text: "Collect semua versi! Photocard hunting", type: "A" },
      { text: "Beli yang favorit, selective", type: "B" },
      { text: "Jarang beli, streaming cukup", type: "C" },
      { text: "Tidak pernah beli", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Fandom activities...",
    options: [
      { text: "Active! Voting, streaming, projects", type: "A" },
      { text: "Ikut yang penting-penting", type: "B" },
      { text: "Observe dari jauh, enjoy content", type: "C" },
      { text: "Tidak terlalu terlibat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bias situation...",
    options: [
      { text: "Loyal satu! Ultimate bias forever", type: "A" },
      { text: "Ada bias tapi bisa appreciate semua", type: "B" },
      { text: "Suka grupnya, ga fokus member", type: "C" },
      { text: "Tidak punya bias specific", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Konser atau fan meeting...",
    options: [
      { text: "Harus datang! Invest untuk experience", type: "A" },
      { text: "Kalau ada kesempatan dan budget", type: "B" },
      { text: "Nonton live stream cukup", type: "C" },
      { text: "Tidak terlalu tertarik", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Pengetahuan tentang idol...",
    options: [
      { text: "Tau semua! Trivia, schedules, everything", type: "A" },
      { text: "Yang penting-penting, updates major", type: "B" },
      { text: "Basic info dan lagu populer", type: "C" },
      { text: "Minimal, lagu hits aja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Fandom wars dan drama...",
    options: [
      { text: "Defend fandom! Loyalty first", type: "A" },
      { text: "Stay neutral, avoid drama", type: "B" },
      { text: "Tidak ikut-ikutan", type: "C" },
      { text: "Tidak aware", type: "D" },
    ],
  },
  {
    id: 8,
    question: "K-Pop content consumption...",
    options: [
      { text: "Everything! Variety, behind, vlogs, all", type: "A" },
      { text: "MV, comeback, major content", type: "B" },
      { text: "Musik dan MV mainly", type: "C" },
      { text: "Lagu di playlist aja", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Learning Korean karena K-Pop...",
    options: [
      { text: "Iya! Belajar serius", type: "A" },
      { text: "Sedikit-sedikit dari konten", type: "B" },
      { text: "Vocab basic aja", type: "C" },
      { text: "Tidak", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Social media K-Pop...",
    options: [
      { text: "Fan account, dedicated space", type: "A" },
      { text: "Mix dengan personal, suka share", type: "B" },
      { text: "Follow aja, jarang interact", type: "C" },
      { text: "Tidak follow", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Jumlah grup yang di-stan...",
    options: [
      { text: "Multi-stan tapi ada priorities", type: "A" },
      { text: "Beberapa grup favorit", type: "B" },
      { text: "Satu atau dua casual", type: "C" },
      { text: "Tidak stan grup specific", type: "D" },
    ],
  },
  {
    id: 12,
    question: "K-Pop dalam hidupmu...",
    options: [
      { text: "Major part of identity", type: "A" },
      { text: "Important hobby", type: "B" },
      { text: "Entertainment yang disukai", type: "C" },
      { text: "Background music", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Hardcore Stan",
    emoji: "💜",
    description: "Kamu adalah Hardcore Stan! K-Pop adalah life. Kamu tau segalanya tentang idol, active di fandom, dan invest serius dalam hobby ini. True dedication!",
    traits: ["Dedicated", "Passionate", "Knowledgeable", "Active"],
    strengths: ["Deep connection", "Community", "Joy from fandom"],
    weaknesses: ["Bisa obsessive", "Expensive hobby", "Prioritize idol over real life"],
    tips: ["Balance is important", "Real life matters too"],
  },
  B: {
    type: "B",
    title: "Dedicated Fan",
    emoji: "💙",
    description: "Kamu adalah Dedicated Fan! Serius tentang K-Pop tapi balance. Kamu enjoy fandom tanpa extreme. Smart fan yang tau prioritas!",
    traits: ["Balanced", "Dedicated", "Smart", "Selective"],
    strengths: ["Healthy fandom", "Enjoy without stress", "Good priorities"],
    weaknesses: ["Might miss some experiences", "Not as connected"],
    tips: ["Your balance is healthy", "Keep enjoying!"],
  },
  C: {
    type: "C",
    title: "Casual Listener",
    emoji: "💚",
    description: "Kamu adalah Casual Listener! Suka K-Pop untuk musiknya tapi tidak terlalu deep dalam fandom. Appreciate the art tanpa pressure!",
    traits: ["Casual", "Music-focused", "Relaxed", "Appreciative"],
    strengths: ["No fandom stress", "Pure music enjoyment", "Flexible"],
    weaknesses: ["Miss fandom fun", "Out of loop"],
    tips: ["Try engaging more if interested", "Casual is valid"],
  },
  D: {
    type: "D",
    title: "Occasional Listener",
    emoji: "💛",
    description: "K-Pop bukan fokus utamamu. Kamu dengerin kalau viral atau catchy tapi tidak follow closely. And that's totally okay!",
    traits: ["Occasional", "Casual", "Other interests", "Trend-aware"],
    strengths: ["No pressure", "Other hobbies", "Open minded"],
    weaknesses: ["Miss good music", "Can't relate to discussions"],
    tips: ["Explore if curious", "Many find joy in K-Pop"],
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
