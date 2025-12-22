// 数理論理力テスト
export const questions = [
  {
    id: 1,
    text: 'りんご3個とみかん2個で350円。りんご2個とみかん3個で300円。りんご1個の値段は？',
    options: [
      { text: '90円', type: 'A' },
      { text: '80円', type: 'B' },
      { text: '100円', type: 'C' },
      { text: '70円', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'A、B、Cの3人で100個のアメを分ける。AはBの2倍、CはBより10個多くもらった。Bの個数は？',
    options: [
      { text: '22個', type: 'B' },
      { text: '20個', type: 'C' },
      { text: '25個', type: 'D' },
      { text: '18個', type: 'A' },
    ],
  },
  {
    id: 3,
    text: '時速60kmで走る車が90kmの距離を走るのにかかる時間は？',
    options: [
      { text: '1時間30分', type: 'A' },
      { text: '1時間20分', type: 'B' },
      { text: '1時間45分', type: 'C' },
      { text: '2時間', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '20%引きで4000円の商品の元の値段は？',
    options: [
      { text: '5000円', type: 'A' },
      { text: '4800円', type: 'B' },
      { text: '4500円', type: 'C' },
      { text: '5500円', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '1から100までの整数のうち、3の倍数は何個？',
    options: [
      { text: '33個', type: 'A' },
      { text: '34個', type: 'B' },
      { text: '30個', type: 'C' },
      { text: '32個', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '父の年齢は息子の年齢の4倍。10年後には父は息子の2.5倍になる。現在の息子の年齢は？',
    options: [
      { text: '10歳', type: 'A' },
      { text: '8歳', type: 'B' },
      { text: '12歳', type: 'C' },
      { text: '15歳', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '3人で仕事をすると6日で終わる。2人だと何日かかる？',
    options: [
      { text: '9日', type: 'A' },
      { text: '8日', type: 'B' },
      { text: '10日', type: 'C' },
      { text: '12日', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '正方形の一辺を2倍にすると、面積は何倍になる？',
    options: [
      { text: '4倍', type: 'A' },
      { text: '2倍', type: 'B' },
      { text: '8倍', type: 'C' },
      { text: '6倍', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '500円を年利2%で1年間預けると、利息はいくら？',
    options: [
      { text: '10円', type: 'A' },
      { text: '20円', type: 'B' },
      { text: '5円', type: 'C' },
      { text: '15円', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '時計が1時を指している。短針と長針が作る角度は？',
    options: [
      { text: '30度', type: 'A' },
      { text: '45度', type: 'B' },
      { text: '60度', type: 'C' },
      { text: '15度', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '5人の平均点が70点。1人が抜けて4人の平均が72.5点になった。抜けた人の点数は？',
    options: [
      { text: '60点', type: 'A' },
      { text: '65点', type: 'B' },
      { text: '55点', type: 'C' },
      { text: '50点', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '時速4kmで歩くと20分遅刻、時速6kmで歩くと20分早く着く。家から学校までの距離は？',
    options: [
      { text: '4km', type: 'A' },
      { text: '3km', type: 'B' },
      { text: '5km', type: 'C' },
      { text: '6km', type: 'D' },
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
  A: {
    type: 'A',
    title: '数理論理の天才',
    emoji: '🎓',
    percentage: '数理論理力 95%',
    description: '複雑な数学的問題を論理的に解く天才的な能力を持っています！方程式や比率の問題も直感的に理解し、正確な答えを導き出せます。',
    characteristics: ['計算力', '論理的思考', '問題分析', '数学的センス', '正確性'],
    advice: 'エンジニアリング、データサイエンス、金融など数理を扱う分野で大活躍できます。',
  },
  B: {
    type: 'B',
    title: '数理論理上級者',
    emoji: '📊',
    percentage: '数理論理力 80%',
    description: '数学的な問題解決が得意で、複雑な計算も正確にこなせます。論理的なアプローチで問題に取り組む姿勢が素晴らしいです。',
    characteristics: ['分析力', '計算力', '論理性', '粘り強さ', '正確性'],
    advice: '応用問題に挑戦することで、さらに実力が向上します。',
  },
  C: {
    type: 'C',
    title: '数理論理学習者',
    emoji: '📈',
    percentage: '数理論理力 65%',
    description: '基本的な数理問題は解けますが、応用問題には少し苦戦することも。基礎をしっかり固めることで大きく成長できます。',
    characteristics: ['基礎力', '成長意欲', '努力家', '慎重', '素直'],
    advice: '基礎的な計算練習を積み重ねることで、応用力も自然と身につきます。',
  },
  D: {
    type: 'D',
    title: '数理論理ビギナー',
    emoji: '🌱',
    percentage: '数理論理力 50%',
    description: '数理的思考はまだ発展途上ですが、これは誰でも訓練で向上できる能力です。焦らず基礎から学んでいきましょう。',
    characteristics: ['発展途上', '可能性', '直感的', '創造的', '柔軟'],
    advice: '日常生活の中で数字を意識することから始めてみましょう。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

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
