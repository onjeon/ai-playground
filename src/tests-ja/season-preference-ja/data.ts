// 季節タイプ診断 - あなたはどの季節タイプ？
export const questions = [
  {
    id: 1,
    text: '一番好きな季節は？',
    options: [
      { text: '春 - 新しい始まりの季節', type: 'spring' },
      { text: '夏 - エネルギッシュな季節', type: 'summer' },
      { text: '秋 - 落ち着いた季節', type: 'autumn' },
      { text: '冬 - 静かで神秘的な季節', type: 'winter' },
    ],
  },
  {
    id: 2,
    text: '休日の過ごし方は？',
    options: [
      { text: 'お花見やピクニック', type: 'spring' },
      { text: '海やプール、BBQ', type: 'summer' },
      { text: '紅葉狩りや読書', type: 'autumn' },
      { text: 'こたつでぬくぬく', type: 'winter' },
    ],
  },
  {
    id: 3,
    text: '好きな飲み物は？',
    options: [
      { text: '桜ラテやフルーツティー', type: 'spring' },
      { text: 'キンキンのビールやかき氷', type: 'summer' },
      { text: 'ほうじ茶やワイン', type: 'autumn' },
      { text: 'ホットココアや熱燗', type: 'winter' },
    ],
  },
  {
    id: 4,
    text: 'どんなファッションが好き？',
    options: [
      { text: 'パステルカラーの軽やかな服', type: 'spring' },
      { text: '鮮やかな色のアクティブな服', type: 'summer' },
      { text: 'アースカラーの落ち着いた服', type: 'autumn' },
      { text: 'モノトーンのシックな服', type: 'winter' },
    ],
  },
  {
    id: 5,
    text: '気分が上がる天気は？',
    options: [
      { text: '心地よい春の陽気', type: 'spring' },
      { text: 'カンカン照りの太陽', type: 'summer' },
      { text: '爽やかな秋晴れ', type: 'autumn' },
      { text: '雪が降る日', type: 'winter' },
    ],
  },
  {
    id: 6,
    text: '好きなイベントは？',
    options: [
      { text: '入学式・卒業式', type: 'spring' },
      { text: '花火大会・夏フェス', type: 'summer' },
      { text: 'ハロウィン・収穫祭', type: 'autumn' },
      { text: 'クリスマス・お正月', type: 'winter' },
    ],
  },
  {
    id: 7,
    text: '理想の旅行先は？',
    options: [
      { text: '桜の名所、花畑', type: 'spring' },
      { text: 'ビーチリゾート、南国', type: 'summer' },
      { text: '京都、紅葉の名所', type: 'autumn' },
      { text: '温泉、雪国', type: 'winter' },
    ],
  },
  {
    id: 8,
    text: '好きな食べ物は？',
    options: [
      { text: '桜餅、筍ご飯', type: 'spring' },
      { text: 'スイカ、冷やし中華', type: 'summer' },
      { text: '栗ご飯、秋刀魚', type: 'autumn' },
      { text: '鍋料理、おでん', type: 'winter' },
    ],
  },
  {
    id: 9,
    text: '好きな時間帯は？',
    options: [
      { text: '朝 - 新鮮な一日の始まり', type: 'spring' },
      { text: '昼 - 太陽の下で活動', type: 'summer' },
      { text: '夕方 - 夕日を眺める時間', type: 'autumn' },
      { text: '夜 - 静かで落ち着く時間', type: 'winter' },
    ],
  },
  {
    id: 10,
    text: '人生で大切にしたいことは？',
    options: [
      { text: '希望と新しい出会い', type: 'spring' },
      { text: '情熱と冒険', type: 'summer' },
      { text: '実りと感謝', type: 'autumn' },
      { text: '内省と絆', type: 'winter' },
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
  spring: {
    type: 'spring',
    title: '春タイプ',
    emoji: '🌸',
    percentage: '春の人',
    description: '新しい始まりと希望に満ちた春のような人。フレッシュで柔らかい雰囲気を持ち、周りを明るくします。変化を恐れず、新しいことに挑戦する勇気がある。',
    characteristics: ['希望', 'フレッシュ', '柔らか', '新しい出会い', '成長'],
    advice: 'その明るさで周りを照らして！新しい挑戦を楽しんで。',
  },
  summer: {
    type: 'summer',
    title: '夏タイプ',
    emoji: '☀️',
    percentage: '夏の人',
    description: 'エネルギッシュで情熱的な夏のような人。太陽のように周りを活気づけ、どんなことにも全力で取り組みます。一緒にいると元気をもらえる存在。',
    characteristics: ['情熱', 'エネルギッシュ', '活動的', '明るい', '冒険心'],
    advice: 'その情熱が周りを動かします！でも、たまにはクールダウンも。',
  },
  autumn: {
    type: 'autumn',
    title: '秋タイプ',
    emoji: '🍂',
    percentage: '秋の人',
    description: '落ち着きと深みを持つ秋のような人。経験を糧にし、物事を深く考えます。感謝の心を忘れず、周りに安心感を与える存在。',
    characteristics: ['落ち着き', '深み', '感謝', '成熟', '知性'],
    advice: 'その深い思考が周りを導きます。感謝の心を大切に。',
  },
  winter: {
    type: 'winter',
    title: '冬タイプ',
    emoji: '❄️',
    percentage: '冬の人',
    description: '静かで神秘的な冬のような人。内省的で、本質を見極める力があります。少数の大切な人との深い絆を大切にするタイプ。',
    characteristics: ['静寂', '神秘的', '内省', '深い絆', '本質重視'],
    advice: '静かな強さがあなたの魅力。大切な人との時間を大切に。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { spring: 0, summer: 0, autumn: 0, winter: 0 };

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
