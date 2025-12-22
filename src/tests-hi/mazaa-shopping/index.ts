// शॉपिंग स्टाइल टेस्ट - आप कैसे shopping करते हैं?
// Shopping Style Personality Test

export const questions = [
  {
    id: 1,
    question: "Shopping करने का तरीका?",
    options: [
      { text: "Online, घर बैठे", type: "A" },
      { text: "Mall में full day", type: "B" },
      { text: "Local market bargaining", type: "C" },
      { text: "जब जरूरत हो तब", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sale के दिन?",
    options: [
      { text: "Alarm लगाकर ready, cart भरा हुआ", type: "A" },
      { text: "Mall में पहुंचकर explore", type: "B" },
      { text: "Sale से बेहतर bargaining", type: "C" },
      { text: "Sale भी देख लेता हूं अगर याद आया", type: "D" },
    ],
  },
  {
    id: 3,
    question: "कपड़े खरीदते वक्त?",
    options: [
      { text: "Reviews पढ़कर, size chart देखकर", type: "A" },
      { text: "Trial room में घंटों", type: "B" },
      { text: "देखकर feel करके, bargain करके", type: "C" },
      { text: "जो fit हो जाए quickly", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Budget?",
    options: [
      { text: "EMI और offers calculate करके", type: "A" },
      { text: "जब shopping mode में तो budget loose", type: "B" },
      { text: "Fix budget, bargain within", type: "C" },
      { text: "जितना जरूरी उतना", type: "D" },
    ],
  },
  {
    id: 5,
    question: "साथ में कौन?",
    options: [
      { text: "Solo, focussed shopping", type: "A" },
      { text: "Friends के साथ, fun activity", type: "B" },
      { text: "Family के साथ, collective decision", type: "C" },
      { text: "कोई भी, जल्दी निपटाना है", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Return policy?",
    options: [
      { text: "पहले check करता हूं, फिर order", type: "A" },
      { text: "Receipt संभालकर रखता हूं", type: "B" },
      { text: "Exchange ही करवा लेता हूं", type: "C" },
      { text: "कभी return नहीं किया", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Brand loyalty?",
    options: [
      { text: "Best deal वाला brand", type: "A" },
      { text: "Premium brands prefer", type: "B" },
      { text: "Quality देखता हूं, brand नहीं", type: "C" },
      { text: "जो मिल जाए", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Wishlist?",
    options: [
      { text: "Multiple apps में saved", type: "A" },
      { text: "Mind में noted", type: "B" },
      { text: "जो दिखे अच्छा, ले लो", type: "C" },
      { text: "Wishlist नहीं रखता", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Impulse buying?",
    options: [
      { text: "Never, calculated always", type: "A" },
      { text: "Sometimes, mood पर", type: "B" },
      { text: "Bargain अच्छा हो तो हां", type: "C" },
      { text: "Rarely shop ही करता हूं", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Payment preference?",
    options: [
      { text: "Cards, EMI, wallet - सब try", type: "A" },
      { text: "Credit card, points collect", type: "B" },
      { text: "Cash is king", type: "C" },
      { text: "जो convenient हो", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Shopping की frequency?",
    options: [
      { text: "हर sale, हर month", type: "A" },
      { text: "Season change पर", type: "B" },
      { text: "जब कुछ खास लेना हो", type: "C" },
      { text: "साल में 2-3 बार", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Shopping का मतलब?",
    options: [
      { text: "Smart deals hunting", type: "A" },
      { text: "Therapy और fun", type: "B" },
      { text: "Necessity fulfillment", type: "C" },
      { text: "चलो निपटाते हैं", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Online Shopping Expert",
    emoji: "🛒",
    description: "आप Digital Shopper हैं! Deals track करना, reviews पढ़ना, best price find करना - सब master है। Cart always ready, finger on buy button!",
    traits: ["Smart", "Digital-savvy", "Deal-hunter", "Organized"],
    strengths: ["Saving money", "Convenience", "Research", "Efficiency"],
    weaknesses: ["Overconsumption", "Packaging waste"],
    tips: ["जरूरत पहले देखें, deal बाद में", "Quality भी check करें"],
  },
  B: {
    type: "B",
    title: "Mall Enthusiast",
    emoji: "🛍️",
    description: "आप Shopping Lover हैं! Mall = Happy place। Trial room sessions, food court breaks, full experience। Shopping is therapy!",
    traits: ["Experiential", "Social", "Brand-conscious", "Enthusiastic"],
    strengths: ["Experience", "Quality check", "Social activity", "Touch and feel"],
    weaknesses: ["Overspending", "Time consuming"],
    tips: ["Budget set करें", "Impulse control करें"],
  },
  C: {
    type: "C",
    title: "Bargaining Champion",
    emoji: "💰",
    description: "आप Local Market King/Queen हैं! Bargaining में PhD। Original price कभी नहीं देते। Sarojini, Linking Road के expert!",
    traits: ["Bargainer", "Smart", "Local", "Value-seeker"],
    strengths: ["Saving money", "Negotiation", "Local support", "Value finding"],
    weaknesses: ["Quality compromise कभी-कभी", "Time consuming"],
    tips: ["Quality पर compromise मत करें", "Online भी try करें"],
  },
  D: {
    type: "D",
    title: "Minimalist Shopper",
    emoji: "🎯",
    description: "आप Need-Based Shopper हैं! जब जरूरत तब shopping। No impulse, no waste। Practical approach to consumption!",
    traits: ["Minimalist", "Practical", "Need-based", "Efficient"],
    strengths: ["Saving", "Minimalism", "Practicality", "Less clutter"],
    weaknesses: ["Miss opportunities", "Outdated wardrobe"],
    tips: ["कभी-कभी treat yourself", "Enjoyment भी ठीक है"],
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
