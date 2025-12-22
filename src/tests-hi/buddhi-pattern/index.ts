// पैटर्न पहचान टेस्ट - Pattern Recognition Test
// 패턴 인식 테스트

export const questions = [
  {
    id: 1,
    text: 'पैटर्न खोजें: 🔴🔵🔴🔵🔴__ अगला क्या होगा?',
    options: [
      { text: '🔵', type: 'A' },
      { text: '🔴', type: 'D' },
      { text: '🟢', type: 'D' },
      { text: '🟡', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'पैटर्न खोजें: 2, 4, 6, 8, __ अगला क्या होगा?',
    options: [
      { text: '10', type: 'A' },
      { text: '9', type: 'D' },
      { text: '12', type: 'C' },
      { text: '11', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'पैटर्न खोजें: A, C, E, G, __ अगला क्या होगा?',
    options: [
      { text: 'I', type: 'A' },
      { text: 'H', type: 'C' },
      { text: 'J', type: 'D' },
      { text: 'K', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'पैटर्न खोजें: △○□ △○□ △○__ अगला क्या होगा?',
    options: [
      { text: '□', type: 'A' },
      { text: '△', type: 'D' },
      { text: '○', type: 'C' },
      { text: '⬡', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'पैटर्न खोजें: 1, 1, 2, 3, 5, 8, __ अगला क्या होगा?',
    options: [
      { text: '13', type: 'A' },
      { text: '11', type: 'C' },
      { text: '10', type: 'D' },
      { text: '12', type: 'B' },
    ],
  },
  {
    id: 6,
    text: 'पैटर्न खोजें: AB, CD, EF, GH, __ अगला क्या होगा?',
    options: [
      { text: 'IJ', type: 'A' },
      { text: 'HI', type: 'C' },
      { text: 'JK', type: 'D' },
      { text: 'IK', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'पैटर्न खोजें: 3, 6, 12, 24, __ अगला क्या होगा?',
    options: [
      { text: '48', type: 'A' },
      { text: '36', type: 'C' },
      { text: '30', type: 'D' },
      { text: '42', type: 'B' },
    ],
  },
  {
    id: 8,
    text: 'पैटर्न खोजें: ↑→↓← ↑→↓← ↑→__ अगला क्या होगा?',
    options: [
      { text: '↓', type: 'A' },
      { text: '←', type: 'C' },
      { text: '↑', type: 'D' },
      { text: '→', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'पैटर्न खोजें: 100, 95, 90, 85, __ अगला क्या होगा?',
    options: [
      { text: '80', type: 'A' },
      { text: '75', type: 'C' },
      { text: '82', type: 'D' },
      { text: '78', type: 'B' },
    ],
  },
  {
    id: 10,
    text: 'पैटर्न खोजें: 🌑🌓🌕🌗 🌑🌓🌕🌗 🌑🌓__ अगला क्या होगा?',
    options: [
      { text: '🌕', type: 'A' },
      { text: '🌗', type: 'C' },
      { text: '🌑', type: 'D' },
      { text: '🌓', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'पैटर्न खोजें: 1A, 2B, 3C, 4D, __ अगला क्या होगा?',
    options: [
      { text: '5E', type: 'A' },
      { text: '5F', type: 'C' },
      { text: '4E', type: 'D' },
      { text: '6E', type: 'B' },
    ],
  },
  {
    id: 12,
    text: 'पैटर्न खोजें: 1, 4, 9, 16, 25, __ अगला क्या होगा?',
    options: [
      { text: '36', type: 'A' },
      { text: '30', type: 'C' },
      { text: '35', type: 'D' },
      { text: '49', type: 'B' },
    ],
  },
  {
    id: 13,
    text: 'पैटर्न खोजें: ZY, XW, VU, TS, __ अगला क्या होगा?',
    options: [
      { text: 'RQ', type: 'A' },
      { text: 'QP', type: 'C' },
      { text: 'SR', type: 'D' },
      { text: 'RP', type: 'B' },
    ],
  },
  {
    id: 14,
    text: 'पैटर्न खोजें: 2, 6, 12, 20, 30, __ अगला क्या होगा?',
    options: [
      { text: '42', type: 'A' },
      { text: '40', type: 'C' },
      { text: '36', type: 'D' },
      { text: '44', type: 'B' },
    ],
  },
  {
    id: 15,
    text: 'पैटर्न खोजें: ◆◇◆ ◇◆◇ ◆◇◆ __ अगला क्या होगा?',
    options: [
      { text: '◇◆◇', type: 'A' },
      { text: '◆◇◆', type: 'C' },
      { text: '◇◇◇', type: 'D' },
      { text: '◆◆◆', type: 'D' },
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
    title: 'पैटर्न मास्टर',
    emoji: '👁️',
    description: 'आप patterns को तुरंत पहचान लेते हैं! आपकी आंखें और दिमाग sequences और relationships देखने में expert हैं।',
    traits: ['तेज pattern recognition', 'visual intelligence', 'predictive ability', 'detail-oriented'],
    strengths: ['trends predict करना', 'codes crack करना', 'data analysis'],
    weaknesses: ['हर जगह pattern ढूंढने की tendency'],
    tips: ['coding या data science में career explore करें'],
  },
  B: {
    type: 'B',
    title: 'अच्छा Pattern Spotter',
    emoji: '🔍',
    description: 'आप patterns अच्छे से पहचान पाते हैं। थोड़े complex patterns में थोड़ा समय लग सकता है।',
    traits: ['observant', 'analytical', 'patient', 'methodical'],
    strengths: ['basic patterns जल्दी पहचानना', 'logical thinking'],
    weaknesses: ['complex patterns में थोड़ी difficulty'],
    tips: ['puzzle games खेलें, Sudoku try करें'],
  },
  C: {
    type: 'C',
    title: 'विकासशील Pattern Reader',
    emoji: '🌱',
    description: 'आप pattern recognition सीख रहे हैं। Practice से आप और better होंगे।',
    traits: ['learning mindset', 'curious', 'improving'],
    strengths: ['simple patterns समझना', 'willingness to learn'],
    weaknesses: ['advanced patterns में practice चाहिए'],
    tips: ['number series और visual puzzles practice करें'],
  },
  D: {
    type: 'D',
    title: 'Creative Thinker',
    emoji: '🎨',
    description: 'आप patterns के बजाय unique चीजें देखते हैं। यह creativity की निशानी है!',
    traits: ['creative mind', 'unique perspective', 'out of box thinker'],
    strengths: ['original ideas', 'different approach'],
    weaknesses: ['standard patterns miss हो सकते हैं'],
    tips: ['pattern games से शुरू करें, धीरे-धीरे improve करें'],
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
