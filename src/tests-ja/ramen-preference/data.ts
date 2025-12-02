// ラーメン性格診断 (라멘 취향 분석 테스트)
export const questions = [
  {
    id: 1,
    text: 'ラーメンのスープ、好みは？',
    options: [
      { text: '濃厚こってり豚骨', type: 'passionate' },
      { text: 'あっさり醤油', type: 'classic' },
      { text: '複雑な味わいの味噌', type: 'creative' },
      { text: '上品な塩', type: 'refined' },
    ],
  },
  {
    id: 2,
    text: '麺の硬さは？',
    options: [
      { text: 'バリカタ・ハリガネ', type: 'passionate' },
      { text: '普通', type: 'classic' },
      { text: 'お店のおすすめで', type: 'creative' },
      { text: 'やわらかめ', type: 'refined' },
    ],
  },
  {
    id: 3,
    text: 'ラーメン屋を選ぶ基準は？',
    options: [
      { text: '行列のできる人気店', type: 'passionate' },
      { text: '昔からある地元の店', type: 'classic' },
      { text: '新しくオープンした話題の店', type: 'creative' },
      { text: '清潔感があって静かな店', type: 'refined' },
    ],
  },
  {
    id: 4,
    text: 'トッピングで外せないのは？',
    options: [
      { text: 'チャーシュー増し', type: 'passionate' },
      { text: 'メンマとネギ', type: 'classic' },
      { text: '季節限定トッピング', type: 'creative' },
      { text: '味玉', type: 'refined' },
    ],
  },
  {
    id: 5,
    text: 'ラーメンを食べる時は？',
    options: [
      { text: '熱いうちに一気に', type: 'passionate' },
      { text: '落ち着いて味わう', type: 'classic' },
      { text: 'SNS用に写真を撮ってから', type: 'creative' },
      { text: '丁寧に少しずつ', type: 'refined' },
    ],
  },
  {
    id: 6,
    text: 'スープは？',
    options: [
      { text: '最後まで飲み干す', type: 'passionate' },
      { text: '半分くらい飲む', type: 'classic' },
      { text: '気分による', type: 'creative' },
      { text: '味を確認する程度', type: 'refined' },
    ],
  },
  {
    id: 7,
    text: 'ラーメンと一緒に頼むなら？',
    options: [
      { text: '餃子とビール', type: 'passionate' },
      { text: 'チャーハンまたはライス', type: 'classic' },
      { text: 'お店のおすすめサイド', type: 'creative' },
      { text: '特に頼まない', type: 'refined' },
    ],
  },
  {
    id: 8,
    text: '新しいラーメン屋を見つけたら？',
    options: [
      { text: 'すぐに入ってみる', type: 'passionate' },
      { text: 'まず口コミをチェック', type: 'classic' },
      { text: '限定メニューがあれば行く', type: 'creative' },
      { text: '様子を見てから', type: 'refined' },
    ],
  },
  {
    id: 9,
    text: 'カップ麺の選び方は？',
    options: [
      { text: '有名店監修のこってり系', type: 'passionate' },
      { text: 'ロングセラーの定番', type: 'classic' },
      { text: '新商品や限定品', type: 'creative' },
      { text: 'あまり食べない', type: 'refined' },
    ],
  },
  {
    id: 10,
    text: 'あなたにとってラーメンとは？',
    options: [
      { text: '情熱を注ぐソウルフード', type: 'passionate' },
      { text: '安心できる定番の味', type: 'classic' },
      { text: '常に進化するグルメ', type: 'creative' },
      { text: 'たまに食べる特別な一杯', type: 'refined' },
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
  recommendedRamen: string;
}> = {
  passionate: {
    type: 'passionate',
    title: '情熱のラーメンフリーク',
    emoji: '🔥',
    percentage: 'ラーメン愛度 100%',
    description: 'ラーメンに人生を捧げるタイプ。行列も厭わず、濃厚なスープを飲み干し、替え玉も忘れない。ラーメンへの情熱は誰にも負けない！',
    characteristics: ['情熱的', '行動力', 'こだわり', '豪快', '探求心'],
    recommendedRamen: '博多豚骨や二郎系でガッツリ！',
  },
  classic: {
    type: 'classic',
    title: '安定の王道タイプ',
    emoji: '🍜',
    percentage: '王道好き度 90%',
    description: '定番を愛する安定志向。昔ながらの中華そばや地元のラーメン屋を大切にします。奇をてらわない王道の味が一番と信じています。',
    characteristics: ['安定志向', '伝統重視', '信頼性', '穏やか', '誠実'],
    recommendedRamen: '老舗の醤油ラーメンで原点回帰！',
  },
  creative: {
    type: 'creative',
    title: 'トレンドハンター',
    emoji: '✨',
    percentage: '新しもの好き度 92%',
    description: '常に新しいラーメンを探すトレンドハンター。限定メニュー、新店オープン、話題のラーメンには必ず足を運ぶ好奇心旺盛タイプ。',
    characteristics: ['好奇心', 'トレンド感度', '冒険心', 'SNS活用', 'オープン'],
    recommendedRamen: '話題のニューウェーブ系に挑戦！',
  },
  refined: {
    type: 'refined',
    title: '上品グルメタイプ',
    emoji: '🥢',
    percentage: '上品度 88%',
    description: 'ラーメンも上品に楽しむグルメ派。清潔な店で、丁寧に作られた一杯を味わいます。量より質、頻度より特別感を重視。',
    characteristics: ['上品', '審美眼', '質重視', '落ち着き', '洗練'],
    recommendedRamen: 'ミシュラン掲載店の塩ラーメン！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { passionate: 0, classic: 0, creative: 0, refined: 0 };

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
