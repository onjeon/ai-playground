// 敵との付き合い方診断 (적 대처법 테스트)
export const questions = [
  {
    id: 1,
    text: '自分を嫌う人がいると分かったら？',
    options: [
      { text: '原因を探り、関係改善を試みる', type: 'diplomatic' },
      { text: '気にせず距離を置く', type: 'avoidant' },
      { text: '正面から向き合い、話し合う', type: 'confrontational' },
      { text: '敵の味方を増やして孤立させる', type: 'strategic' },
    ],
  },
  {
    id: 2,
    text: '悪口を言われていると知ったら？',
    options: [
      { text: '誤解を解くために話しかける', type: 'diplomatic' },
      { text: 'スルーする', type: 'avoidant' },
      { text: '直接「何か問題がある？」と聞く', type: 'confrontational' },
      { text: '証拠を集めて対策を練る', type: 'strategic' },
    ],
  },
  {
    id: 3,
    text: '職場で敵対的な人がいたら？',
    options: [
      { text: '仕事上は協力する姿勢を見せる', type: 'diplomatic' },
      { text: '必要最低限の関わりにする', type: 'avoidant' },
      { text: 'はっきり意見を言い合う', type: 'confrontational' },
      { text: '味方を増やして優位に立つ', type: 'strategic' },
    ],
  },
  {
    id: 4,
    text: '理不尽な攻撃を受けた時は？',
    options: [
      { text: '冷静に対応し、相手の気持ちも考える', type: 'diplomatic' },
      { text: '無視して離れる', type: 'avoidant' },
      { text: '言い返す、反論する', type: 'confrontational' },
      { text: '記録して後で有利に使う', type: 'strategic' },
    ],
  },
  {
    id: 5,
    text: '敵を作らないコツは？',
    options: [
      { text: '誰とでも良い関係を築く努力', type: 'diplomatic' },
      { text: '余計な関わりを避ける', type: 'avoidant' },
      { text: '自分の意見はっきり言って誤解を防ぐ', type: 'confrontational' },
      { text: '相手より優位に立っておく', type: 'strategic' },
    ],
  },
  {
    id: 6,
    text: 'グループ内で対立が生じた時は？',
    options: [
      { text: '仲裁役を買って出る', type: 'diplomatic' },
      { text: '巻き込まれないようにする', type: 'avoidant' },
      { text: '自分の立場を明確にする', type: 'confrontational' },
      { text: '状況を見極めて有利な側につく', type: 'strategic' },
    ],
  },
  {
    id: 7,
    text: '過去に敵だった人と再会したら？',
    options: [
      { text: 'わだかまりを解消しようとする', type: 'diplomatic' },
      { text: '気づかないふりをする', type: 'avoidant' },
      { text: '過去のことを話し合う', type: 'confrontational' },
      { text: '今の力関係を確認する', type: 'strategic' },
    ],
  },
  {
    id: 8,
    text: '敵の弱点を知ったら？',
    options: [
      { text: '使わない、人として正々堂々と', type: 'diplomatic' },
      { text: '関わらないので関係ない', type: 'avoidant' },
      { text: '必要なら指摘することも', type: 'confrontational' },
      { text: 'いざという時のために覚えておく', type: 'strategic' },
    ],
  },
  {
    id: 9,
    text: '敵を味方に変えることは？',
    options: [
      { text: '積極的に試みる', type: 'diplomatic' },
      { text: '無理はしない', type: 'avoidant' },
      { text: 'お互いが納得すれば', type: 'confrontational' },
      { text: '有利になるなら', type: 'strategic' },
    ],
  },
  {
    id: 10,
    text: '「敵」という存在について？',
    options: [
      { text: 'できれば作りたくない', type: 'diplomatic' },
      { text: '関わらなければ問題ない', type: 'avoidant' },
      { text: '時には必要な存在', type: 'confrontational' },
      { text: '競争社会では避けられない', type: 'strategic' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  handlingStyle: string[];
  strengths: string[];
  warnings: string[];
}> = {
  diplomatic: {
    type: 'diplomatic',
    title: '外交的和解タイプ',
    emoji: '🕊️',
    description: 'あなたは敵も味方に変えようとする外交官タイプ！対立を避け、話し合いで解決しようとします。人間関係を大切にする平和主義者。',
    handlingStyle: ['話し合いで解決', '関係改善を試みる', '相手の立場も考える'],
    strengths: ['敵が少ない', '信頼される', '平和的解決'],
    warnings: ['お人好しになりすぎない', '舐められないように', '時には毅然とした態度も'],
  },
  avoidant: {
    type: 'avoidant',
    title: '距離を置くタイプ',
    emoji: '🚶',
    description: 'あなたは敵とは関わらない賢明なタイプ！無駄な争いを避け、自分の平穏を守ります。ストレスを溜めない処世術の持ち主。',
    handlingStyle: ['距離を置く', 'スルースキル', '巻き込まれない'],
    strengths: ['ストレスが少ない', '無駄な争いを避ける', '平穏を保てる'],
    warnings: ['逃げ続けると問題が大きくなることも', '必要な対決は避けないで', '孤立しないように'],
  },
  confrontational: {
    type: 'confrontational',
    title: '正面突破タイプ',
    emoji: '⚔️',
    description: 'あなたは問題に正面から向き合う勇敢なタイプ！曖昧にせず、はっきり意見を言います。フェアな戦いを好む正々堂々とした性格。',
    handlingStyle: ['直接対決', 'はっきり言う', '正面から向き合う'],
    strengths: ['問題を放置しない', '誤解を生まない', '尊敬される'],
    warnings: ['感情的にならないで', '言い方に気をつけて', '無駄な敵を作らないように'],
  },
  strategic: {
    type: 'strategic',
    title: '戦略的対処タイプ',
    emoji: '🧠',
    description: 'あなたは冷静に状況を分析する策士タイプ！感情に流されず、有利な立場を確保します。計算高く、したたかに生き抜く知恵があります。',
    handlingStyle: ['状況分析', '味方を増やす', '有利な立場を確保'],
    strengths: ['感情に流されない', '負けない', '先を読める'],
    warnings: ['信頼を失わないように', '人間味も大切に', '計算だけでは人は動かない'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { diplomatic: 0, avoidant: 0, confrontational: 0, strategic: 0 };

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
