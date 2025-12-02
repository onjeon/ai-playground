// 自己改善欲求度診断
export const questions = [
  {
    id: 1,
    text: '新年の抱負を立てることについてどう思う？',
    options: [
      { text: '毎年必ず立てて実行する', type: 'high' },
      { text: '立てるけど続かないことが多い', type: 'mid' },
      { text: '気分によって立てたり立てなかったり', type: 'low' },
      { text: '特に意識しない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '自分の弱点に気づいた時は？',
    options: [
      { text: 'すぐに改善計画を立てる', type: 'high' },
      { text: 'いつか直そうと思う', type: 'mid' },
      { text: '個性だと受け入れる', type: 'low' },
      { text: '特に気にしない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '自己啓発本や動画を見ることは？',
    options: [
      { text: '定期的にチェックしている', type: 'high' },
      { text: '時々見ることがある', type: 'mid' },
      { text: 'あまり興味がない', type: 'low' },
      { text: '全く見ない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '日々の習慣について？',
    options: [
      { text: '常により良い習慣を取り入れたい', type: 'high' },
      { text: '良い習慣は意識している', type: 'mid' },
      { text: '今のままで十分', type: 'low' },
      { text: '習慣とか考えたことない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: 'フィードバックを受けた時は？',
    options: [
      { text: '成長のチャンスとして歓迎する', type: 'high' },
      { text: '参考にはするけど全ては実践しない', type: 'mid' },
      { text: '聞くだけ聞いて流すことも', type: 'low' },
      { text: 'あまり気にしない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '過去の自分と今の自分を比べると？',
    options: [
      { text: '成長を実感してもっと向上したい', type: 'high' },
      { text: '少しは成長したかな', type: 'mid' },
      { text: 'あまり変わってないかも', type: 'low' },
      { text: '比べたことがない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '新しいスキルを身につけることに？',
    options: [
      { text: 'いつも何か学んでいる', type: 'high' },
      { text: '必要があれば学ぶ', type: 'mid' },
      { text: 'あまり積極的ではない', type: 'low' },
      { text: '今のスキルで十分', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '理想の自分像は？',
    options: [
      { text: '明確にあって日々近づいている', type: 'high' },
      { text: 'ぼんやりとはある', type: 'mid' },
      { text: '特に考えていない', type: 'low' },
      { text: '今の自分でいい', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '自分を変えたいと思うことは？',
    options: [
      { text: 'しょっちゅう思う', type: 'high' },
      { text: '時々思う', type: 'mid' },
      { text: 'たまに思う程度', type: 'low' },
      { text: 'ほとんど思わない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '目標達成のために我慢することは？',
    options: [
      { text: '喜んで受け入れる', type: 'high' },
      { text: '必要なら我慢できる', type: 'mid' },
      { text: 'あまり我慢したくない', type: 'low' },
      { text: '我慢は苦手', type: 'minimal' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  level: string;
  description: string;
  characteristics: string[];
  advice: string;
}> = {
  high: {
    type: 'high',
    title: '自己改善マスター',
    emoji: '🚀',
    level: '改善欲求 95%',
    description: '常に自分を高めようとする強い意志を持つあなた！目標に向かって努力を惜しまず、成長し続けることに喜びを感じます。向上心の塊！',
    characteristics: ['高い目標意識', '継続的学習', '自己規律', '成長志向', 'ストイック'],
    advice: '素晴らしい向上心！でも時には自分を認めて休むことも大切だよ。完璧じゃなくていい！',
  },
  mid: {
    type: 'mid',
    title: 'バランス型改善者',
    emoji: '📈',
    level: '改善欲求 65%',
    description: '自己改善に興味があり、できる範囲で取り組むあなた。無理のないペースで成長を目指す現実的なアプローチができます。',
    characteristics: ['現実的', 'バランス感覚', '柔軟', '適度な向上心', '持続可能'],
    advice: 'いいバランス感覚！もう少しだけ背伸びしてみると、新しい自分に出会えるかも！',
  },
  low: {
    type: 'low',
    title: 'マイペース型',
    emoji: '🌿',
    level: '改善欲求 35%',
    description: '今の自分をある程度受け入れているあなた。無理に変わろうとせず、自然体で過ごすことを大切にしています。',
    characteristics: ['自己受容', 'のんびり', '今を大切に', 'プレッシャーに強い', '自然体'],
    advice: '自己受容は大切！でも小さな挑戦が新しい楽しみを見つけるきっかけになるかも？',
  },
  minimal: {
    type: 'minimal',
    title: '現状満足タイプ',
    emoji: '😌',
    level: '改善欲求 15%',
    description: '今の自分に満足しているあなた。変わる必要性を感じず、ありのままの自分を大切にしています。それも一つの生き方！',
    characteristics: ['自己肯定感高い', 'ストレスフリー', '現実主義', '穏やか', 'マイペース'],
    advice: '今の自分を大切にしつつ、時々新しいことにチャレンジしてみると世界が広がるよ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, mid: 0, low: 0, minimal: 0 };

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
