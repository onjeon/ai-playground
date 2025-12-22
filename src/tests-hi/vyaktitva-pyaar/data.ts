// प्यार का अंदाज (Love Style)
export const questions = [
  {
    id: 1,
    text: 'प्यार में आप कैसे हैं?',
    options: [
      { text: 'पूरा समर्पित', type: 'A' },
      { text: 'romantic और expressive', type: 'B' },
      { text: 'practical और stable', type: 'C' },
      { text: 'independent लेकिन caring', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'partner में सबसे पहले क्या देखते हैं?',
    options: [
      { text: 'दिल की अच्छाई', type: 'A' },
      { text: 'chemistry और attraction', type: 'B' },
      { text: 'compatibility और values', type: 'C' },
      { text: 'intelligence और ambition', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'प्यार जताने का तरीका?',
    options: [
      { text: 'actions से, care करके', type: 'A' },
      { text: 'words और gestures से', type: 'B' },
      { text: 'reliable और supportive होकर', type: 'C' },
      { text: 'respect और space देकर', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'relationship में conflict हो तो?',
    options: [
      { text: 'खुद को बदल लेता/लेती हूं', type: 'A' },
      { text: 'बात करके solve', type: 'B' },
      { text: 'logically handle', type: 'C' },
      { text: 'space लेता/लेती हूं फिर बात', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'ideal date कैसी होनी चाहिए?',
    options: [
      { text: 'quality time साथ में', type: 'A' },
      { text: 'romantic dinner और surprises', type: 'B' },
      { text: 'meaningful conversation', type: 'C' },
      { text: 'adventure और something new', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'jealousy के बारे में?',
    options: [
      { text: 'हां, protective हूं', type: 'A' },
      { text: 'थोड़ी jealousy natural है', type: 'B' },
      { text: 'trust करता/करती हूं, नहीं होती', type: 'C' },
      { text: 'independence believe करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'partner के लिए sacrifice?',
    options: [
      { text: 'कुछ भी कर सकता/सकती हूं', type: 'A' },
      { text: 'जरूरत हो तो करता/करती हूं', type: 'B' },
      { text: 'reasonable limits में', type: 'C' },
      { text: 'mutual होना चाहिए', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'love language क्या है?',
    options: [
      { text: 'acts of service', type: 'A' },
      { text: 'words of affirmation', type: 'B' },
      { text: 'quality time', type: 'C' },
      { text: 'physical touch', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'breakup को कैसे handle करते हैं?',
    options: [
      { text: 'बहुत hurt होता/होती हूं', type: 'A' },
      { text: 'emotional होता/होती हूं लेकिन recover', type: 'B' },
      { text: 'practically handle करता/करती हूं', type: 'C' },
      { text: 'move on करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'प्यार में सबसे important क्या है?',
    options: [
      { text: 'loyalty और commitment', type: 'A' },
      { text: 'romance और passion', type: 'B' },
      { text: 'understanding और respect', type: 'C' },
      { text: 'freedom और growth', type: 'D' },
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
    title: 'समर्पित प्रेमी',
    emoji: '💖',
    description: 'आप प्यार में पूरा डूब जाते हैं। Partner की खुशी आपकी खुशी है। आप सच्चे और devoted lover हैं।',
    traits: ['devoted', 'caring', 'selfless', 'loyal', 'emotional'],
    weaknesses: ['खुद को खो देते हैं', 'dependent हो जाते हैं', 'hurt easily'],
    advice: 'प्यार में भी खुद की identity बनाए रखें!',
  },
  B: {
    type: 'B',
    title: 'रोमांटिक दिल',
    emoji: '🌹',
    description: 'आप true romantic हैं! Surprises, gestures, expressions - प्यार को जताना जानते हैं। Love story worthy!',
    traits: ['romantic', 'expressive', 'passionate', 'creative', 'emotional'],
    weaknesses: ['expectations high', 'reality vs fantasy clash', 'dramatic कभी-कभी'],
    advice: 'romance अच्छी है, practical aspects भी देखें!',
  },
  C: {
    type: 'C',
    title: 'Practical Partner',
    emoji: '🤝',
    description: 'आप mature और stable lover हैं। Drama नहीं, practical प्यार - जो टिकता है और grow होता है।',
    traits: ['stable', 'mature', 'reliable', 'understanding', 'supportive'],
    weaknesses: ['romance कम', 'boring लग सकते हैं', 'emotions express नहीं करते'],
    advice: 'कभी-कभी romantic gestures भी करें!',
  },
  D: {
    type: 'D',
    title: 'स्वतंत्र प्रेमी',
    emoji: '🦋',
    description: 'आप independent lover हैं। प्यार में भी individual identity important है। Space और growth - दोनों चाहिए।',
    traits: ['independent', 'respectful', 'growth-oriented', 'balanced', 'modern'],
    weaknesses: ['emotionally distant लग सकते हैं', 'commitment से डर', 'too detached'],
    advice: 'independence अच्छी है, लेकिन vulnerability भी जरूरी है प्यार में!',
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
