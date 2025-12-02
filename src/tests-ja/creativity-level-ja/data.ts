// 創造性診断テスト (창의력 레벨 테스트)
export const questions = [
  {
    id: 1,
    text: '新しいアイデアが浮かぶのはどんな時？',
    options: [
      { text: 'シャワーを浴びている時や寝る前', type: 'dreamer' },
      { text: '人と話している時', type: 'collaborator' },
      { text: '資料やデータを見ている時', type: 'analyzer' },
      { text: '実際に手を動かしている時', type: 'maker' },
    ],
  },
  {
    id: 2,
    text: '白い紙を渡されたら何をする？',
    options: [
      { text: '自由に絵や図を描き始める', type: 'dreamer' },
      { text: '誰かと一緒にアイデアを出し合う', type: 'collaborator' },
      { text: 'まず何を書くか計画を立てる', type: 'analyzer' },
      { text: '折り紙や工作に使う', type: 'maker' },
    ],
  },
  {
    id: 3,
    text: '問題解決のアプローチは？',
    options: [
      { text: '全く新しい方法を考える', type: 'dreamer' },
      { text: 'チームで意見を出し合う', type: 'collaborator' },
      { text: '過去の事例を分析する', type: 'analyzer' },
      { text: 'とりあえず試してみる', type: 'maker' },
    ],
  },
  {
    id: 4,
    text: 'クリエイティブな作業をする時の環境は？',
    options: [
      { text: '静かで一人になれる場所', type: 'dreamer' },
      { text: 'カフェなど人がいる場所', type: 'collaborator' },
      { text: '整理整頓された場所', type: 'analyzer' },
      { text: '道具や材料がそろっている場所', type: 'maker' },
    ],
  },
  {
    id: 5,
    text: '「ペンとりんご」で何かを作るとしたら？',
    options: [
      { text: 'りんごに顔を描いてキャラクターを作る', type: 'dreamer' },
      { text: '友達と一緒にゲームを考える', type: 'collaborator' },
      { text: 'りんごの断面をスタンプにする方法を調べる', type: 'analyzer' },
      { text: 'ペンをりんごに刺してオブジェを作る', type: 'maker' },
    ],
  },
  {
    id: 6,
    text: 'インスピレーションの源は？',
    options: [
      { text: '夢や空想', type: 'dreamer' },
      { text: '人との会話', type: 'collaborator' },
      { text: '本や映画などの作品', type: 'analyzer' },
      { text: '日常の中での発見', type: 'maker' },
    ],
  },
  {
    id: 7,
    text: 'アイデアが行き詰まった時は？',
    options: [
      { text: '散歩やぼーっとする時間を作る', type: 'dreamer' },
      { text: '誰かに話を聞いてもらう', type: 'collaborator' },
      { text: '情報を集めて整理する', type: 'analyzer' },
      { text: '違うことをしながら考える', type: 'maker' },
    ],
  },
  {
    id: 8,
    text: '自分の創造性をどう表現する？',
    options: [
      { text: '絵や文章などの表現', type: 'dreamer' },
      { text: 'コミュニケーションやプレゼン', type: 'collaborator' },
      { text: '企画や戦略の立案', type: 'analyzer' },
      { text: 'ものづくりやDIY', type: 'maker' },
    ],
  },
  {
    id: 9,
    text: 'ルールや制約についてどう思う？',
    options: [
      { text: 'ルールは破るためにある', type: 'dreamer' },
      { text: 'みんなで決めたルールは守る', type: 'collaborator' },
      { text: 'ルールの意味を理解してから判断する', type: 'analyzer' },
      { text: 'ルールの中で工夫する', type: 'maker' },
    ],
  },
  {
    id: 10,
    text: '「創造性」と聞いて思い浮かぶ言葉は？',
    options: [
      { text: '自由・夢・想像', type: 'dreamer' },
      { text: 'つながり・共感・コラボ', type: 'collaborator' },
      { text: '革新・発見・知識', type: 'analyzer' },
      { text: '行動・実践・創作', type: 'maker' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  creativityLevel: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  developmentTips: string;
}> = {
  dreamer: {
    type: 'dreamer',
    title: 'ドリーマー型創造性',
    emoji: '🌈💭',
    creativityLevel: '創造性タイプ：夢想家',
    description: 'あなたは自由な発想で、誰も思いつかないようなアイデアを生み出す才能があります。想像力の翼で、新しい世界を切り開くドリーマーです。',
    characteristics: ['自由な発想', '想像力豊か', '既存の枠にとらわれない', '直感型'],
    strengths: ['斬新なアイデア', 'ビジョンを描く力', '芸術的センス', 'インスピレーション'],
    developmentTips: 'アイデアを形にする実行力を身につけると、夢が現実になります。',
  },
  collaborator: {
    type: 'collaborator',
    title: 'コラボレーター型創造性',
    emoji: '🤝✨',
    creativityLevel: '創造性タイプ：協働者',
    description: 'あなたは人との対話の中からアイデアを生み出す才能があります。チームの力を引き出し、共創することで素晴らしい結果を生むコラボレーターです。',
    characteristics: ['コミュニケーション上手', '共感力が高い', 'チームワーク重視', 'アイデアを広げる'],
    strengths: ['ファシリテーション', 'ブレインストーミング', 'チームの創造性を引き出す', '多様な視点'],
    developmentTips: '一人の時間も大切に。内省することで、さらに深いアイデアが生まれます。',
  },
  analyzer: {
    type: 'analyzer',
    title: 'アナライザー型創造性',
    emoji: '🔬💡',
    creativityLevel: '創造性タイプ：分析者',
    description: 'あなたは既存の情報を分析し、新しい組み合わせを見つける才能があります。知識と論理に基づいた、説得力のある創造性を持つアナライザーです。',
    characteristics: ['論理的思考', '知識が豊富', '分析力が高い', '根拠に基づく'],
    strengths: ['リサーチ力', '改善提案', '戦略的思考', '複雑な問題の整理'],
    developmentTips: '時には直感を信じて、論理を超えた発想にも挑戦してみましょう。',
  },
  maker: {
    type: 'maker',
    title: 'メイカー型創造性',
    emoji: '🛠️🎨',
    creativityLevel: '創造性タイプ：創作者',
    description: 'あなたは手を動かしながらアイデアを形にする才能があります。実践の中から発見を得る、行動派のメイカーです。',
    characteristics: ['行動力がある', '実践的', '試行錯誤を楽しむ', '形にする力'],
    strengths: ['プロトタイピング', '実験精神', '問題解決', '完成させる力'],
    developmentTips: '計画を立てる時間も取り入れることで、より効率的に創造できます。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { dreamer: 0, collaborator: 0, analyzer: 0, maker: 0 };

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
