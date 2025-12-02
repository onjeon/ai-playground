// 辛いもの耐性診断
export const questions = [
  {
    id: 1,
    text: 'カレーの辛さは何を選ぶ？',
    options: [
      { text: '激辛・鬼辛', type: 'extreme' },
      { text: '辛口', type: 'spicy' },
      { text: '中辛', type: 'medium' },
      { text: '甘口・マイルド', type: 'mild' },
    ],
  },
  {
    id: 2,
    text: 'ラーメン屋で辛さ選択があったら？',
    options: [
      { text: '最高レベルに挑戦', type: 'extreme' },
      { text: '辛めを選ぶ', type: 'spicy' },
      { text: '普通でいい', type: 'medium' },
      { text: '辛くないのがいい', type: 'mild' },
    ],
  },
  {
    id: 3,
    text: '韓国料理を食べる時',
    options: [
      { text: '本場の辛さで頼む', type: 'extreme' },
      { text: '辛いものを中心に注文', type: 'spicy' },
      { text: '辛くないものも混ぜる', type: 'medium' },
      { text: '辛くない料理を選ぶ', type: 'mild' },
    ],
  },
  {
    id: 4,
    text: '一味・七味唐辛子の使い方',
    options: [
      { text: '真っ赤になるくらいかける', type: 'extreme' },
      { text: '多めにふりかける', type: 'spicy' },
      { text: '適度に使う', type: 'medium' },
      { text: 'ほとんど使わない', type: 'mild' },
    ],
  },
  {
    id: 5,
    text: 'タバスコの使い方',
    options: [
      { text: 'ドバドバかける', type: 'extreme' },
      { text: '結構使う方', type: 'spicy' },
      { text: '数滴で十分', type: 'medium' },
      { text: '苦手で使わない', type: 'mild' },
    ],
  },
  {
    id: 6,
    text: '辛いものを食べた時の反応',
    options: [
      { text: '全然平気、物足りないくらい', type: 'extreme' },
      { text: '汗はかくけど美味しい', type: 'spicy' },
      { text: '程よい刺激で満足', type: 'medium' },
      { text: '口がヒリヒリして苦しい', type: 'mild' },
    ],
  },
  {
    id: 7,
    text: '激辛チャレンジ企画について',
    options: [
      { text: '積極的に参加したい！', type: 'extreme' },
      { text: '興味あるかも', type: 'spicy' },
      { text: '見てるだけで十分', type: 'medium' },
      { text: '理解できない', type: 'mild' },
    ],
  },
  {
    id: 8,
    text: 'わさびの使い方',
    options: [
      { text: '山盛りにして食べる', type: 'extreme' },
      { text: '多めにつける', type: 'spicy' },
      { text: '適量をつける', type: 'medium' },
      { text: 'なしか少量', type: 'mild' },
    ],
  },
  {
    id: 9,
    text: '麻辣（マーラー）料理について',
    options: [
      { text: '大好き！痺れが最高', type: 'extreme' },
      { text: '結構好き', type: 'spicy' },
      { text: '時々なら', type: 'medium' },
      { text: '苦手', type: 'mild' },
    ],
  },
  {
    id: 10,
    text: '辛さを求める理由は？',
    options: [
      { text: '刺激が快感だから', type: 'extreme' },
      { text: '食欲が増すから', type: 'spicy' },
      { text: 'アクセントとして', type: 'medium' },
      { text: '辛さは求めていない', type: 'mild' },
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
  extreme: {
    type: 'extreme',
    title: '激辛マスター',
    emoji: '🔥',
    percentage: '辛さ耐性 MAX',
    description: '辛さの限界に挑戦し続ける激辛愛好家！普通の辛さでは物足りない、真のスパイシーハンター。辛いものを食べている時が一番幸せ。',
    characteristics: ['刺激を求める', 'チャレンジ精神', '忍耐力抜群', '冒険好き', 'ドーパミン型'],
    advice: '胃腸にはお気をつけて！激辛仲間との情報交換も楽しそう♪',
  },
  spicy: {
    type: 'spicy',
    title: '辛党タイプ',
    emoji: '🌶️',
    percentage: '辛さ耐性 85%',
    description: '辛いもの大好き！食事に刺激を求めるスパイシー派。汗をかきながら美味しく完食。辛さで食欲増進タイプ。',
    characteristics: ['辛いもの好き', '食欲旺盛', '代謝良好', '冒険心あり', 'ストレス発散上手'],
    advice: '辛さのバリエーションを広げて、世界の辛い料理を制覇！',
  },
  medium: {
    type: 'medium',
    title: 'ほどほど辛さ派',
    emoji: '🫑',
    percentage: '辛さ耐性 55%',
    description: '程よい辛さが心地いい。刺激は欲しいけど、味わいも大切にしたいバランス派。辛すぎず甘すぎずが理想。',
    characteristics: ['バランス型', '味覚重視', '安定志向', '協調性', '中庸を好む'],
    advice: 'ちょうどいいバランス感覚！たまには辛さに挑戦しても楽しいかも？',
  },
  mild: {
    type: 'mild',
    title: '辛さ控えめ派',
    emoji: '🥛',
    percentage: '辛さ耐性 20%',
    description: '辛いものは苦手…でもそれも立派な個性！素材の味を大切にする繊細な味覚の持ち主。優しい味付けが好き。',
    characteristics: ['繊細な味覚', '優しい性格', '素材重視', '穏やか', '自分を知っている'],
    advice: 'マイペースで素敵！でも少しずつ慣らすと新しい世界が開けるかも？',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { extreme: 0, spicy: 0, medium: 0, mild: 0 };

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
