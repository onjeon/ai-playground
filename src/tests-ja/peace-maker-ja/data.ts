// 平和主義度診断
export const questions = [
  {
    id: 1,
    text: '友達同士が喧嘩し始めた時は？',
    options: [
      { text: 'すぐに仲裁に入る', type: 'active' },
      { text: '両方の話を聞いて仲直りを促す', type: 'mediator' },
      { text: '自然に収まるのを待つ', type: 'passive' },
      { text: '巻き込まれないよう離れる', type: 'avoidant' },
    ],
  },
  {
    id: 2,
    text: '自分が批判された時は？',
    options: [
      { text: '冷静に対話して誤解を解く', type: 'active' },
      { text: '相手の気持ちも理解しようとする', type: 'mediator' },
      { text: '反論せずに受け流す', type: 'passive' },
      { text: '距離を置いて関わらない', type: 'avoidant' },
    ],
  },
  {
    id: 3,
    text: '職場やグループ内の不和に気づいた時は？',
    options: [
      { text: '問題解決に向けて行動する', type: 'active' },
      { text: '話し合いの場を設ける', type: 'mediator' },
      { text: '見守りながら様子を見る', type: 'passive' },
      { text: '自分の仕事に集中する', type: 'avoidant' },
    ],
  },
  {
    id: 4,
    text: '意見が対立した時の優先事項は？',
    options: [
      { text: 'より良い解決策を見つけること', type: 'active' },
      { text: '関係を維持すること', type: 'mediator' },
      { text: '争いを避けること', type: 'passive' },
      { text: '自分の心の平和', type: 'avoidant' },
    ],
  },
  {
    id: 5,
    text: '誰かが不公平な扱いを受けていたら？',
    options: [
      { text: '声を上げて助ける', type: 'active' },
      { text: '双方の話を聞いて調整する', type: 'mediator' },
      { text: 'その人に寄り添う', type: 'passive' },
      { text: '関わらないようにする', type: 'avoidant' },
    ],
  },
  {
    id: 6,
    text: '争いを避けるために譲歩することは？',
    options: [
      { text: '必要なら戦うこともある', type: 'active' },
      { text: '双方が譲歩すべき', type: 'mediator' },
      { text: 'よく譲歩する', type: 'passive' },
      { text: 'いつも譲歩して争いを避ける', type: 'avoidant' },
    ],
  },
  {
    id: 7,
    text: 'グループでの自分の役割は？',
    options: [
      { text: '問題解決のリーダー', type: 'active' },
      { text: '調整役・仲裁者', type: 'mediator' },
      { text: '調和を保つ存在', type: 'passive' },
      { text: '静かにいる存在', type: 'avoidant' },
    ],
  },
  {
    id: 8,
    text: '平和を保つために大切なのは？',
    options: [
      { text: '問題に正面から向き合うこと', type: 'active' },
      { text: 'コミュニケーションを大切にすること', type: 'mediator' },
      { text: 'お互いを尊重すること', type: 'passive' },
      { text: '距離感を保つこと', type: 'avoidant' },
    ],
  },
  {
    id: 9,
    text: '怒りを感じた時は？',
    options: [
      { text: '適切に表現して解決を図る', type: 'active' },
      { text: '相手と話し合う', type: 'mediator' },
      { text: '一人で落ち着くまで待つ', type: 'passive' },
      { text: '何もなかったように振る舞う', type: 'avoidant' },
    ],
  },
  {
    id: 10,
    text: '理想の人間関係は？',
    options: [
      { text: '本音で話し合える関係', type: 'active' },
      { text: 'お互いを理解し合える関係', type: 'mediator' },
      { text: '穏やかで安定した関係', type: 'passive' },
      { text: '適度な距離感のある関係', type: 'avoidant' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  level: string;
  description: string;
  characteristics: string[];
  recommendation: string;
}> = {
  active: {
    type: 'active',
    title: 'アクティブ平和主義者',
    emoji: '✊',
    level: '平和主義度：能動型',
    description: '平和のために積極的に行動するあなた！問題を放置せず、解決に向けて動きます。正義感が強く、より良い世界を目指す情熱を持っています。',
    characteristics: ['行動力', '正義感', 'リーダーシップ', '問題解決', '勇気'],
    recommendation: '時には相手のペースも尊重して、じっくり対話してみよう！',
  },
  mediator: {
    type: 'mediator',
    title: '仲裁型平和主義者',
    emoji: '🕊️',
    level: '平和主義度：調停型',
    description: '対話を通じて人と人をつなぐあなた！双方の立場を理解し、Win-Winの解決策を見つけることができます。天性のメディエーター！',
    characteristics: ['傾聴力', '共感力', '調整力', 'バランス感覚', '信頼性'],
    recommendation: '自分の意見も大切に。時には主張することも平和につながるよ！',
  },
  passive: {
    type: 'passive',
    title: '穏やか平和主義者',
    emoji: '🌿',
    level: '平和主義度：受容型',
    description: '穏やかな存在感で周りを癒すあなた！争いを好まず、相手を受け入れることで平和を保ちます。自然体の温かさが魅力！',
    characteristics: ['穏やか', '受容力', '忍耐', '優しさ', '調和'],
    recommendation: '自分の気持ちも大切に表現してみて。それも平和の一部だよ！',
  },
  avoidant: {
    type: 'avoidant',
    title: '静寂型平和主義者',
    emoji: '🧘',
    level: '平和主義度：回避型',
    description: '自分の内なる平和を大切にするあなた。争いから距離を置き、心の静けさを保ちます。自分自身との調和を知っている人！',
    characteristics: ['内向的', '冷静', '自己保護', 'マイペース', '静けさ'],
    recommendation: '時には周りの問題にも関わってみると、新しい発見があるかも！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { active: 0, mediator: 0, passive: 0, avoidant: 0 };

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
