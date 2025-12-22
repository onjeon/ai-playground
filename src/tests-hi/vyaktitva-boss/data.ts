// बॉस के साथ रिश्ता (Relationship with Boss)
export const questions = [
  {
    id: 1,
    text: 'बॉस से relationship कैसी है?',
    options: [
      { text: 'professional और respectful', type: 'A' },
      { text: 'friendly और open', type: 'B' },
      { text: 'formal और distant', type: 'C' },
      { text: 'complicated', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'बॉस feedback दे तो?',
    options: [
      { text: 'सुनता/सुनती हूं और improve', type: 'A' },
      { text: 'discuss करता/करती हूं', type: 'B' },
      { text: 'quietly accept', type: 'C' },
      { text: 'defensive हो जाता/जाती हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'extra work मिले तो?',
    options: [
      { text: 'करता/करती हूं, opportunity है', type: 'A' },
      { text: 'discuss करता/करती हूं timeline', type: 'B' },
      { text: 'मना नहीं कर पाता/पाती', type: 'C' },
      { text: 'irritated होता/होती हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'बॉस गलत हो तो?',
    options: [
      { text: 'politely point out करता/करती हूं', type: 'A' },
      { text: 'privately बताता/बताती हूं', type: 'B' },
      { text: 'चुप रहता/रहती हूं', type: 'C' },
      { text: 'frustrating है but silent', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'appraisal time पर?',
    options: [
      { text: 'confident हूं, facts ready', type: 'A' },
      { text: 'hopeful रहता/रहती हूं', type: 'B' },
      { text: 'nervous', type: 'C' },
      { text: 'expect nothing', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'बॉस की तारीफ करते हैं?',
    options: [
      { text: 'genuine हो तो हां', type: 'A' },
      { text: 'normal office politics', type: 'B' },
      { text: 'नहीं करता/करती', type: 'C' },
      { text: 'forced लगता है', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'office के बाद बॉस से contact?',
    options: [
      { text: 'work related तो हां', type: 'A' },
      { text: 'friends जैसे', type: 'B' },
      { text: 'avoid करता/करती हूं', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'credit न मिले तो?',
    options: [
      { text: 'politely remind करता/करती हूं', type: 'A' },
      { text: 'directly बोलता/बोलती हूं', type: 'B' },
      { text: 'चुप रहता/रहती हूं', type: 'C' },
      { text: 'बहुत hurt होता/होती हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'bad boss से deal कैसे?',
    options: [
      { text: 'professional रहता/रहती हूं', type: 'A' },
      { text: 'manage करता/करती हूं tactfully', type: 'B' },
      { text: 'suffer करता/करती हूं', type: 'C' },
      { text: 'job छोड़ने का मन', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'ideal boss कैसा हो?',
    options: [
      { text: 'mentor और guide', type: 'A' },
      { text: 'friendly और supportive', type: 'B' },
      { text: 'जो interfere न करे', type: 'C' },
      { text: 'कोई boss न हो better', type: 'D' },
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
    title: 'Professional Pro',
    emoji: '👔',
    description: 'आप ideal employee हैं! Professional, respectful, growth-oriented। Bosses love you!',
    traits: ['professional', 'respectful', 'ambitious', 'mature', 'balanced'],
    weaknesses: ['कभी-कभी too formal', 'emotions hide करते हैं'],
    advice: 'great approach! थोड़ा personal touch भी रखें।',
  },
  B: {
    type: 'B',
    title: 'Friendly Networker',
    emoji: '🤝',
    description: 'आप boss के साथ friendly relationship रखते हैं। Open communication, good rapport!',
    traits: ['friendly', 'communicative', 'likeable', 'open', 'confident'],
    weaknesses: ['boundaries blur हो सकती हैं', 'favoritism का perception'],
    advice: 'good rapport! लेकिन professional boundaries maintain करें।',
  },
  C: {
    type: 'C',
    title: 'Silent Worker',
    emoji: '🤫',
    description: 'आप काम करते हैं, बोलते कम हैं। Boss से distance रखते हैं। Safe लेकिन growth limited।',
    traits: ['quiet', 'hardworking', 'safe', 'low-profile', 'conflict-averse'],
    weaknesses: ['visibility कम', 'voice up नहीं करते', 'exploited हो सकते हैं'],
    advice: 'अपना voice raise करें, otherwise overlooked रहेंगे!',
  },
  D: {
    type: 'D',
    title: 'Frustrated Employee',
    emoji: '😤',
    description: 'Boss relationship difficult है। Frustration है, dissatisfaction है। Toxic हो सकता है।',
    traits: ['frustrated', 'unhappy', 'honest about feelings', 'seeking change'],
    weaknesses: ['negativity', 'career impact', 'stress high'],
    advice: 'situation evaluate करें। Improve या change करें, suffer मत करें!',
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
