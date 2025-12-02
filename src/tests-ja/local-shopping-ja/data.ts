// 地産地消タイプ診断
export const questions = [
  {
    id: 1,
    text: '野菜を買う時、産地を確認する？',
    options: [
      { text: '必ず確認、地元産を選ぶ', type: 'enthusiast' },
      { text: 'だいたい確認する', type: 'conscious' },
      { text: 'たまに見る', type: 'casual' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '地元の農産物直売所は？',
    options: [
      { text: 'よく利用する', type: 'enthusiast' },
      { text: '時々行く', type: 'conscious' },
      { text: '行ったことがある', type: 'casual' },
      { text: '行ったことがない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '旬の食材について',
    options: [
      { text: '旬を意識して買う', type: 'enthusiast' },
      { text: 'なんとなく意識', type: 'conscious' },
      { text: 'あまり気にしない', type: 'casual' },
      { text: '旬がわからない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '地元の特産品について',
    options: [
      { text: 'よく知っている、買う', type: 'enthusiast' },
      { text: 'だいたい知っている', type: 'conscious' },
      { text: '少し知っている', type: 'casual' },
      { text: 'よく知らない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '国産と外国産、選ぶなら？',
    options: [
      { text: '多少高くても国産', type: 'enthusiast' },
      { text: 'できれば国産', type: 'conscious' },
      { text: '価格次第', type: 'casual' },
      { text: '安い方', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '地元の商店街での買い物は？',
    options: [
      { text: '積極的に利用する', type: 'enthusiast' },
      { text: 'たまに利用する', type: 'conscious' },
      { text: 'あまり行かない', type: 'casual' },
      { text: '行かない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'フードマイレージを知っている？',
    options: [
      { text: '知っていて意識している', type: 'enthusiast' },
      { text: '聞いたことがある', type: 'conscious' },
      { text: 'よく知らない', type: 'casual' },
      { text: '初めて聞いた', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '地元の農家や生産者への関心は？',
    options: [
      { text: '応援したい、直接買いたい', type: 'enthusiast' },
      { text: '関心がある', type: 'conscious' },
      { text: '少し気になる', type: 'casual' },
      { text: 'あまり関心がない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '地元産の食材のメリットは？',
    options: [
      { text: '新鮮、環境にやさしい、地域貢献', type: 'enthusiast' },
      { text: '新鮮で美味しい', type: 'conscious' },
      { text: 'なんとなく良さそう', type: 'casual' },
      { text: 'わからない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '地産地消への意識は？',
    options: [
      { text: '積極的に実践している', type: 'enthusiast' },
      { text: '意識している', type: 'conscious' },
      { text: 'やった方がいいとは思う', type: 'casual' },
      { text: 'あまり考えたことない', type: 'minimal' },
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
  enthusiast: {
    type: 'enthusiast',
    title: '地産地消マスター',
    emoji: '🥬',
    percentage: '地産地消度 MAX',
    description: '地元の食材を愛する地産地消の達人！産地を確認し、旬を楽しみ、地域の農家を応援する。食を通じて地域に貢献する素晴らしいタイプ。',
    characteristics: ['地域愛', '食への関心', '環境意識', '知識豊富', '行動力'],
    advice: '素晴らしい地産地消ライフ！地域の生産者との交流も深めてみては♪',
  },
  conscious: {
    type: 'conscious',
    title: '地産地消意識派',
    emoji: '🍅',
    percentage: '地産地消度 70%',
    description: '地元産の食材を意識して選んでいる。旬の食材の美味しさも知っている、食にこだわりを持つタイプ。',
    characteristics: ['意識的', '食にこだわり', 'バランス型', '現実的', '成長中'],
    advice: '良い意識ですね！直売所や産直市場にも足を運んでみては♪',
  },
  casual: {
    type: 'casual',
    title: 'これから地産地消派',
    emoji: '🌽',
    percentage: '地産地消度 40%',
    description: '地産地消は良いと思うけど、あまり実践できていない。でも関心があるのは良いスタート！まずは産地表示をチェックしてみよう。',
    characteristics: ['関心はある', 'きっかけ待ち', '可能性あり', '情報不足', '変わりたい'],
    advice: '買い物の時に産地を見る習慣から始めてみましょう！意外と面白いですよ♪',
  },
  minimal: {
    type: 'minimal',
    title: '産地無関心タイプ',
    emoji: '🛒',
    percentage: '地産地消度 15%',
    description: '食材の産地にあまり関心がない状態。でも知ることが第一歩！地元の食材の美味しさを知ると、見方が変わるかも。',
    characteristics: ['無関心', '情報不足', 'きっかけがない', '変化の可能性', 'これから'],
    advice: '地元の直売所に行ってみると、新鮮な野菜の美味しさに感動するかも♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { enthusiast: 0, conscious: 0, casual: 0, minimal: 0 };

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
