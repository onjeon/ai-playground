// 楽観度診断
export const questions = [
  {
    id: 1,
    text: '朝起きたら雨だった。あなたの第一声は？',
    options: [
      { text: '「最悪...」とため息', type: 'pessimist' },
      { text: '「まあ、雨か」と淡々と', type: 'realist' },
      { text: '「傘持っていこう」と切り替え', type: 'optimist' },
      { text: '「雨の日も悪くないな」と楽しむ', type: 'superopt' },
    ],
  },
  {
    id: 2,
    text: '大事な試験や面接の前日、考えることは？',
    options: [
      { text: '「落ちたらどうしよう」と不安', type: 'pessimist' },
      { text: '「やれることはやった」と冷静に', type: 'realist' },
      { text: '「きっと大丈夫」と前向きに', type: 'optimist' },
      { text: '「うまくいく気しかしない！」とワクワク', type: 'superopt' },
    ],
  },
  {
    id: 3,
    text: '失敗したとき、まず何を考える？',
    options: [
      { text: '「やっぱり自分はダメだ」', type: 'pessimist' },
      { text: '「原因を分析しよう」', type: 'realist' },
      { text: '「次は上手くいくはず」', type: 'optimist' },
      { text: '「いい経験になった！」', type: 'superopt' },
    ],
  },
  {
    id: 4,
    text: '宝くじを買ったとき、どう思う？',
    options: [
      { text: '「どうせ当たらない」', type: 'pessimist' },
      { text: '「確率的には厳しいけど夢を買う」', type: 'realist' },
      { text: '「もしかしたら当たるかも！」', type: 'optimist' },
      { text: '「当たる気しかしない！」', type: 'superopt' },
    ],
  },
  {
    id: 5,
    text: '来週の天気予報が曇りのち雨。旅行の予定があるとき？',
    options: [
      { text: '「最悪、キャンセルしようかな」', type: 'pessimist' },
      { text: '「雨対策も考えておこう」', type: 'realist' },
      { text: '「当日は晴れるかも」', type: 'optimist' },
      { text: '「雨でも楽しめる！むしろ思い出になる」', type: 'superopt' },
    ],
  },
  {
    id: 6,
    text: 'コップに水が半分入っている。あなたの感想は？',
    options: [
      { text: '「もう半分しかない」', type: 'pessimist' },
      { text: '「半分入っている事実がある」', type: 'realist' },
      { text: '「まだ半分もある」', type: 'optimist' },
      { text: '「水があるだけでありがたい！」', type: 'superopt' },
    ],
  },
  {
    id: 7,
    text: '新しいプロジェクトを任されたとき？',
    options: [
      { text: '「失敗したらどうしよう」と不安', type: 'pessimist' },
      { text: '「計画的に進めよう」と分析', type: 'realist' },
      { text: '「チャンス！頑張ろう」とやる気', type: 'optimist' },
      { text: '「絶対成功させる！ワクワク！」', type: 'superopt' },
    ],
  },
  {
    id: 8,
    text: '友達との約束で相手が遅刻。連絡もない時？',
    options: [
      { text: '「何かあったのかも...最悪の事態を想像」', type: 'pessimist' },
      { text: '「電車でも遅れてるのかな」と推測', type: 'realist' },
      { text: '「もうすぐ来るでしょ」と楽観的', type: 'optimist' },
      { text: '「待ち時間も楽しい！」', type: 'superopt' },
    ],
  },
  {
    id: 9,
    text: '10年後の自分はどうなっていると思う？',
    options: [
      { text: '今より悪くなっている気がする', type: 'pessimist' },
      { text: '今とあまり変わらないかも', type: 'realist' },
      { text: 'きっと良くなっている', type: 'optimist' },
      { text: '最高の人生を送っているはず！', type: 'superopt' },
    ],
  },
  {
    id: 10,
    text: '「人生」を一言で表すと？',
    options: [
      { text: '困難の連続', type: 'pessimist' },
      { text: '山あり谷あり', type: 'realist' },
      { text: '楽しいことがいっぱい', type: 'optimist' },
      { text: '最高の冒険', type: 'superopt' },
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
  pessimist: {
    type: 'pessimist',
    title: '慎重派ネガティブ思考',
    emoji: '🌧️',
    percentage: '楽観度 20%',
    description: '物事を慎重に、最悪のケースも考えて行動するタイプ。それは決して悪いことではなく、リスク管理能力が高いとも言えます。ただ、少しだけポジティブな面にも目を向けてみては？',
    characteristics: ['慎重', 'リスク管理', '現実的', '用心深い', '準備万端'],
    advice: '1日1つ、良かったことを見つけてみて。世界が少し変わるかも。',
  },
  realist: {
    type: 'realist',
    title: 'バランス型リアリスト',
    emoji: '⚖️',
    percentage: '楽観度 50%',
    description: '現実をありのままに見つめられるバランスの取れたタイプ。楽観的すぎず、悲観的すぎず。冷静な判断ができる頼れる存在です。',
    characteristics: ['冷静', '分析的', '客観的', 'バランス感覚', '堅実'],
    advice: 'そのバランス感覚は強み。たまには夢を見てもいいんですよ。',
  },
  optimist: {
    type: 'optimist',
    title: 'ポジティブ楽天家',
    emoji: '🌈',
    percentage: '楽観度 80%',
    description: '物事の良い面を見つけられるポジティブシンキングの持ち主。困難な状況でも前向きに捉えられるため、周りにも良い影響を与えます。',
    characteristics: ['前向き', '明るい', '回復力が高い', '希望的', '元気を与える'],
    advice: 'その明るさは周りを救います。でも現実的な準備も忘れずに。',
  },
  superopt: {
    type: 'superopt',
    title: 'スーパーポジティブ人間',
    emoji: '✨',
    percentage: '楽観度 99%',
    description: 'どんな状況でもポジティブに捉えられる最強メンタルの持ち主。あなたの存在自体が周りを明るくする太陽のような人。時には現実を見ることも大切ですが、その前向きさは最大の武器です。',
    characteristics: ['超前向き', 'エネルギッシュ', '影響力大', '太陽のような存在', '無敵メンタル'],
    advice: '素晴らしい！でもたまには心配性な人の意見も聞いてみて。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { pessimist: 0, realist: 0, optimist: 0, superopt: 0 };

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
