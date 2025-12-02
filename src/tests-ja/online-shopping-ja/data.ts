// ネット通販タイプ診断 (온라인 쇼핑 유형 테스트)
export const questions = [
  {
    id: 1,
    text: 'ネット通販での買い物頻度は？',
    options: [
      { text: 'ほぼ毎日チェック', type: 'heavy' },
      { text: '週に数回は利用', type: 'smart' },
      { text: '月に数回程度', type: 'careful' },
      { text: '必要な時だけ', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '「お買い物マラソン」や「セール」の時は？',
    options: [
      { text: '待ってました！まとめ買い', type: 'heavy' },
      { text: 'お得なものを厳選して購入', type: 'smart' },
      { text: '本当に必要なものだけ', type: 'careful' },
      { text: 'セールは関係なく買う', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: 'カートに入れたまま放置している商品は？',
    options: [
      { text: 'たくさんある', type: 'heavy' },
      { text: 'いくつかある', type: 'smart' },
      { text: 'ほとんどない', type: 'careful' },
      { text: 'カートに入れたら買う', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: 'レビューの確認は？',
    options: [
      { text: '勢いで買うので見ない', type: 'heavy' },
      { text: '高額商品は必ず確認', type: 'smart' },
      { text: '全ての商品で確認', type: 'careful' },
      { text: 'レビューより自分の判断', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '届いた商品が思っていたのと違った時は？',
    options: [
      { text: 'まあいいかで済ます', type: 'heavy' },
      { text: '返品・交換を検討', type: 'smart' },
      { text: '失敗した…と後悔', type: 'careful' },
      { text: '滅多にそういうことはない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: 'ポイントやクーポンの管理は？',
    options: [
      { text: '気にしていない', type: 'heavy' },
      { text: '上手に活用している', type: 'smart' },
      { text: 'あれば使う程度', type: 'careful' },
      { text: 'ポイントカードは持たない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '「あなたへのおすすめ」は？',
    options: [
      { text: 'つい見てしまう', type: 'heavy' },
      { text: '参考にすることがある', type: 'smart' },
      { text: 'あまり気にしない', type: 'careful' },
      { text: '見ないようにしている', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '配送を待っている時の気持ちは？',
    options: [
      { text: 'ワクワクが止まらない', type: 'heavy' },
      { text: '届くのが楽しみ', type: 'smart' },
      { text: '早く届いて欲しい', type: 'careful' },
      { text: '忘れていることもある', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '実店舗での買い物と比べて？',
    options: [
      { text: '圧倒的にネット派', type: 'heavy' },
      { text: '物によって使い分け', type: 'smart' },
      { text: '実店舗の方が多い', type: 'careful' },
      { text: '基本は実店舗', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '今月のネット通販の出費は？',
    options: [
      { text: '把握していない', type: 'heavy' },
      { text: '大体把握している', type: 'smart' },
      { text: '明確に管理している', type: 'careful' },
      { text: 'ほとんど使っていない', type: 'minimal' },
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
  shoppingAdvice: string;
}> = {
  heavy: {
    type: 'heavy',
    title: 'ポチポチ中毒',
    emoji: '🛒',
    percentage: 'ネット通販依存度 90%',
    description: '「ポチる」が日課になっているタイプ！買い物自体が楽しみで、ストレス解消にもなっています。でも財布の中身はちょっと心配…？',
    characteristics: ['衝動買い', 'セール大好き', 'ポイント無視', '開封の儀', 'ストレス解消'],
    shoppingAdvice: '24時間ルールを設けて衝動買いを減らしてみては',
  },
  smart: {
    type: 'smart',
    title: 'スマートショッパー',
    emoji: '🎯',
    percentage: 'ネット通販活用度 80%',
    description: 'ネット通販を賢く活用できるタイプ！セールやポイントを上手に使いながら、無駄な買い物は控えめ。お買い物上手です。',
    characteristics: ['計画的', 'お得意識', '比較検討', '使い分け上手', 'バランス型'],
    shoppingAdvice: 'その調子で賢い買い物を続けてください',
  },
  careful: {
    type: 'careful',
    title: '慎重派バイヤー',
    emoji: '🔍',
    percentage: 'ネット通販慎重度 75%',
    description: 'ネット通販に対して慎重なタイプ。レビューをしっかり確認し、本当に必要なものだけを購入。失敗の少ない買い物ができます。',
    characteristics: ['慎重', 'レビュー重視', '失敗回避', '計画購入', '堅実'],
    shoppingAdvice: '時にはネット通販の便利さも楽しんでみて',
  },
  minimal: {
    type: 'minimal',
    title: 'リアル派ショッパー',
    emoji: '🏬',
    percentage: 'ネット通販依存度 20%',
    description: '実店舗での買い物を好むタイプ。実際に見て触れてから買いたい派。ネット通販の便利さより、買い物体験を大切にしています。',
    characteristics: ['実店舗派', '体験重視', '確認派', '最小限', 'アナログ'],
    shoppingAdvice: 'ネット限定商品もチェックしてみると新発見があるかも',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { heavy: 0, smart: 0, careful: 0, minimal: 0 };

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
