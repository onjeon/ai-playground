// 結婚準備度診断 (결혼 준비도 테스트)
export const questions = [
  {
    id: 1,
    text: '結婚に対するあなたの考えは？',
    options: [
      { text: '今すぐにでも結婚したい', type: 'ready' },
      { text: 'いい人がいれば考える', type: 'open' },
      { text: 'まだ早いと思う', type: 'notyet' },
      { text: '結婚に興味がない', type: 'independent' },
    ],
  },
  {
    id: 2,
    text: '経済的な準備は？',
    options: [
      { text: '貯金もあり、安定している', type: 'ready' },
      { text: '少しずつ貯めている', type: 'open' },
      { text: 'これから考える', type: 'notyet' },
      { text: '自分の生活で精一杯', type: 'independent' },
    ],
  },
  {
    id: 3,
    text: '家事のスキルは？',
    options: [
      { text: '一通りできる', type: 'ready' },
      { text: '基本的なことはできる', type: 'open' },
      { text: 'あまり得意ではない', type: 'notyet' },
      { text: '必要ない、外注すればいい', type: 'independent' },
    ],
  },
  {
    id: 4,
    text: '価値観の違う人との関係は？',
    options: [
      { text: '話し合いで解決できる', type: 'ready' },
      { text: '妥協点を見つけられる', type: 'open' },
      { text: 'ぶつかることが多い', type: 'notyet' },
      { text: '合わない人とは関わらない', type: 'independent' },
    ],
  },
  {
    id: 5,
    text: '将来の家族像は？',
    options: [
      { text: '具体的にイメージできている', type: 'ready' },
      { text: 'なんとなくある', type: 'open' },
      { text: '考えたことがない', type: 'notyet' },
      { text: '一人でも幸せ', type: 'independent' },
    ],
  },
  {
    id: 6,
    text: '相手の家族との関係は？',
    options: [
      { text: '大切にしたい', type: 'ready' },
      { text: '適度な距離感で', type: 'open' },
      { text: '正直面倒くさい', type: 'notyet' },
      { text: 'パートナーだけでいい', type: 'independent' },
    ],
  },
  {
    id: 7,
    text: '自分の時間と家族の時間のバランスは？',
    options: [
      { text: '家族優先でも大丈夫', type: 'ready' },
      { text: 'バランスを取りたい', type: 'open' },
      { text: '自分の時間を優先したい', type: 'notyet' },
      { text: '自分の時間が最優先', type: 'independent' },
    ],
  },
  {
    id: 8,
    text: 'パートナーとの喧嘩の後は？',
    options: [
      { text: 'きちんと話し合って解決', type: 'ready' },
      { text: '時間を置いて冷静に', type: 'open' },
      { text: 'なかなか仲直りできない', type: 'notyet' },
      { text: '喧嘩するくらいなら別れる', type: 'independent' },
    ],
  },
  {
    id: 9,
    text: '子どもについての考えは？',
    options: [
      { text: '欲しいと思う', type: 'ready' },
      { text: 'パートナーと相談して決める', type: 'open' },
      { text: 'まだ考えられない', type: 'notyet' },
      { text: '必要ない', type: 'independent' },
    ],
  },
  {
    id: 10,
    text: '結婚のメリットは？',
    options: [
      { text: '人生を共にするパートナーができる', type: 'ready' },
      { text: '安定と安心感', type: 'open' },
      { text: '正直よく分からない', type: 'notyet' },
      { text: 'メリットがない', type: 'independent' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  readinessLevel: string;
  characteristics: string[];
  advice: string[];
}> = {
  ready: {
    type: 'ready',
    title: '結婚準備万端タイプ',
    emoji: '💒',
    description: 'あなたは結婚への準備が整っています！経済面、精神面ともに安定しており、パートナーとの人生を具体的にイメージできています。あとは運命の相手を見つけるだけ！',
    readinessLevel: '★★★★★ 準備万端！',
    characteristics: ['経済的に安定', '精神的に成熟', '将来像が明確', 'コミュニケーション上手'],
    advice: ['焦らず良いパートナーを見つけて', '理想を高くしすぎないように', '今の自分を大切に'],
  },
  open: {
    type: 'open',
    title: 'ご縁があれば歓迎タイプ',
    emoji: '🌸',
    description: 'あなたは結婚に対してオープンな姿勢。良いパートナーがいれば結婚を考えるし、いなければ焦らない。バランスの取れた考え方ができています。',
    readinessLevel: '★★★★☆ 準備中',
    characteristics: ['柔軟な考え方', 'バランス感覚がある', '自然体', '焦りがない'],
    advice: ['出会いの場を増やしてみて', '自分磨きを続けよう', '価値観を明確にしておこう'],
  },
  notyet: {
    type: 'notyet',
    title: 'まだまだこれからタイプ',
    emoji: '🌱',
    description: 'あなたはまだ結婚には早いかも。自分自身の成長や、やりたいことを優先したい時期です。焦る必要はありません、自分のペースで。',
    readinessLevel: '★★★☆☆ これから成長',
    characteristics: ['成長途中', '自分優先', '将来が不明確', '経験を積みたい'],
    advice: ['今は自分磨きの時間', '恋愛経験を積もう', '将来について少しずつ考えよう'],
  },
  independent: {
    type: 'independent',
    title: '独立志向タイプ',
    emoji: '🦅',
    description: 'あなたは結婚より自分の人生を楽しみたいタイプ。結婚だけが幸せではないことを知っています。自分らしい生き方を貫く強さがあります。',
    readinessLevel: '★★☆☆☆ 独立志向',
    characteristics: ['自立している', '自分の時間を大切にする', '結婚に縛られない', '自由を愛する'],
    advice: ['自分の選択を大切に', '価値観は変わることもある', '孤独にならないように'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { ready: 0, open: 0, notyet: 0, independent: 0 };

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
