// लव मैरिज - प्यार की शादी के लिए तैयारी
// Love Marriage Readiness Test

export const questions = [
  {
    id: 1,
    question: "लव मैरिज के बारे में आपकी सोच?",
    options: [
      { text: "best way है, believe करता/करती हूं", type: "A" },
      { text: "अच्छा option है", type: "B" },
      { text: "risky भी है थोड़ा", type: "C" },
      { text: "arranged better है", type: "D" },
    ],
  },
  {
    id: 2,
    question: "परिवार की मंज़ूरी?",
    options: [
      { text: "लूंगा/लूंगी पर शादी तो प्यार से", type: "A" },
      { text: "important है, कोशिश करूंगा/करूंगी", type: "B" },
      { text: "बहुत जरूरी है मंज़ूरी", type: "C" },
      { text: "family के बिना नहीं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "अगर family ना माने?",
    options: [
      { text: "फिर भी करूंगा/करूंगी, मेरी life", type: "A" },
      { text: "convince करूंगा/करूंगी, time लगेगा", type: "B" },
      { text: "बहुत मुश्किल होगा decide", type: "C" },
      { text: "छोड़ दूंगा/दूंगी शायद", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Society का क्या?",
    options: [
      { text: "मुझे फर्क नहीं पड़ता", type: "A" },
      { text: "थोड़ा matter करता है", type: "B" },
      { text: "concern है society का", type: "C" },
      { text: "log kya kahenge बहुत important", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Inter-caste या inter-religion?",
    options: [
      { text: "कोई problem नहीं, प्यार जरूरी", type: "A" },
      { text: "okay है मेरे लिए", type: "B" },
      { text: "challenging होगा पर try", type: "C" },
      { text: "same background better", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Dating period कितना important?",
    options: [
      { text: "बहुत, अच्छे से जानना जरूरी", type: "A" },
      { text: "important है definitely", type: "B" },
      { text: "थोड़ा time काफी", type: "C" },
      { text: "ज्यादा dating जरूरी नहीं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Partner खुद choose करना?",
    options: [
      { text: "मेरा right है, करूंगा/करूंगी", type: "A" },
      { text: "हां, with family input", type: "B" },
      { text: "family की help से", type: "C" },
      { text: "family ही better choose करे", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Live-in before marriage?",
    options: [
      { text: "अच्छा idea है, compatibility check", type: "A" },
      { text: "consider करूंगा/करूंगी", type: "B" },
      { text: "नहीं करूंगा/करूंगी पर judge नहीं", type: "C" },
      { text: "against हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Court marriage option?",
    options: [
      { text: "perfectly fine, legal है", type: "A" },
      { text: "last resort के तौर पर", type: "B" },
      { text: "prefer नहीं पर okay", type: "C" },
      { text: "traditional wedding चाहिए", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Financial independence for marriage?",
    options: [
      { text: "जरूरी है, ready हूं", type: "A" },
      { text: "important है, काम कर रहा/रही हूं", type: "B" },
      { text: "family support लूंगा/लूंगी", type: "C" },
      { text: "पैसा आ जाएगा कहीं से", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Partner की family accept करे या ना करे?",
    options: [
      { text: "हम साथ हैं, बाकी देखा जाएगा", type: "A" },
      { text: "try करेंगे, important है", type: "B" },
      { text: "बहुत जरूरी है acceptance", type: "C" },
      { text: "दोनों families का support must", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall love marriage में confidence?",
    options: [
      { text: "पूरा, यही करूंगा/करूंगी", type: "A" },
      { text: "अच्छा, prefer करता/करती हूं", type: "B" },
      { text: "थोड़ा unsure", type: "C" },
      { text: "बहुत सोचना पड़ेगा", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "प्यार का योद्धा",
    emoji: "❤️‍🔥",
    description: "आप love marriage के लिए fully ready और determined हैं! अपने प्यार के लिए सब कुछ कर सकते हैं।",
    traits: ["determined", "independent", "bold", "love-driven"],
    strengths: ["clear vision", "courage", "self-reliant"],
    weaknesses: ["family conflict possible"],
    tips: ["family को साथ लेने की कोशिश करें", "plan B रखें"],
  },
  B: {
    type: "B",
    title: "समझदार प्रेमी",
    emoji: "💝",
    description: "Love marriage prefer करते हैं पर balanced approach। Family की भी value करते हैं।",
    traits: ["balanced", "considerate", "loving", "practical"],
    strengths: ["best of both", "diplomatic", "inclusive"],
    weaknesses: ["torn between love and family कभी-कभी"],
    tips: ["patience रखें", "communication strong रखें"],
  },
  C: {
    type: "C",
    title: "सतर्क प्रेमी",
    emoji: "🤔",
    description: "Love marriage consider करते हैं पर hesitation है। Family और society की चिंता है।",
    traits: ["cautious", "family-conscious", "traditional-modern", "hesitant"],
    strengths: ["think before act"],
    weaknesses: ["may miss opportunities", "confused"],
    tips: ["priorities clear करें", "honest हों खुद से और partner से"],
  },
  D: {
    type: "D",
    title: "परंपरा प्रेमी",
    emoji: "🏠",
    description: "Love marriage आपकी preference नहीं। Traditional approach prefer करते हैं।",
    traits: ["traditional", "family-oriented", "conventional", "safe"],
    strengths: ["family harmony"],
    weaknesses: ["love opportunity miss"],
    tips: ["अगर प्यार हो तो dismiss ना करें", "open mind रखें"],
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
