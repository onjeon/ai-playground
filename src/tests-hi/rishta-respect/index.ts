// सम्मान स्तर - रिश्ते में respect कैसा है?
// Respect in Relationship Test

export const questions = [
  {
    id: 1,
    question: "Partner की राय पर?",
    options: [
      { text: "हमेशा value करता/करती हूं", type: "A" },
      { text: "mostly consider करता/करती हूं", type: "B" },
      { text: "कभी-कभी ignore", type: "C" },
      { text: "मेरी राय ज्यादा important", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Partner के dreams और goals?",
    options: [
      { text: "पूरी support करता/करती हूं", type: "A" },
      { text: "encourage करता/करती हूं", type: "B" },
      { text: "neutral हूं", type: "C" },
      { text: "practical होने को कहता/कहती हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Partner की boundaries?",
    options: [
      { text: "पूरी respect", type: "A" },
      { text: "mostly respect", type: "B" },
      { text: "sometimes push", type: "C" },
      { text: "boundaries क्या होती हैं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Public में partner के बारे में?",
    options: [
      { text: "हमेशा respectfully बोलता/बोलती हूं", type: "A" },
      { text: "positive ही बोलता/बोलती हूं", type: "B" },
      { text: "कभी-कभी complaints share", type: "C" },
      { text: "जो है सो बोलता/बोलती हूं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Partner की privacy?",
    options: [
      { text: "पूरी respect, कभी check नहीं", type: "A" },
      { text: "trust करता/करती हूं mostly", type: "B" },
      { text: "कभी-कभी curious", type: "C" },
      { text: "सब कुछ share होना चाहिए", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Partner की individuality?",
    options: [
      { text: "celebrate करता/करती हूं", type: "A" },
      { text: "respect करता/करती हूं", type: "B" },
      { text: "कुछ चीज़ें change चाहता/चाहती हूं", type: "C" },
      { text: "मेरे according होना चाहिए", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Disagreement में?",
    options: [
      { text: "respectfully discuss", type: "A" },
      { text: "try करता/करती हूं calm रहने की", type: "B" },
      { text: "कभी-कभी harsh हो जाता/जाती हूं", type: "C" },
      { text: "जीतना है बस", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Partner के friends/family?",
    options: [
      { text: "respect करता/करती हूं fully", type: "A" },
      { text: "polite रहता/रहती हूं", type: "B" },
      { text: "कुछ से issue है", type: "C" },
      { text: "उनकी life से दूर रहता/रहती हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Partner के decisions?",
    options: [
      { text: "trust करता/करती हूं पूरा", type: "A" },
      { text: "mostly supportive", type: "B" },
      { text: "कभी-कभी question", type: "C" },
      { text: "अपना input देता/देती हूं हर बार", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Partner की feelings?",
    options: [
      { text: "हमेशा validate करता/करती हूं", type: "A" },
      { text: "try करता/करती हूं समझने की", type: "B" },
      { text: "कभी-कभी dismiss", type: "C" },
      { text: "overreact करते हैं वो", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Partner का time और space?",
    options: [
      { text: "पूरा respect", type: "A" },
      { text: "देता/देती हूं जब need हो", type: "B" },
      { text: "थोड़ा मुश्किल है देना", type: "C" },
      { text: "हमेशा साथ होना चाहिए", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall respect level?",
    options: [
      { text: "बहुत high, foundation है", type: "A" },
      { text: "अच्छा है", type: "B" },
      { text: "work in progress", type: "C" },
      { text: "improve करना है", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पूर्ण सम्मान",
    emoji: "👑",
    description: "आप partner को पूरा respect देते हैं! Boundaries, feelings, individuality - सब कुछ। Ideal partner!",
    traits: ["respectful", "honoring", "supportive", "mature"],
    strengths: ["healthy relationship", "trust", "partner feels valued"],
    weaknesses: ["कभी-कभी too accommodating"],
    tips: ["अपनी needs भी बताएं", "mutual respect ensure करें"],
  },
  B: {
    type: "B",
    title: "अच्छा सम्मान",
    emoji: "🤝",
    description: "आप mostly respectful हैं। कुछ areas में improvement scope है पर overall अच्छा है।",
    traits: ["mostly respectful", "aware", "trying", "decent"],
    strengths: ["good foundation", "willing to improve"],
    weaknesses: ["कुछ blind spots"],
    tips: ["areas identify करें जहां और respect दे सकते हैं"],
  },
  C: {
    type: "C",
    title: "सम्मान में सुधार जरूरी",
    emoji: "⚠️",
    description: "Respect में कुछ issues हैं। Partner की feelings और boundaries को और value करने की जरूरत।",
    traits: ["sometimes disrespectful", "unaware", "work needed", "improving"],
    strengths: ["relationship still there"],
    weaknesses: ["hurt करते हैं कभी", "boundaries cross"],
    tips: ["awareness बढ़ाएं", "partner से feedback लें", "change करें"],
  },
  D: {
    type: "D",
    title: "सम्मान पर काम जरूरी",
    emoji: "🚨",
    description: "Respect की serious कमी है। ये relationship के लिए toxic है। Urgent change जरूरी।",
    traits: ["disrespectful", "controlling", "dismissive", "problematic"],
    strengths: ["awareness हो रही है"],
    weaknesses: ["partner hurt", "unhealthy dynamic", "trust broken"],
    tips: ["professional help लें", "self-reflect करें", "change जरूरी है"],
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
