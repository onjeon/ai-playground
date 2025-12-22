// 協力スタイル診断 - あなたのチームワーク力は？
export const questions = [
  {
    id: 1,
    text: 'チーム作業で意見が分かれたとき',
    options: [
      { text: '全員が納得するまで話し合いたい', type: 'consensus' },
      { text: '自分の専門分野なら意見を主張する', type: 'specialist' },
      { text: 'リーダーの判断に従う', type: 'supporter' },
      { text: 'みんなの意見を調整してまとめる', type: 'mediator' },
    ],
  },
  {
    id: 2,
    text: 'グループワークでの役割は？',
    options: [
      { text: 'みんなで一緒に全部やりたい', type: 'consensus' },
      { text: '自分の得意分野を担当したい', type: 'specialist' },
      { text: '必要なところをサポートする', type: 'supporter' },
      { text: '役割分担を決めて調整する', type: 'mediator' },
    ],
  },
  {
    id: 3,
    text: '誰かが困っているのを見たら？',
    options: [
      { text: 'チーム全体で助け合おうと提案', type: 'consensus' },
      { text: '自分が助けられる内容なら手を貸す', type: 'specialist' },
      { text: 'すぐに駆けつけて手伝う', type: 'supporter' },
      { text: '適切な人に繋いであげる', type: 'mediator' },
    ],
  },
  {
    id: 4,
    text: 'チームの成功に必要なものは？',
    options: [
      { text: '全員の一体感と信頼関係', type: 'consensus' },
      { text: '各自が専門性を発揮すること', type: 'specialist' },
      { text: '困った時に助け合える関係', type: 'supporter' },
      { text: '適切な役割分担と調整', type: 'mediator' },
    ],
  },
  {
    id: 5,
    text: '飲み会や懇親会での振る舞いは？',
    options: [
      { text: '全員と話すようにして一体感を作る', type: 'consensus' },
      { text: '気の合う人や専門が近い人と深く話す', type: 'specialist' },
      { text: '幹事の手伝いや気配りをする', type: 'supporter' },
      { text: '話が弾むように人と人を繋ぐ', type: 'mediator' },
    ],
  },
  {
    id: 6,
    text: 'プロジェクトが遅れている時',
    options: [
      { text: '全員で残業してでも一緒に頑張る', type: 'consensus' },
      { text: '自分の担当部分を完璧に仕上げる', type: 'specialist' },
      { text: '遅れている人の作業を手伝う', type: 'supporter' },
      { text: 'スケジュールを見直して再調整', type: 'mediator' },
    ],
  },
  {
    id: 7,
    text: 'チーム内で対立が起きたら？',
    options: [
      { text: 'みんなで話し合いの場を設ける', type: 'consensus' },
      { text: '専門的な観点から解決策を提示', type: 'specialist' },
      { text: '両方の話を聞いてあげる', type: 'supporter' },
      { text: '間に入って落としどころを探る', type: 'mediator' },
    ],
  },
  {
    id: 8,
    text: '新メンバーがチームに入ってきたら？',
    options: [
      { text: 'チーム全体で歓迎会を開く', type: 'consensus' },
      { text: '専門分野について教える', type: 'specialist' },
      { text: '困っていないか気にかける', type: 'supporter' },
      { text: 'チームの人間関係を紹介する', type: 'mediator' },
    ],
  },
  {
    id: 9,
    text: 'チームでの自分の強みは？',
    options: [
      { text: '全員をまとめる一体感づくり', type: 'consensus' },
      { text: '専門知識やスキルでの貢献', type: 'specialist' },
      { text: '誰にでも協力できる柔軟さ', type: 'supporter' },
      { text: '人と人を繋ぐ調整力', type: 'mediator' },
    ],
  },
  {
    id: 10,
    text: 'リモートワークでのチーム作業',
    options: [
      { text: 'オンライン会議で顔を合わせたい', type: 'consensus' },
      { text: '自分の作業に集中できて良い', type: 'specialist' },
      { text: 'チャットでこまめに連絡を取る', type: 'supporter' },
      { text: '情報共有の仕組みを整える', type: 'mediator' },
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
  consensus: {
    type: 'consensus',
    title: '一体感重視タイプ',
    emoji: '🤗',
    percentage: 'チームワーク力 90%',
    description: 'チーム全員が同じ方向を向くことを最も大切にするタイプ。一体感を作る力があり、チームの結束を高めます。みんなで一緒に、が合言葉。',
    characteristics: ['一体感', 'コミュニケーション力', '包容力', '共感力', 'ムードメーカー'],
    advice: '素晴らしいチームビルダー！ただ、時には効率も意識してバランスを。',
  },
  specialist: {
    type: 'specialist',
    title: 'スペシャリストタイプ',
    emoji: '🎯',
    percentage: 'チームワーク力 65%',
    description: '自分の専門性でチームに貢献するタイプ。得意分野では頼りにされる存在。専門外は他のメンバーに任せる、プロフェッショナルな協力スタイル。',
    characteristics: ['専門性', 'プロ意識', '責任感', '自立', '貢献意欲'],
    advice: '専門性は大きな武器！チーム全体への関心も持つとさらに信頼度アップ。',
  },
  supporter: {
    type: 'supporter',
    title: '縁の下の力持ちタイプ',
    emoji: '🌟',
    percentage: 'チームワーク力 85%',
    description: '困っている人を放っておけない、サポート精神旺盛なタイプ。目立たないけどチームには欠かせない存在。あなたがいるとみんなが安心します。',
    characteristics: ['献身的', '気配り', '柔軟性', '謙虚', '信頼性'],
    advice: 'あなたの存在はチームの宝！でも自分を犠牲にしすぎないでね。',
  },
  mediator: {
    type: 'mediator',
    title: 'コーディネータータイプ',
    emoji: '🔗',
    percentage: 'チームワーク力 80%',
    description: '人と人を繋ぎ、チーム全体を調整する力があるタイプ。対立を解消し、適材適所で力を引き出します。マネージャーやリーダーに向いています。',
    characteristics: ['調整力', '俯瞰力', '公平', 'コミュニケーション力', 'リーダーシップ'],
    advice: '優秀なコーディネーター！自分の意見を持つことも忘れずに。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { consensus: 0, specialist: 0, supporter: 0, mediator: 0 };

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
