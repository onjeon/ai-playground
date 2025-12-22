// मेट्रो यात्री टाइप टेस्ट - आप कौन से मेट्रो passenger हैं?
// Metro Passenger Type Test

export const questions = [
  {
    id: 1,
    question: "Platform पर खड़े होकर?",
    options: [
      { text: "Door के सामने, first entry", type: "A" },
      { text: "Line में properly", type: "B" },
      { text: "कहीं भी, जहां जगह मिले", type: "C" },
      { text: "Phone में busy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Seat मिल जाए तो?",
    options: [
      { text: "मेरा हक है, बैठूंगा", type: "A" },
      { text: "Elderly को offer करता हूं", type: "B" },
      { text: "जो हो, चलता है", type: "C" },
      { text: "बैठकर phone देखता हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Rush hour में?",
    options: [
      { text: "Push करके अंदर", type: "A" },
      { text: "अगली train wait करता हूं", type: "B" },
      { text: "जैसे-तैसे adjust", type: "C" },
      { text: "Music लगाकर zone out", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ladies coach के पास?",
    options: [
      { text: "Rules तो rules हैं", type: "A" },
      { text: "Respect करता हूं", type: "B" },
      { text: "कभी-कभी गलती से", type: "C" },
      { text: "Notice ही नहीं किया", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Metro में time pass?",
    options: [
      { text: "जल्दी उतरने की strategy", type: "A" },
      { text: "Book या newspaper", type: "B" },
      { text: "Window से देखता हूं", type: "C" },
      { text: "Phone scrolling", type: "D" },
    ],
  },
  {
    id: 6,
    question: "AC का temperature?",
    options: [
      { text: "जैसा है वैसा", type: "A" },
      { text: "Jacket रखता हूं", type: "B" },
      { text: "कोई फर्क नहीं पड़ता", type: "C" },
      { text: "Headphones में lost", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Exit पर?",
    options: [
      { text: "सबसे पहले बाहर", type: "A" },
      { text: "Orderly exit", type: "B" },
      { text: "Flow के साथ", type: "C" },
      { text: "Last moment dash", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Metro card?",
    options: [
      { text: "Smart card, fast entry", type: "A" },
      { text: "Monthly pass, organized", type: "B" },
      { text: "Token ही ठीक है", type: "C" },
      { text: "UPI से recharge", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Announcements को?",
    options: [
      { text: "Ignore, route पता है", type: "A" },
      { text: "सुनता हूं carefully", type: "B" },
      { text: "Background noise", type: "C" },
      { text: "Headphones की वजह से सुनाई नहीं देता", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Metro में eating?",
    options: [
      { text: "Rules तो break करने के लिए होते हैं", type: "A" },
      { text: "Never, rules follow", type: "B" },
      { text: "चुपके से कभी-कभी", type: "C" },
      { text: "Notice ही नहीं करता rules", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Fellow passengers से?",
    options: [
      { text: "Eye contact avoid", type: "A" },
      { text: "Smile और nod", type: "B" },
      { text: "कभी-कभी बात", type: "C" },
      { text: "Own world में", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Metro का experience?",
    options: [
      { text: "Just transport, nothing else", type: "A" },
      { text: "Comfortable और efficient", type: "B" },
      { text: "चलता है", type: "C" },
      { text: "Me-time का chance", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Professional Commuter",
    emoji: "💼",
    description: "आप Pro Metro Rider हैं! Route पता है, timing perfect, strategy ready। जल्दी पहुंचना goal, efficiency priority। Metro को master कर लिया है आपने!",
    traits: ["Efficient", "Strategic", "Professional", "Fast"],
    strengths: ["Time management", "Efficiency", "Strategy", "Experience"],
    weaknesses: ["Too aggressive कभी-कभी", "Impatient"],
    tips: ["Relax भी करें", "Others का ध्यान रखें"],
  },
  B: {
    type: "B",
    title: "Ideal Passenger",
    emoji: "😇",
    description: "आप Model Metro Passenger हैं! Rules follow, elderly को seat, line में खड़े। Metro etiquette का example। Civilized और respectful commuter!",
    traits: ["Respectful", "Rule-following", "Considerate", "Organized"],
    strengths: ["Discipline", "Respect", "Consideration", "Order"],
    weaknesses: ["Too proper कभी-कभी", "Slow"],
    tips: ["कभी-कभी flexible भी हों", "Adapt करें"],
  },
  C: {
    type: "C",
    title: "Chill Commuter",
    emoji: "😌",
    description: "आप Relaxed Metro Rider हैं! जो हो वो चलता है, कोई stress नहीं। Seat मिले ठीक, ना मिले ठीक। Life को easy लेने वाले!",
    traits: ["Relaxed", "Adaptable", "Easy-going", "Flexible"],
    strengths: ["Stress-free", "Adaptability", "Flexibility", "Calm"],
    weaknesses: ["Too passive कभी-कभी", "Miss opportunities"],
    tips: ["थोड़ा proactive भी हों", "Opportunities grab करें"],
  },
  D: {
    type: "D",
    title: "Phone Zombie",
    emoji: "📱",
    description: "आप Digital Metro Rider हैं! Headphones लगाए, phone में lost। Metro ride = Phone time। Outside world से disconnected, digital world में connected!",
    traits: ["Digital", "Disconnected", "Phone-focused", "In own world"],
    strengths: ["Productivity", "Entertainment", "Focus", "Me-time"],
    weaknesses: ["Too disconnected", "Miss announcements"],
    tips: ["Surroundings पर भी ध्यान दें", "Safety first"],
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
