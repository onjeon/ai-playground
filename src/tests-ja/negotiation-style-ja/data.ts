// 交渉スタイル診断
export const questions = [
  {
    id: 1,
    text: '交渉の前にまず何をする？',
    options: [
      { text: '相手のニーズや背景を徹底リサーチ', type: 'strategic' },
      { text: '良好な関係づくりから始める', type: 'collaborative' },
      { text: '自分の条件を明確にしておく', type: 'assertive' },
      { text: '柔軟に対応できるよう準備', type: 'adaptive' },
    ],
  },
  {
    id: 2,
    text: '交渉で最初に切り出す時は？',
    options: [
      { text: '計算された提案から始める', type: 'strategic' },
      { text: '雑談で場を和ませてから', type: 'collaborative' },
      { text: '自分の希望をはっきり伝える', type: 'assertive' },
      { text: '相手の出方を見てから', type: 'adaptive' },
    ],
  },
  {
    id: 3,
    text: '相手が強硬な態度を取ってきたら？',
    options: [
      { text: '冷静に分析して戦略を練り直す', type: 'strategic' },
      { text: '共通点を探して歩み寄る', type: 'collaborative' },
      { text: '負けずに主張を通す', type: 'assertive' },
      { text: '一度引いて様子を見る', type: 'adaptive' },
    ],
  },
  {
    id: 4,
    text: '交渉の落としどころは？',
    options: [
      { text: '最大限有利な条件を引き出す', type: 'strategic' },
      { text: '双方が納得できる着地点', type: 'collaborative' },
      { text: '自分の目標を達成すること', type: 'assertive' },
      { text: '状況に応じて柔軟に', type: 'adaptive' },
    ],
  },
  {
    id: 5,
    text: '交渉中に予想外の展開になったら？',
    options: [
      { text: '複数のシナリオを用意している', type: 'strategic' },
      { text: '対話を続けて解決策を探る', type: 'collaborative' },
      { text: '自分の立場を守りつつ対応', type: 'assertive' },
      { text: '流れに乗って臨機応変に', type: 'adaptive' },
    ],
  },
  {
    id: 6,
    text: '値段交渉をする時は？',
    options: [
      { text: '市場価格や相場をリサーチ済み', type: 'strategic' },
      { text: '長期的な関係を考慮して決める', type: 'collaborative' },
      { text: '自分の希望額をストレートに', type: 'assertive' },
      { text: '相手の提示を見てから判断', type: 'adaptive' },
    ],
  },
  {
    id: 7,
    text: '交渉が難航した時は？',
    options: [
      { text: '別の切り口やカードを出す', type: 'strategic' },
      { text: '時間を置いて関係を温める', type: 'collaborative' },
      { text: '粘り強く押し続ける', type: 'assertive' },
      { text: '一度保留にして仕切り直す', type: 'adaptive' },
    ],
  },
  {
    id: 8,
    text: '相手に譲歩を求める時は？',
    options: [
      { text: 'こちらも何かを差し出す交換条件で', type: 'strategic' },
      { text: 'お互いのメリットを説明して', type: 'collaborative' },
      { text: '必要性を論理的に主張', type: 'assertive' },
      { text: '相手が受け入れやすい形で', type: 'adaptive' },
    ],
  },
  {
    id: 9,
    text: '交渉後の関係性は？',
    options: [
      { text: '次の交渉に活かす情報として記録', type: 'strategic' },
      { text: '良好な関係を維持したい', type: 'collaborative' },
      { text: '結果が全て、勝てばOK', type: 'assertive' },
      { text: '特に気にしない', type: 'adaptive' },
    ],
  },
  {
    id: 10,
    text: '交渉で大切にしていることは？',
    options: [
      { text: '準備と情報収集', type: 'strategic' },
      { text: '信頼関係の構築', type: 'collaborative' },
      { text: '自分の目標達成', type: 'assertive' },
      { text: '柔軟性と臨機応変さ', type: 'adaptive' },
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
  strategic: {
    type: 'strategic',
    title: '戦略家ネゴシエーター',
    emoji: '♟️',
    percentage: '戦略性 95%',
    description: '徹底的な準備と分析で交渉に臨むストラテジスト。複数のシナリオを用意し、常に優位に立とうとします。チェスのように相手の動きを読む達人！',
    characteristics: ['分析力', '準備力', '先読み', '冷静', '計算高い'],
    recommendation: '時には直感も信じてみて！',
  },
  collaborative: {
    type: 'collaborative',
    title: 'Win-Win追求型',
    emoji: '🤝',
    percentage: '協調性 92%',
    description: '双方が満足できる結果を目指す協調型ネゴシエーター。関係性を大切にし、長期的な信頼を築きます。みんなが幸せになる交渉のプロ！',
    characteristics: ['協調性', '信頼構築', '共感力', '長期視点', '傾聴力'],
    recommendation: '時には自分の利益も主張する勇気を！',
  },
  assertive: {
    type: 'assertive',
    title: '押しの強い交渉人',
    emoji: '💪',
    percentage: '主張力 90%',
    description: '自分の目標をしっかり持ち、粘り強く交渉するタイプ。妥協を許さず、最大限の結果を引き出します。負けない交渉術の持ち主！',
    characteristics: ['主張力', '粘り強さ', '自信', '目標志向', 'タフ'],
    recommendation: '相手との関係性も大切にするとさらに良い結果に！',
  },
  adaptive: {
    type: 'adaptive',
    title: '臨機応変ネゴシエーター',
    emoji: '🌊',
    percentage: '柔軟性 88%',
    description: '状況に応じて柔軟に対応する適応型ネゴシエーター。固定観念にとらわれず、その場で最適解を見つけます。水のように変幻自在！',
    characteristics: ['柔軟性', '適応力', '臨機応変', '観察力', 'バランス感覚'],
    recommendation: '事前準備も加えるとさらにパワーアップ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { strategic: 0, collaborative: 0, assertive: 0, adaptive: 0 };

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
