// Hubungan Dengan Mak Ayah
// Test viral tentang parent relationship style

export const questions = [
  {
    id: 1,
    question: "Communication dengan parents macam mana?",
    options: [
      { text: "Daily calls! Share everything!", type: "A" },
      { text: "Regular check-ins, few times a week", type: "B" },
      { text: "Bila perlu je contact", type: "C" },
      { text: "Through siblings usually", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Share personal problems dengan parents?",
    options: [
      { text: "Yes! They're my advisors!", type: "A" },
      { text: "Some things, not everything", type: "B" },
      { text: "Rarely, handle myself", type: "C" },
      { text: "Never, they'll worry too much", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Parents advice, kau...",
    options: [
      { text: "Always consider and follow!", type: "A" },
      { text: "Listen, then decide myself", type: "B" },
      { text: "Appreciate but do my own thing", type: "C" },
      { text: "Avoid asking for advice", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Physical affection dengan parents?",
    options: [
      { text: "Hugs and salam tangan selalu!", type: "A" },
      { text: "Sometimes, when appropriate", type: "B" },
      { text: "Awkward dengan physical affection", type: "C" },
      { text: "Rarely, not our family style", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Arguments dengan parents, kau...",
    options: [
      { text: "Rarely argue, respect them!", type: "A" },
      { text: "Sometimes disagree, resolve quickly", type: "B" },
      { text: "Stand my ground when important", type: "C" },
      { text: "Avoid conflict, just agree", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Parents know your friends/partner?",
    options: [
      { text: "Yes! Introduce everyone!", type: "A" },
      { text: "Close ones they know", type: "B" },
      { text: "Some, not detailed info", type: "C" },
      { text: "Keep personal life separate", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Financial relationship dengan parents?",
    options: [
      { text: "Support them regularly!", type: "A" },
      { text: "Help when they need", type: "B" },
      { text: "Independent, minimal financial ties", type: "C" },
      { text: "Still depend on them sometimes", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quality time dengan parents?",
    options: [
      { text: "Regular! Meals, outings together!", type: "A" },
      { text: "When schedule allows", type: "B" },
      { text: "Occasional, special events", type: "C" },
      { text: "Rare, different schedules", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Express gratitude ke parents macam mana?",
    options: [
      { text: "Words, actions, gifts - everything!", type: "A" },
      { text: "Actions speak louder", type: "B" },
      { text: "They know I appreciate them", type: "C" },
      { text: "Not very expressive", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Overall, relationship dengan parents adalah...",
    options: [
      { text: "Best friends! Super close!", type: "A" },
      { text: "Good, healthy relationship", type: "B" },
      { text: "Okay, room for improvement", type: "C" },
      { text: "Complicated, work in progress", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Parent's Best Friend",
    emoji: "💖",
    description: "Kau super close dengan parents! They know everything, you share everything. Model anak-parent relationship!",
    traits: ["Close", "Open", "Grateful", "Family-first"],
    strengths: ["Strong support system", "No secrets", "Mutual respect"],
    weaknesses: ["Maybe too dependent?", "Boundaries might blur"],
    tips: ["Keep some independence too", "Healthy boundaries are okay!"],
  },
  B: {
    type: "B",
    title: "Healthy Balance",
    emoji: "⚖️",
    description: "Kau ada healthy relationship dengan parents! Close tapi dengan boundaries. Independent yet connected!",
    traits: ["Balanced", "Respectful", "Independent", "Connected"],
    strengths: ["Good boundaries", "Mutual respect", "Healthy dynamic"],
    weaknesses: ["Could share more", "Sometimes distant"],
    tips: ["Perfect balance!", "Keep nurturing the relationship!"],
  },
  C: {
    type: "C",
    title: "Independent Child",
    emoji: "🦅",
    description: "Kau independent dalam relationship dengan parents! Love them tapi dari jauh. Own life, own decisions!",
    traits: ["Independent", "Self-reliant", "Private", "Autonomous"],
    strengths: ["Self-sufficient", "Own identity", "Not clingy"],
    weaknesses: ["Parents might feel distant", "Missing deeper connection"],
    tips: ["Reach out more often", "They miss you!"],
  },
  D: {
    type: "D",
    title: "Work In Progress",
    emoji: "🔧",
    description: "Relationship dengan parents complicated atau distant. Maybe working through issues atau just different personalities!",
    traits: ["Distant", "Complex", "Growing", "Evolving"],
    strengths: ["Self-aware", "Working on it", "Resilient"],
    weaknesses: ["Disconnection", "Unresolved issues maybe"],
    tips: ["Small steps matter", "Healing takes time!"],
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
