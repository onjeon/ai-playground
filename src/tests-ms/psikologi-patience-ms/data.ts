// Tahap Sabar Kau
// Sejauh mana level patience kau dalam daily life?

export const questions = [
  {
    id: 1,
    question: "Traffic jam yang tak bergerak. Kau...",
    options: [
      { text: "Put on podcast, chill time", type: "A" },
      { text: "Sikit frustrated, manage it", type: "B" },
      { text: "Getting very irritated", type: "C" },
      { text: "Road rage territory honestly", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Waiting in queue yang panjang. Kau...",
    options: [
      { text: "No problem, part of life", type: "A" },
      { text: "Bit bored tapi okay", type: "B" },
      { text: "Impatient, keep checking time", type: "C" },
      { text: "Want to leave atau complain", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Someone learning something slow. Kau...",
    options: [
      { text: "Patient, everyone learns different", type: "A" },
      { text: "Help calmly, explain again", type: "B" },
      { text: "Getting frustrated inside", type: "C" },
      { text: "Just want to do it yourself", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Internet loading slow. Kau...",
    options: [
      { text: "Wait, do something else", type: "A" },
      { text: "Slightly annoyed, refresh once", type: "B" },
      { text: "Keep refreshing angrily", type: "C" },
      { text: "Extremely frustrated, want throw phone", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Long term goal yang ambil masa lama. Kau...",
    options: [
      { text: "Consistent, trust the process", type: "A" },
      { text: "Mostly patient, occasional doubt", type: "B" },
      { text: "Often want to give up", type: "C" },
      { text: "Usually give up before reach", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Orang cakap slow atau unclear. Kau...",
    options: [
      { text: "Listen fully, no rush", type: "A" },
      { text: "Listen, mungkin sikit internal sigh", type: "B" },
      { text: "Want to finish sentence for them", type: "C" },
      { text: "Actually interrupt atau rush them", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Delayed gratification - how good kau?",
    options: [
      { text: "Very good, wait for better things", type: "A" },
      { text: "Can wait, prefer not to", type: "B" },
      { text: "Hard, want things now", type: "C" },
      { text: "Almost impossible untuk wait", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila kena explain something banyak kali...",
    options: [
      { text: "No problem, happy to help", type: "A" },
      { text: "Patient first few times", type: "B" },
      { text: "Annoyed by third time", type: "C" },
      { text: "Visibly frustrated early on", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Project yang tak nampak results yet. Kau...",
    options: [
      { text: "Keep going, results will come", type: "A" },
      { text: "Continue tapi check progress often", type: "B" },
      { text: "Losing motivation already", type: "C" },
      { text: "Ready to quit", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Overall patience level kau?",
    options: [
      { text: "Very patient person", type: "A" },
      { text: "Reasonably patient", type: "B" },
      { text: "Quite impatient honestly", type: "C" },
      { text: "Very impatient, I know", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Zen Master",
    emoji: "🧘",
    description: "Kau super patient! Nothing rattles you, wait with grace, trust timing. This is rare dan valuable trait! People love your calm energy!",
    traits: ["Patient", "Calm", "Graceful", "Long-term thinker"],
    strengths: ["Handle delays well", "Great at long-term goals", "Peaceful to be around"],
    weaknesses: ["Others may take advantage", "May wait too long sometimes"],
    tips: ["Keep this gift", "Know when patience becomes passivity", "Your calm helps others too"],
  },
  B: {
    type: "B",
    title: "The Reasonable Waiter",
    emoji: "⏳",
    description: "Kau have normal patience level! Can wait, prefer not to, manage frustration well. This is healthy dan realistic balance!",
    traits: ["Reasonable", "Self-controlled", "Balanced", "Adaptive"],
    strengths: ["Manage frustration", "Neither too fast nor slow", "Realistic expectations"],
    weaknesses: ["Patience tested bila tired atau stressed"],
    tips: ["Keep balance", "Know triggers for impatience", "Rest helps patience"],
  },
  C: {
    type: "C",
    title: "The Impatient One",
    emoji: "⚡",
    description: "Kau quite impatient! Want things fast, waiting is torture, easily frustrated by delays. Theres energy in this tapi also stress. Work on slowing down!",
    traits: ["Impatient", "Fast-paced", "Easily frustrated", "Action-oriented"],
    strengths: ["Get things done fast", "High energy", "Efficient"],
    weaknesses: ["Stress yourself out", "Frustrate others", "Miss enjoying journey"],
    tips: ["Practice mindfulness", "Not everything needs to be fast", "Impatience raises cortisol"],
  },
  D: {
    type: "D",
    title: "Zero Patience Zone",
    emoji: "🔥",
    description: "Kau have very low patience! Everything feels too slow, easily irritated, want instant results. This level stresses you out constantly. Time to work on this!",
    traits: ["Very impatient", "Easily irritated", "Short fuse", "Demand instant"],
    strengths: ["High drive", "Hate wasting time"],
    weaknesses: ["Constant frustration", "Relationships suffer", "Health impacts from stress"],
    tips: ["This needs work untuk your health", "Learn calming techniques", "Understand root of impatience"],
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
