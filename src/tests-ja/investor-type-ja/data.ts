// 投資家タイプ診断 (투자자 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '投資で重視するのは？',
    options: [
      { text: '高いリターン', type: 'aggressive' },
      { text: 'バランスの良い成長', type: 'balanced' },
      { text: '安定した配当', type: 'conservative' },
      { text: '元本の保全', type: 'defensive' },
    ],
  },
  {
    id: 2,
    text: '投資した株が20%下落したら？',
    options: [
      { text: '買い増しのチャンス！', type: 'aggressive' },
      { text: '様子を見る', type: 'balanced' },
      { text: '不安になる', type: 'conservative' },
      { text: 'すぐに売却する', type: 'defensive' },
    ],
  },
  {
    id: 3,
    text: '投資の情報収集は？',
    options: [
      { text: '毎日チャートを確認', type: 'aggressive' },
      { text: '定期的にニュースをチェック', type: 'balanced' },
      { text: '専門家の意見を参考に', type: 'conservative' },
      { text: 'あまり詳しく調べない', type: 'defensive' },
    ],
  },
  {
    id: 4,
    text: '投資期間の考え方は？',
    options: [
      { text: '短期で利益を狙う', type: 'aggressive' },
      { text: '中長期で育てる', type: 'balanced' },
      { text: '長期保有が基本', type: 'conservative' },
      { text: 'できるだけ早く回収したい', type: 'defensive' },
    ],
  },
  {
    id: 5,
    text: '新しい投資商品が話題になったら？',
    options: [
      { text: 'すぐに試してみる', type: 'aggressive' },
      { text: '調べてから検討', type: 'balanced' },
      { text: '実績が出てから', type: 'conservative' },
      { text: '興味がない', type: 'defensive' },
    ],
  },
  {
    id: 6,
    text: 'ポートフォリオ構成は？',
    options: [
      { text: '株式中心でハイリスク', type: 'aggressive' },
      { text: '株式・債券バランス', type: 'balanced' },
      { text: '債券・預金中心', type: 'conservative' },
      { text: 'ほぼ預金', type: 'defensive' },
    ],
  },
  {
    id: 7,
    text: '投資に使える余裕資金の割合は？',
    options: [
      { text: '資産の大部分', type: 'aggressive' },
      { text: '資産の半分程度', type: 'balanced' },
      { text: '資産の一部', type: 'conservative' },
      { text: 'ごくわずか', type: 'defensive' },
    ],
  },
  {
    id: 8,
    text: '投資の知識レベルは？',
    options: [
      { text: '上級者・プロ級', type: 'aggressive' },
      { text: '中級者・勉強中', type: 'balanced' },
      { text: '初心者', type: 'conservative' },
      { text: 'ほとんど知らない', type: 'defensive' },
    ],
  },
  {
    id: 9,
    text: '投資の目的は？',
    options: [
      { text: '資産を大きく増やす', type: 'aggressive' },
      { text: '将来に備える', type: 'balanced' },
      { text: '老後の安心のため', type: 'conservative' },
      { text: 'インフレ対策程度', type: 'defensive' },
    ],
  },
  {
    id: 10,
    text: '投資で損失が出たら？',
    options: [
      { text: '勉強代と割り切る', type: 'aggressive' },
      { text: '冷静に分析する', type: 'balanced' },
      { text: 'かなり気になる', type: 'conservative' },
      { text: '眠れなくなる', type: 'defensive' },
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
  investmentAdvice: string;
}> = {
  aggressive: {
    type: 'aggressive',
    title: 'アグレッシブ投資家',
    emoji: '🔥',
    percentage: 'リスク許容度 95%',
    description: '高リターンを求めて積極的に投資！リスクを恐れず、成長株や新興市場にも果敢にチャレンジします。',
    characteristics: ['リスクテイカー', '情報通', '決断力', '高い目標', 'アクティブ'],
    investmentAdvice: 'リスク管理と分散投資も忘れずに',
  },
  balanced: {
    type: 'balanced',
    title: 'バランス型投資家',
    emoji: '⚖️',
    percentage: 'バランス度 80%',
    description: 'リスクとリターンのバランスを重視！分散投資で安定的な成長を目指す堅実なスタイルです。',
    characteristics: ['バランス感覚', '計画的', '長期視点', '冷静', '分散投資'],
    investmentAdvice: '市場の変動に一喜一憂せず、長期視点を維持して',
  },
  conservative: {
    type: 'conservative',
    title: '保守的投資家',
    emoji: '🛡️',
    percentage: '安定志向 75%',
    description: '安定した運用を好むタイプ。大きなリスクは避け、着実に資産を守りながら増やしていきます。',
    characteristics: ['安定志向', '慎重', '堅実', '長期保有', 'リスク回避'],
    investmentAdvice: 'インデックス投資から始めてみては',
  },
  defensive: {
    type: 'defensive',
    title: '守りの投資家',
    emoji: '🏦',
    percentage: '元本重視度 90%',
    description: '元本の保全が最優先！投資よりも貯蓄を重視し、確実に資産を守ることを大切にします。',
    characteristics: ['元本重視', '安全第一', '預金派', '慎重', 'リスク嫌い'],
    investmentAdvice: '少額から投資を始めて、経験を積んでみては',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { aggressive: 0, balanced: 0, conservative: 0, defensive: 0 };

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
