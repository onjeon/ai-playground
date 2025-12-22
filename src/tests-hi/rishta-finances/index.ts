// पैसों का प्रबंधन - Financial management in relationship
// Relationship Finances Test

export const questions = [
  {
    id: 1,
    question: "पैसों के बारे में बात?",
    options: [
      { text: "Openly discuss करते हैं", type: "A" },
      { text: "जरूरत पर बात करते हैं", type: "B" },
      { text: "Avoid करते हैं topic", type: "C" },
      { text: "पैसे personal है", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Joint या separate accounts?",
    options: [
      { text: "Fully joint, सब एक में", type: "A" },
      { text: "Joint + individual दोनों", type: "B" },
      { text: "Mostly separate", type: "C" },
      { text: "पूरी तरह separate", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bills कौन pay करे?",
    options: [
      { text: "Combined income से", type: "A" },
      { text: "Split करते हैं", type: "B" },
      { text: "जो ज्यादा कमाए", type: "C" },
      { text: "Turn by turn", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Big purchases?",
    options: [
      { text: "दोनों की agreement जरूरी", type: "A" },
      { text: "Discuss करके decide", type: "B" },
      { text: "Inform कर देते हैं", type: "C" },
      { text: "अपना पैसा, अपनी मर्जी", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Savings approach?",
    options: [
      { text: "Joint savings goals", type: "A" },
      { text: "Common + individual savings", type: "B" },
      { text: "Separate savings prefer", type: "C" },
      { text: "अपनी savings अपनी", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Partner ज्यादा कमाए?",
    options: [
      { text: "Proud हूं, team effort", type: "A" },
      { text: "Okay है, happy for them", type: "B" },
      { text: "थोड़ा odd लगता है", type: "C" },
      { text: "Ego hurt होता है", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Partner का spending अलग style?",
    options: [
      { text: "Discuss करके middle ground", type: "A" },
      { text: "Adjust करते हैं", type: "B" },
      { text: "अक्सर conflict होता है", type: "C" },
      { text: "Serious issue है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Debts और loans?",
    options: [
      { text: "साथ में tackle करेंगे", type: "A" },
      { text: "Discuss करके plan", type: "B" },
      { text: "Individual responsibility", type: "C" },
      { text: "उनका debt उनका problem", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Financial goals?",
    options: [
      { text: "Common goals, plan है", type: "A" },
      { text: "Discuss किए हैं", type: "B" },
      { text: "अपने-अपने goals", type: "C" },
      { text: "बात नहीं हुई", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Emergency fund?",
    options: [
      { text: "Joint emergency fund", type: "A" },
      { text: "दोनों के पास है", type: "B" },
      { text: "अपना-अपना है", type: "C" },
      { text: "Fund नहीं है अभी", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Family को financial help?",
    options: [
      { text: "Discuss करके, दोनों families", type: "A" },
      { text: "जरूरत पर help", type: "B" },
      { text: "अपनी family अपनी responsibility", type: "C" },
      { text: "Partner की family में क्या लेना", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall financial approach?",
    options: [
      { text: "Team approach, transparent", type: "A" },
      { text: "Coordinated, respectful", type: "B" },
      { text: "Mixed, कुछ share कुछ नहीं", type: "C" },
      { text: "Separate finances", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पूर्ण साझेदार",
    emoji: "💰",
    description: "आप financial matters में completely transparent और joint हैं। Team approach!",
    traits: ["transparent", "joint", "team-player", "sharing"],
    strengths: ["unity", "shared goals", "no secrets"],
    weaknesses: ["individual freedom कम"],
    tips: ["कुछ personal spending space भी रखें"],
  },
  B: {
    type: "B",
    title: "बैलेंस्ड फाइनेंसर",
    emoji: "⚖️",
    description: "Joint और individual का perfect balance। Smart और practical approach।",
    traits: ["balanced", "practical", "coordinated", "smart"],
    strengths: ["best of both worlds", "autonomy + unity"],
    weaknesses: ["कभी-कभी confusion"],
    tips: ["clear system बनाएं", "regularly review करें"],
  },
  C: {
    type: "C",
    title: "इंडिपेंडेंट फाइनेंसर",
    emoji: "💳",
    description: "Mostly separate finances prefer करते हैं। Individual approach।",
    traits: ["independent", "private", "autonomous", "separate"],
    strengths: ["financial independence"],
    weaknesses: ["may create distance", "coordination कम"],
    tips: ["common goals set करें", "transparency बढ़ाएं"],
  },
  D: {
    type: "D",
    title: "सेपरेट फाइनेंसर",
    emoji: "🔐",
    description: "पूरी तरह separate finances। Money matters private रखते हैं।",
    traits: ["fully separate", "private", "individual", "closed"],
    strengths: ["no financial conflicts"],
    weaknesses: ["unity कम", "secrets possible"],
    tips: ["कुछ transparency जरूरी है", "trust build करें"],
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
