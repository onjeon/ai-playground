// Kuih Mana Anda?
// Personaliti anda macam kuih apa?

export const questions = [
  {
    id: 1,
    question: "Personality anda dalam group?",
    options: [
      { text: "Colorful dan eye-catching!", type: "A" },
      { text: "Classic dan reliable", type: "B" },
      { text: "Sweet dan crowd favorite", type: "C" },
      { text: "Unique dan acquired taste", type: "D" },
    ],
  },
  {
    id: 2,
    question: "First impression orang terhadap anda?",
    options: [
      { text: "Vibrant dan attractive", type: "A" },
      { text: "Traditional dan grounded", type: "B" },
      { text: "Approachable dan friendly", type: "C" },
      { text: "Mysterious dan interesting", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Social situation preference anda?",
    options: [
      { text: "Kenduri besar - lebih meriah!", type: "A" },
      { text: "Tea time dengan close friends", type: "B" },
      { text: "Gathering dengan semua orang", type: "C" },
      { text: "Small intimate groups", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bila orang describe anda...",
    options: [
      { text: "Fun dan colorful!", type: "A" },
      { text: "Dependable dan familiar", type: "B" },
      { text: "Sweet dan likeable", type: "C" },
      { text: "Different dan memorable", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Energy level anda?",
    options: [
      { text: "High energy, bouncy!", type: "A" },
      { text: "Steady dan consistent", type: "B" },
      { text: "Warm dan welcoming", type: "C" },
      { text: "Calm dan collected", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Best quality anda?",
    options: [
      { text: "Make everything lebih meriah", type: "A" },
      { text: "Reliable dalam semua keadaan", type: "B" },
      { text: "Everyone feels welcomed", type: "C" },
      { text: "Unique perspective dan ideas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Challenge terbesar anda?",
    options: [
      { text: "Being taken seriously sometimes", type: "A" },
      { text: "Trying new things", type: "B" },
      { text: "Saying no to people", type: "C" },
      { text: "Being understood by everyone", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila ada celebration...",
    options: [
      { text: "Center of attention!", type: "A" },
      { text: "Essential part of the event", type: "B" },
      { text: "Gets along dengan semua", type: "C" },
      { text: "Quietly appreciated", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Texture personality anda?",
    options: [
      { text: "Layers - complex dan interesting!", type: "A" },
      { text: "Smooth - easy-going", type: "B" },
      { text: "Soft - gentle dan kind", type: "C" },
      { text: "Chewy - resilient dan strong", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Legacy anda akan jadi apa?",
    options: [
      { text: "Unforgettable dan memorable!", type: "A" },
      { text: "Timeless classic", type: "B" },
      { text: "Beloved by many", type: "C" },
      { text: "Unique dan appreciated", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kuih Lapis",
    emoji: "🌈",
    description: "Colorful, layered, dan eye-catching! Anda bring vibrancy everywhere you go. Complex personality dengan many beautiful layers!",
    traits: ["Colorful", "Complex", "Attractive", "Layered"],
    strengths: ["Stands out", "Interesting personality", "Memorable"],
    weaknesses: ["May seem too much", "Time to know fully"],
    tips: ["Your complexity is beautiful!", "Let people discover your layers"],
  },
  B: {
    type: "B",
    title: "Kuih Bahulu",
    emoji: "🥮",
    description: "Classic, reliable, dan everyone's favorite! Traditional values dengan timeless appeal. Tak pernah out of style!",
    traits: ["Traditional", "Reliable", "Classic", "Comforting"],
    strengths: ["Dependable", "Universally liked", "Timeless"],
    weaknesses: ["May be seen as boring", "Resistant to change"],
    tips: ["Classic is never boring!", "Your consistency is valued"],
  },
  C: {
    type: "C",
    title: "Kuih Seri Muka",
    emoji: "💚",
    description: "Sweet, beautiful, dan crowd favorite! Two-toned personality - gentle yet interesting. Everyone loves having you around!",
    traits: ["Sweet", "Beautiful", "Popular", "Balanced"],
    strengths: ["Universally loved", "Pleasing presence", "Balanced personality"],
    weaknesses: ["May people-please", "Dual nature confusing"],
    tips: ["Stay sweet!", "Your duality is your strength"],
  },
  D: {
    type: "D",
    title: "Kuih Tepung Pelita",
    emoji: "🥥",
    description: "Unique, refined, dan untuk yang appreciate! Not for everyone tapi those who get you, LOVE you. Special dan exclusive vibes!",
    traits: ["Unique", "Refined", "Exclusive", "Appreciated"],
    strengths: ["Special quality", "Memorable taste", "Valued by connoisseurs"],
    weaknesses: ["Not for everyone", "May feel misunderstood"],
    tips: ["Right people will find you!", "Quality over quantity"],
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
