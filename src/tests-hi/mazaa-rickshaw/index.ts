// रिक्शा ड्राइवर टाइप टेस्ट - आप कौन से रिक्शा वाले हैं?
// Rickshaw Driver Type Test

export const questions = [
  {
    id: 1,
    question: "Customer बोले 'जल्दी चलो' तो?",
    options: [
      { text: "Full speed, shortcut से", type: "A" },
      { text: "Meter देखो, जितना बोले उतना", type: "B" },
      { text: "आराम से, सुरक्षित", type: "C" },
      { text: "पहले बात करो, फिर चलो", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Fare negotiate?",
    options: [
      { text: "मेरी rate, take it or leave it", type: "A" },
      { text: "Meter से ही चलूंगा", type: "B" },
      { text: "Customer जो बोले", type: "C" },
      { text: "बातचीत में deal", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Traffic jam में?",
    options: [
      { text: "कोई ना कोई रास्ता निकालूंगा", type: "A" },
      { text: "Meter चल रहा है, relax", type: "B" },
      { text: "Sorry बोलता रहता हूं", type: "C" },
      { text: "Customer से बातें करता हूं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Music preference?",
    options: [
      { text: "Loud और fast", type: "A" },
      { text: "Radio news", type: "B" },
      { text: "Customer की पसंद", type: "C" },
      { text: "Old classics", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Peak hours में?",
    options: [
      { text: "Double rate, high demand", type: "A" },
      { text: "Same meter, rules follow", type: "B" },
      { text: "कम rate भी चलेगा", type: "C" },
      { text: "Regular customers को priority", type: "D" },
    ],
  },
  {
    id: 6,
    question: "लंबी distance के लिए?",
    options: [
      { text: "Extra charge लूंगा", type: "A" },
      { text: "Meter plus return", type: "B" },
      { text: "जो customer बोले", type: "C" },
      { text: "Negotiate करके deal", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Customer से बातचीत?",
    options: [
      { text: "Time waste, focus on driving", type: "A" },
      { text: "Professional, short replies", type: "B" },
      { text: "Politely answer करता हूं", type: "C" },
      { text: "लंबी बातें, stories share", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tip मिले तो?",
    options: [
      { text: "मेरा हक है", type: "A" },
      { text: "Thank you, professional", type: "B" },
      { text: "बहुत खुश, grateful", type: "C" },
      { text: "अगली बार भी आना बोलता हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "रिक्शा की condition?",
    options: [
      { text: "Fast चले, बाकी सब okay", type: "A" },
      { text: "Proper maintained, clean", type: "B" },
      { text: "Basic ठीक है", type: "C" },
      { text: "Decorated और personalized", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Rain में?",
    options: [
      { text: "Extra charge, high demand", type: "A" },
      { text: "Same rate, customer convenience", type: "B" },
      { text: "कम भी चलेगा, help करना है", type: "C" },
      { text: "Cover लगाकर, comfortable ride", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Day का end?",
    options: [
      { text: "Counting earnings", type: "A" },
      { text: "Log book update", type: "B" },
      { text: "Tired पर satisfied", type: "C" },
      { text: "आज के किस्से याद करके", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Life goal?",
    options: [
      { text: "पैसा कमाना, आगे बढ़ना", type: "A" },
      { text: "Honest work, respect", type: "B" },
      { text: "Family का ध्यान रखना", type: "C" },
      { text: "खुश रहना, खुश करना", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "स्पीड वाला भैया",
    emoji: "🏎️",
    description: "आप Fast और Furious रिक्शा वाले हैं! जल्दी पहुंचाना priority, shortcuts का king। Business minded, time is money। Customer जल्दी में हो तो आप ही सही!",
    traits: ["Fast", "Business-minded", "Assertive", "Efficient"],
    strengths: ["Speed", "Efficiency", "Assertiveness", "Earnings"],
    weaknesses: ["Too aggressive कभी-कभी", "Safety concerns"],
    tips: ["Safety भी important है", "Customer comfort देखें"],
  },
  B: {
    type: "B",
    title: "Meter वाला भैया",
    emoji: "📊",
    description: "आप Honest और Professional रिक्शा वाले हैं! Meter से चलते हैं, rules follow करते हैं। Trusted और reliable। जिसे fair dealing चाहिए वो आपके पास आए!",
    traits: ["Honest", "Professional", "Reliable", "Fair"],
    strengths: ["Honesty", "Professionalism", "Trust", "Fairness"],
    weaknesses: ["Too rigid कभी-कभी", "Less earnings"],
    tips: ["Flexibility भी ठीक है", "Customer relations build करें"],
  },
  C: {
    type: "C",
    title: "Customer-First भैया",
    emoji: "🙏",
    description: "आप Humble और Customer-friendly रिक्शा वाले हैं! Customer की सुनते हैं, adjust करते हैं। Polite और helpful। Service mindset वाले!",
    traits: ["Humble", "Helpful", "Polite", "Adjustable"],
    strengths: ["Customer service", "Humility", "Flexibility", "Kindness"],
    weaknesses: ["Too soft कभी-कभी", "Undercharged"],
    tips: ["अपनी value भी जानें", "Fair price लें"],
  },
  D: {
    type: "D",
    title: "किस्से वाला भैया",
    emoji: "📖",
    description: "आप Entertainment रिक्शा वाले हैं! हर customer को story सुनाते हैं, city guide बन जाते हैं। Ride enjoyable बनाते हैं। Memorable experience देने वाले!",
    traits: ["Entertaining", "Friendly", "Knowledgeable", "Memorable"],
    strengths: ["Entertainment", "Knowledge", "Connection", "Memories"],
    weaknesses: ["Too chatty कभी-कभी", "Slow rides"],
    tips: ["Customer की mood देखें", "Professional भी रहें"],
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
