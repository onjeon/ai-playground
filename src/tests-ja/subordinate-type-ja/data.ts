// 部下タイプ診断
export const questions = [
  {
    id: 1,
    text: '上司から新しい仕事を任された時は？',
    options: [
      { text: '「はい！」とすぐに取り掛かる', type: 'obedient' },
      { text: '「こういう進め方でいいですか？」と確認', type: 'reliable' },
      { text: '「別のやり方を提案してもいいですか？」', type: 'proactive' },
      { text: '「自分のやり方でやっていいですか？」', type: 'independent' },
    ],
  },
  {
    id: 2,
    text: '上司の指示に納得できない時は？',
    options: [
      { text: 'とりあえず指示通りにやる', type: 'obedient' },
      { text: '質問して意図を理解しようとする', type: 'reliable' },
      { text: '自分の意見を述べて議論する', type: 'proactive' },
      { text: '最終的には自分の判断で動く', type: 'independent' },
    ],
  },
  {
    id: 3,
    text: '仕事で困った時は？',
    options: [
      { text: 'すぐに上司に相談する', type: 'obedient' },
      { text: 'ある程度調べてから相談する', type: 'reliable' },
      { text: '解決案を考えてから報告する', type: 'proactive' },
      { text: 'なるべく自分で解決しようとする', type: 'independent' },
    ],
  },
  {
    id: 4,
    text: '飲み会で上司と同席する時は？',
    options: [
      { text: 'お酌やお料理の取り分けを率先して', type: 'obedient' },
      { text: '話を聞きながら適度にコミュニケーション', type: 'reliable' },
      { text: '仕事のアイデアや提案を話す機会に', type: 'proactive' },
      { text: '自然体で楽しく過ごす', type: 'independent' },
    ],
  },
  {
    id: 5,
    text: '上司から褒められた時は？',
    options: [
      { text: '「ありがとうございます！」と素直に喜ぶ', type: 'obedient' },
      { text: '「チームのおかげです」と謙遜', type: 'reliable' },
      { text: '「もっとできることがあります」と前向きに', type: 'proactive' },
      { text: '当然だと思いつつ軽く感謝', type: 'independent' },
    ],
  },
  {
    id: 6,
    text: '上司がミスをした時は？',
    options: [
      { text: '気づかないふりをする', type: 'obedient' },
      { text: 'こっそりフォローする', type: 'reliable' },
      { text: '率直に指摘して修正を提案', type: 'proactive' },
      { text: '自分の仕事に集中する', type: 'independent' },
    ],
  },
  {
    id: 7,
    text: '残業を頼まれた時の本音は？',
    options: [
      { text: '上司の頼みなら仕方ない', type: 'obedient' },
      { text: 'チームのためならやる', type: 'reliable' },
      { text: '理由を聞いて納得したらやる', type: 'proactive' },
      { text: '自分の予定と天秤にかける', type: 'independent' },
    ],
  },
  {
    id: 8,
    text: '「報連相」について？',
    options: [
      { text: 'こまめに報告・連絡・相談する', type: 'obedient' },
      { text: '適切なタイミングで確実に行う', type: 'reliable' },
      { text: '必要な時だけ効率的に', type: 'proactive' },
      { text: '結果が出てから報告派', type: 'independent' },
    ],
  },
  {
    id: 9,
    text: '昇進や評価について？',
    options: [
      { text: '上司に認められるよう頑張る', type: 'obedient' },
      { text: '着実に実績を積み上げる', type: 'reliable' },
      { text: '自分からアピールもする', type: 'proactive' },
      { text: '評価より自分の成長を重視', type: 'independent' },
    ],
  },
  {
    id: 10,
    text: '理想の上司との関係は？',
    options: [
      { text: '信頼されて安心して働ける関係', type: 'obedient' },
      { text: '互いに尊重し合えるパートナー関係', type: 'reliable' },
      { text: '一緒に新しいことに挑戦できる関係', type: 'proactive' },
      { text: '自由に任せてもらえる関係', type: 'independent' },
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
  careerAdvice: string;
}> = {
  obedient: {
    type: 'obedient',
    title: '従順型・信頼の右腕タイプ',
    emoji: '🤝',
    percentage: '従順度 90%',
    description: '上司の指示を忠実に守り、信頼を得るタイプ。「報連相」を欠かさず、チームの潤滑油として機能。日本の伝統的な組織で重宝される存在。ただし、時には自分の意見を言うことも大切。',
    characteristics: ['素直', '報連相ができる', '信頼される', 'チームプレイヤー', '安定志向'],
    careerAdvice: '信頼関係を活かしつつ、少しずつ自分の意見も伝えていくと成長につながります。',
  },
  reliable: {
    type: 'reliable',
    title: '信頼型・安定の実務派タイプ',
    emoji: '⚙️',
    percentage: '信頼度 92%',
    description: '確実に仕事をこなし、上司からの信頼が厚いタイプ。自分で考えて行動しつつ、適切なタイミングで報告もできる。バランス感覚に優れ、組織の中核を担う存在。',
    characteristics: ['確実', 'バランス感覚', '自立と協調', '信頼感', '中堅として活躍'],
    careerAdvice: '今の強みを活かしながら、リーダーシップも発揮していける可能性大！',
  },
  proactive: {
    type: 'proactive',
    title: '提案型・攻めの挑戦者タイプ',
    emoji: '🚀',
    percentage: '積極性 95%',
    description: '指示を待つだけでなく、自ら提案して行動するタイプ。上司にも臆せず意見を言い、新しいことに挑戦する姿勢が強み。変革期の組織や成長企業で力を発揮。',
    characteristics: ['提案力', '行動力', '挑戦的', '意見を言える', '成長志向'],
    careerAdvice: '提案力を活かして、プロジェクトリーダーや新規事業に挑戦してみては？',
  },
  independent: {
    type: 'independent',
    title: '独立型・マイペース職人タイプ',
    emoji: '🎯',
    percentage: '独立性 88%',
    description: '自分のやり方で成果を出すタイプ。必要以上に上司に頼らず、自立して仕事を進める。専門性が高く、結果で示すスタイル。フリーランスや専門職向きかも。',
    characteristics: ['自立心', '専門性', 'マイペース', '結果主義', '個人プレー'],
    careerAdvice: '独立性を活かして専門家を目指すか、裁量の大きいポジションを狙いましょう！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { obedient: 0, reliable: 0, proactive: 0, independent: 0 };

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
