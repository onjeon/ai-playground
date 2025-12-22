// हनीमून प्लानिंग - आपका ideal honeymoon
// Honeymoon Planning Test

export const questions = [
  {
    id: 1,
    question: "Dream honeymoon destination?",
    options: [
      { text: "Exotic international (Maldives, Europe)", type: "A" },
      { text: "Beautiful domestic (Goa, Kerala)", type: "B" },
      { text: "Adventure destination (mountains)", type: "C" },
      { text: "Anywhere, बस साथ हों", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Duration ideal?",
    options: [
      { text: "2+ weeks, लंबी trip", type: "A" },
      { text: "1 week perfect", type: "B" },
      { text: "4-5 days काफी", type: "C" },
      { text: "जितना हो सके", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Accommodation preference?",
    options: [
      { text: "Luxury resort/5-star", type: "A" },
      { text: "Nice hotel/boutique stay", type: "B" },
      { text: "Comfortable, decent", type: "C" },
      { text: "Budget-friendly works", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Activities on honeymoon?",
    options: [
      { text: "Spa, relaxation, couple activities", type: "A" },
      { text: "Sightseeing और quality time", type: "B" },
      { text: "Adventure sports, exploring", type: "C" },
      { text: "Just being together, chill", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Budget approach?",
    options: [
      { text: "Once in lifetime, no limit", type: "A" },
      { text: "अच्छा budget, worth it", type: "B" },
      { text: "Reasonable, don't overspend", type: "C" },
      { text: "Save money, future जरूरी", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Planning कौन करेगा?",
    options: [
      { text: "Together, fun होगा", type: "A" },
      { text: "मैं mostly, surprise element", type: "B" },
      { text: "Partner करे", type: "C" },
      { text: "Agent/family help", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Social media on honeymoon?",
    options: [
      { text: "Pictures post करेंगे", type: "A" },
      { text: "कुछ share, बाकी private", type: "B" },
      { text: "बाद में post", type: "C" },
      { text: "No phones, offline", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Extended family साथ?",
    options: [
      { text: "बिल्कुल नहीं, couple time", type: "A" },
      { text: "शुरू में separate, बाद में maybe", type: "B" },
      { text: "Family trip बाद में अलग", type: "C" },
      { text: "Family साथ okay भी", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Honeymoon कब?",
    options: [
      { text: "शादी के तुरंत बाद", type: "A" },
      { text: "कुछ हफ्ते बाद, settle होकर", type: "B" },
      { text: "जब time मिले", type: "C" },
      { text: "जरूरी नहीं है", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Special arrangements?",
    options: [
      { text: "Candlelight, flowers, surprises", type: "A" },
      { text: "कुछ special touches", type: "B" },
      { text: "Normal trip जैसा", type: "C" },
      { text: "Extra नहीं चाहिए", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Honeymoon expectations?",
    options: [
      { text: "Most romantic trip ever", type: "A" },
      { text: "Beautiful experience together", type: "B" },
      { text: "Nice vacation", type: "C" },
      { text: "कोई खास expectations नहीं", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Honeymoon importance?",
    options: [
      { text: "Essential, शादी incomplete without", type: "A" },
      { text: "Important, करना चाहिए", type: "B" },
      { text: "Nice to have", type: "C" },
      { text: "Optional है", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Dream Honeymooner",
    emoji: "🏝️",
    description: "आपका honeymoon dreamy और luxurious होगा! Best destination, best experience। Once in lifetime!",
    traits: ["dreamy", "romantic", "luxurious", "planner"],
    strengths: ["memorable experience", "romantic start"],
    weaknesses: ["expensive", "high expectations"],
    tips: ["budget plan करें", "experience > expense"],
  },
  B: {
    type: "B",
    title: "Balanced Traveler",
    emoji: "✈️",
    description: "Nice honeymoon पर balanced approach। Quality experience without going overboard।",
    traits: ["balanced", "practical romantic", "thoughtful", "planning"],
    strengths: ["good experience", "reasonable"],
    weaknesses: ["may second guess choices"],
    tips: ["enjoy without overthinking"],
  },
  C: {
    type: "C",
    title: "Practical Planner",
    emoji: "🗺️",
    description: "Honeymoon करेंगे पर practical approach। Experience important, not fancy stuff।",
    traits: ["practical", "reasonable", "simple", "grounded"],
    strengths: ["saves money", "genuine experience"],
    weaknesses: ["partner को more चाहिए maybe"],
    tips: ["partner की wishes भी consider करें"],
  },
  D: {
    type: "D",
    title: "Minimal Honeymooner",
    emoji: "🤷",
    description: "Honeymoon priority नहीं है। Together होना जरूरी, fancy trip नहीं।",
    traits: ["minimal", "practical", "together-focused", "simple"],
    strengths: ["presence matters", "no pressure"],
    weaknesses: ["may miss special experience"],
    tips: ["कुछ special भी plan करें", "memories matter"],
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
