// 情報リテラシー度診断
export const questions = [
  {
    id: 1,
    text: '情報を見た時、まず何をする？',
    options: [
      { text: '情報源を確認する', type: 'high' },
      { text: '内容を検討する', type: 'moderate' },
      { text: 'そのまま信じることが多い', type: 'low' },
      { text: '特に考えない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'SNSで見た情報をシェアする前に',
    options: [
      { text: '複数の情報源で確認する', type: 'high' },
      { text: '信頼できそうか考える', type: 'moderate' },
      { text: 'あまり考えずにシェア', type: 'low' },
      { text: 'すぐにシェアする', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '「拡散希望」の投稿を見たら？',
    options: [
      { text: '事実確認してから判断', type: 'high' },
      { text: '慎重になる', type: 'moderate' },
      { text: 'つい拡散してしまうことも', type: 'low' },
      { text: 'すぐ拡散する', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: 'ネット上の口コミや評価は？',
    options: [
      { text: '参考程度、鵜呑みにしない', type: 'high' },
      { text: 'ある程度参考にする', type: 'moderate' },
      { text: '信じることが多い', type: 'low' },
      { text: 'そのまま信じる', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '統計データやグラフを見る時',
    options: [
      { text: '出典や調査方法を確認', type: 'high' },
      { text: '数字を注意して見る', type: 'moderate' },
      { text: 'あまり疑わない', type: 'low' },
      { text: 'そのまま受け入れる', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '異なる意見の情報に接した時',
    options: [
      { text: '複数の視点から検討する', type: 'high' },
      { text: '自分の意見と比較する', type: 'moderate' },
      { text: '自分に近い意見を支持', type: 'low' },
      { text: '自分の意見だけが正しい', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '著作権や引用のルールは？',
    options: [
      { text: 'よく理解している', type: 'high' },
      { text: 'だいたい知っている', type: 'moderate' },
      { text: 'あまり知らない', type: 'low' },
      { text: '知らない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: 'プライバシー設定について',
    options: [
      { text: '定期的に確認・管理', type: 'high' },
      { text: '一応設定している', type: 'moderate' },
      { text: 'あまり気にしない', type: 'low' },
      { text: '設定したことがない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: 'フィッシング詐欺への対策は？',
    options: [
      { text: '十分に理解し対策している', type: 'high' },
      { text: 'ある程度気をつけている', type: 'moderate' },
      { text: 'よくわからない', type: 'low' },
      { text: '知らない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '情報リテラシーについて',
    options: [
      { text: '常に意識し学び続けている', type: 'high' },
      { text: '意識している', type: 'moderate' },
      { text: 'あまり意識していない', type: 'low' },
      { text: '考えたことがない', type: 'minimal' },
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
  high: {
    type: 'high',
    title: '情報リテラシーマスター',
    emoji: '🔍',
    percentage: 'リテラシー度 MAX',
    description: '情報を見極める力が非常に高い！情報源を確認し、複数の視点から検討できる。デジタル時代に必要なスキルを身につけた情報の達人。',
    characteristics: ['批判的思考', '慎重', '知識豊富', '情報収集力', 'デジタルスキル高い'],
    advice: '素晴らしい情報リテラシー！その知識を周りにも共有してあげてください♪',
  },
  moderate: {
    type: 'moderate',
    title: '情報意識派',
    emoji: '📊',
    percentage: 'リテラシー度 70%',
    description: '情報の信頼性を意識している。すべてを鵜呑みにせず、ある程度は検討できる。基本的な情報リテラシーが身についている。',
    characteristics: ['意識的', 'バランス型', '基本的なスキル', '慎重', '成長中'],
    advice: '良い意識ですね！さらにスキルを磨いて、情報を見極める力を高めましょう♪',
  },
  low: {
    type: 'low',
    title: 'これからリテラシー派',
    emoji: '🌱',
    percentage: 'リテラシー度 40%',
    description: '情報リテラシーの意識がまだ十分ではない。情報を信じやすい傾向があるので、少し注意が必要。でも意識することで改善できる！',
    characteristics: ['改善の余地あり', '信じやすい', '可能性あり', '学びが必要', 'きっかけ待ち'],
    advice: '「これ本当？」と疑う習慣を持つことから始めてみましょう♪',
  },
  minimal: {
    type: 'minimal',
    title: '情報リテラシー初心者',
    emoji: '🔰',
    percentage: 'リテラシー度 20%',
    description: '情報リテラシーへの意識が低い状態。ネット上の情報を鵜呑みにしやすく、リスクがある。基本を学ぶことが大切。',
    characteristics: ['無防備', '情報に疎い', 'リスクあり', '学びが必要', '変化の可能性'],
    advice: 'フェイクニュースについて学んでみると、情報の見方が変わりますよ♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, moderate: 0, low: 0, minimal: 0 };

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
