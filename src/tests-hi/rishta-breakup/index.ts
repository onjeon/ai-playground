// ब्रेकअप स्टाइल - आप breakup कैसे handle करते हैं?
// Breakup Handling Style Test

export const questions = [
  {
    id: 1,
    question: "Breakup होने पर पहला reaction?",
    options: [
      { text: "बहुत रोना, emotional breakdown", type: "A" },
      { text: "Process करना, sad होना", type: "B" },
      { text: "Busy रखना खुद को", type: "C" },
      { text: "Okay, move on", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ex के बारे में सोचना?",
    options: [
      { text: "दिन-रात, obsess करना", type: "A" },
      { text: "Initially बहुत, फिर कम", type: "B" },
      { text: "Try करना भूलने की", type: "C" },
      { text: "जल्दी भूल जाते हैं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Healing time कितना?",
    options: [
      { text: "बहुत लंबा, months/years", type: "A" },
      { text: "कुछ हफ्ते/months", type: "B" },
      { text: "जल्दी ठीक हो जाता/जाती हूं", type: "C" },
      { text: "Time waste नहीं करता/करती", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ex का number/photos?",
    options: [
      { text: "रखता/रखती हूं, delete नहीं होता", type: "A" },
      { text: "थोड़े time बाद delete", type: "B" },
      { text: "तुरंत delete", type: "C" },
      { text: "पहले से ही कम attachment", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Friends से बात?",
    options: [
      { text: "बहुत vent करता/करती हूं", type: "A" },
      { text: "Share करता/करती हूं support के लिए", type: "B" },
      { text: "कुछ ही बताता/बताती हूं", type: "C" },
      { text: "Private रखता/रखती हूं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Rebound relationship?",
    options: [
      { text: "नहीं, heal पहले", type: "A" },
      { text: "Avoid करता/करती हूं usually", type: "B" },
      { text: "कभी-कभी हो जाता है", type: "C" },
      { text: "Why not, distraction अच्छा है", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ex को stalk करना social media पर?",
    options: [
      { text: "हां, बहुत", type: "A" },
      { text: "Initially थोड़ा", type: "B" },
      { text: "Try करता/करती हूं avoid", type: "C" },
      { text: "Block कर देता/देती हूं", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Closure की जरूरत?",
    options: [
      { text: "बहुत जरूरी, बिना नहीं हो सकता", type: "A" },
      { text: "अच्छा होता पर without भी manage", type: "B" },
      { text: "Nice to have, not must", type: "C" },
      { text: "Closure overrated है", type: "D" },
    ],
  },
  {
    id: 9,
    question: "खुद को blame करना?",
    options: [
      { text: "बहुत, सब मेरी गलती लगती है", type: "A" },
      { text: "थोड़ा, फिर realize", type: "B" },
      { text: "दोनों की responsibility", type: "C" },
      { text: "उनकी गलती थी", type: "D" },
    ],
  },
  {
    id: 10,
    question: "New relationship में जाना?",
    options: [
      { text: "बहुत time लगता है ready होने में", type: "A" },
      { text: "Heal होने के बाद", type: "B" },
      { text: "जब अच्छा लगे", type: "C" },
      { text: "जल्दी move on", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sad songs सुनना?",
    options: [
      { text: "बहुत, connection लगता है", type: "A" },
      { text: "कुछ दिन", type: "B" },
      { text: "Happy songs prefer", type: "C" },
      { text: "Music से फर्क नहीं पड़ता", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall breakup handling?",
    options: [
      { text: "बहुत hard, devastated", type: "A" },
      { text: "Painful पर manage", type: "B" },
      { text: "Not easy पर okay", type: "C" },
      { text: "Handle कर लेता/लेती हूं", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "गहरा घाव",
    emoji: "💔",
    description: "Breakup आपके लिए बहुत painful है। Deep feelings वाले हैं आप। Heal होने में time लगता है।",
    traits: ["deeply emotional", "attached", "sensitive", "loving"],
    strengths: ["capacity to love deeply"],
    weaknesses: ["hard to move on", "prolonged pain"],
    tips: ["professional help consider करें", "self-care जरूरी", "support system बनाएं"],
  },
  B: {
    type: "B",
    title: "संतुलित healing",
    emoji: "🌱",
    description: "Breakup painful है पर आप healthy तरीके से heal करते हैं। Time लेते हैं पर move on करते हैं।",
    traits: ["balanced", "processing", "healthy", "mature"],
    strengths: ["good coping", "learns from experience"],
    weaknesses: ["कभी-कभी लंबा लगता है"],
    tips: ["ऐसे ही process करें", "rush मत करें heal होने में"],
  },
  C: {
    type: "C",
    title: "प्रैक्टिकल approach",
    emoji: "💪",
    description: "Breakup handle कर लेते हैं। Practical approach है। Sad होते हैं पर ज्यादा नहीं रुकते।",
    traits: ["practical", "resilient", "forward-looking", "strong"],
    strengths: ["bounces back", "doesn't dwell"],
    weaknesses: ["कभी-कभी suppress करते हैं"],
    tips: ["feelings को भी process करें", "okay है sad होना"],
  },
  D: {
    type: "D",
    title: "quick mover",
    emoji: "🚀",
    description: "Breakup से जल्दी निकल जाते हैं। Detached approach है। Life moves on quickly।",
    traits: ["detached", "quick recovery", "practical", "unemotional"],
    strengths: ["resilient", "not stuck"],
    weaknesses: ["may not process properly", "pattern repeat"],
    tips: ["कभी-कभी feel करें emotions", "learn from relationships"],
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
