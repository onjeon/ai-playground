// 冒険心度診断
export const questions = [
  {
    id: 1,
    text: '知らない場所を一人で歩くことについて',
    options: [
      { text: 'ワクワクする！大好き', type: 'high' },
      { text: '興味がある、やってみたい', type: 'medium_high' },
      { text: 'ちょっと不安だけどできる', type: 'medium_low' },
      { text: '怖い、避けたい', type: 'low' },
    ],
  },
  {
    id: 2,
    text: '新しい食べ物を試すことは？',
    options: [
      { text: '何でも試したい！', type: 'high' },
      { text: '興味があれば試す', type: 'medium_high' },
      { text: '慎重に選ぶ', type: 'medium_low' },
      { text: '知っているものが安心', type: 'low' },
    ],
  },
  {
    id: 3,
    text: 'スカイダイビングやバンジージャンプは？',
    options: [
      { text: '絶対やりたい！', type: 'high' },
      { text: '機会があれば挑戦したい', type: 'medium_high' },
      { text: '怖いけど興味はある', type: 'medium_low' },
      { text: '絶対無理', type: 'low' },
    ],
  },
  {
    id: 4,
    text: '旅行先で迷子になったら？',
    options: [
      { text: '冒険の始まり！楽しい', type: 'high' },
      { text: '新しい発見があるかも', type: 'medium_high' },
      { text: '少し不安だけど対処できる', type: 'medium_low' },
      { text: 'パニックになる', type: 'low' },
    ],
  },
  {
    id: 5,
    text: '突然の予定変更は？',
    options: [
      { text: '大歓迎！面白くなりそう', type: 'high' },
      { text: '柔軟に対応できる', type: 'medium_high' },
      { text: 'ちょっと困るけど対応する', type: 'medium_low' },
      { text: '計画通りがいい', type: 'low' },
    ],
  },
  {
    id: 6,
    text: '一人旅について',
    options: [
      { text: '最高の冒険！', type: 'high' },
      { text: '経験してみたい', type: 'medium_high' },
      { text: 'できるけど不安', type: 'medium_low' },
      { text: '誰かと一緒がいい', type: 'low' },
    ],
  },
  {
    id: 7,
    text: '知らない人に話しかけることは？',
    options: [
      { text: '楽しい、新しい出会い', type: 'high' },
      { text: '状況によってはできる', type: 'medium_high' },
      { text: 'ちょっと勇気がいる', type: 'medium_low' },
      { text: '苦手', type: 'low' },
    ],
  },
  {
    id: 8,
    text: '行ったことのない国への旅行は？',
    options: [
      { text: '今すぐ行きたい！', type: 'high' },
      { text: '計画してみたい', type: 'medium_high' },
      { text: 'ツアーなら安心', type: 'medium_low' },
      { text: '国内旅行が安心', type: 'low' },
    ],
  },
  {
    id: 9,
    text: 'リスクを取ることについて',
    options: [
      { text: 'リスクなしに成長なし', type: 'high' },
      { text: '計算されたリスクは取る', type: 'medium_high' },
      { text: 'なるべく避けたい', type: 'medium_low' },
      { text: '安全第一', type: 'low' },
    ],
  },
  {
    id: 10,
    text: '人生で大切にしていることは？',
    options: [
      { text: '新しい経験と冒険', type: 'high' },
      { text: '挑戦と成長', type: 'medium_high' },
      { text: 'バランスと安定', type: 'medium_low' },
      { text: '安心と安全', type: 'low' },
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
  tips: string[];
}> = {
  high: {
    type: 'high',
    title: '真の冒険者',
    emoji: '🏔️🌟',
    level: '冒険心：★★★★★',
    description: '生まれながらの冒険者！未知への挑戦を恐れず、むしろ楽しむタイプ。新しい経験を求めて常に動き続け、人生を最大限に生きています。',
    characteristics: ['未知への好奇心', 'リスクを恐れない', '新しい経験を求める', '行動力がある'],
    tips: ['その冒険心は最高の財産', '安全には気をつけて', '経験を周りにも共有して'],
  },
  medium_high: {
    type: 'medium_high',
    title: 'チャレンジャー',
    emoji: '🎯✨',
    level: '冒険心：★★★★☆',
    description: '挑戦を楽しめるタイプ！計画的にリスクを取り、新しいことに積極的にチャレンジします。冒険心と慎重さのバランスが取れています。',
    characteristics: ['挑戦を楽しむ', '計画的な冒険', '適度なリスクテイク', '成長志向'],
    tips: ['バランスの良さを活かして', 'もう一歩踏み出してみて', '新しい挑戦を続けて'],
  },
  medium_low: {
    type: 'medium_low',
    title: '慎重派アドベンチャラー',
    emoji: '🗺️🔍',
    level: '冒険心：★★★☆☆',
    description: '冒険に興味はあるけど慎重なタイプ。準備をしっかりしてから挑戦するスタイル。安全を確保しながら、少しずつ新しいことに挑戦できます。',
    characteristics: ['慎重な挑戦', '準備を大切にする', '安全を確認してから', '徐々に範囲を広げる'],
    tips: ['小さな挑戦から始めて', '一歩踏み出す勇気を', '成功体験を積み重ねて'],
  },
  low: {
    type: 'low',
    title: '安定志向タイプ',
    emoji: '🏠💕',
    level: '冒険心：★★☆☆☆',
    description: '安心と安定を大切にするタイプ。無理な冒険よりも、慣れた環境での充実を選びます。それも立派な生き方！自分のペースで楽しめることを見つけて。',
    characteristics: ['安定を好む', '計画的', '慎重', '着実'],
    tips: ['無理に冒険する必要はない', '小さな新しいことから', '自分のペースを大切に'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, medium_high: 0, medium_low: 0, low: 0 };

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
