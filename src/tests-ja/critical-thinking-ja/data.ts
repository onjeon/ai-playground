// クリティカルシンキング診断 - あなたの思考力レベルは？
export const questions = [
  {
    id: 1,
    text: 'SNSで衝撃的なニュースを見たら？',
    options: [
      { text: 'すぐに信じてシェアする', type: 'intuitive' },
      { text: '本当かな？と疑問に思う', type: 'questioning' },
      { text: '複数の情報源で確認する', type: 'analytical' },
      { text: '背景や意図まで分析する', type: 'critical' },
    ],
  },
  {
    id: 2,
    text: '「みんながやっている」という理由での勧誘',
    options: [
      { text: 'みんながやってるなら良さそう', type: 'intuitive' },
      { text: '少し気になるけど、本当に？', type: 'questioning' },
      { text: '「みんな」の定義を確認する', type: 'analytical' },
      { text: '同調圧力に惑わされない', type: 'critical' },
    ],
  },
  {
    id: 3,
    text: '専門家がテレビで意見を言っていたら？',
    options: [
      { text: '専門家が言うなら正しいはず', type: 'intuitive' },
      { text: '本当にその分野の専門家？', type: 'questioning' },
      { text: '他の専門家の意見も調べる', type: 'analytical' },
      { text: '専門家でも利害関係や偏りがあると認識', type: 'critical' },
    ],
  },
  {
    id: 4,
    text: '友達と意見が違ったとき',
    options: [
      { text: '友達が言うなら合わせる', type: 'intuitive' },
      { text: '自分の意見を言うか迷う', type: 'questioning' },
      { text: 'お互いの根拠を確認し合う', type: 'analytical' },
      { text: '違いの原因を分析して理解を深める', type: 'critical' },
    ],
  },
  {
    id: 5,
    text: 'グラフや統計データを見せられたら？',
    options: [
      { text: 'データがあるなら信頼できる', type: 'intuitive' },
      { text: '見方によっては違う解釈も？', type: 'questioning' },
      { text: 'サンプル数や出典を確認する', type: 'analytical' },
      { text: 'データの切り取り方や見せ方を吟味', type: 'critical' },
    ],
  },
  {
    id: 6,
    text: '自分の直感と論理的分析が違う結論を出したら？',
    options: [
      { text: '直感を信じる', type: 'intuitive' },
      { text: 'どちらが正しいか迷う', type: 'questioning' },
      { text: '論理的分析を優先する', type: 'analytical' },
      { text: 'なぜ違うのか、両方を検証する', type: 'critical' },
    ],
  },
  {
    id: 7,
    text: '「絶対に」「必ず」という言葉を聞いたら？',
    options: [
      { text: '強調されると説得力を感じる', type: 'intuitive' },
      { text: '本当に「絶対」なのかな？', type: 'questioning' },
      { text: '例外がないか考える', type: 'analytical' },
      { text: '断定表現は逆に警戒する', type: 'critical' },
    ],
  },
  {
    id: 8,
    text: '自分の信じていたことが間違いだと分かったら？',
    options: [
      { text: '認めたくない、信じ続ける', type: 'intuitive' },
      { text: 'ショックだけど受け入れる', type: 'questioning' },
      { text: 'なぜ間違えたか分析する', type: 'analytical' },
      { text: '自分の思考プロセスを見直す機会に', type: 'critical' },
    ],
  },
  {
    id: 9,
    text: '複雑な問題に直面したとき',
    options: [
      { text: '難しいことは考えたくない', type: 'intuitive' },
      { text: '誰かに意見を聞きたい', type: 'questioning' },
      { text: '要素を分解して整理する', type: 'analytical' },
      { text: '多角的な視点から構造を理解する', type: 'critical' },
    ],
  },
  {
    id: 10,
    text: '自分の思考について',
    options: [
      { text: '感覚や直感で判断することが多い', type: 'intuitive' },
      { text: 'もう少し深く考えたいと思う', type: 'questioning' },
      { text: '論理的に考えるよう心がけている', type: 'analytical' },
      { text: '常に自分の思考を疑い検証している', type: 'critical' },
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
  intuitive: {
    type: 'intuitive',
    title: '直感優先タイプ',
    emoji: '💫',
    percentage: '批判的思考力 25%',
    description: '感覚や直感を大切にするタイプ。情報をそのまま受け入れやすく、深く考えることより即断即決を好みます。行動力はある反面、騙されやすい一面も。',
    characteristics: ['直感的', '行動力', '素直', '即断即決', '信じやすい'],
    advice: '直感も大切だけど、大事な判断の前は一度立ち止まって考える習慣を。',
  },
  questioning: {
    type: 'questioning',
    title: '疑問を持ち始めタイプ',
    emoji: '🤔',
    percentage: '批判的思考力 50%',
    description: '「本当かな？」と疑問を持つ力が芽生えているタイプ。まだ深い分析には至らないけど、鵜呑みにしない姿勢があります。これから伸びる可能性大！',
    characteristics: ['好奇心', '疑問力', '成長途中', '慎重', '素直'],
    advice: '疑問を持てることが第一歩！その「なぜ？」を深掘りする習慣をつけて。',
  },
  analytical: {
    type: 'analytical',
    title: '論理的分析タイプ',
    emoji: '🔍',
    percentage: '批判的思考力 75%',
    description: '情報を論理的に分析する力があるタイプ。根拠や出典を確認し、客観的に判断できます。ビジネスシーンで信頼される存在。',
    characteristics: ['論理的', '分析力', '客観的', '慎重', '信頼性'],
    advice: '優れた分析力！時には直感や感情も判断材料に加えるとバランス良く。',
  },
  critical: {
    type: 'critical',
    title: 'クリティカルシンカータイプ',
    emoji: '🧠',
    percentage: '批判的思考力 95%',
    description: '情報の背景や意図まで見抜く高度な思考力の持ち主。自分の思考すら疑い、常に検証する姿勢があります。情報社会を生き抜く最強のスキルです。',
    characteristics: ['多角的思考', '本質追求', '自己検証', '洞察力', '独立思考'],
    advice: '素晴らしい思考力！ただし考えすぎで行動が遅れないようバランスも意識して。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { intuitive: 0, questioning: 0, analytical: 0, critical: 0 };

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
