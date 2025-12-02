// マッチングアプリ性格診断 (매칭 앱 성격 테스트)
export const questions = [
  {
    id: 1,
    text: 'プロフィール写真を選ぶなら？',
    options: [
      { text: 'キメ顔の自撮り', type: 'confident' },
      { text: '友達との楽しそうな写真', type: 'social' },
      { text: '趣味が分かる写真', type: 'authentic' },
      { text: '何度も撮り直した渾身の一枚', type: 'careful' },
    ],
  },
  {
    id: 2,
    text: '自己紹介文の書き方は？',
    options: [
      { text: 'アピールポイントを前面に', type: 'confident' },
      { text: '明るく友達が多いアピール', type: 'social' },
      { text: '正直に自分らしく', type: 'authentic' },
      { text: '何を書けばいいか悩む', type: 'careful' },
    ],
  },
  {
    id: 3,
    text: '気になる相手を見つけたら？',
    options: [
      { text: '迷わず「いいね」', type: 'confident' },
      { text: '共通の友達がいないかチェック', type: 'social' },
      { text: '趣味や価値観をじっくり確認', type: 'authentic' },
      { text: '「いいね」を押すか悩む', type: 'careful' },
    ],
  },
  {
    id: 4,
    text: 'マッチング後の最初のメッセージは？',
    options: [
      { text: '「マッチありがとう！会おう！」', type: 'confident' },
      { text: '「共通の趣味ありますね！」', type: 'social' },
      { text: 'プロフィールを読んで個別の質問', type: 'authentic' },
      { text: '相手が送ってくるのを待つ', type: 'careful' },
    ],
  },
  {
    id: 5,
    text: 'メッセージのやり取りで大切なのは？',
    options: [
      { text: 'テンポよく即レス', type: 'confident' },
      { text: '盛り上がる話題', type: 'social' },
      { text: '相手を知ること', type: 'authentic' },
      { text: '変なこと言わないように', type: 'careful' },
    ],
  },
  {
    id: 6,
    text: '初デートの場所を決めるなら？',
    options: [
      { text: '自分の行きつけのお店', type: 'confident' },
      { text: '話題の人気スポット', type: 'social' },
      { text: '相手の好みに合わせて', type: 'authentic' },
      { text: 'とにかく失敗しない場所', type: 'careful' },
    ],
  },
  {
    id: 7,
    text: '複数の人とマッチしたら？',
    options: [
      { text: '全員と会ってみる', type: 'confident' },
      { text: '楽しくやり取りできる人優先', type: 'social' },
      { text: '一人に絞って真剣に', type: 'authentic' },
      { text: '選べなくて困る', type: 'careful' },
    ],
  },
  {
    id: 8,
    text: 'プロフィールで重視するのは？',
    options: [
      { text: '顔写真', type: 'confident' },
      { text: 'コミュニティや共通点', type: 'social' },
      { text: '価値観や考え方', type: 'authentic' },
      { text: '安全そうかどうか', type: 'careful' },
    ],
  },
  {
    id: 9,
    text: '返信が遅いと感じたら？',
    options: [
      { text: '次の相手を探す', type: 'confident' },
      { text: '「元気？」と追いメッセージ', type: 'social' },
      { text: '忙しいんだなと待つ', type: 'authentic' },
      { text: '何か変なこと言ったか振り返る', type: 'careful' },
    ],
  },
  {
    id: 10,
    text: 'マッチングアプリの使い方は？',
    options: [
      { text: '積極的にガンガン使う', type: 'confident' },
      { text: '友達と一緒に楽しむ', type: 'social' },
      { text: '真剣に相手を探す', type: 'authentic' },
      { text: '慎重に少しずつ', type: 'careful' },
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
  datingTip: string;
}> = {
  confident: {
    type: 'confident',
    title: '肉食系アクティブタイプ',
    emoji: '🦁',
    percentage: '積極度 95%',
    description: '迷わず行動する肉食系。気になったらすぐ「いいね」、マッチしたらすぐ会う。スピード感とアピール力で出会いを掴みます！',
    characteristics: ['積極的', '行動力', '自信がある', 'スピード重視', 'アピール上手'],
    datingTip: '相手のペースにも合わせると好感度アップ！',
  },
  social: {
    type: 'social',
    title: 'ソーシャルエンジョイタイプ',
    emoji: '🎉',
    percentage: 'ソーシャル度 90%',
    description: 'マッチングアプリも楽しむ派。やり取り自体を楽しみ、出会いをポジティブに捉えます。コミュ力高めで会話が弾む！',
    characteristics: ['社交的', 'ポジティブ', '楽しさ重視', 'コミュ力', '明るい'],
    datingTip: '楽しさだけでなく、真剣さも伝えてみて！',
  },
  authentic: {
    type: 'authentic',
    title: '誠実真剣タイプ',
    emoji: '💝',
    percentage: '真剣度 92%',
    description: '真剣に相手を探す誠実派。プロフィールをしっかり読み、価値観の合う人を見極めます。量より質を重視する本気の出会い探し。',
    characteristics: ['誠実', '真剣', '洞察力', '丁寧', '一途'],
    datingTip: 'その誠実さが伝わる人が現れるはず！',
  },
  careful: {
    type: 'careful',
    title: '慎重草食タイプ',
    emoji: '🐰',
    percentage: '慎重度 88%',
    description: '慎重に進める草食系。失敗を恐れて行動が遅くなりがちですが、その分相手のことをよく見ています。安心・安全が第一。',
    characteristics: ['慎重', '控えめ', '観察力', '安心重視', '丁寧'],
    datingTip: '思い切って一歩踏み出してみて！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { confident: 0, social: 0, authentic: 0, careful: 0 };

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
