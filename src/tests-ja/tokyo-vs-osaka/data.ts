// 東京vs大阪 性格診断 (도쿄 vs 오사카 성격 테스트)
export const questions = [
  {
    id: 1,
    text: 'エスカレーターでは？',
    options: [
      { text: '左に立って右を空ける', type: 'tokyo' },
      { text: '右に立って左を空ける', type: 'osaka' },
      { text: '状況を見てから決める', type: 'balance' },
      { text: '歩いて上がる派', type: 'kyushu' },
    ],
  },
  {
    id: 2,
    text: '初対面の人との会話、あなたは？',
    options: [
      { text: '丁寧に敬語で距離を保つ', type: 'tokyo' },
      { text: 'フランクに冗談交じりで', type: 'osaka' },
      { text: '相手のペースに合わせる', type: 'balance' },
      { text: 'のんびり自分のペースで', type: 'kyushu' },
    ],
  },
  {
    id: 3,
    text: '友達が転んだ時、最初に出る言葉は？',
    options: [
      { text: '「大丈夫？」と心配', type: 'tokyo' },
      { text: '「なにしてんねん！」とツッコミ', type: 'osaka' },
      { text: '「痛そう…」と同情', type: 'balance' },
      { text: '黙って手を差し伸べる', type: 'kyushu' },
    ],
  },
  {
    id: 4,
    text: '美味しいものを食べた時の反応は？',
    options: [
      { text: '「美味しい」と静かに', type: 'tokyo' },
      { text: '「めっちゃうまい！」と大声', type: 'osaka' },
      { text: '「なかなかいいね」と評論家風', type: 'balance' },
      { text: '黙々と食べる', type: 'kyushu' },
    ],
  },
  {
    id: 5,
    text: '値段交渉について、あなたは？',
    options: [
      { text: '定価で買うのが普通', type: 'tokyo' },
      { text: '「もうちょい安くして〜」と必ず言う', type: 'osaka' },
      { text: 'セールを待つ', type: 'balance' },
      { text: 'あまり気にしない', type: 'kyushu' },
    ],
  },
  {
    id: 6,
    text: 'お笑いに対する考え方は？',
    options: [
      { text: 'スマートな笑いが好き', type: 'tokyo' },
      { text: 'ボケたらツッコミは義務', type: 'osaka' },
      { text: 'その場の空気次第', type: 'balance' },
      { text: 'ほっこり笑える話が好き', type: 'kyushu' },
    ],
  },
  {
    id: 7,
    text: '待ち合わせの時間に対して？',
    options: [
      { text: '5分前行動は基本', type: 'tokyo' },
      { text: '「今出た」は家にいる合図', type: 'osaka' },
      { text: 'ぴったりに到着', type: 'balance' },
      { text: '時間はゆるく考える', type: 'kyushu' },
    ],
  },
  {
    id: 8,
    text: '人との距離感は？',
    options: [
      { text: '適度な距離を保つ', type: 'tokyo' },
      { text: 'グイグイ行く', type: 'osaka' },
      { text: '相手による', type: 'balance' },
      { text: '自然体でマイペース', type: 'kyushu' },
    ],
  },
  {
    id: 9,
    text: '好きな食べ物の味付けは？',
    options: [
      { text: '繊細で上品な味', type: 'tokyo' },
      { text: '濃くてパンチのある味', type: 'osaka' },
      { text: 'バランスの良い味', type: 'balance' },
      { text: '素材の味を生かした味', type: 'kyushu' },
    ],
  },
  {
    id: 10,
    text: '電車で席が空いたら？',
    options: [
      { text: '周りを確認してから座る', type: 'tokyo' },
      { text: 'すかさず座る', type: 'osaka' },
      { text: '譲り合いを見てから', type: 'balance' },
      { text: '立っていてもいい', type: 'kyushu' },
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
  compatibility: string;
}> = {
  tokyo: {
    type: 'tokyo',
    title: '東京気質タイプ',
    emoji: '🗼',
    percentage: '東京度 90%',
    description: 'クールで洗練された都会派。礼儀正しく、空気を読んで行動します。初対面では距離を保ちますが、打ち解けると意外と熱い一面も。',
    characteristics: ['礼儀正しい', '洗練された', 'スマート', '控えめ', '都会的'],
    compatibility: '大阪タイプと組むと、意外と良いバランスに！',
  },
  osaka: {
    type: 'osaka',
    title: '大阪気質タイプ',
    emoji: '🏯',
    percentage: '大阪度 90%',
    description: '明るくて親しみやすい関西人気質。ノリとツッコミを大事にし、初対面でもすぐ打ち解けます。サービス精神旺盛でお得が大好き！',
    characteristics: ['フレンドリー', 'ノリがいい', 'お得好き', 'おしゃべり', '人情味'],
    compatibility: '東京タイプと組むと、ツッコミ役になれます！',
  },
  balance: {
    type: 'balance',
    title: 'バランス型',
    emoji: '⚖️',
    percentage: 'ニュートラル度 80%',
    description: '東京と大阪の良いとこ取り。状況に応じて使い分けができる器用なタイプ。どこでも適応できるカメレオン的存在です。',
    characteristics: ['柔軟', '適応力高い', 'バランス感覚', '器用', 'オールマイティ'],
    compatibility: '誰とでも上手くやれる万能タイプ！',
  },
  kyushu: {
    type: 'kyushu',
    title: 'マイペース九州気質',
    emoji: '🌋',
    percentage: 'のんびり度 85%',
    description: 'おおらかで温かみのある人柄。自分のペースを大事にし、細かいことは気にしません。情に厚く、一度友達になったら一生の付き合い。',
    characteristics: ['おおらか', 'マイペース', '情に厚い', '温かい', '自然体'],
    compatibility: 'どのタイプとも穏やかに付き合えます！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { tokyo: 0, osaka: 0, balance: 0, kyushu: 0 };

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
