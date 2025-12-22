// बाइक राइडर टेस्ट - Bike Rider Test
// Bike Rider Test

export const questions = [
  {
    id: 1,
    question: "बाइक राइडर टेस्ट के बारे में पहला सवाल?",
    options: [
      { text: "पहला विकल्प - Bullet Rider style", type: "A" },
      { text: "दूसरा विकल्प - Scooty King style", type: "B" },
      { text: "तीसरा विकल्प - Traffic Ninja style", type: "C" },
      { text: "चौथा विकल्प - Helmet Avoider style", type: "D" },
    ],
  },
  {
    id: 2,
    question: "दूसरा सवाल - आपका approach?",
    options: [
      { text: "Systematic और planned", type: "A" },
      { text: "Moderate और balanced", type: "B" },
      { text: "Flexible और adaptable", type: "C" },
      { text: "Casual और relaxed", type: "D" },
    ],
  },
  {
    id: 3,
    question: "तीसरा सवाल - preference?",
    options: [
      { text: "Quality over quantity", type: "A" },
      { text: "Balance of both", type: "B" },
      { text: "Quantity matters", type: "C" },
      { text: "Whatever works", type: "D" },
    ],
  },
  {
    id: 4,
    question: "चौथा सवाल - time management?",
    options: [
      { text: "Always on time", type: "A" },
      { text: "Usually punctual", type: "B" },
      { text: "Fashionably late", type: "C" },
      { text: "Time is relative", type: "D" },
    ],
  },
  {
    id: 5,
    question: "पांचवा सवाल - social aspect?",
    options: [
      { text: "Love socializing", type: "A" },
      { text: "Selective socializing", type: "B" },
      { text: "Prefer alone", type: "C" },
      { text: "Depends on mood", type: "D" },
    ],
  },
  {
    id: 6,
    question: "छठा सवाल - decision making?",
    options: [
      { text: "Quick decisions", type: "A" },
      { text: "Thoughtful approach", type: "B" },
      { text: "Go with the flow", type: "C" },
      { text: "Avoid decisions", type: "D" },
    ],
  },
  {
    id: 7,
    question: "सातवां सवाल - priority?",
    options: [
      { text: "Work first", type: "A" },
      { text: "Balance everything", type: "B" },
      { text: "Enjoy first", type: "C" },
      { text: "No priorities", type: "D" },
    ],
  },
  {
    id: 8,
    question: "आठवां सवाल - stress handling?",
    options: [
      { text: "Handle like a pro", type: "A" },
      { text: "Manage okay", type: "B" },
      { text: "Struggle sometimes", type: "C" },
      { text: "Stress? What stress?", type: "D" },
    ],
  },
  {
    id: 9,
    question: "नौवां सवाल - learning style?",
    options: [
      { text: "Books और research", type: "A" },
      { text: "Learning by doing", type: "B" },
      { text: "Videos और tutorials", type: "C" },
      { text: "Trial and error", type: "D" },
    ],
  },
  {
    id: 10,
    question: "दसवां सवाल - money approach?",
    options: [
      { text: "Save everything", type: "A" },
      { text: "Save and spend", type: "B" },
      { text: "Spend and enjoy", type: "C" },
      { text: "Money comes and goes", type: "D" },
    ],
  },
  {
    id: 11,
    question: "ग्यारहवां सवाल - future planning?",
    options: [
      { text: "5 year plans", type: "A" },
      { text: "1 year plans", type: "B" },
      { text: "Live in present", type: "C" },
      { text: "No plans", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आखिरी सवाल - life philosophy?",
    options: [
      { text: "जियो शान से", type: "A" },
      { text: "संतुलन में जियो", type: "B" },
      { text: "मस्त रहो", type: "C" },
      { text: "जैसा भी हो", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bullet Rider",
    emoji: "🏍️",
    description: "आप Bullet Rider category में हैं! Systematic, planned और organized approach। हर चीज़ में quality देखते हैं और best चाहते हैं।",
    traits: ["Organized", "Quality-focused", "Planned", "Systematic"],
    strengths: ["Organization", "Quality", "Planning", "Focus"],
    weaknesses: ["Too rigid कभी-कभी", "Perfectionist"],
    tips: ["Flexibility भी ज़रूरी है", "Perfect से better is good enough"],
  },
  B: {
    type: "B",
    title: "Scooty King",
    emoji: "🏍️",
    description: "आप Scooty King category में हैं! Balanced approach, न ज्यादा strict न ज्यादा loose। Middle path prefer करते हैं।",
    traits: ["Balanced", "Moderate", "Thoughtful", "Practical"],
    strengths: ["Balance", "Adaptability", "Practicality", "Wisdom"],
    weaknesses: ["Can be indecisive", "Middle of the road"],
    tips: ["कभी-कभी bold decisions भी लें", "Stand for something"],
  },
  C: {
    type: "C",
    title: "Traffic Ninja",
    emoji: "🏍️",
    description: "आप Traffic Ninja category में हैं! Flexible और adaptable nature। Situation के हिसाब से adjust कर लेते हैं।",
    traits: ["Flexible", "Adaptable", "Easy-going", "Versatile"],
    strengths: ["Flexibility", "Adaptability", "Ease", "Versatility"],
    weaknesses: ["Inconsistent कभी-कभी", "Lack focus"],
    tips: ["कुछ consistency लाएं", "Goals set करें"],
  },
  D: {
    type: "D",
    title: "Helmet Avoider",
    emoji: "🏍️",
    description: "आप Helmet Avoider category में हैं! Relaxed और casual approach। Life को seriously नहीं लेते, बस enjoy करते हैं।",
    traits: ["Relaxed", "Casual", "Free-spirited", "Carefree"],
    strengths: ["Stress-free", "Enjoyment", "Freedom", "Simplicity"],
    weaknesses: ["Too casual कभी-कभी", "Miss opportunities"],
    tips: ["थोड़ा serious भी हों", "Opportunities grab करें"],
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
