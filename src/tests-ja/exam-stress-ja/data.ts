// 試験ストレス診断
export const questions = [
  {
    id: 1,
    text: '試験前日の過ごし方は？',
    options: [
      { text: '最後まで追い込む', type: 'high' },
      { text: '軽く復習して早めに寝る', type: 'moderate' },
      { text: 'いつも通り過ごす', type: 'low' },
      { text: '何も手につかない', type: 'anxiety' },
    ],
  },
  {
    id: 2,
    text: '試験中、難しい問題に出会ったら？',
    options: [
      { text: 'パニックになる', type: 'high' },
      { text: '後回しにして冷静に対処', type: 'moderate' },
      { text: 'あまり気にしない', type: 'low' },
      { text: '頭が真っ白になる', type: 'anxiety' },
    ],
  },
  {
    id: 3,
    text: '試験勉強のスタイルは？',
    options: [
      { text: '完璧を目指して徹底的に', type: 'high' },
      { text: '計画的にバランスよく', type: 'moderate' },
      { text: 'なんとかなると思う', type: 'low' },
      { text: '焦るけど手が動かない', type: 'anxiety' },
    ],
  },
  {
    id: 4,
    text: '試験結果を待つ間の気持ちは？',
    options: [
      { text: 'ずっと気になって落ち着かない', type: 'high' },
      { text: '多少気になる', type: 'moderate' },
      { text: 'あまり考えない', type: 'low' },
      { text: '最悪の結果を想像してしまう', type: 'anxiety' },
    ],
  },
  {
    id: 5,
    text: '試験で失敗した経験は？',
    options: [
      { text: 'ずっと引きずる', type: 'high' },
      { text: '反省して次に活かす', type: 'moderate' },
      { text: 'すぐに忘れる', type: 'low' },
      { text: '自分を責め続ける', type: 'anxiety' },
    ],
  },
  {
    id: 6,
    text: '試験期間中の睡眠は？',
    options: [
      { text: '寝る間も惜しんで勉強', type: 'high' },
      { text: 'なるべく睡眠時間を確保', type: 'moderate' },
      { text: 'いつも通り寝る', type: 'low' },
      { text: '不安で眠れない', type: 'anxiety' },
    ],
  },
  {
    id: 7,
    text: '試験と趣味のバランスは？',
    options: [
      { text: '試験期間は趣味を完全に断つ', type: 'high' },
      { text: '息抜きとして少し楽しむ', type: 'moderate' },
      { text: '普段通り楽しむ', type: 'low' },
      { text: '趣味に逃避してしまう', type: 'anxiety' },
    ],
  },
  {
    id: 8,
    text: '友達と試験の話をすると？',
    options: [
      { text: '焦りが増す', type: 'high' },
      { text: '情報交換ができて良い', type: 'moderate' },
      { text: '特に何も感じない', type: 'low' },
      { text: '比較して落ち込む', type: 'anxiety' },
    ],
  },
  {
    id: 9,
    text: '試験が終わった後は？',
    options: [
      { text: 'すぐに次の試験の心配', type: 'high' },
      { text: 'ほっとして少し休む', type: 'moderate' },
      { text: '解放感で遊びに行く', type: 'low' },
      { text: 'できなかった問題が気になる', type: 'anxiety' },
    ],
  },
  {
    id: 10,
    text: '試験に対する本音は？',
    options: [
      { text: 'プレッシャーだけど頑張る', type: 'high' },
      { text: '大変だけど乗り越えられる', type: 'moderate' },
      { text: 'なんとかなる', type: 'low' },
      { text: '本当に苦手で怖い', type: 'anxiety' },
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
  stressAdvice: string;
}> = {
  high: {
    type: 'high',
    title: '完璧主義ストレス型',
    emoji: '🔥',
    percentage: 'ストレス度 90%',
    description: '高い目標を持ち、完璧を目指すあまりストレスが溜まりやすいタイプ。努力家だが、自分に厳しすぎることも。',
    characteristics: ['完璧主義', '努力家', 'プレッシャーに弱い', '自己期待が高い', '責任感'],
    stressAdvice: '100点を目指さず、80点で良しとする心の余裕を',
  },
  moderate: {
    type: 'moderate',
    title: 'バランス型',
    emoji: '⚖️',
    percentage: 'ストレス管理力 80%',
    description: 'ストレスを感じながらも、うまくコントロールできるバランス派。適度な緊張感を力に変えられます。',
    characteristics: ['バランス感覚', '自己管理', '適応力', '冷静', '計画的'],
    stressAdvice: 'その調子でストレスと上手に付き合って',
  },
  low: {
    type: 'low',
    title: 'のんびりマイペース型',
    emoji: '😌',
    percentage: 'リラックス度 85%',
    description: '試験にもあまり動じないマイペースタイプ。ストレスフリーだが、もう少し危機感があっても良いかも。',
    characteristics: ['マイペース', '楽観的', 'ストレスに強い', '柔軟', 'おおらか'],
    stressAdvice: '余裕があるなら、もう少し準備に時間を',
  },
  anxiety: {
    type: 'anxiety',
    title: '不安先行型',
    emoji: '😰',
    percentage: '不安レベル 95%',
    description: '試験への不安が先行して、本来の力を発揮しにくいタイプ。不安に押しつぶされそうになることも。',
    characteristics: ['心配性', '繊細', '自己否定的', '緊張しやすい', '想像力豊か'],
    stressAdvice: '深呼吸をして、自分を信じることから始めて',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, moderate: 0, low: 0, anxiety: 0 };

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
