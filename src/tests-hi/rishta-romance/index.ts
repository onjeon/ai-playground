// रोमांस स्टाइल - आप कितने romantic हैं?
// Romance Style Test

export const questions = [
  {
    id: 1,
    question: "Romantic gestures के बारे में?",
    options: [
      { text: "बहुत करता/करती हूं, regularly", type: "A" },
      { text: "special occasions पर जरूर", type: "B" },
      { text: "कभी-कभी, जब याद आए", type: "C" },
      { text: "romance मेरी चीज़ नहीं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Perfect date?",
    options: [
      { text: "candlelight dinner with flowers", type: "A" },
      { text: "nice outing together", type: "B" },
      { text: "simple, comfortable plan", type: "C" },
      { text: "date की क्या जरूरत", type: "D" },
    ],
  },
  {
    id: 3,
    question: "'I love you' बोलना?",
    options: [
      { text: "हर दिन, multiple times", type: "A" },
      { text: "regularly", type: "B" },
      { text: "कभी-कभी", type: "C" },
      { text: "actions से पता चलता है", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Surprises देना?",
    options: [
      { text: "love करता/करती हूं plan करना", type: "A" },
      { text: "कभी-कभी देता/देती हूं", type: "B" },
      { text: "बहुत कम", type: "C" },
      { text: "surprises में believe नहीं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Physical affection?",
    options: [
      { text: "बहुत ज्यादा, हमेशा touch", type: "A" },
      { text: "regularly, appropriate", type: "B" },
      { text: "कम पर meaningful", type: "C" },
      { text: "public में नहीं, private में भी कम", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Romantic movies/songs?",
    options: [
      { text: "love करता/करती हूं, emotional हो जाता/जाती हूं", type: "A" },
      { text: "enjoy करता/करती हूं", type: "B" },
      { text: "ठीक हैं, not my favorite", type: "C" },
      { text: "boring लगते हैं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Anniversary celebrations?",
    options: [
      { text: "grand celebration हर साल", type: "A" },
      { text: "कुछ special जरूर", type: "B" },
      { text: "simple acknowledgment", type: "C" },
      { text: "भूल भी जाता/जाती हूं कभी", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Love letters/messages?",
    options: [
      { text: "लिखता/लिखती हूं, express करता/करती हूं", type: "A" },
      { text: "कभी-कभी sweet messages", type: "B" },
      { text: "verbal ज्यादा, written कम", type: "C" },
      { text: "practical बातें ही mostly", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Partner के लिए sacrifice?",
    options: [
      { text: "कुछ भी, love में सब fair", type: "A" },
      { text: "reasonable sacrifices", type: "B" },
      { text: "सोचना पड़ता है", type: "C" },
      { text: "practical approach", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Public display of affection?",
    options: [
      { text: "comfortable हूं, show करता/करती हूं", type: "A" },
      { text: "subtle PDA okay", type: "B" },
      { text: "private में ही", type: "C" },
      { text: "not comfortable", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Valentine's Day?",
    options: [
      { text: "most important day!", type: "A" },
      { text: "celebrate करते हैं nicely", type: "B" },
      { text: "commercial है पर थोड़ा कुछ", type: "C" },
      { text: "just another day", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Romance की definition?",
    options: [
      { text: "grand gestures, expressions, passion", type: "A" },
      { text: "love और care, कुछ gestures", type: "B" },
      { text: "being there, practical love", type: "C" },
      { text: "overrated concept", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पक्का रोमांटिक",
    emoji: "💘",
    description: "आप born romantic हैं! Grand gestures, expressions, passion - सब कुछ। Partner lucky है आपके साथ।",
    traits: ["romantic", "passionate", "expressive", "affectionate"],
    strengths: ["partner feels loved", "excitement in relationship", "memorable moments"],
    weaknesses: ["कभी-कभी too much", "expectations high"],
    tips: ["partner की style भी देखें", "balance रखें"],
  },
  B: {
    type: "B",
    title: "संतुलित प्रेमी",
    emoji: "💕",
    description: "आप balanced romantic हैं। जब जरूरी हो romance, पर over the top नहीं। Perfect mix!",
    traits: ["balanced", "thoughtful", "appropriate", "loving"],
    strengths: ["healthy romance", "not overwhelming", "meaningful gestures"],
    weaknesses: ["कभी-कभी more expected"],
    tips: ["कभी-कभी surprise करें extra"],
  },
  C: {
    type: "C",
    title: "व्यावहारिक प्रेमी",
    emoji: "🤝",
    description: "Romance आपकी style नहीं। आप practical ways से love show करते हैं। ये भी valid है!",
    traits: ["practical", "realistic", "subtle", "action-oriented"],
    strengths: ["genuine", "no pretense", "reliable"],
    weaknesses: ["partner को romance miss हो सकता है"],
    tips: ["कभी-कभी romantic gestures try करें", "partner की needs समझें"],
  },
  D: {
    type: "D",
    title: "तर्कसंगत साथी",
    emoji: "🧠",
    description: "Romance आपको overrated लगता है। Logic और practicality आपकी language है।",
    traits: ["logical", "unromantic", "practical", "matter-of-fact"],
    strengths: ["realistic", "no drama"],
    weaknesses: ["partner emotionally unfulfilled", "relationship dry लग सकता है"],
    tips: ["partner की emotional needs समझें", "थोड़ा effort करें romance में"],
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
