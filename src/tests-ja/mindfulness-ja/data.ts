// マインドフルネス度診断
export const questions = [
  {
    id: 1,
    text: '食事をする時、どのように食べている？',
    options: [
      { text: '味や食感をじっくり味わう', type: 'high' },
      { text: '会話を楽しみながら', type: 'moderate' },
      { text: 'スマホを見ながら', type: 'low' },
      { text: '急いで済ませる', type: 'very_low' },
    ],
  },
  {
    id: 2,
    text: '歩いている時、何を考えている？',
    options: [
      { text: '周りの景色や足の感覚', type: 'high' },
      { text: '特に何も考えていない', type: 'moderate' },
      { text: '今日のスケジュール', type: 'low' },
      { text: '過去や未来のこと', type: 'very_low' },
    ],
  },
  {
    id: 3,
    text: '会話中、相手の話を聴く姿勢は？',
    options: [
      { text: '相手に集中して傾聴する', type: 'high' },
      { text: '内容を理解しようとする', type: 'moderate' },
      { text: '次に何を言うか考えている', type: 'low' },
      { text: '上の空になることが多い', type: 'very_low' },
    ],
  },
  {
    id: 4,
    text: 'ストレスを感じた時の反応は？',
    options: [
      { text: '一度立ち止まって深呼吸', type: 'high' },
      { text: '原因を冷静に分析', type: 'moderate' },
      { text: 'イライラして反応してしまう', type: 'low' },
      { text: 'パニックになりがち', type: 'very_low' },
    ],
  },
  {
    id: 5,
    text: '入浴時の過ごし方は？',
    options: [
      { text: 'お湯の温かさを感じてリラックス', type: 'high' },
      { text: 'ゆっくり疲れを癒す', type: 'moderate' },
      { text: '考え事をしている', type: 'low' },
      { text: '早く済ませたい', type: 'very_low' },
    ],
  },
  {
    id: 6,
    text: '待ち時間の過ごし方は？',
    options: [
      { text: '呼吸や周囲を観察', type: 'high' },
      { text: 'のんびり過ごす', type: 'moderate' },
      { text: 'スマホをチェック', type: 'low' },
      { text: 'イライラしてしまう', type: 'very_low' },
    ],
  },
  {
    id: 7,
    text: '寝る前の心の状態は？',
    options: [
      { text: '一日を振り返り穏やかに', type: 'high' },
      { text: 'リラックスして眠りにつく', type: 'moderate' },
      { text: '明日のことが気になる', type: 'low' },
      { text: '考えが止まらない', type: 'very_low' },
    ],
  },
  {
    id: 8,
    text: '自分の感情にどれくらい気づいている？',
    options: [
      { text: '常に自覚している', type: 'high' },
      { text: '大きな感情は気づく', type: 'moderate' },
      { text: 'あまり意識していない', type: 'low' },
      { text: '気づいた時には手遅れ', type: 'very_low' },
    ],
  },
  {
    id: 9,
    text: '作業中の集中力は？',
    options: [
      { text: '今の作業に完全に没頭', type: 'high' },
      { text: '概ね集中できている', type: 'moderate' },
      { text: '他のことが気になる', type: 'low' },
      { text: 'マルチタスクが多い', type: 'very_low' },
    ],
  },
  {
    id: 10,
    text: '「今この瞬間」を意識することは？',
    options: [
      { text: '常に意識している', type: 'high' },
      { text: '時々意識する', type: 'moderate' },
      { text: 'あまり意識しない', type: 'low' },
      { text: '過去や未来ばかり考える', type: 'very_low' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  style: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  high: {
    type: 'high',
    title: 'マインドフルネス達人',
    emoji: '🧘✨',
    style: 'マインドフルネス度：非常に高い',
    description: 'あなたは「今この瞬間」に意識を向けることができるマインドフルネスの達人です。日常の小さな瞬間も味わい、心穏やかに過ごすことができます。ストレス管理も上手で、周りの人にも良い影響を与えます。',
    characteristics: ['今に集中できる', '感情コントロールが上手', '穏やかな心', '観察力が高い'],
    tips: ['その姿勢を続けて', '周りの人にも教えてあげて', 'より深い実践にも挑戦を'],
  },
  moderate: {
    type: 'moderate',
    title: 'マインドフルネス実践者',
    emoji: '🌸🧘',
    style: 'マインドフルネス度：やや高い',
    description: 'あなたは日常の中でマインドフルな瞬間を持てているタイプです。完全に今に集中することは難しくても、意識的にリラックスする時間を作れています。さらなる成長の可能性を秘めています。',
    characteristics: ['バランスが取れている', '意識的な時間を持てる', '成長の余地あり', '適度な自己認識'],
    tips: ['瞑想を習慣にしてみて', '小さな瞬間を大切に', '五感を意識する練習を'],
  },
  low: {
    type: 'low',
    title: 'マインドフルネス初心者',
    emoji: '🌱💭',
    style: 'マインドフルネス度：やや低い',
    description: 'あなたは日常に追われて「今この瞬間」を意識する機会が少ないタイプです。マルチタスクや将来への不安で頭がいっぱいになりがち。少しの練習で大きく改善できる可能性があります。',
    characteristics: ['忙しさに追われがち', '考え事が多い', '改善の余地大', '素質はある'],
    tips: ['1日3分の深呼吸から', 'シングルタスクを意識', '食事をゆっくり味わって'],
  },
  very_low: {
    type: 'very_low',
    title: 'マインドフルネス要注意',
    emoji: '🌀😵',
    style: 'マインドフルネス度：低い',
    description: 'あなたは「今」から離れて生活していることが多いタイプです。過去の後悔や未来の不安に心を奪われ、ストレスを感じやすい状態かもしれません。マインドフルネスを取り入れると人生が変わる可能性があります。',
    characteristics: ['心がせわしない', 'ストレスを感じやすい', '注意散漫', '変化の必要あり'],
    tips: ['まずは呼吸に意識を向けて', '瞑想アプリを試してみて', '小さな一歩から始めよう'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, moderate: 0, low: 0, very_low: 0 };

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
