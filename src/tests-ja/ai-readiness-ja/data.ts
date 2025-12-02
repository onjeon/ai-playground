// AI時代適応度診断 (AI 시대 적응도 테스트)
export const questions = [
  {
    id: 1,
    text: 'ChatGPTなどのAIツールについて？',
    options: [
      { text: '日常的に活用している', type: 'enthusiast' },
      { text: '興味を持って試している', type: 'explorer' },
      { text: '聞いたことはあるが使っていない', type: 'observer' },
      { text: 'よくわからない・不安', type: 'cautious' },
    ],
  },
  {
    id: 2,
    text: 'AIが仕事を奪うという話を聞いて？',
    options: [
      { text: 'AIを味方につければチャンス', type: 'enthusiast' },
      { text: '自分のスキルを磨けば大丈夫', type: 'explorer' },
      { text: '少し不安を感じる', type: 'observer' },
      { text: 'かなり心配している', type: 'cautious' },
    ],
  },
  {
    id: 3,
    text: 'AI生成の画像や文章について？',
    options: [
      { text: '自分でも作成して楽しんでいる', type: 'enthusiast' },
      { text: 'クオリティに驚いている', type: 'explorer' },
      { text: '本物との区別が難しくて困る', type: 'observer' },
      { text: '信頼できない・怖い', type: 'cautious' },
    ],
  },
  {
    id: 4,
    text: 'AIアシスタント（Siri, Alexa等）は？',
    options: [
      { text: '毎日のように使っている', type: 'enthusiast' },
      { text: '時々便利に使っている', type: 'explorer' },
      { text: 'あまり使わない', type: 'observer' },
      { text: '話しかけるのに抵抗がある', type: 'cautious' },
    ],
  },
  {
    id: 5,
    text: 'AIの進化についてどう思う？',
    options: [
      { text: '人類の可能性が広がる', type: 'enthusiast' },
      { text: 'メリットもデメリットもある', type: 'explorer' },
      { text: '便利だが不安もある', type: 'observer' },
      { text: '人間らしさが失われそう', type: 'cautious' },
    ],
  },
  {
    id: 6,
    text: 'AIを使った学習や仕事について？',
    options: [
      { text: '積極的に取り入れたい', type: 'enthusiast' },
      { text: '使いどころを考えて活用', type: 'explorer' },
      { text: '周りが使うなら使う', type: 'observer' },
      { text: 'できれば使いたくない', type: 'cautious' },
    ],
  },
  {
    id: 7,
    text: 'AI時代に必要なスキルは？',
    options: [
      { text: 'AIを使いこなす力', type: 'enthusiast' },
      { text: 'AIにできない創造力', type: 'explorer' },
      { text: '人間らしいコミュニケーション力', type: 'observer' },
      { text: '今までの専門スキル', type: 'cautious' },
    ],
  },
  {
    id: 8,
    text: 'AIのニュースや情報は？',
    options: [
      { text: '積極的にキャッチアップしている', type: 'enthusiast' },
      { text: '興味あるものは追っている', type: 'explorer' },
      { text: 'たまに目にする程度', type: 'observer' },
      { text: 'あまり見ないようにしている', type: 'cautious' },
    ],
  },
  {
    id: 9,
    text: 'AIと人間の共存について？',
    options: [
      { text: '協力すれば素晴らしい未来', type: 'enthusiast' },
      { text: 'バランスが大切', type: 'explorer' },
      { text: '人間の仕事は守るべき', type: 'observer' },
      { text: 'AIに頼りすぎは危険', type: 'cautious' },
    ],
  },
  {
    id: 10,
    text: '5年後のAI社会で自分は？',
    options: [
      { text: 'AIを駆使して活躍している', type: 'enthusiast' },
      { text: '上手くAIと付き合っている', type: 'explorer' },
      { text: '変化に適応しようとしている', type: 'observer' },
      { text: '今の生活を守りたい', type: 'cautious' },
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
  futureAdvice: string;
}> = {
  enthusiast: {
    type: 'enthusiast',
    title: 'AIエンスージアスト',
    emoji: '🤖',
    percentage: 'AI適応度 95%',
    description: 'AI時代を歓迎し、最前線で活用するタイプ！新しいAIツールを積極的に試し、その可能性を最大限に引き出します。',
    characteristics: ['先進的思考', '適応力抜群', '楽観的', 'チャレンジ精神', 'テック好き'],
    futureAdvice: 'AIの倫理的側面にも目を向けてバランスを',
  },
  explorer: {
    type: 'explorer',
    title: 'AIエクスプローラー',
    emoji: '🔍',
    percentage: 'AI適応度 75%',
    description: '好奇心を持ってAIを探求するタイプ！メリット・デメリットを冷静に見極めながら、賢く活用しています。',
    characteristics: ['バランス感覚', '学習意欲', '実用主義', '柔軟性', '分析力'],
    futureAdvice: '得意分野でのAI活用を深めてみては',
  },
  observer: {
    type: 'observer',
    title: 'AI見守り隊',
    emoji: '👀',
    percentage: 'AI適応度 50%',
    description: 'AIの動向を見守りながら、慎重に判断するタイプ。焦らず自分のペースで理解を深めています。',
    characteristics: ['慎重', '観察眼', '堅実', '人間重視', '安定志向'],
    futureAdvice: '簡単なAIツールから試してみると世界が広がります',
  },
  cautious: {
    type: 'cautious',
    title: 'AIウォッチャー',
    emoji: '🛡️',
    percentage: 'AI適応度 30%',
    description: 'AIに対して慎重な姿勢を持つタイプ。人間らしさや従来の価値を大切にする視点は、AI時代にも重要です。',
    characteristics: ['伝統重視', '人間中心', '批判的思考', '慎重派', '本質重視'],
    futureAdvice: 'AIを知ることで不安が軽減することもあります',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { enthusiast: 0, explorer: 0, observer: 0, cautious: 0 };

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
