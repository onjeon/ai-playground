// 残業ストレスタイプ診断 (잔업 스트레스 유형 - 야근 대응 스타일)
export const questions = [
  {
    id: 1,
    text: '上司から急な残業を頼まれたら？',
    options: [
      { text: '「はい、喜んで！」と即答する', type: 'workaholic' },
      { text: '内心嫌だけど仕方なく引き受ける', type: 'endurer' },
      { text: '「今日は予定があるので...」と断る', type: 'balancer' },
      { text: '効率化を提案して早く終わらせようとする', type: 'optimizer' },
    ],
  },
  {
    id: 2,
    text: '残業中、同僚が先に帰ろうとしたら？',
    options: [
      { text: '「お疲れ様」と言いながらも少し羨ましい', type: 'endurer' },
      { text: '自分も早く終わらせて帰ろうと集中する', type: 'optimizer' },
      { text: '特に何も思わない、自分は自分', type: 'balancer' },
      { text: '「一緒に頑張ろうよ」と引き止める', type: 'workaholic' },
    ],
  },
  {
    id: 3,
    text: '終電を逃しそうな時、まだ仕事が残っていたら？',
    options: [
      { text: 'タクシーで帰ってでも終わらせる', type: 'workaholic' },
      { text: '明日に回して必死で終電に乗る', type: 'balancer' },
      { text: '諦めて会社で仮眠を取る', type: 'endurer' },
      { text: '残りは朝イチでやると決めて効率よく帰る', type: 'optimizer' },
    ],
  },
  {
    id: 4,
    text: '休日に仕事のメールが来たら？',
    options: [
      { text: 'すぐに対応して返信する', type: 'workaholic' },
      { text: '見なかったことにして月曜に対応', type: 'balancer' },
      { text: 'ストレスを感じながらも返信してしまう', type: 'endurer' },
      { text: '緊急度を判断して必要なら簡潔に返信', type: 'optimizer' },
    ],
  },
  {
    id: 5,
    text: '残業が続いた週末は何をする？',
    options: [
      { text: 'ひたすら寝て体力回復', type: 'endurer' },
      { text: '趣味や友人との時間でリフレッシュ', type: 'balancer' },
      { text: '来週の仕事の準備をしておく', type: 'workaholic' },
      { text: '効率化ツールや仕事術の勉強', type: 'optimizer' },
    ],
  },
  {
    id: 6,
    text: '「残業=頑張っている」という考えについて？',
    options: [
      { text: '当然だと思う、努力の証', type: 'workaholic' },
      { text: '古い考えだと思うけど、現実は...', type: 'endurer' },
      { text: '完全に間違っている、成果で評価すべき', type: 'balancer' },
      { text: '残業は非効率の証拠だと思う', type: 'optimizer' },
    ],
  },
  {
    id: 7,
    text: '残業代が出ない場合は？',
    options: [
      { text: '仕事だから仕方ない', type: 'endurer' },
      { text: '転職を考え始める', type: 'balancer' },
      { text: 'やりがいがあれば関係ない', type: 'workaholic' },
      { text: '残業しなくて済む方法を必死に考える', type: 'optimizer' },
    ],
  },
  {
    id: 8,
    text: 'チームメンバーが残業しているのに自分だけ帰る時は？',
    options: [
      { text: '申し訳なくて帰れない', type: 'endurer' },
      { text: '手伝えることがあれば残る', type: 'workaholic' },
      { text: '自分の仕事が終われば堂々と帰る', type: 'balancer' },
      { text: '皆の仕事が早く終わるよう改善提案する', type: 'optimizer' },
    ],
  },
  {
    id: 9,
    text: '理想の働き方は？',
    options: [
      { text: '仕事に没頭して成果を出す', type: 'workaholic' },
      { text: '与えられた仕事をこなす', type: 'endurer' },
      { text: '定時退社でプライベート充実', type: 'balancer' },
      { text: '短時間で高い成果を出す', type: 'optimizer' },
    ],
  },
  {
    id: 10,
    text: '残業が多い会社の飲み会に誘われたら？',
    options: [
      { text: '参加して上司にアピールする', type: 'workaholic' },
      { text: '断りたいけど参加してしまう', type: 'endurer' },
      { text: '予定があると言って断る', type: 'balancer' },
      { text: '短時間だけ参加して効率よく帰る', type: 'optimizer' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string[];
  stressLevel: string;
  advice: string;
}> = {
  workaholic: {
    type: 'workaholic',
    title: '仕事命タイプ',
    emoji: '🔥💼',
    description: '仕事が生きがいのあなた。残業も苦にならず、むしろ楽しんでいる節があります。成果を出すことに喜びを感じますが、たまには自分を休ませてあげてください。',
    characteristics: ['仕事への情熱が強い', '責任感が高い', '成果主義', '自己犠牲的', 'リーダー気質'],
    stressLevel: 'ストレス耐性：高（でも燃え尽き注意）',
    advice: '頑張りすぎに注意！時には「何もしない時間」も大切です。趣味や休息の時間を意識的に作りましょう。',
  },
  endurer: {
    type: 'endurer',
    title: '我慢タイプ',
    emoji: '😔💦',
    description: 'ストレスを感じながらも耐えているあなた。周りへの配慮が強く、自分の気持ちを後回しにしがちです。もっと自分を大切にしてもいいんですよ。',
    characteristics: ['協調性が高い', '断れない', 'ストレスを溜めやすい', '優しい', '自己主張が苦手'],
    stressLevel: 'ストレス耐性：低（限界に注意）',
    advice: '「NO」と言う練習をしましょう。自分の時間と健康を守ることは、わがままではありません。信頼できる人に相談することも大切です。',
  },
  balancer: {
    type: 'balancer',
    title: 'ワークライフバランス重視タイプ',
    emoji: '⚖️✨',
    description: '仕事とプライベートのバランスを大切にするあなた。自分の時間をしっかり確保し、メリハリのある生活を心がけています。とても健全な考え方です！',
    characteristics: ['境界線を引ける', '自己管理ができる', 'プライベート重視', '効率的', '自己主張ができる'],
    stressLevel: 'ストレス耐性：良好',
    advice: 'その調子です！ただし、チームワークとのバランスも忘れずに。時には柔軟に対応することで、さらに評価が上がるかも。',
  },
  optimizer: {
    type: 'optimizer',
    title: '効率化マスタータイプ',
    emoji: '🚀⚡',
    description: '残業を減らすために知恵を絞るあなた。「残業=非効率」と考え、常に改善を追求します。その姿勢は周りにも良い影響を与えています。',
    characteristics: ['効率重視', '問題解決能力が高い', '改善志向', '論理的', 'テクノロジーに強い'],
    stressLevel: 'ストレス耐性：良好（コントロールできている）',
    advice: '素晴らしい姿勢です！ただし、すべてが効率で測れるわけではないことも。時には「無駄」に見える雑談やゆとりも、チームには必要かもしれません。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { workaholic: 0, endurer: 0, balancer: 0, optimizer: 0 };

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
