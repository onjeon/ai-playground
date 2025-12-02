// 謝り方診断 (사과 스타일 진단)
export const questions = [
  {
    id: 1,
    text: '友達との約束に遅刻してしまったら？',
    options: [
      { text: '「本当にごめん！」と何度も謝る', type: 'excessive' },
      { text: '「遅れてごめん」とシンプルに謝る', type: 'straightforward' },
      { text: '「電車が遅れて…」と理由を説明', type: 'explanatory' },
      { text: '「待った？お詫びに奢るね」と行動で示す', type: 'action' },
    ],
  },
  {
    id: 2,
    text: '仕事でミスをしてしまったら？',
    options: [
      { text: '「申し訳ありません」と深々と頭を下げる', type: 'excessive' },
      { text: '「すみません、すぐ修正します」と対応', type: 'straightforward' },
      { text: '「こういう経緯で…」と原因を説明', type: 'explanatory' },
      { text: '黙々と修正して結果で挽回', type: 'action' },
    ],
  },
  {
    id: 3,
    text: '恋人を怒らせてしまったら？',
    options: [
      { text: '「許してくれるまで謝り続ける」', type: 'excessive' },
      { text: '「ごめん、悪かった」と素直に謝る', type: 'straightforward' },
      { text: '「誤解があって…」と自分の意図を説明', type: 'explanatory' },
      { text: '好きな料理を作るなど行動で示す', type: 'action' },
    ],
  },
  {
    id: 4,
    text: '人にぶつかってしまったら？',
    options: [
      { text: '「大丈夫ですか！？すみません！」と慌てる', type: 'excessive' },
      { text: '「すみません」と頭を下げる', type: 'straightforward' },
      { text: '「急いでいたもので…」と一言添える', type: 'explanatory' },
      { text: '落としたものを拾ってあげる', type: 'action' },
    ],
  },
  {
    id: 5,
    text: '友達の秘密をうっかり話してしまったら？',
    options: [
      { text: '何度も謝って自己嫌悪に陥る', type: 'excessive' },
      { text: '「ごめん、軽率だった」と認める', type: 'straightforward' },
      { text: '「悪気はなくて…」と弁明', type: 'explanatory' },
      { text: '相手のフォローに回る', type: 'action' },
    ],
  },
  {
    id: 6,
    text: '謝る時、目線は？',
    options: [
      { text: '申し訳なさそうに下を向く', type: 'excessive' },
      { text: '相手の目を見て謝る', type: 'straightforward' },
      { text: '状況を見ながら話す', type: 'explanatory' },
      { text: '謝りながら解決策を考えている', type: 'action' },
    ],
  },
  {
    id: 7,
    text: 'LINEで謝る時のスタイルは？',
    options: [
      { text: '長文で気持ちを伝える', type: 'excessive' },
      { text: '「ごめん」とシンプルに', type: 'straightforward' },
      { text: '経緯を説明してから謝る', type: 'explanatory' },
      { text: '「埋め合わせさせて」と提案', type: 'action' },
    ],
  },
  {
    id: 8,
    text: '自分は悪くないのに謝る場面、どうする？',
    options: [
      { text: 'とりあえず謝っておく', type: 'excessive' },
      { text: '「でも私は…」と主張する', type: 'straightforward' },
      { text: '冷静に事実を説明する', type: 'explanatory' },
      { text: '場を収めることを優先', type: 'action' },
    ],
  },
  {
    id: 9,
    text: '謝った後の気持ちは？',
    options: [
      { text: 'しばらく引きずって落ち込む', type: 'excessive' },
      { text: 'スッキリして切り替える', type: 'straightforward' },
      { text: '相手が納得したか気になる', type: 'explanatory' },
      { text: '次に同じことをしない方法を考える', type: 'action' },
    ],
  },
  {
    id: 10,
    text: '自分の謝り方を一言で言うと？',
    options: [
      { text: '謝りすぎるくらい謝る', type: 'excessive' },
      { text: 'シンプルに潔く謝る', type: 'straightforward' },
      { text: '理由や背景も伝えたい', type: 'explanatory' },
      { text: '言葉より行動で示す', type: 'action' },
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
  excessive: {
    type: 'excessive',
    title: '誠意あふれる謝罪タイプ',
    emoji: '🙇',
    percentage: '謝罪誠意度 100%',
    description: '何度も謝る、謝りすぎるくらい誠実なあなた。相手への申し訳なさが人一倍強く、自分を責めがち。その誠実さは素晴らしいですが、自分を許すことも大切です。',
    characteristics: ['誠実', '責任感が強い', '繊細', '相手思い', '反省しすぎる'],
    advice: '謝ったら自分を許して。一度の謝罪で十分伝わっていますよ。',
  },
  straightforward: {
    type: 'straightforward',
    title: 'シンプル謝罪タイプ',
    emoji: '🎯',
    percentage: '潔さ度 90%',
    description: '「ごめん」の一言に気持ちを込める潔いあなた。言い訳せずストレートに謝れる姿は好印象。シンプルだけど、その分気持ちが伝わります。',
    characteristics: ['潔い', 'ストレート', 'さっぱり', '素直', '切り替えが早い'],
    advice: 'その潔さは魅力的！必要に応じて理由を添えると、より伝わることも。',
  },
  explanatory: {
    type: 'explanatory',
    title: '理解を求める謝罪タイプ',
    emoji: '📝',
    percentage: '説明力 85%',
    description: '謝罪と一緒に背景や理由を伝えたいあなた。相手に理解してほしい気持ちが強く、誤解を解きたいタイプ。ただ、時には言い訳に聞こえることも。',
    characteristics: ['論理的', '丁寧', '誤解されたくない', '几帳面', '慎重'],
    advice: 'まず謝罪、その後に説明。順番を意識すると印象が変わりますよ。',
  },
  action: {
    type: 'action',
    title: '行動で示す謝罪タイプ',
    emoji: '💪',
    percentage: '行動力 95%',
    description: '言葉より行動で誠意を見せるあなた。ミスをしたら挽回策を即実行、結果で信頼を取り戻すタイプ。「有言実行」ならぬ「無言実行」派。',
    characteristics: ['行動派', '結果重視', '頼もしい', '実務的', '信頼される'],
    advice: '素晴らしい姿勢！ただ、言葉での謝罪も相手には嬉しいものです。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { excessive: 0, straightforward: 0, explanatory: 0, action: 0 };

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
