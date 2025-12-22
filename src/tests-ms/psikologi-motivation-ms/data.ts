// Apa Yang Motivate Kau
// Discover what drives you dalam hidup!

export const questions = [
  {
    id: 1,
    question: "Apa yang buat kau bangun excited hari ni?",
    options: [
      { text: "Goals dan achievements nak capai", type: "A" },
      { text: "People yang kau akan jumpa", type: "B" },
      { text: "New things nak learn atau experience", type: "C" },
      { text: "Knowing kau doing what matters", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Dream career kau would involve...",
    options: [
      { text: "Success, recognition, dan advancement", type: "A" },
      { text: "Working dengan great people", type: "B" },
      { text: "Creativity dan constant learning", type: "C" },
      { text: "Making difference dalam world", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila kau feel most alive?",
    options: [
      { text: "Crushing goals dan winning", type: "A" },
      { text: "Deep connection dengan loved ones", type: "B" },
      { text: "Exploring something new", type: "C" },
      { text: "Contributing to something meaningful", type: "D" },
    ],
  },
  {
    id: 4,
    question: "What would make kau work overtime happily?",
    options: [
      { text: "Bonus atau promotion coming", type: "A" },
      { text: "Team counting on me", type: "B" },
      { text: "Project that fascinates me", type: "C" },
      { text: "It genuinely helps people", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Biggest fear in life?",
    options: [
      { text: "Being unsuccessful atau mediocre", type: "A" },
      { text: "Being alone atau unloved", type: "B" },
      { text: "Missing out atau being bored", type: "C" },
      { text: "Life without meaning", type: "D" },
    ],
  },
  {
    id: 6,
    question: "How kau measure success dalam hidup?",
    options: [
      { text: "Achievements dan status", type: "A" },
      { text: "Quality of relationships", type: "B" },
      { text: "Experiences dan growth", type: "C" },
      { text: "Impact on others", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila stressed, apa yang recharge kau?",
    options: [
      { text: "Making progress on something", type: "A" },
      { text: "Quality time dengan loved ones", type: "B" },
      { text: "Doing something fun atau new", type: "C" },
      { text: "Helping someone atau doing good", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Perfect weekend activity?",
    options: [
      { text: "Something productive, side hustle", type: "A" },
      { text: "Gathering dengan family/friends", type: "B" },
      { text: "Adventure atau trying something new", type: "C" },
      { text: "Volunteering atau meaningful activity", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Apa yang kau want people ingat about you?",
    options: [
      { text: "Successful dan accomplished", type: "A" },
      { text: "Loving dan caring", type: "B" },
      { text: "Interesting dan adventurous", type: "C" },
      { text: "Made the world better", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Main driving force dalam decisions kau?",
    options: [
      { text: "Will this advance my goals?", type: "A" },
      { text: "How will this affect my relationships?", type: "B" },
      { text: "Will I grow atau enjoy this?", type: "C" },
      { text: "Is this the right thing to do?", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Achievement Hunter",
    emoji: "🏆",
    description: "Kau motivated by SUCCESS! Goals, achievements, advancement - these drive you. Ambitious dan driven, you chase excellence. Just remember success without meaning feels empty!",
    traits: ["Ambitious", "Goal-oriented", "Competitive", "Driven"],
    strengths: ["High achiever", "Clear direction", "Strong work ethic"],
    weaknesses: ["May neglect relationships", "Never satisfied", "Burnout risk"],
    tips: ["Define success beyond status", "Celebrate wins more", "Balance achievement dengan connection"],
  },
  B: {
    type: "B",
    title: "Connection Seeker",
    emoji: "❤️",
    description: "Kau motivated by PEOPLE! Love, connection, belonging - relationships fuel you. Warm dan caring, you prioritize bonds. Beautiful motivation tapi dont lose yourself!",
    traits: ["Relational", "Caring", "Warm", "Community-oriented"],
    strengths: ["Deep relationships", "Support system strong", "Empathetic"],
    weaknesses: ["May people-please", "Identity tied to others", "Fear of being alone"],
    tips: ["Your solo identity matters too", "Boundaries dalam relationships", "Not everyone deserves your energy"],
  },
  C: {
    type: "C",
    title: "Experience Collector",
    emoji: "🌟",
    description: "Kau motivated by GROWTH! Learning, adventure, novelty - new experiences energize you. Curious dan open, life is exploration. Amazing tapi dont forget to deepen too!",
    traits: ["Curious", "Adventurous", "Growth-oriented", "Open"],
    strengths: ["Never bored", "Constant growth", "Interesting person"],
    weaknesses: ["May lack depth", "Commitment issues", "Always onto next thing"],
    tips: ["Depth is also growth", "Finish things sometimes", "Balance new dengan mastery"],
  },
  D: {
    type: "D",
    title: "Purpose Driven",
    emoji: "🌍",
    description: "Kau motivated by MEANING! Impact, purpose, contribution - doing good drives you. Noble dan values-led, you want to matter. Inspiring tapi dont forget your own needs!",
    traits: ["Purpose-driven", "Values-led", "Impactful", "Meaningful"],
    strengths: ["Clear sense of why", "Resilient untuk causes", "Inspiring to others"],
    weaknesses: ["May neglect self", "Heavy burden feeling", "Judgmental of less purposeful"],
    tips: ["Self-care is also meaningful", "Small impacts count", "You matter beyond your impact"],
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
