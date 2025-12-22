// दिवाली स्टाइल टेस्ट - आप कैसे दिवाली मनाते हैं?
// Diwali Celebration Style Test

export const questions = [
  {
    id: 1,
    question: "दिवाली की तैयारी कब शुरू?",
    options: [
      { text: "हफ्ते पहले से planning", type: "A" },
      { text: "Last minute shopping", type: "B" },
      { text: "बस lights और दीये enough", type: "C" },
      { text: "पटाखों की list ready", type: "D" },
    ],
  },
  {
    id: 2,
    question: "सफाई के बारे में?",
    options: [
      { text: "पूरा घर चमकना चाहिए", type: "A" },
      { text: "जितनी हो उतनी", type: "B" },
      { text: "Basic cleaning काफी है", type: "C" },
      { text: "पटाखों के बाद तो गंदा होगा ही", type: "D" },
    ],
  },
  {
    id: 3,
    question: "पूजा की थाली?",
    options: [
      { text: "Traditional और complete", type: "A" },
      { text: "जो मिल जाए", type: "B" },
      { text: "Simple और meaningful", type: "C" },
      { text: "जल्दी करो, पटाखे बजाने हैं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "मिठाई का scene?",
    options: [
      { text: "घर पर बनाई हुई + premium box", type: "A" },
      { text: "Last moment market से", type: "B" },
      { text: "Simple सी काफी है", type: "C" },
      { text: "खाने से ज्यादा देने में interest", type: "D" },
    ],
  },
  {
    id: 5,
    question: "पटाखों पर stance?",
    options: [
      { text: "Green crackers ही सही", type: "A" },
      { text: "थोड़े बहुत चल जाते हैं", type: "B" },
      { text: "बस दीये और lights", type: "C" },
      { text: "फुल पटाखे, सारी रात!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "दिवाली की रात?",
    options: [
      { text: "Family के साथ proper celebration", type: "A" },
      { text: "Friends के साथ party", type: "B" },
      { text: "Quiet और peaceful", type: "C" },
      { text: "पटाखे फोड़ने में busy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Decoration style?",
    options: [
      { text: "Rangoli, दीये और lights perfect", type: "A" },
      { text: "जो time मिले उतना", type: "B" },
      { text: "Minimal और elegant", type: "C" },
      { text: "Lights लगाओ, bass!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "नए कपड़े?",
    options: [
      { text: "पूरा traditional outfit", type: "A" },
      { text: "कुछ नया लिया होगा", type: "B" },
      { text: "जो है वो ठीक है", type: "C" },
      { text: "पटाखों में तो गंदे होंगे", type: "D" },
    ],
  },
  {
    id: 9,
    question: "दिवाली bonus/gift?",
    options: [
      { text: "Properly planned और distributed", type: "A" },
      { text: "Last minute decide", type: "B" },
      { text: "Thought that counts", type: "C" },
      { text: "पटाखों पर खर्च", type: "D" },
    ],
  },
  {
    id: 10,
    question: "अगले दिन?",
    options: [
      { text: "Cleanup और visits", type: "A" },
      { text: "Late उठना और आराम", type: "B" },
      { text: "Normal day", type: "C" },
      { text: "बचे हुए पटाखे", type: "D" },
    ],
  },
  {
    id: 11,
    question: "दिवाली का best part?",
    options: [
      { text: "Family bonding", type: "A" },
      { text: "Parties और fun", type: "B" },
      { text: "दीयों की रोशनी", type: "C" },
      { text: "पटाखों की आवाज़", type: "D" },
    ],
  },
  {
    id: 12,
    question: "दिवाली means?",
    options: [
      { text: "Tradition और culture", type: "A" },
      { text: "Celebration और fun", type: "B" },
      { text: "Inner peace और light", type: "C" },
      { text: "Blast करो!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पारंपरिक दिवाली प्रेमी",
    emoji: "🪔",
    description: "आप दिवाली को traditionally celebrate करते हैं! हर ritual important, हर detail perfect। घर में मां-दादी जैसी दिवाली मनाते हैं। Real festival spirit आपमें है!",
    traits: ["Traditional", "Family-oriented", "Organized", "Cultural"],
    strengths: ["Preserving culture", "Family bonding", "Proper celebration", "Attention to detail"],
    weaknesses: ["Too rigid कभी-कभी", "Stressful हो जाता है"],
    tips: ["कुछ flexibility रखें", "Enjoy भी करें"],
  },
  B: {
    type: "B",
    title: "पार्टी वाला दिवाली Fan",
    emoji: "🎉",
    description: "आप दिवाली को party की तरह मनाते हैं! Friends, fun और celebration। Last minute planning में भी enjoy कर लेते हैं। Happy-go-lucky दिवाली personality!",
    traits: ["Fun-loving", "Social", "Spontaneous", "Celebratory"],
    strengths: ["Making it fun", "Social connections", "Flexibility", "Joy spreading"],
    weaknesses: ["Traditions miss हो जाती हैं", "Unorganized"],
    tips: ["कुछ traditions भी follow करें", "Plan थोड़ा ahead"],
  },
  C: {
    type: "C",
    title: "Peaceful दिवाली Soul",
    emoji: "✨",
    description: "आप दिवाली quietly और meaningfully मनाते हैं। दीयों की रोशनी, inner peace और positive vibes। No noise, no show - just pure festival essence!",
    traits: ["Peaceful", "Meaningful", "Minimalist", "Spiritual"],
    strengths: ["Inner peace", "Environment friendly", "Meaningful celebration", "Calm"],
    weaknesses: ["Too quiet कभी-कभी", "Miss the fun"],
    tips: ["कुछ excitement add करें", "Social भी हों थोड़ा"],
  },
  D: {
    type: "D",
    title: "पटाखों का शौकीन",
    emoji: "🎆",
    description: "आप दिवाली = पटाखे मानते हैं! Rocket से लेकर अनार तक, सब चाहिए। आवाज़ और रोशनी का combination आपको खुश करता है। Full blast दिवाली personality!",
    traits: ["Enthusiastic", "Loud", "Energetic", "Childlike"],
    strengths: ["Energy", "Excitement", "Childlike joy", "Making noise"],
    weaknesses: ["Pollution concerns", "Too loud"],
    tips: ["Green crackers try करें", "Balance रखें पटाखों में"],
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
