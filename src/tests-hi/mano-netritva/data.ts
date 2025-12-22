export const questions = [
  {
    id: 1,
    text: 'Leadership role में कैसा feel करते हैं?',
    options: [
      { text: 'Natural, comfortable', type: 'A' },
      { text: 'अच्छा लगता है', type: 'B' },
      { text: 'Uncomfortable', type: 'C' },
      { text: 'बिल्कुल नहीं चाहता', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Group में naturally lead करते हैं?',
    options: [
      { text: 'हां, अक्सर', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Decisions लेने में कैसे हैं?',
    options: [
      { text: 'Confident, quick', type: 'A' },
      { text: 'सोचकर लेता हूं', type: 'B' },
      { text: 'Hesitant', type: 'C' },
      { text: 'बहुत मुश्किल', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'दूसरों को motivate करने में कैसे हैं?',
    options: [
      { text: 'बहुत अच्छा', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Responsibility लेने में कैसे हैं?',
    options: [
      { text: 'Love it, ready हूं', type: 'A' },
      { text: 'ले सकता हूं', type: 'B' },
      { text: 'Hesitant', type: 'C' },
      { text: 'Avoid करता हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Vision और direction देने में कैसे हैं?',
    options: [
      { text: 'Clear vision है', type: 'A' },
      { text: 'कुछ हद तक', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Conflicts resolve करने में कैसे हैं?',
    options: [
      { text: 'Good at it', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Avoid करता हूं', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Public speaking कैसा लगता है?',
    options: [
      { text: 'Enjoy करता हूं', type: 'A' },
      { text: 'कर सकता हूं', type: 'B' },
      { text: 'Nervous होता हूं', type: 'C' },
      { text: 'बहुत डर लगता है', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'दूसरों की respect और trust मिलता है?',
    options: [
      { text: 'हां, naturally', type: 'A' },
      { text: 'ज्यादातर', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Pressure में कैसे perform करते हैं?',
    options: [
      { text: 'Better, thrive under pressure', type: 'A' },
      { text: 'Handle कर लेता हूं', type: 'B' },
      { text: 'Struggle', type: 'C' },
      { text: 'Fall apart', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Team को delegate करने में कैसे हैं?',
    options: [
      { text: 'Effective delegation', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'सब खुद करता हूं', type: 'C' },
      { text: 'Team नहीं है', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'अपनी leadership को कैसे rate करेंगे?',
    options: [
      { text: 'Strong leader', type: 'A' },
      { text: 'Good leader', type: 'B' },
      { text: 'Developing', type: 'C' },
      { text: 'Not a leader', type: 'D' },
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
    title: 'मजबूत नेतृत्व',
    emoji: '👑',
    description: 'Natural leader हैं। Vision, decision-making, और influence strong है।',
    traits: ['leader', 'confident', 'influential', 'decisive'],
    weaknesses: ['sometimes dominant'],
    advice: 'Great leadership! Listen more। Empower others।',
  },
  B: {
    type: 'B',
    title: 'अच्छा नेतृत्व',
    emoji: '⭐',
    description: 'Leadership qualities अच्छी हैं। और develop हो सकती हैं।',
    traits: ['capable leader', 'growing', 'potential'],
    weaknesses: ['room for growth'],
    advice: 'Leadership skills develop करें। More opportunities लें।',
  },
  C: {
    type: 'C',
    title: 'विकासशील नेतृत्व',
    emoji: '🌱',
    description: 'Leadership developing है। Potential है लेकिन confidence या skills build करनी हैं।',
    traits: ['hesitant', 'learning', 'potential'],
    weaknesses: ['lack of confidence'],
    advice: 'Small leadership roles से शुरू करें। Skills learn करें। Confidence आएगा।',
  },
  D: {
    type: 'D',
    title: 'नेतृत्व की कमी',
    emoji: '😔',
    description: 'Leadership में comfortable नहीं। यह okay है, सब leaders नहीं होते।',
    traits: ['follower', 'supportive role', 'not leadership-oriented'],
    weaknesses: ['may miss opportunities'],
    advice: 'अगर leadership चाहते हैं तो develop कर सकते हैं। Otherwise, great followers equally important हैं।',
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
