// ट्रेन यात्री टेस्ट - आप कैसे ट्रेन यात्री हैं?
// Indian Train Traveler Type Test

export const questions = [
  {
    id: 1,
    question: "Train ticket booking?",
    options: [
      { text: "Tatkal warrior, sharp 10 AM", type: "A" },
      { text: "Advance planning, confirmed seat", type: "B" },
      { text: "General dabba में adjust", type: "C" },
      { text: "जैसे भी मिले, चलो", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Station पहुंचना?",
    options: [
      { text: "Last minute, running to catch", type: "A" },
      { text: "30 min पहले, platform ready", type: "B" },
      { text: "जब मन करे", type: "C" },
      { text: "आराम से, miss हो तो अगली पकड़ लेंगे", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seat पर बैठते ही?",
    options: [
      { text: "Charging point check, phone out", type: "A" },
      { text: "सामान arrange, settle in", type: "B" },
      { text: "Window से देखना start", type: "C" },
      { text: "Fellow passengers से बात", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Train का खाना?",
    options: [
      { text: "Zomato/Swiggy order करता हूं", type: "A" },
      { text: "घर से packed खाना", type: "B" },
      { text: "Pantry car और hawkers", type: "C" },
      { text: "Sharing with co-passengers", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Long journey में time pass?",
    options: [
      { text: "Phone और headphones", type: "A" },
      { text: "Books और magazines", type: "B" },
      { text: "Window gazing और सोना", type: "C" },
      { text: "बातें और antakshari", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Upper berth मिले तो?",
    options: [
      { text: "No problem, जल्दी सो जाता हूं", type: "A" },
      { text: "Exchange try करता हूं", type: "B" },
      { text: "Content रहता हूं", type: "C" },
      { text: "दूसरों को offer करता हूं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Chai wala आए तो?",
    options: [
      { text: "Own coffee/tea लाया हूं", type: "A" },
      { text: "Quality check करके लेता हूं", type: "B" },
      { text: "हर station पर एक cup", type: "C" },
      { text: "सबके लिए मंगवाता हूं", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Train late हो तो?",
    options: [
      { text: "Frustrated, PNR check करता रहता हूं", type: "A" },
      { text: "Prepared था, backup plan है", type: "B" },
      { text: "चलता है, India है", type: "C" },
      { text: "बातों में time pass", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Toilet situation?",
    options: [
      { text: "Avoid करता हूं, nightmare है", type: "A" },
      { text: "Sanitizer और caution के साथ", type: "B" },
      { text: "जब जरूरी हो तब", type: "C" },
      { text: "Part of the experience", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Destination आने पर?",
    options: [
      { text: "तुरंत उतरना, cab book already", type: "A" },
      { text: "Properly pack करके उतरना", type: "B" },
      { text: "देख लेंगे जाकर", type: "C" },
      { text: "सबको bye बोलकर उतरना", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Train travel का best part?",
    options: [
      { text: "सस्ता और efficient", type: "A" },
      { text: "Comfortable और safe", type: "B" },
      { text: "Scenery और adventure", type: "C" },
      { text: "People और stories", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Train journey means?",
    options: [
      { text: "Just transportation", type: "A" },
      { text: "Planned travel", type: "B" },
      { text: "Adventure और experience", type: "C" },
      { text: "Mini social gathering", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Modern Train Traveler",
    emoji: "📱",
    description: "आप Modern Train Traveler हैं! Phone charged, apps ready, own food ordered। Efficient travel चाहिए बस, बाकी सब avoid। Tech-savvy यात्री!",
    traits: ["Modern", "Efficient", "Tech-savvy", "Independent"],
    strengths: ["Efficiency", "Preparation", "Self-sufficiency", "Speed"],
    weaknesses: ["Miss the experience", "Too disconnected"],
    tips: ["कभी-कभी phone रखें", "Experience enjoy करें"],
  },
  B: {
    type: "B",
    title: "Planned Traveler",
    emoji: "📋",
    description: "आप Planned Traveler हैं! Advance booking, proper packing, everything sorted। Comfortable journey priority। Responsible और organized यात्री!",
    traits: ["Planned", "Organized", "Comfortable", "Prepared"],
    strengths: ["Organization", "Comfort", "Preparedness", "Reliability"],
    weaknesses: ["Too rigid", "Can't handle surprises"],
    tips: ["Flexibility भी रखें", "Spontaneous भी हों कभी-कभी"],
  },
  C: {
    type: "C",
    title: "Romantic Train Lover",
    emoji: "🚂",
    description: "आप Romantic Train Lover हैं! Window seat, chai, passing scenery। Train journey = Experience itself। Poetry of travel समझने वाले!",
    traits: ["Romantic", "Observant", "Easy-going", "Appreciative"],
    strengths: ["Appreciation", "Presence", "Simplicity", "Wonder"],
    weaknesses: ["Unprepared sometimes", "Dreamy"],
    tips: ["Practical aspects भी देखें", "Plan थोड़ा करें"],
  },
  D: {
    type: "D",
    title: "Social Train Friend",
    emoji: "🤝",
    description: "आप Social Train Friend हैं! Journey = New friends। सबके साथ बातें, खाना share, antakshari। Train में family बना लेते हैं। People person!",
    traits: ["Social", "Friendly", "Sharing", "Entertaining"],
    strengths: ["Social skills", "Making friends", "Entertainment", "Warmth"],
    weaknesses: ["Too chatty कभी-कभी", "Oversharing"],
    tips: ["Personal space भी respect करें", "Introverts को समझें"],
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
