export const questions = [
  {
    id: 1,
    text: 'Failure के बारे में आप क्या सोचते हैं?',
    options: [
      { text: 'सीखने का मौका', type: 'A' },
      { text: 'Part of life', type: 'B' },
      { text: 'बहुत बुरा है', type: 'C' },
      { text: 'सब कुछ खत्म', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'जब fail होते हैं तो कैसा feel करते हैं?',
    options: [
      { text: 'ठीक है, next try', type: 'A' },
      { text: 'थोड़ा बुरा, फिर उठता हूं', type: 'B' },
      { text: 'बहुत बुरा लगता है', type: 'C' },
      { text: 'टूट जाता हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Failure के बाद फिर try करने में कितना time लगता है?',
    options: [
      { text: 'जल्दी, तुरंत फिर से', type: 'A' },
      { text: 'थोड़ा time लेकर', type: 'B' },
      { text: 'बहुत time लगता है', type: 'C' },
      { text: 'फिर try नहीं करता', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Failure को किसे attribute करते हैं?',
    options: [
      { text: 'Learnable factors को', type: 'A' },
      { text: 'Mix of factors', type: 'B' },
      { text: 'खुद को, मैं बेकार हूं', type: 'C' },
      { text: 'मेरी किस्मत खराब है', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Past failures को कैसे देखते हैं?',
    options: [
      { text: 'जिनसे सीखा', type: 'A' },
      { text: 'जो हुआ', type: 'B' },
      { text: 'जो haunt करते हैं', type: 'C' },
      { text: 'जो define करते हैं मुझे', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Failure के डर से कितना रुकते हैं?',
    options: [
      { text: 'नहीं रुकता', type: 'A' },
      { text: 'थोड़ा cautious रहता हूं', type: 'B' },
      { text: 'बहुत रुक जाता हूं', type: 'C' },
      { text: 'Try ही नहीं करता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'जब दूसरे fail हों तो क्या सोचते हैं?',
    options: [
      { text: 'वो सीखेंगे, ठीक होगा', type: 'A' },
      { text: 'बुरा लगता है उनके लिए', type: 'B' },
      { text: 'उनकी गलती है', type: 'C' },
      { text: 'मुझे भी ऐसा होगा', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Failure की stories share करने में कैसे हैं?',
    options: [
      { text: 'Openly share करता हूं', type: 'A' },
      { text: 'Close ones के साथ', type: 'B' },
      { text: 'छुपाता हूं', type: 'C' },
      { text: 'बहुत shame है', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Failure से क्या सीखते हैं?',
    options: [
      { text: 'बहुत कुछ, analyze करता हूं', type: 'A' },
      { text: 'कुछ न कुछ', type: 'B' },
      { text: 'कुछ नहीं, बस दर्द', type: 'C' },
      { text: 'कि मुझसे नहीं होगा', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Failure के बाद self-talk कैसी है?',
    options: [
      { text: 'Encouraging, next time better', type: 'A' },
      { text: 'Okay, move on', type: 'B' },
      { text: 'Critical, I am stupid', type: 'C' },
      { text: 'Very harsh, I hate myself', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'जब risk का failure chance हो तो क्या करते हैं?',
    options: [
      { text: 'Take it anyway', type: 'A' },
      { text: 'Evaluate करके decide', type: 'B' },
      { text: 'Avoid करता हूं', type: 'C' },
      { text: 'बिल्कुल नहीं लेता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Failure से आपका overall relationship कैसा है?',
    options: [
      { text: 'Healthy, part of growth', type: 'A' },
      { text: 'Okay, deal with it', type: 'B' },
      { text: 'Unhealthy, fear it', type: 'C' },
      { text: 'Toxic, defines me', type: 'D' },
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
    title: 'स्वस्थ असफलता दृष्टिकोण',
    emoji: '💪',
    description: 'आपका failure के प्रति approach बहुत healthy है। आप failure से सीखते हैं और आगे बढ़ते हैं।',
    traits: ['resilient', 'growth mindset', 'learner', 'brave'],
    weaknesses: ['कभी-कभी overconfident'],
    advice: 'अपना approach बनाए रखें। यह सबसे important skill है।',
  },
  B: {
    type: 'B',
    title: 'सामान्य असफलता दृष्टिकोण',
    emoji: '😊',
    description: 'आप failure को handle कर लेते हैं। थोड़ा बुरा लगता है लेकिन recover कर लेते हैं।',
    traits: ['normal', 'recovers', 'learns'],
    weaknesses: ['recovery में थोड़ा time लगता है'],
    advice: 'Failure को और positively देखें। Growth mindset develop करें।',
  },
  C: {
    type: 'C',
    title: 'Unhealthy असफलता दृष्टिकोण',
    emoji: '😟',
    description: 'Failure आपको बहुत affect करता है। डर और shame associated है।',
    traits: ['fear of failure', 'self-critical', 'avoidant'],
    weaknesses: ['plays safe', 'no growth', 'self-esteem issues'],
    advice: 'Failure को reframe करें। हर successful person failed है। Self-compassion सीखें।',
  },
  D: {
    type: 'D',
    title: 'Toxic असफलता दृष्टिकोण',
    emoji: '💔',
    description: 'Failure आपकी identity बन गई है। यह बहुत harmful है और change करना जरूरी है।',
    traits: ['defined by failure', 'hopeless', 'paralyzed'],
    weaknesses: ['no action', 'depression risk', 'wasted potential'],
    advice: 'Professional help लें। यह treatable है। आप failure नहीं हैं। Therapy बहुत helpful होगी।',
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
