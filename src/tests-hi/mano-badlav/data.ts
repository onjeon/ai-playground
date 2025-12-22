export const questions = [
  {
    id: 1,
    text: 'Change के बारे में आप क्या सोचते हैं?',
    options: [
      { text: 'Exciting, love it', type: 'A' },
      { text: 'Part of life, accept करता हूं', type: 'B' },
      { text: 'Uncomfortable', type: 'C' },
      { text: 'Hate it', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'जब sudden change आए तो कैसे react करते हैं?',
    options: [
      { text: 'Adapt quickly', type: 'A' },
      { text: 'थोड़ा time लेकर adapt', type: 'B' },
      { text: 'Struggle करता हूं', type: 'C' },
      { text: 'Cannot handle', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'New job/place में settle होने में कितना time लगता है?',
    options: [
      { text: 'जल्दी, excited रहता हूं', type: 'A' },
      { text: 'Normal time', type: 'B' },
      { text: 'बहुत time', type: 'C' },
      { text: 'बहुत मुश्किल है', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Routine बदलना कैसा लगता है?',
    options: [
      { text: 'Refreshing', type: 'A' },
      { text: 'ठीक है', type: 'B' },
      { text: 'Disturbing', type: 'C' },
      { text: 'बहुत stressful', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Life में बड़े changes कैसे handle किए?',
    options: [
      { text: 'Well, grew from them', type: 'A' },
      { text: 'Managed somehow', type: 'B' },
      { text: 'With difficulty', type: 'C' },
      { text: 'Very badly', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'जब plans बदल जाएं तो कैसे feel करते हैं?',
    options: [
      { text: 'ठीक है, adjust कर लेता हूं', type: 'A' },
      { text: 'थोड़ा irritated, फिर ठीक', type: 'B' },
      { text: 'बहुत disturbed', type: 'C' },
      { text: 'Cannot handle', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Uncertainty के साथ कैसे deal करते हैं?',
    options: [
      { text: 'Okay with it', type: 'A' },
      { text: 'Manage कर लेता हूं', type: 'B' },
      { text: 'बहुत anxious होता हूं', type: 'C' },
      { text: 'बर्दाश्त नहीं होती', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'अपने आप को बदलना कैसा है?',
    options: [
      { text: 'Open हूं, constantly evolving', type: 'A' },
      { text: 'जरूरी हो तो बदल सकता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं बदलना', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Technology changes के साथ कैसे हैं?',
    options: [
      { text: 'Early adopter, excited', type: 'A' },
      { text: 'Learn कर लेता हूं', type: 'B' },
      { text: 'Struggle करता हूं', type: 'C' },
      { text: 'Avoid करता हूं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'जब कुछ end हो (job, relationship) तो कैसे handle करते हैं?',
    options: [
      { text: 'New beginning के रूप में देखता हूं', type: 'A' },
      { text: 'Accept करके move on', type: 'B' },
      { text: 'बहुत time लगता है', type: 'C' },
      { text: 'बहुत difficult', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Change खुद initiate करने में कैसे हैं?',
    options: [
      { text: 'करता रहता हूं', type: 'A' },
      { text: 'जरूरी हो तो करता हूं', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall change के साथ आपका relationship कैसा है?',
    options: [
      { text: 'Great, embrace it', type: 'A' },
      { text: 'Okay, deal with it', type: 'B' },
      { text: 'Uncomfortable', type: 'C' },
      { text: 'Very bad', type: 'D' },
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
    title: 'बदलाव प्रेमी',
    emoji: '🦋',
    description: 'आप change को embrace करते हैं। Adaptable हैं और new experiences से excited होते हैं।',
    traits: ['adaptable', 'flexible', 'resilient', 'growth-oriented'],
    weaknesses: ['कभी-कभी restless', 'stability कम'],
    advice: 'Great quality! कुछ stability भी maintain करें।',
  },
  B: {
    type: 'B',
    title: 'बदलाव स्वीकारक',
    emoji: '🌊',
    description: 'आप change accept कर लेते हैं और adapt हो जाते हैं।',
    traits: ['accepting', 'adaptable', 'realistic'],
    weaknesses: ['कभी-कभी resistance'],
    advice: 'Change को more positively देखें। It brings growth।',
  },
  C: {
    type: 'C',
    title: 'बदलाव से असहज',
    emoji: '😰',
    description: 'Change आपको uncomfortable करता है। Adapt करने में time और struggle लगता है।',
    traits: ['resistant', 'comfort-seeking', 'anxious'],
    weaknesses: ['slow adaptation', 'stress', 'missed opportunities'],
    advice: 'Small changes से practice करें। Change inevitable है, embrace करना सीखें।',
  },
  D: {
    type: 'D',
    title: 'बदलाव से भय',
    emoji: '😱',
    description: 'Change आपके लिए बहुत difficult है। यह anxiety और stagnation cause कर रहा है।',
    traits: ['change-averse', 'rigid', 'fearful'],
    weaknesses: ['stuck', 'anxiety', 'missing life'],
    advice: 'Professional help लें। Change से deal करना सीखना possible है। Therapy helpful होगी।',
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
