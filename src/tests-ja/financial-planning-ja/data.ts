// マネープラン診断 - あなたの資産管理スタイルは？
export const questions = [
  {
    id: 1,
    text: '給料日後、お金の使い方は？',
    options: [
      { text: '欲しいものを買ってから残りで生活', type: 'spender' },
      { text: '先に貯金して残りで生活', type: 'saver' },
      { text: '予算を細かく決めて管理', type: 'planner' },
      { text: '投資に回してから生活費を確保', type: 'investor' },
    ],
  },
  {
    id: 2,
    text: '臨時収入があったら？',
    options: [
      { text: '自分へのご褒美に使う！', type: 'spender' },
      { text: '全額貯金する', type: 'saver' },
      { text: '使う分と貯める分を計画的に分ける', type: 'planner' },
      { text: '投資に回して増やしたい', type: 'investor' },
    ],
  },
  {
    id: 3,
    text: '家計簿をつけている？',
    options: [
      { text: 'つけたことがない', type: 'spender' },
      { text: '以前つけてたけど挫折した', type: 'saver' },
      { text: '毎月きちんと記録している', type: 'planner' },
      { text: 'アプリで自動管理している', type: 'investor' },
    ],
  },
  {
    id: 4,
    text: '将来のお金について考えることは？',
    options: [
      { text: 'あまり考えたくない', type: 'spender' },
      { text: '漠然と不安はある', type: 'saver' },
      { text: 'ライフプランを立てている', type: 'planner' },
      { text: '資産形成の計画を実行中', type: 'investor' },
    ],
  },
  {
    id: 5,
    text: '「投資」と聞いて思い浮かぶのは？',
    options: [
      { text: 'ギャンブルみたいで怖い', type: 'spender' },
      { text: '興味はあるけど手が出ない', type: 'saver' },
      { text: 'リスクを理解した上で検討したい', type: 'planner' },
      { text: '実際にNISAや株をやっている', type: 'investor' },
    ],
  },
  {
    id: 6,
    text: 'セールや限定品を見たら？',
    options: [
      { text: 'お得！と思って買っちゃう', type: 'spender' },
      { text: '本当に必要か一応考える', type: 'saver' },
      { text: '予算内なら買う、超えるなら我慢', type: 'planner' },
      { text: 'そもそもセールにあまり反応しない', type: 'investor' },
    ],
  },
  {
    id: 7,
    text: '貯金の目標額は？',
    options: [
      { text: '特に決めていない', type: 'spender' },
      { text: 'なんとなく〇〇万円貯めたい', type: 'saver' },
      { text: '明確な目標金額と期限がある', type: 'planner' },
      { text: '貯金より投資で資産を増やす派', type: 'investor' },
    ],
  },
  {
    id: 8,
    text: '月末、お金が足りなくなることは？',
    options: [
      { text: 'よくある', type: 'spender' },
      { text: 'たまにある', type: 'saver' },
      { text: 'ほとんどない', type: 'planner' },
      { text: '余裕を持って管理している', type: 'investor' },
    ],
  },
  {
    id: 9,
    text: '老後の資金について',
    options: [
      { text: 'まだ考えられない、先の話', type: 'spender' },
      { text: '年金だけじゃ不安だと思う', type: 'saver' },
      { text: 'iDeCoや年金の試算をしている', type: 'planner' },
      { text: '長期投資で老後資金を準備中', type: 'investor' },
    ],
  },
  {
    id: 10,
    text: 'お金に対する自分の姿勢を一言で言うと？',
    options: [
      { text: '今を楽しむ派', type: 'spender' },
      { text: 'コツコツ貯める派', type: 'saver' },
      { text: '計画的に管理する派', type: 'planner' },
      { text: '増やすことに興味がある派', type: 'investor' },
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
  advice: string;
}> = {
  spender: {
    type: 'spender',
    title: '今を楽しむ消費タイプ',
    emoji: '🛍️',
    percentage: '貯蓄力 25%',
    description: 'お金は使って楽しむもの！という価値観。今の幸せを大切にする姿勢は素敵ですが、将来に向けた備えも少しずつ始めると安心。まずは収入の1割を貯金する習慣から。',
    characteristics: ['楽観的', '今を重視', '衝動買いしがち', '計画性低め', '経験重視'],
    advice: '「先取り貯金」を始めてみて。給料日に自動で別口座に移す仕組みを作れば、無理なく貯まります。',
  },
  saver: {
    type: 'saver',
    title: 'コツコツ貯金タイプ',
    emoji: '🐷',
    percentage: '貯蓄力 60%',
    description: '堅実に貯金を続けられるタイプ。将来への不安から貯める傾向がありますが、ただ貯めるだけでなく、お金に働いてもらう発想も取り入れると、資産形成がより効率的に。',
    characteristics: ['堅実', '慎重', '将来志向', 'リスク回避', 'コツコツ型'],
    advice: '貯金習慣は素晴らしい！次のステップとして、つみたてNISAなど低リスクの投資も検討してみては？',
  },
  planner: {
    type: 'planner',
    title: '計画的管理タイプ',
    emoji: '📊',
    percentage: '貯蓄力 80%',
    description: '予算管理やライフプランがしっかりしているタイプ。収支を把握し、目標に向けて計画的にお金を管理できます。さらに一歩進んで、資産運用の知識を深めると最強に。',
    characteristics: ['計画的', '管理上手', '目標志向', '数字に強い', '自制心'],
    advice: '素晴らしい管理能力！その計画性を活かして、長期的な資産形成にも挑戦してみてください。',
  },
  investor: {
    type: 'investor',
    title: '資産形成アクティブタイプ',
    emoji: '📈',
    percentage: '貯蓄力 90%',
    description: 'お金を「貯める」だけでなく「増やす」意識が高いタイプ。投資や資産運用に積極的で、経済やマーケットにも関心があります。リスク管理を怠らなければ、将来は安泰。',
    characteristics: ['積極的', '成長志向', '情報収集力', 'リスクテイカー', '長期視点'],
    advice: '投資への姿勢は◎！分散投資とリスク管理を忘れずに。また、楽しみのための支出も大切にして。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { spender: 0, saver: 0, planner: 0, investor: 0 };

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
