// 感謝タイプ診断 (감사 타입 진단)
export const questions = [
  {
    id: 1,
    text: '「ありがとう」を言う頻度は？',
    options: [
      { text: '何かしてもらったらすぐ言う', type: 'expressive' },
      { text: '大きなことには言う', type: 'reserved' },
      { text: '心の中で思うことが多い', type: 'silent' },
      { text: '言葉より行動で返す', type: 'action' },
    ],
  },
  {
    id: 2,
    text: 'プレゼントをもらった時は？',
    options: [
      { text: '「嬉しい！ありがとう！」と大喜び', type: 'expressive' },
      { text: '丁寧にお礼を伝える', type: 'reserved' },
      { text: '照れて上手く言えない', type: 'silent' },
      { text: '後日お返しをする', type: 'action' },
    ],
  },
  {
    id: 3,
    text: 'コンビニ店員や配達員にお礼は？',
    options: [
      { text: '必ず「ありがとうございます」', type: 'expressive' },
      { text: 'たまに言う', type: 'reserved' },
      { text: '会釈程度', type: 'silent' },
      { text: 'チップを渡したい気持ち', type: 'action' },
    ],
  },
  {
    id: 4,
    text: '親や家族への感謝は？',
    options: [
      { text: '日常的に伝える', type: 'expressive' },
      { text: '特別な日に伝える', type: 'reserved' },
      { text: '当たり前すぎて言いづらい', type: 'silent' },
      { text: '家事を手伝うなど行動で', type: 'action' },
    ],
  },
  {
    id: 5,
    text: '仕事で助けてもらった時は？',
    options: [
      { text: 'その場でしっかりお礼', type: 'expressive' },
      { text: '後でメールやチャットでお礼', type: 'reserved' },
      { text: '助かったとは思うけど…', type: 'silent' },
      { text: '次は自分が助ける', type: 'action' },
    ],
  },
  {
    id: 6,
    text: 'LINEでの「ありがとう」は？',
    options: [
      { text: 'スタンプや絵文字つきで送る', type: 'expressive' },
      { text: 'シンプルに文字で送る', type: 'reserved' },
      { text: '既読だけになることも…', type: 'silent' },
      { text: '言葉より実際に会った時に', type: 'action' },
    ],
  },
  {
    id: 7,
    text: '感謝の気持ちが湧く瞬間は？',
    options: [
      { text: '日常の小さなことでも', type: 'expressive' },
      { text: '特別な助けをもらった時', type: 'reserved' },
      { text: '後から振り返って感じる', type: 'silent' },
      { text: '行動で返せた時に実感', type: 'action' },
    ],
  },
  {
    id: 8,
    text: '感謝日記や感謝リストは？',
    options: [
      { text: 'やっている、または興味ある', type: 'expressive' },
      { text: '時々思い返すくらい', type: 'reserved' },
      { text: '特にしていない', type: 'silent' },
      { text: '書くより行動派', type: 'action' },
    ],
  },
  {
    id: 9,
    text: '誰かに感謝を伝えたい時',
    options: [
      { text: '直接言葉で伝える', type: 'expressive' },
      { text: '手紙やメッセージで', type: 'reserved' },
      { text: '伝えるのが恥ずかしい', type: 'silent' },
      { text: '何かプレゼントや行動で', type: 'action' },
    ],
  },
  {
    id: 10,
    text: 'あなたの感謝の伝え方は？',
    options: [
      { text: '言葉でストレートに伝える', type: 'expressive' },
      { text: '改まった場面で丁寧に', type: 'reserved' },
      { text: '心の中で大切に思う', type: 'silent' },
      { text: '行動や態度で示す', type: 'action' },
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
  expressive: {
    type: 'expressive',
    title: 'ストレート感謝タイプ',
    emoji: '💝',
    percentage: '感謝表現度 100%',
    description: '「ありがとう」が自然に出てくる感謝上手！小さなことにも感謝を忘れず、周りを明るくする存在。あなたの「ありがとう」で救われている人がきっといます。',
    characteristics: ['感謝上手', 'ポジティブ', '周りを明るくする', '素直', '愛される'],
    advice: 'その感謝力は最高の才能！周りの人もあなたに感謝しているはずです。',
  },
  reserved: {
    type: 'reserved',
    title: '丁寧感謝タイプ',
    emoji: '🎀',
    percentage: '感謝丁寧度 85%',
    description: '特別な場面でしっかりと感謝を伝える丁寧派。日常では控えめでも、大切な時にはきちんと気持ちを伝えられる。その誠実さが信頼につながっています。',
    characteristics: ['丁寧', '誠実', '控えめ', '大切な時に伝える', '信頼される'],
    advice: '素敵な姿勢！日常の小さな「ありがとう」も増やすと、さらに関係が温まりますよ。',
  },
  silent: {
    type: 'silent',
    title: '秘めた感謝タイプ',
    emoji: '💭',
    percentage: '心の感謝度 80%',
    description: '感謝はしているけど、言葉にするのが照れくさい。心の中ではいつも「ありがたいな」と思っている、シャイな感謝タイプ。気持ちはあるのに伝わりにくいかも。',
    characteristics: ['シャイ', '照れ屋', '心の中で感謝', '不器用', '奥ゆかしい'],
    advice: '心で思っているだけでは伝わらないことも。勇気を出して「ありがとう」を！',
  },
  action: {
    type: 'action',
    title: '行動で示す感謝タイプ',
    emoji: '🤲',
    percentage: '行動感謝度 90%',
    description: '言葉より行動で感謝を示すタイプ。お返しをしたり、相手のために何かしたり。「ありがとう」と言う代わりに、態度で示す実直な感謝の形。',
    characteristics: ['行動派', '実直', 'お返し上手', '信頼される', '言葉より態度'],
    advice: '行動での感謝は素晴らしい！でも、言葉を添えるとさらに気持ちが伝わりますよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { expressive: 0, reserved: 0, silent: 0, action: 0 };

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
