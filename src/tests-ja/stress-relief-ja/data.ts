// ストレス発散タイプ診断 (스트레스 해소법 테스트)
export const questions = [
  {
    id: 1,
    text: 'ストレスを感じた時、最初にしたいことは？',
    options: [
      { text: '体を動かしたい', type: 'active' },
      { text: '誰かに話を聞いてほしい', type: 'social' },
      { text: '一人で静かに過ごしたい', type: 'solo' },
      { text: '美味しいものを食べたい', type: 'indulge' },
    ],
  },
  {
    id: 2,
    text: '休日のリフレッシュ方法は？',
    options: [
      { text: 'スポーツや散歩', type: 'active' },
      { text: '友達と遊ぶ', type: 'social' },
      { text: '読書や映画鑑賞', type: 'solo' },
      { text: 'グルメや買い物', type: 'indulge' },
    ],
  },
  {
    id: 3,
    text: '落ち込んだ時に効果的なのは？',
    options: [
      { text: '汗を流す', type: 'active' },
      { text: '友達に会う', type: 'social' },
      { text: '一人の時間を確保する', type: 'solo' },
      { text: '好きなことで気分転換', type: 'indulge' },
    ],
  },
  {
    id: 4,
    text: '仕事や勉強で疲れた後は？',
    options: [
      { text: 'ジムや運動で発散', type: 'active' },
      { text: '飲み会やカフェで雑談', type: 'social' },
      { text: '家で一人の時間', type: 'solo' },
      { text: 'ご褒美スイーツや趣味', type: 'indulge' },
    ],
  },
  {
    id: 5,
    text: 'イライラした時の対処法は？',
    options: [
      { text: '走ったり筋トレしたり', type: 'active' },
      { text: '誰かに愚痴を言う', type: 'social' },
      { text: '深呼吸して一人で落ち着く', type: 'solo' },
      { text: '好きなもので気を紛らわす', type: 'indulge' },
    ],
  },
  {
    id: 6,
    text: 'リラックスできる環境は？',
    options: [
      { text: '広い場所、自然の中', type: 'active' },
      { text: '人がいる賑やかな場所', type: 'social' },
      { text: '静かで落ち着く場所', type: 'solo' },
      { text: '好きなものに囲まれた空間', type: 'indulge' },
    ],
  },
  {
    id: 7,
    text: 'ストレス解消にお金を使うなら？',
    options: [
      { text: 'スポーツジムや旅行', type: 'active' },
      { text: '飲み会やイベント', type: 'social' },
      { text: '本やゲームなど一人で楽しめるもの', type: 'solo' },
      { text: 'グルメやショッピング', type: 'indulge' },
    ],
  },
  {
    id: 8,
    text: '泣きたい気分の時は？',
    options: [
      { text: '外に出て気分転換', type: 'active' },
      { text: '誰かに話を聞いてもらう', type: 'social' },
      { text: '一人で泣いてスッキリ', type: 'solo' },
      { text: '泣ける映画を見る', type: 'indulge' },
    ],
  },
  {
    id: 9,
    text: '最近試したストレス解消法は？',
    options: [
      { text: '運動系', type: 'active' },
      { text: '人と会う系', type: 'social' },
      { text: '一人時間系', type: 'solo' },
      { text: '趣味・娯楽系', type: 'indulge' },
    ],
  },
  {
    id: 10,
    text: 'ストレスが完全に解消された状態とは？',
    options: [
      { text: '体がスッキリ軽い', type: 'active' },
      { text: '気持ちを共有できた', type: 'social' },
      { text: '心が落ち着いている', type: 'solo' },
      { text: '満足感がある', type: 'indulge' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  stressLevel: string;
  description: string;
  characteristics: string[];
  recommendations: string[];
}> = {
  active: {
    type: 'active',
    title: 'アクティブ発散タイプ',
    emoji: '🏃‍♂️💪',
    stressLevel: 'ストレス耐性：★★★★☆',
    description: '体を動かすことでストレスを発散するタイプ。運動やスポーツでエネルギーを発散し、心身ともにリフレッシュします。健康的で効果的な発散方法の持ち主！',
    characteristics: ['行動的', 'エネルギッシュ', '健康志向', '前向き'],
    recommendations: ['ランニング', 'ジム', 'ヨガ', 'ダンス', '登山', 'スポーツ全般'],
  },
  social: {
    type: 'social',
    title: 'コミュニケーション発散タイプ',
    emoji: '🗣️👥',
    stressLevel: 'ストレス耐性：★★★☆☆',
    description: '人と話すことでストレスを解消するタイプ。気持ちを共有することで心が軽くなります。友達や家族との時間があなたのエネルギー源！',
    characteristics: ['社交的', '共感力が高い', '話し上手', 'オープン'],
    recommendations: ['友達との食事', 'カフェでお喋り', 'オンライン通話', '相談できる人を持つ'],
  },
  solo: {
    type: 'solo',
    title: '静寂回復タイプ',
    emoji: '🧘‍♀️🌙',
    stressLevel: 'ストレス耐性：★★★★★',
    description: '一人の時間で心を回復させるタイプ。静かな環境で自分と向き合い、内面からリフレッシュします。自己分析が得意で、自分を理解しています。',
    characteristics: ['内省的', '冷静', '自立している', '穏やか'],
    recommendations: ['瞑想', '読書', 'お風呂でリラックス', '自然の中での散歩', '日記を書く'],
  },
  indulge: {
    type: 'indulge',
    title: 'ご褒美発散タイプ',
    emoji: '🍰🛍️',
    stressLevel: 'ストレス耐性：★★★☆☆',
    description: '好きなことで気分転換するタイプ。美味しいもの、買い物、趣味など、自分へのご褒美でストレスを解消します。自分を甘やかす方法を知っているのは才能です！',
    characteristics: ['自分を大切にする', '感性豊か', '楽しみ上手', 'ポジティブ'],
    recommendations: ['好きなスイーツ', '趣味の時間', 'マッサージ', '映画鑑賞', '適度なショッピング'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { active: 0, social: 0, solo: 0, indulge: 0 };

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
