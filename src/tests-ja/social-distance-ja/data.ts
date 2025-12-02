// 対人距離感診断 (사회적 거리감 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '初対面の人と話す時、どのくらいの距離を取る？',
    options: [
      { text: 'かなり近い、すぐ仲良くなりたい', type: 'close' },
      { text: '普通の距離、様子を見ながら', type: 'balanced' },
      { text: '少し距離を置く、慎重に', type: 'careful' },
      { text: 'できるだけ離れていたい', type: 'distant' },
    ],
  },
  {
    id: 2,
    text: '友達から急に連絡が来たら？',
    options: [
      { text: '嬉しい！すぐ返事する', type: 'close' },
      { text: '普通に返事する', type: 'balanced' },
      { text: '内容による、少し考えてから返す', type: 'careful' },
      { text: '面倒くさい、後で返すかも', type: 'distant' },
    ],
  },
  {
    id: 3,
    text: '職場や学校での人間関係は？',
    options: [
      { text: 'みんなと仲良くしたい', type: 'close' },
      { text: '適度に付き合う', type: 'balanced' },
      { text: '必要最低限でいい', type: 'careful' },
      { text: '仕事の話以外はしたくない', type: 'distant' },
    ],
  },
  {
    id: 4,
    text: '誰かに悩みを相談される時は？',
    options: [
      { text: '親身になって聞く、一緒に考える', type: 'close' },
      { text: '聞くけど、適度にアドバイス', type: 'balanced' },
      { text: '聞くけど、深入りはしない', type: 'careful' },
      { text: '正直、他人の悩みは聞きたくない', type: 'distant' },
    ],
  },
  {
    id: 5,
    text: '週末の予定、友達に誘われたら？',
    options: [
      { text: '喜んで参加！', type: 'close' },
      { text: '予定がなければ行く', type: 'balanced' },
      { text: '内容による、断ることも', type: 'careful' },
      { text: '一人の時間が大事、断りがち', type: 'distant' },
    ],
  },
  {
    id: 6,
    text: 'SNSで友達の投稿を見たら？',
    options: [
      { text: '積極的にいいね、コメントする', type: 'close' },
      { text: '良いと思ったらいいねする', type: 'balanced' },
      { text: '見るだけが多い', type: 'careful' },
      { text: 'そもそもあまり見ない', type: 'distant' },
    ],
  },
  {
    id: 7,
    text: '新しいグループに入った時は？',
    options: [
      { text: '自分から話しかける', type: 'close' },
      { text: '話しかけられたら応じる', type: 'balanced' },
      { text: 'しばらく様子を見る', type: 'careful' },
      { text: 'なるべく目立たないようにする', type: 'distant' },
    ],
  },
  {
    id: 8,
    text: '友達との連絡頻度は？',
    options: [
      { text: 'ほぼ毎日やり取り', type: 'close' },
      { text: '週に数回', type: 'balanced' },
      { text: '用事がある時だけ', type: 'careful' },
      { text: '月に1回あるかないか', type: 'distant' },
    ],
  },
  {
    id: 9,
    text: '人と長時間一緒にいると？',
    options: [
      { text: '楽しい、もっといたい', type: 'close' },
      { text: '普通、特に疲れない', type: 'balanced' },
      { text: '少し疲れる、一人の時間が欲しくなる', type: 'careful' },
      { text: 'かなり疲れる、早く帰りたい', type: 'distant' },
    ],
  },
  {
    id: 10,
    text: '理想の人間関係は？',
    options: [
      { text: '深い絆で結ばれた関係', type: 'close' },
      { text: '程よい距離感の関係', type: 'balanced' },
      { text: 'お互いを尊重した関係', type: 'careful' },
      { text: '必要な時だけ関わる関係', type: 'distant' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  distanceLevel: string;
  description: string;
  characteristics: string[];
  advice: string[];
}> = {
  close: {
    type: 'close',
    title: '超フレンドリー型',
    emoji: '🤗💕',
    distanceLevel: '距離感：★☆☆☆☆（とても近い）',
    description: '人が大好きで、誰とでもすぐ仲良くなれるタイプ。温かい雰囲気で周りを包み込む、天性の社交家です。人との繋がりがあなたのエネルギー源！',
    characteristics: ['社交的', '親しみやすい', '話し上手', '共感力が高い'],
    advice: ['相手のペースも大切に', '一人の時間も時々必要', '深い関係を大切に'],
  },
  balanced: {
    type: 'balanced',
    title: 'バランス型',
    emoji: '😊✨',
    distanceLevel: '距離感：★★☆☆☆（ちょうどいい）',
    description: '人との距離感を上手にコントロールできるタイプ。状況に応じて適切な距離を取れる、バランス感覚の持ち主です。',
    characteristics: ['適応力がある', '空気が読める', '安定している', '付き合いやすい'],
    advice: ['そのバランス感覚を活かして', '新しい出会いにもオープンに', '自分らしさを大切に'],
  },
  careful: {
    type: 'careful',
    title: '慎重派型',
    emoji: '🤔💭',
    distanceLevel: '距離感：★★★☆☆（やや距離を置く）',
    description: '人との関係に慎重なタイプ。信頼できる人には心を開きますが、そこに至るまで時間がかかります。質の高い人間関係を大切にします。',
    characteristics: ['慎重', '観察力がある', '信頼を大切にする', '深い関係を好む'],
    advice: ['少しずつ心を開いてみて', '最初の一歩を勇気を持って', '良い出会いを逃さないで'],
  },
  distant: {
    type: 'distant',
    title: '一人時間優先型',
    emoji: '🏠🌙',
    distanceLevel: '距離感：★★★★★（距離を置く）',
    description: '自分の世界を大切にするタイプ。人付き合いより一人の時間を優先します。無理に社交的になる必要はありませんが、本当に大切な人との関係は維持しましょう。',
    characteristics: ['自立している', 'マイペース', '一人が好き', '自分の世界がある'],
    advice: ['信頼できる人には心を開いて', '孤立しすぎないように', '自分のペースを大切に'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { close: 0, balanced: 0, careful: 0, distant: 0 };

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
