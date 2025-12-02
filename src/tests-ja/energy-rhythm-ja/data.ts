// エネルギーリズム診断
export const questions = [
  {
    id: 1,
    text: '一日の中で最もエネルギーが高い時間帯は？',
    options: [
      { text: '朝〜午前中', type: 'morning_peak' },
      { text: '昼〜午後', type: 'afternoon_peak' },
      { text: '夕方〜夜', type: 'evening_peak' },
      { text: '一日中あまり変わらない', type: 'steady' },
    ],
  },
  {
    id: 2,
    text: 'エネルギーが下がる時間帯は？',
    options: [
      { text: '夕方以降は疲れる', type: 'morning_peak' },
      { text: '朝と夕方', type: 'afternoon_peak' },
      { text: '朝〜午前中', type: 'evening_peak' },
      { text: '特に決まっていない', type: 'steady' },
    ],
  },
  {
    id: 3,
    text: '食後の眠気は？',
    options: [
      { text: '昼食後に強く眠くなる', type: 'afternoon_peak' },
      { text: '夕食後に眠くなる', type: 'morning_peak' },
      { text: '食後はむしろ元気', type: 'evening_peak' },
      { text: 'あまり眠くならない', type: 'steady' },
    ],
  },
  {
    id: 4,
    text: '運動するなら何時頃がベスト？',
    options: [
      { text: '朝、スッキリ運動', type: 'morning_peak' },
      { text: '昼休みや午後', type: 'afternoon_peak' },
      { text: '夕方〜夜', type: 'evening_peak' },
      { text: 'いつでも大丈夫', type: 'steady' },
    ],
  },
  {
    id: 5,
    text: '集中力のピークは？',
    options: [
      { text: '午前中が一番集中できる', type: 'morning_peak' },
      { text: '午後に調子が出てくる', type: 'afternoon_peak' },
      { text: '夜が最も集中できる', type: 'evening_peak' },
      { text: '時間帯に関係なく集中できる', type: 'steady' },
    ],
  },
  {
    id: 6,
    text: 'カフェインが必要なタイミングは？',
    options: [
      { text: '午後の眠気覚まし', type: 'morning_peak' },
      { text: '朝の目覚めに', type: 'afternoon_peak' },
      { text: '夕方以降も飲む', type: 'evening_peak' },
      { text: 'あまり必要としない', type: 'steady' },
    ],
  },
  {
    id: 7,
    text: '創造的な作業をするなら？',
    options: [
      { text: '朝の静かな時間', type: 'morning_peak' },
      { text: '昼〜午後のエネルギーがある時', type: 'afternoon_peak' },
      { text: '夜、集中できる時間', type: 'evening_peak' },
      { text: 'いつでもできる', type: 'steady' },
    ],
  },
  {
    id: 8,
    text: '週末のエネルギーパターンは？',
    options: [
      { text: '平日と同じ、朝から活動的', type: 'morning_peak' },
      { text: '昼頃から動き出す', type: 'afternoon_peak' },
      { text: '夜に予定を入れがち', type: 'evening_peak' },
      { text: '自由にのんびり過ごす', type: 'steady' },
    ],
  },
  {
    id: 9,
    text: '疲れを感じやすいのは？',
    options: [
      { text: '夕方〜夜', type: 'morning_peak' },
      { text: '午前中と夕方', type: 'afternoon_peak' },
      { text: '朝〜午前中', type: 'evening_peak' },
      { text: '一定、急激に疲れない', type: 'steady' },
    ],
  },
  {
    id: 10,
    text: 'エネルギー管理について',
    options: [
      { text: '朝にエネルギーを使い、夜は休む', type: 'morning_peak' },
      { text: '昼にピークを持ってくる', type: 'afternoon_peak' },
      { text: '夜に向けてエネルギーを温存', type: 'evening_peak' },
      { text: '一日を通して均等に使う', type: 'steady' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  rhythm: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  morning_peak: {
    type: 'morning_peak',
    title: '朝型エネルギータイプ',
    emoji: '🌅⚡',
    rhythm: 'ピーク時間：朝〜午前',
    description: '朝から午前中にかけてエネルギーが最も高いタイプ。早起きして重要なタスクをこなすのが得意。夕方以降は体を休めるモードに入ります。',
    characteristics: ['朝から元気', '午前中が勝負時', '夕方には疲れる', '早寝早起き'],
    tips: ['重要な仕事は午前中に', '夜の予定は控えめに', '午後は軽めのタスクを'],
  },
  afternoon_peak: {
    type: 'afternoon_peak',
    title: '昼型エネルギータイプ',
    emoji: '☀️💪',
    rhythm: 'ピーク時間：昼〜午後',
    description: '昼から午後にかけてエネルギーがピークに達するタイプ。朝はゆっくりスタートし、昼食後からエンジンがかかります。バランスの取れたリズムの持ち主。',
    characteristics: ['昼から調子が出る', '午後がピーク', 'バランス型', 'ウォームアップが必要'],
    tips: ['午後に大事な予定を', '朝は準備の時間に', '昼食で栄養補給を'],
  },
  evening_peak: {
    type: 'evening_peak',
    title: '夜型エネルギータイプ',
    emoji: '🌙🔥',
    rhythm: 'ピーク時間：夕方〜夜',
    description: '夕方から夜にかけてエネルギーが上がるタイプ。朝は苦手でも、時間が経つほど元気になります。夜の活動や創作に向いています。',
    characteristics: ['夜になるほど元気', '朝は苦手', '夜型生活', 'クリエイティブな夜'],
    tips: ['重要な作業は夕方以降に', '朝は無理しない', '睡眠時間の確保を忘れずに'],
  },
  steady: {
    type: 'steady',
    title: '安定型エネルギータイプ',
    emoji: '⚖️✨',
    rhythm: 'ピーク時間：一日中安定',
    description: '一日を通してエネルギーが安定しているタイプ。極端なピークやダウンがなく、どの時間帯でも一定のパフォーマンスを発揮できます。適応力の高いタイプ。',
    characteristics: ['エネルギーが安定', '柔軟に対応できる', '極端な疲れがない', 'バランスが良い'],
    tips: ['この安定感を活かして', '時間帯を選ばず活動できる強み', '自分のペースを大切に'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { morning_peak: 0, afternoon_peak: 0, evening_peak: 0, steady: 0 };

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
