// 共感力診断
export const questions = [
  {
    id: 1,
    text: '友達が泣いているとき、あなたは？',
    options: [
      { text: '何と言えばいいかわからない', type: 'low' },
      { text: '「大丈夫？」と声をかける', type: 'medium' },
      { text: '黙ってそばにいる、または一緒に泣く', type: 'high' },
      { text: '言葉にしなくても気持ちが伝わってくる', type: 'empath' },
    ],
  },
  {
    id: 2,
    text: '映画で悲しいシーンを見ると？',
    options: [
      { text: '特に何も感じない', type: 'low' },
      { text: '「悲しいシーンだな」と思う', type: 'medium' },
      { text: '涙が出そうになる', type: 'high' },
      { text: '登場人物と一緒に泣いてしまう', type: 'empath' },
    ],
  },
  {
    id: 3,
    text: '誰かが怒られているのを見ると？',
    options: [
      { text: '自分には関係ないと思う', type: 'low' },
      { text: '「大変だな」と思う', type: 'medium' },
      { text: '自分も少し辛くなる', type: 'high' },
      { text: 'まるで自分が怒られているように感じる', type: 'empath' },
    ],
  },
  {
    id: 4,
    text: '相手の嘘や本音、見抜ける？',
    options: [
      { text: 'あまり気づかない', type: 'low' },
      { text: '明らかな嘘はわかる', type: 'medium' },
      { text: '表情や声のトーンで察することが多い', type: 'high' },
      { text: '言葉にしなくても相手の気持ちがわかる', type: 'empath' },
    ],
  },
  {
    id: 5,
    text: '人混みの中にいるとどう感じる？',
    options: [
      { text: '特に何も感じない', type: 'low' },
      { text: '少し疲れる', type: 'medium' },
      { text: '周りの感情を感じて疲れやすい', type: 'high' },
      { text: '他人の感情をもらってしまう', type: 'empath' },
    ],
  },
  {
    id: 6,
    text: 'ドキュメンタリーで苦しんでいる人を見ると？',
    options: [
      { text: '客観的に見られる', type: 'low' },
      { text: '「かわいそうだな」と思う', type: 'medium' },
      { text: '胸が痛くなる', type: 'high' },
      { text: '何か行動を起こしたくなる', type: 'empath' },
    ],
  },
  {
    id: 7,
    text: '人の相談に乗るとき、どうなる？',
    options: [
      { text: '冷静にアドバイスできる', type: 'low' },
      { text: '話を聞きながら解決策を考える', type: 'medium' },
      { text: '相手の気持ちに寄り添って聞く', type: 'high' },
      { text: '相手の感情が自分に移ってしまう', type: 'empath' },
    ],
  },
  {
    id: 8,
    text: '動物の悲しそうな顔を見ると？',
    options: [
      { text: '特に何も思わない', type: 'low' },
      { text: '「かわいそう」と思う', type: 'medium' },
      { text: '心が痛む', type: 'high' },
      { text: '涙が出そうになる', type: 'empath' },
    ],
  },
  {
    id: 9,
    text: '誰かが成功したとき、どう感じる？',
    options: [
      { text: '「よかったね」と思う程度', type: 'low' },
      { text: '素直に「すごい」と思う', type: 'medium' },
      { text: '自分のことのように嬉しい', type: 'high' },
      { text: '一緒に泣いて喜んでしまう', type: 'empath' },
    ],
  },
  {
    id: 10,
    text: '自分の共感力を一言で表すと？',
    options: [
      { text: 'クールで客観的', type: 'low' },
      { text: '普通くらいだと思う', type: 'medium' },
      { text: '人の気持ちがよくわかる方', type: 'high' },
      { text: '感情のスポンジ、もらいやすい', type: 'empath' },
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
  low: {
    type: 'low',
    title: 'クール分析タイプ',
    emoji: '🧊',
    percentage: '共感力 25%',
    description: '感情に流されず、冷静に物事を判断できるタイプ。客観的な視点を持ち、論理的な思考が得意です。それは大きな強みですが、時には相手の気持ちに寄り添うことも大切かも。',
    characteristics: ['冷静', '論理的', '客観的', '分析的', '理性的'],
    advice: '相手の話を聞くとき、「気持ち」にも注目してみて。',
  },
  medium: {
    type: 'medium',
    title: 'バランス共感タイプ',
    emoji: '🤝',
    percentage: '共感力 55%',
    description: '適度な共感力を持つバランスの取れたタイプ。相手の気持ちを理解しつつも、自分の感情とは適切な距離を保てます。日常生活で困ることはないでしょう。',
    characteristics: ['バランス感覚', '適度な距離感', '安定', '理解力', '協調性'],
    advice: 'そのバランス感覚を大切に。必要な時はもう少し寄り添ってみて。',
  },
  high: {
    type: 'high',
    title: '高共感力タイプ',
    emoji: '💕',
    percentage: '共感力 80%',
    description: '人の気持ちを敏感に感じ取れる豊かな感受性の持ち主。相談されることが多く、「話しやすい」と言われることも。周りの人を癒す存在ですが、自分も疲れないよう注意。',
    characteristics: ['感受性豊か', '思いやり', '直感力', '癒し系', '優しい'],
    advice: '人の感情をもらいすぎないよう、自分の心も大切に。',
  },
  empath: {
    type: 'empath',
    title: 'エンパス（超共感タイプ）',
    emoji: '🌟',
    percentage: '共感力 98%',
    description: '他人の感情をまるで自分のことのように感じ取れる稀有な存在。人の心を深く理解できる反面、感情を「もらって」しまい疲れやすいことも。自分を守る術を身につけることが大切です。',
    characteristics: ['超感受性', 'スピリチュアル', '深い理解力', '繊細', '直感力抜群'],
    advice: '自分の感情と他人の感情を区別する練習をしましょう。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { low: 0, medium: 0, high: 0, empath: 0 };

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
