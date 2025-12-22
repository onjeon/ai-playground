// 保険マインド診断 - あなたの保険に対する考え方は？
export const questions = [
  {
    id: 1,
    text: '保険について、正直どう思う？',
    options: [
      { text: '万が一に備える大切なもの', type: 'secure' },
      { text: '必要最低限は入っておくべき', type: 'practical' },
      { text: '正直、よくわからない', type: 'uncertain' },
      { text: '掛け捨てはもったいない気がする', type: 'skeptical' },
    ],
  },
  {
    id: 2,
    text: '保険に加入するとき、何を重視する？',
    options: [
      { text: '保障内容の充実度', type: 'secure' },
      { text: 'コストパフォーマンス', type: 'practical' },
      { text: '知人や営業の人のおすすめ', type: 'uncertain' },
      { text: '貯蓄性や返戻金', type: 'skeptical' },
    ],
  },
  {
    id: 3,
    text: '生命保険について',
    options: [
      { text: '家族のために手厚い保障が必要', type: 'secure' },
      { text: '必要な分だけシンプルに', type: 'practical' },
      { text: '何が必要かよくわからない', type: 'uncertain' },
      { text: '貯金で対応できるのでは', type: 'skeptical' },
    ],
  },
  {
    id: 4,
    text: '医療保険について',
    options: [
      { text: '入院や手術に備えて必須', type: 'secure' },
      { text: '高額療養費制度もあるし最低限で', type: 'practical' },
      { text: 'とりあえず入っている', type: 'uncertain' },
      { text: '日本は公的保険が充実しているから不要かも', type: 'skeptical' },
    ],
  },
  {
    id: 5,
    text: 'がん保険について',
    options: [
      { text: '2人に1人がなる時代、絶対必要', type: 'secure' },
      { text: '家族歴を考慮して判断', type: 'practical' },
      { text: '入った方がいいのかな…と迷い中', type: 'uncertain' },
      { text: '治療費は貯金で対応可能', type: 'skeptical' },
    ],
  },
  {
    id: 6,
    text: '保険料の支払いについて',
    options: [
      { text: '安心のためなら多少高くても良い', type: 'secure' },
      { text: '家計とのバランスを考えて決める', type: 'practical' },
      { text: 'なんとなく今の金額を払い続けている', type: 'uncertain' },
      { text: 'できるだけ安く抑えたい', type: 'skeptical' },
    ],
  },
  {
    id: 7,
    text: '保険の見直しについて',
    options: [
      { text: 'ライフステージに合わせて定期的に見直す', type: 'secure' },
      { text: '大きな変化があったときに検討', type: 'practical' },
      { text: '面倒で放置している', type: 'uncertain' },
      { text: '見直すたびに不要に感じる', type: 'skeptical' },
    ],
  },
  {
    id: 8,
    text: '保険の知識について',
    options: [
      { text: 'しっかり勉強して理解している', type: 'secure' },
      { text: '基本的なことは把握している', type: 'practical' },
      { text: '専門家に任せている', type: 'uncertain' },
      { text: '複雑すぎて理解する気になれない', type: 'skeptical' },
    ],
  },
  {
    id: 9,
    text: '自動車保険について',
    options: [
      { text: '補償は手厚い方が安心', type: 'secure' },
      { text: '対人・対物は無制限、あとは必要最低限', type: 'practical' },
      { text: 'ディーラーに言われるまま加入', type: 'uncertain' },
      { text: 'ネット保険で安さ重視', type: 'skeptical' },
    ],
  },
  {
    id: 10,
    text: '保険に対する本音は？',
    options: [
      { text: '安心を買っていると思う', type: 'secure' },
      { text: '必要経費として割り切っている', type: 'practical' },
      { text: '正直、よくわからないまま払っている', type: 'uncertain' },
      { text: '使わなければ損した気分', type: 'skeptical' },
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
  secure: {
    type: 'secure',
    title: '安心第一タイプ',
    emoji: '🛡️',
    percentage: '安心志向 95%',
    description: '保険を「安心を買うもの」と考えるあなた。万が一に備えて手厚い保障を求める姿勢は、家族思いで責任感の表れ。ただし、過剰な保障になっていないか定期的な見直しも大切です。',
    characteristics: ['リスク回避', '家族思い', '責任感', '慎重', '安定志向'],
    advice: '安心を大切にする姿勢は素晴らしい！でも過剰保障になっていないか、たまにチェックしてね。',
  },
  practical: {
    type: 'practical',
    title: '合理的判断タイプ',
    emoji: '⚖️',
    percentage: 'コスパ重視度 85%',
    description: '保険を合理的に判断できるあなた。必要な保障と保険料のバランスを考え、公的制度も理解した上で選べる堅実派。無駄なくしっかり備えられる、理想的な保険との付き合い方です。',
    characteristics: ['合理的', '情報収集力', 'バランス感覚', '自立的', '現実的'],
    advice: '素晴らしいバランス感覚！その判断力を維持しつつ、定期的な見直しも忘れずに。',
  },
  uncertain: {
    type: 'uncertain',
    title: 'なんとなく加入タイプ',
    emoji: '🤔',
    percentage: '保険迷子度 75%',
    description: '保険についてよくわからないまま、なんとなく加入しているあなた。多くの日本人がそうですので安心してください。でも、一度しっかり内容を確認すると、無駄が減ったり安心が増えたりしますよ。',
    characteristics: ['受け身', 'お任せ主義', '面倒くさがり', '信頼しやすい', '平均的'],
    advice: '今の保険内容、一度確認してみて。意外と不要なものや、足りないものがあるかも。',
  },
  skeptical: {
    type: 'skeptical',
    title: '保険懐疑派タイプ',
    emoji: '🧐',
    percentage: '懐疑度 80%',
    description: '保険に対して懐疑的なあなた。「使わなければ損」「貯金で対応できる」という考えは一理あります。ただし、想定外の大きなリスクには保険が有効な場合も。バランスを考えてみて。',
    characteristics: ['批判的思考', '自己判断', 'コスト意識', '独立心', '合理主義'],
    advice: 'その視点も大切！でも想定外のリスクもあるから、最低限の備えは検討してみて。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { secure: 0, practical: 0, uncertain: 0, skeptical: 0 };

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
