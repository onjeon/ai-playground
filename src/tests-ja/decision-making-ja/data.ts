// 決断力診断 (결정 스타일 테스트)
export const questions = [
  {
    id: 1,
    text: 'レストランでメニューを選ぶ時は？',
    options: [
      { text: 'すぐに決める', type: 'quick' },
      { text: 'いくつか比較して決める', type: 'analytical' },
      { text: '誰かに聞いてから決める', type: 'collaborative' },
      { text: '直感で決める', type: 'intuitive' },
    ],
  },
  {
    id: 2,
    text: '大きな買い物をする時は？',
    options: [
      { text: '欲しいと思ったら買う', type: 'quick' },
      { text: '徹底的に調べてから', type: 'analytical' },
      { text: '家族や友人に相談', type: 'collaborative' },
      { text: 'ピンときたら買う', type: 'intuitive' },
    ],
  },
  {
    id: 3,
    text: '仕事で重要な決断を迫られたら？',
    options: [
      { text: '素早く判断する', type: 'quick' },
      { text: 'データを集めて分析', type: 'analytical' },
      { text: 'チームで話し合う', type: 'collaborative' },
      { text: '経験と勘を信じる', type: 'intuitive' },
    ],
  },
  {
    id: 4,
    text: '決断した後、後悔することは？',
    options: [
      { text: 'ほとんどない', type: 'quick' },
      { text: '時々ある、もっと調べればよかったと', type: 'analytical' },
      { text: 'みんなの意見を聞いておけばと思う', type: 'collaborative' },
      { text: 'あまり振り返らない', type: 'intuitive' },
    ],
  },
  {
    id: 5,
    text: '選択肢が多すぎると？',
    options: [
      { text: 'とりあえず一つ選ぶ', type: 'quick' },
      { text: '絞り込むための基準を作る', type: 'analytical' },
      { text: '誰かにアドバイスを求める', type: 'collaborative' },
      { text: '心が動くものを選ぶ', type: 'intuitive' },
    ],
  },
  {
    id: 6,
    text: '締め切りが迫っている時は？',
    options: [
      { text: '即決する', type: 'quick' },
      { text: '可能な範囲で情報を集める', type: 'analytical' },
      { text: '信頼できる人に確認', type: 'collaborative' },
      { text: '最終的には直感', type: 'intuitive' },
    ],
  },
  {
    id: 7,
    text: '失敗するリスクがある決断は？',
    options: [
      { text: 'リスクを取ってでも進む', type: 'quick' },
      { text: 'リスクを最小限にする方法を考える', type: 'analytical' },
      { text: 'みんなの意見を聞いて判断', type: 'collaborative' },
      { text: '自分を信じて決める', type: 'intuitive' },
    ],
  },
  {
    id: 8,
    text: '決断に必要な時間は？',
    options: [
      { text: '短いほうがいい', type: 'quick' },
      { text: '十分な時間が欲しい', type: 'analytical' },
      { text: '相談する時間が欲しい', type: 'collaborative' },
      { text: '感覚が定まるまで', type: 'intuitive' },
    ],
  },
  {
    id: 9,
    text: '人生の大きな決断（転職・引越しなど）は？',
    options: [
      { text: '思い切って行動', type: 'quick' },
      { text: 'メリット・デメリットを整理', type: 'analytical' },
      { text: '周りの人に相談してから', type: 'collaborative' },
      { text: '運命を感じたら動く', type: 'intuitive' },
    ],
  },
  {
    id: 10,
    text: '決断力の源は？',
    options: [
      { text: '行動力と度胸', type: 'quick' },
      { text: '情報と分析', type: 'analytical' },
      { text: '人の意見と協力', type: 'collaborative' },
      { text: '直感と経験', type: 'intuitive' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  decisionStyle: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  quick: {
    type: 'quick',
    title: 'スピード決断タイプ',
    emoji: '⚡🎯',
    decisionStyle: '決断力：★★★★★',
    description: '迷わず素早く決断できるタイプ。行動力があり、チャンスを逃しません。スピード感のある決断で周りを引っ張るリーダー的存在です。',
    characteristics: ['即断即決', '行動力がある', 'リスクを恐れない', 'チャンスを掴む'],
    tips: ['時には立ち止まることも大切', '重要な決断は少し時間を', '他の人の意見も聞いてみて'],
  },
  analytical: {
    type: 'analytical',
    title: '分析型決断タイプ',
    emoji: '🔍📈',
    decisionStyle: '決断力：★★★★☆',
    description: '情報を集めて論理的に判断するタイプ。データに基づいた決断ができ、失敗のリスクを最小限に抑えます。慎重で賢い決断の持ち主。',
    characteristics: ['論理的', '慎重', '情報重視', 'リスク管理が得意'],
    tips: ['分析麻痺に注意', '完璧を求めすぎないで', '時には直感も信じて'],
  },
  collaborative: {
    type: 'collaborative',
    title: '協調型決断タイプ',
    emoji: '🤝💭',
    decisionStyle: '決断力：★★★☆☆',
    description: '周りの意見を大切にするタイプ。一人で抱え込まず、チームで決断することで、みんなが納得できる結果を導きます。協調性の高い決断者。',
    characteristics: ['協調性がある', '謙虚', 'チームワーク重視', 'コンセンサスを大切にする'],
    tips: ['最終的には自分で決断を', '意見を聞きすぎると迷うことも', '自分の意見も大切に'],
  },
  intuitive: {
    type: 'intuitive',
    title: '直感型決断タイプ',
    emoji: '✨🔮',
    decisionStyle: '決断力：★★★★☆',
    description: '直感や経験を信じて決断するタイプ。言葉にできない感覚で正解を導き出すことができます。独自の判断基準を持つクリエイティブな決断者。',
    characteristics: ['直感的', '経験を活かす', 'クリエイティブ', '独自の視点'],
    tips: ['時にはデータも参考に', '直感の根拠を言葉にしてみて', '失敗からも学ぼう'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { quick: 0, analytical: 0, collaborative: 0, intuitive: 0 };

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
