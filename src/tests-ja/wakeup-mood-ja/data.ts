// 起床時の気分診断
export const questions = [
  {
    id: 1,
    text: '朝目覚めた時の最初の感情は？',
    options: [
      { text: '爽快！新しい一日が楽しみ', type: 'cheerful' },
      { text: '穏やか、ゆっくり目覚める', type: 'calm' },
      { text: 'まだ眠い、もう少し寝たい', type: 'sleepy' },
      { text: '憂鬱、起きたくない', type: 'reluctant' },
    ],
  },
  {
    id: 2,
    text: '目覚めてすぐ体を動かせる？',
    options: [
      { text: 'すぐにベッドから出られる', type: 'cheerful' },
      { text: '少しゆっくりしてから動く', type: 'calm' },
      { text: 'しばらくベッドでゴロゴロ', type: 'sleepy' },
      { text: '体が重くて動けない', type: 'reluctant' },
    ],
  },
  {
    id: 3,
    text: '朝起きた時の頭の状態は？',
    options: [
      { text: 'クリアでスッキリ', type: 'cheerful' },
      { text: 'だんだんクリアになる', type: 'calm' },
      { text: 'ぼんやりしている', type: 'sleepy' },
      { text: '重くてモヤモヤ', type: 'reluctant' },
    ],
  },
  {
    id: 4,
    text: 'その日の予定について朝どう思う？',
    options: [
      { text: 'ワクワクする', type: 'cheerful' },
      { text: '淡々と受け入れる', type: 'calm' },
      { text: 'まだ考えたくない', type: 'sleepy' },
      { text: '考えると憂鬱になる', type: 'reluctant' },
    ],
  },
  {
    id: 5,
    text: '朝の挨拶は？',
    options: [
      { text: '元気に「おはよう！」', type: 'cheerful' },
      { text: '穏やかに「おはよう」', type: 'calm' },
      { text: 'ボソボソと挨拶', type: 'sleepy' },
      { text: '話したくない', type: 'reluctant' },
    ],
  },
  {
    id: 6,
    text: '朝日を見るとどう感じる？',
    options: [
      { text: 'エネルギーをもらえる', type: 'cheerful' },
      { text: '心地よい、穏やかな気持ち', type: 'calm' },
      { text: 'まぶしい', type: 'sleepy' },
      { text: 'カーテンを閉めたい', type: 'reluctant' },
    ],
  },
  {
    id: 7,
    text: '朝食の支度は？',
    options: [
      { text: '楽しみながら準備', type: 'cheerful' },
      { text: 'ルーティンとしてこなす', type: 'calm' },
      { text: '面倒だけどする', type: 'sleepy' },
      { text: '食欲がない、省略しがち', type: 'reluctant' },
    ],
  },
  {
    id: 8,
    text: '目覚まし時計への反応は？',
    options: [
      { text: '鳴る前に起きている', type: 'cheerful' },
      { text: '1回で止めて起きる', type: 'calm' },
      { text: 'スヌーズを何回も押す', type: 'sleepy' },
      { text: '止めてまた寝てしまう', type: 'reluctant' },
    ],
  },
  {
    id: 9,
    text: '朝の身支度の気分は？',
    options: [
      { text: 'テキパキ楽しくできる', type: 'cheerful' },
      { text: 'マイペースに準備', type: 'calm' },
      { text: 'ダラダラしがち', type: 'sleepy' },
      { text: '最低限で済ませたい', type: 'reluctant' },
    ],
  },
  {
    id: 10,
    text: '朝の時間帯全体の気分は？',
    options: [
      { text: '一日で一番好きな時間', type: 'cheerful' },
      { text: '静かで落ち着く時間', type: 'calm' },
      { text: '早く過ぎてほしい', type: 'sleepy' },
      { text: '一番辛い時間帯', type: 'reluctant' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  mood: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  cheerful: {
    type: 'cheerful',
    title: '朝から元気いっぱいタイプ',
    emoji: '🌞😊',
    mood: '朝の気分：★★★★★',
    description: '朝から最高の気分で目覚められるタイプ！新しい一日にワクワクし、朝の時間を楽しめます。周りにも元気を与えられる存在です。',
    characteristics: ['朝が大好き', '自然と早起き', 'ポジティブ思考', 'エネルギッシュ'],
    tips: ['その朝の元気を周りにも分けて', '朝活を始めてみては', '今の生活リズムを大切に'],
  },
  calm: {
    type: 'calm',
    title: '穏やかな目覚めタイプ',
    emoji: '🌅😌',
    mood: '朝の気分：★★★★☆',
    description: '静かに穏やかに一日を始めるタイプ。焦らずマイペースで準備を進め、心の平穏を保ちながら活動を始められます。バランスの取れた朝を過ごせます。',
    characteristics: ['穏やかな朝', 'マイペース', '落ち着いている', '静かな時間が好き'],
    tips: ['朝のルーティンを大切に', '静かな朝の時間を活用して', 'コーヒーや読書でリラックス'],
  },
  sleepy: {
    type: 'sleepy',
    title: '眠気と戦うタイプ',
    emoji: '😪🛏️',
    mood: '朝の気分：★★★☆☆',
    description: '朝はまだ眠くて、エンジンがかかるまで時間がかかるタイプ。無理せずゆっくり目覚めることで、午後からはしっかりパフォーマンスを発揮できます。',
    characteristics: ['朝は眠い', 'スロースターター', '夜型かも', '徐々に調子が出る'],
    tips: ['十分な睡眠時間を確保して', '朝日を浴びて体を目覚めさせて', '大事な予定は午後に入れて'],
  },
  reluctant: {
    type: 'reluctant',
    title: '朝が苦手タイプ',
    emoji: '😩🌧️',
    mood: '朝の気分：★★☆☆☆',
    description: '朝起きるのが辛いタイプ。睡眠不足やストレスが原因かもしれません。生活リズムや睡眠環境を見直すことで、改善の余地があります。',
    characteristics: ['朝が憂鬱', '起きるのが辛い', '睡眠に問題があるかも', 'ストレスを感じやすい'],
    tips: ['睡眠の質を改善して', 'ストレスの原因を探って', '楽しみな朝の習慣を作って'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { cheerful: 0, calm: 0, sleepy: 0, reluctant: 0 };

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
