// 水の使い方タイプ診断
export const questions = [
  {
    id: 1,
    text: '歯磨き中、水は？',
    options: [
      { text: '必ず止める', type: 'saver' },
      { text: 'だいたい止める', type: 'conscious' },
      { text: '流しっぱなしのことも', type: 'casual' },
      { text: '流しっぱなし', type: 'unaware' },
    ],
  },
  {
    id: 2,
    text: 'シャワーの使い方は？',
    options: [
      { text: '体を洗う間は止める', type: 'saver' },
      { text: '短時間で済ませる', type: 'conscious' },
      { text: '長めに浴びる', type: 'casual' },
      { text: '時間を気にしない', type: 'unaware' },
    ],
  },
  {
    id: 3,
    text: '食器洗いの時は？',
    options: [
      { text: 'ためすすぎ、節水を意識', type: 'saver' },
      { text: '効率よく洗う', type: 'conscious' },
      { text: '流しながら洗う', type: 'casual' },
      { text: '水量は気にしない', type: 'unaware' },
    ],
  },
  {
    id: 4,
    text: '洗濯の水の使い方は？',
    options: [
      { text: '風呂の残り湯を活用', type: 'saver' },
      { text: '適切な水量で', type: 'conscious' },
      { text: '自動設定のまま', type: 'casual' },
      { text: '気にしていない', type: 'unaware' },
    ],
  },
  {
    id: 5,
    text: '水道料金のチェックは？',
    options: [
      { text: '毎月確認、節約を意識', type: 'saver' },
      { text: 'たまに確認', type: 'conscious' },
      { text: 'あまり見ない', type: 'casual' },
      { text: '気にしたことない', type: 'unaware' },
    ],
  },
  {
    id: 6,
    text: '雨水の活用は？',
    options: [
      { text: '貯めて植物に使う', type: 'saver' },
      { text: '興味がある', type: 'conscious' },
      { text: '考えたことない', type: 'casual' },
      { text: '必要ない', type: 'unaware' },
    ],
  },
  {
    id: 7,
    text: 'トイレの水洗は？',
    options: [
      { text: '大小を使い分け、節水型', type: 'saver' },
      { text: '使い分けている', type: 'conscious' },
      { text: 'あまり意識しない', type: 'casual' },
      { text: '気にしない', type: 'unaware' },
    ],
  },
  {
    id: 8,
    text: '洗車の方法は？',
    options: [
      { text: 'バケツで節水、洗車機利用', type: 'saver' },
      { text: '効率よく済ませる', type: 'conscious' },
      { text: 'ホースでたっぷり', type: 'casual' },
      { text: '気にせず洗う', type: 'unaware' },
    ],
  },
  {
    id: 9,
    text: '水不足のニュースを見たら？',
    options: [
      { text: '自分の使い方を見直す', type: 'saver' },
      { text: '気になる', type: 'conscious' },
      { text: '大変だなと思う', type: 'casual' },
      { text: '他人事に感じる', type: 'unaware' },
    ],
  },
  {
    id: 10,
    text: '水への意識は？',
    options: [
      { text: '貴重な資源として大切に', type: 'saver' },
      { text: '節約を心がけている', type: 'conscious' },
      { text: 'たまに気にする', type: 'casual' },
      { text: '蛇口をひねれば出るもの', type: 'unaware' },
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
  saver: {
    type: 'saver',
    title: '水の達人',
    emoji: '💧',
    percentage: '節水意識 MAX',
    description: '水を大切にする意識が非常に高い！日常生活で節水を徹底している。水資源の大切さを理解した地球に優しいタイプ。',
    characteristics: ['環境意識が高い', '節約上手', '計画的', '責任感', 'サステナブル'],
    advice: '素晴らしい節水意識！その習慣を周りにも広めてみては♪',
  },
  conscious: {
    type: 'conscious',
    title: '節水意識派',
    emoji: '🚿',
    percentage: '節水意識 70%',
    description: '水の節約を意識して生活している。無理なく続けられる節水習慣が身についた賢い水の使い手。',
    characteristics: ['意識的', 'バランス型', '継続できる', '現実的', '成長中'],
    advice: '良い習慣ですね！もう一歩進んだ節水術も試してみては♪',
  },
  casual: {
    type: 'casual',
    title: 'これから節水派',
    emoji: '🌊',
    percentage: '節水意識 40%',
    description: '水の節約は気になるけど、あまり実践できていない。でも意識があるのは良いスタート！簡単なことから始めてみよう。',
    characteristics: ['改善の余地あり', '可能性あり', '変わりたい', 'きっかけ待ち', '成長中'],
    advice: '歯磨き中の水を止めることから始めてみましょう！簡単ですよ♪',
  },
  unaware: {
    type: 'unaware',
    title: '水は無限派',
    emoji: '🔰',
    percentage: '節水意識 15%',
    description: '水の節約をあまり意識していない状態。でも日本は水が豊かな国だからこそ、その大切さを知ることが重要。',
    characteristics: ['無関心', '情報不足', 'きっかけがない', '変化の可能性', 'これから'],
    advice: '水道料金を確認してみると、節水のモチベーションが上がるかも♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { saver: 0, conscious: 0, casual: 0, unaware: 0 };

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
