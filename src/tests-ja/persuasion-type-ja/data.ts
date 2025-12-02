// 説得タイプ診断
export const questions = [
  {
    id: 1,
    text: '友達を映画に誘う時のアプローチは？',
    options: [
      { text: '「評価が高いし、この部分が面白いよ」と具体的に', type: 'rational' },
      { text: '「絶対楽しいよ！一緒に行こう！」と熱く', type: 'emotional' },
      { text: '「あなたが好きそうだと思って」と相手に合わせて', type: 'empathetic' },
      { text: '「みんな行くって言ってるよ」と周りの情報で', type: 'social' },
    ],
  },
  {
    id: 2,
    text: '自分の意見を通したい時は？',
    options: [
      { text: 'データや事例を示す', type: 'rational' },
      { text: '情熱的に語る', type: 'emotional' },
      { text: '相手のメリットを強調する', type: 'empathetic' },
      { text: '賛同者を先に増やす', type: 'social' },
    ],
  },
  {
    id: 3,
    text: '相手が迷っている時は？',
    options: [
      { text: '選択肢のメリット・デメリットを整理', type: 'rational' },
      { text: '「大丈夫、きっとうまくいく！」と励ます', type: 'emotional' },
      { text: '相手が何を大切にしているか聞く', type: 'empathetic' },
      { text: '「多くの人がこれを選んでるよ」と伝える', type: 'social' },
    ],
  },
  {
    id: 4,
    text: 'プレゼンテーションで重視するのは？',
    options: [
      { text: '論理的な構成とデータ', type: 'rational' },
      { text: 'ストーリーと情熱', type: 'emotional' },
      { text: '聴衆のニーズに合わせた内容', type: 'empathetic' },
      { text: '成功事例や社会的証明', type: 'social' },
    ],
  },
  {
    id: 5,
    text: '反対意見を持つ人を説得する時は？',
    options: [
      { text: '相手の論点を一つずつ論破', type: 'rational' },
      { text: '熱意で押し切る', type: 'emotional' },
      { text: '相手の立場を理解した上で対話', type: 'empathetic' },
      { text: '他の人の意見も伝えて参考にしてもらう', type: 'social' },
    ],
  },
  {
    id: 6,
    text: '商品をおすすめする時は？',
    options: [
      { text: 'スペックや機能を詳しく説明', type: 'rational' },
      { text: '「これ本当にいいの！」と感想で', type: 'emotional' },
      { text: '相手に合った使い方を提案', type: 'empathetic' },
      { text: '「人気で売れてるよ」と評判を伝える', type: 'social' },
    ],
  },
  {
    id: 7,
    text: '人を動かすのに一番効果的なのは？',
    options: [
      { text: '合理的な理由を示すこと', type: 'rational' },
      { text: '感情に訴えかけること', type: 'emotional' },
      { text: '相手の視点に立つこと', type: 'empathetic' },
      { text: '周りの動向を伝えること', type: 'social' },
    ],
  },
  {
    id: 8,
    text: 'お願い事をする時は？',
    options: [
      { text: 'なぜ必要なのかを論理的に説明', type: 'rational' },
      { text: '「お願い！」と素直に頼む', type: 'emotional' },
      { text: '相手の都合を聞いてからお願い', type: 'empathetic' },
      { text: '「他の人もやってくれたよ」と伝える', type: 'social' },
    ],
  },
  {
    id: 9,
    text: '説得が成功した時の感覚は？',
    options: [
      { text: '論理が通じた達成感', type: 'rational' },
      { text: '思いが伝わった喜び', type: 'emotional' },
      { text: 'お互いにWin-Winになれた満足', type: 'empathetic' },
      { text: '皆が同意してくれた安心感', type: 'social' },
    ],
  },
  {
    id: 10,
    text: '説得力を上げるために磨きたいのは？',
    options: [
      { text: '知識と分析力', type: 'rational' },
      { text: '表現力と情熱', type: 'emotional' },
      { text: '共感力と傾聴力', type: 'empathetic' },
      { text: '情報収集力とネットワーク', type: 'social' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  style: string;
  description: string;
  characteristics: string[];
  recommendation: string;
}> = {
  rational: {
    type: 'rational',
    title: '論理型説得者',
    emoji: '📊',
    style: '説得スタイル：論理型',
    description: 'データと論理で相手を納得させるあなた！客観的な根拠を示すことで、信頼性の高い説得ができます。ビジネスシーンで特に強い！',
    characteristics: ['分析力', '論理的思考', '信頼性', '説得力', '客観性'],
    recommendation: '感情面にも配慮すると、より多くの人の心を動かせるよ！',
  },
  emotional: {
    type: 'emotional',
    title: '情熱型説得者',
    emoji: '🔥',
    style: '説得スタイル：情熱型',
    description: '情熱とエネルギーで人を動かすあなた！熱い思いが伝染し、周りをやる気にさせます。人を巻き込む力が抜群！',
    characteristics: ['情熱', '表現力', 'エネルギー', '感染力', '行動力'],
    recommendation: '根拠も示すと、説得力がさらにパワーアップ！',
  },
  empathetic: {
    type: 'empathetic',
    title: '共感型説得者',
    emoji: '💗',
    style: '説得スタイル：共感型',
    description: '相手の立場に立って説得するあなた！相手のニーズを理解し、Win-Winの提案ができます。押し付けない優しい説得が魅力！',
    characteristics: ['共感力', '傾聴力', '適応力', '思いやり', 'Win-Win志向'],
    recommendation: '時には自分の主張もはっきり伝えてみよう！',
  },
  social: {
    type: 'social',
    title: '社会的証明型説得者',
    emoji: '👥',
    style: '説得スタイル：社会的証明型',
    description: '周りの動向や評判を活用して説得するあなた！「みんながやっている」という安心感を与えるのが得意。トレンドを押さえた説得術！',
    characteristics: ['情報収集力', '説得力', 'トレンド感覚', '社交性', '影響力'],
    recommendation: '自分自身の意見や根拠も加えると、より深い説得に！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { rational: 0, emotional: 0, empathetic: 0, social: 0 };

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
