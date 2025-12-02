// 生産性ピーク時間診断
export const questions = [
  {
    id: 1,
    text: '最も仕事がはかどる時間帯は？',
    options: [
      { text: '早朝（5〜8時）', type: 'early_bird' },
      { text: '午前中（9〜12時）', type: 'morning' },
      { text: '午後（13〜17時）', type: 'afternoon' },
      { text: '夜（18時以降）', type: 'night' },
    ],
  },
  {
    id: 2,
    text: '難しい課題に取り組むなら？',
    options: [
      { text: '誰もいない早朝', type: 'early_bird' },
      { text: '午前中の頭がクリアな時', type: 'morning' },
      { text: '午後、エンジンがかかってから', type: 'afternoon' },
      { text: '静かな夜', type: 'night' },
    ],
  },
  {
    id: 3,
    text: '締め切り前の追い込みは？',
    options: [
      { text: '早起きして朝やる', type: 'early_bird' },
      { text: '午前中にまとめて', type: 'morning' },
      { text: '午後から集中して', type: 'afternoon' },
      { text: '夜通し作業することも', type: 'night' },
    ],
  },
  {
    id: 4,
    text: 'ミーティングを入れるなら避けたい時間は？',
    options: [
      { text: '午後〜夕方（生産性が下がる）', type: 'early_bird' },
      { text: '午後（午前中は集中したい）', type: 'morning' },
      { text: '午前中（まだ調子が出ない）', type: 'afternoon' },
      { text: '午前中（夜型だから）', type: 'night' },
    ],
  },
  {
    id: 5,
    text: 'アイデアが浮かびやすいのは？',
    options: [
      { text: '朝のシャワー中や通勤中', type: 'early_bird' },
      { text: '午前中のデスクワーク中', type: 'morning' },
      { text: '午後のリラックスした時間', type: 'afternoon' },
      { text: '夜、静かになってから', type: 'night' },
    ],
  },
  {
    id: 6,
    text: 'ルーティンワークをこなすのは？',
    options: [
      { text: '午後、頭を使う仕事の後', type: 'early_bird' },
      { text: '午後の少し疲れた時', type: 'morning' },
      { text: '午前中、まだ調子が出ない時', type: 'afternoon' },
      { text: '昼間、夜に備えて', type: 'night' },
    ],
  },
  {
    id: 7,
    text: '集中が続く時間の長さは？',
    options: [
      { text: '朝なら2〜3時間連続で集中', type: 'early_bird' },
      { text: '午前中に1〜2時間集中できる', type: 'morning' },
      { text: '午後は波があるけど集中できる', type: 'afternoon' },
      { text: '夜は時間を忘れて没頭', type: 'night' },
    ],
  },
  {
    id: 8,
    text: '生産性が下がる時間帯は？',
    options: [
      { text: '夕方以降は効率が落ちる', type: 'early_bird' },
      { text: '昼食後と夕方', type: 'morning' },
      { text: '朝と昼食直後', type: 'afternoon' },
      { text: '午前中は動けない', type: 'night' },
    ],
  },
  {
    id: 9,
    text: '理想的な仕事の始め方は？',
    options: [
      { text: '誰よりも早く出社/作業開始', type: 'early_bird' },
      { text: '定時に始めて午前中に集中', type: 'morning' },
      { text: 'ゆっくり始めて午後から本気', type: 'afternoon' },
      { text: '遅めに始めて夜まで', type: 'night' },
    ],
  },
  {
    id: 10,
    text: 'フロー状態（没頭状態）に入りやすいのは？',
    options: [
      { text: '早朝の静寂の中', type: 'early_bird' },
      { text: '午前中の活発な時間', type: 'morning' },
      { text: '午後、リズムに乗ってから', type: 'afternoon' },
      { text: '夜、周りが静かになってから', type: 'night' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  peak: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  early_bird: {
    type: 'early_bird',
    title: '超朝型生産者',
    emoji: '🐦✨',
    peak: '生産性ピーク：早朝',
    description: '早朝に最高のパフォーマンスを発揮するタイプ。誰もいない静かな時間に集中して重要なタスクをこなせます。「朝活」のプロフェッショナル！',
    characteristics: ['早朝が最も集中できる', '朝の静けさを活用', '夕方には生産性が下がる', '計画的な朝型'],
    tips: ['重要なタスクは朝一番に', '夜は早めに切り上げて', '朝のルーティンを大切に'],
  },
  morning: {
    type: 'morning',
    title: '午前集中タイプ',
    emoji: '☀️📊',
    peak: '生産性ピーク：午前中',
    description: '午前中に生産性がピークを迎えるタイプ。頭がスッキリした状態で難しいタスクに取り組み、午後はルーティンワークで調整。バランスの良い働き方ができます。',
    characteristics: ['午前中に集中力が高い', '午後は軽めのタスク向き', '規則正しい生活', '効率的な時間管理'],
    tips: ['午前中に大事な決断を', 'ミーティングは午後に', '昼休みでリフレッシュを'],
  },
  afternoon: {
    type: 'afternoon',
    title: '午後型パフォーマー',
    emoji: '🌤️🚀',
    peak: '生産性ピーク：午後',
    description: '午後からエンジンがかかるタイプ。朝はウォームアップの時間として使い、午後に本領を発揮します。昼食後も眠くならず、夕方まで集中が続きます。',
    characteristics: ['午後から調子が出る', '朝はスロースタート', '昼食後も元気', 'リズムを大切にする'],
    tips: ['午前中は準備に使って', '午後に集中作業を', 'ランチで栄養補給を'],
  },
  night: {
    type: 'night',
    title: '夜型クリエイター',
    emoji: '🌙💡',
    peak: '生産性ピーク：夜',
    description: '夜に最も生産性が高まるタイプ。静かな夜の時間に集中力が増し、クリエイティブな仕事がはかどります。アーティストやプログラマーに多いタイプ！',
    characteristics: ['夜に集中力が高まる', '静かな環境が好き', 'クリエイティブ', '没頭型'],
    tips: ['夜の時間を有効活用', '睡眠時間は確保して', '朝の予定は余裕を持って'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { early_bird: 0, morning: 0, afternoon: 0, night: 0 };

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
