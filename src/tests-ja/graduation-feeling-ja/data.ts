// 卒業感情タイプ診断
export const questions = [
  {
    id: 1,
    text: '卒業式で涙は出る？',
    options: [
      { text: '号泣する', type: 'emotional' },
      { text: 'じわっと涙ぐむ', type: 'nostalgic' },
      { text: '笑顔で見送る', type: 'hopeful' },
      { text: 'あまり感情が動かない', type: 'practical' },
    ],
  },
  {
    id: 2,
    text: '卒業で一番寂しいことは？',
    options: [
      { text: '友達と離れること', type: 'emotional' },
      { text: '思い出の場所を去ること', type: 'nostalgic' },
      { text: '寂しいより楽しみが勝る', type: 'hopeful' },
      { text: '特に寂しくない', type: 'practical' },
    ],
  },
  {
    id: 3,
    text: '卒業アルバムを見返すのは？',
    options: [
      { text: '見ると泣いてしまう', type: 'emotional' },
      { text: '懐かしくて何度も見る', type: 'nostalgic' },
      { text: 'たまに見る程度', type: 'hopeful' },
      { text: 'ほとんど見ない', type: 'practical' },
    ],
  },
  {
    id: 4,
    text: '卒業式当日の過ごし方は？',
    options: [
      { text: '友達と泣きながら過ごす', type: 'emotional' },
      { text: '校内を歩いて思い出に浸る', type: 'nostalgic' },
      { text: '未来の話で盛り上がる', type: 'hopeful' },
      { text: '淡々と過ごす', type: 'practical' },
    ],
  },
  {
    id: 5,
    text: '卒業メッセージを書くとしたら？',
    options: [
      { text: '感謝の気持ちを込めて長文', type: 'emotional' },
      { text: '思い出を振り返る内容', type: 'nostalgic' },
      { text: 'これからの夢を語る', type: 'hopeful' },
      { text: 'シンプルに一言', type: 'practical' },
    ],
  },
  {
    id: 6,
    text: '「卒業」という言葉から連想するのは？',
    options: [
      { text: '別れ、涙', type: 'emotional' },
      { text: '思い出、青春', type: 'nostalgic' },
      { text: '新しい始まり', type: 'hopeful' },
      { text: '区切り、節目', type: 'practical' },
    ],
  },
  {
    id: 7,
    text: '卒業後、学校に戻りたいと思う？',
    options: [
      { text: '何度でも戻りたい', type: 'emotional' },
      { text: 'たまに懐かしくなる', type: 'nostalgic' },
      { text: '前を向いて進みたい', type: 'hopeful' },
      { text: '特に思わない', type: 'practical' },
    ],
  },
  {
    id: 8,
    text: '卒業で得たものは？',
    options: [
      { text: 'かけがえのない友情', type: 'emotional' },
      { text: '忘れられない思い出', type: 'nostalgic' },
      { text: '成長と自信', type: 'hopeful' },
      { text: '資格や知識', type: 'practical' },
    ],
  },
  {
    id: 9,
    text: '卒業式の歌を聴くと？',
    options: [
      { text: '涙が止まらない', type: 'emotional' },
      { text: '当時を思い出す', type: 'nostalgic' },
      { text: '元気が出る', type: 'hopeful' },
      { text: '特に何も感じない', type: 'practical' },
    ],
  },
  {
    id: 10,
    text: '卒業を一言で表すと？',
    options: [
      { text: '感謝と涙', type: 'emotional' },
      { text: '青春の終わり', type: 'nostalgic' },
      { text: '新たな旅立ち', type: 'hopeful' },
      { text: '通過点', type: 'practical' },
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
  graduationStyle: string;
}> = {
  emotional: {
    type: 'emotional',
    title: '感動・涙型',
    emoji: '😭',
    percentage: '感情度 95%',
    description: '卒業は人生の大イベント！友達との別れに涙が止まらず、感情豊かに卒業を迎えます。',
    characteristics: ['感情豊か', '友情重視', '涙もろい', '思いやり', '絆を大切に'],
    graduationStyle: '泣きながら友達と抱き合うタイプ',
  },
  nostalgic: {
    type: 'nostalgic',
    title: '懐古・思い出型',
    emoji: '📷',
    percentage: 'ノスタルジア度 90%',
    description: '思い出の場所や時間を大切にするタイプ。卒業後も振り返り、懐かしさに浸ります。',
    characteristics: ['思い出重視', 'センチメンタル', '記録好き', '過去を大切に', '感傷的'],
    graduationStyle: '校内を歩いて思い出に浸るタイプ',
  },
  hopeful: {
    type: 'hopeful',
    title: '希望・前向き型',
    emoji: '🌈',
    percentage: '前向き度 88%',
    description: '卒業は新しい始まり！寂しさよりも未来への期待でワクワクしています。',
    characteristics: ['前向き', '楽観的', '挑戦心', '成長志向', 'ポジティブ'],
    graduationStyle: '未来の夢を語り合うタイプ',
  },
  practical: {
    type: 'practical',
    title: '現実・淡々型',
    emoji: '📋',
    percentage: '現実的度 82%',
    description: '卒業は人生の節目として冷静に受け止めるタイプ。感情的になるより、次のステップに備えます。',
    characteristics: ['現実的', '冷静', '合理的', '計画的', '淡々'],
    graduationStyle: 'しっかり準備をして次に進むタイプ',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { emotional: 0, nostalgic: 0, hopeful: 0, practical: 0 };

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
