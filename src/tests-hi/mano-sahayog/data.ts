export const questions = [
  {
    id: 1,
    text: 'Team में काम करना कैसा लगता है?',
    options: [
      { text: 'Love it, better together', type: 'A' },
      { text: 'अच्छा लगता है', type: 'B' },
      { text: 'ठीक-ठाक', type: 'C' },
      { text: 'अकेले better', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'दूसरों की मदद करने में कैसे हैं?',
    options: [
      { text: 'Always ready, love helping', type: 'A' },
      { text: 'Help करता हूं', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'अपना काम पहले', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Help मांगने में कैसे हैं?',
    options: [
      { text: 'Comfortable, जब जरूरी', type: 'A' },
      { text: 'मांग लेता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं मांगता', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Group projects में कैसे contribute करते हैं?',
    options: [
      { text: 'Active participant', type: 'A' },
      { text: 'अपना part करता हूं', type: 'B' },
      { text: 'Minimal', type: 'C' },
      { text: 'Avoid करता हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Sharing और collaboration में कैसे हैं?',
    options: [
      { text: 'बहुत open', type: 'A' },
      { text: 'Share करता हूं', type: 'B' },
      { text: 'थोड़ा hesitant', type: 'C' },
      { text: 'नहीं share करता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'दूसरों की success पर कैसे react करते हैं?',
    options: [
      { text: 'Genuinely happy', type: 'A' },
      { text: 'Happy', type: 'B' },
      { text: 'Mixed feelings', type: 'C' },
      { text: 'Jealous', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Credit share करने में कैसे हैं?',
    options: [
      { text: 'Happily share', type: 'A' },
      { text: 'Fair share', type: 'B' },
      { text: 'अपना credit चाहता हूं', type: 'C' },
      { text: 'सारा credit अपना', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Different opinions के साथ कैसे deal करते हैं?',
    options: [
      { text: 'Welcome, learn from them', type: 'A' },
      { text: 'Consider करता हूं', type: 'B' },
      { text: 'थोड़ा defensive', type: 'C' },
      { text: 'मेरी बात सही', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Compromise करने में कैसे हैं?',
    options: [
      { text: 'Easy, for greater good', type: 'A' },
      { text: 'कर सकता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Team की problems में help करते हैं?',
    options: [
      { text: 'हां, actively', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'अपनी problems पहले', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Teamwork skills कैसी हैं?',
    options: [
      { text: 'Excellent', type: 'A' },
      { text: 'Good', type: 'B' },
      { text: 'Average', type: 'C' },
      { text: 'Poor', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'अपने आप को कितना cooperative मानते हैं?',
    options: [
      { text: 'बहुत cooperative', type: 'A' },
      { text: 'Cooperative', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं', type: 'D' },
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
    title: 'उत्कृष्ट सहयोग',
    emoji: '🤝',
    description: 'Excellent team player हैं। Collaboration, helping, और cooperation में strong हैं।',
    traits: ['team player', 'helpful', 'collaborative', 'generous'],
    weaknesses: ['may neglect own needs'],
    advice: 'Great! अपना भी ख्याल रखें।',
  },
  B: {
    type: 'B',
    title: 'अच्छा सहयोग',
    emoji: '👫',
    description: 'Good team player हैं। Cooperative और helpful हैं।',
    traits: ['cooperative', 'team-oriented', 'helpful'],
    weaknesses: ['can improve more'],
    advice: 'Good work! More proactive help try करें।',
  },
  C: {
    type: 'C',
    title: 'सामान्य सहयोग',
    emoji: '😐',
    description: 'Cooperation average है। More independent तरीके से काम करते हैं।',
    traits: ['independent', 'selective help', 'self-focused'],
    weaknesses: ['missing collaboration benefits'],
    advice: 'Teamwork से बहुत कुछ achieve होता है। More open हों।',
  },
  D: {
    type: 'D',
    title: 'कम सहयोग',
    emoji: '🏃',
    description: 'Cooperation में struggle है। Prefer solo work।',
    traits: ['independent', 'self-reliant', 'not team-oriented'],
    weaknesses: ['limited success', 'isolation'],
    advice: 'Nobody succeeds alone। Small collaborations से शुरू करें।',
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
