// プラスチック削減度診断
export const questions = [
  {
    id: 1,
    text: 'レジ袋について',
    options: [
      { text: 'マイバッグを必ず持参', type: 'leader' },
      { text: 'だいたい持って行く', type: 'conscious' },
      { text: '忘れることが多い', type: 'casual' },
      { text: 'レジ袋をもらう', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'ペットボトルの使用は？',
    options: [
      { text: 'マイボトルで極力買わない', type: 'leader' },
      { text: 'なるべく減らしている', type: 'conscious' },
      { text: 'よく買う', type: 'casual' },
      { text: '毎日買う', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: 'ストローについて',
    options: [
      { text: 'マイストローを使う/断る', type: 'leader' },
      { text: '紙ストローを選ぶ', type: 'conscious' },
      { text: '出されたら使う', type: 'casual' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: 'プラスチック製品の購入は？',
    options: [
      { text: '代替素材を積極的に選ぶ', type: 'leader' },
      { text: 'できれば避ける', type: 'conscious' },
      { text: 'あまり気にしない', type: 'casual' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '食品の包装について',
    options: [
      { text: '量り売りや裸売りを選ぶ', type: 'leader' },
      { text: '過剰包装は避ける', type: 'conscious' },
      { text: 'あまり気にしない', type: 'casual' },
      { text: '気にしない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: 'プラスチックゴミの分別は？',
    options: [
      { text: '徹底的に分別、リサイクル', type: 'leader' },
      { text: 'しっかり分別している', type: 'conscious' },
      { text: '一応分別', type: 'casual' },
      { text: 'あまりしていない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'コンビニでの買い物は？',
    options: [
      { text: '袋も割り箸も断る', type: 'leader' },
      { text: 'レジ袋は断る', type: 'conscious' },
      { text: '言われたらもらう', type: 'casual' },
      { text: '全部もらう', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: 'プラスチック問題への関心は？',
    options: [
      { text: '非常に関心があり行動している', type: 'leader' },
      { text: '関心があり意識している', type: 'conscious' },
      { text: '少し気になる程度', type: 'casual' },
      { text: 'あまり関心がない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '使い捨てカトラリーは？',
    options: [
      { text: 'マイカトラリーを持参', type: 'leader' },
      { text: 'なるべく断る', type: 'conscious' },
      { text: '出されたら使う', type: 'casual' },
      { text: '普通にもらう', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'プラスチック削減への取り組みは？',
    options: [
      { text: '日常的に実践している', type: 'leader' },
      { text: 'できる範囲で心がけている', type: 'conscious' },
      { text: 'たまに意識する', type: 'casual' },
      { text: '特にしていない', type: 'minimal' },
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
  leader: {
    type: 'leader',
    title: 'プラスチックフリー実践者',
    emoji: '🌍',
    percentage: 'プラ削減度 MAX',
    description: 'プラスチック削減を徹底的に実践！マイバッグ、マイボトル、マイカトラリーは当然。海洋プラスチック問題にも関心が高いエコリーダー。',
    characteristics: ['環境意識が高い', '行動力がある', '継続力', '影響力', 'サステナブル'],
    advice: '素晴らしいプラスチックフリー生活！周りへの啓発も続けてください♪',
  },
  conscious: {
    type: 'conscious',
    title: 'プラスチック意識派',
    emoji: '🌿',
    percentage: 'プラ削減度 70%',
    description: 'プラスチック問題に関心があり、削減を心がけている。無理なく続けられるエコライフスタイルが身についている。',
    characteristics: ['意識的', 'バランス型', '継続できる', '現実的', '成長中'],
    advice: '良い意識ですね！マイボトルやマイカトラリーも取り入れてみては♪',
  },
  casual: {
    type: 'casual',
    title: 'これから意識派',
    emoji: '🌱',
    percentage: 'プラ削減度 40%',
    description: 'プラスチック問題は気になるけど、あまり行動できていない。でも関心があるのは良いスタート！簡単なことから始めよう。',
    characteristics: ['関心はある', 'きっかけ待ち', '可能性あり', '情報不足', '変わりたい'],
    advice: 'マイバッグを持ち歩くことから始めてみましょう！簡単ですよ♪',
  },
  minimal: {
    type: 'minimal',
    title: 'プラスチック無関心タイプ',
    emoji: '😶',
    percentage: 'プラ削減度 15%',
    description: 'プラスチック問題への関心が低い状態。でも知ることが第一歩！海洋プラスチック問題について少し調べてみては？',
    characteristics: ['無関心', '情報不足', 'きっかけがない', '変化の可能性', 'これから'],
    advice: 'プラスチックが海の生き物に与える影響を知ると、見方が変わりますよ♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { leader: 0, conscious: 0, casual: 0, minimal: 0 };

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
