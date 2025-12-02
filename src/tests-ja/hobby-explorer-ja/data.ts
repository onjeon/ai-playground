// 趣味探求タイプ診断 (취미 탐구 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '新しい趣味を始める時は？',
    options: [
      { text: '一人でじっくり楽しめるもの', type: 'solo' },
      { text: '仲間と一緒にできるもの', type: 'social' },
      { text: '体を動かせるもの', type: 'active' },
      { text: '創造性を発揮できるもの', type: 'creative' },
    ],
  },
  {
    id: 2,
    text: '休日の過ごし方は？',
    options: [
      { text: '家で没頭できる趣味', type: 'solo' },
      { text: '友達と趣味を楽しむ', type: 'social' },
      { text: '外に出てアクティブに', type: 'active' },
      { text: '何か作ったり表現したり', type: 'creative' },
    ],
  },
  {
    id: 3,
    text: '趣味に求めることは？',
    options: [
      { text: '集中と癒し', type: 'solo' },
      { text: '人との繋がり', type: 'social' },
      { text: '達成感と爽快感', type: 'active' },
      { text: '自己表現と創造', type: 'creative' },
    ],
  },
  {
    id: 4,
    text: '趣味を続けるモチベーションは？',
    options: [
      { text: '自分の成長を感じること', type: 'solo' },
      { text: '仲間との時間', type: 'social' },
      { text: '体力や技術の向上', type: 'active' },
      { text: '作品ができあがること', type: 'creative' },
    ],
  },
  {
    id: 5,
    text: '趣味の情報収集は？',
    options: [
      { text: '本やネットで調べる', type: 'solo' },
      { text: '趣味仲間から教えてもらう', type: 'social' },
      { text: '実際にやってみる', type: 'active' },
      { text: 'インスピレーションを求めて', type: 'creative' },
    ],
  },
  {
    id: 6,
    text: '趣味のレベルは？',
    options: [
      { text: '極めたい、プロレベルを目指す', type: 'solo' },
      { text: '楽しくできればいい', type: 'social' },
      { text: '継続して上達したい', type: 'active' },
      { text: '自分らしくできればいい', type: 'creative' },
    ],
  },
  {
    id: 7,
    text: '趣味に使うお金は？',
    options: [
      { text: '道具やグッズにこだわる', type: 'solo' },
      { text: '仲間との活動に使う', type: 'social' },
      { text: '必要な装備に投資', type: 'active' },
      { text: '材料やツールを揃える', type: 'creative' },
    ],
  },
  {
    id: 8,
    text: '趣味を人に勧める時は？',
    options: [
      { text: '魅力を熱く語る', type: 'solo' },
      { text: '一緒にやろうと誘う', type: 'social' },
      { text: '体験させる', type: 'active' },
      { text: '作品を見せる', type: 'creative' },
    ],
  },
  {
    id: 9,
    text: '趣味と仕事の関係は？',
    options: [
      { text: '趣味を仕事にしたい', type: 'solo' },
      { text: '趣味は趣味で楽しみたい', type: 'social' },
      { text: '仕事のリフレッシュに', type: 'active' },
      { text: '副業にできたらいいな', type: 'creative' },
    ],
  },
  {
    id: 10,
    text: '理想の趣味ライフは？',
    options: [
      { text: '一つの趣味を極める', type: 'solo' },
      { text: '趣味を通じて仲間が増える', type: 'social' },
      { text: '様々なことに挑戦する', type: 'active' },
      { text: '自分の作品で囲まれる', type: 'creative' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  hobbyStyle: string[];
  recommendedHobbies: string[];
  tips: string[];
}> = {
  solo: {
    type: 'solo',
    title: '没頭探求型',
    emoji: '🔍',
    description: 'あなたは一人で深く没頭するのが好きなタイプ！自分のペースでじっくり取り組み、趣味を極めていきます。集中力と探求心が強みです。',
    hobbyStyle: ['一人で楽しむ', '深く追求する', 'マイペース'],
    recommendedHobbies: ['読書', 'パズル', 'プラモデル', 'プログラミング', '瞑想'],
    tips: ['たまには仲間と楽しむのも', '没頭しすぎて体調管理を忘れずに', '新しいジャンルにも挑戦してみて'],
  },
  social: {
    type: 'social',
    title: '交流重視型',
    emoji: '👥',
    description: 'あなたは人と一緒に楽しむのが好きなタイプ！趣味を通じて仲間と繋がり、共有する喜びを大切にします。社交性と明るさが魅力です。',
    hobbyStyle: ['仲間と一緒に', '交流を楽しむ', '共有する喜び'],
    recommendedHobbies: ['ボードゲーム', 'スポーツ観戦', 'カラオケ', '料理教室', 'サークル活動'],
    tips: ['一人の時間も大切に', '趣味の押し付けに注意', '新しい仲間とも積極的に'],
  },
  active: {
    type: 'active',
    title: 'アクティブ挑戦型',
    emoji: '🏃',
    description: 'あなたは体を動かすのが好きなアクティブタイプ！挑戦することで得られる達成感がモチベーション。行動力とチャレンジ精神が溢れています。',
    hobbyStyle: ['体を動かす', '挑戦を楽しむ', 'アウトドア志向'],
    recommendedHobbies: ['ランニング', '登山', 'サーフィン', 'ダンス', 'キャンプ'],
    tips: ['休息も大切に', '怪我に注意', 'インドアな趣味も試してみて'],
  },
  creative: {
    type: 'creative',
    title: 'クリエイティブ表現型',
    emoji: '🎨',
    description: 'あなたは創造することが好きなクリエイティブタイプ！自分の世界観を表現し、形にすることに喜びを感じます。独創性と感性が輝いています。',
    hobbyStyle: ['創造する', '表現する', '作品を残す'],
    recommendedHobbies: ['絵画', '音楽', 'ハンドメイド', '写真', '動画制作'],
    tips: ['完璧を求めすぎないで', '作品を発信してみよう', 'インプットも忘れずに'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { solo: 0, social: 0, active: 0, creative: 0 };

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
