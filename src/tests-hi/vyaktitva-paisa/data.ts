// पैसों का रवैया (Money Mindset)
export const questions = [
  {
    id: 1,
    text: 'salary मिलते ही क्या करते हैं?',
    options: [
      { text: 'पहले savings, फिर खर्च', type: 'A' },
      { text: 'bills pay करता/करती हूं', type: 'B' },
      { text: 'shopping हो जाती है', type: 'C' },
      { text: 'invest करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'shopping करते समय?',
    options: [
      { text: 'budget में रहता/रहती हूं', type: 'A' },
      { text: 'जरूरत का ही लेता/लेती हूं', type: 'B' },
      { text: 'पसंद आए तो ले लेता/लेती हूं', type: 'C' },
      { text: 'deals और offers देखता/देखती हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'credit card के बारे में?',
    options: [
      { text: 'नहीं use करता/करती', type: 'A' },
      { text: 'carefully use करता/करती हूं', type: 'B' },
      { text: 'regularly use करता/करती हूं', type: 'C' },
      { text: 'rewards के लिए smart use', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'महीने के आखिर में पैसे की स्थिति?',
    options: [
      { text: 'savings होती है', type: 'A' },
      { text: 'manage हो जाता है', type: 'B' },
      { text: 'tight हो जाता है', type: 'C' },
      { text: 'depends करता है', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'बड़ी खरीदारी से पहले?',
    options: [
      { text: 'महीनों research करता/करती हूं', type: 'A' },
      { text: 'थोड़ा सोचता/सोचती हूं', type: 'B' },
      { text: 'impulse में ले लेता/लेती हूं', type: 'C' },
      { text: 'ROI calculate करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'दोस्तों को पैसे उधार देने में?',
    options: [
      { text: 'avoid करता/करती हूं', type: 'A' },
      { text: 'close friends को दे देता/देती हूं', type: 'B' },
      { text: 'easily दे देता/देती हूं', type: 'C' },
      { text: 'situation पर depend', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'financial planning कैसी है?',
    options: [
      { text: 'detailed budget और tracking', type: 'A' },
      { text: 'basic planning', type: 'B' },
      { text: 'कोई planning नहीं', type: 'C' },
      { text: 'investments और growth focus', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'पैसा खर्च करने में guilt?',
    options: [
      { text: 'हां, सोचता/सोचती हूं बहुत', type: 'A' },
      { text: 'थोड़ा', type: 'B' },
      { text: 'नहीं, enjoy करता/करती हूं', type: 'C' },
      { text: 'productive खर्च में नहीं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'emergency fund है?',
    options: [
      { text: 'हां, 6+ months का', type: 'A' },
      { text: 'कुछ savings हैं', type: 'B' },
      { text: 'नहीं है', type: 'C' },
      { text: 'investments में है', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'पैसे का मतलब क्या है आपके लिए?',
    options: [
      { text: 'security और safety', type: 'A' },
      { text: 'जरूरतें पूरी करना', type: 'B' },
      { text: 'freedom और enjoyment', type: 'C' },
      { text: 'growth और opportunities', type: 'D' },
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
    title: 'कंजूस कहलाने वाले',
    emoji: '🏦',
    description: 'आप money-saver हैं! हर पैसा सोच-समझकर खर्च करते हैं। Financial security आपके लिए सबसे important है।',
    traits: ['सावधान', 'planner', 'disciplined', 'secure', 'cautious'],
    weaknesses: ['over-saving', 'life enjoy नहीं करते', 'कभी-कभी stingy'],
    advice: 'savings अच्छी हैं, लेकिन कभी-कभी खुद पर भी खर्च करें!',
  },
  B: {
    type: 'B',
    title: 'संतुलित खर्चीले',
    emoji: '⚖️',
    description: 'आप balanced approach रखते हैं। जरूरत का खर्च, थोड़ी savings, practical decisions - सब manage करते हैं।',
    traits: ['balanced', 'practical', 'responsible', 'moderate', 'sensible'],
    weaknesses: ['कभी-कभी opportunity miss', 'growth slow'],
    advice: 'balance अच्छा है, थोड़ा investment भी explore करें!',
  },
  C: {
    type: 'C',
    title: 'खुले हाथ वाले',
    emoji: '💸',
    description: 'आप पैसा कमाते हैं enjoy करने के लिए! Shopping, dining, experiences - जिंदगी जीने में believe करते हैं।',
    traits: ['generous', 'spontaneous', 'experiential', 'fun-loving', 'carefree'],
    weaknesses: ['savings कम', 'financial stress', 'future planning weak'],
    advice: 'enjoy करें, लेकिन थोड़ी savings जरूर रखें future के लिए!',
  },
  D: {
    type: 'D',
    title: 'स्मार्ट इन्वेस्टर',
    emoji: '📈',
    description: 'आप पैसे को grow करना जानते हैं! Stocks, mutual funds, real estate - आपके लिए पैसा tool है wealth बनाने का।',
    traits: ['strategic', 'growth-minded', 'analytical', 'ambitious', 'informed'],
    weaknesses: ['risk में फंस सकते हैं', 'over-confident कभी-कभी'],
    advice: 'smart investing अच्छी है, लेकिन diversify करें और risky moves से बचें!',
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
