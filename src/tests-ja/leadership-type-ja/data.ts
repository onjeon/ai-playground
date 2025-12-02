// リーダーシップ診断テスト (리더십 유형 테스트)
export const questions = [
  {
    id: 1,
    text: 'チームで問題が起きた時、どう対処する？',
    options: [
      { text: '自分が方向性を決めて指示を出す', type: 'directive' },
      { text: 'メンバーの意見を聞いて一緒に決める', type: 'participative' },
      { text: 'メンバーを信じて任せる', type: 'delegative' },
      { text: '一人ひとりの気持ちに寄り添う', type: 'supportive' },
    ],
  },
  {
    id: 2,
    text: '新しいプロジェクトを始める時は？',
    options: [
      { text: 'ビジョンと計画を明確に示す', type: 'directive' },
      { text: 'みんなでアイデアを出し合う', type: 'participative' },
      { text: '各自の強みを活かして役割分担', type: 'delegative' },
      { text: 'チームの雰囲気づくりから始める', type: 'supportive' },
    ],
  },
  {
    id: 3,
    text: 'メンバーがミスをした時は？',
    options: [
      { text: '問題点を明確に指摘して改善を求める', type: 'directive' },
      { text: '一緒に原因を分析して解決策を考える', type: 'participative' },
      { text: '本人に考えさせて、必要なら助言する', type: 'delegative' },
      { text: 'まず気持ちを受け止めてからサポートする', type: 'supportive' },
    ],
  },
  {
    id: 4,
    text: 'チームのモチベーションを上げる方法は？',
    options: [
      { text: '明確な目標と報酬を設定する', type: 'directive' },
      { text: 'みんなで成功体験を共有する', type: 'participative' },
      { text: '各自のやりたいことをサポートする', type: 'delegative' },
      { text: '一人ひとりを認めて感謝を伝える', type: 'supportive' },
    ],
  },
  {
    id: 5,
    text: '意見が対立した時は？',
    options: [
      { text: '最終的には自分が決断する', type: 'directive' },
      { text: '全員が納得するまで話し合う', type: 'participative' },
      { text: 'それぞれの意見を尊重して折衷案を探す', type: 'delegative' },
      { text: '対立している人の気持ちを聞く', type: 'supportive' },
    ],
  },
  {
    id: 6,
    text: '理想のリーダー像は？',
    options: [
      { text: 'カリスマ性があり、ビジョンを示せる人', type: 'directive' },
      { text: 'みんなの意見をまとめられる人', type: 'participative' },
      { text: 'メンバーの成長を支援できる人', type: 'delegative' },
      { text: '人の気持ちがわかる温かい人', type: 'supportive' },
    ],
  },
  {
    id: 7,
    text: '締め切りが迫っている時は？',
    options: [
      { text: 'タスクを割り振って効率的に進める', type: 'directive' },
      { text: 'みんなで協力して乗り越える', type: 'participative' },
      { text: '各自を信じて進捗を確認する', type: 'delegative' },
      { text: 'メンバーの負担を気にかける', type: 'supportive' },
    ],
  },
  {
    id: 8,
    text: '新メンバーが入ってきた時は？',
    options: [
      { text: 'ルールや期待することを明確に伝える', type: 'directive' },
      { text: 'チームに溶け込めるよう紹介する', type: 'participative' },
      { text: '自分のペースで学べるようサポートする', type: 'delegative' },
      { text: '不安がないか気にかけて声をかける', type: 'supportive' },
    ],
  },
  {
    id: 9,
    text: 'チームの成功をどう評価する？',
    options: [
      { text: '目標達成度や成果で評価する', type: 'directive' },
      { text: 'チーム全体の成長を見る', type: 'participative' },
      { text: '個人の成長と貢献度を見る', type: 'delegative' },
      { text: 'チームの雰囲気や満足度を重視する', type: 'supportive' },
    ],
  },
  {
    id: 10,
    text: 'リーダーとして一番大切にしていることは？',
    options: [
      { text: '結果を出すこと', type: 'directive' },
      { text: 'チームの一体感', type: 'participative' },
      { text: 'メンバーの成長', type: 'delegative' },
      { text: 'みんなの幸せ', type: 'supportive' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  leadershipStyle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  improvementAreas: string;
}> = {
  directive: {
    type: 'directive',
    title: '指揮官タイプ',
    emoji: '👑🎯',
    leadershipStyle: 'リーダーシップスタイル：指示型',
    description: 'あなたは明確なビジョンを持ち、チームを力強くリードする指揮官タイプのリーダーです。決断力と実行力で、チームを目標達成に導きます。',
    characteristics: ['決断力がある', '明確な方向性を示せる', '結果志向', '責任感が強い'],
    strengths: ['危機的状況での対応', 'スピーディーな意思決定', '目標達成力', 'カリスマ性'],
    improvementAreas: 'メンバーの意見にも耳を傾けることで、より強いチームを作れます。',
  },
  participative: {
    type: 'participative',
    title: 'ファシリテータータイプ',
    emoji: '🤝🗣️',
    leadershipStyle: 'リーダーシップスタイル：参加型',
    description: 'あなたはチームの力を引き出し、一緒に答えを見つけるファシリテーターです。みんなの意見を大切にし、民主的なチーム運営ができます。',
    characteristics: ['傾聴力がある', '調整役が得意', 'チームワーク重視', '公平性を大切にする'],
    strengths: ['チームの一体感づくり', '多様な意見の統合', '合意形成', 'モチベーション向上'],
    improvementAreas: '時には素早い決断も必要。状況に応じてスタイルを使い分けましょう。',
  },
  delegative: {
    type: 'delegative',
    title: 'メンタータイプ',
    emoji: '🌱📈',
    leadershipStyle: 'リーダーシップスタイル：委任型',
    description: 'あなたはメンバーの自主性を尊重し、成長を支援するメンタータイプのリーダーです。信頼と権限委譲で、自立したチームを育てます。',
    characteristics: ['信頼する力がある', '育成志向', '自主性を尊重', '長期的な視点'],
    strengths: ['人材育成', '自立したチームづくり', '権限委譲', '個人の強みを活かす'],
    improvementAreas: '明確な方向性を示すことも大切。放任しすぎないバランスが重要です。',
  },
  supportive: {
    type: 'supportive',
    title: 'サポータータイプ',
    emoji: '💙🤗',
    leadershipStyle: 'リーダーシップスタイル：支援型',
    description: 'あなたはメンバーの気持ちに寄り添い、安心できる環境を作るサポータータイプのリーダーです。人を大切にする温かいリーダーシップが魅力です。',
    characteristics: ['共感力が高い', '思いやりがある', '心理的安全性を重視', 'サポート上手'],
    strengths: ['信頼関係の構築', 'メンタルケア', 'チームの心理的安全性', '相談しやすい雰囲気'],
    improvementAreas: '優しさと同時に、必要な時には厳しさも持つことで更に成長できます。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { directive: 0, participative: 0, delegative: 0, supportive: 0 };

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
