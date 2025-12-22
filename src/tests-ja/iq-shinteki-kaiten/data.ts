// 心的回転能力テスト
export const questions = [
  {
    id: 1,
    text: 'Fを180度回転させると、どの文字になる？',
    options: [
      { text: '上下反転したF（同じ形）', type: 'A' },
      { text: 'Ǝ', type: 'B' },
      { text: 'E', type: 'C' },
      { text: '7', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '右手を鏡に映すと、鏡の中では何に見える？',
    options: [
      { text: '左手', type: 'A' },
      { text: '右手', type: 'B' },
      { text: '同じ手', type: 'C' },
      { text: '両手', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '時計の文字盤を裏から見ると、3時の位置はどこに見える？',
    options: [
      { text: '9時の位置', type: 'A' },
      { text: '3時の位置', type: 'B' },
      { text: '12時の位置', type: 'C' },
      { text: '6時の位置', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Lを時計回りに90度回転させるとどうなる？',
    options: [
      { text: '⌐（逆さL）', type: 'A' },
      { text: '」', type: 'B' },
      { text: '「', type: 'C' },
      { text: '∟', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '自分が北を向いて立っている時、右手はどの方角を指す？',
    options: [
      { text: '東', type: 'A' },
      { text: '西', type: 'B' },
      { text: '南', type: 'C' },
      { text: '北', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '立方体を手前に45度傾けると、上面はどう見える？',
    options: [
      { text: '斜めの平行四辺形に見える', type: 'A' },
      { text: '正方形のまま', type: 'B' },
      { text: '見えなくなる', type: 'C' },
      { text: '円に見える', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Zを左右反転させるとどうなる？',
    options: [
      { text: '逆向きのZ（Ƨ）', type: 'A' },
      { text: 'S', type: 'B' },
      { text: 'N', type: 'C' },
      { text: '同じZ', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '自分の後ろにいる人から見た時、自分の左側は相手にとって？',
    options: [
      { text: '右側', type: 'B' },
      { text: '左側', type: 'A' },
      { text: '前側', type: 'C' },
      { text: '後ろ側', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '円柱を真上から見た形と、真横から見た形の組み合わせは？',
    options: [
      { text: '円と長方形', type: 'A' },
      { text: '円と円', type: 'B' },
      { text: '長方形と長方形', type: 'C' },
      { text: '三角形と円', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Sを上下反転させるとどうなる？',
    options: [
      { text: '同じS（点対称のため）', type: 'A' },
      { text: '逆向きのS', type: 'B' },
      { text: 'Z', type: 'C' },
      { text: '8', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '向かい合って座っている人の右手は、自分から見てどちら側？',
    options: [
      { text: '左側', type: 'A' },
      { text: '右側', type: 'B' },
      { text: '正面', type: 'C' },
      { text: '後ろ側', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '正方形を対角線上で折り曲げると、どんな形になる？',
    options: [
      { text: '直角二等辺三角形', type: 'A' },
      { text: '正三角形', type: 'B' },
      { text: '長方形', type: 'C' },
      { text: '菱形', type: 'D' },
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
    title: '心的回転の達人',
    emoji: '🔄',
    percentage: '心的回転能力 95%',
    description: '頭の中で物体を自在に回転・変形させる達人です！空間認知と視覚イメージ操作の能力が非常に高いです。',
    characteristics: ['空間認知', '視覚化', '3D思考', '図形操作', '方向感覚'],
    advice: '建築、機械設計、3DCG、外科医など空間把握が必要な分野で大活躍できます。',
  },
  B: {
    type: 'B',
    title: '心的回転上級者',
    emoji: '🎯',
    percentage: '心的回転能力 80%',
    description: '物体を頭の中で回転させる能力が高いです。図形の変形や視点の切り替えがスムーズにできます。',
    characteristics: ['空間把握', '視覚化', '図形認識', '柔軟性', '想像力'],
    advice: '3Dパズルやブロック組み立てで、さらに能力を伸ばせます。',
  },
  C: {
    type: 'C',
    title: '心的回転学習者',
    emoji: '📐',
    percentage: '心的回転能力 65%',
    description: '基本的な心的回転は理解できます。複雑な回転や複数の変形には練習が必要ですが、向上の余地があります。',
    characteristics: ['基礎力', '成長意欲', '努力家', '慎重', '実践派'],
    advice: 'ルービックキューブや立体パズルで楽しく能力を鍛えられます。',
  },
  D: {
    type: 'D',
    title: '心的回転ビギナー',
    emoji: '🌱',
    percentage: '心的回転能力 50%',
    description: '心的回転はまだ発展途上です。実際に物を回してみる経験を積むことで、能力が向上します。',
    characteristics: ['発展途上', '可能性', '言語優位', '論理優位', '着実'],
    advice: '実際に物を手で回しながら観察することから始めましょう。',
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
