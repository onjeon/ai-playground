export const questions = [
  {
    id: 1,
    text: 'अपनी emotions को कितना understand करते हैं?',
    options: [
      { text: 'बहुत अच्छी तरह, aware हूं', type: 'A' },
      { text: 'काफी अच्छी तरह', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Emotions express करना कैसा है?',
    options: [
      { text: 'आसान, healthy तरीके से करता हूं', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Strong emotions आने पर क्या करते हैं?',
    options: [
      { text: 'Feel करता हूं, process करता हूं', type: 'A' },
      { text: 'Handle कर लेता हूं', type: 'B' },
      { text: 'Overwhelmed हो जाता हूं', type: 'C' },
      { text: 'Suppress कर देता हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'दूसरों की emotions को कितना समझते हैं?',
    options: [
      { text: 'बहुत अच्छी तरह, empathetic हूं', type: 'A' },
      { text: 'काफी अच्छी तरह', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं समझ पाता', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Negative emotions से कैसे deal करते हैं?',
    options: [
      { text: 'Feel करके release करता हूं', type: 'A' },
      { text: 'Process करता हूं', type: 'B' },
      { text: 'Struggle करता हूं', type: 'C' },
      { text: 'Suppress या explode', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Crying के बारे में क्या सोचते हैं?',
    options: [
      { text: 'Healthy है, जब जरूरी हो करता हूं', type: 'A' },
      { text: 'ठीक है', type: 'B' },
      { text: 'Weakness है', type: 'C' },
      { text: 'कभी नहीं / control नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'जब upset हों तो क्या करते हैं?',
    options: [
      { text: 'Self-care, process, express', type: 'A' },
      { text: 'थोड़ा time लेता हूं', type: 'B' },
      { text: 'अंदर रखता हूं', type: 'C' },
      { text: 'Explode या shut down', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Emotional intelligence के बारे में क्या सोचते हैं?',
    options: [
      { text: 'बहुत important, develop करता हूं', type: 'A' },
      { text: 'Important है', type: 'B' },
      { text: 'ठीक है', type: 'C' },
      { text: 'क्या है यह?', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Difficult conversations में emotions कैसे handle करते हैं?',
    options: [
      { text: 'Stay calm, express clearly', type: 'A' },
      { text: 'Manage कर लेता हूं', type: 'B' },
      { text: 'React हो जाता हूं', type: 'C' },
      { text: 'Avoid या explosive', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Emotions और decisions में क्या relationship है?',
    options: [
      { text: 'Aware हूं, balance रखता हूं', type: 'A' },
      { text: 'सोचता हूं', type: 'B' },
      { text: 'Emotions से decide करता हूं', type: 'C' },
      { text: 'पता नहीं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'जब कोई hurt करे तो क्या करते हैं?',
    options: [
      { text: 'Feel करता हूं, communicate करता हूं', type: 'A' },
      { text: 'Process करता हूं', type: 'B' },
      { text: 'Revenge या suppress', type: 'C' },
      { text: 'Explode या shut down', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall emotional health कैसी है?',
    options: [
      { text: 'बहुत अच्छी', type: 'A' },
      { text: 'अच्छी', type: 'B' },
      { text: 'Struggle', type: 'C' },
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
    title: 'उच्च भावनात्मक बुद्धिमत्ता',
    emoji: '💗',
    description: 'आपकी emotional intelligence बहुत अच्छी है। Emotions को समझते हैं, express करते हैं, और manage करते हैं।',
    traits: ['emotionally intelligent', 'self-aware', 'empathetic', 'balanced'],
    weaknesses: ['कभी-कभी over-sensitive'],
    advice: 'Great EQ! दूसरों को भी help करें emotional skills सीखने में।',
  },
  B: {
    type: 'B',
    title: 'अच्छी भावनात्मक बुद्धिमत्ता',
    emoji: '😊',
    description: 'आपकी emotional intelligence अच्छी है। ज्यादातर emotions को handle कर लेते हैं।',
    traits: ['emotionally aware', 'coping', 'empathetic'],
    weaknesses: ['कुछ areas में improvement scope'],
    advice: 'EQ और develop करें। Books पढ़ें, practice करें।',
  },
  C: {
    type: 'C',
    title: 'कम भावनात्मक बुद्धिमत्ता',
    emoji: '😰',
    description: 'Emotional skills में struggle है। Emotions overwhelming या suppressed रहती हैं।',
    traits: ['emotionally struggling', 'reactive', 'suppressive'],
    weaknesses: ['relationship issues', 'stress', 'health effects'],
    advice: 'EQ सीखा जा सकता है। Therapy बहुत helpful है। Books और courses try करें।',
  },
  D: {
    type: 'D',
    title: 'बहुत कम भावनात्मक बुद्धिमत्ता',
    emoji: '💔',
    description: 'Emotional awareness और management में serious issues हैं। Life को badly affect कर रहा है।',
    traits: ['emotionally disconnected', 'explosive or suppressed', 'struggling'],
    weaknesses: ['relationships suffer', 'mental health issues', 'unhappy'],
    advice: 'Professional help जरूरी है। Therapy बहुत helpful होगी। EQ develop possible है।',
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
