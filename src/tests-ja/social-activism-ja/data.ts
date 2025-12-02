// 社会活動度診断
export const questions = [
  {
    id: 1,
    text: 'ボランティア活動への参加は？',
    options: [
      { text: '定期的に参加している', type: 'activist' },
      { text: '時々参加する', type: 'engaged' },
      { text: '興味はあるが参加していない', type: 'interested' },
      { text: '参加したことがない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '署名活動への参加は？',
    options: [
      { text: '内容を確認して署名する', type: 'activist' },
      { text: '共感したらサインする', type: 'engaged' },
      { text: 'あまりしない', type: 'interested' },
      { text: 'したことがない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: 'SNSで社会問題についてシェアする？',
    options: [
      { text: '積極的に発信・シェアする', type: 'activist' },
      { text: '時々シェアする', type: 'engaged' },
      { text: '見るだけ', type: 'interested' },
      { text: '関心がない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '地域活動への参加は？',
    options: [
      { text: '積極的に参加している', type: 'activist' },
      { text: '時々参加する', type: 'engaged' },
      { text: '誘われたら行く', type: 'interested' },
      { text: '参加しない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: 'NPOやNGOへの関心は？',
    options: [
      { text: '活動に参加/支援している', type: 'activist' },
      { text: '関心があり情報を追っている', type: 'engaged' },
      { text: '名前は知っている', type: 'interested' },
      { text: 'あまり関心がない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '選挙の投票は？',
    options: [
      { text: '必ず行く、候補者を調べる', type: 'activist' },
      { text: '基本的に行く', type: 'engaged' },
      { text: '行かないこともある', type: 'interested' },
      { text: '行かない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '社会問題についての勉強会などは？',
    options: [
      { text: '参加/主催している', type: 'activist' },
      { text: '興味があれば参加', type: 'engaged' },
      { text: '参加したことがない', type: 'interested' },
      { text: '興味がない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '社会を変えたいと思う？',
    options: [
      { text: '思う、そのために行動している', type: 'activist' },
      { text: '思う', type: 'engaged' },
      { text: '個人では難しいと思う', type: 'interested' },
      { text: '思わない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: 'パブリックコメントを出したことは？',
    options: [
      { text: 'ある', type: 'activist' },
      { text: '知っているが出したことはない', type: 'engaged' },
      { text: '何か知らない', type: 'interested' },
      { text: '興味がない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '社会活動への意識は？',
    options: [
      { text: '市民として当然のこと', type: 'activist' },
      { text: 'できることはしたい', type: 'engaged' },
      { text: '余裕があればしたい', type: 'interested' },
      { text: '自分には関係ない', type: 'minimal' },
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
  activist: {
    type: 'activist',
    title: 'ソーシャルアクティビスト',
    emoji: '✊',
    percentage: '社会活動度 MAX',
    description: '社会を変えるために積極的に行動する！ボランティア、署名、発信…あらゆる手段で社会参加。市民として責任を果たす意識の高いタイプ。',
    characteristics: ['行動力', '社会意識が高い', 'リーダーシップ', '継続力', '影響力'],
    advice: '素晴らしい社会参加！燃え尽きないよう、自分のケアも忘れずに♪',
  },
  engaged: {
    type: 'engaged',
    title: '社会参加型',
    emoji: '🙋',
    percentage: '社会活動度 70%',
    description: '社会問題に関心があり、できる範囲で参加している。投票は欠かさず、機会があればボランティアにも参加する良き市民。',
    characteristics: ['意識的', '参加型', 'バランス型', '成長中', '責任感'],
    advice: '良い社会参加！もう一歩踏み込んで、継続的な活動も検討してみては♪',
  },
  interested: {
    type: 'interested',
    title: 'これから参加派',
    emoji: '🌱',
    percentage: '社会活動度 40%',
    description: '社会問題には関心があるけど、あまり行動に移せていない。でも関心があるのは第一歩！小さなことから始めてみよう。',
    characteristics: ['潜在的関心', 'きっかけ待ち', '可能性あり', '情報不足', '変わりたい'],
    advice: 'まずは投票から、そしてボランティアに一度参加してみては♪',
  },
  minimal: {
    type: 'minimal',
    title: '社会活動無関心タイプ',
    emoji: '😶',
    percentage: '社会活動度 15%',
    description: '社会活動への関心が低い状態。でも社会は一人ひとりの参加で変わっていく。まずは身近な問題から関心を持ってみては？',
    characteristics: ['無関心', '情報不足', 'きっかけがない', '変化の可能性', 'これから'],
    advice: '選挙に行くことから始めてみましょう！あなたの一票も大切な参加です♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { activist: 0, engaged: 0, interested: 0, minimal: 0 };

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
