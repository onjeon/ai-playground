// チームプレイヤー度診断
export const questions = [
  {
    id: 1,
    text: 'グループワークで意見が対立したとき、どうする？',
    options: [
      { text: '自分の意見を押し通す', type: 'solo' },
      { text: '面倒なので黙って従う', type: 'passive' },
      { text: '妥協点を探して調整する', type: 'team' },
      { text: 'チーム全体のために最善策を提案', type: 'leader' },
    ],
  },
  {
    id: 2,
    text: 'チームの誰かがミスをしたら？',
    options: [
      { text: '「自分の担当じゃない」と思う', type: 'solo' },
      { text: '見て見ぬふりをする', type: 'passive' },
      { text: 'さりげなくフォローする', type: 'team' },
      { text: 'チーム全体で解決策を考えようと提案', type: 'leader' },
    ],
  },
  {
    id: 3,
    text: '自分の担当が早く終わった。他のメンバーはまだ作業中。',
    options: [
      { text: '先に帰る/休憩する', type: 'solo' },
      { text: '一応声をかけるけど手伝わない', type: 'passive' },
      { text: '「手伝おうか？」と申し出る', type: 'team' },
      { text: '全員が終わるまで積極的にサポート', type: 'leader' },
    ],
  },
  {
    id: 4,
    text: 'チームでの成功、どう感じる？',
    options: [
      { text: '自分の貢献度が気になる', type: 'solo' },
      { text: '特に何も感じない', type: 'passive' },
      { text: 'チームで達成できて嬉しい', type: 'team' },
      { text: 'みんなの成長が見られて最高', type: 'leader' },
    ],
  },
  {
    id: 5,
    text: 'スポーツをするなら？',
    options: [
      { text: '個人競技が好き（テニス、水泳など）', type: 'solo' },
      { text: 'あまりスポーツに興味がない', type: 'passive' },
      { text: 'チームスポーツが好き', type: 'team' },
      { text: 'チームのキャプテンをやりたい', type: 'leader' },
    ],
  },
  {
    id: 6,
    text: '会議で発言するタイミングは？',
    options: [
      { text: '自分の意見があればすぐ言う', type: 'solo' },
      { text: 'あまり発言しない', type: 'passive' },
      { text: '他の人の意見を聞いてから', type: 'team' },
      { text: '議論を活性化させる発言をする', type: 'leader' },
    ],
  },
  {
    id: 7,
    text: 'チームの雰囲気が悪いとき、どうする？',
    options: [
      { text: '自分には関係ないと思う', type: 'solo' },
      { text: '黙って様子を見る', type: 'passive' },
      { text: 'さりげなく場を和ませようとする', type: 'team' },
      { text: '問題を提起して改善を図る', type: 'leader' },
    ],
  },
  {
    id: 8,
    text: '得意なことがあるとき、チームでどうする？',
    options: [
      { text: '自分だけでやりたい', type: 'solo' },
      { text: '頼まれたらやる', type: 'passive' },
      { text: '進んでその役割を担う', type: 'team' },
      { text: 'みんなにも教えてスキルを共有', type: 'leader' },
    ],
  },
  {
    id: 9,
    text: 'チームの目標達成より、個人の評価が高い場合？',
    options: [
      { text: '個人の評価を優先', type: 'solo' },
      { text: 'どちらでもいい', type: 'passive' },
      { text: 'チームの成功を優先したい', type: 'team' },
      { text: '両方達成できるよう工夫する', type: 'leader' },
    ],
  },
  {
    id: 10,
    text: 'チームワークについてどう思う？',
    options: [
      { text: '一人の方が効率がいい', type: 'solo' },
      { text: '必要なら合わせる', type: 'passive' },
      { text: 'チームで働くのが好き', type: 'team' },
      { text: 'チームの力は無限大', type: 'leader' },
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
    title: '一匹狼タイプ',
    emoji: '🐺',
    percentage: 'チームプレイヤー度 25%',
    description: '一人で成果を出すことを好むタイプ。自分のペースで仕事ができる環境で最も力を発揮します。チームワークは苦手かもしれませんが、個人プレーでは圧倒的な成果を出せる強みがあります。',
    characteristics: ['独立心', '自己完結', '専門性', '集中力', '責任感'],
    advice: 'たまにはチームの力を借りてみて。新しい視点が得られるかも。',
  },
  passive: {
    type: 'passive',
    title: '静観サポータータイプ',
    emoji: '🌙',
    percentage: 'チームプレイヤー度 40%',
    description: '目立つことは好まないけれど、与えられた役割はきちんとこなすタイプ。縁の下の力持ちとして、チームを支えています。もう少し積極的になると、チームからさらに頼りにされるかも。',
    characteristics: ['控えめ', '堅実', '安定感', 'サポート役', '調和'],
    advice: '自分の意見を言ってみて。チームはあなたの声を待っています。',
  },
  team: {
    type: 'team',
    title: 'チームプレイヤータイプ',
    emoji: '⚽',
    percentage: 'チームプレイヤー度 80%',
    description: 'チームで働くことに喜びを感じるタイプ。協調性が高く、メンバーとの関係を大切にします。困っている人を放っておけない優しさがあり、チームに欠かせない存在です。',
    characteristics: ['協調性', '思いやり', 'コミュニケーション力', '柔軟性', '信頼'],
    advice: 'チームのために尽くしすぎないで。自分の成長も大切に。',
  },
  leader: {
    type: 'leader',
    title: 'チームリーダータイプ',
    emoji: '👑',
    percentage: 'チームプレイヤー度 95%',
    description: 'チームを引っ張り、メンバーを成長させることに喜びを感じるリーダータイプ。全体を見渡す視野と、一人ひとりへの配慮を両立できます。あなたがいるとチームのパフォーマンスが上がります。',
    characteristics: ['リーダーシップ', '視野が広い', '育成力', '調整力', '責任感'],
    advice: '素晴らしいリーダーシップ！でも、たまには人に任せることも大切。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { solo: 0, passive: 0, team: 0, leader: 0 };

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
