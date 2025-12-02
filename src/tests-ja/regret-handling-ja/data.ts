// 後悔の扱い方診断
export const questions = [
  {
    id: 1,
    text: '後悔した時、最初にすることは？',
    options: [
      { text: '何がダメだったか分析する', type: 'analytical' },
      { text: '気持ちを切り替える', type: 'resilient' },
      { text: '誰かに話を聞いてもらう', type: 'social' },
      { text: 'ずっと考え込んでしまう', type: 'ruminating' },
    ],
  },
  {
    id: 2,
    text: '過去の失敗を思い出すと？',
    options: [
      { text: '学びとして活かせている', type: 'analytical' },
      { text: '過去は過去と割り切れる', type: 'resilient' },
      { text: '誰かと話して消化する', type: 'social' },
      { text: '恥ずかしくて辛くなる', type: 'ruminating' },
    ],
  },
  {
    id: 3,
    text: '「あの時こうすれば…」と思うことは？',
    options: [
      { text: '次に活かすために考える', type: 'analytical' },
      { text: 'たまに思うがすぐ忘れる', type: 'resilient' },
      { text: '友達に相談する', type: 'social' },
      { text: '頻繁に思い悩む', type: 'ruminating' },
    ],
  },
  {
    id: 4,
    text: '大きな後悔を経験した時は？',
    options: [
      { text: '原因を突き止めて改善する', type: 'analytical' },
      { text: '時間が解決すると信じる', type: 'resilient' },
      { text: '周りのサポートを求める', type: 'social' },
      { text: '長期間引きずる', type: 'ruminating' },
    ],
  },
  {
    id: 5,
    text: '後悔から立ち直る方法は？',
    options: [
      { text: '問題解決に集中する', type: 'analytical' },
      { text: '新しいことに目を向ける', type: 'resilient' },
      { text: '人と話してスッキリする', type: 'social' },
      { text: 'なかなか立ち直れない', type: 'ruminating' },
    ],
  },
  {
    id: 6,
    text: '後悔を人生でどう位置づけている？',
    options: [
      { text: '成長の糧', type: 'analytical' },
      { text: '通過点', type: 'resilient' },
      { text: '分かち合うもの', type: 'social' },
      { text: '重荷', type: 'ruminating' },
    ],
  },
  {
    id: 7,
    text: '友達が後悔で悩んでいたら？',
    options: [
      { text: '解決策を一緒に考える', type: 'analytical' },
      { text: '「大丈夫、なんとかなる」と励ます', type: 'resilient' },
      { text: 'じっくり話を聞く', type: 'social' },
      { text: '自分も辛くなってしまう', type: 'ruminating' },
    ],
  },
  {
    id: 8,
    text: '眠れない夜に後悔を思い出すことは？',
    options: [
      { text: 'あまりない、考えても仕方ない', type: 'analytical' },
      { text: 'ほとんどない', type: 'resilient' },
      { text: '翌日誰かに話そうと思う', type: 'social' },
      { text: 'よくある', type: 'ruminating' },
    ],
  },
  {
    id: 9,
    text: '後悔の数について？',
    options: [
      { text: '少ない、すぐに改善するから', type: 'analytical' },
      { text: '少ない、引きずらないから', type: 'resilient' },
      { text: '普通、みんな同じくらい', type: 'social' },
      { text: '多い気がする', type: 'ruminating' },
    ],
  },
  {
    id: 10,
    text: '後悔との付き合い方を一言で？',
    options: [
      { text: '分析と改善', type: 'analytical' },
      { text: '受け入れて前進', type: 'resilient' },
      { text: '共有と消化', type: 'social' },
      { text: '格闘中', type: 'ruminating' },
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
  regretAdvice: string;
}> = {
  analytical: {
    type: 'analytical',
    title: '分析型',
    emoji: '🔍',
    percentage: '分析力 90%',
    description: '後悔を冷静に分析し、学びに変えるタイプ。同じ失敗を繰り返さないよう、原因を突き止めて改善します。',
    characteristics: ['論理的', '問題解決型', '成長志向', '冷静', '実践的'],
    regretAdvice: '感情面のケアも忘れずに',
  },
  resilient: {
    type: 'resilient',
    title: 'レジリエンス型',
    emoji: '🌱',
    percentage: '回復力 95%',
    description: '後悔を引きずらず、すぐに気持ちを切り替えられるタイプ。過去より未来に目を向ける強さがあります。',
    characteristics: ['回復力', '前向き', '楽観的', '適応力', 'タフ'],
    regretAdvice: '時には立ち止まって感じることも大切',
  },
  social: {
    type: 'social',
    title: '共有型',
    emoji: '💬',
    percentage: '共有力 85%',
    description: '後悔を人と分かち合うことで消化するタイプ。話すことで整理し、サポートを得て乗り越えます。',
    characteristics: ['社交的', 'オープン', '共感力', 'つながり重視', '表現力'],
    regretAdvice: '自分で向き合う時間も時には必要',
  },
  ruminating: {
    type: 'ruminating',
    title: '反芻型',
    emoji: '🌀',
    percentage: '反芻度 80%',
    description: '後悔を何度も思い返してしまうタイプ。繊細で深く考えるがゆえに、なかなか手放せないことがあります。',
    characteristics: ['繊細', '深い思考', '感受性', '完璧主義', '内省的'],
    regretAdvice: '「完璧じゃなくてOK」と自分に言い聞かせて',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { analytical: 0, resilient: 0, social: 0, ruminating: 0 };

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
