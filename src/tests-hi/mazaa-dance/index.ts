// भारतीय नृत्य टेस्ट - आप कौन सा नृत्य हैं?
// Indian Dance Personality Test

export const questions = [
  {
    id: 1,
    question: "Dance floor पर आप?",
    options: [
      { text: "Graceful और expressive", type: "A" },
      { text: "Energetic और powerful", type: "B" },
      { text: "Fun और freestyle", type: "C" },
      { text: "Romantic और smooth", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Music preference?",
    options: [
      { text: "Classical और traditional", type: "A" },
      { text: "Dhol beats और folk", type: "B" },
      { text: "Bollywood hits", type: "C" },
      { text: "Romantic melodies", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Expression style?",
    options: [
      { text: "Eyes और facial expressions", type: "A" },
      { text: "Body और energy", type: "B" },
      { text: "Fun और entertainment", type: "C" },
      { text: "Grace और flow", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Costume preference?",
    options: [
      { text: "Traditional और elaborate", type: "A" },
      { text: "Colorful और vibrant", type: "B" },
      { text: "Stylish और trendy", type: "C" },
      { text: "Elegant और flowing", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Learning approach?",
    options: [
      { text: "Years of training और discipline", type: "A" },
      { text: "Naturally pick up", type: "B" },
      { text: "YouTube से सीखा", type: "C" },
      { text: "Partner के साथ practice", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Performance में?",
    options: [
      { text: "Storytelling और emotions", type: "A" },
      { text: "Energy और celebration", type: "B" },
      { text: "Entertainment और fun", type: "C" },
      { text: "Romance और chemistry", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Wedding में dance?",
    options: [
      { text: "Classical piece prepared", type: "A" },
      { text: "Bhangra और Garba", type: "B" },
      { text: "Bollywood medley", type: "C" },
      { text: "Couple dance", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ideal dance partner?",
    options: [
      { text: "Trained और disciplined", type: "A" },
      { text: "Energetic और fun", type: "B" },
      { text: "Anyone जो dance करे", type: "C" },
      { text: "Romantic connection वाला", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Dance का purpose?",
    options: [
      { text: "Art और culture preserve करना", type: "A" },
      { text: "Celebration और joy", type: "B" },
      { text: "Entertainment और fun", type: "C" },
      { text: "Connection और expression", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Favorite dance show?",
    options: [
      { text: "Classical dance competitions", type: "A" },
      { text: "DID और folk specials", type: "B" },
      { text: "Bollywood dance shows", type: "C" },
      { text: "Nach Baliye जैसे couple shows", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Practice routine?",
    options: [
      { text: "Daily riyaz, discipline", type: "A" },
      { text: "When mood strikes", type: "B" },
      { text: "Party से पहले", type: "C" },
      { text: "Partner के साथ regular", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Dance में क्या express करते हैं?",
    options: [
      { text: "कहानी और भाव", type: "A" },
      { text: "जोश और energy", type: "B" },
      { text: "मस्ती और fun", type: "C" },
      { text: "प्यार और connection", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "भरतनाट्यम",
    emoji: "🪷",
    description: "आप Bharatanatyam हैं - Classical, graceful और expressive! हर movement में meaning, हर expression में story। Traditional art form का torch bearer। Disciplined और cultured!",
    traits: ["Classical", "Graceful", "Expressive", "Disciplined"],
    strengths: ["Expression", "Discipline", "Culture", "Storytelling"],
    weaknesses: ["Too traditional कभी-कभी", "Less flexible"],
    tips: ["Modern elements भी try करें", "Fusion explore करें"],
  },
  B: {
    type: "B",
    title: "भांगड़ा",
    emoji: "🥁",
    description: "आप Bhangra हैं - Energetic, powerful और celebratory! Dhol की beat पर पूरा floor हिला दो। Punjabi spirit, जश्न का symbol। Energy bomb!",
    traits: ["Energetic", "Powerful", "Celebratory", "Fun"],
    strengths: ["Energy", "Celebration", "Joy spreading", "Entertainment"],
    weaknesses: ["Too loud कभी-कभी", "Less subtle"],
    tips: ["Subtle movements भी सीखें", "Variety add करें"],
  },
  C: {
    type: "C",
    title: "बॉलीवुड डांस",
    emoji: "🎬",
    description: "आप Bollywood Dance हैं - Fun, entertaining और versatile! हर genre में comfortable, party का center। Trendy moves, filmy style। Entertainment package!",
    traits: ["Fun", "Versatile", "Entertaining", "Trendy"],
    strengths: ["Versatility", "Entertainment", "Adaptability", "Fun"],
    weaknesses: ["Jack of all, master of none", "Less depth"],
    tips: ["एक style में master बनें", "Depth लाएं"],
  },
  D: {
    type: "D",
    title: "कत्थक",
    emoji: "💫",
    description: "आप Kathak हैं - Romantic, graceful और storytelling! Ghungroo की आवाज़, spinning की beauty। Love stories और emotions का expression। Elegant और sophisticated!",
    traits: ["Romantic", "Graceful", "Elegant", "Sophisticated"],
    strengths: ["Grace", "Romance", "Elegance", "Flow"],
    weaknesses: ["Too romantic कभी-कभी", "Slow-paced"],
    tips: ["Upbeat numbers भी try करें", "Energy भी दिखाएं"],
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
