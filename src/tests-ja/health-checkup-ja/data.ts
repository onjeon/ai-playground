// 健康診断への態度診断 - あなたは健康診断にどう向き合う？
export const questions = [
  {
    id: 1,
    text: '健康診断の通知が届いたとき、最初に思うことは？',
    options: [
      { text: 'すぐに予約しよう', type: 'proactive' },
      { text: 'まあ、そのうち行こう', type: 'passive' },
      { text: '正直、行きたくない…', type: 'avoidant' },
      { text: '結果がわかるのが楽しみ', type: 'positive' },
    ],
  },
  {
    id: 2,
    text: '健康診断の前日、どう過ごす？',
    options: [
      { text: '食事制限をしっかり守る', type: 'proactive' },
      { text: '一応気をつけるけど完璧じゃない', type: 'passive' },
      { text: 'つい食べてしまって後悔', type: 'avoidant' },
      { text: '体をベストな状態にするチャンス', type: 'positive' },
    ],
  },
  {
    id: 3,
    text: '採血のとき、どんな気持ち？',
    options: [
      { text: '必要なことだから平気', type: 'proactive' },
      { text: 'ちょっと苦手だけど我慢', type: 'passive' },
      { text: '針が怖くて憂鬱…', type: 'avoidant' },
      { text: '自分の体の状態がわかってワクワク', type: 'positive' },
    ],
  },
  {
    id: 4,
    text: 'バリウム検査（胃の検査）について',
    options: [
      { text: '必要なら受ける', type: 'proactive' },
      { text: 'できれば避けたいけど仕方ない', type: 'passive' },
      { text: '絶対イヤ、受けたくない', type: 'avoidant' },
      { text: '技術の進歩に感謝しつつ受ける', type: 'positive' },
    ],
  },
  {
    id: 5,
    text: '健康診断の結果を待つ間、どう感じる？',
    options: [
      { text: '冷静に待つ、何かあれば対処するだけ', type: 'proactive' },
      { text: '少しドキドキするけどまあ大丈夫かな', type: 'passive' },
      { text: '不安で仕方ない、悪い結果だったらどうしよう', type: 'avoidant' },
      { text: '結果を見て健康管理に活かそう', type: 'positive' },
    ],
  },
  {
    id: 6,
    text: '結果で「要経過観察」が出たら？',
    options: [
      { text: 'すぐに生活習慣を見直す', type: 'proactive' },
      { text: 'とりあえず様子を見る', type: 'passive' },
      { text: '見なかったことにしたい…', type: 'avoidant' },
      { text: '早期発見できてラッキーと捉える', type: 'positive' },
    ],
  },
  {
    id: 7,
    text: '「要再検査」の通知が来たら？',
    options: [
      { text: 'すぐに病院を予約する', type: 'proactive' },
      { text: '行かなきゃと思いつつ先延ばし', type: 'passive' },
      { text: '怖くて開けられない…', type: 'avoidant' },
      { text: '詳しく調べてもらえるチャンス', type: 'positive' },
    ],
  },
  {
    id: 8,
    text: '健康診断の頻度について',
    options: [
      { text: '年1回は必ず受ける', type: 'proactive' },
      { text: '会社や自治体の案内があれば受ける', type: 'passive' },
      { text: '何年も受けていない…', type: 'avoidant' },
      { text: 'オプション検査も積極的に受ける', type: 'positive' },
    ],
  },
  {
    id: 9,
    text: '人間ドックについてどう思う？',
    options: [
      { text: '定期的に受けるべき', type: 'proactive' },
      { text: 'いつか受けたいと思っている', type: 'passive' },
      { text: 'お金もかかるし必要ない', type: 'avoidant' },
      { text: '自分への投資として重要', type: 'positive' },
    ],
  },
  {
    id: 10,
    text: '健康診断に対する正直な気持ちは？',
    options: [
      { text: '健康管理の基本として大切', type: 'proactive' },
      { text: '義務だから仕方なく受ける', type: 'passive' },
      { text: 'できれば避けたい', type: 'avoidant' },
      { text: '自分の体と向き合える貴重な機会', type: 'positive' },
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
  proactive: {
    type: 'proactive',
    title: '健康管理優等生タイプ',
    emoji: '✅',
    percentage: '健康意識 90%',
    description: '健康診断を当然のこととして受け入れ、しっかり対応できるあなた。結果に基づいて行動できる自己管理能力の高さは素晴らしいです。予防医療の大切さを理解している現代的な健康観の持ち主。',
    characteristics: ['自己管理力', '計画的', '責任感', '冷静', '予防意識'],
    advice: 'その姿勢を続けてください。周りにも良い影響を与えているはず！',
  },
  passive: {
    type: 'passive',
    title: 'まあまあ受け身タイプ',
    emoji: '😅',
    percentage: '健康意識 55%',
    description: '健康診断の必要性は分かっているけど、なんとなく後回しにしがちなあなた。「案内が来たら受ける」という受け身の姿勢は多くの人と同じ。でももう少し積極的になると、将来の自分が喜ぶかも。',
    characteristics: ['マイペース', '楽観的', '面倒くさがり', '現状維持', '普通'],
    advice: '後回しにしがちな気持ちはわかる！でも予約だけでも先にしておこう。',
  },
  avoidant: {
    type: 'avoidant',
    title: '健診怖い…回避タイプ',
    emoji: '🙈',
    percentage: '健康診断ストレス 80%',
    description: '健康診断に対して恐怖や不安を感じるあなた。「知らない方がいい」と思ってしまう気持ち、わかります。でも、早期発見は治療の選択肢を広げます。勇気を出して一歩踏み出してみて。',
    characteristics: ['繊細', '心配性', '回避傾向', 'ストレス感受性', '想像力豊か'],
    advice: '怖い気持ちは自然なこと。でも受けた後の安心感は格別です。一歩だけ踏み出してみて。',
  },
  positive: {
    type: 'positive',
    title: '健康ポジティブタイプ',
    emoji: '🌟',
    percentage: '健康ポジティブ度 100%',
    description: '健康診断を自分の体を知る良い機会と捉えられるあなた。結果が良くても悪くても前向きに活かせる姿勢は最高です。健康に対する理想的なマインドセットの持ち主。',
    characteristics: ['ポジティブ', '好奇心旺盛', '自己投資意識', '成長志向', '感謝の心'],
    advice: '素晴らしい姿勢！その前向きさが実際の健康にも良い影響を与えています。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { proactive: 0, passive: 0, avoidant: 0, positive: 0 };

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
