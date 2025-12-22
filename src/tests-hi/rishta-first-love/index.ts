// पहला प्यार - आपका first love experience
// First Love Test

export const questions = [
  {
    id: 1,
    question: "पहला प्यार कब हुआ?",
    options: [
      { text: "School/College में", type: "A" },
      { text: "Work/Later में", type: "B" },
      { text: "अभी तक नहीं हुआ", type: "C" },
      { text: "याद नहीं/Sure नहीं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "पहले प्यार में कैसा feel था?",
    options: [
      { text: "Butterflies, excited, dreamy", type: "A" },
      { text: "Nervous, shy, happy", type: "B" },
      { text: "Confused, unsure", type: "C" },
      { text: "Normal, nothing special", type: "D" },
    ],
  },
  {
    id: 3,
    question: "पहला प्यार अभी भी याद है?",
    options: [
      { text: "हां, हमेशा रहेगा special", type: "A" },
      { text: "हां, अच्छी memories", type: "B" },
      { text: "थोड़ा-बहुत", type: "C" },
      { text: "भूल गया/गई", type: "D" },
    ],
  },
  {
    id: 4,
    question: "क्या confess किया था?",
    options: [
      { text: "हां, बता दिया था", type: "A" },
      { text: "Eventually बताया", type: "B" },
      { text: "नहीं, रह गया", type: "C" },
      { text: "Applicable नहीं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "पहला प्यार successful था?",
    options: [
      { text: "हां, relationship हुई", type: "A" },
      { text: "थोड़े time के लिए", type: "B" },
      { text: "नहीं, one-sided था", type: "C" },
      { text: "Complicated था", type: "D" },
    ],
  },
  {
    id: 6,
    question: "पहले प्यार से क्या सीखा?",
    options: [
      { text: "प्यार कैसे करते हैं", type: "A" },
      { text: "Heartbreak और strength", type: "B" },
      { text: "खुद के बारे में", type: "C" },
      { text: "कुछ खास नहीं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "पहले प्यार की तुलना अब से?",
    options: [
      { text: "वो special था, अलग", type: "A" },
      { text: "अब mature प्यार है", type: "B" },
      { text: "तुलना नहीं करता/करती", type: "C" },
      { text: "पहला overrated था", type: "D" },
    ],
  },
  {
    id: 8,
    question: "पहले प्यार से contact?",
    options: [
      { text: "नहीं, move on किया", type: "A" },
      { text: "Social media पर distant", type: "B" },
      { text: "Friends हैं अब", type: "C" },
      { text: "अभी भी close हैं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "पहले प्यार का impact?",
    options: [
      { text: "बहुत, personality बनाया", type: "A" },
      { text: "कुछ हद तक", type: "B" },
      { text: "थोड़ा", type: "C" },
      { text: "कोई impact नहीं", type: "D" },
    ],
  },
  {
    id: 10,
    question: "पहले प्यार की यादें?",
    options: [
      { text: "Sweet और cherished", type: "A" },
      { text: "Mixed feelings", type: "B" },
      { text: "Painful थीं पर ठीक अब", type: "C" },
      { text: "भूलना चाहता/चाहती हूं", type: "D" },
    ],
  },
  {
    id: 11,
    question: "पहला प्यार - regrets?",
    options: [
      { text: "नहीं, जो हुआ अच्छा", type: "A" },
      { text: "कुछ थोड़े से", type: "B" },
      { text: "काश कुछ अलग होता", type: "C" },
      { text: "बहुत regrets", type: "D" },
    ],
  },
  {
    id: 12,
    question: "First love को describe करें?",
    options: [
      { text: "Pure, innocent, beautiful", type: "A" },
      { text: "Learning experience", type: "B" },
      { text: "Bittersweet", type: "C" },
      { text: "Just a phase", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "रोमांटिक यादें",
    emoji: "🌹",
    description: "आपका पहला प्यार beautiful और memorable था। उसने आपको प्यार करना सिखाया और आप उसे cherish करते हैं।",
    traits: ["romantic", "sentimental", "loving", "nostalgic"],
    strengths: ["capacity to love", "good memories", "learned from love"],
    weaknesses: ["कभी-कभी stuck in past"],
    tips: ["present पर focus करें", "memories appreciate करें पर move forward"],
  },
  B: {
    type: "B",
    title: "सीखने वाला अनुभव",
    emoji: "📖",
    description: "पहला प्यार आपके लिए learning था। अच्छा बुरा दोनों, पर आपको grow किया।",
    traits: ["mature", "learning-oriented", "balanced", "reflective"],
    strengths: ["wisdom gained", "emotional maturity"],
    weaknesses: ["कभी-कभी overthink"],
    tips: ["learnings apply करें", "new love में trust रखें"],
  },
  C: {
    type: "C",
    title: "मिश्रित भावनाएं",
    emoji: "🌊",
    description: "पहले प्यार के बारे में mixed feelings हैं। कुछ अच्छा, कुछ painful। Healing important है।",
    traits: ["conflicted", "healing", "processing", "growing"],
    strengths: ["self-aware"],
    weaknesses: ["unresolved feelings possible"],
    tips: ["closure पाएं", "healing complete करें", "therapy help कर सकती है"],
  },
  D: {
    type: "D",
    title: "प्रैक्टिकल दृष्टिकोण",
    emoji: "🧠",
    description: "आप first love को ज्यादा importance नहीं देते। Practical approach है life में।",
    traits: ["practical", "forward-looking", "detached", "logical"],
    strengths: ["not stuck in past", "practical"],
    weaknesses: ["emotional connection कम कभी"],
    tips: ["emotions को भी value दें", "sentiments okay हैं"],
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
