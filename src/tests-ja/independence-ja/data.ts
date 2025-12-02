// 自立度診断
export const questions = [
  {
    id: 1,
    text: '大きな決断をするとき、どうする？',
    options: [
      { text: '親や友達に相談して決めてもらう', type: 'dependent' },
      { text: 'いろんな人の意見を聞いてから決める', type: 'moderate' },
      { text: '参考程度に聞くけど、最終的には自分で', type: 'independent' },
      { text: '自分の直感を信じて一人で決める', type: 'solo' },
    ],
  },
  {
    id: 2,
    text: '一人で外食、できる？',
    options: [
      { text: '無理、誰かと一緒じゃないと', type: 'dependent' },
      { text: 'ファストフードならできる', type: 'moderate' },
      { text: '普通にできる', type: 'independent' },
      { text: 'むしろ一人の方が好き', type: 'solo' },
    ],
  },
  {
    id: 3,
    text: '旅行に行くなら？',
    options: [
      { text: '絶対誰かと一緒がいい', type: 'dependent' },
      { text: '友達と行くのが楽しい', type: 'moderate' },
      { text: '一人旅もできる', type: 'independent' },
      { text: '一人旅の方が自由で好き', type: 'solo' },
    ],
  },
  {
    id: 4,
    text: '困ったことがあったとき、最初にどうする？',
    options: [
      { text: 'すぐに誰かに助けを求める', type: 'dependent' },
      { text: '少し考えてから相談する', type: 'moderate' },
      { text: '自分で調べて解決しようとする', type: 'independent' },
      { text: '絶対に自分で解決したい', type: 'solo' },
    ],
  },
  {
    id: 5,
    text: '休日の予定、どう決める？',
    options: [
      { text: '友達の予定に合わせる', type: 'dependent' },
      { text: '誰かと予定を立てることが多い', type: 'moderate' },
      { text: '自分のやりたいことを優先', type: 'independent' },
      { text: '常に自分のペースで過ごす', type: 'solo' },
    ],
  },
  {
    id: 6,
    text: '家事や日常のことは？',
    options: [
      { text: '誰かにやってもらうことが多い', type: 'dependent' },
      { text: '分担してやる', type: 'moderate' },
      { text: '自分のことは自分でする', type: 'independent' },
      { text: '全部自分で完璧にこなしたい', type: 'solo' },
    ],
  },
  {
    id: 7,
    text: '新しいことを始めるとき？',
    options: [
      { text: '誰かと一緒じゃないと不安', type: 'dependent' },
      { text: '最初は誰かに教えてもらいたい', type: 'moderate' },
      { text: '自分で調べてやってみる', type: 'independent' },
      { text: '独学で極めるのが好き', type: 'solo' },
    ],
  },
  {
    id: 8,
    text: '映画やカラオケ、一人で行ける？',
    options: [
      { text: '一人では絶対行かない', type: 'dependent' },
      { text: '映画は行けるかも、カラオケは無理', type: 'moderate' },
      { text: 'どちらも問題なく行ける', type: 'independent' },
      { text: '一人の方が楽しめる', type: 'solo' },
    ],
  },
  {
    id: 9,
    text: '金銭管理について？',
    options: [
      { text: '誰かに任せている', type: 'dependent' },
      { text: 'アドバイスをもらいながら', type: 'moderate' },
      { text: '自分でしっかり管理', type: 'independent' },
      { text: '完全に自己管理、人には頼らない', type: 'solo' },
    ],
  },
  {
    id: 10,
    text: '「一人」という言葉を聞いてどう感じる？',
    options: [
      { text: '寂しい、不安', type: 'dependent' },
      { text: 'たまには一人もいいかな', type: 'moderate' },
      { text: '自由、快適', type: 'independent' },
      { text: '最高、理想の状態', type: 'solo' },
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
  dependent: {
    type: 'dependent',
    title: '絆を大切にするタイプ',
    emoji: '🤗',
    percentage: '自立度 30%',
    description: '人とのつながりを何より大切にするタイプ。一人でいるより誰かと一緒にいることで安心感を得られます。それは人間として自然なこと。でも、少しずつ一人でできることを増やしていくと、自信にもつながりますよ。',
    characteristics: ['協調性', '信頼を大切に', '人情家', 'チームワーク', '絆重視'],
    advice: '一人でできることを1つずつ増やしてみて。小さな成功体験が自信に。',
  },
  moderate: {
    type: 'moderate',
    title: 'バランス自立タイプ',
    emoji: '🌿',
    percentage: '自立度 55%',
    description: '一人でもできるし、人と一緒でも楽しめるバランスの取れたタイプ。状況に応じて柔軟に対応できます。社会生活を送る上でちょうどいい自立度と言えるでしょう。',
    characteristics: ['バランス感覚', '柔軟性', '適応力', '協調性', '自立心'],
    advice: 'そのバランス感覚は強み。でも、たまには一人の時間も楽しんで。',
  },
  independent: {
    type: 'independent',
    title: '自立型タイプ',
    emoji: '🦅',
    percentage: '自立度 80%',
    description: '自分のことは自分でできる、しっかり者タイプ。一人の時間も大切にでき、自分の判断で行動できます。周りからは「頼りになる」と思われているはず。',
    characteristics: ['自己決定力', '責任感', '頼りがい', '判断力', '自由を愛する'],
    advice: 'たまには人に頼ることも大切。助け合いも悪くないですよ。',
  },
  solo: {
    type: 'solo',
    title: '完全自立ソロタイプ',
    emoji: '🏔️',
    percentage: '自立度 98%',
    description: '何でも一人でやりたい、人に依存しない強い自立心の持ち主。自分の世界を大切にし、マイペースに生きることを好みます。ただ、人との繋がりも時には心を豊かにしますよ。',
    characteristics: ['完全自立', '孤高', '強い意志', 'マイペース', '自由人'],
    advice: '一人は楽ですが、たまには人と過ごす時間も素敵ですよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { dependent: 0, moderate: 0, independent: 0, solo: 0 };

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
