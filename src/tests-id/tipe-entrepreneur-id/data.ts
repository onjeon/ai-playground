// Tes Tipe Entrepreneur Kamu
// Kalau jadi pengusaha, kamu akan jadi tipe yang mana?

export const questions = [
  {
    id: 1,
    question: "Motivasi utama kamu untuk berbisnis...",
    options: [
      { text: "Kebebasan finansial dan waktu", type: "A" },
      { text: "Ingin solve problem dan create impact", type: "B" },
      { text: "Passion dan doing what I love", type: "C" },
      { text: "Legacy dan build something big", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Modal untuk memulai bisnis...",
    options: [
      { text: "Bootstrap, mulai dari kecil", type: "A" },
      { text: "Cari investor atau partner", type: "B" },
      { text: "Tabungan sendiri yang sudah disiapkan", type: "C" },
      { text: "Pinjaman atau funding eksternal", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Approach kamu dalam bisnis...",
    options: [
      { text: "Praktis, yang penting profitable", type: "A" },
      { text: "Inovatif, cari disrupsi market", type: "B" },
      { text: "Quality focused, build reputation", type: "C" },
      { text: "Aggressive growth, scale fast", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tim dalam bisnis...",
    options: [
      { text: "Solo atau tim kecil, lean operation", type: "A" },
      { text: "Build strong founding team dari awal", type: "B" },
      { text: "Hire experts sesuai kebutuhan", type: "C" },
      { text: "Big team untuk big vision", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kalau bisnis gagal...",
    options: [
      { text: "Cut losses quick, pivot atau move on", type: "A" },
      { text: "Analyze dan try different approach", type: "B" },
      { text: "Sulit terima, invest too emotionally", type: "C" },
      { text: "Failure is learning, come back stronger", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Risk tolerance kamu...",
    options: [
      { text: "Calculated risks dengan backup plan", type: "A" },
      { text: "High risk high reward, all in", type: "B" },
      { text: "Conservative, jaga stability", type: "C" },
      { text: "Bold moves untuk breakthrough", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bisnis ideal menurutmu...",
    options: [
      { text: "Passive income, bisa jalan sendiri", type: "A" },
      { text: "Tech startup dengan potential unicorn", type: "B" },
      { text: "Lifestyle business sesuai passion", type: "C" },
      { text: "Empire dengan multiple ventures", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Soal kompetitor...",
    options: [
      { text: "Find your niche, avoid head-to-head", type: "A" },
      { text: "Out-innovate dan disrupt mereka", type: "B" },
      { text: "Focus on your lane, quality wins", type: "C" },
      { text: "Dominate market, be number one", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Work-life balance sebagai entrepreneur...",
    options: [
      { text: "Penting, bisnis untuk support life", type: "A" },
      { text: "Sacrifice awal untuk gain nanti", type: "B" },
      { text: "Integrate dengan passion, feels natural", type: "C" },
      { text: "Business is life, all in dedication", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sumber ide bisnis kamu...",
    options: [
      { text: "Peluang market dan demand yang jelas", type: "A" },
      { text: "Problem yang belum ada solusinya", type: "B" },
      { text: "Personal interest dan expertise", type: "C" },
      { text: "Big vision untuk change industry", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Exit strategy...",
    options: [
      { text: "Build untuk dijual eventually", type: "A" },
      { text: "IPO atau major acquisition", type: "B" },
      { text: "Run forever, it's my baby", type: "C" },
      { text: "Multiple exits dari portfolio bisnis", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Role ideal kamu dalam bisnis...",
    options: [
      { text: "Owner yang bisa delegate semua", type: "A" },
      { text: "CEO/Founder yang lead the charge", type: "B" },
      { text: "Creative lead atau product person", type: "C" },
      { text: "Visionary chairman with big picture", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Entrepreneur Pragmatis",
    emoji: "💰",
    description: "Kamu entrepreneur yang praktis dan fokus pada hasil! Build bisnis untuk kebebasan finansial dan waktu. Smart dengan resource dan risk-aware.",
    traits: ["Practical", "Profit focused", "Risk calculated", "Freedom seeker"],
    strengths: ["Sustainable business", "Smart decision maker", "Cash flow aware"],
    weaknesses: ["Might miss big opportunities", "Too conservative sometimes"],
    tips: ["Sometimes big bets pay off", "Don't be afraid to dream bigger"],
  },
  B: {
    type: "B",
    title: "Entrepreneur Inovator",
    emoji: "💡",
    description: "Kamu entrepreneur yang driven by innovation! Solve problems dengan cara baru dan tidak takut disrupt market. Startup mindset dengan big ambitions.",
    traits: ["Innovative", "Problem solver", "Disruptive", "Growth minded"],
    strengths: ["Create new markets", "Attract investors", "Visionary products"],
    weaknesses: ["Burn rate tinggi", "High failure risk"],
    tips: ["Balance innovation dengan execution", "Profitability matters too"],
  },
  C: {
    type: "C",
    title: "Entrepreneur Passion",
    emoji: "❤️",
    description: "Kamu entrepreneur yang follow passion! Build bisnis dari apa yang kamu cintai. Quality dan authenticity adalah foundation. It's personal, not just business.",
    traits: ["Passionate", "Quality focused", "Authentic", "Craft oriented"],
    strengths: ["Deep expertise", "Loyal customers", "Fulfilling work"],
    weaknesses: ["Hard to scale", "Too attached emotionally"],
    tips: ["Business fundamentals tetap penting", "Delegate untuk grow"],
  },
  D: {
    type: "D",
    title: "Entrepreneur Visioner",
    emoji: "🚀",
    description: "Kamu entrepreneur dengan visi besar! Think big, act bold, dan build empire. Tidak puas dengan small wins - mau change the game entirely.",
    traits: ["Visionary", "Ambitious", "Bold", "Empire builder"],
    strengths: ["Big picture thinking", "Attracts talent", "Industry impact"],
    weaknesses: ["Can overlook details", "All-consuming dedication"],
    tips: ["Details matter for execution", "Sustainable pace untuk long run"],
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
