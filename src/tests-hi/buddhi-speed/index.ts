// मानसिक गति टेस्ट - Mental Speed Test
// 두뇌 속도 테스트

export const questions = [
  {
    id: 1,
    text: '15 + 27 = ? (जल्दी बताएं)',
    options: [
      { text: '42', type: 'A' },
      { text: '43', type: 'C' },
      { text: '41', type: 'D' },
      { text: '44', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'ZEBRA में कितने vowels हैं?',
    options: [
      { text: '2', type: 'A' },
      { text: '1', type: 'C' },
      { text: '3', type: 'D' },
      { text: '0', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '100 - 37 = ?',
    options: [
      { text: '63', type: 'A' },
      { text: '73', type: 'C' },
      { text: '67', type: 'D' },
      { text: '53', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'अगर आज मंगलवार है, तो 5 दिन बाद कौन सा दिन होगा?',
    options: [
      { text: 'रविवार', type: 'A' },
      { text: 'शनिवार', type: 'C' },
      { text: 'सोमवार', type: 'B' },
      { text: 'शुक्रवार', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '7 × 8 = ?',
    options: [
      { text: '56', type: 'A' },
      { text: '54', type: 'C' },
      { text: '58', type: 'D' },
      { text: '48', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'COMPUTER को उल्टा लिखें का पहला letter?',
    options: [
      { text: 'R', type: 'A' },
      { text: 'C', type: 'D' },
      { text: 'E', type: 'C' },
      { text: 'T', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '144 ÷ 12 = ?',
    options: [
      { text: '12', type: 'A' },
      { text: '11', type: 'C' },
      { text: '14', type: 'D' },
      { text: '10', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'इनमें से कौन सा number odd है? 24, 36, 45, 52',
    options: [
      { text: '45', type: 'A' },
      { text: '24', type: 'D' },
      { text: '36', type: 'D' },
      { text: '52', type: 'C' },
    ],
  },
  {
    id: 9,
    text: '25 × 4 = ?',
    options: [
      { text: '100', type: 'A' },
      { text: '90', type: 'C' },
      { text: '110', type: 'D' },
      { text: '80', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'ELEPHANT में E कितनी बार आता है?',
    options: [
      { text: '2', type: 'A' },
      { text: '1', type: 'C' },
      { text: '3', type: 'D' },
      { text: '0', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '81 का वर्गमूल?',
    options: [
      { text: '9', type: 'A' },
      { text: '8', type: 'C' },
      { text: '7', type: 'D' },
      { text: '11', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'अगर घड़ी में 3:45 बजे हैं, तो minute hand किस number पर है?',
    options: [
      { text: '9', type: 'A' },
      { text: '3', type: 'D' },
      { text: '12', type: 'D' },
      { text: '6', type: 'C' },
    ],
  },
  {
    id: 13,
    text: '1000 - 456 = ?',
    options: [
      { text: '544', type: 'A' },
      { text: '554', type: 'C' },
      { text: '534', type: 'B' },
      { text: '564', type: 'D' },
    ],
  },
  {
    id: 14,
    text: 'A से Z तक कुल कितने letters हैं?',
    options: [
      { text: '26', type: 'A' },
      { text: '24', type: 'D' },
      { text: '25', type: 'C' },
      { text: '27', type: 'D' },
    ],
  },
  {
    id: 15,
    text: '13 × 11 = ?',
    options: [
      { text: '143', type: 'A' },
      { text: '133', type: 'C' },
      { text: '153', type: 'D' },
      { text: '141', type: 'B' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  tips: string[];
}> = {
  A: {
    type: 'A',
    title: 'बिजली जैसी गति',
    emoji: '⚡',
    description: 'आपकी mental speed अद्भुत है! आप calculations और decisions बहुत तेजी से कर सकते हैं।',
    traits: ['quick thinker', 'sharp mind', 'fast processor', 'alert'],
    strengths: ['quick calculations', 'fast decisions', 'real-time problem solving'],
    weaknesses: ['जल्दबाजी में गलतियाँ हो सकती हैं'],
    tips: ['अपनी speed को competitive exams में use करें'],
  },
  B: {
    type: 'B',
    title: 'तेज दिमाग',
    emoji: '🚀',
    description: 'आपकी mental speed अच्छी है। थोड़े और practice से और तेज हो सकते हैं।',
    traits: ['fast thinker', 'good speed', 'reliable'],
    strengths: ['decent calculation speed', 'good recall'],
    weaknesses: ['complex problems में थोड़ा और समय'],
    tips: ['Brain games खेलें, mental math practice करें'],
  },
  C: {
    type: 'C',
    title: 'औसत गति',
    emoji: '🎯',
    description: 'आपकी mental speed average है। Steady पर thorough हैं आप।',
    traits: ['steady', 'careful', 'accurate over speed'],
    strengths: ['accuracy', 'thorough thinking'],
    weaknesses: ['speed improve की जरूरत'],
    tips: ['Timed exercises करें, जैसे Sudoku, math puzzles'],
  },
  D: {
    type: 'D',
    title: 'गति में सुधार की जरूरत',
    emoji: '🐢',
    description: 'Mental speed में improvement possible है। Regular practice से होगा।',
    traits: ['slow but steady', 'careful', 'needs practice'],
    strengths: ['thorough analysis करते हैं'],
    weaknesses: ['quick thinking में कठिनाई'],
    tips: ['Daily mental math करें, speed reading try करें'],
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
