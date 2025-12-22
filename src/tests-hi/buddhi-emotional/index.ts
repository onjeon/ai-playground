// भावनात्मक बुद्धि टेस्ट - Emotional Intelligence (EQ) Test
// EQ 테스트

export const questions = [
  {
    id: 1,
    text: 'जब कोई आप पर गुस्सा करे तो आप?',
    options: [
      { text: 'शांत रहकर उनकी बात सुनता हूँ', type: 'A' },
      { text: 'थोड़ी देर में शांत हो जाता हूँ', type: 'B' },
      { text: 'गुस्सा आता है पर control करता हूँ', type: 'C' },
      { text: 'गुस्से में जवाब देता हूँ', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'दूसरों की भावनाओं को समझने में?',
    options: [
      { text: 'बहुत अच्छा हूँ, तुरंत समझ जाता हूँ', type: 'A' },
      { text: 'अक्सर समझ लेता हूँ', type: 'B' },
      { text: 'कभी-कभी miss हो जाता है', type: 'C' },
      { text: 'मुश्किल लगता है', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Stress में आप?',
    options: [
      { text: 'Calm रहकर handle करता हूँ', type: 'A' },
      { text: 'थोड़ा disturbed होता हूँ पर manage करता हूँ', type: 'B' },
      { text: 'काफी affect होता हूँ', type: 'C' },
      { text: 'बहुत ज्यादा stress लेता हूँ', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'अपनी गलती मानने में?',
    options: [
      { text: 'आसानी से मान लेता हूँ', type: 'A' },
      { text: 'थोड़ा समय लगता है पर मान लेता हूँ', type: 'B' },
      { text: 'मुश्किल लगता है', type: 'C' },
      { text: 'अक्सर justify करता हूँ', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'जब कोई रो रहा हो तो?',
    options: [
      { text: 'उनकी बात सुनता हूँ और support करता हूँ', type: 'A' },
      { text: 'Comfort करने की कोशिश करता हूँ', type: 'B' },
      { text: 'Awkward feel होता है', type: 'C' },
      { text: 'क्या करूं समझ नहीं आता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Criticism (आलोचना) सुनने में?',
    options: [
      { text: 'सुनता हूँ और सीखता हूँ', type: 'A' },
      { text: 'Accept करता हूँ, थोड़ा बुरा लगता है', type: 'B' },
      { text: 'Defensive हो जाता हूँ', type: 'C' },
      { text: 'बहुत बुरा लगता है, react करता हूँ', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'खुद की feelings समझने में?',
    options: [
      { text: 'बहुत अच्छी तरह समझता हूँ', type: 'A' },
      { text: 'अक्सर समझ लेता हूँ', type: 'B' },
      { text: 'कभी-कभी confuse होता हूँ', type: 'C' },
      { text: 'मुश्किल लगता है', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Conflict (झगड़ा) में?',
    options: [
      { text: 'Calmly discuss करके solve करता हूँ', type: 'A' },
      { text: 'Compromise ढूंढता हूँ', type: 'B' },
      { text: 'Avoid करता हूँ', type: 'C' },
      { text: 'Argue करता हूँ', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Negative feelings को handle करने में?',
    options: [
      { text: 'Accept करके process करता हूँ', type: 'A' },
      { text: 'Time लेता हूँ, फिर ठीक हो जाता हूँ', type: 'B' },
      { text: 'Suppress करता हूँ', type: 'C' },
      { text: 'Overwhelmed हो जाता हूँ', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Team में काम करते समय?',
    options: [
      { text: 'सबकी बात सुनता हूँ, harmonious रहता हूँ', type: 'A' },
      { text: 'Cooperate करता हूँ', type: 'B' },
      { text: 'अपना काम करता हूँ', type: 'C' },
      { text: 'Clashes हो जाते हैं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Motivation level कैसा रहता है?',
    options: [
      { text: 'खुद को motivate कर लेता हूँ', type: 'A' },
      { text: 'Mostly motivated रहता हूँ', type: 'B' },
      { text: 'कभी-कभी motivation कम होता है', type: 'C' },
      { text: 'External motivation चाहिए', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'किसी के success पर?',
    options: [
      { text: 'Genuinely खुश होता हूँ', type: 'A' },
      { text: 'खुश होता हूँ', type: 'B' },
      { text: 'थोड़ी jealousy होती है', type: 'C' },
      { text: 'Compare करता हूँ खुद से', type: 'D' },
    ],
  },
  {
    id: 13,
    text: 'अपनी feelings express करने में?',
    options: [
      { text: 'Comfortable हूँ, openly करता हूँ', type: 'A' },
      { text: 'Close लोगों से share करता हूँ', type: 'B' },
      { text: 'थोड़ा hesitate करता हूँ', type: 'C' },
      { text: 'Express नहीं करता', type: 'D' },
    ],
  },
  {
    id: 14,
    text: 'Disappointment (निराशा) में?',
    options: [
      { text: 'Accept करके आगे बढ़ता हूँ', type: 'A' },
      { text: 'थोड़ा समय लेता हूँ, फिर ठीक', type: 'B' },
      { text: 'बहुत affect होता हूँ', type: 'C' },
      { text: 'लंबे समय तक upset रहता हूँ', type: 'D' },
    ],
  },
  {
    id: 15,
    text: 'Relationships maintain करने में?',
    options: [
      { text: 'बहुत अच्छा हूँ, लंबे relations हैं', type: 'A' },
      { text: 'अच्छा हूँ', type: 'B' },
      { text: 'कुछ close relations हैं', type: 'C' },
      { text: 'Maintain करना मुश्किल है', type: 'D' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  tips: string[];
}> = {
  A: {
    type: 'A',
    title: 'उच्च भावनात्मक बुद्धि',
    emoji: '💖',
    description: 'आपकी EQ बहुत high है! आप अपनी और दूसरों की भावनाओं को बहुत अच्छे से समझते हैं और manage करते हैं।',
    traits: ['empathetic', 'self-aware', 'emotionally balanced', 'great communicator'],
    strengths: ['relationships', 'leadership', 'conflict resolution', 'stress management'],
    weaknesses: ['कभी-कभी दूसरों की emotions बहुत feel करना'],
    tips: ['अपनी emotional intelligence को leadership में use करें'],
  },
  B: {
    type: 'B',
    title: 'अच्छी भावनात्मक बुद्धि',
    emoji: '😊',
    description: 'आपकी EQ अच्छी है। आप emotions को अच्छे से handle करते हैं।',
    traits: ['emotionally stable', 'understanding', 'adaptable'],
    strengths: ['good relationships', 'reasonable emotional control'],
    weaknesses: ['कभी-कभी emotions में balance मुश्किल'],
    tips: ['Mindfulness practice करें'],
  },
  C: {
    type: 'C',
    title: 'औसत भावनात्मक बुद्धि',
    emoji: '🌱',
    description: 'आपकी EQ average है। थोड़ी practice से improve हो सकती है।',
    traits: ['developing EQ', 'learning', 'growing'],
    strengths: ['potential for growth'],
    weaknesses: ['emotional regulation में कठिनाई'],
    tips: ['Journaling करें, emotions को समझने की कोशिश करें'],
  },
  D: {
    type: 'D',
    title: 'EQ में सुधार की जरूरत',
    emoji: '🔧',
    description: 'आपकी emotional intelligence में सुधार की गुंजाइश है। यह सीखी जा सकती है!',
    traits: ['developing', 'needs work', 'potential'],
    strengths: ['awareness है कि improve करना है'],
    weaknesses: ['emotional control और empathy में कठिनाई'],
    tips: ['Books पढ़ें EQ पर, therapy या counseling consider करें'],
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
