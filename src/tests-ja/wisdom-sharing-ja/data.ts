// 知恵共有タイプ診断
export const questions = [
  {
    id: 1,
    text: '経験から得た知恵を人に伝えたいと思う？',
    options: [
      { text: '積極的に伝えたい', type: 'mentor' },
      { text: '求められたら伝える', type: 'responsive' },
      { text: '自分の中に留めておく', type: 'private' },
      { text: '一緒に学び合いたい', type: 'collaborative' },
    ],
  },
  {
    id: 2,
    text: '後輩や年下の人への接し方は？',
    options: [
      { text: '積極的に指導する', type: 'mentor' },
      { text: '相談されたらアドバイスする', type: 'responsive' },
      { text: '対等に接する', type: 'private' },
      { text: '一緒に成長したい', type: 'collaborative' },
    ],
  },
  {
    id: 3,
    text: '自分の失敗談を話すことは？',
    options: [
      { text: '教訓として積極的に話す', type: 'mentor' },
      { text: '聞かれたら話す', type: 'responsive' },
      { text: 'あまり話さない', type: 'private' },
      { text: 'お互いの失敗を共有し合う', type: 'collaborative' },
    ],
  },
  {
    id: 4,
    text: '知識やノウハウについて？',
    options: [
      { text: '惜しみなく共有する', type: 'mentor' },
      { text: '必要な人には教える', type: 'responsive' },
      { text: '自分で獲得すべきもの', type: 'private' },
      { text: 'みんなで共有して高め合う', type: 'collaborative' },
    ],
  },
  {
    id: 5,
    text: '人生のアドバイスを求められたら？',
    options: [
      { text: '自分の経験を元に詳しく話す', type: 'mentor' },
      { text: 'ポイントを絞って伝える', type: 'responsive' },
      { text: '自分で考えるよう促す', type: 'private' },
      { text: '一緒に考える', type: 'collaborative' },
    ],
  },
  {
    id: 6,
    text: 'コミュニティや職場での役割は？',
    options: [
      { text: '教える側・リーダー', type: 'mentor' },
      { text: 'サポーター', type: 'responsive' },
      { text: '独立して動く', type: 'private' },
      { text: 'チームの一員', type: 'collaborative' },
    ],
  },
  {
    id: 7,
    text: '自分の知恵を残す方法は？',
    options: [
      { text: '本やブログで発信する', type: 'mentor' },
      { text: '身近な人に直接伝える', type: 'responsive' },
      { text: '特に残そうとは思わない', type: 'private' },
      { text: '対話を通じて共有する', type: 'collaborative' },
    ],
  },
  {
    id: 8,
    text: '若い世代への期待は？',
    options: [
      { text: '自分の知恵を受け継いでほしい', type: 'mentor' },
      { text: '困った時は頼ってほしい', type: 'responsive' },
      { text: '自分の道を見つけてほしい', type: 'private' },
      { text: '一緒に新しいものを作りたい', type: 'collaborative' },
    ],
  },
  {
    id: 9,
    text: '知恵を共有する場は？',
    options: [
      { text: '講演や研修', type: 'mentor' },
      { text: '個人的な会話', type: 'responsive' },
      { text: '特にない', type: 'private' },
      { text: 'ワークショップやディスカッション', type: 'collaborative' },
    ],
  },
  {
    id: 10,
    text: '「知恵」とは何だと思う？',
    options: [
      { text: '次世代に伝えるべきもの', type: 'mentor' },
      { text: '困った時に役立つもの', type: 'responsive' },
      { text: '個人で築き上げるもの', type: 'private' },
      { text: 'みんなで育てるもの', type: 'collaborative' },
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
  sharingAdvice: string;
}> = {
  mentor: {
    type: 'mentor',
    title: 'メンター型',
    emoji: '👨‍🏫',
    percentage: '指導力 95%',
    description: '積極的に知恵を伝え、後進を育成したいタイプ。経験を惜しみなく共有し、人の成長をサポートします。',
    characteristics: ['指導力', '責任感', '経験豊富', '情熱的', 'リーダーシップ'],
    sharingAdvice: '押し付けにならないよう、相手のペースも尊重して',
  },
  responsive: {
    type: 'responsive',
    title: 'レスポンシブ型',
    emoji: '🤲',
    percentage: '対応力 85%',
    description: '求められた時にしっかり応えるタイプ。必要な人に、必要なタイミングで知恵を提供します。',
    characteristics: ['聞き上手', '思いやり', 'タイミング', '控えめ', '信頼される'],
    sharingAdvice: '時には積極的に声をかけることも効果的',
  },
  private: {
    type: 'private',
    title: 'プライベート型',
    emoji: '🔐',
    percentage: '自立尊重度 80%',
    description: '知恵は自分で獲得するものと考えるタイプ。他者の自立を尊重し、過度な干渉を避けます。',
    characteristics: ['独立心', '自立尊重', '控えめ', 'プライバシー重視', '静か'],
    sharingAdvice: 'あなたの経験を待っている人がいるかも',
  },
  collaborative: {
    type: 'collaborative',
    title: '協働型',
    emoji: '🤝',
    percentage: '協働力 90%',
    description: '一方的に教えるより、共に学び合うことを好むタイプ。対話を通じて互いに成長することを大切にします。',
    characteristics: ['協調性', '対等', '対話重視', 'チームワーク', '共創'],
    sharingAdvice: 'その姿勢が新しい知恵を生み出します',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { mentor: 0, responsive: 0, private: 0, collaborative: 0 };

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
