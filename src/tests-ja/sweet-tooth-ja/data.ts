// 甘党度診断
export const questions = [
  {
    id: 1,
    text: '食後のデザートは必須？',
    options: [
      { text: '絶対必要！別腹！', type: 'extreme' },
      { text: 'あると嬉しい', type: 'high' },
      { text: 'たまになら', type: 'moderate' },
      { text: 'なくても平気', type: 'low' },
    ],
  },
  {
    id: 2,
    text: 'コーヒーや紅茶には砂糖を？',
    options: [
      { text: 'たっぷり入れる', type: 'extreme' },
      { text: '少し入れる', type: 'high' },
      { text: '気分による', type: 'moderate' },
      { text: 'ブラック・無糖派', type: 'low' },
    ],
  },
  {
    id: 3,
    text: 'ケーキやスイーツの甘さについて',
    options: [
      { text: '甘ければ甘いほど幸せ', type: 'extreme' },
      { text: '甘いのが好き', type: 'high' },
      { text: 'ほどほどがいい', type: 'moderate' },
      { text: '甘さ控えめが好み', type: 'low' },
    ],
  },
  {
    id: 4,
    text: '疲れた時、何を求める？',
    options: [
      { text: 'チョコレートやキャンディ', type: 'extreme' },
      { text: '甘い飲み物', type: 'high' },
      { text: '特に甘いものではない', type: 'moderate' },
      { text: 'しょっぱいもの', type: 'low' },
    ],
  },
  {
    id: 5,
    text: '朝食の甘いもの（菓子パン、シリアル等）は？',
    options: [
      { text: '毎日食べたい', type: 'extreme' },
      { text: '週に何度か', type: 'high' },
      { text: 'たまに', type: 'moderate' },
      { text: '朝は甘くないものがいい', type: 'low' },
    ],
  },
  {
    id: 6,
    text: 'アイスクリームを食べるなら？',
    options: [
      { text: '大きいサイズ一択', type: 'extreme' },
      { text: 'レギュラーサイズ', type: 'high' },
      { text: 'ミニサイズで十分', type: 'moderate' },
      { text: 'あまり食べない', type: 'low' },
    ],
  },
  {
    id: 7,
    text: 'お土産を選ぶなら？',
    options: [
      { text: 'スイーツ一択！', type: 'extreme' },
      { text: 'お菓子系が多い', type: 'high' },
      { text: '相手に合わせる', type: 'moderate' },
      { text: 'お菓子以外を選ぶ', type: 'low' },
    ],
  },
  {
    id: 8,
    text: '甘いものを我慢できる？',
    options: [
      { text: '無理！我慢できない', type: 'extreme' },
      { text: '結構難しい', type: 'high' },
      { text: 'まあまあできる', type: 'moderate' },
      { text: '簡単にできる', type: 'low' },
    ],
  },
  {
    id: 9,
    text: 'ストレス発散方法は？',
    options: [
      { text: '甘いものをたくさん食べる', type: 'extreme' },
      { text: 'スイーツで気分転換', type: 'high' },
      { text: '食べ物以外で発散', type: 'moderate' },
      { text: '甘いものは関係ない', type: 'low' },
    ],
  },
  {
    id: 10,
    text: 'あなたと甘いものの関係は？',
    options: [
      { text: '人生に欠かせないパートナー', type: 'extreme' },
      { text: '大切な楽しみ', type: 'high' },
      { text: '時々の贅沢', type: 'moderate' },
      { text: '特に重要ではない', type: 'low' },
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
  extreme: {
    type: 'extreme',
    title: '究極の甘党',
    emoji: '🍭',
    percentage: '甘党度 MAX',
    description: '甘いものなしでは生きられない！糖分は心の栄養。毎日甘いものを食べないと気が済まない、筋金入りの甘党さん。',
    characteristics: ['甘いもの依存', '幸福感追求', '感情豊か', '自分に正直', 'ストレス発散上手'],
    advice: '甘いものは最高のご褒美！でも健康のため、たまには控えめにも♪',
  },
  high: {
    type: 'high',
    title: '甘党タイプ',
    emoji: '🍰',
    percentage: '甘党度 80%',
    description: '甘いものが大好き！スイーツは心を満たす大切な存在。甘いものがあると自然と笑顔になる幸せ追求派。',
    characteristics: ['スイーツ好き', '癒し重視', '楽しみ上手', 'ポジティブ', '味覚敏感'],
    advice: 'スイーツライフを満喫中！お気に入りのお店をもっと開拓しよう♪',
  },
  moderate: {
    type: 'moderate',
    title: 'ほどほど甘党',
    emoji: '🧁',
    percentage: '甘党度 50%',
    description: '甘いものは好きだけど、ほどほどが心地いい。たまに食べる贅沢スイーツが特別な喜び。バランス感覚の良い大人の甘党。',
    characteristics: ['バランス型', '自制心あり', '計画的', '大人の味覚', 'メリハリ上手'],
    advice: 'バランス感覚が素晴らしい！特別な時のスイーツをもっと楽しんで♪',
  },
  low: {
    type: 'low',
    title: '甘さ控えめ派',
    emoji: '🍵',
    percentage: '甘党度 20%',
    description: '甘いものにはあまり興味なし。それよりしょっぱいもの派！甘すぎるものは苦手な、さっぱり系味覚の持ち主。',
    characteristics: ['塩派', 'シンプル好き', '健康志向', 'さっぱり系', '自分のスタイル確立'],
    advice: 'しょっぱい派も素敵！でも甘いものの魅力も時々体験してみては？',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { extreme: 0, high: 0, moderate: 0, low: 0 };

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
