// 本音と建前レベル診断 (혼네 vs 다테마에 레벨 테스트)
export const questions = [
  {
    id: 1,
    text: '友達の新しい髪型が似合わないと思ったら？',
    options: [
      { text: '「似合うね！」と褒める', type: 'tatemae' },
      { text: '「前の方が好きだったかも」と正直に', type: 'honne' },
      { text: '髪型には触れず別の話題に', type: 'kaihi' },
      { text: '「イメチェンだね！」と曖昧に', type: 'balance' },
    ],
  },
  {
    id: 2,
    text: '行きたくない誘いを受けたら？',
    options: [
      { text: '「予定があって…」と嘘をつく', type: 'tatemae' },
      { text: '「ちょっと気乗りしなくて」と正直に', type: 'honne' },
      { text: '返信を遅らせて様子見', type: 'kaihi' },
      { text: '「今回は難しいけど、また誘って」と言う', type: 'balance' },
    ],
  },
  {
    id: 3,
    text: '上司のつまらない話を聞いている時は？',
    options: [
      { text: '興味深そうに「へぇ〜」と相槌', type: 'tatemae' },
      { text: '「すみません、ちょっと急ぎの仕事が」と切り上げる', type: 'honne' },
      { text: '心ここにあらず、でも表情は保つ', type: 'kaihi' },
      { text: '話題を変えるタイミングを探る', type: 'balance' },
    ],
  },
  {
    id: 4,
    text: '友達の料理が美味しくなかったら？',
    options: [
      { text: '「美味しい！」と笑顔で完食', type: 'tatemae' },
      { text: '「ちょっと味が…」と正直に伝える', type: 'honne' },
      { text: '少しだけ食べてお腹いっぱいのふり', type: 'kaihi' },
      { text: '「次はもう少し〇〇するといいかも」と提案', type: 'balance' },
    ],
  },
  {
    id: 5,
    text: 'SNSで微妙な投稿を見たら？',
    options: [
      { text: 'とりあえず「いいね」を押す', type: 'tatemae' },
      { text: '思ったことをコメントする', type: 'honne' },
      { text: 'スルーする', type: 'kaihi' },
      { text: '無難なスタンプでリアクション', type: 'balance' },
    ],
  },
  {
    id: 6,
    text: '本当は怒っている時、態度は？',
    options: [
      { text: '笑顔で「大丈夫」と言う', type: 'tatemae' },
      { text: '「怒ってる」と正直に言う', type: 'honne' },
      { text: '黙って距離を置く', type: 'kaihi' },
      { text: '少し時間を置いてから話す', type: 'balance' },
    ],
  },
  {
    id: 7,
    text: '興味のない話を延々とされたら？',
    options: [
      { text: '「面白いね！」と盛り上げる', type: 'tatemae' },
      { text: '「ごめん、あまり興味なくて」と言う', type: 'honne' },
      { text: '適当に聞き流す', type: 'kaihi' },
      { text: '自分の興味ある話題にさりげなく誘導', type: 'balance' },
    ],
  },
  {
    id: 8,
    text: '相手の服にタグがついていたら？',
    options: [
      { text: '見て見ぬふりをする', type: 'tatemae' },
      { text: '「タグついてるよ」とすぐ教える', type: 'honne' },
      { text: 'こっそり取ってあげる', type: 'kaihi' },
      { text: 'タイミングを見て小声で教える', type: 'balance' },
    ],
  },
  {
    id: 9,
    text: '友達の恋人が「微妙」だと思ったら？',
    options: [
      { text: '「お似合いだね！」と応援', type: 'tatemae' },
      { text: '「正直、ちょっと心配」と伝える', type: 'honne' },
      { text: '何も言わず見守る', type: 'kaihi' },
      { text: '「幸せならOK」と言いつつ様子を見る', type: 'balance' },
    ],
  },
  {
    id: 10,
    text: '自分の性格を一言で言うと？',
    options: [
      { text: '空気を読んで合わせる協調型', type: 'tatemae' },
      { text: '思ったことは言う正直型', type: 'honne' },
      { text: '面倒は避けたい平和主義型', type: 'kaihi' },
      { text: '状況を見て使い分ける器用型', type: 'balance' },
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
  tatemae: {
    type: 'tatemae',
    title: '建前マスター',
    emoji: '🎭',
    percentage: '建前度 95%',
    description: '空気を読むのが上手で、人間関係を円滑にする達人。相手を傷つけないことを第一に考えます。ただ、たまには本音を言っても大丈夫ですよ。',
    characteristics: ['空気が読める', '気配り上手', '社交的', '穏やか', '配慮深い'],
    advice: '信頼できる人には本音を話してみて。心が軽くなりますよ。',
  },
  honne: {
    type: 'honne',
    title: '本音ストレート',
    emoji: '💬',
    percentage: '本音度 90%',
    description: '思ったことをはっきり言える貴重な存在。嘘がつけない正直者です。周りからは「わかりやすい」と言われることが多いのでは？',
    characteristics: ['正直', 'わかりやすい', '裏表がない', '信頼される', 'ストレート'],
    advice: '時には相手の気持ちを考えた言い方も大切です。',
  },
  kaihi: {
    type: 'kaihi',
    title: '回避の達人',
    emoji: '🌫️',
    percentage: '回避度 85%',
    description: '面倒なことは避けたい平和主義者。本音も建前も使わず、そっと距離を取るのが得意。ただ、時には向き合うことも必要かも。',
    characteristics: ['平和主義', '争い嫌い', 'マイペース', '観察者', '慎重'],
    advice: 'たまには自分の意見を伝えてみて。意外と受け入れてもらえますよ。',
  },
  balance: {
    type: 'balance',
    title: 'バランス型',
    emoji: '⚖️',
    percentage: 'バランス度 80%',
    description: '本音と建前を状況に応じて使い分けられる器用なタイプ。相手や場面を見て、最適な対応ができます。コミュニケーション上手！',
    characteristics: ['器用', '状況判断力', 'コミュ力高い', '柔軟', '大人'],
    advice: 'そのバランス感覚は素晴らしい！自信を持って。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { tatemae: 0, honne: 0, kaihi: 0, balance: 0 };

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
