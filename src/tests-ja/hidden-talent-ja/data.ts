// 隠れた才能診断テスト (숨은 재능 테스트)
export const questions = [
  {
    id: 1,
    text: '休日の過ごし方は？',
    options: [
      { text: '新しいことに挑戦してみる', type: 'creative' },
      { text: '友達と出かけて楽しむ', type: 'social' },
      { text: '本を読んだり勉強したりする', type: 'analytical' },
      { text: '一人でゆっくり趣味を楽しむ', type: 'artistic' },
    ],
  },
  {
    id: 2,
    text: '問題が起きた時の対処法は？',
    options: [
      { text: '斬新なアイデアで解決を試みる', type: 'creative' },
      { text: '周りの人に相談する', type: 'social' },
      { text: 'データや事実を分析して解決策を考える', type: 'analytical' },
      { text: '直感を信じて行動する', type: 'artistic' },
    ],
  },
  {
    id: 3,
    text: '仕事で一番大切にしていることは？',
    options: [
      { text: '新しい発想やイノベーション', type: 'creative' },
      { text: 'チームワークと人間関係', type: 'social' },
      { text: '効率性と正確さ', type: 'analytical' },
      { text: '表現力と独自性', type: 'artistic' },
    ],
  },
  {
    id: 4,
    text: '子供の頃、どんな遊びが好きだった？',
    options: [
      { text: '工作やブロック遊び', type: 'creative' },
      { text: 'かくれんぼや鬼ごっこなど、みんなで遊ぶゲーム', type: 'social' },
      { text: 'パズルや知育玩具', type: 'analytical' },
      { text: 'お絵かきや歌、ダンス', type: 'artistic' },
    ],
  },
  {
    id: 5,
    text: 'どんな映画やドラマが好き？',
    options: [
      { text: 'SFやファンタジー', type: 'creative' },
      { text: 'ラブコメやヒューマンドラマ', type: 'social' },
      { text: 'サスペンスやミステリー', type: 'analytical' },
      { text: '芸術的な映像美の作品', type: 'artistic' },
    ],
  },
  {
    id: 6,
    text: '友達からどんな相談を受けることが多い？',
    options: [
      { text: 'アイデアや企画について', type: 'creative' },
      { text: '人間関係の悩み', type: 'social' },
      { text: '仕事や勉強の進め方', type: 'analytical' },
      { text: 'センスやデザインについて', type: 'artistic' },
    ],
  },
  {
    id: 7,
    text: 'ストレス解消法は？',
    options: [
      { text: '新しい趣味や挑戦を始める', type: 'creative' },
      { text: '友達と話したり、飲みに行ったりする', type: 'social' },
      { text: '計画を立てて整理整頓する', type: 'analytical' },
      { text: '音楽を聴いたり、創作活動をする', type: 'artistic' },
    ],
  },
  {
    id: 8,
    text: '自分の強みだと思うのは？',
    options: [
      { text: '発想力と柔軟性', type: 'creative' },
      { text: 'コミュニケーション能力', type: 'social' },
      { text: '論理的思考力', type: 'analytical' },
      { text: '感性と表現力', type: 'artistic' },
    ],
  },
  {
    id: 9,
    text: 'プレゼンテーションをする時のスタイルは？',
    options: [
      { text: '斬新な切り口で驚かせる', type: 'creative' },
      { text: '聴衆との対話を大切にする', type: 'social' },
      { text: 'データや根拠を示しながら論理的に説明する', type: 'analytical' },
      { text: 'ビジュアルやストーリー性を重視する', type: 'artistic' },
    ],
  },
  {
    id: 10,
    text: '将来の夢や目標を考える時、何を大切にする？',
    options: [
      { text: '誰も思いつかないような新しいことをしたい', type: 'creative' },
      { text: '人の役に立ちたい、人と繋がっていたい', type: 'social' },
      { text: '専門性を極めて、プロフェッショナルになりたい', type: 'analytical' },
      { text: '自分らしさを表現したい', type: 'artistic' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  talentLevel: string;
  description: string;
  characteristics: string[];
  recommendedFields: string[];
  developmentTips: string;
}> = {
  creative: {
    type: 'creative',
    title: 'イノベーター才能',
    emoji: '💡✨',
    talentLevel: '創造性：★★★★★',
    description: 'あなたには革新的なアイデアを生み出す才能が眠っています。既存の枠にとらわれず、新しい発想ができるイノベータータイプです。',
    characteristics: ['斬新なアイデアを出せる', '柔軟な思考力', '好奇心旺盛', '変化を恐れない'],
    recommendedFields: ['起業家', '企画職', '発明家', 'クリエイティブディレクター'],
    developmentTips: 'アイデアを形にする実行力を磨くことで、さらに才能が開花します。',
  },
  social: {
    type: 'social',
    title: 'コミュニケーター才能',
    emoji: '🤝💬',
    talentLevel: '対人スキル：★★★★★',
    description: 'あなたには人と繋がり、信頼関係を築く才能があります。人の気持ちを理解し、チームをまとめるリーダー的資質を持っています。',
    characteristics: ['共感力が高い', '聞き上手', '人脈が広い', 'チームワーク重視'],
    recommendedFields: ['営業職', 'カウンセラー', '教育者', 'マネージャー'],
    developmentTips: '専門知識を深めることで、より影響力のある存在になれます。',
  },
  analytical: {
    type: 'analytical',
    title: 'アナリスト才能',
    emoji: '🔍📊',
    talentLevel: '分析力：★★★★★',
    description: 'あなたには物事を論理的に分析し、本質を見抜く才能があります。複雑な問題も冷静に解決できる頭脳派タイプです。',
    characteristics: ['論理的思考', '細部への注意力', '問題解決能力', '計画性がある'],
    recommendedFields: ['研究者', 'データサイエンティスト', 'コンサルタント', 'エンジニア'],
    developmentTips: '直感も大切にすることで、よりバランスの取れた判断ができるようになります。',
  },
  artistic: {
    type: 'artistic',
    title: 'アーティスト才能',
    emoji: '🎨🎭',
    talentLevel: '芸術性：★★★★★',
    description: 'あなたには豊かな感性と表現力が眠っています。美しいものを生み出し、人の心を動かす芸術家タイプです。',
    characteristics: ['豊かな感性', '独自の世界観', '表現力豊か', '美的センスが高い'],
    recommendedFields: ['デザイナー', 'アーティスト', '音楽家', 'ライター'],
    developmentTips: '技術を磨き続けることで、あなたの感性がさらに輝きます。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { creative: 0, social: 0, analytical: 0, artistic: 0 };

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
