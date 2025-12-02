// 音楽趣味診断 (음악 취향 테스트)
export const questions = [
  {
    id: 1,
    text: '音楽を聴くシチュエーションは？',
    options: [
      { text: '一人で集中して聴く', type: 'deep' },
      { text: '友達とライブやフェスで', type: 'party' },
      { text: '作業中のBGMとして', type: 'casual' },
      { text: '気分を変えたい時', type: 'mood' },
    ],
  },
  {
    id: 2,
    text: '音楽で重視するのは？',
    options: [
      { text: '歌詞の深さやメッセージ', type: 'deep' },
      { text: 'ノリの良さ、盛り上がり', type: 'party' },
      { text: 'メロディの心地よさ', type: 'casual' },
      { text: '感情を揺さぶる力', type: 'mood' },
    ],
  },
  {
    id: 3,
    text: '新しい音楽との出会い方は？',
    options: [
      { text: 'アーティストを深掘りする', type: 'deep' },
      { text: '友達からのおすすめ', type: 'party' },
      { text: 'プレイリストから', type: 'casual' },
      { text: '直感で選ぶ', type: 'mood' },
    ],
  },
  {
    id: 4,
    text: '好きなアーティストへのこだわりは？',
    options: [
      { text: '全アルバム制覇、ライブ必須', type: 'deep' },
      { text: 'みんなで盛り上がれれば', type: 'party' },
      { text: '良い曲だけ聴ければOK', type: 'casual' },
      { text: 'その時の気分次第', type: 'mood' },
    ],
  },
  {
    id: 5,
    text: 'カラオケで選ぶ曲は？',
    options: [
      { text: 'こだわりの名曲', type: 'deep' },
      { text: 'みんなが知ってる盛り上がる曲', type: 'party' },
      { text: '歌いやすい曲', type: 'casual' },
      { text: 'その時の気分で', type: 'mood' },
    ],
  },
  {
    id: 6,
    text: 'ライブに行くなら？',
    options: [
      { text: '好きなアーティストの単独ライブ', type: 'deep' },
      { text: '大型フェス', type: 'party' },
      { text: 'カフェやバーでの生演奏', type: 'casual' },
      { text: '気が向いた時に', type: 'mood' },
    ],
  },
  {
    id: 7,
    text: '音楽にかける時間は？',
    options: [
      { text: '毎日必ず聴く、生活の一部', type: 'deep' },
      { text: '友達といる時に聴く', type: 'party' },
      { text: '何かしながら流す', type: 'casual' },
      { text: '聴きたい時だけ', type: 'mood' },
    ],
  },
  {
    id: 8,
    text: 'プレイリストの作り方は？',
    options: [
      { text: 'アーティスト別・アルバム別', type: 'deep' },
      { text: 'パーティー用・ドライブ用', type: 'party' },
      { text: '作らない、既存のを使う', type: 'casual' },
      { text: 'シーン別・気分別', type: 'mood' },
    ],
  },
  {
    id: 9,
    text: '音楽の話をする時は？',
    options: [
      { text: 'アーティストやアルバムについて熱く語る', type: 'deep' },
      { text: '「この曲いいよね！」と盛り上がる', type: 'party' },
      { text: 'あまり詳しく話さない', type: 'casual' },
      { text: 'その時聴いている曲の話', type: 'mood' },
    ],
  },
  {
    id: 10,
    text: '音楽がない生活は？',
    options: [
      { text: '考えられない', type: 'deep' },
      { text: '寂しいけど、友達がいればOK', type: 'party' },
      { text: '別に困らない', type: 'casual' },
      { text: 'その時による', type: 'mood' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  musicStyle: string[];
  characteristics: string[];
  recommendations: string[];
}> = {
  deep: {
    type: 'deep',
    title: '音楽マニア探求型',
    emoji: '🎧',
    description: 'あなたは音楽を深く愛するマニアタイプ！アーティストのバックグラウンドから歌詞の意味まで、とことん探求します。音楽は人生そのもの。',
    musicStyle: ['深く掘り下げる', 'アーティスト愛', '歌詞重視'],
    characteristics: ['知識が豊富', 'こだわりが強い', '音楽の話が止まらない'],
    recommendations: ['アルバムを通して聴く', '音楽雑誌をチェック', 'アーティストのルーツを辿る'],
  },
  party: {
    type: 'party',
    title: 'パーティー盛り上げ型',
    emoji: '🎉',
    description: 'あなたは音楽で盛り上がるのが好きなパーティータイプ！友達と一緒にライブやフェスを楽しみ、音楽を通じて繋がります。社交的で明るいあなたにぴったり！',
    musicStyle: ['ノリ重視', 'みんなで楽しむ', 'フェス好き'],
    characteristics: ['社交的', '盛り上げ上手', '流行に敏感'],
    recommendations: ['フェスに参加', 'カラオケで盛り上がる', '友達とライブへ'],
  },
  casual: {
    type: 'casual',
    title: 'カジュアルリスナー型',
    emoji: '🎵',
    description: 'あなたは音楽をBGMとして楽しむカジュアルタイプ！こだわりすぎず、心地よい音楽を日常に取り入れています。バランスの取れた音楽との付き合い方。',
    musicStyle: ['BGMとして', '心地よさ重視', 'こだわりなし'],
    characteristics: ['リラックスして聴く', '幅広く受け入れる', '押し付けない'],
    recommendations: ['プレイリストを活用', 'カフェで音楽を楽しむ', '新しいジャンルにも挑戦'],
  },
  mood: {
    type: 'mood',
    title: '感情シンクロ型',
    emoji: '🌈',
    description: 'あなたは気分で音楽を選ぶ感情重視タイプ！その時の感情に寄り添う音楽を求め、音楽で気持ちをコントロールします。感受性が豊かなあなたらしい聴き方。',
    musicStyle: ['気分で選ぶ', '感情重視', 'シーン別'],
    characteristics: ['感受性が豊か', '音楽で気分転換', '幅広い好み'],
    recommendations: ['気分別プレイリスト', '新しい曲を探す旅', '音楽日記をつける'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { deep: 0, party: 0, casual: 0, mood: 0 };

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
