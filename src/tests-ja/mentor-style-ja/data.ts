// メンター適性診断 (멘토 적성 테스트)
export const questions = [
  {
    id: 1,
    text: '後輩や部下に教える時のスタイルは？',
    options: [
      { text: '手本を見せて真似させる', type: 'demonstrator' },
      { text: '質問を投げかけて考えさせる', type: 'coach' },
      { text: '一緒に考え、伴走する', type: 'companion' },
      { text: 'マニュアルや資料を渡す', type: 'delegator' },
    ],
  },
  {
    id: 2,
    text: '相談を受けた時の対応は？',
    options: [
      { text: '具体的なアドバイスを与える', type: 'demonstrator' },
      { text: '「どう思う？」と問い返す', type: 'coach' },
      { text: '一緒に解決策を探る', type: 'companion' },
      { text: '参考になる情報を伝える', type: 'delegator' },
    ],
  },
  {
    id: 3,
    text: '後輩の成長で嬉しいことは？',
    options: [
      { text: '自分の教えを活かしてくれた時', type: 'demonstrator' },
      { text: '自分で考えて行動できるようになった時', type: 'coach' },
      { text: '一緒に乗り越えた経験を語ってくれた時', type: 'companion' },
      { text: '自立して成果を出した時', type: 'delegator' },
    ],
  },
  {
    id: 4,
    text: '後輩が失敗した時は？',
    options: [
      { text: '何が悪かったか具体的に指摘', type: 'demonstrator' },
      { text: '「なぜだと思う？」と振り返らせる', type: 'coach' },
      { text: '励まして次に向かわせる', type: 'companion' },
      { text: '自分で気づくまで見守る', type: 'delegator' },
    ],
  },
  {
    id: 5,
    text: '指導で大切にしていることは？',
    options: [
      { text: '正しいやり方を伝える', type: 'demonstrator' },
      { text: '考える力を育てる', type: 'coach' },
      { text: '信頼関係を築く', type: 'companion' },
      { text: '自主性を尊重する', type: 'delegator' },
    ],
  },
  {
    id: 6,
    text: 'フィードバックの仕方は？',
    options: [
      { text: '良い点・悪い点を明確に伝える', type: 'demonstrator' },
      { text: '質問形式で気づきを促す', type: 'coach' },
      { text: '感謝と励ましを伝える', type: 'companion' },
      { text: '結果に基づいて評価', type: 'delegator' },
    ],
  },
  {
    id: 7,
    text: '後輩との距離感は？',
    options: [
      { text: '先輩として一歩引いた立場', type: 'demonstrator' },
      { text: '対等なパートナー', type: 'coach' },
      { text: '近い存在、友達のよう', type: 'companion' },
      { text: '必要な時だけ関わる', type: 'delegator' },
    ],
  },
  {
    id: 8,
    text: '後輩が悩んでいる時は？',
    options: [
      { text: '解決策を提示する', type: 'demonstrator' },
      { text: '質問で整理させる', type: 'coach' },
      { text: 'じっくり話を聞く', type: 'companion' },
      { text: '自分で解決するよう促す', type: 'delegator' },
    ],
  },
  {
    id: 9,
    text: 'メンターとしての強みは？',
    options: [
      { text: '豊富な経験と知識', type: 'demonstrator' },
      { text: '相手の可能性を引き出す力', type: 'coach' },
      { text: '共感力と親しみやすさ', type: 'companion' },
      { text: '任せて見守る姿勢', type: 'delegator' },
    ],
  },
  {
    id: 10,
    text: '理想の師弟関係は？',
    options: [
      { text: '技術や知識を継承する関係', type: 'demonstrator' },
      { text: '互いに成長し合う関係', type: 'coach' },
      { text: '心の支えになる関係', type: 'companion' },
      { text: '自立を促す関係', type: 'delegator' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  mentorStyle: string[];
  strengths: string[];
  improvements: string[];
}> = {
  demonstrator: {
    type: 'demonstrator',
    title: '実践指導型メンター',
    emoji: '🎯',
    description: 'あなたは自らの経験と知識で導く実践型メンター！手本を見せ、具体的なアドバイスで後輩を育てます。確実に技術を伝えられる頼れる存在。',
    mentorStyle: ['手本を見せる', '具体的なアドバイス', '経験に基づく指導'],
    strengths: ['確実に技術が伝わる', '後輩が迷わない', '信頼される'],
    improvements: ['答えを与えすぎないで', '相手の考えも聞こう', '自主性も育てて'],
  },
  coach: {
    type: 'coach',
    title: '質問引き出し型メンター',
    emoji: '💡',
    description: 'あなたは質問で考えさせるコーチ型メンター！答えを教えるより、自分で気づかせることを大切にします。後輩の潜在能力を引き出す名伯楽。',
    mentorStyle: ['質問で考えさせる', '気づきを促す', '考える力を育てる'],
    strengths: ['自立した人材を育てる', '深い学びを与える', '長期的な成長'],
    improvements: ['時には答えも教えて', '焦らせすぎないで', '具体的なサポートも必要'],
  },
  companion: {
    type: 'companion',
    title: '伴走型メンター',
    emoji: '🤝',
    description: 'あなたは一緒に歩む伴走型メンター！信頼関係を大切にし、心の支えになります。後輩にとって、悩みを相談できる安心できる存在。',
    mentorStyle: ['一緒に考える', '話を聞く', '信頼関係を重視'],
    strengths: ['相談しやすい', '安心感を与える', '心の成長を支える'],
    improvements: ['甘くなりすぎないで', '時には厳しさも必要', '依存させすぎないで'],
  },
  delegator: {
    type: 'delegator',
    title: '自立促進型メンター',
    emoji: '🦅',
    description: 'あなたは自立を促す見守り型メンター！必要以上に干渉せず、後輩を信じて任せます。自主性を尊重し、独り立ちをサポート。',
    mentorStyle: ['任せて見守る', '自主性を尊重', '必要な時だけ介入'],
    strengths: ['自立した人材が育つ', '主体性を引き出す', '過保護にならない'],
    improvements: ['放置にならないように', 'フォローも忘れずに', '初期は手厚くサポートを'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { demonstrator: 0, coach: 0, companion: 0, delegator: 0 };

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
