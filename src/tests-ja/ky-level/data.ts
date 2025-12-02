// KYレベル診断（空気読めない度テスト）
export const questions = [
  {
    id: 1,
    text: '会議中、みんなが静まり返った時あなたは？',
    options: [
      { text: '空気を読んで黙っている', type: 'kuuki' },
      { text: '「何か意見ありますか？」と場を回す', type: 'yomeru' },
      { text: '思いついたことを発言してみる', type: 'donkan' },
      { text: '「シーンとしてますね！」と言っちゃう', type: 'ky' },
    ],
  },
  {
    id: 2,
    text: '友達が「大丈夫」と言いながら元気がない時は？',
    options: [
      { text: 'そっとしておく', type: 'kuuki' },
      { text: '「何かあった？話聞くよ」と声をかける', type: 'yomeru' },
      { text: '「大丈夫なら良かった」と流す', type: 'donkan' },
      { text: '「じゃあカラオケ行こう！」と誘う', type: 'ky' },
    ],
  },
  {
    id: 3,
    text: 'グループで話している時、一人だけ話題についてこれてない人がいたら？',
    options: [
      { text: '気づいているけど自然に様子を見る', type: 'kuuki' },
      { text: 'さりげなく話題を説明する', type: 'yomeru' },
      { text: '気づかず話し続ける', type: 'donkan' },
      { text: '「え、知らないの？」と驚く', type: 'ky' },
    ],
  },
  {
    id: 4,
    text: 'デート中、相手がスマホを気にしていたら？',
    options: [
      { text: '少し不安になるけど黙っている', type: 'kuuki' },
      { text: '「急ぎの用事？大丈夫？」と聞く', type: 'yomeru' },
      { text: '特に気にせず話し続ける', type: 'donkan' },
      { text: '「俺の話つまらない？」とストレートに聞く', type: 'ky' },
    ],
  },
  {
    id: 5,
    text: '友達が新しい服を着ている時は？',
    options: [
      { text: '相手が話題にするまで待つ', type: 'kuuki' },
      { text: '「その服いいね！新しい？」と気づく', type: 'yomeru' },
      { text: '特に気づかない', type: 'donkan' },
      { text: '「なんか違和感ある…あ、服か！」と言う', type: 'ky' },
    ],
  },
  {
    id: 6,
    text: '上司が忙しそうにしている時、相談があったら？',
    options: [
      { text: '後で時間を見て相談する', type: 'kuuki' },
      { text: '「お忙しいところすみません」と前置きして聞く', type: 'yomeru' },
      { text: 'タイミングを考えず相談してしまう', type: 'donkan' },
      { text: '「ちょっといいですか！」と割り込む', type: 'ky' },
    ],
  },
  {
    id: 7,
    text: '誰かが話している途中で言いたいことがあったら？',
    options: [
      { text: '話が終わるまで待つ', type: 'kuuki' },
      { text: '話の切れ目で「それで言うと…」と入る', type: 'yomeru' },
      { text: 'うっかり話を遮ってしまうことがある', type: 'donkan' },
      { text: '思いついたら即発言', type: 'ky' },
    ],
  },
  {
    id: 8,
    text: '友達グループでの会話、あなたの立ち位置は？',
    options: [
      { text: '周りの反応を見て発言を調整する', type: 'kuuki' },
      { text: '場の空気を作る側', type: 'yomeru' },
      { text: '自分のペースで話す', type: 'donkan' },
      { text: 'よく「それ今言う？」と言われる', type: 'ky' },
    ],
  },
  {
    id: 9,
    text: '「この話、内緒ね」と言われたら？',
    options: [
      { text: '絶対に誰にも言わない', type: 'kuuki' },
      { text: '信頼できる人にも言わない', type: 'yomeru' },
      { text: 'つい仲のいい人には話してしまう', type: 'donkan' },
      { text: '「〇〇から聞いたんだけど」と広めてしまう', type: 'ky' },
    ],
  },
  {
    id: 10,
    text: '自分の空気を読む力は？',
    options: [
      { text: '読みすぎて疲れることもある', type: 'kuuki' },
      { text: 'だいたい読める自信がある', type: 'yomeru' },
      { text: '時々読み間違えるかも', type: 'donkan' },
      { text: '正直、よく外す', type: 'ky' },
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
  famousType: string;
}> = {
  kuuki: {
    type: 'kuuki',
    title: '空気読みすぎタイプ',
    emoji: '🌀',
    percentage: 'KYレベル 5%（空気読みすぎ）',
    description: '空気を読む力がありすぎて、時に自分を抑えてしまうタイプ。周りを気にしすぎて疲れることも。もう少し自分を出しても大丈夫ですよ！',
    characteristics: ['繊細', '気を遣いすぎ', '観察力抜群', '控えめ', '周りを優先'],
    famousType: '「それ、私が言っていいのかな…」タイプ',
  },
  yomeru: {
    type: 'yomeru',
    title: '空気マスター',
    emoji: '✨',
    percentage: 'KYレベル 15%（絶妙バランス）',
    description: '空気を読みつつ、自分も出せるバランス型。場を読んで適切に行動できる理想的なタイプ。コミュニケーションの達人です！',
    characteristics: ['バランス良い', 'コミュ力高い', '気配り上手', '信頼される', 'ムードメーカー'],
    famousType: '「場の空気を作れる」タイプ',
  },
  donkan: {
    type: 'donkan',
    title: 'ちょっと鈍感タイプ',
    emoji: '😅',
    percentage: 'KYレベル 60%（やや鈍感）',
    description: '悪気はないけど、たまに空気を読み違えるタイプ。マイペースな一面があり、細かいことを気にしないのは長所でもあります。',
    characteristics: ['マイペース', '素直', '細かいこと気にしない', 'ポジティブ', '天然'],
    famousType: '「え、なんか変だった？」タイプ',
  },
  ky: {
    type: 'ky',
    title: '天然KYタイプ',
    emoji: '💨',
    percentage: 'KYレベル 90%（かなりKY）',
    description: '空気？何それ美味しいの？タイプ。自分の世界観を持っていて、周りを気にせず発言します。ある意味、羨ましい存在かも！',
    characteristics: ['自由人', '空気を壊す天才', 'マイワールド', '正直すぎる', '唯一無二'],
    famousType: '「空気は読むものじゃない、吸うもの」タイプ',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { kuuki: 0, yomeru: 0, donkan: 0, ky: 0 };

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
