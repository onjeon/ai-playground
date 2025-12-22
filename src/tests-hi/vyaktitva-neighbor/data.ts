// पड़ोसियों से रिश्ता (Relationship with Neighbors)
export const questions = [
  {
    id: 1,
    text: 'पड़ोसियों को कितना जानते हैं?',
    options: [
      { text: 'सबको अच्छे से जानता/जानती हूं', type: 'A' },
      { text: 'कुछ को जानता/जानती हूं', type: 'B' },
      { text: 'बस hi-hello', type: 'C' },
      { text: 'किसी को नहीं जानता/जानती', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'पड़ोसी मदद मांगे तो?',
    options: [
      { text: 'तुरंत मदद करता/करती हूं', type: 'A' },
      { text: 'situation देखकर', type: 'B' },
      { text: 'थोड़ा hesitant', type: 'C' },
      { text: 'avoid करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'पड़ोसी के function में?',
    options: [
      { text: 'जरूर जाता/जाती हूं', type: 'A' },
      { text: 'close हों तो जाता/जाती हूं', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'नहीं जाता/जाती', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'पड़ोसी से झगड़ा हो जाए तो?',
    options: [
      { text: 'बात करके solve', type: 'A' },
      { text: 'time दूंगा/दूंगी, फिर बात', type: 'B' },
      { text: 'दूरी बना लूंगा/लूंगी', type: 'C' },
      { text: 'fight back', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'पड़ोसी की gossip के बारे में?',
    options: [
      { text: 'नहीं करता/करती', type: 'A' },
      { text: 'कभी-कभी सुन लेता/लेती हूं', type: 'B' },
      { text: 'सुनता/सुनती हूं, बोलता/बोलती नहीं', type: 'C' },
      { text: 'interest नहीं है', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'चीनी/नमक मांगने जाते हैं?',
    options: [
      { text: 'हां, normal है', type: 'A' },
      { text: 'emergency में', type: 'B' },
      { text: 'awkward लगता है', type: 'C' },
      { text: 'कभी नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'पड़ोसी loud music बजाए तो?',
    options: [
      { text: 'politely request करूंगा/करूंगी', type: 'A' },
      { text: 'थोड़ा wait फिर बोलूंगा/बोलूंगी', type: 'B' },
      { text: 'सहन करूंगा/करूंगी', type: 'C' },
      { text: 'complain करूंगा/करूंगी', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'society meetings में?',
    options: [
      { text: 'active participant', type: 'A' },
      { text: 'जाता/जाती हूं', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'नहीं जाता/जाती', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'पड़ोसी के बच्चों के साथ?',
    options: [
      { text: 'अच्छे से बात करता/करती हूं', type: 'A' },
      { text: 'friendly', type: 'B' },
      { text: 'normal', type: 'C' },
      { text: 'बात नहीं करता/करती', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'ideal पड़ोसी relationship?',
    options: [
      { text: 'family जैसे', type: 'A' },
      { text: 'friendly और helpful', type: 'B' },
      { text: 'cordial और professional', type: 'C' },
      { text: 'no interaction best', type: 'D' },
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
    title: 'Super Neighbor',
    emoji: '🏡',
    description: 'आप ideal पड़ोसी हैं! Helpful, friendly, involved। पुराने ज़माने की पड़ोसी feeling!',
    traits: ['friendly', 'helpful', 'social', 'caring', 'community-oriented'],
    weaknesses: ['privacy कम', 'बहुत involved', 'time consuming'],
    advice: 'great community spirit! लेकिन boundaries भी रखें।',
  },
  B: {
    type: 'B',
    title: 'Friendly Neighbor',
    emoji: '👋',
    description: 'आप balanced पड़ोसी हैं। Friendly लेकिन space भी देते हैं। Perfect modern neighbor!',
    traits: ['balanced', 'friendly', 'respectful', 'moderate', 'helpful when needed'],
    weaknesses: ['close bonds कम', 'selective'],
    advice: 'good approach! Community में थोड़ा और involve हों।',
  },
  C: {
    type: 'C',
    title: 'Private Neighbor',
    emoji: '🚪',
    description: 'आप privacy prefer करते हैं। Cordial लेकिन distant। Modern city life style।',
    traits: ['private', 'independent', 'distant', 'polite', 'self-sufficient'],
    weaknesses: ['lonely feel हो सकता है', 'help न मिले emergency में'],
    advice: 'privacy okay है, लेकिन कुछ connection भी रखें।',
  },
  D: {
    type: 'D',
    title: 'Isolated Neighbor',
    emoji: '🏢',
    description: 'पड़ोसियों से कोई connection नहीं। Complete isolation। Modern लेकिन थोड़ा lonely।',
    traits: ['isolated', 'private', 'independent', 'introverted', 'distant'],
    weaknesses: ['no community support', 'safety concerns', 'lonely'],
    advice: 'थोड़ा connect करें। Emergency में काम आएगा।',
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
