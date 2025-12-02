// 芸術鑑賞タイプ診断 (예술 감상 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '美術館や展覧会での楽しみ方は？',
    options: [
      { text: '作品の背景や意図を考える', type: 'analytical' },
      { text: '直感的に美しいと感じるものを楽しむ', type: 'intuitive' },
      { text: '話題の展覧会に行く', type: 'social' },
      { text: '自分も創作意欲が湧く', type: 'creative' },
    ],
  },
  {
    id: 2,
    text: '芸術作品で重視するのは？',
    options: [
      { text: '技術や歴史的価値', type: 'analytical' },
      { text: '美しさや心地よさ', type: 'intuitive' },
      { text: '話題性や人気', type: 'social' },
      { text: 'インスピレーション', type: 'creative' },
    ],
  },
  {
    id: 3,
    text: '好きなアート作品は？',
    options: [
      { text: '古典・名画', type: 'analytical' },
      { text: '印象派・抽象画', type: 'intuitive' },
      { text: '現代アート・ポップアート', type: 'social' },
      { text: 'デザイン・イラスト', type: 'creative' },
    ],
  },
  {
    id: 4,
    text: 'アートに触れる頻度は？',
    options: [
      { text: '定期的に美術館へ', type: 'analytical' },
      { text: '気が向いた時に', type: 'intuitive' },
      { text: '話題の展覧会があれば', type: 'social' },
      { text: 'SNSやギャラリーで日常的に', type: 'creative' },
    ],
  },
  {
    id: 5,
    text: 'アート作品の情報収集は？',
    options: [
      { text: '解説や評論を読む', type: 'analytical' },
      { text: '特に調べない、感覚で', type: 'intuitive' },
      { text: 'SNSやメディアをチェック', type: 'social' },
      { text: 'アーティストをフォロー', type: 'creative' },
    ],
  },
  {
    id: 6,
    text: '美術館でのペースは？',
    options: [
      { text: 'じっくり一つ一つ見る', type: 'analytical' },
      { text: '気になる作品だけ集中', type: 'intuitive' },
      { text: 'サクッと全体を回る', type: 'social' },
      { text: 'スケッチしながらゆっくり', type: 'creative' },
    ],
  },
  {
    id: 7,
    text: 'アートを買うなら？',
    options: [
      { text: '価値のある作品', type: 'analytical' },
      { text: '心に響いた作品', type: 'intuitive' },
      { text: '話題のアーティストの作品', type: 'social' },
      { text: '自分の部屋に飾りたい作品', type: 'creative' },
    ],
  },
  {
    id: 8,
    text: 'アートと日常の関係は？',
    options: [
      { text: '教養として学ぶ', type: 'analytical' },
      { text: '癒しや刺激として', type: 'intuitive' },
      { text: 'コミュニケーションのネタ', type: 'social' },
      { text: '生活の一部、創作活動も', type: 'creative' },
    ],
  },
  {
    id: 9,
    text: 'アートについて語る時は？',
    options: [
      { text: '歴史や技法について解説', type: 'analytical' },
      { text: '「なんか良い」で十分', type: 'intuitive' },
      { text: '友達とシェア', type: 'social' },
      { text: '創作者視点で語る', type: 'creative' },
    ],
  },
  {
    id: 10,
    text: '理想のアートとの関わり方は？',
    options: [
      { text: '深い知識を持った鑑賞者', type: 'analytical' },
      { text: '感性で楽しむ愛好家', type: 'intuitive' },
      { text: 'アートシーンを楽しむ', type: 'social' },
      { text: '自分も創作する', type: 'creative' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  appreciationStyle: string[];
  recommendations: string[];
  tips: string[];
}> = {
  analytical: {
    type: 'analytical',
    title: '分析派アート鑑賞家',
    emoji: '🔍',
    description: 'あなたは作品の背景や技法を深く理解しようとする分析タイプ！美術史や作家の意図を知ることで、より深い鑑賞体験を得ます。知的好奇心旺盛なあなたにぴったり。',
    appreciationStyle: ['背景を調べる', '技法に注目', '解説を読む'],
    recommendations: ['美術史の本を読む', '音声ガイドを活用', '専門家のツアーに参加'],
    tips: ['感覚的な楽しみも', '難しく考えすぎないで', '子供の目線も大切に'],
  },
  intuitive: {
    type: 'intuitive',
    title: '直感派アート愛好家',
    emoji: '✨',
    description: 'あなたは直感で美を感じ取る感性豊かなタイプ！理屈より「好き」という気持ちを大切にします。アートを純粋に楽しめる素晴らしい感性の持ち主。',
    appreciationStyle: ['直感で楽しむ', '美を感じる', '心地よさ重視'],
    recommendations: ['インスタ映えスポット', '印象派展', 'アートカフェ'],
    tips: ['背景を知るともっと楽しい', '自分の「好き」を言葉にしてみて', '新しいジャンルにも挑戦'],
  },
  social: {
    type: 'social',
    title: 'トレンド派アートファン',
    emoji: '📱',
    description: 'あなたは話題のアートシーンを楽しむ社交的なタイプ！人気の展覧会やアーティストをチェックし、友達と共有します。アートを通じた繋がりを大切にします。',
    appreciationStyle: ['話題作をチェック', 'SNSでシェア', '友達と鑑賞'],
    recommendations: ['話題の展覧会', 'アートフェア', 'インスタ映えする現代アート'],
    tips: ['自分だけの「好き」も見つけて', '深く知る機会も', '有名でない作品にも注目'],
  },
  creative: {
    type: 'creative',
    title: '創作派アートクリエイター',
    emoji: '🎨',
    description: 'あなたはアートを見るだけでなく創る側でもあるタイプ！鑑賞がインスピレーションになり、自分の創作活動に活かします。アーティスト視点での鑑賞が得意。',
    appreciationStyle: ['創作の参考に', 'アーティスト視点', '日常にアート'],
    recommendations: ['ワークショップに参加', 'アトリエ訪問', 'デザイン展'],
    tips: ['純粋な鑑賞も楽しんで', 'いろんなジャンルに触れて', '自分の作品を発信しよう'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { analytical: 0, intuitive: 0, social: 0, creative: 0 };

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
