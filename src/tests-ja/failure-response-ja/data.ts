// 失敗への対応診断 - 失敗した時、あなたはどう向き合う？
export const questions = [
  {
    id: 1,
    text: '大事なプレゼンで失敗してしまったら？',
    options: [
      { text: 'しばらく落ち込んで立ち直れない', type: 'sensitive' },
      { text: '何が悪かったか徹底的に分析する', type: 'analytical' },
      { text: '「次頑張ろう！」と切り替える', type: 'resilient' },
      { text: '誰かに話を聞いてもらう', type: 'social' },
    ],
  },
  {
    id: 2,
    text: '失敗した直後の自分への声かけは？',
    options: [
      { text: '「なんで自分はダメなんだ…」', type: 'sensitive' },
      { text: '「原因は何だったんだろう」', type: 'analytical' },
      { text: '「まあ、しょうがない！」', type: 'resilient' },
      { text: '「誰かに相談しよう」', type: 'social' },
    ],
  },
  {
    id: 3,
    text: '過去の失敗を思い出すと？',
    options: [
      { text: '恥ずかしくて布団で悶える', type: 'sensitive' },
      { text: '学んだことを整理できる', type: 'analytical' },
      { text: 'もう気にしていない', type: 'resilient' },
      { text: 'ネタとして話せる', type: 'social' },
    ],
  },
  {
    id: 4,
    text: '仕事でミスをして上司に怒られたら？',
    options: [
      { text: '自己嫌悪でしばらく辛い', type: 'sensitive' },
      { text: '再発防止策を考える', type: 'analytical' },
      { text: '「次は気をつけよう」と前を向く', type: 'resilient' },
      { text: '同僚に愚痴を聞いてもらう', type: 'social' },
    ],
  },
  {
    id: 5,
    text: '試験に落ちてしまったら？',
    options: [
      { text: '自分には向いてないのかも…と考える', type: 'sensitive' },
      { text: '何が足りなかったか分析する', type: 'analytical' },
      { text: '次に向けてすぐ勉強再開', type: 'resilient' },
      { text: '同じ経験をした人に話を聞く', type: 'social' },
    ],
  },
  {
    id: 6,
    text: '失敗から立ち直るのにかかる時間は？',
    options: [
      { text: '長い、数日〜数週間かかることも', type: 'sensitive' },
      { text: '原因が分かれば比較的早い', type: 'analytical' },
      { text: 'その日のうちに切り替えられる', type: 'resilient' },
      { text: '誰かと話せばすぐ楽になる', type: 'social' },
    ],
  },
  {
    id: 7,
    text: '「失敗は成功のもと」という言葉について',
    options: [
      { text: '頭では分かるけど心が追いつかない', type: 'sensitive' },
      { text: 'その通り、失敗から学ぶことは多い', type: 'analytical' },
      { text: '本当にそう思う！失敗OK', type: 'resilient' },
      { text: '失敗談を共有することで成長できる', type: 'social' },
    ],
  },
  {
    id: 8,
    text: '他人の失敗を見た時は？',
    options: [
      { text: '自分のことのように辛くなる', type: 'sensitive' },
      { text: '客観的に原因を考える', type: 'analytical' },
      { text: '「大丈夫、次があるよ」と励ます', type: 'resilient' },
      { text: '自分の経験談を話して共感する', type: 'social' },
    ],
  },
  {
    id: 9,
    text: '失敗しそうな予感がする時は？',
    options: [
      { text: '不安で夜眠れなくなる', type: 'sensitive' },
      { text: 'リスクを洗い出して対策を立てる', type: 'analytical' },
      { text: 'なるようになる！と楽観的', type: 'resilient' },
      { text: '誰かに相談してアドバイスをもらう', type: 'social' },
    ],
  },
  {
    id: 10,
    text: '自分の失敗への向き合い方を一言で言うと？',
    options: [
      { text: '引きずりやすいタイプ', type: 'sensitive' },
      { text: '論理的に処理するタイプ', type: 'analytical' },
      { text: 'すぐ立ち直るタイプ', type: 'resilient' },
      { text: '人に支えられて乗り越えるタイプ', type: 'social' },
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
  sensitive: {
    type: 'sensitive',
    title: '繊細受容タイプ',
    emoji: '🌸',
    percentage: '回復力 35%',
    description: '失敗を深く受け止め、自分を責めてしまうタイプ。その繊細さは、物事を大切に考える証拠。ただし、自分に厳しすぎると回復に時間がかかるので、セルフコンパッションが大切。',
    characteristics: ['繊細', '真面目', '自己反省強め', '完璧主義', '感受性豊か'],
    advice: '失敗しても、あなたの価値は変わりません。自分を責めすぎず、「よく頑張った」と声をかけてあげて。',
  },
  analytical: {
    type: 'analytical',
    title: '冷静分析タイプ',
    emoji: '🔍',
    percentage: '回復力 70%',
    description: '失敗を感情的に受け止めるのではなく、論理的に分析して次に活かすタイプ。「なぜ失敗したか」を理解することで納得し、前に進めます。PDCAサイクルを回すのが得意。',
    characteristics: ['論理的', '冷静', '学習意欲', '改善志向', 'データ重視'],
    advice: '素晴らしい分析力！ただし感情も大切に。たまには「悔しい」「悲しい」と感じることを許可してあげて。',
  },
  resilient: {
    type: 'resilient',
    title: '即座回復タイプ',
    emoji: '🦋',
    percentage: '回復力 90%',
    description: '失敗してもすぐに気持ちを切り替えられるタイプ。「過去は変えられない」と割り切り、未来に目を向けられます。その立ち直りの早さは周りの人にも勇気を与えます。',
    characteristics: ['楽観的', '切り替え上手', '前向き', 'ストレス耐性', 'タフ'],
    advice: '素晴らしいレジリエンス！ただし無理に強がらず、時には弱さを見せることも大切にしてね。',
  },
  social: {
    type: 'social',
    title: '共有サポートタイプ',
    emoji: '🤗',
    percentage: '回復力 65%',
    description: '失敗を一人で抱え込まず、人と共有することで乗り越えるタイプ。話すことで気持ちが楽になり、他者の経験からも学べます。人との繋がりがあなたの強さの源泉。',
    characteristics: ['社交的', 'オープン', '共感力', 'コミュニケーション力', '協調性'],
    advice: '人に頼れるのは素晴らしい強さ！自分で解決する力も少しずつ育てると、さらにバランスが取れます。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sensitive: 0, analytical: 0, resilient: 0, social: 0 };

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
