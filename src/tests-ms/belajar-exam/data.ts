// Gaya Exam Anda
// Apa jenis pelajar anda masa exam?

export const questions = [
  {
    id: 1,
    question: "Bila exam seminggu lagi, anda...",
    options: [
      { text: "Dah siap study semua!", type: "A" },
      { text: "Mula buat jadual study", type: "B" },
      { text: "Santai je, masih ada masa", type: "C" },
      { text: "Panic tapi tak buat apa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Malam sebelum exam, anda...",
    options: [
      { text: "Tidur awal, dah prepare", type: "A" },
      { text: "Last minute revision sikit", type: "B" },
      { text: "Marathon study sampai pagi", type: "C" },
      { text: "Netflix dulu, esok baru fikir", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara study anda macam mana?",
    options: [
      { text: "Buat notes cantik dan teratur", type: "A" },
      { text: "Study group dengan kawan", type: "B" },
      { text: "Baca je buku, tak buat notes", type: "C" },
      { text: "Scroll TikTok sambil baca", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila nampak soalan susah dalam exam...",
    options: [
      { text: "Relax, buat yang senang dulu", type: "A" },
      { text: "Try jawab yang boleh", type: "B" },
      { text: "Blank terus", type: "C" },
      { text: "Agak-agak je jawapan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Snack exam anda apa?",
    options: [
      { text: "Tak perlu, fokus je", type: "A" },
      { text: "Biskut dan air", type: "B" },
      { text: "Nescafe banyak-banyak", type: "C" },
      { text: "Maggi cup 3 pagi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Lepas exam, anda...",
    options: [
      { text: "Check jawapan dengan kawan", type: "A" },
      { text: "Lupa terus, fokus exam seterusnya", type: "B" },
      { text: "Risau dan overthink", type: "C" },
      { text: "Celebrate, dah lepas!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Study spot favorite anda?",
    options: [
      { text: "Library - senyap dan fokus", type: "A" },
      { text: "Café - ambience nice", type: "B" },
      { text: "Bilik sendiri - selesa", type: "C" },
      { text: "Mana-mana pun okay", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila kawan tanya topik exam...",
    options: [
      { text: "Explain dengan detail", type: "A" },
      { text: "Share notes dengan dia", type: "B" },
      { text: "Sama-sama confuse", type: "C" },
      { text: "Ajar yang anda tahu je", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Result exam keluar, anda...",
    options: [
      { text: "Check terus, confident", type: "A" },
      { text: "Nervous tapi still check", type: "B" },
      { text: "Suruh kawan check dulu", type: "C" },
      { text: "Tak kisah sangat result", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Motto exam anda?",
    options: [
      { text: "Preparation is key!", type: "A" },
      { text: "Do your best", type: "B" },
      { text: "Last minute power!", type: "C" },
      { text: "Rezeki masing-masing", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pelajar Pro",
    emoji: "📚",
    description: "Anda pelajar yang organized dan prepared! Study awal, notes cantik, exam pun tenang je. Kawan-kawan selalu tanya notes anda!",
    traits: ["Organized", "Prepared", "Disciplined", "Fokus"],
    strengths: ["Always ready", "Good time management", "Reliable study buddy"],
    weaknesses: ["Kadang-kadang terlalu stress", "Perfectionist"],
    tips: ["Relax sikit, anda dah bagus!", "Take breaks, jangan burn out"],
  },
  B: {
    type: "B",
    title: "Pelajar Balanced",
    emoji: "⚖️",
    description: "Anda tahu bila nak study, bila nak relax! Balance antara kerja dan main. Result pun okay, life pun enjoy!",
    traits: ["Balanced", "Adaptable", "Team player", "Practical"],
    strengths: ["Good work-life balance", "Study group leader", "Flexible"],
    weaknesses: ["Kadang-kadang procrastinate sikit", "Bergantung pada mood"],
    tips: ["Konsisten sikit lagi", "Trust your process"],
  },
  C: {
    type: "C",
    title: "Pelajar Last Minute",
    emoji: "⏰",
    description: "Last minute power anda memang kuat! Malam sebelum exam baru start, tapi somehow boleh survive. Adrenaline rush study!",
    traits: ["Last minute warrior", "Pressure performer", "Creative", "Spontan"],
    strengths: ["Work well under pressure", "Quick learner", "Adaptable"],
    weaknesses: ["Stress level tinggi", "Inconsistent results"],
    tips: ["Cuba start awal sikit", "Jaga kesihatan mental"],
  },
  D: {
    type: "D",
    title: "Pelajar Santai",
    emoji: "😎",
    description: "Exam? Tak risau sangat lah! Anda percaya rezeki masing-masing. Relax je approach, hidup pun less stress!",
    traits: ["Relaxed", "Carefree", "Go with the flow", "Optimistic"],
    strengths: ["Low stress levels", "Easy-going attitude", "Enjoy life"],
    weaknesses: ["Hasil kurang consistent", "Kurang prepared"],
    tips: ["Sikit effort boleh improve banyak", "Set small goals"],
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
