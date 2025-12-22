export const questions = [
  {
    id: 1,
    text: 'Life में current state कैसी है?',
    options: [
      { text: 'बहुत अच्छी, thriving', type: 'A' },
      { text: 'अच्छी', type: 'B' },
      { text: 'Okay', type: 'C' },
      { text: 'खराब', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Overall well-being कैसी है?',
    options: [
      { text: 'Excellent, healthy और happy', type: 'A' },
      { text: 'Good', type: 'B' },
      { text: 'Average', type: 'C' },
      { text: 'Poor', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Life में balance कैसा है?',
    options: [
      { text: 'Well balanced', type: 'A' },
      { text: 'Fairly balanced', type: 'B' },
      { text: 'Imbalanced', type: 'C' },
      { text: 'Very imbalanced', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Mental health कैसी है currently?',
    options: [
      { text: 'बहुत अच्छी', type: 'A' },
      { text: 'अच्छी', type: 'B' },
      { text: 'Struggling', type: 'C' },
      { text: 'बहुत खराब', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Physical health कैसी है?',
    options: [
      { text: 'Great, fit हूं', type: 'A' },
      { text: 'Good', type: 'B' },
      { text: 'Could be better', type: 'C' },
      { text: 'Poor', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Relationships से satisfaction कैसी है?',
    options: [
      { text: 'बहुत satisfied', type: 'A' },
      { text: 'Satisfied', type: 'B' },
      { text: 'Mixed', type: 'C' },
      { text: 'Unsatisfied', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Work/career से satisfaction कैसी है?',
    options: [
      { text: 'बहुत satisfied', type: 'A' },
      { text: 'Satisfied', type: 'B' },
      { text: 'Okay', type: 'C' },
      { text: 'Unsatisfied', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Financial situation कैसी है?',
    options: [
      { text: 'Stable और comfortable', type: 'A' },
      { text: 'Okay', type: 'B' },
      { text: 'Struggling', type: 'C' },
      { text: 'बहुत खराब', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Life में meaning और purpose feel होता है?',
    options: [
      { text: 'बहुत, clear purpose है', type: 'A' },
      { text: 'हां', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Daily joy और happiness कैसी है?',
    options: [
      { text: 'रोज खुश रहता हूं', type: 'A' },
      { text: 'ज्यादातर', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'बहुत कम', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Future के बारे में कैसा feel है?',
    options: [
      { text: 'Optimistic और excited', type: 'A' },
      { text: 'Positive', type: 'B' },
      { text: 'Uncertain', type: 'C' },
      { text: 'Hopeless', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall life से satisfaction कैसी है?',
    options: [
      { text: 'बहुत satisfied', type: 'A' },
      { text: 'Satisfied', type: 'B' },
      { text: 'Okay', type: 'C' },
      { text: 'Unsatisfied', type: 'D' },
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
    title: 'उत्तम हालात',
    emoji: '🌟',
    description: 'Life में excellent state है। Thriving हैं - health, happiness, relationships, work सब अच्छा है।',
    traits: ['thriving', 'happy', 'balanced', 'fulfilled'],
    weaknesses: ['maintain करना जरूरी'],
    advice: 'Amazing! इसे maintain करें। Share positivity with others।',
  },
  B: {
    type: 'B',
    title: 'अच्छे हालात',
    emoji: '😊',
    description: 'Life में good state है। ज्यादातर areas अच्छे हैं।',
    traits: ['doing well', 'stable', 'content'],
    weaknesses: ['some areas can improve'],
    advice: 'Good place! Focus on areas that need attention।',
  },
  C: {
    type: 'C',
    title: 'ठीक-ठाक हालात',
    emoji: '😐',
    description: 'Life में mixed state है। कुछ अच्छा, कुछ struggle।',
    traits: ['managing', 'mixed', 'surviving'],
    weaknesses: ['imbalance', 'stress', 'lacking fulfillment'],
    advice: 'Identify biggest issue। Work on it। Small improvements lead to big changes।',
  },
  D: {
    type: 'D',
    title: 'खराब हालात',
    emoji: '😔',
    description: 'Life में difficult state है। Multiple areas में struggle है।',
    traits: ['struggling', 'overwhelmed', 'unhappy'],
    weaknesses: ['mental health risk', 'burnout', 'hopelessness'],
    advice: 'Please get help। Talk to someone। Professional support जरूरी है। एक step at a time।',
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
