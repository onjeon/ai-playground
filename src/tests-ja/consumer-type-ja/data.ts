// 消費者タイプ診断 (소비자 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '買い物をする時の基準は？',
    options: [
      { text: '欲しいと思ったら買う', type: 'impulse' },
      { text: '品質と価格のバランス', type: 'value' },
      { text: 'コスパ最優先', type: 'frugal' },
      { text: '本当に必要か何度も考える', type: 'minimalist' },
    ],
  },
  {
    id: 2,
    text: 'セールや割引について？',
    options: [
      { text: 'お得だと思ったら買う', type: 'impulse' },
      { text: '必要なものがお得なら買う', type: 'value' },
      { text: 'セールを狙って買う', type: 'frugal' },
      { text: 'セールでも不要なら買わない', type: 'minimalist' },
    ],
  },
  {
    id: 3,
    text: '月の支出管理は？',
    options: [
      { text: 'あまり気にしていない', type: 'impulse' },
      { text: 'だいたい把握している', type: 'value' },
      { text: 'しっかり家計簿をつける', type: 'frugal' },
      { text: '必要最小限に抑える', type: 'minimalist' },
    ],
  },
  {
    id: 4,
    text: '高額商品を買う時は？',
    options: [
      { text: '欲しければ即決', type: 'impulse' },
      { text: '比較検討してから', type: 'value' },
      { text: '何ヶ月も悩む', type: 'frugal' },
      { text: 'よほどでないと買わない', type: 'minimalist' },
    ],
  },
  {
    id: 5,
    text: 'ブランド品について？',
    options: [
      { text: 'ブランドが好き', type: 'impulse' },
      { text: '品質が良ければ検討', type: 'value' },
      { text: 'ノーブランドで十分', type: 'frugal' },
      { text: 'ブランドには興味がない', type: 'minimalist' },
    ],
  },
  {
    id: 6,
    text: '「限定商品」と聞くと？',
    options: [
      { text: '買わないと損！', type: 'impulse' },
      { text: '本当に欲しいなら検討', type: 'value' },
      { text: '限定に惑わされない', type: 'frugal' },
      { text: '興味がない', type: 'minimalist' },
    ],
  },
  {
    id: 7,
    text: '貯金と消費のバランスは？',
    options: [
      { text: '今を楽しむ派', type: 'impulse' },
      { text: 'バランスよく', type: 'value' },
      { text: '貯金優先', type: 'frugal' },
      { text: '使わないから自然に貯まる', type: 'minimalist' },
    ],
  },
  {
    id: 8,
    text: '買った後に後悔することは？',
    options: [
      { text: 'よくある', type: 'impulse' },
      { text: 'たまにある', type: 'value' },
      { text: 'あまりない', type: 'frugal' },
      { text: 'ほとんどない', type: 'minimalist' },
    ],
  },
  {
    id: 9,
    text: 'ストレス発散の方法は？',
    options: [
      { text: '買い物でスッキリ', type: 'impulse' },
      { text: 'お金を使わない方法も', type: 'value' },
      { text: 'お金をかけない方法', type: 'frugal' },
      { text: '物より体験', type: 'minimalist' },
    ],
  },
  {
    id: 10,
    text: '「お金は○○のため」？',
    options: [
      { text: '使うためにある', type: 'impulse' },
      { text: '人生を豊かにするため', type: 'value' },
      { text: '将来のために貯める', type: 'frugal' },
      { text: '自由を得るための手段', type: 'minimalist' },
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
  moneyAdvice: string;
}> = {
  impulse: {
    type: 'impulse',
    title: '感覚派ショッパー',
    emoji: '💫',
    percentage: '衝動買い度 85%',
    description: '欲しいものは手に入れたい！買い物で幸せを感じるタイプ。今を楽しむことを大切にしていますが、計画性も少し意識してみて。',
    characteristics: ['感覚的', '即決派', '楽しむ', 'トレンド好き', '満足感重視'],
    moneyAdvice: '24時間ルールを設けて衝動買いを減らしてみては',
  },
  value: {
    type: 'value',
    title: 'バリュー重視派',
    emoji: '⚖️',
    percentage: '価値判断力 80%',
    description: '品質と価格のバランスを見極める賢い消費者！必要なものにはお金をかけ、無駄遣いは避けるバランス感覚の持ち主。',
    characteristics: ['バランス型', '比較検討', '賢い選択', '品質重視', '計画的'],
    moneyAdvice: 'その判断力を活かして賢い買い物を続けてください',
  },
  frugal: {
    type: 'frugal',
    title: '節約上手',
    emoji: '💰',
    percentage: '節約力 90%',
    description: 'コスパを追求する節約の達人！無駄な出費を抑え、着実に資産を築いています。時には自分へのご褒美も忘れずに。',
    characteristics: ['節約家', '計画的', '堅実', 'コスパ重視', '将来志向'],
    moneyAdvice: 'たまには自分へのご褒美も大切にしてください',
  },
  minimalist: {
    type: 'minimalist',
    title: 'ミニマリスト消費者',
    emoji: '🌿',
    percentage: 'ミニマル度 95%',
    description: '物に縛られない自由な生き方！本当に必要なものだけを持ち、シンプルな暮らしを楽しんでいます。',
    characteristics: ['シンプル', '本質重視', '自由', '環境意識', '体験重視'],
    moneyAdvice: '必要な時には適切にお金を使うことも大切です',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { impulse: 0, value: 0, frugal: 0, minimalist: 0 };

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
