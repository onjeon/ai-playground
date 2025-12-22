// संयुक्त परिवार - Joint family में रहने की तैयारी
// Joint Family Readiness Test

export const questions = [
  {
    id: 1,
    question: "Joint family का concept?",
    options: [
      { text: "बहुत अच्छा, support system", type: "A" },
      { text: "Pros और cons हैं", type: "B" },
      { text: "Modern times में मुश्किल", type: "C" },
      { text: "नहीं चाहता/चाहती", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Privacy की कमी?",
    options: [
      { text: "Adjust हो जाऊंगा/जाऊंगी", type: "A" },
      { text: "थोड़ी मुश्किल पर manage", type: "B" },
      { text: "बहुत problem है", type: "C" },
      { text: "Privacy without नहीं रह सकता/सकती", type: "D" },
    ],
  },
  {
    id: 3,
    question: "साथ में decisions?",
    options: [
      { text: "अच्छा है, collective wisdom", type: "A" },
      { text: "कुछ decisions में okay", type: "B" },
      { text: "अपने decisions अपने", type: "C" },
      { text: "बिल्कुल नहीं चाहता/चाहती", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kitchen और household sharing?",
    options: [
      { text: "खुशी से, division of work", type: "A" },
      { text: "Okay है", type: "B" },
      { text: "थोड़ा मुश्किल", type: "C" },
      { text: "अपना space चाहिए", type: "D" },
    ],
  },
  {
    id: 5,
    question: "बुज़ुर्गों की देखभाल?",
    options: [
      { text: "ज़िम्मेदारी है, खुशी से", type: "A" },
      { text: "करना चाहिए, करूंगा/करूंगी", type: "B" },
      { text: "थोड़ा burden लगता है", type: "C" },
      { text: "मुश्किल है मेरे लिए", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Personal space?",
    options: [
      { text: "Adjust कर लूंगा/लूंगी", type: "A" },
      { text: "थोड़ा space मिल जाए बस", type: "B" },
      { text: "बहुत जरूरी है", type: "C" },
      { text: "Without space impossible", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Family conflicts?",
    options: [
      { text: "Handle कर लूंगा/लूंगी, normal है", type: "A" },
      { text: "Challenging पर manageable", type: "B" },
      { text: "बहुत stress होगा", type: "C" },
      { text: "इसीलिए joint family नहीं", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Financial sharing?",
    options: [
      { text: "Together, family first", type: "A" },
      { text: "कुछ share, कुछ separate", type: "B" },
      { text: "Prefer separate finances", type: "C" },
      { text: "अपना पैसा अपना", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Children को बड़े परिवार में?",
    options: [
      { text: "Best environment, values मिलेंगे", type: "A" },
      { text: "अच्छा है बच्चों के लिए", type: "B" },
      { text: "Mixed feelings", type: "C" },
      { text: "खुद बड़ा करना है", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Guests और relatives?",
    options: [
      { text: "Welcome, भारतीय संस्कृति", type: "A" },
      { text: "Okay, hospitality", type: "B" },
      { text: "बहुत होते हैं तो irritating", type: "C" },
      { text: "अपना घर अपना", type: "D" },
    ],
  },
  {
    id: 11,
    question: "सबकी expectations?",
    options: [
      { text: "पूरी करने की कोशिश", type: "A" },
      { text: "Balance करूंगा/करूंगी", type: "B" },
      { text: "सबको खुश नहीं कर सकते", type: "C" },
      { text: "अपनी expectations पहले", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall joint family?",
    options: [
      { text: "Ideal setup मेरे लिए", type: "A" },
      { text: "अच्छा है, try करूंगा/करूंगी", type: "B" },
      { text: "Challenging है", type: "C" },
      { text: "नहीं रह सकता/सकती", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Joint Family Champion",
    emoji: "👨‍👩‍👧‍👦",
    description: "आप joint family के लिए perfect हैं! Values, adjustment और family love - सब है आपमें।",
    traits: ["family-loving", "adjustable", "traditional", "caring"],
    strengths: ["thrives in joint family", "support system", "shared responsibilities"],
    weaknesses: ["individual needs कम"],
    tips: ["personal boundaries भी रखें"],
  },
  B: {
    type: "B",
    title: "अडेप्टेबल सदस्य",
    emoji: "🔄",
    description: "Joint family में रह सकते हैं, adjust करेंगे। Balanced approach है।",
    traits: ["adaptable", "trying", "balanced", "flexible"],
    strengths: ["can manage", "willing to adjust"],
    weaknesses: ["may struggle sometimes"],
    tips: ["communication important", "support लें partner से"],
  },
  C: {
    type: "C",
    title: "न्यूक्लियर प्रेफरर",
    emoji: "🏠",
    description: "Joint family challenging है आपके लिए। Nuclear family prefer करते हैं।",
    traits: ["independent", "privacy-loving", "modern", "separate"],
    strengths: ["knows preferences"],
    weaknesses: ["joint family में struggle"],
    tips: ["honest रहें about needs", "alternative arrangements discuss करें"],
  },
  D: {
    type: "D",
    title: "अकेलापन पसंद",
    emoji: "🏡",
    description: "Joint family बिल्कुल नहीं। Privacy और independence जरूरी है।",
    traits: ["very independent", "private", "autonomous", "solo"],
    strengths: ["clear boundaries"],
    weaknesses: ["family से conflict possible"],
    tips: ["partner से discuss करें clearly", "compromise points explore करें"],
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
