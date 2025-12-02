// 愛情表現タイプ診断 (사랑의 언어 테스트)
export const questions = [
  {
    id: 1,
    text: '恋人が落ち込んでいる時、あなたはどうする？',
    options: [
      { text: '「大丈夫だよ」と優しく言葉をかける', type: 'words' },
      { text: 'ただそばにいて、一緒に時間を過ごす', type: 'time' },
      { text: 'プレゼントや好きな食べ物を買ってくる', type: 'gifts' },
      { text: '黙ってぎゅっと抱きしめる', type: 'touch' },
    ],
  },
  {
    id: 2,
    text: '恋人からされて一番嬉しいことは？',
    options: [
      { text: '「愛してる」「大好き」と言われること', type: 'words' },
      { text: '二人だけの時間を作ってくれること', type: 'time' },
      { text: '記念日を覚えていてくれること', type: 'gifts' },
      { text: '手をつないだり、スキンシップがあること', type: 'touch' },
    ],
  },
  {
    id: 3,
    text: '理想のデートはどれ？',
    options: [
      { text: 'カフェでゆっくり話をする', type: 'words' },
      { text: '特別な予定なく、のんびり一緒に過ごす', type: 'time' },
      { text: 'お互いにプレゼントを交換する', type: 'gifts' },
      { text: '映画館で手をつなぎながら映画鑑賞', type: 'touch' },
    ],
  },
  {
    id: 4,
    text: '「愛されている」と感じる瞬間は？',
    options: [
      { text: '褒めてくれたり、感謝の言葉をもらった時', type: 'words' },
      { text: '忙しい中でも時間を作ってくれた時', type: 'time' },
      { text: 'サプライズプレゼントをもらった時', type: 'gifts' },
      { text: 'さりげなく肩や背中に触れてくれた時', type: 'touch' },
    ],
  },
  {
    id: 5,
    text: '恋人との喧嘩の後、仲直りの方法は？',
    options: [
      { text: 'ちゃんと話し合って気持ちを伝える', type: 'words' },
      { text: '一緒に過ごす時間を増やす', type: 'time' },
      { text: '仲直りの印に何かプレゼントする', type: 'gifts' },
      { text: 'ハグして仲直り', type: 'touch' },
    ],
  },
  {
    id: 6,
    text: '遠距離恋愛で一番辛いことは？',
    options: [
      { text: '声が聞けない、話せないこと', type: 'words' },
      { text: '一緒にいられる時間が少ないこと', type: 'time' },
      { text: '直接渡したいものがあるのに渡せないこと', type: 'gifts' },
      { text: '触れ合えないこと', type: 'touch' },
    ],
  },
  {
    id: 7,
    text: '記念日に何をしたい？',
    options: [
      { text: '手紙を書いて気持ちを伝える', type: 'words' },
      { text: '丸一日二人で過ごす', type: 'time' },
      { text: 'お揃いのアクセサリーを買う', type: 'gifts' },
      { text: 'いつもより多くスキンシップを取る', type: 'touch' },
    ],
  },
  {
    id: 8,
    text: '恋人の愛情表現で物足りないと感じることは？',
    options: [
      { text: 'もっと気持ちを言葉にしてほしい', type: 'words' },
      { text: 'もっと一緒にいる時間がほしい', type: 'time' },
      { text: 'もっとプレゼントやサプライズがほしい', type: 'gifts' },
      { text: 'もっとスキンシップがほしい', type: 'touch' },
    ],
  },
  {
    id: 9,
    text: '恋人に一番伝えたい愛情表現は？',
    options: [
      { text: '毎日「好き」と伝える', type: 'words' },
      { text: '何よりも二人の時間を優先する', type: 'time' },
      { text: '相手の欲しいものを覚えておく', type: 'gifts' },
      { text: '自然とスキンシップを取る', type: 'touch' },
    ],
  },
  {
    id: 10,
    text: '理想の恋人との関係性は？',
    options: [
      { text: '何でも話し合える関係', type: 'words' },
      { text: '同じ時間を共有できる関係', type: 'time' },
      { text: 'お互いを大切にしあう関係', type: 'gifts' },
      { text: '触れ合いが自然な関係', type: 'touch' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  loveAdvice: string[];
  compatibleTypes: string[];
}> = {
  words: {
    type: 'words',
    title: '言葉で愛を伝えるタイプ',
    emoji: '💬',
    description: 'あなたは「言葉」で愛を表現し、受け取るタイプです。「愛してる」「ありがとう」などの言葉が、あなたにとって何よりの愛情表現。言葉で気持ちを伝え合うことで、深い絆を感じます。',
    traits: ['コミュニケーション重視', '気持ちを言葉にする', '褒め言葉に弱い', '手紙やメッセージが好き'],
    loveAdvice: ['感謝の気持ちは言葉で伝えて', '相手の良いところを積極的に褒めよう', 'LINEでも愛情表現を忘れずに'],
    compatibleTypes: ['言葉タイプ', 'タッチタイプ'],
  },
  time: {
    type: 'time',
    title: '時間を共有するタイプ',
    emoji: '⏰',
    description: 'あなたは「一緒にいる時間」で愛を感じるタイプです。何をするかより、誰といるかが大切。恋人と過ごす時間こそが、最高の愛情表現です。',
    traits: ['一緒にいることを重視', '相手の予定を気にする', '忙しくても時間を作る', '何気ない日常を大切にする'],
    loveAdvice: ['スマホを置いて相手との時間に集中して', '定期的なデートの約束を', '「一緒にいたい」と素直に伝えて'],
    compatibleTypes: ['時間タイプ', 'ギフトタイプ'],
  },
  gifts: {
    type: 'gifts',
    title: 'プレゼントで愛を表すタイプ',
    emoji: '🎁',
    description: 'あなたは「贈り物」で愛を表現するタイプです。プレゼントの値段ではなく、「自分のことを考えてくれた」という気持ちが嬉しい。思い出の品を大切にする傾向があります。',
    traits: ['記念日を大切にする', '相手の好みを覚える', 'サプライズ好き', '思い出の品を保管する'],
    loveAdvice: ['小さなプレゼントでも気持ちを込めて', '相手の欲しいものリストをチェック', 'お揃いのアイテムを増やそう'],
    compatibleTypes: ['ギフトタイプ', '時間タイプ'],
  },
  touch: {
    type: 'touch',
    title: 'スキンシップで愛を感じるタイプ',
    emoji: '🤗',
    description: 'あなたは「触れ合い」で愛を感じるタイプです。手をつなぐ、ハグする、肩に触れるなど、身体的な接触が愛情確認。言葉より行動で愛を感じます。',
    traits: ['スキンシップ重視', 'ハグや手つなぎが好き', '物理的な距離が近い', '触れ合いで安心する'],
    loveAdvice: ['さりげないスキンシップを増やして', '相手のパーソナルスペースも尊重', '言葉での愛情表現も忘れずに'],
    compatibleTypes: ['タッチタイプ', '言葉タイプ'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { words: 0, time: 0, gifts: 0, touch: 0 };

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
