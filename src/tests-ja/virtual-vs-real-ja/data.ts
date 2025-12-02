// バーチャルvsリアル診断 (가상 vs 현실 테스트)
export const questions = [
  {
    id: 1,
    text: '友達との交流で好きなのは？',
    options: [
      { text: 'オンラインでいつでも繋がれる', type: 'virtual' },
      { text: 'オンライン・オフラインどちらも', type: 'hybrid' },
      { text: 'たまにオンライン、基本リアル', type: 'balanced' },
      { text: '直接会って話すのが一番', type: 'real' },
    ],
  },
  {
    id: 2,
    text: '買い物をするなら？',
    options: [
      { text: 'ほぼ全てネット通販', type: 'virtual' },
      { text: 'ネットと店舗を使い分け', type: 'hybrid' },
      { text: '基本は店舗、必要に応じてネット', type: 'balanced' },
      { text: '実際に見て買いたい', type: 'real' },
    ],
  },
  {
    id: 3,
    text: '仕事や勉強の環境は？',
    options: [
      { text: 'リモート・オンラインが理想', type: 'virtual' },
      { text: 'ハイブリッドがベスト', type: 'hybrid' },
      { text: 'オフィス・学校がメイン', type: 'balanced' },
      { text: '対面でないと捗らない', type: 'real' },
    ],
  },
  {
    id: 4,
    text: '趣味の楽しみ方は？',
    options: [
      { text: 'ゲーム・動画・SNSなどデジタル', type: 'virtual' },
      { text: 'デジタルとリアル半々', type: 'hybrid' },
      { text: 'リアル多め、時々デジタル', type: 'balanced' },
      { text: 'スポーツや外出などリアル', type: 'real' },
    ],
  },
  {
    id: 5,
    text: 'イベントへの参加は？',
    options: [
      { text: 'オンラインイベントで十分', type: 'virtual' },
      { text: 'オンライン・リアル両方参加', type: 'hybrid' },
      { text: '可能ならリアル参加', type: 'balanced' },
      { text: '現地の雰囲気が好き', type: 'real' },
    ],
  },
  {
    id: 6,
    text: 'コミュニケーション手段は？',
    options: [
      { text: 'テキスト・チャットが楽', type: 'virtual' },
      { text: 'ビデオ通話もよく使う', type: 'hybrid' },
      { text: '電話が多い', type: 'balanced' },
      { text: '直接会って話したい', type: 'real' },
    ],
  },
  {
    id: 7,
    text: '新しい人との出会いは？',
    options: [
      { text: 'SNSやオンラインで', type: 'virtual' },
      { text: 'オンラインで知り合いリアルで会う', type: 'hybrid' },
      { text: '紹介やイベントで', type: 'balanced' },
      { text: '直接の出会いを大切に', type: 'real' },
    ],
  },
  {
    id: 8,
    text: '旅行の計画は？',
    options: [
      { text: 'バーチャル観光で満足することも', type: 'virtual' },
      { text: 'ネットで調べて現地へ', type: 'hybrid' },
      { text: '行ってから探索', type: 'balanced' },
      { text: '実際に行く体験が全て', type: 'real' },
    ],
  },
  {
    id: 9,
    text: '情報収集の方法は？',
    options: [
      { text: 'ネット検索・SNSがメイン', type: 'virtual' },
      { text: 'ネットと人の話両方', type: 'hybrid' },
      { text: '人から聞くことが多い', type: 'balanced' },
      { text: '本や人からの情報重視', type: 'real' },
    ],
  },
  {
    id: 10,
    text: '理想の生活スタイルは？',
    options: [
      { text: 'デジタルノマド的な自由さ', type: 'virtual' },
      { text: 'デジタルとリアルのいいとこ取り', type: 'hybrid' },
      { text: 'リアル基盤でデジタル活用', type: 'balanced' },
      { text: '人や自然に囲まれた生活', type: 'real' },
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
  lifestyleAdvice: string;
}> = {
  virtual: {
    type: 'virtual',
    title: 'バーチャル派',
    emoji: '🌐',
    percentage: 'バーチャル志向 90%',
    description: 'デジタル空間こそ居場所！オンラインでの交流や活動に慣れ親しみ、バーチャルの可能性を最大限に活かしています。',
    characteristics: ['デジタルネイティブ', '効率重視', '場所を選ばない', 'テック好き', 'グローバル'],
    lifestyleAdvice: '時々リアルな体験で五感を刺激してみては',
  },
  hybrid: {
    type: 'hybrid',
    title: 'ハイブリッド型',
    emoji: '⚡',
    percentage: 'バランス度 75%',
    description: 'バーチャルとリアルのいいとこ取り！状況に応じて使い分け、両方の世界を楽しんでいます。現代的なバランス感覚の持ち主。',
    characteristics: ['柔軟性', '適応力', '使い分け上手', 'バランス型', '現代的'],
    lifestyleAdvice: 'その柔軟さを活かして新しい体験に挑戦してみて',
  },
  balanced: {
    type: 'balanced',
    title: 'リアル重視型',
    emoji: '🌿',
    percentage: 'リアル志向 70%',
    description: 'リアルな体験を基盤としながら、デジタルも必要に応じて活用。人や場所との直接的なつながりを大切にしています。',
    characteristics: ['実体験重視', '人間関係大切', '堅実', '五感重視', '本質派'],
    lifestyleAdvice: 'デジタルツールで効率化できる部分も探してみては',
  },
  real: {
    type: 'real',
    title: 'リアル至上主義',
    emoji: '🤝',
    percentage: 'リアル志向 95%',
    description: '直接会って、見て、触れることこそ本物！デジタルに頼りすぎない、人間らしさを大切にする生き方です。',
    characteristics: ['五感重視', '対面派', '人間味', 'アナログ', '本物志向'],
    lifestyleAdvice: 'デジタルの便利さも少しだけ取り入れてみると世界が広がるかも',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { virtual: 0, hybrid: 0, balanced: 0, real: 0 };

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
