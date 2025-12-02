// ペットオーナータイプ診断 (펫 오너 타입 진단)
export const questions = [
  {
    id: 1,
    text: 'ペットを飼うなら何を重視する？',
    options: [
      { text: '可愛さ、見た目が大事！', type: 'aesthetic' },
      { text: '一緒に遊べるか、アクティブさ', type: 'active' },
      { text: '飼いやすさ、手間の少なさ', type: 'practical' },
      { text: '癒し、穏やかな性格', type: 'healing' },
    ],
  },
  {
    id: 2,
    text: 'ペットの写真について',
    options: [
      { text: '毎日撮ってSNSにアップ', type: 'aesthetic' },
      { text: 'お出かけ時に記念撮影', type: 'active' },
      { text: 'たまに撮るくらい', type: 'practical' },
      { text: '撮るより一緒にいる時間が大事', type: 'healing' },
    ],
  },
  {
    id: 3,
    text: 'ペット用品を選ぶ基準は？',
    options: [
      { text: 'デザインがおしゃれなもの', type: 'aesthetic' },
      { text: '機能的で丈夫なもの', type: 'active' },
      { text: 'コスパの良いもの', type: 'practical' },
      { text: 'ペットが喜ぶもの', type: 'healing' },
    ],
  },
  {
    id: 4,
    text: 'ペットとの理想の過ごし方は？',
    options: [
      { text: '可愛い服を着せてお散歩', type: 'aesthetic' },
      { text: '公園で思いっきり遊ぶ', type: 'active' },
      { text: '家でまったり過ごす', type: 'practical' },
      { text: '膝の上でのんびり撫でる', type: 'healing' },
    ],
  },
  {
    id: 5,
    text: 'ペットが病気になったら？',
    options: [
      { text: 'すぐ病院へ、最高の治療を', type: 'aesthetic' },
      { text: '症状を観察してから判断', type: 'active' },
      { text: '様子を見て必要なら病院へ', type: 'practical' },
      { text: 'つきっきりで看病', type: 'healing' },
    ],
  },
  {
    id: 6,
    text: 'ペットに話しかける頻度は？',
    options: [
      { text: '常に話しかけてる、赤ちゃん言葉で', type: 'aesthetic' },
      { text: '遊ぶ時やコマンドを出す時', type: 'active' },
      { text: '必要な時だけ', type: 'practical' },
      { text: '独り言のように話しかける', type: 'healing' },
    ],
  },
  {
    id: 7,
    text: 'ペットのしつけについて',
    options: [
      { text: '可愛いからつい甘やかす', type: 'aesthetic' },
      { text: 'しっかりトレーニング', type: 'active' },
      { text: '最低限のルールは教える', type: 'practical' },
      { text: 'お互いのペースで', type: 'healing' },
    ],
  },
  {
    id: 8,
    text: 'ペットと旅行に行くなら？',
    options: [
      { text: 'ペット同伴OKのおしゃれなホテル', type: 'aesthetic' },
      { text: '自然豊かな場所でアウトドア', type: 'active' },
      { text: '近場でストレスなく', type: 'practical' },
      { text: 'ペットがリラックスできる場所', type: 'healing' },
    ],
  },
  {
    id: 9,
    text: 'ペットがいたずらしたら？',
    options: [
      { text: '「もう〜」と言いつつ許しちゃう', type: 'aesthetic' },
      { text: 'ダメなものはダメと教える', type: 'active' },
      { text: '原因を考えて対策する', type: 'practical' },
      { text: '何か訴えてるのかなと気持ちを考える', type: 'healing' },
    ],
  },
  {
    id: 10,
    text: 'あなたにとってペットとは？',
    options: [
      { text: '大切な家族、何より可愛い存在', type: 'aesthetic' },
      { text: '最高のパートナー、一緒に成長', type: 'active' },
      { text: '生活の一部、責任ある存在', type: 'practical' },
      { text: '心の支え、癒しの存在', type: 'healing' },
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
  advice: string;
}> = {
  aesthetic: {
    type: 'aesthetic',
    title: '溺愛パパ・ママタイプ',
    emoji: '💕',
    percentage: '溺愛度 100%',
    description: 'ペットが可愛くて仕方ない！SNSはペットの写真でいっぱい、グッズもおしゃれなものを厳選。甘やかしすぎ注意だけど、その愛情は本物！',
    characteristics: ['愛情たっぷり', 'SNS好き', 'おしゃれ', '甘やかし傾向', '写真好き'],
    advice: '可愛がるのは素敵！ただ、しつけも愛情の一つ。メリハリを意識して。',
  },
  active: {
    type: 'active',
    title: 'アクティブパートナータイプ',
    emoji: '🏃',
    percentage: 'アクティブ度 90%',
    description: 'ペットと一緒にアウトドアを楽しむアクティブ派！トレーニングもしっかり、一緒に成長していく関係を築きます。ペットも運動不足知らず！',
    characteristics: ['アクティブ', 'トレーニング重視', 'アウトドア好き', '責任感強い', 'リーダーシップ'],
    advice: '素晴らしいパートナーシップ！たまにはのんびり過ごす時間も作ってあげて。',
  },
  practical: {
    type: 'practical',
    title: '現実派オーナータイプ',
    emoji: '📋',
    percentage: '現実的度 85%',
    description: 'ペットを飼う責任をしっかり理解している現実派。無理なく続けられる飼い方を選び、長期的な視点でペットの幸せを考えます。',
    characteristics: ['現実的', '計画的', '責任感がある', 'バランス型', '長期的視点'],
    advice: '堅実な姿勢は大切！時には思いっきり甘やかすのもペットは喜びますよ。',
  },
  healing: {
    type: 'healing',
    title: '癒し共存タイプ',
    emoji: '🌿',
    percentage: '癒され度 95%',
    description: 'ペットに癒されながら、お互いに穏やかな時間を過ごすタイプ。ペットの気持ちを大切にし、ゆったりとした関係を築きます。心の支えになる存在。',
    characteristics: ['癒し重視', '穏やか', 'ペットファースト', '共感力高い', '静かな愛情'],
    advice: 'ペットもあなたに癒されているはず。お互いにとって最高の存在ですね。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { aesthetic: 0, active: 0, practical: 0, healing: 0 };

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
