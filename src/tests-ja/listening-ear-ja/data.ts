// 聞き役タイプ診断
export const questions = [
  {
    id: 1,
    text: '人の話を聞く時、一番意識するのは？',
    options: [
      { text: '相手の気持ちを理解すること', type: 'empathetic' },
      { text: '話の内容を正確に把握すること', type: 'analytical' },
      { text: '相手が話しやすい雰囲気を作ること', type: 'supportive' },
      { text: '自分の意見も交えながら聞くこと', type: 'interactive' },
    ],
  },
  {
    id: 2,
    text: '相手が泣きながら話している時は？',
    options: [
      { text: '一緒に涙ぐむ', type: 'empathetic' },
      { text: '冷静に状況を聞く', type: 'analytical' },
      { text: '黙ってそばにいる', type: 'supportive' },
      { text: '「大丈夫？」と声をかける', type: 'interactive' },
    ],
  },
  {
    id: 3,
    text: '長い話を聞いている時は？',
    options: [
      { text: '感情移入して聞いている', type: 'empathetic' },
      { text: 'ポイントを整理しながら聞く', type: 'analytical' },
      { text: '相槌を打ちながら聞く', type: 'supportive' },
      { text: '質問を挟みながら聞く', type: 'interactive' },
    ],
  },
  {
    id: 4,
    text: '話を聞いた後にすることは？',
    options: [
      { text: '気持ちに共感する言葉をかける', type: 'empathetic' },
      { text: '要点をまとめて確認する', type: 'analytical' },
      { text: '静かに受け止める', type: 'supportive' },
      { text: '自分の経験も話す', type: 'interactive' },
    ],
  },
  {
    id: 5,
    text: '友達から「話聞いて」と言われたら？',
    options: [
      { text: '心を開いて全力で聞く', type: 'empathetic' },
      { text: '何があったのか詳しく聞く', type: 'analytical' },
      { text: '時間を作って向き合う', type: 'supportive' },
      { text: 'すぐに「どうしたの？」と聞く', type: 'interactive' },
    ],
  },
  {
    id: 6,
    text: '話を聞いていて一番疲れるのは？',
    options: [
      { text: '重い話で感情が揺さぶられた時', type: 'empathetic' },
      { text: '話がまとまらない時', type: 'analytical' },
      { text: '長時間集中が必要な時', type: 'supportive' },
      { text: '一方的で会話にならない時', type: 'interactive' },
    ],
  },
  {
    id: 7,
    text: '相手の話に同意できない時は？',
    options: [
      { text: '気持ちだけは理解しようとする', type: 'empathetic' },
      { text: '違う視点を提示する', type: 'analytical' },
      { text: 'とりあえず聞き続ける', type: 'supportive' },
      { text: '自分の意見も伝える', type: 'interactive' },
    ],
  },
  {
    id: 8,
    text: 'よく言われることは？',
    options: [
      { text: '「話すと楽になる」', type: 'empathetic' },
      { text: '「的確に理解してくれる」', type: 'analytical' },
      { text: '「安心して話せる」', type: 'supportive' },
      { text: '「話していて楽しい」', type: 'interactive' },
    ],
  },
  {
    id: 9,
    text: '話を聞く場所として好きなのは？',
    options: [
      { text: '二人だけで落ち着ける場所', type: 'empathetic' },
      { text: '静かで集中できる場所', type: 'analytical' },
      { text: 'リラックスできる場所', type: 'supportive' },
      { text: 'カフェなど気軽な場所', type: 'interactive' },
    ],
  },
  {
    id: 10,
    text: '自分の聞き役スタイルを一言で？',
    options: [
      { text: '心で聞く', type: 'empathetic' },
      { text: '頭で聞く', type: 'analytical' },
      { text: '全身で受け止める', type: 'supportive' },
      { text: '対話で深める', type: 'interactive' },
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
  listeningTip: string;
}> = {
  empathetic: {
    type: 'empathetic',
    title: '共感リスナー',
    emoji: '💗',
    percentage: '共感力 95%',
    description: '相手の感情に深く寄り添い、心で聞くタイプ。話し手は理解されたと感じ、心が軽くなります。',
    characteristics: ['共感力', '感受性', '理解力', '優しさ', '感情的つながり'],
    listeningTip: '自分の感情もケアすることを忘れずに',
  },
  analytical: {
    type: 'analytical',
    title: '分析リスナー',
    emoji: '🧠',
    percentage: '分析力 90%',
    description: '話の内容を正確に把握し、的確に理解するタイプ。複雑な状況も整理して捉えられます。',
    characteristics: ['論理的', '正確', '理解力', '整理上手', '客観的'],
    listeningTip: '感情面にも少し意識を向けてみて',
  },
  supportive: {
    type: 'supportive',
    title: 'サポートリスナー',
    emoji: '🌿',
    percentage: 'サポート力 88%',
    description: '安心して話せる雰囲気を作り、静かに寄り添うタイプ。存在そのものが癒しになります。',
    characteristics: ['穏やか', '安心感', '受容力', '忍耐', '温かさ'],
    listeningTip: 'たまには自分の気持ちも表現してみて',
  },
  interactive: {
    type: 'interactive',
    title: '対話型リスナー',
    emoji: '💬',
    percentage: '対話力 85%',
    description: '質問や意見を交えながら双方向で聞くタイプ。会話を通じて一緒に考え、深めていきます。',
    characteristics: ['対話上手', '好奇心', '関わり', 'エネルギッシュ', '相互作用'],
    listeningTip: '時には黙って聞くことも効果的',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { empathetic: 0, analytical: 0, supportive: 0, interactive: 0 };

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
