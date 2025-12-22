// सालगिरह - Anniversary celebration style
// Anniversary Style Test

export const questions = [
  {
    id: 1,
    question: "Anniversary कितनी important?",
    options: [
      { text: "साल का सबसे special day", type: "A" },
      { text: "बहुत important", type: "B" },
      { text: "ठीक है, celebrate करते हैं", type: "C" },
      { text: "Just another day", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Celebration style?",
    options: [
      { text: "Grand party/trip", type: "A" },
      { text: "Romantic dinner date", type: "B" },
      { text: "Simple पर sweet", type: "C" },
      { text: "Normal day जैसा", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Gift giving?",
    options: [
      { text: "Expensive, memorable gift", type: "A" },
      { text: "Thoughtful, meaningful", type: "B" },
      { text: "Something nice", type: "C" },
      { text: "Gifts जरूरी नहीं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "याद रखना date?",
    options: [
      { text: "कभी नहीं भूलता/भूलती", type: "A" },
      { text: "Calendar में mark", type: "B" },
      { text: "Usually याद रहता है", type: "C" },
      { text: "भूल जाता/जाती हूं कभी-कभी", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Social media wish?",
    options: [
      { text: "Long post with pictures", type: "A" },
      { text: "Sweet post जरूर", type: "B" },
      { text: "Maybe a story", type: "C" },
      { text: "Private रखते हैं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "हर साल celebrate?",
    options: [
      { text: "बिल्कुल, miss नहीं करते", type: "A" },
      { text: "हां, try करते हैं", type: "B" },
      { text: "Major ones", type: "C" },
      { text: "जब याद हो", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Monthly anniversaries?",
    options: [
      { text: "हां, celebrate!", type: "A" },
      { text: "पहले साल में किया था", type: "B" },
      { text: "ज्यादा नहीं", type: "C" },
      { text: "Too much है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Memory of first anniversary?",
    options: [
      { text: "बहुत special था, याद है", type: "A" },
      { text: "याद है, अच्छा था", type: "B" },
      { text: "थोड़ा याद है", type: "C" },
      { text: "भूल गया/गई", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Recreate first date?",
    options: [
      { text: "Great idea, करते हैं", type: "A" },
      { text: "Cute होगा", type: "B" },
      { text: "जरूरी नहीं", type: "C" },
      { text: "Past में क्या रखा", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Budget for anniversary?",
    options: [
      { text: "No limits, special day", type: "A" },
      { text: "अच्छा budget रखते हैं", type: "B" },
      { text: "Reasonable", type: "C" },
      { text: "पैसे बचाना better", type: "D" },
    ],
  },
  {
    id: 11,
    question: "कौन ज्यादा remember करता है?",
    options: [
      { text: "दोनों equally", type: "A" },
      { text: "मैं याद दिला देता/देती हूं", type: "B" },
      { text: "Partner याद करता है", type: "C" },
      { text: "दोनों भूल जाते हैं", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall anniversary importance?",
    options: [
      { text: "Relationship का celebration", type: "A" },
      { text: "Milestone mark करना", type: "B" },
      { text: "Nice to celebrate", type: "C" },
      { text: "Overrated है", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anniversary Enthusiast",
    emoji: "🎊",
    description: "Anniversary आपके लिए super special है! Grand celebrations, gifts, और memories। Partner lucky है!",
    traits: ["celebratory", "romantic", "memorable", "expressive"],
    strengths: ["partner feels valued", "creates memories"],
    weaknesses: ["pressure to top every year"],
    tips: ["quality > expense", "intimacy भी important"],
  },
  B: {
    type: "B",
    title: "Romantic Celebrator",
    emoji: "💑",
    description: "Anniversary important है और आप thoughtfully celebrate करते हैं। Perfect balance!",
    traits: ["romantic", "thoughtful", "balanced", "loving"],
    strengths: ["meaningful celebrations", "consistent"],
    weaknesses: ["कभी-कभी overthink"],
    tips: ["keep it up!", "spontaneity भी try करें"],
  },
  C: {
    type: "C",
    title: "Casual Celebrator",
    emoji: "🙂",
    description: "Anniversary acknowledge करते हैं पर low-key। Simple and sweet approach।",
    traits: ["casual", "simple", "laid-back", "practical"],
    strengths: ["no pressure", "genuine"],
    weaknesses: ["partner को more चाहिए maybe"],
    tips: ["partner की expectations check करें", "surprise कभी-कभी"],
  },
  D: {
    type: "D",
    title: "Everyday Lover",
    emoji: "🤷",
    description: "Anniversary just another day। Everyday love matters, not specific dates।",
    traits: ["practical", "everyday", "non-celebratory", "consistent"],
    strengths: ["consistent love"],
    weaknesses: ["partner disappointed हो सकता है"],
    tips: ["partner की feelings consider करें", "छोटा gesture भी बड़ा लगता है"],
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
