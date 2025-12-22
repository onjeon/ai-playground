// जोखिम लेने की क्षमता (Risk Taking Ability)
export const questions = [
  {
    id: 1,
    text: 'नई job opportunity में risk?',
    options: [
      { text: 'calculated risk लेता/लेती हूं', type: 'A' },
      { text: 'safe option prefer', type: 'B' },
      { text: 'बहुत सोचता/सोचती हूं', type: 'C' },
      { text: 'jump करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'investment में?',
    options: [
      { text: 'diversified portfolio', type: 'A' },
      { text: 'FD और safe options', type: 'B' },
      { text: 'investment से डर', type: 'C' },
      { text: 'stocks और crypto में bold', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'adventure sports?',
    options: [
      { text: 'try करता/करती हूं safety के साथ', type: 'A' },
      { text: 'थोड़ा scared', type: 'B' },
      { text: 'नहीं करता/करती', type: 'C' },
      { text: 'thrill seeker हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'business start करना?',
    options: [
      { text: 'plan करके start', type: 'A' },
      { text: 'job safe है', type: 'B' },
      { text: 'बहुत risky लगता है', type: 'C' },
      { text: 'entrepreneur बनना है', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'life में big changes?',
    options: [
      { text: 'thoughtful changes', type: 'A' },
      { text: 'stability prefer', type: 'B' },
      { text: 'change से डर', type: 'C' },
      { text: 'change exciting है', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'unknown city में travel?',
    options: [
      { text: 'research करके जाता/जाती हूं', type: 'A' },
      { text: 'guided tour better', type: 'B' },
      { text: 'known places only', type: 'C' },
      { text: 'spontaneous travel love', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'new food try करना?',
    options: [
      { text: 'हां, but cautiously', type: 'A' },
      { text: 'familiar food prefer', type: 'B' },
      { text: 'नहीं, same food', type: 'C' },
      { text: 'everything try करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'career में unconventional path?',
    options: [
      { text: 'passion follow करता/करती हूं smartly', type: 'A' },
      { text: 'conventional better', type: 'B' },
      { text: 'safe path only', type: 'C' },
      { text: 'अपना रास्ता बनाता/बनाती हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'failure के बाद?',
    options: [
      { text: 'learn और try again', type: 'A' },
      { text: 'थोड़ा cautious', type: 'B' },
      { text: 'risk लेना बंद', type: 'C' },
      { text: 'bigger risk लेता/लेती हूं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'risk और reward?',
    options: [
      { text: 'balanced approach', type: 'A' },
      { text: 'safety first', type: 'B' },
      { text: 'no risk please', type: 'C' },
      { text: 'high risk high reward', type: 'D' },
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
    title: 'Calculated Risk Taker',
    emoji: '⚖️',
    description: 'आप smart risk taker हैं। Risk लेते हैं लेकिन calculated। Best approach!',
    traits: ['smart', 'analytical', 'balanced', 'strategic', 'thoughtful'],
    weaknesses: ['कभी-कभी over-analyze'],
    advice: 'excellent approach! Sometimes gut feeling भी follow करें।',
  },
  B: {
    type: 'B',
    title: 'Cautious Player',
    emoji: '🛡️',
    description: 'आप cautious हैं। Safety और stability prefer। Conservative approach।',
    traits: ['cautious', 'stable', 'secure', 'conservative', 'safe'],
    weaknesses: ['opportunities miss', 'growth limited'],
    advice: 'safe अच्छा है, लेकिन कुछ calculated risks लें growth के लिए।',
  },
  C: {
    type: 'C',
    title: 'Risk Avoider',
    emoji: '🏠',
    description: 'आप risk से बचते हैं। Comfort zone में रहना पसंद। Change scary है।',
    traits: ['risk-averse', 'comfort-seeking', 'stable', 'predictable'],
    weaknesses: ['stagnation', 'fear-driven', 'missed opportunities'],
    advice: 'थोड़ा बाहर निकलें। Life happens outside comfort zone।',
  },
  D: {
    type: 'D',
    title: 'Bold Risk Taker',
    emoji: '🚀',
    description: 'आप bold risk taker हैं! Jump first, think later। Thrill seeker!',
    traits: ['bold', 'adventurous', 'fearless', 'exciting', 'ambitious'],
    weaknesses: ['reckless कभी-कभी', 'big losses possible'],
    advice: 'bold great है! लेकिन sometimes pause करें और think करें।',
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
