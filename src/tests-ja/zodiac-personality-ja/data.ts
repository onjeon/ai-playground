// 星座性格診断
export const questions = [
  {
    id: 1,
    text: '朝起きた時、最初にすることは？',
    options: [
      { text: 'すぐに行動開始！', type: 'fire' },
      { text: 'ゆっくりストレッチ', type: 'earth' },
      { text: '今日の予定を頭で整理', type: 'air' },
      { text: '夢の余韻に浸る', type: 'water' },
    ],
  },
  {
    id: 2,
    text: '友達との約束で大切にしていることは？',
    options: [
      { text: '楽しい時間を過ごすこと', type: 'fire' },
      { text: '時間と場所をしっかり守る', type: 'earth' },
      { text: '新しい話題で盛り上がる', type: 'air' },
      { text: '相手の気持ちに寄り添う', type: 'water' },
    ],
  },
  {
    id: 3,
    text: '困難に直面した時の対処法は？',
    options: [
      { text: '真正面から立ち向かう', type: 'fire' },
      { text: '着実に一歩ずつ解決', type: 'earth' },
      { text: '様々な角度から分析', type: 'air' },
      { text: '直感を信じて行動', type: 'water' },
    ],
  },
  {
    id: 4,
    text: '休日の理想的な過ごし方は？',
    options: [
      { text: 'アクティブに外出', type: 'fire' },
      { text: '家でゆっくりリラックス', type: 'earth' },
      { text: '新しい場所を探索', type: 'air' },
      { text: '静かに自分と向き合う', type: 'water' },
    ],
  },
  {
    id: 5,
    text: '仕事や勉強で重視することは？',
    options: [
      { text: '結果を出すこと', type: 'fire' },
      { text: '安定した成果', type: 'earth' },
      { text: '創造性と革新', type: 'air' },
      { text: '人との協力', type: 'water' },
    ],
  },
  {
    id: 6,
    text: '恋愛で一番大切にしたいことは？',
    options: [
      { text: '情熱とときめき', type: 'fire' },
      { text: '信頼と安心感', type: 'earth' },
      { text: '知的な会話', type: 'air' },
      { text: '心の繋がり', type: 'water' },
    ],
  },
  {
    id: 7,
    text: 'ストレスを感じた時の発散方法は？',
    options: [
      { text: '運動やスポーツ', type: 'fire' },
      { text: '美味しいものを食べる', type: 'earth' },
      { text: '友達と話す', type: 'air' },
      { text: '音楽や芸術に触れる', type: 'water' },
    ],
  },
  {
    id: 8,
    text: '自分の長所だと思うのは？',
    options: [
      { text: '行動力とリーダーシップ', type: 'fire' },
      { text: '忍耐力と責任感', type: 'earth' },
      { text: '柔軟性とコミュ力', type: 'air' },
      { text: '共感力と優しさ', type: 'water' },
    ],
  },
  {
    id: 9,
    text: '新しい環境に入った時は？',
    options: [
      { text: '積極的に話しかける', type: 'fire' },
      { text: 'まず様子を見る', type: 'earth' },
      { text: '情報収集から始める', type: 'air' },
      { text: '雰囲気を感じ取る', type: 'water' },
    ],
  },
  {
    id: 10,
    text: '人生で一番大切にしたい価値観は？',
    options: [
      { text: '挑戦と成長', type: 'fire' },
      { text: '安定と幸福', type: 'earth' },
      { text: '自由と知識', type: 'air' },
      { text: '愛と調和', type: 'water' },
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
  compatibleSign: string;
}> = {
  fire: {
    type: 'fire',
    title: '火のエレメント星座タイプ',
    emoji: '🔥',
    percentage: '情熱度 95%',
    description: '牡羊座・獅子座・射手座のようなあなたは、情熱的で行動力抜群！リーダーシップを発揮し、周囲を引っ張る存在です。挑戦を恐れず、常に前進し続けます。',
    characteristics: ['情熱的', '行動力', 'リーダーシップ', '冒険心', 'ポジティブ'],
    compatibleSign: '風のエレメントと相性◎',
  },
  earth: {
    type: 'earth',
    title: '地のエレメント星座タイプ',
    emoji: '🌍',
    percentage: '安定度 92%',
    description: '牡牛座・乙女座・山羊座のようなあなたは、堅実で信頼できる存在。忍耐力と責任感があり、着実に目標を達成していきます。周囲から頼られる安心感があります。',
    characteristics: ['堅実', '忍耐力', '責任感', '現実的', '信頼性'],
    compatibleSign: '水のエレメントと相性◎',
  },
  air: {
    type: 'air',
    title: '風のエレメント星座タイプ',
    emoji: '💨',
    percentage: '知性度 90%',
    description: '双子座・天秤座・水瓶座のようなあなたは、知的で社交的。柔軟な思考で様々な人と繋がり、新しいアイデアを生み出します。自由を愛する革新者です。',
    characteristics: ['知的', '社交的', '柔軟性', '革新的', '自由'],
    compatibleSign: '火のエレメントと相性◎',
  },
  water: {
    type: 'water',
    title: '水のエレメント星座タイプ',
    emoji: '💧',
    percentage: '感受性度 93%',
    description: '蟹座・蠍座・魚座のようなあなたは、感受性が豊かで直感力に優れています。深い愛情と共感力で人の心に寄り添い、芸術的なセンスも持ち合わせています。',
    characteristics: ['感受性', '直感力', '共感力', '芸術的', '神秘的'],
    compatibleSign: '地のエレメントと相性◎',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { fire: 0, earth: 0, air: 0, water: 0 };

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
