// ランチ選びタイプ診断
export const questions = [
  {
    id: 1,
    text: 'ランチタイム、何を食べるか決める時は？',
    options: [
      { text: '事前にお店を調べておく', type: 'planner' },
      { text: 'その場の気分で決める', type: 'spontaneous' },
      { text: '同僚に合わせる', type: 'social' },
      { text: '手早く済ませたい', type: 'efficient' },
    ],
  },
  {
    id: 2,
    text: 'ランチの予算について',
    options: [
      { text: 'しっかり計算して決める', type: 'planner' },
      { text: '美味しければ多少高くてもOK', type: 'spontaneous' },
      { text: 'みんなと同じくらいにする', type: 'social' },
      { text: 'コスパ重視', type: 'efficient' },
    ],
  },
  {
    id: 3,
    text: '新しいランチスポットについて',
    options: [
      { text: '口コミを確認してから行く', type: 'planner' },
      { text: '気になったらすぐ行ってみる', type: 'spontaneous' },
      { text: '誰かと一緒に開拓したい', type: 'social' },
      { text: '会社から近い方がいい', type: 'efficient' },
    ],
  },
  {
    id: 4,
    text: 'ランチが混んでいたら？',
    options: [
      { text: '他の店も調べてあるので移動', type: 'planner' },
      { text: '並んででも食べたい', type: 'spontaneous' },
      { text: 'みんなで決める', type: 'social' },
      { text: '空いてる店を探す', type: 'efficient' },
    ],
  },
  {
    id: 5,
    text: 'ランチを食べる時間は？',
    options: [
      { text: 'だいたい決まった時間に', type: 'planner' },
      { text: 'お腹が空いたら', type: 'spontaneous' },
      { text: '周りの人に合わせる', type: 'social' },
      { text: 'なるべく早めに済ませる', type: 'efficient' },
    ],
  },
  {
    id: 6,
    text: '週に何回くらい外食ランチ？',
    options: [
      { text: 'お弁当と外食をバランスよく', type: 'planner' },
      { text: '気分次第で変わる', type: 'spontaneous' },
      { text: '誘われたら行く', type: 'social' },
      { text: 'ほぼ毎日コンビニか社食', type: 'efficient' },
    ],
  },
  {
    id: 7,
    text: 'ランチメニュー選びのポイントは？',
    options: [
      { text: '栄養バランスを考える', type: 'planner' },
      { text: '今一番食べたいもの', type: 'spontaneous' },
      { text: '同じものを頼む人がいると安心', type: 'social' },
      { text: '早く出てくるもの', type: 'efficient' },
    ],
  },
  {
    id: 8,
    text: 'ランチ後のデザートは？',
    options: [
      { text: 'カロリー計算して決める', type: 'planner' },
      { text: '美味しそうなら頼む', type: 'spontaneous' },
      { text: '誰かが頼むなら一緒に', type: 'social' },
      { text: 'デザートまで時間がない', type: 'efficient' },
    ],
  },
  {
    id: 9,
    text: 'ランチ仲間について',
    options: [
      { text: '誰と行くか事前に決める', type: 'planner' },
      { text: '一人でも全然OK', type: 'spontaneous' },
      { text: 'できれば誰かと一緒がいい', type: 'social' },
      { text: '一人の方が早くて楽', type: 'efficient' },
    ],
  },
  {
    id: 10,
    text: 'ランチタイムの理想は？',
    options: [
      { text: '計画通りに進むこと', type: 'planner' },
      { text: '新しい発見があること', type: 'spontaneous' },
      { text: '楽しい会話ができること', type: 'social' },
      { text: '時間を有効に使えること', type: 'efficient' },
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
  planner: {
    type: 'planner',
    title: '計画派ランチャー',
    emoji: '📋',
    percentage: '計画性 95%',
    description: 'ランチも事前リサーチは欠かさない計画派！栄養バランスや予算もしっかり管理。失敗しないランチ選びのプロです。',
    characteristics: ['計画的', 'リサーチ好き', '堅実', '栄養意識高い', 'ルーティン重視'],
    advice: 'たまには計画外の冒険も楽しいですよ！直感で選んでみては？',
  },
  spontaneous: {
    type: 'spontaneous',
    title: '気分屋ランチャー',
    emoji: '🎲',
    percentage: '直感力 92%',
    description: '今日の気分で決める自由なランチスタイル！新しいお店もどんどん開拓。食べたいものを食べたい時に食べる幸せ追求派。',
    characteristics: ['直感的', '冒険好き', '自由奔放', '好奇心旺盛', '楽しさ重視'],
    advice: 'たまには行きつけの安心感も良いものですよ！',
  },
  social: {
    type: 'social',
    title: 'みんな一緒ランチャー',
    emoji: '👥',
    percentage: '協調性 90%',
    description: 'ランチは誰かと一緒が楽しい！みんなで決めて、みんなで楽しむ。コミュニケーションを大切にするランチスタイル。',
    characteristics: ['社交的', '協調性', '気配り上手', 'チームプレイヤー', '和を大切に'],
    advice: 'たまには一人ランチで自分時間を楽しむのもおすすめ！',
  },
  efficient: {
    type: 'efficient',
    title: '効率重視ランチャー',
    emoji: '⚡',
    percentage: '効率性 93%',
    description: 'ランチは素早く、でもしっかり！時間を無駄にしない効率的なランチスタイル。午後の仕事に備えてサクッと済ませる派。',
    characteristics: ['効率的', '時間管理上手', '実用的', 'スピード重視', '合理的'],
    advice: 'たまにはゆっくりランチを楽しむ余裕も持ちましょう！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { planner: 0, spontaneous: 0, social: 0, efficient: 0 };

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
