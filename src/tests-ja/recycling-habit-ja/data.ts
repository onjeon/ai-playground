// リサイクル習慣度診断
export const questions = [
  {
    id: 1,
    text: 'ゴミの分別について',
    options: [
      { text: '完璧に分別している', type: 'perfect' },
      { text: 'だいたい分別している', type: 'good' },
      { text: '面倒だけど一応', type: 'basic' },
      { text: 'あまりしていない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'ペットボトルのリサイクルは？',
    options: [
      { text: 'ラベル・キャップを外して洗って出す', type: 'perfect' },
      { text: 'ラベルは外す', type: 'good' },
      { text: 'そのまま出す', type: 'basic' },
      { text: '燃えるゴミに入れることも', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '古紙・段ボールの処理は？',
    options: [
      { text: '種類ごとに分けて資源回収へ', type: 'perfect' },
      { text: 'まとめて資源回収へ', type: 'good' },
      { text: 'たまに出す', type: 'basic' },
      { text: '燃えるゴミにまとめる', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '服や家具の処分は？',
    options: [
      { text: 'リサイクルショップや寄付', type: 'perfect' },
      { text: 'フリマアプリで売る', type: 'good' },
      { text: '粗大ゴミで出す', type: 'basic' },
      { text: '普通のゴミに出すことも', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '電池や電球の捨て方は？',
    options: [
      { text: '回収ボックスに持っていく', type: 'perfect' },
      { text: '分別して出す', type: 'good' },
      { text: '時々迷う', type: 'basic' },
      { text: '普通のゴミと一緒に', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '食品トレイの処理は？',
    options: [
      { text: '洗ってスーパーの回収へ', type: 'perfect' },
      { text: 'プラスチックとして分別', type: 'good' },
      { text: '洗わずに分別', type: 'basic' },
      { text: '燃えるゴミへ', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'リサイクルマークのチェックは？',
    options: [
      { text: '必ず確認して分別', type: 'perfect' },
      { text: 'だいたい確認する', type: 'good' },
      { text: 'たまに見る', type: 'basic' },
      { text: '見ていない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '地域のゴミ出しルールは？',
    options: [
      { text: '完璧に把握している', type: 'perfect' },
      { text: 'だいたい知っている', type: 'good' },
      { text: 'よくわからない', type: 'basic' },
      { text: '知らない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: 'リサイクル製品を選ぶ？',
    options: [
      { text: '積極的に選ぶ', type: 'perfect' },
      { text: 'あれば選ぶ', type: 'good' },
      { text: 'あまり気にしない', type: 'basic' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'リサイクルへの意識は？',
    options: [
      { text: '環境のため当然のこと', type: 'perfect' },
      { text: '大切だと思う', type: 'good' },
      { text: 'やった方がいいとは思う', type: 'basic' },
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
  perfect: {
    type: 'perfect',
    title: 'リサイクルマスター',
    emoji: '♻️',
    percentage: 'リサイクル度 100%',
    description: '完璧なリサイクル習慣の持ち主！分別は当然、リサイクルマークもチェック。地球環境のために行動できる素晴らしい人。',
    characteristics: ['環境意識が高い', '几帳面', '責任感', '継続力', 'お手本'],
    advice: '完璧なリサイクル習慣！周りの人にもノウハウを教えてあげて♪',
  },
  good: {
    type: 'good',
    title: 'リサイクル上手',
    emoji: '🌿',
    percentage: 'リサイクル度 75%',
    description: '基本的なリサイクルはしっかりできている。無理なく続けられるエコライフスタイルが身についた優良市民。',
    characteristics: ['意識的', '継続できる', 'バランス型', '社会性', '協力的'],
    advice: '良い習慣ですね！あと一歩のこだわりでマスターレベルに♪',
  },
  basic: {
    type: 'basic',
    title: 'これからリサイクル派',
    emoji: '🌱',
    percentage: 'リサイクル度 45%',
    description: '一応リサイクルはしているけど、完璧ではない。でも意識があるのは良いこと！少しずつ習慣を改善していこう。',
    characteristics: ['改善の余地あり', '可能性あり', 'きっかけ待ち', '成長中', '変わりたい'],
    advice: 'まずは地域のゴミ出しルールを確認することから始めてみては♪',
  },
  minimal: {
    type: 'minimal',
    title: 'リサイクル初心者',
    emoji: '🔰',
    percentage: 'リサイクル度 20%',
    description: 'リサイクルへの意識がまだ低い状態。でも今から始めれば大丈夫！分別の基本を覚えることから始めてみよう。',
    characteristics: ['初心者', '情報不足', '変化の可能性', 'きっかけが必要', 'これから'],
    advice: 'ペットボトル、缶、瓶の分別から始めてみましょう！簡単ですよ♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { perfect: 0, good: 0, basic: 0, minimal: 0 };

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
