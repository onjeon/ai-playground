// 占い信じ度診断
export const questions = [
  {
    id: 1,
    text: '朝の情報番組の占いコーナーは？',
    options: [
      { text: '必ずチェックする', type: 'believer' },
      { text: '見たら参考にする', type: 'casual' },
      { text: 'たまに見る程度', type: 'skeptic' },
      { text: '全く見ない', type: 'realist' },
    ],
  },
  {
    id: 2,
    text: '占いで「今日は最悪」と言われたら？',
    options: [
      { text: '慎重に行動する', type: 'believer' },
      { text: '少し気にする', type: 'casual' },
      { text: 'まあそんなこともあるか', type: 'skeptic' },
      { text: '全く気にしない', type: 'realist' },
    ],
  },
  {
    id: 3,
    text: '恋愛相性占いについてどう思う？',
    options: [
      { text: 'とても参考になる', type: 'believer' },
      { text: '当たっていることもある', type: 'casual' },
      { text: '話のネタになる', type: 'skeptic' },
      { text: '根拠がない', type: 'realist' },
    ],
  },
  {
    id: 4,
    text: '占い師に見てもらったことは？',
    options: [
      { text: '定期的に行く', type: 'believer' },
      { text: '何度かある', type: 'casual' },
      { text: '興味本位で1回だけ', type: 'skeptic' },
      { text: '行ったことがない', type: 'realist' },
    ],
  },
  {
    id: 5,
    text: 'おみくじを引いた後は？',
    options: [
      { text: '内容を大切に心に留める', type: 'believer' },
      { text: '良いことだけ信じる', type: 'casual' },
      { text: '引いたこと自体を楽しむ', type: 'skeptic' },
      { text: 'すぐ忘れる', type: 'realist' },
    ],
  },
  {
    id: 6,
    text: '血液型占いについては？',
    options: [
      { text: 'かなり当たっている', type: 'believer' },
      { text: '傾向はあると思う', type: 'casual' },
      { text: '話のネタとして楽しい', type: 'skeptic' },
      { text: '科学的根拠がない', type: 'realist' },
    ],
  },
  {
    id: 7,
    text: 'タロットカードについてどう思う？',
    options: [
      { text: '深いメッセージがある', type: 'believer' },
      { text: '面白い', type: 'casual' },
      { text: '心理的効果はある', type: 'skeptic' },
      { text: 'ただのカード', type: 'realist' },
    ],
  },
  {
    id: 8,
    text: '占いアプリは使っている？',
    options: [
      { text: '毎日チェック', type: 'believer' },
      { text: 'いくつか入れている', type: 'casual' },
      { text: '昔使っていた', type: 'skeptic' },
      { text: '使ったことがない', type: 'realist' },
    ],
  },
  {
    id: 9,
    text: '友達が占いにハマっていたら？',
    options: [
      { text: '一緒に楽しむ', type: 'believer' },
      { text: '話を聞いてあげる', type: 'casual' },
      { text: 'ほどほどにと思う', type: 'skeptic' },
      { text: '勧められても興味なし', type: 'realist' },
    ],
  },
  {
    id: 10,
    text: '人生の決断に占いは？',
    options: [
      { text: '参考にすることがある', type: 'believer' },
      { text: '背中を押してもらう程度', type: 'casual' },
      { text: '決めた後に見る', type: 'skeptic' },
      { text: '一切関係ない', type: 'realist' },
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
  believer: {
    type: 'believer',
    title: '占い信者タイプ',
    emoji: '🔮',
    percentage: '信じ度 95%',
    description: '占いを心から信じ、日常生活に取り入れているあなた。スピリチュアルな世界に深い関心があり、目に見えない力を大切にしています。',
    characteristics: ['スピリチュアル', '直感的', 'ロマンチスト', '神秘好き', '繊細'],
    advice: '占いは参考程度に。最終判断は自分を信じて！',
  },
  casual: {
    type: 'casual',
    title: 'カジュアル占いタイプ',
    emoji: '⭐',
    percentage: '信じ度 60%',
    description: '良いとこ取りで占いを楽しむあなた。信じすぎず、でも良いメッセージは素直に受け入れる。バランス感覚の良い付き合い方をしています。',
    characteristics: ['バランス感覚', '柔軟', '楽観的', '適度に信じる', '楽しむ'],
    advice: 'その調子！楽しみながら良い運気を引き寄せて',
  },
  skeptic: {
    type: 'skeptic',
    title: '半信半疑タイプ',
    emoji: '🤔',
    percentage: '信じ度 30%',
    description: '占いは話のネタ程度に楽しむあなた。心理的効果は認めるけど、全面的には信じない。理性的だけど、完全否定もしない中立派。',
    characteristics: ['理性的', '中立', '分析的', '冷静', 'バランス'],
    advice: 'たまには直感を信じてみるのも面白いかも？',
  },
  realist: {
    type: 'realist',
    title: '現実主義タイプ',
    emoji: '📊',
    percentage: '信じ度 5%',
    description: '占いより自分の力を信じるあなた。科学的根拠を重視し、運命は自分で切り開くタイプ。論理的で現実的なアプローチを好みます。',
    characteristics: ['現実主義', '論理的', '自己決定', '科学重視', '実践的'],
    advice: '時には宇宙の神秘に身を委ねてみては？',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { believer: 0, casual: 0, skeptic: 0, realist: 0 };

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
