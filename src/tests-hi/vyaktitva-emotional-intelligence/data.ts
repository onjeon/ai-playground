// भावनात्मक बुद्धिमत्ता (Emotional Intelligence)
export const questions = [
  {
    id: 1,
    text: 'अपनी emotions को समझना?',
    options: [
      { text: 'clearly समझता/समझती हूं', type: 'A' },
      { text: 'mostly समझता/समझती हूं', type: 'B' },
      { text: 'कभी-कभी confused', type: 'C' },
      { text: 'पता नहीं चलता', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'दूसरों की feelings समझना?',
    options: [
      { text: 'easily read कर लेता/लेती हूं', type: 'A' },
      { text: 'mostly समझता/समझती हूं', type: 'B' },
      { text: 'थोड़ा difficult', type: 'C' },
      { text: 'नहीं समझता/समझती', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'गुस्सा control करना?',
    options: [
      { text: 'अच्छे से control', type: 'A' },
      { text: 'mostly manage', type: 'B' },
      { text: 'difficult है', type: 'C' },
      { text: 'control नहीं होता', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'empathy?',
    options: [
      { text: 'बहुत empathetic हूं', type: 'A' },
      { text: 'हां, feel करता/करती हूं', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'stress में behavior?',
    options: [
      { text: 'calm रहता/रहती हूं', type: 'A' },
      { text: 'थोड़ा affected लेकिन manage', type: 'B' },
      { text: 'बहुत affected', type: 'C' },
      { text: 'breakdown हो जाता है', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'किसी को comfort करना?',
    options: [
      { text: 'naturally आता है', type: 'A' },
      { text: 'try करता/करती हूं', type: 'B' },
      { text: 'awkward लगता है', type: 'C' },
      { text: 'पता नहीं क्या करना है', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'criticism सुनकर?',
    options: [
      { text: 'constructively लेता/लेती हूं', type: 'A' },
      { text: 'थोड़ा hurt लेकिन process', type: 'B' },
      { text: 'बहुत hurt होता/होती हूं', type: 'C' },
      { text: 'angry हो जाता/जाती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'relationships में conflicts?',
    options: [
      { text: 'calmly resolve करता/करती हूं', type: 'A' },
      { text: 'solve करने की कोशिश', type: 'B' },
      { text: 'emotional हो जाता/जाती हूं', type: 'C' },
      { text: 'बिगड़ जाते हैं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'self-awareness?',
    options: [
      { text: 'strengths और weaknesses पता हैं', type: 'A' },
      { text: 'mostly aware', type: 'B' },
      { text: 'कभी-कभी blind spots', type: 'C' },
      { text: 'नहीं पता', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'emotional reactions control?',
    options: [
      { text: 'अच्छा control है', type: 'A' },
      { text: 'mostly', type: 'B' },
      { text: 'struggle करता/करती हूं', type: 'C' },
      { text: 'no control', type: 'D' },
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
    title: 'EQ Master',
    emoji: '💝',
    description: 'आप emotionally intelligent हैं! Self-aware, empathetic, emotionally balanced। Relationship expert!',
    traits: ['empathetic', 'self-aware', 'balanced', 'understanding', 'mature'],
    weaknesses: ['कभी-कभी others की emotions absorb कर लेते हैं'],
    advice: 'excellent EQ! अपनी emotional health का भी ध्यान रखें।',
  },
  B: {
    type: 'B',
    title: 'Good EQ',
    emoji: '😊',
    description: 'आप decent EQ रखते हैं। Emotions समझते हैं, manage करते हैं। Room for improvement!',
    traits: ['aware', 'trying', 'functional', 'growing', 'capable'],
    weaknesses: ['कभी-कभी slip', 'triggers हैं'],
    advice: 'good foundation! और develop करें।',
  },
  C: {
    type: 'C',
    title: 'Developing EQ',
    emoji: '🌱',
    description: 'EQ develop हो रही है। Struggles हैं लेकिन aware हैं। Work in progress!',
    traits: ['learning', 'struggling', 'aware', 'trying', 'growing'],
    weaknesses: ['emotional reactions', 'relationships में issues', 'stress handling'],
    advice: 'awareness first step है! Therapy या coaching help कर सकती है।',
  },
  D: {
    type: 'D',
    title: 'Low EQ',
    emoji: '❓',
    description: 'EQ में significant room for improvement। Emotions alien लगती हैं। Help needed!',
    traits: ['unaware', 'struggling', 'disconnected', 'reactive'],
    weaknesses: ['relationships suffer', 'career impact', 'personal struggles'],
    advice: 'Professional help लें। EQ सीखी जा सकती है।',
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
