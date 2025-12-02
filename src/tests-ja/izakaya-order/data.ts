// 居酒屋注文スタイル診断 (이자카야 주문 스타일 테스트)
export const questions = [
  {
    id: 1,
    text: '居酒屋に入って最初に注文するのは？',
    options: [
      { text: '「とりあえずビール」', type: 'leader' },
      { text: '「何にしますか？」と周りに聞く', type: 'harmony' },
      { text: 'メニューをじっくり見る', type: 'careful' },
      { text: '「お任せで」と店員に丸投げ', type: 'easygoing' },
    ],
  },
  {
    id: 2,
    text: '飲み物がなくなってきたら？',
    options: [
      { text: 'すぐ次を注文', type: 'leader' },
      { text: '周りのペースを見る', type: 'harmony' },
      { text: 'メニューでカロリーを確認', type: 'careful' },
      { text: '店員さんが来るまで待つ', type: 'easygoing' },
    ],
  },
  {
    id: 3,
    text: '食べ物を注文する時は？',
    options: [
      { text: '「これとこれ！」と即決', type: 'leader' },
      { text: '「何食べたい？」と聞いてから', type: 'harmony' },
      { text: '原材料やカロリーをチェック', type: 'careful' },
      { text: '人気メニューをとりあえず', type: 'easygoing' },
    ],
  },
  {
    id: 4,
    text: 'お会計の時は？',
    options: [
      { text: '「ここは出すよ」と払う', type: 'leader' },
      { text: 'きっちり割り勘を計算', type: 'harmony' },
      { text: 'レシートを確認してから', type: 'careful' },
      { text: '誰かが計算してくれるのを待つ', type: 'easygoing' },
    ],
  },
  {
    id: 5,
    text: '注文した料理が思ったのと違ったら？',
    options: [
      { text: '店員に確認する', type: 'leader' },
      { text: 'みんなで食べればOK', type: 'harmony' },
      { text: '写真と比較して検証', type: 'careful' },
      { text: 'まあいいかと食べる', type: 'easygoing' },
    ],
  },
  {
    id: 6,
    text: 'メニューの新商品を見つけたら？',
    options: [
      { text: '「これ頼もう！」と即決', type: 'leader' },
      { text: '「試してみる？」と提案', type: 'harmony' },
      { text: '口コミを検索する', type: 'careful' },
      { text: '無難なものを選ぶ', type: 'easygoing' },
    ],
  },
  {
    id: 7,
    text: '店員がなかなか来ない時は？',
    options: [
      { text: '「すみません！」と大きな声で', type: 'leader' },
      { text: '周りが呼ぶのを待つ', type: 'harmony' },
      { text: '呼び出しボタンを何度も押す', type: 'careful' },
      { text: '来るまで気長に待つ', type: 'easygoing' },
    ],
  },
  {
    id: 8,
    text: '飲み放題コースについて？',
    options: [
      { text: '元を取るぞと張り切る', type: 'leader' },
      { text: 'みんなのペースに合わせる', type: 'harmony' },
      { text: '何杯飲めば元が取れるか計算', type: 'careful' },
      { text: '飲める分だけ飲む', type: 'easygoing' },
    ],
  },
  {
    id: 9,
    text: '〆の一品を頼むなら？',
    options: [
      { text: '「ラーメン行こう！」と決定', type: 'leader' },
      { text: '「何か食べる？」とアンケート', type: 'harmony' },
      { text: 'お茶漬けなどヘルシー系', type: 'careful' },
      { text: 'お腹いっぱいならいらない', type: 'easygoing' },
    ],
  },
  {
    id: 10,
    text: '居酒屋で一番大事なことは？',
    options: [
      { text: '美味しいお酒と料理', type: 'leader' },
      { text: '楽しい雰囲気と会話', type: 'harmony' },
      { text: 'コスパと清潔感', type: 'careful' },
      { text: '居心地の良さ', type: 'easygoing' },
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
  recommendation: string;
}> = {
  leader: {
    type: 'leader',
    title: '注文リーダー',
    emoji: '🍺',
    percentage: 'リーダーシップ度 95%',
    description: '居酒屋では自然とリーダーになるタイプ。「とりあえずビール」の号令から始まり、注文も会計も仕切ります。頼られる存在！',
    characteristics: ['決断力', 'リーダーシップ', '行動力', '面倒見がいい', 'テキパキ'],
    recommendation: '個室の掘りごたつ席でゆったり仕切りましょう！',
  },
  harmony: {
    type: 'harmony',
    title: '協調派オーダー',
    emoji: '🤝',
    percentage: '協調性度 90%',
    description: 'みんなの意見を聞いてから決める協調型。「何食べたい？」が口癖で、全員が満足できるよう気を配ります。居酒屋の潤滑油！',
    characteristics: ['気配り上手', '協調性', '聞き上手', '穏やか', 'バランス感覚'],
    recommendation: '大人数でシェアできるコース料理がおすすめ！',
  },
  careful: {
    type: 'careful',
    title: '慎重派オーダー',
    emoji: '📋',
    percentage: '慎重度 88%',
    description: 'メニューをしっかりチェックしてから注文する派。カロリー、値段、原材料まで確認。失敗したくない堅実タイプです。',
    characteristics: ['慎重', '分析的', '堅実', '計画的', '情報収集上手'],
    recommendation: 'クチコミ評価の高い人気店がおすすめ！',
  },
  easygoing: {
    type: 'easygoing',
    title: 'ゆるふわオーダー',
    emoji: '😌',
    percentage: 'ゆるさ度 85%',
    description: '流れに身を任せるタイプ。誰かが頼んだものを「それ同じで」が定番。こだわりはないけど、その分どこでも楽しめます。',
    characteristics: ['マイペース', '柔軟', 'こだわりなし', 'リラックス', '適応力'],
    recommendation: 'おまかせコースで気軽に楽しみましょう！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { leader: 0, harmony: 0, careful: 0, easygoing: 0 };

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
