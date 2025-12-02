// カフェ利用タイプ診断
export const questions = [
  {
    id: 1,
    text: 'カフェに行く主な目的は？',
    options: [
      { text: '美味しいコーヒーを飲む', type: 'coffee' },
      { text: '仕事や勉強をする', type: 'work' },
      { text: '友達とおしゃべり', type: 'social' },
      { text: 'ゆっくりリラックス', type: 'relax' },
    ],
  },
  {
    id: 2,
    text: 'カフェ選びで重視するのは？',
    options: [
      { text: 'コーヒーの質', type: 'coffee' },
      { text: 'Wi-Fiと電源', type: 'work' },
      { text: '話しやすい雰囲気', type: 'social' },
      { text: '居心地の良さ', type: 'relax' },
    ],
  },
  {
    id: 3,
    text: 'カフェでの滞在時間は？',
    options: [
      { text: 'コーヒーを楽しむ間', type: 'coffee' },
      { text: '数時間、作業が終わるまで', type: 'work' },
      { text: '話が盛り上がる限り', type: 'social' },
      { text: 'のんびり、時間を気にしない', type: 'relax' },
    ],
  },
  {
    id: 4,
    text: 'カフェでの注文は？',
    options: [
      { text: 'こだわりの一杯を', type: 'coffee' },
      { text: 'カフェインで集中力アップ', type: 'work' },
      { text: 'みんなでシェアできるもの', type: 'social' },
      { text: '季節のドリンクやスイーツ', type: 'relax' },
    ],
  },
  {
    id: 5,
    text: 'お気に入りのカフェのタイプは？',
    options: [
      { text: 'スペシャルティコーヒー専門店', type: 'coffee' },
      { text: '作業しやすいチェーン店', type: 'work' },
      { text: 'おしゃれで映えるカフェ', type: 'social' },
      { text: '静かで落ち着ける隠れ家', type: 'relax' },
    ],
  },
  {
    id: 6,
    text: 'カフェでの過ごし方は？',
    options: [
      { text: 'コーヒーに集中', type: 'coffee' },
      { text: 'PC作業や読書', type: 'work' },
      { text: '会話を楽しむ', type: 'social' },
      { text: 'ぼーっとする', type: 'relax' },
    ],
  },
  {
    id: 7,
    text: '一人カフェについて',
    options: [
      { text: '一人の方が味に集中できる', type: 'coffee' },
      { text: '作業するなら一人', type: 'work' },
      { text: '誰かと一緒がいい', type: 'social' },
      { text: '一人でゆっくりが最高', type: 'relax' },
    ],
  },
  {
    id: 8,
    text: 'カフェの混雑状況は？',
    options: [
      { text: '空いてる時間を狙う', type: 'coffee' },
      { text: '席さえ確保できれば', type: 'work' },
      { text: '賑やかな方が好き', type: 'social' },
      { text: '静かな方がいい', type: 'relax' },
    ],
  },
  {
    id: 9,
    text: 'カフェで写真を撮る？',
    options: [
      { text: 'コーヒーの写真は撮る', type: 'coffee' },
      { text: 'あまり撮らない', type: 'work' },
      { text: '友達と一緒に撮る', type: 'social' },
      { text: '雰囲気の良い写真を撮る', type: 'relax' },
    ],
  },
  {
    id: 10,
    text: 'カフェはあなたにとって？',
    options: [
      { text: 'コーヒーを楽しむ場所', type: 'coffee' },
      { text: '第二のオフィス', type: 'work' },
      { text: '人と繋がる場所', type: 'social' },
      { text: '癒しの空間', type: 'relax' },
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
  coffee: {
    type: 'coffee',
    title: 'コーヒー通タイプ',
    emoji: '☕',
    percentage: 'コーヒー愛 95%',
    description: 'カフェは美味しいコーヒーを飲むための場所！豆の産地、焙煎、抽出方法にこだわる真のコーヒー通。一杯に真剣。',
    characteristics: ['こだわり派', '味覚が繊細', '探究心', '本物志向', '知識豊富'],
    advice: 'コーヒーへの情熱が素敵！新しいロースターの開拓も楽しそう♪',
  },
  work: {
    type: 'work',
    title: 'ノマドワーカータイプ',
    emoji: '💻',
    percentage: '作業効率 92%',
    description: 'カフェは第二のオフィス！Wi-Fiと電源があれば仕事場に。程よい雑音が集中力を高める。カフェイン補給しながら効率アップ。',
    characteristics: ['効率重視', '自律的', '集中力', 'フレキシブル', '現代的'],
    advice: 'たまにはPCを閉じて、純粋にカフェを楽しむ時間も♪',
  },
  social: {
    type: 'social',
    title: 'ソーシャルカフェ派',
    emoji: '👯',
    percentage: '社交性 90%',
    description: 'カフェは人と会う場所！友達とのおしゃべり、SNS映えする空間が好き。カフェ巡りで新しいお店を開拓するのも楽しみ。',
    characteristics: ['社交的', 'トレンド敏感', 'コミュニケーション上手', '情報通', 'アクティブ'],
    advice: 'カフェでの繋がり大切に！たまには一人カフェも新鮮かも♪',
  },
  relax: {
    type: 'relax',
    title: '癒し系カフェ派',
    emoji: '🌿',
    percentage: 'リラックス度 88%',
    description: 'カフェは心を休める場所。ゆっくり時間を過ごし、日常から離れる。居心地の良さが一番大事な癒しを求めるタイプ。',
    characteristics: ['穏やか', 'マイペース', '自分の時間を大切に', '感性豊か', 'スローライフ'],
    advice: '素敵な癒しの時間！お気に入りの隠れ家カフェを見つけよう♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { coffee: 0, work: 0, social: 0, relax: 0 };

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
