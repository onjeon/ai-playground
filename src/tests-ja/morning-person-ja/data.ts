// 朝活適性度診断
export const questions = [
  {
    id: 1,
    text: '目覚まし時計が鳴る前に目が覚めることは？',
    options: [
      { text: 'ほぼ毎日、自然と目覚める', type: 'super_morning' },
      { text: 'よくある', type: 'morning' },
      { text: 'たまにある', type: 'neutral' },
      { text: 'ほとんどない、起きられない', type: 'not_morning' },
    ],
  },
  {
    id: 2,
    text: '朝5時に起きて活動することについてどう思う？',
    options: [
      { text: '最高！一番効率が良い時間', type: 'super_morning' },
      { text: 'やってみたい、興味がある', type: 'morning' },
      { text: '必要なら頑張れる', type: 'neutral' },
      { text: '絶対無理、考えられない', type: 'not_morning' },
    ],
  },
  {
    id: 3,
    text: '朝起きてすぐの頭の状態は？',
    options: [
      { text: 'クリアでスッキリ、すぐ活動できる', type: 'super_morning' },
      { text: '少しすれば頭が冴えてくる', type: 'morning' },
      { text: 'ぼんやりしている時間が長い', type: 'neutral' },
      { text: 'ずっと眠くてぼーっとする', type: 'not_morning' },
    ],
  },
  {
    id: 4,
    text: '朝ごはんについてはどう？',
    options: [
      { text: '起きてすぐお腹が空く、しっかり食べる', type: 'super_morning' },
      { text: '朝食を楽しみにしている', type: 'morning' },
      { text: '食べられるけど、食欲はそこそこ', type: 'neutral' },
      { text: '朝は食欲がない', type: 'not_morning' },
    ],
  },
  {
    id: 5,
    text: '朝の運動やジョギングについて',
    options: [
      { text: '大好き！朝が一番気持ちいい', type: 'super_morning' },
      { text: '朝の運動は効果的だと思う', type: 'morning' },
      { text: 'できなくはないけど辛い', type: 'neutral' },
      { text: '朝に運動なんて絶対無理', type: 'not_morning' },
    ],
  },
  {
    id: 6,
    text: '休日の朝はどう過ごす？',
    options: [
      { text: '平日と同じくらいに起きて活動する', type: 'super_morning' },
      { text: '少しゆっくりするけど朝活を楽しむ', type: 'morning' },
      { text: '休日くらいはゆっくり寝たい', type: 'neutral' },
      { text: '昼近くまで寝ている', type: 'not_morning' },
    ],
  },
  {
    id: 7,
    text: '朝の静けさについてどう思う？',
    options: [
      { text: '最も集中できる貴重な時間', type: 'super_morning' },
      { text: '心が落ち着いて好き', type: 'morning' },
      { text: '特に何も感じない', type: 'neutral' },
      { text: 'その時間は寝ていたい', type: 'not_morning' },
    ],
  },
  {
    id: 8,
    text: '朝活（朝の自己投資）を続けられそう？',
    options: [
      { text: 'すでに実践している', type: 'super_morning' },
      { text: '始めたら続けられる自信がある', type: 'morning' },
      { text: '三日坊主になりそう', type: 'neutral' },
      { text: '絶対に続かない', type: 'not_morning' },
    ],
  },
  {
    id: 9,
    text: '早朝（6時前）のカフェや図書館に行くとしたら？',
    options: [
      { text: 'ワクワクする！行きたい', type: 'super_morning' },
      { text: '良い体験になりそう', type: 'morning' },
      { text: '特別な理由があれば行ける', type: 'neutral' },
      { text: 'その時間は無理、起きられない', type: 'not_morning' },
    ],
  },
  {
    id: 10,
    text: '「早起きは三文の徳」という言葉について',
    options: [
      { text: '心から同意、実感している', type: 'super_morning' },
      { text: 'その通りだと思う', type: 'morning' },
      { text: '人によると思う', type: 'neutral' },
      { text: '自分には当てはまらない', type: 'not_morning' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  aptitude: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  super_morning: {
    type: 'super_morning',
    title: '朝活マスター',
    emoji: '🌅✨',
    aptitude: '朝活適性度：★★★★★',
    description: 'あなたは生まれながらの朝型人間。早朝から最高のパフォーマンスを発揮できる稀有な存在です。朝の時間を自己投資に使うことで、人生を大きく変える力を持っています。',
    characteristics: ['自然と早起きできる', '朝から頭がクリア', '朝ごはんが大好き', '朝の運動が得意'],
    tips: ['朝活コミュニティでリーダーになれるかも', '朝の時間を最大限活用して', '夜の予定は早めに切り上げよう'],
  },
  morning: {
    type: 'morning',
    title: '朝活ポテンシャル高め',
    emoji: '☀️🌱',
    aptitude: '朝活適性度：★★★★☆',
    description: '朝活に向いている素質を持っています。少しの工夫で朝型生活にシフトでき、朝の時間を有効活用することで大きな成果を得られるでしょう。',
    characteristics: ['朝は苦手じゃない', '午前中の調子が良い', '規則正しい生活ができる', '早寝ができる'],
    tips: ['就寝時間を30分ずつ早めてみて', '朝にやりたいことを見つけよう', '朝日を浴びる習慣を'],
  },
  neutral: {
    type: 'neutral',
    title: '朝活チャレンジャー',
    emoji: '🌤️💪',
    aptitude: '朝活適性度：★★★☆☆',
    description: '朝活は頑張れば可能ですが、無理は禁物。自分のペースで徐々に朝型にシフトしていくのがおすすめ。小さな成功体験を積み重ねることが大切です。',
    characteristics: ['努力すれば早起きできる', '朝は少し苦手', 'モチベーション次第', '環境を整えれば可能'],
    tips: ['いきなり早起きは避けて', '15分ずつ早く起きる練習を', '朝活仲間を見つけてモチベーションアップ'],
  },
  not_morning: {
    type: 'not_morning',
    title: '夜型で輝くタイプ',
    emoji: '🌙🦉',
    aptitude: '朝活適性度：★★☆☆☆',
    description: '無理な朝活はストレスのもと。あなたは夜の時間に集中力が高まるタイプかも。自分のリズムを大切にしながら、できる範囲で朝の時間を活用してみて。',
    characteristics: ['朝は体が動かない', '夜の方が調子が良い', '睡眠時間が大切', '自分のペースを重視'],
    tips: ['無理な早起きはしない', '夜の時間を有効活用して', '睡眠の質を上げることを優先'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { super_morning: 0, morning: 0, neutral: 0, not_morning: 0 };

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
