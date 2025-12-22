// पान की दुकान पर्सनैलिटी - Paan Shop Personality
// Your personality at the iconic Indian Paan Shop!

export const questions = [
  {
    id: 1,
    question: "पान की दुकान पर आप क्या लेते हैं?",
    options: [
      { text: "Meetha paan, classic 🍃", type: "A" },
      { text: "Banarasi paan, premium वाला", type: "B" },
      { text: "बस सादी सुपारी या इलायची", type: "C" },
      { text: "Cigarette/gutka (कुछ तो लेना है)", type: "D" },
    ],
  },
  {
    id: 2,
    question: "पान वाले से बात कैसे करते हो?",
    options: [
      { text: "Regular हूं, वो जानता है क्या चाहिए", type: "A" },
      { text: "'भईया, special बनाना!' - specific order", type: "B" },
      { text: "Politely पूछता हूं, ज्यादा बातें नहीं", type: "C" },
      { text: "Gossip करता हूं, news पूछता हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "पान खाने का style?",
    options: [
      { text: "ऐसे ही, naturally enjoy करता हूं", type: "A" },
      { text: "Slow और classy, हर flavor feel करता हूं", type: "B" },
      { text: "Quietly खाता हूं, less drama", type: "C" },
      { text: "दोस्तों के साथ, hangout का हिस्सा", type: "D" },
    ],
  },
  {
    id: 4,
    question: "पान की दुकान पर कितनी देर रुकते हो?",
    options: [
      { text: "Paan लिया और निकला, busy हूं", type: "A" },
      { text: "थोड़ी देर, माहौल में बातें", type: "B" },
      { text: "जल्दी-जल्दी, awkward लगता है रुकना", type: "C" },
      { text: "घंटों, वो तो social hub है!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "कोई recommend करे नया paan?",
    options: [
      { text: "Try करूंगा, variety अच्छी है", type: "A" },
      { text: "पहले ingredients पूछूंगा, फिर decide", type: "B" },
      { text: "अपना regular ही ठीक है", type: "C" },
      { text: "Sabke साथ same लूंगा, group में fun", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Credit पर पान लेना?",
    options: [
      { text: "कभी नहीं, cash ही देता हूं", type: "A" },
      { text: "Regular हूं तो adjust हो जाता है", type: "B" },
      { text: "Credit avoid करता हूं, uncomfortable", type: "C" },
      { text: "'लिख ले भाई, month end में दूंगा!'", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Paan की दुकान पर politics की बात?",
    options: [
      { text: "Opinion रखता हूं, discuss करता हूं", type: "A" },
      { text: "सुनता हूं, पर debate में नहीं पड़ता", type: "B" },
      { text: "Avoid करता हूं, paan खाया और निकला", type: "C" },
      { text: "Full participation, heated debates!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "शादी में पान का counter?",
    options: [
      { text: "एक-दो पान लिए और move on", type: "A" },
      { text: "Special varieties try करूंगा सब", type: "B" },
      { text: "पान नहीं खाता/खाती शादी में", type: "C" },
      { text: "Counter पर ही खड़ा रहूंगा, networking!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "पान खाने के बाद?",
    options: [
      { text: "Fresh feel, energy आ गई", type: "A" },
      { text: "Satisfied, अच्छा लगा", type: "B" },
      { text: "Mouth freshener बस काम हो गया", type: "C" },
      { text: "अब एक और लूं क्या?", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Favorite time पान खाने का?",
    options: [
      { text: "खाने के बाद, digestive के लिए", type: "A" },
      { text: "Special occasion पर ही", type: "B" },
      { text: "कभी-कभी randomly", type: "C" },
      { text: "दोस्तों के साथ hangout में always", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Regular Paan प्रेमी",
    emoji: "🍃",
    description: "आप Classic Paan प्रेमी हैं! Tradition से जुड़े, simple taste। पान खाना routine है, life का हिस्सा। पान वाला आपको देखते ही बनाना शुरू कर देता है। 'वो हमेशा वाला देना!' - ये आप हैं!",
    traits: ["Traditional", "Consistent", "Grounded", "Simple"],
    strengths: ["Reliability", "Appreciation of classics", "Routine"],
    weaknesses: ["Change से थोड़ा डर", "Same pattern"],
    tips: ["कभी नया try करो", "Variety भी explore करो"],
  },
  B: {
    type: "B",
    title: "Premium Paan Connoisseur",
    emoji: "👑",
    description: "आप Premium Paan Connoisseur हैं! Quality matters, taste matters। Silver वर्क, special ingredients - आपको best चाहिए। Paan में भी class दिखता है। Banarasi, Calcutta - सब पता है!",
    traits: ["Classy", "Quality-conscious", "Refined", "Selective"],
    strengths: ["Taste", "Appreciation", "Class"],
    weaknesses: ["Expensive tastes", "कभी-कभी choosy too much"],
    tips: ["Simple में भी मज़ा है", "Budget friendly भी try करो"],
  },
  C: {
    type: "C",
    title: "Minimal Paan Person",
    emoji: "🌿",
    description: "आप Minimal Person हैं! Saunf, elaichi, light stuff। Paan scene में ज्यादा involvement नहीं, बस mouth freshener का काम हो जाए। Practical approach - get the job done!",
    traits: ["Practical", "Minimal", "No-fuss", "Efficient"],
    strengths: ["Simplicity", "Practicality", "Health consciousness"],
    weaknesses: ["Experience miss करते हो", "Too practical कभी-कभी"],
    tips: ["कभी पूरा experience लो", "Indulge करना भी okay है"],
  },
  D: {
    type: "D",
    title: "Social Paan Hangout Person",
    emoji: "🎉",
    description: "आप Social Butterfly हैं! Paan की दुकान = Social club। यहां दोस्त मिलते हैं, gossip होती है, world affairs discuss होते हैं। Paan से ज्यादा पान की दुकान important है आपके लिए!",
    traits: ["Social", "Chatty", "Connected", "Fun-loving"],
    strengths: ["Networking", "Social skills", "Information"],
    weaknesses: ["Time management", "Gossip reputation"],
    tips: ["कभी solo enjoy भी करो", "Quality time vs quantity time"],
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
