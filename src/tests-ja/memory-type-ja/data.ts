// 記憶タイプ診断
export const questions = [
  {
    id: 1,
    text: '初めて会った人のことを覚えているのは？',
    options: [
      { text: '顔はばっちり覚えている', type: 'visual' },
      { text: '名前や声を覚えている', type: 'auditory' },
      { text: '握手の感触や雰囲気を覚えている', type: 'kinesthetic' },
      { text: 'その人との会話の内容を覚えている', type: 'verbal' },
    ],
  },
  {
    id: 2,
    text: '道を覚えるとき、どうやって覚える？',
    options: [
      { text: '地図や景色のイメージで', type: 'visual' },
      { text: '「〇〇を右」など言葉で', type: 'auditory' },
      { text: '実際に歩いて体で覚える', type: 'kinesthetic' },
      { text: '目印になる建物や看板の名前で', type: 'verbal' },
    ],
  },
  {
    id: 3,
    text: '映画を見た後、一番覚えているのは？',
    options: [
      { text: '印象的なシーンの映像', type: 'visual' },
      { text: 'BGMやセリフ', type: 'auditory' },
      { text: '見たときの感情や雰囲気', type: 'kinesthetic' },
      { text: 'ストーリーの内容', type: 'verbal' },
    ],
  },
  {
    id: 4,
    text: '勉強するとき、一番効果的なのは？',
    options: [
      { text: '図や表、カラフルなノートを作る', type: 'visual' },
      { text: '音読したり、講義を聞く', type: 'auditory' },
      { text: '実際に手を動かして書く', type: 'kinesthetic' },
      { text: '要点を文章でまとめる', type: 'verbal' },
    ],
  },
  {
    id: 5,
    text: '昔の思い出を振り返るとき？',
    options: [
      { text: 'その時の景色が浮かぶ', type: 'visual' },
      { text: 'その時の音や声が蘇る', type: 'auditory' },
      { text: 'その時の感情や感覚が蘇る', type: 'kinesthetic' },
      { text: '何を話したか、何があったか思い出す', type: 'verbal' },
    ],
  },
  {
    id: 6,
    text: '電話番号を覚えるとき？',
    options: [
      { text: '数字の並びを画像のように', type: 'visual' },
      { text: '口に出して音で覚える', type: 'auditory' },
      { text: '指で入力する動きで覚える', type: 'kinesthetic' },
      { text: '語呂合わせで言葉にして', type: 'verbal' },
    ],
  },
  {
    id: 7,
    text: '料理のレシピを覚えるとき？',
    options: [
      { text: '完成形の写真を見て', type: 'visual' },
      { text: '説明を聞いて手順を覚える', type: 'auditory' },
      { text: '実際に作りながら体で覚える', type: 'kinesthetic' },
      { text: '手順を文章で書いて', type: 'verbal' },
    ],
  },
  {
    id: 8,
    text: '人の話を聞いているとき？',
    options: [
      { text: 'イメージを頭に描きながら聞く', type: 'visual' },
      { text: '声のトーンや言い方に注目', type: 'auditory' },
      { text: '相手の感情を感じ取りながら', type: 'kinesthetic' },
      { text: '内容を整理しながら聞く', type: 'verbal' },
    ],
  },
  {
    id: 9,
    text: '忘れ物をしないようにするには？',
    options: [
      { text: '目につく場所に置いておく', type: 'visual' },
      { text: 'アラームをセットする', type: 'auditory' },
      { text: '習慣化して体に染み込ませる', type: 'kinesthetic' },
      { text: 'メモやリストを書いておく', type: 'verbal' },
    ],
  },
  {
    id: 10,
    text: '何かを説明するとき、どうする？',
    options: [
      { text: '図や絵を描いて説明', type: 'visual' },
      { text: '言葉で丁寧に説明', type: 'auditory' },
      { text: '実演して見せる', type: 'kinesthetic' },
      { text: '箇条書きで整理して説明', type: 'verbal' },
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
  visual: {
    type: 'visual',
    title: '視覚記憶タイプ',
    emoji: '👁️',
    percentage: '視覚優位度 85%',
    description: '映像やイメージで物事を記憶するタイプ。頭の中に「絵」として情報を保存し、思い出すときも映像で再生されます。色やデザイン、レイアウトに敏感で、視覚的な情報処理が得意です。',
    characteristics: ['イメージ力', '空間認識', 'デザインセンス', '観察力', '映像記憶'],
    advice: 'マインドマップやイラスト、カラーペンを活用すると効果的！',
  },
  auditory: {
    type: 'auditory',
    title: '聴覚記憶タイプ',
    emoji: '👂',
    percentage: '聴覚優位度 85%',
    description: '音や声、リズムで記憶するタイプ。講義や会話を聞いて覚えるのが得意で、音楽やメロディーにも敏感。声に出して読むと記憶に残りやすい特徴があります。',
    characteristics: ['音感', '言葉の記憶', 'リズム感', '会話力', '聞き上手'],
    advice: '音読や録音を活用して。語呂合わせや歌で覚えるのも効果的！',
  },
  kinesthetic: {
    type: 'kinesthetic',
    title: '体感記憶タイプ',
    emoji: '🤚',
    percentage: '体感優位度 85%',
    description: '体を動かしたり、実際に経験することで記憶するタイプ。感情や感覚と結びついた記憶が強く残ります。手を動かしながら学ぶと効果的で、実践的な学習が向いています。',
    characteristics: ['体験重視', '感情記憶', '実践力', '直感', '身体感覚'],
    advice: '実際にやってみることが一番！体を動かしながら覚えよう。',
  },
  verbal: {
    type: 'verbal',
    title: '言語記憶タイプ',
    emoji: '📝',
    percentage: '言語優位度 85%',
    description: '言葉や文章で情報を整理・記憶するタイプ。論理的に内容を理解し、文章化することで記憶が定着します。要点をまとめたり、ノートを取るのが得意です。',
    characteristics: ['論理的', '文章力', '整理上手', '分析力', '言語センス'],
    advice: 'メモやノートを取る習慣を続けて。書くことで記憶が強化されます！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { visual: 0, auditory: 0, kinesthetic: 0, verbal: 0 };

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
