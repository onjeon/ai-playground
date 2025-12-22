// मिठाई प्रकार टेस्ट - आप कौन सी मिठाई हैं?
// Indian Sweet Type Test

export const questions = [
  {
    id: 1,
    question: "आपकी personality कैसी है?",
    options: [
      { text: "Rich और indulgent", type: "A" },
      { text: "Classic और timeless", type: "B" },
      { text: "Light और refreshing", type: "C" },
      { text: "Colorful और festive", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Festival में आप?",
    options: [
      { text: "Grand celebration का center", type: "A" },
      { text: "Traditional rituals follow करता हूं", type: "B" },
      { text: "Simple और meaningful", type: "C" },
      { text: "Fun और excitement लाता हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Friends group में?",
    options: [
      { text: "VIP treatment expect करता हूं", type: "A" },
      { text: "हमेशा reliable और trusted", type: "B" },
      { text: "Easy going और adaptable", type: "C" },
      { text: "Life of the party", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Gift देने का style?",
    options: [
      { text: "Expensive और premium", type: "A" },
      { text: "Traditional और thoughtful", type: "B" },
      { text: "Practical और useful", type: "C" },
      { text: "Creative और unique", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Success celebrate कैसे करते हैं?",
    options: [
      { text: "Grand party with the best", type: "A" },
      { text: "Family के साथ traditional way", type: "B" },
      { text: "Simple acknowledgment", type: "C" },
      { text: "Fun activities और celebration", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Relationship में?",
    options: [
      { text: "Lavish और generous", type: "A" },
      { text: "Stable और committed", type: "B" },
      { text: "Cool और comfortable", type: "C" },
      { text: "Fun और exciting", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Work style?",
    options: [
      { text: "Premium quality only", type: "A" },
      { text: "Consistent और dependable", type: "B" },
      { text: "Efficient और simple", type: "C" },
      { text: "Creative और innovative", type: "D" },
    ],
  },
  {
    id: 8,
    question: "दूसरे आपको क्या कहते हैं?",
    options: [
      { text: "High maintenance but worth it", type: "A" },
      { text: "Old school but gold", type: "B" },
      { text: "Chill और easy", type: "C" },
      { text: "Fun और unpredictable", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Life में क्या चाहिए?",
    options: [
      { text: "Luxury और comfort", type: "A" },
      { text: "Stability और respect", type: "B" },
      { text: "Peace और simplicity", type: "C" },
      { text: "Adventure और fun", type: "D" },
    ],
  },
  {
    id: 10,
    question: "First impression?",
    options: [
      { text: "Impressive और memorable", type: "A" },
      { text: "Trustworthy और warm", type: "B" },
      { text: "Approachable और friendly", type: "C" },
      { text: "Exciting और interesting", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Problem solving approach?",
    options: [
      { text: "Best resources use करके", type: "A" },
      { text: "Tried और tested methods", type: "B" },
      { text: "Simple और direct", type: "C" },
      { text: "Creative solutions", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपका motto?",
    options: [
      { text: "Best ही चलेगा", type: "A" },
      { text: "जो चला आया, वो best", type: "B" },
      { text: "Simple is best", type: "C" },
      { text: "Different is best", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "काजू कतली",
    emoji: "👑",
    description: "आप काजू कतली हैं - Premium, elegant और everyone's favourite! महंगे taste हैं, but you're worth every penny। दिवाली हो या कोई भी खुशी, आपके बिना incomplete है!",
    traits: ["Premium", "Elegant", "Valuable", "Desirable"],
    strengths: ["Quality", "Class", "Value", "Presence"],
    weaknesses: ["Expensive tastes", "High expectations"],
    tips: ["Simple joys भी appreciate करें", "Accessible बनें"],
  },
  B: {
    type: "B",
    title: "गुलाब जामुन",
    emoji: "🟤",
    description: "आप गुलाब जामुन हैं - Classic, beloved और timeless! हर किसी को पसंद, हर मौके पर perfect। Sweet और soft, लोगों के दिल में special जगह है आपकी!",
    traits: ["Classic", "Beloved", "Timeless", "Sweet"],
    strengths: ["Universal appeal", "Reliability", "Warmth", "Consistency"],
    weaknesses: ["Too traditional कभी-कभी", "Predictable"],
    tips: ["New things भी try करें", "Evolve करते रहें"],
  },
  C: {
    type: "C",
    title: "रसगुल्ला",
    emoji: "⚪",
    description: "आप रसगुल्ला हैं - Light, refreshing और easy-going! कभी भी, कहीं भी fit हो जाते हैं। No drama, no fuss - just pure sweetness। Simple yet satisfying!",
    traits: ["Light", "Refreshing", "Easy-going", "Adaptable"],
    strengths: ["Flexibility", "Simplicity", "Approachability", "Comfort"],
    weaknesses: ["Too simple कभी-कभी", "Overlooked"],
    tips: ["अपनी value recognize करें", "Stand out करें"],
  },
  D: {
    type: "D",
    title: "जलेबी",
    emoji: "🟠",
    description: "आप जलेबी हैं - Twisted, colorful और full of fun! जहां भी जाते हैं, excitement लाते हैं। Crispy outside, sweet inside। Festival की जान हैं आप!",
    traits: ["Colorful", "Fun", "Exciting", "Festive"],
    strengths: ["Entertainment", "Energy", "Uniqueness", "Joy"],
    weaknesses: ["Too much कभी-कभी", "Not for everyone"],
    tips: ["Calm moments भी enjoy करें", "Balance रखें"],
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
