// बिरयानी प्रकार टेस्ट - आप कौन सी बिरयानी हैं?
// Biryani Type Test

export const questions = [
  {
    id: 1,
    question: "आपका personality style?",
    options: [
      { text: "Rich, layered और complex", type: "A" },
      { text: "Spicy और bold", type: "B" },
      { text: "Subtle और sophisticated", type: "C" },
      { text: "Simple और authentic", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Gathering में आप?",
    options: [
      { text: "Center of attraction, grand entry", type: "A" },
      { text: "Energy और excitement लाता हूं", type: "B" },
      { text: "Quietly impressive", type: "C" },
      { text: "Homely और welcoming", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Work approach?",
    options: [
      { text: "Royal standard, nothing less", type: "A" },
      { text: "Fast और fiery", type: "B" },
      { text: "Methodical और perfect", type: "C" },
      { text: "Traditional और reliable", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Conflict में?",
    options: [
      { text: "Diplomatically handle, status maintain", type: "A" },
      { text: "Direct confrontation", type: "B" },
      { text: "Calm और composed", type: "C" },
      { text: "Simple solution find करता हूं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Favorite time of day?",
    options: [
      { text: "Grand dinner time", type: "A" },
      { text: "Any time, always ready", type: "B" },
      { text: "Quiet lunch hours", type: "C" },
      { text: "Family meals", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Love life में?",
    options: [
      { text: "Royal romance, grand gestures", type: "A" },
      { text: "Passionate और intense", type: "B" },
      { text: "Subtle और deep", type: "C" },
      { text: "Simple और sweet", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Friends आपको क्या कहते हैं?",
    options: [
      { text: "The Royal one", type: "A" },
      { text: "The Spicy one", type: "B" },
      { text: "The Classy one", type: "C" },
      { text: "The Real one", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Success की definition?",
    options: [
      { text: "Top पर होना, best of best", type: "A" },
      { text: "Impact बनाना, याद रहना", type: "B" },
      { text: "Respect और recognition", type: "C" },
      { text: "Happiness और contentment", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Travel style?",
    options: [
      { text: "Luxury और comfort", type: "A" },
      { text: "Adventure और thrill", type: "B" },
      { text: "Cultural और historical", type: "C" },
      { text: "Simple और relaxed", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Fashion sense?",
    options: [
      { text: "Royal और elegant", type: "A" },
      { text: "Bold और colorful", type: "B" },
      { text: "Sophisticated और minimal", type: "C" },
      { text: "Comfortable और traditional", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Weekend plans?",
    options: [
      { text: "Grand party या fine dining", type: "A" },
      { text: "Adventure या sports", type: "B" },
      { text: "Art या music appreciate करना", type: "C" },
      { text: "Home में family के साथ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Life philosophy?",
    options: [
      { text: "जियो शान से", type: "A" },
      { text: "जियो जोश से", type: "B" },
      { text: "जियो सोच से", type: "C" },
      { text: "जियो सच्चाई से", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "हैदराबादी बिरयानी",
    emoji: "👑",
    description: "आप हैदराबादी बिरयानी हैं - Royal, rich और legendary! Dum की तरह patience, layers की तरह depth। सब आपके fan हैं, आप king/queen of the room हैं। Premium quality personality!",
    traits: ["Royal", "Rich", "Legendary", "Premium"],
    strengths: ["Grandeur", "Quality", "Presence", "Legacy"],
    weaknesses: ["High maintenance कभी-कभी", "Expensive tastes"],
    tips: ["Simple moments भी enjoy करें", "Accessible बनें"],
  },
  B: {
    type: "B",
    title: "लखनवी बिरयानी",
    emoji: "🔥",
    description: "आप लखनवी बिरयानी हैं - Spicy, flavorful और impactful! Awadhi तहज़ीब के साथ bold taste। जहां जाते हैं, impression छोड़ते हैं। Unforgettable personality!",
    traits: ["Spicy", "Flavorful", "Impactful", "Bold"],
    strengths: ["Impact", "Memorability", "Energy", "Boldness"],
    weaknesses: ["Too spicy for some", "Intense"],
    tips: ["Tone down कभी-कभी", "Subtle भी powerful होता है"],
  },
  C: {
    type: "C",
    title: "कोलकाता बिरयानी",
    emoji: "🥔",
    description: "आप कोलकाता बिरयानी हैं - Subtle, unique और sophisticated! आलू की तरह unexpected twist, light लेकिन satisfying। Intellectually rich, culturally deep personality!",
    traits: ["Subtle", "Unique", "Sophisticated", "Intellectual"],
    strengths: ["Depth", "Uniqueness", "Culture", "Sophistication"],
    weaknesses: ["Too understated कभी-कभी", "Misunderstood"],
    tips: ["अपनी value showcase करें", "Bold भी हों कभी-कभी"],
  },
  D: {
    type: "D",
    title: "घर की बिरयानी",
    emoji: "🏠",
    description: "आप घर की बिरयानी हैं - Authentic, heartfelt और comforting! मां के हाथ की तरह, प्यार से भरी। सबको घर जैसा feel कराते हैं। Real और relatable personality!",
    traits: ["Authentic", "Heartfelt", "Comforting", "Real"],
    strengths: ["Authenticity", "Warmth", "Comfort", "Relatability"],
    weaknesses: ["Too simple कभी-कभी", "Undervalued"],
    tips: ["अपनी value जानें", "Simple is powerful"],
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
