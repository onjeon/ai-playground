// ट्रैफिक में व्यवहार टेस्ट - Traffic में आप कैसे हैं?
// Traffic Behavior Test

export const questions = [
  {
    id: 1,
    question: "Red light पर?",
    options: [
      { text: "थोड़ा आगे निकल जाता हूं", type: "A" },
      { text: "Properly line में रुकता हूं", type: "B" },
      { text: "Phone check करता हूं", type: "C" },
      { text: "Music enjoy करता हूं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Horn का use?",
    options: [
      { text: "लगातार, पूरे रास्ते", type: "A" },
      { text: "सिर्फ जरूरत पर", type: "B" },
      { text: "Rarely, patience रखता हूं", type: "C" },
      { text: "Beats पर horn बजाता हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Traffic jam में?",
    options: [
      { text: "Shortcuts और footpath try", type: "A" },
      { text: "Lane में रहता हूं, wait करता हूं", type: "B" },
      { text: "Calls और work करता हूं", type: "C" },
      { text: "Podcast या music enjoy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Lane discipline?",
    options: [
      { text: "Lane क्या होती है?", type: "A" },
      { text: "Strictly follow करता हूं", type: "B" },
      { text: "Depends on situation", type: "C" },
      { text: "अपनी lane, अपनी pace", type: "D" },
    ],
  },
  {
    id: 5,
    question: "कोई गलत overtake करे?",
    options: [
      { text: "Race लग जाती है", type: "A" },
      { text: "Ignore करके आगे बढ़ता हूं", type: "B" },
      { text: "गुस्सा आता है पर control", type: "C" },
      { text: "उसकी गाड़ी देखता हूं bass", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Pedestrian crossing पर?",
    options: [
      { text: "रुकना optional है", type: "A" },
      { text: "हमेशा रुकता हूं", type: "B" },
      { text: "Depends, देखकर decide", type: "C" },
      { text: "Smile करके रुकता हूं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "GPS navigation?",
    options: [
      { text: "मुझे सब रास्ते पता हैं", type: "A" },
      { text: "हमेशा use करता हूं", type: "B" },
      { text: "New places के लिए ही", type: "C" },
      { text: "Traffic avoid के shortcuts से", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Traffic police?",
    options: [
      { text: "देखते ही slow हो जाता हूं", type: "A" },
      { text: "कोई फर्क नहीं, rules follow करता हूं", type: "B" },
      { text: "Documents check करके निकलता हूं", type: "C" },
      { text: "Smile करके wave करता हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Parking?",
    options: [
      { text: "कहीं भी जहां जगह मिले", type: "A" },
      { text: "Proper designated spot", type: "B" },
      { text: "जल्दी हो तो कहीं भी", type: "C" },
      { text: "Valet या paid parking prefer", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Speed limit?",
    options: [
      { text: "Limit क्या होती है?", type: "A" },
      { text: "Strictly follow", type: "B" },
      { text: "10-20% ऊपर ठीक है", type: "C" },
      { text: "Flow of traffic के साथ", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Fellow drivers को देखकर?",
    options: [
      { text: "Competition है सब", type: "A" },
      { text: "सब अपनी जगह सही", type: "B" },
      { text: "कुछ annoying लोग हैं", type: "C" },
      { text: "People watching enjoy", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Driving philosophy?",
    options: [
      { text: "जल्दी पहुंचना goal", type: "A" },
      { text: "सुरक्षित पहुंचना goal", type: "B" },
      { text: "Efficient पहुंचना goal", type: "C" },
      { text: "Journey enjoy करना goal", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Desi Driver",
    emoji: "🏎️",
    description: "आप Typical Indian Driver हैं! Rules optional, shortcuts mandatory। Horn = Communication, lane = Suggestion। जुगाड़ से हर traffic beat करने वाले!",
    traits: ["Aggressive", "Impatient", "Jugaadu", "Fast"],
    strengths: ["Navigation skills", "Quick thinking", "Adaptability", "Time management"],
    weaknesses: ["Rule-breaking", "Risky behavior", "Stressful"],
    tips: ["Rules follow करें, safe रहें", "Patience सीखें"],
  },
  B: {
    type: "B",
    title: "Ideal Driver",
    emoji: "🚗",
    description: "आप Model Driver हैं! Rules follow करते हैं, lane discipline maintain, pedestrians को priority। Roads को safe बनाने वाले responsible citizen!",
    traits: ["Responsible", "Rule-following", "Patient", "Safe"],
    strengths: ["Safety", "Discipline", "Patience", "Responsibility"],
    weaknesses: ["Slow लग सकते हैं", "Frustrating for others"],
    tips: ["अपना patience बनाए रखें", "Others को inspire करें"],
  },
  C: {
    type: "C",
    title: "Practical Driver",
    emoji: "📍",
    description: "आप Practical Driver हैं! Situation देखकर decide करते हैं। Rules mostly follow, but flexible। Balanced approach to driving!",
    traits: ["Practical", "Flexible", "Balanced", "Adaptive"],
    strengths: ["Adaptability", "Balance", "Practicality", "Common sense"],
    weaknesses: ["Inconsistent कभी-कभी", "Gray area exploitation"],
    tips: ["Consistency लाएं", "Rules को priority दें"],
  },
  D: {
    type: "D",
    title: "Chill Driver",
    emoji: "🎵",
    description: "आप Relaxed Driver हैं! Music on, AC on, life on। Traffic = Podcast time। Journey को enjoy करने वाले, destination reach होगी eventually!",
    traits: ["Relaxed", "Music-lover", "Patient", "Joyful"],
    strengths: ["Patience", "Enjoyment", "Stress-free", "Positive attitude"],
    weaknesses: ["Too slow कभी-कभी", "Oblivious"],
    tips: ["Awareness बनाए रखें", "जल्दी भी निकलें कभी-कभी"],
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
