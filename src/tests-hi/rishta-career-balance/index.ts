// करियर और रिश्ता - Work-Life Balance
// Career Relationship Balance Test

export const questions = [
  {
    id: 1,
    question: "Career vs Relationship priority?",
    options: [
      { text: "Relationship पहले", type: "A" },
      { text: "दोनों equal", type: "B" },
      { text: "Career थोड़ा ज्यादा", type: "C" },
      { text: "Career first always", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Work hours?",
    options: [
      { text: "9-5, relationship के लिए time", type: "A" },
      { text: "Reasonable, balance रखता/रखती हूं", type: "B" },
      { text: "Long hours often", type: "C" },
      { text: "Workaholic हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Partner को career में support?",
    options: [
      { text: "Full support, priority है उनकी", type: "A" },
      { text: "Support करता/करती हूं", type: "B" },
      { text: "जहां possible", type: "C" },
      { text: "अपनी career पहले", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Relocation for career?",
    options: [
      { text: "Partner के साथ ही", type: "A" },
      { text: "Discuss करके decide", type: "B" },
      { text: "Opportunity देखूंगा/देखूंगी", type: "C" },
      { text: "Career opportunity miss नहीं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Office stress घर पर?",
    options: [
      { text: "घर पर छोड़ देता/देती हूं", type: "A" },
      { text: "Try करता/करती हूं separate रखने की", type: "B" },
      { text: "Affect करता है relationship", type: "C" },
      { text: "अक्सर लाता/लाती हूं घर", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Weekend plans vs Work?",
    options: [
      { text: "Weekends partner के साथ", type: "A" },
      { text: "Mostly free, कभी-कभी work", type: "B" },
      { text: "Often work करना पड़ता है", type: "C" },
      { text: "Work हमेशा priority", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Partner's career problem में?",
    options: [
      { text: "पूरा involve, help करता/करती हूं", type: "A" },
      { text: "Support करता/करती हूं", type: "B" },
      { text: "Advice देता/देती हूं", type: "C" },
      { text: "उनकी problem उनकी", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Date nights vs Work deadlines?",
    options: [
      { text: "Date nights जरूरी", type: "A" },
      { text: "Balance करता/करती हूं", type: "B" },
      { text: "Deadlines पहले usually", type: "C" },
      { text: "Work always wins", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Partner का career आपसे बड़ा हो?",
    options: [
      { text: "Proud, happy for them", type: "A" },
      { text: "Great, supportive", type: "B" },
      { text: "थोड़ा competitive feel", type: "C" },
      { text: "Ego issue हो सकता है", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Work calls on vacation?",
    options: [
      { text: "बिल्कुल नहीं लूंगा/लूंगी", type: "A" },
      { text: "Emergency में ही", type: "B" },
      { text: "कभी-कभी लेना पड़ता है", type: "C" },
      { text: "Always available", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Career sacrifice for relationship?",
    options: [
      { text: "Ready हूं अगर जरूरी हो", type: "A" },
      { text: "Depends on situation", type: "B" },
      { text: "बहुत मुश्किल होगा", type: "C" },
      { text: "नहीं करूंगा/करूंगी", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall balance?",
    options: [
      { text: "Relationship focused", type: "A" },
      { text: "Well balanced", type: "B" },
      { text: "Career leaning", type: "C" },
      { text: "Career dominated", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "रिश्ता प्राथमिकता",
    emoji: "❤️",
    description: "Relationship आपकी priority है। Career important है पर प्यार पहले।",
    traits: ["relationship-focused", "loving", "present", "balanced"],
    strengths: ["partner feels valued", "quality time", "connected"],
    weaknesses: ["career suffer हो सकती है"],
    tips: ["career भी important है", "balance बनाएं"],
  },
  B: {
    type: "B",
    title: "परफेक्ट बैलेंसर",
    emoji: "⚖️",
    description: "Career और relationship में perfect balance! दोनों को priority देते हैं।",
    traits: ["balanced", "organized", "prioritizing", "smart"],
    strengths: ["both areas thrive", "no regrets"],
    weaknesses: ["sometimes stretched thin"],
    tips: ["ऐसे ही continue करें", "flexibility रखें"],
  },
  C: {
    type: "C",
    title: "करियर झुकाव",
    emoji: "💼",
    description: "Career थोड़ा ज्यादा priority है। Ambitious हैं, success matter करती है।",
    traits: ["career-driven", "ambitious", "focused", "hardworking"],
    strengths: ["career growth", "financial stability"],
    weaknesses: ["relationship suffer हो सकती है"],
    tips: ["relationship भी nurture करें", "partner को time दें"],
  },
  D: {
    type: "D",
    title: "करियर केंद्रित",
    emoji: "🚀",
    description: "Career number one है। Relationship second। Workaholic tendencies।",
    traits: ["workaholic", "ambitious", "driven", "career-first"],
    strengths: ["career success likely"],
    weaknesses: ["relationship at risk", "partner neglected feel"],
    tips: ["relationship भी invest जरूरी", "burnout से बचें"],
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
