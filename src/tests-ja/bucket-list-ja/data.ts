// バケットリストタイプ診断
export const questions = [
  {
    id: 1,
    text: 'やりたいことリストは持っている？',
    options: [
      { text: '詳細なリストがある', type: 'achiever' },
      { text: '頭の中にいくつかある', type: 'dreamer' },
      { text: 'あまり考えていない', type: 'present' },
      { text: 'リストを作るのが苦手', type: 'simple' },
    ],
  },
  {
    id: 2,
    text: '死ぬまでにやりたいことは？',
    options: [
      { text: '世界一周や大きな挑戦', type: 'achiever' },
      { text: '夢や理想の実現', type: 'dreamer' },
      { text: '日常の中の小さな幸せ', type: 'present' },
      { text: '特にこれといってない', type: 'simple' },
    ],
  },
  {
    id: 3,
    text: 'バケットリストの達成に向けて？',
    options: [
      { text: '計画を立てて行動している', type: 'achiever' },
      { text: 'いつか叶えたいと願っている', type: 'dreamer' },
      { text: 'チャンスがあれば', type: 'present' },
      { text: '無理に叶えなくてもいい', type: 'simple' },
    ],
  },
  {
    id: 4,
    text: '新しい経験への態度は？',
    options: [
      { text: '積極的に挑戦する', type: 'achiever' },
      { text: '興味があればやってみる', type: 'dreamer' },
      { text: '誘われたら参加する', type: 'present' },
      { text: '慣れたことの方がいい', type: 'simple' },
    ],
  },
  {
    id: 5,
    text: '人生で達成感を感じるのは？',
    options: [
      { text: '目標を達成した時', type: 'achiever' },
      { text: '夢に近づいた時', type: 'dreamer' },
      { text: '楽しい時間を過ごした時', type: 'present' },
      { text: '穏やかに過ごせた時', type: 'simple' },
    ],
  },
  {
    id: 6,
    text: 'やりたいことを実現するために？',
    options: [
      { text: '時間とお金を投資する', type: 'achiever' },
      { text: 'いつか機会が来ると信じる', type: 'dreamer' },
      { text: '自然に訪れるのを待つ', type: 'present' },
      { text: '特に何もしない', type: 'simple' },
    ],
  },
  {
    id: 7,
    text: '旅行で行きたい場所は？',
    options: [
      { text: '世界中のあらゆる場所', type: 'achiever' },
      { text: '憧れの特別な場所', type: 'dreamer' },
      { text: '近場でも楽しめればOK', type: 'present' },
      { text: '家が一番落ち着く', type: 'simple' },
    ],
  },
  {
    id: 8,
    text: '学びたいことや趣味は？',
    options: [
      { text: 'たくさんある、リスト化済み', type: 'achiever' },
      { text: 'いくつか夢見ているものがある', type: 'dreamer' },
      { text: '興味が湧いたら始める', type: 'present' },
      { text: '今のままで満足', type: 'simple' },
    ],
  },
  {
    id: 9,
    text: '人生の残り時間を意識する？',
    options: [
      { text: '常に意識して行動している', type: 'achiever' },
      { text: '時々考える', type: 'dreamer' },
      { text: 'あまり考えない', type: 'present' },
      { text: '考えると不安になる', type: 'simple' },
    ],
  },
  {
    id: 10,
    text: '理想の人生の終わり方は？',
    options: [
      { text: 'やりたいことを全てやり遂げて', type: 'achiever' },
      { text: '夢を叶えて満足して', type: 'dreamer' },
      { text: '楽しい思い出とともに', type: 'present' },
      { text: '穏やかに、静かに', type: 'simple' },
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
  bucketAdvice: string;
}> = {
  achiever: {
    type: 'achiever',
    title: '達成志向型',
    emoji: '🏆',
    percentage: '達成意欲 95%',
    description: 'やりたいことリストを着実にこなしていくタイプ。人生を最大限に生き、多くの経験を積むことに情熱を注ぎます。',
    characteristics: ['目標志向', '行動力', 'チャレンジ精神', '計画的', 'エネルギッシュ'],
    bucketAdvice: '達成も大切だけど、過程も楽しんで',
  },
  dreamer: {
    type: 'dreamer',
    title: '夢見る人',
    emoji: '✨',
    percentage: '夢見る力 88%',
    description: '大きな夢を持ち、いつか叶えたいと願っているタイプ。憧れや理想を大切にしています。',
    characteristics: ['ロマンチック', '想像力', '希望', '感性豊か', '理想主義'],
    bucketAdvice: '夢を夢で終わらせず、小さな一歩を踏み出してみて',
  },
  present: {
    type: 'present',
    title: '今を楽しむ人',
    emoji: '🌈',
    percentage: '今重視度 80%',
    description: '大きなリストより日常の中の幸せを大切にするタイプ。今この瞬間を味わいます。',
    characteristics: ['自然体', '柔軟', '満足度が高い', 'シンプル', '楽観的'],
    bucketAdvice: 'その生き方もすばらしい。時には新しいことにも挑戦を',
  },
  simple: {
    type: 'simple',
    title: 'シンプルライフ派',
    emoji: '🍃',
    percentage: 'シンプル度 85%',
    description: '特別なことより穏やかな日常を好むタイプ。無理に何かを達成しなくても幸せを感じられます。',
    characteristics: ['穏やか', '堅実', '満足', '安定志向', '控えめ'],
    bucketAdvice: '小さな楽しみを見つけていくのも素敵な人生',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { achiever: 0, dreamer: 0, present: 0, simple: 0 };

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
