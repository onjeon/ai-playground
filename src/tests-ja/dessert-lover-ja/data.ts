// デザート好きタイプ診断
export const questions = [
  {
    id: 1,
    text: '食後のデザートは？',
    options: [
      { text: '絶対外せない！', type: 'essential' },
      { text: '美味しそうなら頼む', type: 'casual' },
      { text: '特別な日だけ', type: 'occasional' },
      { text: '基本頼まない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'お気に入りのデザートは？',
    options: [
      { text: 'ケーキやタルト', type: 'essential' },
      { text: 'アイスクリーム', type: 'casual' },
      { text: 'フルーツ盛り合わせ', type: 'occasional' },
      { text: 'デザートより食事', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: 'スイーツビュッフェに行くなら？',
    options: [
      { text: '全種類制覇したい！', type: 'essential' },
      { text: '好きなものを楽しむ', type: 'casual' },
      { text: '付き合いで行くかも', type: 'occasional' },
      { text: 'あまり興味ない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: 'ケーキ屋さんの前を通りかかったら？',
    options: [
      { text: '吸い込まれるように入店', type: 'essential' },
      { text: 'ショーケースを眺める', type: 'casual' },
      { text: '誰かへのお土産なら', type: 'occasional' },
      { text: '素通りする', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: 'デザートへの出費は？',
    options: [
      { text: '惜しまず投資する', type: 'essential' },
      { text: '程々に楽しむ', type: 'casual' },
      { text: 'たまの贅沢として', type: 'occasional' },
      { text: '他に使いたい', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '自分でお菓子を作ることは？',
    options: [
      { text: '趣味で作る', type: 'essential' },
      { text: 'たまに挑戦', type: 'casual' },
      { text: 'イベント時だけ', type: 'occasional' },
      { text: '作ったことない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'コンビニスイーツについて',
    options: [
      { text: '新商品は必ずチェック', type: 'essential' },
      { text: '話題のものは買ってみる', type: 'casual' },
      { text: 'たまに気が向いたら', type: 'occasional' },
      { text: 'あまり見ない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '「別腹」について',
    options: [
      { text: 'デザートは完全に別腹', type: 'essential' },
      { text: '美味しそうなら入る', type: 'casual' },
      { text: 'お腹いっぱいなら無理', type: 'occasional' },
      { text: '別腹は存在しない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: 'お土産を選ぶなら？',
    options: [
      { text: '有名パティスリーのスイーツ', type: 'essential' },
      { text: 'お菓子系が無難', type: 'casual' },
      { text: '相手の好みに合わせる', type: 'occasional' },
      { text: 'お菓子以外を選ぶ', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'あなたにとってデザートとは？',
    options: [
      { text: '人生に欠かせない幸せ', type: 'essential' },
      { text: '食事を締めくくる楽しみ', type: 'casual' },
      { text: 'たまのご褒美', type: 'occasional' },
      { text: '特に必要ない', type: 'minimal' },
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
  essential: {
    type: 'essential',
    title: 'デザート至上主義者',
    emoji: '🎂',
    percentage: 'スイーツ愛 100%',
    description: 'デザートなしの人生なんて考えられない！食後は必ず甘いもので締めくくる。スイーツは生きる活力、幸せの源！',
    characteristics: ['甘党の極み', 'スイーツ情報通', '幸福感重視', '味覚が鋭い', 'こだわり強い'],
    advice: '最高のスイーツライフ！でも糖分の取りすぎには少しだけ注意を♪',
  },
  casual: {
    type: 'casual',
    title: 'カジュアルデザート派',
    emoji: '🍨',
    percentage: 'スイーツ好き 75%',
    description: 'デザートは好きだけど、程よく楽しむタイプ。美味しそうなものがあれば食べるし、なくても平気。バランス感覚の良いスイーツライフ。',
    characteristics: ['バランス型', '柔軟', '楽しみ上手', '自然体', 'ストレスフリー'],
    advice: 'ちょうどいいバランス感覚！時には思い切り贅沢しても♪',
  },
  occasional: {
    type: 'occasional',
    title: '特別な日デザート派',
    emoji: '🍰',
    percentage: 'ご褒美感 80%',
    description: 'デザートは特別な時のご褒美。普段は我慢して、ここぞという時に楽しむ。その分、食べる時の喜びは格別！',
    characteristics: ['自制心あり', '計画的', 'メリハリ上手', 'イベント好き', '堅実'],
    advice: '特別感を大切にする姿勢が素敵！たまには普段のご褒美も♪',
  },
  minimal: {
    type: 'minimal',
    title: 'デザート不要派',
    emoji: '🍵',
    percentage: 'シンプル度 90%',
    description: 'デザートにはあまり興味なし。食事がメインで、甘いものは必要ない。シンプルに食を楽しむスタイル。',
    characteristics: ['食事重視', 'シンプル', '合理的', '健康志向', '自分のスタイル確立'],
    advice: 'たまには甘い誘惑に負けてみるのも人生の楽しみかも？',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { essential: 0, casual: 0, occasional: 0, minimal: 0 };

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
