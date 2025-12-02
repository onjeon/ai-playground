// 愛着スタイル診断 (애착 스타일 테스트)
export const questions = [
  {
    id: 1,
    text: '恋人からの連絡が遅いと感じた時は？',
    options: [
      { text: '特に気にならない、自分の時間を楽しむ', type: 'secure' },
      { text: '何かあったのか少し心配になる', type: 'anxious' },
      { text: '連絡なくても平気、むしろ楽', type: 'avoidant' },
      { text: '不安だけど、自分から連絡するのも怖い', type: 'fearful' },
    ],
  },
  {
    id: 2,
    text: '恋人との距離感について、理想は？',
    options: [
      { text: '適度な距離感を保ちつつ、信頼し合う', type: 'secure' },
      { text: 'できるだけ一緒にいたい', type: 'anxious' },
      { text: '自分の時間と空間を大切にしたい', type: 'avoidant' },
      { text: '近づきたいけど、近づくのが怖い', type: 'fearful' },
    ],
  },
  {
    id: 3,
    text: '恋人に不満があった時は？',
    options: [
      { text: '冷静に話し合って解決する', type: 'secure' },
      { text: '相手の反応が怖くて言い出せない', type: 'anxious' },
      { text: '言っても仕方ないと思って黙っている', type: 'avoidant' },
      { text: '言いたいけど、関係が壊れるのが怖い', type: 'fearful' },
    ],
  },
  {
    id: 4,
    text: '「愛されているか不安」と感じることは？',
    options: [
      { text: 'あまりない、信頼している', type: 'secure' },
      { text: 'よくある、確認したくなる', type: 'anxious' },
      { text: '考えないようにしている', type: 'avoidant' },
      { text: '常に不安で、でも聞けない', type: 'fearful' },
    ],
  },
  {
    id: 5,
    text: '恋人との関係が深まると？',
    options: [
      { text: '自然と安心感が増す', type: 'secure' },
      { text: 'もっと好きになって依存気味になる', type: 'anxious' },
      { text: '少し息苦しさを感じる', type: 'avoidant' },
      { text: '嬉しいけど同時に不安も増す', type: 'fearful' },
    ],
  },
  {
    id: 6,
    text: '過去の恋愛で多かったパターンは？',
    options: [
      { text: '安定した関係が多かった', type: 'secure' },
      { text: '相手を追いかけることが多かった', type: 'anxious' },
      { text: '自分から距離を置くことが多かった', type: 'avoidant' },
      { text: '近づいたり離れたりを繰り返した', type: 'fearful' },
    ],
  },
  {
    id: 7,
    text: '恋人が他の異性と話していると？',
    options: [
      { text: '特に気にならない', type: 'secure' },
      { text: '嫉妬してしまう', type: 'anxious' },
      { text: '興味ないふりをする', type: 'avoidant' },
      { text: '不安だけど何も言えない', type: 'fearful' },
    ],
  },
  {
    id: 8,
    text: '恋人に頼ることについて？',
    options: [
      { text: '自然に頼れるし、頼られるのも嬉しい', type: 'secure' },
      { text: '頼りたいけど、迷惑かもと思う', type: 'anxious' },
      { text: '頼るのは苦手、自分でやりたい', type: 'avoidant' },
      { text: '頼りたいけど、裏切られるのが怖い', type: 'fearful' },
    ],
  },
  {
    id: 9,
    text: '別れ話を切り出された時は？',
    options: [
      { text: '悲しいけど、受け入れて前に進める', type: 'secure' },
      { text: 'パニックになり、すがってしまう', type: 'anxious' },
      { text: '冷静を装い、あっさり受け入れる', type: 'avoidant' },
      { text: 'やっぱりこうなると思っていた', type: 'fearful' },
    ],
  },
  {
    id: 10,
    text: '恋愛に対する本音は？',
    options: [
      { text: '信頼し合えるパートナーが欲しい', type: 'secure' },
      { text: '誰かに必要とされたい', type: 'anxious' },
      { text: '一人でも幸せかもしれない', type: 'avoidant' },
      { text: '愛されたいけど、傷つくのが怖い', type: 'fearful' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string[];
  inRelationship: string[];
  growthTips: string[];
}> = {
  secure: {
    type: 'secure',
    title: '安定型（セキュア）',
    emoji: '🌟',
    description: 'あなたは健全で安定した愛着スタイルの持ち主。自分も相手も信頼でき、適度な距離感を保ちながら深い関係を築けます。恋愛においてバランスが取れています。',
    characteristics: ['自己肯定感が高い', '相手を信頼できる', '感情のコントロールが得意', '適度な距離感を保てる'],
    inRelationship: ['安定した関係を築ける', '問題を話し合いで解決', '相手の自由を尊重できる'],
    growthTips: ['今のバランスを大切に', '不安定なパートナーに振り回されないで', '相手の愛着スタイルも理解しよう'],
  },
  anxious: {
    type: 'anxious',
    title: '不安型（アンクシャス）',
    emoji: '💔',
    description: 'あなたは愛情を強く求める傾向があります。「愛されているか」を確認したくなり、相手の反応に敏感。深く愛せる反面、不安に振り回されることも。',
    characteristics: ['愛情確認を求めがち', '相手の反応に敏感', '見捨てられ不安が強い', '依存傾向がある'],
    inRelationship: ['相手を追いかけがち', '嫉妬しやすい', '感情の起伏が激しい'],
    growthTips: ['自分の価値は相手の反応で決まらない', '一人の時間も大切に', '不安を感じたら深呼吸'],
  },
  avoidant: {
    type: 'avoidant',
    title: '回避型（アボイダント）',
    emoji: '🛡️',
    description: 'あなたは自立心が強く、一人の時間を大切にするタイプ。親密な関係を避ける傾向があり、感情を表に出すのが苦手。傷つくのを恐れて壁を作ることも。',
    characteristics: ['自立心が強い', '感情表現が苦手', '親密さを避ける', '一人の時間を好む'],
    inRelationship: ['距離を置きがち', '感情を隠す', '「重い」と感じやすい'],
    growthTips: ['少しずつ心を開いてみて', '感情を言葉にする練習を', '親密さは怖くないと知ろう'],
  },
  fearful: {
    type: 'fearful',
    title: '恐れ・回避型（フィアフル）',
    emoji: '🌪️',
    description: 'あなたは愛されたい気持ちと、傷つくことへの恐れが混在しています。近づきたいけど近づくのが怖い、複雑な心理状態。過去の経験が影響していることも。',
    characteristics: ['近づきたいけど怖い', '自己肯定感が低い', '関係が不安定になりやすい', '矛盾した行動を取りがち'],
    inRelationship: ['押し引きが激しい', '試し行動をしてしまう', '自己否定的になりやすい'],
    growthTips: ['過去の傷を癒すことから', '安全な人との関係を築こう', '専門家のサポートも検討して'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { secure: 0, anxious: 0, avoidant: 0, fearful: 0 };

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
