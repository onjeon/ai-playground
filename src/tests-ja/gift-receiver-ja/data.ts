// プレゼントの受け取り方診断 - あなたはどんなふうにプレゼントを受け取る？
export const questions = [
  {
    id: 1,
    text: '誕生日にサプライズプレゼントをもらったとき、最初に思うことは？',
    options: [
      { text: '「わ！嬉しい！」と素直に大喜び', type: 'expressive' },
      { text: '「お返しどうしよう…」とまず考える', type: 'reserved' },
      { text: '「これ、いくらしたんだろう」と気になる', type: 'analytical' },
      { text: '「自分のこと考えてくれたんだ」と感動', type: 'emotional' },
    ],
  },
  {
    id: 2,
    text: 'プレゼントを開けるとき、どうする？',
    options: [
      { text: 'その場ですぐ開けて反応を見せる', type: 'expressive' },
      { text: 'あとでゆっくり一人で開けたい', type: 'reserved' },
      { text: '包装の仕方や選んだ理由を聞きたい', type: 'analytical' },
      { text: '開けながら相手の表情を見てしまう', type: 'emotional' },
    ],
  },
  {
    id: 3,
    text: '正直、あまり好みじゃないプレゼントをもらったら？',
    options: [
      { text: '「ありがとう！」と笑顔で受け取る', type: 'expressive' },
      { text: '内心困るけど「ありがとう」と言う', type: 'reserved' },
      { text: 'さりげなく交換や返品を考える', type: 'analytical' },
      { text: '選んでくれた気持ちが嬉しい', type: 'emotional' },
    ],
  },
  {
    id: 4,
    text: '高価なプレゼントをもらったときの反応は？',
    options: [
      { text: '「すごい！こんなの欲しかった！」と興奮', type: 'expressive' },
      { text: '「こんな高いもの…」と恐縮してしまう', type: 'reserved' },
      { text: 'ブランドや価値をチェックする', type: 'analytical' },
      { text: 'ここまでしてくれたことに感激する', type: 'emotional' },
    ],
  },
  {
    id: 5,
    text: '手作りのプレゼントをもらったら？',
    options: [
      { text: 'SNSに載せて自慢したい', type: 'expressive' },
      { text: '大切にしまっておく', type: 'reserved' },
      { text: '作り方や材料を詳しく聞く', type: 'analytical' },
      { text: '作ってくれた時間と労力に涙が出そう', type: 'emotional' },
    ],
  },
  {
    id: 6,
    text: 'お歳暮やお中元などの形式的なプレゼントについて',
    options: [
      { text: '何でも嬉しいし開けるのが楽しみ', type: 'expressive' },
      { text: 'お返しの手配を先に考える', type: 'reserved' },
      { text: '中身の相場感を把握している', type: 'analytical' },
      { text: '送ってくれた人の顔を思い浮かべる', type: 'emotional' },
    ],
  },
  {
    id: 7,
    text: 'プレゼントをもらった後の行動は？',
    options: [
      { text: 'すぐに使って感想を伝える', type: 'expressive' },
      { text: '丁寧なお礼のメッセージを送る', type: 'reserved' },
      { text: '使い方や保管方法を調べる', type: 'analytical' },
      { text: 'もらった経緯を何度も思い出す', type: 'emotional' },
    ],
  },
  {
    id: 8,
    text: 'プレゼント選びで失敗されたことに気づいたら？',
    options: [
      { text: '「大丈夫！気にしないで！」と明るくフォロー', type: 'expressive' },
      { text: '相手に気づかれないよう普通に振る舞う', type: 'reserved' },
      { text: '次回のリクエストをさりげなく伝える', type: 'analytical' },
      { text: '選んでくれたこと自体が嬉しいから問題なし', type: 'emotional' },
    ],
  },
  {
    id: 9,
    text: 'プレゼントをもらうことについて、正直な気持ちは？',
    options: [
      { text: '大好き！もらえると元気になる', type: 'expressive' },
      { text: 'ちょっと気を遣ってしまう', type: 'reserved' },
      { text: '自分で選びたい派だけど嬉しい', type: 'analytical' },
      { text: '誰かが自分を思ってくれた証だと感じる', type: 'emotional' },
    ],
  },
  {
    id: 10,
    text: '「何が欲しい？」と聞かれたときの反応は？',
    options: [
      { text: '欲しいものをズバッと言う', type: 'expressive' },
      { text: '「気持ちだけで十分」と遠慮する', type: 'reserved' },
      { text: '具体的なブランドや型番まで指定する', type: 'analytical' },
      { text: '「選んでくれるのが嬉しい」と伝える', type: 'emotional' },
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
  expressive: {
    type: 'expressive',
    title: 'ストレート喜びタイプ',
    emoji: '🎉',
    percentage: '喜び表現力 95%',
    description: 'プレゼントをもらったら全力で喜ぶあなた。その素直なリアクションは、贈った相手を最高に幸せにします。喜びを隠さず表現できるのは、実はとても素敵な才能です。',
    characteristics: ['素直', 'リアクション上手', '明るい', '感謝表現が上手', 'ムードメーカー'],
    advice: 'その反応力は贈る側の最高のご褒美。これからもその素直さを大切に！',
  },
  reserved: {
    type: 'reserved',
    title: '遠慮がちタイプ',
    emoji: '🙏',
    percentage: '奥ゆかしさ 90%',
    description: 'プレゼントをもらうと少し恐縮してしまうあなた。「申し訳ない」「お返しどうしよう」が先に来るのは、相手のことを深く考えている証拠。日本人らしい謙虚さの持ち主です。',
    characteristics: ['謙虚', '気配り上手', '礼儀正しい', '真面目', '思いやりがある'],
    advice: '遠慮も素敵だけど、たまには素直に喜ぶ姿を見せてあげてね。',
  },
  analytical: {
    type: 'analytical',
    title: '分析派タイプ',
    emoji: '🔍',
    percentage: '分析力 85%',
    description: 'プレゼントの価値や背景が気になるあなた。「なぜこれを選んだのか」「どこで買ったのか」に興味を持つのは、物事を深く理解したい知的好奇心の表れ。無駄にしない姿勢も素晴らしいです。',
    characteristics: ['論理的', '観察力がある', '計画的', '実用的', 'こだわりがある'],
    advice: '分析も大事だけど、まずは感情で受け取ってみて。意外な発見があるかも。',
  },
  emotional: {
    type: 'emotional',
    title: '気持ち重視タイプ',
    emoji: '💝',
    percentage: '感受性 100%',
    description: 'プレゼントの「物」より「込められた気持ち」を大切にするあなた。相手が自分のために時間と労力をかけてくれたことに心から感動できる、豊かな感受性の持ち主です。',
    characteristics: ['共感力が高い', '感動屋', '愛情深い', '思い出を大切にする', '人間関係を重視'],
    advice: 'その感受性は宝物。贈り手の気持ちを最も理解できるあなたは素敵です。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { expressive: 0, reserved: 0, analytical: 0, emotional: 0 };

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
