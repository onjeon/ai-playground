// अंतर्मुखी या बहिर्मुखी (Introvert or Extrovert)
export const questions = [
  {
    id: 1,
    text: 'party के बाद कैसा feel होता है?',
    options: [
      { text: 'थका हुआ, recharge चाहिए', type: 'A' },
      { text: 'थोड़ा थका लेकिन खुश', type: 'B' },
      { text: 'energized और खुश', type: 'C' },
      { text: 'और party करने का मन', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'weekend plan?',
    options: [
      { text: 'alone time, घर पर', type: 'A' },
      { text: 'close friends के साथ', type: 'B' },
      { text: 'social plans', type: 'C' },
      { text: 'parties और outings', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'नए लोगों से मिलना?',
    options: [
      { text: 'uncomfortable, avoid', type: 'A' },
      { text: 'थोड़ा nervous लेकिन manage', type: 'B' },
      { text: 'okay है', type: 'C' },
      { text: 'excited, love meeting new people', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'conversation में?',
    options: [
      { text: 'ज्यादा सुनता/सुनती हूं', type: 'A' },
      { text: 'balanced', type: 'B' },
      { text: 'active participant', type: 'C' },
      { text: 'center of conversation', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'दोस्तों की संख्या?',
    options: [
      { text: 'कुछ गिने-चुने close friends', type: 'A' },
      { text: 'small circle', type: 'B' },
      { text: 'अच्छे खासे दोस्त', type: 'C' },
      { text: 'बहुत सारे friends', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'office/college में?',
    options: [
      { text: 'quiet, अपने काम से काम', type: 'A' },
      { text: 'कुछ लोगों से बात', type: 'B' },
      { text: 'social, सबसे बात', type: 'C' },
      { text: 'popular, everyone knows me', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'energy कहां से आती है?',
    options: [
      { text: 'alone time से', type: 'A' },
      { text: 'mix of both', type: 'B' },
      { text: 'लोगों से', type: 'C' },
      { text: 'crowds और parties से', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'phone पर बात करना?',
    options: [
      { text: 'text prefer करता/करती हूं', type: 'A' },
      { text: 'short calls okay', type: 'B' },
      { text: 'calls पसंद हैं', type: 'C' },
      { text: 'घंटों बात कर सकता/सकती हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'spotlight में?',
    options: [
      { text: 'uncomfortable', type: 'A' },
      { text: 'थोड़ा nervous', type: 'B' },
      { text: 'okay है', type: 'C' },
      { text: 'love it!', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'ideal vacation?',
    options: [
      { text: 'quiet, secluded place', type: 'A' },
      { text: 'close ones के साथ', type: 'B' },
      { text: 'popular destination', type: 'C' },
      { text: 'parties और nightlife', type: 'D' },
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
    title: 'Introvert',
    emoji: '🌙',
    description: 'आप introvert हैं। Alone time recharge करता है, deep connections prefer, thoughtful personality।',
    traits: ['thoughtful', 'deep', 'independent', 'observant', 'creative'],
    weaknesses: ['social anxiety', 'networking मुश्किल', 'misunderstood'],
    advice: 'introversion strength है! लेकिन comfort zone से थोड़ा बाहर भी निकलें।',
  },
  B: {
    type: 'B',
    title: 'Ambivert (Introvert-leaning)',
    emoji: '🌤️',
    description: 'आप ambivert हैं, slightly introvert। Balance रखते हैं, लेकिन alone time prefer।',
    traits: ['balanced', 'adaptable', 'selective social', 'versatile'],
    weaknesses: ['कभी-कभी confused', 'energy fluctuation'],
    advice: 'great balance! अपनी needs समझें और honor करें।',
  },
  C: {
    type: 'C',
    title: 'Ambivert (Extrovert-leaning)',
    emoji: '⛅',
    description: 'आप ambivert हैं, slightly extrovert। Social भी, alone time भी - best of both!',
    traits: ['social', 'adaptable', 'flexible', 'balanced', 'friendly'],
    weaknesses: ['sometimes over-commit'],
    advice: 'wonderful flexibility! Balance maintain करते रहें।',
  },
  D: {
    type: 'D',
    title: 'Extrovert',
    emoji: '☀️',
    description: 'आप true extrovert हैं! People से energy, social butterfly, life of the party!',
    traits: ['social', 'energetic', 'outgoing', 'friendly', 'communicative'],
    weaknesses: ['alone time में struggle', 'listen करना कम', 'oversharing'],
    advice: 'amazing social energy! लेकिन alone time भी valuable है, try करें।',
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
