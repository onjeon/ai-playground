// 集中持続時間診断
export const questions = [
  {
    id: 1,
    text: '一つのタスクに集中できる時間は？',
    options: [
      { text: '2時間以上', type: 'marathon' },
      { text: '1〜2時間', type: 'long' },
      { text: '30分〜1時間', type: 'medium' },
      { text: '30分未満', type: 'sprint' },
    ],
  },
  {
    id: 2,
    text: '集中が途切れる主な原因は？',
    options: [
      { text: 'めったに途切れない', type: 'marathon' },
      { text: '自然な休憩タイミング', type: 'long' },
      { text: '通知や気になることが', type: 'medium' },
      { text: 'すぐに他のことが気になる', type: 'sprint' },
    ],
  },
  {
    id: 3,
    text: 'ポモドーロテクニック（25分集中+5分休憩）について',
    options: [
      { text: '25分では短すぎる', type: 'marathon' },
      { text: 'ちょうど良いかも', type: 'long' },
      { text: '自分に合っていそう', type: 'medium' },
      { text: '25分も集中が持たないかも', type: 'sprint' },
    ],
  },
  {
    id: 4,
    text: '本を読む時の集中力は？',
    options: [
      { text: '何時間でも読める', type: 'marathon' },
      { text: '1〜2時間は集中できる', type: 'long' },
      { text: '30分くらいで休憩したくなる', type: 'medium' },
      { text: 'すぐに他のことが気になる', type: 'sprint' },
    ],
  },
  {
    id: 5,
    text: '映画を見ている時は？',
    options: [
      { text: '最後まで集中できる', type: 'marathon' },
      { text: 'だいたい集中できる', type: 'long' },
      { text: '時々スマホを見たくなる', type: 'medium' },
      { text: '長い映画は辛い', type: 'sprint' },
    ],
  },
  {
    id: 6,
    text: '深い思考や分析が必要な作業は？',
    options: [
      { text: '長時間没頭できる', type: 'marathon' },
      { text: '区切りながらできる', type: 'long' },
      { text: '適度に休憩が必要', type: 'medium' },
      { text: '短時間で区切りたい', type: 'sprint' },
    ],
  },
  {
    id: 7,
    text: 'フロー状態（没頭状態）に入ることは？',
    options: [
      { text: 'よくある、何時間でも没頭', type: 'marathon' },
      { text: '時々入る', type: 'long' },
      { text: 'たまにある', type: 'medium' },
      { text: 'あまりない', type: 'sprint' },
    ],
  },
  {
    id: 8,
    text: 'マルチタスクについて',
    options: [
      { text: '一つに集中する方が好き', type: 'marathon' },
      { text: 'なるべく一つに集中', type: 'long' },
      { text: '切り替えながらやることも', type: 'medium' },
      { text: 'いくつかを並行してやりがち', type: 'sprint' },
    ],
  },
  {
    id: 9,
    text: '仕事中の休憩頻度は？',
    options: [
      { text: '2時間以上休憩なしでも平気', type: 'marathon' },
      { text: '1〜2時間に1回', type: 'long' },
      { text: '30分〜1時間に1回', type: 'medium' },
      { text: '頻繁に小休憩を取る', type: 'sprint' },
    ],
  },
  {
    id: 10,
    text: '理想的な作業スタイルは？',
    options: [
      { text: '長時間集中して一気に終わらせる', type: 'marathon' },
      { text: 'まとまった時間で区切りながら', type: 'long' },
      { text: '適度な休憩を挟みながら', type: 'medium' },
      { text: '短時間の集中を繰り返す', type: 'sprint' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  duration: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  marathon: {
    type: 'marathon',
    title: 'マラソン集中タイプ',
    emoji: '🏃‍♂️💨',
    duration: '集中力：★★★★★（2時間以上）',
    description: '驚異的な集中力の持ち主！一度集中すると何時間でも没頭できます。深い思考や複雑な作業に向いており、フロー状態に入りやすいタイプです。',
    characteristics: ['長時間集中できる', 'フロー状態に入りやすい', '一つに没頭する', '中断を嫌う'],
    tips: ['この集中力は大きな強み', '休憩も意識的に取って', '重要なタスクにこの力を使って'],
  },
  long: {
    type: 'long',
    title: 'ロング集中タイプ',
    emoji: '⏱️✨',
    duration: '集中力：★★★★☆（1〜2時間）',
    description: '1〜2時間の集中が得意なタイプ。適度な区切りを入れながら効率的に作業を進められます。バランスの取れた集中力の持ち主です。',
    characteristics: ['1〜2時間集中できる', '区切りをつけられる', 'バランスが良い', '計画的に作業'],
    tips: ['90分サイクルを試してみて', '区切りで小さな達成感を', 'タイマーを活用して'],
  },
  medium: {
    type: 'medium',
    title: 'ミディアム集中タイプ',
    emoji: '⏰🎯',
    duration: '集中力：★★★☆☆（30分〜1時間）',
    description: '30分〜1時間程度の集中が得意なタイプ。ポモドーロテクニックなど、短い集中と休憩を繰り返す方法が向いています。多くの人がこのタイプ！',
    characteristics: ['適度な休憩が必要', 'ポモドーロ向き', '切り替えが上手', '柔軟性がある'],
    tips: ['ポモドーロテクニックを試して', 'タスクを小分けにして', '休憩をしっかり取ろう'],
  },
  sprint: {
    type: 'sprint',
    title: 'スプリント集中タイプ',
    emoji: '⚡🏃',
    duration: '集中力：★★☆☆☆（30分未満）',
    description: '短時間の集中を得意とするタイプ。頻繁に休憩を取りながら、短いスプリントで作業を進めるスタイルが合っています。瞬発力を活かして！',
    characteristics: ['短時間集中型', '切り替えが早い', '多様なタスクに対応', '瞬発力がある'],
    tips: ['タスクを細かく分割して', '10〜15分の集中を繰り返して', '達成感を細かく得よう'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { marathon: 0, long: 0, medium: 0, sprint: 0 };

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
