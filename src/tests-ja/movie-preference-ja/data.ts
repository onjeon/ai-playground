// 映画好みタイプ診断 (영화 취향 테스트)
export const questions = [
  {
    id: 1,
    text: '映画を見る時、何を重視する？',
    options: [
      { text: 'ストーリーの深さ', type: 'story' },
      { text: '映像美やアクション', type: 'visual' },
      { text: '感動や泣けるか', type: 'emotional' },
      { text: '笑えるかどうか', type: 'comedy' },
    ],
  },
  {
    id: 2,
    text: '好きな映画のジャンルは？',
    options: [
      { text: 'ミステリー・サスペンス', type: 'story' },
      { text: 'SF・アクション', type: 'visual' },
      { text: 'ヒューマンドラマ・恋愛', type: 'emotional' },
      { text: 'コメディ', type: 'comedy' },
    ],
  },
  {
    id: 3,
    text: '映画を見た後は？',
    options: [
      { text: '考察や解釈を楽しむ', type: 'story' },
      { text: '映像や音楽の余韻に浸る', type: 'visual' },
      { text: '感動の余韻に浸る', type: 'emotional' },
      { text: '友達と笑い話に', type: 'comedy' },
    ],
  },
  {
    id: 4,
    text: '映画選びの基準は？',
    options: [
      { text: '監督や脚本家', type: 'story' },
      { text: 'VFXや撮影技術', type: 'visual' },
      { text: '口コミや評価', type: 'emotional' },
      { text: '予告編の面白さ', type: 'comedy' },
    ],
  },
  {
    id: 5,
    text: '映画館で見たいのは？',
    options: [
      { text: '話題作・賞レース作品', type: 'story' },
      { text: 'IMAX・大画面で見たい作品', type: 'visual' },
      { text: '一人でじっくり見たい作品', type: 'emotional' },
      { text: '友達とワイワイ見たい作品', type: 'comedy' },
    ],
  },
  {
    id: 6,
    text: '繰り返し見たくなる映画は？',
    options: [
      { text: '伏線や細部を確認したい映画', type: 'story' },
      { text: '映像を堪能したい映画', type: 'visual' },
      { text: '何度見ても泣ける映画', type: 'emotional' },
      { text: '何度見ても笑える映画', type: 'comedy' },
    ],
  },
  {
    id: 7,
    text: '映画の情報収集は？',
    options: [
      { text: '映画評論やレビューサイト', type: 'story' },
      { text: 'トレーラーや映像特典', type: 'visual' },
      { text: '友達のおすすめ', type: 'emotional' },
      { text: 'SNSでバズっている作品', type: 'comedy' },
    ],
  },
  {
    id: 8,
    text: '苦手な映画の要素は？',
    options: [
      { text: 'ストーリーが薄い', type: 'story' },
      { text: '映像がチープ', type: 'visual' },
      { text: '冷たい・共感できない', type: 'emotional' },
      { text: '暗すぎる・重すぎる', type: 'comedy' },
    ],
  },
  {
    id: 9,
    text: '映画に求める体験は？',
    options: [
      { text: '知的好奇心を刺激される', type: 'story' },
      { text: '圧倒される映像体験', type: 'visual' },
      { text: '心を動かされる', type: 'emotional' },
      { text: '楽しい時間を過ごす', type: 'comedy' },
    ],
  },
  {
    id: 10,
    text: '理想の映画デートは？',
    options: [
      { text: '見た後に語り合える映画', type: 'story' },
      { text: '一緒に興奮できる映画', type: 'visual' },
      { text: '一緒に感動を分かち合える映画', type: 'emotional' },
      { text: '一緒に笑える映画', type: 'comedy' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  movieStyle: string[];
  recommendedGenres: string[];
  watchingTips: string[];
}> = {
  story: {
    type: 'story',
    title: 'ストーリー重視の映画通',
    emoji: '📖',
    description: 'あなたは深いストーリーと伏線を楽しむ映画通タイプ！考察が好きで、見た後に語り合うのが醍醐味。知的好奇心が旺盛なあなたにぴったり。',
    movieStyle: ['ストーリー重視', '考察好き', '監督・脚本にこだわり'],
    recommendedGenres: ['ミステリー', 'サスペンス', 'SF', 'ノワール'],
    watchingTips: ['ネタバレに注意', '二度見で伏線回収', '考察サイトをチェック'],
  },
  visual: {
    type: 'visual',
    title: '映像美堪能タイプ',
    emoji: '🎬',
    description: 'あなたは映像と音響に魅了されるタイプ！大画面で圧倒される体験を求め、VFXや撮影技術にも注目。映画館での鑑賞がベスト。',
    movieStyle: ['映像美重視', '大画面志向', '技術に注目'],
    recommendedGenres: ['SF', 'アクション', 'ファンタジー', 'ドキュメンタリー'],
    watchingTips: ['IMAXや4DXで体験', 'サウンドにもこだわって', '特典映像もチェック'],
  },
  emotional: {
    type: 'emotional',
    title: '感動重視の涙腺タイプ',
    emoji: '😭',
    description: 'あなたは心を動かされる映画を愛するタイプ！感動や涙を求め、登場人物に感情移入します。映画で泣くのは至福の時間。',
    movieStyle: ['感動重視', '感情移入', '泣ける映画好き'],
    recommendedGenres: ['ヒューマンドラマ', '恋愛', '家族もの', '実話ベース'],
    watchingTips: ['ティッシュを用意', '一人でゆっくり鑑賞', '余韻を大切に'],
  },
  comedy: {
    type: 'comedy',
    title: '笑い重視のエンタメタイプ',
    emoji: '😂',
    description: 'あなたは楽しく笑える映画を愛するタイプ！映画は娯楽、難しいことは考えず純粋に楽しみたい。友達と一緒に見るのが最高！',
    movieStyle: ['笑い重視', 'エンタメ志向', '友達と鑑賞'],
    recommendedGenres: ['コメディ', 'アニメ', 'アドベンチャー', 'ファミリー'],
    watchingTips: ['友達と一緒に', 'ポップコーン必須', 'SNSでシェア'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { story: 0, visual: 0, emotional: 0, comedy: 0 };

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
