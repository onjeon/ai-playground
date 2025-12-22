// Gaya Handle Deadline
// How do you handle work deadlines?

export const questions = [
  {
    id: 1,
    question: "Dapat assignment dengan deadline 2 minggu. Kau...",
    options: [
      { text: "Start hari ni juga! Early bird!", type: "A" },
      { text: "Plan timeline, start dalam few days", type: "B" },
      { text: "Tengok-tengok dulu, start week kedua", type: "C" },
      { text: "2 minggu? Relax dulu, nanti lah", type: "D" },
    ],
  },
  {
    id: 2,
    question: "3 hari before deadline, progress kau...",
    options: [
      { text: "80% done! Just final touch je", type: "A" },
      { text: "60% - on track, sikit lagi", type: "B" },
      { text: "30% - kena speed up ni", type: "C" },
      { text: "Baru nak start... pressure incoming!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Deadline clash dengan multiple tasks. Strategy?",
    options: [
      { text: "Prioritize, plan timeline untuk semua", type: "A" },
      { text: "Focus yang paling important dulu", type: "B" },
      { text: "Panic sikit, then figure out", type: "C" },
      { text: "Cry inside, then do whatever urgent", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Malam sebelum deadline, kau biasanya...",
    options: [
      { text: "Tidur awal, semua dah siap!", type: "A" },
      { text: "Final review, then rest", type: "B" },
      { text: "Still working, tapi manageable", type: "C" },
      { text: "All-nighter with kopi dan air mata", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Boss suddenly move deadline earlier. Reaksi?",
    options: [
      { text: "No problem, already ahead of schedule!", type: "A" },
      { text: "Adjust plan, should be okay", type: "B" },
      { text: "Internal scream, tapi 'okay boss'", type: "C" },
      { text: "Consider fake death sebagai option", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Style kerja kau towards deadline...",
    options: [
      { text: "Steady pace dari awal sampai akhir", type: "A" },
      { text: "Start slow, pick up towards end", type: "B" },
      { text: "Last minute burst of energy", type: "C" },
      { text: "Panic-driven productivity only", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quality kerja bila deadline tight...",
    options: [
      { text: "Same standard - deadline tak affect quality", type: "A" },
      { text: "Sikit compromise tapi still okay", type: "B" },
      { text: "As long as it passes, syukur", type: "C" },
      { text: "Lepas je sudah, polish later", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kau describe relationship dengan deadline sebagai...",
    options: [
      { text: "Guideline yang helpful untuk plan", type: "A" },
      { text: "Target yang kena hit", type: "B" },
      { text: "Stressor tapi necessary", type: "C" },
      { text: "Enemy! Source of anxiety!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau boleh extend deadline, kau akan...",
    options: [
      { text: "Tak perlu, siap awal anyway", type: "A" },
      { text: "Good buffer untuk polish", type: "B" },
      { text: "Yes please! More time!", type: "C" },
      { text: "Extension adalah life itself", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Post-deadline completion feeling...",
    options: [
      { text: "Satisfied, ready untuk next task!", type: "A" },
      { text: "Relief dan accomplished", type: "B" },
      { text: "Exhausted tapi grateful it's done", type: "C" },
      { text: "Traumatized sampai deadline seterusnya", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Deadline Destroyer",
    emoji: "⚔️",
    description: "Deadline takut kat kau, bukan kau takut deadline! Always ahead of schedule, kerja siap awal, stress-free life. Colleagues probably hate dan admire kau simultaneously!",
    traits: ["Super organized", "Early finisher", "Stress-free", "Reliable"],
    strengths: ["Never miss deadline", "High quality work", "Time for review"],
    weaknesses: ["May seem like show-off", "Possible perfectionist"],
    tips: ["Share tips dengan colleagues", "Help others yang struggle"],
  },
  B: {
    type: "B",
    title: "Deadline Manager",
    emoji: "📊",
    description: "Kau tahu macam mana nak manage deadline dengan efficient! Not too early, not too late - Goldilocks zone of productivity!",
    traits: ["Good planner", "Consistent", "Balanced approach", "Professional"],
    strengths: ["Predictable delivery", "Reasonable quality", "Sustainable pace"],
    weaknesses: ["Little buffer for unexpected issues", "Could start earlier"],
    tips: ["Add buffer time untuk emergencies", "Start sikit earlier"],
  },
  C: {
    type: "C",
    title: "Deadline Dancer",
    emoji: "🎭",
    description: "Kau dance dengan deadline - sometimes leading, sometimes following! Last minute bursts adalah specialty kau. Stressful tapi somehow always deliver!",
    traits: ["Pressure performer", "Last minute specialist", "Adrenaline worker", "Somehow delivers"],
    strengths: ["Work well under pressure", "Creative solutions when rushed", "Always meet deadline"],
    weaknesses: ["Stressful lifestyle", "Quality may vary", "Health impact"],
    tips: ["Try start earlier for peace of mind", "Your heart akan thank you"],
  },
  D: {
    type: "D",
    title: "Deadline Nemesis",
    emoji: "💀",
    description: "Deadline adalah arch-nemesis kau! Every project is a survival story. Your motto: 'Pressure makes diamonds!' (tapi also makes anxiety attacks)",
    traits: ["Extreme procrastinator", "Crisis mode operator", "Coffee-powered", "Last second delivery"],
    strengths: ["Incredible under pressure", "Creative excuses ready", "Somehow survive"],
    weaknesses: ["Health at risk", "Quality compromise", "Reputation issues"],
    tips: ["Seriously need to change habits", "Small steps, earlier starts"],
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
