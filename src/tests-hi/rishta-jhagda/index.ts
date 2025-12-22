// झगड़े का तरीका - आप conflict कैसे handle करते हैं?
// Conflict Style Test

export const questions = [
  {
    id: 1,
    question: "झगड़ा शुरू हो तो?",
    options: [
      { text: "शांत रहकर सुनता/सुनती हूं", type: "A" },
      { text: "बात करके solve करता/करती हूं", type: "B" },
      { text: "react हो जाता/जाती हूं", type: "C" },
      { text: "चुप हो जाता/जाती हूं, निकल लेता/लेती हूं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "गुस्सा आए तो?",
    options: [
      { text: "control करता/करती हूं", type: "A" },
      { text: "express करता/करती हूं calmly", type: "B" },
      { text: "burst हो जाता/जाती हूं", type: "C" },
      { text: "अंदर ही रखता/रखती हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "पार्टनर कुछ गलत बोले?",
    options: [
      { text: "ignore कर देता/देती हूं", type: "A" },
      { text: "बाद में बात करता/करती हूं", type: "B" },
      { text: "तुरंत react", type: "C" },
      { text: "hurt होकर silent", type: "D" },
    ],
  },
  {
    id: 4,
    question: "लंबा argument हो?",
    options: [
      { text: "peace के लिए छोड़ देता/देती हूं", type: "A" },
      { text: "solution ढूंढने की कोशिश", type: "B" },
      { text: "जीतने तक नहीं छोड़ता/छोड़ती", type: "C" },
      { text: "walk away कर जाता/जाती हूं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "झगड़े में आवाज़?",
    options: [
      { text: "नहीं उठाता/उठाती कभी", type: "A" },
      { text: "try करता/करती हूं control", type: "B" },
      { text: "उठ जाती है", type: "C" },
      { text: "चुप हो जाता/जाती हूं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "गलती हो तो?",
    options: [
      { text: "तुरंत sorry", type: "A" },
      { text: "realize होने पर माफी", type: "B" },
      { text: "sorry बोलना hard", type: "C" },
      { text: "wait करता/करती हूं कि वो बोले पहले", type: "D" },
    ],
  },
  {
    id: 7,
    question: "छोटी बात का बड़ा issue?",
    options: [
      { text: "नहीं होता, let go", type: "A" },
      { text: "try करता/करती हूं avoid", type: "B" },
      { text: "हो जाता है कभी-कभी", type: "C" },
      { text: "अक्सर होता है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Past issues को?",
    options: [
      { text: "भूल जाता/जाती हूं", type: "A" },
      { text: "forgive करके आगे बढ़ते हैं", type: "B" },
      { text: "याद रहते हैं, निकल आते हैं", type: "C" },
      { text: "score रखता/रखती हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "झगड़े के बाद?",
    options: [
      { text: "जल्दी normal हो जाते हैं", type: "A" },
      { text: "थोड़ा time लेकर ठीक", type: "B" },
      { text: "लंबी cold war", type: "C" },
      { text: "दिनों तक silent treatment", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Public में disagreement?",
    options: [
      { text: "बाद में घर पे बात", type: "A" },
      { text: "subtle hints दे देता/देती हूं", type: "B" },
      { text: "वहीं discussion शुरू", type: "C" },
      { text: "embarrass feel", type: "D" },
    ],
  },
  {
    id: 11,
    question: "मनाना/मनाना?",
    options: [
      { text: "मैं ही मना लेता/लेती हूं अक्सर", type: "A" },
      { text: "दोनों try करते हैं", type: "B" },
      { text: "ego आड़े आता है", type: "C" },
      { text: "उन्हें ही approach करना चाहिए", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall conflict style?",
    options: [
      { text: "Peacemaker, avoid conflict", type: "A" },
      { text: "Problem solver", type: "B" },
      { text: "Fighter, express करता/करती हूं", type: "C" },
      { text: "Withdrawer, distance ले लेता/लेती हूं", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "शांति प्रिय",
    emoji: "🕊️",
    description: "आप conflicts से बचते हैं और peace चाहते हैं। Harmony आपकी priority है। अच्छी बात है पर कभी-कभी voice raise करना भी जरूरी।",
    traits: ["peaceful", "accommodating", "calm", "patient"],
    strengths: ["less fights", "stable environment", "easy to be with"],
    weaknesses: ["issues unaddressed रहते हैं", "feelings suppress"],
    tips: ["अपनी बात भी रखें", "suppression unhealthy है"],
  },
  B: {
    type: "B",
    title: "समझदार negotiator",
    emoji: "🤝",
    description: "आप conflicts को maturely handle करते हैं। Listen, discuss और solve - perfect approach!",
    traits: ["mature", "balanced", "communicative", "solution-oriented"],
    strengths: ["healthy conflict resolution", "relationship growth", "mutual respect"],
    weaknesses: ["कभी-कभी exhausting होता है"],
    tips: ["ऐसे ही continue करें", "patience बनाए रखें"],
  },
  C: {
    type: "C",
    title: "उग्र योद्धा",
    emoji: "🔥",
    description: "आप express करते हैं अपनी feelings, sometimes aggressively। Passion है पर control जरूरी।",
    traits: ["expressive", "passionate", "reactive", "intense"],
    strengths: ["clear about feelings", "no bottling up"],
    weaknesses: ["hurt करते हैं कभी", "regret बाद में", "escalation"],
    tips: ["react करने से पहले रुकें", "calm down techniques सीखें"],
  },
  D: {
    type: "D",
    title: "मौन साधक",
    emoji: "🤐",
    description: "आप withdraw हो जाते हैं conflicts में। Silent treatment और distance आपका way है। ये healthy नहीं।",
    traits: ["avoidant", "withdrawing", "silent", "passive-aggressive"],
    strengths: ["immediate escalation नहीं"],
    weaknesses: ["issues solve नहीं होते", "partner confused", "unhealthy pattern"],
    tips: ["communication सीखें", "feelings express करें", "running away solution नहीं"],
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
