// दोस्ती का प्रकार - आप कैसे दोस्त हैं?
// Friendship Type Test

export const questions = [
  {
    id: 1,
    question: "दोस्त के लिए कितना time निकालते हैं?",
    options: [
      { text: "हमेशा available, 24/7", type: "A" },
      { text: "regularly मिलते हैं", type: "B" },
      { text: "जब possible हो", type: "C" },
      { text: "बहुत कम, busy life", type: "D" },
    ],
  },
  {
    id: 2,
    question: "दोस्त की problem में?",
    options: [
      { text: "तुरंत पहुंच जाता/जाती हूं", type: "A" },
      { text: "पूरी help करता/करती हूं", type: "B" },
      { text: "advice देता/देती हूं", type: "C" },
      { text: "moral support देता/देती हूं distance से", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Secrets sharing?",
    options: [
      { text: "सब कुछ share", type: "A" },
      { text: "important बातें share", type: "B" },
      { text: "selected बातें ही", type: "C" },
      { text: "बहुत कम share", type: "D" },
    ],
  },
  {
    id: 4,
    question: "दोस्ती में honesty?",
    options: [
      { text: "100% honest, कड़वी बात भी", type: "A" },
      { text: "honest पर diplomatically", type: "B" },
      { text: "कभी-कभी avoid करते हैं", type: "C" },
      { text: "जो सुनना चाहे वो बोलते हैं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Group में आप?",
    options: [
      { text: "सबको जोड़ने वाला/वाली", type: "A" },
      { text: "active participant", type: "B" },
      { text: "कुछ close दोस्तों के साथ", type: "C" },
      { text: "observer ज्यादा", type: "D" },
    ],
  },
  {
    id: 6,
    question: "पुराने दोस्तों के साथ?",
    options: [
      { text: "हमेशा connected रहते हैं", type: "A" },
      { text: "touch में रहने की कोशिश", type: "B" },
      { text: "कभी-कभी याद आते हैं", type: "C" },
      { text: "life move on हो गई", type: "D" },
    ],
  },
  {
    id: 7,
    question: "नए दोस्त बनाना?",
    options: [
      { text: "आसान है, open हूं", type: "A" },
      { text: "थोड़ा time लगता है", type: "B" },
      { text: "selective हूं", type: "C" },
      { text: "मुश्किल है, introvert हूं", type: "D" },
    ],
  },
  {
    id: 8,
    question: "दोस्त के साथ झगड़ा हो?",
    options: [
      { text: "तुरंत solve करते हैं", type: "A" },
      { text: "थोड़ा time देकर बात", type: "B" },
      { text: "ego आ जाता है कभी-कभी", type: "C" },
      { text: "दूरी बन जाती है", type: "D" },
    ],
  },
  {
    id: 9,
    question: "दोस्त की success पर?",
    options: [
      { text: "genuinely happy, celebrate", type: "A" },
      { text: "खुश होते हैं, support", type: "B" },
      { text: "खुश हूं पर थोड़ा compare भी", type: "C" },
      { text: "jealousy feel होती है कभी", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Long distance friendship?",
    options: [
      { text: "distance मायने नहीं रखती", type: "A" },
      { text: "effort से maintain", type: "B" },
      { text: "difficult होता है", type: "C" },
      { text: "slowly fade हो जाती है", type: "D" },
    ],
  },
  {
    id: 11,
    question: "दोस्त को कुछ बुरा कहना हो?",
    options: [
      { text: "प्यार से सच बोलते हैं", type: "A" },
      { text: "carefully approach करते हैं", type: "B" },
      { text: "avoid करते हैं अक्सर", type: "C" },
      { text: "नहीं बोलते, उनकी life", type: "D" },
    ],
  },
  {
    id: 12,
    question: "दोस्ती में invest?",
    options: [
      { text: "बहुत ज्यादा, priority है", type: "A" },
      { text: "अच्छा खासा", type: "B" },
      { text: "जितना हो सके", type: "C" },
      { text: "limited, other priorities", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "सच्चा यार",
    emoji: "🤗",
    description: "आप perfect friend हैं! Loyal, caring और हमेशा available। दोस्त आपके लिए family जैसे हैं।",
    traits: ["loyal", "caring", "available", "generous"],
    strengths: ["deep bonds", "trusted friend", "emotional support"],
    weaknesses: ["कभी-कभी overinvested", "खुद को neglect"],
    tips: ["balance रखें", "boundaries भी जरूरी"],
  },
  B: {
    type: "B",
    title: "भरोसेमंद साथी",
    emoji: "🤝",
    description: "आप reliable और balanced friend हैं। Friends को priority देते हैं पर healthy boundaries भी रखते हैं।",
    traits: ["reliable", "balanced", "supportive", "mature"],
    strengths: ["healthy friendships", "dependable", "good listener"],
    weaknesses: ["कभी-कभी busy हो जाते हैं"],
    tips: ["friends के लिए time निकालते रहें"],
  },
  C: {
    type: "C",
    title: "चुनिंदा मित्र",
    emoji: "🎯",
    description: "आप selective हैं friendships में। Quality over quantity। कुछ close friends हैं जो matter करते हैं।",
    traits: ["selective", "private", "quality-focused", "thoughtful"],
    strengths: ["deep few friendships", "less drama"],
    weaknesses: ["limited social circle", "miss out कभी-कभी"],
    tips: ["new connections के लिए open रहें", "old friends को value करें"],
  },
  D: {
    type: "D",
    title: "स्वतंत्र आत्मा",
    emoji: "🦅",
    description: "आप independent हैं और friendships में ज्यादा invest नहीं करते। Self-sufficient हैं।",
    traits: ["independent", "self-reliant", "distant", "private"],
    strengths: ["self-sufficient", "no dependency"],
    weaknesses: ["lonely कभी-कभी", "missing support system"],
    tips: ["connections की value समझें", "थोड़ा open up करें"],
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
