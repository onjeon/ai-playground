// エコ意識度診断
export const questions = [
  {
    id: 1,
    text: '買い物袋について',
    options: [
      { text: 'マイバッグを必ず持参', type: 'high' },
      { text: 'だいたい持って行く', type: 'moderate' },
      { text: '忘れることが多い', type: 'low' },
      { text: 'レジ袋をもらう', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'ペットボトル飲料は？',
    options: [
      { text: 'マイボトルで買わない', type: 'high' },
      { text: 'なるべく減らしている', type: 'moderate' },
      { text: 'よく買う', type: 'low' },
      { text: '毎日買う', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '電気の節約意識は？',
    options: [
      { text: 'こまめに消す、省エネ家電', type: 'high' },
      { text: '意識している方', type: 'moderate' },
      { text: 'たまに気にする', type: 'low' },
      { text: '特に気にしない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '環境に配慮した商品を選ぶ？',
    options: [
      { text: '積極的に選ぶ', type: 'high' },
      { text: 'あれば選ぶ', type: 'moderate' },
      { text: 'たまに', type: 'low' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '公共交通機関や自転車の利用は？',
    options: [
      { text: '環境のため積極的に', type: 'high' },
      { text: '便利だから使う', type: 'moderate' },
      { text: '車が多い', type: 'low' },
      { text: 'ほぼ車のみ', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: 'エコ活動への参加は？',
    options: [
      { text: '清掃活動など参加している', type: 'high' },
      { text: '機会があれば参加', type: 'moderate' },
      { text: '参加したことがない', type: 'low' },
      { text: '興味がない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '過剰包装への意識は？',
    options: [
      { text: '断る、簡易包装を選ぶ', type: 'high' },
      { text: '気になる', type: 'moderate' },
      { text: 'あまり気にしない', type: 'low' },
      { text: '全く気にしない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '環境問題への関心は？',
    options: [
      { text: '非常に関心があり、勉強している', type: 'high' },
      { text: 'ニュースで気にしている', type: 'moderate' },
      { text: '少し気になる程度', type: 'low' },
      { text: 'あまり関心がない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '服や物の買い替えは？',
    options: [
      { text: '長く使う、中古も活用', type: 'high' },
      { text: '必要な時だけ買う', type: 'moderate' },
      { text: '流行で買い替える', type: 'low' },
      { text: 'よく買い替える', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '地球環境のためにできることは？',
    options: [
      { text: '日々の行動で実践している', type: 'high' },
      { text: 'できる範囲で心がけている', type: 'moderate' },
      { text: '何をすればいいかわからない', type: 'low' },
      { text: '個人では変わらないと思う', type: 'minimal' },
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
    title: 'エコリーダー',
    emoji: '🌍',
    percentage: 'エコ意識 MAX',
    description: '環境への意識が非常に高く、日常生活でエコを実践している。地球のために行動できる、頼もしいエコリーダータイプ！',
    characteristics: ['環境意識が高い', '行動力がある', '継続力', '影響力', 'サステナブル'],
    advice: '素晴らしいエコ意識！周りの人への啓発も続けていきましょう♪',
  },
  moderate: {
    type: 'moderate',
    title: 'エコ意識派',
    emoji: '🌿',
    percentage: 'エコ意識 70%',
    description: '環境問題に関心があり、できる範囲でエコを心がけている。無理なく続けられるエコライフスタイルが身についている。',
    characteristics: ['意識的', 'バランス型', '継続できる', '現実的', '成長中'],
    advice: '良いペースです！もう一歩進んだエコ活動にも挑戦してみては♪',
  },
  low: {
    type: 'low',
    title: 'これからエコ派',
    emoji: '🌱',
    percentage: 'エコ意識 40%',
    description: '環境問題は気になるけど、行動に移せていない。でも関心があるのは良いスタート！小さなことから始めてみよう。',
    characteristics: ['関心はある', 'きっかけ待ち', '可能性あり', '情報不足', '変わりたい'],
    advice: 'マイバッグから始めてみませんか？小さな一歩が大きな変化に♪',
  },
  minimal: {
    type: 'minimal',
    title: 'エコ無関心タイプ',
    emoji: '😶',
    percentage: 'エコ意識 15%',
    description: '環境問題への関心が低い状態。でも知ることが第一歩！身近なところから環境のことを考えてみては？',
    characteristics: ['無関心', '情報不足', 'きっかけがない', '変化の可能性', '新しい視点が必要'],
    advice: '環境問題について少し調べてみると、見方が変わるかもしれませんよ♪',
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
