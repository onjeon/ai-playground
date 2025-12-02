// 危機対応タイプ診断
export const questions = [
  {
    id: 1,
    text: '突然のトラブルが起きたら？',
    options: [
      { text: 'すぐに行動を起こす', type: 'action' },
      { text: '冷静に状況を分析する', type: 'analytical' },
      { text: '周りと協力して対処する', type: 'collaborative' },
      { text: 'パニックになりがち', type: 'anxious' },
    ],
  },
  {
    id: 2,
    text: '危機的状況での自分の強みは？',
    options: [
      { text: '即座の判断力と行動力', type: 'action' },
      { text: '冷静さと分析力', type: 'analytical' },
      { text: 'チームをまとめる力', type: 'collaborative' },
      { text: '慎重さ', type: 'anxious' },
    ],
  },
  {
    id: 3,
    text: '仕事で緊急事態が発生したら？',
    options: [
      { text: 'まず手を動かして対処', type: 'action' },
      { text: '原因と対策を考える', type: 'analytical' },
      { text: '関係者を集めて相談', type: 'collaborative' },
      { text: '上司や専門家に頼る', type: 'anxious' },
    ],
  },
  {
    id: 4,
    text: '締め切りに間に合わなさそうな時は？',
    options: [
      { text: '睡眠を削ってでも完遂', type: 'action' },
      { text: '優先順位を見直す', type: 'analytical' },
      { text: '助けを求める', type: 'collaborative' },
      { text: '焦って効率が下がる', type: 'anxious' },
    ],
  },
  {
    id: 5,
    text: '予定が急に変更になったら？',
    options: [
      { text: 'すぐに新しい計画を立てる', type: 'action' },
      { text: '変更の影響を考える', type: 'analytical' },
      { text: '関係者と調整する', type: 'collaborative' },
      { text: '混乱してしまう', type: 'anxious' },
    ],
  },
  {
    id: 6,
    text: '大きな決断を迫られた時は？',
    options: [
      { text: '直感で即決する', type: 'action' },
      { text: '情報を集めて検討する', type: 'analytical' },
      { text: '信頼できる人に相談する', type: 'collaborative' },
      { text: '決められず悩む', type: 'anxious' },
    ],
  },
  {
    id: 7,
    text: '友達が危機的状況にある時は？',
    options: [
      { text: 'すぐに駆けつける', type: 'action' },
      { text: '状況を把握してアドバイス', type: 'analytical' },
      { text: '一緒に解決策を考える', type: 'collaborative' },
      { text: '何をすればいいかわからない', type: 'anxious' },
    ],
  },
  {
    id: 8,
    text: '危機を乗り越えた後は？',
    options: [
      { text: 'すぐ次の課題に向かう', type: 'action' },
      { text: '振り返りと教訓化', type: 'analytical' },
      { text: '関係者に感謝を伝える', type: 'collaborative' },
      { text: 'しばらく疲れが取れない', type: 'anxious' },
    ],
  },
  {
    id: 9,
    text: '危機管理で大切だと思うことは？',
    options: [
      { text: 'スピード', type: 'action' },
      { text: '正確な判断', type: 'analytical' },
      { text: 'チームワーク', type: 'collaborative' },
      { text: '準備と予防', type: 'anxious' },
    ],
  },
  {
    id: 10,
    text: '自分の危機対応を一言で？',
    options: [
      { text: '即行動', type: 'action' },
      { text: '冷静沈着', type: 'analytical' },
      { text: '協力と連携', type: 'collaborative' },
      { text: '模索中', type: 'anxious' },
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
  crisisTip: string;
}> = {
  action: {
    type: 'action',
    title: '即行動タイプ',
    emoji: '⚡',
    percentage: '行動力 95%',
    description: '危機に際してすぐに行動を起こすタイプ！判断が早く、スピード感で問題を解決します。',
    characteristics: ['行動力', '決断力', 'スピード', '勇敢', 'リーダーシップ'],
    crisisTip: '時には立ち止まって確認することも大切',
  },
  analytical: {
    type: 'analytical',
    title: '冷静分析タイプ',
    emoji: '🧊',
    percentage: '冷静度 92%',
    description: 'パニックにならず冷静に状況を分析するタイプ！的確な判断で最適な対処法を見つけます。',
    characteristics: ['冷静', '分析力', '論理的', '正確', '判断力'],
    crisisTip: '分析しすぎて行動が遅れないように',
  },
  collaborative: {
    type: 'collaborative',
    title: '協力連携タイプ',
    emoji: '🤝',
    percentage: '協調力 88%',
    description: '周りと協力して危機を乗り越えるタイプ！チームをまとめ、みんなの力を結集させます。',
    characteristics: ['協調性', 'チームワーク', 'コミュニケーション', '調整力', '信頼'],
    crisisTip: '一人で判断すべき時も見極めて',
  },
  anxious: {
    type: 'anxious',
    title: '慎重対応タイプ',
    emoji: '🌊',
    percentage: '慎重度 80%',
    description: '危機的状況に不安を感じやすいタイプ。慎重さは強みだが、パニックになることもあります。',
    characteristics: ['慎重', '繊細', '予防重視', '真面目', '心配性'],
    crisisTip: '深呼吸して、一つずつ対処していこう',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { action: 0, analytical: 0, collaborative: 0, anxious: 0 };

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
