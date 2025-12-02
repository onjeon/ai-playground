// ノスタルジア度診断
export const questions = [
  {
    id: 1,
    text: '昔の写真を見ると？',
    options: [
      { text: '涙が出そうになる', type: 'deep' },
      { text: '懐かしくて温かい気持ちになる', type: 'warm' },
      { text: '「こんなこともあったな」と思う', type: 'mild' },
      { text: '特に何も感じない', type: 'low' },
    ],
  },
  {
    id: 2,
    text: '昔よく聴いた曲を聴くと？',
    options: [
      { text: '当時の記憶が鮮明に蘇る', type: 'deep' },
      { text: '懐かしい気持ちになる', type: 'warm' },
      { text: '「あの頃好きだったな」と思う', type: 'mild' },
      { text: '普通に聴く', type: 'low' },
    ],
  },
  {
    id: 3,
    text: '故郷に帰ると？',
    options: [
      { text: '胸が締め付けられる', type: 'deep' },
      { text: '心が落ち着く', type: 'warm' },
      { text: '懐かしいと感じる', type: 'mild' },
      { text: '特に変わらない', type: 'low' },
    ],
  },
  {
    id: 4,
    text: '「あの頃に戻りたい」と思うことは？',
    options: [
      { text: 'よく思う', type: 'deep' },
      { text: '時々思う', type: 'warm' },
      { text: 'たまに思う', type: 'mild' },
      { text: '思わない', type: 'low' },
    ],
  },
  {
    id: 5,
    text: '思い出の品は？',
    options: [
      { text: '大切に保管している', type: 'deep' },
      { text: 'いくつか持っている', type: 'warm' },
      { text: '少しは残っている', type: 'mild' },
      { text: 'ほとんど捨てた', type: 'low' },
    ],
  },
  {
    id: 6,
    text: '昔の友達と会うと？',
    options: [
      { text: '時間を忘れて話し込む', type: 'deep' },
      { text: '懐かしい話で盛り上がる', type: 'warm' },
      { text: '近況報告が中心', type: 'mild' },
      { text: '特に会いたいと思わない', type: 'low' },
    ],
  },
  {
    id: 7,
    text: '昔流行ったものを見ると？',
    options: [
      { text: '熱く語りたくなる', type: 'deep' },
      { text: '懐かしくて嬉しい', type: 'warm' },
      { text: '「あったね」と思う', type: 'mild' },
      { text: '興味がない', type: 'low' },
    ],
  },
  {
    id: 8,
    text: '記念日や○周年を意識する？',
    options: [
      { text: '必ず覚えている', type: 'deep' },
      { text: '大切な日は覚えている', type: 'warm' },
      { text: 'リマインドされれば思い出す', type: 'mild' },
      { text: 'あまり気にしない', type: 'low' },
    ],
  },
  {
    id: 9,
    text: '「昔は良かった」と感じることは？',
    options: [
      { text: 'よく感じる', type: 'deep' },
      { text: '時々感じる', type: 'warm' },
      { text: 'あまり感じない', type: 'mild' },
      { text: '今の方がいい', type: 'low' },
    ],
  },
  {
    id: 10,
    text: '過去と現在、どちらが大切？',
    options: [
      { text: '過去の積み重ねが今を作る', type: 'deep' },
      { text: '両方大切', type: 'warm' },
      { text: '現在が大切だが過去も尊重', type: 'mild' },
      { text: '現在と未来', type: 'low' },
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
  nostalgiaAdvice: string;
}> = {
  deep: {
    type: 'deep',
    title: '深いノスタルジア型',
    emoji: '🌅',
    percentage: 'ノスタルジア度 95%',
    description: '過去の思い出を深く心に刻むタイプ。昔の記憶が鮮明で、懐かしさに浸ることが多いです。',
    characteristics: ['感傷的', '記憶力抜群', '思い出重視', 'ロマンチック', '感受性豊か'],
    nostalgiaAdvice: '過去も大切だけど、今この瞬間も大切に',
  },
  warm: {
    type: 'warm',
    title: '温かいノスタルジア型',
    emoji: '☀️',
    percentage: 'ノスタルジア度 75%',
    description: '過去の思い出を温かく振り返るタイプ。懐かしさを楽しみながらも、現在も大切にできます。',
    characteristics: ['バランス感覚', '感謝の心', '穏やか', 'ポジティブ', '思い出上手'],
    nostalgiaAdvice: 'その温かさを周りにも分けてあげて',
  },
  mild: {
    type: 'mild',
    title: 'ほどほどノスタルジア型',
    emoji: '🌤️',
    percentage: 'ノスタルジア度 50%',
    description: '過去を振り返ることはあるけれど、執着しないタイプ。適度な距離感で思い出と付き合えます。',
    characteristics: ['現実的', '適度な感傷', 'バランス', '前向き', '柔軟'],
    nostalgiaAdvice: 'たまには昔を振り返る時間も悪くない',
  },
  low: {
    type: 'low',
    title: '未来志向型',
    emoji: '🚀',
    percentage: '未来志向度 90%',
    description: '過去より今と未来を重視するタイプ。ノスタルジアに浸るより、新しいことへの挑戦を好みます。',
    characteristics: ['未来志向', '行動的', '実用的', '前進', '効率重視'],
    nostalgiaAdvice: '時には立ち止まって過去を振り返るのも成長の糧に',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { deep: 0, warm: 0, mild: 0, low: 0 };

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
