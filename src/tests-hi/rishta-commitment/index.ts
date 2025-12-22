// कमिटमेंट स्तर - रिश्ते में आपकी commitment कितनी है?
// Commitment Level Test

export const questions = [
  {
    id: 1,
    question: "Long-term relationship के बारे में?",
    options: [
      { text: "बिल्कुल ready, चाहता/चाहती हूं", type: "A" },
      { text: "सही person मिले तो", type: "B" },
      { text: "अभी sure नहीं", type: "C" },
      { text: "commitment scary है", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Relationship में future planning?",
    options: [
      { text: "साथ में detailed plans", type: "A" },
      { text: "discuss करते हैं", type: "B" },
      { text: "present में ही रहता/रहती हूं", type: "C" },
      { text: "future की नहीं सोचता/सोचती", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Relationship में difficulties आएं?",
    options: [
      { text: "साथ मिलकर face करेंगे", type: "A" },
      { text: "try करूंगा/करूंगी solve करने की", type: "B" },
      { text: "देखता/देखती हूं कितना tough है", type: "C" },
      { text: "exit easier लगता है", type: "D" },
    ],
  },
  {
    id: 4,
    question: "'We' vs 'I' mindset?",
    options: [
      { text: "हम team हैं, we first", type: "A" },
      { text: "mostly we, कभी I", type: "B" },
      { text: "balance करता/करती हूं", type: "C" },
      { text: "I पहले आता है", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Partner के लिए sacrifice?",
    options: [
      { text: "कुछ भी कर सकता/सकती हूं", type: "A" },
      { text: "बड़े sacrifices ready", type: "B" },
      { text: "limit है sacrifice की", type: "C" },
      { text: "sacrifice क्यों करूं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Other options attractive लगें?",
    options: [
      { text: "मेरा focus सिर्फ partner पर", type: "A" },
      { text: "notice तो होता है पर act नहीं", type: "B" },
      { text: "tempting कभी-कभी", type: "C" },
      { text: "options open रखता/रखती हूं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Relationship को public करना?",
    options: [
      { text: "proudly, सबको पता है", type: "A" },
      { text: "close ones को पता है", type: "B" },
      { text: "कुछ लोगों को ही", type: "C" },
      { text: "secret रखता/रखती हूं", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Partner के flaws?",
    options: [
      { text: "accept किए हैं, love करता/करती हूं", type: "A" },
      { text: "work in progress", type: "B" },
      { text: "कुछ irritate करते हैं", type: "C" },
      { text: "deal breaker कई बार", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Distance हो जाए relationship में?",
    options: [
      { text: "fight करूंगा/करूंगी बचाने के लिए", type: "A" },
      { text: "try करूंगा/करूंगी fix करने की", type: "B" },
      { text: "देखा जाएगा", type: "C" },
      { text: "शायद move on", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Life के major decisions में partner?",
    options: [
      { text: "हमेशा involve, equal say", type: "A" },
      { text: "consult करता/करती हूं", type: "B" },
      { text: "inform कर देता/देती हूं", type: "C" },
      { text: "अपना decision अपना", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Relationship की priority?",
    options: [
      { text: "top priority", type: "A" },
      { text: "important priorities में", type: "B" },
      { text: "कई priorities हैं", type: "C" },
      { text: "other things पहले", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Forever का concept?",
    options: [
      { text: "believe करता/करती हूं, चाहता/चाहती हूं", type: "A" },
      { text: "hope करता/करती हूं ऐसा हो", type: "B" },
      { text: "realistic हूं, देखा जाएगा", type: "C" },
      { text: "forever unrealistic है", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पूर्ण समर्पित",
    emoji: "💍",
    description: "आप fully committed हैं! Relationship आपकी priority है और आप इसके लिए कुछ भी कर सकते हैं। True partner material!",
    traits: ["devoted", "loyal", "all-in", "dedicated"],
    strengths: ["strong foundation", "security", "deep bond"],
    weaknesses: ["कभी-कभी over-committed", "lose self"],
    tips: ["self-identity भी maintain करें", "healthy बने रहें"],
  },
  B: {
    type: "B",
    title: "संतुलित प्रतिबद्ध",
    emoji: "💝",
    description: "आप committed हैं पर balanced तरीके से। Relationship important है पर आप खुद को भी नहीं खोते।",
    traits: ["committed", "balanced", "practical", "loving"],
    strengths: ["healthy commitment", "individual identity", "stable relationship"],
    weaknesses: ["कभी-कभी partner को less feel"],
    tips: ["reassurance देते रहें", "balance बनाए रखें"],
  },
  C: {
    type: "C",
    title: "सतर्क साथी",
    emoji: "🤔",
    description: "आप cautious हैं commitment में। Past experiences या fear आपको hold back करता है।",
    traits: ["cautious", "guarded", "hesitant", "self-protective"],
    strengths: ["don't rush", "protect yourself"],
    weaknesses: ["miss deep connection", "partner insecure"],
    tips: ["fears पर काम करें", "therapy consider करें", "open up slowly"],
  },
  D: {
    type: "D",
    title: "स्वतंत्र प्रेमी",
    emoji: "🦋",
    description: "Commitment आपके लिए challenging है। Freedom ज्यादा important है। ये okay है पर honest रहें partner के साथ।",
    traits: ["commitment-phobic", "freedom-loving", "independent", "non-attached"],
    strengths: ["know yourself", "don't fake"],
    weaknesses: ["hurt others", "miss deep connections", "avoidance"],
    tips: ["honest रहें about what you want", "explore why commitment scary है"],
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
