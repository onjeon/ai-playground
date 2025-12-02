// 勉強スタイル診断 (공부 스타일 진단)
export const questions = [
  {
    id: 1,
    text: '勉強するのに最適な環境は？',
    options: [
      { text: '静かな図書館や自習室', type: 'solo' },
      { text: '適度な雑音があるカフェ', type: 'ambient' },
      { text: '友達と一緒に勉強会', type: 'group' },
      { text: '自宅の自分の部屋', type: 'comfort' },
    ],
  },
  {
    id: 2,
    text: 'ノートの取り方は？',
    options: [
      { text: 'きれいにまとめる、色分けも', type: 'solo' },
      { text: '要点だけシンプルにメモ', type: 'ambient' },
      { text: '友達のノートも参考に', type: 'group' },
      { text: 'あまり取らない、覚えればOK', type: 'comfort' },
    ],
  },
  {
    id: 3,
    text: '暗記の方法は？',
    options: [
      { text: '繰り返し書いて覚える', type: 'solo' },
      { text: '音読して耳から覚える', type: 'ambient' },
      { text: '友達と問題を出し合う', type: 'group' },
      { text: '好きな時に眺めて自然に', type: 'comfort' },
    ],
  },
  {
    id: 4,
    text: 'わからない問題があったら？',
    options: [
      { text: '自分で調べて解決', type: 'solo' },
      { text: '参考書や動画で学ぶ', type: 'ambient' },
      { text: '友達や先生に聞く', type: 'group' },
      { text: '一旦飛ばして後で考える', type: 'comfort' },
    ],
  },
  {
    id: 5,
    text: '勉強中の休憩は？',
    options: [
      { text: '時間を決めて短く', type: 'solo' },
      { text: '音楽を聴いてリフレッシュ', type: 'ambient' },
      { text: '友達とおしゃべり', type: 'group' },
      { text: '気が向くまでのんびり', type: 'comfort' },
    ],
  },
  {
    id: 6,
    text: 'テスト前の過ごし方は？',
    options: [
      { text: '計画を立ててコツコツ', type: 'solo' },
      { text: '過去問を解きまくる', type: 'ambient' },
      { text: 'グループで教え合い', type: 'group' },
      { text: '一夜漬け…', type: 'comfort' },
    ],
  },
  {
    id: 7,
    text: '勉強へのモチベーションは？',
    options: [
      { text: '目標達成、自己成長', type: 'solo' },
      { text: '新しいことを知る楽しさ', type: 'ambient' },
      { text: '友達と一緒だから頑張れる', type: 'group' },
      { text: 'やらなきゃいけないから', type: 'comfort' },
    ],
  },
  {
    id: 8,
    text: '長時間勉強するコツは？',
    options: [
      { text: '環境を整えて集中', type: 'solo' },
      { text: '適度に場所を変える', type: 'ambient' },
      { text: '誰かと一緒にいると続く', type: 'group' },
      { text: '無理せず気分次第で', type: 'comfort' },
    ],
  },
  {
    id: 9,
    text: '教科書以外で学ぶなら？',
    options: [
      { text: '専門書や論文', type: 'solo' },
      { text: 'YouTube動画やポッドキャスト', type: 'ambient' },
      { text: '勉強会やセミナー', type: 'group' },
      { text: 'ゲームやアプリ', type: 'comfort' },
    ],
  },
  {
    id: 10,
    text: '自分の勉強スタイルは？',
    options: [
      { text: 'ストイックに一人で追い込む', type: 'solo' },
      { text: '環境を整えてマイペースに', type: 'ambient' },
      { text: '仲間と切磋琢磨', type: 'group' },
      { text: 'ゆるく、楽しく、無理なく', type: 'comfort' },
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
  advice: string;
}> = {
  solo: {
    type: 'solo',
    title: 'ストイック独学タイプ',
    emoji: '📚',
    percentage: '集中力 100%',
    description: '一人で黙々と取り組む集中型。静かな環境で自分のペースを守りながら、深く学ぶのが得意。計画的に進められる自己管理能力の持ち主。',
    characteristics: ['集中力高い', '自己管理', '計画的', 'ストイック', '深い理解'],
    advice: '素晴らしい集中力！たまには誰かと学ぶと、新しい視点が得られるかも。',
  },
  ambient: {
    type: 'ambient',
    title: 'マルチ環境適応タイプ',
    emoji: '☕',
    percentage: '適応力 90%',
    description: 'カフェや図書館など、環境を変えながら学ぶ柔軟派。動画や音声など多様なメディアを活用し、自分に合った方法を見つけるのが上手。',
    characteristics: ['柔軟', '多様な学習法', '環境適応', 'マルチメディア活用', 'バランス型'],
    advice: '環境を変える工夫は効果的！自分に最も合う場所を見つけて。',
  },
  group: {
    type: 'group',
    title: 'チーム学習タイプ',
    emoji: '👥',
    percentage: 'コラボ力 95%',
    description: '仲間と一緒に学ぶと力を発揮！教え合い、刺激し合いながら成長。競争心やコミュニケーションを通じて、学びを深められます。',
    characteristics: ['コラボ上手', 'コミュニケーション力', '教え上手', '競争心', '仲間意識'],
    advice: '仲間との学びは最高！ただ、おしゃべりで終わらないよう注意も必要。',
  },
  comfort: {
    type: 'comfort',
    title: 'マイペース学習タイプ',
    emoji: '🏠',
    percentage: 'リラックス度 85%',
    description: '無理せず、自分のペースで学ぶリラックス派。慣れた環境でゆったり取り組むのが好き。締め切り前に追い込むタイプかもしれないけど、それも個性！',
    characteristics: ['マイペース', 'リラックス', '無理しない', '直感的', '自分軸'],
    advice: 'リラックスは大切！でも、少しだけ計画性を持つと成果が上がるかも。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { solo: 0, ambient: 0, group: 0, comfort: 0 };

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
