// अरेंज्ड मैरिज - क्या आप arranged marriage के लिए तैयार हैं?
// Arranged Marriage Readiness Test

export const questions = [
  {
    id: 1,
    question: "अरेंज्ड मैरिज के बारे में view?",
    options: [
      { text: "बहुत अच्छा concept, support करता/करती हूं", type: "A" },
      { text: "ठीक है, consider करूंगा/करूंगी", type: "B" },
      { text: "neutral हूं", type: "C" },
      { text: "prefer नहीं करता/करती", type: "D" },
    ],
  },
  {
    id: 2,
    question: "परिवार की choice पर?",
    options: [
      { text: "पूरा trust, वो better जानते हैं", type: "A" },
      { text: "important है उनकी राय", type: "B" },
      { text: "consider करूंगा/करूंगी पर final मेरा", type: "C" },
      { text: "अपना ही decide करूंगा/करूंगी", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Initial meetings में क्या देखेंगे?",
    options: [
      { text: "family background, values", type: "A" },
      { text: "compatibility और connection", type: "B" },
      { text: "attraction और chemistry", type: "C" },
      { text: "meeting से क्या पता चलता है", type: "D" },
    ],
  },
  {
    id: 4,
    question: "कम समय में decision?",
    options: [
      { text: "ठीक है, instinct पर trust", type: "A" },
      { text: "थोड़ा time लूंगा/लूंगी", type: "B" },
      { text: "जल्दी decision hard", type: "C" },
      { text: "impossible है जल्दी decide", type: "D" },
    ],
  },
  {
    id: 5,
    question: "प्यार शादी के बाद develop?",
    options: [
      { text: "believe करता/करती हूं, होता है", type: "A" },
      { text: "possible है", type: "B" },
      { text: "risky लगता है", type: "C" },
      { text: "पहले प्यार होना चाहिए", type: "D" },
    ],
  },
  {
    id: 6,
    question: "kundli और matching?",
    options: [
      { text: "important है, believe करता/करती हूं", type: "A" },
      { text: "consider करूंगा/करूंगी", type: "B" },
      { text: "ज्यादा belief नहीं", type: "C" },
      { text: "बिल्कुल नहीं मानता/मानती", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Dowry system के बारे में?",
    options: [
      { text: "against हूं completely", type: "A" },
      { text: "token gifts okay, dowry नहीं", type: "B" },
      { text: "family decide करे", type: "C" },
      { text: "tradition है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Adjustment शादी के बाद?",
    options: [
      { text: "ready हूं पूरी तरह", type: "A" },
      { text: "try करूंगा/करूंगी best", type: "B" },
      { text: "challenging होगा", type: "C" },
      { text: "बहुत मुश्किल", type: "D" },
    ],
  },
  {
    id: 9,
    question: "अनजान व्यक्ति से शादी?",
    options: [
      { text: "okay, जान जाऊंगा/जाऊंगी बाद में", type: "A" },
      { text: "थोड़ा nervous पर try", type: "B" },
      { text: "uncomfortable है idea", type: "C" },
      { text: "नहीं कर सकता/सकती", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Family involvement throughout?",
    options: [
      { text: "अच्छा है, support है", type: "A" },
      { text: "okay है involvement", type: "B" },
      { text: "थोड़ी ज्यादा लगती है", type: "C" },
      { text: "interference लगता है", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Traditional rituals और ceremonies?",
    options: [
      { text: "love करता/करती हूं, सब चाहिए", type: "A" },
      { text: "important ones अच्छे हैं", type: "B" },
      { text: "कुछ ज्यादा हैं", type: "C" },
      { text: "simple prefer", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall arranged marriage?",
    options: [
      { text: "perfect है मेरे लिए", type: "A" },
      { text: "good option है", type: "B" },
      { text: "one of the options", type: "C" },
      { text: "last option होगी", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "परंपरा प्रेमी",
    emoji: "🪔",
    description: "आप traditional arranged marriage के लिए perfect हैं! Family values, trust और culture आपके लिए important हैं।",
    traits: ["traditional", "family-oriented", "trusting", "adaptable"],
    strengths: ["family support", "clear expectations", "cultural connection"],
    weaknesses: ["individual choice कम"],
    tips: ["अपनी preferences भी बताएं", "compatibility check करें"],
  },
  B: {
    type: "B",
    title: "संतुलित दृष्टिकोण",
    emoji: "⚖️",
    description: "आप arranged marriage consider करेंगे पर अपनी terms पर। Balance है tradition और choice में।",
    traits: ["balanced", "open-minded", "practical", "modern-traditional"],
    strengths: ["best of both worlds", "informed decision"],
    weaknesses: ["family vs self conflict possible"],
    tips: ["clear communication रखें", "boundaries set करें"],
  },
  C: {
    type: "C",
    title: "आधुनिक सोच",
    emoji: "🌟",
    description: "Arranged marriage आपकी first choice नहीं। Modern approach prefer करते हैं। ये okay है।",
    traits: ["modern", "independent", "choice-oriented", "individual"],
    strengths: ["know what you want"],
    weaknesses: ["family pressure challenging"],
    tips: ["family से honestly बात करें", "compromise options explore करें"],
  },
  D: {
    type: "D",
    title: "स्वतंत्र विचारक",
    emoji: "🦋",
    description: "Arranged marriage आपके लिए नहीं है। Love marriage या self-choice prefer करते हैं।",
    traits: ["independent", "non-traditional", "choice-driven", "modern"],
    strengths: ["clear about preferences"],
    weaknesses: ["family conflict possible"],
    tips: ["family को समझाएं respectfully", "अपना path follow करें"],
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
