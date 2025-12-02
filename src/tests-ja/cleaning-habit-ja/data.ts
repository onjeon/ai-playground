// 掃除習慣診断
export const questions = [
  {
    id: 1,
    text: '部屋の掃除をするタイミングは？',
    options: [
      { text: '毎日決まった時間に', type: 'perfectionist' },
      { text: '週末にまとめて', type: 'planned' },
      { text: '汚れが気になったら', type: 'casual' },
      { text: '人が来る直前', type: 'lastminute' },
    ],
  },
  {
    id: 2,
    text: '掃除機をかける頻度は？',
    options: [
      { text: '毎日欠かさず', type: 'perfectionist' },
      { text: '週に2〜3回', type: 'planned' },
      { text: '週に1回程度', type: 'casual' },
      { text: '月に数回', type: 'lastminute' },
    ],
  },
  {
    id: 3,
    text: 'キッチンのシンクは？',
    options: [
      { text: '使うたびにピカピカに', type: 'perfectionist' },
      { text: '食器洗いのついでに綺麗に', type: 'planned' },
      { text: '汚れが目立ってきたら', type: 'casual' },
      { text: '正直あまり気にしない', type: 'lastminute' },
    ],
  },
  {
    id: 4,
    text: 'クローゼットや収納は？',
    options: [
      { text: '常に整理整頓されている', type: 'perfectionist' },
      { text: '衣替えの時に整理', type: 'planned' },
      { text: '探し物がある時だけ整理', type: 'casual' },
      { text: 'カオス状態', type: 'lastminute' },
    ],
  },
  {
    id: 5,
    text: 'トイレ掃除について？',
    options: [
      { text: '毎日磨いています', type: 'perfectionist' },
      { text: '週に1回はしっかり', type: 'planned' },
      { text: '気づいた時に', type: 'casual' },
      { text: 'なるべく避けたい', type: 'lastminute' },
    ],
  },
  {
    id: 6,
    text: '掃除道具へのこだわりは？',
    options: [
      { text: '高性能なものを揃えている', type: 'perfectionist' },
      { text: '用途別に基本的なものは持っている', type: 'planned' },
      { text: 'あるもので済ませる', type: 'casual' },
      { text: 'ウェットティッシュが最強', type: 'lastminute' },
    ],
  },
  {
    id: 7,
    text: '窓や網戸の掃除は？',
    options: [
      { text: '季節ごとにしっかり', type: 'perfectionist' },
      { text: '大掃除の時に', type: 'planned' },
      { text: '年に1回やるかどうか', type: 'casual' },
      { text: '記憶にない', type: 'lastminute' },
    ],
  },
  {
    id: 8,
    text: '掃除中の気持ちは？',
    options: [
      { text: '綺麗になるのが快感', type: 'perfectionist' },
      { text: '終わった後の達成感が好き', type: 'planned' },
      { text: 'やらなきゃと思いつつ', type: 'casual' },
      { text: 'できれば誰かにやってほしい', type: 'lastminute' },
    ],
  },
  {
    id: 9,
    text: '友人が突然家に来ると言ったら？',
    options: [
      { text: 'いつでもウェルカム', type: 'perfectionist' },
      { text: '30分あれば大丈夫', type: 'planned' },
      { text: '1時間は欲しい', type: 'casual' },
      { text: '「外で会おう」と言う', type: 'lastminute' },
    ],
  },
  {
    id: 10,
    text: '理想の掃除スタイルは？',
    options: [
      { text: 'こまめに毎日少しずつ', type: 'perfectionist' },
      { text: '計画的に効率よく', type: 'planned' },
      { text: 'ゆるく自分のペースで', type: 'casual' },
      { text: 'ロボット掃除機に全部任せたい', type: 'lastminute' },
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
  recommendation: string;
}> = {
  perfectionist: {
    type: 'perfectionist',
    title: '完璧主義クリーナー',
    emoji: '✨',
    percentage: '清潔度 100%',
    description: '塵ひとつ許さない完璧主義者！常にピカピカの空間で暮らしています。掃除は日課であり、癒しの時間。来客がいつ来ても恥ずかしくない！',
    characteristics: ['完璧主義', '几帳面', '習慣化', 'こだわり', '清潔感'],
    recommendation: 'たまには手を抜いても大丈夫。自分を許してあげて！',
  },
  planned: {
    type: 'planned',
    title: '計画派クリーナー',
    emoji: '📅',
    percentage: 'バランス度 90%',
    description: '週末にまとめて掃除する計画派。効率よく綺麗を保つバランス感覚の持ち主です。無理なく続けられる賢いスタイル！',
    characteristics: ['計画的', '効率重視', 'バランス', '継続力', '合理的'],
    recommendation: '平日の「ついで掃除」も取り入れるとさらに楽に！',
  },
  casual: {
    type: 'casual',
    title: 'マイペースクリーナー',
    emoji: '🌿',
    percentage: 'ゆるさ度 75%',
    description: '気になった時にゆるく掃除するタイプ。完璧は求めないけど、それなりに綺麗を保っています。ストレスフリーな掃除スタイル！',
    characteristics: ['マイペース', '柔軟', 'ストレスフリー', '自然体', '気楽'],
    recommendation: '週1回の「集中掃除タイム」を設けてみては？',
  },
  lastminute: {
    type: 'lastminute',
    title: '駆け込みクリーナー',
    emoji: '🏃',
    percentage: '瞬発力 95%',
    description: '普段はゆるいけど、いざという時の集中力は抜群！来客前の30分で奇跡の大変身を遂げます。火事場の馬鹿力タイプ！',
    characteristics: ['瞬発力', '集中力', '火事場の馬鹿力', '楽観的', 'なんとかなる精神'],
    recommendation: '毎日5分だけ掃除する習慣をつけると楽になりますよ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { perfectionist: 0, planned: 0, casual: 0, lastminute: 0 };

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
