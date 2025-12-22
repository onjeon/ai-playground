// ソーシャルバッテリー診断 - 人付き合いの電池残量は？
export const questions = [
  {
    id: 1,
    text: '大人数の飲み会の後、どんな気分？',
    options: [
      { text: 'ぐったり疲れて一人になりたい', type: 'introvert' },
      { text: '楽しかったけど疲れた', type: 'ambivert_intro' },
      { text: 'まあまあ元気、もう少し話したかったかも', type: 'ambivert_extro' },
      { text: 'まだまだ元気！二次会行こう！', type: 'extrovert' },
    ],
  },
  {
    id: 2,
    text: '休日、理想の過ごし方は？',
    options: [
      { text: '完全に一人で過ごす', type: 'introvert' },
      { text: '一人時間多め、少し人と会う程度', type: 'ambivert_intro' },
      { text: '人と会いつつ、一人時間も確保', type: 'ambivert_extro' },
      { text: '予定パンパンで人と会いまくる', type: 'extrovert' },
    ],
  },
  {
    id: 3,
    text: '知らない人だらけのパーティー、あなたは？',
    options: [
      { text: 'できれば行きたくない…', type: 'introvert' },
      { text: '隅で静かにしている', type: 'ambivert_intro' },
      { text: '話しかけられたら対応できる', type: 'ambivert_extro' },
      { text: '自分から話しかけまくる！', type: 'extrovert' },
    ],
  },
  {
    id: 4,
    text: '一人で過ごす時間が長く続くと？',
    options: [
      { text: '最高！永遠にこれでいい', type: 'introvert' },
      { text: '快適だけど、たまには人と会いたい', type: 'ambivert_intro' },
      { text: '少し寂しくなってくる', type: 'ambivert_extro' },
      { text: '耐えられない！誰かに会いたい', type: 'extrovert' },
    ],
  },
  {
    id: 5,
    text: '友達との連絡頻度は？',
    options: [
      { text: '必要な時だけ。LINEも面倒', type: 'introvert' },
      { text: 'たまに連絡する程度', type: 'ambivert_intro' },
      { text: '定期的に連絡を取る', type: 'ambivert_extro' },
      { text: '毎日誰かと連絡してる', type: 'extrovert' },
    ],
  },
  {
    id: 6,
    text: '雑談・世間話について',
    options: [
      { text: '苦手。何話していいか分からない', type: 'introvert' },
      { text: '必要ならできるけど疲れる', type: 'ambivert_intro' },
      { text: '普通にできる、嫌いじゃない', type: 'ambivert_extro' },
      { text: '大好き！話すことが生きがい', type: 'extrovert' },
    ],
  },
  {
    id: 7,
    text: '急な予定変更で人と会うことになったら？',
    options: [
      { text: '心の準備ができてないから断りたい', type: 'introvert' },
      { text: 'ちょっと億劫だけど行く', type: 'ambivert_intro' },
      { text: '予定が空いてれば問題なし', type: 'ambivert_extro' },
      { text: 'ラッキー！予定が増えて嬉しい', type: 'extrovert' },
    ],
  },
  {
    id: 8,
    text: '在宅勤務と出社、どっちが好き？',
    options: [
      { text: '絶対在宅！人に会いたくない', type: 'introvert' },
      { text: '在宅多めがいい', type: 'ambivert_intro' },
      { text: '半々くらいがちょうどいい', type: 'ambivert_extro' },
      { text: '出社派！オフィスが楽しい', type: 'extrovert' },
    ],
  },
  {
    id: 9,
    text: 'エネルギー回復の方法は？',
    options: [
      { text: '完全に一人の時間で充電', type: 'introvert' },
      { text: '一人時間＋少しの人との会話', type: 'ambivert_intro' },
      { text: '人と会いつつ、一人時間も必要', type: 'ambivert_extro' },
      { text: '人と会うことでエネルギーチャージ', type: 'extrovert' },
    ],
  },
  {
    id: 10,
    text: '「今日は誰とも話したくない」って日、どのくらいある？',
    options: [
      { text: 'ほぼ毎日そう思う', type: 'introvert' },
      { text: '週に3〜4日くらい', type: 'ambivert_intro' },
      { text: '週に1〜2日くらい', type: 'ambivert_extro' },
      { text: 'ほとんどない、毎日誰かと話したい', type: 'extrovert' },
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
  introvert: {
    type: 'introvert',
    title: '省エネモード全開タイプ',
    emoji: '🔋',
    percentage: 'ソーシャルバッテリー 20%',
    description: '人と会うと急速に電池が減るタイプ。一人の時間が命の充電器です。無理に人付き合いをすると電池切れでダウンしてしまうことも。自分のペースを大切に！',
    characteristics: ['内向的', '深い思考', '一人時間必須', '少数精鋭の友達', '聞き上手'],
    advice: '無理な人付き合いは禁物。一人時間をしっかり確保してね。',
  },
  ambivert_intro: {
    type: 'ambivert_intro',
    title: '内向寄りバランスタイプ',
    emoji: '🔌',
    percentage: 'ソーシャルバッテリー 40%',
    description: '基本的には一人時間が好きだけど、適度な人との交流もできるタイプ。大人数より少人数、長時間より短時間の付き合いが向いています。',
    characteristics: ['バランス型', '適度な社交性', '選択的', '質重視', '自己管理上手'],
    advice: '自分のペースを大切に。無理せず心地いい距離感を保って。',
  },
  ambivert_extro: {
    type: 'ambivert_extro',
    title: '外向寄りバランスタイプ',
    emoji: '⚡',
    percentage: 'ソーシャルバッテリー 65%',
    description: '人と会うのは好きだけど、一人時間も必要なタイプ。社交的だけど、たまに充電が必要になります。バランス感覚に優れています。',
    characteristics: ['社交的', '柔軟', '切り替え上手', 'オンオフ明確', '適応力'],
    advice: '社交と休息のバランスが大切。疲れたら無理せず休んで。',
  },
  extrovert: {
    type: 'extrovert',
    title: 'フル充電常時パリピタイプ',
    emoji: '🔥',
    percentage: 'ソーシャルバッテリー 95%',
    description: '人と会えば会うほど元気になる太陽のようなタイプ。一人でいると逆に電池が減ってしまいます。人が大好きで、いつも誰かと一緒にいたい！',
    characteristics: ['外向的', 'エネルギッシュ', '社交的', 'ムードメーカー', 'コミュ力抜群'],
    advice: '一人時間も大切に！たまには自分と向き合う時間も作ってね。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { introvert: 0, ambivert_intro: 0, ambivert_extro: 0, extrovert: 0 };

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
