// पढ़ाई का अंदाज (Study Style)
export const questions = [
  {
    id: 1,
    text: 'पढ़ाई करने का best time?',
    options: [
      { text: 'सुबह जल्दी', type: 'A' },
      { text: 'दोपहर में', type: 'B' },
      { text: 'रात को', type: 'C' },
      { text: 'जब mood हो', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'पढ़ाई का style?',
    options: [
      { text: 'notes बनाकर, organized', type: 'A' },
      { text: 'textbook पढ़ना', type: 'B' },
      { text: 'videos और online', type: 'C' },
      { text: 'रटना है बस', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'exam से पहले?',
    options: [
      { text: 'पहले से prepared रहता/रहती हूं', type: 'A' },
      { text: 'एक हफ्ते पहले से start', type: 'B' },
      { text: 'last minute पढ़ाई', type: 'C' },
      { text: 'जितना हो उतना', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'group study के बारे में?',
    options: [
      { text: 'alone better है', type: 'A' },
      { text: 'कभी-कभी helpful', type: 'B' },
      { text: 'group में ही पढ़ता/पढ़ती हूं', type: 'C' },
      { text: 'gossip हो जाती है', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'पढ़ते समय distraction?',
    options: [
      { text: 'phone off, full focus', type: 'A' },
      { text: 'थोड़ा-थोड़ा check कर लेता/लेती हूं', type: 'B' },
      { text: 'multi-tasking', type: 'C' },
      { text: 'distraction ही distraction', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'difficult topic समझ न आए तो?',
    options: [
      { text: 'खुद research करता/करती हूं', type: 'A' },
      { text: 'teacher से पूछता/पूछती हूं', type: 'B' },
      { text: 'YouTube पर देखता/देखती हूं', type: 'C' },
      { text: 'छोड़ देता/देती हूं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'marks के बारे में?',
    options: [
      { text: 'top marks चाहिए', type: 'A' },
      { text: 'अच्छे marks sufficient', type: 'B' },
      { text: 'pass होना जरूरी', type: 'C' },
      { text: 'marks matter नहीं करते', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'new subject सीखने में?',
    options: [
      { text: 'excited रहता/रहती हूं', type: 'A' },
      { text: 'interest हो तो', type: 'B' },
      { text: 'जरूरत हो तो', type: 'C' },
      { text: 'boring लगता है', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'tuition/coaching के बारे में?',
    options: [
      { text: 'self-study better', type: 'A' },
      { text: 'helpful होती है', type: 'B' },
      { text: 'जरूरी है', type: 'C' },
      { text: 'वहां भी नहीं पढ़ता/पढ़ती', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'education का purpose?',
    options: [
      { text: 'knowledge और growth', type: 'A' },
      { text: 'career और job', type: 'B' },
      { text: 'degree लेना है', type: 'C' },
      { text: 'force है, करना है', type: 'D' },
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
    title: 'Scholar Type',
    emoji: '📚',
    description: 'आप सच्चे student हैं! Knowledge की भूख, organized approach, top performer - आप future topper हैं!',
    traits: ['dedicated', 'organized', 'curious', 'disciplined', 'ambitious'],
    weaknesses: ['perfectionist', 'stress लेते हैं', 'fun miss'],
    advice: 'great approach! लेकिन कभी-कभी relax भी करें।',
  },
  B: {
    type: 'B',
    title: 'Balanced Student',
    emoji: '⚖️',
    description: 'आप balanced student हैं। पढ़ाई भी, life भी। Good grades, practical approach!',
    traits: ['balanced', 'practical', 'moderate', 'smart', 'adaptable'],
    weaknesses: ['excellence के लिए थोड़ा और push needed'],
    advice: 'good balance! थोड़ा और effort लगाएं better results के लिए।',
  },
  C: {
    type: 'C',
    title: 'Last Minute Hero',
    emoji: '⚡',
    description: 'आप pressure में perform करते हैं! Last minute पढ़ाई, somehow manage। Stressful लेकिन काम चल जाता है!',
    traits: ['pressure performer', 'smart', 'quick learner', 'adaptable'],
    weaknesses: ['stress high', 'deep learning नहीं', 'risky approach'],
    advice: 'थोड़ा पहले start करें, बेहतर results और कम stress!',
  },
  D: {
    type: 'D',
    title: 'Reluctant Learner',
    emoji: '😅',
    description: 'पढ़ाई आपकी priority नहीं है। Bored होते हैं, distracted रहते हैं। लेकिन potential है!',
    traits: ['honest', 'creative elsewhere', 'free-spirited'],
    weaknesses: ['grades suffer', 'future options limited', 'discipline कम'],
    advice: 'अपना interest ढूंढें। पढ़ाई boring है लेकिन skills जरूरी हैं!',
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
