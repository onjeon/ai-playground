// Gaya Work From Home
// What's your WFH personality?

export const questions = [
  {
    id: 1,
    question: "WFH day, kau bangun...",
    options: [
      { text: "Same time macam office, routine sama!", type: "A" },
      { text: "30 minit later, still on time", type: "B" },
      { text: "5 minit before first meeting", type: "C" },
      { text: "Login from bed, camera off", type: "D" },
    ],
  },
  {
    id: 2,
    question: "WFH outfit kau...",
    options: [
      { text: "Full proper attire, mindset important!", type: "A" },
      { text: "Casual tapi presentable top", type: "B" },
      { text: "T-shirt, seluar je tak kisah", type: "C" },
      { text: "Pyjamas all day everyday", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Workspace WFH kau...",
    options: [
      { text: "Proper home office setup, ergonomic!", type: "A" },
      { text: "Dedicated corner, cukup comfortable", type: "B" },
      { text: "Anywhere - sofa, bed, dining table", type: "C" },
      { text: "Bed is my office, office is my bed", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Productivity WFH vs office...",
    options: [
      { text: "Same level, discipline tak berubah!", type: "A" },
      { text: "Quite similar, minor differences", type: "B" },
      { text: "WFH less productive honestly", type: "C" },
      { text: "WFH = Netflix with laptop open", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Lunch break WFH...",
    options: [
      { text: "1 hour max, back to work!", type: "A" },
      { text: "Normal duration, maybe slightly longer", type: "B" },
      { text: "Extended... 2 hours sometimes", type: "C" },
      { text: "Lunch break? The whole day is a break!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Distraction at home, kau...",
    options: [
      { text: "Zone them out, work mode activated!", type: "A" },
      { text: "Manage okay, occasional distraction", type: "B" },
      { text: "Struggle, so many distractions!", type: "C" },
      { text: "Embrace distractions, that's WFH perks!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "End of WFH day, laptop kau...",
    options: [
      { text: "Off at 6, clear separation!", type: "A" },
      { text: "Around normal time, give or take", type: "B" },
      { text: "On standby whole evening", type: "C" },
      { text: "Never really 'on' to begin with", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Video call dari rumah, background kau...",
    options: [
      { text: "Clean, professional, ready always!", type: "A" },
      { text: "Blur filter, problem solved", type: "B" },
      { text: "Messy reality, people understand", type: "C" },
      { text: "Camera off je la senang", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Prefer WFH atau office?",
    options: [
      { text: "Office - better focus dan networking", type: "A" },
      { text: "Hybrid - best of both worlds", type: "B" },
      { text: "WFH mostly - save time dan energy", type: "C" },
      { text: "Full WFH forever please!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bila boss kata 'balik office full time'...",
    options: [
      { text: "Okay, understandable, I'll adapt", type: "A" },
      { text: "Can we discuss hybrid arrangement?", type: "B" },
      { text: "Time to polish resume...", type: "C" },
      { text: "That's resignation trigger!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Disciplined Remote Worker",
    emoji: "💪",
    description: "WFH atau office, professionalism sama! Kau proof that remote work CAN be productive. Boss's model WFH employee!",
    traits: ["Self-disciplined", "Professional anywhere", "Routine-oriented", "Reliable remote"],
    strengths: ["Trusted for WFH", "Consistent output", "Sets good example"],
    weaknesses: ["May miss WFH perks", "Too rigid?"],
    tips: ["Relax sikit - that's WFH benefit!", "Enjoy the flexibility"],
  },
  B: {
    type: "B",
    title: "Balanced WFH-er",
    emoji: "⚖️",
    description: "WFH dengan reasonable flexibility! Kerja siap, tapi enjoy perks juga. Sweet spot antara productive dan comfortable!",
    traits: ["Balanced approach", "Flexible", "Reasonable productivity", "Enjoy WFH benefits"],
    strengths: ["Sustainable WFH life", "Happy worker", "Good output"],
    weaknesses: ["Not the most productive ever", "May slip sometimes"],
    tips: ["Good balance!", "Maintain the discipline"],
  },
  C: {
    type: "C",
    title: "WFH Enthusiast",
    emoji: "🏠",
    description: "WFH adalah blessing untuk kau! More freedom, less stress, maximum comfort. Productivity? It's... flexible too!",
    traits: ["Comfort-seeking", "WFH lover", "Flexible productivity", "Home-oriented"],
    strengths: ["Great work-life integration", "Happy at home", "Low stress"],
    weaknesses: ["Productivity questionable", "May be too comfortable", "Discipline issues"],
    tips: ["Set some boundaries", "Too much freedom = no structure"],
  },
  D: {
    type: "D",
    title: "WFH Lifestyle",
    emoji: "🛋️",
    description: "WFH bagi kau adalah lifestyle choice! Work? Present. Working? That's debatable. Your home is your castle... and your office... and your bed!",
    traits: ["Maximum comfort seeker", "Minimum effort vibes", "WFH abuser?", "Pyjamas professional"],
    strengths: ["Living the dream?", "Zero commute stress", "Home expert"],
    weaknesses: ["Productivity very low", "Career risk", "May get caught"],
    tips: ["HR might be watching!", "Some actual work needed"],
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
