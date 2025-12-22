// 投資リスク許容度診断 - あなたはどのくらいリスクを取れる？
export const questions = [
  {
    id: 1,
    text: '100万円を運用するとしたら、どの方法を選ぶ？',
    options: [
      { text: '元本保証の定期預金', type: 'conservative' },
      { text: '債券中心のローリスク投資信託', type: 'moderate' },
      { text: '株式と債券のバランス型投資信託', type: 'balanced' },
      { text: '株式100%のハイリターン商品', type: 'aggressive' },
    ],
  },
  {
    id: 2,
    text: '投資した商品が1ヶ月で20%下落したら？',
    options: [
      { text: 'すぐに全部売って損切りする', type: 'conservative' },
      { text: '不安だけど様子を見る', type: 'moderate' },
      { text: '長期投資だから気にしない', type: 'balanced' },
      { text: '買い増しのチャンス！', type: 'aggressive' },
    ],
  },
  {
    id: 3,
    text: '投資の目的は？',
    options: [
      { text: 'とにかく元本を減らしたくない', type: 'conservative' },
      { text: 'インフレに負けない程度に増やしたい', type: 'moderate' },
      { text: '長期で資産を着実に増やしたい', type: 'balanced' },
      { text: '大きく資産を増やしたい', type: 'aggressive' },
    ],
  },
  {
    id: 4,
    text: '投資に回せる資金について',
    options: [
      { text: '余裕資金の一部だけ、ほとんど貯金', type: 'conservative' },
      { text: '生活費を除いた貯金の3割程度', type: 'moderate' },
      { text: '生活費を除いた貯金の5割程度', type: 'balanced' },
      { text: '積極的に投資に回したい', type: 'aggressive' },
    ],
  },
  {
    id: 5,
    text: 'NISA（少額投資非課税制度）について',
    options: [
      { text: '興味はあるけど怖くてやっていない', type: 'conservative' },
      { text: 'つみたてNISAで堅実に運用', type: 'moderate' },
      { text: '成長投資枠も活用している', type: 'balanced' },
      { text: '上限いっぱい使って積極運用', type: 'aggressive' },
    ],
  },
  {
    id: 6,
    text: '暗号資産（仮想通貨）について',
    options: [
      { text: '絶対に手を出さない', type: 'conservative' },
      { text: '興味はあるけど怖い', type: 'moderate' },
      { text: 'ポートフォリオの一部として少額保有', type: 'balanced' },
      { text: '積極的に投資している', type: 'aggressive' },
    ],
  },
  {
    id: 7,
    text: '投資の情報収集について',
    options: [
      { text: '怖いのであまり見ない', type: 'conservative' },
      { text: '基本的なニュースはチェックする', type: 'moderate' },
      { text: '定期的に経済指標や市場動向を確認', type: 'balanced' },
      { text: '毎日チェックして売買判断に活かす', type: 'aggressive' },
    ],
  },
  {
    id: 8,
    text: '投資期間について',
    options: [
      { text: 'いつでも引き出せる状態がいい', type: 'conservative' },
      { text: '5年くらいは寝かせられる', type: 'moderate' },
      { text: '10年以上の長期投資が基本', type: 'balanced' },
      { text: '長期も短期も状況に応じて', type: 'aggressive' },
    ],
  },
  {
    id: 9,
    text: '老後資金について',
    options: [
      { text: '貯金と年金で堅実に準備', type: 'conservative' },
      { text: 'iDeCoなど税制優遇を活用', type: 'moderate' },
      { text: '投資で積極的に資産形成', type: 'balanced' },
      { text: '投資で大きく増やして早期リタイア', type: 'aggressive' },
    ],
  },
  {
    id: 10,
    text: '投資に対する本音は？',
    options: [
      { text: '損するのが怖い、できれば避けたい', type: 'conservative' },
      { text: '必要だとは思うけど慎重に', type: 'moderate' },
      { text: '長期的に見れば資産形成に有効', type: 'balanced' },
      { text: '積極的にリスクを取ってリターンを狙う', type: 'aggressive' },
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
  conservative: {
    type: 'conservative',
    title: '安全第一タイプ',
    emoji: '🏦',
    percentage: 'リスク許容度 15%',
    description: '元本割れを極力避けたいあなた。定期預金や国債など安全資産を好む堅実派。リスクを取らない分リターンも限られますが、精神的な安心感は大きな価値があります。',
    characteristics: ['慎重', '安定志向', '損失回避', '堅実', '保守的'],
    advice: 'その慎重さも大切。でもインフレで資産が目減りするリスクも。少額から始めてみては？',
  },
  moderate: {
    type: 'moderate',
    title: 'ローリスク志向タイプ',
    emoji: '🐢',
    percentage: 'リスク許容度 40%',
    description: '大きな損失は避けたいけど、少しは運用したいあなた。債券中心やつみたてNISAなど、手堅い選択肢を好む傾向。コツコツと資産を増やす姿勢は長期的に有効です。',
    characteristics: ['バランス重視', '堅実', '長期志向', '慎重', '学習意欲'],
    advice: '良いスタート地点！慣れてきたら少しずつリスク資産の比率を上げてみても。',
  },
  balanced: {
    type: 'balanced',
    title: 'バランス投資家タイプ',
    emoji: '⚖️',
    percentage: 'リスク許容度 65%',
    description: 'リスクとリターンのバランスを考えて投資できるあなた。株式と債券を組み合わせ、長期的な視点で資産形成を進められる理想的な投資家タイプ。市場の変動にも冷静に対応できます。',
    characteristics: ['合理的', '長期視点', '分散投資', '冷静', '自己管理'],
    advice: '素晴らしいバランス感覚！定期的なリバランスを忘れずに、着実に資産を育てていこう。',
  },
  aggressive: {
    type: 'aggressive',
    title: 'ハイリスク・ハイリターンタイプ',
    emoji: '🚀',
    percentage: 'リスク許容度 90%',
    description: '大きなリターンを狙って積極的にリスクを取るあなた。株式100%やレバレッジ商品も恐れない攻めの姿勢。うまくいけば大きな資産形成ができますが、損失も大きくなる可能性があることを忘れずに。',
    characteristics: ['攻撃的', 'リスクテイカー', '行動力', '野心的', '情報通'],
    advice: 'その積極性は武器！でも生活資金は別に確保し、分散投資も忘れずに。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { conservative: 0, moderate: 0, balanced: 0, aggressive: 0 };

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
