// アドバイスタイプ診断
export const questions = [
  {
    id: 1,
    text: '友達が悩みを相談してきたら？',
    options: [
      { text: '具体的な解決策を提案する', type: 'practical' },
      { text: 'まず気持ちに寄り添う', type: 'empathetic' },
      { text: '客観的な視点を提供する', type: 'analytical' },
      { text: '励まして元気づける', type: 'cheerful' },
    ],
  },
  {
    id: 2,
    text: 'アドバイスをする時に重視するのは？',
    options: [
      { text: '実行可能かどうか', type: 'practical' },
      { text: '相手の気持ち', type: 'empathetic' },
      { text: '論理的な正しさ', type: 'analytical' },
      { text: '前向きになれるか', type: 'cheerful' },
    ],
  },
  {
    id: 3,
    text: '後輩が仕事で失敗したら？',
    options: [
      { text: '具体的な改善策を教える', type: 'practical' },
      { text: 'まず「大変だったね」と声をかける', type: 'empathetic' },
      { text: '原因を一緒に分析する', type: 'analytical' },
      { text: '「次は大丈夫！」と励ます', type: 'cheerful' },
    ],
  },
  {
    id: 4,
    text: 'アドバイスを求められて困ることは？',
    options: [
      { text: '答えがはっきりしない時', type: 'practical' },
      { text: '感情が複雑な時', type: 'empathetic' },
      { text: '情報が不足している時', type: 'analytical' },
      { text: '相手が落ち込みすぎている時', type: 'cheerful' },
    ],
  },
  {
    id: 5,
    text: '理想のアドバイザーは？',
    options: [
      { text: '的確な解決策を示してくれる人', type: 'practical' },
      { text: '心に寄り添ってくれる人', type: 'empathetic' },
      { text: '冷静に分析してくれる人', type: 'analytical' },
      { text: '明るく背中を押してくれる人', type: 'cheerful' },
    ],
  },
  {
    id: 6,
    text: 'アドバイスの後、一番嬉しいのは？',
    options: [
      { text: '問題が解決した報告', type: 'practical' },
      { text: '「話を聞いてくれてありがとう」', type: 'empathetic' },
      { text: '「納得できた」という言葉', type: 'analytical' },
      { text: '相手が笑顔になること', type: 'cheerful' },
    ],
  },
  {
    id: 7,
    text: 'アドバイスの長さは？',
    options: [
      { text: '短く具体的に', type: 'practical' },
      { text: '相手のペースに合わせて', type: 'empathetic' },
      { text: '必要な情報を網羅して', type: 'analytical' },
      { text: '明るく楽しく', type: 'cheerful' },
    ],
  },
  {
    id: 8,
    text: '相手が同じ失敗を繰り返していたら？',
    options: [
      { text: 'より具体的な方法を伝える', type: 'practical' },
      { text: '根気強く寄り添う', type: 'empathetic' },
      { text: 'パターンを指摘する', type: 'analytical' },
      { text: '諦めずに応援し続ける', type: 'cheerful' },
    ],
  },
  {
    id: 9,
    text: 'アドバイスが受け入れられなかった時は？',
    options: [
      { text: '別の方法を提案する', type: 'practical' },
      { text: '相手の気持ちを尊重する', type: 'empathetic' },
      { text: '理由を確認する', type: 'analytical' },
      { text: '「いつでもまた相談して」と伝える', type: 'cheerful' },
    ],
  },
  {
    id: 10,
    text: 'あなたのアドバイススタイルを一言で？',
    options: [
      { text: '実践的でためになる', type: 'practical' },
      { text: '温かくて優しい', type: 'empathetic' },
      { text: '論理的で納得できる', type: 'analytical' },
      { text: '明るくて前向きになれる', type: 'cheerful' },
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
  adviceStyle: string;
}> = {
  practical: {
    type: 'practical',
    title: '実践派アドバイザー',
    emoji: '🛠️',
    percentage: '実践力 95%',
    description: '具体的な解決策を提示する実践派！問題解決に焦点を当て、すぐに使えるアドバイスを提供します。',
    characteristics: ['解決志向', '具体的', '効率的', '行動派', '明確'],
    adviceStyle: '「こうすればいいよ」と明確に示す',
  },
  empathetic: {
    type: 'empathetic',
    title: '共感派アドバイザー',
    emoji: '💖',
    percentage: '共感力 92%',
    description: 'まず相手の気持ちに寄り添う共感派！話を聴くことを大切にし、心のケアを優先します。',
    characteristics: ['共感力', '傾聴', '思いやり', '優しい', '安心感'],
    adviceStyle: '「辛かったね」と気持ちを受け止める',
  },
  analytical: {
    type: 'analytical',
    title: '分析派アドバイザー',
    emoji: '🔬',
    percentage: '分析力 88%',
    description: '状況を客観的に分析して的確に指摘する分析派！論理的な視点から問題の本質を見抜きます。',
    characteristics: ['論理的', '客観的', '洞察力', '冷静', '正確'],
    adviceStyle: '「原因はここにあるね」と分析する',
  },
  cheerful: {
    type: 'cheerful',
    title: '応援派アドバイザー',
    emoji: '📣',
    percentage: '応援力 90%',
    description: '明るく励まして前向きにさせる応援派！ポジティブなエネルギーで相手を元気づけます。',
    characteristics: ['ポジティブ', '励まし上手', '明るい', 'エネルギッシュ', '希望'],
    adviceStyle: '「大丈夫！きっとうまくいくよ」と背中を押す',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { practical: 0, empathetic: 0, analytical: 0, cheerful: 0 };

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
