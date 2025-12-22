// प्रपोज़ल स्टाइल - आपका proposal कैसा होगा?
// Proposal Style Test

export const questions = [
  {
    id: 1,
    question: "Ideal proposal setting?",
    options: [
      { text: "Grand, public, memorable", type: "A" },
      { text: "Romantic, private setup", type: "B" },
      { text: "Simple, meaningful", type: "C" },
      { text: "Casual, no big deal", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ring selection?",
    options: [
      { text: "Expensive, designer", type: "A" },
      { text: "Beautiful, thoughtful", type: "B" },
      { text: "Simple, elegant", type: "C" },
      { text: "Ring जरूरी नहीं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Surprise या planned?",
    options: [
      { text: "Complete surprise", type: "A" },
      { text: "Hint दिया हो थोड़ा", type: "B" },
      { text: "Discuss किया हो", type: "C" },
      { text: "Mutual decision", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Family involvement?",
    options: [
      { text: "Family के सामने proposal", type: "A" },
      { text: "Blessings पहले लेकर", type: "B" },
      { text: "बाद में बताएंगे", type: "C" },
      { text: "Private matter", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Photography/Videography?",
    options: [
      { text: "Professional shoot जरूर", type: "A" },
      { text: "Capture करना अच्छा", type: "B" },
      { text: "जरूरी नहीं", type: "C" },
      { text: "Private moment, no cameras", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Knee पर?",
    options: [
      { text: "Absolutely, traditional!", type: "A" },
      { text: "Nice gesture", type: "B" },
      { text: "जरूरी नहीं", type: "C" },
      { text: "Cringe लगता है", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Speech prepared?",
    options: [
      { text: "Long, heartfelt speech", type: "A" },
      { text: "कुछ words prepared", type: "B" },
      { text: "From the heart, spontaneous", type: "C" },
      { text: "Simple question", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Location choice?",
    options: [
      { text: "Exotic destination", type: "A" },
      { text: "Meaningful place (first date etc)", type: "B" },
      { text: "Anywhere comfortable", type: "C" },
      { text: "घर पर", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Budget for proposal?",
    options: [
      { text: "No limit, once in lifetime", type: "A" },
      { text: "Decent budget", type: "B" },
      { text: "Thoughtful पर affordable", type: "C" },
      { text: "पैसे waste क्यों", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Friends involved?",
    options: [
      { text: "Flash mob style!", type: "A" },
      { text: "Help in planning", type: "B" },
      { text: "बाद में celebrate", type: "C" },
      { text: "Just us two", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Social media post?",
    options: [
      { text: "तुरंत, share the joy", type: "A" },
      { text: "थोड़ी देर बाद", type: "B" },
      { text: "Maybe, depends", type: "C" },
      { text: "Private रखेंगे", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall proposal vibe?",
    options: [
      { text: "Grand और memorable", type: "A" },
      { text: "Romantic और sweet", type: "B" },
      { text: "Simple और genuine", type: "C" },
      { text: "Practical और direct", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Grand Romantic",
    emoji: "💎",
    description: "आप grand gestures वाले हैं! Proposal memorable और spectacular होगा। Bollywood style!",
    traits: ["grand", "romantic", "expressive", "dramatic"],
    strengths: ["unforgettable moment", "partner feels special"],
    weaknesses: ["pressure भी हो सकता है"],
    tips: ["partner की personality भी देखें", "intimate moment भी रखें"],
  },
  B: {
    type: "B",
    title: "Romantic Planner",
    emoji: "💕",
    description: "Romantic और thoughtful proposal होगा। Meaningful touches के साथ perfect setting।",
    traits: ["romantic", "thoughtful", "planned", "sweet"],
    strengths: ["balanced", "personal", "memorable"],
    weaknesses: ["overthinking possible"],
    tips: ["perfect तो कुछ नहीं, love matters", "enjoy the moment"],
  },
  C: {
    type: "C",
    title: "Simple Sincere",
    emoji: "❤️",
    description: "Simple पर genuine proposal होगा। Meaning matter करता है, grandeur नहीं।",
    traits: ["simple", "genuine", "meaningful", "humble"],
    strengths: ["authentic", "pressure-free", "intimate"],
    weaknesses: ["कभी कभी too simple लगे"],
    tips: ["अपनी style perfect है", "थोड़ा special touch भी okay"],
  },
  D: {
    type: "D",
    title: "Practical Partner",
    emoji: "🤝",
    description: "No-fuss approach। Proposal formality है, relationship matters।",
    traits: ["practical", "direct", "no-nonsense", "realistic"],
    strengths: ["no pretense", "genuine"],
    weaknesses: ["partner को disappointment हो सकती है"],
    tips: ["partner की expectations समझें", "थोड़ा effort दिखाएं"],
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
