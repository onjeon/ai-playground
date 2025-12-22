// धैर्य परीक्षण (Patience Test)
export const questions = [
  {
    id: 1,
    text: 'लंबी line में खड़े होने पर?',
    options: [
      { text: 'शांति से wait करता/करती हूं', type: 'A' },
      { text: 'थोड़ा restless लेकिन manage', type: 'B' },
      { text: 'irritate होता/होती हूं', type: 'C' },
      { text: 'line छोड़ देता/देती हूं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'slow internet पर?',
    options: [
      { text: 'wait कर लेता/लेती हूं', type: 'A' },
      { text: 'थोड़ा frustrated', type: 'B' },
      { text: 'बहुत irritate', type: 'C' },
      { text: 'गुस्सा आ जाता है', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'कोई देर से आए?',
    options: [
      { text: 'कोई बात नहीं', type: 'A' },
      { text: 'थोड़ा annoyed लेकिन ठीक', type: 'B' },
      { text: 'irritate होता/होती हूं', type: 'C' },
      { text: 'बहुत गुस्सा', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'traffic jam में?',
    options: [
      { text: 'music सुनकर relax', type: 'A' },
      { text: 'थोड़ा bored', type: 'B' },
      { text: 'horn बजाना शुरू', type: 'C' },
      { text: 'road rage', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'result का wait?',
    options: [
      { text: 'patiently wait करता/करती हूं', type: 'A' },
      { text: 'anxious लेकिन manage', type: 'B' },
      { text: 'बार-बार check', type: 'C' },
      { text: 'बहुत restless', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'बच्चों के साथ patience?',
    options: [
      { text: 'बहुत patience है', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'कम है', type: 'C' },
      { text: 'जल्दी irritate', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'कोई बात repeat करे?',
    options: [
      { text: 'फिर से सुनता/सुनती हूं', type: 'A' },
      { text: 'politely बताता/बताती हूं सुन लिया', type: 'B' },
      { text: 'annoyed होता/होती हूं', type: 'C' },
      { text: 'interrupt कर देता/देती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'goal achieve होने में time लगे?',
    options: [
      { text: 'consistent रहता/रहती हूं', type: 'A' },
      { text: 'थोड़ा demotivated लेकिन जारी', type: 'B' },
      { text: 'frustrated हो जाता/जाती हूं', type: 'C' },
      { text: 'छोड़ देता/देती हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'cooking/baking में wait?',
    options: [
      { text: 'proper time देता/देती हूं', type: 'A' },
      { text: 'mostly patient', type: 'B' },
      { text: 'जल्दी check करता/करती हूं', type: 'C' },
      { text: 'instant food better', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'overall patience level?',
    options: [
      { text: 'बहुत patient हूं', type: 'A' },
      { text: 'average', type: 'B' },
      { text: 'कम है', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  weaknesses: string[];
  advice: string;
}> = {
  A: {
    type: 'A',
    title: 'धैर्य के देवता/देवी',
    emoji: '🧘',
    description: 'आप patience के master हैं! कुछ भी हो, शांत रहते हैं। Buddha level patience!',
    traits: ['patient', 'calm', 'composed', 'wise', 'resilient'],
    weaknesses: ['कभी-कभी too passive', 'assertiveness कम'],
    advice: 'amazing patience! लेकिन जब जरूरी हो, voice up करें।',
  },
  B: {
    type: 'B',
    title: 'संतुलित धैर्य',
    emoji: '⚖️',
    description: 'आप average patience रखते हैं। Normal human! थोड़ा irritate होते हैं लेकिन manage कर लेते हैं।',
    traits: ['balanced', 'normal', 'human', 'manageable', 'reasonable'],
    weaknesses: ['कभी-कभी lose patience'],
    advice: 'good balance! थोड़ा और patience develop करें।',
  },
  C: {
    type: 'C',
    title: 'कम धैर्य',
    emoji: '😤',
    description: 'Patience आपकी strength नहीं है। जल्दी irritate हो जाते हैं। Modern life syndrome!',
    traits: ['impatient', 'quick', 'restless', 'action-oriented'],
    weaknesses: ['stress', 'relationships affected', 'hasty decisions'],
    advice: 'patience develop करें। Meditation और deep breathing try करें।',
  },
  D: {
    type: 'D',
    title: 'Zero Patience',
    emoji: '💥',
    description: 'Patience शब्द आपकी dictionary में नहीं! तुरंत चाहिए, wait नहीं कर सकते। Dangerous territory!',
    traits: ['extremely impatient', 'aggressive', 'impulsive', 'demanding'],
    weaknesses: ['health issues', 'broken relationships', 'poor decisions', 'stress'],
    advice: 'SERIOUSLY work on patience! Professional help भी consider करें।',
  },
};

export function calculateResult(answers: number[]) {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      scores[question.options[answerIndex].type]++;
    }
  });
  const resultType = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  return results[resultType];
}
