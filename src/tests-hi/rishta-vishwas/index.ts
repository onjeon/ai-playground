// विश्वास का स्तर - रिश्ते में आपका trust level
// Trust Level Test

export const questions = [
  {
    id: 1,
    question: "पार्टनर का फोन देखने के बारे में?",
    options: [
      { text: "कोई जरूरत नहीं, पूरा trust", type: "A" },
      { text: "कभी-कभी curiosity होती है", type: "B" },
      { text: "देखने का मन करता है", type: "C" },
      { text: "देखना चाहता/चाहती हूं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "पार्टनर opposite gender के friend से मिले तो?",
    options: [
      { text: "कोई issue नहीं, trust है", type: "A" },
      { text: "ठीक है पर जानना चाहूंगा/चाहूंगी", type: "B" },
      { text: "थोड़ी uncomfortable feeling", type: "C" },
      { text: "मुझे problem है इससे", type: "D" },
    ],
  },
  {
    id: 3,
    question: "पार्टनर late आए office से?",
    options: [
      { text: "काम होगा, कोई doubt नहीं", type: "A" },
      { text: "पूछूंगा/पूछूंगी casually", type: "B" },
      { text: "थोड़ा suspicious होऊंगा/होऊंगी", type: "C" },
      { text: "शक होगा, proof चाहिए", type: "D" },
    ],
  },
  {
    id: 4,
    question: "पार्टनर की बातों पर?",
    options: [
      { text: "पूरा विश्वास, कभी doubt नहीं", type: "A" },
      { text: "mostly विश्वास", type: "B" },
      { text: "कभी-कभी शक होता है", type: "C" },
      { text: "verify करना पड़ता है", type: "D" },
    ],
  },
  {
    id: 5,
    question: "पार्टनर trip पर जाए अकेले?",
    options: [
      { text: "enjoy करे, मुझे कोई problem नहीं", type: "A" },
      { text: "ठीक है, बस touch में रहे", type: "B" },
      { text: "थोड़ा uncomfortable लगेगा", type: "C" },
      { text: "allow नहीं करूंगा/करूंगी", type: "D" },
    ],
  },
  {
    id: 6,
    question: "पार्टनर के secrets?",
    options: [
      { text: "सब कुछ share करते हैं", type: "A" },
      { text: "ज्यादातर share", type: "B" },
      { text: "कुछ छुपाते हैं लगता है", type: "C" },
      { text: "बहुत कुछ छुपाते हैं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Social media पर पार्टनर?",
    options: [
      { text: "कोई tracking नहीं", type: "A" },
      { text: "normal interest रखता/रखती हूं", type: "B" },
      { text: "regularly check करता/करती हूं", type: "C" },
      { text: "हर activity monitor करता/करती हूं", type: "D" },
    ],
  },
  {
    id: 8,
    question: "पार्टनर के ex के बारे में?",
    options: [
      { text: "past है, कोई issue नहीं", type: "A" },
      { text: "know करना ठीक है", type: "B" },
      { text: "थोड़ा bothered करता है", type: "C" },
      { text: "बहुत problem है", type: "D" },
    ],
  },
  {
    id: 9,
    question: "पैसों के मामले में trust?",
    options: [
      { text: "पूरा trust, joint handling", type: "A" },
      { text: "mostly trust पर aware रहता/रहती हूं", type: "B" },
      { text: "separate ही better", type: "C" },
      { text: "trust नहीं, खुद handle", type: "D" },
    ],
  },
  {
    id: 10,
    question: "पार्टनर की promises?",
    options: [
      { text: "हमेशा निभाते हैं", type: "A" },
      { text: "mostly निभाते हैं", type: "B" },
      { text: "कभी-कभी तोड़ते हैं", type: "C" },
      { text: "भरोसा नहीं रहता", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Important decisions में?",
    options: [
      { text: "पूरा involve करते हैं दोनों", type: "A" },
      { text: "mostly साथ में", type: "B" },
      { text: "कभी-कभी बिना बताए", type: "C" },
      { text: "अकेले ही decide", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall trust level?",
    options: [
      { text: "100%, blind trust", type: "A" },
      { text: "80-90%, strong trust", type: "B" },
      { text: "50-60%, trust issues", type: "C" },
      { text: "कम है, problems हैं", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "अटूट विश्वास",
    emoji: "🔒",
    description: "आपके रिश्ते में पूरा trust है! यह foundation बहुत strong है। Healthy और secure relationship है आपकी।",
    traits: ["fully trusting", "secure", "confident", "open"],
    strengths: ["strong foundation", "no insecurities", "peaceful relationship", "freedom"],
    weaknesses: ["कभी-कभी blind trust risky"],
    tips: ["trust बनाए रखें", "transparency जारी रखें", "boundaries भी important हैं"],
  },
  B: {
    type: "B",
    title: "अच्छा विश्वास",
    emoji: "🤝",
    description: "आपके रिश्ते में healthy trust है। Minor insecurities हो सकती हैं पर overall strong है।",
    traits: ["good trust", "realistic", "communicative", "aware"],
    strengths: ["balanced approach", "healthy boundaries", "open communication"],
    weaknesses: ["occasional doubts"],
    tips: ["communication और बेहतर करें", "insecurities address करें"],
  },
  C: {
    type: "C",
    title: "Trust में कमी",
    emoji: "🤔",
    description: "आपके रिश्ते में trust issues हैं। Past experiences या current behavior इसका reason हो सकता है।",
    traits: ["trust issues", "suspicious", "insecure", "watchful"],
    strengths: ["aware हैं कि issues हैं"],
    weaknesses: ["stress", "conflicts", "lack of peace"],
    tips: ["root cause पता करें", "openly discuss करें", "professional help consider करें"],
  },
  D: {
    type: "D",
    title: "Trust crisis",
    emoji: "⚠️",
    description: "Trust में serious problem है। Relationship healthy नहीं है इस state में।",
    traits: ["no trust", "very insecure", "controlling", "anxious"],
    strengths: ["issues पता हैं"],
    weaknesses: ["toxic pattern", "unhappiness", "no peace"],
    tips: ["urgent attention चाहिए", "counseling जरूरी", "evaluate relationship"],
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
