// 伝統維持度診断
export const questions = [
  {
    id: 1,
    text: '家族の伝統行事について',
    options: [
      { text: '必ず守る、大切にしている', type: 'keeper' },
      { text: 'できる限り続けたい', type: 'respecter' },
      { text: '状況に応じて', type: 'flexible' },
      { text: 'あまり気にしない', type: 'progressive' },
    ],
  },
  {
    id: 2,
    text: 'お正月やお盆の過ごし方は？',
    options: [
      { text: '伝統的な形式を守る', type: 'keeper' },
      { text: '基本は伝統的に', type: 'respecter' },
      { text: '現代風にアレンジ', type: 'flexible' },
      { text: '特にこだわらない', type: 'progressive' },
    ],
  },
  {
    id: 3,
    text: '古いものと新しいものなら？',
    options: [
      { text: '古いものに価値を感じる', type: 'keeper' },
      { text: '古いものも大切にしたい', type: 'respecter' },
      { text: 'どちらも良さがある', type: 'flexible' },
      { text: '新しいものが好き', type: 'progressive' },
    ],
  },
  {
    id: 4,
    text: '伝統工芸品や古い技術について',
    options: [
      { text: '絶対に守るべき', type: 'keeper' },
      { text: '大切に残してほしい', type: 'respecter' },
      { text: '時代に合わせて変化も', type: 'flexible' },
      { text: '新しい技術でいい', type: 'progressive' },
    ],
  },
  {
    id: 5,
    text: '昔からのしきたりやマナーは？',
    options: [
      { text: '大切に守りたい', type: 'keeper' },
      { text: '基本は尊重する', type: 'respecter' },
      { text: '必要なものだけ', type: 'flexible' },
      { text: '時代に合わせて変えるべき', type: 'progressive' },
    ],
  },
  {
    id: 6,
    text: '地元のお祭りや行事には？',
    options: [
      { text: '積極的に参加、守りたい', type: 'keeper' },
      { text: 'できれば参加したい', type: 'respecter' },
      { text: '興味があれば', type: 'flexible' },
      { text: 'あまり関心がない', type: 'progressive' },
    ],
  },
  {
    id: 7,
    text: '親から受け継いだものについて',
    options: [
      { text: '大切に守り、次世代に伝えたい', type: 'keeper' },
      { text: '感謝して受け継ぐ', type: 'respecter' },
      { text: '自分なりにアレンジ', type: 'flexible' },
      { text: '自分の道を行く', type: 'progressive' },
    ],
  },
  {
    id: 8,
    text: '伝統的な料理と新しい料理なら？',
    options: [
      { text: '伝統的な味を守りたい', type: 'keeper' },
      { text: '伝統も新しいものも', type: 'respecter' },
      { text: '新しい味も試したい', type: 'flexible' },
      { text: '新しい料理が好き', type: 'progressive' },
    ],
  },
  {
    id: 9,
    text: '「昔は良かった」という言葉について',
    options: [
      { text: 'その通りだと思うことが多い', type: 'keeper' },
      { text: '良い面もあった', type: 'respecter' },
      { text: '今の良さもある', type: 'flexible' },
      { text: '今の方がいい', type: 'progressive' },
    ],
  },
  {
    id: 10,
    text: '伝統と革新、どちらが大切？',
    options: [
      { text: '伝統を守ることが基盤', type: 'keeper' },
      { text: '伝統をベースに発展', type: 'respecter' },
      { text: 'バランスが大切', type: 'flexible' },
      { text: '革新で進化すべき', type: 'progressive' },
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
  keeper: {
    type: 'keeper',
    title: '伝統の守護者',
    emoji: '🏯🌸',
    level: '伝統維持度：★★★★★',
    description: '伝統を深く大切にし、守り続けるタイプ。古き良きものの価値を理解し、次世代に伝えようとする使命感があります。文化や習慣の継承者として大切な存在。',
    characteristics: ['伝統を守る', '文化を大切に', '継承意識が高い', '歴史を尊重'],
    tips: ['伝統を守る姿勢は貴重', '新しい良さも取り入れてみて', '若い世代に伝える工夫を'],
  },
  respecter: {
    type: 'respecter',
    title: '伝統尊重派',
    emoji: '🎋✨',
    level: '伝統維持度：★★★★☆',
    description: '伝統を尊重しながら現代にも適応するタイプ。基本は伝統を大切にしつつ、必要に応じて柔軟に対応できます。バランスの取れた価値観の持ち主。',
    characteristics: ['伝統を尊重', 'バランス感覚', '柔軟性もある', '感謝の心'],
    tips: ['伝統と現代の架け橋に', '良いバランスを保って', '伝統の良さを伝えて'],
  },
  flexible: {
    type: 'flexible',
    title: 'バランス型',
    emoji: '🌿⚖️',
    level: '伝統維持度：★★★☆☆',
    description: '伝統と新しいもののバランスを取るタイプ。状況に応じて伝統を取り入れたり、新しい方法を選んだりと柔軟に対応。どちらの良さも理解しています。',
    characteristics: ['バランス重視', '状況対応型', '柔軟な考え方', 'どちらも尊重'],
    tips: ['柔軟さは強み', '時には伝統の深さを味わって', '自分なりの価値観を大切に'],
  },
  progressive: {
    type: 'progressive',
    title: '革新志向タイプ',
    emoji: '🚀💡',
    level: '伝統維持度：★★☆☆☆',
    description: '新しいものや変化を好むタイプ。伝統にとらわれず、より良い方法を追求します。革新的なアイデアで時代を切り開く力があります。',
    characteristics: ['新しいもの好き', '革新的', '変化を求める', '未来志向'],
    tips: ['革新の力は大切', '伝統の知恵も時には参考に', '先人の経験から学ぶことも'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { keeper: 0, respecter: 0, flexible: 0, progressive: 0 };

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
