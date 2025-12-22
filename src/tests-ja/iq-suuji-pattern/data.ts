// 数字パターンIQテスト
export const questions = [
  {
    id: 1,
    text: '次の数列の空欄に入る数字は？ 2, 4, 8, 16, __',
    options: [
      { text: '24', type: 'C' },
      { text: '32', type: 'A' },
      { text: '20', type: 'D' },
      { text: '28', type: 'B' },
    ],
  },
  {
    id: 2,
    text: '次の数列の空欄に入る数字は？ 1, 1, 2, 3, 5, 8, __',
    options: [
      { text: '11', type: 'B' },
      { text: '13', type: 'A' },
      { text: '10', type: 'D' },
      { text: '12', type: 'C' },
    ],
  },
  {
    id: 3,
    text: '次の数列の空欄に入る数字は？ 3, 6, 9, 12, __',
    options: [
      { text: '15', type: 'A' },
      { text: '14', type: 'C' },
      { text: '18', type: 'B' },
      { text: '16', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '次の数列の空欄に入る数字は？ 1, 4, 9, 16, 25, __',
    options: [
      { text: '30', type: 'C' },
      { text: '36', type: 'A' },
      { text: '35', type: 'B' },
      { text: '32', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '次の数列の空欄に入る数字は？ 2, 6, 12, 20, 30, __',
    options: [
      { text: '40', type: 'B' },
      { text: '42', type: 'A' },
      { text: '38', type: 'D' },
      { text: '44', type: 'C' },
    ],
  },
  {
    id: 6,
    text: '次の数列の空欄に入る数字は？ 100, 81, 64, 49, __',
    options: [
      { text: '36', type: 'A' },
      { text: '25', type: 'B' },
      { text: '40', type: 'C' },
      { text: '32', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '次の数列の空欄に入る数字は？ 1, 2, 4, 7, 11, __',
    options: [
      { text: '15', type: 'B' },
      { text: '16', type: 'A' },
      { text: '14', type: 'C' },
      { text: '17', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '次の数列の空欄に入る数字は？ 3, 5, 9, 15, 23, __',
    options: [
      { text: '31', type: 'B' },
      { text: '33', type: 'A' },
      { text: '29', type: 'C' },
      { text: '35', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '次の数列の空欄に入る数字は？ 2, 3, 5, 7, 11, __',
    options: [
      { text: '13', type: 'A' },
      { text: '15', type: 'C' },
      { text: '14', type: 'D' },
      { text: '12', type: 'B' },
    ],
  },
  {
    id: 10,
    text: '次の数列の空欄に入る数字は？ 1, 3, 6, 10, 15, __',
    options: [
      { text: '20', type: 'B' },
      { text: '21', type: 'A' },
      { text: '18', type: 'D' },
      { text: '22', type: 'C' },
    ],
  },
  {
    id: 11,
    text: '次の数列の空欄に入る数字は？ 64, 32, 16, 8, __',
    options: [
      { text: '4', type: 'A' },
      { text: '2', type: 'B' },
      { text: '6', type: 'C' },
      { text: '0', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '次の数列の空欄に入る数字は？ 1, 8, 27, 64, __',
    options: [
      { text: '100', type: 'C' },
      { text: '125', type: 'A' },
      { text: '81', type: 'B' },
      { text: '128', type: 'D' },
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
    title: '数字パターンマスター',
    emoji: '🧮',
    percentage: 'パターン認識力 95%',
    description: '数字の規則性を瞬時に見抜く天才的な能力を持っています！複雑な数列でもパターンを発見できる優れた数学的センスの持ち主です。',
    characteristics: ['規則性発見', '数学的直感', '論理的思考', '高速処理', '正確性'],
    advice: 'プログラミングや金融分析など、数字を扱う分野で大きな才能を発揮できます。',
  },
  B: {
    type: 'B',
    title: '数字パターン上級者',
    emoji: '📊',
    percentage: 'パターン認識力 80%',
    description: '数字のパターンを認識する優れた能力があります。標準的な数列は問題なく解け、複雑なパターンにも対応できます。',
    characteristics: ['分析力', '計算力', '集中力', '論理性', '粘り強さ'],
    advice: '難易度の高い問題に挑戦することで、さらに能力を伸ばせます。',
  },
  C: {
    type: 'C',
    title: '数字パターン中級者',
    emoji: '📈',
    percentage: 'パターン認識力 65%',
    description: '基本的な数字パターンを理解する力があります。練習を重ねることで、より複雑なパターンも見抜けるようになるでしょう。',
    characteristics: ['基礎力', '成長意欲', '観察力', '努力家', '忍耐力'],
    advice: '毎日少しずつ数学パズルに取り組むことで、能力向上が期待できます。',
  },
  D: {
    type: 'D',
    title: '数字パターン初心者',
    emoji: '🌱',
    percentage: 'パターン認識力 50%',
    description: '数字パターンの認識はまだ発展途上です。しかし、これは訓練で大きく改善できる能力です。焦らず着実に学んでいきましょう。',
    characteristics: ['発展途上', '可能性', '新鮮な視点', '直感的', '創造的'],
    advice: '簡単な数列から始めて、徐々にレベルアップしていきましょう。',
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
