// 自己主張度診断
export const questions = [
  {
    id: 1,
    text: 'レストランで注文と違う料理が来た。どうする？',
    options: [
      { text: 'そのまま食べる...言いづらい', type: 'passive' },
      { text: '少し迷うけど、やっぱり言う', type: 'moderate' },
      { text: 'すぐに「これ違います」と伝える', type: 'assertive' },
      { text: '「頼んだのと違うんですけど！」と強めに', type: 'aggressive' },
    ],
  },
  {
    id: 2,
    text: '会議で自分の意見と違う方向に進んでいる。どうする？',
    options: [
      { text: '黙って従う', type: 'passive' },
      { text: '会議後に上司にこっそり相談', type: 'moderate' },
      { text: 'その場で「別の視点もあります」と発言', type: 'assertive' },
      { text: '「それは間違いだと思います」と反論', type: 'aggressive' },
    ],
  },
  {
    id: 3,
    text: '友達に貸したお金を返してもらえない。1ヶ月経ったら？',
    options: [
      { text: '自分から言い出せない、待つ', type: 'passive' },
      { text: '遠回しに「最近お金なくて〜」と匂わせる', type: 'moderate' },
      { text: '「そろそろ返してもらえる？」と聞く', type: 'assertive' },
      { text: '「早く返して」と強く要求', type: 'aggressive' },
    ],
  },
  {
    id: 4,
    text: '行きたくない飲み会に誘われたら？',
    options: [
      { text: '断れなくて行ってしまう', type: 'passive' },
      { text: '曖昧に「ちょっと予定が...」と濁す', type: 'moderate' },
      { text: '「今回は遠慮します」と丁寧に断る', type: 'assertive' },
      { text: '「行きたくない」とストレートに', type: 'aggressive' },
    ],
  },
  {
    id: 5,
    text: '仕事で不当な扱いを受けたと感じたら？',
    options: [
      { text: '我慢する、波風立てたくない', type: 'passive' },
      { text: '信頼できる同僚に愚痴る', type: 'moderate' },
      { text: '上司に冷静に相談する', type: 'assertive' },
      { text: '人事や上層部に即クレーム', type: 'aggressive' },
    ],
  },
  {
    id: 6,
    text: '電車で足を踏まれた。相手は気づいていない様子。',
    options: [
      { text: '痛いけど何も言わない', type: 'passive' },
      { text: '「あの...」と小声で言ってみる', type: 'moderate' },
      { text: '「すみません、足が...」と伝える', type: 'assertive' },
      { text: '「痛い！」と大きな声で', type: 'aggressive' },
    ],
  },
  {
    id: 7,
    text: '好きな人ができた。どうアプローチする？',
    options: [
      { text: '見ているだけで満足...告白なんて無理', type: 'passive' },
      { text: '友達経由で様子を探る', type: 'moderate' },
      { text: '自分から食事に誘ってみる', type: 'assertive' },
      { text: '好きだと即告白する', type: 'aggressive' },
    ],
  },
  {
    id: 8,
    text: '隣の席の人がうるさい。集中できないとき？',
    options: [
      { text: 'イヤホンで対処、何も言わない', type: 'passive' },
      { text: 'ため息や態度で気づかせようとする', type: 'moderate' },
      { text: '「すみません、少し静かにしてもらえますか」', type: 'assertive' },
      { text: '「うるさい！」と直接注意', type: 'aggressive' },
    ],
  },
  {
    id: 9,
    text: '自分の功績が他人のものとして発表された！',
    options: [
      { text: '悔しいけど黙っている', type: 'passive' },
      { text: '陰で「あれ私のアイデアなんだけど」と愚痴', type: 'moderate' },
      { text: '上司に事実を説明する', type: 'assertive' },
      { text: 'その場で「それは私の成果です」と主張', type: 'aggressive' },
    ],
  },
  {
    id: 10,
    text: '自分を一言で表すと？',
    options: [
      { text: '控えめで調和を大切にする人', type: 'passive' },
      { text: '状況を見て対応を変える人', type: 'moderate' },
      { text: '言うべきことは言える人', type: 'assertive' },
      { text: '思ったことはすぐ言う人', type: 'aggressive' },
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
  passive: {
    type: 'passive',
    title: '控えめ調和タイプ',
    emoji: '🕊️',
    percentage: '自己主張度 20%',
    description: '争いを避け、周りとの調和を大切にするタイプ。優しくて気遣いができる反面、自分の気持ちを押し殺してしまいがち。あなたの意見にも価値があることを忘れないで。',
    characteristics: ['平和主義', '優しい', '気遣い上手', '協調性', '謙虚'],
    advice: '小さなことから「私はこう思う」と言う練習を始めてみて。',
  },
  moderate: {
    type: 'moderate',
    title: 'バランス探求タイプ',
    emoji: '🌊',
    percentage: '自己主張度 50%',
    description: '状況に応じて主張するかどうかを判断できるタイプ。空気を読む力がありますが、もう少し自分の意見を伝える勇気を持っても大丈夫。遠回しより直接伝えた方が伝わりますよ。',
    characteristics: ['バランス感覚', '状況判断力', '柔軟', '気配り', '慎重'],
    advice: '遠回しではなく、ストレートに伝える練習をしてみて。',
  },
  assertive: {
    type: 'assertive',
    title: 'アサーティブ達人',
    emoji: '💪',
    percentage: '自己主張度 80%',
    description: '自分の意見を相手を尊重しながら伝えられる理想的なコミュニケーションタイプ。NO と言えるし、自分の権利も守れる。周りからは頼りになる人と思われているはず。',
    characteristics: ['自信がある', '冷静', '公平', '尊重', 'リーダーシップ'],
    advice: '素晴らしいバランス感覚。その調子で自信を持って。',
  },
  aggressive: {
    type: 'aggressive',
    title: 'ストレート直球タイプ',
    emoji: '🔥',
    percentage: '自己主張度 95%',
    description: '思ったことをそのまま言える強いメンタルの持ち主。決断力があり、リーダーシップを発揮できます。ただ、時には相手の気持ちも考えた伝え方をすると、より良い関係が築けるかも。',
    characteristics: ['決断力', '行動力', 'ストレート', '強気', 'リーダー'],
    advice: '主張する前に一呼吸。相手の立場も考えてみて。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { passive: 0, moderate: 0, assertive: 0, aggressive: 0 };

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
