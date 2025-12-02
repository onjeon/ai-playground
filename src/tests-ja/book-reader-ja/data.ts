// 読書タイプ診断 (독서 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '本を選ぶ時の基準は？',
    options: [
      { text: '知識や学びになるか', type: 'intellectual' },
      { text: '物語として面白いか', type: 'story' },
      { text: '話題になっているか', type: 'trend' },
      { text: '自己成長につながるか', type: 'growth' },
    ],
  },
  {
    id: 2,
    text: 'よく読むジャンルは？',
    options: [
      { text: 'ノンフィクション・専門書', type: 'intellectual' },
      { text: '小説・ミステリー', type: 'story' },
      { text: '話題のベストセラー', type: 'trend' },
      { text: 'ビジネス書・自己啓発', type: 'growth' },
    ],
  },
  {
    id: 3,
    text: '読書する時間帯は？',
    options: [
      { text: '集中できる時にじっくり', type: 'intellectual' },
      { text: '寝る前のリラックスタイム', type: 'story' },
      { text: '通勤・隙間時間', type: 'trend' },
      { text: '朝の習慣として', type: 'growth' },
    ],
  },
  {
    id: 4,
    text: '本を読む目的は？',
    options: [
      { text: '知識を深めるため', type: 'intellectual' },
      { text: '楽しむため・現実逃避', type: 'story' },
      { text: '話題についていくため', type: 'trend' },
      { text: '自分を高めるため', type: 'growth' },
    ],
  },
  {
    id: 5,
    text: '読んだ本は？',
    options: [
      { text: 'メモを取り、何度も読み返す', type: 'intellectual' },
      { text: '好きな本は繰り返し読む', type: 'story' },
      { text: '読んだら次へ', type: 'trend' },
      { text: '実践に活かす', type: 'growth' },
    ],
  },
  {
    id: 6,
    text: '本の入手方法は？',
    options: [
      { text: '専門書店や図書館', type: 'intellectual' },
      { text: '本屋で気になった本', type: 'story' },
      { text: 'ランキングやおすすめから', type: 'trend' },
      { text: 'レビューを参考に', type: 'growth' },
    ],
  },
  {
    id: 7,
    text: '読書のペースは？',
    options: [
      { text: 'じっくり時間をかける', type: 'intellectual' },
      { text: '物語に没頭して一気読み', type: 'story' },
      { text: '速読・効率重視', type: 'trend' },
      { text: '必要な部分を選んで読む', type: 'growth' },
    ],
  },
  {
    id: 8,
    text: '読書中に何を考える？',
    options: [
      { text: '内容を深く分析する', type: 'intellectual' },
      { text: '登場人物に感情移入', type: 'story' },
      { text: '他の人の感想が気になる', type: 'trend' },
      { text: 'どう活かせるか考える', type: 'growth' },
    ],
  },
  {
    id: 9,
    text: '本をおすすめする時は？',
    options: [
      { text: '内容を詳しく解説する', type: 'intellectual' },
      { text: '面白かった！と熱く語る', type: 'story' },
      { text: '今話題だよと紹介', type: 'trend' },
      { text: 'この本で変わったと伝える', type: 'growth' },
    ],
  },
  {
    id: 10,
    text: '理想の読書ライフは？',
    options: [
      { text: '専門分野を極める', type: 'intellectual' },
      { text: '好きな作家の全作品読破', type: 'story' },
      { text: '幅広くいろんな本を読む', type: 'trend' },
      { text: '読書で人生を変える', type: 'growth' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  readingStyle: string[];
  recommendedBooks: string[];
  tips: string[];
}> = {
  intellectual: {
    type: 'intellectual',
    title: '知識探求型リーダー',
    emoji: '🧠',
    description: 'あなたは知識を深めることに喜びを感じる知的好奇心旺盛なタイプ！専門書やノンフィクションを好み、読書で世界を広げます。',
    readingStyle: ['深く読み込む', '知識を積み上げる', 'メモを取る'],
    recommendedBooks: ['専門書', 'ノンフィクション', '科学書', '歴史書'],
    tips: ['アウトプットも大切に', '難しい本ばかりに偏らないで', 'たまには娯楽も'],
  },
  story: {
    type: 'story',
    title: '物語没入型リーダー',
    emoji: '📚',
    description: 'あなたは物語の世界に没頭するのが好きなタイプ！登場人物に感情移入し、本の世界を旅します。読書は至福の時間。',
    readingStyle: ['物語に没頭', '感情移入', '繰り返し読む'],
    recommendedBooks: ['小説', 'ミステリー', 'ファンタジー', '文学作品'],
    tips: ['お気に入りの作家を見つけて', '読書会に参加してみて', '感想を書いてみよう'],
  },
  trend: {
    type: 'trend',
    title: 'トレンドキャッチ型リーダー',
    emoji: '📊',
    description: 'あなたは話題の本をチェックするトレンド型リーダー！幅広いジャンルを読み、時代の空気を掴みます。効率的な読書スタイル。',
    readingStyle: ['幅広く読む', '話題作をチェック', '効率重視'],
    recommendedBooks: ['ベストセラー', '話題作', 'オーディオブック', '要約本'],
    tips: ['深く読む本も選んで', '自分の好みも大切に', '読みっぱなしにしないで'],
  },
  growth: {
    type: 'growth',
    title: '自己成長型リーダー',
    emoji: '🌱',
    description: 'あなたは読書を自己成長のツールとして活用するタイプ！学んだことを実生活に活かし、読書で人生を変えていきます。',
    readingStyle: ['実践に活かす', '行動に繋げる', '成長を目指す'],
    recommendedBooks: ['ビジネス書', '自己啓発', '伝記', 'ハウツー本'],
    tips: ['読むだけで終わらせないで', '楽しむ読書も大切', '行動とセットで'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { intellectual: 0, story: 0, trend: 0, growth: 0 };

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
