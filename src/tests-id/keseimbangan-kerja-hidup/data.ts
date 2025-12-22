// Tes Keseimbangan Kerja dan Kehidupan
// Seberapa baik work-life balance kamu?

export const questions = [
  {
    id: 1,
    question: "Setelah jam kerja selesai...",
    options: [
      { text: "Work completely off, full personal time", type: "A" },
      { text: "Mostly off, occasional urgent check", type: "B" },
      { text: "Often still working atau thinking about work", type: "C" },
      { text: "No real off time, always connected", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Weekend activities...",
    options: [
      { text: "Fully dedicated untuk personal life", type: "A" },
      { text: "Mostly free, occasional work", type: "B" },
      { text: "Often work dari rumah", type: "C" },
      { text: "Weekends are just more work days", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Hobbies dan interests di luar kerja...",
    options: [
      { text: "Active hobbies yang nurture me", type: "A" },
      { text: "Some hobbies, try to maintain", type: "B" },
      { text: "Barely have time untuk hobbies", type: "C" },
      { text: "What hobbies? Work is my life", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Relationships dengan family/friends...",
    options: [
      { text: "Strong, make time for them", type: "A" },
      { text: "Good, balance dengan work", type: "B" },
      { text: "Strained karena work demands", type: "C" },
      { text: "Suffering significantly", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Physical health dan exercise...",
    options: [
      { text: "Regular exercise, health priority", type: "A" },
      { text: "Try to maintain, varying success", type: "B" },
      { text: "Neglected karena kerja", type: "C" },
      { text: "Poor, no time for health", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mental health dan stress levels...",
    options: [
      { text: "Good, work stress manageable", type: "A" },
      { text: "Okay, some stressed periods", type: "B" },
      { text: "Chronic stress dari work", type: "C" },
      { text: "Burnout atau near burnout", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Vacation dan cuti...",
    options: [
      { text: "Take all cuti, fully disconnect", type: "A" },
      { text: "Take most cuti, mostly disconnect", type: "B" },
      { text: "Limited cuti, often still work", type: "C" },
      { text: "Rarely take cuti", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Boundaries dengan work...",
    options: [
      { text: "Strong, clear lines", type: "A" },
      { text: "Mostly good, occasional blur", type: "B" },
      { text: "Weak, work often bleeds", type: "C" },
      { text: "No boundaries, always on", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sleep dan rest...",
    options: [
      { text: "Good sleep hygiene, enough rest", type: "A" },
      { text: "Mostly okay, some tired periods", type: "B" },
      { text: "Often sleep deprived", type: "C" },
      { text: "Chronic sleep issues", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Feeling of life satisfaction...",
    options: [
      { text: "Fulfilled in both work dan life", type: "A" },
      { text: "Generally satisfied, room to improve", type: "B" },
      { text: "Something missing, work dominates", type: "C" },
      { text: "Unfulfilled, life out of balance", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Personal growth dan learning (non-work)...",
    options: [
      { text: "Active, always growing personally", type: "A" },
      { text: "Some focus on personal development", type: "B" },
      { text: "Minimal, no energy left", type: "C" },
      { text: "None, work takes everything", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall assessment work-life balance...",
    options: [
      { text: "Excellent, very balanced", type: "A" },
      { text: "Good, mostly balanced", type: "B" },
      { text: "Poor, work dominates", type: "C" },
      { text: "Very poor, urgent need change", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Excellent Balance",
    emoji: "⚖️",
    description: "Kamu memiliki work-life balance yang excellent! Strong boundaries, fulfilled personal life, dan sustainable work approach. Role model untuk others!",
    traits: ["Balanced", "Boundaried", "Fulfilled", "Healthy"],
    strengths: ["Sustainable success", "Full life", "Good health"],
    weaknesses: ["Might miss some career opportunities"],
    tips: ["Keep maintaining", "This is success in true sense"],
  },
  B: {
    type: "B",
    title: "Good Balance",
    emoji: "👍",
    description: "Kamu memiliki work-life balance yang good! Mostly balanced dengan room for improvement. Aware of importance dan working on it.",
    traits: ["Mostly balanced", "Aware", "Working on it", "Functional"],
    strengths: ["Functioning well", "Self-aware", "Adjustable"],
    weaknesses: ["Some areas need attention"],
    tips: ["Address the gaps", "Don't let it slip"],
  },
  C: {
    type: "C",
    title: "Imbalanced",
    emoji: "⚠️",
    description: "Work-life balance kamu imbalanced! Work dominates dan personal life suffering. This isn't sustainable dan needs attention.",
    traits: ["Imbalanced", "Work-heavy", "Neglecting life", "Stressed"],
    strengths: ["Career might be progressing"],
    weaknesses: ["Health risks", "Relationship strain", "Burnout risk"],
    tips: ["This needs change", "Set boundaries", "Life is short"],
  },
  D: {
    type: "D",
    title: "Severely Imbalanced",
    emoji: "🆘",
    description: "Work-life balance kamu severely problematic! Work has consumed life. This is unsustainable dan damaging. Urgent intervention needed.",
    traits: ["Severely imbalanced", "Workaholic", "Life neglected", "At risk"],
    strengths: ["Maybe career success temporarily"],
    weaknesses: ["Health crisis risk", "Relationship damage", "Mental health issues", "Unsustainable"],
    tips: ["This is URGENT", "Seek help", "Your life is more than work", "Make changes NOW"],
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
