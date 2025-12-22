// 空間認知力テスト
export const questions = [
  {
    id: 1,
    text: '立方体の展開図を組み立てたとき、赤い面の反対側にある面の色は？（上：赤、右：青、下：緑、左：黄、前：白、後：黒）',
    options: [
      { text: '緑', type: 'A' },
      { text: '青', type: 'B' },
      { text: '黄', type: 'C' },
      { text: '白', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '北を向いて立っている。右に90度回転し、さらに左に180度回転した。今、どの方角を向いている？',
    options: [
      { text: '西', type: 'A' },
      { text: '東', type: 'B' },
      { text: '南', type: 'C' },
      { text: '北', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '正方形を対角線で2回折ると、何個の三角形ができる？',
    options: [
      { text: '4個', type: 'A' },
      { text: '2個', type: 'B' },
      { text: '8個', type: 'C' },
      { text: '6個', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '鏡に映った時計が「9:15」を示している。実際の時刻は？',
    options: [
      { text: '2:45', type: 'A' },
      { text: '3:45', type: 'B' },
      { text: '9:45', type: 'C' },
      { text: '2:15', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '同じ大きさの立方体を27個使って大きな立方体を作った。表面に見える小さな立方体の面の数は？',
    options: [
      { text: '54面', type: 'A' },
      { text: '48面', type: 'B' },
      { text: '36面', type: 'C' },
      { text: '42面', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '正六角形の内角の和は？',
    options: [
      { text: '720度', type: 'A' },
      { text: '540度', type: 'B' },
      { text: '900度', type: 'C' },
      { text: '360度', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '直方体の角（頂点）の数は？',
    options: [
      { text: '8個', type: 'A' },
      { text: '6個', type: 'B' },
      { text: '12個', type: 'C' },
      { text: '10個', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '紙を半分に3回折ると、広げたとき折り目は何本できる？',
    options: [
      { text: '7本', type: 'A' },
      { text: '6本', type: 'B' },
      { text: '8本', type: 'C' },
      { text: '5本', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Lの形のブロックを回転させずに、4つ使って正方形を作ることは？',
    options: [
      { text: 'できない', type: 'A' },
      { text: 'できる', type: 'B' },
      { text: '条件による', type: 'C' },
      { text: '3つでできる', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '円柱を真横から見た形は？',
    options: [
      { text: '長方形', type: 'A' },
      { text: '円', type: 'B' },
      { text: '楕円', type: 'C' },
      { text: '三角形', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'サイコロの1の反対側の目は？',
    options: [
      { text: '6', type: 'A' },
      { text: '4', type: 'B' },
      { text: '2', type: 'C' },
      { text: '5', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '正方形の紙を対角線で折り、さらに二等分線で折ってから角を切り落とす。広げるとどんな形？',
    options: [
      { text: '正方形の穴が開く', type: 'A' },
      { text: '三角形の穴が開く', type: 'B' },
      { text: '円形の穴が開く', type: 'C' },
      { text: 'ひし形の穴が開く', type: 'D' },
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
    title: '空間認知の天才',
    emoji: '🎨',
    percentage: '空間認知力 95%',
    description: '3D空間を頭の中で自在に操る天才的な空間認知能力の持ち主です！複雑な図形の回転や展開も瞬時にイメージできます。',
    characteristics: ['立体把握', '方向感覚', '視覚的思考', '図形センス', '空間記憶'],
    advice: '建築、デザイン、エンジニアリングなど空間把握が必要な分野で大活躍できます。',
  },
  B: {
    type: 'B',
    title: '空間認知上級者',
    emoji: '🔷',
    percentage: '空間認知力 80%',
    description: '空間を認識する能力が高く、図形問題や方向把握が得意です。少し複雑な問題でも落ち着いて解決できます。',
    characteristics: ['図形理解', '方向感覚', '視覚化', '分析力', '集中力'],
    advice: '3Dパズルやブロック遊びで、さらに空間認知力を伸ばせます。',
  },
  C: {
    type: 'C',
    title: '空間認知中級者',
    emoji: '📐',
    percentage: '空間認知力 65%',
    description: '基本的な空間認知能力があります。日常的なナビゲーションは問題ありませんが、複雑な立体問題には練習が必要かもしれません。',
    characteristics: ['基礎力', '実用的', '成長中', '努力家', '慎重'],
    advice: 'パズルゲームや折り紙を通じて、楽しく空間認知力を鍛えられます。',
  },
  D: {
    type: 'D',
    title: '空間認知ビギナー',
    emoji: '🌟',
    percentage: '空間認知力 50%',
    description: '空間認知はまだ発展途上ですが、これは訓練で大きく向上する能力です。あなたには他の強みがあるはずです。',
    characteristics: ['発展途上', '可能性', '言語優位', '論理優位', '聴覚優位'],
    advice: 'まずは簡単な立体パズルから始めて、少しずつ空間感覚を養いましょう。',
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
