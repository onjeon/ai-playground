// 食品ロス意識度診断
export const questions = [
  {
    id: 1,
    text: '賞味期限が近い食品を買うことは？',
    options: [
      { text: '積極的に買う、値引きも嬉しい', type: 'high' },
      { text: 'すぐ食べるなら買う', type: 'moderate' },
      { text: 'あまり買わない', type: 'low' },
      { text: '避ける', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '冷蔵庫の食材管理は？',
    options: [
      { text: '定期的にチェック、使い切る', type: 'high' },
      { text: 'だいたい把握している', type: 'moderate' },
      { text: '時々忘れて腐らせる', type: 'low' },
      { text: '管理できていない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '食べ残しについて',
    options: [
      { text: '残さず食べる、持ち帰る', type: 'high' },
      { text: 'なるべく残さないよう心がける', type: 'moderate' },
      { text: '残すこともある', type: 'low' },
      { text: 'あまり気にしない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '買い物の計画性は？',
    options: [
      { text: '必要な分だけ買う', type: 'high' },
      { text: '献立を考えて買う', type: 'moderate' },
      { text: 'まとめ買いしがち', type: 'low' },
      { text: '衝動買いが多い', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '野菜の端や皮は？',
    options: [
      { text: '活用する（ブロスなど）', type: 'high' },
      { text: '食べられる部分は使う', type: 'moderate' },
      { text: '普通に捨てる', type: 'low' },
      { text: '気にせず捨てる', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: 'フードシェアリングアプリは？',
    options: [
      { text: '使っている', type: 'high' },
      { text: '興味がある', type: 'moderate' },
      { text: '知っているが使わない', type: 'low' },
      { text: '知らない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '外食で量が多い時は？',
    options: [
      { text: '持ち帰りをお願いする', type: 'high' },
      { text: '頑張って食べきる', type: 'moderate' },
      { text: '残してしまう', type: 'low' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '「食品ロス削減」への関心は？',
    options: [
      { text: '非常に関心がある', type: 'high' },
      { text: 'ある程度意識している', type: 'moderate' },
      { text: '少し気になる程度', type: 'low' },
      { text: 'あまり関心がない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '作りすぎた料理は？',
    options: [
      { text: '翌日のお弁当やアレンジに', type: 'high' },
      { text: '冷凍保存する', type: 'moderate' },
      { text: '家族や友人に分ける', type: 'low' },
      { text: '捨てることも', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '食品ロスを減らすための行動は？',
    options: [
      { text: '日常的に実践している', type: 'high' },
      { text: 'できる範囲で心がけている', type: 'moderate' },
      { text: 'たまに意識する', type: 'low' },
      { text: '特にしていない', type: 'minimal' },
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
    title: '食品ロスゼロ実践者',
    emoji: '🌱',
    percentage: '食品ロス意識 MAX',
    description: '食品ロス削減を日常で実践する意識の高いタイプ！買い物から保存、調理まで無駄を出さない工夫をしている。地球にも家計にも優しい生活。',
    characteristics: ['環境意識高い', '計画的', '創意工夫', '節約上手', 'サステナブル'],
    advice: '素晴らしい意識と実践！周りの人にもシェアしてみては♪',
  },
  moderate: {
    type: 'moderate',
    title: '意識的な食生活派',
    emoji: '♻️',
    percentage: '食品ロス意識 70%',
    description: '食品ロスについて意識があり、できる範囲で対策している。完璧ではないけど、日々の小さな工夫を続けている頑張り屋さん。',
    characteristics: ['意識的', 'バランス型', '努力家', '現実的', '成長中'],
    advice: 'いい意識ですね！もう一歩進んで、新しい取り組みを試してみましょう♪',
  },
  low: {
    type: 'low',
    title: 'これから意識派',
    emoji: '🤔',
    percentage: '食品ロス意識 40%',
    description: '食品ロスについて気にはなるけど、なかなか行動に移せていない。でも関心があるのは良いスタート！',
    characteristics: ['関心はある', 'これから成長', '正直', '可能性あり', '変わりたい気持ち'],
    advice: '簡単なことから始めてみましょう！買い物リストを作るだけでも効果的♪',
  },
  minimal: {
    type: 'minimal',
    title: '無関心タイプ',
    emoji: '😶',
    percentage: '食品ロス意識 15%',
    description: '食品ロスについてあまり意識していない。でも知ることが第一歩！少しずつ関心を持ってみると世界が変わるかも。',
    characteristics: ['無関心', '情報不足', '変化の可能性', '新しい視点が必要', 'きっかけ待ち'],
    advice: '食品ロスの現状を知ることから始めてみませんか？小さな変化が大きな差に♪',
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
