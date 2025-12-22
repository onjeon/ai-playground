export const questions = [
  {
    id: 1,
    text: 'आपका room/desk कितना organized है?',
    options: [
      { text: 'बहुत organized, सब जगह पर', type: 'A' },
      { text: 'काफी organized', type: 'B' },
      { text: 'थोड़ा messy', type: 'C' },
      { text: 'बहुत messy', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Time management में आप कैसे हैं?',
    options: [
      { text: 'Excellent, always on time', type: 'A' },
      { text: 'अच्छा हूं', type: 'B' },
      { text: 'Struggle करता हूं', type: 'C' },
      { text: 'Very poor', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Planning करने में आप कैसे हैं?',
    options: [
      { text: 'Detailed plans बनाता हूं', type: 'A' },
      { text: 'Basic planning करता हूं', type: 'B' },
      { text: 'कम planning', type: 'C' },
      { text: 'No planning, just go', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Deadlines के साथ आप कैसे हैं?',
    options: [
      { text: 'Always before deadline', type: 'A' },
      { text: 'On time', type: 'B' },
      { text: 'Last minute', type: 'C' },
      { text: 'Often miss', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'To-do lists use करते हैं?',
    options: [
      { text: 'हां, regularly', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Finances manage करने में कैसे हैं?',
    options: [
      { text: 'Budget है, track करता हूं', type: 'A' },
      { text: 'कुछ हद तक manage करता हूं', type: 'B' },
      { text: 'Struggle करता हूं', type: 'C' },
      { text: 'No idea कहां जाता है पैसा', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Multiple tasks handle करने में कैसे हैं?',
    options: [
      { text: 'Systematic तरीके से', type: 'A' },
      { text: 'Manage कर लेता हूं', type: 'B' },
      { text: 'Overwhelmed हो जाता हूं', type: 'C' },
      { text: 'Handle नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Emails/messages respond करने में कैसे हैं?',
    options: [
      { text: 'Promptly, organized inbox', type: 'A' },
      { text: 'जल्दी reply करता हूं', type: 'B' },
      { text: 'Often delay', type: 'C' },
      { text: 'Messy, miss many', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Routine follow करने में कैसे हैं?',
    options: [
      { text: 'Very disciplined routine', type: 'A' },
      { text: 'कुछ हद तक routine है', type: 'B' },
      { text: 'Irregular', type: 'C' },
      { text: 'No routine', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Important documents/things कहां रखते हैं?',
    options: [
      { text: 'Specific organized place', type: 'A' },
      { text: 'Generally जानता हूं कहां है', type: 'B' },
      { text: 'Often ढूंढना पड़ता है', type: 'C' },
      { text: 'हमेशा खो जाते हैं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Appointments याद रखने में कैसे हैं?',
    options: [
      { text: 'Calendar use करता हूं, never miss', type: 'A' },
      { text: 'ज्यादातर याद रहता है', type: 'B' },
      { text: 'कभी-कभी भूल जाता हूं', type: 'C' },
      { text: 'अक्सर भूल जाता हूं', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'आप खुद को कितना organized मानते हैं?',
    options: [
      { text: 'बहुत organized', type: 'A' },
      { text: 'काफी', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
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
    title: 'उत्कृष्ट व्यवस्था',
    emoji: '📋',
    description: 'आप बहुत organized हैं। Planning, time management, और systems सब excellent हैं।',
    traits: ['organized', 'systematic', 'reliable', 'efficient'],
    weaknesses: ['rigid हो सकते हैं', 'spontaneity कम'],
    advice: 'Flexibility भी important है। कभी-कभी spontaneous होना ठीक है।',
  },
  B: {
    type: 'B',
    title: 'अच्छी व्यवस्था',
    emoji: '✅',
    description: 'आप काफी organized हैं। ज्यादातर चीजें manage हो जाती हैं।',
    traits: ['fairly organized', 'functional', 'reliable'],
    weaknesses: ['कभी-कभी slip होता है'],
    advice: 'Systems और better करें। Tools use करें।',
  },
  C: {
    type: 'C',
    title: 'कम व्यवस्थित',
    emoji: '😅',
    description: 'आप organization में struggle करते हैं। Chaos थोड़ा ज्यादा है।',
    traits: ['disorganized', 'spontaneous', 'forgetful'],
    weaknesses: ['stress', 'missed deadlines', 'inefficient'],
    advice: 'Small habits से शुरू करें। One system at a time। Apps/tools use करें।',
  },
  D: {
    type: 'D',
    title: 'बहुत कम व्यवस्थित',
    emoji: '🌀',
    description: 'आप बहुत disorganized हैं। यह life को difficult बना रहा है।',
    traits: ['very disorganized', 'chaotic', 'unreliable'],
    weaknesses: ['constant stress', 'problems everywhere', 'reputation'],
    advice: 'Professional help लें। ADHD check करवाएं। Minimal system से शुरू करें।',
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
