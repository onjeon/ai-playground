// स्ट्रीट फूड टेस्ट - आप कौन सा स्ट्रीट फूड हैं?
// Street Food Personality Test

export const questions = [
  {
    id: 1,
    question: "शाम को क्या मन करता है?",
    options: [
      { text: "कुछ chatpata और tangy", type: "A" },
      { text: "कुछ crispy और crunchy", type: "B" },
      { text: "कुछ filling और heavy", type: "C" },
      { text: "कुछ sweet और refreshing", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Social personality?",
    options: [
      { text: "Tangy और fun", type: "A" },
      { text: "Crispy और sharp", type: "B" },
      { text: "Filling और satisfying", type: "C" },
      { text: "Sweet और refreshing", type: "D" },
    ],
  },
  {
    id: 3,
    question: "मूड ठीक करने के लिए?",
    options: [
      { text: "Spicy kick चाहिए", type: "A" },
      { text: "Crunchy satisfaction", type: "B" },
      { text: "Heavy comfort food", type: "C" },
      { text: "Sweet treat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Friends के साथ?",
    options: [
      { text: "Sharing और fun", type: "A" },
      { text: "Quick और casual", type: "B" },
      { text: "Sitting और enjoying", type: "C" },
      { text: "Dessert outing", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Rain में क्या खाना है?",
    options: [
      { text: "गरम-गरम कुछ chatpata", type: "A" },
      { text: "Crispy snacks", type: "B" },
      { text: "Heavy और filling", type: "C" },
      { text: "Kulfi या ice gola", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Budget consciousness?",
    options: [
      { text: "पैसा वसूल variety", type: "A" },
      { text: "Quick और cheap", type: "B" },
      { text: "Value for money fullness", type: "C" },
      { text: "Treat yourself", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Late night craving?",
    options: [
      { text: "Pani puri thela", type: "A" },
      { text: "Vada pav corner", type: "B" },
      { text: "Rolls या frankies", type: "C" },
      { text: "Kulfi या falooda", type: "D" },
    ],
  },
  {
    id: 8,
    question: "First date पर?",
    options: [
      { text: "Street food crawl", type: "A" },
      { text: "Quick snack spot", type: "B" },
      { text: "Comfortable chat place", type: "C" },
      { text: "Sweet endings", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Crowd में आप?",
    options: [
      { text: "हर किसी को taste कराता हूं", type: "A" },
      { text: "Quick hi-bye", type: "B" },
      { text: "Long conversations", type: "C" },
      { text: "Sweet memories बनाता हूं", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Travel पर क्या miss होता है?",
    options: [
      { text: "Local chaat", type: "A" },
      { text: "Road side snacks", type: "B" },
      { text: "Heavy local meals", type: "C" },
      { text: "Regional sweets", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Happiness कहां मिलती है?",
    options: [
      { text: "Variety में", type: "A" },
      { text: "Simplicity में", type: "B" },
      { text: "Fullness में", type: "C" },
      { text: "Sweetness में", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Life philosophy?",
    options: [
      { text: "Mix it up!", type: "A" },
      { text: "Keep it simple", type: "B" },
      { text: "Fill it up", type: "C" },
      { text: "End with sweetness", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पानी पूरी",
    emoji: "💧",
    description: "आप पानी पूरी हैं - Tangy, fun और addictive! एक से मन नहीं भरता। Variety और excitement आपकी identity है। सबके साथ share करने वाले, life of the party!",
    traits: ["Tangy", "Fun", "Addictive", "Social"],
    strengths: ["Entertainment", "Variety", "Fun", "Sharing"],
    weaknesses: ["Too much excitement कभी-कभी", "Can't stop"],
    tips: ["Balance रखें", "Sometimes less is more"],
  },
  B: {
    type: "B",
    title: "वड़ा पाव",
    emoji: "🍔",
    description: "आप वड़ा पाव हैं - Simple, satisfying और quick! Mumbai spirit, कहीं भी कभी भी। No fuss, just deliver। Reliable और effective personality!",
    traits: ["Simple", "Satisfying", "Quick", "Reliable"],
    strengths: ["Efficiency", "Reliability", "Simplicity", "Availability"],
    weaknesses: ["Too simple कभी-कभी", "Underappreciated"],
    tips: ["अपनी value जानें", "Variety भी try करें"],
  },
  C: {
    type: "C",
    title: "छोले भटूरे",
    emoji: "🫓",
    description: "आप छोले भटूरे हैं - Heavy, satisfying और memorable! एक plate में happiness। Generous और fulfilling। जो आपके साथ हो, satisfied रहे!",
    traits: ["Heavy", "Satisfying", "Generous", "Memorable"],
    strengths: ["Satisfaction", "Generosity", "Fulfillment", "Impact"],
    weaknesses: ["Too heavy कभी-कभी", "Overwhelming"],
    tips: ["Light भी हों कभी-कभी", "Balance रखें"],
  },
  D: {
    type: "D",
    title: "कुल्फी",
    emoji: "🍨",
    description: "आप कुल्फी हैं - Sweet, refreshing और memorable! Perfect ending to anything। Cool personality जो सबको खुश करे। Special occasions के लिए special!",
    traits: ["Sweet", "Refreshing", "Cool", "Special"],
    strengths: ["Sweetness", "Coolness", "Memorability", "Specialness"],
    weaknesses: ["Too sweet कभी-कभी", "Seasonal appeal"],
    tips: ["Regular भी बनें", "Year-round relevance"],
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
