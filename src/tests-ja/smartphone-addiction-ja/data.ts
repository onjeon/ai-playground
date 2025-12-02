// スマホ依存度診断 (스마트폰 의존도 테스트 - 일본판)
export const questions = [
  {
    id: 1,
    text: '朝起きて最初にすることは？',
    options: [
      { text: 'スマホで時間とSNSをチェック', type: 'heavy' },
      { text: 'アラームを止めてニュースを見る', type: 'moderate' },
      { text: 'アラームを止めて起き上がる', type: 'light' },
      { text: 'スマホは寝室に置いていない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'トイレに行く時、スマホは？',
    options: [
      { text: '必ず持っていく', type: 'heavy' },
      { text: '長くなりそうな時は持っていく', type: 'moderate' },
      { text: 'あまり持っていかない', type: 'light' },
      { text: '絶対持っていかない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '食事中のスマホは？',
    options: [
      { text: '動画を見ながら食べる', type: 'heavy' },
      { text: 'たまにSNSをチェック', type: 'moderate' },
      { text: '通知が来たら見る程度', type: 'light' },
      { text: '食事中は触らない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: 'スマホのバッテリーが20%になったら？',
    options: [
      { text: 'パニック！すぐ充電器を探す', type: 'heavy' },
      { text: '少し不安になる', type: 'moderate' },
      { text: '家に帰るまで持てばいいか', type: 'light' },
      { text: '特に気にしない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: 'スマホを家に忘れて外出したら？',
    options: [
      { text: '絶対取りに帰る', type: 'heavy' },
      { text: '予定によっては取りに帰る', type: 'moderate' },
      { text: 'まあいいかと諦める', type: 'light' },
      { text: '特に困らない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '寝る前のスマホ時間は？',
    options: [
      { text: '気づいたら2時間以上', type: 'heavy' },
      { text: '30分〜1時間くらい', type: 'moderate' },
      { text: 'アラームセットだけ', type: 'light' },
      { text: '寝室にスマホを持ち込まない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '電車やバスでの過ごし方は？',
    options: [
      { text: 'ずっとスマホを見ている', type: 'heavy' },
      { text: 'スマホと景色を交互に', type: 'moderate' },
      { text: '本を読んだり考え事', type: 'light' },
      { text: '外の景色を眺める', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '友達との会話中、スマホは？',
    options: [
      { text: '通知が来たらすぐチェック', type: 'heavy' },
      { text: 'テーブルの上に置いておく', type: 'moderate' },
      { text: 'カバンにしまっておく', type: 'light' },
      { text: 'マナーモードにして意識しない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '1日のスクリーンタイムは？',
    options: [
      { text: '8時間以上', type: 'heavy' },
      { text: '4〜7時間', type: 'moderate' },
      { text: '2〜3時間', type: 'light' },
      { text: '2時間未満', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'スマホがない生活を想像すると？',
    options: [
      { text: '考えられない、無理', type: 'heavy' },
      { text: '不便だけど何とかなりそう', type: 'moderate' },
      { text: '意外とできるかも', type: 'light' },
      { text: '問題ない、むしろ快適かも', type: 'minimal' },
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
  heavy: {
    type: 'heavy',
    title: 'スマホ中毒レベル',
    emoji: '📱',
    percentage: 'スマホ依存度 95%',
    description: 'スマホなしでは生きられない重度依存タイプ。起きてから寝るまでスマホが手放せません。そろそろデジタルデトックスを考えてみては？',
    characteristics: ['常時接続', 'FOMO強め', 'マルチタスク', '情報収集力', 'SNS依存'],
    advice: '1日1時間のスマホフリータイムを作ってみて！',
  },
  moderate: {
    type: 'moderate',
    title: '現代人の標準レベル',
    emoji: '📲',
    percentage: 'スマホ依存度 65%',
    description: '現代人として標準的なスマホ利用者。便利に使いつつも、少し依存気味かも？意識すれば改善できるレベルです。',
    characteristics: ['バランス型', '便利さ重視', '適度な利用', '自覚あり', '改善可能'],
    advice: '使用時間を意識して、少しずつ減らしてみよう！',
  },
  light: {
    type: 'light',
    title: 'ほどよい距離感タイプ',
    emoji: '✨',
    percentage: 'スマホ依存度 35%',
    description: 'スマホとほどよい距離感を保てるタイプ。必要な時だけ使い、振り回されることなく生活できています。理想的なバランス！',
    characteristics: ['自制心', 'バランス感覚', '目的意識', '自分軸', '健全'],
    advice: 'その調子！今のバランスを維持しましょう。',
  },
  minimal: {
    type: 'minimal',
    title: 'デジタルミニマリスト',
    emoji: '🌿',
    percentage: 'スマホ依存度 10%',
    description: 'スマホに依存しないデジタルミニマリスト。必要最低限の利用で、リアルな体験を大切にします。現代社会では希少な存在！',
    characteristics: ['自立', 'リアル重視', 'ミニマリスト', '集中力', '自分時間'],
    advice: '素晴らしい！その価値観を大切に。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { heavy: 0, moderate: 0, light: 0, minimal: 0 };

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
