// フェイクニュース耐性診断 - あなたの情報リテラシーは？
export const questions = [
  {
    id: 1,
    text: 'SNSで「〇〇が健康に良い！」という投稿を見たら？',
    options: [
      { text: 'すぐに試してみる', type: 'low' },
      { text: 'いいねが多ければ信じる', type: 'medium_low' },
      { text: '一応検索して確認する', type: 'medium_high' },
      { text: '論文や専門家の意見を調べる', type: 'high' },
    ],
  },
  {
    id: 2,
    text: '「拡散希望！」というメッセージが回ってきたら？',
    options: [
      { text: '急いで拡散する', type: 'low' },
      { text: '知り合いからなら拡散する', type: 'medium_low' },
      { text: '本当かどうか調べてから判断', type: 'medium_high' },
      { text: '基本的に拡散しない', type: 'high' },
    ],
  },
  {
    id: 3,
    text: 'ニュースの情報源を確認する？',
    options: [
      { text: 'あまり気にしない', type: 'low' },
      { text: '有名なメディアなら信じる', type: 'medium_low' },
      { text: '複数のメディアで確認する', type: 'medium_high' },
      { text: '一次情報まで遡って確認する', type: 'high' },
    ],
  },
  {
    id: 4,
    text: '「〇〇%の人が〜」という統計データを見たら？',
    options: [
      { text: 'そのまま信じる', type: 'low' },
      { text: '数字があると信頼できそう', type: 'medium_low' },
      { text: '調査方法や対象者を確認する', type: 'medium_high' },
      { text: '統計の取り方に問題がないか検証', type: 'high' },
    ],
  },
  {
    id: 5,
    text: '衝撃的なニュースを見た時の反応は？',
    options: [
      { text: '驚いてすぐSNSでシェア', type: 'low' },
      { text: '感情的に反応してしまう', type: 'medium_low' },
      { text: '一旦冷静になって調べる', type: 'medium_high' },
      { text: '衝撃的なほど疑ってかかる', type: 'high' },
    ],
  },
  {
    id: 6,
    text: '自分の信じたいことを支持する情報を見つけたら？',
    options: [
      { text: '「やっぱり！」と嬉しくなる', type: 'low' },
      { text: '自分の意見が正しいと確信する', type: 'medium_low' },
      { text: '反対意見も探してみる', type: 'medium_high' },
      { text: '確証バイアスに注意しながら検証', type: 'high' },
    ],
  },
  {
    id: 7,
    text: 'AIが作った偽画像・偽動画について',
    options: [
      { text: 'よく分からない', type: 'low' },
      { text: '聞いたことはあるけど見分けられない', type: 'medium_low' },
      { text: '不自然な点がないか注意している', type: 'medium_high' },
      { text: 'ディープフェイクの特徴を理解している', type: 'high' },
    ],
  },
  {
    id: 8,
    text: '「専門家も推奨！」と書いてあったら？',
    options: [
      { text: '専門家が言うなら正しい', type: 'low' },
      { text: '権威があると安心する', type: 'medium_low' },
      { text: 'どんな専門家か確認する', type: 'medium_high' },
      { text: '利益相反がないかまで調べる', type: 'high' },
    ],
  },
  {
    id: 9,
    text: '情報の「日付」を確認している？',
    options: [
      { text: 'あまり見ない', type: 'low' },
      { text: '言われれば確認する程度', type: 'medium_low' },
      { text: '古い情報じゃないかチェックする', type: 'medium_high' },
      { text: '必ず確認し、最新情報と照合する', type: 'high' },
    ],
  },
  {
    id: 10,
    text: 'フェイクニュースに騙されないために心がけていることは？',
    options: [
      { text: '特に何もしていない', type: 'low' },
      { text: '信頼できる人の情報を参考にする', type: 'medium_low' },
      { text: '複数の情報源を比較する習慣', type: 'medium_high' },
      { text: 'ファクトチェックサイトも活用する', type: 'high' },
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
  low: {
    type: 'low',
    title: '素直受信タイプ',
    emoji: '📱',
    percentage: '耐性 25%',
    description: '情報を素直に受け取りやすいタイプ。人を信じる心は美しいですが、ネット上では悪意ある情報も多いのが現実。少し疑う目を持つことで、騙されるリスクを減らせます。',
    characteristics: ['素直', '信じやすい', '感情的になりやすい', '情報確認少なめ', '拡散しがち'],
    advice: '「本当かな？」と一度立ち止まる習慣を。拡散前に10秒考えるだけで、被害を防げます。',
  },
  medium_low: {
    type: 'medium_low',
    title: '権威信頼タイプ',
    emoji: '📰',
    percentage: '耐性 45%',
    description: '有名なメディアや専門家の言葉を信じやすいタイプ。権威を参考にすることは悪くないですが、専門家でも間違えることはあり、メディアにもバイアスがあることを意識しましょう。',
    characteristics: ['権威を信頼', 'ブランド重視', '一定の判断力', '検証は限定的', '受動的'],
    advice: '「誰が言っているか」だけでなく「根拠は何か」も確認する癖をつけると、情報リテラシーがアップ！',
  },
  medium_high: {
    type: 'medium_high',
    title: '慎重確認タイプ',
    emoji: '🔎',
    percentage: '耐性 75%',
    description: '情報を鵜呑みにせず、一応確認するタイプ。複数の情報源をチェックする習慣があり、騙されにくい方です。もう一歩踏み込んで一次情報まで確認できると完璧！',
    characteristics: ['慎重', '確認習慣あり', '批判的思考', '複数情報源', '冷静'],
    advice: '良い習慣が身についています！さらに一次情報（論文、公式発表）まで遡れると最強です。',
  },
  high: {
    type: 'high',
    title: 'ファクトチェッカータイプ',
    emoji: '🛡️',
    percentage: '耐性 95%',
    description: '情報リテラシーの達人！一次情報の確認、バイアスへの意識、ファクトチェックの習慣が身についています。フェイクニュースに騙されにくく、周りにも正しい情報を伝えられます。',
    characteristics: ['批判的思考', 'ファクトチェック習慣', 'バイアス意識', '一次情報重視', '情報発信に慎重'],
    advice: '素晴らしいリテラシー！その知識を周りにも共有して、フェイクニュース被害を減らす力になってください。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { low: 0, medium_low: 0, medium_high: 0, high: 0 };

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
