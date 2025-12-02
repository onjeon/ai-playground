// お酒の飲み方診断
export const questions = [
  {
    id: 1,
    text: '飲み会で最初の一杯は？',
    options: [
      { text: '迷わずビール！', type: 'classic' },
      { text: 'カクテルやサワー', type: 'social' },
      { text: '日本酒やワインをじっくり', type: 'connoisseur' },
      { text: 'ノンアルコールでもOK', type: 'moderate' },
    ],
  },
  {
    id: 2,
    text: 'お酒を飲むペースは？',
    options: [
      { text: 'ガンガン飲む', type: 'classic' },
      { text: '周りに合わせる', type: 'social' },
      { text: '味わいながらゆっくり', type: 'connoisseur' },
      { text: '自分のペースで少しずつ', type: 'moderate' },
    ],
  },
  {
    id: 3,
    text: '酔った時の自分は？',
    options: [
      { text: 'テンションが上がる', type: 'classic' },
      { text: 'おしゃべりになる', type: 'social' },
      { text: 'あまり変わらない', type: 'connoisseur' },
      { text: '眠くなってくる', type: 'moderate' },
    ],
  },
  {
    id: 4,
    text: 'お酒のおつまみは？',
    options: [
      { text: '唐揚げなどガッツリ系', type: 'classic' },
      { text: 'みんなでシェアできるもの', type: 'social' },
      { text: 'お酒に合う上品なもの', type: 'connoisseur' },
      { text: '野菜やヘルシー系', type: 'moderate' },
    ],
  },
  {
    id: 5,
    text: 'お酒の失敗談は？',
    options: [
      { text: '翌日記憶がない', type: 'classic' },
      { text: '余計なことを言ってしまう', type: 'social' },
      { text: 'ほとんどない', type: 'connoisseur' },
      { text: '飲みすぎて後悔', type: 'moderate' },
    ],
  },
  {
    id: 6,
    text: '二日酔いへの対策は？',
    options: [
      { text: '迎え酒で解決', type: 'classic' },
      { text: 'ウコンやサプリを事前に', type: 'social' },
      { text: 'そもそも二日酔いしない', type: 'connoisseur' },
      { text: '水をたくさん飲む', type: 'moderate' },
    ],
  },
  {
    id: 7,
    text: '飲み会の終わり際は？',
    options: [
      { text: '「もう一軒行こう！」', type: 'classic' },
      { text: '二次会も参加', type: 'social' },
      { text: 'いい感じで切り上げる', type: 'connoisseur' },
      { text: '終電前に帰る', type: 'moderate' },
    ],
  },
  {
    id: 8,
    text: 'お酒を選ぶ基準は？',
    options: [
      { text: 'アルコール度数', type: 'classic' },
      { text: 'その場の雰囲気', type: 'social' },
      { text: '産地や銘柄', type: 'connoisseur' },
      { text: 'カロリーや糖質', type: 'moderate' },
    ],
  },
  {
    id: 9,
    text: '家で飲む時は？',
    options: [
      { text: '缶ビールを何本も', type: 'classic' },
      { text: 'オンライン飲み会', type: 'social' },
      { text: 'こだわりのお酒をグラスで', type: 'connoisseur' },
      { text: 'たまに少しだけ', type: 'moderate' },
    ],
  },
  {
    id: 10,
    text: 'お酒に求めるものは？',
    options: [
      { text: 'ストレス発散', type: 'classic' },
      { text: 'コミュニケーション', type: 'social' },
      { text: '味わいと香り', type: 'connoisseur' },
      { text: 'リラックス', type: 'moderate' },
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
  recommendation: string;
}> = {
  classic: {
    type: 'classic',
    title: '豪快派ドリンカー',
    emoji: '🍺',
    percentage: '豪快度 95%',
    description: '「とりあえずビール！」が合言葉。お酒の席を心から楽しむ豪快タイプです。飲み会の盛り上げ役として欠かせない存在。翌日のダメージは気にしない！',
    characteristics: ['豪快', '盛り上げ上手', 'ストレス発散上手', '付き合いがいい', '記憶が曖昧'],
    recommendation: '肝臓ケアも忘れずに。週に2日は休肝日を作りましょう！',
  },
  social: {
    type: 'social',
    title: 'ソーシャルドリンカー',
    emoji: '🍸',
    percentage: '社交性度 92%',
    description: 'お酒はコミュニケーションツール。場の空気を読んで飲み方を変えられる柔軟なタイプです。誰とでも楽しく飲める社交上手！',
    characteristics: ['社交的', '空気が読める', '協調性', '話し上手', 'ムードメーカー'],
    recommendation: '自分のペースも大切に。断る勇気も時には必要です！',
  },
  connoisseur: {
    type: 'connoisseur',
    title: 'お酒の探求者',
    emoji: '🍷',
    percentage: 'こだわり度 90%',
    description: 'お酒の味、香り、産地にこだわる通なタイプ。量より質を重視し、一杯をじっくり味わいます。お酒の知識も豊富なソムリエ気質！',
    characteristics: ['こだわり派', '知識豊富', '上品', '自制心あり', '味覚が鋭い'],
    recommendation: '新しい銘柄に挑戦して、さらに世界を広げましょう！',
  },
  moderate: {
    type: 'moderate',
    title: 'ほどほどドリンカー',
    emoji: '🍵',
    percentage: '節度度 88%',
    description: '健康を意識しながら楽しむバランス派。無理に飲まず、自分のペースを守れる大人のタイプです。翌日もスッキリ爽快！',
    characteristics: ['自制心', '健康志向', 'マイペース', '堅実', '安定感'],
    recommendation: 'たまには羽目を外してみるのも良いかもしれません！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { classic: 0, social: 0, connoisseur: 0, moderate: 0 };

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
