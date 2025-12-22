// जलन का स्तर - आप कितने jealous हैं?
// Jealousy Level Test

export const questions = [
  {
    id: 1,
    question: "Partner opposite gender से बात करे?",
    options: [
      { text: "कोई problem नहीं, trust है", type: "A" },
      { text: "ठीक है, normal है", type: "B" },
      { text: "थोड़ा uncomfortable", type: "C" },
      { text: "बहुत problem है", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Partner का ex का mention?",
    options: [
      { text: "past है, okay", type: "A" },
      { text: "सुनता/सुनती हूं, थोड़ा odd", type: "B" },
      { text: "uncomfortable करता है", type: "C" },
      { text: "सुनना नहीं है कुछ", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Partner को कोई attractive लगे?",
    options: [
      { text: "normal है, human nature", type: "A" },
      { text: "थोड़ा weird लगता है", type: "B" },
      { text: "hurt करता है", type: "C" },
      { text: "बर्दाश्त नहीं होता", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Partner late reply करे text का?",
    options: [
      { text: "busy होंगे, कोई issue नहीं", type: "A" },
      { text: "ठीक है, पूछ लूंगा/लूंगी बाद में", type: "B" },
      { text: "थोड़ा wonder करता/करती हूं क्यों", type: "C" },
      { text: "suspicious हो जाता/जाती हूं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Partner friends के साथ बाहर जाए?",
    options: [
      { text: "enjoy करे, I trust", type: "A" },
      { text: "ठीक है, बाद में बात करेंगे", type: "B" },
      { text: "थोड़ा FOMO/concern", type: "C" },
      { text: "constantly check करता/करती हूं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Partner को कोई flirt करे?",
    options: [
      { text: "partner handle करेगा/करेगी, trust", type: "A" },
      { text: "देखता/देखती हूं reaction", type: "B" },
      { text: "uncomfortable हूं", type: "C" },
      { text: "confront करूंगा/करूंगी", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Partner का phone check करना?",
    options: [
      { text: "कभी नहीं, जरूरत नहीं", type: "A" },
      { text: "नहीं करता/करती, पर tempted कभी", type: "B" },
      { text: "कभी-कभी किया है", type: "C" },
      { text: "regularly check करता/करती हूं", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Partner किसी की तारीफ करे?",
    options: [
      { text: "okay है, appreciation है", type: "A" },
      { text: "depends क्या तारीफ", type: "B" },
      { text: "थोड़ा uncomfortable", type: "C" },
      { text: "compare करते हैं मुझसे", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Partner's social media activity?",
    options: [
      { text: "उनकी life, कोई issue नहीं", type: "A" },
      { text: "normal interest", type: "B" },
      { text: "ध्यान रखता/रखती हूं", type: "C" },
      { text: "closely monitor", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Partner work पर close colleague से?",
    options: [
      { text: "professional है, fine", type: "A" },
      { text: "थोड़ा aware रहता/रहती हूं", type: "B" },
      { text: "uncomfortable करता है", type: "C" },
      { text: "threat लगता है", type: "D" },
    ],
  },
  {
    id: 11,
    question: "कोई partner को message करे रात को?",
    options: [
      { text: "urgent होगा, no issue", type: "A" },
      { text: "पूछूंगा/पूछूंगी casually", type: "B" },
      { text: "suspicious लगता है", type: "C" },
      { text: "रात को कौन message करता है", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall jealousy level?",
    options: [
      { text: "बिल्कुल नहीं, secure हूं", type: "A" },
      { text: "बहुत कम, manageable", type: "B" },
      { text: "medium, कभी-कभी", type: "C" },
      { text: "high, struggle है", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पूर्ण विश्वासी",
    emoji: "😌",
    description: "आप secure और trusting हैं। Jealousy आपको affect नहीं करती। Healthy और mature approach!",
    traits: ["secure", "trusting", "confident", "mature"],
    strengths: ["peaceful relationship", "no unnecessary drama", "freedom for both"],
    weaknesses: ["कभी-कभी too trusting"],
    tips: ["awareness रखें पर paranoid नहीं", "great job!"],
  },
  B: {
    type: "B",
    title: "सामान्य स्तर",
    emoji: "🙂",
    description: "Jealousy normal level पर है। कभी-कभी feel होती है पर control में। Healthy है।",
    traits: ["mostly secure", "aware", "balanced", "normal"],
    strengths: ["don't overreact", "communicate when concerned"],
    weaknesses: ["occasional insecurity"],
    tips: ["communicate openly", "trust बढ़ाएं"],
  },
  C: {
    type: "C",
    title: "जलन की समस्या",
    emoji: "😟",
    description: "Jealousy कुछ ज्यादा है। Insecurity affect कर रही है relationship को। काम करना होगा।",
    traits: ["insecure", "jealous", "worried", "possessive"],
    strengths: ["aware हैं issue का"],
    weaknesses: ["partner uncomfortable", "trust issues", "conflict"],
    tips: ["root cause find करें", "insecurity पर काम करें", "therapy consider करें"],
  },
  D: {
    type: "D",
    title: "गंभीर जलन",
    emoji: "🚨",
    description: "Jealousy extreme level पर है। ये toxic है relationship के लिए। Professional help लें।",
    traits: ["extremely jealous", "controlling", "insecure", "toxic"],
    strengths: ["aware हो रहे हैं"],
    weaknesses: ["partner suffocated", "relationship at risk", "trust broken"],
    tips: ["urgent help जरूरी", "therapy लें", "behavior change करें"],
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
