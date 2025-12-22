// 順序へのこだわり診断
export const questions = [
  {
    id: 1,
    text: '朝起きてからの行動は？',
    options: [
      { text: '毎日同じ順序で行動', type: 'strict' },
      { text: '大体決まった流れがある', type: 'moderate' },
      { text: '日によって違う', type: 'flexible' },
      { text: '特に順序は決めていない', type: 'free' },
    ],
  },
  {
    id: 2,
    text: '料理を食べる順番は？',
    options: [
      { text: '必ず決まった順序で食べる', type: 'strict' },
      { text: 'なんとなく順番がある', type: 'moderate' },
      { text: '食べたいものから食べる', type: 'flexible' },
      { text: '全く気にしない', type: 'free' },
    ],
  },
  {
    id: 3,
    text: 'タスクをこなす順番は？',
    options: [
      { text: '優先順位を厳密に守る', type: 'strict' },
      { text: '重要度順に大体こなす', type: 'moderate' },
      { text: '気分でやりやすいものから', type: 'flexible' },
      { text: '順番は特に決めない', type: 'free' },
    ],
  },
  {
    id: 4,
    text: '本や漫画の読み方は？',
    options: [
      { text: '必ず最初から順番に', type: 'strict' },
      { text: '基本は順番通り', type: 'moderate' },
      { text: '興味のある部分から', type: 'flexible' },
      { text: '適当に開いたところから', type: 'free' },
    ],
  },
  {
    id: 5,
    text: '旅行の観光ルートは？',
    options: [
      { text: '効率的な順序を事前に計画', type: 'strict' },
      { text: '大まかなルートは決める', type: 'moderate' },
      { text: '行きたい場所を気分で', type: 'flexible' },
      { text: '完全にその場のノリ', type: 'free' },
    ],
  },
  {
    id: 6,
    text: 'メールやメッセージの返信は？',
    options: [
      { text: '受信順に全て返信', type: 'strict' },
      { text: '重要なものから返信', type: 'moderate' },
      { text: '返しやすいものから', type: 'flexible' },
      { text: '気が向いた時に適当に', type: 'free' },
    ],
  },
  {
    id: 7,
    text: '買い物リストの買い方は？',
    options: [
      { text: 'リスト順に売り場を回る', type: 'strict' },
      { text: '効率の良いルートで', type: 'moderate' },
      { text: '目についたものから', type: 'flexible' },
      { text: 'リストは作らない', type: 'free' },
    ],
  },
  {
    id: 8,
    text: 'シリーズ物のコンテンツの楽しみ方は？',
    options: [
      { text: '必ず1作目から順番に', type: 'strict' },
      { text: 'できれば順番に見たい', type: 'moderate' },
      { text: '話題作からでもOK', type: 'flexible' },
      { text: '順番は気にしない', type: 'free' },
    ],
  },
  {
    id: 9,
    text: 'お風呂で体を洗う順番は？',
    options: [
      { text: '毎回必ず同じ順番', type: 'strict' },
      { text: '大体決まっている', type: 'moderate' },
      { text: '日によって違う', type: 'flexible' },
      { text: '意識したことがない', type: 'free' },
    ],
  },
  {
    id: 10,
    text: '物事の順序が乱れると？',
    options: [
      { text: '非常に気になる', type: 'strict' },
      { text: 'やや気になる', type: 'moderate' },
      { text: 'あまり気にならない', type: 'flexible' },
      { text: '全く気にならない', type: 'free' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  style: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  strict: {
    type: 'strict',
    title: '順序厳守タイプ',
    emoji: '📋✅',
    style: '順序へのこだわり：非常に強い',
    description: 'あなたは順序を厳密に守ることを大切にするタイプです。決まった流れで物事を進めることで安心感を得て、効率的に行動できます。計画性と一貫性が強みです。',
    characteristics: ['計画的', '一貫性がある', '効率重視', '安定志向'],
    tips: ['その規律性は強み', '時には順序を変えてみる勇気も', '柔軟性も少しずつ'],
  },
  moderate: {
    type: 'moderate',
    title: '順序意識タイプ',
    emoji: '📝🔄',
    style: '順序へのこだわり：やや強い',
    description: 'あなたは適度に順序を意識しながらも、状況に応じて調整できるタイプです。基本的な流れは守りつつ、必要に応じて柔軟に対応できるバランス感覚があります。',
    characteristics: ['バランス型', '適度な計画性', '柔軟性もある', '効率と自由のバランス'],
    tips: ['良いバランス感覚', '強みを活かして', '状況に応じた使い分けを'],
  },
  flexible: {
    type: 'flexible',
    title: '柔軟対応タイプ',
    emoji: '🌊📋',
    style: '順序へのこだわり：やや弱い',
    description: 'あなたは順序にあまりこだわらず、その時の気分や状況で柔軟に対応するタイプです。臨機応変に動けることが強みで、変化にも適応しやすい特徴があります。',
    characteristics: ['臨機応変', '適応力が高い', '自由な発想', '変化に強い'],
    tips: ['柔軟性は大きな強み', '重要なことは優先順位を', '効率化も時には意識して'],
  },
  free: {
    type: 'free',
    title: '自由奔放タイプ',
    emoji: '🦋✨',
    style: '順序へのこだわり：ほぼない',
    description: 'あなたは順序という概念にほとんど縛られないタイプです。自由な発想で動き、その場のインスピレーションを大切にします。型にはまらない独創性が魅力です。',
    characteristics: ['自由奔放', '独創的', '直感的', '縛られない'],
    tips: ['その自由さは才能', 'デッドラインは意識して', '時には順序立てる練習も'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { strict: 0, moderate: 0, flexible: 0, free: 0 };

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
