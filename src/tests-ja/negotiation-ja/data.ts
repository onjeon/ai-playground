// 交渉力診断
export const questions = [
  {
    id: 1,
    text: '交渉に臨む前の準備は？',
    options: [
      { text: '相手の情報を徹底的にリサーチ', type: 'strategic' },
      { text: '自分の最低ラインを決めておく', type: 'firm' },
      { text: 'Win-Winになれるポイントを探す', type: 'collaborative' },
      { text: '柔軟に対応できるよう心を整える', type: 'flexible' },
    ],
  },
  {
    id: 2,
    text: '交渉の最初のアプローチは？',
    options: [
      { text: '戦略的に有利な条件から提示', type: 'strategic' },
      { text: '自分の立場をはっきり伝える', type: 'firm' },
      { text: '相手のニーズをまず聞く', type: 'collaborative' },
      { text: '雰囲気を見て調整する', type: 'flexible' },
    ],
  },
  {
    id: 3,
    text: '相手が強気で来た時は？',
    options: [
      { text: '冷静に分析して対策を練る', type: 'strategic' },
      { text: '負けずに自分の主張を通す', type: 'firm' },
      { text: '共通点を探して妥協点を見つける', type: 'collaborative' },
      { text: '一度引いて状況を見極める', type: 'flexible' },
    ],
  },
  {
    id: 4,
    text: '譲歩するタイミングは？',
    options: [
      { text: '見返りが得られる時だけ', type: 'strategic' },
      { text: 'ギリギリまで譲らない', type: 'firm' },
      { text: '関係維持のために必要な時', type: 'collaborative' },
      { text: '全体のバランスを見て判断', type: 'flexible' },
    ],
  },
  {
    id: 5,
    text: '交渉が難航した時は？',
    options: [
      { text: '別の切り口やカードを出す', type: 'strategic' },
      { text: '粘り強く押し続ける', type: 'firm' },
      { text: '関係を温め直してから再開', type: 'collaborative' },
      { text: '一度保留にして仕切り直す', type: 'flexible' },
    ],
  },
  {
    id: 6,
    text: '感情的になりそうな時は？',
    options: [
      { text: '感情をコントロールして冷静に', type: 'strategic' },
      { text: '熱意を持って主張する', type: 'firm' },
      { text: '相手の感情も理解しようとする', type: 'collaborative' },
      { text: '場の空気を和らげる', type: 'flexible' },
    ],
  },
  {
    id: 7,
    text: '交渉で大切にしていることは？',
    options: [
      { text: '最大限の成果を得ること', type: 'strategic' },
      { text: '自分の目標を達成すること', type: 'firm' },
      { text: '良好な関係を維持すること', type: 'collaborative' },
      { text: '双方が満足できること', type: 'flexible' },
    ],
  },
  {
    id: 8,
    text: '相手に譲歩を求める時は？',
    options: [
      { text: 'こちらも何かを差し出す交換条件で', type: 'strategic' },
      { text: '論理的に必要性を主張', type: 'firm' },
      { text: '双方のメリットを説明', type: 'collaborative' },
      { text: '相手が受け入れやすい形で', type: 'flexible' },
    ],
  },
  {
    id: 9,
    text: '交渉後の関係は？',
    options: [
      { text: '次の交渉に活かす情報として記録', type: 'strategic' },
      { text: '結果が全て、関係は二の次', type: 'firm' },
      { text: '良好な関係を維持したい', type: 'collaborative' },
      { text: 'その時々で変わる', type: 'flexible' },
    ],
  },
  {
    id: 10,
    text: '交渉の成功とは？',
    options: [
      { text: '自分が最大限有利な結果を得ること', type: 'strategic' },
      { text: '目標を妥協なく達成すること', type: 'firm' },
      { text: '双方が納得できる合意', type: 'collaborative' },
      { text: '円満に話がまとまること', type: 'flexible' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  level: string;
  description: string;
  characteristics: string[];
  recommendation: string;
}> = {
  strategic: {
    type: 'strategic',
    title: '戦略家ネゴシエーター',
    emoji: '♟️',
    level: '交渉力レベル：戦略家',
    description: '徹底的な準備と分析で交渉に臨むストラテジスト！複数のシナリオを用意し、常に優位に立とうとします。チェスのように相手の動きを読む達人！',
    characteristics: ['分析力', '準備力', '先読み', '冷静', '計算高い'],
    recommendation: '時には直感も信じてみて！関係性も大切に。',
  },
  firm: {
    type: 'firm',
    title: '強気ネゴシエーター',
    emoji: '💪',
    level: '交渉力レベル：タフ',
    description: '自分の目標をしっかり持ち、粘り強く交渉するタイプ！妥協を許さず、最大限の結果を引き出します。負けない交渉術の持ち主！',
    characteristics: ['主張力', '粘り強さ', '自信', '目標志向', 'タフ'],
    recommendation: '相手との関係性も大切にするとさらに良い結果に！',
  },
  collaborative: {
    type: 'collaborative',
    title: 'Win-Winネゴシエーター',
    emoji: '🤝',
    level: '交渉力レベル：協調型',
    description: '双方が満足できる結果を目指す協調型ネゴシエーター！関係性を大切にし、長期的な信頼を築きます。みんなが幸せになる交渉のプロ！',
    characteristics: ['協調性', '信頼構築', '共感力', '長期視点', '傾聴力'],
    recommendation: '時には自分の利益も主張する勇気を！',
  },
  flexible: {
    type: 'flexible',
    title: '柔軟ネゴシエーター',
    emoji: '🌊',
    level: '交渉力レベル：適応型',
    description: '状況に応じて柔軟に対応する適応型ネゴシエーター！固定観念にとらわれず、その場で最適解を見つけます。水のように変幻自在！',
    characteristics: ['柔軟性', '適応力', '臨機応変', '観察力', 'バランス感覚'],
    recommendation: '事前準備と明確な目標も加えるとさらにパワーアップ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { strategic: 0, firm: 0, collaborative: 0, flexible: 0 };

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
