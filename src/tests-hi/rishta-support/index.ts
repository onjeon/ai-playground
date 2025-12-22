// साथ और सहारा - आप partner को कैसे support करते हैं?
// Emotional Support Test

export const questions = [
  {
    id: 1,
    question: "Partner stressed हो तो?",
    options: [
      { text: "पूरा support, साथ खड़ा/खड़ी", type: "A" },
      { text: "help करता/करती हूं best", type: "B" },
      { text: "space देता/देती हूं handle करने को", type: "C" },
      { text: "don't know क्या करूं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Partner को career problem?",
    options: [
      { text: "discuss, brainstorm, support", type: "A" },
      { text: "advice और encouragement", type: "B" },
      { text: "उनकी problem उनकी", type: "C" },
      { text: "practical solution ही बताता/बताती हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Partner रो रहा/रही हो?",
    options: [
      { text: "गले लगाकर comfort", type: "A" },
      { text: "साथ बैठता/बैठती हूं, सुनता/सुनती हूं", type: "B" },
      { text: "uncomfortable लगता है", type: "C" },
      { text: "रोने से कुछ नहीं होता बोलता/बोलती हूं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Partner का family issue?",
    options: [
      { text: "पूरी involvement, साथ में", type: "A" },
      { text: "support करता/करती हूं", type: "B" },
      { text: "उनके family matter में ज्यादा नहीं", type: "C" },
      { text: "मेरा क्या लेना देना", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Partner fail हो किसी में?",
    options: [
      { text: "motivate, belief दिखाता/दिखाती हूं", type: "A" },
      { text: "console और next plan", type: "B" },
      { text: "ठीक है, होता है बोलता/बोलती हूं", type: "C" },
      { text: "told you so वाला attitude", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Partner को health issue?",
    options: [
      { text: "पूरी care, साथ रहता/रहती हूं", type: "A" },
      { text: "doctor ले जाता/जाती हूं, care करता/करती हूं", type: "B" },
      { text: "basic help", type: "C" },
      { text: "खुद handle करें", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Partner anxious या worried?",
    options: [
      { text: "calm करता/करती हूं, साथ रहता/रहती हूं", type: "A" },
      { text: "सुनता/सुनती हूं, reassure करता/करती हूं", type: "B" },
      { text: "overthink मत करो बोलता/बोलती हूं", type: "C" },
      { text: "इतना worry क्यों करते हो", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Partner की achievements?",
    options: [
      { text: "celebrate, proud feel", type: "A" },
      { text: "खुश होता/होती हूं, बधाई", type: "B" },
      { text: "अच्छा है बोलता/बोलती हूं", type: "C" },
      { text: "जलन feel कभी-कभी", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Partner को कोई बुरा कहे?",
    options: [
      { text: "stand up करता/करती हूं", type: "A" },
      { text: "support करता/करती हूं privately", type: "B" },
      { text: "उनको handle करने देता/देती हूं", type: "C" },
      { text: "शायद सही भी हो", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Partner को बड़ा decision लेना हो?",
    options: [
      { text: "साथ में सोचते हैं, support", type: "A" },
      { text: "advice देता/देती हूं अगर पूछें", type: "B" },
      { text: "उनका decision उनका", type: "C" },
      { text: "मेरी सुनें बोलता/बोलती हूं", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Partner को self-doubt हो?",
    options: [
      { text: "belief दिखाता/दिखाती हूं, boost करता/करती हूं", type: "A" },
      { text: "encourage करता/करती हूं", type: "B" },
      { text: "खुद figure out करो", type: "C" },
      { text: "doubt में reason होगा कोई", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall support level?",
    options: [
      { text: "unconditional, हमेशा", type: "A" },
      { text: "अच्छा support देता/देती हूं", type: "B" },
      { text: "जब जरूरी हो", type: "C" },
      { text: "independent होना चाहिए", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पूर्ण सहारा",
    emoji: "🤗",
    description: "आप best supporter हैं! Partner जानता है कि आप हमेशा साथ हैं। Emotional और practical दोनों support देते हैं।",
    traits: ["supportive", "caring", "reliable", "empathetic"],
    strengths: ["partner feels secure", "strong bond", "trust"],
    weaknesses: ["कभी-कभी over-involved"],
    tips: ["boundaries भी रखें", "खुद का भी ख्याल"],
  },
  B: {
    type: "B",
    title: "अच्छा साथी",
    emoji: "💪",
    description: "आप good support देते हैं। Partner count कर सकता है आप पर। Balanced approach है।",
    traits: ["supportive", "balanced", "helpful", "present"],
    strengths: ["reliable support", "healthy involvement"],
    weaknesses: ["कभी-कभी more needed"],
    tips: ["emotional support और बढ़ाएं"],
  },
  C: {
    type: "C",
    title: "दूर का साथी",
    emoji: "🤔",
    description: "Support में थोड़ा distant हैं। Partner को sometimes अकेला feel हो सकता है। Close होने की जरूरत।",
    traits: ["distant", "independent", "reserved", "practical"],
    strengths: ["partner की independence respect"],
    weaknesses: ["emotionally unavailable कभी", "partner lonely"],
    tips: ["emotional presence बढ़ाएं", "actively support करें"],
  },
  D: {
    type: "D",
    title: "सहारे में कमी",
    emoji: "⚠️",
    description: "Support में serious gap है। Partner को आप पर rely करना मुश्किल है। Change जरूरी।",
    traits: ["unsupportive", "dismissive", "uninvolved", "self-focused"],
    strengths: ["awareness आ रही है"],
    weaknesses: ["partner hurt", "trust issues", "relationship strain"],
    tips: ["empathy develop करें", "partner की needs समझें", "effort करें"],
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
