// 金銭感覚診断 (돈 감각 테스트)
export const questions = [
  {
    id: 1,
    text: '給料日後の行動は？',
    options: [
      { text: 'まず貯金！残りで生活', type: 'saver' },
      { text: '必要な支払いを済ませてから考える', type: 'planner' },
      { text: '欲しいものがあったら買う', type: 'spender' },
      { text: '特に意識せず普通に過ごす', type: 'carefree' },
    ],
  },
  {
    id: 2,
    text: 'セール品を見つけたら？',
    options: [
      { text: '必要なければ買わない', type: 'saver' },
      { text: '本当に必要か考えてから決める', type: 'planner' },
      { text: 'お得だから買っておく', type: 'spender' },
      { text: 'その場の気分で決める', type: 'carefree' },
    ],
  },
  {
    id: 3,
    text: '友達との食事、お会計は？',
    options: [
      { text: 'きっちり割り勘', type: 'saver' },
      { text: '大体の割り勘でOK', type: 'planner' },
      { text: '奢ったり奢られたり', type: 'spender' },
      { text: 'その場の流れで', type: 'carefree' },
    ],
  },
  {
    id: 4,
    text: '欲しいものが高額だったら？',
    options: [
      { text: '諦める or もっと安いものを探す', type: 'saver' },
      { text: '貯金してから買う', type: 'planner' },
      { text: 'ローンやカードで買う', type: 'spender' },
      { text: '悩んで結局買わないことが多い', type: 'carefree' },
    ],
  },
  {
    id: 5,
    text: '家計簿やお金の管理は？',
    options: [
      { text: '細かくつけている', type: 'saver' },
      { text: 'アプリで大まかに管理', type: 'planner' },
      { text: 'つけていない', type: 'spender' },
      { text: '気が向いた時だけ', type: 'carefree' },
    ],
  },
  {
    id: 6,
    text: '投資や資産運用について',
    options: [
      { text: '積極的にやっている', type: 'saver' },
      { text: '興味があって勉強中', type: 'planner' },
      { text: 'あまり興味がない', type: 'spender' },
      { text: 'よくわからない', type: 'carefree' },
    ],
  },
  {
    id: 7,
    text: 'コンビニでの買い物は？',
    options: [
      { text: 'なるべく使わない、高いから', type: 'saver' },
      { text: '必要な時だけ利用', type: 'planner' },
      { text: 'よく使う、便利だから', type: 'spender' },
      { text: '近くにあれば使う', type: 'carefree' },
    ],
  },
  {
    id: 8,
    text: '旅行の予算は？',
    options: [
      { text: '事前にしっかり計画して節約', type: 'saver' },
      { text: '予算を決めてその中で楽しむ', type: 'planner' },
      { text: '楽しむためにはお金を惜しまない', type: 'spender' },
      { text: '行ってみないとわからない', type: 'carefree' },
    ],
  },
  {
    id: 9,
    text: '月末の財布の状況は？',
    options: [
      { text: 'まだ余裕がある', type: 'saver' },
      { text: '計画通り', type: 'planner' },
      { text: 'ちょっとピンチ', type: 'spender' },
      { text: '把握していない', type: 'carefree' },
    ],
  },
  {
    id: 10,
    text: 'お金に対する考え方は？',
    options: [
      { text: '将来のために貯めるべき', type: 'saver' },
      { text: '計画的に使うべき', type: 'planner' },
      { text: '今を楽しむために使うべき', type: 'spender' },
      { text: 'あまり深く考えない', type: 'carefree' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  savingLevel: string;
  description: string;
  characteristics: string[];
  advice: string[];
}> = {
  saver: {
    type: 'saver',
    title: '堅実貯蓄タイプ',
    emoji: '🐿️💰',
    savingLevel: '貯金力：★★★★★',
    description: 'お金を大切にする堅実派。将来のことをしっかり考え、無駄遣いをしないタイプです。貯金額は人より多いはず！でも時々自分へのご褒美も大切ですよ。',
    characteristics: ['節約上手', '計画的', '将来志向', '我慢強い'],
    advice: ['たまには自分へのご褒美を', '経験への投資も大切', 'バランスを意識して'],
  },
  planner: {
    type: 'planner',
    title: 'バランス計画タイプ',
    emoji: '📊✨',
    savingLevel: '貯金力：★★★★☆',
    description: '計画的にお金を管理できるバランス型。貯金と消費のバランスが取れていて、無理なくお金を貯められます。理想的な金銭感覚の持ち主です。',
    characteristics: ['バランス感覚', '計画的', '自制心がある', '賢い消費者'],
    advice: ['そのバランス感覚を維持して', '投資にも挑戦してみて', '長期的な目標を持とう'],
  },
  spender: {
    type: 'spender',
    title: '楽しみ優先タイプ',
    emoji: '🛍️🎉',
    savingLevel: '貯金力：★★☆☆☆',
    description: '今を楽しむことを大切にするタイプ。欲しいものは我慢せず、経験や楽しみにお金を使います。人生を楽しむ才能がありますが、将来のことも少し考えてみて。',
    characteristics: ['今を楽しむ', '経験重視', '気前がいい', '楽観的'],
    advice: ['少しずつ貯金の習慣を', '衝動買いは一晩考えてから', '固定費の見直しを'],
  },
  carefree: {
    type: 'carefree',
    title: 'のんびりマイペース型',
    emoji: '😌🌿',
    savingLevel: '貯金力：★★★☆☆',
    description: 'お金のことをあまり気にしないマイペースタイプ。ストレスなく過ごせる反面、お金の流れを把握できていないことも。少し意識を向けるだけで変わるかも！',
    characteristics: ['マイペース', 'ストレスフリー', '細かいことを気にしない', '自然体'],
    advice: ['お金の流れを把握してみよう', '自動貯金を設定してみて', '将来の目標を立ててみよう'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { saver: 0, planner: 0, spender: 0, carefree: 0 };

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
