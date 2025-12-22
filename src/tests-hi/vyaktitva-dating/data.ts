// डेटिंग स्टाइल (Dating Style)
export const questions = [
  {
    id: 1,
    text: 'first date कहां?',
    options: [
      { text: 'café या restaurant', type: 'A' },
      { text: 'movie या activity', type: 'B' },
      { text: 'unique experience', type: 'C' },
      { text: 'घर पर', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'conversation पर?',
    options: [
      { text: 'deep talks पसंद हैं', type: 'A' },
      { text: 'fun और light', type: 'B' },
      { text: 'adventurous stories', type: 'C' },
      { text: 'awkward रहता है', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'who pays?',
    options: [
      { text: 'split करते हैं', type: 'A' },
      { text: 'मैं pay करता/करती हूं', type: 'B' },
      { text: 'depends on situation', type: 'C' },
      { text: 'whoever asked', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'date के बाद text?',
    options: [
      { text: 'same day, honest feedback', type: 'A' },
      { text: 'अगले दिन', type: 'B' },
      { text: 'wait करता/करती हूं उनका', type: 'C' },
      { text: 'games खेलता/खेलती हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'interest कैसे show करते हैं?',
    options: [
      { text: 'directly बोल देता/देती हूं', type: 'A' },
      { text: 'actions से', type: 'B' },
      { text: 'flirting', type: 'C' },
      { text: 'subtle hints', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'rejection handle करना?',
    options: [
      { text: 'gracefully accept', type: 'A' },
      { text: 'थोड़ा hurt लेकिन move on', type: 'B' },
      { text: 'बहुत hurt', type: 'C' },
      { text: 'angry या bitter', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'dating apps?',
    options: [
      { text: 'use करता/करती हूं seriously', type: 'A' },
      { text: 'casual use', type: 'B' },
      { text: 'tried but not for me', type: 'C' },
      { text: 'नहीं use करता/करती', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'physical appearance importance?',
    options: [
      { text: 'connection ज्यादा important', type: 'A' },
      { text: 'matters लेकिन not everything', type: 'B' },
      { text: 'बहुत important', type: 'C' },
      { text: 'first priority', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'dating goals?',
    options: [
      { text: 'serious relationship', type: 'A' },
      { text: 'देखते हैं कहां जाता है', type: 'B' },
      { text: 'fun और exploration', type: 'C' },
      { text: 'casual', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'date पर nervous?',
    options: [
      { text: 'नहीं, confident', type: 'A' },
      { text: 'थोड़ा', type: 'B' },
      { text: 'बहुत nervous', type: 'C' },
      { text: 'avoid करता/करती हूं dates', type: 'D' },
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
    title: 'Mature Dater',
    emoji: '💑',
    description: 'आप mature और serious dater हैं। Connection चाहिए, games नहीं। Relationship-oriented!',
    traits: ['mature', 'honest', 'serious', 'direct', 'respectful'],
    weaknesses: ['too serious कभी-कभी', 'fun miss'],
    advice: 'great approach! थोड़ा light-hearted भी रहें।',
  },
  B: {
    type: 'B',
    title: 'Balanced Dater',
    emoji: '🌹',
    description: 'आप balanced dater हैं। Fun भी, potential भी देखते हैं। Good approach!',
    traits: ['balanced', 'fun', 'open', 'flexible', 'social'],
    weaknesses: ['indecisive कभी-कभी'],
    advice: 'good balance! बस clear रहें अपनी intentions में।',
  },
  C: {
    type: 'C',
    title: 'Fun Seeker',
    emoji: '🎉',
    description: 'Dating आपके लिए fun है। Experiences, adventures, new people। Living the moment!',
    traits: ['fun-loving', 'adventurous', 'social', 'exciting', 'spontaneous'],
    weaknesses: ['commitment issues', 'shallow connections'],
    advice: 'fun great है! लेकिन deeper connections भी explore करें।',
  },
  D: {
    type: 'D',
    title: 'Hesitant Dater',
    emoji: '🙈',
    description: 'Dating आपके लिए uncomfortable है। Nervous, awkward, avoiding। It\'s okay!',
    traits: ['shy', 'nervous', 'cautious', 'introverted', 'hesitant'],
    weaknesses: ['missing out', 'loneliness', 'fear-driven'],
    advice: 'take it slow। Dating scary नहीं है, practice से better होता है।',
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
