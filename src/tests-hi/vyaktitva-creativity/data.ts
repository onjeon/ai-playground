// रचनात्मकता (Creativity Style)
export const questions = [
  {
    id: 1,
    text: 'creative होने के बारे में?',
    options: [
      { text: 'हां, बहुत creative हूं', type: 'A' },
      { text: 'कभी-कभी ideas आते हैं', type: 'B' },
      { text: 'practical ज्यादा हूं', type: 'C' },
      { text: 'creative नहीं हूं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'problem solve करने का तरीका?',
    options: [
      { text: 'unique और out-of-box', type: 'A' },
      { text: 'mix of creative और practical', type: 'B' },
      { text: 'proven methods', type: 'C' },
      { text: 'जो बताया जाए', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'art और creativity में interest?',
    options: [
      { text: 'बहुत, खुद भी create करता/करती हूं', type: 'A' },
      { text: 'appreciate करता/करती हूं', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'boring task को interesting बनाना?',
    options: [
      { text: 'नए तरीके ढूंढता/ढूंढती हूं', type: 'A' },
      { text: 'try करता/करती हूं', type: 'B' },
      { text: 'बस कर लेता/लेती हूं', type: 'C' },
      { text: 'boring है तो boring है', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'दूसरों से अलग करने में?',
    options: [
      { text: 'हां, uniqueness पसंद है', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'fit in करना better', type: 'C' },
      { text: 'अलग क्यों करना', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'new ideas कहां से आते हैं?',
    options: [
      { text: 'हर जगह से inspiration', type: 'A' },
      { text: 'specific topics से', type: 'B' },
      { text: 'दूसरों से सीखकर', type: 'C' },
      { text: 'ideas आते ही नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'daydreaming?',
    options: [
      { text: 'बहुत, imagination rich है', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'time waste है', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'risk लेना creativity के लिए?',
    options: [
      { text: 'हां, experiment करता/करती हूं', type: 'A' },
      { text: 'calculated risks', type: 'B' },
      { text: 'safe better है', type: 'C' },
      { text: 'risk नहीं लेता/लेती', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'creative block में?',
    options: [
      { text: 'break लेकर वापस आता/आती हूं', type: 'A' },
      { text: 'different approach try', type: 'B' },
      { text: 'struggle करता/करती हूं', type: 'C' },
      { text: 'block ही block', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'creativity का meaning?',
    options: [
      { text: 'life का essence', type: 'A' },
      { text: 'useful skill', type: 'B' },
      { text: 'कुछ लोगों के लिए', type: 'C' },
      { text: 'overrated है', type: 'D' },
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
    title: 'Creative Genius',
    emoji: '🎨',
    description: 'आप naturally creative हैं! Ideas का flow, unique perspective, artistic soul। Born creator!',
    traits: ['imaginative', 'original', 'artistic', 'innovative', 'visionary'],
    weaknesses: ['practical execution कम', 'scattered ideas', 'focus issues'],
    advice: 'amazing creativity! इसे channel करें और execute भी करें।',
  },
  B: {
    type: 'B',
    title: 'Creative Thinker',
    emoji: '💡',
    description: 'आप creative और practical का mix हैं। Ideas आते हैं और implement भी करते हैं। Balanced!',
    traits: ['balanced', 'innovative', 'practical', 'resourceful', 'adaptable'],
    weaknesses: ['कभी-कभी safe route'],
    advice: 'great balance! थोड़ा और risk लें creativity में।',
  },
  C: {
    type: 'C',
    title: 'Practical Mind',
    emoji: '🔧',
    description: 'आप practical हैं, creativity secondary। Execution strong, ideas दूसरों से। Works well!',
    traits: ['practical', 'executor', 'reliable', 'systematic', 'grounded'],
    weaknesses: ['originality कम', 'innovation miss'],
    advice: 'practical अच्छा है, लेकिन creativity develop करें - सबमें है।',
  },
  D: {
    type: 'D',
    title: 'Non-Creative',
    emoji: '📋',
    description: 'Creativity आपकी चीज़ नहीं। Follow करना, execute करना - यही comfort zone।',
    traits: ['follower', 'executor', 'rule-bound', 'conventional'],
    weaknesses: ['limited growth', 'boring लग सकते हैं', 'adaptability कम'],
    advice: 'creativity सबमें है, बस unlock करना है। Try new things!',
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
