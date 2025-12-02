// 友情の深さ診断 (우정의 깊이 테스트)
export const questions = [
  {
    id: 1,
    text: '親友と呼べる人は何人いる？',
    options: [
      { text: '1〜2人、深い付き合い', type: 'deep' },
      { text: '3〜5人、バランス良く', type: 'balanced' },
      { text: '多くの友達がいる', type: 'wide' },
      { text: '親友はいない、自分で十分', type: 'independent' },
    ],
  },
  {
    id: 2,
    text: '友達の悩みを聞く時は？',
    options: [
      { text: '真剣に向き合い、一緒に考える', type: 'deep' },
      { text: 'アドバイスしつつ、励ます', type: 'balanced' },
      { text: '気分転換に誘う', type: 'wide' },
      { text: '聞くけど、深入りはしない', type: 'independent' },
    ],
  },
  {
    id: 3,
    text: '友達との連絡頻度は？',
    options: [
      { text: 'ほぼ毎日、些細なことも報告', type: 'deep' },
      { text: '週に数回、近況を共有', type: 'balanced' },
      { text: '会った時に話す', type: 'wide' },
      { text: '必要な時だけ', type: 'independent' },
    ],
  },
  {
    id: 4,
    text: '友達の秘密を知ったら？',
    options: [
      { text: '墓場まで持っていく', type: 'deep' },
      { text: '絶対に言わない', type: 'balanced' },
      { text: '信頼できる人には相談するかも', type: 'wide' },
      { text: '興味がない', type: 'independent' },
    ],
  },
  {
    id: 5,
    text: '友達が困っている時は？',
    options: [
      { text: 'すぐに駆けつける', type: 'deep' },
      { text: 'できる範囲で助ける', type: 'balanced' },
      { text: '声をかける', type: 'wide' },
      { text: '自分で解決すべきと思う', type: 'independent' },
    ],
  },
  {
    id: 6,
    text: '友達との約束は？',
    options: [
      { text: '何よりも優先する', type: 'deep' },
      { text: 'できるだけ守る', type: 'balanced' },
      { text: '状況による', type: 'wide' },
      { text: '気軽に変更することも', type: 'independent' },
    ],
  },
  {
    id: 7,
    text: '新しい友達を作ることは？',
    options: [
      { text: '慎重、深い関係を求める', type: 'deep' },
      { text: '自然に増えていく', type: 'balanced' },
      { text: '積極的に増やす', type: 'wide' },
      { text: '必要ない', type: 'independent' },
    ],
  },
  {
    id: 8,
    text: '友達との喧嘩の後は？',
    options: [
      { text: '徹底的に話し合う', type: 'deep' },
      { text: '時間を置いて仲直り', type: 'balanced' },
      { text: '他の友達と過ごす', type: 'wide' },
      { text: '疎遠になっても仕方ない', type: 'independent' },
    ],
  },
  {
    id: 9,
    text: '友達に求めることは？',
    options: [
      { text: '深い理解と信頼', type: 'deep' },
      { text: '互いを尊重する関係', type: 'balanced' },
      { text: '楽しい時間', type: 'wide' },
      { text: '特にない', type: 'independent' },
    ],
  },
  {
    id: 10,
    text: '理想の友情は？',
    options: [
      { text: '何十年も続く親友関係', type: 'deep' },
      { text: '良い距離感を保った関係', type: 'balanced' },
      { text: '多くの人と繋がること', type: 'wide' },
      { text: '必要な時だけの関係', type: 'independent' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  friendshipStyle: string[];
  strengths: string[];
  tips: string[];
}> = {
  deep: {
    type: 'deep',
    title: '深い絆重視タイプ',
    emoji: '💎',
    description: 'あなたは少数精鋭の深い友情を大切にするタイプ！親友と呼べる人との関係を何よりも大切にし、一生続く絆を築きます。',
    friendshipStyle: ['少数と深く付き合う', '秘密を守る', '困った時に駆けつける'],
    strengths: ['信頼される', '深い理解ができる', '長続きする友情'],
    tips: ['新しい出会いも大切に', '依存しすぎないで', '広い視野も持とう'],
  },
  balanced: {
    type: 'balanced',
    title: 'バランス型交友タイプ',
    emoji: '⚖️',
    description: 'あなたは深さと広さのバランスが取れた友人関係を築くタイプ！適度な距離感を保ちながら、良い関係を維持できます。',
    friendshipStyle: ['適度な距離感', '相互尊重', 'バランスの取れた関係'],
    strengths: ['幅広い友人関係', '長続きする', '負担をかけない'],
    tips: ['時には深く踏み込んで', '本音も伝えよう', '特別な親友も作ってみて'],
  },
  wide: {
    type: 'wide',
    title: '広い交友関係タイプ',
    emoji: '🌐',
    description: 'あなたは多くの人と繋がることを楽しむタイプ！社交的で友達が多く、いつも賑やかな人間関係を持っています。',
    friendshipStyle: ['多くの友達', '社交的', '楽しい時間を共有'],
    strengths: ['人脈が広い', '情報が集まる', '孤独になりにくい'],
    tips: ['深い関係も築いて', '本当の親友を見つけよう', '量より質も意識して'],
  },
  independent: {
    type: 'independent',
    title: '独立志向タイプ',
    emoji: '🦋',
    description: 'あなたは一人の時間を大切にし、友人関係に依存しないタイプ！自立していて、自分の世界を持っています。',
    friendshipStyle: ['自立している', '必要な時だけ連絡', '一人の時間を重視'],
    strengths: ['自分を持っている', '依存しない', '自由'],
    tips: ['信頼できる人を作ろう', '孤独になりすぎないで', '人との繋がりも宝'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { deep: 0, balanced: 0, wide: 0, independent: 0 };

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
