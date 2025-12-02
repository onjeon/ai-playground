// テクノロジー適応度診断 (기술 적응도 테스트)
export const questions = [
  {
    id: 1,
    text: '新しいスマホアプリが出たら？',
    options: [
      { text: 'すぐにダウンロードして試す', type: 'pioneer' },
      { text: '評判を見てから試す', type: 'adapter' },
      { text: '必要になったら使う', type: 'practical' },
      { text: '今のアプリで十分', type: 'traditional' },
    ],
  },
  {
    id: 2,
    text: 'スマホの設定変更は？',
    options: [
      { text: '自分で細かくカスタマイズする', type: 'pioneer' },
      { text: '基本的な設定は自分でできる', type: 'adapter' },
      { text: '必要な時だけ調べながらやる', type: 'practical' },
      { text: '詳しい人に頼む', type: 'traditional' },
    ],
  },
  {
    id: 3,
    text: 'ガジェット（電子機器）について？',
    options: [
      { text: '最新機種は必ずチェック', type: 'pioneer' },
      { text: '興味あるものは調べる', type: 'adapter' },
      { text: '実用的なものだけ関心がある', type: 'practical' },
      { text: 'あまり興味がない', type: 'traditional' },
    ],
  },
  {
    id: 4,
    text: '新しいテクノロジーのニュースを見たら？',
    options: [
      { text: 'ワクワクして詳しく調べる', type: 'pioneer' },
      { text: '自分に関係あれば調べる', type: 'adapter' },
      { text: '流し読みする程度', type: 'practical' },
      { text: 'あまり興味を持たない', type: 'traditional' },
    ],
  },
  {
    id: 5,
    text: 'デジタル決済（QRコード決済など）は？',
    options: [
      { text: '複数使いこなしている', type: 'pioneer' },
      { text: 'よく使うものは登録している', type: 'adapter' },
      { text: '必要に迫られて使い始めた', type: 'practical' },
      { text: '現金が安心', type: 'traditional' },
    ],
  },
  {
    id: 6,
    text: 'パソコンの調子が悪い時は？',
    options: [
      { text: '自分で原因を特定して直す', type: 'pioneer' },
      { text: 'ネットで調べて対処する', type: 'adapter' },
      { text: '再起動してダメなら相談', type: 'practical' },
      { text: 'すぐに詳しい人に頼む', type: 'traditional' },
    ],
  },
  {
    id: 7,
    text: 'オンライン会議ツールは？',
    options: [
      { text: '複数のツールを使いこなす', type: 'pioneer' },
      { text: '仕事で使うものは問題なし', type: 'adapter' },
      { text: '基本操作はできる', type: 'practical' },
      { text: '苦手意識がある', type: 'traditional' },
    ],
  },
  {
    id: 8,
    text: 'クラウドサービス（Google Drive等）は？',
    options: [
      { text: '日常的に活用している', type: 'pioneer' },
      { text: '仕事や趣味で使っている', type: 'adapter' },
      { text: '使い方はなんとなくわかる', type: 'practical' },
      { text: 'よくわからない', type: 'traditional' },
    ],
  },
  {
    id: 9,
    text: 'スマートホーム機器（音声アシスタント等）について？',
    options: [
      { text: '家中で活用している', type: 'pioneer' },
      { text: 'いくつか使っている', type: 'adapter' },
      { text: '興味はあるが使っていない', type: 'practical' },
      { text: '必要性を感じない', type: 'traditional' },
    ],
  },
  {
    id: 10,
    text: 'テクノロジーとの付き合い方は？',
    options: [
      { text: '生活を豊かにする必需品', type: 'pioneer' },
      { text: '便利なツールとして活用', type: 'adapter' },
      { text: '必要最低限使えればいい', type: 'practical' },
      { text: 'あまり頼りたくない', type: 'traditional' },
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
  pioneer: {
    type: 'pioneer',
    title: 'テックパイオニア',
    emoji: '🚀',
    percentage: 'テクノロジー適応度 98%',
    description: '最新テクノロジーを積極的に取り入れるイノベーター！新しいガジェットやサービスを誰よりも早く試し、その便利さを周囲に伝えます。',
    characteristics: ['先進的', '好奇心旺盛', '適応力抜群', 'トレンドセッター', '情報通'],
    advice: '周囲の人にも優しく教えてあげてください',
  },
  adapter: {
    type: 'adapter',
    title: 'スマートアダプター',
    emoji: '💡',
    percentage: 'テクノロジー適応度 78%',
    description: '必要なテクノロジーを上手に取り入れるバランス型！流行に流されず、自分に合ったものを見極めて活用します。',
    characteristics: ['実用主義', 'バランス感覚', '学習意欲', '柔軟性', '効率重視'],
    advice: 'あなたのペースで新しいことに挑戦し続けてください',
  },
  practical: {
    type: 'practical',
    title: 'プラクティカルユーザー',
    emoji: '🔧',
    percentage: 'テクノロジー適応度 55%',
    description: '必要に応じてテクノロジーを使う現実派！派手な機能より、確実に役立つものを求めます。堅実なアプローチが強み。',
    characteristics: ['堅実', '慎重派', '実用重視', '安定志向', '着実'],
    advice: '興味のある分野から少しずつ挑戦してみましょう',
  },
  traditional: {
    type: 'traditional',
    title: 'トラディショナリスト',
    emoji: '📚',
    percentage: 'テクノロジー適応度 30%',
    description: 'アナログの良さを大切にするタイプ！デジタルに頼りすぎない生き方にも価値があります。人との直接的なつながりを重視。',
    characteristics: ['伝統重視', '人間味', '慎重', 'アナログ派', '本質重視'],
    advice: '必要最低限のデジタルスキルは身につけておくと安心です',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { pioneer: 0, adapter: 0, practical: 0, traditional: 0 };

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
