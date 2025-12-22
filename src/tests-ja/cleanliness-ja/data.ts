// 清潔感診断 - あなたの清潔感レベルは？
export const questions = [
  {
    id: 1,
    text: '朝起きてまずすることは？',
    options: [
      { text: 'すぐシャワーを浴びる', type: 'obsessive' },
      { text: '顔を洗って歯を磨く', type: 'clean' },
      { text: 'とりあえずスマホをチェック', type: 'moderate' },
      { text: 'ギリギリまで寝ている', type: 'relaxed' },
    ],
  },
  {
    id: 2,
    text: '外出先から帰宅したらまず？',
    options: [
      { text: '玄関で服を脱いで、すぐお風呂', type: 'obsessive' },
      { text: '手洗い・うがいをしっかり', type: 'clean' },
      { text: 'カバンを置いてひと息', type: 'moderate' },
      { text: 'そのままソファでくつろぐ', type: 'relaxed' },
    ],
  },
  {
    id: 3,
    text: 'お風呂に入る頻度は？',
    options: [
      { text: '朝晩2回は入りたい', type: 'obsessive' },
      { text: '毎日必ず1回', type: 'clean' },
      { text: '基本毎日、たまにパス', type: 'moderate' },
      { text: '必要を感じたときに', type: 'relaxed' },
    ],
  },
  {
    id: 4,
    text: 'シーツや枕カバーの洗濯頻度は？',
    options: [
      { text: '週に2〜3回', type: 'obsessive' },
      { text: '週に1回', type: 'clean' },
      { text: '2週間に1回くらい', type: 'moderate' },
      { text: '気になったときに', type: 'relaxed' },
    ],
  },
  {
    id: 5,
    text: 'トイレの掃除、どれくらいの頻度？',
    options: [
      { text: '使うたびにサッと', type: 'obsessive' },
      { text: '週に2〜3回', type: 'clean' },
      { text: '週に1回', type: 'moderate' },
      { text: '汚れが目立ったら', type: 'relaxed' },
    ],
  },
  {
    id: 6,
    text: '他人の家に行ったとき、どこが気になる？',
    options: [
      { text: 'トイレ、キッチン、床…全部チェック', type: 'obsessive' },
      { text: 'トイレの清潔さは気になる', type: 'clean' },
      { text: '特に気にしない', type: 'moderate' },
      { text: '何も気にならない', type: 'relaxed' },
    ],
  },
  {
    id: 7,
    text: 'スマホの画面、どれくらい拭く？',
    options: [
      { text: '毎日アルコールで消毒', type: 'obsessive' },
      { text: '汚れが気になったら拭く', type: 'clean' },
      { text: 'たまに服で拭く', type: 'moderate' },
      { text: 'ほぼ拭いたことない', type: 'relaxed' },
    ],
  },
  {
    id: 8,
    text: '外食で箸やスプーンを使う前に？',
    options: [
      { text: '除菌シートで拭く', type: 'obsessive' },
      { text: 'おしぼりで軽く拭く', type: 'clean' },
      { text: '特に何もしない', type: 'moderate' },
      { text: '考えたこともない', type: 'relaxed' },
    ],
  },
  {
    id: 9,
    text: 'つり革や手すり、素手で触れる？',
    options: [
      { text: '絶対無理、ハンカチ越し', type: 'obsessive' },
      { text: 'できれば触りたくない', type: 'clean' },
      { text: '必要なら普通に触る', type: 'moderate' },
      { text: '全然気にしない', type: 'relaxed' },
    ],
  },
  {
    id: 10,
    text: '清潔さについて、一番共感するのは？',
    options: [
      { text: '清潔は健康と信頼の基本', type: 'obsessive' },
      { text: '清潔感は大事なマナー', type: 'clean' },
      { text: 'ほどほどでいい', type: 'moderate' },
      { text: '神経質になりすぎるのも良くない', type: 'relaxed' },
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
  obsessive: {
    type: 'obsessive',
    title: '潔癖極めタイプ',
    emoji: '✨',
    percentage: '清潔感 100%',
    description: '清潔さにこだわりが強いタイプ。細菌やウイルスへの意識が高く、常に清潔な環境を保ちたいと考えています。コロナ禍でその習慣が認められた人かも！',
    characteristics: ['衛生管理徹底', '細部へのこだわり', '自己管理能力', '健康意識が高い', '几帳面'],
    advice: '清潔は大事。でもストレスになりすぎないように。たまには「まあいっか」も必要だよ。',
  },
  clean: {
    type: 'clean',
    title: '清潔感キープタイプ',
    emoji: '🧼',
    percentage: '清潔感 80%',
    description: 'バランスの取れた清潔感の持ち主。社会人として必要な清潔習慣をしっかり身につけています。周りからも清潔感があると思われているはず！',
    characteristics: ['バランス感覚', '社会性', '清潔習慣', '好印象', '常識的'],
    advice: '理想的な清潔感！その姿勢が信頼感につながっています。これからも続けてね。',
  },
  moderate: {
    type: 'moderate',
    title: 'ほどほど清潔タイプ',
    emoji: '😌',
    percentage: '清潔感 55%',
    description: '清潔さよりも他のことを優先しがちなタイプ。最低限のケアはしているけど、あまり神経質にはならない。自然体で過ごしたい派！',
    characteristics: ['自然体', 'ストレスフリー', '効率重視', 'マイペース', '柔軟'],
    advice: '最低限のケアはOK。でも人と会う前は少しだけ意識すると、印象がグッと良くなるよ。',
  },
  relaxed: {
    type: 'relaxed',
    title: 'おおらか無頓着タイプ',
    emoji: '🌿',
    percentage: '清潔感 30%',
    description: '清潔さにあまりこだわらないタイプ。細かいことを気にしない大らかさがありますが、社会生活では少し意識した方がいい場面もあるかも。',
    characteristics: ['おおらか', '気にしない', '免疫力強め？', 'ストレス耐性', '自由人'],
    advice: '大らかさは長所。でも社会的な清潔感は信頼に直結するから、少しだけ意識してみて。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { obsessive: 0, clean: 0, moderate: 0, relaxed: 0 };

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
