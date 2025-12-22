// बॉलीवुड हीरोइन टेस्ट - आप कौन सी बॉलीवुड हीरोइन हैं?
// Bollywood Heroine Test

export const questions = [
  {
    id: 1,
    question: "आपका ideal weekend कैसा होगा?",
    options: [
      { text: "Fitness और yoga session", type: "A" },
      { text: "Family के साथ quality time", type: "B" },
      { text: "Shopping और parties", type: "C" },
      { text: "Books और self-improvement", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Career में आपका approach?",
    options: [
      { text: "Work hard, stay fit, conquer all", type: "A" },
      { text: "Balance everything gracefully", type: "B" },
      { text: "Make it big, live glamorous", type: "C" },
      { text: "Meaningful work over fame", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Fashion sense कैसी है?",
    options: [
      { text: "Trendy और experimental", type: "A" },
      { text: "Elegant और traditional", type: "B" },
      { text: "Bold और glamorous", type: "C" },
      { text: "Simple और classy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Love life में priority?",
    options: [
      { text: "Partner जो support करे goals में", type: "A" },
      { text: "Traditional love और family values", type: "B" },
      { text: "Exciting और passionate romance", type: "C" },
      { text: "Deep connection और understanding", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Criticism handle कैसे करती हैं?",
    options: [
      { text: "Sassy comeback देती हूं", type: "A" },
      { text: "Grace से handle करती हूं", type: "B" },
      { text: "Bold statement से shut up", type: "C" },
      { text: "Ignore करके work पर focus", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Party में आप?",
    options: [
      { text: "Dance floor की queen", type: "A" },
      { text: "Grace से mingle करती हूं", type: "B" },
      { text: "All eyes on me", type: "C" },
      { text: "Meaningful conversations में", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Social media पर आप?",
    options: [
      { text: "Fitness और travel posts", type: "A" },
      { text: "Family और traditional moments", type: "B" },
      { text: "Glamorous photoshoots", type: "C" },
      { text: "Thoughts और opinions share", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Life का biggest goal?",
    options: [
      { text: "Global recognition पाना", type: "A" },
      { text: "Happy family और successful career", type: "B" },
      { text: "Ultimate stardom", type: "C" },
      { text: "Meaningful contribution to society", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Favorite type of role?",
    options: [
      { text: "Strong, independent character", type: "A" },
      { text: "Emotional और family-centric", type: "B" },
      { text: "Glamorous और bold", type: "C" },
      { text: "Real और relatable", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Friends के साथ?",
    options: [
      { text: "Small circle, loyal friends", type: "A" },
      { text: "Warm और welcoming सबके साथ", type: "B" },
      { text: "Party queen with squad", type: "C" },
      { text: "Deep और meaningful friendships", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Conflict में approach?",
    options: [
      { text: "Direct और straightforward", type: "A" },
      { text: "Peaceful resolution", type: "B" },
      { text: "Bold और unapologetic", type: "C" },
      { text: "Thoughtful discussion", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Success को कैसे define करेंगी?",
    options: [
      { text: "Breaking barriers", type: "A" },
      { text: "Love और respect of people", type: "B" },
      { text: "Fame और fortune", type: "C" },
      { text: "Creating impact", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "दीपिका पादुकोण",
    emoji: "💪",
    description: "आप powerful, graceful और goal-oriented हैं! Fitness lover, hardworking और globally minded। आप barriers तोड़ती हैं और अपनी journey खुद बनाती हैं। Strong और beautiful inside out!",
    traits: ["Powerful", "Graceful", "Ambitious", "Fitness-focused"],
    strengths: ["Determination", "Global appeal", "Grace under pressure", "Discipline"],
    weaknesses: ["Too focused on goals कभी-कभी", "Hard on yourself"],
    tips: ["Self-care भी important है", "Celebrate small wins"],
  },
  B: {
    type: "B",
    title: "काजोल",
    emoji: "❤️",
    description: "आप warm, emotional और family-first हैं! Traditional values के साथ modern outlook। Natural charm है, pretentious नहीं। सबके दिल में जगह बना लेती हैं अपनी realness से!",
    traits: ["Warm", "Emotional", "Family-oriented", "Real"],
    strengths: ["Authenticity", "Emotional depth", "Relatability", "Loyalty"],
    weaknesses: ["Too emotional कभी-कभी", "Hard to let go"],
    tips: ["अपने लिए भी time निकालें", "Balance emotions"],
  },
  C: {
    type: "C",
    title: "करीना कपूर खान",
    emoji: "👸",
    description: "आप bold, glamorous और unapologetic हैं! Poo की तरह attitude और Geet की तरह spark। Fashion icon, trendsetter और drama queen। आप जहां जाती हैं, spotlight आपके पीछे आती है!",
    traits: ["Bold", "Glamorous", "Confident", "Trendsetter"],
    strengths: ["Confidence", "Fashion sense", "Entertainment value", "Boldness"],
    weaknesses: ["Too dramatic कभी-कभी", "Can seem arrogant"],
    tips: ["Humility भी charm है", "Listen more"],
  },
  D: {
    type: "D",
    title: "विद्या बालन",
    emoji: "🎭",
    description: "आप intelligent, meaningful और grounded हैं! Substance over style, depth over glamour। अपने choices से impact बनाती हैं। Real और relatable, हर role में soul डालती हैं!",
    traits: ["Intelligent", "Meaningful", "Grounded", "Impactful"],
    strengths: ["Depth", "Intelligence", "Authenticity", "Content-focused"],
    weaknesses: ["Too serious कभी-कभी", "Underestimate glamour"],
    tips: ["Fun भी enjoy करें", "Light moments भी जरूरी"],
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
