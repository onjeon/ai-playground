// 人生満足度診断テスト (인생 만족도 테스트)
export const questions = [
  {
    id: 1,
    text: '朝起きた時の気分は？',
    options: [
      { text: '今日も楽しみ！ワクワクする', type: 'high' },
      { text: 'まあまあ普通かな', type: 'moderate' },
      { text: 'ちょっと憂鬱...', type: 'low' },
      { text: '今日やるべきことを考えると気が重い', type: 'verylow' },
    ],
  },
  {
    id: 2,
    text: '今の仕事や学業についてどう思う？',
    options: [
      { text: 'やりがいがあって楽しい', type: 'high' },
      { text: '特に不満はない', type: 'moderate' },
      { text: 'もっと違うことをしたい', type: 'low' },
      { text: '毎日が苦痛に感じる', type: 'verylow' },
    ],
  },
  {
    id: 3,
    text: '人間関係について満足している？',
    options: [
      { text: '大切な人に囲まれて幸せ', type: 'high' },
      { text: 'そこそこ満足している', type: 'moderate' },
      { text: 'もう少し深い関係がほしい', type: 'low' },
      { text: '孤独を感じることが多い', type: 'verylow' },
    ],
  },
  {
    id: 4,
    text: '自分の将来についてどう思う？',
    options: [
      { text: '明るい未来が見える', type: 'high' },
      { text: 'なんとかなると思っている', type: 'moderate' },
      { text: '少し不安がある', type: 'low' },
      { text: '先が見えなくて怖い', type: 'verylow' },
    ],
  },
  {
    id: 5,
    text: '趣味や好きなことを楽しめている？',
    options: [
      { text: '充実した時間を過ごせている', type: 'high' },
      { text: '時々楽しめている', type: 'moderate' },
      { text: 'あまり時間が取れない', type: 'low' },
      { text: '何も楽しめない状態', type: 'verylow' },
    ],
  },
  {
    id: 6,
    text: '自分のことをどう思っている？',
    options: [
      { text: '自分のことが好き', type: 'high' },
      { text: '悪くないと思う', type: 'moderate' },
      { text: '自信がない部分が多い', type: 'low' },
      { text: '自分が嫌いになることがある', type: 'verylow' },
    ],
  },
  {
    id: 7,
    text: '健康状態はどう？',
    options: [
      { text: '元気いっぱい！体調も良い', type: 'high' },
      { text: 'まあまあ健康', type: 'moderate' },
      { text: '少し疲れ気味', type: 'low' },
      { text: '体調を崩すことが多い', type: 'verylow' },
    ],
  },
  {
    id: 8,
    text: '毎日に感謝できている？',
    options: [
      { text: '小さなことにも感謝できる', type: 'high' },
      { text: '時々感謝を感じる', type: 'moderate' },
      { text: '忙しくてあまり考えない', type: 'low' },
      { text: '不満のほうが多い', type: 'verylow' },
    ],
  },
  {
    id: 9,
    text: '夢や目標はある？',
    options: [
      { text: 'ワクワクする夢がある', type: 'high' },
      { text: 'なんとなくある', type: 'moderate' },
      { text: '見つからない', type: 'low' },
      { text: '夢を持つ余裕がない', type: 'verylow' },
    ],
  },
  {
    id: 10,
    text: '今の人生を10点満点で評価すると？',
    options: [
      { text: '8〜10点：とても満足！', type: 'high' },
      { text: '5〜7点：まあまあかな', type: 'moderate' },
      { text: '3〜4点：もっと良くしたい', type: 'low' },
      { text: '1〜2点：正直辛い', type: 'verylow' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  satisfactionLevel: string;
  description: string;
  characteristics: string[];
  improvements: string[];
  message: string;
}> = {
  high: {
    type: 'high',
    title: '人生充実タイプ',
    emoji: '🌟😊',
    satisfactionLevel: '人生満足度：★★★★★',
    description: 'あなたは今の人生にとても満足しています。日々の小さな幸せを感じられる、とても素敵な心の状態です。',
    characteristics: ['ポジティブ思考', '感謝の心がある', '目標を持っている', '人間関係が良好'],
    improvements: ['この幸せを周りにも分け与えましょう', '新しい挑戦で更なる成長を'],
    message: '今の幸せを大切にしながら、さらに充実した毎日を過ごしてください！',
  },
  moderate: {
    type: 'moderate',
    title: 'バランス型タイプ',
    emoji: '⚖️🙂',
    satisfactionLevel: '人生満足度：★★★☆☆',
    description: 'あなたは人生にそこそこ満足していますが、もう少し充実感がほしいと感じているかもしれません。',
    characteristics: ['現実的な視点', '安定を求める', '慎重派', 'バランス感覚がある'],
    improvements: ['小さな目標を立ててみる', '新しい趣味に挑戦する', '人との繋がりを大切にする'],
    message: '小さな変化が大きな満足につながります。一歩踏み出してみましょう！',
  },
  low: {
    type: 'low',
    title: '成長途上タイプ',
    emoji: '🌱💭',
    satisfactionLevel: '人生満足度：★★☆☆☆',
    description: 'あなたは今、人生に物足りなさを感じているかもしれません。でも、それは変化を求めているサインです。',
    characteristics: ['向上心がある', '現状に疑問を持てる', '変化を求めている', '自己分析ができる'],
    improvements: ['自分が本当にやりたいことを考える', '信頼できる人に相談する', '生活リズムを整える'],
    message: '今の気持ちを大切に。変わりたいと思えることが、成長の第一歩です。',
  },
  verylow: {
    type: 'verylow',
    title: '休息が必要タイプ',
    emoji: '🛋️💙',
    satisfactionLevel: '人生満足度：★☆☆☆☆',
    description: 'あなたは今、とても疲れているかもしれません。無理をせず、自分を大切にすることが必要な時期です。',
    characteristics: ['頑張り屋', '責任感が強い', '自分を後回しにしがち', '助けを求めるのが苦手'],
    improvements: ['まずは休息を取る', '専門家に相談することも検討する', '自分を責めない'],
    message: 'あなたは十分頑張っています。今は休んでいいんですよ。一人で抱え込まないでください。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, moderate: 0, low: 0, verylow: 0 };

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
