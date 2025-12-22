// レジリエンス診断 - あなたの心の回復力は？
export const questions = [
  {
    id: 1,
    text: '大きな失敗をしたとき、どうなる？',
    options: [
      { text: '何日も落ち込んで何も手につかない', type: 'low' },
      { text: '落ち込むけど、時間が経てば回復', type: 'moderate' },
      { text: '反省したら次に切り替えられる', type: 'high' },
      { text: '失敗も経験、すぐに立ち直れる', type: 'very_high' },
    ],
  },
  {
    id: 2,
    text: 'ストレスフルな状況が続いたとき',
    options: [
      { text: '心身ともに限界を感じやすい', type: 'low' },
      { text: '疲れはするけど、なんとか耐える', type: 'moderate' },
      { text: 'ストレス発散法を使って乗り越える', type: 'high' },
      { text: 'ストレスすら成長の糧にできる', type: 'very_high' },
    ],
  },
  {
    id: 3,
    text: '予期せぬ変化が起きたとき',
    options: [
      { text: 'パニックになってしまう', type: 'low' },
      { text: '不安だけど、受け入れようとする', type: 'moderate' },
      { text: '状況を把握して対応策を考える', type: 'high' },
      { text: '変化は当たり前、柔軟に対応', type: 'very_high' },
    ],
  },
  {
    id: 4,
    text: '大切な人との別れや喪失を経験したら',
    options: [
      { text: '長期間、深い悲しみから抜け出せない', type: 'low' },
      { text: '悲しいけど、日常は続けられる', type: 'moderate' },
      { text: '悲しみを感じつつも前を向ける', type: 'high' },
      { text: '故人を心に留めながら、人生を歩み続ける', type: 'very_high' },
    ],
  },
  {
    id: 5,
    text: '自分の弱さを感じたとき',
    options: [
      { text: '自己嫌悪に陥ってしまう', type: 'low' },
      { text: '落ち込むけど、誰にでもあると思う', type: 'moderate' },
      { text: '弱さを認めて、改善しようとする', type: 'high' },
      { text: '弱さも含めて自分を受け入れている', type: 'very_high' },
    ],
  },
  {
    id: 6,
    text: '困難な問題に直面したとき',
    options: [
      { text: '逃げ出したくなる、諦めたくなる', type: 'low' },
      { text: '誰かに助けを求める', type: 'moderate' },
      { text: '解決策を探して行動する', type: 'high' },
      { text: 'チャレンジとして楽しめる', type: 'very_high' },
    ],
  },
  {
    id: 7,
    text: '批判や否定を受けたとき',
    options: [
      { text: '深く傷ついて立ち直れない', type: 'low' },
      { text: '傷つくけど、時間が癒してくれる', type: 'moderate' },
      { text: '学びに変えて次に活かす', type: 'high' },
      { text: '自分の価値は他人の評価で決まらない', type: 'very_high' },
    ],
  },
  {
    id: 8,
    text: '将来への不安について',
    options: [
      { text: '常に不安で、考えると眠れない', type: 'low' },
      { text: '不安はあるけど、なるようになると思う', type: 'moderate' },
      { text: '準備できることはして、あとは前向きに', type: 'high' },
      { text: '不確実性も人生の一部として受け入れている', type: 'very_high' },
    ],
  },
  {
    id: 9,
    text: '辛いとき、自分を支えるものは？',
    options: [
      { text: '正直、何も思いつかない', type: 'low' },
      { text: '家族や友人の存在', type: 'moderate' },
      { text: '自分なりのストレス解消法がある', type: 'high' },
      { text: '複数の支えがあり、自分自身も信じている', type: 'very_high' },
    ],
  },
  {
    id: 10,
    text: '人生の困難について、どう思う？',
    options: [
      { text: 'なぜ自分ばかりこんな目に', type: 'low' },
      { text: '誰にでもあること、仕方ない', type: 'moderate' },
      { text: '乗り越えたら強くなれる', type: 'high' },
      { text: '困難があるから人生は面白い', type: 'very_high' },
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
    title: '繊細な心タイプ',
    emoji: '🌸',
    percentage: 'レジリエンス 25%',
    description: '心が繊細で、ストレスや困難に敏感に反応するタイプ。感受性が豊かな証拠ですが、自分を守る術を身につけることが大切。一人で抱え込まないでね。',
    characteristics: ['繊細', '感受性', '共感力', '傷つきやすい', '真面目'],
    advice: '辛いときは助けを求めて。あなたの繊細さは、ケアすれば大きな強みになります。',
  },
  moderate: {
    type: 'moderate',
    title: '回復途中タイプ',
    emoji: '🌱',
    percentage: 'レジリエンス 50%',
    description: '困難に出会うと落ち込むけど、時間をかけて回復できるタイプ。周りのサポートがあると心強い。レジリエンスを育てる余地がまだまだあります。',
    characteristics: ['着実', '素直', 'サポート依存', '回復力あり', '成長途中'],
    advice: '自分なりのストレス解消法を見つけて、回復力を育てていこう。',
  },
  high: {
    type: 'high',
    title: 'しなやか回復タイプ',
    emoji: '🌿',
    percentage: 'レジリエンス 75%',
    description: '困難を乗り越える力があるタイプ。ストレス対処法を持ち、逆境を成長の機会に変えられます。バランスの取れたメンタルの持ち主。',
    characteristics: ['柔軟', '適応力', '自己管理', '前向き', '行動力'],
    advice: '素晴らしいレジリエンス！その力を周りの人にも分けてあげてください。',
  },
  very_high: {
    type: 'very_high',
    title: '不屈のフェニックスタイプ',
    emoji: '🔥',
    percentage: 'レジリエンス 95%',
    description: 'どんな困難も糧にして立ち上がれる、鋼のメンタルの持ち主。逆境を楽しめる強さがあります。あなたの存在が周りの人の希望にもなります。',
    characteristics: ['不屈', '楽観的', '自己肯定感', '影響力', '成長マインド'],
    advice: 'その強さは才能！でも時には弱さを見せることで、人との繋がりも深まります。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { low: 0, moderate: 0, high: 0, very_high: 0 };

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
