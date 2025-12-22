// 創造力テスト
export const questions = [
  {
    id: 1,
    text: 'クリップの新しい使い方をいくつ思いつきますか？',
    options: [
      { text: '10個以上', type: 'A' },
      { text: '5〜9個', type: 'B' },
      { text: '2〜4個', type: 'C' },
      { text: '1個以下', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '「丸と線だけで」表現できるものは？',
    options: [
      { text: '顔、太陽、花、時計、車など無限', type: 'A' },
      { text: '顔と太陽くらい', type: 'C' },
      { text: '顔、太陽、花など5つくらい', type: 'B' },
      { text: '思いつかない', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '「もし空を飛べたら」最初に何をする？',
    options: [
      { text: '誰も行ったことない場所を探検', type: 'A' },
      { text: '友達と一緒に空を飛ぶ', type: 'B' },
      { text: '鳥と一緒に飛んでみる', type: 'C' },
      { text: '特に何もしない', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '無人島に1つだけ持っていくなら？',
    options: [
      { text: 'ナイフ（様々な用途に使える）', type: 'A' },
      { text: '本（時間を潰せる）', type: 'B' },
      { text: 'マッチ（火を起こせる）', type: 'C' },
      { text: 'スマートフォン', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '雲を見て何を想像する？',
    options: [
      { text: '様々な動物や物語のシーン', type: 'A' },
      { text: '動物や乗り物の形', type: 'B' },
      { text: 'わたあめ', type: 'C' },
      { text: '特に何も', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '「赤」から連想するものは？',
    options: [
      { text: '情熱、夕焼け、りんご、血、恋、怒り...', type: 'A' },
      { text: 'りんご、トマト、太陽', type: 'B' },
      { text: 'りんご', type: 'C' },
      { text: '特にない', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '新しい料理を作るとき、どうする？',
    options: [
      { text: '冷蔵庫にあるものでオリジナル料理', type: 'A' },
      { text: 'レシピをアレンジする', type: 'B' },
      { text: 'レシピ通りに作る', type: 'C' },
      { text: '料理はしない', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '問題に直面したとき、解決策をいくつ思いつく？',
    options: [
      { text: '5つ以上', type: 'A' },
      { text: '3〜4つ', type: 'B' },
      { text: '1〜2つ', type: 'C' },
      { text: '思いつかない', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '「もし透明人間になれたら」何をする？',
    options: [
      { text: '普段見れない場所を探検したい', type: 'A' },
      { text: '友達を驚かせたい', type: 'B' },
      { text: 'ゆっくり休みたい', type: 'C' },
      { text: '特に何もしない', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '退屈な会議中、何を考えている？',
    options: [
      { text: '新しいアイデアやプロジェクト', type: 'A' },
      { text: '会議の改善点', type: 'B' },
      { text: '早く終わらないかな', type: 'C' },
      { text: '何も考えていない', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '子供の頃、よくしていた遊びは？',
    options: [
      { text: '自分でルールを作る遊び', type: 'A' },
      { text: 'ごっこ遊び', type: 'B' },
      { text: '既存のゲームやおもちゃ', type: 'C' },
      { text: 'あまり遊ばなかった', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '「木の枝」を見つけたら何に使う？',
    options: [
      { text: '杖、釣り竿、お箸、楽器など色々考える', type: 'A' },
      { text: '杖か武器', type: 'B' },
      { text: '薪', type: 'C' },
      { text: '特に使わない', type: 'D' },
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
    title: '創造力の天才',
    emoji: '🎨',
    percentage: '創造力 95%',
    description: '無限のアイデアを生み出す創造力の持ち主です！既存の枠にとらわれず、常に新しい可能性を見出すことができます。',
    characteristics: ['発想力', '独創性', '柔軟性', '好奇心', '想像力'],
    advice: 'アート、デザイン、企画など創造性を活かせる分野で大きく活躍できます。',
  },
  B: {
    type: 'B',
    title: '創造力上級者',
    emoji: '💡',
    percentage: '創造力 80%',
    description: '豊かな創造力を持っています。既存のアイデアを発展させ、新しい価値を生み出す力があります。',
    characteristics: ['発想力', '応用力', '好奇心', '観察力', '表現力'],
    advice: '異分野の知識を組み合わせることで、さらにユニークなアイデアが生まれます。',
  },
  C: {
    type: 'C',
    title: '創造力学習者',
    emoji: '🌈',
    percentage: '創造力 65%',
    description: '基本的な創造力は持っています。様々な経験を積むことで、創造性がさらに開花するでしょう。',
    characteristics: ['基礎力', '成長意欲', '堅実', '実践派', '素直'],
    advice: '新しい体験や趣味に挑戦することで、創造力の幅が広がります。',
  },
  D: {
    type: 'D',
    title: '創造力ビギナー',
    emoji: '🌱',
    percentage: '創造力 50%',
    description: '創造力はまだ眠っている状態です。でも誰もが創造性を持っています。小さなことから想像を膨らませてみましょう。',
    characteristics: ['発展途上', '可能性', '論理派', '現実的', '堅実'],
    advice: '「もしも〜だったら」と考える習慣をつけると、創造力が目覚めます。',
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
