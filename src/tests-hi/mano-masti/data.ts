export const questions = [
  {
    id: 1,
    text: 'Life में fun और मस्ती कितनी है?',
    options: [
      { text: 'बहुत, enjoy करता हूं life', type: 'A' },
      { text: 'अच्छी खासी', type: 'B' },
      { text: 'कम है', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'कितनी बार हंसते हैं?',
    options: [
      { text: 'बहुत बार, रोज', type: 'A' },
      { text: 'काफी बार', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'बहुत कम', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Fun activities कितनी करते हैं?',
    options: [
      { text: 'Regular, priority है', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'Time नहीं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Spontaneous और playful हैं?',
    options: [
      { text: 'बहुत, love it', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'ज्यादा नहीं', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Humor sense कैसा है?',
    options: [
      { text: 'Great, लोगों को हंसाता हूं', type: 'A' },
      { text: 'अच्छा है', type: 'B' },
      { text: 'Average', type: 'C' },
      { text: 'कम है', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Celebrations और parties कैसे enjoy करते हैं?',
    options: [
      { text: 'Love करता हूं', type: 'A' },
      { text: 'Enjoy करता हूं', type: 'B' },
      { text: 'ठीक-ठाक', type: 'C' },
      { text: 'Avoid करता हूं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Inner child कितना alive है?',
    options: [
      { text: 'बहुत, playful हूं', type: 'A' },
      { text: 'कुछ है', type: 'B' },
      { text: 'Lost हो गया', type: 'C' },
      { text: 'था ही नहीं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Light-hearted रहने में कैसे हैं?',
    options: [
      { text: 'Easy, natural है', type: 'A' },
      { text: 'ज्यादातर', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'बहुत serious रहता हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Life को कितना seriously लेते हैं?',
    options: [
      { text: 'Balance - serious जब जरूरी', type: 'A' },
      { text: 'थोड़ा ज्यादा serious', type: 'B' },
      { text: 'बहुत serious', type: 'C' },
      { text: 'हर चीज serious', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Fun memories बनाते हैं?',
    options: [
      { text: 'हां, actively', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'जब pressure हो तब भी lighter moments find कर पाते हैं?',
    options: [
      { text: 'हां, helps cope', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall life में joy और मस्ती कैसी है?',
    options: [
      { text: 'बहुत अच्छी', type: 'A' },
      { text: 'अच्छी', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'नहीं है', type: 'D' },
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
    title: 'जीवन में भरपूर मस्ती',
    emoji: '🎉',
    description: 'Life में बहुत fun और joy है। आप हंसते हैं, मस्ती करते हैं, और life enjoy करते हैं।',
    traits: ['joyful', 'playful', 'fun-loving', 'light-hearted'],
    weaknesses: ['कभी-कभी frivolous लग सकते हैं'],
    advice: 'Keep spreading joy! Balance maintain करें।',
  },
  B: {
    type: 'B',
    title: 'अच्छी मस्ती',
    emoji: '😄',
    description: 'Life में अच्छी खासी fun और joy है। कुछ और हो सकती है।',
    traits: ['happy', 'enjoying', 'balanced'],
    weaknesses: ['could be more playful'],
    advice: 'More fun activities add करें। Laugh more।',
  },
  C: {
    type: 'C',
    title: 'कम मस्ती',
    emoji: '😐',
    description: 'Life में fun और joy कम है। Too serious या busy हो गए हैं।',
    traits: ['serious', 'stressed', 'no fun'],
    weaknesses: ['missing joy', 'burnout risk'],
    advice: 'Fun जरूरी है health के लिए। Schedule fun time। Don\'t take life too seriously।',
  },
  D: {
    type: 'D',
    title: 'मस्ती नहीं है',
    emoji: '😔',
    description: 'Life में joy और fun नहीं है। यह depression या burnout sign हो सकता है।',
    traits: ['joyless', 'anhedonia possible', 'depressed'],
    weaknesses: ['depression risk', 'no quality of life'],
    advice: 'This is serious। Professional help लें। Anhedonia depression का sign है।',
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
