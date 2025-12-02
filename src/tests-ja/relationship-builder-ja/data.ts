// 人間関係構築タイプ診断
export const questions = [
  {
    id: 1,
    text: '初対面の人との会話で心がけることは？',
    options: [
      { text: '相手の話をよく聞く', type: 'listener' },
      { text: '自分から積極的に話しかける', type: 'initiator' },
      { text: '共通点を見つける', type: 'connector' },
      { text: '自然体でいる', type: 'authentic' },
    ],
  },
  {
    id: 2,
    text: '友達を作る時のパターンは？',
    options: [
      { text: '相手が心を開いてくれるのを待つ', type: 'listener' },
      { text: '自分から誘って距離を縮める', type: 'initiator' },
      { text: '共通の趣味や活動を通じて', type: 'connector' },
      { text: '気が合えば自然と仲良くなる', type: 'authentic' },
    ],
  },
  {
    id: 3,
    text: '人間関係で大切にしていることは？',
    options: [
      { text: '相手を理解すること', type: 'listener' },
      { text: '積極的にコミュニケーションを取ること', type: 'initiator' },
      { text: '信頼関係を築くこと', type: 'connector' },
      { text: '本音で付き合えること', type: 'authentic' },
    ],
  },
  {
    id: 4,
    text: '相手が悩んでいる時は？',
    options: [
      { text: 'じっくり話を聞く', type: 'listener' },
      { text: 'アドバイスや解決策を提案する', type: 'initiator' },
      { text: '助けになれる人を紹介する', type: 'connector' },
      { text: 'そばにいて見守る', type: 'authentic' },
    ],
  },
  {
    id: 5,
    text: '人脈を広げることについて？',
    options: [
      { text: '深い関係を少数と持ちたい', type: 'listener' },
      { text: 'どんどん広げたい', type: 'initiator' },
      { text: '人と人をつなげるのが好き', type: 'connector' },
      { text: '自然に広がればいい', type: 'authentic' },
    ],
  },
  {
    id: 6,
    text: 'グループでの自分の役割は？',
    options: [
      { text: '聞き役・まとめ役', type: 'listener' },
      { text: '盛り上げ役・リーダー', type: 'initiator' },
      { text: '調整役・橋渡し役', type: 'connector' },
      { text: '自分らしくいるマイペース役', type: 'authentic' },
    ],
  },
  {
    id: 7,
    text: '連絡を取るペースは？',
    options: [
      { text: '相手から来た時に返す', type: 'listener' },
      { text: '自分から頻繁に連絡する', type: 'initiator' },
      { text: '用事がある時に連絡', type: 'connector' },
      { text: '会いたい時に会う', type: 'authentic' },
    ],
  },
  {
    id: 8,
    text: '信頼関係を築くのに必要な時間は？',
    options: [
      { text: 'じっくり時間をかける', type: 'listener' },
      { text: '積極的に関わって早めに', type: 'initiator' },
      { text: '共通体験を通じて徐々に', type: 'connector' },
      { text: '相性次第で変わる', type: 'authentic' },
    ],
  },
  {
    id: 9,
    text: '苦手な人との付き合い方は？',
    options: [
      { text: '理解しようと努める', type: 'listener' },
      { text: 'コミュニケーションで改善を試みる', type: 'initiator' },
      { text: '共通の知人を通じて関係改善', type: 'connector' },
      { text: '無理せず距離を置く', type: 'authentic' },
    ],
  },
  {
    id: 10,
    text: '理想の人間関係は？',
    options: [
      { text: '心の深いところでつながれる関係', type: 'listener' },
      { text: 'いつでも気軽に連絡できる関係', type: 'initiator' },
      { text: 'お互いに高め合える関係', type: 'connector' },
      { text: '無理なく自然体でいられる関係', type: 'authentic' },
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
  listener: {
    type: 'listener',
    title: '傾聴型ビルダー',
    emoji: '👂',
    style: '人間関係スタイル：傾聴型',
    description: '相手の話に真剣に耳を傾け、深い信頼関係を築くあなた。安心感を与える存在で、人は自然とあなたに心を開きます。',
    characteristics: ['傾聴力', '共感力', '信頼獲得', '安心感', '深い関係'],
    recommendation: '時には自分から発信することで、相手との関係がさらに深まるよ！',
  },
  initiator: {
    type: 'initiator',
    title: '積極型ビルダー',
    emoji: '🤝',
    style: '人間関係スタイル：積極型',
    description: '自ら行動して人間関係を築くあなた！誰とでもすぐに打ち解けられる社交性が魅力。ムードメーカー的存在です。',
    characteristics: ['社交性', '行動力', 'オープン', '親しみやすい', 'エネルギッシュ'],
    recommendation: '相手のペースも尊重すると、より深い関係が築けるよ！',
  },
  connector: {
    type: 'connector',
    title: '橋渡し型ビルダー',
    emoji: '🌉',
    style: '人間関係スタイル：接続型',
    description: '人と人をつなげる才能を持つあなた！共通点を見つけて関係を築き、ネットワークの中心にいることが多いです。',
    characteristics: ['調整力', 'ネットワーク', '観察力', '橋渡し役', '信頼の架け橋'],
    recommendation: '自分自身との深い関係も大切にしよう！',
  },
  authentic: {
    type: 'authentic',
    title: '自然体型ビルダー',
    emoji: '🌿',
    style: '人間関係スタイル：自然体型',
    description: '無理をせず自分らしく人と付き合うあなた。本音で接するからこそ、本当の友情が生まれます。飾らない魅力の持ち主！',
    characteristics: ['自然体', '本音', 'マイペース', '誠実', '居心地の良さ'],
    recommendation: 'たまには自分から一歩踏み出してみると、新しい出会いがあるかも！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { listener: 0, initiator: 0, connector: 0, authentic: 0 };

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
