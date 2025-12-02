// エシカル消費度診断
export const questions = [
  {
    id: 1,
    text: '商品を買う時、企業の姿勢を気にする？',
    options: [
      { text: '必ずチェック、共感できる企業から買う', type: 'leader' },
      { text: '気になる、調べることもある', type: 'conscious' },
      { text: 'たまに気になる', type: 'casual' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'フェアトレード商品について',
    options: [
      { text: '積極的に選ぶ', type: 'leader' },
      { text: '見かけたら選ぶ', type: 'conscious' },
      { text: '知っているが買わない', type: 'casual' },
      { text: '知らない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: 'オーガニック製品への関心は？',
    options: [
      { text: '積極的に選ぶ', type: 'leader' },
      { text: 'できれば選びたい', type: 'conscious' },
      { text: '高いから避けがち', type: 'casual' },
      { text: '関心がない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '動物実験をしていない化粧品を選ぶ？',
    options: [
      { text: '必ず確認して選ぶ', type: 'leader' },
      { text: '気になる、選ぶことが多い', type: 'conscious' },
      { text: 'あまり気にしない', type: 'casual' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '労働環境が悪い企業の商品は？',
    options: [
      { text: '買わない', type: 'leader' },
      { text: '避けたいと思う', type: 'conscious' },
      { text: 'あまり気にしない', type: 'casual' },
      { text: '関係ないと思う', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '寄付付き商品について',
    options: [
      { text: '積極的に選ぶ', type: 'leader' },
      { text: '良いと思う、買うことも', type: 'conscious' },
      { text: 'たまに買う', type: 'casual' },
      { text: '興味がない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'エシカルファッションへの関心は？',
    options: [
      { text: '意識して選んでいる', type: 'leader' },
      { text: '関心がある', type: 'conscious' },
      { text: '聞いたことがある', type: 'casual' },
      { text: '知らない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '地域の障がい者施設などの商品は？',
    options: [
      { text: '積極的に買う', type: 'leader' },
      { text: '見かけたら買う', type: 'conscious' },
      { text: 'あまり買わない', type: 'casual' },
      { text: '興味がない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '「エシカル消費」という言葉を知っている？',
    options: [
      { text: '知っていて実践している', type: 'leader' },
      { text: '知っていて意識している', type: 'conscious' },
      { text: '聞いたことがある', type: 'casual' },
      { text: '知らない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '消費行動で社会を変えられると思う？',
    options: [
      { text: '思う、だから行動している', type: 'leader' },
      { text: '思う', type: 'conscious' },
      { text: '少しは影響あるかも', type: 'casual' },
      { text: '変わらないと思う', type: 'minimal' },
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
  leader: {
    type: 'leader',
    title: 'エシカル消費リーダー',
    emoji: '🌍',
    percentage: 'エシカル度 MAX',
    description: '消費を通じて社会を変えようとするエシカル消費の実践者！企業の姿勢、環境への配慮、社会貢献を意識した買い物ができる先進的なタイプ。',
    characteristics: ['社会意識が高い', '行動力', '知識豊富', '影響力', '未来志向'],
    advice: '素晴らしいエシカル消費！周りへの影響力を活かして広めてください♪',
  },
  conscious: {
    type: 'conscious',
    title: 'エシカル意識派',
    emoji: '🌿',
    percentage: 'エシカル度 70%',
    description: 'エシカル消費を意識している。フェアトレードやオーガニックに関心があり、できる範囲で選択している成長中のエシカル消費者。',
    characteristics: ['意識的', '関心がある', 'バランス型', '現実的', '成長中'],
    advice: '良い意識ですね！自分なりのエシカル消費のスタイルを見つけてみては♪',
  },
  casual: {
    type: 'casual',
    title: 'これからエシカル派',
    emoji: '🌱',
    percentage: 'エシカル度 40%',
    description: 'エシカル消費は聞いたことがあるけど、あまり実践できていない。でも関心があるのは良いスタート！',
    characteristics: ['関心はある', 'きっかけ待ち', '可能性あり', '情報不足', '変わりたい'],
    advice: 'フェアトレードのチョコレートやコーヒーから試してみては♪',
  },
  minimal: {
    type: 'minimal',
    title: 'エシカル無関心タイプ',
    emoji: '🛒',
    percentage: 'エシカル度 15%',
    description: 'エシカル消費への関心が低い状態。でも知ることが第一歩！買い物で社会を変えられることを知ると、見方が変わるかも。',
    characteristics: ['無関心', '情報不足', 'きっかけがない', '変化の可能性', 'これから'],
    advice: 'フェアトレードマークを探してみると、新しい発見がありますよ♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { leader: 0, conscious: 0, casual: 0, minimal: 0 };

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
