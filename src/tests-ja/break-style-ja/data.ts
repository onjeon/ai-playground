// 休憩スタイル診断
export const questions = [
  {
    id: 1,
    text: '仕事中の休憩で何をする？',
    options: [
      { text: 'ストレッチや軽い運動', type: 'active' },
      { text: 'コーヒーを飲みながらリラックス', type: 'social' },
      { text: 'スマホやSNSをチェック', type: 'digital' },
      { text: '目を閉じて静かに休む', type: 'quiet' },
    ],
  },
  {
    id: 2,
    text: '理想的な休憩時間は？',
    options: [
      { text: '5〜10分の短い休憩', type: 'active' },
      { text: '15〜20分のしっかり休憩', type: 'social' },
      { text: '時間を決めずにダラダラ', type: 'digital' },
      { text: '必要に応じて', type: 'quiet' },
    ],
  },
  {
    id: 3,
    text: '昼休みの過ごし方は？',
    options: [
      { text: '散歩やウォーキング', type: 'active' },
      { text: '同僚とランチやおしゃべり', type: 'social' },
      { text: '動画やスマホを見ながら食事', type: 'digital' },
      { text: '一人で静かに過ごす', type: 'quiet' },
    ],
  },
  {
    id: 4,
    text: '休憩後の気分は？',
    options: [
      { text: '体を動かしてリフレッシュ！', type: 'active' },
      { text: '話してスッキリ！', type: 'social' },
      { text: '息抜きできた', type: 'digital' },
      { text: '静かに充電できた', type: 'quiet' },
    ],
  },
  {
    id: 5,
    text: '疲れた時にしたいことは？',
    options: [
      { text: '外の空気を吸いに行く', type: 'active' },
      { text: '誰かと話す', type: 'social' },
      { text: '好きな動画を見る', type: 'digital' },
      { text: '一人で静かにする', type: 'quiet' },
    ],
  },
  {
    id: 6,
    text: '休憩中の飲み物は？',
    options: [
      { text: '水やスポーツドリンク', type: 'active' },
      { text: 'コーヒーや紅茶をゆっくり', type: 'social' },
      { text: '何か飲みながらスマホ', type: 'digital' },
      { text: '静かにお茶を楽しむ', type: 'quiet' },
    ],
  },
  {
    id: 7,
    text: '長時間作業後の休憩は？',
    options: [
      { text: '体を動かしてリセット', type: 'active' },
      { text: '誰かと雑談でリフレッシュ', type: 'social' },
      { text: 'SNSやニュースをチェック', type: 'digital' },
      { text: '目を休めて静かに', type: 'quiet' },
    ],
  },
  {
    id: 8,
    text: '休憩スポットとして好きな場所は？',
    options: [
      { text: '外や窓際', type: 'active' },
      { text: '休憩室やカフェスペース', type: 'social' },
      { text: '自席やソファ', type: 'digital' },
      { text: '静かな場所', type: 'quiet' },
    ],
  },
  {
    id: 9,
    text: '休憩の取り方について',
    options: [
      { text: '意識的に体を動かす', type: 'active' },
      { text: 'コミュニケーションを大切に', type: 'social' },
      { text: '自然に取る、時々長くなる', type: 'digital' },
      { text: '静かに自分を取り戻す', type: 'quiet' },
    ],
  },
  {
    id: 10,
    text: '最も効果的だと思う休憩法は？',
    options: [
      { text: '運動やストレッチ', type: 'active' },
      { text: '人との交流', type: 'social' },
      { text: 'エンターテイメント', type: 'digital' },
      { text: '瞑想やマインドフルネス', type: 'quiet' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  style: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  active: {
    type: 'active',
    title: 'アクティブ休憩派',
    emoji: '🏃‍♂️🌿',
    style: '休憩スタイル：動いてリフレッシュ',
    description: '体を動かすことで休憩するタイプ。ストレッチ、散歩、軽い運動などで血流を良くし、頭もスッキリ！デスクワークの疲れを効果的にリセットできます。',
    characteristics: ['体を動かして休む', '外の空気が好き', 'アクティブ', '血流改善を意識'],
    tips: ['デスクでできるストレッチも効果的', '階段を使う習慣を', '外の光を浴びるのも良い'],
  },
  social: {
    type: 'social',
    title: 'ソーシャル休憩派',
    emoji: '☕👥',
    style: '休憩スタイル：話してリフレッシュ',
    description: '人との交流で休憩するタイプ。同僚との雑談やコーヒーブレイクでストレス発散。コミュニケーションを通じてエネルギーを回復します。',
    characteristics: ['おしゃべりが好き', 'コミュニケーションで回復', 'カフェタイムを楽しむ', '人との繋がりを大切に'],
    tips: ['休憩仲間を見つけて', 'ポジティブな会話を心がけて', '一人の時間も時々取って'],
  },
  digital: {
    type: 'digital',
    title: 'デジタル休憩派',
    emoji: '📱🎮',
    style: '休憩スタイル：スマホでリフレッシュ',
    description: 'スマホやSNS、動画で休憩するタイプ。デジタルコンテンツで気分転換し、好きな情報をチェックして息抜き。現代的な休憩スタイル！',
    characteristics: ['スマホで休憩', 'SNSや動画好き', '情報収集も兼ねて', 'デジタルネイティブ'],
    tips: ['休憩時間を決めると良い', '目の休憩も忘れずに', 'たまには画面から離れて'],
  },
  quiet: {
    type: 'quiet',
    title: '静寂休憩派',
    emoji: '🧘‍♀️🌸',
    style: '休憩スタイル：静かにリフレッシュ',
    description: '静かに一人で休憩するタイプ。目を閉じたり、瞑想したり、静かな時間で心身を回復。内省的で、自分と向き合う時間を大切にします。',
    characteristics: ['静けさを好む', '一人の時間が大切', '内省的', 'マインドフルネス志向'],
    tips: ['瞑想アプリを試してみて', '静かな休憩スポットを確保', '短い昼寝も効果的'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { active: 0, social: 0, digital: 0, quiet: 0 };

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
