// Gaya Coping Stress Kamu
// Tes ini mengungkap bagaimana cara kamu mengatasi stress!

export const questions = [
  {
    id: 1,
    question: "Reaksi pertama saat menghadapi situasi stressful...",
    options: [
      { text: "Analisis masalah dan cari solusi", type: "A" },
      { text: "Cari orang untuk curhat atau minta bantuan", type: "B" },
      { text: "Distract diri dengan aktivitas lain", type: "C" },
      { text: "Avoid atau tunda dealing with it", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat deadline menumpuk dan pressure tinggi...",
    options: [
      { text: "Buat prioritas dan tackle satu per satu", type: "A" },
      { text: "Minta bantuan atau delegate kalau bisa", type: "B" },
      { text: "Ambil break dulu untuk refresh", type: "C" },
      { text: "Panik dan overwhelmed", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara kamu process negative emotions...",
    options: [
      { text: "Journal atau reflect untuk understand", type: "A" },
      { text: "Share dengan orang dekat", type: "B" },
      { text: "Distract sampai mereda sendiri", type: "C" },
      { text: "Suppress dan tidak mau deal with it", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Setelah kejadian stressful, kamu biasanya...",
    options: [
      { text: "Evaluate apa yang bisa dipelajari", type: "A" },
      { text: "Debrief dengan orang lain", type: "B" },
      { text: "Move on dan tidak pikirin lagi", type: "C" },
      { text: "Replay terus di kepala", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Coping mechanism fisik yang sering dilakukan...",
    options: [
      { text: "Olahraga atau aktivitas fisik", type: "A" },
      { text: "Makan atau comfort food", type: "B" },
      { text: "Tidur lebih banyak", type: "C" },
      { text: "Tidak ada yang spesifik", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat stress, sosial interaksi kamu...",
    options: [
      { text: "Tetap normal, stress tidak affect sosial", type: "A" },
      { text: "Lebih butuh orang, mencari support", type: "B" },
      { text: "Withdraw dan butuh alone time", type: "C" },
      { text: "Irritable dan snap ke orang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Relationship dengan control dalam situasi stressful...",
    options: [
      { text: "Focus pada yang bisa dikontrol, let go sisanya", type: "A" },
      { text: "Mencoba kontrol sebanyak mungkin", type: "B" },
      { text: "Feel like tidak punya kontrol sama sekali", type: "C" },
      { text: "Campur, kadang control freak kadang pasrah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Self-talk saat stress...",
    options: [
      { text: "Reassuring dan problem-solving", type: "A" },
      { text: "Seek validation dari orang lain dulu", type: "B" },
      { text: "Distract, tidak mau mikir", type: "C" },
      { text: "Negative dan self-critical", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Penggunaan substansi saat stress (kopi, snack, dll)...",
    options: [
      { text: "Normal, tidak berlebihan", type: "A" },
      { text: "Meningkat sedikit", type: "B" },
      { text: "Meningkat signifikan", type: "C" },
      { text: "Sangat berlebihan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tidur saat periode stressful...",
    options: [
      { text: "Tetap dijaga, sleep hygiene penting", type: "A" },
      { text: "Agak terganggu tapi effort untuk tidur cukup", type: "B" },
      { text: "Sangat terganggu atau tidur berlebihan", type: "C" },
      { text: "Complete mess, tidak ada pola", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Meminta bantuan saat stress...",
    options: [
      { text: "Tau kapan harus minta bantuan, tidak malu", type: "A" },
      { text: "Sering minta bantuan, need support", type: "B" },
      { text: "Jarang, prefer handle sendiri", type: "C" },
      { text: "Tidak pernah, malu atau tidak mau merepotkan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Secara overall, stress coping kamu...",
    options: [
      { text: "Sehat dan effective", type: "A" },
      { text: "Cukup baik, ada room for improvement", type: "B" },
      { text: "Perlu diperbaiki", type: "C" },
      { text: "Maladaptive, sering bikin worse", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Problem-Focused Coper",
    emoji: "🧠",
    description: "Kamu adalah problem-solver! Saat stress, kamu focus pada menyelesaikan masalahnya. Analitis, structured, dan solution-oriented. Ini adalah coping style yang sangat healthy.",
    traits: ["Analytical", "Proactive", "Solution-oriented", "Resilient"],
    strengths: ["Effective problem solving", "Low avoidance", "Productive under pressure"],
    weaknesses: ["Bisa overwhelm kalau masalah di luar kontrol", "Kadang kurang emotional processing"],
    tips: ["Balance dengan emotional coping", "Accept what cannot be changed"],
  },
  B: {
    type: "B",
    title: "Social Support Seeker",
    emoji: "🤗",
    description: "Kamu cope dengan stress lewat koneksi sosial! Curhat, minta bantuan, dan support dari orang lain adalah kekuatanmu. Kamu tau bahwa kamu tidak harus menghadapi semuanya sendiri.",
    traits: ["Connected", "Vulnerable", "Supportive", "Relational"],
    strengths: ["Strong support network", "Emotional expression", "Not isolated"],
    weaknesses: ["Dependent pada orang lain", "Susah kalau support tidak available"],
    tips: ["Develop self-soothing juga", "Learn to cope independently kadang"],
  },
  C: {
    type: "C",
    title: "Avoidant Coper",
    emoji: "🏃",
    description: "Kamu cope dengan distraction dan avoidance. Kadang ini helpful untuk short-term, tapi long-term bisa accumulate. Penting untuk eventually face the stressor.",
    traits: ["Avoidant", "Distracted", "Short-term relief", "Escapist"],
    strengths: ["Quick relief", "Not overwhelmed immediately", "Can function in crisis"],
    weaknesses: ["Problems tidak terselesaikan", "Accumulation of stress", "Avoidance loop"],
    tips: ["Face stressors gradually", "Seek help for processing", "Balance avoidance dengan confrontation"],
  },
  D: {
    type: "D",
    title: "Struggling Coper",
    emoji: "😥",
    description: "Coping mechanisms kamu mungkin perlu dikembangkan. Kamu mungkin sering overwhelmed atau menggunakan cara yang tidak healthy. Ini bisa diperbaiki dengan bantuan dan latihan.",
    traits: ["Overwhelmed", "Maladaptive", "Struggling", "Need support"],
    strengths: ["Aware ada masalah", "Potential untuk improvement"],
    weaknesses: ["Unhealthy coping", "Stress accumulation", "Impact ke wellbeing"],
    tips: ["Seek professional help", "Learn healthy coping skills", "Start small", "Be patient with yourself"],
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
