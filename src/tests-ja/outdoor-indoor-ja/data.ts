// アウトドア派インドア派診断 (아웃도어/인도어 테스트)
export const questions = [
  {
    id: 1,
    text: '理想の休日の過ごし方は？',
    options: [
      { text: '山や海でアクティビティ', type: 'outdoor' },
      { text: '公園やカフェでゆっくり', type: 'balance_out' },
      { text: '家で映画やゲーム', type: 'balance_in' },
      { text: '一日中家で過ごす', type: 'indoor' },
    ],
  },
  {
    id: 2,
    text: '旅行で楽しみたいことは？',
    options: [
      { text: '自然の中でアクティビティ', type: 'outdoor' },
      { text: '観光地を歩き回る', type: 'balance_out' },
      { text: 'ホテルでのんびり', type: 'balance_in' },
      { text: '家でバーチャル旅行', type: 'indoor' },
    ],
  },
  {
    id: 3,
    text: '天気が良い日は？',
    options: [
      { text: '外に出かけないともったいない', type: 'outdoor' },
      { text: '散歩くらいしたい', type: 'balance_out' },
      { text: '窓から景色を楽しむ', type: 'balance_in' },
      { text: '関係なく家にいる', type: 'indoor' },
    ],
  },
  {
    id: 4,
    text: '好きな趣味の傾向は？',
    options: [
      { text: 'キャンプ・登山・サーフィン', type: 'outdoor' },
      { text: 'サイクリング・ランニング・ガーデニング', type: 'balance_out' },
      { text: '読書・映画・料理', type: 'balance_in' },
      { text: 'ゲーム・アニメ・ネット', type: 'indoor' },
    ],
  },
  {
    id: 5,
    text: 'ストレス解消法は？',
    options: [
      { text: '体を動かす・自然に触れる', type: 'outdoor' },
      { text: '外を歩く・ドライブ', type: 'balance_out' },
      { text: '家でリラックス', type: 'balance_in' },
      { text: '一人で静かに過ごす', type: 'indoor' },
    ],
  },
  {
    id: 6,
    text: '買い物は？',
    options: [
      { text: 'アウトドアショップが大好き', type: 'outdoor' },
      { text: 'ショッピングモールをぶらぶら', type: 'balance_out' },
      { text: 'ネットショッピングが便利', type: 'balance_in' },
      { text: '基本的にネットで完結', type: 'indoor' },
    ],
  },
  {
    id: 7,
    text: '友達と会う時は？',
    options: [
      { text: 'BBQやキャンプ', type: 'outdoor' },
      { text: 'カフェやレストラン', type: 'balance_out' },
      { text: 'お家でホームパーティー', type: 'balance_in' },
      { text: 'オンラインで十分', type: 'indoor' },
    ],
  },
  {
    id: 8,
    text: '日焼けについて？',
    options: [
      { text: '健康的で好き', type: 'outdoor' },
      { text: '少しくらいは仕方ない', type: 'balance_out' },
      { text: 'できれば避けたい', type: 'balance_in' },
      { text: '絶対にしたくない', type: 'indoor' },
    ],
  },
  {
    id: 9,
    text: '虫や自然の不便さは？',
    options: [
      { text: '自然の一部、気にならない', type: 'outdoor' },
      { text: '多少は我慢できる', type: 'balance_out' },
      { text: 'あまり好きではない', type: 'balance_in' },
      { text: '絶対無理', type: 'indoor' },
    ],
  },
  {
    id: 10,
    text: '将来住みたい場所は？',
    options: [
      { text: '山や海の近く', type: 'outdoor' },
      { text: '郊外の一軒家', type: 'balance_out' },
      { text: '便利な都会のマンション', type: 'balance_in' },
      { text: '家から出なくていい環境', type: 'indoor' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  lifestyle: string[];
  recommendations: string[];
  tips: string[];
}> = {
  outdoor: {
    type: 'outdoor',
    title: 'アクティブアウトドア派',
    emoji: '🏕️',
    description: 'あなたは自然を愛するアウトドア派！外に出て体を動かし、自然の中で過ごすことで元気をもらいます。家にじっとしていられないアクティブな性格。',
    lifestyle: ['自然の中で過ごす', 'アクティビティ大好き', '外出派'],
    recommendations: ['キャンプ', '登山', 'マリンスポーツ', 'トレッキング'],
    tips: ['たまには家でゆっくりも', 'インドアな趣味も試してみて', '休息も大切に'],
  },
  balance_out: {
    type: 'balance_out',
    title: 'ややアウトドア寄りバランス派',
    emoji: '🌳',
    description: 'あなたは外出が好きだけど無理はしないバランス派！散歩やカフェ巡りなど、気軽に外を楽しみます。インドアも楽しめるバランスの良いタイプ。',
    lifestyle: ['気軽な外出', 'カフェや公園', 'バランス重視'],
    recommendations: ['ピクニック', 'カフェ巡り', 'サイクリング', 'フェス'],
    tips: ['もう少しアクティブにも', 'アウトドア趣味に挑戦', '自然の中で過ごす時間を増やして'],
  },
  balance_in: {
    type: 'balance_in',
    title: 'ややインドア寄りバランス派',
    emoji: '🏠',
    description: 'あなたは家が好きだけど外出も楽しむバランス派！家でのんびり過ごすことが多いけど、気分次第で外にも出かけます。無理しないライフスタイル。',
    lifestyle: ['家中心', 'たまに外出', '無理しない'],
    recommendations: ['読書', '映画鑑賞', '料理', '近場へお出かけ'],
    tips: ['たまには外に出てみて', '軽い運動を取り入れて', '新しい場所にも挑戦'],
  },
  indoor: {
    type: 'indoor',
    title: '完全インドア派',
    emoji: '🎮',
    description: 'あなたは家が大好きな完全インドア派！自分の空間で好きなことに没頭する時間が至福。外出は最小限、家が一番落ち着く場所。',
    lifestyle: ['家が一番', 'インドア趣味', '外出最小限'],
    recommendations: ['ゲーム', 'アニメ', 'ネットサーフィン', 'DIY'],
    tips: ['健康のために少し外へ', '日光を浴びよう', '室内でも体を動かして'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { outdoor: 0, balance_out: 0, balance_in: 0, indoor: 0 };

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
