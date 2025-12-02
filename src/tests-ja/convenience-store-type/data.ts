// コンビニ利用タイプ診断 (편의점 이용 유형)
export const questions = [
  {
    id: 1,
    text: 'コンビニに入ったらまず何をする？',
    options: [
      { text: '新商品コーナーをチェック', type: 'explorer' },
      { text: '買うものを決めてまっすぐレジへ', type: 'efficient' },
      { text: 'とりあえず店内を一周する', type: 'wanderer' },
      { text: 'お気に入りの商品があるか確認', type: 'loyalist' },
    ],
  },
  {
    id: 2,
    text: 'コンビニでの滞在時間は？',
    options: [
      { text: '新商品を見るので10分以上', type: 'explorer' },
      { text: '5分以内でサッと済ませる', type: 'efficient' },
      { text: '気分によってバラバラ', type: 'wanderer' },
      { text: 'いつも同じくらいの時間', type: 'loyalist' },
    ],
  },
  {
    id: 3,
    text: 'おにぎりを選ぶとき、どうする？',
    options: [
      { text: '新作や限定品を試す', type: 'explorer' },
      { text: 'カロリーや値段を比較して効率的に', type: 'efficient' },
      { text: 'その日の気分で決める', type: 'wanderer' },
      { text: 'いつも同じ具を選ぶ', type: 'loyalist' },
    ],
  },
  {
    id: 4,
    text: 'コンビニスイーツに対する態度は？',
    options: [
      { text: '新作が出たら必ずチェック', type: 'explorer' },
      { text: '本当に必要な時だけ買う', type: 'efficient' },
      { text: '目に入ったら衝動買い', type: 'wanderer' },
      { text: 'お気に入りのスイーツがある', type: 'loyalist' },
    ],
  },
  {
    id: 5,
    text: 'コンビニコーヒーは？',
    options: [
      { text: '季節限定フレーバーを試す', type: 'explorer' },
      { text: 'コスパがいいので毎日利用', type: 'efficient' },
      { text: '気が向いた時だけ', type: 'wanderer' },
      { text: 'いつも同じサイズ、同じ種類', type: 'loyalist' },
    ],
  },
  {
    id: 6,
    text: 'コンビニATMやコピー機は？',
    options: [
      { text: '新サービスがあれば試してみる', type: 'explorer' },
      { text: 'よく使う。便利だから', type: 'efficient' },
      { text: '存在は知ってるけどあまり使わない', type: 'wanderer' },
      { text: 'いつも決まった用途で使う', type: 'loyalist' },
    ],
  },
  {
    id: 7,
    text: '深夜のコンビニで買うものは？',
    options: [
      { text: '深夜限定や夜食向け商品', type: 'explorer' },
      { text: '翌日の朝食を効率的に調達', type: 'efficient' },
      { text: '今食べたいものを直感で', type: 'wanderer' },
      { text: 'いつもの定番商品', type: 'loyalist' },
    ],
  },
  {
    id: 8,
    text: 'コンビニのポイントカードは？',
    options: [
      { text: 'いろんなコンビニのを持ってる', type: 'explorer' },
      { text: '還元率を計算して使い分け', type: 'efficient' },
      { text: '持ってるけど出し忘れがち', type: 'wanderer' },
      { text: 'メインのコンビニのだけ', type: 'loyalist' },
    ],
  },
  {
    id: 9,
    text: 'レジで並んでいる時は？',
    options: [
      { text: 'レジ横の新商品をチェック', type: 'explorer' },
      { text: 'スマホで時間を有効活用', type: 'efficient' },
      { text: 'ぼんやり店内を眺める', type: 'wanderer' },
      { text: '特に何もせず待つ', type: 'loyalist' },
    ],
  },
  {
    id: 10,
    text: 'あなたにとってコンビニとは？',
    options: [
      { text: '新しい発見がある宝箱', type: 'explorer' },
      { text: '生活を効率化してくれる味方', type: 'efficient' },
      { text: '気軽に立ち寄れる癒しスポット', type: 'wanderer' },
      { text: '安心できるいつもの場所', type: 'loyalist' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  shoppingStyle: string[];
  recommendItem: string;
}> = {
  explorer: {
    type: 'explorer',
    title: '新商品ハンターエクスプローラータイプ',
    emoji: '🔍',
    description: 'あなたはコンビニの新商品を誰よりも早くチェックする探検家タイプ！「期間限定」「新発売」の文字に弱く、常に新しい発見を求めています。SNSでの新商品情報も欠かさずチェック。',
    traits: ['好奇心旺盛', '流行に敏感', 'チャレンジ精神', '情報通', '飽きっぽい一面も'],
    shoppingStyle: ['新商品コーナーから見る', 'SNSで話題の商品を探す', '限定品は即購入', '各コンビニの新商品を比較'],
    recommendItem: '今週の新作スイーツ',
  },
  efficient: {
    type: 'efficient',
    title: '効率重視タイムイズマネータイプ',
    emoji: '⚡',
    description: 'あなたはコンビニを効率的に使いこなすスマートタイプ！無駄な買い物はせず、時間もお金も効率的に。ポイント還元率もしっかり把握している賢い消費者です。',
    traits: ['効率的', '計画的', '無駄がない', 'コスパ重視', '時間を大切にする'],
    shoppingStyle: ['買うものリストを作る', '最短ルートで買い物', 'セルフレジを活用', 'ポイント還元日を狙う'],
    recommendItem: 'PB商品（プライベートブランド）',
  },
  wanderer: {
    type: 'wanderer',
    title: 'ふらっと立ち寄り気まぐれタイプ',
    emoji: '🌙',
    description: 'あなたは気分でコンビニを楽しむ自由人タイプ！特に目的がなくてもふらっと立ち寄り、その日の気分で買い物を楽しみます。衝動買いも楽しみの一つ。',
    traits: ['自由', '直感的', '気まぐれ', '楽天的', '衝動買いしがち'],
    shoppingStyle: ['目的なく立ち寄る', '気分で商品を選ぶ', 'レジ横商品に弱い', '深夜のコンビニが好き'],
    recommendItem: 'ホットスナック',
  },
  loyalist: {
    type: 'loyalist',
    title: '定番一筋ロイヤルカスタマータイプ',
    emoji: '👑',
    description: 'あなたはお気に入りを大切にする安定志向タイプ！いつも同じコンビニ、同じ商品、同じルーティン。慣れ親しんだものへの信頼が厚く、変化より安定を好みます。',
    traits: ['安定志向', '信頼を大切に', 'ルーティン重視', '浮気しない', '変化が苦手'],
    shoppingStyle: ['いつも同じコンビニ', '定番商品を選ぶ', '同じ時間帯に来店', '店員さんと顔なじみ'],
    recommendItem: 'ロングセラーの定番おにぎり',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { explorer: 0, efficient: 0, wanderer: 0, loyalist: 0 };

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
