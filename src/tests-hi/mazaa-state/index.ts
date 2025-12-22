// भारतीय राज्य टेस्ट - आप कौन सा राज्य हैं?
// Indian State Personality Test

export const questions = [
  {
    id: 1,
    question: "खाने में क्या पसंद?",
    options: [
      { text: "तीखा और मसालेदार", type: "A" },
      { text: "Sweet और rich", type: "B" },
      { text: "Light और healthy", type: "C" },
      { text: "Non-veg और coastal", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Life approach?",
    options: [
      { text: "Work hard, party harder", type: "A" },
      { text: "Business minded, practical", type: "B" },
      { text: "Peaceful और spiritual", type: "C" },
      { text: "Artistic और expressive", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Festival celebrate करने का तरीका?",
    options: [
      { text: "Grand और loud", type: "A" },
      { text: "Business बंद, family first", type: "B" },
      { text: "Spiritual और meaningful", type: "C" },
      { text: "Unique और cultural", type: "D" },
    ],
  },
  {
    id: 4,
    question: "बात करने का style?",
    options: [
      { text: "Loud और expressive", type: "A" },
      { text: "Smart और business-like", type: "B" },
      { text: "Calm और composed", type: "C" },
      { text: "Poetic और artistic", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Family values?",
    options: [
      { text: "Joint family, big gatherings", type: "A" },
      { text: "Business में family involvement", type: "B" },
      { text: "Traditional और respectful", type: "C" },
      { text: "Close-knit और supportive", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Entertainment preference?",
    options: [
      { text: "Bollywood और dance", type: "A" },
      { text: "Business news और stock market", type: "B" },
      { text: "Music और temples", type: "C" },
      { text: "Theatre और arts", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Travel style?",
    options: [
      { text: "Adventure और road trips", type: "A" },
      { text: "Business class, comfort", type: "B" },
      { text: "Pilgrimages और spiritual", type: "C" },
      { text: "Historical और cultural", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Hospitality?",
    options: [
      { text: "अतिथि देवो भव full on", type: "A" },
      { text: "Professional और proper", type: "B" },
      { text: "Warm और homely", type: "C" },
      { text: "Unique और memorable", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Career goals?",
    options: [
      { text: "Army, sports या entertainment", type: "A" },
      { text: "Business empire", type: "B" },
      { text: "Stable government job", type: "C" },
      { text: "Creative fields", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Conflict में?",
    options: [
      { text: "Direct confrontation", type: "A" },
      { text: "Negotiate और deal", type: "B" },
      { text: "Peaceful resolution", type: "C" },
      { text: "Emotional appeal", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Pride किस बात पर?",
    options: [
      { text: "Culture और bravery", type: "A" },
      { text: "Business और success", type: "B" },
      { text: "Spirituality और heritage", type: "C" },
      { text: "Art और literature", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Life motto?",
    options: [
      { text: "जियो शान से", type: "A" },
      { text: "पैसा बोलता है", type: "B" },
      { text: "शांति और संतोष", type: "C" },
      { text: "कला ही जीवन है", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पंजाब",
    emoji: "💪",
    description: "आप पंजाब हैं - बल्ले बल्ले! Energetic, loud और life of every party। खाने के शौकीन, hospitality के king/queen। बहादुर और दिल के खुले। Full Punjabi vibes!",
    traits: ["Energetic", "Hospitable", "Brave", "Loud"],
    strengths: ["Energy", "Generosity", "Courage", "Celebration"],
    weaknesses: ["Too loud कभी-कभी", "Over the top"],
    tips: ["Subtle भी हो सकते हैं", "Listen more"],
  },
  B: {
    type: "B",
    title: "गुजरात",
    emoji: "💰",
    description: "आप गुजरात हैं - Business minded और practical! हर चीज़ में opportunity देखते हैं। Family values के साथ financial wisdom। Dhokla जैसे light पर substantial!",
    traits: ["Business-minded", "Practical", "Family-oriented", "Smart"],
    strengths: ["Business acumen", "Practicality", "Networking", "Values"],
    weaknesses: ["Too money-focused कभी-कभी", "Workaholic"],
    tips: ["Enjoy life beyond business", "Relax करना सीखें"],
  },
  C: {
    type: "C",
    title: "तमिलनाडु",
    emoji: "🙏",
    description: "आप तमिलनाडु हैं - Rich heritage और spirituality! Temple culture, classical arts और proud traditions। Disciplined और cultured। Filter coffee जैसे strong और authentic!",
    traits: ["Cultural", "Spiritual", "Disciplined", "Proud"],
    strengths: ["Heritage", "Discipline", "Spirituality", "Arts"],
    weaknesses: ["Too traditional कभी-कभी", "Rigid"],
    tips: ["New things embrace करें", "Flexibility लाएं"],
  },
  D: {
    type: "D",
    title: "पश्चिम बंगाल",
    emoji: "🎭",
    description: "आप पश्चिम बंगाल हैं - Artistic और intellectual! Rabindranath से लेकर Satyajit Ray तक। Adda culture, mishti doi और deep thinking। সব কিছু মজা আছে!",
    traits: ["Artistic", "Intellectual", "Emotional", "Cultural"],
    strengths: ["Creativity", "Intelligence", "Culture", "Expression"],
    weaknesses: ["Too emotional कभी-कभी", "Impractical"],
    tips: ["Practical भी बनें", "Action भी लें"],
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
