export const questions = [
  {
    id: 1,
    text: 'दूसरों को inspire करने में कैसे हैं?',
    options: [
      { text: 'Natural, लोग inspired होते हैं', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'खुद कितने inspired और motivated रहते हैं?',
    options: [
      { text: 'ज्यादातर समय', type: 'A' },
      { text: 'Often', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'Rarely', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Positive energy spread करते हैं?',
    options: [
      { text: 'हां, naturally', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Sometimes', type: 'C' },
      { text: 'Negative energy है', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Motivational content consume करते हैं?',
    options: [
      { text: 'Regularly, helps', type: 'A' },
      { text: 'Sometimes', type: 'B' },
      { text: 'Rarely', type: 'C' },
      { text: 'No interest', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Tough times में खुद को कैसे motivate करते हैं?',
    options: [
      { text: 'Internal motivation strong है', type: 'A' },
      { text: 'कुछ techniques हैं', type: 'B' },
      { text: 'Struggle करता हूं', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Role models और mentors हैं?',
    options: [
      { text: 'हां, learn करता हूं उनसे', type: 'A' },
      { text: 'कुछ हैं', type: 'B' },
      { text: 'Not really', type: 'C' },
      { text: 'No one inspires me', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Purpose और passion feel होता है?',
    options: [
      { text: 'बहुत strong', type: 'A' },
      { text: 'हां', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'दूसरों को support और encourage करते हैं?',
    options: [
      { text: 'हमेशा, love it', type: 'A' },
      { text: 'Often', type: 'B' },
      { text: 'Sometimes', type: 'C' },
      { text: 'Rarely', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Positive mindset कैसा है?',
    options: [
      { text: 'Very positive', type: 'A' },
      { text: 'Mostly positive', type: 'B' },
      { text: 'Mixed', type: 'C' },
      { text: 'Negative', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'जब down हों तो bounce back कैसे करते हैं?',
    options: [
      { text: 'Quickly, resilient हूं', type: 'A' },
      { text: 'थोड़ा time लेकर', type: 'B' },
      { text: 'Struggle', type: 'C' },
      { text: 'Cannot bounce back', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Life में enthusiasm और energy कैसी है?',
    options: [
      { text: 'High, energetic हूं', type: 'A' },
      { text: 'Good', type: 'B' },
      { text: 'Low', type: 'C' },
      { text: 'Very low', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall inspiration level कैसा है - देना और लेना दोनों?',
    options: [
      { text: 'बहुत अच्छा', type: 'A' },
      { text: 'अच्छा', type: 'B' },
      { text: 'Average', type: 'C' },
      { text: 'Poor', type: 'D' },
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
    title: 'प्रेरणा का स्रोत',
    emoji: '🌟',
    description: 'आप naturally inspiring हैं। Positive energy है और दूसरों को motivate करते हैं।',
    traits: ['inspiring', 'positive', 'energetic', 'uplifting'],
    weaknesses: ['may exhaust yourself'],
    advice: 'Beautiful gift! Keep inspiring। Take care of yourself too।',
  },
  B: {
    type: 'B',
    title: 'अच्छी प्रेरणा',
    emoji: '⭐',
    description: 'Good at inspiration और motivation। Positive और encouraging हैं।',
    traits: ['positive', 'motivating', 'supportive'],
    weaknesses: ['can be more inspiring'],
    advice: 'Good energy! Spread it more।',
  },
  C: {
    type: 'C',
    title: 'सामान्य प्रेरणा',
    emoji: '😐',
    description: 'Inspiration level average है। खुद भी unmotivated रहते हैं कभी-कभी।',
    traits: ['neutral', 'sometimes inspired'],
    weaknesses: ['lacking spark', 'unmotivated'],
    advice: 'Find what inspires you। Connect with purpose। Surround yourself with positive people।',
  },
  D: {
    type: 'D',
    title: 'प्रेरणा की कमी',
    emoji: '😔',
    description: 'Inspiration और motivation में severe lack है। यह depression से जुड़ा हो सकता है।',
    traits: ['uninspired', 'unmotivated', 'negative'],
    weaknesses: ['depression possible', 'anhedonia'],
    advice: 'Please seek help। This could be depression। Professional support जरूरी है।',
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
