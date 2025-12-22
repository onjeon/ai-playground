// 睡眠スケジュール診断
export const questions = [
  {
    id: 1,
    text: '自然に目が覚める時間は？',
    options: [
      { text: '朝5〜6時頃', type: 'lark' },
      { text: '朝7〜8時頃', type: 'balanced' },
      { text: '昼前くらい', type: 'owl' },
      { text: '日によってバラバラ', type: 'irregular' },
    ],
  },
  {
    id: 2,
    text: '一番頭が冴えている時間帯は？',
    options: [
      { text: '早朝〜午前中', type: 'lark' },
      { text: '日中全般', type: 'balanced' },
      { text: '夜〜深夜', type: 'owl' },
      { text: '特に決まっていない', type: 'irregular' },
    ],
  },
  {
    id: 3,
    text: '理想の就寝時間は？',
    options: [
      { text: '夜21〜22時', type: 'lark' },
      { text: '夜23〜24時', type: 'balanced' },
      { text: '深夜1時以降', type: 'owl' },
      { text: '眠くなった時', type: 'irregular' },
    ],
  },
  {
    id: 4,
    text: '休日の朝はどう過ごす？',
    options: [
      { text: '平日と同じ時間に起きて朝活', type: 'lark' },
      { text: '少しゆっくり起きてのんびり', type: 'balanced' },
      { text: '昼まで寝だめする', type: 'owl' },
      { text: '予定次第でバラバラ', type: 'irregular' },
    ],
  },
  {
    id: 5,
    text: '朝型の生活を強制されたら？',
    options: [
      { text: '全く問題ない、むしろ得意', type: 'lark' },
      { text: '少し調整すれば大丈夫', type: 'balanced' },
      { text: 'かなりキツい…', type: 'owl' },
      { text: '慣れるまで時間がかかりそう', type: 'irregular' },
    ],
  },
  {
    id: 6,
    text: '眠りにつくまでの時間は？',
    options: [
      { text: '布団に入ったらすぐ（5分以内）', type: 'lark' },
      { text: '10〜15分くらい', type: 'balanced' },
      { text: '30分以上かかることも', type: 'owl' },
      { text: '日によって全然違う', type: 'irregular' },
    ],
  },
  {
    id: 7,
    text: '夜更かしについてどう思う？',
    options: [
      { text: '基本しない、早く寝たい', type: 'lark' },
      { text: 'たまになら楽しい', type: 'balanced' },
      { text: '夜更かし大好き、夜は長い', type: 'owl' },
      { text: '流れでなりがち', type: 'irregular' },
    ],
  },
  {
    id: 8,
    text: '終電を逃した時はどうする？',
    options: [
      { text: 'まず終電を逃すことがない', type: 'lark' },
      { text: 'タクシーか始発を待つ', type: 'balanced' },
      { text: 'カラオケやネットカフェで朝まで', type: 'owl' },
      { text: 'その時の気分と状況次第', type: 'irregular' },
    ],
  },
  {
    id: 9,
    text: '旅行で時差ボケは？',
    options: [
      { text: 'あまりならない、すぐ適応', type: 'lark' },
      { text: '少しあるけど数日で回復', type: 'balanced' },
      { text: '夜型だから海外の方が楽なことも', type: 'owl' },
      { text: 'かなり影響を受ける', type: 'irregular' },
    ],
  },
  {
    id: 10,
    text: '睡眠に関して一番大切にしていることは？',
    options: [
      { text: '早寝早起きの習慣', type: 'lark' },
      { text: '7〜8時間の睡眠時間', type: 'balanced' },
      { text: '自分のリズムに合わせること', type: 'owl' },
      { text: 'あまり考えていない', type: 'irregular' },
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
  bestSchedule: string;
}> = {
  lark: {
    type: 'lark',
    title: '完全朝型タイプ（ヒバリ型）',
    emoji: '🌅',
    percentage: '朝型度 98%',
    description: '早起きは三文の徳を体現するあなた！朝の静かな時間が一番生産的で、夜は自然と眠くなります。日本の「早起きは三文の徳」を地で行く健康的な生活リズムの持ち主。',
    characteristics: ['早寝早起き', '朝の時間を有効活用', '夜は早めに眠くなる', '規則正しい', '健康的'],
    bestSchedule: '5:30起床 → 22:00就寝がベスト。朝活を最大限活用しましょう！',
  },
  balanced: {
    type: 'balanced',
    title: 'バランス型（ハト型）',
    emoji: '🕊️',
    percentage: 'バランス度 90%',
    description: '社会のリズムに適応しやすいバランスの取れたあなた！朝も夜もそこそこ対応でき、7〜8時間しっかり寝ることで調子を整えられます。柔軟性が強み。',
    characteristics: ['適応力が高い', '一般的な生活リズム', '睡眠時間を重視', '柔軟', '安定している'],
    bestSchedule: '7:00起床 → 23:00就寝がベスト。睡眠時間を確保することを優先して！',
  },
  owl: {
    type: 'owl',
    title: '完全夜型タイプ（フクロウ型）',
    emoji: '🦉',
    percentage: '夜型度 95%',
    description: '夜こそ本領発揮のあなた！深夜に集中力が増し、クリエイティブな作業は夜が最適。朝早い予定は天敵だけど、それは体内時計のせい。自分のリズムを大切に。',
    characteristics: ['夜に活発', '深夜の集中力', '朝が苦手', 'クリエイティブ', '独自のリズム'],
    bestSchedule: '10:00起床 → 2:00就寝が自然なリズム。可能なら夜型を活かせる仕事を！',
  },
  irregular: {
    type: 'irregular',
    title: '不規則リズム型',
    emoji: '🔄',
    percentage: '不規則度 85%',
    description: '睡眠リズムが日によって変わるあなた。柔軟性がある反面、体内時計が乱れやすい傾向も。少しずつ規則正しいリズムを作ることで、パフォーマンスが上がるかも。',
    characteristics: ['リズムが不安定', '柔軟だけど不規則', '眠りの質にムラ', '適応力はある', '生活リズム改善の余地あり'],
    bestSchedule: 'まずは起床時間を固定することから始めましょう。体内時計が整いますよ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { lark: 0, balanced: 0, owl: 0, irregular: 0 };

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
