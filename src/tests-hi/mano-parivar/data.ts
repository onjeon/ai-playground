export const questions = [
  {
    id: 1,
    text: 'परिवार के साथ रिश्ता कैसा है?',
    options: [
      { text: 'बहुत close और loving', type: 'A' },
      { text: 'अच्छा है', type: 'B' },
      { text: 'थोड़ा distant', type: 'C' },
      { text: 'बहुत खराब', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'परिवार से कितना communicate करते हैं?',
    options: [
      { text: 'रोज, बहुत बातें होती हैं', type: 'A' },
      { text: 'Regular', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'बहुत कम', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'परिवार के साथ time कितना बिताते हैं?',
    options: [
      { text: 'बहुत, priority है', type: 'A' },
      { text: 'जितना हो सके', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'बहुत कम', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'परिवार में conflicts कैसे handle करते हैं?',
    options: [
      { text: 'बात करके, समझकर', type: 'A' },
      { text: 'Try करता हूं resolve करने की', type: 'B' },
      { text: 'Avoid करता हूं', type: 'C' },
      { text: 'Fight होती है', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'परिवार को कितना support देते हैं?',
    options: [
      { text: 'हमेशा, उनके लिए हूं', type: 'A' },
      { text: 'जब जरूरत हो', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'नहीं देता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'परिवार से support कितना मिलता है?',
    options: [
      { text: 'बहुत, always there', type: 'A' },
      { text: 'अच्छा support मिलता है', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'नहीं मिलता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'परिवार में openness कैसी है?',
    options: [
      { text: 'सब बात कर सकता हूं', type: 'A' },
      { text: 'ज्यादातर बातें share करता हूं', type: 'B' },
      { text: 'कुछ ही बातें', type: 'C' },
      { text: 'कुछ नहीं बताता', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'परिवार के decisions में involvement कैसी है?',
    options: [
      { text: 'सब मिलकर decide करते हैं', type: 'A' },
      { text: 'ज्यादातर involve होता हूं', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'नहीं होता', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Family traditions और gatherings कैसी हैं?',
    options: [
      { text: 'Love करता हूं, active part', type: 'A' },
      { text: 'Enjoy करता हूं', type: 'B' },
      { text: 'Obligation जैसा', type: 'C' },
      { text: 'Avoid करता हूं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Parents के साथ relationship कैसा है?',
    options: [
      { text: 'बहुत close और loving', type: 'A' },
      { text: 'अच्छा', type: 'B' },
      { text: 'Complicated', type: 'C' },
      { text: 'खराब', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Siblings के साथ bond कैसा है?',
    options: [
      { text: 'Best friends जैसा', type: 'A' },
      { text: 'अच्छा', type: 'B' },
      { text: 'ठीक-ठाक', type: 'C' },
      { text: 'खराब / कोई नहीं', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Family से overall satisfaction कैसी है?',
    options: [
      { text: 'बहुत satisfied, blessed', type: 'A' },
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
    title: 'मजबूत पारिवारिक बंधन',
    emoji: '👨‍👩‍👧‍👦',
    description: 'आपका परिवार के साथ बहुत strong bond है। Love, support, और connection है।',
    traits: ['family-oriented', 'loving', 'connected', 'supportive'],
    weaknesses: ['कभी-कभी over-dependent'],
    advice: 'Beautiful! इस bond को nurture करते रहें।',
  },
  B: {
    type: 'B',
    title: 'अच्छा पारिवारिक रिश्ता',
    emoji: '❤️',
    description: 'परिवार के साथ अच्छा relationship है। Support और love मिलता है।',
    traits: ['connected', 'caring', 'balanced'],
    weaknesses: ['थोड़ा और close हो सकते हैं'],
    advice: 'More quality time spend करें। Bonds और strong होंगे।',
  },
  C: {
    type: 'C',
    title: 'दूरी वाले पारिवारिक रिश्ते',
    emoji: '😔',
    description: 'परिवार से थोड़ी distance है। Connection कम है।',
    traits: ['distant', 'independent', 'less connected'],
    weaknesses: ['missing support', 'loneliness possible'],
    advice: 'Reconnect करने की कोशिश करें। Small steps से शुरू करें।',
  },
  D: {
    type: 'D',
    title: 'खराब पारिवारिक रिश्ते',
    emoji: '💔',
    description: 'परिवार के साथ relationship खराब है। यह painful है।',
    traits: ['disconnected', 'hurt', 'struggling'],
    weaknesses: ['no family support', 'trauma possible', 'loneliness'],
    advice: 'Family therapy helpful हो सकती है। अगर toxic है तो boundaries जरूरी। Professional help लें।',
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
