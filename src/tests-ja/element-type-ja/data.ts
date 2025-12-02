// 五行タイプ診断
export const questions = [
  {
    id: 1,
    text: 'あなたが最も心地よいと感じる季節は？',
    options: [
      { text: '春の芽吹きの季節', type: 'wood' },
      { text: '夏の情熱的な季節', type: 'fire' },
      { text: '秋の実りの季節', type: 'metal' },
      { text: '冬の静寂の季節', type: 'water' },
    ],
  },
  {
    id: 2,
    text: 'ストレスを感じた時、どうしますか？',
    options: [
      { text: '自然の中を歩く', type: 'wood' },
      { text: '友人と話して発散', type: 'fire' },
      { text: '整理整頓をする', type: 'metal' },
      { text: '静かに瞑想する', type: 'water' },
    ],
  },
  {
    id: 3,
    text: '仕事で重視することは？',
    options: [
      { text: '成長と発展', type: 'wood' },
      { text: '情熱とやりがい', type: 'fire' },
      { text: '効率と正確さ', type: 'metal' },
      { text: '人との調和', type: 'water' },
    ],
  },
  {
    id: 4,
    text: '好きな色はどれに近い？',
    options: [
      { text: '緑・青緑系', type: 'wood' },
      { text: '赤・オレンジ系', type: 'fire' },
      { text: '白・シルバー系', type: 'metal' },
      { text: '黒・紺系', type: 'water' },
    ],
  },
  {
    id: 5,
    text: 'あなたの性格を一言で表すと？',
    options: [
      { text: '向上心がある', type: 'wood' },
      { text: '明るく社交的', type: 'fire' },
      { text: '几帳面で正義感', type: 'metal' },
      { text: '柔軟で適応力', type: 'water' },
    ],
  },
  {
    id: 6,
    text: '困っている人を見たら？',
    options: [
      { text: '解決策を一緒に考える', type: 'wood' },
      { text: '励まして元気づける', type: 'fire' },
      { text: '具体的なアドバイス', type: 'metal' },
      { text: '黙って寄り添う', type: 'water' },
    ],
  },
  {
    id: 7,
    text: '理想の住環境は？',
    options: [
      { text: '緑豊かな場所', type: 'wood' },
      { text: '賑やかな都会', type: 'fire' },
      { text: 'シンプルで機能的', type: 'metal' },
      { text: '水辺や静かな場所', type: 'water' },
    ],
  },
  {
    id: 8,
    text: '朝の目覚めはどんな感じ？',
    options: [
      { text: '新しい一日にワクワク', type: 'wood' },
      { text: 'エネルギー全開', type: 'fire' },
      { text: '計画通りに行動', type: 'metal' },
      { text: 'ゆっくり静かに', type: 'water' },
    ],
  },
  {
    id: 9,
    text: '人間関係で大切にしていることは？',
    options: [
      { text: '互いの成長', type: 'wood' },
      { text: '楽しい時間の共有', type: 'fire' },
      { text: '誠実さと信頼', type: 'metal' },
      { text: '深い心の繋がり', type: 'water' },
    ],
  },
  {
    id: 10,
    text: 'あなたにとって幸せとは？',
    options: [
      { text: '夢に向かって進むこと', type: 'wood' },
      { text: '今この瞬間を楽しむこと', type: 'fire' },
      { text: '目標を達成すること', type: 'metal' },
      { text: '心が穏やかであること', type: 'water' },
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
  luckyItem: string;
}> = {
  wood: {
    type: 'wood',
    title: '木タイプ',
    emoji: '🌳',
    percentage: '成長力 94%',
    description: '木のように上へ上へと伸びていくあなた。向上心があり、常に成長を求めています。困難があっても柔軟に乗り越え、周囲に希望を与える存在です。',
    characteristics: ['向上心', '柔軟性', '創造力', '忍耐力', '寛容'],
    luckyItem: '観葉植物を部屋に置くと運気UP',
  },
  fire: {
    type: 'fire',
    title: '火タイプ',
    emoji: '🔥',
    percentage: '情熱度 96%',
    description: '火のように情熱的で明るいあなた。社交的で人を惹きつける魅力があり、周囲を温かく照らします。エネルギッシュに夢を追いかけます。',
    characteristics: ['情熱', '明朗', '社交的', 'カリスマ性', '直感力'],
    luckyItem: 'キャンドルを灯すと運気UP',
  },
  metal: {
    type: 'metal',
    title: '金タイプ',
    emoji: '⚙️',
    percentage: '正確度 93%',
    description: '金属のように強く確かなあなた。正義感が強く、物事を正確に判断する力があります。規律を重んじ、信頼される存在です。',
    characteristics: ['正義感', '几帳面', '決断力', '完璧主義', '高潔'],
    luckyItem: 'シルバーアクセサリーで運気UP',
  },
  water: {
    type: 'water',
    title: '水タイプ',
    emoji: '💧',
    percentage: '適応力 91%',
    description: '水のように柔軟で深いあなた。どんな環境にも適応し、人の心を読み取る能力に優れています。静かな強さと知恵を持っています。',
    characteristics: ['柔軟性', '知恵', '深い洞察力', '適応力', '神秘的'],
    luckyItem: '水晶やアクアマリンで運気UP',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { wood: 0, fire: 0, metal: 0, water: 0 };

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
