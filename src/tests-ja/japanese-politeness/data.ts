// 敬語能力テスト (경어 능력 테스트 - 케이고 레벨 진단)
export const questions = [
  {
    id: 1,
    text: '目上の人に「分かりました」と伝える時は？',
    options: [
      { text: '「了解です」', type: 'casual' },
      { text: '「分かりました」', type: 'basic' },
      { text: '「承知いたしました」', type: 'polite' },
      { text: '「かしこまりました」', type: 'master' },
    ],
  },
  {
    id: 2,
    text: 'お客様に「少し待ってください」と言う時は？',
    options: [
      { text: '「ちょっと待ってください」', type: 'casual' },
      { text: '「少々お待ちください」', type: 'basic' },
      { text: '「少々お待ちいただけますでしょうか」', type: 'polite' },
      { text: '「恐れ入りますが、少々お待ちいただけますでしょうか」', type: 'master' },
    ],
  },
  {
    id: 3,
    text: '上司に資料を見せる時は？',
    options: [
      { text: '「これ見てください」', type: 'casual' },
      { text: '「ご覧ください」', type: 'basic' },
      { text: '「ご覧いただけますでしょうか」', type: 'polite' },
      { text: '「お目通しいただけますと幸いです」', type: 'master' },
    ],
  },
  {
    id: 4,
    text: '電話で相手の名前を聞く時は？',
    options: [
      { text: '「お名前は？」', type: 'casual' },
      { text: '「お名前を教えてください」', type: 'basic' },
      { text: '「お名前を伺ってもよろしいでしょうか」', type: 'polite' },
      { text: '「恐れ入りますが、お名前を頂戴できますでしょうか」', type: 'master' },
    ],
  },
  {
    id: 5,
    text: '会議で意見を言う時の前置きは？',
    options: [
      { text: '「思ったんですけど」', type: 'casual' },
      { text: '「私の意見ですが」', type: 'basic' },
      { text: '「僭越ながら申し上げますと」', type: 'polite' },
      { text: '「恐縮ではございますが、一点申し上げてもよろしいでしょうか」', type: 'master' },
    ],
  },
  {
    id: 6,
    text: '取引先にお礼を言う時は？',
    options: [
      { text: '「ありがとうございます」', type: 'casual' },
      { text: '「誠にありがとうございます」', type: 'basic' },
      { text: '「心より感謝申し上げます」', type: 'polite' },
      { text: '「ご高配を賜り、厚く御礼申し上げます」', type: 'master' },
    ],
  },
  {
    id: 7,
    text: '上司に「それは違います」と伝える時は？',
    options: [
      { text: '「違いますよ」', type: 'casual' },
      { text: '「そうではないと思います」', type: 'basic' },
      { text: '「恐れ入りますが、その点については異なるかと存じます」', type: 'polite' },
      { text: '「僭越ながら、若干認識が異なる部分があるかもしれません」', type: 'master' },
    ],
  },
  {
    id: 8,
    text: 'メールで「返事をください」と書く時は？',
    options: [
      { text: '「返事ください」', type: 'casual' },
      { text: '「ご返信ください」', type: 'basic' },
      { text: '「ご返信いただけますと幸いです」', type: 'polite' },
      { text: '「ご多忙のところ恐縮ですが、ご返信賜れますと幸甚に存じます」', type: 'master' },
    ],
  },
  {
    id: 9,
    text: '初対面の人に自己紹介する時は？',
    options: [
      { text: '「〇〇です、よろしく」', type: 'casual' },
      { text: '「〇〇と申します、よろしくお願いします」', type: 'basic' },
      { text: '「〇〇と申します、何卒よろしくお願いいたします」', type: 'polite' },
      { text: '「〇〇と申します、以後お見知りおきいただけますと幸いです」', type: 'master' },
    ],
  },
  {
    id: 10,
    text: 'お客様に断りを入れる時は？',
    options: [
      { text: '「すみません、無理です」', type: 'casual' },
      { text: '「申し訳ございません、できかねます」', type: 'basic' },
      { text: '「誠に恐れ入りますが、ご要望に沿いかねます」', type: 'polite' },
      { text: '「誠に心苦しい限りではございますが、ご期待に沿えず申し訳ございません」', type: 'master' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  level: string;
  description: string;
  strengths: string[];
  improvements: string[];
  famousExample: string;
}> = {
  casual: {
    type: 'casual',
    title: 'タメ口レベル',
    emoji: '😅',
    level: '敬語レベル：★☆☆☆☆',
    description: 'フレンドリーで親しみやすいあなた。ただ、ビジネスシーンでは敬語力アップが必要かも。でも大丈夫、敬語は慣れで身につきます！',
    strengths: ['親しみやすい', 'コミュニケーション力がある', '正直'],
    improvements: ['基本の敬語を覚える', '「です・ます」を意識する', 'ビジネスメールの練習'],
    famousExample: '目指せ！まずは「です・ます」の徹底から',
  },
  basic: {
    type: 'basic',
    title: '敬語初心者レベル',
    emoji: '📚',
    level: '敬語レベル：★★☆☆☆',
    description: '基本的な敬語は使えていますが、もう一段階レベルアップできそう！日常のビジネスシーンは問題なくこなせます。',
    strengths: ['基本の敬語が使える', '丁寧な印象', '学ぶ姿勢がある'],
    improvements: ['謙譲語と尊敬語の使い分け', 'クッション言葉を覚える', 'メール敬語を強化'],
    famousExample: 'まずは「いただく」「申す」「存じる」をマスターしよう',
  },
  polite: {
    type: 'polite',
    title: '敬語上手レベル',
    emoji: '🎓',
    level: '敬語レベル：★★★★☆',
    description: 'しっかりした敬語が使えるあなた。ビジネスシーンで信頼される話し方ができています。あと一歩で敬語マスターです！',
    strengths: ['適切な敬語が使える', '信頼感がある', 'TPOに合わせられる'],
    improvements: ['最上級の敬語表現', '業界特有の言い回し', 'より自然な敬語運用'],
    famousExample: 'ホテルのコンシェルジュのような接客を目指そう',
  },
  master: {
    type: 'master',
    title: '敬語マスターレベル',
    emoji: '👑✨',
    level: '敬語レベル：★★★★★',
    description: '完璧な敬語を操る達人！どんな場面でも適切な言葉遣いができるあなたは、周りからの信頼も厚いはず。まるで秘書や高級ホテルのスタッフのよう。',
    strengths: ['完璧な敬語運用', '最上級のおもてなし', 'どんな場面でも対応可能', '品格がある'],
    improvements: ['後輩に敬語を教える側へ', '敬語の歴史や文化を学ぶ', '相手に合わせた敬語の緩め方'],
    famousExample: '一流秘書や宮内庁職員レベルの敬語力',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { casual: 0, basic: 0, polite: 0, master: 0 };

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
