// माफी का स्तर - आप कितने forgiving हैं?
// Forgiveness Style Test

export const questions = [
  {
    id: 1,
    question: "Partner से गलती हो तो?",
    options: [
      { text: "माफ कर देता/देती हूं जल्दी", type: "A" },
      { text: "थोड़ा time लेता/लेती हूं फिर माफ", type: "B" },
      { text: "depends कितनी बड़ी गलती", type: "C" },
      { text: "भूलना मुश्किल है", type: "D" },
    ],
  },
  {
    id: 2,
    question: "झूठ पकड़ा जाए?",
    options: [
      { text: "माफ कर सकता/सकती हूं reason जानकर", type: "A" },
      { text: "Hurt होता/होती हूं पर try करता/करती हूं", type: "B" },
      { text: "बहुत मुश्किल है माफ करना", type: "C" },
      { text: "Trust टूट जाता है", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cheating की माफी?",
    options: [
      { text: "Situation देखकर, possible", type: "A" },
      { text: "बहुत hard पर try", type: "B" },
      { text: "Almost impossible", type: "C" },
      { text: "कभी नहीं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Past mistakes याद रखना?",
    options: [
      { text: "नहीं, माफ किया तो भूल गया", type: "A" },
      { text: "Try करता/करती हूं भूलने की", type: "B" },
      { text: "याद रहती हैं कुछ", type: "C" },
      { text: "सब याद रहता है", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sorry बोलने पर?",
    options: [
      { text: "माफ, आगे बढ़ते हैं", type: "A" },
      { text: "Accept करता/करती हूं, थोड़ा time", type: "B" },
      { text: "Sorry से क्या होता है", type: "C" },
      { text: "Actions चाहिए words नहीं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Second chance देना?",
    options: [
      { text: "हमेशा देता/देती हूं", type: "A" },
      { text: "Usually देता/देती हूं", type: "B" },
      { text: "Depends on mistake", type: "C" },
      { text: "Rarely", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Grudge रखना?",
    options: [
      { text: "नहीं रखता/रखती कभी", type: "A" },
      { text: "Try करता/करती हूं न रखने की", type: "B" },
      { text: "कभी-कभी रह जाता है", type: "C" },
      { text: "रखता/रखती हूं", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Public insult की माफी?",
    options: [
      { text: "हां, अगर truly sorry", type: "A" },
      { text: "Difficult पर possible", type: "B" },
      { text: "Very hard", type: "C" },
      { text: "Never forget", type: "D" },
    ],
  },
  {
    id: 9,
    question: "बार-बार वही गलती?",
    options: [
      { text: "फिर भी try करता/करती हूं", type: "A" },
      { text: "Limit है patience की", type: "B" },
      { text: "2-3 बार तक", type: "C" },
      { text: "एक बार काफी है", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Forgive but not forget?",
    options: [
      { text: "दोनों करता/करती हूं", type: "A" },
      { text: "Forgive करता/करती हूं, forget hard", type: "B" },
      { text: "यही होता है usually", type: "C" },
      { text: "Neither easily", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Family की गलती vs Partner की?",
    options: [
      { text: "दोनों माफ, प्यार है", type: "A" },
      { text: "Family easier, partner hard", type: "B" },
      { text: "Partner easier, family hard", type: "C" },
      { text: "दोनों equally hard", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall forgiveness?",
    options: [
      { text: "बहुत forgiving हूं", type: "A" },
      { text: "Generally forgiving", type: "B" },
      { text: "Selective forgiveness", type: "C" },
      { text: "Not very forgiving", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "महान क्षमाशील",
    emoji: "🕊️",
    description: "आप बहुत forgiving हैं! दिल बड़ा है। माफ करना आपकी strength है। Relationships में ये valuable है।",
    traits: ["forgiving", "compassionate", "understanding", "big-hearted"],
    strengths: ["peace in relationships", "no grudges", "healing"],
    weaknesses: ["कभी-कभी taken advantage"],
    tips: ["boundaries भी रखें", "repeated hurt accept न करें"],
  },
  B: {
    type: "B",
    title: "संतुलित क्षमा",
    emoji: "⚖️",
    description: "आप forgiving हैं पर balanced। Time लेते हैं process करने में। Healthy approach है।",
    traits: ["balanced", "fair", "processing", "reasonable"],
    strengths: ["forgives but aware", "healthy boundaries"],
    weaknesses: ["कभी-कभी लंबा process"],
    tips: ["ऐसे ही balanced रहें"],
  },
  C: {
    type: "C",
    title: "सेलेक्टिव फॉरगिवर",
    emoji: "🤔",
    description: "Forgiveness depends करता है situation पर। कुछ चीज़ें माफ होती हैं, कुछ नहीं।",
    traits: ["selective", "conditional", "protective", "cautious"],
    strengths: ["doesn't forgive blindly"],
    weaknesses: ["may hold grudges", "hard to let go"],
    tips: ["grudges आपको hurt करते हैं", "letting go important है"],
  },
  D: {
    type: "D",
    title: "कठोर न्यायाधीश",
    emoji: "⚖️",
    description: "Forgiveness आपके लिए बहुत hard है। Hurt याद रहता है। ये relationship के लिए challenging है।",
    traits: ["unforgiving", "grudge-holding", "hurt", "protective"],
    strengths: ["doesn't forget lessons"],
    weaknesses: ["bitterness", "relationship strain", "peace affected"],
    tips: ["forgiveness खुद के लिए है", "therapy help कर सकती है", "let go सीखें"],
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
