// ストレス耐性診断 - あなたのメンタルの強さは？
export const questions = [
  {
    id: 1,
    text: '仕事で理不尽なことを言われたとき',
    options: [
      { text: '何日も引きずる、夜も眠れない', type: 'low' },
      { text: '数日はモヤモヤする', type: 'moderate' },
      { text: 'その日のうちに切り替えられる', type: 'high' },
      { text: '「はいはい」とスルーできる', type: 'iron' },
    ],
  },
  {
    id: 2,
    text: '複数の締め切りが重なったとき',
    options: [
      { text: 'パニック！頭が真っ白', type: 'low' },
      { text: 'かなり焦るけど何とかする', type: 'moderate' },
      { text: '優先順位をつけて淡々と対応', type: 'high' },
      { text: 'むしろ燃える、ゾーンに入る', type: 'iron' },
    ],
  },
  {
    id: 3,
    text: '失敗してしまったとき',
    options: [
      { text: '自分を責めて落ち込む', type: 'low' },
      { text: 'しばらくは気にしてしまう', type: 'moderate' },
      { text: '反省して次に活かす', type: 'high' },
      { text: '失敗も経験、すぐ前を向ける', type: 'iron' },
    ],
  },
  {
    id: 4,
    text: '周りの人がイライラしている環境では',
    options: [
      { text: '自分もイライラしてしまう', type: 'low' },
      { text: '影響を受けやすい', type: 'moderate' },
      { text: 'あまり影響されない', type: 'high' },
      { text: '全く気にならない', type: 'iron' },
    ],
  },
  {
    id: 5,
    text: '予定が急に変わったとき',
    options: [
      { text: 'すごくストレスを感じる', type: 'low' },
      { text: 'ちょっと戸惑う', type: 'moderate' },
      { text: '柔軟に対応できる', type: 'high' },
      { text: '何も感じない、いつものこと', type: 'iron' },
    ],
  },
  {
    id: 6,
    text: '睡眠不足のとき、どうなる？',
    options: [
      { text: '全然ダメ、機能しない', type: 'low' },
      { text: 'かなりキツイけど耐える', type: 'moderate' },
      { text: '多少なら問題なく動ける', type: 'high' },
      { text: '睡眠少なくても平気', type: 'iron' },
    ],
  },
  {
    id: 7,
    text: '人間関係のトラブルが起きたとき',
    options: [
      { text: '寝ても覚めても考えてしまう', type: 'low' },
      { text: '結構気になる', type: 'moderate' },
      { text: '落ち着いて対処できる', type: 'high' },
      { text: '淡々と解決策を考える', type: 'iron' },
    ],
  },
  {
    id: 8,
    text: '長時間労働が続いたとき',
    options: [
      { text: 'すぐに体調を崩す', type: 'low' },
      { text: 'かなり辛いけど耐える', type: 'moderate' },
      { text: 'ペース配分して乗り切る', type: 'high' },
      { text: 'あまり苦にならない', type: 'iron' },
    ],
  },
  {
    id: 9,
    text: '批判やネガティブな意見を受けたとき',
    options: [
      { text: '傷ついて立ち直れない', type: 'low' },
      { text: 'しばらく落ち込む', type: 'moderate' },
      { text: '建設的なものは受け入れる', type: 'high' },
      { text: '全く気にならない', type: 'iron' },
    ],
  },
  {
    id: 10,
    text: 'ストレスを感じたとき、体に出る？',
    options: [
      { text: 'すぐに出る（頭痛、胃痛など）', type: 'low' },
      { text: '時々出る', type: 'moderate' },
      { text: 'あまり出ない', type: 'high' },
      { text: 'ほとんど出たことがない', type: 'iron' },
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
    title: 'ガラスのハートタイプ',
    emoji: '💔',
    percentage: 'ストレス耐性 25%',
    description: '繊細で傷つきやすいタイプ。ストレスを感じやすく、体にも出やすいです。でもそれは悪いことじゃなく、感受性が豊かな証拠。自分を守る環境づくりが大切。',
    characteristics: ['繊細', '感受性豊か', '共感力', '芸術的', '直感的'],
    advice: 'ストレス環境から距離を置くことも大切。自分を守る術を身につけて。',
  },
  moderate: {
    type: 'moderate',
    title: '一般的ストレス耐性タイプ',
    emoji: '🌱',
    percentage: 'ストレス耐性 50%',
    description: '平均的なストレス耐性を持つタイプ。ストレスは感じるけど、時間が経てば回復できます。無理しすぎなければ、バランスを保てるタイプ。',
    characteristics: ['バランス型', '回復力', '適応力', '柔軟', '現実的'],
    advice: 'ストレスを溜めすぎないよう、こまめな発散を心がけて。',
  },
  high: {
    type: 'high',
    title: '強メンタルタイプ',
    emoji: '💪',
    percentage: 'ストレス耐性 80%',
    description: 'ストレスに強いタイプ。プレッシャーの中でも冷静に対処でき、立ち直りも早いです。周りから頼られることも多いはず。でも無理は禁物。',
    characteristics: ['タフ', '冷静', 'リーダーシップ', '安定感', '信頼性'],
    advice: '強いからこそ、無理しがち。たまには弱音を吐いてね。',
  },
  iron: {
    type: 'iron',
    title: '鋼のメンタルタイプ',
    emoji: '🦾',
    percentage: 'ストレス耐性 98%',
    description: 'ほぼ何があっても動じない鋼のメンタルの持ち主。ストレスという概念がほぼ存在しないかも。周りからは「強すぎる」と驚かれることも。',
    characteristics: ['無敵', '不動心', 'プレッシャー耐性', '胆力', 'カリスマ性'],
    advice: '素晴らしい強さ！でも、他の人の繊細さも理解してあげてね。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { low: 0, moderate: 0, high: 0, iron: 0 };

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
