// 怒りのポイント診断 (분노 포인트 진단)
export const questions = [
  {
    id: 1,
    text: '最もイラっとくるのは？',
    options: [
      { text: '約束を守らない人', type: 'trust' },
      { text: '上から目線で話す人', type: 'respect' },
      { text: '効率の悪いやり方', type: 'logic' },
      { text: '自分だけ損している状況', type: 'fairness' },
    ],
  },
  {
    id: 2,
    text: '電車で足を踏まれて謝られなかったら？',
    options: [
      { text: '「謝るのが常識でしょ」とモヤモヤ', type: 'trust' },
      { text: '「なめられてる？」とイラッ', type: 'respect' },
      { text: '「混んでるから仕方ない」と割り切る', type: 'logic' },
      { text: '「なぜ自分だけ？」と不公平に感じる', type: 'fairness' },
    ],
  },
  {
    id: 3,
    text: '友達がドタキャンを繰り返したら？',
    options: [
      { text: '信用できなくなる', type: 'trust' },
      { text: '自分が軽く見られてると感じる', type: 'respect' },
      { text: '予定の立て方を提案する', type: 'logic' },
      { text: '「自分との約束だけ？」と確認', type: 'fairness' },
    ],
  },
  {
    id: 4,
    text: '会議で自分の意見を無視されたら？',
    options: [
      { text: '「聞くと言ったのに」と裏切られた気持ち', type: 'trust' },
      { text: '「馬鹿にされてる」と腹が立つ', type: 'respect' },
      { text: '「なぜダメなのか」理由を求める', type: 'logic' },
      { text: '「他の人の意見は聞くのに」と比較', type: 'fairness' },
    ],
  },
  {
    id: 5,
    text: 'レストランでオーダーを間違えられたら？',
    options: [
      { text: '「ちゃんと確認したのに」とガッカリ', type: 'trust' },
      { text: '態度次第では許せる', type: 'respect' },
      { text: '冷静に正しいものを頼み直す', type: 'logic' },
      { text: '「他のテーブルは間違えてないのに」', type: 'fairness' },
    ],
  },
  {
    id: 6,
    text: '後輩にタメ口で話されたら？',
    options: [
      { text: '距離感の読めなさにモヤモヤ', type: 'trust' },
      { text: '明らかに失礼だと怒る', type: 'respect' },
      { text: '場面によってはOK', type: 'logic' },
      { text: '「他の先輩にもそうなの？」と気になる', type: 'fairness' },
    ],
  },
  {
    id: 7,
    text: '仕事を押し付けられたら？',
    options: [
      { text: '引き受けたからには頑張るけどモヤモヤ', type: 'trust' },
      { text: '「なぜ自分に？」と不満', type: 'respect' },
      { text: '業務分担を明確にしようと提案', type: 'logic' },
      { text: '「みんな平等にすべき」と思う', type: 'fairness' },
    ],
  },
  {
    id: 8,
    text: 'SNSで悪口を言われているのを発見したら？',
    options: [
      { text: '信じていた人だとショック', type: 'trust' },
      { text: '「陰口は卑怯」と怒り', type: 'respect' },
      { text: '事実かどうか確認したい', type: 'logic' },
      { text: '「なぜ自分だけターゲット？」', type: 'fairness' },
    ],
  },
  {
    id: 9,
    text: '列に割り込まれたら？',
    options: [
      { text: 'ルールを守らない人にイライラ', type: 'trust' },
      { text: '「舐められてる」と感じる', type: 'respect' },
      { text: '並び直すよう冷静に指摘', type: 'logic' },
      { text: '「みんな並んでるのに」と不公平感', type: 'fairness' },
    ],
  },
  {
    id: 10,
    text: '自分が怒る時の根本にあるものは？',
    options: [
      { text: '信頼を裏切られた時', type: 'trust' },
      { text: 'リスペクトされていない時', type: 'respect' },
      { text: '非合理的・非論理的な時', type: 'logic' },
      { text: '不公平・不平等を感じた時', type: 'fairness' },
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
  trust: {
    type: 'trust',
    title: '信頼重視タイプ',
    emoji: '🤝',
    percentage: '信頼センサー感度 90%',
    description: '約束や信頼を大切にするあなた。嘘や裏切りに最も敏感で、「信じていたのに」という気持ちが怒りの根源。一度失った信頼は取り戻すのが難しいタイプ。',
    characteristics: ['誠実', '約束を守る', '裏切りに敏感', '一途', '人を信じたい'],
    advice: '人を信じる姿勢は素晴らしい。でも100%を求めすぎず、許す余裕も持ちましょう。',
  },
  respect: {
    type: 'respect',
    title: 'リスペクト重視タイプ',
    emoji: '👑',
    percentage: '尊厳センサー感度 95%',
    description: '自分や他者への敬意を大切にするあなた。馬鹿にされたり、軽く見られることに強く反応します。「失礼な態度」が許せない、プライドの高さも持ち合わせています。',
    characteristics: ['プライドが高い', '礼儀を重んじる', '自尊心が強い', '堂々としている', '威厳がある'],
    advice: '敬意を求めるのは自然なこと。ただ、相手に悪意がない場合もあるので深呼吸を。',
  },
  logic: {
    type: 'logic',
    title: '論理重視タイプ',
    emoji: '🧠',
    percentage: '論理センサー感度 85%',
    description: '合理性と効率を大切にするあなた。感情的な対応や非効率なやり方にイライラ。「なぜ？」「どうすれば？」と解決策を求める冷静さがある一方、感情論が苦手。',
    characteristics: ['論理的', '冷静', '効率重視', '問題解決志向', '感情より理屈'],
    advice: '論理的思考は強み。でも時には感情的な対応も必要な場面があることを忘れずに。',
  },
  fairness: {
    type: 'fairness',
    title: '公平重視タイプ',
    emoji: '⚖️',
    percentage: '公平センサー感度 92%',
    description: '平等と公正を大切にするあなた。自分だけ損をしている、特定の人だけ得をしているという状況に敏感。「みんな同じ条件であるべき」という強い信念の持ち主。',
    characteristics: ['正義感が強い', '平等主義', '損得に敏感', 'ルール重視', '不正が嫌い'],
    advice: 'その正義感は社会に必要。でも、すべてが平等にはならないことも受け入れる柔軟さを。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { trust: 0, respect: 0, logic: 0, fairness: 0 };

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
