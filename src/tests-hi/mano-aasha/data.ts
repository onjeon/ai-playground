export const questions = [
  {
    id: 1,
    text: 'भविष्य के बारे में आप क्या सोचते हैं?',
    options: [
      { text: 'बहुत अच्छा होगा, excited हूं', type: 'A' },
      { text: 'अच्छा होगा', type: 'B' },
      { text: 'पता नहीं', type: 'C' },
      { text: 'कुछ अच्छा नहीं होगा', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'मुश्किल समय में आप कैसे सोचते हैं?',
    options: [
      { text: 'यह भी गुजर जाएगा', type: 'A' },
      { text: 'कठिन है लेकिन निकलूंगा', type: 'B' },
      { text: 'पता नहीं कब खत्म होगा', type: 'C' },
      { text: 'कभी नहीं सुधरेगा', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Goals achieve करने के बारे में आप कितने hopeful हैं?',
    options: [
      { text: 'जरूर करूंगा', type: 'A' },
      { text: 'काफी उम्मीद है', type: 'B' },
      { text: 'शायद', type: 'C' },
      { text: 'नहीं हो पाएंगे', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'जब कुछ गलत हो जाए तो आप क्या सोचते हैं?',
    options: [
      { text: 'अगली बार better होगा', type: 'A' },
      { text: 'सीखा इससे', type: 'B' },
      { text: 'फिर से fail होऊंगा', type: 'C' },
      { text: 'हमेशा ऐसा ही होता है मेरे साथ', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Life में अच्छी चीजें होने की उम्मीद कितनी है?',
    options: [
      { text: 'बहुत, life अच्छी है', type: 'A' },
      { text: 'काफी उम्मीद है', type: 'B' },
      { text: 'थोड़ी', type: 'C' },
      { text: 'कोई उम्मीद नहीं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '\"सब ठीक हो जाएगा\" - इस पर आप कितना believe करते हैं?',
    options: [
      { text: 'पूरा believe', type: 'A' },
      { text: 'काफी हद तक', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Problems का solution मिलने की उम्मीद कितनी है?',
    options: [
      { text: 'जरूर मिलेगा', type: 'A' },
      { text: 'मिल जाएगा', type: 'B' },
      { text: 'शायद', type: 'C' },
      { text: 'नहीं मिलेगा', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Dreams के बारे में आप क्या सोचते हैं?',
    options: [
      { text: 'Achieve होंगे', type: 'A' },
      { text: 'कोशिश करूंगा', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'सिर्फ सपने हैं, कभी नहीं होंगे', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'जब dark times आएं तो क्या सोचते हैं?',
    options: [
      { text: 'Light आएगी', type: 'A' },
      { text: 'गुजर जाएगा', type: 'B' },
      { text: 'कब खत्म होगा', type: 'C' },
      { text: 'यही life है', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'खुशी मिलने की उम्मीद कितनी है?',
    options: [
      { text: 'खुश हूं और रहूंगा', type: 'A' },
      { text: 'मिलेगी', type: 'B' },
      { text: 'पता नहीं', type: 'C' },
      { text: 'खुशी मेरे लिए नहीं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'World better बनने की उम्मीद है?',
    options: [
      { text: 'हां, हो रहा है', type: 'A' },
      { text: 'Possible है', type: 'B' },
      { text: 'Doubtful', type: 'C' },
      { text: 'कभी नहीं होगा', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'आप खुद को कितना hopeful मानते हैं?',
    options: [
      { text: 'बहुत hopeful', type: 'A' },
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
    title: 'उच्च आशावान',
    emoji: '🌅',
    description: 'आप बहुत hopeful हैं। भविष्य bright दिखता है और आप believe करते हैं कि अच्छा होगा।',
    traits: ['optimistic', 'hopeful', 'positive', 'resilient'],
    weaknesses: ['कभी-कभी reality ignore हो सकती है'],
    advice: 'अपनी hope बनाए रखें। यह आपकी strength है।',
  },
  B: {
    type: 'B',
    title: 'अच्छी आशा',
    emoji: '🌤️',
    description: 'आपके पास अच्छी hope है। Realistic और positive हैं।',
    traits: ['realistic optimist', 'balanced', 'hopeful'],
    weaknesses: ['कभी-कभी doubt आता है'],
    advice: 'Hope को nurture करते रहें। Good things देखें around।',
  },
  C: {
    type: 'C',
    title: 'कम आशा',
    emoji: '🌥️',
    description: 'आपकी hope कम है। Future uncertain लगता है।',
    traits: ['uncertain', 'doubtful', 'cautious'],
    weaknesses: ['pessimism', 'missing opportunities', 'low motivation'],
    advice: 'छोटी-छोटी positive चीजों पर focus करें। Gratitude practice करें। Hope वापस आएगी।',
  },
  D: {
    type: 'D',
    title: 'निराशा',
    emoji: '🌑',
    description: 'आप में hope नहीं है। यह depression के signs हो सकते हैं।',
    traits: ['hopeless', 'pessimistic', 'depressed'],
    weaknesses: ['severe depression risk', 'no motivation', 'isolation'],
    advice: 'कृपया immediately professional help लें। Hopelessness treatable है। आप better feel कर सकते हैं।',
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
