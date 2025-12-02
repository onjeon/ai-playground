// 影響力スタイル診断
export const questions = [
  {
    id: 1,
    text: '周りの人を動かす時のアプローチは？',
    options: [
      { text: '論理的に説明して納得してもらう', type: 'logical' },
      { text: '情熱やビジョンで心を動かす', type: 'inspirational' },
      { text: '信頼関係を築いてからお願いする', type: 'relational' },
      { text: '自分が行動で示す', type: 'example' },
    ],
  },
  {
    id: 2,
    text: '会議やディスカッションでの役割は？',
    options: [
      { text: 'データや事実を示して議論をリード', type: 'logical' },
      { text: 'みんなのモチベーションを上げる', type: 'inspirational' },
      { text: '参加者の意見をまとめる', type: 'relational' },
      { text: '実例や経験談を共有する', type: 'example' },
    ],
  },
  {
    id: 3,
    text: '人の考えを変えたい時は？',
    options: [
      { text: '根拠を示して説得する', type: 'logical' },
      { text: '理想の未来を描いて見せる', type: 'inspirational' },
      { text: '相手の立場を理解してから対話する', type: 'relational' },
      { text: '自分がまず変わって見せる', type: 'example' },
    ],
  },
  {
    id: 4,
    text: 'チームを率いる時のスタイルは？',
    options: [
      { text: '明確な目標と計画を示す', type: 'logical' },
      { text: '夢やビジョンを語る', type: 'inspirational' },
      { text: 'メンバーとの信頼関係を重視', type: 'relational' },
      { text: '自ら先頭に立って行動', type: 'example' },
    ],
  },
  {
    id: 5,
    text: '反対意見に遭遇した時は？',
    options: [
      { text: '論理的に反論する', type: 'logical' },
      { text: 'より大きな視点で語りかける', type: 'inspirational' },
      { text: '相手の懸念を理解して対話する', type: 'relational' },
      { text: '結果を出して証明する', type: 'example' },
    ],
  },
  {
    id: 6,
    text: '影響力の源泉は？',
    options: [
      { text: '知識や専門性', type: 'logical' },
      { text: 'ビジョンやカリスマ性', type: 'inspirational' },
      { text: '人望や信頼', type: 'relational' },
      { text: '実績や行動力', type: 'example' },
    ],
  },
  {
    id: 7,
    text: '新しいアイデアを提案する時は？',
    options: [
      { text: 'データや分析結果と一緒に', type: 'logical' },
      { text: '可能性やワクワク感を伝える', type: 'inspirational' },
      { text: '関係者の意見を取り入れながら', type: 'relational' },
      { text: 'まず小さく実践してから', type: 'example' },
    ],
  },
  {
    id: 8,
    text: '周りからどう思われていると思う？',
    options: [
      { text: '頼りになる・論理的', type: 'logical' },
      { text: '刺激的・エネルギッシュ', type: 'inspirational' },
      { text: '温かい・信頼できる', type: 'relational' },
      { text: '行動力がある・頼もしい', type: 'example' },
    ],
  },
  {
    id: 9,
    text: '人を巻き込む時の強みは？',
    options: [
      { text: '説得力のある説明', type: 'logical' },
      { text: '情熱が伝染する', type: 'inspirational' },
      { text: '安心感を与えられる', type: 'relational' },
      { text: '背中で語る', type: 'example' },
    ],
  },
  {
    id: 10,
    text: '理想のリーダーシップは？',
    options: [
      { text: '正確な判断で導くリーダー', type: 'logical' },
      { text: '人を鼓舞するカリスマ', type: 'inspirational' },
      { text: '人をつなぐサーバントリーダー', type: 'relational' },
      { text: '率先垂範のリーダー', type: 'example' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  style: string;
  description: string;
  characteristics: string[];
  recommendation: string;
}> = {
  logical: {
    type: 'logical',
    title: '論理型インフルエンサー',
    emoji: '🧠',
    style: '影響力スタイル：論理型',
    description: 'データと論理で人を動かすあなた！根拠を示して納得させる説得力が強み。知識と分析力で信頼を勝ち取ります。',
    characteristics: ['分析力', '説得力', '専門性', '論理的', '信頼性'],
    recommendation: '感情面にも訴えかけると、さらに人を動かせるよ！',
  },
  inspirational: {
    type: 'inspirational',
    title: 'ビジョナリー型インフルエンサー',
    emoji: '✨',
    style: '影響力スタイル：ビジョン型',
    description: '夢とビジョンで人の心を動かすあなた！情熱が伝染し、周りをワクワクさせる力があります。生まれながらのリーダー！',
    characteristics: ['情熱', 'カリスマ性', '先見性', 'インスピレーション', 'エネルギー'],
    recommendation: '具体的な計画も示すと、より多くの人がついてくるよ！',
  },
  relational: {
    type: 'relational',
    title: '関係性型インフルエンサー',
    emoji: '💝',
    style: '影響力スタイル：関係性型',
    description: '信頼関係を通じて影響力を発揮するあなた！人の気持ちを理解し、安心感を与えることで、自然と人が協力してくれます。',
    characteristics: ['共感力', '信頼構築', '傾聴力', '人望', 'チームワーク'],
    recommendation: '時には強い主張も必要。自信を持って意見を言おう！',
  },
  example: {
    type: 'example',
    title: '行動型インフルエンサー',
    emoji: '🏃',
    style: '影響力スタイル：実践型',
    description: '行動で示すあなた！言葉より先に動き、その背中で人を引っ張ります。実績と行動力が最大の説得力！',
    characteristics: ['行動力', '率先垂範', '実績', '責任感', '影響力'],
    recommendation: '言葉でも伝えると、より多くの人に想いが届くよ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { logical: 0, inspirational: 0, relational: 0, example: 0 };

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
