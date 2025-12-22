// ユーモアスタイル診断 - あなたの笑いのセンスは？
export const questions = [
  {
    id: 1,
    text: 'どんな笑いが一番好き？',
    options: [
      { text: 'ダジャレ・言葉遊び', type: 'intellectual' },
      { text: 'ツッコミ・ボケ', type: 'manzai' },
      { text: '自虐ネタ', type: 'self_deprecating' },
      { text: 'シュール・不条理', type: 'surreal' },
    ],
  },
  {
    id: 2,
    text: 'お笑い芸人で好きなタイプは？',
    options: [
      { text: 'インテリ系・博識なツッコミ', type: 'intellectual' },
      { text: '正統派漫才師', type: 'manzai' },
      { text: '親しみやすいいじられキャラ', type: 'self_deprecating' },
      { text: '独特の世界観を持つ芸人', type: 'surreal' },
    ],
  },
  {
    id: 3,
    text: '友達との会話で笑いを取るなら？',
    options: [
      { text: '上手い例え話や言葉遊び', type: 'intellectual' },
      { text: 'タイミング良いツッコミ', type: 'manzai' },
      { text: '自分の失敗談をネタに', type: 'self_deprecating' },
      { text: '予想外のボケで驚かせる', type: 'surreal' },
    ],
  },
  {
    id: 4,
    text: 'スベったとき、どうする？',
    options: [
      { text: '「今の分かった？」と解説する', type: 'intellectual' },
      { text: '「スベったわー！」と自分でツッコむ', type: 'manzai' },
      { text: '「ほら、俺ってこうだから…」と自虐', type: 'self_deprecating' },
      { text: '気にせず次のボケに行く', type: 'surreal' },
    ],
  },
  {
    id: 5,
    text: '笑わせたい相手は？',
    options: [
      { text: '知的な人、センスが分かる人', type: 'intellectual' },
      { text: 'みんな、場全体', type: 'manzai' },
      { text: '親しい友達', type: 'self_deprecating' },
      { text: '分かる人だけ分かればいい', type: 'surreal' },
    ],
  },
  {
    id: 6,
    text: 'SNSで面白いと思う投稿は？',
    options: [
      { text: '上手いパロディや風刺', type: 'intellectual' },
      { text: '絶妙なタイミングのリプ芸', type: 'manzai' },
      { text: '失敗談や日常のドジ話', type: 'self_deprecating' },
      { text: 'シュールな画像や意味不明ネタ', type: 'surreal' },
    ],
  },
  {
    id: 7,
    text: '好きなお笑い番組のジャンルは？',
    options: [
      { text: 'クイズ・トーク番組', type: 'intellectual' },
      { text: '漫才・コント番組', type: 'manzai' },
      { text: 'バラエティ・ドッキリ', type: 'self_deprecating' },
      { text: '深夜のシュール番組', type: 'surreal' },
    ],
  },
  {
    id: 8,
    text: '映画やドラマで笑うシーンは？',
    options: [
      { text: '洗練されたウィットに富んだセリフ', type: 'intellectual' },
      { text: '掛け合いの妙', type: 'manzai' },
      { text: 'ドジなキャラクターの失敗', type: 'self_deprecating' },
      { text: '脈絡のない不思議な展開', type: 'surreal' },
    ],
  },
  {
    id: 9,
    text: '笑いで大切にしていることは？',
    options: [
      { text: '知性とセンス', type: 'intellectual' },
      { text: 'テンポとタイミング', type: 'manzai' },
      { text: '親しみやすさ', type: 'self_deprecating' },
      { text: '独自性', type: 'surreal' },
    ],
  },
  {
    id: 10,
    text: '「面白い人」と言われたい？',
    options: [
      { text: '「センスいい」と言われたい', type: 'intellectual' },
      { text: '「一緒にいると楽しい」と言われたい', type: 'manzai' },
      { text: '「親しみやすい」と言われたい', type: 'self_deprecating' },
      { text: '「独特で不思議」と言われたい', type: 'surreal' },
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
  intellectual: {
    type: 'intellectual',
    title: 'インテリユーモアタイプ',
    emoji: '🎓',
    percentage: '知性派ユーモア',
    description: '言葉遊びや風刺、パロディが得意なタイプ。知識と教養に裏打ちされた笑いを好みます。分かる人には刺さるけど、万人受けはしないかも。それがまた良い。',
    characteristics: ['知的', 'ウィット', '言葉遊び', '風刺', 'センス重視'],
    advice: 'たまには分かりやすいネタも挟むと、もっと多くの人と笑いを共有できるかも。',
  },
  manzai: {
    type: 'manzai',
    title: '正統派お笑いタイプ',
    emoji: '🎤',
    percentage: '王道エンターテイナー',
    description: 'ツッコミとボケ、テンポを大切にする正統派タイプ。場の空気を読んで、絶妙なタイミングで笑いを取れます。みんなを楽しませることが得意。',
    characteristics: ['エンターテイナー', 'テンポ感', '場の空気', 'コミュ力', '盛り上げ上手'],
    advice: 'その才能を活かして！ムードメーカーとして重宝されるはず。',
  },
  self_deprecating: {
    type: 'self_deprecating',
    title: '自虐ユーモアタイプ',
    emoji: '😅',
    percentage: '親しみやすさMAX',
    description: '自分をネタにすることで場を和ませるタイプ。敵を作らず、誰からも親しまれます。自分を客観的に見られる賢さの裏返しでもあります。',
    characteristics: ['親しみやすい', '謙虚', '場を和ませる', '共感力', '人たらし'],
    advice: '自虐しすぎると心配されることも。たまには自分を褒めることも大切。',
  },
  surreal: {
    type: 'surreal',
    title: 'シュール芸人タイプ',
    emoji: '🌀',
    percentage: '独自路線の天才',
    description: '予想を裏切る不条理な笑いを好むタイプ。独自の世界観を持ち、分かる人には熱狂的に支持されます。天才か変人か、紙一重の存在。',
    characteristics: ['独創的', 'シュール', '予測不能', '唯一無二', 'カルト的人気'],
    advice: 'その独自性を大切に！分かってくれる人を見つければ最高の相棒に。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { intellectual: 0, manzai: 0, self_deprecating: 0, surreal: 0 };

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
