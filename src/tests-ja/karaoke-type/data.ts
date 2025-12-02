// カラオケタイプ診断 (가라오케 유형 테스트)
export const questions = [
  {
    id: 1,
    text: 'カラオケで最初に歌うのは？',
    options: [
      { text: '盛り上がる定番曲', type: 'entertainer' },
      { text: '自分の十八番', type: 'perfectionist' },
      { text: '誰かが歌ってから', type: 'supporter' },
      { text: 'みんなで歌える曲', type: 'harmonizer' },
    ],
  },
  {
    id: 2,
    text: 'カラオケに行く目的は？',
    options: [
      { text: '盛り上がりたい！', type: 'entertainer' },
      { text: '歌唱力を披露したい', type: 'perfectionist' },
      { text: '友達と楽しい時間を過ごしたい', type: 'supporter' },
      { text: 'みんなで一体感を味わいたい', type: 'harmonizer' },
    ],
  },
  {
    id: 3,
    text: '人が歌っている時は？',
    options: [
      { text: 'タンバリンやマラカスで盛り上げる', type: 'entertainer' },
      { text: '次に歌う曲を探している', type: 'perfectionist' },
      { text: '手拍子や合いの手を入れる', type: 'supporter' },
      { text: '一緒にハモる', type: 'harmonizer' },
    ],
  },
  {
    id: 4,
    text: '選曲する時のポイントは？',
    options: [
      { text: '盛り上がるかどうか', type: 'entertainer' },
      { text: '自分が上手く歌えるか', type: 'perfectionist' },
      { text: 'みんなが知っている曲か', type: 'supporter' },
      { text: 'みんなで歌えるか', type: 'harmonizer' },
    ],
  },
  {
    id: 5,
    text: 'カラオケの採点機能について？',
    options: [
      { text: '点数より盛り上がりが大事', type: 'entertainer' },
      { text: '高得点を狙いに行く', type: 'perfectionist' },
      { text: '他の人の点数を褒める', type: 'supporter' },
      { text: 'チーム対抗戦にする', type: 'harmonizer' },
    ],
  },
  {
    id: 6,
    text: 'マイクを持ったら？',
    options: [
      { text: '立ち上がってパフォーマンス', type: 'entertainer' },
      { text: '姿勢を正して集中', type: 'perfectionist' },
      { text: '緊張するけど頑張る', type: 'supporter' },
      { text: 'みんなにマイクを回す', type: 'harmonizer' },
    ],
  },
  {
    id: 7,
    text: 'カラオケで避けたい曲は？',
    options: [
      { text: '静かなバラード', type: 'entertainer' },
      { text: '音域が合わない曲', type: 'perfectionist' },
      { text: '誰も知らない曲', type: 'supporter' },
      { text: '一人で歌う曲', type: 'harmonizer' },
    ],
  },
  {
    id: 8,
    text: 'カラオケでドリンクを頼むなら？',
    options: [
      { text: 'とにかく乾杯！', type: 'entertainer' },
      { text: '喉にいいものを', type: 'perfectionist' },
      { text: 'みんなと同じものを', type: 'supporter' },
      { text: 'シェアできるものを', type: 'harmonizer' },
    ],
  },
  {
    id: 9,
    text: 'カラオケ終盤は？',
    options: [
      { text: '「もう一曲！」とアンコール', type: 'entertainer' },
      { text: '最後に決め曲を熱唱', type: 'perfectionist' },
      { text: '写真撮影の係になる', type: 'supporter' },
      { text: 'みんなで大合唱', type: 'harmonizer' },
    ],
  },
  {
    id: 10,
    text: 'カラオケ後の感想は？',
    options: [
      { text: '「楽しかった！また行こう！」', type: 'entertainer' },
      { text: '「今日の出来は〇点」と自己採点', type: 'perfectionist' },
      { text: '「みんな上手かった！」と称賛', type: 'supporter' },
      { text: '「一体感があって良かった」', type: 'harmonizer' },
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
  recommendedSong: string;
}> = {
  entertainer: {
    type: 'entertainer',
    title: '盛り上げ番長',
    emoji: '🎤',
    percentage: 'エンターテイナー度 95%',
    description: 'カラオケは盛り上がってなんぼ！タンバリン片手に場を沸かせるムードメーカー。歌唱力より場の空気を作る才能抜群です。',
    characteristics: ['ムードメーカー', '陽気', 'ノリがいい', 'サービス精神', 'パフォーマー'],
    recommendedSong: 'みんなで踊れるパーティーソングがおすすめ！',
  },
  perfectionist: {
    type: 'perfectionist',
    title: '歌唱力追求型',
    emoji: '🎵',
    percentage: 'パーフェクト追求度 92%',
    description: 'カラオケは歌を披露する場！採点モードで高得点を狙い、自分の歌唱力を磨き続けます。プロ顔負けの本格派です。',
    characteristics: ['向上心', '集中力', '本格派', 'プロ意識', 'こだわり'],
    recommendedSong: 'ビブラートが映えるバラードに挑戦！',
  },
  supporter: {
    type: 'supporter',
    title: '応援サポーター',
    emoji: '👏',
    percentage: 'サポーター度 88%',
    description: '自分が歌うより人の歌を聴くのが好きなタイプ。手拍子、合いの手、拍手で場を盛り上げるカラオケの縁の下の力持ち。',
    characteristics: ['聞き上手', '気配り', '控えめ', '協調性', '思いやり'],
    recommendedSong: 'デュエット曲でサポート役に徹するのも◎',
  },
  harmonizer: {
    type: 'harmonizer',
    title: '合唱コーディネーター',
    emoji: '🎶',
    percentage: 'ハーモニー度 90%',
    description: 'みんなで歌える曲を選ぶタイプ。大合唱で一体感を味わうのが至福の時。カラオケは一人で歌うものじゃない派。',
    characteristics: ['一体感重視', 'チームプレイ', '協調性', '楽しさ重視', 'つながり'],
    recommendedSong: 'アニメ主題歌や懐メロの合唱曲！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { entertainer: 0, perfectionist: 0, supporter: 0, harmonizer: 0 };

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
