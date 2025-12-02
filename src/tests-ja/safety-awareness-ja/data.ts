// 安全意識度診断
export const questions = [
  {
    id: 1,
    text: '道を歩く時、意識していることは？',
    options: [
      { text: '周囲の状況を常に確認', type: 'high' },
      { text: '交通ルールを守る', type: 'moderate' },
      { text: 'スマホを見ながら歩くこともある', type: 'low' },
      { text: '特に意識していない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '家を出る時に確認することは？',
    options: [
      { text: '火の元、戸締り、全て確認', type: 'high' },
      { text: '鍵をかけたか確認', type: 'moderate' },
      { text: '急いでいる時は忘れがち', type: 'low' },
      { text: 'あまり確認しない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '夜道を歩く時は？',
    options: [
      { text: '明るい道を選び、警戒している', type: 'high' },
      { text: 'なるべく早く帰るようにする', type: 'moderate' },
      { text: 'イヤホンで音楽を聴くこともある', type: 'low' },
      { text: '特に変わらない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: 'パスワード管理について？',
    options: [
      { text: 'サービスごとに複雑なパスワード', type: 'high' },
      { text: 'いくつかのパスワードを使い分け', type: 'moderate' },
      { text: 'ほぼ同じパスワード', type: 'low' },
      { text: '簡単なパスワード', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '怪しいメールやリンクが来たら？',
    options: [
      { text: '絶対に開かない、報告する', type: 'high' },
      { text: '開かないようにしている', type: 'moderate' },
      { text: 'つい開いてしまうことも', type: 'low' },
      { text: '気にしていない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '自転車やバイクの運転時は？',
    options: [
      { text: 'ヘルメット着用、完全装備', type: 'high' },
      { text: '基本的なルールは守る', type: 'moderate' },
      { text: 'たまにルール違反することも', type: 'low' },
      { text: 'あまり気にしない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '健康管理について？',
    options: [
      { text: '定期健診、日々の管理を徹底', type: 'high' },
      { text: '年に一度は健康診断', type: 'moderate' },
      { text: '体調が悪くなったら対処', type: 'low' },
      { text: '特に意識していない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '知らない人からの連絡や訪問者には？',
    options: [
      { text: '慎重に対応、すぐに開けない', type: 'high' },
      { text: '確認してから対応', type: 'moderate' },
      { text: 'とりあえず対応する', type: 'low' },
      { text: '気にせず対応', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: 'SNSへの投稿内容は？',
    options: [
      { text: '個人情報や位置情報に細心の注意', type: 'high' },
      { text: 'ある程度は気をつけている', type: 'moderate' },
      { text: 'リアルタイムで投稿することもある', type: 'low' },
      { text: '特に気にしていない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '安全に対する意識は？',
    options: [
      { text: '常に高い意識を持っている', type: 'high' },
      { text: '普通程度には意識している', type: 'moderate' },
      { text: '時々油断してしまう', type: 'low' },
      { text: '自分は大丈夫と思っている', type: 'minimal' },
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
  safetyTip: string;
}> = {
  high: {
    type: 'high',
    title: '安全意識マスター',
    emoji: '🛡️',
    percentage: '安全意識 95%',
    description: '非常に高い安全意識を持ち、日常のあらゆる場面でリスクを意識しているタイプ！自分と大切な人を守る力があります。',
    characteristics: ['慎重', '用心深い', '責任感', '計画的', '信頼できる'],
    safetyTip: '周りにも安全意識を広めていこう',
  },
  moderate: {
    type: 'moderate',
    title: '安全意識派',
    emoji: '✅',
    percentage: '安全意識 70%',
    description: '基本的な安全意識があり、一般的なリスク管理はできているタイプ。もう少し意識を高めるとより安心です。',
    characteristics: ['バランス', '常識的', '普通', '改善余地あり', '成長中'],
    safetyTip: '日常の小さなリスクにも目を向けてみよう',
  },
  low: {
    type: 'low',
    title: '安全意識成長中',
    emoji: '🌱',
    percentage: '安全意識 45%',
    description: '安全意識はあるものの、時々油断してしまうタイプ。小さな習慣から意識を高めていきましょう。',
    characteristics: ['油断しがち', '楽観的', 'これから', '伸びしろ', '学び中'],
    safetyTip: '「まさか」を「もしかしたら」に変えてみよう',
  },
  minimal: {
    type: 'minimal',
    title: '要注意タイプ',
    emoji: '⚠️',
    percentage: '安全意識 25%',
    description: '安全への意識がまだ低いタイプ。自分は大丈夫という過信は危険です。今日から意識を変えていきましょう！',
    characteristics: ['要改善', '楽観すぎ', '無頓着', '潜在リスク', 'スタート地点'],
    safetyTip: '小さなことから安全習慣を始めよう',
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
