// ワークライフバランス診断 (일생활 균형 테스트)
export const questions = [
  {
    id: 1,
    text: '仕事が終わった後の時間は？',
    options: [
      { text: '仕事のことは忘れてリフレッシュ', type: 'balanced' },
      { text: '趣味や自分の時間を大切に', type: 'life' },
      { text: 'もう少し仕事をすることも', type: 'work' },
      { text: '時と場合による', type: 'flexible' },
    ],
  },
  {
    id: 2,
    text: '休日の過ごし方は？',
    options: [
      { text: '仕事とは違う活動でリフレッシュ', type: 'balanced' },
      { text: '趣味や好きなことに没頭', type: 'life' },
      { text: '仕事の準備や勉強をすることも', type: 'work' },
      { text: '予定次第', type: 'flexible' },
    ],
  },
  {
    id: 3,
    text: '残業について',
    options: [
      { text: '必要な時だけ、基本は定時', type: 'balanced' },
      { text: 'できるだけ避けたい', type: 'life' },
      { text: '仕事が終わるまでやる', type: 'work' },
      { text: '状況による', type: 'flexible' },
    ],
  },
  {
    id: 4,
    text: '仕事とプライベートの境界は？',
    options: [
      { text: 'きっちり分けている', type: 'balanced' },
      { text: 'プライベート優先', type: 'life' },
      { text: '仕事優先になりがち', type: 'work' },
      { text: 'あまり意識していない', type: 'flexible' },
    ],
  },
  {
    id: 5,
    text: '休暇を取ることについて',
    options: [
      { text: '計画的に取る', type: 'balanced' },
      { text: '積極的に取りたい', type: 'life' },
      { text: '仕事の状況を見て', type: 'work' },
      { text: '必要な時に取る', type: 'flexible' },
    ],
  },
  {
    id: 6,
    text: '仕事中のストレスは？',
    options: [
      { text: 'オンオフ切り替えて発散', type: 'balanced' },
      { text: 'プライベートの時間で解消', type: 'life' },
      { text: '仕事で成果を出すことで解消', type: 'work' },
      { text: '色々な方法で', type: 'flexible' },
    ],
  },
  {
    id: 7,
    text: 'キャリアアップについて',
    options: [
      { text: '私生活とのバランスを考慮', type: 'balanced' },
      { text: '私生活を犠牲にしたくない', type: 'life' },
      { text: 'キャリアのためなら頑張る', type: 'work' },
      { text: '流れに任せる', type: 'flexible' },
    ],
  },
  {
    id: 8,
    text: '仕事のメールやメッセージは？',
    options: [
      { text: '勤務時間外は基本見ない', type: 'balanced' },
      { text: '絶対に見ない', type: 'life' },
      { text: '気になるのでチェックする', type: 'work' },
      { text: '緊急なら対応する', type: 'flexible' },
    ],
  },
  {
    id: 9,
    text: '人生で大切にしたいことは？',
    options: [
      { text: '仕事も私生活も両方', type: 'balanced' },
      { text: '家族や趣味など私生活', type: 'life' },
      { text: '仕事での成功', type: 'work' },
      { text: 'その時々で変わる', type: 'flexible' },
    ],
  },
  {
    id: 10,
    text: '理想の働き方は？',
    options: [
      { text: 'メリハリのある働き方', type: 'balanced' },
      { text: '私生活を充実させる働き方', type: 'life' },
      { text: '成果を出す働き方', type: 'work' },
      { text: '柔軟な働き方', type: 'flexible' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  balanceLevel: string;
  description: string;
  characteristics: string[];
  advice: string[];
}> = {
  balanced: {
    type: 'balanced',
    title: 'バランス型',
    emoji: '⚖️✨',
    balanceLevel: 'バランス度：★★★★★',
    description: '仕事とプライベートをきっちり分けて、両方を充実させるタイプ。オンオフの切り替えが上手で、効率的に働きながら私生活も楽しめます。理想的なワークライフバランスの持ち主！',
    characteristics: ['切り替え上手', '効率的', '計画的', '自己管理ができる'],
    advice: ['そのバランス感覚を維持して', '柔軟性も時には必要', '周りにもバランスの大切さを伝えて'],
  },
  life: {
    type: 'life',
    title: 'ライフ重視型',
    emoji: '🌴🎨',
    balanceLevel: 'バランス度：★★★★☆（私生活重視）',
    description: 'プライベートを大切にするタイプ。仕事は生活のためと割り切り、趣味や家族との時間を優先します。自分の人生を楽しむ術を知っている賢い人です。',
    characteristics: ['私生活重視', '趣味が充実', '自分の時間を大切に', 'ストレスが少ない'],
    advice: ['キャリアも少し意識してみて', '仕事にもやりがいを見つけて', 'バランスを意識しよう'],
  },
  work: {
    type: 'work',
    title: 'ワーク重視型',
    emoji: '💼🔥',
    balanceLevel: 'バランス度：★★☆☆☆（仕事重視）',
    description: '仕事に情熱を注ぐタイプ。キャリアアップや成果を出すことにやりがいを感じ、仕事が生きがいになっています。でも、たまには休息も大切ですよ。',
    characteristics: ['仕事熱心', '向上心がある', '責任感が強い', '成果志向'],
    advice: ['休息も仕事のうち', 'プライベートの時間も確保して', '燃え尽きないように注意'],
  },
  flexible: {
    type: 'flexible',
    title: 'フレキシブル型',
    emoji: '🌊🎭',
    balanceLevel: 'バランス度：★★★☆☆（柔軟）',
    description: '状況に応じて柔軟に対応するタイプ。仕事が忙しい時は仕事、余裕がある時はプライベートと、臨機応変に過ごします。適応力が高いのが強みです。',
    characteristics: ['柔軟', '適応力がある', '臨機応変', 'ストレス耐性がある'],
    advice: ['自分の軸も大切に', '計画性も意識してみて', 'セルフケアを忘れずに'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { balanced: 0, life: 0, work: 0, flexible: 0 };

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
