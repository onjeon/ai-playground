// カウンセリング受容度診断 - 心の専門家に頼る準備はできている？
export const questions = [
  {
    id: 1,
    text: '最近、心がつらいと感じたとき、誰かに話したいと思う？',
    options: [
      { text: '絶対に話したくない。自分で解決する', type: 'resistant' },
      { text: '話したいけど、誰にも言えない', type: 'hesitant' },
      { text: '信頼できる人には話せる', type: 'open' },
      { text: '専門家に相談したいと思う', type: 'ready' },
    ],
  },
  {
    id: 2,
    text: 'カウンセリングや心療内科に対するイメージは？',
    options: [
      { text: '弱い人が行くところ', type: 'resistant' },
      { text: '重症な人が行くところ', type: 'hesitant' },
      { text: '心のメンテナンスができる場所', type: 'open' },
      { text: '気軽に利用していいサービス', type: 'ready' },
    ],
  },
  {
    id: 3,
    text: '「悩みを人に話すのは甘え」という考えについて',
    options: [
      { text: 'その通りだと思う', type: 'resistant' },
      { text: '頭ではわかるけど、抵抗がある', type: 'hesitant' },
      { text: '甘えじゃないと思うけど、なかなか実行できない', type: 'open' },
      { text: '甘えではない。必要なこと', type: 'ready' },
    ],
  },
  {
    id: 4,
    text: '友人が「カウンセリングに通ってる」と言ったら？',
    options: [
      { text: '大げさだなと思う', type: 'resistant' },
      { text: '驚くけど、詳しくは聞かない', type: 'hesitant' },
      { text: 'いいことだと思う', type: 'open' },
      { text: '自分も興味があると伝える', type: 'ready' },
    ],
  },
  {
    id: 5,
    text: 'ストレスが溜まったとき、どうする？',
    options: [
      { text: '我慢する。時間が解決する', type: 'resistant' },
      { text: '気分転換でごまかす', type: 'hesitant' },
      { text: '友達や家族に愚痴を言う', type: 'open' },
      { text: '原因を分析して対処法を考える', type: 'ready' },
    ],
  },
  {
    id: 6,
    text: '自分の心の状態を言葉で説明することは？',
    options: [
      { text: '苦手。考えたくもない', type: 'resistant' },
      { text: '難しいけど、聞かれたら答えられる', type: 'hesitant' },
      { text: 'ある程度できると思う', type: 'open' },
      { text: '日頃から意識して観察している', type: 'ready' },
    ],
  },
  {
    id: 7,
    text: 'メンタルヘルスについて学ぶことに興味がある？',
    options: [
      { text: '全くない', type: 'resistant' },
      { text: 'あまりないけど、必要なら学ぶ', type: 'hesitant' },
      { text: 'ある程度興味がある', type: 'open' },
      { text: '積極的に学びたい', type: 'ready' },
    ],
  },
  {
    id: 8,
    text: '「心の不調は病院に行くほどじゃない」と感じる？',
    options: [
      { text: 'よくそう思う', type: 'resistant' },
      { text: 'たまにそう思う', type: 'hesitant' },
      { text: '軽くても相談していいと思う', type: 'open' },
      { text: '予防的に行くのも大切だと思う', type: 'ready' },
    ],
  },
  {
    id: 9,
    text: '過去のつらい経験について話すことは？',
    options: [
      { text: '絶対に話したくない', type: 'resistant' },
      { text: 'できれば避けたい', type: 'hesitant' },
      { text: '信頼できる人となら話せる', type: 'open' },
      { text: '必要なら専門家にも話せる', type: 'ready' },
    ],
  },
  {
    id: 10,
    text: '今後、カウンセリングを受けてみたいと思う？',
    options: [
      { text: '絶対に行かない', type: 'resistant' },
      { text: '今は考えていない', type: 'hesitant' },
      { text: '機会があれば試してみたい', type: 'open' },
      { text: '前向きに検討している', type: 'ready' },
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
  resistant: {
    type: 'resistant',
    title: '自己解決主義タイプ',
    emoji: '🛡️',
    percentage: 'カウンセリング受容度 20%',
    description: '心の問題は自分で解決すべきと考えるタイプ。強さを大切にする一方で、助けを求めることへの抵抗感が強いかもしれません。一人で抱え込みすぎないでくださいね。',
    characteristics: ['自立心が強い', '我慢強い', '助けを求めにくい', '自己完結型', '強さへのこだわり'],
    advice: '強さは助けを求められることも含みます。心のSOSに耳を傾けて。',
  },
  hesitant: {
    type: 'hesitant',
    title: '様子見慎重タイプ',
    emoji: '🤔',
    percentage: 'カウンセリング受容度 45%',
    description: 'カウンセリングの必要性は理解しているけど、実際に一歩踏み出すには抵抗があるタイプ。「そこまでじゃない」と感じやすいかも。でも、軽い段階での相談も大切ですよ。',
    characteristics: ['慎重', '自己判断重視', '周りの目を気にする', '我慢しがち', '段階を踏む'],
    advice: '「重症じゃないと行けない」は誤解。気軽に相談していい場所です。',
  },
  open: {
    type: 'open',
    title: '柔軟オープンタイプ',
    emoji: '💭',
    percentage: 'カウンセリング受容度 70%',
    description: '心の専門家に相談することに対してオープンな姿勢を持っているタイプ。自分の心の状態を理解しようとする意識があり、必要なときは助けを求められる柔軟さがあります。',
    characteristics: ['柔軟', '自己理解への関心', 'バランス感覚', '成長志向', 'オープンマインド'],
    advice: '良い姿勢です！興味があるなら、一度試してみるのもいいかも。',
  },
  ready: {
    type: 'ready',
    title: 'セルフケア意識高いタイプ',
    emoji: '🌱',
    percentage: 'カウンセリング受容度 90%',
    description: '心のケアを大切にし、専門家の力を借りることに前向きなタイプ。メンタルヘルスへの理解が深く、予防的なケアの重要性もわかっています。素晴らしい自己管理能力！',
    characteristics: ['自己理解が深い', '予防意識', '成長志向', 'メンタルリテラシー高い', '行動力'],
    advice: '素晴らしい姿勢！その意識を周りにも広げていってください。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { resistant: 0, hesitant: 0, open: 0, ready: 0 };

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
