// 動画視聴タイプ診断 (영상 시청 유형 테스트)
export const questions = [
  {
    id: 1,
    text: 'よく見る動画のジャンルは？',
    options: [
      { text: 'エンタメ・バラエティ', type: 'entertainment' },
      { text: '学習・ハウツー系', type: 'learner' },
      { text: 'ニュース・ドキュメンタリー', type: 'serious' },
      { text: '癒し・リラックス系', type: 'relaxer' },
    ],
  },
  {
    id: 2,
    text: '動画を見る時間帯は？',
    options: [
      { text: '暇な時はいつでも', type: 'entertainment' },
      { text: '通勤時間や空き時間', type: 'learner' },
      { text: '朝や夜の決まった時間', type: 'serious' },
      { text: '就寝前のリラックスタイム', type: 'relaxer' },
    ],
  },
  {
    id: 3,
    text: '動画の長さの好みは？',
    options: [
      { text: 'ショート動画が好き', type: 'entertainment' },
      { text: '10〜20分程度の解説系', type: 'learner' },
      { text: '長編ドキュメンタリーもOK', type: 'serious' },
      { text: 'BGM的に流せる長さ', type: 'relaxer' },
    ],
  },
  {
    id: 4,
    text: '動画を見ながら何かする？',
    options: [
      { text: 'SNSや他のことも同時に', type: 'entertainment' },
      { text: 'メモを取ることも', type: 'learner' },
      { text: '集中して見る', type: 'serious' },
      { text: '食事やリラックス中に', type: 'relaxer' },
    ],
  },
  {
    id: 5,
    text: 'おすすめに表示される動画は？',
    options: [
      { text: '面白そうなのをどんどん見る', type: 'entertainment' },
      { text: '役立ちそうなのをチェック', type: 'learner' },
      { text: '自分で検索することが多い', type: 'serious' },
      { text: 'お気に入りチャンネル中心', type: 'relaxer' },
    ],
  },
  {
    id: 6,
    text: '倍速再生は使う？',
    options: [
      { text: 'あまり使わない', type: 'entertainment' },
      { text: 'よく使う・時短重視', type: 'learner' },
      { text: '内容による', type: 'serious' },
      { text: '使わない・ゆっくり見たい', type: 'relaxer' },
    ],
  },
  {
    id: 7,
    text: '動画を見終わった後は？',
    options: [
      { text: '次の動画をすぐ再生', type: 'entertainment' },
      { text: '実践してみようと思う', type: 'learner' },
      { text: '内容を振り返る', type: 'serious' },
      { text: 'リフレッシュできた', type: 'relaxer' },
    ],
  },
  {
    id: 8,
    text: '動画配信サービスは？',
    options: [
      { text: 'YouTube中心', type: 'entertainment' },
      { text: 'YouTube+学習系', type: 'learner' },
      { text: 'Netflix等の定額サービス', type: 'serious' },
      { text: '複数使い分け', type: 'relaxer' },
    ],
  },
  {
    id: 9,
    text: '動画を見る理由は？',
    options: [
      { text: '暇つぶし・楽しみ', type: 'entertainment' },
      { text: '知識やスキルを得るため', type: 'learner' },
      { text: '情報収集・教養のため', type: 'serious' },
      { text: 'リラックス・癒し', type: 'relaxer' },
    ],
  },
  {
    id: 10,
    text: '1日の動画視聴時間は？',
    options: [
      { text: '3時間以上', type: 'entertainment' },
      { text: '1〜2時間', type: 'learner' },
      { text: '決めている時間だけ', type: 'serious' },
      { text: '気分次第で変わる', type: 'relaxer' },
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
  recommendedContent: string;
}> = {
  entertainment: {
    type: 'entertainment',
    title: 'エンタメ消費型',
    emoji: '🎬',
    percentage: 'エンタメ度 90%',
    description: '動画はとにかく楽しむためのもの！ショート動画からバラエティまで、面白いコンテンツを求めて次々と視聴します。',
    characteristics: ['好奇心旺盛', 'トレンドに敏感', '娯楽重視', 'マルチタスク', '流行キャッチ'],
    recommendedContent: '今話題のYouTuberやTikTokerをチェック！',
  },
  learner: {
    type: 'learner',
    title: '学習効率型',
    emoji: '📚',
    percentage: '学習活用度 85%',
    description: '動画を学びのツールとして活用！ハウツー動画や解説系コンテンツで、効率的に知識やスキルを身につけています。',
    characteristics: ['向上心', '効率重視', '知的好奇心', 'インプット派', '時短意識'],
    recommendedContent: 'TED TalksやスキルアップYouTubeがおすすめ',
  },
  serious: {
    type: 'serious',
    title: '真剣視聴型',
    emoji: '🎥',
    percentage: 'コンテンツ集中度 80%',
    description: '動画は集中して見るもの！ドキュメンタリーや映画など、深いコンテンツをじっくり楽しむ質重視タイプです。',
    characteristics: ['集中力', '質重視', '深掘り', '映画好き', '情報収集'],
    recommendedContent: 'Netflixのドキュメンタリーシリーズがピッタリ',
  },
  relaxer: {
    type: 'relaxer',
    title: '癒し追求型',
    emoji: '🌙',
    percentage: 'リラックス度 88%',
    description: '動画はリラックスタイムのお供！癒し系コンテンツやASMR、お気に入りチャンネルでゆったり過ごすのが好きです。',
    characteristics: ['癒し重視', 'ルーティン', 'まったり派', 'お気に入り', 'BGM的活用'],
    recommendedContent: '自然音やASMR、料理動画でリラックス',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { entertainment: 0, learner: 0, serious: 0, relaxer: 0 };

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
