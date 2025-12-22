// 流動性知能テスト
export const questions = [
  {
    id: 1,
    text: '初めて見るゲームのルールを覚えるのにかかる時間は？',
    options: [
      { text: '数分で理解できる', type: 'A' },
      { text: '何度かやれば理解できる', type: 'B' },
      { text: '説明を何度も聞く必要がある', type: 'C' },
      { text: 'なかなか覚えられない', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '次の図形の規則性は？ △(1) → □(4) → ⬠(5) → ？',
    options: [
      { text: '⬡(6)：辺の数が増える', type: 'A' },
      { text: '△(3)', type: 'B' },
      { text: '○(0)', type: 'C' },
      { text: 'わからない', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '新しい問題に直面した時、どうする？',
    options: [
      { text: '様々なアプローチを試してみる', type: 'A' },
      { text: '過去の経験から解決策を探す', type: 'B' },
      { text: '誰かに教えてもらう', type: 'C' },
      { text: '諦める', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '完全に新しい分野を学ぶ時、あなたは？',
    options: [
      { text: '構造や原理を自分で発見しようとする', type: 'A' },
      { text: 'テキスト通りに学ぶ', type: 'B' },
      { text: '人に教えてもらう', type: 'C' },
      { text: '興味がない分野は学ばない', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '「○●○●」の次のパターンは「●●○○」。では「△□△□」の次は？',
    options: [
      { text: '□□△△', type: 'A' },
      { text: '△△□□', type: 'B' },
      { text: '△□△□', type: 'C' },
      { text: 'わからない', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '予期せぬ変化が起きた時の対応は？',
    options: [
      { text: '素早く状況を分析し、新しい方法を考える', type: 'A' },
      { text: '落ち着いて対処する', type: 'B' },
      { text: '誰かの指示を待つ', type: 'C' },
      { text: '混乱する', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '異なる分野の知識を組み合わせて問題を解くことは？',
    options: [
      { text: 'よくやる、得意だ', type: 'A' },
      { text: '時々やる', type: 'B' },
      { text: 'あまりやらない', type: 'C' },
      { text: 'できない', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'A→B→Cの関係があり、C→D→Eの関係がある時、AとEの関係は？',
    options: [
      { text: 'Aから4ステップでEに到達する（A→B→C→D→E）', type: 'A' },
      { text: '関係がある', type: 'B' },
      { text: '関係がない', type: 'C' },
      { text: 'わからない', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '新しいソフトウェアを使う時、どうする？',
    options: [
      { text: 'まず触って機能を探索する', type: 'A' },
      { text: 'マニュアルを読む', type: 'B' },
      { text: 'チュートリアルを見る', type: 'C' },
      { text: '人に教えてもらう', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '複数の解決策がある問題で、最適な方法を見つけるのは？',
    options: [
      { text: '得意だ', type: 'A' },
      { text: 'まあまあできる', type: 'B' },
      { text: '苦手だ', type: 'C' },
      { text: 'できない', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '頭の中で複数の条件を同時に考えることは？',
    options: [
      { text: '得意で、複雑な問題も整理できる', type: 'A' },
      { text: '3〜4つなら同時に考えられる', type: 'B' },
      { text: '2つが限界', type: 'C' },
      { text: '1つずつしか考えられない', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '全く新しいパズルを与えられた時、解き方を見つけるまでの時間は？',
    options: [
      { text: '試行錯誤しながら素早く見つける', type: 'A' },
      { text: 'じっくり考えて見つける', type: 'B' },
      { text: 'ヒントがあれば見つけられる', type: 'C' },
      { text: '見つけられないことが多い', type: 'D' },
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
    title: '流動性知能の達人',
    emoji: '🌊',
    percentage: '流動性知能 95%',
    description: '新しい状況に素早く適応し、未知の問題を解決する天才的な能力を持っています！既存の知識に頼らず、その場で考える力が非常に高いです。',
    characteristics: ['適応力', '問題解決', '柔軟性', '推論力', '洞察力'],
    advice: '研究開発、コンサルティング、起業など新しい課題に挑む分野で大きく活躍できます。',
  },
  B: {
    type: 'B',
    title: '流動性知能上級者',
    emoji: '💡',
    percentage: '流動性知能 80%',
    description: '新しい状況への適応力が高く、未知の問題にも柔軟に対応できます。論理的な推論と創造的な思考のバランスが取れています。',
    characteristics: ['適応力', '柔軟性', '論理性', '好奇心', '学習能力'],
    advice: '異分野の知識を学ぶことで、さらに問題解決能力が向上します。',
  },
  C: {
    type: 'C',
    title: '流動性知能学習者',
    emoji: '📚',
    percentage: '流動性知能 65%',
    description: '基本的な適応力と問題解決能力を持っています。既存の知識を活用しながら、新しい状況に対応できます。',
    characteristics: ['基礎力', '成長意欲', '堅実', '経験活用', '学習熱心'],
    advice: '新しいことに挑戦する機会を増やすことで、流動性知能が向上します。',
  },
  D: {
    type: 'D',
    title: '流動性知能ビギナー',
    emoji: '🌱',
    percentage: '流動性知能 50%',
    description: '流動性知能はまだ発展途上ですが、経験と訓練で向上できます。まずは小さな新しいことから挑戦してみましょう。',
    characteristics: ['発展途上', '可能性', '結晶性知能優位', '経験重視', '慎重'],
    advice: 'パズルや新しい趣味など、未知のことに挑戦する習慣をつけましょう。',
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
