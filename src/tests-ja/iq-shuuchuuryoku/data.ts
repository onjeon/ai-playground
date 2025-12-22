// 集中力テスト
export const questions = [
  {
    id: 1,
    text: '次の文字列で「A」は何個ある？「ABCADEFAGAHIAJKALAM」',
    options: [
      { text: '7個', type: 'A' },
      { text: '6個', type: 'B' },
      { text: '8個', type: 'C' },
      { text: '5個', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '次の数字の中で3の倍数を全て見つけてください：2, 3, 5, 6, 7, 9, 11, 12, 14, 15。いくつある？',
    options: [
      { text: '5個', type: 'A' },
      { text: '4個', type: 'B' },
      { text: '6個', type: 'C' },
      { text: '3個', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '次の文の中で「の」は何回出てくる？「今日の朝の電車の中での出来事の話」',
    options: [
      { text: '5回', type: 'A' },
      { text: '4回', type: 'B' },
      { text: '6回', type: 'C' },
      { text: '3回', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '1から50まで数えて、7を含む数字と7の倍数を飛ばすと、35の次の数字は？',
    options: [
      { text: '36', type: 'A' },
      { text: '38', type: 'B' },
      { text: '37', type: 'C' },
      { text: '39', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '次の図形で、三角形は何個？「△○□△□○△△□○△」',
    options: [
      { text: '5個', type: 'A' },
      { text: '4個', type: 'B' },
      { text: '6個', type: 'C' },
      { text: '3個', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '次の単語の中で、2文字目が「ん」のものはいくつ？「りんご、さんま、てんき、まんが、きんこ、みかん」',
    options: [
      { text: '5個', type: 'A' },
      { text: '4個', type: 'B' },
      { text: '6個', type: 'C' },
      { text: '3個', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '次の計算を順番に行ってください：5+3-2×4÷2。答えは？',
    options: [
      { text: '4', type: 'A' },
      { text: '8', type: 'B' },
      { text: '12', type: 'C' },
      { text: '6', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '次のパターンで間違っているものはどれ？「AA BB CC DD EE FF GH II JJ」',
    options: [
      { text: 'GH', type: 'A' },
      { text: 'FF', type: 'B' },
      { text: 'II', type: 'C' },
      { text: 'EE', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '次の文で、漢字は何文字？「今日は天気が良いので公園で遊びます」',
    options: [
      { text: '7文字', type: 'A' },
      { text: '6文字', type: 'B' },
      { text: '8文字', type: 'C' },
      { text: '5文字', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '時計の秒針が12を指してから、45秒後に指す数字は？',
    options: [
      { text: '9', type: 'A' },
      { text: '8', type: 'B' },
      { text: '10', type: 'C' },
      { text: '7', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '次の色の中で「あ」で始まるものはいくつ？「赤、青、黄、緑、紫、藍、橙、茜」',
    options: [
      { text: '4個', type: 'A' },
      { text: '3個', type: 'B' },
      { text: '5個', type: 'C' },
      { text: '2個', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '次の数列で昇順に並んでいないものはどれ？「1,2,3」「4,5,6」「8,7,9」「10,11,12」',
    options: [
      { text: '8,7,9', type: 'A' },
      { text: '4,5,6', type: 'B' },
      { text: '10,11,12', type: 'C' },
      { text: '1,2,3', type: 'D' },
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
    title: '集中力の達人',
    emoji: '🎯',
    percentage: '集中力 95%',
    description: '驚異的な集中力の持ち主です！細部まで見落とさず、長時間の集中も苦になりません。どんな複雑な作業も正確にこなせます。',
    characteristics: ['持続的注意', '選択的注意', '正確性', '忍耐力', '観察力'],
    advice: 'この集中力を活かして、専門的なスキルを磨くと大きな成果が得られます。',
  },
  B: {
    type: 'B',
    title: '集中力上級者',
    emoji: '🔍',
    percentage: '集中力 80%',
    description: '高い集中力を持っています。細かい作業も丁寧にこなし、ミスも少ない実力者です。',
    characteristics: ['注意力', '正確性', '持続力', '観察力', '慎重さ'],
    advice: '定期的な休憩を取りながら作業すると、さらに効率が上がります。',
  },
  C: {
    type: 'C',
    title: '集中力学習者',
    emoji: '📖',
    percentage: '集中力 65%',
    description: '平均的な集中力を持っています。環境を整えることで、集中力をさらに高めることができます。',
    characteristics: ['基礎力', '成長意欲', '柔軟性', '適応力', '努力家'],
    advice: '集中しやすい環境作りと、ポモドーロテクニックを試してみましょう。',
  },
  D: {
    type: 'D',
    title: '集中力ビギナー',
    emoji: '🌱',
    percentage: '集中力 50%',
    description: '集中力はまだ発展途上ですが、訓練で必ず向上します。短い時間から始めて、徐々に集中時間を延ばしていきましょう。',
    characteristics: ['発展途上', '可能性', '創造的', '多角的', '直感的'],
    advice: '瞑想や深呼吸など、集中力を高める習慣を取り入れてみましょう。',
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
