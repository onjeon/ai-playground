export const questions = [
  {
    id: 1,
    text: 'Communication skills कैसी हैं?',
    options: [
      { text: 'Excellent, clearly express करता हूं', type: 'A' },
      { text: 'अच्छी हैं', type: 'B' },
      { text: 'Average', type: 'C' },
      { text: 'Poor', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Active listening में कैसे हैं?',
    options: [
      { text: 'बहुत अच्छा, पूरा attention', type: 'A' },
      { text: 'अच्छा', type: 'B' },
      { text: 'थोड़ा distracted', type: 'C' },
      { text: 'Poor listener', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Difficult conversations कैसे handle करते हैं?',
    options: [
      { text: 'Directly और respectfully', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Avoid करता हूं', type: 'C' },
      { text: 'बहुत मुश्किल है', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'अपनी feelings express करने में कैसे हैं?',
    options: [
      { text: 'Clearly और openly', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Non-verbal communication कैसी है?',
    options: [
      { text: 'Aware और effective', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'Not aware', type: 'C' },
      { text: 'Poor', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Feedback देने में कैसे हैं?',
    options: [
      { text: 'Constructive और kind', type: 'A' },
      { text: 'Direct', type: 'B' },
      { text: 'Avoid करता हूं', type: 'C' },
      { text: 'Harsh या नहीं देता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Feedback receive करने में कैसे हैं?',
    options: [
      { text: 'Open और grateful', type: 'A' },
      { text: 'Accept करता हूं', type: 'B' },
      { text: 'Defensive', type: 'C' },
      { text: 'बहुत defensive', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Misunderstandings कैसे handle करते हैं?',
    options: [
      { text: 'Clarify और resolve', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Struggle', type: 'C' },
      { text: 'बढ़ जाती हैं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Assertive communication कैसी है?',
    options: [
      { text: 'Good balance', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'Too passive', type: 'C' },
      { text: 'Too aggressive या passive', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Written communication कैसी है?',
    options: [
      { text: 'Clear और effective', type: 'A' },
      { text: 'Good', type: 'B' },
      { text: 'Average', type: 'C' },
      { text: 'Poor', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Different people के साथ adapt करना कैसा है?',
    options: [
      { text: 'Easy, adjust कर लेता हूं', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall communication से satisfaction कैसी है?',
    options: [
      { text: 'बहुत satisfied', type: 'A' },
      { text: 'Satisfied', type: 'B' },
      { text: 'Need improvement', type: 'C' },
      { text: 'बहुत unsatisfied', type: 'D' },
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
    title: 'उत्कृष्ट संवाद कौशल',
    emoji: '💬',
    description: 'Excellent communicator हैं। Clear, empathetic, और effective communication है।',
    traits: ['great communicator', 'listener', 'clear', 'empathetic'],
    weaknesses: ['continue improving'],
    advice: 'Great skill! Help others improve their communication।',
  },
  B: {
    type: 'B',
    title: 'अच्छा संवाद कौशल',
    emoji: '🗣️',
    description: 'Good communication skills हैं। कुछ areas better हो सकते हैं।',
    traits: ['good communicator', 'effective'],
    weaknesses: ['some areas to improve'],
    advice: 'Keep practicing। Focus on areas that need work।',
  },
  C: {
    type: 'C',
    title: 'सामान्य संवाद कौशल',
    emoji: '😐',
    description: 'Communication average है। Misunderstandings हो सकती हैं।',
    traits: ['average communicator', 'sometimes unclear'],
    weaknesses: ['miscommunication', 'relationship issues'],
    advice: 'Communication skills learn करें। Practice active listening।',
  },
  D: {
    type: 'D',
    title: 'कमजोर संवाद कौशल',
    emoji: '😔',
    description: 'Communication में serious issues हैं। Relationships affect हो रही हैं।',
    traits: ['poor communicator', 'misunderstood'],
    weaknesses: ['relationship problems', 'isolation'],
    advice: 'Communication skills जरूरी हैं। Course लें या therapy से help।',
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
