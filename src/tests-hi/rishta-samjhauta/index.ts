// समझौता शैली - आप रिश्ते में कैसे compromise करते हैं?
// Compromise Style Test

export const questions = [
  {
    id: 1,
    question: "जब आप और पार्टनर disagree हों?",
    options: [
      { text: "मैं adjust कर लेता/लेती हूं", type: "A" },
      { text: "middle ground ढूंढते हैं", type: "B" },
      { text: "debate होती है लंबी", type: "C" },
      { text: "मेरी बात ही होनी चाहिए", type: "D" },
    ],
  },
  {
    id: 2,
    question: "छोटी-छोटी बातों में?",
    options: [
      { text: "कोई issue नहीं, जो चाहे", type: "A" },
      { text: "turn by turn decide करते हैं", type: "B" },
      { text: "discuss करना पड़ता है", type: "C" },
      { text: "मेरा way ही best", type: "D" },
    ],
  },
  {
    id: 3,
    question: "बड़े decisions में?",
    options: [
      { text: "पार्टनर की राय priority", type: "A" },
      { text: "equal say दोनों की", type: "B" },
      { text: "convince करना पड़ता है", type: "C" },
      { text: "मैं ही final decision", type: "D" },
    ],
  },
  {
    id: 4,
    question: "पार्टनर की कोई आदत पसंद नहीं?",
    options: [
      { text: "accept कर लिया है", type: "A" },
      { text: "politely बोलते हैं, adjust भी", type: "B" },
      { text: "बार-बार mention करते हैं", type: "C" },
      { text: "बदलना ही पड़ेगा", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Weekend plans में difference?",
    options: [
      { text: "उनकी choice चलती है", type: "A" },
      { text: "alternate weekends", type: "B" },
      { text: "negotiate करना पड़ता है", type: "C" },
      { text: "मेरा plan ही final", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Family functions में जाना हो?",
    options: [
      { text: "दोनों families equal", type: "A" },
      { text: "fair distribution करते हैं", type: "B" },
      { text: "preference होती है", type: "C" },
      { text: "मेरी family priority", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Money spending पर disagreement?",
    options: [
      { text: "उनकी choice मान लेता/लेती हूं", type: "A" },
      { text: "budget बनाकर manage", type: "B" },
      { text: "arguments होते हैं", type: "C" },
      { text: "मेरा पैसा, मेरी मर्जी", type: "D" },
    ],
  },
  {
    id: 8,
    question: "जब आप right हों और वो wrong?",
    options: [
      { text: "छोड़ देता/देती हूं, peace जरूरी", type: "A" },
      { text: "calmly explain करता/करती हूं", type: "B" },
      { text: "prove करना है कि मैं सही", type: "C" },
      { text: "जब तक वो माने नहीं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Lifestyle differences में?",
    options: [
      { text: "उनके according adapt", type: "A" },
      { text: "दोनों थोड़ा change", type: "B" },
      { text: "struggle होता है", type: "C" },
      { text: "मैं नहीं बदलूंगा/बदलूंगी", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Career vs relationship?",
    options: [
      { text: "relationship पहले", type: "A" },
      { text: "balance करने की कोशिश", type: "B" },
      { text: "tough choice है", type: "C" },
      { text: "career पहले", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Friends के साथ time?",
    options: [
      { text: "पार्टनर पहले हमेशा", type: "A" },
      { text: "fair time दोनों को", type: "B" },
      { text: "friends के लिए fight करनी पड़ती है", type: "C" },
      { text: "मेरे friends, मेरी freedom", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall compromise?",
    options: [
      { text: "मैं ज्यादा compromise करता/करती हूं", type: "A" },
      { text: "equal compromise दोनों", type: "B" },
      { text: "struggle है decide करने में", type: "C" },
      { text: "मैं कम ही compromise करता/करती हूं", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "सहनशील समझौतावादी",
    emoji: "🕊️",
    description: "आप relationship के लिए बहुत sacrifice करते हैं। Partner की happiness आपकी priority है। ये अच्छा है पर balance जरूरी।",
    traits: ["accommodating", "selfless", "peace-loving", "giving"],
    strengths: ["कम conflicts", "partner happy", "stable relationship"],
    weaknesses: ["खुद की needs ignore", "resentment possible", "one-sided"],
    tips: ["अपनी voice भी रखें", "boundaries बनाएं", "self-care जरूरी"],
  },
  B: {
    type: "B",
    title: "संतुलित साझेदार",
    emoji: "⚖️",
    description: "आप healthy compromise करते हैं! Give and take का perfect balance है। Ideal relationship style है ये।",
    traits: ["balanced", "fair", "mature", "collaborative"],
    strengths: ["equal partnership", "mutual respect", "win-win solutions"],
    weaknesses: ["कभी-कभी time लगता है decide करने में"],
    tips: ["ऐसे ही continue करें", "flexibility बनाए रखें"],
  },
  C: {
    type: "C",
    title: "संघर्षशील व्यक्तित्व",
    emoji: "🤼",
    description: "आपके लिए compromise मुश्किल है। Discussions और debates लंबी होती हैं। थोड़ा flexibility help करेगी।",
    traits: ["strong-willed", "opinionated", "persistent", "challenging"],
    strengths: ["अपनी बात रखते हैं", "clear views"],
    weaknesses: ["conflicts ज्यादा", "partner stressed", "tiring"],
    tips: ["pick your battles", "सब में जीतना जरूरी नहीं", "partner की बात भी सुनें"],
  },
  D: {
    type: "D",
    title: "अडिग स्वभाव",
    emoji: "🪨",
    description: "Compromise आपके लिए बहुत hard है। My way or highway approach है। Relationship में ये challenge create करता है।",
    traits: ["stubborn", "dominant", "uncompromising", "rigid"],
    strengths: ["clear about what you want"],
    weaknesses: ["partner की voice नहीं", "relationship strain", "controlling"],
    tips: ["flexibility सीखें", "partner की feelings matter", "change जरूरी है"],
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
