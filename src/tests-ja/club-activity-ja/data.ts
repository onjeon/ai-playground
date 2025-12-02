// 部活タイプ診断
export const questions = [
  {
    id: 1,
    text: '部活を選ぶ基準は？',
    options: [
      { text: '強くなりたい、勝ちたい', type: 'athlete' },
      { text: '表現したい、創りたい', type: 'artist' },
      { text: '仲間と楽しみたい', type: 'socializer' },
      { text: '新しいことを学びたい', type: 'explorer' },
    ],
  },
  {
    id: 2,
    text: '練習への取り組み方は？',
    options: [
      { text: 'とことん追い込む', type: 'athlete' },
      { text: '質にこだわる', type: 'artist' },
      { text: 'みんなで楽しく', type: 'socializer' },
      { text: 'マイペースに', type: 'explorer' },
    ],
  },
  {
    id: 3,
    text: '部活での役割は？',
    options: [
      { text: 'キャプテン・エース', type: 'athlete' },
      { text: 'ソリスト・主役', type: 'artist' },
      { text: 'ムードメーカー', type: 'socializer' },
      { text: 'マネージャー・サポート', type: 'explorer' },
    ],
  },
  {
    id: 4,
    text: '大会やコンクール前の心境は？',
    options: [
      { text: '絶対勝つ！燃えてくる', type: 'athlete' },
      { text: '最高の表現をしたい', type: 'artist' },
      { text: 'みんなと一緒なら大丈夫', type: 'socializer' },
      { text: '楽しめればそれでいい', type: 'explorer' },
    ],
  },
  {
    id: 5,
    text: '後輩への接し方は？',
    options: [
      { text: '厳しく指導', type: 'athlete' },
      { text: '技術を丁寧に教える', type: 'artist' },
      { text: '仲良く楽しく', type: 'socializer' },
      { text: '自主性を尊重', type: 'explorer' },
    ],
  },
  {
    id: 6,
    text: '部活の思い出で一番は？',
    options: [
      { text: '優勝・入賞した瞬間', type: 'athlete' },
      { text: '完璧にできた瞬間', type: 'artist' },
      { text: '仲間との絆', type: 'socializer' },
      { text: '成長を感じた時', type: 'explorer' },
    ],
  },
  {
    id: 7,
    text: '引退する時の気持ちは？',
    options: [
      { text: 'やり切った達成感', type: 'athlete' },
      { text: '作品を残せた満足感', type: 'artist' },
      { text: '仲間との別れが寂しい', type: 'socializer' },
      { text: '新しいステージへの期待', type: 'explorer' },
    ],
  },
  {
    id: 8,
    text: '部活で得たものは？',
    options: [
      { text: '体力と精神力', type: 'athlete' },
      { text: '技術と感性', type: 'artist' },
      { text: 'かけがえのない友情', type: 'socializer' },
      { text: '幅広い経験', type: 'explorer' },
    ],
  },
  {
    id: 9,
    text: '理想の部活動は？',
    options: [
      { text: '強豪校で全国大会出場', type: 'athlete' },
      { text: '設備が整った環境', type: 'artist' },
      { text: '仲が良くて楽しい', type: 'socializer' },
      { text: '自由で個性的', type: 'explorer' },
    ],
  },
  {
    id: 10,
    text: '今、部活を選ぶなら？',
    options: [
      { text: '運動部で汗を流したい', type: 'athlete' },
      { text: '文化部で創作活動', type: 'artist' },
      { text: '人が多い人気の部活', type: 'socializer' },
      { text: '珍しい部活に挑戦', type: 'explorer' },
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
  recommendedClub: string;
}> = {
  athlete: {
    type: 'athlete',
    title: '体育会系アスリート',
    emoji: '🏆',
    percentage: '競技志向 95%',
    description: '勝利を目指してひたむきに努力するアスリートタイプ！練習に全力を注ぎ、結果を出すことに喜びを感じます。',
    characteristics: ['負けず嫌い', '根性', '体力', 'チームワーク', '目標志向'],
    recommendedClub: 'サッカー、バスケ、野球などの運動部',
  },
  artist: {
    type: 'artist',
    title: '文化系アーティスト',
    emoji: '🎭',
    percentage: '芸術性 92%',
    description: '表現することに情熱を注ぐアーティストタイプ！技術を磨き、自分だけの作品を生み出すことが喜びです。',
    characteristics: ['創造力', '感性', 'こだわり', '集中力', '表現力'],
    recommendedClub: '吹奏楽、美術、演劇などの文化部',
  },
  socializer: {
    type: 'socializer',
    title: '仲間重視タイプ',
    emoji: '🤝',
    percentage: '社交性 88%',
    description: '仲間との絆を大切にするタイプ！勝敗よりもみんなで楽しむことが一番の目的です。',
    characteristics: ['協調性', 'フレンドリー', 'ムードメーカー', '絆重視', '楽しさ優先'],
    recommendedClub: 'ダンス、軽音楽、ボランティアなど',
  },
  explorer: {
    type: 'explorer',
    title: '探求者タイプ',
    emoji: '🔬',
    percentage: '好奇心 85%',
    description: '新しいことを学び、探求することが好きなタイプ！自分のペースで成長していくことを楽しみます。',
    characteristics: ['知的好奇心', 'マイペース', '独立心', '探求心', '柔軟性'],
    recommendedClub: '科学部、パソコン部、写真部など',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { athlete: 0, artist: 0, socializer: 0, explorer: 0 };

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
