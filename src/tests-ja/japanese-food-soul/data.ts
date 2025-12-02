// 日本食ソウルフード診断 (일식 소울푸드)
export const questions = [
  {
    id: 1,
    text: '疲れた時に食べたくなるものは？',
    options: [
      { text: 'あったかいお味噌汁とご飯', type: 'rice' },
      { text: '濃厚なラーメン', type: 'ramen' },
      { text: 'ふわふわの卵料理', type: 'egg' },
      { text: '熱々の揚げ物', type: 'fried' },
    ],
  },
  {
    id: 2,
    text: '落ち込んだ時に食べたいものは？',
    options: [
      { text: 'おふくろの味的な和食', type: 'rice' },
      { text: 'ガッツリ系のこってりメニュー', type: 'ramen' },
      { text: '優しい味の卵かけごはん', type: 'egg' },
      { text: 'サクサク食感で気分転換', type: 'fried' },
    ],
  },
  {
    id: 3,
    text: '子供の頃の思い出の味といえば？',
    options: [
      { text: 'おにぎりやお弁当', type: 'rice' },
      { text: '特別な日のラーメン屋', type: 'ramen' },
      { text: 'オムライスや茶碗蒸し', type: 'egg' },
      { text: 'コロッケやから揚げ', type: 'fried' },
    ],
  },
  {
    id: 4,
    text: '深夜に食べたくなるのは？',
    options: [
      { text: 'お茶漬けやおにぎり', type: 'rice' },
      { text: '〆のラーメン', type: 'ramen' },
      { text: '卵かけごはんや目玉焼き', type: 'egg' },
      { text: '揚げ物やフライドポテト', type: 'fried' },
    ],
  },
  {
    id: 5,
    text: 'コンビニで買うなら？',
    options: [
      { text: 'おにぎりやお弁当', type: 'rice' },
      { text: 'カップラーメン', type: 'ramen' },
      { text: 'たまごサンドや温泉卵', type: 'egg' },
      { text: 'からあげクンやコロッケ', type: 'fried' },
    ],
  },
  {
    id: 6,
    text: '自分を料理に例えるなら？',
    options: [
      { text: '素朴で飽きない白ご飯タイプ', type: 'rice' },
      { text: '個性的で濃厚なラーメンタイプ', type: 'ramen' },
      { text: '柔軟で優しい卵タイプ', type: 'egg' },
      { text: 'インパクト抜群の揚げ物タイプ', type: 'fried' },
    ],
  },
  {
    id: 7,
    text: '旅行先で必ず食べるものは？',
    options: [
      { text: 'その土地の郷土料理', type: 'rice' },
      { text: 'ご当地ラーメン', type: 'ramen' },
      { text: '地元の卵を使った料理', type: 'egg' },
      { text: 'ご当地グルメの揚げ物', type: 'fried' },
    ],
  },
  {
    id: 8,
    text: '冬の寒い日に食べたいのは？',
    options: [
      { text: '炊きたてご飯と煮物', type: 'rice' },
      { text: '熱々のラーメン', type: 'ramen' },
      { text: 'あったかいおでんの卵', type: 'egg' },
      { text: 'サクサクのとんかつ', type: 'fried' },
    ],
  },
  {
    id: 9,
    text: '食事で一番大切にしていることは？',
    options: [
      { text: '栄養バランスと体への優しさ', type: 'rice' },
      { text: '満足感とパンチのある味', type: 'ramen' },
      { text: '手軽さと優しい味わい', type: 'egg' },
      { text: '食べ応えとジューシーさ', type: 'fried' },
    ],
  },
  {
    id: 10,
    text: '最後の晩餐に選ぶなら？',
    options: [
      { text: '炊きたて白ご飯とお味噌汁、焼き魚', type: 'rice' },
      { text: '一番好きな店のラーメン', type: 'ramen' },
      { text: 'ふわとろオムライス', type: 'egg' },
      { text: 'カリカリジューシーなとんかつ', type: 'fried' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  personality: string[];
  soulFood: string[];
  restaurant: string;
}> = {
  rice: {
    type: 'rice',
    title: '白ご飯ソウルタイプ',
    emoji: '🍚',
    description: 'あなたの魂は日本の主食、白ご飯！素朴で飽きない、みんなに愛される存在です。どんなおかずとも相性抜群のように、人間関係も円滑。安定感があり、周りから頼りにされる存在です。',
    personality: ['安定感がある', '周りと協調できる', '飽きられない魅力', '基本を大切にする', '信頼できる'],
    soulFood: ['炊きたてご飯', 'おにぎり', 'お茶漬け', '卵かけごはん', 'どんぶり'],
    restaurant: '定食屋さんや家庭料理店',
  },
  ramen: {
    type: 'ramen',
    title: 'ラーメンソウルタイプ',
    emoji: '🍜',
    description: 'あなたの魂は国民食ラーメン！個性的で濃厚、一度ハマったら忘れられない存在感。こだわりが強く、自分のスタイルを持っています。時に熱すぎることもあるけど、それがあなたの魅力！',
    personality: ['個性的', 'こだわりが強い', '熱い情熱', '印象に残る', '中毒性がある魅力'],
    soulFood: ['豚骨ラーメン', '醤油ラーメン', '味噌ラーメン', 'つけ麺', '担々麺'],
    restaurant: '行きつけのラーメン屋',
  },
  egg: {
    type: 'egg',
    title: '卵料理ソウルタイプ',
    emoji: '🥚',
    description: 'あなたの魂は万能選手、卵！焼いても茹でても生でも美味しいように、どんな状況にも対応できる柔軟性があります。優しい味わいのように、周りを癒す存在です。',
    personality: ['柔軟性がある', '優しい', '万能', '適応力が高い', '癒し系'],
    soulFood: ['卵かけごはん', 'オムライス', '目玉焼き', '茶碗蒸し', '温泉卵'],
    restaurant: '洋食屋さんやカフェ',
  },
  fried: {
    type: 'fried',
    title: '揚げ物ソウルタイプ',
    emoji: '🍤',
    description: 'あなたの魂はみんな大好き揚げ物！サクサクでジューシー、インパクト抜群の存在感。明るくて元気、場を盛り上げるムードメーカー。カロリーは気にせず、人生を楽しむタイプ！',
    personality: ['明るい', 'インパクトがある', '元気', 'ムードメーカー', '人生を楽しむ'],
    soulFood: ['から揚げ', 'とんかつ', '天ぷら', 'コロッケ', 'エビフライ'],
    restaurant: 'とんかつ屋や居酒屋',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { rice: 0, ramen: 0, egg: 0, fried: 0 };

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
