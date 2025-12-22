// 集中力診断 - あなたの集中力レベルは？
export const questions = [
  {
    id: 1,
    text: '作業中にスマホの通知が来たら？',
    options: [
      { text: 'すぐに確認してしまう', type: 'scattered' },
      { text: '気になるけど一応我慢する', type: 'developing' },
      { text: 'キリの良いところまでは見ない', type: 'focused' },
      { text: '作業中は通知をオフにしている', type: 'laser' },
    ],
  },
  {
    id: 2,
    text: '長時間（2時間以上）集中して作業できる？',
    options: [
      { text: '無理、30分が限界', type: 'scattered' },
      { text: '頑張れば1時間くらい', type: 'developing' },
      { text: '休憩を挟めば2時間はいける', type: 'focused' },
      { text: '没頭すると時間を忘れる', type: 'laser' },
    ],
  },
  {
    id: 3,
    text: 'カフェなど騒がしい場所での作業は？',
    options: [
      { text: '周りが気になって集中できない', type: 'scattered' },
      { text: 'イヤホンがあれば何とか', type: 'developing' },
      { text: 'むしろ適度な雑音があった方がいい', type: 'focused' },
      { text: 'どこでも集中できる', type: 'laser' },
    ],
  },
  {
    id: 4,
    text: '作業を始める前の準備は？',
    options: [
      { text: 'いきなり始めてすぐ脱線', type: 'scattered' },
      { text: '一応やることを確認してから', type: 'developing' },
      { text: '環境を整えてから集中モードに', type: 'focused' },
      { text: 'ルーティンを決めてスイッチを入れる', type: 'laser' },
    ],
  },
  {
    id: 5,
    text: '締め切りがある時の集中力は？',
    options: [
      { text: '焦るけど結局ギリギリになる', type: 'scattered' },
      { text: 'プレッシャーで少し集中できる', type: 'developing' },
      { text: '計画的に進めて余裕を持って終わる', type: 'focused' },
      { text: '締め切り関係なく常に集中できる', type: 'laser' },
    ],
  },
  {
    id: 6,
    text: '複数のタスクがある時は？',
    options: [
      { text: 'あれこれ手をつけて中途半端に', type: 'scattered' },
      { text: '優先順位をつけようとする', type: 'developing' },
      { text: '一つずつ順番に片付ける', type: 'focused' },
      { text: '効率的に切り替えながら進められる', type: 'laser' },
    ],
  },
  {
    id: 7,
    text: '集中が切れた時の対処法は？',
    options: [
      { text: 'そのままダラダラしてしまう', type: 'scattered' },
      { text: 'SNSを見て気分転換', type: 'developing' },
      { text: '短い休憩を取って再開', type: 'focused' },
      { text: '深呼吸や軽い運動でリセット', type: 'laser' },
    ],
  },
  {
    id: 8,
    text: '「フロー状態（没頭状態）」に入ることはある？',
    options: [
      { text: '経験したことがない', type: 'scattered' },
      { text: 'たまに経験する程度', type: 'developing' },
      { text: '好きなことをしている時は入れる', type: 'focused' },
      { text: '意図的にフロー状態を作れる', type: 'laser' },
    ],
  },
  {
    id: 9,
    text: 'ポモドーロテクニック（25分集中+5分休憩）について',
    options: [
      { text: '知らない、または試したことがない', type: 'scattered' },
      { text: '試したけど続かなかった', type: 'developing' },
      { text: '時々使っている', type: 'focused' },
      { text: '自分なりの集中法を確立している', type: 'laser' },
    ],
  },
  {
    id: 10,
    text: '自分の集中力を一言で表すと？',
    options: [
      { text: '散漫、すぐ気が散る', type: 'scattered' },
      { text: '波がある、日によって違う', type: 'developing' },
      { text: '安定している方', type: 'focused' },
      { text: '集中力には自信がある', type: 'laser' },
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
  scattered: {
    type: 'scattered',
    title: 'マルチタスク気質タイプ',
    emoji: '🦋',
    percentage: '集中力 25%',
    description: '興味があちこちに向かう好奇心旺盛なタイプ。一つのことに集中するのが苦手ですが、その分いろいろなことに気づける強みも。環境を整えて集中のハードルを下げることがポイント。',
    characteristics: ['好奇心旺盛', '気が散りやすい', 'マルチタスク', '刺激を求める', '柔軟'],
    advice: 'スマホを別の部屋に置く、タイマーを使うなど、環境の力を借りて集中する仕組みを作ってみて。',
  },
  developing: {
    type: 'developing',
    title: '成長途上タイプ',
    emoji: '🌱',
    percentage: '集中力 50%',
    description: '集中しようという意識はあるけど、まだ安定しないタイプ。日によって波があったり、環境に左右されがち。でも意識があるのは大きな一歩！習慣化で確実に伸びます。',
    characteristics: ['波がある', '成長意欲', '環境依存', '努力家', '発展途上'],
    advice: '毎日同じ時間に同じ場所で作業する習慣を作ると、集中のスイッチが入りやすくなります。',
  },
  focused: {
    type: 'focused',
    title: '安定集中タイプ',
    emoji: '🎯',
    percentage: '集中力 75%',
    description: '自分なりの集中法を持っていて、安定したパフォーマンスを発揮できるタイプ。環境を整える意識があり、計画的に作業を進められます。さらなる高みを目指すなら、フロー状態を意識してみて。',
    characteristics: ['安定感', '自己管理', '計画的', '環境整備', '効率的'],
    advice: '素晴らしい集中力！より深い集中（フロー状態）を意識的に作り出すテクニックを学ぶと、さらにレベルアップ。',
  },
  laser: {
    type: 'laser',
    title: 'レーザー集中タイプ',
    emoji: '⚡',
    percentage: '集中力 95%',
    description: '驚異的な集中力の持ち主！没頭すると時間を忘れるほどの集中力で、高いパフォーマンスを発揮できます。意図的にフロー状態を作り出すこともできる、集中のプロフェッショナル。',
    characteristics: ['超集中', 'フロー体質', '高パフォーマンス', '自己制御', '没入型'],
    advice: '素晴らしい集中力！ただし没頭しすぎて休憩を忘れがちなので、意識的にブレイクを取ることも大切に。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { scattered: 0, developing: 0, focused: 0, laser: 0 };

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
