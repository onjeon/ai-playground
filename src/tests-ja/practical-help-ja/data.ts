// 実践的サポートタイプ診断
export const questions = [
  {
    id: 1,
    text: '友達が引っ越しすると聞いたら？',
    options: [
      { text: '手伝いに行く', type: 'doer' },
      { text: '必要なものを調べて教える', type: 'informer' },
      { text: '費用を一部負担する', type: 'provider' },
      { text: '段取りを一緒に計画する', type: 'planner' },
    ],
  },
  {
    id: 2,
    text: '困っている人を見たら？',
    options: [
      { text: 'すぐに手を貸す', type: 'doer' },
      { text: '役立つ情報を提供する', type: 'informer' },
      { text: '物資やお金で支援する', type: 'provider' },
      { text: '効率的な解決策を提案する', type: 'planner' },
    ],
  },
  {
    id: 3,
    text: '得意なサポート方法は？',
    options: [
      { text: '実際に体を動かして手伝う', type: 'doer' },
      { text: '詳しい情報を集めて伝える', type: 'informer' },
      { text: '必要なものを用意する', type: 'provider' },
      { text: '計画や段取りを立てる', type: 'planner' },
    ],
  },
  {
    id: 4,
    text: '友達が就職活動で悩んでいたら？',
    options: [
      { text: '面接練習に付き合う', type: 'doer' },
      { text: '企業情報や対策を調べて共有', type: 'informer' },
      { text: '必要な本や講座をプレゼント', type: 'provider' },
      { text: 'スケジュールと戦略を立てる', type: 'planner' },
    ],
  },
  {
    id: 5,
    text: 'チームで問題が起きた時の役割は？',
    options: [
      { text: '実際に手を動かして解決', type: 'doer' },
      { text: '必要な情報を集める', type: 'informer' },
      { text: 'リソースを確保する', type: 'provider' },
      { text: '解決プランを立てる', type: 'planner' },
    ],
  },
  {
    id: 6,
    text: '一番やりがいを感じるのは？',
    options: [
      { text: '直接的に役に立てた時', type: 'doer' },
      { text: '情報が役に立った時', type: 'informer' },
      { text: '提供したものが助けになった時', type: 'provider' },
      { text: '計画がうまくいった時', type: 'planner' },
    ],
  },
  {
    id: 7,
    text: '災害ボランティアなら？',
    options: [
      { text: '現場で作業する', type: 'doer' },
      { text: '情報収集と発信を担当', type: 'informer' },
      { text: '物資を集めて届ける', type: 'provider' },
      { text: '活動の計画と調整', type: 'planner' },
    ],
  },
  {
    id: 8,
    text: '友達のイベント準備を手伝うなら？',
    options: [
      { text: '会場設営や買い出し', type: 'doer' },
      { text: '必要な情報のリサーチ', type: 'informer' },
      { text: '備品や費用の提供', type: 'provider' },
      { text: 'タイムテーブル作成', type: 'planner' },
    ],
  },
  {
    id: 9,
    text: 'サポートする時に苦手なのは？',
    options: [
      { text: '長時間の情報収集', type: 'doer' },
      { text: '体を使う作業', type: 'informer' },
      { text: '計画を立てること', type: 'provider' },
      { text: '現場対応', type: 'planner' },
    ],
  },
  {
    id: 10,
    text: 'あなたの実践的サポートを一言で？',
    options: [
      { text: '体で助ける', type: 'doer' },
      { text: '知識で助ける', type: 'informer' },
      { text: 'モノで助ける', type: 'provider' },
      { text: '頭で助ける', type: 'planner' },
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
  helpStyle: string;
}> = {
  doer: {
    type: 'doer',
    title: '行動派サポーター',
    emoji: '💪',
    percentage: '行動力 95%',
    description: '実際に体を動かして助けるタイプ！現場に駆けつけ、直接的な行動でサポートします。',
    characteristics: ['行動的', '実行力', '頼りになる', 'フットワーク軽い', 'パワフル'],
    helpStyle: 'すぐに駆けつけて手を貸す',
  },
  informer: {
    type: 'informer',
    title: '情報提供サポーター',
    emoji: '📚',
    percentage: '情報力 90%',
    description: '必要な情報を集めて提供するタイプ！知識と調査力で的確な情報サポートをします。',
    characteristics: ['リサーチ力', '知識豊富', '詳しい', '正確', '頼れる'],
    helpStyle: '役立つ情報を調べて伝える',
  },
  provider: {
    type: 'provider',
    title: '物資提供サポーター',
    emoji: '🎁',
    percentage: '提供力 88%',
    description: '必要なものを用意して提供するタイプ！物資やお金で具体的にサポートします。',
    characteristics: ['気前がいい', '太っ腹', '準備上手', '物質的サポート', '頼りになる'],
    helpStyle: '必要なものを届ける',
  },
  planner: {
    type: 'planner',
    title: '計画派サポーター',
    emoji: '📋',
    percentage: '計画力 85%',
    description: '効率的な計画を立ててサポートするタイプ！段取りと調整で円滑な進行を支えます。',
    characteristics: ['計画的', '論理的', '調整力', '先見性', '効率的'],
    helpStyle: '最適なプランを立てる',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { doer: 0, informer: 0, provider: 0, planner: 0 };

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
