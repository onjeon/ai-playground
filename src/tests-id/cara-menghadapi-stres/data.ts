// Tes Cara Menghadapi Stres Kamu
// Bagaimana kamu cope dengan tekanan dan stres?

export const questions = [
  {
    id: 1,
    question: "Saat deadline menumpuk dan overwhelming...",
    options: [
      { text: "Buat to-do list dan prioritize", type: "A" },
      { text: "Curhat ke teman atau keluarga", type: "B" },
      { text: "Take a break dan refresh dulu", type: "C" },
      { text: "Panik dan procrastinate", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Aktivitas favorit untuk de-stress...",
    options: [
      { text: "Olahraga atau aktivitas fisik", type: "A" },
      { text: "Hangout atau ngobrol dengan orang", type: "B" },
      { text: "Me-time: nonton, gaming, hobi", type: "C" },
      { text: "Tidur atau makan comfort food", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat situasi di luar kontrol kamu...",
    options: [
      { text: "Fokus ke yang bisa dikontrol", type: "A" },
      { text: "Diskusi dan minta support orang lain", type: "B" },
      { text: "Terima dan let go", type: "C" },
      { text: "Cemas dan kepikiran terus", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kebiasaan kamu saat stres...",
    options: [
      { text: "Jadi lebih produktif dan focused", type: "A" },
      { text: "Lebih banyak ngobrol dan sosialisasi", type: "B" },
      { text: "Withdrawal dan butuh space", type: "C" },
      { text: "Emotional eating atau bad habits", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Self-talk kamu saat stres...",
    options: [
      { text: "'Aku bisa handle ini, step by step'", type: "A" },
      { text: "'Siapa yang bisa bantu aku?'", type: "B" },
      { text: "'This too shall pass'", type: "C" },
      { text: "'Kenapa selalu aku? Ini terlalu berat'", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Physical symptoms saat stres...",
    options: [
      { text: "Minimal, bisa manage dengan baik", type: "A" },
      { text: "Ada tapi manageable", type: "B" },
      { text: "Lelah dan butuh istirahat lebih", type: "C" },
      { text: "Sakit kepala, tidak bisa tidur, mual", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara kamu mengekspresikan stres...",
    options: [
      { text: "Channel ke action dan problem solving", type: "A" },
      { text: "Verbalkan dan share dengan orang", type: "B" },
      { text: "Process internally dan quietly", type: "C" },
      { text: "Emosi meledak atau shutdown", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Support system saat stres...",
    options: [
      { text: "Lebih suka handle sendiri", type: "A" },
      { text: "Sangat butuh orang untuk support", type: "B" },
      { text: "Sesekali butuh tapi tidak selalu", type: "C" },
      { text: "Butuh tapi sering tidak tau cara minta", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat ada konflik yang bikin stres...",
    options: [
      { text: "Hadapi langsung dan selesaikan", type: "A" },
      { text: "Mediasi dengan bantuan orang lain", type: "B" },
      { text: "Beri waktu sampai reda", type: "C" },
      { text: "Avoid dan berharap hilang sendiri", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Recovery time kamu dari stres berat...",
    options: [
      { text: "Cepat, sekali selesai ya selesai", type: "A" },
      { text: "Butuh social recharge", type: "B" },
      { text: "Butuh quiet time untuk recover", type: "C" },
      { text: "Lama, efeknya berbekas", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tingkat toleransi stres kamu...",
    options: [
      { text: "Tinggi, bisa handle banyak pressure", type: "A" },
      { text: "Normal, dengan proper support", type: "B" },
      { text: "Moderate, butuh balance", type: "C" },
      { text: "Rendah, mudah overwhelmed", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pelajaran dari pengalaman stres...",
    options: [
      { text: "Jadi lebih kuat dan belajar banyak", type: "A" },
      { text: "Tau siapa yang bisa diandalkan", type: "B" },
      { text: "Lebih mengenal diri dan batasan", type: "C" },
      { text: "Masih struggling untuk take lessons", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Problem Solver",
    emoji: "🎯",
    description: "Kamu menghadapi stres dengan action dan problem solving! Fokus ke solusi dan yang bisa dikontrol. Proactive approach yang efektif.",
    traits: ["Proactive", "Action-oriented", "Resilient", "Independent"],
    strengths: ["Effective stress management", "Gets things done", "Stays calm"],
    weaknesses: ["Might suppress emotions", "Can overwork"],
    tips: ["Remember to also process emotions", "Asking help is okay"],
  },
  B: {
    type: "B",
    title: "Social Coper",
    emoji: "🤗",
    description: "Kamu cope dengan stres melalui connection dan support sosial! Sharing dan support dari orang lain adalah kunci. People are your strength.",
    traits: ["Social", "Expressive", "Support-seeking", "Connected"],
    strengths: ["Strong support system", "Doesn't bottle up", "Community oriented"],
    weaknesses: ["Dependent on others", "Lonely when isolated"],
    tips: ["Develop some solo coping too", "Not everyone available 24/7"],
  },
  C: {
    type: "C",
    title: "Internal Processor",
    emoji: "🧘",
    description: "Kamu handle stres dengan internal processing dan rest! Butuh space dan waktu untuk recharge. Quiet strength yang introspektif.",
    traits: ["Introspective", "Self-reliant", "Calm", "Thoughtful"],
    strengths: ["Self-aware", "Doesn't drain others", "Peaceful approach"],
    weaknesses: ["Can isolate too much", "Miss support opportunities"],
    tips: ["Reach out sometimes", "Solitude is good but connection too"],
  },
  D: {
    type: "D",
    title: "Struggling Coper",
    emoji: "😰",
    description: "Kamu masih struggle untuk cope dengan stres dengan efektif. Overwhelmed easily dan belum punya healthy coping mechanisms. Ini area untuk develop.",
    traits: ["Overwhelmed", "Anxious", "Avoidant", "Struggling"],
    strengths: ["Awareness of struggle", "Potential to grow"],
    weaknesses: ["Unhealthy coping", "High anxiety", "Burnout risk"],
    tips: ["Seek professional help", "Develop healthy coping toolkit", "Start small with self-care", "You're not alone in this"],
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
