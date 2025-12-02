// 開運タイプ診断
export const questions = [
  {
    id: 1,
    text: '運を引き寄せるために大切だと思うことは？',
    options: [
      { text: '積極的に行動する', type: 'action' },
      { text: '感謝の気持ちを忘れない', type: 'gratitude' },
      { text: '環境を整える', type: 'environment' },
      { text: '直感を信じる', type: 'intuition' },
    ],
  },
  {
    id: 2,
    text: 'パワースポットに行ったら何をする？',
    options: [
      { text: '願い事をしっかり伝える', type: 'action' },
      { text: '感謝の気持ちを伝える', type: 'gratitude' },
      { text: 'お守りを買う', type: 'environment' },
      { text: 'その場のエネルギーを感じる', type: 'intuition' },
    ],
  },
  {
    id: 3,
    text: '運が良くなったと感じるのはどんな時？',
    options: [
      { text: '挑戦が成功した時', type: 'action' },
      { text: '人から親切にされた時', type: 'gratitude' },
      { text: '部屋を掃除した後', type: 'environment' },
      { text: 'なんとなく良い予感がする時', type: 'intuition' },
    ],
  },
  {
    id: 4,
    text: 'お財布の選び方で重視することは？',
    options: [
      { text: '機能性と使いやすさ', type: 'action' },
      { text: '長く大切に使えるもの', type: 'gratitude' },
      { text: '風水で良いとされる色', type: 'environment' },
      { text: 'ビビッときたもの', type: 'intuition' },
    ],
  },
  {
    id: 5,
    text: '新年の過ごし方は？',
    options: [
      { text: '目標を立てて計画する', type: 'action' },
      { text: '家族と過ごし感謝する', type: 'gratitude' },
      { text: '初詣で運気をリセット', type: 'environment' },
      { text: '初夢の内容を気にする', type: 'intuition' },
    ],
  },
  {
    id: 6,
    text: 'ラッキーアイテムについてどう思う？',
    options: [
      { text: '自信がつくなら良い', type: 'action' },
      { text: '大切にすると効果がある', type: 'gratitude' },
      { text: '身につけると安心する', type: 'environment' },
      { text: '相性の良いものがある', type: 'intuition' },
    ],
  },
  {
    id: 7,
    text: '運気が下がっていると感じたら？',
    options: [
      { text: 'とにかく動いて変える', type: 'action' },
      { text: '周りの人に感謝してみる', type: 'gratitude' },
      { text: '部屋を模様替えする', type: 'environment' },
      { text: '静かに自分と向き合う', type: 'intuition' },
    ],
  },
  {
    id: 8,
    text: '占いについてどう思う？',
    options: [
      { text: '参考程度に', type: 'action' },
      { text: 'ありがたいアドバイス', type: 'gratitude' },
      { text: 'ラッキーカラーは取り入れる', type: 'environment' },
      { text: '当たっていると感じる', type: 'intuition' },
    ],
  },
  {
    id: 9,
    text: '運を上げるために実践していることは？',
    options: [
      { text: 'ポジティブな言葉を使う', type: 'action' },
      { text: '人に親切にする', type: 'gratitude' },
      { text: '掃除や断捨離', type: 'environment' },
      { text: '瞑想やマインドフルネス', type: 'intuition' },
    ],
  },
  {
    id: 10,
    text: '「運」とはあなたにとって？',
    options: [
      { text: '自分で作るもの', type: 'action' },
      { text: '巡ってくるもの', type: 'gratitude' },
      { text: '呼び込むもの', type: 'environment' },
      { text: '感じるもの', type: 'intuition' },
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
  luckyAction: string;
}> = {
  action: {
    type: 'action',
    title: '行動開運タイプ',
    emoji: '🏃',
    percentage: '行動力 95%',
    description: '運は自分で切り開く！行動することで運気を上げるタイプです。チャレンジ精神旺盛で、動くことでチャンスを掴みます。「運も実力のうち」が信条。',
    characteristics: ['行動力', 'チャレンジ精神', '積極的', '自己実現', 'ポジティブ'],
    luckyAction: '新しいことに挑戦すると運気UP！',
  },
  gratitude: {
    type: 'gratitude',
    title: '感謝開運タイプ',
    emoji: '🙏',
    percentage: '感謝度 93%',
    description: '感謝の心で運を引き寄せるタイプ。周囲への感謝を大切にし、その姿勢が良い運気を呼び込みます。人との縁を大切にすることで運気上昇。',
    characteristics: ['感謝', '謙虚', '人徳', '縁を大切に', '温かい'],
    luckyAction: '毎日3つ感謝することを見つけると運気UP！',
  },
  environment: {
    type: 'environment',
    title: '環境開運タイプ',
    emoji: '🏠',
    percentage: '整理力 91%',
    description: '環境を整えて運を呼び込むタイプ。風水や掃除、整理整頓で空間のエネルギーを高めます。お守りやパワーストーンなどアイテムも効果的に活用。',
    characteristics: ['整理整頓', '風水好き', '環境重視', '清潔', 'こだわり'],
    luckyAction: '玄関を綺麗にすると運気UP！',
  },
  intuition: {
    type: 'intuition',
    title: '直感開運タイプ',
    emoji: '✨',
    percentage: '直感力 94%',
    description: '直感で運を感じ取るタイプ。スピリチュアルな感性が鋭く、良い運気の流れを自然とキャッチ。自分の内なる声を信じることで運を味方につけます。',
    characteristics: ['直感力', 'スピリチュアル', '感受性', '神秘的', '瞑想'],
    luckyAction: '瞑想やヨガで直感力を磨くと運気UP！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { action: 0, gratitude: 0, environment: 0, intuition: 0 };

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
