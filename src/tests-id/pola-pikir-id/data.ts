// Tes Pola Pikir Kamu
// Temukan cara otakmu bekerja dan memproses informasi!

export const questions = [
  {
    id: 1,
    question: "Saat menghadapi masalah kompleks...",
    options: [
      { text: "Analisis step by step dengan logika", type: "A" },
      { text: "Ikuti intuisi dan gut feeling", type: "B" },
      { text: "Cari referensi dan pengalaman orang lain", type: "C" },
      { text: "Brainstorm berbagai kemungkinan kreatif", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu belajar hal baru...",
    options: [
      { text: "Baca teori dan pahami konsep dulu", type: "A" },
      { text: "Langsung praktek dan trial-error", type: "B" },
      { text: "Lihat contoh dan tutorial", type: "C" },
      { text: "Diskusi dan tanya orang yang sudah bisa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat membuat keputusan penting...",
    options: [
      { text: "Buat pro-cons list dan analisis", type: "A" },
      { text: "Dengarkan hati dan feeling", type: "B" },
      { text: "Minta pendapat orang terdekat", type: "C" },
      { text: "Explore semua options yang tidak biasa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Di antara ini, mana yang paling menggambarkan dirimu?",
    options: [
      { text: "Detail oriented dan systematic", type: "A" },
      { text: "Spontan dan adaptable", type: "B" },
      { text: "Empathetic dan people-focused", type: "C" },
      { text: "Inovatif dan out of the box", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat ada informasi baru yang kontradiktif...",
    options: [
      { text: "Fact check dan verifikasi data", type: "A" },
      { text: "Trust instinct mana yang benar", type: "B" },
      { text: "Diskusi untuk dapat berbagai perspektif", type: "C" },
      { text: "Question everything dan cari sudut pandang baru", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Cara kamu mengingat informasi...",
    options: [
      { text: "Catat dengan terstruktur dan sistematis", type: "A" },
      { text: "Ingat dari experience dan feeling", type: "B" },
      { text: "Hubungkan dengan cerita atau orang", type: "C" },
      { text: "Visualisasi atau buat mind map", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat bekerja dalam tim...",
    options: [
      { text: "Jadi yang organize dan structure project", type: "A" },
      { text: "Adaptable, contribute dimana perlu", type: "B" },
      { text: "Fokus ke dynamics dan harmony tim", type: "C" },
      { text: "Bring fresh ideas dan perspectives", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Frustasi terbesarmu...",
    options: [
      { text: "Proses yang tidak efficient atau tidak jelas", type: "A" },
      { text: "Terlalu banyak planning, kurang action", type: "B" },
      { text: "Konflik dan ketidakharmonisan", type: "C" },
      { text: "Ide bagus tidak diterima atau stuck", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cara kamu express pendapat...",
    options: [
      { text: "Dengan data dan argumen logis", type: "A" },
      { text: "Langsung dan to the point", type: "B" },
      { text: "Mempertimbangkan perasaan audience", type: "C" },
      { text: "Dengan analogi atau storytelling kreatif", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat stress, kamu cenderung...",
    options: [
      { text: "Buat to-do list dan prioritize", type: "A" },
      { text: "Take action langsung untuk solve", type: "B" },
      { text: "Cari support dari orang terdekat", type: "C" },
      { text: "Distract dengan hobi kreatif", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Mana yang lebih penting menurutmu?",
    options: [
      { text: "Akurasi dan precision", type: "A" },
      { text: "Speed dan hasil nyata", type: "B" },
      { text: "Impact ke orang lain", type: "C" },
      { text: "Originalitas dan creativity", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Cara otakmu bekerja paling baik ketika...",
    options: [
      { text: "Ada struktur dan deadline jelas", type: "A" },
      { text: "Bebas dan fleksibel", type: "B" },
      { text: "Kerja bareng orang lain", type: "C" },
      { text: "Diberi space untuk explore", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Analytical Thinker",
    emoji: "🧠",
    description: "Kamu adalah pemikir analitis! Otak kamu bekerja dengan logika, data, dan struktur. Problem solving dengan systematic approach adalah kekuatanmu.",
    traits: ["Logical", "Systematic", "Detail oriented", "Objective"],
    strengths: ["Accurate analysis", "Good planning", "Reliable conclusions"],
    weaknesses: ["Kadang over-analyze", "Kurang spontan", "Bisa rigid"],
    tips: ["Trust intuition sesekali", "Not everything needs perfect analysis"],
  },
  B: {
    type: "B",
    title: "Action Thinker",
    emoji: "⚡",
    description: "Kamu adalah pemikir action-oriented! Learning by doing dan quick decisions adalah style-mu. Intuisi dan pengalaman lebih penting dari teori.",
    traits: ["Action oriented", "Intuitive", "Adaptive", "Practical"],
    strengths: ["Quick execution", "Learns from experience", "Flexible"],
    weaknesses: ["Kadang impulsif", "Miss important details", "Kurang planning"],
    tips: ["Slow down sesekali", "Some planning is needed"],
  },
  C: {
    type: "C",
    title: "Social Thinker",
    emoji: "🤝",
    description: "Kamu adalah pemikir yang people-oriented! Decisions dan understanding selalu mempertimbangkan impact ke orang lain. Empati adalah kekuatan utama.",
    traits: ["Empathetic", "Collaborative", "Considerate", "Communicative"],
    strengths: ["Good at understanding people", "Harmony builder", "Team player"],
    weaknesses: ["Kadang terlalu people-pleasing", "Decision delay"],
    tips: ["Sometimes your needs matter too", "Not everyone will be happy"],
  },
  D: {
    type: "D",
    title: "Creative Thinker",
    emoji: "🎨",
    description: "Kamu adalah pemikir kreatif! Selalu mencari cara baru dan perspectives yang tidak biasa. Innovation dan originality adalah trademark-mu.",
    traits: ["Creative", "Innovative", "Visionary", "Unconventional"],
    strengths: ["Fresh perspectives", "Problem solving kreatif", "Think big"],
    weaknesses: ["Execution bisa lemah", "Kadang terlalu idealis"],
    tips: ["Balance creativity dengan practicality", "Finish what you start"],
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
