// 問題解決力テスト
export const questions = [
  {
    id: 1,
    text: '初めて使う機械が動かない時、最初にすることは？',
    options: [
      { text: '説明書を読む', type: 'A' },
      { text: '電源やコードを確認する', type: 'B' },
      { text: 'すぐに誰かに聞く', type: 'C' },
      { text: 'とりあえず色々触ってみる', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '迷子になったら、どうする？',
    options: [
      { text: 'ランドマークを探して位置を把握', type: 'A' },
      { text: '地図アプリを使う', type: 'B' },
      { text: '人に道を聞く', type: 'C' },
      { text: '来た道を戻る', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'チームで意見が対立した時、どうする？',
    options: [
      { text: '双方の意見の共通点を見つける', type: 'A' },
      { text: '客観的なデータで判断', type: 'B' },
      { text: '多数決で決める', type: 'C' },
      { text: 'リーダーに任せる', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '締め切りに間に合いそうにない時、どうする？',
    options: [
      { text: '優先順位を見直し、重要な部分に集中', type: 'A' },
      { text: '早めに報告して延長を交渉', type: 'B' },
      { text: '徹夜してでも終わらせる', type: 'C' },
      { text: '諦めて次に備える', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '新しいプロジェクトを任されたら、まず何をする？',
    options: [
      { text: 'ゴールを明確にし計画を立てる', type: 'A' },
      { text: '類似の成功例を調べる', type: 'B' },
      { text: 'すぐに作業を始める', type: 'C' },
      { text: '誰かに相談する', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '予算オーバーになりそうな時、どうする？',
    options: [
      { text: '不要な項目を見直し削減', type: 'A' },
      { text: '代替案を探す', type: 'B' },
      { text: '追加予算を申請', type: 'C' },
      { text: '品質を下げる', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '複雑な問題に直面した時、どうアプローチする？',
    options: [
      { text: '小さな部分に分解して解決', type: 'A' },
      { text: '根本原因を特定する', type: 'B' },
      { text: '経験者に助けを求める', type: 'C' },
      { text: '直感で解決を試みる', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '失敗した時、最初に考えることは？',
    options: [
      { text: '原因を分析して次に活かす', type: 'A' },
      { text: 'リカバリー方法を考える', type: 'B' },
      { text: '誰かに謝る', type: 'C' },
      { text: '落ち込む', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '情報が足りない状況で決断を迫られたら？',
    options: [
      { text: '最も可能性の高い選択をする', type: 'A' },
      { text: '可能な限り情報を集める', type: 'B' },
      { text: '決断を先延ばしにする', type: 'C' },
      { text: '他人に決めてもらう', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '新しい環境に適応するために、何をする？',
    options: [
      { text: 'ルールや文化を理解しようとする', type: 'A' },
      { text: 'キーパーソンを見つけて関係を築く', type: 'B' },
      { text: '前の環境のやり方を持ち込む', type: 'C' },
      { text: '自然に任せる', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'リソースが限られている時の対処法は？',
    options: [
      { text: '創意工夫で代替手段を見つける', type: 'A' },
      { text: '最も効果的な使い方を考える', type: 'B' },
      { text: '追加リソースを要求する', type: 'C' },
      { text: '規模を縮小する', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '予期せぬ問題が発生した時、どう対応する？',
    options: [
      { text: '冷静に状況を把握し、対策を立てる', type: 'A' },
      { text: '過去の経験から解決策を探す', type: 'B' },
      { text: 'パニックになるが何とかする', type: 'C' },
      { text: '誰かが解決してくれるのを待つ', type: 'D' },
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
    title: '問題解決の達人',
    emoji: '🔧',
    percentage: '問題解決力 95%',
    description: 'どんな問題も冷静に分析し、最適な解決策を見つけ出す達人です！複雑な状況でも論理的にアプローチし、確実に結果を出します。',
    characteristics: ['分析力', '論理的思考', '冷静さ', '実行力', '適応力'],
    advice: 'コンサルティングや管理職など、問題解決が求められる役割で大きく活躍できます。',
  },
  B: {
    type: 'B',
    title: '問題解決上級者',
    emoji: '🎯',
    percentage: '問題解決力 80%',
    description: '問題に対して効果的にアプローチできる実力者です。経験を活かしながら、柔軟に解決策を見つけ出すことができます。',
    characteristics: ['経験活用', '柔軟性', '実践力', '判断力', '協調性'],
    advice: 'より複雑な問題に挑戦することで、さらにスキルが向上します。',
  },
  C: {
    type: 'C',
    title: '問題解決学習者',
    emoji: '📚',
    percentage: '問題解決力 65%',
    description: '基本的な問題解決能力は持っています。様々な経験を積むことで、対応力がさらに向上するでしょう。',
    characteristics: ['基礎力', '成長意欲', '協調性', '素直さ', '努力家'],
    advice: '問題解決のフレームワークを学ぶと、より効率的に対処できるようになります。',
  },
  D: {
    type: 'D',
    title: '問題解決ビギナー',
    emoji: '🌱',
    percentage: '問題解決力 50%',
    description: '問題解決のスキルはまだ発展途上です。しかし、これは経験で大きく向上する能力です。小さな問題から挑戦していきましょう。',
    characteristics: ['発展途上', '可能性', '直感的', '依存的', '柔軟'],
    advice: '日常の小さな問題を自分で解決する練習から始めてみましょう。',
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
