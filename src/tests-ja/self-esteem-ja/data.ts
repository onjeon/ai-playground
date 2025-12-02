// 自己肯定感診断テスト (자존감 레벨 테스트)
export const questions = [
  {
    id: 1,
    text: '自分のことをどう思っている？',
    options: [
      { text: '自分が好き、価値がある', type: 'high' },
      { text: 'まあまあ悪くないと思う', type: 'moderate' },
      { text: '自信がない部分が多い', type: 'low' },
      { text: '自分が嫌いになることがある', type: 'verylow' },
    ],
  },
  {
    id: 2,
    text: '失敗した時、どう考える？',
    options: [
      { text: '成長のチャンスだと思える', type: 'high' },
      { text: '落ち込むけど立ち直れる', type: 'moderate' },
      { text: '自分を責めてしまう', type: 'low' },
      { text: '自分はダメだと思ってしまう', type: 'verylow' },
    ],
  },
  {
    id: 3,
    text: '人と比較することは？',
    options: [
      { text: 'あまりしない、自分は自分', type: 'high' },
      { text: '時々するけど気にしすぎない', type: 'moderate' },
      { text: 'つい比較してしまう', type: 'low' },
      { text: 'いつも比較して落ち込む', type: 'verylow' },
    ],
  },
  {
    id: 4,
    text: '褒められた時の反応は？',
    options: [
      { text: '素直に喜べる', type: 'high' },
      { text: '嬉しいけど少し照れる', type: 'moderate' },
      { text: '本心かな？と疑ってしまう', type: 'low' },
      { text: 'お世辞だと思ってしまう', type: 'verylow' },
    ],
  },
  {
    id: 5,
    text: '新しいことに挑戦する時は？',
    options: [
      { text: 'ワクワクする、やってみたい', type: 'high' },
      { text: '不安もあるけどチャレンジする', type: 'moderate' },
      { text: '失敗が怖くて躊躇する', type: 'low' },
      { text: '自分には無理だと思ってしまう', type: 'verylow' },
    ],
  },
  {
    id: 6,
    text: '自分の意見を言うことは？',
    options: [
      { text: '自信を持って言える', type: 'high' },
      { text: '場面によっては言える', type: 'moderate' },
      { text: '言うのが苦手', type: 'low' },
      { text: '自分の意見は価値がないと思う', type: 'verylow' },
    ],
  },
  {
    id: 7,
    text: '人からの評価について',
    options: [
      { text: '参考にはするけど、自分の価値は自分で決める', type: 'high' },
      { text: '気になるけど、気にしすぎないようにしている', type: 'moderate' },
      { text: 'すごく気になる', type: 'low' },
      { text: '評価が低いと自分の価値がないと感じる', type: 'verylow' },
    ],
  },
  {
    id: 8,
    text: '自分の長所を言えますか？',
    options: [
      { text: 'いくつも言える', type: 'high' },
      { text: '考えれば出てくる', type: 'moderate' },
      { text: 'あまり思いつかない', type: 'low' },
      { text: '長所がないと思う', type: 'verylow' },
    ],
  },
  {
    id: 9,
    text: '困った時、人に助けを求められる？',
    options: [
      { text: '素直に頼れる', type: 'high' },
      { text: '必要な時は頼める', type: 'moderate' },
      { text: '迷惑をかけたくなくて頼れない', type: 'low' },
      { text: '助けてもらう価値がないと思ってしまう', type: 'verylow' },
    ],
  },
  {
    id: 10,
    text: '自分の人生に満足している？',
    options: [
      { text: '満足している、これからも楽しみ', type: 'high' },
      { text: 'まあまあ満足', type: 'moderate' },
      { text: 'もっと変わりたい', type: 'low' },
      { text: '満足できることが少ない', type: 'verylow' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  selfEsteemLevel: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  advice: string;
}> = {
  high: {
    type: 'high',
    title: '高い自己肯定感',
    emoji: '🌟💪',
    selfEsteemLevel: '自己肯定感：★★★★★',
    description: 'あなたは自分の価値を認め、自信を持って生きています。失敗しても立ち直れる強さと、自分を愛する力を持った素敵な人です。',
    characteristics: ['自分を愛せる', '失敗を恐れない', '他人と比較しない', '自信がある'],
    strengths: ['レジリエンス', 'ポジティブ思考', 'チャレンジ精神', '安定した心'],
    advice: 'その素敵な自己肯定感を、周りの人を励ます力にも使ってください。あなたの存在が誰かの支えになります。',
  },
  moderate: {
    type: 'moderate',
    title: '安定した自己肯定感',
    emoji: '⚖️😊',
    selfEsteemLevel: '自己肯定感：★★★★☆',
    description: 'あなたはバランスの取れた自己肯定感を持っています。時に揺らぐこともありますが、自分を大切にする力を持っています。',
    characteristics: ['バランスが取れている', '現実的な自己評価', '柔軟性がある', '成長意欲がある'],
    strengths: ['適応力', '謙虚さと自信のバランス', '自己改善意欲', '安定感'],
    advice: '自分を責めすぎず、今の自分を認めることを続けてください。小さな成功体験を積み重ねることで、さらに自信がつきます。',
  },
  low: {
    type: 'low',
    title: '成長中の自己肯定感',
    emoji: '🌱💭',
    selfEsteemLevel: '自己肯定感：★★★☆☆',
    description: 'あなたは自分に厳しく、自信を持つことが難しいと感じているかもしれません。でも、それは成長したいという気持ちの表れでもあります。',
    characteristics: ['向上心がある', '謙虚', '自己反省ができる', '繊細'],
    strengths: ['成長の伸びしろ', '共感力', '努力家', '気配りができる'],
    advice: '自分の小さな良いところを毎日一つ見つけてみてください。自分を褒める練習が、自己肯定感を育てます。',
  },
  verylow: {
    type: 'verylow',
    title: 'セルフケアが必要',
    emoji: '💙🤗',
    selfEsteemLevel: '自己肯定感：★★☆☆☆',
    description: 'あなたは今、自分を大切にすることが難しい状態かもしれません。でも、あなたには価値があります。今は自分を癒す時間が必要です。',
    characteristics: ['繊細', '他人を優先しがち', '頑張り屋', '自分を後回しにする'],
    strengths: ['優しさ', '共感力', '他者への配慮', '内省力'],
    advice: 'あなたは十分価値のある存在です。信頼できる人に話を聞いてもらったり、専門家のサポートを受けることも検討してみてください。一人で抱え込まないでくださいね。',
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
