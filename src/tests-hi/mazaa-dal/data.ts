// दाल टाइप टेस्ट - आप कौन सी दाल हैं?
// Dal Type Test

export const questions = [
  {
    id: 1,
    question: "Sunday को कैसे बिताना पसंद है?",
    options: [
      { text: "Family के साथ घर पर आराम", type: "A" },
      { text: "Friends के साथ बाहर party", type: "B" },
      { text: "अकेले अपने शौक में", type: "C" },
      { text: "नया कुछ explore करने", type: "D" },
    ],
  },
  {
    id: 2,
    question: "काम करने का तरीका?",
    options: [
      { text: "धीरे-धीरे consistently", type: "A" },
      { text: "जल्दी-जल्दी multitask", type: "B" },
      { text: "Deep focus, एक काम पूरा तब दूसरा", type: "C" },
      { text: "Creative तरीके से, out of box", type: "D" },
    ],
  },
  {
    id: 3,
    question: "शादी में dress code?",
    options: [
      { text: "Traditional ethnic, classic look", type: "A" },
      { text: "Trendy और eye-catching", type: "B" },
      { text: "Simple और decent", type: "C" },
      { text: "Unique और different", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Comfort food कौन सा?",
    options: [
      { text: "दाल-चावल, मां के हाथ की", type: "A" },
      { text: "Street food - पानी पूरी, चाट", type: "B" },
      { text: "घर का सादा खाना", type: "C" },
      { text: "कुछ नया try करना", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Friendship में आप?",
    options: [
      { text: "Few लेकिन deep connections", type: "A" },
      { text: "बहुत सारे दोस्त, सबके साथ अच्छा", type: "B" },
      { text: "Selective और private", type: "C" },
      { text: "Diverse circle, different types के लोग", type: "D" },
    ],
  },
  {
    id: 6,
    question: "दिवाली कैसे मनाते हैं?",
    options: [
      { text: "Traditional पूजा और family dinner", type: "A" },
      { text: "Patakhe, friends, full masti", type: "B" },
      { text: "शांति से दीये जलाकर", type: "C" },
      { text: "नई जगह घूमने निकल जाता हूं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Career में priority?",
    options: [
      { text: "Stability और security", type: "A" },
      { text: "Growth और opportunities", type: "B" },
      { text: "Work-life balance", type: "C" },
      { text: "Passion follow करना", type: "D" },
    ],
  },
  {
    id: 8,
    question: "नई जगह जाने पर?",
    options: [
      { text: "पहले से research करके जाता हूं", type: "A" },
      { text: "मौके पर decide करता हूं", type: "B" },
      { text: "Comfortable zone में रहता हूं", type: "C" },
      { text: "Adventure और exploration", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Music taste?",
    options: [
      { text: "Old Hindi classics, Kishore-Lata", type: "A" },
      { text: "Bollywood party songs, trending", type: "B" },
      { text: "Soft और soothing melodies", type: "C" },
      { text: "Indie, fusion, experimental", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Life philosophy?",
    options: [
      { text: "धीरज से सब मिलता है", type: "A" },
      { text: "जो होगा देखा जाएगा", type: "B" },
      { text: "Simple living, high thinking", type: "C" },
      { text: "हर दिन कुछ नया", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "दाल मखनी",
    emoji: "🫘",
    percentage: 82,
    description: "आप दाल मखनी हैं - rich, creamy और हर किसी की favorite! जैसे दाल मखनी को बनने में time लगता है पर taste उम्दा होता है, वैसे ही आप धीरे-धीरे लेकिन मजबूती से रिश्ते बनाते हैं। Traditional values और family first!",
    characteristics: ["Traditional mindset", "Rich personality", "Patient और consistent", "Family-oriented", "Everyone's comfort zone"],
    advice: "Traditional होना अच्छा है, पर कभी-कभी नए ideas को भी welcome करें। Change से डरें नहीं।",
  },
  B: {
    type: "B",
    title: "तड़का दाल",
    emoji: "⚡",
    percentage: 78,
    description: "आप तड़का दाल हैं - instant, sizzling और energetic! जैसे तड़के की छन्न से पूरी kitchen में खुशबू फैल जाती है, वैसे ही आप जहां जाते हैं वहां energy लाते हैं। Quick decisions, fast life!",
    characteristics: ["Energetic personality", "Quick तड़का like entry", "Social और outgoing", "Spontaneous decisions", "Life of the party"],
    advice: "Energy अच्छी है, पर कभी-कभी slow down भी करें। हर decision instant नहीं होना चाहिए।",
  },
  C: {
    type: "C",
    title: "मूंग दाल",
    emoji: "💚",
    percentage: 75,
    description: "आप मूंग दाल हैं - light, healthy और easy to digest! जैसे मूंग दाल सादी पर पौष्टिक होती है, वैसे ही आप simple पर meaningful हैं। बीमार हो या ठीक, मूंग दाल हमेशा सही - आप भी हर situation में reliable!",
    characteristics: ["Simple living", "Health-conscious", "Reliable हर situation में", "Low maintenance", "Genuine और pure"],
    advice: "Simple रहना virtue है, पर कभी-कभी खुद को treat करना भी सीखें। Life में थोड़ा indulgence ठीक है।",
  },
  D: {
    type: "D",
    title: "पंचमेल दाल",
    emoji: "🌈",
    percentage: 80,
    description: "आप पंचमेल दाल हैं - mix, diverse और interesting! जैसे पांच दालों का combination unique taste देता है, वैसे ही आपकी personality में कई shades हैं। Variety is the spice of your life!",
    characteristics: ["Multi-talented", "Diverse interests", "Jack of all trades", "Experimental nature", "Unique personality"],
    advice: "Diverse होना amazing है, पर कभी-कभी एक चीज़ में master बनना भी सोचें। Focus भी powerful है।",
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
