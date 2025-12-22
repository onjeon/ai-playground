// Lebel ng Pagiging Romantic
// Gaano ka ka-romantic?

export const questions = [
  {
    id: 1,
    question: "Gaano ka ka-romantic?",
    options: [
      { text: "Opsyon 1", type: "A" },
      { text: "Opsyon 2", type: "B" },
      { text: "Opsyon 3", type: "C" },
      { text: "Opsyon 4", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Paano mo hinaharap ang mga hamon sa buhay?",
    options: [
      { text: "Aggressive at direkta", type: "A" },
      { text: "May plano at organized", type: "B" },
      { text: "Chill at relaxed approach", type: "C" },
      { text: "Bahala na attitude", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ano ang priority mo sa buhay?",
    options: [
      { text: "Success at achievement", type: "A" },
      { text: "Relationships at connections", type: "B" },
      { text: "Peace of mind at happiness", type: "C" },
      { text: "Freedom at independence", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Paano ka gumagawa ng decisions?",
    options: [
      { text: "Quick at decisive", type: "A" },
      { text: "Carefully planned", type: "B" },
      { text: "Based sa feelings", type: "C" },
      { text: "Improvised lang", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sa social situations, ano ang role mo?",
    options: [
      { text: "Ang leader at organizer", type: "A" },
      { text: "Ang mediator at peacekeeper", type: "B" },
      { text: "Ang observer lang", type: "C" },
      { text: "Ang sumunod lang sa flow", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Anong approach mo sa problema?",
    options: [
      { text: "Solve agad, walang delay", type: "A" },
      { text: "Analyze muna bago kumilos", type: "B" },
      { text: "Huwag muna isipin, mamaya na", type: "C" },
      { text: "Hayaan na lang lumipas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ano ang style mo sa communication?",
    options: [
      { text: "Direct at straightforward", type: "A" },
      { text: "Diplomatic at considerate", type: "B" },
      { text: "Tahimik at minimal", type: "C" },
      { text: "Casual at spontaneous", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Paano ka nag-handle ng stress?",
    options: [
      { text: "Action agad para mawala", type: "A" },
      { text: "Planning at organization", type: "B" },
      { text: "Relax at self-care", type: "C" },
      { text: "Ignore lang, dedma", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ano ang nakikita mo sa sarili mo after 5 years?",
    options: [
      { text: "Successful at on top", type: "A" },
      { text: "Stable at secured", type: "B" },
      { text: "Happy at content", type: "C" },
      { text: "Free at adventurous", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Paano mo ine-express ang emotions?",
    options: [
      { text: "Openly at vocal", type: "A" },
      { text: "Through words, carefully chosen", type: "B" },
      { text: "Through actions hindi words", type: "C" },
      { text: "Rarely, keep it to myself", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ano ang ideal weekend mo?",
    options: [
      { text: "Productive activities at adventures", type: "A" },
      { text: "Quality time with loved ones", type: "B" },
      { text: "Rest at relaxation", type: "C" },
      { text: "Go with the flow, walang plan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ano ang motto mo sa buhay?",
    options: [
      { text: "Go big or go home!", type: "A" },
      { text: "Slow and steady wins the race", type: "B" },
      { text: "Enjoy the journey", type: "C" },
      { text: "Whatever happens, happens", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Romantic  Type A",
    emoji: "🔥",
    description: "Ikaw ay matapang, decisive, at action-oriented! Natural leader ka at hindi ka takot kumilos. May strong drive ka sa life at goal-oriented. Passionate ka sa lahat ng ginagawa mo!",
    traits: ["Matapang", "Leader", "Decisive", "Action-oriented"],
    strengths: [
      "Natural leadership",
      "Quick decision maker",
      "Gets things done"
    ],
    weaknesses: [
      "Minsan too aggressive",
      "Baka ma-overwhelm ang iba"
    ],
    tips: [
      "Balance action with reflection",
      "Listen to others more"
    ],
  },
  B: {
    type: "B",
    title: "Romantic Type B",
    emoji: "⚖️",
    description: "Ikaw ay organized, thoughtful, at balanced! Maayos ang approach mo sa buhay at considerate sa iba. Strategic thinker ka at mahusay mag-plano. Reliable ka at maaasahan!",
    traits: ["Organized", "Thoughtful", "Balanced", "Strategic"],
    strengths: [
      "Excellent planner",
      "Reliable and consistent",
      "Good at analysis"
    ],
    weaknesses: [
      "Minsan overthinking",
      "Too cautious"
    ],
    tips: [
      "Trust your instincts more",
      "Take calculated risks"
    ],
  },
  C: {
    type: "C",
    title: "Romantic Type C",
    emoji: "😌",
    description: "Ikaw ay chill, peaceful, at content! Priority mo ang happiness at peace of mind. Alam mo kung paano mag-enjoy ng simple things. Easy-going ka at stress-free ang buhay!",
    traits: ["Chill", "Peaceful", "Content", "Easy-going"],
    strengths: [
      "Stress-free mindset",
      "Appreciates simple joys",
      "Emotionally balanced"
    ],
    weaknesses: [
      "Minsan walang ambition",
      "Too passive"
    ],
    tips: [
      "Set some goals",
      "Push yourself minsan"
    ],
  },
  D: {
    type: "D",
    title: "Romantic Type D",
    emoji: "🌊",
    description: "Ikaw ay flexible, adaptable, at spontaneous! Go with the flow ka at hindi ka stressed sa plans. Independent ka at comfortable sa uncertainty. Free spirit ka at adventurous!",
    traits: ["Flexible", "Adaptable", "Spontaneous", "Independent"],
    strengths: [
      "Highly adaptable",
      "Low stress levels",
      "Open to possibilities"
    ],
    weaknesses: [
      "Walang direction minsan",
      "Inconsistent"
    ],
    tips: [
      "Create some structure",
      "Follow through on commitments"
    ],
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
