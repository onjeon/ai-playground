// フィードバックタイプ
export const questions = [
  {
    id: 1,
    text: '部下や後輩の仕事にフィードバックする時は？',
    options: [
      { text: 'まず良い点を褒めてから改善点を', type: 'supportive' },
      { text: '率直に問題点を指摘する', type: 'direct' },
      { text: 'データや事例を示して説明', type: 'analytical' },
      { text: '相手の考えを聞いてから', type: 'coaching' },
    ],
  },
  {
    id: 2,
    text: 'ネガティブなフィードバックをする時は？',
    options: [
      { text: 'フォローを入れながら伝える', type: 'supportive' },
      { text: 'はっきりストレートに言う', type: 'direct' },
      { text: '具体的な改善案を提示', type: 'analytical' },
      { text: '質問形式で気づかせる', type: 'coaching' },
    ],
  },
  {
    id: 3,
    text: '相手のモチベーションが低い時は？',
    options: [
      { text: '励まして自信をつけさせる', type: 'supportive' },
      { text: '期待を明確に伝える', type: 'direct' },
      { text: '目標と現状のギャップを分析', type: 'analytical' },
      { text: '本人の気持ちを深堀りする', type: 'coaching' },
    ],
  },
  {
    id: 4,
    text: 'フィードバックのタイミングは？',
    options: [
      { text: '相手の状態を見て良いタイミングで', type: 'supportive' },
      { text: '気づいたらすぐに', type: 'direct' },
      { text: '定期的なレビューの場で', type: 'analytical' },
      { text: '1on1の時間を設けて', type: 'coaching' },
    ],
  },
  {
    id: 5,
    text: '失敗した相手へのフィードバックは？',
    options: [
      { text: '落ち込ませないよう配慮', type: 'supportive' },
      { text: '何がダメだったか明確に', type: 'direct' },
      { text: '原因分析と再発防止策を一緒に', type: 'analytical' },
      { text: '本人に振り返りをさせる', type: 'coaching' },
    ],
  },
  {
    id: 6,
    text: '成功した相手へのフィードバックは？',
    options: [
      { text: '心から称賛して喜びを共有', type: 'supportive' },
      { text: 'さらに高い目標を示す', type: 'direct' },
      { text: '成功要因を分析して共有', type: 'analytical' },
      { text: '本人の成長を一緒に確認', type: 'coaching' },
    ],
  },
  {
    id: 7,
    text: 'フィードバックを受ける側だとしたら？',
    options: [
      { text: '温かく見守ってほしい', type: 'supportive' },
      { text: 'はっきり言ってほしい', type: 'direct' },
      { text: '具体的なデータがほしい', type: 'analytical' },
      { text: '自分で考える時間がほしい', type: 'coaching' },
    ],
  },
  {
    id: 8,
    text: 'フィードバック後のフォローは？',
    options: [
      { text: 'こまめに声をかけて見守る', type: 'supportive' },
      { text: '結果で判断する', type: 'direct' },
      { text: '進捗を定量的にチェック', type: 'analytical' },
      { text: '定期的に振り返りの場を設ける', type: 'coaching' },
    ],
  },
  {
    id: 9,
    text: 'チーム全体へのフィードバックは？',
    options: [
      { text: 'チームの良いところを強調', type: 'supportive' },
      { text: '課題を明確に共有', type: 'direct' },
      { text: '数字やデータで現状を示す', type: 'analytical' },
      { text: 'みんなで議論して考える', type: 'coaching' },
    ],
  },
  {
    id: 10,
    text: 'フィードバックで大切にしていることは？',
    options: [
      { text: '相手の気持ちへの配慮', type: 'supportive' },
      { text: '事実を正確に伝えること', type: 'direct' },
      { text: '客観的で具体的な内容', type: 'analytical' },
      { text: '相手の成長につなげること', type: 'coaching' },
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
  recommendation: string;
}> = {
  supportive: {
    type: 'supportive',
    title: 'サポーティブ型',
    emoji: '💚',
    percentage: 'サポート力 95%',
    description: '相手の気持ちに寄り添い、温かくフィードバックするタイプ。褒めて伸ばすスタイルで、相手のモチベーションを大切にします。心理的安全性を作る名人！',
    characteristics: ['共感力', '温かさ', '配慮', '励まし上手', 'モチベーター'],
    recommendation: '時には厳しいことも伝える勇気を持って！',
  },
  direct: {
    type: 'direct',
    title: 'ストレート型',
    emoji: '🎯',
    percentage: '率直度 92%',
    description: '遠回しにせず、率直に伝えるタイプ。明確な期待と評価を示し、相手に何をすべきか迷わせません。信頼される厳しさを持つリーダー！',
    characteristics: ['率直', '明確', '公正', '期待を示す', 'ブレない'],
    recommendation: '伝え方にも少し配慮を加えると効果的！',
  },
  analytical: {
    type: 'analytical',
    title: 'アナリティカル型',
    emoji: '📊',
    percentage: '分析力 90%',
    description: 'データや事実に基づいて客観的にフィードバックするタイプ。感情に左右されず、具体的な改善策を示します。説得力抜群のロジカルフィードバッカー！',
    characteristics: ['論理的', '客観的', '具体的', 'データ重視', '改善志向'],
    recommendation: '感情面へのケアも忘れずに！',
  },
  coaching: {
    type: 'coaching',
    title: 'コーチング型',
    emoji: '🌱',
    percentage: '育成力 93%',
    description: '相手に考えさせ、気づきを促すコーチングスタイル。答えを与えるのではなく、質問で導きます。人を育てる天才！',
    characteristics: ['質問力', '傾聴', '育成志向', '忍耐力', '成長支援'],
    recommendation: '緊急時には直接的なフィードバックも必要！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { supportive: 0, direct: 0, analytical: 0, coaching: 0 };

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
