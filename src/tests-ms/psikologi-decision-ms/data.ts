// Gaya Buat Decision
// Macam mana kau buat keputusan dalam hidup?

export const questions = [
  {
    id: 1,
    question: "Bila nak order makanan, kau...",
    options: [
      { text: "Decide dalam seconds", type: "A" },
      { text: "Look through menu, decide reasonably quick", type: "B" },
      { text: "Take quite long, consider everything", type: "C" },
      { text: "Ask orang lain nak apa dulu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila ada big life decision, kau...",
    options: [
      { text: "Trust gut feeling, go for it", type: "A" },
      { text: "Research dan analyze, then decide", type: "B" },
      { text: "Think for very long, all angles", type: "C" },
      { text: "Ask everyone for their opinion first", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Selepas buat decision, kau...",
    options: [
      { text: "Move on, tak look back", type: "A" },
      { text: "Confident most of time, minimal regret", type: "B" },
      { text: "Second guess quite often", type: "C" },
      { text: "Worry kalau orang lain tak setuju", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila ada two good options, kau...",
    options: [
      { text: "Pick one fast, both okay anyway", type: "A" },
      { text: "Compare pros cons, choose best", type: "B" },
      { text: "Struggle sangat, hard to choose", type: "C" },
      { text: "See what others would choose", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Regret after decision - berapa kerap?",
    options: [
      { text: "Rarely, whats done is done", type: "A" },
      { text: "Sometimes, tapi move on", type: "B" },
      { text: "Often, replay decisions in head", type: "C" },
      { text: "Depends on others' reaction", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila kena decide under pressure...",
    options: [
      { text: "Thrive! Best decisions under pressure", type: "A" },
      { text: "Handle okay, prefer more time tho", type: "B" },
      { text: "Stress sangat, freeze up kadang", type: "C" },
      { text: "Ask someone else to decide", type: "D" },
    ],
  },
  {
    id: 7,
    question: "How much research sebelum decide?",
    options: [
      { text: "Minimal, instinct is enough", type: "A" },
      { text: "Reasonable amount, then commit", type: "B" },
      { text: "Extensive, need all info", type: "C" },
      { text: "Focus on what others recommend", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila decision turns out wrong...",
    options: [
      { text: "Learn quick, make new decision", type: "A" },
      { text: "Acknowledge mistake, adjust", type: "B" },
      { text: "Ruminate about it for long", type: "C" },
      { text: "Blame pada sesiapa yang advise", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Important decision yang ambil masa paling lama?",
    options: [
      { text: "Days at most", type: "A" },
      { text: "Couple weeks usually", type: "B" },
      { text: "Months, sometimes longer", type: "C" },
      { text: "Until someone helps me decide", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Describe decision-making style kau.",
    options: [
      { text: "Fast dan confident", type: "A" },
      { text: "Balanced dan thoughtful", type: "B" },
      { text: "Careful dan thorough", type: "C" },
      { text: "Dependent on others' input", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Quick Decider",
    emoji: "⚡",
    description: "Kau decide fast dan move on! Trust gut, tak overthink. Great untuk action-oriented life tapi sometimes quick isnt always best. Balance speed dengan consideration!",
    traits: ["Decisive", "Confident", "Action-oriented", "Instinctive"],
    strengths: ["No analysis paralysis", "Get things done fast", "Confident in choices"],
    weaknesses: ["May miss important details", "Can be impulsive", "Others may feel rushed"],
    tips: ["Slow down untuk big decisions", "Consider others input", "Instinct good but not always right"],
  },
  B: {
    type: "B",
    title: "The Balanced Decider",
    emoji: "⚖️",
    description: "Kau ada sweet spot! Enough research, not too much. Confident tapi not reckless. This is actually healthy decision-making approach - keep it up!",
    traits: ["Balanced", "Thoughtful", "Reasonable", "Flexible"],
    strengths: ["Good judgment", "Neither rash nor stuck", "Learn from mistakes"],
    weaknesses: ["Can get stuck bila options equally good"],
    tips: ["Trust this approach", "When stuck, time limits help", "Keep balance"],
  },
  C: {
    type: "C",
    title: "The Careful Decider",
    emoji: "🔍",
    description: "Kau very thorough! Consider everything, all angles, all possibilities. Great untuk avoiding mistakes tapi sometimes overthink sampai paralyzed. Trust yourself more!",
    traits: ["Thorough", "Careful", "Analytical", "Sometimes anxious"],
    strengths: ["Well-researched decisions", "Avoid obvious mistakes", "Consider consequences"],
    weaknesses: ["Analysis paralysis", "Miss opportunities", "Exhausting process"],
    tips: ["Set decision deadlines", "Good enough is okay", "Not every decision needs deep analysis"],
  },
  D: {
    type: "D",
    title: "The Consultative Decider",
    emoji: "🤝",
    description: "Kau heavily rely on others untuk decisions. Value input dan want approval. Nice to consider others tapi kau kena trust yourself too! Your opinion matters!",
    traits: ["Consultative", "Approval-seeking", "Dependent", "Uncertain"],
    strengths: ["Consider others views", "Collaborative", "Open to input"],
    weaknesses: ["Hard to decide alone", "May lose sense of own wants", "Blame shifts to others"],
    tips: ["Practice small solo decisions", "Your voice matters", "Others wont always be there"],
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
