// クラスでの立ち位置診断
export const questions = [
  {
    id: 1,
    text: 'クラスで席替えがあったら？',
    options: [
      { text: '誰の隣でも大丈夫', type: 'popular' },
      { text: '仲良しグループの近くがいい', type: 'clique' },
      { text: '窓際か後ろがいい', type: 'observer' },
      { text: '先生の近くでも気にしない', type: 'neutral' },
    ],
  },
  {
    id: 2,
    text: 'グループワークでの役割は？',
    options: [
      { text: '自然とリーダーになる', type: 'popular' },
      { text: '仲良しと一緒にやる', type: 'clique' },
      { text: '与えられた役割をこなす', type: 'observer' },
      { text: '誰とでも合わせられる', type: 'neutral' },
    ],
  },
  {
    id: 3,
    text: '休み時間の過ごし方は？',
    options: [
      { text: 'いろんな人と話す', type: 'popular' },
      { text: 'いつものメンバーと', type: 'clique' },
      { text: '一人で過ごすことも', type: 'observer' },
      { text: 'その時の気分で', type: 'neutral' },
    ],
  },
  {
    id: 4,
    text: 'クラスLINEへの参加姿勢は？',
    options: [
      { text: 'よく発言する', type: 'popular' },
      { text: '仲良しとの会話中心', type: 'clique' },
      { text: '既読スルーが多い', type: 'observer' },
      { text: '必要な時だけ発言', type: 'neutral' },
    ],
  },
  {
    id: 5,
    text: '文化祭や体育祭では？',
    options: [
      { text: '中心になって盛り上げる', type: 'popular' },
      { text: '友達と一緒に楽しむ', type: 'clique' },
      { text: '目立たないように参加', type: 'observer' },
      { text: '必要な役割を果たす', type: 'neutral' },
    ],
  },
  {
    id: 6,
    text: 'クラスに新しい転校生が来たら？',
    options: [
      { text: '積極的に話しかける', type: 'popular' },
      { text: '友達が話しかけたら一緒に', type: 'clique' },
      { text: '向こうから来たら話す', type: 'observer' },
      { text: '自然に接する', type: 'neutral' },
    ],
  },
  {
    id: 7,
    text: 'クラスでのトラブルがあったら？',
    options: [
      { text: '仲裁に入る', type: 'popular' },
      { text: '友達の味方をする', type: 'clique' },
      { text: '関わらないようにする', type: 'observer' },
      { text: '中立を保つ', type: 'neutral' },
    ],
  },
  {
    id: 8,
    text: 'クラスでの自分の印象は？',
    options: [
      { text: '明るくて頼りになる', type: 'popular' },
      { text: '仲良しの中では存在感あり', type: 'clique' },
      { text: 'おとなしい、静か', type: 'observer' },
      { text: '特に印象に残らない', type: 'neutral' },
    ],
  },
  {
    id: 9,
    text: '卒業後、クラスメイトとは？',
    options: [
      { text: '多くの人と連絡を取り続ける', type: 'popular' },
      { text: '仲良しグループとだけ続く', type: 'clique' },
      { text: 'ほとんど連絡を取らない', type: 'observer' },
      { text: '機会があれば連絡する', type: 'neutral' },
    ],
  },
  {
    id: 10,
    text: '理想のクラスでの立ち位置は？',
    options: [
      { text: 'みんなに頼られる存在', type: 'popular' },
      { text: '仲良しと楽しく過ごす', type: 'clique' },
      { text: '自分のペースを守る', type: 'observer' },
      { text: 'バランスよく付き合う', type: 'neutral' },
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
  classAdvice: string;
}> = {
  popular: {
    type: 'popular',
    title: 'クラスの中心人物',
    emoji: '⭐',
    percentage: '人気度 95%',
    description: 'クラスの中心で輝く存在！誰とでも仲良くなれて、自然とリーダーシップを発揮します。',
    characteristics: ['社交的', 'リーダーシップ', '明るい', '頼りになる', '人気者'],
    classAdvice: '周りへの気配りを忘れずに',
  },
  clique: {
    type: 'clique',
    title: '仲良しグループ派',
    emoji: '👯',
    percentage: '絆の深さ 92%',
    description: '気の合う仲間と深い友情を育むタイプ！少数精鋭の仲良しグループで楽しく過ごします。',
    characteristics: ['仲間思い', '絆重視', '信頼', '安心感', 'グループ志向'],
    classAdvice: 'たまには新しい人との交流も',
  },
  observer: {
    type: 'observer',
    title: '観察者ポジション',
    emoji: '👀',
    percentage: '観察力 88%',
    description: 'クラスを客観的に見つめる観察者タイプ！一歩引いた視点でクラスの動きを把握しています。',
    characteristics: ['冷静', '観察力', '独立心', 'マイペース', '分析力'],
    classAdvice: 'もう少し輪に入ってみると新しい発見があるかも',
  },
  neutral: {
    type: 'neutral',
    title: 'ニュートラル存在',
    emoji: '🌊',
    percentage: 'バランス力 85%',
    description: '誰とでもほどよく付き合えるバランス派！特定のグループに属さず、柔軟に人間関係を築きます。',
    characteristics: ['柔軟性', 'バランス感覚', '中立', '適応力', '穏やか'],
    classAdvice: 'その柔軟さを活かして橋渡し役に',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { popular: 0, clique: 0, observer: 0, neutral: 0 };

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
