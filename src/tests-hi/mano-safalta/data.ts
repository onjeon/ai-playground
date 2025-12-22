export const questions = [
  {
    id: 1,
    text: 'Success का आपके लिए क्या मतलब है?',
    options: [
      { text: 'खुश और fulfilled रहना', type: 'A' },
      { text: 'Goals achieve करना', type: 'B' },
      { text: 'पैसा और status', type: 'C' },
      { text: 'पता नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'अपनी success से आप कितने संतुष्ट हैं?',
    options: [
      { text: 'बहुत संतुष्ट', type: 'A' },
      { text: 'काफी संतुष्ट', type: 'B' },
      { text: 'और चाहिए', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Success के लिए आप कितना sacrifice करते हैं?',
    options: [
      { text: 'बहुत, dedicated हूं', type: 'A' },
      { text: 'जरूरी है तो करता हूं', type: 'B' },
      { text: 'थोड़ा बहुत', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'जब success मिले तो कैसा feel करते हैं?',
    options: [
      { text: 'Grateful और humble', type: 'A' },
      { text: 'खुश और proud', type: 'B' },
      { text: 'और चाहिए feeling', type: 'C' },
      { text: 'कुछ खास नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Success के बाद relaxation कैसे है?',
    options: [
      { text: 'Celebrate करता हूं, enjoy करता हूं', type: 'A' },
      { text: 'थोड़ा relax फिर next goal', type: 'B' },
      { text: 'तुरंत next goal', type: 'C' },
      { text: 'Relax नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'दूसरों की success को कैसे देखते हैं?',
    options: [
      { text: 'Inspiring, खुश होता हूं उनके लिए', type: 'A' },
      { text: 'अच्छा है', type: 'B' },
      { text: 'Compare कर लेता हूं', type: 'C' },
      { text: 'जलन होती है', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Success की journey कैसी है आपकी?',
    options: [
      { text: 'Enjoy कर रहा हूं', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'Stressful', type: 'C' },
      { text: 'Very difficult', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Success के लिए health compromise करते हैं?',
    options: [
      { text: 'नहीं, health priority', type: 'A' },
      { text: 'कभी-कभी थोड़ा', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'बहुत ज्यादा', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Success के लिए relationships compromise करते हैं?',
    options: [
      { text: 'नहीं, relationships important', type: 'A' },
      { text: 'Balance रखता हूं', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'Success सबसे पहले', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'क्या आप successful feel करते हैं?',
    options: [
      { text: 'हां, बहुत', type: 'A' },
      { text: 'काफी हद तक', type: 'B' },
      { text: 'थोड़ा बहुत', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Success की definition clear है?',
    options: [
      { text: 'बहुत clear', type: 'A' },
      { text: 'काफी clear', type: 'B' },
      { text: 'थोड़ा confused', type: 'C' },
      { text: 'पता नहीं', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'अगर आज सब मिल जाए तो खुश होंगे?',
    options: [
      { text: 'पहले से खुश हूं, और भी अच्छा होगा', type: 'A' },
      { text: 'खुश हो जाऊंगा', type: 'B' },
      { text: 'शायद, फिर और चाहूंगा', type: 'C' },
      { text: 'पता नहीं, शायद नहीं', type: 'D' },
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
    title: 'स्वस्थ सफलता दृष्टिकोण',
    emoji: '🌟',
    description: 'आपका success के प्रति approach बहुत healthy है। आप success को enjoy करते हैं बिना obsessed हुए।',
    traits: ['balanced', 'grateful', 'happy', 'content'],
    weaknesses: ['कभी-कभी complacent लग सकते हैं'],
    advice: 'अपना approach बनाए रखें। यह सबसे healthy है।',
  },
  B: {
    type: 'B',
    title: 'अच्छा सफलता दृष्टिकोण',
    emoji: '⭐',
    description: 'आपका success approach अच्छा है। Goals pursue करते हैं और achieve करने पर खुश होते हैं।',
    traits: ['goal-oriented', 'balanced', 'motivated'],
    weaknesses: ['कभी-कभी pressure feel होता है'],
    advice: 'Balance बनाए रखें। Success और happiness दोनों important हैं।',
  },
  C: {
    type: 'C',
    title: 'Obsessive सफलता दृष्टिकोण',
    emoji: '😰',
    description: 'आप success के लिए obsessed हैं। कभी enough नहीं है और health/relationships suffer हो रहे हैं।',
    traits: ['ambitious', 'driven', 'never satisfied'],
    weaknesses: ['burnout risk', 'unhappy despite success', 'relationships suffer'],
    advice: 'रुकें और सोचें। क्या चाह रहे हैं? True success balance में है।',
  },
  D: {
    type: 'D',
    title: 'Confused सफलता दृष्टिकोण',
    emoji: '😕',
    description: 'आप success के बारे में confused हैं। Clear direction नहीं है।',
    traits: ['lost', 'confused', 'unmotivated'],
    weaknesses: ['no direction', 'unfulfilled', 'lacking purpose'],
    advice: 'Success की अपनी definition बनाएं। क्या चाहते हैं life से? Clarity लाएं।',
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
