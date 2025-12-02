// 省エネ意識度診断
export const questions = [
  {
    id: 1,
    text: '部屋の照明について',
    options: [
      { text: 'LED使用、こまめに消す', type: 'high' },
      { text: '使わない時は消す', type: 'moderate' },
      { text: 'つけっぱなしのことも', type: 'low' },
      { text: '気にしていない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'エアコンの使い方は？',
    options: [
      { text: '設定温度を意識、フィルター掃除も', type: 'high' },
      { text: '適温を心がける', type: 'moderate' },
      { text: '快適さ優先', type: 'low' },
      { text: 'ガンガンに効かせる', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '待機電力について',
    options: [
      { text: 'コンセントを抜く、電源タップで管理', type: 'high' },
      { text: '気をつけている', type: 'moderate' },
      { text: 'あまり気にしない', type: 'low' },
      { text: '知らない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '家電を選ぶ基準は？',
    options: [
      { text: '省エネ性能を重視', type: 'high' },
      { text: '省エネも考慮する', type: 'moderate' },
      { text: '価格やデザイン重視', type: 'low' },
      { text: '特に気にしない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: 'お風呂の入り方は？',
    options: [
      { text: '続けて入る、追い焚き減らす', type: 'high' },
      { text: '効率よく入る', type: 'moderate' },
      { text: 'ゆっくり長風呂', type: 'low' },
      { text: '特に気にしない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '冷蔵庫の使い方は？',
    options: [
      { text: '開閉を減らす、適切な温度設定', type: 'high' },
      { text: '気をつけている', type: 'moderate' },
      { text: '特に気にしない', type: 'low' },
      { text: '開けっ放しのことも', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '電気料金のチェックは？',
    options: [
      { text: '毎月確認、削減を意識', type: 'high' },
      { text: 'たまに確認', type: 'moderate' },
      { text: 'あまり見ない', type: 'low' },
      { text: '見たことない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '洗濯機の使い方は？',
    options: [
      { text: 'まとめ洗い、省エネコース', type: 'high' },
      { text: 'ある程度まとめて洗う', type: 'moderate' },
      { text: '少量でも回す', type: 'low' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '再生可能エネルギーへの関心は？',
    options: [
      { text: '太陽光パネル検討、エコ電力契約', type: 'high' },
      { text: '関心がある', type: 'moderate' },
      { text: '少し興味がある', type: 'low' },
      { text: '関心がない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '省エネへの意識は？',
    options: [
      { text: '環境と家計のため実践', type: 'high' },
      { text: '意識している', type: 'moderate' },
      { text: 'やった方がいいとは思う', type: 'low' },
      { text: '面倒に感じる', type: 'minimal' },
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
  high: {
    type: 'high',
    title: '省エネマスター',
    emoji: '💡',
    percentage: '省エネ意識 MAX',
    description: '省エネを徹底的に実践する達人！環境にも家計にも優しい生活を送る。エネルギーの使い方を熟知した賢い消費者。',
    characteristics: ['環境意識が高い', '節約上手', '計画的', '知識豊富', 'お手本'],
    advice: '素晴らしい省エネ生活！最新の省エネ技術もチェックしてみては♪',
  },
  moderate: {
    type: 'moderate',
    title: '省エネ意識派',
    emoji: '🔋',
    percentage: '省エネ意識 70%',
    description: '省エネを意識して生活している。無理なく続けられるエコスタイルが身についた賢い生活者。',
    characteristics: ['意識的', 'バランス型', '継続できる', '現実的', '成長中'],
    advice: '良い習慣ですね！もう少し踏み込んだ省エネ対策も試してみては♪',
  },
  low: {
    type: 'low',
    title: 'これから省エネ派',
    emoji: '🌱',
    percentage: '省エネ意識 40%',
    description: '省エネは気になるけど、あまり実践できていない。でも意識があるのは良いスタート！簡単なことから始めてみよう。',
    characteristics: ['改善の余地あり', '可能性あり', '変わりたい', 'きっかけ待ち', '成長中'],
    advice: '使わない電気を消すことから始めてみましょう！小さな積み重ねが大切♪',
  },
  minimal: {
    type: 'minimal',
    title: '省エネ無関心タイプ',
    emoji: '🔌',
    percentage: '省エネ意識 15%',
    description: '省エネへの意識が低い状態。でも知ることが第一歩！電気代の節約にもなるので、少しずつ意識してみては？',
    characteristics: ['無関心', '情報不足', 'きっかけがない', '変化の可能性', 'これから'],
    advice: '電気代を確認してみると、省エネのモチベーションが上がるかも♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, moderate: 0, low: 0, minimal: 0 };

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
