// 睡眠タイプ診断 (수면 타입 진단)
export const questions = [
  {
    id: 1,
    text: '理想の就寝時間は？',
    options: [
      { text: '22時前には寝たい', type: 'earlybird' },
      { text: '24時くらいがちょうどいい', type: 'balanced' },
      { text: '深夜2時以降が落ち着く', type: 'nightowl' },
      { text: '眠くなったら寝る、時間は決めない', type: 'irregular' },
    ],
  },
  {
    id: 2,
    text: '朝起きた時の気分は？',
    options: [
      { text: 'スッキリ！朝が一番元気', type: 'earlybird' },
      { text: 'まあまあ、普通に起きれる', type: 'balanced' },
      { text: 'つらい…もう少し寝たい', type: 'nightowl' },
      { text: '日によってバラバラ', type: 'irregular' },
    ],
  },
  {
    id: 3,
    text: '寝る前のルーティンは？',
    options: [
      { text: 'お風呂→ストレッチ→読書など決まっている', type: 'earlybird' },
      { text: 'だいたい決まっているけど柔軟', type: 'balanced' },
      { text: 'スマホ見てたら気づいたら深夜', type: 'nightowl' },
      { text: '特にない、その日による', type: 'irregular' },
    ],
  },
  {
    id: 4,
    text: '休日の起床時間は？',
    options: [
      { text: '平日とほぼ同じ時間に起きる', type: 'earlybird' },
      { text: '1〜2時間遅いくらい', type: 'balanced' },
      { text: '昼過ぎまで寝てしまう', type: 'nightowl' },
      { text: 'その週の疲れ具合による', type: 'irregular' },
    ],
  },
  {
    id: 5,
    text: '眠れない夜はどうする？',
    options: [
      { text: '滅多にないけど、目を閉じて休む', type: 'earlybird' },
      { text: 'ホットミルクを飲むなど対策', type: 'balanced' },
      { text: '諦めてスマホやゲーム', type: 'nightowl' },
      { text: '眠れないことも受け入れる', type: 'irregular' },
    ],
  },
  {
    id: 6,
    text: '昼寝について',
    options: [
      { text: 'しない、夜眠れなくなる', type: 'earlybird' },
      { text: '15〜20分のパワーナップは好き', type: 'balanced' },
      { text: '昼寝大好き、気づいたら2時間', type: 'nightowl' },
      { text: '眠い時は寝る、時間は気にしない', type: 'irregular' },
    ],
  },
  {
    id: 7,
    text: '一番集中できる時間帯は？',
    options: [
      { text: '朝〜午前中', type: 'earlybird' },
      { text: '午後〜夕方', type: 'balanced' },
      { text: '夜〜深夜', type: 'nightowl' },
      { text: '日によって違う', type: 'irregular' },
    ],
  },
  {
    id: 8,
    text: 'アラームについて',
    options: [
      { text: '1回で起きれる', type: 'earlybird' },
      { text: '2〜3回セット', type: 'balanced' },
      { text: '何個もセット、それでも起きれない', type: 'nightowl' },
      { text: 'セットし忘れることがある', type: 'irregular' },
    ],
  },
  {
    id: 9,
    text: '睡眠の質に影響するものは？',
    options: [
      { text: '寝具の質や寝室の環境', type: 'earlybird' },
      { text: '食事や運動習慣', type: 'balanced' },
      { text: 'カフェインやスマホの使用', type: 'nightowl' },
      { text: 'ストレスや心配事', type: 'irregular' },
    ],
  },
  {
    id: 10,
    text: '自分の睡眠を一言で言うと？',
    options: [
      { text: '規則正しく健康的', type: 'earlybird' },
      { text: 'まあまあバランス取れてる', type: 'balanced' },
      { text: '夜型で朝が苦手', type: 'nightowl' },
      { text: '不規則でなかなか改善できない', type: 'irregular' },
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
  earlybird: {
    type: 'earlybird',
    title: '朝型スーパー快眠タイプ',
    emoji: '🌅',
    percentage: '睡眠健康度 95%',
    description: '早寝早起きが自然にできる理想的な睡眠パターン！朝から元気で生産性が高く、一日を有効に使えます。規則正しい生活リズムは健康長寿の秘訣。',
    characteristics: ['規則正しい', '朝に強い', '健康的', '生産性が高い', 'セルフコントロール上手'],
    advice: '素晴らしい睡眠習慣！夜の付き合いも大切にしつつ、このリズムをキープして。',
  },
  balanced: {
    type: 'balanced',
    title: 'バランス快眠タイプ',
    emoji: '😴',
    percentage: '睡眠健康度 80%',
    description: '無理なく続けられる現実的な睡眠パターン。極端な早寝早起きではないけれど、バランスの取れた生活ができています。休日の寝だめもほどほどに。',
    characteristics: ['柔軟', 'バランス型', '現実的', '適応力がある', '安定している'],
    advice: 'いい感じ！もう少し就寝時間を早めると、さらに朝がラクになるかも。',
  },
  nightowl: {
    type: 'nightowl',
    title: '夜型クリエイティブタイプ',
    emoji: '🦉',
    percentage: '夜型度 90%',
    description: '夜になると頭が冴えるナイトオウル！深夜の静かな時間に集中力を発揮。クリエイティブな発想も夜に生まれやすい。ただし朝は戦いの連続。',
    characteristics: ['夜型', 'クリエイティブ', '深夜に集中', '朝が苦手', '独自のリズム'],
    advice: '夜型も個性！ただ、少しずつ就寝時間を早めると体への負担が減りますよ。',
  },
  irregular: {
    type: 'irregular',
    title: '不規則スリーパータイプ',
    emoji: '🌀',
    percentage: '睡眠リズム変動度 85%',
    description: '日によって睡眠パターンがバラバラなあなた。仕事やプライベートの影響を受けやすく、リズムが安定しにくい。体は規則正しさを求めているサインかも。',
    characteristics: ['不規則', '柔軟すぎる', 'ストレスの影響大', '適応型', '改善の余地あり'],
    advice: '平日だけでも就寝時間を揃えてみて。週末の寝だめより平日の安定が大切です。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { earlybird: 0, balanced: 0, nightowl: 0, irregular: 0 };

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
