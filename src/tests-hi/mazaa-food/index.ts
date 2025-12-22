// भारतीय खाना टेस्ट - आप कौन सा भारतीय खाना हैं?
// Indian Food Personality Test

export const questions = [
  {
    id: 1,
    question: "Personality कैसी है?",
    options: [
      { text: "Spicy और bold", type: "A" },
      { text: "Rich और indulgent", type: "B" },
      { text: "Light और healthy", type: "C" },
      { text: "Comforting और homely", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Social situations में?",
    options: [
      { text: "Center of attention", type: "A" },
      { text: "Premium presence", type: "B" },
      { text: "Easy-going और adaptable", type: "C" },
      { text: "Warm और welcoming", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Morning routine?",
    options: [
      { text: "Energetic start", type: "A" },
      { text: "Grand और elaborate", type: "B" },
      { text: "Simple और quick", type: "C" },
      { text: "Traditional और proper", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Work style?",
    options: [
      { text: "Fast और impactful", type: "A" },
      { text: "Quality over quantity", type: "B" },
      { text: "Efficient और light", type: "C" },
      { text: "Steady और reliable", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Comfort zone?",
    options: [
      { text: "Challenge में मज़ा आता है", type: "A" },
      { text: "Luxury में", type: "B" },
      { text: "कहीं भी adjust", type: "C" },
      { text: "घर में", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Relationships में?",
    options: [
      { text: "Intense और passionate", type: "A" },
      { text: "Lavish और caring", type: "B" },
      { text: "Easy और comfortable", type: "C" },
      { text: "Deep और lasting", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Party में role?",
    options: [
      { text: "जो सबको जगाए", type: "A" },
      { text: "VIP guest", type: "B" },
      { text: "सबके साथ mix होने वाला", type: "C" },
      { text: "घर का माहौल बनाने वाला", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Fashion sense?",
    options: [
      { text: "Bold और colorful", type: "A" },
      { text: "Elegant और expensive", type: "B" },
      { text: "Simple और clean", type: "C" },
      { text: "Traditional और decent", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Energy level?",
    options: [
      { text: "High और intense", type: "A" },
      { text: "Sustained और strong", type: "B" },
      { text: "Balanced और moderate", type: "C" },
      { text: "Calm और steady", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Life में क्या important?",
    options: [
      { text: "Excitement और adventure", type: "A" },
      { text: "Quality और luxury", type: "B" },
      { text: "Simplicity और health", type: "C" },
      { text: "Love और comfort", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Problems से कैसे deal?",
    options: [
      { text: "Head on attack", type: "A" },
      { text: "Premium solutions", type: "B" },
      { text: "Simple approach", type: "C" },
      { text: "Patient handling", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपको describe करें तो?",
    options: [
      { text: "तीखा पर tasty", type: "A" },
      { text: "Royal और memorable", type: "B" },
      { text: "Fresh और light", type: "C" },
      { text: "Soul food", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "मिर्ची पकोड़ा",
    emoji: "🌶️",
    description: "आप मिर्ची पकोड़ा हैं - Spicy, bold और unforgettable! पहली bite में ही असर। Challenge देने वाले, handle करने वाले। जो आपको try करे, याद रखे!",
    traits: ["Spicy", "Bold", "Memorable", "Intense"],
    strengths: ["Impact", "Memorability", "Boldness", "Energy"],
    weaknesses: ["Too much for some", "Overwhelming"],
    tips: ["Tone down कभी-कभी", "Subtle impact भी powerful"],
  },
  B: {
    type: "B",
    title: "बटर चिकन",
    emoji: "🍗",
    description: "आप बटर चिकन हैं - Rich, indulgent और everyone's favourite! Premium experience, सब आपके दीवाने। Creamy personality जो सबको खुश करे!",
    traits: ["Rich", "Popular", "Indulgent", "Premium"],
    strengths: ["Universal appeal", "Quality", "Satisfaction", "Desirability"],
    weaknesses: ["High maintenance", "Expensive tastes"],
    tips: ["Simple joys भी enjoy करें", "Accessible बनें"],
  },
  C: {
    type: "C",
    title: "इडली",
    emoji: "⚪",
    description: "आप इडली हैं - Light, healthy और versatile! कहीं भी, कभी भी fit। Simple लेकिन satisfying। Underrated पर essential personality!",
    traits: ["Light", "Healthy", "Versatile", "Simple"],
    strengths: ["Adaptability", "Health", "Simplicity", "Versatility"],
    weaknesses: ["Too plain कभी-कभी", "Overlooked"],
    tips: ["अपनी value जानें", "Bold भी हों कभी-कभी"],
  },
  D: {
    type: "D",
    title: "दाल चावल",
    emoji: "🍚",
    description: "आप दाल चावल हैं - Comforting, homely और soul food! घर की याद दिलाने वाले, हर रोज़ चलने वाले। Simple लेकिन irreplaceable। Real comfort personality!",
    traits: ["Comforting", "Homely", "Essential", "Reliable"],
    strengths: ["Comfort", "Reliability", "Warmth", "Consistency"],
    weaknesses: ["Too simple कभी-कभी", "Boring लग सकते हैं"],
    tips: ["कभी-कभी adventurous भी हों", "Variety add करें"],
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
