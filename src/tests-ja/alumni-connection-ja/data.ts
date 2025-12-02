// 同窓会タイプ診断
export const questions = [
  {
    id: 1,
    text: '同窓会の案内が来たら？',
    options: [
      { text: '即参加！楽しみ！', type: 'eager' },
      { text: '仲良しが来るなら参加', type: 'selective' },
      { text: '迷った末に参加', type: 'hesitant' },
      { text: '参加しない', type: 'avoidant' },
    ],
  },
  {
    id: 2,
    text: '同窓会で話したい相手は？',
    options: [
      { text: '久しぶりの人全員', type: 'eager' },
      { text: '昔の親友だけ', type: 'selective' },
      { text: '話しかけられた人', type: 'hesitant' },
      { text: '特にいない', type: 'avoidant' },
    ],
  },
  {
    id: 3,
    text: '同窓会での自分は？',
    options: [
      { text: '盛り上げ役・幹事', type: 'eager' },
      { text: '懐かしい話で盛り上がる', type: 'selective' },
      { text: '隅っこで静かに過ごす', type: 'hesitant' },
      { text: '早めに帰りたい', type: 'avoidant' },
    ],
  },
  {
    id: 4,
    text: '同窓会で気になることは？',
    options: [
      { text: 'みんなの近況', type: 'eager' },
      { text: '仲良しの今', type: 'selective' },
      { text: '自分がどう思われるか', type: 'hesitant' },
      { text: '時間とお金の無駄', type: 'avoidant' },
    ],
  },
  {
    id: 5,
    text: '同窓会に着ていく服は？',
    options: [
      { text: 'おしゃれして行く', type: 'eager' },
      { text: '適度にきちんと', type: 'selective' },
      { text: '目立たない服', type: 'hesitant' },
      { text: '服装で悩むのも面倒', type: 'avoidant' },
    ],
  },
  {
    id: 6,
    text: '学生時代の自分と今を比較すると？',
    options: [
      { text: '成長を見せたい', type: 'eager' },
      { text: '懐かしい自分に戻る', type: 'selective' },
      { text: '比較されたくない', type: 'hesitant' },
      { text: '比較する意味がない', type: 'avoidant' },
    ],
  },
  {
    id: 7,
    text: '同窓会後の連絡先交換は？',
    options: [
      { text: '積極的に交換', type: 'eager' },
      { text: '仲良しとだけ', type: 'selective' },
      { text: '求められたら交換', type: 'hesitant' },
      { text: '交換しない', type: 'avoidant' },
    ],
  },
  {
    id: 8,
    text: '同窓会での話題は？',
    options: [
      { text: '何でも話す', type: 'eager' },
      { text: '思い出話中心', type: 'selective' },
      { text: '当たり障りない話', type: 'hesitant' },
      { text: 'あまり話さない', type: 'avoidant' },
    ],
  },
  {
    id: 9,
    text: '同窓会の頻度について？',
    options: [
      { text: '年に何度でもOK', type: 'eager' },
      { text: '数年に一度がちょうどいい', type: 'selective' },
      { text: 'あまり頻繁でなくていい', type: 'hesitant' },
      { text: '一度も参加したくない', type: 'avoidant' },
    ],
  },
  {
    id: 10,
    text: '同窓会への本音は？',
    options: [
      { text: '人生の楽しみの一つ', type: 'eager' },
      { text: '懐かしさを味わう機会', type: 'selective' },
      { text: '義務感で参加', type: 'hesitant' },
      { text: '過去は振り返りたくない', type: 'avoidant' },
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
  reunionAdvice: string;
}> = {
  eager: {
    type: 'eager',
    title: '同窓会大好きタイプ',
    emoji: '🎉',
    percentage: '参加意欲 95%',
    description: '同窓会が待ち遠しい！幹事を買って出ることも。昔の仲間との再会を心から楽しみます。',
    characteristics: ['社交的', '過去を大切に', '人脈重視', 'ムードメーカー', '積極的'],
    reunionAdvice: 'その情熱で同窓会を盛り上げて！',
  },
  selective: {
    type: 'selective',
    title: '選択的参加タイプ',
    emoji: '🎯',
    percentage: '選択度 80%',
    description: '仲良しが来るなら参加するタイプ。全員と話すより、大切な友人との再会を重視します。',
    characteristics: ['選択的', '友情重視', '質重視', '落ち着いている', 'バランス感覚'],
    reunionAdvice: '昔の仲間との絆を深めるチャンスに',
  },
  hesitant: {
    type: 'hesitant',
    title: '躊躇派タイプ',
    emoji: '🤔',
    percentage: '迷い度 75%',
    description: '参加するか迷うタイプ。自分がどう思われるか気になり、少し緊張してしまいます。',
    characteristics: ['控えめ', '自意識過剰', '慎重', '内向的', '謙虚'],
    reunionAdvice: '気負わずに昔の自分に戻ってみて',
  },
  avoidant: {
    type: 'avoidant',
    title: '回避タイプ',
    emoji: '🚪',
    percentage: '回避度 85%',
    description: '同窓会にはあまり興味がないタイプ。過去より今と未来を大切にしたいと考えています。',
    characteristics: ['独立心', '現実志向', '過去に執着しない', '合理的', '自分の時間重視'],
    reunionAdvice: '無理に参加しなくてもOK、自分らしく',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { eager: 0, selective: 0, hesitant: 0, avoidant: 0 };

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
