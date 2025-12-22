// मूल्य और विश्वास - रिश्ते में values match
// Values Compatibility Test

export const questions = [
  {
    id: 1,
    question: "धर्म और आस्था के बारे में?",
    options: [
      { text: "same beliefs, important", type: "A" },
      { text: "respect each other's beliefs", type: "B" },
      { text: "different हैं पर manage", type: "C" },
      { text: "conflict होता है कभी", type: "D" },
    ],
  },
  {
    id: 2,
    question: "परिवार की importance?",
    options: [
      { text: "दोनों के लिए top priority", type: "A" },
      { text: "important है दोनों को", type: "B" },
      { text: "different levels of importance", type: "C" },
      { text: "अलग-अलग views", type: "D" },
    ],
  },
  {
    id: 3,
    question: "पैसों के प्रति attitude?",
    options: [
      { text: "same approach to money", type: "A" },
      { text: "similar, minor differences", type: "B" },
      { text: "different spending habits", type: "C" },
      { text: "बहुत अलग, issues होते हैं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Career vs Family priority?",
    options: [
      { text: "same priority order", type: "A" },
      { text: "similar views", type: "B" },
      { text: "different priorities", type: "C" },
      { text: "conflict on this topic", type: "D" },
    ],
  },
  {
    id: 5,
    question: "बच्चों की परवरिश के views?",
    options: [
      { text: "same parenting philosophy", type: "A" },
      { text: "mostly aligned", type: "B" },
      { text: "कुछ differences", type: "C" },
      { text: "बहुत अलग ideas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Lifestyle choices?",
    options: [
      { text: "same lifestyle preferences", type: "A" },
      { text: "compatible mostly", type: "B" },
      { text: "different in some areas", type: "C" },
      { text: "very different lifestyles", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Social और political views?",
    options: [
      { text: "similar views", type: "A" },
      { text: "respect differences", type: "B" },
      { text: "avoid these topics", type: "C" },
      { text: "clash होता है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "ईमानदारी और सच्चाई?",
    options: [
      { text: "दोनों बहुत honest", type: "A" },
      { text: "mostly honest", type: "B" },
      { text: "कभी-कभी hide करते हैं", type: "C" },
      { text: "trust issues हैं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ambition और goals?",
    options: [
      { text: "similar level of ambition", type: "A" },
      { text: "supportive of each other", type: "B" },
      { text: "different ambition levels", type: "C" },
      { text: "conflict on priorities", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Time की value?",
    options: [
      { text: "same approach to time", type: "A" },
      { text: "mostly similar", type: "B" },
      { text: "one punctual, one not", type: "C" },
      { text: "बहुत अलग, irritating", type: "D" },
    ],
  },
  {
    id: 11,
    question: "रिश्ते में loyalty?",
    options: [
      { text: "दोनों extremely loyal", type: "A" },
      { text: "loyal हैं दोनों", type: "B" },
      { text: "mostly loyal", type: "C" },
      { text: "trust issues हैं", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall values match?",
    options: [
      { text: "बहुत अच्छा match", type: "A" },
      { text: "अच्छा match, minor differences", type: "B" },
      { text: "कुछ areas में mismatch", type: "C" },
      { text: "बहुत अलग values", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पूर्ण मूल्य मिलान",
    emoji: "🎯",
    description: "आपके और partner के values perfectly align करते हैं! Same beliefs, priorities और approach। Strong foundation!",
    traits: ["aligned", "compatible", "same wavelength", "harmonious"],
    strengths: ["less conflicts", "shared vision", "deep understanding"],
    weaknesses: ["echo chamber कभी-कभी"],
    tips: ["individual growth भी जारी रखें", "great match!"],
  },
  B: {
    type: "B",
    title: "अच्छा मूल्य मिलान",
    emoji: "✨",
    description: "Core values match करते हैं, कुछ differences हैं जो manageable हैं। Healthy relationship!",
    traits: ["mostly aligned", "respectful", "adaptive", "understanding"],
    strengths: ["respect for differences", "core alignment"],
    weaknesses: ["कुछ areas में negotiation"],
    tips: ["differences पर communicate करें", "compromise सीखें"],
  },
  C: {
    type: "C",
    title: "मिश्रित मूल्य",
    emoji: "🤔",
    description: "कुछ values match, कुछ में differences हैं। काम करना होगा understanding पर।",
    traits: ["mixed", "challenging", "work needed", "potential"],
    strengths: ["diversity of thought"],
    weaknesses: ["conflicts possible", "compromise hard"],
    tips: ["core values discuss करें", "non-negotiables identify करें"],
  },
  D: {
    type: "D",
    title: "मूल्यों में टकराव",
    emoji: "⚠️",
    description: "Values में significant differences हैं। ये relationship के लिए challenging है।",
    traits: ["misaligned", "conflicting", "different", "challenging"],
    strengths: ["aware हैं differences के"],
    weaknesses: ["frequent conflicts", "fundamental issues"],
    tips: ["seriously evaluate करें", "counseling consider करें", "honest conversation जरूरी"],
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
