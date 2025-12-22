// Buah Tempatan Mana Anda?
// Personaliti anda macam buah apa?

export const questions = [
  {
    id: 1,
    question: "First impression orang terhadap anda?",
    options: [
      { text: "Strong presence, memorable!", type: "A" },
      { text: "Sweet dan approachable", type: "B" },
      { text: "Mysterious, need to know more", type: "C" },
      { text: "Refreshing dan easy-going", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila orang kenal anda better...",
    options: [
      { text: "They love me or hate me", type: "A" },
      { text: "Everyone ends up liking me", type: "B" },
      { text: "Complex layers to discover", type: "C" },
      { text: "What you see is what you get", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Social gathering, anda...",
    options: [
      { text: "Center of attention!", type: "A" },
      { text: "Get along dengan semua orang", type: "B" },
      { text: "Stick dengan small group", type: "C" },
      { text: "Chill di corner, vibes je", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Strength terbesar anda?",
    options: [
      { text: "Bold personality, unforgettable", type: "A" },
      { text: "Universally likeable", type: "B" },
      { text: "Unique dan valuable", type: "C" },
      { text: "Reliable dan consistent", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Handling controversy atau conflict...",
    options: [
      { text: "Stand my ground, no apologies", type: "A" },
      { text: "Smooth things over, peacemaker", type: "B" },
      { text: "Strategic retreat, pick battles", type: "C" },
      { text: "Avoid drama, stay neutral", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Dalam friendship group, anda adalah...",
    options: [
      { text: "The iconic one everyone knows", type: "A" },
      { text: "The sweet one yang bond semua", type: "B" },
      { text: "The rare one yang special", type: "C" },
      { text: "The chill one always there", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Price tag personality anda?",
    options: [
      { text: "Premium, worth the hype", type: "A" },
      { text: "Good value, worth it", type: "B" },
      { text: "Exclusive, hard to find", type: "C" },
      { text: "Affordable, accessible", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Seasonal availability anda?",
    options: [
      { text: "Limited edition, treasure me!", type: "A" },
      { text: "Mostly available, consistent", type: "B" },
      { text: "Rare, appreciate when present", type: "C" },
      { text: "Always around, reliable", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Best enjoyed with...",
    options: [
      { text: "Bold companions yang appreciate me", type: "A" },
      { text: "Anyone and everyone!", type: "B" },
      { text: "Select few yang understand", type: "C" },
      { text: "Any situation works", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Legacy anda akan jadi...",
    options: [
      { text: "Legendary, unforgettable!", type: "A" },
      { text: "Beloved by many", type: "B" },
      { text: "Niche but valued", type: "C" },
      { text: "Dependable classic", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Durian",
    emoji: "🥇",
    description: "Anda adalah Raja Buah! Strong personality, love or hate, tapi unforgettable! Bold, aromatic (in your own way), dan definitely not boring!",
    traits: ["Bold", "Memorable", "Polarizing", "Confident"],
    strengths: ["Unforgettable presence", "True to yourself", "Premium quality"],
    weaknesses: ["Not for everyone", "Can be overwhelming"],
    tips: ["Your uniqueness is your power!", "Find your tribe"],
  },
  B: {
    type: "B",
    title: "Mangga",
    emoji: "🥭",
    description: "Anda adalah Mangga! Sweet, universally loved, dan brightens everyone's day! Approachable dan sentiasa welcome di mana-mana!",
    traits: ["Sweet", "Likeable", "Friendly", "Consistent"],
    strengths: ["Everyone loves you", "Adaptable", "Positive vibes"],
    weaknesses: ["May people-please too much"],
    tips: ["Stay sweet, but set boundaries!", "You can't please everyone"],
  },
  C: {
    type: "C",
    title: "Manggis",
    emoji: "💜",
    description: "Anda adalah Ratu Buah! Elegant, mysterious, dan truly special bila orang kenal. Not everyone gets you, tapi yang faham akan appreciate!",
    traits: ["Elegant", "Mysterious", "Valuable", "Complex"],
    strengths: ["High quality", "Worth knowing", "Unique"],
    weaknesses: ["Hard to approach", "Limited availability"],
    tips: ["Let more people in", "Share your sweetness!"],
  },
  D: {
    type: "D",
    title: "Betik",
    emoji: "🧡",
    description: "Anda adalah Betik! Reliable, nutritious, dan always there when needed! No drama, just consistent goodness. Underrated hero!",
    traits: ["Reliable", "Consistent", "Healthy", "Humble"],
    strengths: ["Dependable", "Low maintenance", "Always available"],
    weaknesses: ["May be overlooked", "Too humble"],
    tips: ["You're more valuable than you think!", "Shine brighter sometimes"],
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
