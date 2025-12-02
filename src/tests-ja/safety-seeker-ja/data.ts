// 安定追求度診断
export const questions = [
  {
    id: 1,
    text: '仕事を選ぶ時に最も重視することは？',
    options: [
      { text: '安定した収入と雇用保障', type: 'high_safety' },
      { text: '成長機会とやりがい', type: 'moderate_safety' },
      { text: '挑戦と新しい経験', type: 'low_safety' },
      { text: '自由と柔軟性', type: 'adventurer' },
    ],
  },
  {
    id: 2,
    text: '貯金について',
    options: [
      { text: '毎月決まった額を必ず貯金', type: 'high_safety' },
      { text: 'ある程度は貯金している', type: 'moderate_safety' },
      { text: '余裕がある時に貯金', type: 'low_safety' },
      { text: '今を楽しむことを優先', type: 'adventurer' },
    ],
  },
  {
    id: 3,
    text: '保険について',
    options: [
      { text: '複数の保険に加入、万全', type: 'high_safety' },
      { text: '必要最低限は加入', type: 'moderate_safety' },
      { text: 'あまり考えていない', type: 'low_safety' },
      { text: '保険より今の体験に投資', type: 'adventurer' },
    ],
  },
  {
    id: 4,
    text: '住む場所を選ぶ基準は？',
    options: [
      { text: '治安と安全性', type: 'high_safety' },
      { text: '利便性と環境のバランス', type: 'moderate_safety' },
      { text: '好きな街や雰囲気', type: 'low_safety' },
      { text: '新しい場所への移住もOK', type: 'adventurer' },
    ],
  },
  {
    id: 5,
    text: '将来の計画について',
    options: [
      { text: '詳細な人生計画がある', type: 'high_safety' },
      { text: '大まかな方向性は決めている', type: 'moderate_safety' },
      { text: '漠然と考えている', type: 'low_safety' },
      { text: '計画より流れに任せる', type: 'adventurer' },
    ],
  },
  {
    id: 6,
    text: '健康管理について',
    options: [
      { text: '定期検診、運動、食事管理を徹底', type: 'high_safety' },
      { text: 'ある程度気をつけている', type: 'moderate_safety' },
      { text: '時々意識する', type: 'low_safety' },
      { text: '自由に楽しみたい', type: 'adventurer' },
    ],
  },
  {
    id: 7,
    text: 'リスクのある投資について',
    options: [
      { text: '元本保証の安全なものだけ', type: 'high_safety' },
      { text: '分散投資でリスク管理', type: 'moderate_safety' },
      { text: '少しはリスクを取れる', type: 'low_safety' },
      { text: 'ハイリスク・ハイリターンも魅力', type: 'adventurer' },
    ],
  },
  {
    id: 8,
    text: '転職について',
    options: [
      { text: '今の仕事を続けたい', type: 'high_safety' },
      { text: '良い機会があれば検討', type: 'moderate_safety' },
      { text: '常にキャリアアップを意識', type: 'low_safety' },
      { text: '新しい挑戦は歓迎', type: 'adventurer' },
    ],
  },
  {
    id: 9,
    text: '災害への備えは？',
    options: [
      { text: '防災グッズ完備、避難経路確認済み', type: 'high_safety' },
      { text: 'ある程度は準備している', type: 'moderate_safety' },
      { text: '最低限', type: 'low_safety' },
      { text: 'あまり考えていない', type: 'adventurer' },
    ],
  },
  {
    id: 10,
    text: '人生で最も大切にしていることは？',
    options: [
      { text: '安心・安全な生活', type: 'high_safety' },
      { text: '家族や大切な人との安定', type: 'moderate_safety' },
      { text: '自己成長と挑戦', type: 'low_safety' },
      { text: '自由と冒険', type: 'adventurer' },
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
  tips: string[];
}> = {
  high_safety: {
    type: 'high_safety',
    title: '安定第一タイプ',
    emoji: '🏠🔒',
    level: '安定追求度：★★★★★',
    description: '安心・安全・安定を最も大切にするタイプ。計画的に将来に備え、リスクを最小限に抑えた堅実な人生を歩みます。家族や大切な人を守る力があります。',
    characteristics: ['安定志向', '計画的', 'リスク回避', '堅実'],
    tips: ['安定は大きな強み', 'たまには小さな挑戦も', '安心の中で楽しみを見つけて'],
  },
  moderate_safety: {
    type: 'moderate_safety',
    title: 'バランス型安定派',
    emoji: '⚖️🌱',
    level: '安定追求度：★★★★☆',
    description: '安定を重視しながらも、適度な挑戦も大切にするタイプ。リスク管理をしながら成長も追求する、バランスの取れた考え方の持ち主。',
    characteristics: ['バランス重視', '適度なリスクテイク', '成長も意識', '柔軟性あり'],
    tips: ['バランスの良さは強み', '自分のペースで挑戦を', '安定と成長の両立を'],
  },
  low_safety: {
    type: 'low_safety',
    title: '成長志向タイプ',
    emoji: '🚀📈',
    level: '安定追求度：★★★☆☆',
    description: '安定よりも成長や挑戦を優先するタイプ。現状維持より変化を求め、キャリアアップや自己成長に積極的。リスクを取って前に進む勇気があります。',
    characteristics: ['成長志向', '挑戦好き', '変化を求める', '前向き'],
    tips: ['その挑戦心は強み', '最低限の安全網は確保して', '長期的な視点も持って'],
  },
  adventurer: {
    type: 'adventurer',
    title: '自由追求タイプ',
    emoji: '🌍✨',
    level: '安定追求度：★★☆☆☆',
    description: '安定より自由と冒険を選ぶタイプ。計画に縛られず、今を楽しみながら人生を切り開きます。型にはまらない生き方で、独自の道を歩みます。',
    characteristics: ['自由を愛する', '冒険心旺盛', '型にはまらない', '今を生きる'],
    tips: ['自由は素晴らしい価値観', '将来への備えも少しは', '経験を財産に'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high_safety: 0, moderate_safety: 0, low_safety: 0, adventurer: 0 };

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
