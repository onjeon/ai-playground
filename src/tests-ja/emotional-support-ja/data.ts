// 感情サポートタイプ診断
export const questions = [
  {
    id: 1,
    text: '落ち込んでいる友達にかける言葉は？',
    options: [
      { text: '「辛かったね」と気持ちを受け止める', type: 'validating' },
      { text: '「大丈夫、きっとうまくいくよ」と励ます', type: 'encouraging' },
      { text: '一緒にいるだけで言葉はいらない', type: 'presence' },
      { text: '「こうしてみたら？」とアドバイスする', type: 'actionOriented' },
    ],
  },
  {
    id: 2,
    text: '大切な人が泣いている時は？',
    options: [
      { text: '泣いていいよと伝える', type: 'validating' },
      { text: '笑わせようとする', type: 'encouraging' },
      { text: '黙ってそばにいる', type: 'presence' },
      { text: '何があったか聞く', type: 'actionOriented' },
    ],
  },
  {
    id: 3,
    text: '感情的なサポートで一番大切だと思うのは？',
    options: [
      { text: '相手の感情を否定しないこと', type: 'validating' },
      { text: '希望を与えること', type: 'encouraging' },
      { text: '安心できる存在でいること', type: 'presence' },
      { text: '具体的な助けを提供すること', type: 'actionOriented' },
    ],
  },
  {
    id: 4,
    text: '友達が失恋した時は？',
    options: [
      { text: '「悲しいよね」と共感する', type: 'validating' },
      { text: '「もっといい人がいるよ」と励ます', type: 'encouraging' },
      { text: '一緒に過ごす時間を作る', type: 'presence' },
      { text: '気分転換に誘う', type: 'actionOriented' },
    ],
  },
  {
    id: 5,
    text: '相手がネガティブな感情を吐き出している時は？',
    options: [
      { text: 'すべて受け止める', type: 'validating' },
      { text: 'ポジティブな面を見せる', type: 'encouraging' },
      { text: '静かに聞いている', type: 'presence' },
      { text: '解決策を考え始める', type: 'actionOriented' },
    ],
  },
  {
    id: 6,
    text: '感情的なサポートの後、相手にどうなってほしい？',
    options: [
      { text: '感情を整理できた', type: 'validating' },
      { text: '前向きになれた', type: 'encouraging' },
      { text: '安心できた', type: 'presence' },
      { text: '次のステップが見えた', type: 'actionOriented' },
    ],
  },
  {
    id: 7,
    text: '自分が辛い時にしてほしいことは？',
    options: [
      { text: '気持ちをわかってもらうこと', type: 'validating' },
      { text: '励ましてもらうこと', type: 'encouraging' },
      { text: 'そばにいてもらうこと', type: 'presence' },
      { text: '一緒に解決を考えてもらうこと', type: 'actionOriented' },
    ],
  },
  {
    id: 8,
    text: '「感情的サポート」と聞いて浮かぶイメージは？',
    options: [
      { text: '理解と受容', type: 'validating' },
      { text: '応援と希望', type: 'encouraging' },
      { text: '温もりと安心', type: 'presence' },
      { text: '助けと解決', type: 'actionOriented' },
    ],
  },
  {
    id: 9,
    text: 'サポートが難しいと感じる時は？',
    options: [
      { text: '自分も感情が揺さぶられる時', type: 'validating' },
      { text: '相手がポジティブになれない時', type: 'encouraging' },
      { text: '何をしていいかわからない時', type: 'presence' },
      { text: '問題が解決できない時', type: 'actionOriented' },
    ],
  },
  {
    id: 10,
    text: 'あなたの感情サポートを一言で？',
    options: [
      { text: '「あなたの気持ちはわかるよ」', type: 'validating' },
      { text: '「きっと大丈夫！」', type: 'encouraging' },
      { text: '「ここにいるよ」', type: 'presence' },
      { text: '「一緒に考えよう」', type: 'actionOriented' },
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
  supportStyle: string;
}> = {
  validating: {
    type: 'validating',
    title: '受容・共感型',
    emoji: '🤗',
    percentage: '受容力 95%',
    description: '相手の感情をそのまま受け止め、共感するタイプ。「あなたの気持ちはわかる」と伝えることで安心感を与えます。',
    characteristics: ['受容力', '共感力', '理解', '安心感', '肯定'],
    supportStyle: '気持ちを否定せず、すべて受け止める',
  },
  encouraging: {
    type: 'encouraging',
    title: '励まし・希望型',
    emoji: '🌟',
    percentage: '励まし力 90%',
    description: 'ポジティブなエネルギーで相手を励ますタイプ。希望を与え、前向きな気持ちにさせる力があります。',
    characteristics: ['ポジティブ', '希望', '元気', '前向き', 'エネルギッシュ'],
    supportStyle: '明るく励まし、希望の光を見せる',
  },
  presence: {
    type: 'presence',
    title: '存在・寄り添い型',
    emoji: '🌿',
    percentage: '寄り添い力 88%',
    description: '言葉より存在で支えるタイプ。そばにいるだけで安心感を与え、静かに寄り添います。',
    characteristics: ['穏やか', '安心感', '温かさ', '静か', '存在感'],
    supportStyle: '黙ってそばにいる、存在そのものが癒し',
  },
  actionOriented: {
    type: 'actionOriented',
    title: '行動・解決型',
    emoji: '🛠️',
    percentage: '行動力 85%',
    description: '感情面だけでなく、具体的な行動でサポートするタイプ。問題解決に向けて一緒に動きます。',
    characteristics: ['行動的', '実践的', '解決志向', '頼りになる', 'サポート'],
    supportStyle: '一緒に考え、具体的な行動を起こす',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { validating: 0, encouraging: 0, presence: 0, actionOriented: 0 };

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
