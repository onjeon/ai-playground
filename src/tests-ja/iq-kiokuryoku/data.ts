// 記憶力テスト
export const questions = [
  {
    id: 1,
    text: '次の数字を覚えてください：7, 3, 9, 1, 5。3番目の数字は？',
    options: [
      { text: '9', type: 'A' },
      { text: '3', type: 'C' },
      { text: '1', type: 'D' },
      { text: '7', type: 'B' },
    ],
  },
  {
    id: 2,
    text: '次の色の順番を覚えてください：赤、青、黄、緑、紫。4番目は？',
    options: [
      { text: '緑', type: 'A' },
      { text: '黄', type: 'B' },
      { text: '紫', type: 'C' },
      { text: '青', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '次の単語を覚えてください：猫、本、傘、時計、鏡、椅子。5番目の単語は？',
    options: [
      { text: '鏡', type: 'A' },
      { text: '時計', type: 'B' },
      { text: '椅子', type: 'C' },
      { text: '傘', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '電話番号を覚えます：03-5678-1234。真ん中の4桁は？',
    options: [
      { text: '5678', type: 'A' },
      { text: '6781', type: 'B' },
      { text: '7812', type: 'C' },
      { text: '5612', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '次のパターンを覚えてください：○△□○△□○。次に来るのは？',
    options: [
      { text: '△', type: 'A' },
      { text: '□', type: 'B' },
      { text: '○', type: 'C' },
      { text: '☆', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '次の文を覚えてください：「今日は晴れて気持ちのいい月曜日です」。何曜日でしたか？',
    options: [
      { text: '月曜日', type: 'A' },
      { text: '火曜日', type: 'B' },
      { text: '日曜日', type: 'C' },
      { text: '金曜日', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '次のアルファベットを覚えてください：K, M, P, S, V。2番目と4番目を合わせると？',
    options: [
      { text: 'MS', type: 'A' },
      { text: 'KP', type: 'B' },
      { text: 'PS', type: 'C' },
      { text: 'MV', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '買い物リストを覚えてください：牛乳、卵、パン、バター、チーズ、ヨーグルト。乳製品は何種類？',
    options: [
      { text: '4種類', type: 'A' },
      { text: '3種類', type: 'B' },
      { text: '5種類', type: 'C' },
      { text: '2種類', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '次の計算結果を覚えてください：3+5=8、7-2=5、4×2=8。2番目の答えは？',
    options: [
      { text: '5', type: 'A' },
      { text: '8', type: 'B' },
      { text: '7', type: 'C' },
      { text: '3', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '人の名前を覚えてください：田中、鈴木、佐藤、山本、高橋。「さ」から始まる名前は？',
    options: [
      { text: '佐藤と鈴木', type: 'A' },
      { text: '佐藤だけ', type: 'B' },
      { text: '鈴木だけ', type: 'C' },
      { text: '山本と佐藤', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '道順を覚えてください：右、左、まっすぐ、右、左。3番目の指示は？',
    options: [
      { text: 'まっすぐ', type: 'A' },
      { text: '左', type: 'B' },
      { text: '右', type: 'C' },
      { text: '戻る', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '次の時刻を覚えてください：9:15、10:30、11:45、13:00。3番目の時刻は？',
    options: [
      { text: '11:45', type: 'A' },
      { text: '10:30', type: 'B' },
      { text: '13:00', type: 'C' },
      { text: '9:15', type: 'D' },
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
  A: {
    type: 'A',
    title: '記憶の達人',
    emoji: '🧠',
    percentage: '記憶力 95%',
    description: '驚異的な記憶力の持ち主です！短期記憶も長期記憶も優れており、情報を素早く正確に覚え、必要な時に取り出せます。',
    characteristics: ['即座記憶', '正確な再生', '情報整理', '集中力', 'パターン認識'],
    advice: '記憶術を学ぶことで、さらに能力を伸ばせます。暗記系の資格試験にも強いでしょう。',
  },
  B: {
    type: 'B',
    title: '記憶上級者',
    emoji: '📚',
    percentage: '記憶力 80%',
    description: '記憶力が高く、複数の情報を同時に覚えることができます。少し複雑な情報でも、整理して記憶できる能力があります。',
    characteristics: ['短期記憶', '情報処理', '集中力', '整理能力', '持続力'],
    advice: '記憶法（語呂合わせ、イメージ法など）を活用すると、さらに効率的に覚えられます。',
  },
  C: {
    type: 'C',
    title: '記憶学習者',
    emoji: '📝',
    percentage: '記憶力 65%',
    description: '平均的な記憶力を持っています。工夫次第で記憶力は大きく向上するので、自分に合った記憶法を見つけましょう。',
    characteristics: ['基礎力', '成長意欲', '努力家', '実践派', '着実'],
    advice: '反復学習と関連付け記憶を意識することで、記憶の定着率が上がります。',
  },
  D: {
    type: 'D',
    title: '記憶ビギナー',
    emoji: '🌟',
    percentage: '記憶力 50%',
    description: '記憶力はまだ発展途上ですが、脳は何歳からでも鍛えられます！記憶のトレーニングを続けることで必ず向上します。',
    characteristics: ['発展途上', '可能性', '柔軟性', '創造的', '直感的'],
    advice: 'まずは興味のあることから覚える練習を始めてみましょう。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

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
