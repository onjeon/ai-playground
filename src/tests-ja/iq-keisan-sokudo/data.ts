// 計算速度テスト
export const questions = [
  {
    id: 1,
    text: '15 + 27 = ?',
    options: [
      { text: '42', type: 'A' },
      { text: '43', type: 'B' },
      { text: '41', type: 'C' },
      { text: '44', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '84 - 39 = ?',
    options: [
      { text: '45', type: 'A' },
      { text: '55', type: 'B' },
      { text: '35', type: 'C' },
      { text: '44', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '7 × 8 = ?',
    options: [
      { text: '56', type: 'A' },
      { text: '54', type: 'B' },
      { text: '58', type: 'C' },
      { text: '48', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '144 ÷ 12 = ?',
    options: [
      { text: '12', type: 'A' },
      { text: '11', type: 'B' },
      { text: '14', type: 'C' },
      { text: '13', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '25 × 4 = ?',
    options: [
      { text: '100', type: 'A' },
      { text: '90', type: 'B' },
      { text: '110', type: 'C' },
      { text: '95', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '1000 - 378 = ?',
    options: [
      { text: '622', type: 'A' },
      { text: '632', type: 'B' },
      { text: '612', type: 'C' },
      { text: '628', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '13 × 7 = ?',
    options: [
      { text: '91', type: 'A' },
      { text: '87', type: 'B' },
      { text: '93', type: 'C' },
      { text: '84', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '225 ÷ 15 = ?',
    options: [
      { text: '15', type: 'A' },
      { text: '14', type: 'B' },
      { text: '16', type: 'C' },
      { text: '13', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '456 + 289 = ?',
    options: [
      { text: '745', type: 'A' },
      { text: '735', type: 'B' },
      { text: '755', type: 'C' },
      { text: '725', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '9 × 9 × 9 = ?',
    options: [
      { text: '729', type: 'A' },
      { text: '719', type: 'B' },
      { text: '739', type: 'C' },
      { text: '749', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '500 ÷ 25 = ?',
    options: [
      { text: '20', type: 'A' },
      { text: '25', type: 'B' },
      { text: '15', type: 'C' },
      { text: '22', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '17 + 28 + 35 = ?',
    options: [
      { text: '80', type: 'A' },
      { text: '75', type: 'B' },
      { text: '85', type: 'C' },
      { text: '78', type: 'D' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  percentage: string;
  description: string;
  characteristics: string[];
  advice: string;
}> = {
  A: {
    type: 'A',
    title: '計算速度の達人',
    emoji: '⚡',
    percentage: '計算速度 95%',
    description: '驚異的な計算速度を持つ達人です！暗算が得意で、複雑な計算も素早く正確にこなせます。',
    characteristics: ['高速計算', '正確性', '数字感覚', '集中力', '暗算力'],
    advice: '会計、金融、エンジニアリングなど数字を扱う分野で大きく活躍できます。',
  },
  B: {
    type: 'B',
    title: '計算速度上級者',
    emoji: '🔢',
    percentage: '計算速度 80%',
    description: '計算速度が高く、正確に計算できます。基本的な計算は素早くこなし、複雑な計算にも対応できます。',
    characteristics: ['計算力', '正確性', '集中力', '数字感覚', '忍耐力'],
    advice: '暗算の練習を続けることで、さらに速度が向上します。',
  },
  C: {
    type: 'C',
    title: '計算学習者',
    emoji: '📊',
    percentage: '計算速度 65%',
    description: '基本的な計算はできますが、速度に課題があります。練習を重ねることで計算速度は向上します。',
    characteristics: ['基礎力', '成長意欲', '慎重', '努力家', '着実'],
    advice: '毎日少しずつ計算練習をすることで、着実に速度が上がります。',
  },
  D: {
    type: 'D',
    title: '計算ビギナー',
    emoji: '🌱',
    percentage: '計算速度 50%',
    description: '計算速度はまだ発展途上です。基礎的な計算から練習を始めて、少しずつ速度を上げていきましょう。',
    characteristics: ['発展途上', '可能性', '慎重派', '丁寧', '着実'],
    advice: '九九や基本的な計算を反復練習することから始めましょう。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      scores[type]++;
    }
  });

  const resultType = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  return results[resultType];
}
