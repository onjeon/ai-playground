// SNS活用タイプ診断 (SNS 활용 유형 테스트)
export const questions = [
  {
    id: 1,
    text: 'SNSで投稿する頻度は？',
    options: [
      { text: 'ほぼ毎日投稿', type: 'influencer' },
      { text: '週に数回投稿', type: 'active' },
      { text: '月に数回程度', type: 'viewer' },
      { text: 'ほとんど投稿しない', type: 'lurker' },
    ],
  },
  {
    id: 2,
    text: 'SNSを開く主な目的は？',
    options: [
      { text: '自分の情報を発信する', type: 'influencer' },
      { text: '友達と交流する', type: 'active' },
      { text: '情報収集をする', type: 'viewer' },
      { text: '暇つぶしに見る', type: 'lurker' },
    ],
  },
  {
    id: 3,
    text: 'フォロワー数は気になる？',
    options: [
      { text: 'かなり気になる', type: 'influencer' },
      { text: 'まあまあ気になる', type: 'active' },
      { text: 'あまり気にならない', type: 'viewer' },
      { text: '全く気にならない', type: 'lurker' },
    ],
  },
  {
    id: 4,
    text: '「いいね」やコメントがつくと？',
    options: [
      { text: 'とても嬉しい・モチベーション', type: 'influencer' },
      { text: '嬉しい', type: 'active' },
      { text: 'そこそこ嬉しい', type: 'viewer' },
      { text: '特に何も感じない', type: 'lurker' },
    ],
  },
  {
    id: 5,
    text: '投稿する内容は？',
    options: [
      { text: '映える写真・役立つ情報', type: 'influencer' },
      { text: '日常の出来事・近況報告', type: 'active' },
      { text: 'たまに気分で投稿', type: 'viewer' },
      { text: 'リポスト・シェアが中心', type: 'lurker' },
    ],
  },
  {
    id: 6,
    text: 'SNSでの人間関係は？',
    options: [
      { text: 'フォロワーとの関係を大切にする', type: 'influencer' },
      { text: '友達との交流がメイン', type: 'active' },
      { text: '見る専で交流は少ない', type: 'viewer' },
      { text: '現実の人間関係だけで十分', type: 'lurker' },
    ],
  },
  {
    id: 7,
    text: 'SNSを見ていて感じることは？',
    options: [
      { text: '発信のアイデアを探している', type: 'influencer' },
      { text: '友達の近況が気になる', type: 'active' },
      { text: '情報が得られて便利', type: 'viewer' },
      { text: '時間を無駄にしている気も…', type: 'lurker' },
    ],
  },
  {
    id: 8,
    text: 'プライバシーの設定は？',
    options: [
      { text: '公開アカウントで広く発信', type: 'influencer' },
      { text: '友達向けに公開', type: 'active' },
      { text: 'プライバシー重視', type: 'viewer' },
      { text: '非公開・匿名', type: 'lurker' },
    ],
  },
  {
    id: 9,
    text: '複数のSNSを使っている？',
    options: [
      { text: '5つ以上を使い分け', type: 'influencer' },
      { text: '3〜4つ使っている', type: 'active' },
      { text: '1〜2つ程度', type: 'viewer' },
      { text: 'ほとんど使っていない', type: 'lurker' },
    ],
  },
  {
    id: 10,
    text: 'SNSがなくなったら？',
    options: [
      { text: '困る・生活の一部', type: 'influencer' },
      { text: '寂しいけど何とかなる', type: 'active' },
      { text: 'あまり困らない', type: 'viewer' },
      { text: '特に問題ない', type: 'lurker' },
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
  snsAdvice: string;
}> = {
  influencer: {
    type: 'influencer',
    title: 'インフルエンサー気質',
    emoji: '📱',
    percentage: 'SNS活用度 95%',
    description: 'SNSを自己表現・情報発信の場として最大限活用！フォロワーを意識した投稿で、影響力を高めることに喜びを感じます。',
    characteristics: ['発信力', 'トレンド感度', '自己表現', '影響力重視', 'ブランディング'],
    snsAdvice: 'オフラインの時間も大切に。リアルな体験が発信のネタに',
  },
  active: {
    type: 'active',
    title: 'アクティブユーザー',
    emoji: '💬',
    percentage: 'SNS活用度 75%',
    description: 'SNSを友達との交流ツールとして楽しんでいます！近況報告やコミュニケーションがメインで、健全な使い方ができています。',
    characteristics: ['交流重視', '友達思い', 'コミュニケーション', 'バランス型', '楽しむ派'],
    snsAdvice: 'その調子で楽しいSNSライフを続けてください',
  },
  viewer: {
    type: 'viewer',
    title: '情報収集派',
    emoji: '👀',
    percentage: 'SNS活用度 50%',
    description: 'SNSは情報収集ツールとして活用。自分から発信することは少なく、興味のある情報をチェックするスタイルです。',
    characteristics: ['観察型', '情報通', '控えめ', 'インプット派', 'プライバシー重視'],
    snsAdvice: '時には自分の意見も発信してみると新しい繋がりが生まれるかも',
  },
  lurker: {
    type: 'lurker',
    title: 'SNS離れ型',
    emoji: '🌿',
    percentage: 'SNS依存度 20%',
    description: 'SNSとは適度な距離を保っています。リアルな人間関係を重視し、デジタルに縛られない自由な生活を送っています。',
    characteristics: ['リアル重視', '自由', 'マイペース', 'プライバシー', 'オフライン派'],
    snsAdvice: 'SNSの便利な機能だけ活用するのも一つの手です',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { influencer: 0, active: 0, viewer: 0, lurker: 0 };

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
