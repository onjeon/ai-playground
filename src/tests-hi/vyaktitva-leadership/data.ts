// नेतृत्व क्षमता (Leadership Style)
export const questions = [
  {
    id: 1,
    text: 'group में आप naturally?',
    options: [
      { text: 'lead करता/करती हूं', type: 'A' },
      { text: 'active participant', type: 'B' },
      { text: 'support करता/करती हूं', type: 'C' },
      { text: 'follow करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'decisions लेने में?',
    options: [
      { text: 'confidently लेता/लेती हूं', type: 'A' },
      { text: 'input लेकर decide', type: 'B' },
      { text: 'दूसरों पर छोड़ता/छोड़ती हूं', type: 'C' },
      { text: 'avoid करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'responsibility के बारे में?',
    options: [
      { text: 'लेना पसंद है', type: 'A' },
      { text: 'जरूरत हो तो', type: 'B' },
      { text: 'shared responsibility better', type: 'C' },
      { text: 'avoid करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'team member गलती करे?',
    options: [
      { text: 'guide करता/करती हूं', type: 'A' },
      { text: 'बताता/बताती हूं politely', type: 'B' },
      { text: 'किसी और को बोलने देता/देती हूं', type: 'C' },
      { text: 'ignore करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'public speaking?',
    options: [
      { text: 'confident और comfortable', type: 'A' },
      { text: 'okay है, manage करता/करती हूं', type: 'B' },
      { text: 'nervous होता/होती हूं', type: 'C' },
      { text: 'avoid करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'conflict resolution?',
    options: [
      { text: 'आगे बढ़कर solve करता/करती हूं', type: 'A' },
      { text: 'help करता/करती हूं', type: 'B' },
      { text: 'दूर रहता/रहती हूं', type: 'C' },
      { text: 'पता नहीं क्या करना है', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'vision और planning?',
    options: [
      { text: 'clear vision रखता/रखती हूं', type: 'A' },
      { text: 'contribute करता/करती हूं', type: 'B' },
      { text: 'follow करता/करती हूं', type: 'C' },
      { text: 'जो बताया जाए', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'दूसरों को motivate करना?',
    options: [
      { text: 'naturally आता है', type: 'A' },
      { text: 'try करता/करती हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं आता', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'criticism handle करना?',
    options: [
      { text: 'constructively लेता/लेती हूं', type: 'A' },
      { text: 'थोड़ा difficult लेकिन manage', type: 'B' },
      { text: 'hurt होता/होती हूं', type: 'C' },
      { text: 'defensive हो जाता/जाती हूं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'leadership के बारे में feeling?',
    options: [
      { text: 'natural leader हूं', type: 'A' },
      { text: 'situational leader', type: 'B' },
      { text: 'follower better', type: 'C' },
      { text: 'leadership मेरे लिए नहीं', type: 'D' },
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
    title: 'Born Leader',
    emoji: '👑',
    description: 'आप natural leader हैं! Vision, confidence, ability to inspire - सब है आपमें!',
    traits: ['confident', 'visionary', 'decisive', 'inspiring', 'responsible'],
    weaknesses: ['कभी-कभी bossy', 'listening कम', 'delegation मुश्किल'],
    advice: 'great leader! लेकिन listen करें और delegate करें।',
  },
  B: {
    type: 'B',
    title: 'Collaborative Leader',
    emoji: '🤝',
    description: 'आप collaborative leader हैं। Team के साथ मिलकर काम, input लेकर decisions। Modern leadership!',
    traits: ['collaborative', 'inclusive', 'team-player', 'flexible', 'democratic'],
    weaknesses: ['slow decisions', 'too much consensus'],
    advice: 'great approach! कभी-कभी quick decisions भी लें।',
  },
  C: {
    type: 'C',
    title: 'Support Player',
    emoji: '🌟',
    description: 'आप supporter हैं। Leadership से ज्यादा support role comfortable है। That\'s okay!',
    traits: ['supportive', 'reliable', 'team-player', 'humble', 'helpful'],
    weaknesses: ['leadership से दूर', 'potential unutilized'],
    advice: 'support great है, लेकिन leadership skills भी develop करें।',
  },
  D: {
    type: 'D',
    title: 'Follower',
    emoji: '👥',
    description: 'Leadership आपकी चीज़ नहीं। Follow करना, execute करना better लगता है।',
    traits: ['follower', 'executor', 'comfortable in background', 'avoidant'],
    weaknesses: ['growth limited', 'dependent on others', 'confidence कम'],
    advice: 'leadership सीखी जा सकती है। Small steps से start करें।',
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
