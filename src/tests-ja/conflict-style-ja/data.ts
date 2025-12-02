// 対立への対応診断テスト (갈등 대처 테스트)
export const questions = [
  {
    id: 1,
    text: '友達と意見が合わない時は？',
    options: [
      { text: '自分の意見を論理的に主張する', type: 'competing' },
      { text: 'お互いの意見の妥協点を探す', type: 'compromising' },
      { text: '相手の意見を尊重して譲る', type: 'accommodating' },
      { text: '話題を変えて対立を避ける', type: 'avoiding' },
    ],
  },
  {
    id: 2,
    text: '仕事でトラブルが発生した時は？',
    options: [
      { text: '問題を直視して解決に向かう', type: 'competing' },
      { text: '関係者と話し合って折り合いをつける', type: 'compromising' },
      { text: '周りのやり方に合わせる', type: 'accommodating' },
      { text: '様子を見て自然に収まるのを待つ', type: 'avoiding' },
    ],
  },
  {
    id: 3,
    text: '恋人とケンカした時は？',
    options: [
      { text: '自分の気持ちをはっきり伝える', type: 'competing' },
      { text: 'お互いに歩み寄りを探る', type: 'compromising' },
      { text: '相手を優先して自分が引く', type: 'accommodating' },
      { text: '冷却期間を置いて距離を取る', type: 'avoiding' },
    ],
  },
  {
    id: 4,
    text: '集団で意見が分かれた時は？',
    options: [
      { text: '正しいと思う意見を推し進める', type: 'competing' },
      { text: 'みんなが納得できる落とし所を探す', type: 'compromising' },
      { text: '多数派の意見に従う', type: 'accommodating' },
      { text: '自分は関与せず見守る', type: 'avoiding' },
    ],
  },
  {
    id: 5,
    text: 'SNSで炎上しそうな話題を見た時は？',
    options: [
      { text: '自分の意見をはっきり発信する', type: 'competing' },
      { text: 'バランスの取れた意見を述べる', type: 'compromising' },
      { text: '空気を読んで控えめにリアクション', type: 'accommodating' },
      { text: 'スルーする', type: 'avoiding' },
    ],
  },
  {
    id: 6,
    text: '苦手な人と一緒に仕事をする時は？',
    options: [
      { text: '問題があれば直接話し合う', type: 'competing' },
      { text: 'お互いの役割分担を決めて進める', type: 'compromising' },
      { text: '相手に合わせて波風を立てない', type: 'accommodating' },
      { text: 'なるべく関わらないようにする', type: 'avoiding' },
    ],
  },
  {
    id: 7,
    text: '理不尽な要求をされた時は？',
    options: [
      { text: 'はっきり断る', type: 'competing' },
      { text: '条件を交渉する', type: 'compromising' },
      { text: '仕方なく受け入れる', type: 'accommodating' },
      { text: 'うまくかわして逃げる', type: 'avoiding' },
    ],
  },
  {
    id: 8,
    text: '家族と価値観が合わない時は？',
    options: [
      { text: '自分の考えを説明して理解を求める', type: 'competing' },
      { text: 'お互いの考えを尊重しつつ妥協点を探す', type: 'compromising' },
      { text: '家族の意見を優先する', type: 'accommodating' },
      { text: 'その話題を避ける', type: 'avoiding' },
    ],
  },
  {
    id: 9,
    text: '対立が続くと感じる気持ちは？',
    options: [
      { text: '解決するまで戦い続けたい', type: 'competing' },
      { text: '早く解決して関係を修復したい', type: 'compromising' },
      { text: '自分が我慢すれば済むなら...', type: 'accommodating' },
      { text: 'ストレスがたまるので逃げたい', type: 'avoiding' },
    ],
  },
  {
    id: 10,
    text: '対立への自分の姿勢を一言で表すと？',
    options: [
      { text: '正義を貫く', type: 'competing' },
      { text: 'Win-Winを目指す', type: 'compromising' },
      { text: '和を以て貴しとなす', type: 'accommodating' },
      { text: '君子危うきに近寄らず', type: 'avoiding' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  conflictStyle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  improvementTips: string;
}> = {
  competing: {
    type: 'competing',
    title: '競争型タイプ',
    emoji: '🦁⚔️',
    conflictStyle: '対立スタイル：競争型',
    description: 'あなたは自分の意見や権利をしっかり主張するタイプ。正しいと思うことは曲げない、強い信念の持ち主です。',
    characteristics: ['自己主張が強い', '決断力がある', '目標達成志向', '正義感が強い'],
    strengths: ['リーダーシップ', '迅速な意思決定', '自分の立場を守る力', '問題解決力'],
    improvementTips: '相手の立場も理解しようとすることで、より良い解決策が見つかることがあります。',
  },
  compromising: {
    type: 'compromising',
    title: '妥協型タイプ',
    emoji: '🤝⚖️',
    conflictStyle: '対立スタイル：妥協型',
    description: 'あなたはWin-Winの解決を目指すバランス型。お互いが納得できる落とし所を見つけるのが得意です。',
    characteristics: ['交渉上手', 'バランス感覚', '公平性を重視', '実践的'],
    strengths: ['調整力', '合意形成', '人間関係の維持', '現実的な解決策'],
    improvementTips: '時には妥協せず、本質的な解決を目指すことも大切です。',
  },
  accommodating: {
    type: 'accommodating',
    title: '受容型タイプ',
    emoji: '🕊️💚',
    conflictStyle: '対立スタイル：受容型',
    description: 'あなたは関係性を大切にし、相手を優先するタイプ。調和を重んじる優しい心の持ち主です。',
    characteristics: ['思いやりがある', '協調性が高い', '関係性重視', '寛容'],
    strengths: ['良好な人間関係', '謙虚さ', '相手への配慮', 'チームワーク'],
    improvementTips: '自分の気持ちも大切に。時には自分の意見を主張することも必要です。',
  },
  avoiding: {
    type: 'avoiding',
    title: '回避型タイプ',
    emoji: '🐢🌿',
    conflictStyle: '対立スタイル：回避型',
    description: 'あなたは対立を避けて平和を保つタイプ。ストレスを避け、自分のペースを大切にする賢さがあります。',
    characteristics: ['平和主義', '慎重', 'ストレスを避ける', '冷静'],
    strengths: ['冷静な判断', '不要な対立を避ける', 'ストレス管理', '時間が解決することも知っている'],
    improvementTips: '重要な問題は先延ばしにせず、向き合う勇気も持ちましょう。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { competing: 0, compromising: 0, accommodating: 0, avoiding: 0 };

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
