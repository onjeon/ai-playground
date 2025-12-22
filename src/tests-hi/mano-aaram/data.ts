export const questions = [
  {
    id: 1,
    text: 'आराम करने में आप कैसे हैं?',
    options: [
      { text: 'बहुत अच्छा, easily relax कर पाता हूं', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'छुट्टी के दिन कैसे बिताते हैं?',
    options: [
      { text: 'Relaxing और recharging', type: 'A' },
      { text: 'कुछ आराम, कुछ काम', type: 'B' },
      { text: 'काम में ही निकल जाता है', type: 'C' },
      { text: 'आराम नहीं मिलता', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Guilt-free rest ले पाते हैं?',
    options: [
      { text: 'हां, deserve करता हूं', type: 'A' },
      { text: 'ज्यादातर', type: 'B' },
      { text: 'Guilty feel होता है', type: 'C' },
      { text: 'बहुत guilty', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Vacation लेते हैं?',
    options: [
      { text: 'Regular, important है', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'नहीं लेता', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'काम के बाद switch off कर पाते हैं?',
    options: [
      { text: 'हां, completely', type: 'A' },
      { text: 'ज्यादातर', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Relaxation activities क्या करते हैं?',
    options: [
      { text: 'Healthy - reading, nature, meditation', type: 'A' },
      { text: 'Mixed activities', type: 'B' },
      { text: 'ज्यादातर screen', type: 'C' },
      { text: 'कुछ नहीं / जानता नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Rest को priority देते हैं?',
    options: [
      { text: 'हां, बहुत important', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'नहीं, काम पहले', type: 'C' },
      { text: 'Rest waste of time लगता है', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Boredom से कैसे deal करते हैं?',
    options: [
      { text: 'Enjoy करता हूं, creative time', type: 'A' },
      { text: 'ठीक लगता है', type: 'B' },
      { text: 'Uncomfortable', type: 'C' },
      { text: 'बर्दाश्त नहीं होता', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Social media/phone से break ले पाते हैं?',
    options: [
      { text: 'हां, regularly digital detox', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं ले पाता', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Sleep और rest के लिए time है?',
    options: [
      { text: 'पर्याप्त', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'बहुत कम', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '\"Nothing to do\" वाला time कैसा लगता है?',
    options: [
      { text: 'Peaceful और necessary', type: 'A' },
      { text: 'ठीक लगता है', type: 'B' },
      { text: 'Anxious', type: 'C' },
      { text: 'बहुत uncomfortable', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall rest और recovery कैसी है?',
    options: [
      { text: 'बहुत अच्छी', type: 'A' },
      { text: 'अच्छी', type: 'B' },
      { text: 'Poor', type: 'C' },
      { text: 'बहुत खराब', type: 'D' },
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
    title: 'उत्कृष्ट आराम क्षमता',
    emoji: '🌴',
    description: 'आराम करने में excellent हैं। Rest को priority देते हैं और guilt-free relax कर पाते हैं।',
    traits: ['balanced', 'rested', 'recharged', 'healthy'],
    weaknesses: ['कभी-कभी lazy लग सकते हैं'],
    advice: 'Great balance! इसे maintain करें।',
  },
  B: {
    type: 'B',
    title: 'अच्छी आराम क्षमता',
    emoji: '😊',
    description: 'आराम ठीक-ठाक कर पाते हैं। कुछ improvement scope है।',
    traits: ['managing', 'trying', 'somewhat rested'],
    weaknesses: ['could be better'],
    advice: 'Rest को और priority दें। Guilt छोड़ें।',
  },
  C: {
    type: 'C',
    title: 'कमजोर आराम क्षमता',
    emoji: '😓',
    description: 'आराम करने में struggle है। Burnout risk है।',
    traits: ['overworked', 'guilty about rest', 'tired'],
    weaknesses: ['burnout risk', 'health effects'],
    advice: 'Rest जरूरी है productive रहने के लिए। Start scheduling rest।',
  },
  D: {
    type: 'D',
    title: 'आराम नहीं कर पाते',
    emoji: '🔥',
    description: 'आराम बिल्कुल नहीं कर पाते। यह serious है और burnout या health issues cause कर सकता है।',
    traits: ['burnt out', 'workaholic', 'exhausted'],
    weaknesses: ['serious health risk', 'relationships affected'],
    advice: 'This is serious। Professional help लें। Rest करना सीखना जरूरी है।',
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
