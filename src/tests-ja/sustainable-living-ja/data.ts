// サステナブル度診断
export const questions = [
  {
    id: 1,
    text: '買い物をする時の意識は？',
    options: [
      { text: '環境・社会への影響を考える', type: 'leader' },
      { text: 'エコ商品を選ぶことが多い', type: 'conscious' },
      { text: '価格や品質が優先', type: 'casual' },
      { text: '特に気にしない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '服の買い方は？',
    options: [
      { text: 'エシカルブランド、中古も活用', type: 'leader' },
      { text: '長く使えるものを選ぶ', type: 'conscious' },
      { text: '流行や価格で決める', type: 'casual' },
      { text: '気に入れば買う', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '食品の選び方は？',
    options: [
      { text: 'オーガニック、フェアトレードを選ぶ', type: 'leader' },
      { text: '国産や地元産を意識', type: 'conscious' },
      { text: '安さや便利さで決める', type: 'casual' },
      { text: '特にこだわりなし', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '移動手段は？',
    options: [
      { text: '徒歩・自転車・公共交通優先', type: 'leader' },
      { text: 'なるべく環境に配慮', type: 'conscious' },
      { text: '便利さ優先', type: 'casual' },
      { text: '車が多い', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '電力会社の選択は？',
    options: [
      { text: '再生可能エネルギーの会社', type: 'leader' },
      { text: '環境配慮も検討した', type: 'conscious' },
      { text: '価格で決めた', type: 'casual' },
      { text: '考えたことない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '不用品の処分は？',
    options: [
      { text: 'リサイクル、寄付、アップサイクル', type: 'leader' },
      { text: 'フリマアプリで売る', type: 'conscious' },
      { text: '普通に捨てる', type: 'casual' },
      { text: '何でも捨てる', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'SDGsへの関心は？',
    options: [
      { text: '深く理解し行動している', type: 'leader' },
      { text: '関心があり意識している', type: 'conscious' },
      { text: '聞いたことはある', type: 'casual' },
      { text: 'よく知らない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '投資や預金先の選択は？',
    options: [
      { text: 'ESG投資、社会貢献を重視', type: 'leader' },
      { text: '企業の姿勢も考慮', type: 'conscious' },
      { text: '利回りで決める', type: 'casual' },
      { text: '考えたことない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '企業のサステナビリティ活動は？',
    options: [
      { text: '購買判断に影響する', type: 'leader' },
      { text: '好感を持つ', type: 'conscious' },
      { text: 'あまり気にしない', type: 'casual' },
      { text: '関係ない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'サステナブルな生活への意識は？',
    options: [
      { text: '日々実践、周りにも広めたい', type: 'leader' },
      { text: 'できる範囲で心がけている', type: 'conscious' },
      { text: 'やった方がいいとは思う', type: 'casual' },
      { text: 'よくわからない', type: 'minimal' },
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
  leader: {
    type: 'leader',
    title: 'サステナブルリーダー',
    emoji: '🌍',
    percentage: 'サステナ度 MAX',
    description: 'サステナブルな生活を徹底実践！消費行動から投資まで、環境・社会への影響を考えて行動できる先進的なライフスタイルの持ち主。',
    characteristics: ['先進的', '行動力がある', '影響力', '知識豊富', '未来志向'],
    advice: '素晴らしいサステナブルライフ！周りへの影響力を活かして広めてください♪',
  },
  conscious: {
    type: 'conscious',
    title: 'サステナブル意識派',
    emoji: '🌿',
    percentage: 'サステナ度 70%',
    description: 'サステナブルな生活を意識している。無理なく続けられる範囲で環境に配慮した選択をする現実的なエコ生活者。',
    characteristics: ['意識的', 'バランス型', '継続できる', '現実的', '成長中'],
    advice: '良いバランスです！もう一歩踏み込んだ取り組みにも挑戦してみては♪',
  },
  casual: {
    type: 'casual',
    title: 'これからサステナ派',
    emoji: '🌱',
    percentage: 'サステナ度 40%',
    description: 'サステナブルという言葉は知っているけど、あまり実践できていない。でも関心があるのは良いスタート！',
    characteristics: ['関心はある', 'きっかけ待ち', '可能性あり', '情報不足', '変わりたい'],
    advice: 'マイバッグやマイボトルから始めてみましょう！小さな一歩が大切♪',
  },
  minimal: {
    type: 'minimal',
    title: 'サステナ無関心タイプ',
    emoji: '😶',
    percentage: 'サステナ度 15%',
    description: 'サステナブルへの関心が低い状態。でも知ることが第一歩！SDGsについて少し調べてみると世界が広がるかも。',
    characteristics: ['無関心', '情報不足', 'きっかけがない', '変化の可能性', 'これから'],
    advice: 'SDGsの17の目標を見てみると、サステナブルの意味がわかりますよ♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { leader: 0, conscious: 0, casual: 0, minimal: 0 };

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
