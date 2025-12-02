// 固定マインドセット度診断
export const questions = [
  {
    id: 1,
    text: '新しいスキルを学ぶ時、どう思う？',
    options: [
      { text: '才能がないと無理だと思う', type: 'fixed_high' },
      { text: '難しそうだけど挑戦してみる', type: 'fixed_low' },
      { text: '得意な人に任せればいい', type: 'fixed_mid' },
      { text: '努力すれば誰でもできると思う', type: 'growth' },
    ],
  },
  {
    id: 2,
    text: '失敗した時の気持ちは？',
    options: [
      { text: 'やっぱり自分には向いてない', type: 'fixed_high' },
      { text: '次はどうすれば成功するか考える', type: 'growth' },
      { text: 'もう二度と挑戦したくない', type: 'fixed_mid' },
      { text: '悔しいけど学びがあった', type: 'fixed_low' },
    ],
  },
  {
    id: 3,
    text: '他人が成功した時の反応は？',
    options: [
      { text: 'あの人は元々才能があるから', type: 'fixed_high' },
      { text: '努力した結果だと素直に称える', type: 'growth' },
      { text: '自分にはできないと落ち込む', type: 'fixed_mid' },
      { text: '参考にして自分も頑張ろうと思う', type: 'fixed_low' },
    ],
  },
  {
    id: 4,
    text: 'チャレンジングな課題を前にすると？',
    options: [
      { text: 'できそうなものだけ選ぶ', type: 'fixed_mid' },
      { text: '無理だと思って避ける', type: 'fixed_high' },
      { text: '成長のチャンスと捉える', type: 'growth' },
      { text: '少し不安だけどやってみる', type: 'fixed_low' },
    ],
  },
  {
    id: 5,
    text: '自分の能力についてどう思う？',
    options: [
      { text: '生まれ持った才能で決まっている', type: 'fixed_high' },
      { text: '努力次第でいくらでも伸ばせる', type: 'growth' },
      { text: 'ある程度は決まっていると思う', type: 'fixed_mid' },
      { text: '環境や経験で変わると思う', type: 'fixed_low' },
    ],
  },
  {
    id: 6,
    text: '批判やフィードバックを受けた時は？',
    options: [
      { text: '自分を否定されたように感じる', type: 'fixed_high' },
      { text: '改善のヒントとして受け止める', type: 'growth' },
      { text: '聞き流してしまうことが多い', type: 'fixed_mid' },
      { text: '少し傷つくけど参考にする', type: 'fixed_low' },
    ],
  },
  {
    id: 7,
    text: '努力についてどう考える？',
    options: [
      { text: '才能がある人は努力しなくていい', type: 'fixed_high' },
      { text: '努力は成功への唯一の道', type: 'growth' },
      { text: '努力しても限界がある', type: 'fixed_mid' },
      { text: '才能も必要だけど努力も大事', type: 'fixed_low' },
    ],
  },
  {
    id: 8,
    text: '苦手なことに取り組む時は？',
    options: [
      { text: 'どうせできないから避ける', type: 'fixed_high' },
      { text: '克服するチャンスだと思う', type: 'growth' },
      { text: '必要に迫られたらやる', type: 'fixed_mid' },
      { text: '少しずつ練習してみる', type: 'fixed_low' },
    ],
  },
  {
    id: 9,
    text: '他人と比較した時の気持ちは？',
    options: [
      { text: '自分より優れた人を見ると劣等感', type: 'fixed_high' },
      { text: '刺激をもらって自分も成長したい', type: 'growth' },
      { text: '比較しても仕方ないと諦める', type: 'fixed_mid' },
      { text: '自分は自分と割り切る', type: 'fixed_low' },
    ],
  },
  {
    id: 10,
    text: '「頭がいい」と言われたら？',
    options: [
      { text: '才能を認められて嬉しい', type: 'fixed_high' },
      { text: '努力を認められた方が嬉しい', type: 'growth' },
      { text: 'プレッシャーを感じる', type: 'fixed_mid' },
      { text: '素直に嬉しいけど油断しない', type: 'fixed_low' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  level: string;
  description: string;
  characteristics: string[];
  advice: string;
}> = {
  fixed_high: {
    type: 'fixed_high',
    title: '固定マインドセット傾向強',
    emoji: '🔒',
    level: '固定度 85%',
    description: '能力は生まれつき決まっていると考える傾向が強いあなた。失敗を恐れて新しい挑戦を避けがちです。でも大丈夫！マインドセットは変えられます。',
    characteristics: ['失敗を避ける', '批判に敏感', '才能重視', '比較で落ち込む', '現状維持志向'],
    advice: '小さな挑戦から始めてみて。失敗は学びのチャンス！「まだできない」と言い換えてみよう。',
  },
  fixed_mid: {
    type: 'fixed_mid',
    title: '固定マインドセット傾向中',
    emoji: '🔐',
    level: '固定度 60%',
    description: '状況によって固定マインドセットが顔を出すあなた。得意分野では成長志向、苦手分野では固定志向になりやすいです。',
    characteristics: ['選択的挑戦', '安全志向', '現実的', 'バランス型', '慎重派'],
    advice: '苦手なことにも少しずつ挑戦を。成長のプロセスを楽しむ習慣をつけよう！',
  },
  fixed_low: {
    type: 'fixed_low',
    title: '固定マインドセット傾向弱',
    emoji: '🔓',
    level: '固定度 35%',
    description: '成長マインドセットに近いあなた。挑戦を恐れず、失敗からも学ぼうとします。時々不安になることもあるけど、前向きに取り組めます。',
    characteristics: ['挑戦的', '学習意欲あり', '柔軟', '前向き', '努力を認める'],
    advice: 'その調子！自分の成長をもっと意識的に認めて、さらにパワーアップ！',
  },
  growth: {
    type: 'growth',
    title: '成長マインドセット型',
    emoji: '🌱',
    level: '固定度 10%',
    description: '能力は努力で伸ばせると信じるあなた！失敗を恐れず挑戦し、批判も成長の糧にできます。学び続ける姿勢が素晴らしい！',
    characteristics: ['挑戦好き', '失敗から学ぶ', '努力を楽しむ', '他者から学ぶ', '成長志向'],
    advice: '素晴らしい成長マインドセット！周りの人にもその姿勢を広めていこう！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { fixed_high: 0, fixed_mid: 0, fixed_low: 0, growth: 0 };

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
