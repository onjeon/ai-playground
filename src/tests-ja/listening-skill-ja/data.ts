// 傾聴力診断
export const questions = [
  {
    id: 1,
    text: '友達が悩みを話し始めた。あなたの反応は？',
    options: [
      { text: 'すぐにアドバイスを始める', type: 'advisor' },
      { text: '「わかるわかる」と自分の話を始める', type: 'talker' },
      { text: 'まずは最後まで聞いてから反応', type: 'listener' },
      { text: '相手の気持ちに寄り添いながら聞く', type: 'master' },
    ],
  },
  {
    id: 2,
    text: '会話中、次に何を言おうか考えている？',
    options: [
      { text: '常に次の発言を考えている', type: 'advisor' },
      { text: '自分の話したいことが浮かぶと待てない', type: 'talker' },
      { text: '相手の話を聞いてから考える', type: 'listener' },
      { text: '相手の言葉に集中して、自然に反応する', type: 'master' },
    ],
  },
  {
    id: 3,
    text: '相手の話が長くなってきたら？',
    options: [
      { text: '話を要約して切り上げようとする', type: 'advisor' },
      { text: '自分の話に持っていく', type: 'talker' },
      { text: '時計が気になるけど聞き続ける', type: 'listener' },
      { text: '時間を忘れて相手の話に没頭できる', type: 'master' },
    ],
  },
  {
    id: 4,
    text: '相手が沈黙したとき、どうする？',
    options: [
      { text: 'すぐに話題を提供する', type: 'advisor' },
      { text: '自分の話で埋める', type: 'talker' },
      { text: '少し待ってみる', type: 'listener' },
      { text: '沈黙も大切にして、相手のペースを待つ', type: 'master' },
    ],
  },
  {
    id: 5,
    text: '相手の意見に反対のとき？',
    options: [
      { text: 'すぐに反論を述べる', type: 'advisor' },
      { text: '「でも私は...」と自分の意見を', type: 'talker' },
      { text: '一度受け止めてから自分の意見を言う', type: 'listener' },
      { text: '相手がなぜそう思うのか深く理解しようとする', type: 'master' },
    ],
  },
  {
    id: 6,
    text: 'グループでの会話、あなたの立ち位置は？',
    options: [
      { text: '話を仕切る司会者役', type: 'advisor' },
      { text: 'よく話す中心人物', type: 'talker' },
      { text: '聞き役に回ることが多い', type: 'listener' },
      { text: '全員が話せるよう気を配る', type: 'master' },
    ],
  },
  {
    id: 7,
    text: '相手の話を聞いた後、覚えているのは？',
    options: [
      { text: '自分が何を言ったか', type: 'advisor' },
      { text: '話の要点だけ', type: 'talker' },
      { text: '内容の大部分', type: 'listener' },
      { text: '言葉だけでなく表情や声のトーンまで', type: 'master' },
    ],
  },
  {
    id: 8,
    text: '電話中、他のことをしている？',
    options: [
      { text: 'PCやスマホを見ながら話す', type: 'advisor' },
      { text: '用件が終わったら早く切りたい', type: 'talker' },
      { text: 'なるべく相手に集中しようとする', type: 'listener' },
      { text: '電話の相手に100%集中する', type: 'master' },
    ],
  },
  {
    id: 9,
    text: '「あなたと話すと楽になる」と言われることは？',
    options: [
      { text: 'あまりない、むしろアドバイスが良いと言われる', type: 'advisor' },
      { text: '「面白い」とは言われる', type: 'talker' },
      { text: 'たまに言われる', type: 'listener' },
      { text: 'よく言われる', type: 'master' },
    ],
  },
  {
    id: 10,
    text: '会話において最も大切だと思うことは？',
    options: [
      { text: '的確なアドバイスをすること', type: 'advisor' },
      { text: '楽しい時間を過ごすこと', type: 'talker' },
      { text: '相手の話をちゃんと聞くこと', type: 'listener' },
      { text: '相手が本当に言いたいことを理解すること', type: 'master' },
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
  advisor: {
    type: 'advisor',
    title: 'アドバイザー型',
    emoji: '💡',
    percentage: '傾聴力 40%',
    description: '相手の話を聞くと、すぐに解決策を考えてしまうタイプ。頼れる存在ですが、時には相手は解決策よりも「聞いてほしい」だけかも。まずは聞くことを意識してみて。',
    characteristics: ['問題解決志向', '頼れる', '行動的', '効率重視', 'リーダー気質'],
    advice: '「どうしたらいい？」と聞かれるまではアドバイスを控えてみて。',
  },
  talker: {
    type: 'talker',
    title: 'おしゃべりタイプ',
    emoji: '🗣️',
    percentage: '傾聴力 25%',
    description: '話すのが大好きで、会話を盛り上げるムードメーカー。でも、無意識に相手の話を遮ったり、自分の話に持っていったりしていませんか？少し意識してみましょう。',
    characteristics: ['社交的', 'エネルギッシュ', '話題豊富', '明るい', 'ムードメーカー'],
    advice: '相手が話している間、「聞く」に徹してみて。新しい発見があるかも。',
  },
  listener: {
    type: 'listener',
    title: '聞き上手タイプ',
    emoji: '👂',
    percentage: '傾聴力 75%',
    description: '相手の話をしっかり聞けるタイプ。周りからは「話しやすい」と思われているはず。もう一歩踏み込んで、相手の感情にも寄り添えるとさらに良いですね。',
    characteristics: ['落ち着いている', '信頼される', '思慮深い', '控えめ', '安心感'],
    advice: '聞くだけでなく、相手の気持ちを言葉にして返してみて。',
  },
  master: {
    type: 'master',
    title: '傾聴マスター',
    emoji: '🎧',
    percentage: '傾聴力 95%',
    description: '相手の言葉だけでなく、その奥にある感情や本音まで感じ取れる稀有な存在。あなたと話すと、みんな心が軽くなるはず。カウンセラーの素質があります。',
    characteristics: ['共感力が高い', '深い理解力', '癒し系', '信頼の塊', '心の避難所'],
    advice: '素晴らしい才能です。でも、人の話を聞きすぎて疲れないよう注意。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { advisor: 0, talker: 0, listener: 0, master: 0 };

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
