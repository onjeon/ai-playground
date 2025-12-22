// 批判的思考力テスト
export const questions = [
  {
    id: 1,
    text: '「この商品を使った人の90%が効果を実感」という広告。この主張について正しいのは？',
    options: [
      { text: 'サンプル数や調査方法が不明なので判断できない', type: 'A' },
      { text: '効果がある証拠だ', type: 'C' },
      { text: '嘘に違いない', type: 'D' },
      { text: '買うべきだ', type: 'B' },
    ],
  },
  {
    id: 2,
    text: '「有名人Aがこの方法を推奨している」という情報。この情報の信頼性は？',
    options: [
      { text: '有名人の専門性と利害関係を確認する必要がある', type: 'A' },
      { text: '有名人が言うなら信頼できる', type: 'C' },
      { text: '有名人の意見は常に正しい', type: 'D' },
      { text: '宣伝だから信用できない', type: 'B' },
    ],
  },
  {
    id: 3,
    text: '「みんながやっているから正しい」という主張について、あなたの考えは？',
    options: [
      { text: '多数派が正しいとは限らない', type: 'A' },
      { text: '多数派は常に正しい', type: 'C' },
      { text: '流行に乗るべき', type: 'D' },
      { text: 'みんながやっているなら安心', type: 'B' },
    ],
  },
  {
    id: 4,
    text: '「AとBに相関がある」という研究結果。これは「AがBの原因」を意味する？',
    options: [
      { text: '相関は因果を意味しない', type: 'A' },
      { text: '相関があれば因果もある', type: 'C' },
      { text: '研究結果は常に正しい', type: 'D' },
      { text: '相関と因果は同じ意味', type: 'B' },
    ],
  },
  {
    id: 5,
    text: 'ニュース記事を読む時、最初に確認すべきことは？',
    options: [
      { text: '情報源と事実の裏付け', type: 'A' },
      { text: '見出しの印象', type: 'C' },
      { text: '記事の長さ', type: 'D' },
      { text: 'コメント欄の反応', type: 'B' },
    ],
  },
  {
    id: 6,
    text: '「例外なく全ての〜は〜だ」という主張について、あなたの反応は？',
    options: [
      { text: '反例がないか検討する', type: 'A' },
      { text: 'その通りだと思う', type: 'C' },
      { text: '絶対的な主張は信頼できる', type: 'D' },
      { text: '特に気にしない', type: 'B' },
    ],
  },
  {
    id: 7,
    text: '議論の中で「人格攻撃」が行われた時、どう考える？',
    options: [
      { text: '論点から外れた攻撃で、議論として不適切', type: 'A' },
      { text: '攻撃された人が間違っている証拠', type: 'C' },
      { text: '議論では普通のこと', type: 'D' },
      { text: '攻撃する側が正しい', type: 'B' },
    ],
  },
  {
    id: 8,
    text: '「Aをした後にBが起きた、だからAがBの原因だ」という推論は？',
    options: [
      { text: '前後関係だけでは因果関係は証明できない', type: 'A' },
      { text: '正しい推論だ', type: 'C' },
      { text: '時間順なので因果関係がある', type: 'D' },
      { text: 'おそらく正しい', type: 'B' },
    ],
  },
  {
    id: 9,
    text: '「専門家がこう言っている」という情報の扱い方は？',
    options: [
      { text: '専門家の専門分野と根拠を確認する', type: 'A' },
      { text: '専門家なら全て正しい', type: 'C' },
      { text: '専門家は信用できない', type: 'D' },
      { text: '専門家の言葉は絶対', type: 'B' },
    ],
  },
  {
    id: 10,
    text: '自分の意見と反対の情報に出会った時、どうする？',
    options: [
      { text: 'その情報の妥当性を検討する', type: 'A' },
      { text: '無視する', type: 'C' },
      { text: '自分の意見を変える', type: 'D' },
      { text: '相手を攻撃する', type: 'B' },
    ],
  },
  {
    id: 11,
    text: '「二者択一」の議論（AかBしかない）について、あなたの考えは？',
    options: [
      { text: '他の選択肢がないか検討する', type: 'A' },
      { text: '提示された選択肢から選ぶ', type: 'C' },
      { text: '二択なら決めやすい', type: 'D' },
      { text: '多数派の選択肢を選ぶ', type: 'B' },
    ],
  },
  {
    id: 12,
    text: 'SNSで「〜が炎上している」という情報を見た時、どうする？',
    options: [
      { text: '元の発言や文脈を確認する', type: 'A' },
      { text: '炎上しているなら悪いに違いない', type: 'C' },
      { text: 'みんなと同じ意見を言う', type: 'D' },
      { text: '関わらない', type: 'B' },
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
    title: '批判的思考の達人',
    emoji: '🧐',
    percentage: '批判的思考力 95%',
    description: '情報を鵜呑みにせず、論理的に検証する達人です！誤謬を見抜き、客観的な判断ができます。フェイクニュースに騙されません。',
    characteristics: ['論理的検証', '客観性', '懐疑心', '分析力', '独立思考'],
    advice: 'ジャーナリズム、学術研究、法律など批判的思考が求められる分野で大活躍できます。',
  },
  B: {
    type: 'B',
    title: '批判的思考上級者',
    emoji: '🔍',
    percentage: '批判的思考力 80%',
    description: '情報を批判的に見る目を持っています。明らかな誤りや誤謬を見抜き、冷静に判断できます。',
    characteristics: ['分析力', '客観性', '慎重さ', '論理性', '独立心'],
    advice: 'より多様な情報源に触れることで、批判的思考がさらに磨かれます。',
  },
  C: {
    type: 'C',
    title: '批判的思考学習者',
    emoji: '📖',
    percentage: '批判的思考力 65%',
    description: '基本的な批判的思考能力は持っています。情報の検証習慣を身につけることで、さらに向上できます。',
    characteristics: ['基礎力', '成長意欲', '素直', '協調性', '努力家'],
    advice: 'ニュースを読む時に「本当かな？」と考える習慣をつけましょう。',
  },
  D: {
    type: 'D',
    title: '批判的思考ビギナー',
    emoji: '🌱',
    percentage: '批判的思考力 50%',
    description: '批判的思考はまだ発展途上です。情報を疑う習慣を身につけることで、確実に向上します。',
    characteristics: ['発展途上', '可能性', '信頼的', '素直', '協調的'],
    advice: '「情報源は？」「根拠は？」と問いかける習慣から始めましょう。',
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
