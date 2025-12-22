export const questions = [
  {
    id: 1,
    text: 'कितने करीबी दोस्त हैं?',
    options: [
      { text: 'कई अच्छे दोस्त', type: 'A' },
      { text: 'कुछ अच्छे दोस्त', type: 'B' },
      { text: 'एक-दो', type: 'C' },
      { text: 'कोई करीबी नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'दोस्तों के साथ कितना time बिताते हैं?',
    options: [
      { text: 'बहुत, regular', type: 'A' },
      { text: 'अच्छा खासा', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'बहुत कम', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'दोस्तों से कितना खुलकर बात करते हैं?',
    options: [
      { text: 'सब कुछ share करता हूं', type: 'A' },
      { text: 'ज्यादातर बातें', type: 'B' },
      { text: 'कुछ बातें', type: 'C' },
      { text: 'कुछ नहीं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'नए दोस्त बनाना कैसा है?',
    options: [
      { text: 'आसान, naturally होता है', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'बहुत मुश्किल', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Friendship को कैसे maintain करते हैं?',
    options: [
      { text: 'Actively, effort देता हूं', type: 'A' },
      { text: 'Contact में रहता हूं', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'दोस्तों के लिए कितना available हैं?',
    options: [
      { text: 'हमेशा, जब भी जरूरत', type: 'A' },
      { text: 'ज्यादातर', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'शायद ही', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'दोस्ती में trust कैसा है?',
    options: [
      { text: 'पूरा trust', type: 'A' },
      { text: 'अच्छा trust', type: 'B' },
      { text: 'थोड़ा cautious', type: 'C' },
      { text: 'Trust नहीं करता', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'दोस्तों के साथ conflicts कैसे handle करते हैं?',
    options: [
      { text: 'बात करके solve', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Avoid करता हूं', type: 'C' },
      { text: 'Friendship end', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'दोस्ती आपके लिए कितनी important है?',
    options: [
      { text: 'बहुत, life का essential part', type: 'A' },
      { text: 'Important है', type: 'B' },
      { text: 'थोड़ी', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'दोस्तों से support कैसा मिलता है?',
    options: [
      { text: 'बहुत, amazing friends', type: 'A' },
      { text: 'अच्छा support', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'नहीं मिलता', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Long-term friendships कैसी हैं?',
    options: [
      { text: 'बहुत strong, years से', type: 'A' },
      { text: 'कुछ हैं', type: 'B' },
      { text: 'ज्यादातर टूट गई', type: 'C' },
      { text: 'कोई नहीं', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Friendship से overall satisfaction कैसी है?',
    options: [
      { text: 'बहुत satisfied', type: 'A' },
      { text: 'Satisfied', type: 'B' },
      { text: 'थोड़ा unsatisfied', type: 'C' },
      { text: 'बहुत unsatisfied', type: 'D' },
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
    title: 'मजबूत दोस्ती',
    emoji: '🤝',
    description: 'आपके पास amazing friendships हैं। Deep connections और support है।',
    traits: ['great friend', 'social', 'supportive', 'loyal'],
    weaknesses: ['time management challenging'],
    advice: 'Treasure your friends! They are rare।',
  },
  B: {
    type: 'B',
    title: 'अच्छी दोस्ती',
    emoji: '😊',
    description: 'आपके अच्छे दोस्त हैं और meaningful friendships हैं।',
    traits: ['good friend', 'connected', 'balanced'],
    weaknesses: ['could be closer'],
    advice: 'Invest more in friendships। Quality time matters।',
  },
  C: {
    type: 'C',
    title: 'कम दोस्ती',
    emoji: '😔',
    description: 'Friendships में struggle है। Deep connections कम हैं।',
    traits: ['introverted', 'selective', 'struggling'],
    weaknesses: ['loneliness possible', 'limited support'],
    advice: 'छोटे से शुरू करें। One good friend is enough। Reach out।',
  },
  D: {
    type: 'D',
    title: 'दोस्ती में कमी',
    emoji: '💔',
    description: 'Close friendships नहीं हैं। यह loneliness और isolation cause कर सकता है।',
    traits: ['isolated', 'lonely', 'disconnected'],
    weaknesses: ['no social support', 'loneliness', 'mental health risk'],
    advice: 'Connection जरूरी है। Small steps लें। Classes join करें। Therapy helpful हो सकती है।',
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
