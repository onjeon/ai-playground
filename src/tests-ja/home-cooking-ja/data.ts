// 自炊タイプ診断
export const questions = [
  {
    id: 1,
    text: '自炊の頻度は？',
    options: [
      { text: 'ほぼ毎日自炊', type: 'daily' },
      { text: '週3-4日くらい', type: 'regular' },
      { text: '週1-2日', type: 'occasional' },
      { text: 'ほとんどしない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '自炊をする理由は？',
    options: [
      { text: '料理が好きだから', type: 'daily' },
      { text: '健康や節約のため', type: 'regular' },
      { text: '気が向いた時だけ', type: 'occasional' },
      { text: '仕方なく', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '献立の決め方は？',
    options: [
      { text: '一週間分計画する', type: 'daily' },
      { text: '買い物しながら考える', type: 'regular' },
      { text: '冷蔵庫にあるもので', type: 'occasional' },
      { text: '考えるのが面倒', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '冷蔵庫の中身は？',
    options: [
      { text: '常に食材がストック', type: 'daily' },
      { text: '必要なものは揃ってる', type: 'regular' },
      { text: '調味料と飲み物くらい', type: 'occasional' },
      { text: 'ほぼ空っぽ', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '作り置きについて',
    options: [
      { text: '週末にまとめて準備', type: 'daily' },
      { text: '時々作り置きする', type: 'regular' },
      { text: '多めに作って翌日も', type: 'occasional' },
      { text: 'しない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '朝ごはんは？',
    options: [
      { text: 'しっかり自分で作る', type: 'daily' },
      { text: '簡単なものを準備', type: 'regular' },
      { text: 'パンやシリアル', type: 'occasional' },
      { text: '食べないか買う', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'お弁当は？',
    options: [
      { text: '毎日手作り', type: 'daily' },
      { text: '時々作る', type: 'regular' },
      { text: '残り物を詰めるくらい', type: 'occasional' },
      { text: '買う派', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '料理の腕前は？',
    options: [
      { text: 'かなり自信あり', type: 'daily' },
      { text: 'そこそこ作れる', type: 'regular' },
      { text: '簡単なものなら', type: 'occasional' },
      { text: 'あまり自信ない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '自炊と外食/テイクアウトの使い分けは？',
    options: [
      { text: '基本自炊、外食は特別な時', type: 'daily' },
      { text: 'バランスを取っている', type: 'regular' },
      { text: '面倒な時は外食', type: 'occasional' },
      { text: '外食中心、自炊はたまに', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '自炊についての本音は？',
    options: [
      { text: '毎日の楽しみ', type: 'daily' },
      { text: '習慣になっている', type: 'regular' },
      { text: 'もっと頑張りたいけど…', type: 'occasional' },
      { text: '正直面倒', type: 'minimal' },
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
  daily: {
    type: 'daily',
    title: '自炊マスター',
    emoji: '👨‍🍳',
    percentage: '自炊度 100%',
    description: '毎日キッチンに立つ自炊の達人！料理が好きで、健康も節約もバッチリ。食生活を完全にコントロールする生活力抜群タイプ。',
    characteristics: ['料理好き', '計画的', '健康意識高い', '節約上手', '自立している'],
    advice: '素晴らしい自炊ライフ！たまには外食でプロの味も楽しんで♪',
  },
  regular: {
    type: 'regular',
    title: 'バランス自炊派',
    emoji: '🍳',
    percentage: '自炊度 70%',
    description: '自炊と外食をバランス良く使い分ける。無理なく続けられるペースで自炊している現実的な食生活スタイル。',
    characteristics: ['バランス型', '現実的', '柔軟', '効率的', '無理をしない'],
    advice: 'ちょうどいいバランス！新しいレシピに挑戦するともっと楽しくなるかも♪',
  },
  occasional: {
    type: 'occasional',
    title: '気まぐれ自炊派',
    emoji: '🥗',
    percentage: '自炊度 40%',
    description: '気が向いた時だけ自炊するマイペース派。料理は嫌いじゃないけど、面倒な日も正直ある。ストレスフリーな食生活。',
    characteristics: ['マイペース', '正直', 'ストレスフリー', '柔軟', '気分屋'],
    advice: '簡単レシピのレパートリーを増やすと自炊がもっと楽になりますよ♪',
  },
  minimal: {
    type: 'minimal',
    title: '外食・テイクアウト派',
    emoji: '🍱',
    percentage: '自炊度 15%',
    description: '自炊よりも外食やテイクアウト派。料理は苦手か、時間をかけたくない。現代的な食生活スタイルも一つの選択。',
    characteristics: ['効率重視', '時間優先', '外食通', '現代的', '他の趣味重視'],
    advice: '簡単な料理から始めてみると、新しい楽しみが見つかるかも♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { daily: 0, regular: 0, occasional: 0, minimal: 0 };

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
