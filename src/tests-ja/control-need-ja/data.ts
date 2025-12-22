// コントロール欲求診断 - あなたはどれくらい支配したい？
export const questions = [
  {
    id: 1,
    text: 'グループ旅行の計画、どうしたい？',
    options: [
      { text: '自分が全部決めたい', type: 'high' },
      { text: '主導権は握りつつ意見も聞く', type: 'moderate' },
      { text: '提案はするけど最終決定は任せる', type: 'low' },
      { text: '誰かが決めてくれると助かる', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'チームプロジェクトでの役割は？',
    options: [
      { text: 'リーダーとして全体を管理したい', type: 'high' },
      { text: '重要な決定には関わりたい', type: 'moderate' },
      { text: '自分の担当をしっかりやりたい', type: 'low' },
      { text: '指示をもらって動く方が楽', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '他人が自分と違うやり方をしていると？',
    options: [
      { text: '正しいやり方を教えたくなる', type: 'high' },
      { text: '気になるけど、うまくいってるなら見守る', type: 'moderate' },
      { text: '人それぞれだと思う', type: 'low' },
      { text: '自分のやり方に自信がないからむしろ参考にする', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '予定が急に変更になったら？',
    options: [
      { text: 'イライラする、なぜ相談なしに？', type: 'high' },
      { text: '理由を聞いて納得したい', type: 'moderate' },
      { text: 'まあ仕方ないかと受け入れる', type: 'low' },
      { text: '決めてもらえると楽なので問題なし', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '会議やミーティングで',
    options: [
      { text: '進行役をやりたい、話をまとめたい', type: 'high' },
      { text: '重要な議題では発言したい', type: 'moderate' },
      { text: '必要な時だけ発言する', type: 'low' },
      { text: '基本的に聞いている側', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '家族や恋人との関係で',
    options: [
      { text: 'スケジュールや予算は自分が管理したい', type: 'high' },
      { text: '大きな決定は一緒に、でも主導は取りたい', type: 'moderate' },
      { text: '相手の意見を尊重して決める', type: 'low' },
      { text: '相手に任せることが多い', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '部下や後輩への指導スタイルは？',
    options: [
      { text: '細かく指示を出して管理する', type: 'high' },
      { text: '方向性は示すが、やり方は任せる', type: 'moderate' },
      { text: '困った時に相談に乗る程度', type: 'low' },
      { text: '教えるのが苦手、見て覚えてほしい', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '自分の意見が通らなかったとき',
    options: [
      { text: '納得いかない、なんとか覆したい', type: 'high' },
      { text: '残念だけど、別の機会を狙う', type: 'moderate' },
      { text: '多数の意見なら仕方ない', type: 'low' },
      { text: 'そもそも強く主張していない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '誰かに仕事を頼むとき',
    options: [
      { text: '細かくやり方まで指定する', type: 'high' },
      { text: 'ゴールは明確に、プロセスは任せる', type: 'moderate' },
      { text: 'お願いして、あとは信頼して待つ', type: 'low' },
      { text: '頼むより自分でやった方が早いと思う', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '「コントロールフリーク」と言われたら？',
    options: [
      { text: '当たっているかも、でも必要なこと', type: 'high' },
      { text: '責任感が強いだけだと思う', type: 'moderate' },
      { text: 'え、そうかな？と意外に思う', type: 'low' },
      { text: '全然違う、むしろ受け身なのに', type: 'minimal' },
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
    title: '完全掌握タイプ',
    emoji: '👑',
    percentage: 'コントロール欲求 95%',
    description: '物事を自分の手で管理したいという欲求が非常に強いタイプ。責任感の裏返しでもありますが、周りが窮屈に感じることも。リーダーとしての資質は十分です。',
    characteristics: ['責任感', '完璧主義', 'リーダーシップ', '決断力', '支配的'],
    advice: '信頼して任せることで、自分も周りも成長できます。手放す勇気も大切。',
  },
  moderate: {
    type: 'moderate',
    title: 'バランス型リーダータイプ',
    emoji: '⚖️',
    percentage: 'コントロール欲求 65%',
    description: '主導権は握りたいけど、他者の意見も尊重できるバランス型。状況に応じてコントロールの度合いを調整できる柔軟さがあります。理想的なリーダー像です。',
    characteristics: ['柔軟性', '協調性', '状況判断力', '傾聴力', '適応力'],
    advice: '素晴らしいバランス感覚！自分の意見を通す場面と譲る場面の見極めを磨いて。',
  },
  low: {
    type: 'low',
    title: 'サポータータイプ',
    emoji: '🌱',
    percentage: 'コントロール欲求 35%',
    description: '他者を尊重し、コントロールよりも協力を重視するタイプ。支配欲が低く、穏やかな人間関係を築けます。ただ、自分の意見を抑えすぎないように。',
    characteristics: ['協調的', '穏やか', '受容的', '謙虚', 'チームプレイヤー'],
    advice: 'その協調性は貴重！でも自分の意見も大切に、時にはリードしてみて。',
  },
  minimal: {
    type: 'minimal',
    title: 'フォロワータイプ',
    emoji: '🍃',
    percentage: 'コントロール欲求 15%',
    description: '決定権を他者に委ねることを好むタイプ。ストレスが少なく、流れに身を任せる生き方。ただ、人生の重要な決断は自分でする必要があることも。',
    characteristics: ['のんびり', '依存的', 'ストレスフリー', '受動的', '適応力'],
    advice: '楽な生き方も素敵。でも自分の人生は自分で舵を取る場面も必要ですよ。',
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
