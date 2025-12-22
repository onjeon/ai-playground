// संवाद शैली - आप रिश्ते में कैसे communicate करते हैं?
// Communication Style Test

export const questions = [
  {
    id: 1,
    question: "कुछ बताना हो partner को?",
    options: [
      { text: "तुरंत openly बोल देता/देती हूं", type: "A" },
      { text: "right time पर बताता/बताती हूं", type: "B" },
      { text: "hints देता/देती हूं", type: "C" },
      { text: "रखता/रखती हूं अंदर", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Feelings express करना?",
    options: [
      { text: "बहुत आसान, खुलकर बोलता/बोलती हूं", type: "A" },
      { text: "करता/करती हूं जब comfortable", type: "B" },
      { text: "थोड़ा मुश्किल है", type: "C" },
      { text: "बहुत hard, नहीं होता", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Partner की बात सुनना?",
    options: [
      { text: "actively listen करता/करती हूं", type: "A" },
      { text: "सुनता/सुनती हूं ध्यान से", type: "B" },
      { text: "कभी-कभी distracted", type: "C" },
      { text: "respond करने में ज्यादा focus", type: "D" },
    ],
  },
  {
    id: 4,
    question: "कुछ गलत हो partner से?",
    options: [
      { text: "directly बता देता/देती हूं", type: "A" },
      { text: "diplomatically address", type: "B" },
      { text: "ignore करता/करती हूं mostly", type: "C" },
      { text: "अंदर ही रखता/रखती हूं, फिर burst", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Deep conversations?",
    options: [
      { text: "love करता/करती हूं, regularly होती हैं", type: "A" },
      { text: "कभी-कभी enjoy करता/करती हूं", type: "B" },
      { text: "uncomfortable होता है थोड़ा", type: "C" },
      { text: "avoid करता/करती हूं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Text vs Call vs Face-to-face?",
    options: [
      { text: "face-to-face prefer", type: "A" },
      { text: "depends on situation", type: "B" },
      { text: "text ज्यादा comfortable", type: "C" },
      { text: "जितना कम communication उतना better", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Needs और expectations बताना?",
    options: [
      { text: "clearly communicate करता/करती हूं", type: "A" },
      { text: "try करता/करती हूं बताने की", type: "B" },
      { text: "expect करता/करती हूं पता हो उन्हें", type: "C" },
      { text: "बताना नहीं आता", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Partner कुछ share करे personal?",
    options: [
      { text: "supportive response, appreciate", type: "A" },
      { text: "listen और comfort", type: "B" },
      { text: "कभी-कभी awkward लगता है", type: "C" },
      { text: "don't know कैसे respond करूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Miscommunication हो?",
    options: [
      { text: "clarify करता/करती हूं तुरंत", type: "A" },
      { text: "बात करके solve", type: "B" },
      { text: "upset होता/होती हूं पहले", type: "C" },
      { text: "assume कर लेता/लेती हूं worst", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Silent treatment?",
    options: [
      { text: "कभी नहीं देता/देती", type: "A" },
      { text: "try करता/करती हूं avoid", type: "B" },
      { text: "कभी-कभी हो जाता है", type: "C" },
      { text: "अक्सर use करता/करती हूं", type: "D" },
    ],
  },
  {
    id: 11,
    question: "'I love you' बोलना?",
    options: [
      { text: "रोज़ कई बार", type: "A" },
      { text: "regularly", type: "B" },
      { text: "special occasions पर", type: "C" },
      { text: "मुश्किल है verbalize करना", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall communication?",
    options: [
      { text: "excellent, open और honest", type: "A" },
      { text: "good, room for improvement", type: "B" },
      { text: "average, struggle कभी-कभी", type: "C" },
      { text: "poor, बहुत मुश्किल है", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "खुला संवादी",
    emoji: "💬",
    description: "आप excellent communicator हैं! Open, honest और expressive। Relationship में ये gold standard है।",
    traits: ["open", "expressive", "honest", "articulate"],
    strengths: ["clear communication", "no misunderstandings", "emotional intimacy"],
    weaknesses: ["कभी-कभी too much information"],
    tips: ["listening भी important", "partner की pace respect करें"],
  },
  B: {
    type: "B",
    title: "संतुलित वक्ता",
    emoji: "🗣️",
    description: "आप good communicator हैं। Balance है बोलने और सुनने में। Relationship के लिए healthy।",
    traits: ["balanced", "thoughtful", "responsive", "adaptive"],
    strengths: ["effective communication", "good listener", "appropriate expression"],
    weaknesses: ["कभी-कभी hold back"],
    tips: ["थोड़ा और open हों important बातों में"],
  },
  C: {
    type: "C",
    title: "सतर्क वक्ता",
    emoji: "🤐",
    description: "Communication आपके लिए challenging है। Feelings express करना और openly बात करना मुश्किल लगता है।",
    traits: ["reserved", "cautious", "indirect", "guarded"],
    strengths: ["think before speaking"],
    weaknesses: ["miscommunication", "feelings bottled up", "partner confused"],
    tips: ["practice open communication", "small steps से शुरू करें"],
  },
  D: {
    type: "D",
    title: "मौन प्रेमी",
    emoji: "🔇",
    description: "Communication में serious struggle है। ये relationship के लिए challenging है। काम करना जरूरी।",
    traits: ["closed", "uncommunicative", "avoiding", "suppressing"],
    strengths: ["internal processing"],
    weaknesses: ["relationship strain", "partner feels disconnected", "issues unresolved"],
    tips: ["communication skills सीखें", "therapy helpful हो सकती है", "partner से help लें"],
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
