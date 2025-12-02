// 人生振り返りタイプ診断
export const questions = [
  {
    id: 1,
    text: '過去を振り返ることは？',
    options: [
      { text: 'よくする、大切な時間', type: 'reflective' },
      { text: '時々する、学びがある', type: 'balanced' },
      { text: 'あまりしない、前を見る', type: 'forward' },
      { text: '辛くなるからしたくない', type: 'avoidant' },
    ],
  },
  {
    id: 2,
    text: '人生で最も誇れることは？',
    options: [
      { text: '困難を乗り越えた経験', type: 'reflective' },
      { text: 'バランスよく生きてきたこと', type: 'balanced' },
      { text: '常に挑戦し続けてきたこと', type: 'forward' },
      { text: '考えるのが難しい', type: 'avoidant' },
    ],
  },
  {
    id: 3,
    text: '過去の失敗について？',
    options: [
      { text: '深く考え、教訓にしている', type: 'reflective' },
      { text: '反省はするが引きずらない', type: 'balanced' },
      { text: '過去は過去、次に進む', type: 'forward' },
      { text: '思い出すと辛くなる', type: 'avoidant' },
    ],
  },
  {
    id: 4,
    text: '人生の岐路を振り返ると？',
    options: [
      { text: '選択の意味を深く考える', type: 'reflective' },
      { text: '良い選択も悪い選択もあった', type: 'balanced' },
      { text: '全て自分を成長させた', type: 'forward' },
      { text: '別の選択をしていれば…', type: 'avoidant' },
    ],
  },
  {
    id: 5,
    text: '昔の自分に会えたら？',
    options: [
      { text: 'たくさん話したいことがある', type: 'reflective' },
      { text: '少しアドバイスをしたい', type: 'balanced' },
      { text: 'そのままで大丈夫と伝える', type: 'forward' },
      { text: '会いたくない', type: 'avoidant' },
    ],
  },
  {
    id: 6,
    text: '人生の満足度は？',
    options: [
      { text: '深く考えた上で満足', type: 'reflective' },
      { text: 'おおむね満足', type: 'balanced' },
      { text: 'まだまだこれから', type: 'forward' },
      { text: 'よくわからない', type: 'avoidant' },
    ],
  },
  {
    id: 7,
    text: '思い出の品について？',
    options: [
      { text: '大切に保管し、時々見返す', type: 'reflective' },
      { text: '特別なものだけ保管', type: 'balanced' },
      { text: '新しいものを大切に', type: 'forward' },
      { text: '見ると辛くなることもある', type: 'avoidant' },
    ],
  },
  {
    id: 8,
    text: '人生の後悔について？',
    options: [
      { text: '後悔も含めて受け入れている', type: 'reflective' },
      { text: '少しはあるが気にしすぎない', type: 'balanced' },
      { text: '後悔より次の行動', type: 'forward' },
      { text: '後悔が多くて辛い', type: 'avoidant' },
    ],
  },
  {
    id: 9,
    text: '自分の人生を物語にすると？',
    options: [
      { text: '深みのある成長物語', type: 'reflective' },
      { text: '山あり谷ありの冒険記', type: 'balanced' },
      { text: 'まだ書いている途中', type: 'forward' },
      { text: '読みたくない', type: 'avoidant' },
    ],
  },
  {
    id: 10,
    text: '人生を振り返る頻度は？',
    options: [
      { text: '定期的に深く振り返る', type: 'reflective' },
      { text: '節目で振り返る', type: 'balanced' },
      { text: '振り返るより行動', type: 'forward' },
      { text: '避けている', type: 'avoidant' },
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
  reviewAdvice: string;
}> = {
  reflective: {
    type: 'reflective',
    title: '深い内省者',
    emoji: '🪞',
    percentage: '内省度 95%',
    description: '過去を深く振り返り、そこから学びと意味を見出すタイプ。人生の出来事を丁寧に咀嚼し、成長の糧にします。',
    characteristics: ['内省的', '哲学的', '深い思考', '学び続ける', '自己理解'],
    reviewAdvice: '過去に浸りすぎず、今も大切に',
  },
  balanced: {
    type: 'balanced',
    title: 'バランス派',
    emoji: '⚖️',
    percentage: 'バランス度 85%',
    description: '過去を適度に振り返りつつ、現在も大切にするバランス派。良いことも悪いことも受け入れて前に進めます。',
    characteristics: ['バランス感覚', '柔軟', '受容', '前向き', '適応力'],
    reviewAdvice: 'そのバランス感覚を大切に',
  },
  forward: {
    type: 'forward',
    title: '前進者',
    emoji: '🚀',
    percentage: '前進力 90%',
    description: '過去より未来を見つめるタイプ。振り返るより行動を選び、常に前へ進むことを重視します。',
    characteristics: ['行動派', '前向き', 'エネルギッシュ', '挑戦的', '楽観的'],
    reviewAdvice: '時には立ち止まって振り返ることも成長の糧に',
  },
  avoidant: {
    type: 'avoidant',
    title: '回避傾向',
    emoji: '🌫️',
    percentage: '回避度 75%',
    description: '過去を振り返ることが辛いタイプ。後悔や辛い記憶から距離を取ろうとする傾向があります。',
    characteristics: ['繊細', '感受性', '自己防衛', '慎重', '敏感'],
    reviewAdvice: '少しずつ、安心できる人と一緒に振り返ってみて',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { reflective: 0, balanced: 0, forward: 0, avoidant: 0 };

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
