export const questions = [
  {
    id: 1,
    text: 'आपकी life में कितनी big dreams हैं?',
    options: [
      { text: 'बहुत सारे, बड़े-बड़े सपने हैं', type: 'A' },
      { text: 'कुछ अच्छे goals हैं', type: 'B' },
      { text: 'थोड़े बहुत', type: 'C' },
      { text: 'कोई नहीं / पता नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Success achieve करने की desire कितनी strong है?',
    options: [
      { text: 'बहुत strong, जान लगा दूंगा', type: 'A' },
      { text: 'काफी strong', type: 'B' },
      { text: 'थोड़ी', type: 'C' },
      { text: 'कोई desire नहीं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Career में कहां पहुंचना चाहते हैं?',
    options: [
      { text: 'Top पर, best बनना है', type: 'A' },
      { text: 'अच्छी position पर', type: 'B' },
      { text: 'जो है ठीक है', type: 'C' },
      { text: 'कोई ambition नहीं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'अपने goals के लिए कितना sacrifice कर सकते हैं?',
    options: [
      { text: 'बहुत कुछ, dedication है', type: 'A' },
      { text: 'काफी कुछ', type: 'B' },
      { text: 'थोड़ा बहुत', type: 'C' },
      { text: 'sacrifice नहीं करना', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '5 साल बाद खुद को कहां देखते हैं?',
    options: [
      { text: 'बहुत आगे, clear vision है', type: 'A' },
      { text: 'अच्छी position पर', type: 'B' },
      { text: 'पता नहीं', type: 'C' },
      { text: 'नहीं सोचता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Competition से आप कैसे deal करते हैं?',
    options: [
      { text: 'Love it, motivates me', type: 'A' },
      { text: 'Handle कर लेता हूं', type: 'B' },
      { text: 'Stressful लगता है', type: 'C' },
      { text: 'Avoid करता हूं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Risk लेने के बारे में आप क्या सोचते हैं?',
    options: [
      { text: 'जरूरी है success के लिए', type: 'A' },
      { text: 'Calculated risk लेता हूं', type: 'B' },
      { text: 'बचता हूं', type: 'C' },
      { text: 'बिल्कुल नहीं लेता', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Failure के बाद क्या करते हैं?',
    options: [
      { text: 'और जोश से try करता हूं', type: 'A' },
      { text: 'सीखता हूं और फिर try', type: 'B' },
      { text: 'Discouraged हो जाता हूं', type: 'C' },
      { text: 'छोड़ देता हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Extra effort देने में आप कैसे हैं?',
    options: [
      { text: 'हमेशा, extra mile जाता हूं', type: 'A' },
      { text: 'जरूरत हो तो देता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं देता', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'अपनी potential को लेकर क्या सोचते हैं?',
    options: [
      { text: 'Unlimited है, बहुत कुछ कर सकता हूं', type: 'A' },
      { text: 'अच्छी है', type: 'B' },
      { text: 'Limited है', type: 'C' },
      { text: 'कोई potential नहीं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Recognition और achievement कितनी important है?',
    options: [
      { text: 'बहुत, यही drive करता है', type: 'A' },
      { text: 'Important है', type: 'B' },
      { text: 'थोड़ी बहुत', type: 'C' },
      { text: 'कोई फर्क नहीं पड़ता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'आप खुद को कितना ambitious मानते हैं?',
    options: [
      { text: 'बहुत ambitious', type: 'A' },
      { text: 'काफी', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
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
    title: 'उच्च अभिलाषा',
    emoji: '🚀',
    description: 'आप बहुत ambitious हैं। बड़े सपने हैं और उन्हें achieve करने का जोश है।',
    traits: ['driven', 'ambitious', 'competitive', 'hardworking'],
    weaknesses: ['burnout risk', 'relationships neglect possible'],
    advice: 'Ambition अच्छी है लेकिन balance भी रखें। Burnout से बचें।',
  },
  B: {
    type: 'B',
    title: 'अच्छी अभिलाषा',
    emoji: '⭐',
    description: 'आपकी ambition healthy level पर है। Goals हैं और उन पर काम कर रहे हैं।',
    traits: ['goal-oriented', 'motivated', 'balanced'],
    weaknesses: ['कभी-कभी comfort zone में रह जाते हैं'],
    advice: 'थोड़ा और push करें। Bigger dreams रखें।',
  },
  C: {
    type: 'C',
    title: 'कम अभिलाषा',
    emoji: '😐',
    description: 'आपकी ambition कम है। बड़े goals नहीं हैं या motivation नहीं है।',
    traits: ['content', 'passive', 'unmotivated'],
    weaknesses: ['potential waste', 'regret later', 'no growth'],
    advice: 'Passion discover करें। छोटे goals से शुरू करें। Life में और चाहें।',
  },
  D: {
    type: 'D',
    title: 'अभिलाषा की कमी',
    emoji: '😔',
    description: 'आप में ambition नहीं है। यह depression या hopelessness के signs हो सकते हैं।',
    traits: ['unmotivated', 'hopeless', 'directionless'],
    weaknesses: ['wasted potential', 'unfulfilling life'],
    advice: 'Professional help लें अगर depression है। Passion find करें। Life में purpose जरूरी है।',
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
