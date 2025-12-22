export const questions = [
  {
    id: 1,
    text: 'नई चीजें try करने में आप कैसे हैं?',
    options: [
      { text: 'Love it, हमेशा try करता हूं', type: 'A' },
      { text: 'Open हूं', type: 'B' },
      { text: 'Hesitant होता हूं', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Failure के बाद फिर से try करने में आप कैसे हैं?',
    options: [
      { text: 'तुरंत फिर से try', type: 'A' },
      { text: 'थोड़ा time लेकर try', type: 'B' },
      { text: 'बहुत मुश्किल है', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '\"कोशिश करो\" - इस पर आप कितना believe करते हैं?',
    options: [
      { text: 'पूरा, कोशिश से सब होता है', type: 'A' },
      { text: 'काफी हद तक', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'कोशिश से क्या होता है', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Comfort zone से बाहर निकलना आपके लिए कैसा है?',
    options: [
      { text: 'Exciting, करता रहता हूं', type: 'A' },
      { text: 'कर सकता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'जब कुछ मुश्किल लगे तो क्या करते हैं?',
    options: [
      { text: 'और जोश से try करता हूं', type: 'A' },
      { text: 'तरीका बदलकर try', type: 'B' },
      { text: 'Discouraged हो जाता हूं', type: 'C' },
      { text: 'छोड़ देता हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Initiative लेने में आप कैसे हैं?',
    options: [
      { text: 'Always first to try', type: 'A' },
      { text: 'अक्सर लेता हूं', type: 'B' },
      { text: 'Wait करता हूं दूसरों का', type: 'C' },
      { text: 'नहीं लेता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Risk लेने के बारे में आप क्या सोचते हैं?',
    options: [
      { text: 'जरूरी है growth के लिए', type: 'A' },
      { text: 'Calculated risk ठीक है', type: 'B' },
      { text: 'Avoid करता हूं', type: 'C' },
      { text: 'बिल्कुल नहीं लेता', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'जब सब कहें \"impossible है\" तो क्या करते हैं?',
    options: [
      { text: 'Try करता हूं anyway', type: 'A' },
      { text: 'Evaluate करके decide', type: 'B' },
      { text: 'Probably नहीं करता', type: 'C' },
      { text: 'मान लेता हूं impossible है', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Life में कितनी बार \"first time\" try किया है?',
    options: [
      { text: 'बहुत बार, love new experiences', type: 'A' },
      { text: 'काफी बार', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'बहुत कम', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'जब कोई opportunity आए तो क्या करते हैं?',
    options: [
      { text: 'Grab it', type: 'A' },
      { text: 'Evaluate करके लेता हूं', type: 'B' },
      { text: 'Hesitate करता हूं', type: 'C' },
      { text: 'छोड़ देता हूं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Learning new skills के बारे में कैसे हैं?',
    options: [
      { text: 'हमेशा सीखता रहता हूं', type: 'A' },
      { text: 'जरूरत हो तो सीखता हूं', type: 'B' },
      { text: 'मुश्किल लगता है', type: 'C' },
      { text: 'नहीं सीखता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'आप खुद को कितना action-oriented मानते हैं?',
    options: [
      { text: 'बहुत, doer हूं', type: 'A' },
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
    title: 'उत्कृष्ट प्रयास क्षमता',
    emoji: '🚀',
    description: 'आप हमेशा try करते हैं। Action लेते हैं, risks लेते हैं, और new things explore करते हैं।',
    traits: ['action-oriented', 'brave', 'explorer', 'doer'],
    weaknesses: ['कभी-कभी impulsive', 'planning कम'],
    advice: 'Try करते रहें लेकिन थोड़ा planning भी करें।',
  },
  B: {
    type: 'B',
    title: 'अच्छी प्रयास क्षमता',
    emoji: '⭐',
    description: 'आप try करते हैं जब जरूरी हो। Balanced approach है।',
    traits: ['balanced', 'thoughtful', 'action-ready'],
    weaknesses: ['कभी-कभी hesitate करते हैं'],
    advice: 'थोड़ा और try करें। Opportunities grab करें।',
  },
  C: {
    type: 'C',
    title: 'कम प्रयास',
    emoji: '😐',
    description: 'आप try करने से hesitate करते हैं। Comfort zone में रहना पसंद है।',
    traits: ['cautious', 'hesitant', 'passive'],
    weaknesses: ['missed opportunities', 'no growth', 'regrets'],
    advice: 'छोटे से शुरू करें। एक small risk लें। देखें कैसा लगता है।',
  },
  D: {
    type: 'D',
    title: 'प्रयास में कमी',
    emoji: '😔',
    description: 'आप try नहीं करते। Fear या lack of motivation से रुके हुए हैं।',
    traits: ['passive', 'fearful', 'stuck'],
    weaknesses: ['no progress', 'unfulfilled life', 'regrets'],
    advice: 'आज एक छोटा सा कदम उठाएं। Professional help भी helpful हो सकती है।',
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
