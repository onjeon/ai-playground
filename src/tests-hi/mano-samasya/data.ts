export const questions = [
  {
    id: 1,
    text: 'Problems आने पर कैसे react करते हैं?',
    options: [
      { text: 'Calm, solution mode', type: 'A' },
      { text: 'थोड़ा stressed, फिर solve', type: 'B' },
      { text: 'Panic', type: 'C' },
      { text: 'Overwhelmed, shutdown', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Problem-solving approach कैसा है?',
    options: [
      { text: 'Systematic और effective', type: 'A' },
      { text: 'Try different things', type: 'B' },
      { text: 'Random', type: 'C' },
      { text: 'No approach, stuck', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Complex problems को कैसे handle करते हैं?',
    options: [
      { text: 'Break down और solve', type: 'A' },
      { text: 'Step by step', type: 'B' },
      { text: 'Struggle', type: 'C' },
      { text: 'Cannot handle', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Problem को opportunity के रूप में देखते हैं?',
    options: [
      { text: 'हां, growth का chance', type: 'A' },
      { text: 'Sometimes', type: 'B' },
      { text: 'Rarely', type: 'C' },
      { text: 'Never, बस problem है', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Help मांगने में कैसे हैं जब stuck हों?',
    options: [
      { text: 'Easily, smart है help लेना', type: 'A' },
      { text: 'जब जरूरी हो', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं मांगता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Creative solutions सोच पाते हैं?',
    options: [
      { text: 'हां, out of box', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Standard solutions only', type: 'C' },
      { text: 'Solutions नहीं आती', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Problem से avoid करने की tendency है?',
    options: [
      { text: 'नहीं, face करता हूं', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर avoid', type: 'C' },
      { text: 'हमेशा avoid', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Resources और tools effectively use करते हैं?',
    options: [
      { text: 'हां, efficiently', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Not well', type: 'C' },
      { text: 'क्या resources?', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Persistence कैसी है problems में?',
    options: [
      { text: 'High, don\'t give up', type: 'A' },
      { text: 'Good', type: 'B' },
      { text: 'Give up quickly', type: 'C' },
      { text: 'Immediately give up', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Past problems से learn करते हैं?',
    options: [
      { text: 'हां, analyze और improve', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'Same mistakes repeat', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Team के साथ problem-solve करना कैसा है?',
    options: [
      { text: 'Better together', type: 'A' },
      { text: 'Good', type: 'B' },
      { text: 'Prefer alone', type: 'C' },
      { text: 'Cannot collaborate', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall problem-solving से satisfaction कैसी है?',
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
    title: 'उत्कृष्ट समस्या समाधान',
    emoji: '🧩',
    description: 'Excellent problem solver हैं। Calm, systematic, और creative solutions निकालते हैं।',
    traits: ['problem solver', 'calm', 'systematic', 'persistent'],
    weaknesses: ['may take on too much'],
    advice: 'Great skill! Delegate when needed।',
  },
  B: {
    type: 'B',
    title: 'अच्छा समस्या समाधान',
    emoji: '💡',
    description: 'Good problem-solving skills हैं। ज्यादातर problems handle कर लेते हैं।',
    traits: ['capable', 'trying', 'resourceful'],
    weaknesses: ['can improve'],
    advice: 'Keep practicing। Learn new frameworks।',
  },
  C: {
    type: 'C',
    title: 'कमजोर समस्या समाधान',
    emoji: '😰',
    description: 'Problem-solving में struggle है। Avoid या panic tendency है।',
    traits: ['struggling', 'avoiding', 'panicking'],
    weaknesses: ['problems pile up', 'stress'],
    advice: 'Problem-solving frameworks सीखें। Small problems से practice करें।',
  },
  D: {
    type: 'D',
    title: 'गंभीर समस्या समाधान कमी',
    emoji: '😵',
    description: 'Problem-solving में severe issues हैं। Problems overwhelming लगती हैं।',
    traits: ['helpless', 'overwhelmed', 'stuck'],
    weaknesses: ['life problems accumulating'],
    advice: 'Help लें। Coach या therapist problems tackle करने में help करेंगे।',
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
