// 口説き方タイプ診断 (플러팅 스타일 테스트)
export const questions = [
  {
    id: 1,
    text: '気になる人にアプローチする時は？',
    options: [
      { text: 'ストレートに「好き」と伝える', type: 'direct' },
      { text: 'ユーモアで笑わせて距離を縮める', type: 'playful' },
      { text: 'さりげなく優しさをアピール', type: 'sincere' },
      { text: '知性や会話力で惹きつける', type: 'intellectual' },
    ],
  },
  {
    id: 2,
    text: '初デートで心がけることは？',
    options: [
      { text: '積極的にリードする', type: 'direct' },
      { text: '楽しい雰囲気を作る', type: 'playful' },
      { text: '相手の話をよく聞く', type: 'sincere' },
      { text: '興味深い話題を用意する', type: 'intellectual' },
    ],
  },
  {
    id: 3,
    text: 'LINEでのアプローチ方法は？',
    options: [
      { text: 'ストレートに「会いたい」と送る', type: 'direct' },
      { text: '面白いスタンプや冗談を送る', type: 'playful' },
      { text: '相手を気遣うメッセージを送る', type: 'sincere' },
      { text: '興味深い記事や話題をシェア', type: 'intellectual' },
    ],
  },
  {
    id: 4,
    text: '相手を褒める時は？',
    options: [
      { text: '「かわいい」「かっこいい」と直接言う', type: 'direct' },
      { text: '冗談っぽく「モテるでしょ？」', type: 'playful' },
      { text: '「一緒にいると落ち着く」と伝える', type: 'sincere' },
      { text: '「考え方が素敵」と内面を褒める', type: 'intellectual' },
    ],
  },
  {
    id: 5,
    text: '好意を伝えるタイミングは？',
    options: [
      { text: '思った時にすぐ伝える', type: 'direct' },
      { text: '楽しい雰囲気の中で冗談っぽく', type: 'playful' },
      { text: '二人きりの静かな場所で', type: 'sincere' },
      { text: '深い話をした後に', type: 'intellectual' },
    ],
  },
  {
    id: 6,
    text: '相手の気を引く自信のあるポイントは？',
    options: [
      { text: '積極性と行動力', type: 'direct' },
      { text: 'ユーモアと明るさ', type: 'playful' },
      { text: '誠実さと優しさ', type: 'sincere' },
      { text: '知性と話の深さ', type: 'intellectual' },
    ],
  },
  {
    id: 7,
    text: 'デートに誘う言い方は？',
    options: [
      { text: '「今度の土曜、空いてる？」', type: 'direct' },
      { text: '「面白い店見つけたから行こうよ！」', type: 'playful' },
      { text: '「よかったら一緒にどうかな...」', type: 'sincere' },
      { text: '「この間話してた映画、一緒に見ない？」', type: 'intellectual' },
    ],
  },
  {
    id: 8,
    text: '相手が脈ありか確認する方法は？',
    options: [
      { text: '直接「俺のこと好き？」と聞く', type: 'direct' },
      { text: '冗談っぽく「俺たち付き合ってる？」', type: 'playful' },
      { text: '相手の態度や行動から察する', type: 'sincere' },
      { text: '会話の中でさりげなく探る', type: 'intellectual' },
    ],
  },
  {
    id: 9,
    text: 'ライバルが現れたら？',
    options: [
      { text: '負けじと積極的にアプローチ', type: 'direct' },
      { text: '自分の魅力で差をつける', type: 'playful' },
      { text: '相手の幸せを優先して見守る', type: 'sincere' },
      { text: '冷静に状況を分析する', type: 'intellectual' },
    ],
  },
  {
    id: 10,
    text: '告白するなら？',
    options: [
      { text: '「好きです、付き合ってください」', type: 'direct' },
      { text: '「俺と付き合うと毎日楽しいよ？」', type: 'playful' },
      { text: '手紙で気持ちを綴る', type: 'sincere' },
      { text: '二人の相性の良さを論理的に説明', type: 'intellectual' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  flirtingStyle: string[];
  strengths: string[];
  tips: string[];
}> = {
  direct: {
    type: 'direct',
    title: 'ストレート肉食系タイプ',
    emoji: '🔥',
    description: 'あなたは直球勝負のストレートタイプ！好きになったら積極的にアプローチし、気持ちをはっきり伝えます。回りくどいことが苦手で、行動力が魅力。',
    flirtingStyle: ['ストレートに気持ちを伝える', '積極的にリード', '行動で示す'],
    strengths: ['分かりやすい', '行動が早い', '相手を待たせない'],
    tips: ['押しすぎに注意', '相手のペースも大切に', 'たまには引くことも効果的'],
  },
  playful: {
    type: 'playful',
    title: 'ユーモア魅惑タイプ',
    emoji: '😄',
    description: 'あなたはユーモアで相手の心を掴むタイプ！笑いで距離を縮め、楽しい雰囲気を作るのが得意。一緒にいて飽きない魅力があります。',
    flirtingStyle: ['ユーモアで距離を縮める', '楽しい雰囲気を演出', '冗談っぽくアプローチ'],
    strengths: ['親しみやすい', 'リラックスさせる', '記憶に残る'],
    tips: ['真剣な気持ちも伝えて', '冗談と本気の境界を明確に', 'TPOに注意'],
  },
  sincere: {
    type: 'sincere',
    title: '誠実紳士/淑女タイプ',
    emoji: '💝',
    description: 'あなたは誠実さで勝負するタイプ！優しさと思いやりで相手の心に寄り添います。派手さはないけど、深い信頼を築ける魅力があります。',
    flirtingStyle: ['誠実に気持ちを伝える', '相手を大切にする', '優しさでアピール'],
    strengths: ['信頼される', '長続きする関係', '安心感を与える'],
    tips: ['もう少し積極性も', '気持ちは言葉にして', '優しすぎて友達止まりに注意'],
  },
  intellectual: {
    type: 'intellectual',
    title: '知性派スマートタイプ',
    emoji: '🧠',
    description: 'あなたは知性と会話力で魅了するタイプ！深い話や知的な会話で相手を惹きつけます。表面的な関係より、精神的なつながりを重視。',
    flirtingStyle: ['知的な会話で惹きつける', '深い話を共有', '内面を褒める'],
    strengths: ['深い関係を築ける', '知的好奇心を刺激', '価値観が合う相手を見つけられる'],
    tips: ['感情的なアプローチも', '理屈だけでなく行動も', '軽い会話も楽しんで'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { direct: 0, playful: 0, sincere: 0, intellectual: 0 };

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
