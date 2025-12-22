// フィットネスタイプ診断 - あなたに合った運動スタイルは？
export const questions = [
  {
    id: 1,
    text: '運動する目的として一番大きいのは？',
    options: [
      { text: '筋肉をつけて体を鍛えたい', type: 'strength' },
      { text: '心肺機能を高めて持久力をつけたい', type: 'cardio' },
      { text: '柔軟性を高めてリラックスしたい', type: 'mindful' },
      { text: '楽しく体を動かしたい', type: 'social' },
    ],
  },
  {
    id: 2,
    text: '運動するなら一人？それともみんなで？',
    options: [
      { text: '一人で黙々と集中したい', type: 'strength' },
      { text: '一人で自分のペースで', type: 'cardio' },
      { text: '静かな環境で自分と向き合いたい', type: 'mindful' },
      { text: 'みんなでワイワイやりたい', type: 'social' },
    ],
  },
  {
    id: 3,
    text: '運動後に感じたい達成感は？',
    options: [
      { text: '「重いもの持てた！」という成長', type: 'strength' },
      { text: '「長く走れた！」という持久力', type: 'cardio' },
      { text: '心も体もスッキリした感覚', type: 'mindful' },
      { text: '仲間と楽しく過ごせた満足感', type: 'social' },
    ],
  },
  {
    id: 4,
    text: '理想の運動頻度は？',
    options: [
      { text: '週4-5回、部位を分けてしっかり', type: 'strength' },
      { text: '週3-4回、有酸素運動中心で', type: 'cardio' },
      { text: '毎日少しずつ、無理なく', type: 'mindful' },
      { text: '週1-2回、楽しい時にやる', type: 'social' },
    ],
  },
  {
    id: 5,
    text: '運動中に聞きたいのは？',
    options: [
      { text: 'テンション上がる洋楽やEDM', type: 'strength' },
      { text: 'リズムに乗れるポップス', type: 'cardio' },
      { text: 'ヒーリングミュージックや自然音', type: 'mindful' },
      { text: '友達とのおしゃべり', type: 'social' },
    ],
  },
  {
    id: 6,
    text: '運動を続けるモチベーションは？',
    options: [
      { text: '見た目の変化、筋肉がつくこと', type: 'strength' },
      { text: '記録の更新、タイムが縮むこと', type: 'cardio' },
      { text: '心の安定、ストレス解消', type: 'mindful' },
      { text: '人との繋がり、コミュニティ', type: 'social' },
    ],
  },
  {
    id: 7,
    text: 'ジムで気になる設備は？',
    options: [
      { text: 'ダンベル、バーベル、マシン', type: 'strength' },
      { text: 'ランニングマシン、エアロバイク', type: 'cardio' },
      { text: 'ヨガスタジオ、ストレッチエリア', type: 'mindful' },
      { text: 'グループレッスン、スタジオプログラム', type: 'social' },
    ],
  },
  {
    id: 8,
    text: '運動の「辛い」についてどう思う？',
    options: [
      { text: '辛さを乗り越えてこそ成長', type: 'strength' },
      { text: '適度な辛さは気持ちいい', type: 'cardio' },
      { text: '無理はしたくない、心地よさ重視', type: 'mindful' },
      { text: '楽しければ辛さを感じない', type: 'social' },
    ],
  },
  {
    id: 9,
    text: '休日に体を動かすなら？',
    options: [
      { text: 'ジムでウェイトトレーニング', type: 'strength' },
      { text: 'ランニングやサイクリング', type: 'cardio' },
      { text: 'ヨガやピラティス', type: 'mindful' },
      { text: 'フットサルやテニスなど仲間とスポーツ', type: 'social' },
    ],
  },
  {
    id: 10,
    text: '運動に対するスタンスは？',
    options: [
      { text: '自分を追い込んで限界に挑戦', type: 'strength' },
      { text: '継続して少しずつレベルアップ', type: 'cardio' },
      { text: '心身のバランスを整える手段', type: 'mindful' },
      { text: '人生を楽しくする趣味の一つ', type: 'social' },
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
  strength: {
    type: 'strength',
    title: 'ストレングス追求タイプ',
    emoji: '💪',
    percentage: 'パワー重視 90%',
    description: '筋力トレーニングで自分を鍛えることに喜びを感じるタイプ。体の変化が目に見える達成感がモチベーション。ジムでのウェイトトレーニングや自重トレーニングが向いています。',
    characteristics: ['ストイック', '目標志向', '自己成長意欲', '集中力', 'パワフル'],
    advice: 'オーバートレーニングに注意！休息も筋肉を育てる大事な要素。栄養管理も忘れずに。',
  },
  cardio: {
    type: 'cardio',
    title: '有酸素エンジョイタイプ',
    emoji: '🏃',
    percentage: '持久力重視 85%',
    description: 'ランニングやサイクリングなど、心肺機能を高める運動が好きなタイプ。自分のペースで長く続けられる運動にハマりやすい。マラソンやトライアスロンへの挑戦も向いています。',
    characteristics: ['持久力', '継続力', '自分ペース', '記録志向', 'アウトドア派'],
    advice: '素晴らしい継続力！筋トレも取り入れると、より効率的に体が仕上がりますよ。',
  },
  mindful: {
    type: 'mindful',
    title: 'マインドフル調和タイプ',
    emoji: '🧘',
    percentage: 'リラックス重視 80%',
    description: 'ヨガやピラティス、ストレッチなど、心と体のバランスを整える運動が合っているタイプ。激しい運動より、呼吸を意識しながらゆっくり体を動かすことで心身がリフレッシュします。',
    characteristics: ['内省的', '柔軟性重視', 'ストレス解消', '自分と向き合う', '穏やか'],
    advice: 'その姿勢は長く続けられる秘訣！たまには心拍数が上がる運動も取り入れると健康効果UP。',
  },
  social: {
    type: 'social',
    title: 'ソーシャルアクティブタイプ',
    emoji: '🎾',
    percentage: '楽しさ重視 85%',
    description: '仲間と楽しく体を動かすことが大好きなタイプ。チームスポーツやグループレッスンで、人との繋がりを感じながら運動するのがモチベーション。運動が苦手でもこのタイプなら続きやすい！',
    characteristics: ['社交的', '楽しさ重視', 'チームプレイ', 'コミュニケーション', '明るい'],
    advice: 'その楽しむ姿勢は最高の継続力！もっと仲間を増やして、運動の輪を広げてみては？',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { strength: 0, cardio: 0, mindful: 0, social: 0 };

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
