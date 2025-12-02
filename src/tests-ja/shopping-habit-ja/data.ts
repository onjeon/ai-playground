// 買い物習慣診断 (쇼핑 습관 진단)
export const questions = [
  {
    id: 1,
    text: '欲しいものがあったらどうする？',
    options: [
      { text: '見つけたらすぐ買う', type: 'impulsive' },
      { text: '一晩考えてから決める', type: 'careful' },
      { text: '価格比較してから最安値で買う', type: 'bargain' },
      { text: '本当に必要か何度も自問する', type: 'minimalist' },
    ],
  },
  {
    id: 2,
    text: 'セールの時の行動は？',
    options: [
      { text: '「安い！」と興奮して買いまくる', type: 'impulsive' },
      { text: '欲しかったものが安くなってたら買う', type: 'careful' },
      { text: 'セールを狙って計画的に買う', type: 'bargain' },
      { text: 'セールでも必要なければ買わない', type: 'minimalist' },
    ],
  },
  {
    id: 3,
    text: 'ネットショッピングの「カート」には？',
    options: [
      { text: '思いついたらすぐポチる', type: 'impulsive' },
      { text: '入れて数日考えてから購入', type: 'careful' },
      { text: 'クーポンやポイント還元日を待つ', type: 'bargain' },
      { text: 'カートに入れて満足、買わないことも', type: 'minimalist' },
    ],
  },
  {
    id: 4,
    text: '買い物後の気持ちは？',
    options: [
      { text: 'ワクワク！早く届かないかな', type: 'impulsive' },
      { text: '良い買い物だったと満足', type: 'careful' },
      { text: 'どれだけお得だったか計算', type: 'bargain' },
      { text: '本当に必要だったか少し不安', type: 'minimalist' },
    ],
  },
  {
    id: 5,
    text: 'コンビニに入ったら？',
    options: [
      { text: '目についたお菓子をつい買ってしまう', type: 'impulsive' },
      { text: '必要なものだけ買う', type: 'careful' },
      { text: 'ポイントカードを忘れずに', type: 'bargain' },
      { text: 'そもそもあまり入らない', type: 'minimalist' },
    ],
  },
  {
    id: 6,
    text: '「限定品」と聞くと？',
    options: [
      { text: '「買わなきゃ！」と焦る', type: 'impulsive' },
      { text: '本当に欲しいか冷静に判断', type: 'careful' },
      { text: '転売価値があるか考える', type: 'bargain' },
      { text: '限定でも必要なければスルー', type: 'minimalist' },
    ],
  },
  {
    id: 7,
    text: 'クローゼットの中は？',
    options: [
      { text: '服でパンパン、把握しきれてない', type: 'impulsive' },
      { text: '適度にあり、定期的に整理', type: 'careful' },
      { text: 'セールで買った服が多い', type: 'bargain' },
      { text: '厳選されたアイテムのみ', type: 'minimalist' },
    ],
  },
  {
    id: 8,
    text: '友達に「それどこで買ったの？」と聞かれたら？',
    options: [
      { text: '「一目惚れして！」と熱く語る', type: 'impulsive' },
      { text: '「ずっと探してて」と経緯を話す', type: 'careful' },
      { text: '「〇〇で△△%オフで！」と詳細', type: 'bargain' },
      { text: '「長く使えるものを選んだ」と説明', type: 'minimalist' },
    ],
  },
  {
    id: 9,
    text: '給料日後の行動は？',
    options: [
      { text: 'ご褒美に欲しかったものを買う', type: 'impulsive' },
      { text: '予算を決めて計画的に使う', type: 'careful' },
      { text: 'お得な買い物ができるか調査', type: 'bargain' },
      { text: '特に変わらない、必要な時に買う', type: 'minimalist' },
    ],
  },
  {
    id: 10,
    text: '自分の買い物スタイルを一言で言うと？',
    options: [
      { text: '直感重視、欲しいものは欲しい！', type: 'impulsive' },
      { text: 'バランス型、計画的に楽しむ', type: 'careful' },
      { text: 'お得ハンター、節約が楽しい', type: 'bargain' },
      { text: 'ミニマリスト志向、少数精鋭', type: 'minimalist' },
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
  impulsive: {
    type: 'impulsive',
    title: '直感ショッパー',
    emoji: '💸',
    percentage: '衝動買い度 90%',
    description: '「欲しい！」と思ったら即決のあなた。買い物が大好きで、新しいものとの出会いにワクワクするタイプ。後悔することもあるけど、その瞬間の幸せは格別！',
    characteristics: ['決断が早い', '行動派', 'ワクワク重視', '流行に敏感', '後悔もあり'],
    advice: '衝動買い前に「3日ルール」を試してみて。それでも欲しければ買う価値あり！',
  },
  careful: {
    type: 'careful',
    title: '計画ショッパー',
    emoji: '📋',
    percentage: '計画性 85%',
    description: 'じっくり考えてから買う慎重派。無駄遣いが少なく、買ったものは長く大切に使います。後悔することが少ない賢い買い物上手！',
    characteristics: ['慎重', '計画的', '後悔が少ない', '堅実', '満足度が高い'],
    advice: '素晴らしい計画性！たまには直感で選ぶ楽しさも味わってみては？',
  },
  bargain: {
    type: 'bargain',
    title: 'お得ハンター',
    emoji: '🏷️',
    percentage: 'お得センサー感度 95%',
    description: 'セール情報に敏感、最安値を見つける達人！クーポンやポイントを駆使して賢く買い物。「定価では買わない」がモットー。',
    characteristics: ['節約上手', '情報収集力', '比較検討', 'ポイント活用', 'お得に敏感'],
    advice: 'お得情報の達人！ただ「安いから買う」ではなく「必要だから買う」も意識して。',
  },
  minimalist: {
    type: 'minimalist',
    title: 'ミニマルショッパー',
    emoji: '🌿',
    percentage: 'ミニマリスト度 88%',
    description: '本当に必要なものだけを厳選するあなた。物を増やすことより、質の高いものを長く使うことを重視。クローゼットはいつもスッキリ！',
    characteristics: ['厳選主義', '質重視', 'シンプル志向', '環境意識高い', '満足度高い'],
    advice: '素晴らしい価値観！必要なものを見極める力は現代の美徳です。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { impulsive: 0, careful: 0, bargain: 0, minimalist: 0 };

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
