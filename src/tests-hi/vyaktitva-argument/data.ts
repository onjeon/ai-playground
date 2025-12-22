// बहस का अंदाज (Argument Style)
export const questions = [
  {
    id: 1,
    text: 'बहस में आप कैसे हैं?',
    options: [
      { text: 'शांति से point रखता/रखती हूं', type: 'A' },
      { text: 'passionate होकर बोलता/बोलती हूं', type: 'B' },
      { text: 'avoid करता/करती हूं', type: 'C' },
      { text: 'जीतना जरूरी है', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'जब कोई गलत हो और जिद करे?',
    options: [
      { text: 'facts से समझाता/समझाती हूं', type: 'A' },
      { text: 'थोड़ा frustrated हो जाता/जाती हूं', type: 'B' },
      { text: 'छोड़ देता/देती हूं', type: 'C' },
      { text: 'prove करता/करती हूं गलत', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'आप गलत हों तो?',
    options: [
      { text: 'accept करता/करती हूं', type: 'A' },
      { text: 'थोड़ा मुश्किल लेकिन मान लेता/लेती हूं', type: 'B' },
      { text: 'topic change', type: 'C' },
      { text: 'कभी गलत नहीं होता/होती', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'family में debate?',
    options: [
      { text: 'healthy discussion करता/करती हूं', type: 'A' },
      { text: 'passionate हो जाता/जाती हूं', type: 'B' },
      { text: 'शांत रहता/रहती हूं', type: 'C' },
      { text: 'जीतना है', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'online arguments?',
    options: [
      { text: 'नहीं करता/करती', type: 'A' },
      { text: 'कभी-कभी opinion रखता/रखती हूं', type: 'B' },
      { text: 'देखता/देखती हूं बस', type: 'C' },
      { text: 'warrior हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'बहस के बाद feeling?',
    options: [
      { text: 'normal, discussion था', type: 'A' },
      { text: 'थोड़ा upset', type: 'B' },
      { text: 'relief, खत्म हुआ', type: 'C' },
      { text: 'जीता तो अच्छा, हारा तो गुस्सा', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'sensitive topics पर?',
    options: [
      { text: 'respectfully discuss', type: 'A' },
      { text: 'avoid if possible', type: 'B' },
      { text: 'चुप रहता/रहती हूं', type: 'C' },
      { text: 'strong opinions रखता/रखती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'listening vs talking?',
    options: [
      { text: 'पहले सुनता/सुनती हूं, फिर बोलता/बोलती हूं', type: 'A' },
      { text: 'दोनों balanced', type: 'B' },
      { text: 'ज्यादा सुनता/सुनती हूं', type: 'C' },
      { text: 'बोलना ज्यादा', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'partner/spouse से बहस?',
    options: [
      { text: 'solve करने के लिए', type: 'A' },
      { text: 'होती है, फिर ठीक', type: 'B' },
      { text: 'avoid करता/करती हूं', type: 'C' },
      { text: 'जीतना जरूरी', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'arguments का purpose?',
    options: [
      { text: 'understanding और resolution', type: 'A' },
      { text: 'point रखना', type: 'B' },
      { text: 'waste of time', type: 'C' },
      { text: 'winning', type: 'D' },
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
    title: 'Mature Debater',
    emoji: '🎯',
    description: 'आप mature और balanced arguer हैं। Facts-based, respectful, solution-oriented। Ideal approach!',
    traits: ['logical', 'respectful', 'mature', 'solution-focused', 'calm'],
    weaknesses: ['कभी-कभी too calm लग सकते हैं'],
    advice: 'excellent approach! Keep being the voice of reason।',
  },
  B: {
    type: 'B',
    title: 'Passionate Arguer',
    emoji: '🔥',
    description: 'आप passionate arguer हैं। Emotions आ जाते हैं, लेकिन fair रहते हैं। Human!',
    traits: ['passionate', 'expressive', 'caring', 'involved', 'human'],
    weaknesses: ['emotional हो जाते हैं', 'regret कभी-कभी'],
    advice: 'passion अच्छी है, बस emotions को control में रखें।',
  },
  C: {
    type: 'C',
    title: 'Conflict Avoider',
    emoji: '🕊️',
    description: 'आप बहस से बचते हैं। Peace lover, शांति प्रिय। लेकिन voice up करना भी जरूरी है।',
    traits: ['peaceful', 'avoiding', 'quiet', 'non-confrontational'],
    weaknesses: ['opinions नहीं रखते', 'walked over हो सकते हैं', 'bottled up feelings'],
    advice: 'assertive होना सीखें। आपकी बात भी matter करती है।',
  },
  D: {
    type: 'D',
    title: 'Win-at-all-costs',
    emoji: '⚔️',
    description: 'आपके लिए बहस में जीतना सब कुछ है। Right होने से ज्यादा winning matters।',
    traits: ['competitive', 'aggressive', 'strong-willed', 'determined'],
    weaknesses: ['relationships suffer', 'always right syndrome', 'listening कम'],
    advice: 'हर बहस जीतनी जरूरी नहीं। Understanding बेहतर है winning से।',
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
