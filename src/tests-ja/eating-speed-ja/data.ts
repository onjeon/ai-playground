// 食べるスピード診断
export const questions = [
  {
    id: 1,
    text: '食事にかける時間は？',
    options: [
      { text: '5分以内で完食', type: 'speed' },
      { text: '10〜15分くらい', type: 'quick' },
      { text: '20〜30分', type: 'normal' },
      { text: '30分以上かける', type: 'slow' },
    ],
  },
  {
    id: 2,
    text: '周りの人と比べて食べ終わるのは？',
    options: [
      { text: 'いつも一番早い', type: 'speed' },
      { text: 'やや早め', type: 'quick' },
      { text: '同じくらい', type: 'normal' },
      { text: 'いつも最後', type: 'slow' },
    ],
  },
  {
    id: 3,
    text: '食事中の噛む回数は？',
    options: [
      { text: 'ほぼ丸呑み', type: 'speed' },
      { text: '数回噛んで飲み込む', type: 'quick' },
      { text: 'しっかり噛む', type: 'normal' },
      { text: '30回以上噛む', type: 'slow' },
    ],
  },
  {
    id: 4,
    text: 'ラーメンを食べるとき',
    options: [
      { text: 'のびる前に一気食い', type: 'speed' },
      { text: '熱いうちにサッと', type: 'quick' },
      { text: '味わいながら', type: 'normal' },
      { text: 'ゆっくり楽しむ', type: 'slow' },
    ],
  },
  {
    id: 5,
    text: '忙しい日のランチは？',
    options: [
      { text: '立ち食いか、デスクで超高速', type: 'speed' },
      { text: '早めに済ませる', type: 'quick' },
      { text: '時間は確保したい', type: 'normal' },
      { text: 'ゆっくり食べないと嫌', type: 'slow' },
    ],
  },
  {
    id: 6,
    text: '「早食いは体に悪い」と言われて',
    options: [
      { text: 'わかってるけど止められない', type: 'speed' },
      { text: '少し気をつけている', type: 'quick' },
      { text: '普通のペースだと思う', type: 'normal' },
      { text: '急いで食べることがない', type: 'slow' },
    ],
  },
  {
    id: 7,
    text: 'お寿司を食べるとき',
    options: [
      { text: '次々と口に運ぶ', type: 'speed' },
      { text: 'テンポよく食べる', type: 'quick' },
      { text: '一貫ずつ味わう', type: 'normal' },
      { text: 'じっくり堪能する', type: 'slow' },
    ],
  },
  {
    id: 8,
    text: '食事中の会話は？',
    options: [
      { text: '食べるのに集中、会話は後で', type: 'speed' },
      { text: '食べながら少し', type: 'quick' },
      { text: '会話を楽しみながら', type: 'normal' },
      { text: '会話がメイン、食事は二の次', type: 'slow' },
    ],
  },
  {
    id: 9,
    text: 'ビュッフェでの食べ方は？',
    options: [
      { text: '元を取るため高速で', type: 'speed' },
      { text: '効率よく回転', type: 'quick' },
      { text: '好きなものをゆっくり', type: 'normal' },
      { text: 'のんびり楽しむ', type: 'slow' },
    ],
  },
  {
    id: 10,
    text: '食事で大切にしていることは？',
    options: [
      { text: '時間効率', type: 'speed' },
      { text: 'サクッと終わらせること', type: 'quick' },
      { text: '美味しく食べること', type: 'normal' },
      { text: '食事の時間を楽しむこと', type: 'slow' },
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
  speed: {
    type: 'speed',
    title: '超高速イーター',
    emoji: '⚡',
    percentage: '食事スピード MAX',
    description: '食べるのが驚くほど早い！気づけば完食。忙しい現代人の象徴のような早食いマスター。時間を無駄にしない効率派。',
    characteristics: ['効率重視', 'せっかち', '時間にシビア', '仕事人間', 'エネルギッシュ'],
    advice: 'よく噛んで食べると消化に良いですよ！たまにはスローダウンを♪',
  },
  quick: {
    type: 'quick',
    title: 'テキパキイーター',
    emoji: '🏃',
    percentage: '食事スピード 75%',
    description: '食べるのは早め。だらだら食べるより、サッと済ませたいタイプ。でも早すぎるわけでもない、ほどよいスピード派。',
    characteristics: ['効率的', 'テキパキ', 'メリハリ上手', '行動派', '時間管理上手'],
    advice: 'ちょうどいいペース！でも味わう余裕も忘れずに♪',
  },
  normal: {
    type: 'normal',
    title: 'バランスイーター',
    emoji: '🍽️',
    percentage: '食事スピード 50%',
    description: '普通のペースで食事を楽しむ。早すぎず遅すぎず、ちょうどいいバランス。味わいながら、会話も楽しむスタイル。',
    characteristics: ['バランス型', '落ち着きがある', '協調性', '健康的', '食事を楽しむ'],
    advice: '理想的なペース！その調子で食事を楽しみましょう♪',
  },
  slow: {
    type: 'slow',
    title: 'のんびりイーター',
    emoji: '🐢',
    percentage: '食事スピード 20%',
    description: '食事はゆっくり、じっくり。一口一口を味わい、食事の時間を大切にする。急ぐ必要なんてない、人生を楽しむタイプ。',
    characteristics: ['マイペース', '味覚が繊細', 'リラックス上手', '丁寧', '食を大切にする'],
    advice: '素晴らしいスローライフ！でも冷めちゃう前に食べ終わりましょうね♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { speed: 0, quick: 0, normal: 0, slow: 0 };

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
