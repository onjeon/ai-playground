// ミニマリスト度診断 - あなたはどれだけ物を手放せる？
export const questions = [
  {
    id: 1,
    text: '1年以上使っていない物、どうする？',
    options: [
      { text: 'いつか使うかもしれないから取っておく', type: 'maximalist' },
      { text: '悩むけど結局残してしまう', type: 'moderate' },
      { text: '思い切って処分する', type: 'minimalist' },
      { text: '1年どころか3ヶ月で処分対象', type: 'extreme' },
    ],
  },
  {
    id: 2,
    text: 'クローゼットの中身は？',
    options: [
      { text: 'パンパン！もう入らない', type: 'maximalist' },
      { text: '結構詰まってるけどまあ閉まる', type: 'moderate' },
      { text: 'スッキリ、余裕がある', type: 'minimalist' },
      { text: '本当に必要な服だけ。数えられる', type: 'extreme' },
    ],
  },
  {
    id: 3,
    text: 'セールで「お得！」な商品を見つけたら？',
    options: [
      { text: 'とりあえず買っとく！', type: 'maximalist' },
      { text: '悩んで、結局買うことが多い', type: 'moderate' },
      { text: '本当に必要か考えてから決める', type: 'minimalist' },
      { text: '必要なければ安くても買わない', type: 'extreme' },
    ],
  },
  {
    id: 4,
    text: '理想の部屋は？',
    options: [
      { text: '好きな物に囲まれた空間', type: 'maximalist' },
      { text: '程よく物があって落ち着く部屋', type: 'moderate' },
      { text: 'スッキリ片付いた空間', type: 'minimalist' },
      { text: '何もない。床と壁が見えればいい', type: 'extreme' },
    ],
  },
  {
    id: 5,
    text: '思い出の品（写真・手紙など）について',
    options: [
      { text: '全部大切に保管している', type: 'maximalist' },
      { text: 'ある程度は残している', type: 'moderate' },
      { text: '厳選したものだけ残す', type: 'minimalist' },
      { text: 'デジタル化して物理的には処分', type: 'extreme' },
    ],
  },
  {
    id: 6,
    text: '新しい物を買うとき、古い物は？',
    options: [
      { text: 'そのまま残す', type: 'maximalist' },
      { text: 'しばらく両方持っておく', type: 'moderate' },
      { text: '入れ替えで手放す', type: 'minimalist' },
      { text: '買う前に処分する', type: 'extreme' },
    ],
  },
  {
    id: 7,
    text: '「いつか使うかも」という物、どうしてる？',
    options: [
      { text: '大事に取ってある', type: 'maximalist' },
      { text: '一応残してる', type: 'moderate' },
      { text: '「いつか」は来ないと分かっているので処分', type: 'minimalist' },
      { text: 'そもそも「いつか用」を持たない', type: 'extreme' },
    ],
  },
  {
    id: 8,
    text: '引っ越しの荷物、どのくらい？',
    options: [
      { text: '業者必須、大量のダンボール', type: 'maximalist' },
      { text: 'それなりにある', type: 'moderate' },
      { text: 'コンパクトにまとまる', type: 'minimalist' },
      { text: 'スーツケース1つで完結', type: 'extreme' },
    ],
  },
  {
    id: 9,
    text: 'デスクの上は？',
    options: [
      { text: '文房具や物がたくさん', type: 'maximalist' },
      { text: '必要な物が置いてある', type: 'moderate' },
      { text: 'PC（スマホ）と最低限だけ', type: 'minimalist' },
      { text: '何も置いていない', type: 'extreme' },
    ],
  },
  {
    id: 10,
    text: '物を捨てるとき、どんな気持ち？',
    options: [
      { text: '罪悪感、もったいない', type: 'maximalist' },
      { text: '少し後ろめたい', type: 'moderate' },
      { text: 'スッキリする', type: 'minimalist' },
      { text: '快感！解放される', type: 'extreme' },
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
  maximalist: {
    type: 'maximalist',
    title: 'コレクタータイプ',
    emoji: '📦',
    percentage: 'ミニマリスト度 15%',
    description: '物への愛着が強く、手放すことが苦手なタイプ。「思い出」「いつか使う」「もったいない」が口癖かも。物に囲まれることで安心感を得ています。',
    characteristics: ['収集癖', '物への愛着', '思い出重視', '「もったいない」精神', '安心感重視'],
    advice: '物が多すぎると逆にストレスになることも。少しずつ手放す練習をしてみて。',
  },
  moderate: {
    type: 'moderate',
    title: 'バランスタイプ',
    emoji: '⚖️',
    percentage: 'ミニマリスト度 45%',
    description: '物を持つことと手放すことのバランスが取れているタイプ。極端に物を増やさないけど、必要以上に減らそうともしない。ちょうどいい距離感を持っています。',
    characteristics: ['バランス感覚', '現実的', '適度', '柔軟', '穏やか'],
    advice: '今のバランスを大切に。たまに持ち物を見直すとさらにスッキリ。',
  },
  minimalist: {
    type: 'minimalist',
    title: 'ミニマリストタイプ',
    emoji: '🌿',
    percentage: 'ミニマリスト度 80%',
    description: '必要な物だけで暮らすことに価値を感じるタイプ。物を手放すことで心も軽くなる感覚を知っています。シンプルな暮らしが心地いい。',
    characteristics: ['シンプル志向', '決断力', '空間重視', '心の余裕', '本質重視'],
    advice: '素晴らしいミニマリスト精神！でも、人との思い出まで手放しすぎないでね。',
  },
  extreme: {
    type: 'extreme',
    title: 'エクストリームミニマリスト',
    emoji: '🧘',
    percentage: 'ミニマリスト度 99%',
    description: '究極のミニマリスト。物への執着がほぼゼロで、必要最低限で生きられるタイプ。所有することより経験することを重視します。禅の境地に近いかも。',
    characteristics: ['究極の断捨離', '執着なし', '自由', '身軽', '哲学的'],
    advice: '素晴らしい境地！でも、生活に必要なものまで手放しすぎないようにね。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { maximalist: 0, moderate: 0, minimalist: 0, extreme: 0 };

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
