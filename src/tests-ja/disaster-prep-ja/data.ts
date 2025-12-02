// 防災意識度診断
export const questions = [
  {
    id: 1,
    text: '防災グッズの備えは？',
    options: [
      { text: '完璧に揃えている', type: 'prepared' },
      { text: 'ある程度は用意している', type: 'moderate' },
      { text: '最低限のみ', type: 'minimal' },
      { text: 'ほとんどない', type: 'unprepared' },
    ],
  },
  {
    id: 2,
    text: '避難場所を知っている？',
    options: [
      { text: '複数の避難場所とルートを把握', type: 'prepared' },
      { text: '最寄りの避難場所は知っている', type: 'moderate' },
      { text: 'なんとなく', type: 'minimal' },
      { text: '知らない', type: 'unprepared' },
    ],
  },
  {
    id: 3,
    text: '家族との連絡方法は？',
    options: [
      { text: '災害時の集合場所や連絡方法を決めている', type: 'prepared' },
      { text: '話し合ったことがある', type: 'moderate' },
      { text: 'LINEがあるから大丈夫と思う', type: 'minimal' },
      { text: '特に決めていない', type: 'unprepared' },
    ],
  },
  {
    id: 4,
    text: '非常食・水の備蓄は？',
    options: [
      { text: '3日分以上ある', type: 'prepared' },
      { text: '1〜2日分程度', type: 'moderate' },
      { text: '少しだけ', type: 'minimal' },
      { text: 'ない', type: 'unprepared' },
    ],
  },
  {
    id: 5,
    text: '防災訓練への参加は？',
    options: [
      { text: '積極的に参加している', type: 'prepared' },
      { text: '機会があれば参加', type: 'moderate' },
      { text: 'あまり参加しない', type: 'minimal' },
      { text: '参加したことがない', type: 'unprepared' },
    ],
  },
  {
    id: 6,
    text: 'ハザードマップを見たことは？',
    options: [
      { text: '確認済みで内容を把握', type: 'prepared' },
      { text: '見たことはある', type: 'moderate' },
      { text: '存在は知っている', type: 'minimal' },
      { text: '知らない', type: 'unprepared' },
    ],
  },
  {
    id: 7,
    text: '家具の転倒防止対策は？',
    options: [
      { text: '全ての家具に対策済み', type: 'prepared' },
      { text: '一部の家具には対策', type: 'moderate' },
      { text: '気になるけどまだ', type: 'minimal' },
      { text: 'していない', type: 'unprepared' },
    ],
  },
  {
    id: 8,
    text: '緊急地震速報が来たら？',
    options: [
      { text: 'すぐに身を守る行動をとる', type: 'prepared' },
      { text: '周りを見て行動する', type: 'moderate' },
      { text: 'とりあえず様子を見る', type: 'minimal' },
      { text: '何をすればいいかわからない', type: 'unprepared' },
    ],
  },
  {
    id: 9,
    text: '防災情報の入手方法は？',
    options: [
      { text: '複数の情報源を確保', type: 'prepared' },
      { text: 'スマホアプリで入手', type: 'moderate' },
      { text: 'テレビのニュース程度', type: 'minimal' },
      { text: '特に決めていない', type: 'unprepared' },
    ],
  },
  {
    id: 10,
    text: '防災に対する意識は？',
    options: [
      { text: '常に意識している', type: 'prepared' },
      { text: '時々考える', type: 'moderate' },
      { text: 'あまり考えない', type: 'minimal' },
      { text: '自分は大丈夫と思っている', type: 'unprepared' },
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
  prepTip: string;
}> = {
  prepared: {
    type: 'prepared',
    title: '防災マスター',
    emoji: '🏆',
    percentage: '防災意識 95%',
    description: '防災意識が非常に高く、しっかりと準備ができているタイプ！いざという時も慌てず対応できます。',
    characteristics: ['準備万端', '計画的', '責任感', '知識豊富', 'リーダー'],
    prepTip: '周りの人にも防災知識を広めてみて',
  },
  moderate: {
    type: 'moderate',
    title: '防災意識派',
    emoji: '📋',
    percentage: '防災意識 70%',
    description: '基本的な防災意識があり、ある程度の準備はできているタイプ。もう一歩踏み込むとさらに安心です。',
    characteristics: ['バランス', '現実的', 'まずまず', '意識あり', '成長中'],
    prepTip: '足りない備えをリストアップしてみよう',
  },
  minimal: {
    type: 'minimal',
    title: '防災ビギナー',
    emoji: '🌱',
    percentage: '防災意識 45%',
    description: '防災意識はあるものの、具体的な準備はまだこれからのタイプ。少しずつ始めていきましょう。',
    characteristics: ['これから', '潜在意識あり', '伸びしろ', '素直', '学び中'],
    prepTip: 'まずは非常持ち出し袋を準備してみよう',
  },
  unprepared: {
    type: 'unprepared',
    title: '要準備タイプ',
    emoji: '⚠️',
    percentage: '防災意識 20%',
    description: '防災への備えがまだのタイプ。災害はいつ起こるかわかりません。今日から少しずつ始めましょう！',
    characteristics: ['準備不足', 'これから', '潜在力', '気づき', 'スタート地点'],
    prepTip: '今日できる小さな一歩から始めよう',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { prepared: 0, moderate: 0, minimal: 0, unprepared: 0 };

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
