// やる気の源診断
export const questions = [
  {
    id: 1,
    text: '朝起きて一番やる気が出るのはどんな時？',
    options: [
      { text: '今日達成したい目標があるとき', type: 'achievement' },
      { text: '誰かに会う予定があるとき', type: 'connection' },
      { text: '好きなことができる日', type: 'passion' },
      { text: '給料日や報酬がもらえる日', type: 'reward' },
    ],
  },
  {
    id: 2,
    text: '仕事や勉強で一番頑張れるのは？',
    options: [
      { text: '昇進や資格取得が見えているとき', type: 'achievement' },
      { text: 'チームのみんなと一緒に取り組むとき', type: 'connection' },
      { text: '自分が本当に興味ある分野のとき', type: 'passion' },
      { text: 'ボーナスや評価に直結するとき', type: 'reward' },
    ],
  },
  {
    id: 3,
    text: '落ち込んだとき、やる気を取り戻す方法は？',
    options: [
      { text: '小さな目標を立てて達成する', type: 'achievement' },
      { text: '友達や家族に話を聞いてもらう', type: 'connection' },
      { text: '好きな趣味に没頭する', type: 'passion' },
      { text: '自分へのご褒美を用意する', type: 'reward' },
    ],
  },
  {
    id: 4,
    text: '理想の働き方は？',
    options: [
      { text: 'キャリアアップできる環境', type: 'achievement' },
      { text: 'チームワークを大切にする職場', type: 'connection' },
      { text: '好きなことを仕事にできる環境', type: 'passion' },
      { text: '高収入で安定した仕事', type: 'reward' },
    ],
  },
  {
    id: 5,
    text: '子供の頃、一番嬉しかったのは？',
    options: [
      { text: 'テストで良い点を取ったとき', type: 'achievement' },
      { text: '友達と遊んでいるとき', type: 'connection' },
      { text: '夢中になれる遊びを見つけたとき', type: 'passion' },
      { text: 'お小遣いやプレゼントをもらったとき', type: 'reward' },
    ],
  },
  {
    id: 6,
    text: 'やる気が続かないのはどんなとき？',
    options: [
      { text: '成長を感じられないとき', type: 'achievement' },
      { text: '一人で孤独に作業するとき', type: 'connection' },
      { text: '興味のないことをやるとき', type: 'passion' },
      { text: '見返りが少ないと感じるとき', type: 'reward' },
    ],
  },
  {
    id: 7,
    text: '新しいことを始めるきっかけは？',
    options: [
      { text: 'スキルアップになると思ったから', type: 'achievement' },
      { text: '友達に誘われたから', type: 'connection' },
      { text: '純粋に面白そうだから', type: 'passion' },
      { text: 'お金になりそうだから', type: 'reward' },
    ],
  },
  {
    id: 8,
    text: '休日の過ごし方で充実感を感じるのは？',
    options: [
      { text: '資格の勉強や自己啓発', type: 'achievement' },
      { text: '友人や家族との時間', type: 'connection' },
      { text: '趣味に没頭する時間', type: 'passion' },
      { text: '副業や投資の研究', type: 'reward' },
    ],
  },
  {
    id: 9,
    text: 'SNSで「いいね」が欲しいのは？',
    options: [
      { text: '自分の成果を認めてほしいとき', type: 'achievement' },
      { text: '人とつながりたいとき', type: 'connection' },
      { text: '好きなものを共有したいとき', type: 'passion' },
      { text: 'フォロワーを増やして収益化したいとき', type: 'reward' },
    ],
  },
  {
    id: 10,
    text: '人生で一番大切にしたいものは？',
    options: [
      { text: '自己実現と成長', type: 'achievement' },
      { text: '人との絆と信頼関係', type: 'connection' },
      { text: '好きなことに囲まれた生活', type: 'passion' },
      { text: '経済的な安定と豊かさ', type: 'reward' },
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
  achievement: {
    type: 'achievement',
    title: '達成感追求タイプ',
    emoji: '🏆',
    percentage: '達成欲 90%',
    description: 'あなたのやる気の源は「達成感」。目標を設定し、それをクリアすることで大きなエネルギーを得られます。常に成長を求め、自分を高めていくことに喜びを感じるタイプです。',
    characteristics: ['目標志向', '向上心が強い', '自己成長を重視', '計画的', '結果重視'],
    advice: '高すぎる目標ばかりだと疲れてしまいます。小さな達成も大切にしましょう。',
  },
  connection: {
    type: 'connection',
    title: '人とのつながりタイプ',
    emoji: '🤝',
    percentage: '絆欲求 85%',
    description: 'あなたのやる気の源は「人とのつながり」。誰かと一緒に頑張ること、人の役に立つことで力が湧いてきます。チームの一員として働くときに最もパフォーマンスを発揮できるタイプです。',
    characteristics: ['協調性が高い', '共感力がある', 'チームワーク重視', '人思い', '社交的'],
    advice: '一人の時間も大切です。自分のための時間も確保しましょう。',
  },
  passion: {
    type: 'passion',
    title: '情熱・好奇心タイプ',
    emoji: '🔥',
    percentage: '情熱度 95%',
    description: 'あなたのやる気の源は「純粋な興味と情熱」。好きなことには驚異的な集中力を発揮します。ワクワクする気持ちが最大のエネルギー源。興味のないことには全くやる気が出ないことも。',
    characteristics: ['好奇心旺盛', '集中力が高い', '創造的', '自由人', '熱中型'],
    advice: '興味のないことも時には必要。小さな楽しみを見つける工夫を。',
  },
  reward: {
    type: 'reward',
    title: '報酬・見返りタイプ',
    emoji: '💎',
    percentage: '実利志向 88%',
    description: 'あなたのやる気の源は「具体的な報酬や見返り」。努力に対する明確なリターンがあると、俄然やる気が出ます。現実的で効率を重視する、しっかり者タイプです。',
    characteristics: ['現実的', '効率重視', '計算が得意', '堅実', '目的意識が高い'],
    advice: 'お金や物だけでなく、心の充実も大切な報酬ですよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { achievement: 0, connection: 0, passion: 0, reward: 0 };

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
