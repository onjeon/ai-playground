// 寄付傾向タイプ診断
export const questions = [
  {
    id: 1,
    text: '寄付をすることについてどう思う？',
    options: [
      { text: '積極的にしている', type: 'active' },
      { text: '良いことだと思う、時々する', type: 'supportive' },
      { text: 'やった方がいいとは思う', type: 'passive' },
      { text: 'あまり興味がない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '災害が起きた時の寄付は？',
    options: [
      { text: 'すぐに寄付する', type: 'active' },
      { text: '状況を見て寄付する', type: 'supportive' },
      { text: '募金箱があれば入れる', type: 'passive' },
      { text: 'あまりしない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '毎月の定額寄付は？',
    options: [
      { text: 'している', type: 'active' },
      { text: '検討したことがある', type: 'supportive' },
      { text: '考えたことがない', type: 'passive' },
      { text: 'したくない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '街頭募金について',
    options: [
      { text: '内容を確認して寄付する', type: 'active' },
      { text: 'たまに入れる', type: 'supportive' },
      { text: '素通りすることが多い', type: 'passive' },
      { text: '入れない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: 'クラウドファンディングへの参加は？',
    options: [
      { text: '共感したプロジェクトに支援', type: 'active' },
      { text: '時々支援する', type: 'supportive' },
      { text: '見たことはある', type: 'passive' },
      { text: '参加したことがない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '寄付先の選び方は？',
    options: [
      { text: '活動内容をしっかり調べる', type: 'active' },
      { text: '信頼できそうなところに', type: 'supportive' },
      { text: 'あまり考えない', type: 'passive' },
      { text: '寄付しない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'ふるさと納税の寄付機能は？',
    options: [
      { text: '活用している', type: 'active' },
      { text: '知っている、興味あり', type: 'supportive' },
      { text: '返礼品目的のみ', type: 'passive' },
      { text: 'していない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '物品の寄付は？',
    options: [
      { text: '定期的に行っている', type: 'active' },
      { text: '時々する', type: 'supportive' },
      { text: 'したことがある', type: 'passive' },
      { text: 'したことがない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '寄付の税制優遇を知っている？',
    options: [
      { text: '知っていて活用している', type: 'active' },
      { text: '知っている', type: 'supportive' },
      { text: '聞いたことがある', type: 'passive' },
      { text: '知らない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '寄付への意識は？',
    options: [
      { text: '社会貢献として当然のこと', type: 'active' },
      { text: '余裕があればしたい', type: 'supportive' },
      { text: 'お金に余裕ができたら', type: 'passive' },
      { text: '自分のお金は自分のため', type: 'minimal' },
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
  active: {
    type: 'active',
    title: '積極的寄付家',
    emoji: '💝',
    percentage: '寄付意識 MAX',
    description: '寄付を社会貢献の一環として積極的に行う。寄付先も吟味し、効果的な支援を心がける。社会のために行動できる素晴らしいタイプ。',
    characteristics: ['社会意識が高い', '行動力', '計画的', '情報収集力', '思いやり'],
    advice: '素晴らしい寄付活動！寄付の輪を周りにも広げてみては♪',
  },
  supportive: {
    type: 'supportive',
    title: '応援型寄付家',
    emoji: '🤝',
    percentage: '寄付意識 70%',
    description: '寄付は良いことだと考え、機会があれば行う。災害時や共感できる活動には積極的に支援するタイプ。',
    characteristics: ['共感力', '柔軟', 'バランス型', '思いやり', '成長中'],
    advice: '良い姿勢ですね！定期寄付も検討してみると継続的な支援ができますよ♪',
  },
  passive: {
    type: 'passive',
    title: 'これから寄付派',
    emoji: '🌱',
    percentage: '寄付意識 40%',
    description: '寄付はやった方がいいと思うけど、あまり実践できていない。でも意識があるのは良いスタート！',
    characteristics: ['潜在的関心', 'きっかけ待ち', '可能性あり', '情報不足', '変わりたい'],
    advice: '少額から始めてみませんか？100円でも立派な社会貢献です♪',
  },
  minimal: {
    type: 'minimal',
    title: '寄付無関心タイプ',
    emoji: '😶',
    percentage: '寄付意識 15%',
    description: '寄付への関心が低い状態。でも知ることが第一歩！自分のお金がどう社会を変えられるか知ると、見方が変わるかも。',
    characteristics: ['無関心', '情報不足', 'きっかけがない', '変化の可能性', 'これから'],
    advice: '寄付のインパクトを知ると、少額でも意味があることがわかりますよ♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { active: 0, supportive: 0, passive: 0, minimal: 0 };

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
