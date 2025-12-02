// 伝統vs現代派診断
export const questions = [
  {
    id: 1,
    text: '住みたい家のスタイルは？',
    options: [
      { text: '古民家や和風建築', type: 'traditional' },
      { text: '最新設備の近代的な家', type: 'modern' },
      { text: '和モダンな融合スタイル', type: 'fusion' },
      { text: '特にこだわりなし', type: 'flexible' },
    ],
  },
  {
    id: 2,
    text: 'お正月の過ごし方は？',
    options: [
      { text: 'おせち、初詣、年賀状', type: 'traditional' },
      { text: '海外旅行やイベント', type: 'modern' },
      { text: '伝統行事＋現代の楽しみ', type: 'fusion' },
      { text: 'その年による', type: 'flexible' },
    ],
  },
  {
    id: 3,
    text: '好きな音楽のジャンルは？',
    options: [
      { text: '演歌や民謡、雅楽', type: 'traditional' },
      { text: 'J-POP、洋楽、EDM', type: 'modern' },
      { text: '和楽器バンドなど融合系', type: 'fusion' },
      { text: '何でも聴く', type: 'flexible' },
    ],
  },
  {
    id: 4,
    text: 'ファッションの好みは？',
    options: [
      { text: '着物や和装が好き', type: 'traditional' },
      { text: 'トレンドを追う', type: 'modern' },
      { text: '和柄を現代風にアレンジ', type: 'fusion' },
      { text: '楽なものが一番', type: 'flexible' },
    ],
  },
  {
    id: 5,
    text: '結婚式をするなら？',
    options: [
      { text: '神前式', type: 'traditional' },
      { text: 'チャペル式や海外挙式', type: 'modern' },
      { text: '和洋折衷', type: 'fusion' },
      { text: 'フォト婚や入籍のみ', type: 'flexible' },
    ],
  },
  {
    id: 6,
    text: '好きな食事のスタイルは？',
    options: [
      { text: '和食、懐石料理', type: 'traditional' },
      { text: '洋食、多国籍料理', type: 'modern' },
      { text: '創作和食、フュージョン', type: 'fusion' },
      { text: 'その日の気分', type: 'flexible' },
    ],
  },
  {
    id: 7,
    text: '趣味として興味があるのは？',
    options: [
      { text: '茶道、華道、書道', type: 'traditional' },
      { text: 'ゲーム、SNS、最新技術', type: 'modern' },
      { text: '伝統×テクノロジー', type: 'fusion' },
      { text: '色々試したい', type: 'flexible' },
    ],
  },
  {
    id: 8,
    text: '理想の旅行先は？',
    options: [
      { text: '京都、金沢など古都', type: 'traditional' },
      { text: '東京、海外の都市', type: 'modern' },
      { text: '古い町並みとおしゃれカフェ', type: 'fusion' },
      { text: '行きたい所に行く', type: 'flexible' },
    ],
  },
  {
    id: 9,
    text: 'コミュニケーション手段は？',
    options: [
      { text: '手紙や直接会う', type: 'traditional' },
      { text: 'SNS、ビデオ通話', type: 'modern' },
      { text: '状況に応じて使い分け', type: 'fusion' },
      { text: '相手に合わせる', type: 'flexible' },
    ],
  },
  {
    id: 10,
    text: '「日本らしさ」についてどう思う？',
    options: [
      { text: '大切に守るべき', type: 'traditional' },
      { text: '時代に合わせて変化', type: 'modern' },
      { text: '伝統を活かして進化', type: 'fusion' },
      { text: '自然体でいい', type: 'flexible' },
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
  lifestyle: string;
}> = {
  traditional: {
    type: 'traditional',
    title: '伝統派',
    emoji: '🏯',
    percentage: '伝統重視度 95%',
    description: '日本の伝統文化を愛し、大切に守りたいと思うあなた。古き良きものに価値を見出し、次世代に伝えていく役割を担っています。',
    characteristics: ['伝統尊重', '和の心', '継承意識', '品格', '落ち着き'],
    lifestyle: '季節の行事を大切に、和の暮らしを楽しんで',
  },
  modern: {
    type: 'modern',
    title: '現代派',
    emoji: '🌆',
    percentage: 'モダン度 93%',
    description: '最新のトレンドや技術に敏感なあなた。変化を恐れず、新しいものを積極的に取り入れます。グローバルな視点を持っています。',
    characteristics: ['革新的', 'トレンド敏感', 'グローバル', '柔軟性', '進取の気性'],
    lifestyle: '常に新しい情報をキャッチし、時代を先取り',
  },
  fusion: {
    type: 'fusion',
    title: '融合派',
    emoji: '🎋',
    percentage: 'フュージョン度 91%',
    description: '伝統と現代の良いところを融合させるあなた。古いものを大切にしながらも、現代的にアレンジする創造性を持っています。',
    characteristics: ['創造的', 'バランス感覚', 'アレンジ力', '調和', '独自性'],
    lifestyle: '和モダンなライフスタイルで新しい価値を創造',
  },
  flexible: {
    type: 'flexible',
    title: '柔軟派',
    emoji: '🌊',
    percentage: '柔軟度 90%',
    description: '伝統にも現代にもこだわらない自由なあなた。状況や気分に応じて柔軟に対応し、型にはまらない生き方をしています。',
    characteristics: ['自由', '柔軟', '適応力', '自然体', 'オープンマインド'],
    lifestyle: 'その時の気持ちを大切に、自分らしく生きて',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { traditional: 0, modern: 0, fusion: 0, flexible: 0 };

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
