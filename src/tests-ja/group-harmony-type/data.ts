// 和の精神テスト (와 정신 테스트 - 조화를 중시하는 정도)
export const questions = [
  {
    id: 1,
    text: 'グループで意見が分かれた時は？',
    options: [
      { text: '自分の意見を主張する', type: 'individual' },
      { text: 'まずは皆の意見を聞く', type: 'harmony' },
      { text: '多数派に合わせる', type: 'conformist' },
      { text: '中立的な立場で調整役になる', type: 'mediator' },
    ],
  },
  {
    id: 2,
    text: '友達グループでレストランを決める時は？',
    options: [
      { text: '「ここがいい！」と積極的に提案', type: 'individual' },
      { text: '「みんなが行きたいところでいいよ」', type: 'harmony' },
      { text: '人気のある意見に賛成する', type: 'conformist' },
      { text: '皆の希望を聞いて最適な店を提案', type: 'mediator' },
    ],
  },
  {
    id: 3,
    text: '空気を読むことについてどう思う？',
    options: [
      { text: '正直、苦手だし必要ないと思う', type: 'individual' },
      { text: '大切なスキルだと思う', type: 'harmony' },
      { text: '空気を読むのは当然のこと', type: 'conformist' },
      { text: '状況によって使い分ける', type: 'mediator' },
    ],
  },
  {
    id: 4,
    text: '会議で上司の意見に反対の時は？',
    options: [
      { text: 'はっきり反対意見を述べる', type: 'individual' },
      { text: '様子を見て、後で個別に伝える', type: 'harmony' },
      { text: '反対だけど黙っている', type: 'conformist' },
      { text: '質問形式で別の視点を提示する', type: 'mediator' },
    ],
  },
  {
    id: 5,
    text: '「出る杭は打たれる」という言葉について？',
    options: [
      { text: '古い考えだと思う、出る杭になりたい', type: 'individual' },
      { text: '一理あると思う、調和は大切', type: 'harmony' },
      { text: '目立たないほうが安全', type: 'conformist' },
      { text: '時と場合による', type: 'mediator' },
    ],
  },
  {
    id: 6,
    text: 'チームワークで一番大切なのは？',
    options: [
      { text: '各自が自分の役割で最大の成果を出す', type: 'individual' },
      { text: 'メンバー同士の信頼関係', type: 'harmony' },
      { text: 'ルールを守ること', type: 'conformist' },
      { text: 'コミュニケーションと調整', type: 'mediator' },
    ],
  },
  {
    id: 7,
    text: '飲み会の二次会に行きたくない時は？',
    options: [
      { text: '「今日は帰ります」とはっきり断る', type: 'individual' },
      { text: '皆の様子を見て決める', type: 'harmony' },
      { text: '行きたくなくても参加する', type: 'conformist' },
      { text: '上手い理由をつけて帰る', type: 'mediator' },
    ],
  },
  {
    id: 8,
    text: '周りと違う意見を持つことについて？',
    options: [
      { text: '違う意見があるのは当然、主張すべき', type: 'individual' },
      { text: '場の雰囲気を見て判断する', type: 'harmony' },
      { text: '違う意見は持たないようにしている', type: 'conformist' },
      { text: '違う意見も大事だけど伝え方が重要', type: 'mediator' },
    ],
  },
  {
    id: 9,
    text: '日本の「本音と建前」文化について？',
    options: [
      { text: '正直、面倒だと思う', type: 'individual' },
      { text: '円滑なコミュニケーションに必要', type: 'harmony' },
      { text: '当然のマナーだと思う', type: 'conformist' },
      { text: '使い分けが上手くできる', type: 'mediator' },
    ],
  },
  {
    id: 10,
    text: '理想のグループの雰囲気は？',
    options: [
      { text: '自由に意見を言い合える環境', type: 'individual' },
      { text: '穏やかで居心地の良い雰囲気', type: 'harmony' },
      { text: '秩序があり統一された雰囲気', type: 'conformist' },
      { text: '多様性を認め合う雰囲気', type: 'mediator' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  harmonyLevel: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
}> = {
  individual: {
    type: 'individual',
    title: '個性派タイプ',
    emoji: '🌟',
    harmonyLevel: '和の精神度：★★☆☆☆',
    description: '自分の意見をしっかり持ち、主張できるあなた。日本社会では少し浮くこともあるかもしれませんが、その個性が新しい風を起こします。グローバルな環境で活躍できるタイプ！',
    characteristics: ['自己主張が得意', '独立心が強い', '革新的', 'リーダーシップがある'],
    strengths: ['明確な意思決定', 'イノベーションを起こせる', '自分軸がブレない'],
    challenges: ['周囲との軋轢に注意', '時には協調も大切', '聞く力も磨こう'],
  },
  harmony: {
    type: 'harmony',
    title: '調和重視タイプ',
    emoji: '🌸',
    harmonyLevel: '和の精神度：★★★★☆',
    description: '周りとの調和を大切にするあなた。日本の「和」の精神をよく理解しています。皆が心地よくいられる空間を作れる、貴重な存在です。',
    characteristics: ['協調性が高い', '思いやりがある', '場の空気を読める', '信頼される'],
    strengths: ['チームワーク力', '人間関係構築', '安心感を与える'],
    challenges: ['自分の意見も大切に', '我慢しすぎに注意', 'たまには自己主張も'],
  },
  conformist: {
    type: 'conformist',
    title: '同調タイプ',
    emoji: '🤝',
    harmonyLevel: '和の精神度：★★★★★',
    description: '集団の和を最優先するあなた。日本社会で摩擦なく過ごせますが、たまには自分の本音を大切にしてもいいかもしれません。',
    characteristics: ['順応性が高い', '波風を立てない', 'ルールを守る', '安定志向'],
    strengths: ['どこでも馴染める', '信頼される', '安定したパフォーマンス'],
    challenges: ['自分の意見を持とう', 'ストレスを溜めないで', '時には「NO」も大切'],
  },
  mediator: {
    type: 'mediator',
    title: '調整役タイプ',
    emoji: '⚖️',
    harmonyLevel: '和の精神度：★★★☆☆',
    description: 'バランス感覚に優れた調整役のあなた。個性と調和、両方を大切にできる理想的なタイプです。どんな場面でも上手く立ち回れます。',
    characteristics: ['バランス感覚', '調整能力', '柔軟性', '状況判断力'],
    strengths: ['コンフリクト解決', '多様な環境に適応', '信頼される仲介者'],
    challenges: ['時には立場を明確に', '八方美人に注意', '自分の軸も大切に'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { individual: 0, harmony: 0, conformist: 0, mediator: 0 };

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
