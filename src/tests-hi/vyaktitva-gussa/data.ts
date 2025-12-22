// गुस्से का पैटर्न (Anger Pattern)
export const questions = [
  {
    id: 1,
    text: 'कोई आपकी बात न माने तो?',
    options: [
      { text: 'शांति से समझाता/समझाती हूं', type: 'A' },
      { text: 'थोड़ा irritate होता/होती हूं', type: 'B' },
      { text: 'गुस्सा आ जाता है', type: 'C' },
      { text: 'छोड़ देता/देती हूं, argue नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'traffic में फंसने पर?',
    options: [
      { text: 'music सुनता/सुनती हूं, relax', type: 'A' },
      { text: 'थोड़ा frustrated', type: 'B' },
      { text: 'horn बजाता/बजाती हूं, irritate', type: 'C' },
      { text: 'accept कर लेता/लेती हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'गुस्सा आने पर क्या करते हैं?',
    options: [
      { text: 'deep breath, control', type: 'A' },
      { text: 'थोड़ी देर में शांत', type: 'B' },
      { text: 'बोल देता/देती हूं जो मन में है', type: 'C' },
      { text: 'अंदर ही रखता/रखती हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'कोई insult करे तो?',
    options: [
      { text: 'ignore करता/करती हूं', type: 'A' },
      { text: 'बाद में सोचता/सोचती हूं', type: 'B' },
      { text: 'तुरंत जवाब देता/देती हूं', type: 'C' },
      { text: 'hurt होता/होती हूं, express नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'गुस्सा कितनी देर रहता है?',
    options: [
      { text: 'कुछ minutes, जल्दी भूल जाता/जाती हूं', type: 'A' },
      { text: 'कुछ घंटे', type: 'B' },
      { text: 'दिनों तक याद रहता है', type: 'C' },
      { text: 'suppress करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'गुस्से में कभी कुछ तोड़ा है?',
    options: [
      { text: 'कभी नहीं', type: 'A' },
      { text: 'बचपन में शायद', type: 'B' },
      { text: 'हां, कभी-कभी', type: 'C' },
      { text: 'नहीं, अंदर रखता/रखती हूं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'परिवार में झगड़ा होने पर?',
    options: [
      { text: 'बीच-बचाव करता/करती हूं', type: 'A' },
      { text: 'दूर रहता/रहती हूं', type: 'B' },
      { text: 'involve हो जाता/जाती हूं', type: 'C' },
      { text: 'बाद में बात करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'गुस्सा उतारने का तरीका?',
    options: [
      { text: 'exercise या walk', type: 'A' },
      { text: 'किसी से बात करना', type: 'B' },
      { text: 'चिल्लाना या बोलना', type: 'C' },
      { text: 'अकेले रहना', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'छोटी-छोटी बातों पर गुस्सा?',
    options: [
      { text: 'नहीं आता', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'हां, easily irritate', type: 'C' },
      { text: 'बाहर नहीं दिखाता/दिखाती', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'गुस्से के बाद माफी?',
    options: [
      { text: 'तुरंत sorry बोल देता/देती हूं', type: 'A' },
      { text: 'थोड़ी देर में', type: 'B' },
      { text: 'ego आड़े आता है', type: 'C' },
      { text: 'दूसरे को करने देता/देती हूं', type: 'D' },
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
    title: 'शांत समुद्र',
    emoji: '🧘',
    description: 'आप गुस्से पर excellent control रखते हैं! शांत, composed और mature - आप दूसरों के लिए example हैं।',
    traits: ['शांत', 'controlled', 'mature', 'patient', 'wise'],
    weaknesses: ['कभी-कभी too passive', 'feelings bottle up'],
    advice: 'शांत रहना अच्छा है, लेकिन जरूरत पर आवाज भी उठाएं!',
  },
  B: {
    type: 'B',
    title: 'सामान्य मिजाज़',
    emoji: '😊',
    description: 'आप normal anger pattern रखते हैं। थोड़ा irritate होते हैं, थोड़ी देर में ठीक - balanced approach!',
    traits: ['balanced', 'normal', 'expressive', 'forgiving', 'adaptable'],
    weaknesses: ['mood swings', 'कभी-कभी inconsistent'],
    advice: 'अच्छा balance है, बस triggers पहचानें और manage करें!',
  },
  C: {
    type: 'C',
    title: 'तेज़ मिर्च',
    emoji: '🔥',
    description: 'आप hot-tempered हैं! गुस्सा जल्दी आता है और express भी हो जाता है। Passionate personality!',
    traits: ['passionate', 'expressive', 'intense', 'honest', 'direct'],
    weaknesses: ['relationships में problem', 'regret बाद में', 'health पर असर'],
    advice: 'गुस्से को channel करना सीखें - exercise, meditation try करें!',
  },
  D: {
    type: 'D',
    title: 'अंदरूनी ज्वालामुखी',
    emoji: '🌋',
    description: 'आप गुस्सा suppress करते हैं। बाहर से शांत, अंदर से storm। यह healthy नहीं है।',
    traits: ['introvert', 'suppressed', 'reserved', 'avoidant', 'internal'],
    weaknesses: ['emotional build-up', 'sudden burst possible', 'health issues'],
    advice: 'गुस्सा express करना सीखें healthy way में - bottling up dangerous है!',
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
