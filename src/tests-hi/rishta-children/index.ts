// बच्चों की चाह - Children planning
// Children Planning Test

export const questions = [
  {
    id: 1,
    question: "बच्चे चाहिए?",
    options: [
      { text: "बिल्कुल, बहुत चाहता/चाहती हूं", type: "A" },
      { text: "हां, eventually", type: "B" },
      { text: "Sure नहीं", type: "C" },
      { text: "नहीं चाहिए", type: "D" },
    ],
  },
  {
    id: 2,
    question: "कितने बच्चे?",
    options: [
      { text: "2 या more", type: "A" },
      { text: "1-2", type: "B" },
      { text: "एक काफी", type: "C" },
      { text: "Zero", type: "D" },
    ],
  },
  {
    id: 3,
    question: "कब चाहिए?",
    options: [
      { text: "जल्दी, शादी के 1-2 साल में", type: "A" },
      { text: "3-4 साल में, settle होकर", type: "B" },
      { text: "बाद में, career first", type: "C" },
      { text: "Never/बहुत बाद में", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Parenting responsibility?",
    options: [
      { text: "Ready हूं पूरी तरह", type: "A" },
      { text: "सीखूंगा/सीखूंगी", type: "B" },
      { text: "Scary लगता है", type: "C" },
      { text: "बहुत बड़ी responsibility", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Career vs Kids?",
    options: [
      { text: "Kids priority, career adjust", type: "A" },
      { text: "Balance करूंगा/करूंगी", type: "B" },
      { text: "Career compromise नहीं", type: "C" },
      { text: "Career ही priority", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Parenting style?",
    options: [
      { text: "Traditional Indian values", type: "A" },
      { text: "Modern और balanced", type: "B" },
      { text: "Liberal और open", type: "C" },
      { text: "नहीं सोचा अभी", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Financial planning for kids?",
    options: [
      { text: "Already सोच रहा/रही हूं", type: "A" },
      { text: "Plan करूंगा/करूंगी", type: "B" },
      { text: "देखा जाएगा", type: "C" },
      { text: "Expensive लगता है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Partner की राय अलग हो?",
    options: [
      { text: "बात करके solve", type: "A" },
      { text: "Compromise ढूंढेंगे", type: "B" },
      { text: "मुश्किल होगा agree करना", type: "C" },
      { text: "Deal breaker हो सकता है", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Adoption के बारे में?",
    options: [
      { text: "Open हूं, beautiful है", type: "A" },
      { text: "Consider कर सकता/सकती हूं", type: "B" },
      { text: "Prefer अपने biological", type: "C" },
      { text: "Not sure", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Work-life balance with kids?",
    options: [
      { text: "Manage करूंगा/करूंगी somehow", type: "A" },
      { text: "Challenging पर possible", type: "B" },
      { text: "बहुत मुश्किल", type: "C" },
      { text: "इसीलिए kids नहीं", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sleepless nights, sacrifices?",
    options: [
      { text: "Ready हूं, worth it", type: "A" },
      { text: "Part of parenting, okay", type: "B" },
      { text: "Scary लगता है", type: "C" },
      { text: "नहीं कर पाऊंगा/पाऊंगी", type: "D" },
    ],
  },
  {
    id: 12,
    question: "बच्चों का importance?",
    options: [
      { text: "Life का purpose", type: "A" },
      { text: "बहुत important", type: "B" },
      { text: "Optional है", type: "C" },
      { text: "Childfree better", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पैरेंट बनने को तैयार",
    emoji: "👶",
    description: "आप बच्चों के लिए fully ready हैं! Parenthood आपकी priority है। Excited और prepared!",
    traits: ["ready", "excited", "family-oriented", "nurturing"],
    strengths: ["clear about wanting kids", "prepared mentally"],
    weaknesses: ["may rush the decision"],
    tips: ["partner से align करें", "practical prep भी करें"],
  },
  B: {
    type: "B",
    title: "प्लान्ड पैरेंट",
    emoji: "📋",
    description: "बच्चे चाहिए पर planned way में। Settle होकर, right time पर।",
    traits: ["planned", "thoughtful", "balanced", "prepared"],
    strengths: ["mature approach", "well-prepared"],
    weaknesses: ["may overthink timing"],
    tips: ["perfect time कभी नहीं आता", "जब ready हों तब go"],
  },
  C: {
    type: "C",
    title: "अनिश्चित दृष्टिकोण",
    emoji: "🤔",
    description: "बच्चों के बारे में unsure हैं। Concerns और doubts हैं।",
    traits: ["unsure", "concerned", "questioning", "exploring"],
    strengths: ["thinking carefully"],
    weaknesses: ["may miss opportunities या pressure feel"],
    tips: ["decide करें clearly", "partner से honest बात करें"],
  },
  D: {
    type: "D",
    title: "चाइल्डफ्री Choice",
    emoji: "🌿",
    description: "बच्चे नहीं चाहिए या बहुत बाद में। Childfree life prefer करते हैं।",
    traits: ["childfree", "independent", "career-focused", "clear"],
    strengths: ["clear about choice"],
    weaknesses: ["partner mismatch possible"],
    tips: ["partner से early में discuss करें", "firm रहें decision पर"],
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
