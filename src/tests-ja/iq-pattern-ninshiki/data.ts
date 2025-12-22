// パターン認識力テスト
export const questions = [
  {
    id: 1,
    text: '次のパターンを完成させてください：A, C, E, G, __',
    options: [
      { text: 'I', type: 'A' },
      { text: 'H', type: 'B' },
      { text: 'J', type: 'C' },
      { text: 'K', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'パターンを見つけてください：1, 4, 9, 16, 25, __',
    options: [
      { text: '36', type: 'A' },
      { text: '30', type: 'B' },
      { text: '35', type: 'C' },
      { text: '49', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'パターン：赤青赤青赤青赤□。□に入る色は？',
    options: [
      { text: '青', type: 'A' },
      { text: '赤', type: 'B' },
      { text: '緑', type: 'C' },
      { text: '黄', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '次の数列のパターンは？ 2, 6, 18, 54, __',
    options: [
      { text: '162', type: 'A' },
      { text: '108', type: 'B' },
      { text: '126', type: 'C' },
      { text: '180', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'パターン：月火水木金□日。□に入る曜日は？',
    options: [
      { text: '土', type: 'A' },
      { text: '金', type: 'B' },
      { text: '日', type: 'C' },
      { text: '月', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '数列のパターン：1, 1, 2, 3, 5, 8, 13, __',
    options: [
      { text: '21', type: 'A' },
      { text: '18', type: 'B' },
      { text: '20', type: 'C' },
      { text: '26', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'パターン：○●○●●○●●●○。次の3つは？',
    options: [
      { text: '●●●', type: 'A' },
      { text: '○●●', type: 'B' },
      { text: '●○●', type: 'C' },
      { text: '○○●', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '数列パターン：3, 7, 15, 31, __',
    options: [
      { text: '63', type: 'A' },
      { text: '47', type: 'B' },
      { text: '55', type: 'C' },
      { text: '62', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'アルファベットのパターン：A, Z, B, Y, C, X, D, __',
    options: [
      { text: 'W', type: 'A' },
      { text: 'V', type: 'B' },
      { text: 'E', type: 'C' },
      { text: 'U', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'パターン：1, 2, 4, 5, 7, 8, 10, __',
    options: [
      { text: '11', type: 'A' },
      { text: '12', type: 'B' },
      { text: '13', type: 'C' },
      { text: '14', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '形のパターン：□△○□△○□△__',
    options: [
      { text: '○', type: 'A' },
      { text: '□', type: 'B' },
      { text: '△', type: 'C' },
      { text: '☆', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '数列パターン：100, 50, 25, 12.5, __',
    options: [
      { text: '6.25', type: 'A' },
      { text: '6', type: 'B' },
      { text: '7', type: 'C' },
      { text: '5', type: 'D' },
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
    title: 'パターン認識の達人',
    emoji: '🔮',
    percentage: 'パターン認識力 95%',
    description: '複雑なパターンを瞬時に見抜く達人です！数列、図形、言語など様々なパターンを認識し、次の要素を予測できます。',
    characteristics: ['パターン認識', '予測力', '論理的思考', '直感力', '観察力'],
    advice: 'データサイエンス、暗号解読、市場分析など予測が重要な分野で活躍できます。',
  },
  B: {
    type: 'B',
    title: 'パターン認識上級者',
    emoji: '🎯',
    percentage: 'パターン認識力 80%',
    description: 'パターンを認識する能力が高いです。規則性を見つけ出し、論理的に次の要素を導き出せます。',
    characteristics: ['観察力', '論理性', '分析力', '集中力', '推論力'],
    advice: 'より複雑なパターンに挑戦することで、能力がさらに向上します。',
  },
  C: {
    type: 'C',
    title: 'パターン認識学習者',
    emoji: '📊',
    percentage: 'パターン認識力 65%',
    description: '基本的なパターンは認識できます。複雑なパターンには時間がかかることもありますが、練習で向上します。',
    characteristics: ['基礎力', '成長意欲', '努力家', '慎重', '着実'],
    advice: 'パズルや数学ゲームを楽しみながら、パターン認識力を鍛えましょう。',
  },
  D: {
    type: 'D',
    title: 'パターン認識ビギナー',
    emoji: '🌱',
    percentage: 'パターン認識力 50%',
    description: 'パターン認識はまだ発展途上です。規則性に注目する習慣をつけることで、必ず向上します。',
    characteristics: ['発展途上', '可能性', '直感的', '柔軟', '創造的'],
    advice: '簡単な数列や繰り返しパターンから始めて、観察力を養いましょう。',
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
