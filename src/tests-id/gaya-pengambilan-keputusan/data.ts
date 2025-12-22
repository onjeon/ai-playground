// Tes Gaya Pengambilan Keputusan Kamu
// Bagaimana cara kamu membuat keputusan?

export const questions = [
  {
    id: 1,
    question: "Saat harus memilih antara dua opsi...",
    options: [
      { text: "Analisis pro-cons secara detail", type: "A" },
      { text: "Ikuti gut feeling", type: "B" },
      { text: "Minta pendapat orang lain", type: "C" },
      { text: "Tunda sampai harus memutuskan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Waktu yang kamu butuhkan untuk keputusan penting...",
    options: [
      { text: "Lama, perlu research dan pertimbangan matang", type: "A" },
      { text: "Relatif cepat, trust instinct", type: "B" },
      { text: "Tergantung seberapa banyak orang yang perlu dikonsultasikan", type: "C" },
      { text: "Sangat lama, sering stuck", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Setelah membuat keputusan...",
    options: [
      { text: "Yakin dan committed dengan pilihan", type: "A" },
      { text: "Move on dan tidak overthink", type: "B" },
      { text: "Cek lagi dengan orang-orang apakah sudah benar", type: "C" },
      { text: "Sering second-guessing dan regret", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sumber informasi untuk keputusan...",
    options: [
      { text: "Data, research, dan fakta", type: "A" },
      { text: "Pengalaman dan intuisi", type: "B" },
      { text: "Testimoni dan pengalaman orang lain", type: "C" },
      { text: "Semua dikumpulkan tapi tetap bingung", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dalam keputusan finansial...",
    options: [
      { text: "Calculate dan budget dengan detail", type: "A" },
      { text: "Kalau feel right, spend", type: "B" },
      { text: "Discuss dengan keluarga/pasangan", type: "C" },
      { text: "Avoid membuat keputusan besar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat keputusan ternyata salah...",
    options: [
      { text: "Analisis apa yang salah untuk next time", type: "A" },
      { text: "Accept dan move forward", type: "B" },
      { text: "Blame yang kasih saran", type: "C" },
      { text: "Sangat menyesal dan self-blame", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Dalam tim, peran kamu dalam decision making...",
    options: [
      { text: "Yang provide data dan analysis", type: "A" },
      { text: "Yang decisive dan push for action", type: "B" },
      { text: "Yang facilitate discussion dan gather inputs", type: "C" },
      { text: "Yang ikut arus dan agree", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Keputusan spontan vs terencana...",
    options: [
      { text: "Sangat prefer yang terencana", type: "A" },
      { text: "Comfortable dengan spontan", type: "B" },
      { text: "Prefer bisa diskusi dulu", type: "C" },
      { text: "Tidak nyaman dengan keduanya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat terlalu banyak pilihan...",
    options: [
      { text: "Narrow down dengan kriteria objektif", type: "A" },
      { text: "Pilih yang feel paling right", type: "B" },
      { text: "Ask orang mana yang mereka prefer", type: "C" },
      { text: "Overwhelmed dan tidak bisa pilih", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Risk dalam pengambilan keputusan...",
    options: [
      { text: "Calculate dan mitigate risk", type: "A" },
      { text: "Embrace reasonable risks", type: "B" },
      { text: "Prefer safe options yang disetujui banyak orang", type: "C" },
      { text: "Sangat risk averse, takut salah", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Deadline untuk keputusan penting...",
    options: [
      { text: "Butuh waktu cukup untuk proper analysis", type: "A" },
      { text: "Bisa decide cepat kalau perlu", type: "B" },
      { text: "Minta extend untuk consultation lebih", type: "C" },
      { text: "Stres dan sering miss deadline", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Confidence level dengan keputusan sendiri...",
    options: [
      { text: "Tinggi kalau sudah research proper", type: "A" },
      { text: "Tinggi, trust my judgment", type: "B" },
      { text: "Depends on validation dari orang lain", type: "C" },
      { text: "Rendah, selalu doubt", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Analytical Decider",
    emoji: "📊",
    description: "Kamu membuat keputusan berdasarkan data dan analisis! Pro-cons list, research, dan logical thinking adalah approach-mu. Thorough tapi bisa slow.",
    traits: ["Analytical", "Thorough", "Data-driven", "Careful"],
    strengths: ["Well-informed decisions", "Low regret", "Reliable"],
    weaknesses: ["Can be slow", "Analysis paralysis", "Miss spontaneous opportunities"],
    tips: ["Sometimes good enough is good enough", "Trust intuition occasionally"],
  },
  B: {
    type: "B",
    title: "Intuitive Decider",
    emoji: "⚡",
    description: "Kamu membuat keputusan berdasarkan intuisi dan gut feeling! Quick, decisive, dan trust your instincts. Action-oriented approach.",
    traits: ["Intuitive", "Quick", "Decisive", "Confident"],
    strengths: ["Fast decisions", "Catches opportunities", "Not paralyzed"],
    weaknesses: ["Can be impulsive", "Miss important details"],
    tips: ["Sometimes slow down for big decisions", "Data can help intuition"],
  },
  C: {
    type: "C",
    title: "Collaborative Decider",
    emoji: "🤝",
    description: "Kamu membuat keputusan dengan input dari orang lain! Value perspectives dan want buy-in. Inclusive tapi bisa dependent.",
    traits: ["Collaborative", "Inclusive", "Considerate", "Democratic"],
    strengths: ["Well-rounded decisions", "Good buy-in", "Less blame if wrong"],
    weaknesses: ["Can be slow", "Too dependent on others", "Struggle alone"],
    tips: ["Develop confidence in solo decisions", "Not everyone needs to agree"],
  },
  D: {
    type: "D",
    title: "Hesitant Decider",
    emoji: "😰",
    description: "Kamu struggle dengan pengambilan keputusan! Sering stuck, avoidant, dan second-guessing. This affects opportunities dan life quality.",
    traits: ["Indecisive", "Avoidant", "Fearful", "Second-guessing"],
    strengths: ["Cautious", "Aware of risks"],
    weaknesses: ["Miss opportunities", "High stress", "Life limitations"],
    tips: ["Practice with small decisions", "Set decision deadlines", "Accept no perfect choice exists", "Consider decision-making frameworks"],
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
