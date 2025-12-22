// ダイエットタイプ診断 - あなたに合ったダイエット方法は？
export const questions = [
  {
    id: 1,
    text: '食事制限と運動、どちらが続けやすい？',
    options: [
      { text: '運動は無理、食事を減らす方がまし', type: 'restriction' },
      { text: '食べたいから運動で消費したい', type: 'active' },
      { text: '両方バランスよく取り入れたい', type: 'balance' },
      { text: '制限より食べる内容を変えたい', type: 'quality' },
    ],
  },
  {
    id: 2,
    text: 'ダイエット中、どんな誘惑に負けやすい？',
    options: [
      { text: '深夜のラーメンやスナック菓子', type: 'restriction' },
      { text: '友達との飲み会や外食', type: 'balance' },
      { text: '「今日くらいいいか」の甘え', type: 'active' },
      { text: 'コンビニの新商品についつい', type: 'quality' },
    ],
  },
  {
    id: 3,
    text: '理想のダイエット期間は？',
    options: [
      { text: '1週間でガッツリ落としたい', type: 'restriction' },
      { text: '1ヶ月で目に見える変化がほしい', type: 'active' },
      { text: '3ヶ月かけてじっくり', type: 'balance' },
      { text: '期間は気にせず体質改善したい', type: 'quality' },
    ],
  },
  {
    id: 4,
    text: 'ダイエットのモチベーションは？',
    options: [
      { text: '体重計の数字が減ること', type: 'restriction' },
      { text: '体が引き締まって見た目が変わること', type: 'active' },
      { text: '服がスッと着られるようになること', type: 'balance' },
      { text: '体調が良くなること', type: 'quality' },
    ],
  },
  {
    id: 5,
    text: '過去のダイエット経験で多いパターンは？',
    options: [
      { text: '急激に痩せてリバウンド', type: 'restriction' },
      { text: '運動を始めて3日坊主', type: 'active' },
      { text: '少し痩せて満足してやめる', type: 'balance' },
      { text: 'そもそも何が正解か分からない', type: 'quality' },
    ],
  },
  {
    id: 6,
    text: '「痩せたね！」と言われるなら、どんな風に？',
    options: [
      { text: '「え、何キロ痩せたの？」と驚かれたい', type: 'restriction' },
      { text: '「筋肉ついた？」と言われたい', type: 'active' },
      { text: '「なんか雰囲気変わった？」と言われたい', type: 'balance' },
      { text: '「肌綺麗になったね」と言われたい', type: 'quality' },
    ],
  },
  {
    id: 7,
    text: 'ダイエット中の食事で重視することは？',
    options: [
      { text: 'とにかくカロリーを抑える', type: 'restriction' },
      { text: 'タンパク質をしっかり摂る', type: 'active' },
      { text: '野菜を多めに、バランスよく', type: 'balance' },
      { text: '添加物を避けて自然なものを', type: 'quality' },
    ],
  },
  {
    id: 8,
    text: '運動するなら？',
    options: [
      { text: '正直やりたくない…ウォーキングくらい', type: 'restriction' },
      { text: 'ジムで筋トレやHIIT', type: 'active' },
      { text: 'ヨガやストレッチで無理なく', type: 'balance' },
      { text: '日常生活で階段を使うとか', type: 'quality' },
    ],
  },
  {
    id: 9,
    text: 'ダイエットに関する情報収集は？',
    options: [
      { text: 'SNSで話題の即効性ダイエット', type: 'restriction' },
      { text: '筋トレYouTuberの動画', type: 'active' },
      { text: '管理栄養士の発信をチェック', type: 'balance' },
      { text: '本や論文で根本から理解したい', type: 'quality' },
    ],
  },
  {
    id: 10,
    text: 'ダイエット成功後、どうしたい？',
    options: [
      { text: '好きなものを思いっきり食べたい', type: 'restriction' },
      { text: '運動を続けてもっと鍛えたい', type: 'active' },
      { text: '今の状態をキープしたい', type: 'balance' },
      { text: 'この生活習慣を一生続けたい', type: 'quality' },
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
  restriction: {
    type: 'restriction',
    title: '短期決戦タイプ',
    emoji: '🎯',
    percentage: '持続力 30%',
    description: '結果を早く出したい派。食事制限中心で短期間に痩せようとしますが、リバウンドのリスクも高め。「食べない」より「何を食べるか」に意識を向けると成功率アップ！',
    characteristics: ['即効性重視', '意志力強め', 'リバウンドしやすい', '極端になりがち', '結果主義'],
    advice: '短期間の成果を求めすぎると逆効果。最低でも1ヶ月は続けられる方法を選んで。',
  },
  active: {
    type: 'active',
    title: 'アクティブ燃焼タイプ',
    emoji: '💪',
    percentage: '持続力 65%',
    description: '運動で消費してしっかり食べたい派。筋トレや有酸素運動で代謝を上げるアプローチが向いています。食事管理も組み合わせると効果倍増！',
    characteristics: ['運動好き', 'エネルギッシュ', '筋肉質を目指す', '食べたい派', '行動力あり'],
    advice: '運動だけでなく、食事の質も意識するとより効率的に理想の体に近づけます。',
  },
  balance: {
    type: 'balance',
    title: 'ゆるやか継続タイプ',
    emoji: '⚖️',
    percentage: '持続力 80%',
    description: '無理なく長期的に続けられる王道派。食事と運動のバランスを取りながら、少しずつ確実に成果を出していけます。リバウンドしにくいのが強み！',
    characteristics: ['バランス重視', '計画的', '継続力あり', '現実的', 'コツコツ派'],
    advice: '今のスタンスは最高！焦らず続けることで、必ず結果はついてきます。',
  },
  quality: {
    type: 'quality',
    title: '体質改善タイプ',
    emoji: '🌿',
    percentage: '持続力 90%',
    description: '数字より体の状態を重視する本質派。食の質を上げて内側から健康になるアプローチ。時間はかかりますが、一度身につけば一生モノの健康習慣に！',
    characteristics: ['健康志向', '本質重視', '長期的視点', '情報収集好き', '丁寧な生活'],
    advice: '素晴らしい考え方！ただし完璧を求めすぎるとストレスに。8割できればOKの精神で。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { restriction: 0, active: 0, balance: 0, quality: 0 };

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
