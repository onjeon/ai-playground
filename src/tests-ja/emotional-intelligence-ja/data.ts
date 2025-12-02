// EQ診断テスト (감성 지능 테스트)
export const questions = [
  {
    id: 1,
    text: '自分がイライラしている時、気づける？',
    options: [
      { text: 'すぐに気づいて対処できる', type: 'self_aware' },
      { text: '少し経ってから気づく', type: 'developing' },
      { text: '言われて初めて気づく', type: 'learning' },
      { text: 'あまり意識しない', type: 'beginner' },
    ],
  },
  {
    id: 2,
    text: '相手の気持ちを読み取るのは得意？',
    options: [
      { text: '表情や雰囲気からすぐわかる', type: 'self_aware' },
      { text: 'だいたいわかることが多い', type: 'developing' },
      { text: '言葉で言ってもらわないとわからない', type: 'learning' },
      { text: '読み取るのは苦手', type: 'beginner' },
    ],
  },
  {
    id: 3,
    text: '感情的になった時、どうする？',
    options: [
      { text: '一呼吸置いて冷静になれる', type: 'self_aware' },
      { text: '努力して落ち着こうとする', type: 'developing' },
      { text: '感情のままに反応してしまう', type: 'learning' },
      { text: 'コントロールできないことが多い', type: 'beginner' },
    ],
  },
  {
    id: 4,
    text: '友達が悩んでいる時は？',
    options: [
      { text: '気持ちに寄り添って話を聞く', type: 'self_aware' },
      { text: 'アドバイスをしたくなる', type: 'developing' },
      { text: '何を言えばいいかわからない', type: 'learning' },
      { text: '距離を置いてしまう', type: 'beginner' },
    ],
  },
  {
    id: 5,
    text: '自分の強みと弱みを理解している？',
    options: [
      { text: '両方しっかり把握している', type: 'self_aware' },
      { text: 'なんとなくわかっている', type: 'developing' },
      { text: '強みはわかるけど弱みは...', type: 'learning' },
      { text: 'あまり考えたことがない', type: 'beginner' },
    ],
  },
  {
    id: 6,
    text: '批判を受けた時の反応は？',
    options: [
      { text: '建設的に受け止めて改善に活かす', type: 'self_aware' },
      { text: '一度落ち込むけど立ち直る', type: 'developing' },
      { text: '傷ついてなかなか立ち直れない', type: 'learning' },
      { text: '怒りや拒否反応が出る', type: 'beginner' },
    ],
  },
  {
    id: 7,
    text: '人間関係でストレスを感じた時は？',
    options: [
      { text: '冷静に状況を分析して対処する', type: 'self_aware' },
      { text: '誰かに相談する', type: 'developing' },
      { text: 'モヤモヤを抱え込んでしまう', type: 'learning' },
      { text: '関係を断ちたくなる', type: 'beginner' },
    ],
  },
  {
    id: 8,
    text: 'チームで働く時、心がけていることは？',
    options: [
      { text: 'メンバーの気持ちに配慮しながら進める', type: 'self_aware' },
      { text: '自分の役割をきちんと果たす', type: 'developing' },
      { text: '指示されたことをやる', type: 'learning' },
      { text: '一人で作業したい', type: 'beginner' },
    ],
  },
  {
    id: 9,
    text: '自分の感情を言葉で表現できる？',
    options: [
      { text: '具体的に説明できる', type: 'self_aware' },
      { text: 'ある程度は伝えられる', type: 'developing' },
      { text: '言葉にするのは難しい', type: 'learning' },
      { text: '感情を話すのは苦手', type: 'beginner' },
    ],
  },
  {
    id: 10,
    text: 'EQ（心の知能指数）を高めたいと思う？',
    options: [
      { text: '常に成長を心がけている', type: 'self_aware' },
      { text: '機会があれば学びたい', type: 'developing' },
      { text: '必要性はわかるけど...', type: 'learning' },
      { text: '特に意識していない', type: 'beginner' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  eqLevel: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  developmentTips: string;
}> = {
  self_aware: {
    type: 'self_aware',
    title: 'EQマスター',
    emoji: '🧠💖',
    eqLevel: 'EQレベル：★★★★★',
    description: 'あなたは自分の感情を理解し、相手の気持ちにも敏感なEQの達人です。人間関係を円滑に築き、感情的な知性が高いタイプです。',
    characteristics: ['自己認識が高い', '共感力がある', '感情のコントロールができる', '人間関係上手'],
    strengths: ['リーダーシップ', '信頼される人柄', 'コミュニケーション力', 'ストレス管理'],
    developmentTips: 'その力を周りの人のサポートにも活かして、より良いチームや関係を築きましょう。',
  },
  developing: {
    type: 'developing',
    title: 'EQ成長中',
    emoji: '📈💪',
    eqLevel: 'EQレベル：★★★★☆',
    description: 'あなたはEQの基礎がしっかりしていて、さらに成長中の段階です。自己理解と他者理解のバランスが取れてきています。',
    characteristics: ['自己改善意識がある', '人の話を聞ける', '感情に向き合える', '成長意欲がある'],
    strengths: ['学習意欲', '適応力', '協調性', '前向きな姿勢'],
    developmentTips: '感情日記をつけるなど、自分の感情をより深く観察する習慣をつけると更に成長できます。',
  },
  learning: {
    type: 'learning',
    title: 'EQ学習中',
    emoji: '📚🌱',
    eqLevel: 'EQレベル：★★★☆☆',
    description: 'あなたはEQの大切さに気づき始めている段階です。まだ発展途上ですが、意識することで大きく成長できるポテンシャルがあります。',
    characteristics: ['気づきがある', '努力家', '自分を変えたい気持ちがある', '素直'],
    strengths: ['成長の伸びしろ', '謙虚さ', '学ぶ姿勢', '可能性'],
    developmentTips: 'まずは自分の感情に名前をつける練習から始めてみましょう。「今、私は〇〇を感じている」と言語化することが第一歩です。',
  },
  beginner: {
    type: 'beginner',
    title: 'EQ初心者',
    emoji: '🌟🔰',
    eqLevel: 'EQレベル：★★☆☆☆',
    description: 'あなたはまだ感情との向き合い方を模索中かもしれません。でも大丈夫、EQは誰でも高められるスキルです。',
    characteristics: ['これから成長できる', '自分のペースがある', '論理的思考が得意かも', '感情より行動派'],
    strengths: ['合理的な判断', '冷静さ', '独立心', '未開発の可能性'],
    developmentTips: '感情を「弱さ」ではなく「大切な情報」として捉えてみましょう。小さな感情の変化に気づく練習が成長の鍵です。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { self_aware: 0, developing: 0, learning: 0, beginner: 0 };

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
