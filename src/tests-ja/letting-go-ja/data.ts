// 手放す力診断 - あなたは上手に手放せる人？
export const questions = [
  {
    id: 1,
    text: '使わなくなった物について、どうする？',
    options: [
      { text: 'まだ使えるから取っておく', type: 'attached' },
      { text: '迷うけど、いつか処分する', type: 'hesitant' },
      { text: '定期的に整理して手放す', type: 'balanced' },
      { text: '使わないならすぐ手放す', type: 'free' },
    ],
  },
  {
    id: 2,
    text: '過去の失敗について',
    options: [
      { text: '何年経っても思い出して落ち込む', type: 'attached' },
      { text: 'たまに思い出して後悔する', type: 'hesitant' },
      { text: '学びとして消化できている', type: 'balanced' },
      { text: '過ぎたことは気にならない', type: 'free' },
    ],
  },
  {
    id: 3,
    text: '終わった恋愛について',
    options: [
      { text: 'なかなか忘れられない、引きずる', type: 'attached' },
      { text: '時間をかけて少しずつ消化', type: 'hesitant' },
      { text: '良い思い出として昇華できる', type: 'balanced' },
      { text: '終わったら次に進める', type: 'free' },
    ],
  },
  {
    id: 4,
    text: '計画通りにいかなかったとき',
    options: [
      { text: '悔しくてなかなか切り替えられない', type: 'attached' },
      { text: 'モヤモヤするけど仕方ないと思う', type: 'hesitant' },
      { text: '軌道修正して前に進む', type: 'balanced' },
      { text: '「まあいいか」とすぐ切り替える', type: 'free' },
    ],
  },
  {
    id: 5,
    text: '思い出の品について',
    options: [
      { text: '全部大切に保管している', type: 'attached' },
      { text: '捨てられないものが多い', type: 'hesitant' },
      { text: '厳選して残している', type: 'balanced' },
      { text: '思い出は心にあれば十分', type: 'free' },
    ],
  },
  {
    id: 6,
    text: '変えられない過去について',
    options: [
      { text: '「あのときこうしていれば」と考える', type: 'attached' },
      { text: 'たまに後悔することがある', type: 'hesitant' },
      { text: '過去は変えられないと割り切っている', type: 'balanced' },
      { text: '過去にはあまり興味がない', type: 'free' },
    ],
  },
  {
    id: 7,
    text: '合わなくなった人間関係について',
    options: [
      { text: '無理してでも続けようとする', type: 'attached' },
      { text: '距離を置くのに時間がかかる', type: 'hesitant' },
      { text: '自然にフェードアウトできる', type: 'balanced' },
      { text: '合わないなら割り切れる', type: 'free' },
    ],
  },
  {
    id: 8,
    text: '嫌なことがあった日の夜',
    options: [
      { text: 'ずっと考えて眠れない', type: 'attached' },
      { text: 'しばらく引きずるけど寝る', type: 'hesitant' },
      { text: 'お風呂で切り替えて寝る', type: 'balanced' },
      { text: '寝れば忘れる', type: 'free' },
    ],
  },
  {
    id: 9,
    text: 'うまくいかなかったプロジェクトについて',
    options: [
      { text: 'ずっと責任を感じている', type: 'attached' },
      { text: 'たまに思い出して反省する', type: 'hesitant' },
      { text: '学びを次に活かして終わり', type: 'balanced' },
      { text: '終わったことは考えない', type: 'free' },
    ],
  },
  {
    id: 10,
    text: '手放すことについて、どう思う？',
    options: [
      { text: '大切なものを失う気がして怖い', type: 'attached' },
      { text: '必要だと分かっているけど難しい', type: 'hesitant' },
      { text: '新しいものを受け入れるために必要', type: 'balanced' },
      { text: '手放すことで自由になれる', type: 'free' },
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
  attached: {
    type: 'attached',
    title: '大切にしすぎタイプ',
    emoji: '🧸',
    percentage: '執着度 85%',
    description: '物事や人への愛着が強いあなた。手放すことに大きな抵抗を感じます。それは深い愛情や責任感の表れですが、抱え込みすぎると心が重くなることも。少しずつ、手放す練習を始めてみて。',
    characteristics: ['愛情深い', '責任感', '慎重', '繊細', '思い出重視'],
    advice: '大切にする心は素敵。でも、手放すことで得られる軽さも体験してみて。',
  },
  hesitant: {
    type: 'hesitant',
    title: '迷いがちタイプ',
    emoji: '🤔',
    percentage: '手放し力 45%',
    description: '手放す必要性は分かっているけど、なかなか踏み切れないあなた。「いつか」「まだ」と先延ばしにしがち。でも、その葛藤は自分と向き合っている証拠。一歩踏み出す勇気を持ってみて。',
    characteristics: ['慎重', '優柔不断', '思慮深い', '感傷的', '過去を大切にする'],
    advice: '迷う気持ちは分かる。でも小さなものから手放す練習を始めてみては？',
  },
  balanced: {
    type: 'balanced',
    title: 'バランス上手タイプ',
    emoji: '⚖️',
    percentage: '手放し力 75%',
    description: '必要なものと不要なものを判断し、適切に手放せるあなた。過去を学びに変え、未来に活かせる健全なマインドの持ち主。その柔軟さは、人生を軽やかにする大きな強みです。',
    characteristics: ['バランス感覚', '判断力', '柔軟', '前向き', '自己管理'],
    advice: '素晴らしいバランス感覚！その姿勢を維持して、軽やかな人生を。',
  },
  free: {
    type: 'free',
    title: '超然タイプ',
    emoji: '🕊️',
    percentage: '手放し力 95%',
    description: '過去にとらわれず、必要なものだけを持って軽やかに生きるあなた。ミニマリスト的な思考で、心も空間もスッキリ。ただし、時には大切なものをじっくり味わうことも忘れずに。',
    characteristics: ['さっぱり', 'ミニマリスト', '自由', '今を生きる', '決断力'],
    advice: 'その身軽さは素晴らしい！でもたまには思い出に浸る時間も自分に許してね。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { attached: 0, hesitant: 0, balanced: 0, free: 0 };

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
