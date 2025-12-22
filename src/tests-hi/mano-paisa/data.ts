export const questions = [
  {
    id: 1,
    text: 'पैसे के बारे में आपकी overall feeling कैसी है?',
    options: [
      { text: 'Comfortable, secure', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'Stressed', type: 'C' },
      { text: 'बहुत anxious', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'पैसों का management कैसा है?',
    options: [
      { text: 'बहुत अच्छा, budget और savings', type: 'A' },
      { text: 'अच्छा है', type: 'B' },
      { text: 'Struggle', type: 'C' },
      { text: 'कोई control नहीं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Financial goals clear हैं?',
    options: [
      { text: 'बहुत clear, plan है', type: 'A' },
      { text: 'कुछ goals हैं', type: 'B' },
      { text: 'Unclear', type: 'C' },
      { text: 'कोई goals नहीं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'पैसों की चिंता कितनी रहती है?',
    options: [
      { text: 'बहुत कम', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'हर समय', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Emergency fund है?',
    options: [
      { text: 'हां, 6+ months', type: 'A' },
      { text: 'कुछ है', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'नहीं है', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Spending habits कैसी हैं?',
    options: [
      { text: 'Controlled और mindful', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'Impulsive कभी-कभी', type: 'C' },
      { text: 'Out of control', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Debt की situation कैसी है?',
    options: [
      { text: 'No debt / manageable', type: 'A' },
      { text: 'कुछ है, controlled', type: 'B' },
      { text: 'Struggling', type: 'C' },
      { text: 'Overwhelming', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Investments कैसी हैं?',
    options: [
      { text: 'Diversified, growing', type: 'A' },
      { text: 'कुछ किया है', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'कोई नहीं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'पैसे और happiness में relationship कैसा है?',
    options: [
      { text: 'पैसा tool है, happiness within', type: 'A' },
      { text: 'Important है लेकिन सब कुछ नहीं', type: 'B' },
      { text: 'पैसा से खुशी', type: 'C' },
      { text: 'पैसा ही सब कुछ', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'पैसों के बारे में बात करना कैसा लगता है?',
    options: [
      { text: 'Comfortable', type: 'A' },
      { text: 'ठीक है', type: 'B' },
      { text: 'Awkward', type: 'C' },
      { text: 'बहुत uncomfortable', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Financial future के बारे में क्या feel करते हैं?',
    options: [
      { text: 'Secure और confident', type: 'A' },
      { text: 'Okay', type: 'B' },
      { text: 'Worried', type: 'C' },
      { text: 'बहुत scared', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'पैसों से overall relationship कैसा है?',
    options: [
      { text: 'Healthy', type: 'A' },
      { text: 'Okay', type: 'B' },
      { text: 'Stressful', type: 'C' },
      { text: 'Toxic', type: 'D' },
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
    title: 'स्वस्थ धन संबंध',
    emoji: '💰',
    description: 'पैसों के साथ healthy relationship है। Secure, planned, और balanced हैं।',
    traits: ['financially literate', 'secure', 'balanced', 'planned'],
    weaknesses: ['कभी-कभी over-cautious'],
    advice: 'Great! Share your knowledge with others।',
  },
  B: {
    type: 'B',
    title: 'अच्छा धन संबंध',
    emoji: '💵',
    description: 'पैसों का management okay है। कुछ areas better हो सकते हैं।',
    traits: ['managing', 'aware', 'working on it'],
    weaknesses: ['room for improvement'],
    advice: 'Financial education लें। Better habits build करें।',
  },
  C: {
    type: 'C',
    title: 'तनावपूर्ण धन संबंध',
    emoji: '😰',
    description: 'पैसों से stress है। Management या income issues हैं।',
    traits: ['stressed', 'struggling', 'worried'],
    weaknesses: ['anxiety', 'poor decisions', 'health effects'],
    advice: 'Budget बनाएं। Financial advisor से मिलें। Small steps से शुरू करें।',
  },
  D: {
    type: 'D',
    title: 'गंभीर धन समस्या',
    emoji: '💔',
    description: 'पैसों की serious issues हैं जो mental health को affect कर रही हैं।',
    traits: ['overwhelmed', 'anxious', 'struggling'],
    weaknesses: ['severe stress', 'depression risk', 'relationship issues'],
    advice: 'Professional help लें। Financial counselor और therapist दोनों। One step at a time।',
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
