// भारतीय शहर टेस्ट - आप कौन सा शहर हैं?
// Indian City Personality Test

export const questions = [
  {
    id: 1,
    question: "Life की pace कैसी पसंद?",
    options: [
      { text: "Fast और non-stop", type: "A" },
      { text: "Chill और relaxed", type: "B" },
      { text: "Traditional लेकिन growing", type: "C" },
      { text: "Artistic और cultural", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Food preference?",
    options: [
      { text: "Street food से fine dining तक", type: "A" },
      { text: "Sea food और coastal flavors", type: "B" },
      { text: "Royal और rich cuisines", type: "C" },
      { text: "Sweet tooth और culture", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Career goals?",
    options: [
      { text: "Big dreams, big money", type: "A" },
      { text: "Work-life balance", type: "B" },
      { text: "Heritage business या traditional", type: "C" },
      { text: "Arts और creative field", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Traffic में?",
    options: [
      { text: "जुगाड़ से निकल लेता हूं", type: "A" },
      { text: "Cool रहता हूं, time है", type: "B" },
      { text: "गुस्सा आता है पर चलता है", type: "C" },
      { text: "Public transport prefer करता हूं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Weekend plans?",
    options: [
      { text: "Pubs, malls, hustle", type: "A" },
      { text: "Beach और chill scenes", type: "B" },
      { text: "Heritage walk और local explore", type: "C" },
      { text: "Art exhibitions और adda", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Strangers से बात?",
    options: [
      { text: "Time waste, work करना है", type: "A" },
      { text: "Friendly हूं, baat हो जाती है", type: "B" },
      { text: "Respectful और formal", type: "C" },
      { text: "Intellectual discussions पसंद", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Home कैसा चाहिए?",
    options: [
      { text: "High-rise apartment, view वाला", type: "A" },
      { text: "Sea-facing या हरियाली वाला", type: "B" },
      { text: "Haveli style, spacious", type: "C" },
      { text: "Artistic और unique", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Social life?",
    options: [
      { text: "Networking events और parties", type: "A" },
      { text: "Casual meetups और fun", type: "B" },
      { text: "Family gatherings और traditional", type: "C" },
      { text: "Intellectual circles और arts", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Fashion sense?",
    options: [
      { text: "Trendy और international", type: "A" },
      { text: "Casual और comfortable", type: "B" },
      { text: "Traditional touch के साथ", type: "C" },
      { text: "Artistic और bohemian", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Night life?",
    options: [
      { text: "City never sleeps वाला", type: "A" },
      { text: "Sunset के बाद chill", type: "B" },
      { text: "Early night, early rise", type: "C" },
      { text: "Late night intellectual discussions", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Money के बारे में?",
    options: [
      { text: "Earn more, spend more", type: "A" },
      { text: "Enjoy करो, आएगा फिर", type: "B" },
      { text: "Save और invest", type: "C" },
      { text: "पैसा नहीं, passion है priority", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपकी identity?",
    options: [
      { text: "Ambitious और driven", type: "A" },
      { text: "Chill और happy", type: "B" },
      { text: "Proud और rooted", type: "C" },
      { text: "Creative और thoughtful", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "मुंबई",
    emoji: "🌆",
    description: "आप मुंबई हैं - The City of Dreams! Fast-paced, ambitious और never-sleeping। हर challenge accept करते हैं, हर dream chase करते हैं। Spirit of Mumbai आपमें है!",
    traits: ["Ambitious", "Fast-paced", "Resilient", "Diverse"],
    strengths: ["Hustle", "Adaptability", "Ambition", "Energy"],
    weaknesses: ["Too busy कभी-कभी", "Miss slow moments"],
    tips: ["Pause और breathe", "Slow down कभी-कभी"],
  },
  B: {
    type: "B",
    title: "गोवा",
    emoji: "🏖️",
    description: "आप गोवा हैं - Susegad lifestyle! Relaxed, fun-loving और life को enjoy करने वाले। Work-life balance के expert। Beach vibes और chill personality!",
    traits: ["Relaxed", "Fun-loving", "Balanced", "Happy"],
    strengths: ["Work-life balance", "Happiness", "Easy-going", "Enjoyment"],
    weaknesses: ["Too relaxed कभी-कभी", "Lack urgency"],
    tips: ["कुछ ambition भी रखें", "Push yourself थोड़ा"],
  },
  C: {
    type: "C",
    title: "जयपुर",
    emoji: "🏰",
    description: "आप जयपुर हैं - Pink City with royal vibes! Traditional values के साथ modern outlook। Proud of heritage, respectful और dignified। Royal personality!",
    traits: ["Traditional", "Proud", "Royal", "Respectful"],
    strengths: ["Heritage", "Values", "Dignity", "Culture"],
    weaknesses: ["Too traditional कभी-कभी", "Resistant to change"],
    tips: ["New ideas embrace करें", "Modernize थोड़ा"],
  },
  D: {
    type: "D",
    title: "कोलकाता",
    emoji: "🎭",
    description: "आप कोलकाता हैं - City of Joy और Culture! Intellectual, artistic और passionate। Adda culture, art appreciation और deep thinking। सबसे अलग personality!",
    traits: ["Intellectual", "Artistic", "Passionate", "Cultural"],
    strengths: ["Depth", "Culture", "Art appreciation", "Intellectualism"],
    weaknesses: ["Too nostalgic कभी-कभी", "Slow to adapt"],
    tips: ["Present में जियो", "Practical भी बनो"],
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
