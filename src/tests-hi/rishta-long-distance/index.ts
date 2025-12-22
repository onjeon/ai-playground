// लॉन्ग डिस्टेंस - दूरी का रिश्ता
// Long Distance Relationship Test

export const questions = [
  {
    id: 1,
    question: "Long distance relationship में?",
    options: [
      { text: "Handle कर सकता/सकती हूं well", type: "A" },
      { text: "Challenging पर possible", type: "B" },
      { text: "बहुत मुश्किल है", type: "C" },
      { text: "नहीं कर सकता/सकती", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Communication importance LDR में?",
    options: [
      { text: "Daily video calls जरूरी", type: "A" },
      { text: "Regular contact important", type: "B" },
      { text: "जब हो सके", type: "C" },
      { text: "Physical presence जरूरी", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Trust बिना देखे?",
    options: [
      { text: "पूरा trust है", type: "A" },
      { text: "Trust करता/करती हूं", type: "B" },
      { text: "थोड़ा hard है", type: "C" },
      { text: "Difficult without seeing", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Physical touch की कमी?",
    options: [
      { text: "Miss करता/करती हूं पर manage", type: "A" },
      { text: "Hard पर survive", type: "B" },
      { text: "बहुत मुश्किल", type: "C" },
      { text: "Can't live without", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Time zone differences?",
    options: [
      { text: "Adjust कर लेते हैं", type: "A" },
      { text: "थोड़ा challenging", type: "B" },
      { text: "बहुत irritating", type: "C" },
      { text: "Deal breaker", type: "D" },
    ],
  },
  {
    id: 6,
    question: "कितने time तक LDR?",
    options: [
      { text: "जब तक जरूरी हो", type: "A" },
      { text: "1-2 साल max", type: "B" },
      { text: "Few months", type: "C" },
      { text: "जल्दी से जल्दी end", type: "D" },
    ],
  },
  {
    id: 7,
    question: "LDR में jealousy?",
    options: [
      { text: "नहीं होती, trust है", type: "A" },
      { text: "कभी-कभी थोड़ी", type: "B" },
      { text: "अक्सर होती है", type: "C" },
      { text: "बहुत होती है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Visits कितनी important?",
    options: [
      { text: "Plan करते हैं, जरूरी", type: "A" },
      { text: "जब possible हो", type: "B" },
      { text: "बहुत जरूरी", type: "C" },
      { text: "Without visits नहीं चलेगा", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Virtual date ideas?",
    options: [
      { text: "Creative हूं, बहुत ideas", type: "A" },
      { text: "कुछ try करते हैं", type: "B" },
      { text: "Same as physical नहीं", type: "C" },
      { text: "Virtual date क्या है", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Future plans LDR में?",
    options: [
      { text: "Clear है, कब end होगी", type: "A" },
      { text: "Discuss किया है", type: "B" },
      { text: "Uncertain है", type: "C" },
      { text: "कोई plan नहीं", type: "D" },
    ],
  },
  {
    id: 11,
    question: "LDR के pros?",
    options: [
      { text: "Individual growth, strong bond", type: "A" },
      { text: "कुछ advantages हैं", type: "B" },
      { text: "ज्यादा cons हैं", type: "C" },
      { text: "कोई pros नहीं", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall LDR capability?",
    options: [
      { text: "बहुत अच्छे से handle", type: "A" },
      { text: "कर सकता/सकती हूं", type: "B" },
      { text: "Struggle करूंगा/करूंगी", type: "C" },
      { text: "Not for me", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "LDR Champion",
    emoji: "🌍",
    description: "आप long distance में excel करते हैं! Trust, communication और patience आपकी strength है।",
    traits: ["trusting", "patient", "communicative", "independent"],
    strengths: ["handles distance well", "strong bond", "creative"],
    weaknesses: ["कभी-कभी lonely"],
    tips: ["regular visits plan करें", "end goal clear रखें"],
  },
  B: {
    type: "B",
    title: "LDR Survivor",
    emoji: "💪",
    description: "LDR challenging है पर आप manage कर सकते हैं। Effort लगता है पर possible।",
    traits: ["adaptable", "trying", "hopeful", "working"],
    strengths: ["willing to try", "can adjust"],
    weaknesses: ["hard at times"],
    tips: ["communication पर focus", "regular connection maintain"],
  },
  C: {
    type: "C",
    title: "LDR Struggler",
    emoji: "😰",
    description: "Long distance आपके लिए बहुत hard है। Physical presence जरूरी लगती है।",
    traits: ["needs presence", "struggling", "attached", "physical"],
    strengths: ["know your needs"],
    weaknesses: ["LDR में unhappy"],
    tips: ["short term okay, long term plan बनाएं", "together होने का goal रखें"],
  },
  D: {
    type: "D",
    title: "Proximity Lover",
    emoji: "🤗",
    description: "LDR आपके लिए नहीं है। आपको physical closeness चाहिए। Honest रहें partner से।",
    traits: ["needs closeness", "physical", "present", "together"],
    strengths: ["clear about needs"],
    weaknesses: ["LDR not option"],
    tips: ["avoid LDR if possible", "communicate needs clearly"],
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
