export const questions = [
  {
    id: 1,
    text: 'नए लोगों से मिलने में आप कैसे होते हैं?',
    options: [
      { text: 'बहुत सहज, easily connect कर लेता हूं', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'थोड़ा awkward', type: 'C' },
      { text: 'बहुत uncomfortable', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Social gatherings में आप कैसा feel करते हैं?',
    options: [
      { text: 'Comfortable, enjoy करता हूं', type: 'A' },
      { text: 'ठीक लगता है', type: 'B' },
      { text: 'Uncomfortable', type: 'C' },
      { text: 'बहुत anxious', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'अपनी feelings express करने में आप कैसे हैं?',
    options: [
      { text: 'आसानी से कर पाता हूं', type: 'A' },
      { text: 'ज्यादातर कर पाता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Small talk करना आपके लिए कैसा है?',
    options: [
      { text: 'आसान और enjoyable', type: 'A' },
      { text: 'कर लेता हूं', type: 'B' },
      { text: 'Awkward लगता है', type: 'C' },
      { text: 'बहुत difficult', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'जब attention आप पर हो तो कैसा feel करते हैं?',
    options: [
      { text: 'अच्छा, comfortable', type: 'A' },
      { text: 'ठीक है', type: 'B' },
      { text: 'Awkward', type: 'C' },
      { text: 'बहुत uncomfortable, बचना चाहता हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'अपने बारे में बात करना आपके लिए कैसा है?',
    options: [
      { text: 'आसान है', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'Uncomfortable', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Eye contact maintain करने में आप कैसे हैं?',
    options: [
      { text: 'Natural, आसान', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'Difficult', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'अपनी body में कितने comfortable हैं?',
    options: [
      { text: 'बहुत, love my body', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'Uncomfortable', type: 'C' },
      { text: 'बहुत conscious', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Silence में रहना आपके लिए कैसा है?',
    options: [
      { text: 'Comfortable, peaceful', type: 'A' },
      { text: 'ठीक है', type: 'B' },
      { text: 'Awkward लगता है', type: 'C' },
      { text: 'बर्दाश्त नहीं होता', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'जब गलती हो जाए public में तो कैसे handle करते हैं?',
    options: [
      { text: 'हंस देता हूं, move on', type: 'A' },
      { text: 'थोड़ा embarrassed, फिर ठीक', type: 'B' },
      { text: 'बहुत embarrassed', type: 'C' },
      { text: 'दिनों तक सोचता रहता हूं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'जब कोई compliment दे तो कैसे react करते हैं?',
    options: [
      { text: 'Thank you, accept करता हूं', type: 'A' },
      { text: 'अच्छा लगता है', type: 'B' },
      { text: 'Awkward feel होता है', type: 'C' },
      { text: 'Deny कर देता हूं', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall कितने self-conscious हैं?',
    options: [
      { text: 'बहुत कम, natural हूं', type: 'A' },
      { text: 'थोड़ा बहुत', type: 'B' },
      { text: 'काफी', type: 'C' },
      { text: 'बहुत ज्यादा', type: 'D' },
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
    title: 'बहुत सहज व्यक्तित्व',
    emoji: '🌊',
    description: 'आप बहुत सहज और natural हैं। लोगों के साथ comfortable हैं और खुद को accept करते हैं।',
    traits: ['natural', 'comfortable', 'confident', 'relaxed'],
    weaknesses: ['कभी-कभी over-confident लग सकते हैं'],
    advice: 'अपनी सहजता बनाए रखें। यह rare quality है।',
  },
  B: {
    type: 'B',
    title: 'सामान्य सहजता',
    emoji: '😊',
    description: 'आप काफी सहज हैं। कुछ situations में थोड़ा conscious हो जाते हैं।',
    traits: ['mostly comfortable', 'adaptable', 'normal'],
    weaknesses: ['some situations में awkward'],
    advice: 'Practice और confidence से और सहज होंगे।',
  },
  C: {
    type: 'C',
    title: 'कम सहजता',
    emoji: '😰',
    description: 'आप अक्सर uncomfortable और self-conscious रहते हैं। Social anxiety हो सकती है।',
    traits: ['self-conscious', 'anxious', 'awkward'],
    weaknesses: ['social anxiety', 'missing connections', 'stress'],
    advice: 'छोटे steps से शुरू करें। Therapy helpful हो सकती है। Practice करें।',
  },
  D: {
    type: 'D',
    title: 'बहुत कम सहजता',
    emoji: '😣',
    description: 'आप बहुत uncomfortable और self-conscious हैं। यह social anxiety disorder हो सकता है।',
    traits: ['very self-conscious', 'severe anxiety', 'avoidant'],
    weaknesses: ['social phobia possible', 'isolation', 'suffering'],
    advice: 'Professional help जरूरी है। CBT therapy बहुत effective है। आप better हो सकते हैं।',
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
