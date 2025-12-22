export const questions = [
  {
    id: 1,
    text: 'Decisions लेने में कैसे हैं?',
    options: [
      { text: 'Confident और quick', type: 'A' },
      { text: 'सोचकर लेता हूं', type: 'B' },
      { text: 'Struggle करता हूं', type: 'C' },
      { text: 'बहुत मुश्किल है', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Big decisions के बारे में क्या feel करते हैं?',
    options: [
      { text: 'Confident, handle कर सकता हूं', type: 'A' },
      { text: 'थोड़ा anxious लेकिन manage', type: 'B' },
      { text: 'बहुत anxious', type: 'C' },
      { text: 'Paralyzed', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Decision के बाद regret कितना होता है?',
    options: [
      { text: 'बहुत कम, move on करता हूं', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'हमेशा', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Options में से choose करना कैसा है?',
    options: [
      { text: 'Easy, quickly decide', type: 'A' },
      { text: 'Analyze करके decide', type: 'B' },
      { text: 'बहुत confusing', type: 'C' },
      { text: 'Cannot choose', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Intuition vs logic में क्या use करते हैं?',
    options: [
      { text: 'Balance of both', type: 'A' },
      { text: 'Mostly logic', type: 'B' },
      { text: 'Mostly intuition', type: 'C' },
      { text: 'Neither works', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'दूसरों की राय decisions में कितनी role play करती है?',
    options: [
      { text: 'Consider करता हूं, decide myself', type: 'A' },
      { text: 'Important लोगों की सुनता हूं', type: 'B' },
      { text: 'बहुत ज्यादा depend करता हूं', type: 'C' },
      { text: 'दूसरे decide करें', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Small everyday decisions कैसे लेते हैं?',
    options: [
      { text: 'Quickly, no problem', type: 'A' },
      { text: 'Fairly easily', type: 'B' },
      { text: 'Even small things hard', type: 'C' },
      { text: 'Cannot decide anything', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'जब गलत decision हो तो क्या करते हैं?',
    options: [
      { text: 'Learn और move on', type: 'A' },
      { text: 'Accept करता हूं', type: 'B' },
      { text: 'बहुत देर तक soak', type: 'C' },
      { text: 'खुद को blame करता रहता हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Time pressure में decisions कैसे होती हैं?',
    options: [
      { text: 'Better, work well', type: 'A' },
      { text: 'Manage कर लेता हूं', type: 'B' },
      { text: 'Worse decisions', type: 'C' },
      { text: 'Freeze हो जाता हूं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Decision के बाद second-guessing कितनी होती है?',
    options: [
      { text: 'बहुत कम', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'हमेशा', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'अपने decisions पर कितना trust है?',
    options: [
      { text: 'बहुत', type: 'A' },
      { text: 'काफी', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall decision-making से satisfaction कैसी है?',
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
    title: 'उत्कृष्ट निर्णय क्षमता',
    emoji: '🎯',
    description: 'Excellent decision maker हैं। Confident, quick, और effective decisions लेते हैं।',
    traits: ['decisive', 'confident', 'clear-thinking'],
    weaknesses: ['sometimes too quick'],
    advice: 'Great skill! Sometimes slow down for big decisions।',
  },
  B: {
    type: 'B',
    title: 'अच्छी निर्णय क्षमता',
    emoji: '⚖️',
    description: 'Good decision-making है। Thoughtful और reasonable decisions लेते हैं।',
    traits: ['thoughtful', 'balanced', 'reasonable'],
    weaknesses: ['can be faster'],
    advice: 'Good approach! Trust yourself more।',
  },
  C: {
    type: 'C',
    title: 'कमजोर निर्णय क्षमता',
    emoji: '😰',
    description: 'Decision-making में struggle है। Indecisiveness और regret common है।',
    traits: ['indecisive', 'anxious', 'doubtful'],
    weaknesses: ['paralysis', 'missed opportunities', 'stress'],
    advice: 'Practice small decisions। Set time limits। Trust yourself।',
  },
  D: {
    type: 'D',
    title: 'गंभीर निर्णय समस्या',
    emoji: '😵',
    description: 'Severe decision-making issues हैं। यह anxiety disorder से जुड़ा हो सकता है।',
    traits: ['paralyzed', 'severe anxiety', 'cannot decide'],
    weaknesses: ['life stuck', 'mental health issues'],
    advice: 'Professional help जरूरी है। Anxiety treatment से better होगा।',
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
