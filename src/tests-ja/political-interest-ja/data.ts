// 政治関心度診断
export const questions = [
  {
    id: 1,
    text: '選挙の投票は？',
    options: [
      { text: '必ず行く、候補者を詳しく調べる', type: 'high' },
      { text: '基本的に行く', type: 'moderate' },
      { text: '行かないこともある', type: 'low' },
      { text: '行かない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '政治ニュースは？',
    options: [
      { text: '毎日チェックする', type: 'high' },
      { text: '時々見る', type: 'moderate' },
      { text: 'あまり見ない', type: 'low' },
      { text: '興味がない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '国会中継を見ることは？',
    options: [
      { text: '重要な審議は見る', type: 'high' },
      { text: 'たまに見る', type: 'moderate' },
      { text: 'ほとんど見ない', type: 'low' },
      { text: '見たことがない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '各政党の政策の違いは？',
    options: [
      { text: 'よく理解している', type: 'high' },
      { text: 'だいたいわかる', type: 'moderate' },
      { text: 'あまりわからない', type: 'low' },
      { text: 'わからない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '政治について話し合うことは？',
    options: [
      { text: 'よく議論する', type: 'high' },
      { text: '時々話題にする', type: 'moderate' },
      { text: 'あまり話さない', type: 'low' },
      { text: '避ける', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '地方政治への関心は？',
    options: [
      { text: '国政と同様に関心がある', type: 'high' },
      { text: '少し関心がある', type: 'moderate' },
      { text: 'あまり関心がない', type: 'low' },
      { text: '関心がない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '政治家のSNSをフォローしている？',
    options: [
      { text: '複数フォローしている', type: 'high' },
      { text: '一部フォローしている', type: 'moderate' },
      { text: 'フォローしていない', type: 'low' },
      { text: '政治家のSNSは見ない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '政治について自分の意見は？',
    options: [
      { text: '明確な意見がある', type: 'high' },
      { text: 'ある程度ある', type: 'moderate' },
      { text: 'あまりない', type: 'low' },
      { text: '考えたことがない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '政治が生活に影響すると思う？',
    options: [
      { text: '大いに思う、だから関心がある', type: 'high' },
      { text: '思う', type: 'moderate' },
      { text: '少しは影響あると思う', type: 'low' },
      { text: 'あまり関係ないと思う', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '政治への関わり方として',
    options: [
      { text: '市民として積極的に関わりたい', type: 'high' },
      { text: '投票など基本的なことはしたい', type: 'moderate' },
      { text: '任せておけばいい', type: 'low' },
      { text: '関わりたくない', type: 'minimal' },
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
    title: '政治ウォッチャー',
    emoji: '🏛️',
    percentage: '政治関心度 MAX',
    description: '政治への関心が非常に高い！ニュースをチェックし、各党の政策を理解し、投票も欠かさない。民主主義を支える良き市民。',
    characteristics: ['社会意識が高い', '情報収集力', '批判的思考', '責任感', '積極的参加'],
    advice: '素晴らしい政治意識！周りの人にも政治参加の大切さを伝えてみては♪',
  },
  moderate: {
    type: 'moderate',
    title: '政治意識派',
    emoji: '📰',
    percentage: '政治関心度 65%',
    description: '政治に一定の関心があり、投票には行くタイプ。ニュースも時々チェックし、社会の動きを把握している一般的な政治意識の持ち主。',
    characteristics: ['意識的', 'バランス型', '基本的な知識', '投票する', '成長中'],
    advice: '良い政治意識ですね！もう少し深掘りすると、さらに視野が広がりますよ♪',
  },
  low: {
    type: 'low',
    title: 'これから政治派',
    emoji: '🌱',
    percentage: '政治関心度 35%',
    description: '政治への関心があまり高くない。でも政治は生活に直結しているので、少しずつ関心を持ってみると世界が変わるかも。',
    characteristics: ['関心が薄い', 'きっかけ待ち', '可能性あり', '情報不足', '変わりたい'],
    advice: '選挙前だけでも候補者を調べてみましょう！自分の一票の意味がわかりますよ♪',
  },
  minimal: {
    type: 'minimal',
    title: '政治無関心タイプ',
    emoji: '😶',
    percentage: '政治関心度 15%',
    description: '政治への関心が低い状態。でも政治は誰もの生活に影響している。まずは身近な問題から政治との繋がりを感じてみては？',
    characteristics: ['無関心', '情報不足', 'きっかけがない', '変化の可能性', 'これから'],
    advice: '投票に行くことから始めてみませんか？あなたの声も大切な一票です♪',
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
