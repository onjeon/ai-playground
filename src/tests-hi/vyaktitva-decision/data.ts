// निर्णय लेने का तरीका (Decision Making Style)
export const questions = [
  {
    id: 1,
    text: 'बड़ा decision लेते समय?',
    options: [
      { text: 'पूरा research करता/करती हूं', type: 'A' },
      { text: 'gut feeling follow करता/करती हूं', type: 'B' },
      { text: 'दूसरों से पूछता/पूछती हूं', type: 'C' },
      { text: 'जल्दी decide कर लेता/लेती हूं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'menu देखकर order करने में?',
    options: [
      { text: 'सब read करके decide', type: 'A' },
      { text: 'जो feel हो वो', type: 'B' },
      { text: 'साथ वाले क्या ले रहे', type: 'C' },
      { text: 'usual order, no thinking', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'career decision?',
    options: [
      { text: 'pros cons list', type: 'A' },
      { text: 'passion follow', type: 'B' },
      { text: 'family की राय', type: 'C' },
      { text: 'जो opportunity आए', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'wrong decision के बाद?',
    options: [
      { text: 'analyze करता/करती हूं क्या गलत हुआ', type: 'A' },
      { text: 'move on, next time better', type: 'B' },
      { text: 'regret होता है', type: 'C' },
      { text: 'quickly fix करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'shopping में decision?',
    options: [
      { text: 'compare करता/करती हूं', type: 'A' },
      { text: 'जो पसंद आया', type: 'B' },
      { text: 'साथ वाले की राय', type: 'C' },
      { text: 'जल्दी decide', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'दो अच्छे options में से?',
    options: [
      { text: 'detail में compare', type: 'A' },
      { text: 'जो heart कहे', type: 'B' },
      { text: 'कोई decide करवा दे', type: 'C' },
      { text: 'coin flip भी चलेगा', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'pressure में decision?',
    options: [
      { text: 'थोड़ा time मांगता/मांगती हूं', type: 'A' },
      { text: 'instinct से decide', type: 'B' },
      { text: 'nervous हो जाता/जाती हूं', type: 'C' },
      { text: 'जल्दी कर लेता/लेती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'regret किए decisions?',
    options: [
      { text: 'बहुत कम', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'नहीं सोचता/सोचती past के बारे में', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'group में decision making?',
    options: [
      { text: 'facilitator बनता/बनती हूं', type: 'A' },
      { text: 'अपनी राय रखता/रखती हूं', type: 'B' },
      { text: 'majority के साथ', type: 'C' },
      { text: 'lead करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'decision making strength?',
    options: [
      { text: 'thorough analysis', type: 'A' },
      { text: 'intuition', type: 'B' },
      { text: 'consensus building', type: 'C' },
      { text: 'quick action', type: 'D' },
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
    title: 'Analytical Decider',
    emoji: '🔍',
    description: 'आप data-driven decision maker हैं। Research, analysis, pros-cons - सब करते हैं। Smart approach!',
    traits: ['analytical', 'thorough', 'careful', 'informed', 'logical'],
    weaknesses: ['analysis paralysis', 'slow decisions', 'over-thinking'],
    advice: 'great approach! लेकिन कभी-कभी gut feeling भी trust करें।',
  },
  B: {
    type: 'B',
    title: 'Intuitive Decider',
    emoji: '✨',
    description: 'आप intuition से decide करते हैं। Heart follows, gut feeling trust। Often works!',
    traits: ['intuitive', 'quick', 'confident', 'instinctive', 'bold'],
    weaknesses: ['कभी-कभी गलत हो सकता है', 'justification मुश्किल'],
    advice: 'intuition अच्छी है, लेकिन big decisions में थोड़ा research भी।',
  },
  C: {
    type: 'C',
    title: 'Consensus Seeker',
    emoji: '🤝',
    description: 'आप दूसरों की राय लेकर decide करते हैं। Safe approach, लेकिन own voice कहां है?',
    traits: ['collaborative', 'cautious', 'safe', 'influenced', 'indecisive'],
    weaknesses: ['dependent on others', 'own opinion कम', 'easily influenced'],
    advice: 'अपनी आवाज़ भी है। Trust yourself more।',
  },
  D: {
    type: 'D',
    title: 'Quick Decider',
    emoji: '⚡',
    description: 'आप fast decision maker हैं। Quick, action-oriented, no overthinking। Gets things done!',
    traits: ['quick', 'action-oriented', 'confident', 'bold', 'efficient'],
    weaknesses: ['hasty decisions', 'mistakes possible', 'regret later'],
    advice: 'speed अच्छी है, लेकिन big decisions में थोड़ा pause लें।',
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
