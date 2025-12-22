// ऑनलाइन डेटिंग - Online dating के लिए आप कितने ready?
// Online Dating Readiness Test

export const questions = [
  {
    id: 1,
    question: "Dating apps के बारे में view?",
    options: [
      { text: "Great way to meet people", type: "A" },
      { text: "Okay, worth trying", type: "B" },
      { text: "Not sure, skeptical", type: "C" },
      { text: "Against हूं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Online पर genuine लोग?",
    options: [
      { text: "हां, बहुत हैं", type: "A" },
      { text: "कुछ genuine मिलते हैं", type: "B" },
      { text: "बहुत कम", type: "C" },
      { text: "सब fake हैं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Profile बनाना?",
    options: [
      { text: "Excited हूं, अच्छी profile बनाऊंगा/बनाऊंगी", type: "A" },
      { text: "Try करूंगा/करूंगी", type: "B" },
      { text: "Awkward लगता है", type: "C" },
      { text: "नहीं करूंगा/करूंगी", type: "D" },
    ],
  },
  {
    id: 4,
    question: "First online meeting?",
    options: [
      { text: "Excited, new experience", type: "A" },
      { text: "थोड़ा nervous पर ready", type: "B" },
      { text: "Very nervous", type: "C" },
      { text: "Scary लगता है", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Safety concerns?",
    options: [
      { text: "Aware हूं, precautions लूंगा/लूंगी", type: "A" },
      { text: "Careful रहूंगा/रहूंगी", type: "B" },
      { text: "बहुत worried", type: "C" },
      { text: "Too risky लगता है", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Catfishing से डर?",
    options: [
      { text: "Verify करूंगा/करूंगी, handle कर लूंगा/लूंगी", type: "A" },
      { text: "Cautious रहूंगा/रहूंगी", type: "B" },
      { text: "बहुत डर है", type: "C" },
      { text: "इसीलिए नहीं करता/करती", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Multiple options browse करना?",
    options: [
      { text: "Okay है, right match ढूंढना है", type: "A" },
      { text: "Understandable", type: "B" },
      { text: "थोड़ा odd लगता है", type: "C" },
      { text: "Shopping जैसा है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Video call before meeting?",
    options: [
      { text: "Smart idea, करूंगा/करूंगी", type: "A" },
      { text: "Good safety measure", type: "B" },
      { text: "Awkward होगा", type: "C" },
      { text: "Prefer नहीं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Rejection online?",
    options: [
      { text: "Part of process, okay", type: "A" },
      { text: "Handle कर लूंगा/लूंगी", type: "B" },
      { text: "Hurt होता है", type: "C" },
      { text: "Very hard to handle", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Family को बताना?",
    options: [
      { text: "हां, बता दूंगा/दूंगी", type: "A" },
      { text: "बाद में, जब serious हो", type: "B" },
      { text: "शायद नहीं", type: "C" },
      { text: "कभी नहीं", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Success stories सुनकर?",
    options: [
      { text: "Hopeful, हो सकता है", type: "A" },
      { text: "Possible है", type: "B" },
      { text: "Rare cases हैं", type: "C" },
      { text: "Believe नहीं करता/करती", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall online dating?",
    options: [
      { text: "Ready हूं, try करूंगा/करूंगी", type: "A" },
      { text: "Consider करूंगा/करूंगी", type: "B" },
      { text: "Hesitant हूं", type: "C" },
      { text: "Not for me", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Digital Dater",
    emoji: "📱",
    description: "आप online dating के लिए ready हैं! Modern approach है, open-minded और aware।",
    traits: ["modern", "open", "adventurous", "tech-savvy"],
    strengths: ["wide reach", "new experiences", "adaptable"],
    weaknesses: ["कभी-कभी overwhelming"],
    tips: ["safety first", "genuine profile बनाएं", "patience रखें"],
  },
  B: {
    type: "B",
    title: "Cautious Explorer",
    emoji: "🔍",
    description: "Online dating consider करेंगे पर carefully। Balanced approach है।",
    traits: ["cautious", "open", "balanced", "practical"],
    strengths: ["measured approach", "safe"],
    weaknesses: ["may miss opportunities being too careful"],
    tips: ["try करें slowly", "comfortable pace रखें"],
  },
  C: {
    type: "C",
    title: "Skeptical Observer",
    emoji: "🤔",
    description: "Online dating से skeptical हैं। Concerns और doubts हैं।",
    traits: ["skeptical", "worried", "traditional", "cautious"],
    strengths: ["not naive"],
    weaknesses: ["missing out possibly"],
    tips: ["research करें", "success stories देखें", "slowly try करें"],
  },
  D: {
    type: "D",
    title: "Traditional Believer",
    emoji: "🏠",
    description: "Online dating आपके लिए नहीं। Traditional ways prefer करते हैं।",
    traits: ["traditional", "offline", "classic", "conventional"],
    strengths: ["knows preferences"],
    weaknesses: ["limited options in modern times"],
    tips: ["your choice valid है", "offline networking करें"],
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
