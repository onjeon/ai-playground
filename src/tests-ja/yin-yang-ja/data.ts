// 陰陽バランス診断
export const questions = [
  {
    id: 1,
    text: '朝と夜、どちらが好き？',
    options: [
      { text: '朝、太陽の光が好き', type: 'yang' },
      { text: '夜、静かな時間が好き', type: 'yin' },
      { text: '昼間が一番活動的', type: 'yang' },
      { text: '夕暮れ時が落ち着く', type: 'yin' },
    ],
  },
  {
    id: 2,
    text: '週末の過ごし方は？',
    options: [
      { text: '外に出てアクティブに', type: 'yang' },
      { text: '家でゆっくり過ごす', type: 'yin' },
      { text: '友達とワイワイ', type: 'yang' },
      { text: '一人で趣味に没頭', type: 'yin' },
    ],
  },
  {
    id: 3,
    text: 'エネルギーが湧いてくるのは？',
    options: [
      { text: '人と話している時', type: 'yang' },
      { text: '一人で考えている時', type: 'yin' },
      { text: '体を動かしている時', type: 'yang' },
      { text: '静かに読書している時', type: 'yin' },
    ],
  },
  {
    id: 4,
    text: '問題に直面した時は？',
    options: [
      { text: 'すぐに行動を起こす', type: 'yang' },
      { text: 'じっくり考えてから動く', type: 'yin' },
      { text: '周りに相談する', type: 'yang' },
      { text: '自分の中で整理する', type: 'yin' },
    ],
  },
  {
    id: 5,
    text: '好きな音楽のテンポは？',
    options: [
      { text: 'アップテンポ', type: 'yang' },
      { text: 'スローテンポ', type: 'yin' },
      { text: 'ノリのいいダンス曲', type: 'yang' },
      { text: '静かなヒーリング曲', type: 'yin' },
    ],
  },
  {
    id: 6,
    text: 'ファッションの好みは？',
    options: [
      { text: '明るく目立つ色', type: 'yang' },
      { text: '落ち着いたダークトーン', type: 'yin' },
      { text: 'トレンドを取り入れる', type: 'yang' },
      { text: 'シンプルで控えめ', type: 'yin' },
    ],
  },
  {
    id: 7,
    text: '理想のデートは？',
    options: [
      { text: 'テーマパークで遊ぶ', type: 'yang' },
      { text: '静かなカフェで過ごす', type: 'yin' },
      { text: 'スポーツ観戦', type: 'yang' },
      { text: '美術館巡り', type: 'yin' },
    ],
  },
  {
    id: 8,
    text: 'ストレス発散法は？',
    options: [
      { text: 'カラオケで歌う', type: 'yang' },
      { text: '温泉でリラックス', type: 'yin' },
      { text: '運動して汗をかく', type: 'yang' },
      { text: 'アロマを焚いて瞑想', type: 'yin' },
    ],
  },
  {
    id: 9,
    text: '食べ物の好みは？',
    options: [
      { text: '辛いもの・刺激的なもの', type: 'yang' },
      { text: '優しい味・素材の味', type: 'yin' },
      { text: '熱々の料理', type: 'yang' },
      { text: '冷たい料理やデザート', type: 'yin' },
    ],
  },
  {
    id: 10,
    text: '自分の性格を色で表すと？',
    options: [
      { text: '赤やオレンジ（情熱）', type: 'yang' },
      { text: '青や紫（冷静）', type: 'yin' },
      { text: '黄色や金（活力）', type: 'yang' },
      { text: '緑や白（調和）', type: 'yin' },
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
  balanceAdvice: string;
}> = {
  yang: {
    type: 'yang',
    title: '陽タイプ',
    emoji: '☀️',
    percentage: '陽エネルギー 85%',
    description: '太陽のように明るく活動的なあなた。行動力があり、周囲を明るく照らす存在です。エネルギッシュで、チャレンジ精神旺盛。人を惹きつけるオーラがあります。',
    characteristics: ['活動的', '情熱的', '外向的', 'ポジティブ', 'リーダー気質'],
    balanceAdvice: '時々静かな時間を作ってバランスを取りましょう',
  },
  yin: {
    type: 'yin',
    title: '陰タイプ',
    emoji: '🌙',
    percentage: '陰エネルギー 85%',
    description: '月のように静かで神秘的なあなた。内面が豊かで、深い思考力を持っています。穏やかで人を癒す力があり、芸術的なセンスにも優れています。',
    characteristics: ['内省的', '穏やか', '繊細', '直感的', 'クリエイティブ'],
    balanceAdvice: '時々外に出て活動的になるとバランスが取れます',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { yang: 0, yin: 0 };

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
