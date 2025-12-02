// 秘密を守る度診断 (비밀을 지키는 정도 진단)
export const questions = [
  {
    id: 1,
    text: '友達から「誰にも言わないで」と秘密を聞いたら？',
    options: [
      { text: '絶対に墓場まで持っていく', type: 'vault' },
      { text: 'うっかり話してしまうかも心配', type: 'leaky' },
      { text: '親友にだけなら…', type: 'selective' },
      { text: 'そもそも秘密は聞きたくない', type: 'avoider' },
    ],
  },
  {
    id: 2,
    text: '驚くようなゴシップを聞いた時は？',
    options: [
      { text: '黙っている、興味ない', type: 'vault' },
      { text: '誰かに話したくてウズウズ', type: 'leaky' },
      { text: '信頼できる人にだけ共有', type: 'selective' },
      { text: '聞かなかったことにする', type: 'avoider' },
    ],
  },
  {
    id: 3,
    text: '秘密を守るのに自信は？',
    options: [
      { text: 'かなりある、信頼される方', type: 'vault' },
      { text: '正直、口が軽いかも…', type: 'leaky' },
      { text: '内容と相手による', type: 'selective' },
      { text: '秘密を持ちたくない', type: 'avoider' },
    ],
  },
  {
    id: 4,
    text: 'お酒を飲むと秘密は？',
    options: [
      { text: '酔っても口は堅い', type: 'vault' },
      { text: 'つい口が滑ることも…', type: 'leaky' },
      { text: '気をつけてはいるけど', type: 'selective' },
      { text: 'だから秘密は聞かない', type: 'avoider' },
    ],
  },
  {
    id: 5,
    text: '誰かの秘密を知った時の気持ちは？',
    options: [
      { text: '信頼されて嬉しい', type: 'vault' },
      { text: '誰かに言いたい衝動', type: 'leaky' },
      { text: '重荷に感じることも', type: 'selective' },
      { text: '知りたくなかった', type: 'avoider' },
    ],
  },
  {
    id: 6,
    text: '「あの人って〇〇らしいよ」という話を振られたら？',
    options: [
      { text: '「ふーん」で終わらせる', type: 'vault' },
      { text: '「え、詳しく！」と食いつく', type: 'leaky' },
      { text: '相手を見て反応を変える', type: 'selective' },
      { text: '「そういう話はちょっと…」とかわす', type: 'avoider' },
    ],
  },
  {
    id: 7,
    text: 'SNSでのプライベート情報の扱いは？',
    options: [
      { text: 'ほとんど載せない', type: 'vault' },
      { text: '結構オープンに投稿', type: 'leaky' },
      { text: '見せる相手を限定', type: 'selective' },
      { text: 'SNS自体あまりやらない', type: 'avoider' },
    ],
  },
  {
    id: 8,
    text: '自分の秘密は？',
    options: [
      { text: '誰にも言わない', type: 'vault' },
      { text: '親しい人には話すかも', type: 'leaky' },
      { text: '相手を選んで打ち明ける', type: 'selective' },
      { text: '秘密にするほどのことがない', type: 'avoider' },
    ],
  },
  {
    id: 9,
    text: '「ここだけの話」と前置きされたら？',
    options: [
      { text: '責任を持って聞く', type: 'vault' },
      { text: '興味津々で聞く', type: 'leaky' },
      { text: '聞くけど重さによる', type: 'selective' },
      { text: '「聞いても大丈夫？」と確認', type: 'avoider' },
    ],
  },
  {
    id: 10,
    text: '秘密についてのあなたのスタンスは？',
    options: [
      { text: '信頼の証、絶対守る', type: 'vault' },
      { text: '秘密は苦手、つい話しちゃう', type: 'leaky' },
      { text: '状況と相手によって判断', type: 'selective' },
      { text: '秘密自体を避けたい', type: 'avoider' },
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
  vault: {
    type: 'vault',
    title: '鉄壁の金庫タイプ',
    emoji: '🔒',
    percentage: '秘密厳守度 100%',
    description: '秘密は墓場まで持っていく鉄壁のガード！どんな秘密も漏らさない信頼の塊。周りから「この人になら話せる」と頼りにされる存在。',
    characteristics: ['口が堅い', '信頼される', '責任感', '誠実', '相談役'],
    advice: '素晴らしい信頼性！でも、重すぎる秘密は自分の負担にならないよう気をつけて。',
  },
  leaky: {
    type: 'leaky',
    title: '正直おしゃべりタイプ',
    emoji: '💬',
    percentage: 'おしゃべり度 85%',
    description: '秘密を守るのがちょっと苦手…つい誰かに話したくなっちゃう正直者。悪気はないけど、「ここだけの話」が広がりがち。人の興味を惹く話が好き。',
    characteristics: ['おしゃべり', '正直', '社交的', '話題が豊富', 'うっかり'],
    advice: '話したい気持ちはわかる！でも「誰にも言わないで」は本当に守って。',
  },
  selective: {
    type: 'selective',
    title: '状況判断タイプ',
    emoji: '⚖️',
    percentage: '判断力 80%',
    description: '秘密の重さと相手を見て判断する現実派。本当に大事なことは守るけど、軽い話題なら共有することも。バランス感覚のある大人な対応。',
    characteristics: ['状況判断', '柔軟', '現実的', 'バランス型', '大人'],
    advice: '判断力は大事！ただ、自分基準と相手の基準は違うことも忘れずに。',
  },
  avoider: {
    type: 'avoider',
    title: '秘密回避タイプ',
    emoji: '🙈',
    percentage: '回避度 90%',
    description: 'そもそも秘密を知りたくない、巻き込まれたくないタイプ。重い話を聞くのが苦手で、距離を置くことでトラブルを回避。平和主義の守り方。',
    characteristics: ['平和主義', '巻き込まれない', '距離感上手', '自己防衛', 'ストレス回避'],
    advice: '自分を守る姿勢は大切！でも、信頼されたい人の話は聞いてあげて。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { vault: 0, leaky: 0, selective: 0, avoider: 0 };

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
