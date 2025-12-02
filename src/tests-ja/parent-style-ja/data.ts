// 親としてのタイプ診断 (부모 스타일 테스트)
export const questions = [
  {
    id: 1,
    text: '子どもがルールを破った時は？',
    options: [
      { text: 'しっかり叱って教える', type: 'authoritative' },
      { text: 'なぜダメか話し合う', type: 'democratic' },
      { text: '今回は見逃す', type: 'permissive' },
      { text: '子どもに任せる', type: 'freerange' },
    ],
  },
  {
    id: 2,
    text: '子どもの習い事は？',
    options: [
      { text: '将来に役立つものを選ぶ', type: 'authoritative' },
      { text: '子どもと相談して決める', type: 'democratic' },
      { text: '子どもがやりたいことをさせる', type: 'permissive' },
      { text: '自分で見つけさせる', type: 'freerange' },
    ],
  },
  {
    id: 3,
    text: '子どもの友達関係について？',
    options: [
      { text: 'どんな友達か把握したい', type: 'authoritative' },
      { text: '困ったら相談に乗る', type: 'democratic' },
      { text: '子どもの世界に口出ししない', type: 'permissive' },
      { text: '自分で学ばせる', type: 'freerange' },
    ],
  },
  {
    id: 4,
    text: '子どもへの期待は？',
    options: [
      { text: '高い目標を持ってほしい', type: 'authoritative' },
      { text: '自分なりの道を見つけてほしい', type: 'democratic' },
      { text: '幸せならそれでいい', type: 'permissive' },
      { text: '自分で決めればいい', type: 'freerange' },
    ],
  },
  {
    id: 5,
    text: '子どもとのコミュニケーションは？',
    options: [
      { text: '教育的な会話が多い', type: 'authoritative' },
      { text: '対等に話し合う', type: 'democratic' },
      { text: '友達のように楽しく', type: 'permissive' },
      { text: '必要な時に話す', type: 'freerange' },
    ],
  },
  {
    id: 6,
    text: '子どもが失敗した時は？',
    options: [
      { text: '次に活かせるよう指導', type: 'authoritative' },
      { text: '一緒に振り返る', type: 'democratic' },
      { text: '慰めて元気づける', type: 'permissive' },
      { text: '見守る', type: 'freerange' },
    ],
  },
  {
    id: 7,
    text: '子どもの勉強について？',
    options: [
      { text: '計画を立ててサポート', type: 'authoritative' },
      { text: '困った時に手伝う', type: 'democratic' },
      { text: '無理強いしない', type: 'permissive' },
      { text: '本人のやる気次第', type: 'freerange' },
    ],
  },
  {
    id: 8,
    text: '子どもへのご褒美は？',
    options: [
      { text: '成果に応じて与える', type: 'authoritative' },
      { text: '頑張りを認めて与える', type: 'democratic' },
      { text: '欲しがれば与える', type: 'permissive' },
      { text: '特に考えない', type: 'freerange' },
    ],
  },
  {
    id: 9,
    text: '理想の親子関係は？',
    options: [
      { text: '尊敬される親', type: 'authoritative' },
      { text: '信頼し合える関係', type: 'democratic' },
      { text: '仲良しの親子', type: 'permissive' },
      { text: '互いに自立した関係', type: 'freerange' },
    ],
  },
  {
    id: 10,
    text: '子どもの将来は？',
    options: [
      { text: '成功してほしい', type: 'authoritative' },
      { text: '自分らしく生きてほしい', type: 'democratic' },
      { text: '笑顔でいてくれれば', type: 'permissive' },
      { text: '自分で切り開いてほしい', type: 'freerange' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  parentingStyle: string[];
  strengths: string[];
  considerations: string[];
}> = {
  authoritative: {
    type: 'authoritative',
    title: '教育熱心タイプ',
    emoji: '📚',
    description: 'あなたは子どもの成長に熱心に関わるタイプ！高い期待を持ちつつ、しっかりとサポートします。規律と愛情のバランスが取れた子育てを目指します。',
    parentingStyle: ['明確なルールを設ける', '教育的なアプローチ', '目標を持たせる'],
    strengths: ['子どもに方向性を与える', '規律正しい', 'サポート力がある'],
    considerations: ['プレッシャーを与えすぎない', '子どもの意見も聞こう', '完璧を求めすぎないで'],
  },
  democratic: {
    type: 'democratic',
    title: '民主的対話タイプ',
    emoji: '💬',
    description: 'あなたは子どもと対等に話し合うタイプ！意見を尊重し、一緒に考えることを大切にします。信頼関係を築きながら子どもの自主性を育てます。',
    parentingStyle: ['話し合いを重視', '子どもの意見を尊重', '一緒に考える'],
    strengths: ['信頼関係が築ける', '自主性を育てる', '対話力がつく'],
    considerations: ['時には決断も必要', '甘くなりすぎないように', 'ルールも大切に'],
  },
  permissive: {
    type: 'permissive',
    title: '優しい見守りタイプ',
    emoji: '💝',
    description: 'あなたは子どもに優しく寄り添うタイプ！無理強いせず、子どものペースを大切にします。愛情深く、子どもが安心できる存在です。',
    parentingStyle: ['子どもの意思を尊重', '叱るより褒める', '自由にさせる'],
    strengths: ['愛情深い', '子どもがのびのび育つ', '安心感を与える'],
    considerations: ['ルールも必要', '甘やかしすぎに注意', '時には厳しさも'],
  },
  freerange: {
    type: 'freerange',
    title: '自立促進タイプ',
    emoji: '🦋',
    description: 'あなたは子どもの自立を促すタイプ！過干渉を避け、自分で考え行動する力を育てます。失敗も成長の糧と考え、見守る姿勢を大切にします。',
    parentingStyle: ['自分で考えさせる', '過干渉を避ける', '失敗を恐れない'],
    strengths: ['自立心が育つ', '問題解決能力がつく', '強い子どもに育つ'],
    considerations: ['放任になりすぎない', 'サポートが必要な時も', '愛情表現も忘れずに'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { authoritative: 0, democratic: 0, permissive: 0, freerange: 0 };

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
