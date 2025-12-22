// मंदिर यात्री टेस्ट - आप कैसे मंदिर जाते हैं?
// Temple Visitor Type Test

export const questions = [
  {
    id: 1,
    question: "मंदिर कब जाते हैं?",
    options: [
      { text: "रोज़ सुबह-शाम", type: "A" },
      { text: "Festival और special occasions पर", type: "B" },
      { text: "जब कोई wish हो", type: "C" },
      { text: "Family के साथ जब भी जाना हो", type: "D" },
    ],
  },
  {
    id: 2,
    question: "मंदिर में क्या करते हैं?",
    options: [
      { text: "लंबी पूजा और जाप", type: "A" },
      { text: "दर्शन करके photo", type: "B" },
      { text: "मन्नत मांगते हैं", type: "C" },
      { text: "Peaceful बैठकर time spend", type: "D" },
    ],
  },
  {
    id: 3,
    question: "प्रसाद के बारे में?",
    options: [
      { text: "खुद बनाकर लाता हूं", type: "A" },
      { text: "Best quality खरीदता हूं", type: "B" },
      { text: "जो मिले वो", type: "C" },
      { text: "सबको बांटने का सुख", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Line में?",
    options: [
      { text: "कितनी भी long हो, wait करता हूं", type: "A" },
      { text: "VIP/Special darshan prefer", type: "B" },
      { text: "Short line का time देखता हूं", type: "C" },
      { text: "Family को comfortable रखता हूं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "दान-पुण्य?",
    options: [
      { text: "Regular और disciplined", type: "A" },
      { text: "Special occasions पर generous", type: "B" },
      { text: "जितना afford कर सकूं", type: "C" },
      { text: "गरीबों को directly", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Dress code?",
    options: [
      { text: "Traditional - धोती/साड़ी", type: "A" },
      { text: "Best ethnic wear", type: "B" },
      { text: "Clean और decent", type: "C" },
      { text: "Comfortable for family", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Mantra और shlokas?",
    options: [
      { text: "पूरे याद हैं, रोज़ पढ़ता हूं", type: "A" },
      { text: "कुछ famous ones पता हैं", type: "B" },
      { text: "Phone में देख लेता हूं", type: "C" },
      { text: "दिल से बात करता हूं भगवान से", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pilgrimage trips?",
    options: [
      { text: "Char Dham, 12 Jyotirling complete", type: "A" },
      { text: "Famous temples visit किए हैं", type: "B" },
      { text: "जब opportunity मिले", type: "C" },
      { text: "Family vacation cum darshan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "मंदिर में मन?",
    options: [
      { text: "Complete focus, meditation", type: "A" },
      { text: "Photos और memories", type: "B" },
      { text: "Wishes और requests", type: "C" },
      { text: "Peace और family time", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Temple architecture में interest?",
    options: [
      { text: "हर शिल्प की knowledge", type: "A" },
      { text: "Beautiful photos लेता हूं", type: "B" },
      { text: "Notice नहीं करता ज्यादा", type: "C" },
      { text: "History सुनना पसंद", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Prasad खाने का style?",
    options: [
      { text: "श्रद्धा से, rules follow करके", type: "A" },
      { text: "Foodie style, taste करके", type: "B" },
      { text: "जल्दी से", type: "C" },
      { text: "सबके साथ share करके", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपके लिए मंदिर?",
    options: [
      { text: "जीवन का अभिन्न अंग", type: "A" },
      { text: "Cultural experience", type: "B" },
      { text: "Hope और faith", type: "C" },
      { text: "Family bonding spot", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "भक्त प्रहलाद",
    emoji: "🙏",
    description: "आप True Devotee हैं! धर्म-कर्म में पूरी श्रद्धा। नियमित पूजा, व्रत और मंदिर जाना। भगवान के सच्चे भक्त, spiritual journey पर!",
    traits: ["Devoted", "Disciplined", "Spiritual", "Traditional"],
    strengths: ["Faith", "Discipline", "Knowledge", "Commitment"],
    weaknesses: ["Too rigid कभी-कभी", "Judge others"],
    tips: ["दूसरों की spiritual journey respect करें", "Flexible भी रहें"],
  },
  B: {
    type: "B",
    title: "Festival भक्त",
    emoji: "🎊",
    description: "आप Festival Temple-goer हैं! Special occasions पर full devotion। Grand celebration, best clothes और memorable visits। Cultural और religious दोनों!",
    traits: ["Cultural", "Celebratory", "Social", "Occasional"],
    strengths: ["Celebration", "Social bonding", "Traditions", "Memories"],
    weaknesses: ["Irregular", "Surface level sometimes"],
    tips: ["Regular connection भी बनाएं", "Depth explore करें"],
  },
  C: {
    type: "C",
    title: "Wish-list भक्त",
    emoji: "🌟",
    description: "आप Practical Devotee हैं! मंदिर = Wish fulfillment center। जब need हो तब जाते हैं, मन्नत मांगते हैं। Transactional relationship with God!",
    traits: ["Practical", "Hopeful", "Need-based", "Honest"],
    strengths: ["Honesty", "Practicality", "Hope", "Faith in tough times"],
    weaknesses: ["Only in need", "Miss regular connection"],
    tips: ["Gratitude भी express करें", "Regular visits try करें"],
  },
  D: {
    type: "D",
    title: "Family भक्त",
    emoji: "👨‍👩‍👧‍👦",
    description: "आप Family Temple-goer हैं! मंदिर = Family bonding time। सबके साथ जाना, peace feel करना, memories बनाना। Religion + Family time combo!",
    traits: ["Family-oriented", "Peaceful", "Bonding-focused", "Caring"],
    strengths: ["Family values", "Peace seeking", "Togetherness", "Balance"],
    weaknesses: ["Less individual spirituality", "Dependent on others"],
    tips: ["Personal spiritual time भी निकालें", "Individual connection बनाएं"],
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
