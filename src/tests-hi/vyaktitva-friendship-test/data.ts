// दोस्ती की परीक्षा (Friendship Test)
export const questions = [
  {
    id: 1,
    text: 'best friend के लिए क्या कर सकते हैं?',
    options: [
      { text: 'कुछ भी', type: 'A' },
      { text: 'बहुत कुछ', type: 'B' },
      { text: 'reasonable चीज़ें', type: 'C' },
      { text: 'depends करता है', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'दोस्त मुश्किल में हो?',
    options: [
      { text: 'तुरंत पहुंचता/पहुंचती हूं', type: 'A' },
      { text: 'मदद करता/करती हूं', type: 'B' },
      { text: 'पूछता/पूछती हूं क्या help चाहिए', type: 'C' },
      { text: 'बाद में देखता/देखती हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'दोस्त की secret रखना?',
    options: [
      { text: 'कभी नहीं बताऊंगा/बताऊंगी', type: 'A' },
      { text: 'हां, trust important', type: 'B' },
      { text: 'mostly रखता/रखती हूं', type: 'C' },
      { text: 'depends', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'दोस्त गलत हो तो?',
    options: [
      { text: 'honestly बताता/बताती हूं', type: 'A' },
      { text: 'gently point out', type: 'B' },
      { text: 'hints देता/देती हूं', type: 'C' },
      { text: 'चुप रहता/रहती हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'long distance friendship?',
    options: [
      { text: 'regular contact रखता/रखती हूं', type: 'A' },
      { text: 'try करता/करती हूं', type: 'B' },
      { text: 'कभी-कभी बात', type: 'C' },
      { text: 'दूर होने पर दूर', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'दोस्त की success पर?',
    options: [
      { text: 'genuinely खुश', type: 'A' },
      { text: 'खुश होता/होती हूं', type: 'B' },
      { text: 'थोड़ा jealous भी', type: 'C' },
      { text: 'compare कर लेता/लेती हूं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'दोस्त से झगड़ा?',
    options: [
      { text: 'जल्दी resolve करता/करती हूं', type: 'A' },
      { text: 'थोड़े दिन बाद बात', type: 'B' },
      { text: 'वो करे पहले', type: 'C' },
      { text: 'ego आड़े आता है', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'पुराने दोस्तों के साथ?',
    options: [
      { text: 'connected रहता/रहती हूं', type: 'A' },
      { text: 'try करता/करती हूं', type: 'B' },
      { text: 'कभी-कभी याद', type: 'C' },
      { text: 'out of sight, out of mind', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'दोस्त पैसे मांगे?',
    options: [
      { text: 'दे देता/देती हूं बिना सोचे', type: 'A' },
      { text: 'मदद करता/करती हूं', type: 'B' },
      { text: 'situation देखकर', type: 'C' },
      { text: 'avoid करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'friendship में सबसे important?',
    options: [
      { text: 'unconditional support', type: 'A' },
      { text: 'trust और honesty', type: 'B' },
      { text: 'fun और memories', type: 'C' },
      { text: 'mutual benefit', type: 'D' },
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
    title: 'Best Friend Forever',
    emoji: '💕',
    description: 'आप ultimate BFF हैं! Loyal, supportive, always there। दोस्ती के लिए सब कुछ!',
    traits: ['loyal', 'supportive', 'selfless', 'caring', 'reliable'],
    weaknesses: ['खुद की ignore', 'एक तरफा हो सकती है', 'exploited हो सकते हैं'],
    advice: 'amazing friend! लेकिन reciprocity भी जरूरी है।',
  },
  B: {
    type: 'B',
    title: 'Great Friend',
    emoji: '🤝',
    description: 'आप great friend हैं। Supportive, trustworthy, balanced। Healthy friendship!',
    traits: ['trustworthy', 'supportive', 'balanced', 'honest', 'caring'],
    weaknesses: ['कभी-कभी busy हो जाते हैं'],
    advice: 'wonderful friend! Keep nurturing your friendships।',
  },
  C: {
    type: 'C',
    title: 'Casual Friend',
    emoji: '👋',
    description: 'आप casual friend हैं। Fun के साथ, deep commitment कम। Social circle!',
    traits: ['social', 'fun', 'casual', 'flexible', 'easy-going'],
    weaknesses: ['deep bonds कम', 'unreliable कभी-कभी'],
    advice: 'casual okay है, लेकिन कुछ deep friendships भी nurture करें।',
  },
  D: {
    type: 'D',
    title: 'Distant Friend',
    emoji: '🚶',
    description: 'Friendship में distance रखते हैं। Self-focused, conditional support। Room for improvement!',
    traits: ['distant', 'self-focused', 'conditional', 'practical'],
    weaknesses: ['lonely feel हो सकता है', 'support न मिले जब चाहिए'],
    advice: 'friendships investment हैं। थोड़ा और invest करें।',
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
