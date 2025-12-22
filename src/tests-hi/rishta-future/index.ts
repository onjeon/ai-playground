// भविष्य की सोच - रिश्ते के future के बारे में आपकी planning
// Future Planning Test

export const questions = [
  {
    id: 1,
    question: "5 साल बाद कहां देखते हैं खुद को?",
    options: [
      { text: "partner के साथ settled, clear vision", type: "A" },
      { text: "साथ में, details देखा जाएगा", type: "B" },
      { text: "sure नहीं, present में हूं", type: "C" },
      { text: "future plan नहीं करता/करती", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Marriage/long-term के बारे में बात?",
    options: [
      { text: "होती है, plans हैं", type: "A" },
      { text: "discuss किया है", type: "B" },
      { text: "अभी नहीं सोचा", type: "C" },
      { text: "इस topic से बचता/बचती हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "बच्चों के बारे में discussion?",
    options: [
      { text: "clear है, same page पर", type: "A" },
      { text: "बात हुई है", type: "B" },
      { text: "अभी जल्दी है", type: "C" },
      { text: "नहीं सोचा अभी", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Financial planning together?",
    options: [
      { text: "joint planning है", type: "A" },
      { text: "discuss करते हैं", type: "B" },
      { text: "अपनी-अपनी finances", type: "C" },
      { text: "plan नहीं है कोई", type: "D" },
    ],
  },
  {
    id: 5,
    question: "कहां रहेंगे future में?",
    options: [
      { text: "decided है city/place", type: "A" },
      { text: "options discuss किए हैं", type: "B" },
      { text: "देखा जाएगा", type: "C" },
      { text: "कोई idea नहीं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Career और relationship का balance future में?",
    options: [
      { text: "plan है कैसे manage करेंगे", type: "A" },
      { text: "discuss किया है", type: "B" },
      { text: "figure out करेंगे", type: "C" },
      { text: "नहीं सोचा", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Family planning overall?",
    options: [
      { text: "detailed plan है", type: "A" },
      { text: "broad idea है", type: "B" },
      { text: "कभी-कभी बात होती है", type: "C" },
      { text: "plan नहीं है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Retirement की सोच?",
    options: [
      { text: "साथ में grow old, plan है", type: "A" },
      { text: "hope करते हैं साथ रहें", type: "B" },
      { text: "बहुत दूर की बात", type: "C" },
      { text: "इतना ahead नहीं सोचते", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Dreams और goals share?",
    options: [
      { text: "सब share हैं, aligned", type: "A" },
      { text: "बातें होती हैं", type: "B" },
      { text: "कुछ share, कुछ personal", type: "C" },
      { text: "अपने-अपने goals", type: "D" },
    ],
  },
  {
    id: 10,
    question: "अगर future में problems आए?",
    options: [
      { text: "साथ face करेंगे, planned", type: "A" },
      { text: "handle करेंगे together", type: "B" },
      { text: "देखा जाएगा तब", type: "C" },
      { text: "नहीं पता क्या होगा", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Big life decisions में partner?",
    options: [
      { text: "always together, plan में included", type: "A" },
      { text: "mostly साथ में", type: "B" },
      { text: "depends on decision", type: "C" },
      { text: "अपना काम अपना", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Future में relationship कैसी होगी?",
    options: [
      { text: "stronger, clear vision", type: "A" },
      { text: "hope है अच्छी रहे", type: "B" },
      { text: "पता नहीं, देखेंगे", type: "C" },
      { text: "future unpredictable है", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "दूरदर्शी जोड़ी",
    emoji: "🎯",
    description: "आप और partner future के लिए aligned और prepared हैं। Clear vision और plans हैं। Strong foundation!",
    traits: ["visionary", "planned", "aligned", "committed"],
    strengths: ["clear direction", "shared goals", "security"],
    weaknesses: ["कभी-कभी too rigid"],
    tips: ["flexibility भी रखें", "present भी enjoy करें"],
  },
  B: {
    type: "B",
    title: "आशावादी साथी",
    emoji: "🌟",
    description: "Future के बारे में discussions हैं और hope है। Detailed plans कम पर direction है।",
    traits: ["hopeful", "communicative", "positive", "developing"],
    strengths: ["open communication", "positive outlook"],
    weaknesses: ["more concrete planning helpful"],
    tips: ["specific plans बनाएं", "goals set करें together"],
  },
  C: {
    type: "C",
    title: "वर्तमान में जीने वाला",
    emoji: "🌈",
    description: "Present में focus है, future planning कम। ये okay है पर कुछ clarity help करेगी।",
    traits: ["present-focused", "spontaneous", "uncommitted", "flexible"],
    strengths: ["enjoy the moment", "no pressure"],
    weaknesses: ["uncertainty", "misalignment possible"],
    tips: ["future discuss करें", "alignment check करें"],
  },
  D: {
    type: "D",
    title: "अनिश्चित दिशा",
    emoji: "❓",
    description: "Future के बारे में clarity नहीं है। ये concerning है long-term relationship के लिए।",
    traits: ["uncertain", "uncommitted", "avoidant", "unclear"],
    strengths: ["no false promises"],
    weaknesses: ["partner insecure", "direction missing", "relationship unstable"],
    tips: ["honest conversation जरूरी", "clarity लाएं", "decisions लें"],
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
