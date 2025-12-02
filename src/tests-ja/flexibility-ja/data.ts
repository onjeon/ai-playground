// 柔軟性度診断
export const questions = [
  {
    id: 1,
    text: '予定が急に変わった時は？',
    options: [
      { text: '全く問題ない、むしろ楽しい', type: 'very_flexible' },
      { text: '柔軟に対応できる', type: 'flexible' },
      { text: '少し困るけど対応', type: 'moderate' },
      { text: '計画通りにしたい', type: 'rigid' },
    ],
  },
  {
    id: 2,
    text: '異なる意見を聞いた時は？',
    options: [
      { text: '積極的に取り入れる', type: 'very_flexible' },
      { text: '良い点は受け入れる', type: 'flexible' },
      { text: '参考にする', type: 'moderate' },
      { text: '自分の意見を通す', type: 'rigid' },
    ],
  },
  {
    id: 3,
    text: '新しい環境への適応は？',
    options: [
      { text: 'すぐに馴染める', type: 'very_flexible' },
      { text: '比較的早く適応', type: 'flexible' },
      { text: '時間がかかる', type: 'moderate' },
      { text: 'なかなか馴染めない', type: 'rigid' },
    ],
  },
  {
    id: 4,
    text: 'ルールや規則について',
    options: [
      { text: '状況に応じて柔軟に', type: 'very_flexible' },
      { text: '合理的な範囲で守る', type: 'flexible' },
      { text: '基本的には守る', type: 'moderate' },
      { text: '厳格に守るべき', type: 'rigid' },
    ],
  },
  {
    id: 5,
    text: '仕事のやり方を変えることは？',
    options: [
      { text: '常に改善を求める', type: 'very_flexible' },
      { text: '良い方法があれば変える', type: 'flexible' },
      { text: '必要なら変えられる', type: 'moderate' },
      { text: '慣れた方法がいい', type: 'rigid' },
    ],
  },
  {
    id: 6,
    text: '妥協することについて',
    options: [
      { text: '必要なら積極的に', type: 'very_flexible' },
      { text: 'Win-Winを探す', type: 'flexible' },
      { text: '状況次第', type: 'moderate' },
      { text: '譲りたくない', type: 'rigid' },
    ],
  },
  {
    id: 7,
    text: '複数の選択肢がある時は？',
    options: [
      { text: 'どれでもOK、楽しめる', type: 'very_flexible' },
      { text: '柔軟に選べる', type: 'flexible' },
      { text: 'じっくり考える', type: 'moderate' },
      { text: '最善の一つを選びたい', type: 'rigid' },
    ],
  },
  {
    id: 8,
    text: '失敗した時の対応は？',
    options: [
      { text: 'すぐに方向転換', type: 'very_flexible' },
      { text: '柔軟にアプローチを変える', type: 'flexible' },
      { text: '原因を分析してから', type: 'moderate' },
      { text: '同じ方法で再挑戦', type: 'rigid' },
    ],
  },
  {
    id: 9,
    text: '異なる文化や価値観について',
    options: [
      { text: '積極的に受け入れる', type: 'very_flexible' },
      { text: '尊重し理解しようとする', type: 'flexible' },
      { text: '受け入れるのに時間がかかる', type: 'moderate' },
      { text: '自分の価値観を大切に', type: 'rigid' },
    ],
  },
  {
    id: 10,
    text: '「柔軟性」という言葉を聞いてどう思う？',
    options: [
      { text: '大切な能力、常に意識', type: 'very_flexible' },
      { text: '重要だと思う', type: 'flexible' },
      { text: '程々に必要', type: 'moderate' },
      { text: '一貫性も大切', type: 'rigid' },
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
  very_flexible: {
    type: 'very_flexible',
    title: '超柔軟タイプ',
    emoji: '🌊✨',
    level: '柔軟性：★★★★★',
    description: '水のように柔軟なタイプ！どんな状況にも適応し、変化を楽しめます。異なる意見や環境にオープンで、人間関係もスムーズに築けます。',
    characteristics: ['適応力が高い', 'オープンマインド', '変化を楽しむ', '寛容'],
    tips: ['柔軟性は大きな強み', '自分の軸も大切に', '時には一貫性も必要'],
  },
  flexible: {
    type: 'flexible',
    title: '柔軟タイプ',
    emoji: '🌿💚',
    level: '柔軟性：★★★★☆',
    description: '柔軟に対応できるタイプ。変化を受け入れつつ、自分の考えも持っています。バランスの取れた適応力で、様々な場面で活躍できます。',
    characteristics: ['バランスが良い', '適応力がある', '柔軟な思考', '協調性'],
    tips: ['理想的な柔軟性', '自分の強みを活かして', '様々な場面で活躍を'],
  },
  moderate: {
    type: 'moderate',
    title: 'バランス型',
    emoji: '⚖️🌱',
    level: '柔軟性：★★★☆☆',
    description: '柔軟性と一貫性のバランスを取るタイプ。必要に応じて対応を変えられますが、基本的には自分のスタイルを持っています。堅実で信頼できる存在。',
    characteristics: ['バランス重視', '堅実', '慎重', '一貫性もある'],
    tips: ['バランスは強み', 'もう少し柔軟になっても大丈夫', '新しいことにも挑戦を'],
  },
  rigid: {
    type: 'rigid',
    title: '一貫性重視タイプ',
    emoji: '🏔️💪',
    level: '柔軟性：★★☆☆☆',
    description: '自分の考えや方法を大切にするタイプ。一貫性があり、ブレない強さを持っています。信念を持って行動し、周りからの信頼も厚いです。',
    characteristics: ['一貫性がある', '信念を持つ', 'ブレない', '芯が強い'],
    tips: ['一貫性は信頼の源', '時には柔軟さも', '異なる視点も取り入れて'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { very_flexible: 0, flexible: 0, moderate: 0, rigid: 0 };

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
