// サプライズへの反応診断
export const questions = [
  {
    id: 1,
    text: 'サプライズ誕生日パーティーを開かれたら？',
    options: [
      { text: '感動して泣いてしまうかも', type: 'emotional' },
      { text: '嬉しい！みんなありがとう！', type: 'delighted' },
      { text: '嬉しいけど、正直ちょっと恥ずかしい', type: 'shy' },
      { text: '事前に知りたかった…準備が…', type: 'planner' },
    ],
  },
  {
    id: 2,
    text: '突然「今から温泉行こう！」と誘われたら？',
    options: [
      { text: '「え！最高！」とテンション上がる', type: 'emotional' },
      { text: '「いいね！行こう！」と即決', type: 'delighted' },
      { text: '「え、今から？」と少し戸惑う', type: 'shy' },
      { text: '「準備する時間ちょうだい」と言う', type: 'planner' },
    ],
  },
  {
    id: 3,
    text: '恋人からプロポーズされた時（想像で）の反応は？',
    options: [
      { text: '感極まって言葉が出ない', type: 'emotional' },
      { text: '「はい！」と元気よく返事', type: 'delighted' },
      { text: '恥ずかしくて顔が真っ赤に', type: 'shy' },
      { text: '「ちょっと考えさせて」と冷静に', type: 'planner' },
    ],
  },
  {
    id: 4,
    text: '会社で突然表彰されることになったら？',
    options: [
      { text: '感動でスピーチがうまくできないかも', type: 'emotional' },
      { text: '堂々と受け取って感謝を述べる', type: 'delighted' },
      { text: '注目されるのが恥ずかしい…', type: 'shy' },
      { text: '事前に言ってくれれば準備したのに', type: 'planner' },
    ],
  },
  {
    id: 5,
    text: 'サプライズプレゼントをもらった時は？',
    options: [
      { text: '「何これ！」と大げさにリアクション', type: 'emotional' },
      { text: '素直に「嬉しい！ありがとう！」', type: 'delighted' },
      { text: 'お返しどうしよう…と考えてしまう', type: 'shy' },
      { text: '何が欲しいか聞いてくれた方が…', type: 'planner' },
    ],
  },
  {
    id: 6,
    text: 'フラッシュモブを目撃したら？',
    options: [
      { text: '思わず涙ぐんでしまう', type: 'emotional' },
      { text: '一緒に盛り上がって楽しむ', type: 'delighted' },
      { text: '見てるだけで恥ずかしくなる', type: 'shy' },
      { text: '「仕込みだな」と冷静に分析', type: 'planner' },
    ],
  },
  {
    id: 7,
    text: '予想外の合格・内定通知が届いたら？',
    options: [
      { text: '嬉し泣きして誰かに電話する', type: 'emotional' },
      { text: 'ガッツポーズで大喜び', type: 'delighted' },
      { text: '信じられなくて何度も確認', type: 'shy' },
      { text: '次のステップを考え始める', type: 'planner' },
    ],
  },
  {
    id: 8,
    text: '旅行先でサプライズの絶景に出会ったら？',
    options: [
      { text: '言葉を失って感動に浸る', type: 'emotional' },
      { text: '「すごい！」と大興奮で写真撮影', type: 'delighted' },
      { text: '静かに眺めて心に刻む', type: 'shy' },
      { text: '「次はここを計画に入れよう」と思う', type: 'planner' },
    ],
  },
  {
    id: 9,
    text: 'サプライズを仕掛けるのは好き？',
    options: [
      { text: '大好き！相手の反応を見るのが楽しい', type: 'emotional' },
      { text: '喜んでもらえるなら企画する', type: 'delighted' },
      { text: '自分がされるより仕掛ける方がいい', type: 'shy' },
      { text: 'サプライズより確実な喜びを', type: 'planner' },
    ],
  },
  {
    id: 10,
    text: 'サプライズについて正直な気持ちは？',
    options: [
      { text: '人生にサプライズは必要！感動の源', type: 'emotional' },
      { text: '嬉しいサプライズなら大歓迎', type: 'delighted' },
      { text: '嬉しいけど、反応に困ることも', type: 'shy' },
      { text: '予定調和の方が安心する', type: 'planner' },
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
  bestSurprise: string;
}> = {
  emotional: {
    type: 'emotional',
    title: '感動爆発タイプ',
    emoji: '😭',
    percentage: '感動度 98%',
    description: 'サプライズに弱い！感動屋のあなた。予想外の出来事に心が大きく揺さぶられ、涙もろくなることも。その素直な反応は、サプライズを仕掛ける側にとって最高のご褒美。',
    characteristics: ['感動屋', '涙もろい', '素直な反応', '感情豊か', 'リアクション大きめ'],
    bestSurprise: 'サプライズパーティー、感動的なサプライズプロポーズ。盛大なほど喜ぶタイプ！',
  },
  delighted: {
    type: 'delighted',
    title: 'ポジティブ受け入れタイプ',
    emoji: '🎉',
    percentage: 'ポジティブ度 95%',
    description: 'サプライズ大歓迎！何が起きても前向きに受け止め、一緒に楽しめるあなた。素直に「嬉しい！ありがとう！」と言えるコミュニケーション上手。周りを幸せにする力がある。',
    characteristics: ['ポジティブ', '素直', 'コミュニケーション上手', '場を盛り上げる', '感謝を伝えられる'],
    bestSurprise: '友達とのサプライズパーティー、突然の旅行。ワイワイ楽しめるサプライズがGOOD！',
  },
  shy: {
    type: 'shy',
    title: '照れ屋さんタイプ',
    emoji: '😊',
    percentage: '照れ度 90%',
    description: 'サプライズは嬉しいけど、注目されると恥ずかしい…そんな奥ゆかしいあなた。内心は喜んでいるのに、表現が控えめになりがち。でもその照れた姿も可愛いと思われています。',
    characteristics: ['照れ屋', '奥ゆかしい', '控えめな反応', '内心は嬉しい', '謙虚'],
    bestSurprise: '少人数でのサプライズ、こっそり渡すプレゼント。大げさじゃないのがポイント！',
  },
  planner: {
    type: 'planner',
    title: '計画重視タイプ',
    emoji: '📅',
    percentage: '計画性 92%',
    description: '嬉しいサプライズでも、心の準備ができていないと戸惑うあなた。「事前に言ってくれれば…」が本音。予測可能な喜びの方が安心するタイプ。計画性の高さは長所です。',
    characteristics: ['計画的', '準備を大切に', '予測可能を好む', '慎重', '安心感重視'],
    bestSurprise: '「○日に予定空けて」と事前告知ありのサプライズ。計画の余地を残すのがコツ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { emotional: 0, delighted: 0, shy: 0, planner: 0 };

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
