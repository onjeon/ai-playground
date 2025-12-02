// 兄弟姉妹タイプ診断 (형제자매 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '兄弟姉妹（または友達グループ）でのあなたの立ち位置は？',
    options: [
      { text: 'リーダー的存在、皆をまとめる', type: 'eldest' },
      { text: '調整役、バランスを取る', type: 'middle' },
      { text: '甘え上手、可愛がられる', type: 'youngest' },
      { text: 'マイペース、独自路線', type: 'only' },
    ],
  },
  {
    id: 2,
    text: '困った人を見ると？',
    options: [
      { text: '助けてあげなきゃと思う', type: 'eldest' },
      { text: '状況を見て対応する', type: 'middle' },
      { text: '誰か助けてくれるだろう', type: 'youngest' },
      { text: '自分で解決すべきと思う', type: 'only' },
    ],
  },
  {
    id: 3,
    text: '新しい環境に入った時は？',
    options: [
      { text: '自然とリーダーシップを取る', type: 'eldest' },
      { text: '周りに合わせて馴染む', type: 'middle' },
      { text: '誰かに頼って教えてもらう', type: 'youngest' },
      { text: '自分のペースで進める', type: 'only' },
    ],
  },
  {
    id: 4,
    text: '意見が対立した時は？',
    options: [
      { text: '自分の意見を通そうとする', type: 'eldest' },
      { text: '妥協点を見つける', type: 'middle' },
      { text: '強い方に従う', type: 'youngest' },
      { text: '議論を避ける', type: 'only' },
    ],
  },
  {
    id: 5,
    text: '責任感について？',
    options: [
      { text: '人一倍強い', type: 'eldest' },
      { text: '状況に応じて持つ', type: 'middle' },
      { text: 'あまり感じない', type: 'youngest' },
      { text: '自分のことに対してのみ', type: 'only' },
    ],
  },
  {
    id: 6,
    text: '甘えることについて？',
    options: [
      { text: '苦手、自分でやりたい', type: 'eldest' },
      { text: '時と場合による', type: 'middle' },
      { text: '得意、自然とできる', type: 'youngest' },
      { text: '甘える相手がいない', type: 'only' },
    ],
  },
  {
    id: 7,
    text: '注目されることは？',
    options: [
      { text: '慣れている', type: 'eldest' },
      { text: '適度がいい', type: 'middle' },
      { text: '嬉しい', type: 'youngest' },
      { text: '苦手', type: 'only' },
    ],
  },
  {
    id: 8,
    text: 'グループ内での役割は？',
    options: [
      { text: '決定を下す人', type: 'eldest' },
      { text: '調整・仲介する人', type: 'middle' },
      { text: 'ムードメーカー', type: 'youngest' },
      { text: '独自の貢献をする人', type: 'only' },
    ],
  },
  {
    id: 9,
    text: '競争心は？',
    options: [
      { text: '負けず嫌い', type: 'eldest' },
      { text: '場合による', type: 'middle' },
      { text: '競争より楽しさ重視', type: 'youngest' },
      { text: '自分との戦い', type: 'only' },
    ],
  },
  {
    id: 10,
    text: '一人の時間は？',
    options: [
      { text: '少なくても平気', type: 'eldest' },
      { text: 'バランスが大事', type: 'middle' },
      { text: '寂しくなる', type: 'youngest' },
      { text: '必要不可欠', type: 'only' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
}> = {
  eldest: {
    type: 'eldest',
    title: '長男・長女タイプ',
    emoji: '👑',
    description: 'あなたは責任感が強く、リーダーシップを発揮するタイプ！面倒見が良く、周りから頼られます。しっかり者で、完璧主義な一面も。',
    characteristics: ['責任感が強い', 'リーダーシップ', '面倒見がいい', '完璧主義'],
    strengths: ['頼りになる', '組織をまとめられる', '困難に立ち向かえる'],
    challenges: ['一人で抱え込みがち', '甘えるのが苦手', '肩の力を抜いて'],
  },
  middle: {
    type: 'middle',
    title: '真ん中っ子タイプ',
    emoji: '⚖️',
    description: 'あなたはバランス感覚に優れた調整役タイプ！空気を読むのが得意で、どんな人とも上手くやれます。柔軟性と社交性が武器。',
    characteristics: ['調整能力', '柔軟性', '社交的', '空気を読む'],
    strengths: ['人間関係が上手', '適応力がある', '交渉上手'],
    challenges: ['自分の意見を言おう', '中途半端にならないで', '自己主張も大切'],
  },
  youngest: {
    type: 'youngest',
    title: '末っ子タイプ',
    emoji: '🌟',
    description: 'あなたは愛嬌があり、周りから可愛がられるタイプ！甘え上手で人懐っこく、自然と人を惹きつけます。自由な発想と行動力が魅力。',
    characteristics: ['愛嬌がある', '甘え上手', '自由奔放', '人懐っこい'],
    strengths: ['コミュニケーション上手', '可愛がられる', '雰囲気を明るくする'],
    challenges: ['依存しすぎないで', '責任感も持とう', '自立心を育てて'],
  },
  only: {
    type: 'only',
    title: '一人っ子タイプ',
    emoji: '🦋',
    description: 'あなたは独立心が強く、マイペースなタイプ！自分の世界を大切にし、深く物事を考えます。クリエイティブで独自の感性を持っています。',
    characteristics: ['独立心', 'マイペース', '創造的', '深い思考'],
    strengths: ['集中力がある', '独自の視点', '自分で解決できる'],
    challenges: ['協調性も大切に', '孤立しないように', '人に頼ることも学ぼう'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { eldest: 0, middle: 0, youngest: 0, only: 0 };

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
