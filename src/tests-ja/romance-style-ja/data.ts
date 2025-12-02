// 恋愛傾向診断 (연애 스타일 테스트)
export const questions = [
  {
    id: 1,
    text: '好きな人ができたら、どうする？',
    options: [
      { text: '積極的にアプローチ', type: 'active' },
      { text: 'じっくり距離を縮める', type: 'steady' },
      { text: '相手からのアプローチを待つ', type: 'passive' },
      { text: '運命に任せる', type: 'dreamy' },
    ],
  },
  {
    id: 2,
    text: '理想のデートは？',
    options: [
      { text: 'アクティブに出かける', type: 'active' },
      { text: 'ゆっくりカフェでお喋り', type: 'steady' },
      { text: '相手の行きたい場所', type: 'passive' },
      { text: 'ロマンチックな場所', type: 'dreamy' },
    ],
  },
  {
    id: 3,
    text: '連絡の頻度は？',
    options: [
      { text: '毎日でも話したい', type: 'active' },
      { text: '適度に連絡を取りたい', type: 'steady' },
      { text: '相手のペースに合わせる', type: 'passive' },
      { text: '気持ちが通じていれば頻度は気にしない', type: 'dreamy' },
    ],
  },
  {
    id: 4,
    text: '嫉妬心について',
    options: [
      { text: '正直に伝える', type: 'active' },
      { text: '少しは感じるけど我慢', type: 'steady' },
      { text: 'あまり感じない', type: 'passive' },
      { text: '相手を信じたい', type: 'dreamy' },
    ],
  },
  {
    id: 5,
    text: '告白するなら？',
    options: [
      { text: 'ストレートに気持ちを伝える', type: 'active' },
      { text: 'タイミングを見て', type: 'steady' },
      { text: '告白は相手からがいい', type: 'passive' },
      { text: '特別な演出で', type: 'dreamy' },
    ],
  },
  {
    id: 6,
    text: '恋人との喧嘩、どう対処する？',
    options: [
      { text: 'すぐに話し合う', type: 'active' },
      { text: '冷静になってから話す', type: 'steady' },
      { text: '相手が落ち着くまで待つ', type: 'passive' },
      { text: '愛があれば乗り越えられる', type: 'dreamy' },
    ],
  },
  {
    id: 7,
    text: '好きな人のタイプは？',
    options: [
      { text: '一緒にいて楽しい人', type: 'active' },
      { text: '信頼できる人', type: 'steady' },
      { text: 'リードしてくれる人', type: 'passive' },
      { text: '運命を感じる人', type: 'dreamy' },
    ],
  },
  {
    id: 8,
    text: '恋愛で一番大切なことは？',
    options: [
      { text: '情熱', type: 'active' },
      { text: '信頼', type: 'steady' },
      { text: '安心感', type: 'passive' },
      { text: '運命', type: 'dreamy' },
    ],
  },
  {
    id: 9,
    text: '付き合う前の期間は？',
    options: [
      { text: '短くていい、すぐ付き合いたい', type: 'active' },
      { text: 'しっかり知ってから', type: 'steady' },
      { text: '相手に任せる', type: 'passive' },
      { text: '自然な流れで', type: 'dreamy' },
    ],
  },
  {
    id: 10,
    text: '恋愛における自分の強みは？',
    options: [
      { text: '行動力と情熱', type: 'active' },
      { text: '誠実さと安定感', type: 'steady' },
      { text: '優しさと包容力', type: 'passive' },
      { text: '純粋さとロマンチック', type: 'dreamy' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  loveStyle: string;
  description: string;
  characteristics: string[];
  compatibility: string;
}> = {
  active: {
    type: 'active',
    title: '情熱的アタッカー',
    emoji: '🔥💘',
    loveStyle: '積極度：★★★★★',
    description: '恋に落ちたら一直線！積極的にアプローチして、情熱的な恋愛をするタイプです。好きな気持ちを隠さず、ストレートに伝えられる素直さが魅力。',
    characteristics: ['積極的', '情熱的', 'ストレート', '行動力がある'],
    compatibility: '受け身タイプや穏やかなタイプと相性◎',
  },
  steady: {
    type: 'steady',
    title: '堅実ラバー',
    emoji: '🏠💕',
    loveStyle: '積極度：★★★☆☆',
    description: 'じっくりと信頼関係を築いていくタイプ。焦らず、着実に距離を縮め、長続きする恋愛ができます。安定した幸せを求める堅実派。',
    characteristics: ['堅実', '誠実', '信頼できる', '安定志向'],
    compatibility: '同じ価値観を持つ人と相性◎',
  },
  passive: {
    type: 'passive',
    title: '受け身ロマンス',
    emoji: '🌸💗',
    loveStyle: '積極度：★★☆☆☆',
    description: '相手からのアプローチを待つタイプ。控えめだけど、好きになったら一途に尽くします。優しさと包容力で相手を癒す存在になれるでしょう。',
    characteristics: ['控えめ', '優しい', '一途', '包容力がある'],
    compatibility: '積極的でリードしてくれる人と相性◎',
  },
  dreamy: {
    type: 'dreamy',
    title: 'ロマンチスト',
    emoji: '✨🦋',
    loveStyle: '積極度：★★★☆☆',
    description: '運命の出会いを信じるロマンチスト。理想の恋愛を追い求め、特別な瞬間を大切にします。ドラマチックな恋愛に憧れる純粋な心の持ち主。',
    characteristics: ['ロマンチック', '理想主義', '純粋', '感性豊か'],
    compatibility: '同じロマンチストや安定感のある人と相性◎',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { active: 0, steady: 0, passive: 0, dreamy: 0 };

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
