// समोसा प्रकार टेस्ट - आप कौन सा समोसा हैं?
// Samosa Type Personality Test

export const questions = [
  {
    id: 1,
    question: "आपकी personality?",
    options: [
      { text: "Classic और reliable", type: "A" },
      { text: "Spicy और bold", type: "B" },
      { text: "Different और experimental", type: "C" },
      { text: "Small पर powerful", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Filling कैसी पसंद?",
    options: [
      { text: "Traditional आलू-मटर", type: "A" },
      { text: "Extra mirchi और masala", type: "B" },
      { text: "Innovative - paneer, noodles", type: "C" },
      { text: "Concentrated flavor", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Crispy या soft?",
    options: [
      { text: "Perfect balance", type: "A" },
      { text: "Extra crispy", type: "B" },
      { text: "Depends on mood", type: "C" },
      { text: "Bite-size crunch", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Chutney preference?",
    options: [
      { text: "Green chutney, classic", type: "A" },
      { text: "Red chutney, spicy", type: "B" },
      { text: "Try different ones", type: "C" },
      { text: "Direct खाता हूं बिना chutney", type: "D" },
    ],
  },
  {
    id: 5,
    question: "कब खाते हैं समोसा?",
    options: [
      { text: "Tea time ritual", type: "A" },
      { text: "Whenever craving strikes", type: "B" },
      { text: "Exploring new places", type: "C" },
      { text: "Quick snack on the go", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Social gathering में?",
    options: [
      { text: "सबको पसंद, safe choice", type: "A" },
      { text: "Stand out, memorable", type: "B" },
      { text: "Unique conversation starter", type: "C" },
      { text: "Multiple rounds में available", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Price sensitivity?",
    options: [
      { text: "Value for money", type: "A" },
      { text: "Quality के लिए pay करूंगा", type: "B" },
      { text: "Experience matters", type: "C" },
      { text: "Quantity in budget", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Shape matters?",
    options: [
      { text: "Triangle, proper shape", type: "A" },
      { text: "Size बड़ा हो बस", type: "B" },
      { text: "Unique shapes try करता हूं", type: "C" },
      { text: "Compact और neat", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Samosa खाने का style?",
    options: [
      { text: "Bite by bite, properly", type: "A" },
      { text: "Big bites, fast", type: "B" },
      { text: "Experimental, break apart", type: "C" },
      { text: "One go में finish", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Best samosa memory?",
    options: [
      { text: "घर का बना, मां के हाथ का", type: "A" },
      { text: "Famous shop का special", type: "B" },
      { text: "कहीं travel में मिला unique", type: "C" },
      { text: "Office chai break पर", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Samosa chat की तरह?",
    options: [
      { text: "Whole samosa chat best", type: "A" },
      { text: "Extra masala और chole", type: "B" },
      { text: "Fusion versions try", type: "C" },
      { text: "Mini samosa chaat", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपके लिए समोसा?",
    options: [
      { text: "Comfort food, nostalgia", type: "A" },
      { text: "Indulgence और treat", type: "B" },
      { text: "Culinary adventure", type: "C" },
      { text: "Quick energy boost", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "क्लासिक आलू समोसा",
    emoji: "🥟",
    description: "आप Classic Aloo Samosa हैं! Reliable, universally loved और timeless। सबको पसंद आते हैं, कभी disappoint नहीं करते। Traditional value, modern relevance!",
    traits: ["Classic", "Reliable", "Loved", "Traditional"],
    strengths: ["Universal appeal", "Reliability", "Comfort", "Trust"],
    weaknesses: ["Too predictable", "Nothing new"],
    tips: ["कभी-कभी surprise भी दें", "Evolve करते रहें"],
  },
  B: {
    type: "B",
    title: "जंबो स्पाइसी समोसा",
    emoji: "🔥",
    description: "आप Jumbo Spicy Samosa हैं! Big, bold और unforgettable। थोड़े ज्यादा हैं पर वही तो charm है। Go big or go home attitude!",
    traits: ["Bold", "Big", "Spicy", "Memorable"],
    strengths: ["Impact", "Memorability", "Boldness", "Satisfaction"],
    weaknesses: ["Too much for some", "Overwhelming"],
    tips: ["Subtle भी कभी-कभी", "Balance रखें"],
  },
  C: {
    type: "C",
    title: "फ्यूज़न समोसा",
    emoji: "✨",
    description: "आप Fusion Samosa हैं! Paneer, noodles, cheese - कुछ भी हो सकता है। Different, experimental और surprising। Not for everyone, but special for some!",
    traits: ["Innovative", "Different", "Experimental", "Unique"],
    strengths: ["Uniqueness", "Creativity", "Surprise factor", "Innovation"],
    weaknesses: ["Not universally liked", "Inconsistent"],
    tips: ["Classics की value भी समझें", "Target audience जानें"],
  },
  D: {
    type: "D",
    title: "मिनी समोसा",
    emoji: "🍬",
    description: "आप Mini Samosa हैं! Compact, efficient और perfectly portioned। Small पर mighty, quantity में आते हैं। Bite-size excellence!",
    traits: ["Compact", "Efficient", "Multiple", "Precise"],
    strengths: ["Efficiency", "Portability", "Quantity", "Convenience"],
    weaknesses: ["Less impactful individually", "Need more"],
    tips: ["Individual impact भी बढ़ाएं", "Quality > Quantity कभी-कभी"],
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
