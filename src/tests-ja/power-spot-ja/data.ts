// パワースポット適性診断
export const questions = [
  {
    id: 1,
    text: 'パワースポットに行く目的は？',
    options: [
      { text: '心身のリフレッシュ', type: 'nature' },
      { text: '願い事を叶えたい', type: 'spiritual' },
      { text: '歴史や文化を学ぶ', type: 'cultural' },
      { text: 'SNS映えスポット巡り', type: 'trendy' },
    ],
  },
  {
    id: 2,
    text: '理想のパワースポットの雰囲気は？',
    options: [
      { text: '緑豊かな森や山', type: 'nature' },
      { text: '神聖な神社や寺', type: 'spiritual' },
      { text: '歴史ある古い建造物', type: 'cultural' },
      { text: '話題の人気スポット', type: 'trendy' },
    ],
  },
  {
    id: 3,
    text: 'パワースポットで何を感じたい？',
    options: [
      { text: '自然のエネルギー', type: 'nature' },
      { text: '神秘的なパワー', type: 'spiritual' },
      { text: '歴史の重み', type: 'cultural' },
      { text: 'ワクワク感', type: 'trendy' },
    ],
  },
  {
    id: 4,
    text: 'パワースポット訪問時の服装は？',
    options: [
      { text: '動きやすいアウトドア系', type: 'nature' },
      { text: '清潔感のある服', type: 'spiritual' },
      { text: '落ち着いた服装', type: 'cultural' },
      { text: 'おしゃれな服', type: 'trendy' },
    ],
  },
  {
    id: 5,
    text: 'パワースポットでしたいことは？',
    options: [
      { text: '深呼吸してリラックス', type: 'nature' },
      { text: 'お祈りや瞑想', type: 'spiritual' },
      { text: 'ガイドの説明を聞く', type: 'cultural' },
      { text: '写真をたくさん撮る', type: 'trendy' },
    ],
  },
  {
    id: 6,
    text: '行きたいパワースポットのタイプは？',
    options: [
      { text: '滝や海など自然', type: 'nature' },
      { text: '霊験あらたかな聖地', type: 'spiritual' },
      { text: '世界遺産', type: 'cultural' },
      { text: 'インフルエンサーおすすめ', type: 'trendy' },
    ],
  },
  {
    id: 7,
    text: 'パワースポット情報の入手方法は？',
    options: [
      { text: '自然好きのブログ', type: 'nature' },
      { text: 'スピリチュアル系メディア', type: 'spiritual' },
      { text: '旅行ガイドブック', type: 'cultural' },
      { text: 'SNSやインスタ', type: 'trendy' },
    ],
  },
  {
    id: 8,
    text: 'パワースポット訪問後は？',
    options: [
      { text: '心が軽くなった気がする', type: 'nature' },
      { text: 'パワーをもらえた', type: 'spiritual' },
      { text: '勉強になった', type: 'cultural' },
      { text: '良い写真が撮れた', type: 'trendy' },
    ],
  },
  {
    id: 9,
    text: '一緒に行くなら誰と？',
    options: [
      { text: '一人でじっくり', type: 'nature' },
      { text: '同じ価値観の友人', type: 'spiritual' },
      { text: '歴史好きの仲間', type: 'cultural' },
      { text: 'おしゃれな友達', type: 'trendy' },
    ],
  },
  {
    id: 10,
    text: 'パワースポットのお土産は？',
    options: [
      { text: '天然素材のもの', type: 'nature' },
      { text: 'お守りやパワーストーン', type: 'spiritual' },
      { text: '伝統工芸品', type: 'cultural' },
      { text: '限定グッズ', type: 'trendy' },
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
  recommendedSpot: string;
}> = {
  nature: {
    type: 'nature',
    title: '自然派パワースポッター',
    emoji: '🌲',
    percentage: '自然愛 95%',
    description: '森や山、海など自然のエネルギーを感じることで癒されるタイプ。大地のパワーを全身で受け止め、心身をリセットします。',
    characteristics: ['自然愛', '癒し重視', 'アウトドア', 'リフレッシュ', 'エコ志向'],
    recommendedSpot: '屋久島、上高地、熊野古道がおすすめ！',
  },
  spiritual: {
    type: 'spiritual',
    title: 'スピリチュアル派パワースポッター',
    emoji: '⛩️',
    percentage: 'スピ感度 93%',
    description: '神社仏閣など神聖な場所でパワーを感じるタイプ。目に見えないエネルギーに敏感で、お祈りや瞑想を大切にしています。',
    characteristics: ['霊感', '祈り', '瞑想', '神秘体験', 'お守り好き'],
    recommendedSpot: '伊勢神宮、出雲大社、高野山がおすすめ！',
  },
  cultural: {
    type: 'cultural',
    title: '文化派パワースポッター',
    emoji: '🏯',
    percentage: '知識欲 91%',
    description: '歴史や文化的背景を学びながらパワースポットを巡るタイプ。建築や伝統に興味があり、知識を深めることで満足感を得ます。',
    characteristics: ['歴史好き', '知的好奇心', '文化重視', '学び', '教養'],
    recommendedSpot: '京都の寺社仏閣、奈良の古寺がおすすめ！',
  },
  trendy: {
    type: 'trendy',
    title: 'トレンド派パワースポッター',
    emoji: '📸',
    percentage: 'トレンド感度 90%',
    description: 'SNSで話題のスポットを巡るのが好きなタイプ。写真映えを意識しつつ、新しい場所を開拓するのが楽しみ。',
    characteristics: ['トレンド敏感', 'SNS好き', 'フォトジェニック', '情報通', 'おしゃれ'],
    recommendedSpot: '話題の縁結び神社、インスタ映えスポットがおすすめ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { nature: 0, spiritual: 0, cultural: 0, trendy: 0 };

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
