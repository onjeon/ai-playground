// पालन-पोषण शैली (Parenting Style)
export const questions = [
  {
    id: 1,
    text: 'बच्चों को discipline कैसे?',
    options: [
      { text: 'समझाकर, love से', type: 'A' },
      { text: 'rules और boundaries', type: 'B' },
      { text: 'strict होता/होती हूं', type: 'C' },
      { text: 'जो करें करने देता/देती हूं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'बच्चे की पढ़ाई में?',
    options: [
      { text: 'support करता/करती हूं, pressure नहीं', type: 'A' },
      { text: 'monitor करता/करती हूं', type: 'B' },
      { text: 'बहुत involved', type: 'C' },
      { text: 'उन पर छोड़ देता/देती हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'बच्चे की गलती पर?',
    options: [
      { text: 'समझाता/समझाती हूं', type: 'A' },
      { text: 'consequences देता/देती हूं', type: 'B' },
      { text: 'सजा देता/देती हूं', type: 'C' },
      { text: 'ignore करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'screen time?',
    options: [
      { text: 'balanced, guidance के साथ', type: 'A' },
      { text: 'strict limits', type: 'B' },
      { text: 'बहुत strict', type: 'C' },
      { text: 'जितना चाहें', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'बच्चे की opinions?',
    options: [
      { text: 'सुनता/सुनती हूं और respect', type: 'A' },
      { text: 'consider करता/करती हूं', type: 'B' },
      { text: 'बड़ों की बात मानो', type: 'C' },
      { text: 'वो जो कहें', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'बच्चे की extra-curricular activities?',
    options: [
      { text: 'choice देता/देती हूं', type: 'A' },
      { text: 'balanced approach', type: 'B' },
      { text: 'मैं decide करता/करती हूं', type: 'C' },
      { text: 'कोई pressure नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'बच्चे की दोस्ती में?',
    options: [
      { text: 'guide करता/करती हूं', type: 'A' },
      { text: 'monitor करता/करती हूं', type: 'B' },
      { text: 'control करता/करती हूं', type: 'C' },
      { text: 'उनकी मर्जी', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'communication with kids?',
    options: [
      { text: 'open और honest', type: 'A' },
      { text: 'mostly open', type: 'B' },
      { text: 'one-way, मैं बोलता/बोलती हूं', type: 'C' },
      { text: 'limited', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'बच्चे fail हो जाए?',
    options: [
      { text: 'support और motivate', type: 'A' },
      { text: 'कारण समझता/समझती हूं', type: 'B' },
      { text: 'disappointed होता/होती हूं', type: 'C' },
      { text: 'कोई reaction नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'parenting goal?',
    options: [
      { text: 'confident और kind इंसान बनाना', type: 'A' },
      { text: 'responsible citizen', type: 'B' },
      { text: 'successful होना जरूरी', type: 'C' },
      { text: 'जैसे बने वैसे', type: 'D' },
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
    title: 'Authoritative Parent',
    emoji: '💝',
    description: 'आप ideal parent हैं! Loving yet firm, supportive yet guiding। Best parenting style!',
    traits: ['loving', 'supportive', 'firm', 'communicative', 'balanced'],
    weaknesses: ['थोड़ा lenient कभी-कभी'],
    advice: 'excellent parenting! Keep the balance।',
  },
  B: {
    type: 'B',
    title: 'Structured Parent',
    emoji: '📋',
    description: 'आप structured parent हैं। Rules, boundaries, expectations clear। Organized parenting!',
    traits: ['organized', 'structured', 'clear', 'consistent', 'responsible'],
    weaknesses: ['थोड़ा rigid', 'flexibility कम'],
    advice: 'structure अच्छा है, थोड़ा flexibility भी add करें।',
  },
  C: {
    type: 'C',
    title: 'Strict Parent',
    emoji: '⚡',
    description: 'आप strict parent हैं। High expectations, discipline first। Traditional approach।',
    traits: ['strict', 'demanding', 'high expectations', 'disciplined'],
    weaknesses: ['connection कम', 'fear-based', 'rebellion possible'],
    advice: 'discipline जरूरी है, लेकिन love और understanding भी। Balance लाएं।',
  },
  D: {
    type: 'D',
    title: 'Permissive Parent',
    emoji: '🎈',
    description: 'आप permissive parent हैं। बच्चों को freedom, कम rules। Friend जैसे!',
    traits: ['permissive', 'friendly', 'lenient', 'easygoing'],
    weaknesses: ['no boundaries', 'discipline कम', 'respect issues'],
    advice: 'love अच्छा है, लेकिन boundaries जरूरी हैं बच्चों के लिए।',
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
