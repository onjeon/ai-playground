// स्वतंत्रता का स्तर - रिश्ते में freedom कैसी है?
// Freedom in Relationship Test

export const questions = [
  {
    id: 1,
    question: "Partner के अपने friends?",
    options: [
      { text: "जरूरी हैं, encourage करता/करती हूं", type: "A" },
      { text: "ठीक है, उनका circle", type: "B" },
      { text: "कुछ से issue है", type: "C" },
      { text: "हम ही काफी हैं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Partner का alone time?",
    options: [
      { text: "जरूरी है, देता/देती हूं", type: "A" },
      { text: "समझता/समझती हूं, okay", type: "B" },
      { text: "थोड़ा मुश्किल है देना", type: "C" },
      { text: "क्यों alone चाहिए", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Partner की hobbies?",
    options: [
      { text: "support करता/करती हूं पूरी", type: "A" },
      { text: "अच्छा है उनका passion", type: "B" },
      { text: "कभी-कभी time waste लगता है", type: "C" },
      { text: "साथ में ही कुछ करें", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Partner अकेले trip पर जाए?",
    options: [
      { text: "enjoy करे, no problem", type: "A" },
      { text: "ठीक है, trust है", type: "B" },
      { text: "थोड़ा uncomfortable", type: "C" },
      { text: "अकेले क्यों जाना है", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Partner के decisions?",
    options: [
      { text: "उनका right, support करता/करती हूं", type: "A" },
      { text: "discuss करते हैं पर उनकी choice", type: "B" },
      { text: "मेरी राय भी मानें", type: "C" },
      { text: "साथ में ही decide करना है", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Partner की career choices?",
    options: [
      { text: "पूरी freedom और support", type: "A" },
      { text: "discuss पर ultimately उनकी", type: "B" },
      { text: "family पर impact देखना होगा", type: "C" },
      { text: "मिलकर decide करेंगे", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Partner की dressing/appearance?",
    options: [
      { text: "उनकी choice, जो पसंद", type: "A" },
      { text: "mostly okay, कभी opinion", type: "B" },
      { text: "कुछ चीज़ें change चाहता/चाहती हूं", type: "C" },
      { text: "मेरे according होना चाहिए", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Partner की social media?",
    options: [
      { text: "उनकी life, कोई control नहीं", type: "A" },
      { text: "normal है", type: "B" },
      { text: "कुछ posts पर issue", type: "C" },
      { text: "approve करना चाहता/चाहती हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Partner night out करे?",
    options: [
      { text: "enjoy करे, have fun", type: "A" },
      { text: "ठीक है, बस safe रहे", type: "B" },
      { text: "कभी-कभी okay", type: "C" },
      { text: "prefer नहीं करता/करती", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Partner's personal space at home?",
    options: [
      { text: "जरूरी है, respect करता/करती हूं", type: "A" },
      { text: "देता/देती हूं", type: "B" },
      { text: "थोड़ा मुश्किल", type: "C" },
      { text: "सब कुछ साथ में", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Partner work late करे?",
    options: [
      { text: "career important है, okay", type: "A" },
      { text: "समझता/समझती हूं", type: "B" },
      { text: "बार-बार हो तो issue", type: "C" },
      { text: "पसंद नहीं है", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall freedom in relationship?",
    options: [
      { text: "पूरी freedom, trust based", type: "A" },
      { text: "अच्छी freedom है", type: "B" },
      { text: "कुछ restrictions हैं", type: "C" },
      { text: "controlled relationship", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पूर्ण स्वतंत्रता",
    emoji: "🦅",
    description: "आप partner को पूरी freedom देते हैं। Trust based relationship है। Healthy और mature!",
    traits: ["trusting", "liberal", "secure", "mature"],
    strengths: ["partner feels respected", "no suffocation", "individual growth"],
    weaknesses: ["कभी-कभी too hands-off"],
    tips: ["connection भी maintain करें", "great balance है"],
  },
  B: {
    type: "B",
    title: "संतुलित स्वतंत्रता",
    emoji: "⚖️",
    description: "आप healthy balance रखते हैं। Freedom देते हैं पर connection भी है। Ideal approach!",
    traits: ["balanced", "respectful", "trusting", "connected"],
    strengths: ["healthy boundaries", "good balance", "mutual respect"],
    weaknesses: ["कुछ areas में थोड़ा tight"],
    tips: ["ऐसे ही continue करें"],
  },
  C: {
    type: "C",
    title: "सीमित स्वतंत्रता",
    emoji: "🔗",
    description: "Freedom में कुछ restrictions हैं। Partner को थोड़ा confined feel हो सकता है।",
    traits: ["somewhat controlling", "anxious", "protective", "cautious"],
    strengths: ["care करते हैं"],
    weaknesses: ["partner suffocated", "trust issues reflect"],
    tips: ["trust build करें", "control कम करें", "insecurity पर काम करें"],
  },
  D: {
    type: "D",
    title: "नियंत्रित रिश्ता",
    emoji: "🔒",
    description: "Relationship में बहुत control है। ये healthy नहीं है। Partner की freedom respect करें।",
    traits: ["controlling", "possessive", "insecure", "restrictive"],
    strengths: ["awareness हो रही है"],
    weaknesses: ["toxic dynamic", "partner unhappy", "trust broken"],
    tips: ["urgent change जरूरी", "professional help लें", "control छोड़ें"],
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
