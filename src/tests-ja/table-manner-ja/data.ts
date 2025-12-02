// テーブルマナー度診断
export const questions = [
  {
    id: 1,
    text: 'ナイフとフォークの使い方は？',
    options: [
      { text: '完璧に使いこなせる', type: 'perfect' },
      { text: 'だいたいわかる', type: 'good' },
      { text: 'なんとなく', type: 'basic' },
      { text: 'あまり自信がない', type: 'casual' },
    ],
  },
  {
    id: 2,
    text: 'お箸の持ち方は？',
    options: [
      { text: '正しく美しく持てる', type: 'perfect' },
      { text: '一般的な持ち方', type: 'good' },
      { text: '使えればOK', type: 'basic' },
      { text: '自己流', type: 'casual' },
    ],
  },
  {
    id: 3,
    text: '食事中の姿勢について',
    options: [
      { text: '常に背筋を伸ばす', type: 'perfect' },
      { text: '気をつけている', type: 'good' },
      { text: 'たまに猫背に', type: 'basic' },
      { text: 'リラックス優先', type: 'casual' },
    ],
  },
  {
    id: 4,
    text: '食事中の音について',
    options: [
      { text: '絶対に音を立てない', type: 'perfect' },
      { text: 'できるだけ静かに', type: 'good' },
      { text: '少しは出るかも', type: 'basic' },
      { text: '気にしない', type: 'casual' },
    ],
  },
  {
    id: 5,
    text: 'ナプキンの使い方は？',
    options: [
      { text: '正しいマナーで使う', type: 'perfect' },
      { text: '膝に置いて使う', type: 'good' },
      { text: 'とりあえず使う', type: 'basic' },
      { text: '使い方がよくわからない', type: 'casual' },
    ],
  },
  {
    id: 6,
    text: '高級レストランに行く時',
    options: [
      { text: '自然に振る舞える', type: 'perfect' },
      { text: 'マナーを意識する', type: 'good' },
      { text: '少し緊張する', type: 'basic' },
      { text: 'かなり緊張する', type: 'casual' },
    ],
  },
  {
    id: 7,
    text: '食事中のスマホは？',
    options: [
      { text: '絶対に触らない', type: 'perfect' },
      { text: 'なるべく見ない', type: 'good' },
      { text: 'たまに確認', type: 'basic' },
      { text: '普通に使う', type: 'casual' },
    ],
  },
  {
    id: 8,
    text: '料理を残すことについて',
    options: [
      { text: '残さず完食が礼儀', type: 'perfect' },
      { text: 'できるだけ食べきる', type: 'good' },
      { text: '無理なら残す', type: 'basic' },
      { text: '好きなだけ食べて残す', type: 'casual' },
    ],
  },
  {
    id: 9,
    text: '乾杯のマナーは？',
    options: [
      { text: '目上の人より低く杯を', type: 'perfect' },
      { text: '一応意識する', type: 'good' },
      { text: 'あまり考えない', type: 'basic' },
      { text: '知らなかった', type: 'casual' },
    ],
  },
  {
    id: 10,
    text: 'テーブルマナーへの意識は？',
    options: [
      { text: '常に美しく食べたい', type: 'perfect' },
      { text: 'TPOに合わせる', type: 'good' },
      { text: '最低限でいい', type: 'basic' },
      { text: '堅苦しいのは苦手', type: 'casual' },
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
  perfect: {
    type: 'perfect',
    title: 'マナーマスター',
    emoji: '👑',
    percentage: 'マナー度 100%',
    description: '完璧なテーブルマナーの持ち主！どんな場面でも美しく食事ができる。高級レストランも緊張なし、品格を感じさせる食事スタイル。',
    characteristics: ['品格がある', '教養豊か', '落ち着きがある', '自信がある', '周囲への配慮'],
    advice: '素晴らしいマナー！でもたまにはリラックスした食事も楽しんで♪',
  },
  good: {
    type: 'good',
    title: 'マナー上手',
    emoji: '✨',
    percentage: 'マナー度 75%',
    description: '基本的なマナーはしっかり身についている！TPOに合わせて振る舞える、バランスの取れたマナー上手さん。',
    characteristics: ['TPO意識', 'バランス型', '常識的', '適応力', '好印象'],
    advice: 'いいバランス感覚！さらに磨けば完璧に♪',
  },
  basic: {
    type: 'basic',
    title: 'カジュアルマナー派',
    emoji: '🍴',
    percentage: 'マナー度 50%',
    description: '最低限のマナーは心得ている。でも堅苦しいのは苦手で、リラックスして食事したいタイプ。場面に応じて調整。',
    characteristics: ['カジュアル', 'リラックス重視', '柔軟', '自然体', '食事を楽しむ'],
    advice: 'フォーマルな場でも対応できるよう、少しずつスキルアップを♪',
  },
  casual: {
    type: 'casual',
    title: '自由スタイル派',
    emoji: '🤙',
    percentage: 'マナー度 25%',
    description: 'マナーより美味しく食べることが大事！自由なスタイルで食事を楽しむ。堅苦しいルールは気にしない自然体派。',
    characteristics: ['自由奔放', '素直', 'マイペース', 'ストレスフリー', '楽しさ優先'],
    advice: '基本マナーを覚えると、食事の幅が広がりますよ♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { perfect: 0, good: 0, basic: 0, casual: 0 };

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
