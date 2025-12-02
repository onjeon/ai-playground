// 将来設計タイプ診断
export const questions = [
  {
    id: 1,
    text: '5年後の自分を想像できる？',
    options: [
      { text: '明確にビジョンがある', type: 'strategic' },
      { text: 'なんとなくイメージがある', type: 'flexible' },
      { text: 'あまり考えていない', type: 'present' },
      { text: '想像するのが不安', type: 'anxious' },
    ],
  },
  {
    id: 2,
    text: '人生の目標について？',
    options: [
      { text: '長期目標と短期目標がある', type: 'strategic' },
      { text: 'ざっくりとした方向性がある', type: 'flexible' },
      { text: '流れに任せている', type: 'present' },
      { text: '目標を立てるのが苦手', type: 'anxious' },
    ],
  },
  {
    id: 3,
    text: 'キャリアプランは？',
    options: [
      { text: '詳細に計画している', type: 'strategic' },
      { text: '大まかな方向性は決めている', type: 'flexible' },
      { text: 'チャンスがあれば考える', type: 'present' },
      { text: '将来が不安で決められない', type: 'anxious' },
    ],
  },
  {
    id: 4,
    text: '貯金や投資について？',
    options: [
      { text: '計画的に資産形成している', type: 'strategic' },
      { text: 'ある程度は考えている', type: 'flexible' },
      { text: '余ったら貯金する程度', type: 'present' },
      { text: 'お金のことを考えると不安', type: 'anxious' },
    ],
  },
  {
    id: 5,
    text: '人生で大切にしたいことは？',
    options: [
      { text: '成功と達成', type: 'strategic' },
      { text: 'バランスと幸福', type: 'flexible' },
      { text: '今を楽しむこと', type: 'present' },
      { text: '安心と安定', type: 'anxious' },
    ],
  },
  {
    id: 6,
    text: '予定を立てるのは？',
    options: [
      { text: '詳細なスケジュールを作る', type: 'strategic' },
      { text: '大まかに決める', type: 'flexible' },
      { text: 'その時の気分で', type: 'present' },
      { text: '予定通りにいかないと焦る', type: 'anxious' },
    ],
  },
  {
    id: 7,
    text: '人生設計に影響を与えるものは？',
    options: [
      { text: '自分の意志と努力', type: 'strategic' },
      { text: '出会いとチャンス', type: 'flexible' },
      { text: '運と縁', type: 'present' },
      { text: '社会情勢や経済状況', type: 'anxious' },
    ],
  },
  {
    id: 8,
    text: '理想のライフスタイルは？',
    options: [
      { text: '成功者として豊かに暮らす', type: 'strategic' },
      { text: '好きなことをして生きる', type: 'flexible' },
      { text: '楽しければそれでいい', type: 'present' },
      { text: '安定した生活', type: 'anxious' },
    ],
  },
  {
    id: 9,
    text: '計画が崩れたら？',
    options: [
      { text: 'すぐに修正して再計画', type: 'strategic' },
      { text: '柔軟に対応する', type: 'flexible' },
      { text: '気にしない', type: 'present' },
      { text: 'かなり動揺する', type: 'anxious' },
    ],
  },
  {
    id: 10,
    text: '将来に対する気持ちは？',
    options: [
      { text: '自信を持って進んでいる', type: 'strategic' },
      { text: '楽しみにしている', type: 'flexible' },
      { text: 'なるようになる', type: 'present' },
      { text: '不安の方が大きい', type: 'anxious' },
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
  planningAdvice: string;
}> = {
  strategic: {
    type: 'strategic',
    title: '戦略的計画者',
    emoji: '📊',
    percentage: '計画力 95%',
    description: '長期的なビジョンを持ち、計画的に人生を設計するタイプ。目標に向かって着実に進みます。',
    characteristics: ['計画的', '目標志向', '論理的', '努力家', '先見性'],
    planningAdvice: '計画も大切だけど、時には予想外の展開も楽しんで',
  },
  flexible: {
    type: 'flexible',
    title: '柔軟な設計者',
    emoji: '🌊',
    percentage: '柔軟性 85%',
    description: '大まかな方向性を持ちつつ、状況に応じて柔軟に対応できるバランス派。',
    characteristics: ['柔軟', 'バランス感覚', '適応力', 'ポジティブ', '機会を活かす'],
    planningAdvice: 'その柔軟さを活かして、チャンスを掴んで',
  },
  present: {
    type: 'present',
    title: '今を生きる人',
    emoji: '🌸',
    percentage: '現在志向 80%',
    description: '将来のことより今を大切にするタイプ。流れに身を任せて自然体で生きています。',
    characteristics: ['自由', 'マイペース', '楽観的', '直感的', '今を楽しむ'],
    planningAdvice: '少しだけ先のことも考えてみると安心かも',
  },
  anxious: {
    type: 'anxious',
    title: '慎重な心配者',
    emoji: '🌧️',
    percentage: '不安度 75%',
    description: '将来への不安を感じやすいタイプ。計画を立てたいけれど、不確実性が心配です。',
    characteristics: ['慎重', '心配性', '繊細', '安定志向', '真面目'],
    planningAdvice: '小さな一歩から始めてみて。完璧じゃなくてOK',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { strategic: 0, flexible: 0, present: 0, anxious: 0 };

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
