// 老後の夢診断
export const questions = [
  {
    id: 1,
    text: '理想の老後の過ごし方は？',
    options: [
      { text: '世界中を旅する', type: 'adventurer' },
      { text: '趣味に没頭する', type: 'hobbyist' },
      { text: '家族と穏やかに過ごす', type: 'family' },
      { text: '社会貢献やボランティア', type: 'contributor' },
    ],
  },
  {
    id: 2,
    text: '老後に住みたい場所は？',
    options: [
      { text: '海外やリゾート地', type: 'adventurer' },
      { text: '趣味を楽しめる環境', type: 'hobbyist' },
      { text: '家族の近く', type: 'family' },
      { text: '地域コミュニティのある場所', type: 'contributor' },
    ],
  },
  {
    id: 3,
    text: '老後の時間の使い方は？',
    options: [
      { text: '新しい挑戦をたくさん', type: 'adventurer' },
      { text: '好きなことをとことん', type: 'hobbyist' },
      { text: '孫や家族との時間', type: 'family' },
      { text: '人の役に立つ活動', type: 'contributor' },
    ],
  },
  {
    id: 4,
    text: '老後に学びたいことは？',
    options: [
      { text: '語学や冒険スキル', type: 'adventurer' },
      { text: '芸術や専門知識', type: 'hobbyist' },
      { text: '料理や健康管理', type: 'family' },
      { text: '福祉や教育', type: 'contributor' },
    ],
  },
  {
    id: 5,
    text: '老後の交友関係は？',
    options: [
      { text: '世界中に友達を作りたい', type: 'adventurer' },
      { text: '趣味仲間と過ごしたい', type: 'hobbyist' },
      { text: '家族中心', type: 'family' },
      { text: '地域の人々と交流', type: 'contributor' },
    ],
  },
  {
    id: 6,
    text: '老後にお金を使いたいことは？',
    options: [
      { text: '旅行や体験', type: 'adventurer' },
      { text: '趣味の道具や材料', type: 'hobbyist' },
      { text: '家族へのプレゼント', type: 'family' },
      { text: '寄付や社会貢献', type: 'contributor' },
    ],
  },
  {
    id: 7,
    text: '老後の健康管理は？',
    options: [
      { text: 'アクティブに動き続ける', type: 'adventurer' },
      { text: '趣味で心身を健康に', type: 'hobbyist' },
      { text: '家族と一緒に健康管理', type: 'family' },
      { text: '地域活動で元気を維持', type: 'contributor' },
    ],
  },
  {
    id: 8,
    text: '老後の生きがいは？',
    options: [
      { text: '新しい発見と冒険', type: 'adventurer' },
      { text: '作品や成果を残すこと', type: 'hobbyist' },
      { text: '家族の幸せ', type: 'family' },
      { text: '社会への貢献', type: 'contributor' },
    ],
  },
  {
    id: 9,
    text: '老後に後悔したくないことは？',
    options: [
      { text: '行きたい場所に行かなかったこと', type: 'adventurer' },
      { text: 'やりたいことをやらなかったこと', type: 'hobbyist' },
      { text: '家族との時間を大切にしなかったこと', type: 'family' },
      { text: '人の役に立てなかったこと', type: 'contributor' },
    ],
  },
  {
    id: 10,
    text: '理想の老後を一言で？',
    options: [
      { text: '冒険の続き', type: 'adventurer' },
      { text: '自分らしく', type: 'hobbyist' },
      { text: '家族と共に', type: 'family' },
      { text: '社会と共に', type: 'contributor' },
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
  retirementTip: string;
}> = {
  adventurer: {
    type: 'adventurer',
    title: '冒険者タイプ',
    emoji: '🌍',
    percentage: '冒険心 95%',
    description: '退職後も世界を駆け巡りたい冒険者！新しい場所、新しい経験を求めて、いくつになっても挑戦し続けます。',
    characteristics: ['好奇心', '行動力', 'チャレンジ精神', '自由', 'エネルギッシュ'],
    retirementTip: '健康管理をしながら、たくさんの冒険を',
  },
  hobbyist: {
    type: 'hobbyist',
    title: '趣味人タイプ',
    emoji: '🎨',
    percentage: '趣味充実度 90%',
    description: '好きなことにとことん没頭したい趣味人！時間を忘れて創作や収集に励む、充実した老後を夢見ています。',
    characteristics: ['こだわり', '集中力', '創造性', '自己実現', '専門性'],
    retirementTip: '趣味仲間との交流も楽しんで',
  },
  family: {
    type: 'family',
    title: '家族団らんタイプ',
    emoji: '👨‍👩‍👧‍👦',
    percentage: '家族愛 88%',
    description: '家族との穏やかな時間を大切にしたいタイプ。孫の成長を見守り、家族の絆を深める老後が理想です。',
    characteristics: ['愛情深い', '穏やか', '家庭的', 'サポート', '安定'],
    retirementTip: '自分の時間も大切にしながら',
  },
  contributor: {
    type: 'contributor',
    title: '社会貢献タイプ',
    emoji: '🤝',
    percentage: '貢献意欲 85%',
    description: '経験を活かして社会に貢献したいタイプ。ボランティアや地域活動で、いくつになっても人の役に立ちたいと考えています。',
    characteristics: ['奉仕精神', '責任感', 'リーダーシップ', '使命感', '地域愛'],
    retirementTip: '無理のない範囲で継続的な活動を',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { adventurer: 0, hobbyist: 0, family: 0, contributor: 0 };

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
