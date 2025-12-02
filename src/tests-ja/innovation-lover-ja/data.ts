// イノベーション好き度診断
export const questions = [
  {
    id: 1,
    text: '新しいテクノロジーが登場したら？',
    options: [
      { text: '発売日に手に入れたい！', type: 'innovator' },
      { text: '早めにチェックして試す', type: 'early_adopter' },
      { text: '周りの評価を見てから', type: 'follower' },
      { text: '必要になったら', type: 'laggard' },
    ],
  },
  {
    id: 2,
    text: '新しいアプリやサービスについて',
    options: [
      { text: '常に新しいものを探している', type: 'innovator' },
      { text: '良さそうなら積極的に試す', type: 'early_adopter' },
      { text: '人気が出たら使う', type: 'follower' },
      { text: '今使っているもので十分', type: 'laggard' },
    ],
  },
  {
    id: 3,
    text: 'イノベーティブな会社や製品に魅力を感じる？',
    options: [
      { text: '大好き！応援したい', type: 'innovator' },
      { text: '魅力的だと思う', type: 'early_adopter' },
      { text: '品質が確かなら', type: 'follower' },
      { text: '実績のある会社が安心', type: 'laggard' },
    ],
  },
  {
    id: 4,
    text: '新しいアイデアを聞いたとき',
    options: [
      { text: 'ワクワクする！試したい', type: 'innovator' },
      { text: '興味深い、検討したい', type: 'early_adopter' },
      { text: 'うまくいくか見守る', type: 'follower' },
      { text: '既存の方法で十分', type: 'laggard' },
    ],
  },
  {
    id: 5,
    text: 'ベータ版やプレビュー版を使うことは？',
    options: [
      { text: '大好き！最先端を体験したい', type: 'innovator' },
      { text: '興味があれば試す', type: 'early_adopter' },
      { text: '安定版を待つ', type: 'follower' },
      { text: '完成したものを使いたい', type: 'laggard' },
    ],
  },
  {
    id: 6,
    text: 'AI技術の進化について',
    options: [
      { text: '積極的に活用したい！', type: 'innovator' },
      { text: '便利そうなものは使う', type: 'early_adopter' },
      { text: '様子を見ている', type: 'follower' },
      { text: '今のままでいい', type: 'laggard' },
    ],
  },
  {
    id: 7,
    text: 'クラウドファンディングで新製品を支援することは？',
    options: [
      { text: 'よくする、革新を応援したい', type: 'innovator' },
      { text: '面白いものがあれば', type: 'early_adopter' },
      { text: '完成品が出てから買う', type: 'follower' },
      { text: 'しない', type: 'laggard' },
    ],
  },
  {
    id: 8,
    text: '仕事で新しいツールやシステムを提案されたら？',
    options: [
      { text: '試したい！導入を推進', type: 'innovator' },
      { text: 'メリットがあれば歓迎', type: 'early_adopter' },
      { text: 'まず検証してから', type: 'follower' },
      { text: '今のシステムで問題ない', type: 'laggard' },
    ],
  },
  {
    id: 9,
    text: 'テクノロジーの未来について',
    options: [
      { text: 'ワクワクする！早く来てほしい', type: 'innovator' },
      { text: '楽しみにしている', type: 'early_adopter' },
      { text: '良いことも悪いこともある', type: 'follower' },
      { text: '今のままがいい', type: 'laggard' },
    ],
  },
  {
    id: 10,
    text: '「イノベーション」という言葉を聞いてどう思う？',
    options: [
      { text: '心躍る！大好きな言葉', type: 'innovator' },
      { text: '前向きなイメージ', type: 'early_adopter' },
      { text: '良い面も悪い面も', type: 'follower' },
      { text: 'あまりピンとこない', type: 'laggard' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  level: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  innovator: {
    type: 'innovator',
    title: 'イノベーター',
    emoji: '🚀💡',
    level: 'イノベーション好き度：★★★★★',
    description: '革新を愛し、最先端を追い求めるタイプ！新しいテクノロジーや製品を誰よりも早く試し、イノベーションの波を作り出す存在です。',
    characteristics: ['最先端好き', '新しいもの大好き', 'リスクを恐れない', '変化を楽しむ'],
    tips: ['その好奇心は最高の財産', '周りに新しいものを紹介して', '失敗も楽しんで'],
  },
  early_adopter: {
    type: 'early_adopter',
    title: 'アーリーアダプター',
    emoji: '🌟📱',
    level: 'イノベーション好き度：★★★★☆',
    description: '新しいものに積極的なタイプ。トレンドをキャッチし、良いものは早めに取り入れます。周りにも影響を与えるオピニオンリーダー的存在。',
    characteristics: ['新しいもの好き', 'トレンドに敏感', '影響力がある', '積極的'],
    tips: ['バランスの良いイノベーション志向', '周りへの情報共有を', '新旧のいいとこ取りを'],
  },
  follower: {
    type: 'follower',
    title: 'フォロワー',
    emoji: '👥🔍',
    level: 'イノベーション好き度：★★★☆☆',
    description: '新しいものは周りの評価を見てから取り入れるタイプ。リスクを避け、確実なものを選びます。堅実で失敗が少ない判断ができます。',
    characteristics: ['慎重派', '評価を重視', '堅実', 'リスク回避'],
    tips: ['慎重さは強み', 'たまには新しいものにチャレンジ', '自分のペースで'],
  },
  laggard: {
    type: 'laggard',
    title: '安定志向タイプ',
    emoji: '🏠✨',
    level: 'イノベーション好き度：★★☆☆☆',
    description: '今あるもので十分と考えるタイプ。無駄な変化を避け、安定を重視します。今の良さを大切にし、必要になってから新しいものを取り入れます。',
    characteristics: ['安定志向', '今のものを大切に', '変化は最小限', '実用的'],
    tips: ['安定も大切な価値観', '便利なものは試してみて', '自分のペースで良い'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { innovator: 0, early_adopter: 0, follower: 0, laggard: 0 };

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
