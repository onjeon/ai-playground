export const questions = [
  {
    id: 1,
    text: 'Life में clear goals हैं?',
    options: [
      { text: 'हां, बहुत clear', type: 'A' },
      { text: 'कुछ goals हैं', type: 'B' },
      { text: 'Unclear', type: 'C' },
      { text: 'कोई goals नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Goals कितने meaningful हैं?',
    options: [
      { text: 'बहुत, passion और purpose से जुड़े', type: 'A' },
      { text: 'Meaningful हैं', type: 'B' },
      { text: 'थोड़े', type: 'C' },
      { text: 'Random हैं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Goals achieve करने में progress कैसी है?',
    options: [
      { text: 'On track, good progress', type: 'A' },
      { text: 'कुछ progress', type: 'B' },
      { text: 'Slow', type: 'C' },
      { text: 'No progress', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Short-term और long-term goals दोनों हैं?',
    options: [
      { text: 'हां, well planned', type: 'A' },
      { text: 'हां', type: 'B' },
      { text: 'Only one type', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Goals achieve करने का action plan है?',
    options: [
      { text: 'Detailed plan है', type: 'A' },
      { text: 'Some plan', type: 'B' },
      { text: 'Vague', type: 'C' },
      { text: 'No plan', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Goals पर focus कितना रख पाते हैं?',
    options: [
      { text: 'Very focused', type: 'A' },
      { text: 'Fairly focused', type: 'B' },
      { text: 'Easily distracted', type: 'C' },
      { text: 'Cannot focus', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Obstacles आने पर क्या करते हैं?',
    options: [
      { text: 'Overcome करता हूं', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Discouraged हो जाता हूं', type: 'C' },
      { text: 'Give up', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Goals review और adjust करते हैं?',
    options: [
      { text: 'Regularly', type: 'A' },
      { text: 'Sometimes', type: 'B' },
      { text: 'Rarely', type: 'C' },
      { text: 'Never', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Goals achieve होने पर कैसा लगता है?',
    options: [
      { text: 'Amazing, celebrate करता हूं', type: 'A' },
      { text: 'Good', type: 'B' },
      { text: 'Okay, next पर jump', type: 'C' },
      { text: 'Achieve ही नहीं होते', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Goals कितने realistic हैं?',
    options: [
      { text: 'SMART goals', type: 'A' },
      { text: 'Mostly realistic', type: 'B' },
      { text: 'Sometimes unrealistic', type: 'C' },
      { text: 'Unrealistic या कोई नहीं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Goals के बारे में accountability है?',
    options: [
      { text: 'हां, track करता हूं, share करता हूं', type: 'A' },
      { text: 'Some accountability', type: 'B' },
      { text: 'Little', type: 'C' },
      { text: 'None', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall goal-setting और achievement से satisfaction कैसी है?',
    options: [
      { text: 'बहुत satisfied', type: 'A' },
      { text: 'Satisfied', type: 'B' },
      { text: 'Unsatisfied', type: 'C' },
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
    title: 'उत्कृष्ट लक्ष्य निर्धारण',
    emoji: '🎯',
    description: 'Excellent goal-setting और achievement है। Clear, meaningful goals हैं और achieve कर रहे हैं।',
    traits: ['goal-oriented', 'focused', 'achieving', 'driven'],
    weaknesses: ['may be too goal-focused'],
    advice: 'Great! Enjoy the journey too, not just destinations।',
  },
  B: {
    type: 'B',
    title: 'अच्छा लक्ष्य निर्धारण',
    emoji: '⭐',
    description: 'Good goal-setting है। Goals हैं और progress हो रही है।',
    traits: ['goal-aware', 'working', 'progress'],
    weaknesses: ['can be more focused'],
    advice: 'Good work! More structured approach try करें।',
  },
  C: {
    type: 'C',
    title: 'कमजोर लक्ष्य निर्धारण',
    emoji: '😐',
    description: 'Goals unclear हैं या progress नहीं है। Direction missing है।',
    traits: ['unclear', 'unfocused', 'drifting'],
    weaknesses: ['wasted potential', 'unfulfilled', 'regret'],
    advice: 'Sit down और life goals define करें। Start with one goal।',
  },
  D: {
    type: 'D',
    title: 'लक्ष्य की कमी',
    emoji: '😔',
    description: 'Goals नहीं हैं या severely lost feel हो रहा है। Direction missing है।',
    traits: ['goalless', 'lost', 'directionless'],
    weaknesses: ['unfulfilled life', 'depression risk'],
    advice: 'This is serious। Find your purpose। Coach या therapist help कर सकते हैं।',
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
