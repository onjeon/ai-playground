// アイデア発想タイプ
export const questions = [
  {
    id: 1,
    text: 'アイデアが浮かぶのはどんな時？',
    options: [
      { text: 'シャワー中やリラックスしている時', type: 'intuitive' },
      { text: '情報を集めて整理している時', type: 'systematic' },
      { text: '人と話している時', type: 'social' },
      { text: '既存のものを組み合わせている時', type: 'combinative' },
    ],
  },
  {
    id: 2,
    text: 'ブレインストーミングでの役割は？',
    options: [
      { text: '突拍子もないアイデアを出す', type: 'intuitive' },
      { text: 'アイデアを整理・構造化する', type: 'systematic' },
      { text: '人のアイデアを膨らませる', type: 'social' },
      { text: '異なるアイデアを結びつける', type: 'combinative' },
    ],
  },
  {
    id: 3,
    text: 'アイデアに行き詰まった時は？',
    options: [
      { text: '散歩したり違うことをする', type: 'intuitive' },
      { text: 'フレームワークを使って考える', type: 'systematic' },
      { text: '誰かに相談してみる', type: 'social' },
      { text: '全く違う分野を調べてみる', type: 'combinative' },
    ],
  },
  {
    id: 4,
    text: 'インスピレーションの源は？',
    options: [
      { text: '日常の何気ない出来事', type: 'intuitive' },
      { text: '本やデータ、研究結果', type: 'systematic' },
      { text: '人との会話や経験談', type: 'social' },
      { text: '異業種や異文化の事例', type: 'combinative' },
    ],
  },
  {
    id: 5,
    text: 'アイデアをメモする方法は？',
    options: [
      { text: '思いついたらすぐスマホにメモ', type: 'intuitive' },
      { text: 'ノートに体系的に整理', type: 'systematic' },
      { text: '人に話して記録してもらう', type: 'social' },
      { text: 'マインドマップで関連づけ', type: 'combinative' },
    ],
  },
  {
    id: 6,
    text: 'アイデアの評価方法は？',
    options: [
      { text: '直感的に「いける」と思うか', type: 'intuitive' },
      { text: '実現可能性を論理的に検討', type: 'systematic' },
      { text: '周りの反応を見て判断', type: 'social' },
      { text: '他のアイデアとの相性で判断', type: 'combinative' },
    ],
  },
  {
    id: 7,
    text: '新商品・新サービスを考える時は？',
    options: [
      { text: 'まだ世にないものを想像', type: 'intuitive' },
      { text: '市場調査から課題を発見', type: 'systematic' },
      { text: 'ユーザーの声を聞いてみる', type: 'social' },
      { text: '既存サービスを掛け合わせる', type: 'combinative' },
    ],
  },
  {
    id: 8,
    text: 'クリエイティブな作業環境は？',
    options: [
      { text: '一人で静かに集中できる場所', type: 'intuitive' },
      { text: '資料が手に届く整理された場所', type: 'systematic' },
      { text: 'カフェなど人の気配がある場所', type: 'social' },
      { text: '様々な刺激がある場所', type: 'combinative' },
    ],
  },
  {
    id: 9,
    text: 'アイデアの量と質について？',
    options: [
      { text: 'まずは量、質は後から磨く', type: 'intuitive' },
      { text: '最初から質の高いものを厳選', type: 'systematic' },
      { text: 'みんなで出し合って選ぶ', type: 'social' },
      { text: '量も質も組み合わせ次第', type: 'combinative' },
    ],
  },
  {
    id: 10,
    text: 'アイデア発想で大切にしていることは？',
    options: [
      { text: '自由な発想と直感', type: 'intuitive' },
      { text: '論理的な思考プロセス', type: 'systematic' },
      { text: '多様な視点の取り入れ', type: 'social' },
      { text: '異なる要素の融合', type: 'combinative' },
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
  intuitive: {
    type: 'intuitive',
    title: '直感型イノベーター',
    emoji: '✨',
    percentage: '直感力 95%',
    description: '天から降ってくるようなひらめきで革新的なアイデアを生み出すタイプ。リラックスした状態で突然「来る」瞬間を大切にしています。天才肌のアイデアマン！',
    characteristics: ['直感力', '独創性', '自由な発想', 'ひらめき', '型破り'],
    recommendation: 'アイデアを形にする実行力も磨いて！',
  },
  systematic: {
    type: 'systematic',
    title: '体系型プランナー',
    emoji: '📐',
    percentage: '論理性 92%',
    description: 'フレームワークや手法を使って論理的にアイデアを導き出すタイプ。データや情報を整理し、確実性の高いアイデアを生み出します。堅実なアイデアメーカー！',
    characteristics: ['論理的', '体系的', '分析力', '確実性', '再現性'],
    recommendation: '時には論理を超えた飛躍も試してみて！',
  },
  social: {
    type: 'social',
    title: '対話型クリエイター',
    emoji: '💬',
    percentage: '対話力 90%',
    description: '人との会話やディスカッションからアイデアを生み出すタイプ。他者の視点を取り入れ、集合知でアイデアを磨き上げます。コラボレーションの達人！',
    characteristics: ['傾聴力', 'コミュニケーション', '共感力', '協調性', '巻き込み力'],
    recommendation: '一人で考える時間も作ってみて！',
  },
  combinative: {
    type: 'combinative',
    title: '組み合わせ型アーティスト',
    emoji: '🔗',
    percentage: '融合力 93%',
    description: '異なる分野やアイデアを組み合わせて新しい価値を生み出すタイプ。A×Bで全く新しいCを生み出す、掛け算思考の持ち主！',
    characteristics: ['融合力', '多角的視点', '好奇心', '連想力', 'クロスオーバー'],
    recommendation: '幅広い分野にアンテナを張り続けて！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { intuitive: 0, systematic: 0, social: 0, combinative: 0 };

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
