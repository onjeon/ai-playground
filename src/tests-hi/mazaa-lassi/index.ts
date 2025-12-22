// लस्सी प्रकार टेस्ट - आप कौन सी लस्सी हैं?
// Lassi Type Personality Test

export const questions = [
  {
    id: 1,
    question: "Life में sweetness?",
    options: [
      { text: "बहुत sweet, meethi life", type: "A" },
      { text: "Tangy और interesting", type: "B" },
      { text: "Rich और indulgent", type: "C" },
      { text: "Plain और simple", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Energy level?",
    options: [
      { text: "High और happy", type: "A" },
      { text: "Refreshing और zingy", type: "B" },
      { text: "Sustained और strong", type: "C" },
      { text: "Calm और steady", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Summer में survival?",
    options: [
      { text: "Sweet drinks और kulfi", type: "A" },
      { text: "Nimbu paani और tang", type: "B" },
      { text: "Mango shake और desserts", type: "C" },
      { text: "Plain water और simple drinks", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Morning routine?",
    options: [
      { text: "Sweet start, happy vibes", type: "A" },
      { text: "Tangy breakfast, kick start", type: "B" },
      { text: "Rich breakfast, full energy", type: "C" },
      { text: "Light और healthy", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Social personality?",
    options: [
      { text: "Sweet और likeable", type: "A" },
      { text: "Interesting और different", type: "B" },
      { text: "Premium और impressive", type: "C" },
      { text: "Genuine और authentic", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Topping preference?",
    options: [
      { text: "Malai और cream", type: "A" },
      { text: "Masala और mint", type: "B" },
      { text: "Dry fruits और saffron", type: "C" },
      { text: "No topping, pure taste", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Perfect occasion?",
    options: [
      { text: "Party और celebration", type: "A" },
      { text: "Summer afternoon refreshment", type: "B" },
      { text: "Special dinner compliment", type: "C" },
      { text: "Daily diet", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Texture preference?",
    options: [
      { text: "Thick और creamy", type: "A" },
      { text: "Light और refreshing", type: "B" },
      { text: "Rich और dense", type: "C" },
      { text: "Smooth और simple", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Health consciousness?",
    options: [
      { text: "कभी-कभी indulge ठीक है", type: "A" },
      { text: "Probiotic benefits", type: "B" },
      { text: "Worth the calories", type: "C" },
      { text: "Healthy और beneficial", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Glass size?",
    options: [
      { text: "Punjabi style बड़ा glass", type: "A" },
      { text: "Medium, refreshing amount", type: "B" },
      { text: "Small पर premium quality", type: "C" },
      { text: "Regular serving", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Pairing preference?",
    options: [
      { text: "पराठे के साथ", type: "A" },
      { text: "Spicy food के साथ coolant", type: "B" },
      { text: "Dessert के रूप में", type: "C" },
      { text: "Any meal के साथ", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपके लिए lassi?",
    options: [
      { text: "Happiness in a glass", type: "A" },
      { text: "Refreshing relief", type: "B" },
      { text: "Indulgent treat", type: "C" },
      { text: "Healthy habit", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "मीठी लस्सी",
    emoji: "🍯",
    description: "आप Meethi Lassi हैं - Sweet, creamy और loveable! Punjabi vibes, happiness spreading। सबको खुश कर देते हैं अपनी sweetness से। Life of the party!",
    traits: ["Sweet", "Creamy", "Happy", "Loveable"],
    strengths: ["Sweetness", "Happiness", "Approachability", "Joy"],
    weaknesses: ["Too sweet कभी-कभी", "Overwhelming"],
    tips: ["Balance भी important है", "Subtle sweetness try करें"],
  },
  B: {
    type: "B",
    title: "नमकीन लस्सी",
    emoji: "🧂",
    description: "आप Namkeen Lassi हैं - Tangy, refreshing और different! जब सब sweet हों, आप different हैं। Cooling और zingy personality। Acquired taste, loyal fans!",
    traits: ["Tangy", "Refreshing", "Different", "Cool"],
    strengths: ["Uniqueness", "Refreshing", "Cooling", "Different"],
    weaknesses: ["Not for everyone", "Acquired taste"],
    tips: ["Mainstream भी समझें", "Explain your uniqueness"],
  },
  C: {
    type: "C",
    title: "केसर बादाम लस्सी",
    emoji: "✨",
    description: "आप Kesar Badam Lassi हैं - Premium, rich और special! Not everyday drink, special occasions वाली। Luxury experience, worth the extra!",
    traits: ["Premium", "Rich", "Special", "Luxurious"],
    strengths: ["Quality", "Specialness", "Richness", "Value"],
    weaknesses: ["High maintenance", "Expensive"],
    tips: ["Simple भी enjoy करें", "Accessibility भी important"],
  },
  D: {
    type: "D",
    title: "प्लेन लस्सी",
    emoji: "⚪",
    description: "आप Plain Lassi हैं - Pure, authentic और healthy! No frills, just quality। Genuine और straightforward। Health-conscious और real personality!",
    traits: ["Pure", "Authentic", "Healthy", "Simple"],
    strengths: ["Authenticity", "Health", "Simplicity", "Purity"],
    weaknesses: ["Too plain कभी-कभी", "Boring for some"],
    tips: ["कभी-कभी exciting भी हों", "Variety add करें"],
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
