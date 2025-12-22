// मानसून व्यक्तित्व (Monsoon Personality)
export const questions = [
  {
    id: 1,
    text: 'बारिश होने पर first reaction?',
    options: [
      { text: 'खुशी! बाहर भीगने का मन', type: 'A' },
      { text: 'चाय पीने का मन', type: 'B' },
      { text: 'अच्छा लगता है घर से देखना', type: 'C' },
      { text: 'ऊह! कीचड़ और traffic', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'monsoon में पसंदीदा activity?',
    options: [
      { text: 'बारिश में भीगना', type: 'A' },
      { text: 'पकोड़े और चाय', type: 'B' },
      { text: 'window से देखना, music', type: 'C' },
      { text: 'घर में रहना, बाहर नहीं निकलना', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'बारिश में travel?',
    options: [
      { text: 'मज़ा आता है', type: 'A' },
      { text: 'romantic feel', type: 'B' },
      { text: 'avoid करता/करती हूं', type: 'C' },
      { text: 'बहुत problem', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'पहली बारिश में?',
    options: [
      { text: 'बाहर निकलता/निकलती हूं', type: 'A' },
      { text: 'smell enjoy करता/करती हूं', type: 'B' },
      { text: 'window खोलता/खोलती हूं', type: 'C' },
      { text: 'AC में रहता/रहती हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'monsoon fashion?',
    options: [
      { text: 'colorful, फिर भीग जाओ', type: 'A' },
      { text: 'raincoat और umbrella', type: 'B' },
      { text: 'practical clothes', type: 'C' },
      { text: 'जूते और कपड़े खराब हो जाते हैं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'बारिश वाली शाम?',
    options: [
      { text: 'perfect romantic', type: 'A' },
      { text: 'cozy और relaxing', type: 'B' },
      { text: 'boring, बाहर नहीं जा सकते', type: 'C' },
      { text: 'current जाने का डर', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'waterlogging में?',
    options: [
      { text: 'adventure! पानी में चलना', type: 'A' },
      { text: 'carefully निकलता/निकलती हूं', type: 'B' },
      { text: 'घर में रहना better', type: 'C' },
      { text: 'बहुत irritating', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'monsoon weekend plan?',
    options: [
      { text: 'hill station या waterfall', type: 'A' },
      { text: 'घर पर, movies और food', type: 'B' },
      { text: 'indoor activities', type: 'C' },
      { text: 'कोई plan नहीं, मौसम देखकर', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'office जाना बारिश में?',
    options: [
      { text: 'मज़ा आता है', type: 'A' },
      { text: 'manage हो जाता है', type: 'B' },
      { text: 'WFH लेता/लेती हूं', type: 'C' },
      { text: 'बहुत problem', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'monsoon का मतलब?',
    options: [
      { text: 'romance और खुशी', type: 'A' },
      { text: 'comfort और relaxation', type: 'B' },
      { text: 'practical challenges', type: 'C' },
      { text: 'problems और inconvenience', type: 'D' },
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
    title: 'बारिश का दीवाना/दीवानी',
    emoji: '🌧️',
    description: 'आप monsoon lover हैं! बारिश में भीगना, petrichor smell, romantic vibes - मानसून आपके लिए बना है!',
    traits: ['romantic', 'adventurous', 'nature-lover', 'free-spirited', 'joyful'],
    weaknesses: ['practical problems ignore', 'बीमार हो सकते हैं'],
    advice: 'enjoy करें! लेकिन health का ध्यान रखें।',
  },
  B: {
    type: 'B',
    title: 'Cozy Monsoon Lover',
    emoji: '☕',
    description: 'आप monsoon को घर से enjoy करते हैं। चाय-पकोड़े, window से बारिश देखना - perfect monsoon vibes!',
    traits: ['cozy', 'homely', 'relaxed', 'comfort-seeking', 'peaceful'],
    weaknesses: ['बाहर का मज़ा miss', 'lazy हो सकते हैं'],
    advice: 'cozy अच्छा है, कभी-कभी बाहर भी निकलें!',
  },
  C: {
    type: 'C',
    title: 'Practical Person',
    emoji: '☔',
    description: 'आप monsoon को practically देखते हैं। अच्छा तो है लेकिन problems भी हैं। Balanced view!',
    traits: ['practical', 'cautious', 'prepared', 'balanced', 'sensible'],
    weaknesses: ['romance miss कर देते हैं', 'too practical'],
    advice: 'practical अच्छा है, लेकिन कभी enjoy भी करें!',
  },
  D: {
    type: 'D',
    title: 'Monsoon Hater',
    emoji: '😑',
    description: 'Monsoon आपकी problem है। Traffic, कीचड़, humidity - सब irritating। Summer lover हो शायद!',
    traits: ['practical', 'comfort-seeking', 'organized', 'clean-freak'],
    weaknesses: ['natural beauty miss', 'negativity', 'complaining'],
    advice: 'try करें positive देखने की। Monsoon में भी खूबसूरती है!',
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
