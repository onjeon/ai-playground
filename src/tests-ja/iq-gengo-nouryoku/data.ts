// 言語能力IQテスト
export const questions = [
  {
    id: 1,
    text: '「矛盾」の反対語として最も適切なのは？',
    options: [
      { text: '一貫', type: 'A' },
      { text: '対立', type: 'C' },
      { text: '混乱', type: 'D' },
      { text: '調和', type: 'B' },
    ],
  },
  {
    id: 2,
    text: '「猫に小判」と同じ意味のことわざは？',
    options: [
      { text: '豚に真珠', type: 'A' },
      { text: '蛙の子は蛙', type: 'C' },
      { text: '犬も歩けば棒に当たる', type: 'D' },
      { text: '虎の威を借る狐', type: 'B' },
    ],
  },
  {
    id: 3,
    text: '「慎重」と「軽率」の関係と同じ関係にあるのは？「勤勉」と？',
    options: [
      { text: '怠惰', type: 'A' },
      { text: '努力', type: 'C' },
      { text: '成功', type: 'D' },
      { text: '真面目', type: 'B' },
    ],
  },
  {
    id: 4,
    text: '次の中で仲間はずれは？「りんご、みかん、キャベツ、ぶどう」',
    options: [
      { text: 'キャベツ', type: 'A' },
      { text: 'みかん', type: 'C' },
      { text: 'りんご', type: 'D' },
      { text: 'ぶどう', type: 'B' },
    ],
  },
  {
    id: 5,
    text: '「門前の小僧習わぬ経を読む」の意味は？',
    options: [
      { text: '環境の影響で自然と学ぶ', type: 'A' },
      { text: '才能がなくても努力すれば成功する', type: 'C' },
      { text: '子供でも難しいことができる', type: 'D' },
      { text: '宗教の力は偉大である', type: 'B' },
    ],
  },
  {
    id: 6,
    text: '空欄に入る適切な言葉は？「彼は非常に（　）な性格で、何事にも動じない」',
    options: [
      { text: '沈着', type: 'A' },
      { text: '活発', type: 'C' },
      { text: '陽気', type: 'D' },
      { text: '繊細', type: 'B' },
    ],
  },
  {
    id: 7,
    text: '「推敲」の正しい読み方は？',
    options: [
      { text: 'すいこう', type: 'A' },
      { text: 'すいごう', type: 'C' },
      { text: 'ついこう', type: 'D' },
      { text: 'しこう', type: 'B' },
    ],
  },
  {
    id: 8,
    text: '「青天の霹靂」の意味として正しいのは？',
    options: [
      { text: '突然の出来事に驚くこと', type: 'A' },
      { text: '天気が急に変わること', type: 'C' },
      { text: '自然の脅威', type: 'D' },
      { text: '晴れ渡った空の美しさ', type: 'B' },
    ],
  },
  {
    id: 9,
    text: '次の文の間違いは？「私は昨日、友達に本を借りた」',
    options: [
      { text: '間違いはない', type: 'A' },
      { text: '「借りた」を「貸した」に', type: 'B' },
      { text: '「昨日」を「明日」に', type: 'C' },
      { text: '「友達に」を「友達から」に', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '「臥薪嘗胆」の意味は？',
    options: [
      { text: '復讐を誓い苦労に耐える', type: 'A' },
      { text: '健康に気を使う', type: 'C' },
      { text: '質素な生活をする', type: 'D' },
      { text: 'よく眠ること', type: 'B' },
    ],
  },
  {
    id: 11,
    text: '「犬：忠実 = 狐：？」に当てはまるのは？',
    options: [
      { text: '狡猾', type: 'A' },
      { text: '勇敢', type: 'C' },
      { text: '温厚', type: 'D' },
      { text: '愚直', type: 'B' },
    ],
  },
  {
    id: 12,
    text: '「彼の説明は（　）を得ていて、とても分かりやすかった」空欄に入る言葉は？',
    options: [
      { text: '要領', type: 'A' },
      { text: '目的', type: 'C' },
      { text: '理由', type: 'D' },
      { text: '結論', type: 'B' },
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
  A: {
    type: 'A',
    title: '言語の達人',
    emoji: '📖',
    percentage: '言語能力 95%',
    description: '豊富な語彙力と正確な言語理解力を持つ言語の達人です！ことわざや熟語の知識も深く、文章の微妙なニュアンスも理解できます。',
    characteristics: ['語彙力', '読解力', '表現力', '文法理解', '言語感覚'],
    advice: '翻訳、ライター、編集者など言葉を扱う職業で大きな才能を発揮できます。',
  },
  B: {
    type: 'B',
    title: '言語上級者',
    emoji: '✍️',
    percentage: '言語能力 80%',
    description: '言語能力が高く、複雑な文章も正確に理解できます。語彙も豊富で、表現力にも優れています。',
    characteristics: ['読解力', '語彙力', '論理性', 'コミュニケーション力', '文章力'],
    advice: '読書を続けることで、さらに言語能力を磨けます。',
  },
  C: {
    type: 'C',
    title: '言語学習者',
    emoji: '📝',
    percentage: '言語能力 65%',
    description: '基本的な言語能力は十分にあります。難しい語彙や表現をさらに学ぶことで、大きく成長できます。',
    characteristics: ['基礎力', '成長意欲', '素直さ', '努力家', '実用的'],
    advice: '毎日少しずつ新しい言葉を学ぶことで、語彙力が向上します。',
  },
  D: {
    type: 'D',
    title: '言語ビギナー',
    emoji: '🌱',
    percentage: '言語能力 50%',
    description: '言語能力はまだ発展途上ですが、興味を持って学べば必ず向上します。他の才能を活かしながら言葉の力も磨きましょう。',
    characteristics: ['発展途上', '可能性', '実践派', '視覚優位', '直感的'],
    advice: '興味のある分野の本を読むことから始めてみましょう。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

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
