// रसोई व्यक्तित्व (Kitchen Personality)
export const questions = [
  {
    id: 1,
    text: 'खाना बनाने में कैसे हैं?',
    options: [
      { text: 'अच्छा बनाता/बनाती हूं, पसंद है', type: 'A' },
      { text: 'basic बना लेता/लेती हूं', type: 'B' },
      { text: 'सीख रहा/रही हूं', type: 'C' },
      { text: 'नहीं बनाता/बनाती', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'recipe follow करते हैं?',
    options: [
      { text: 'अपने हिसाब से experiment', type: 'A' },
      { text: 'recipe देखकर बनाता/बनाती हूं', type: 'B' },
      { text: 'YouTube videos follow', type: 'C' },
      { text: 'someone else बनाए', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'kitchen organization?',
    options: [
      { text: 'सब organized, जगह पर', type: 'A' },
      { text: 'mostly organized', type: 'B' },
      { text: 'थोड़ा messy', type: 'C' },
      { text: 'kitchen में जाता/जाती कम हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'नई dish try करना?',
    options: [
      { text: 'हमेशा excited', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'आसान हो तो', type: 'C' },
      { text: 'order कर लेता/लेती हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'बर्तन धोने में?',
    options: [
      { text: 'तुरंत धो देता/देती हूं', type: 'A' },
      { text: 'बाद में कर लेता/लेती हूं', type: 'B' },
      { text: 'postpone करता/करती हूं', type: 'C' },
      { text: 'कोई और करे', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'grocery shopping?',
    options: [
      { text: 'list बनाकर, planned', type: 'A' },
      { text: 'जो याद आए', type: 'B' },
      { text: 'जब खत्म हो', type: 'C' },
      { text: 'online order', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'मेहमानों के लिए खाना?',
    options: [
      { text: 'special dishes बनाता/बनाती हूं', type: 'A' },
      { text: 'अच्छा बनाने की कोशिश', type: 'B' },
      { text: 'order कर लेता/लेती हूं', type: 'C' },
      { text: 'बाहर ले जाता/जाती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'comfort food?',
    options: [
      { text: 'घर का बना दाल-चावल', type: 'A' },
      { text: 'माँ के हाथ का खाना', type: 'B' },
      { text: 'Maggi या instant', type: 'C' },
      { text: 'order from favorite restaurant', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'kitchen में time?',
    options: [
      { text: 'काफी time बिताता/बिताती हूं', type: 'A' },
      { text: 'जितना जरूरी', type: 'B' },
      { text: 'कम से कम', type: 'C' },
      { text: 'almost नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'खाना बनाना क्या है?',
    options: [
      { text: 'passion और love', type: 'A' },
      { text: 'जरूरी काम', type: 'B' },
      { text: 'मजबूरी', type: 'C' },
      { text: 'not my thing', type: 'D' },
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
    title: 'Master Chef',
    emoji: '👨‍🍳',
    description: 'आप kitchen के राजा/रानी हैं! Cooking passion है, experiments करते हैं, सब तारीफ करते हैं!',
    traits: ['skilled', 'passionate', 'creative', 'organized', 'nurturing'],
    weaknesses: ['time consuming', 'perfectionist'],
    advice: 'amazing talent! Share करें और teach करें दूसरों को।',
  },
  B: {
    type: 'B',
    title: 'Practical Cook',
    emoji: '🍳',
    description: 'आप practical cook हैं। जरूरत का बना लेते हैं, अच्छा बनाते हैं। Balanced approach!',
    traits: ['practical', 'capable', 'moderate', 'sensible', 'self-sufficient'],
    weaknesses: ['experiments कम', 'variety limited'],
    advice: 'good skills! कभी-कभी नई dishes try करें।',
  },
  C: {
    type: 'C',
    title: 'Survival Cook',
    emoji: '🍜',
    description: 'आप survival mode में cook करते हैं। Basic बना लेते हैं, passion नहीं है।',
    traits: ['basic', 'learning', 'trying', 'dependent'],
    weaknesses: ['skills limited', 'variety कम'],
    advice: 'cooking सीखें! Life skill है, काम आएगी।',
  },
  D: {
    type: 'D',
    title: 'Kitchen Avoider',
    emoji: '📱',
    description: 'Kitchen आपकी जगह नहीं। Zomato और Swiggy best friends हैं। Modern solution!',
    traits: ['modern', 'busy', 'outsourcing expert', 'convenience-lover'],
    weaknesses: ['dependent on others', 'expensive', 'health concerns'],
    advice: 'basic cooking सीखें। Health और pocket दोनों के लिए better है।',
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
