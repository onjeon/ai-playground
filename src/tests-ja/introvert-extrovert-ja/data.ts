// 内向型外向型診断テスト (내향외향 테스트)
export const questions = [
  {
    id: 1,
    text: '週末、理想の過ごし方は？',
    options: [
      { text: 'たくさんの友達とパーティーや飲み会', type: 'extrovert' },
      { text: '少人数の親しい友達と会う', type: 'ambivert_ext' },
      { text: '家でゆっくり趣味を楽しむ', type: 'ambivert_int' },
      { text: '一人で静かに過ごす', type: 'introvert' },
    ],
  },
  {
    id: 2,
    text: '新しい人と会った時の気持ちは？',
    options: [
      { text: 'ワクワクする！もっと話したい', type: 'extrovert' },
      { text: '興味があれば楽しく話せる', type: 'ambivert_ext' },
      { text: '最初は緊張するけど慣れれば大丈夫', type: 'ambivert_int' },
      { text: '正直ちょっと疲れる', type: 'introvert' },
    ],
  },
  {
    id: 3,
    text: 'エネルギーを回復する方法は？',
    options: [
      { text: '人と会って話す', type: 'extrovert' },
      { text: '外出してアクティブに過ごす', type: 'ambivert_ext' },
      { text: 'おうちでリラックスする', type: 'ambivert_int' },
      { text: '一人の時間を確保する', type: 'introvert' },
    ],
  },
  {
    id: 4,
    text: 'グループでの話し合いでは？',
    options: [
      { text: '積極的に発言して議論をリードする', type: 'extrovert' },
      { text: '意見があれば発言する', type: 'ambivert_ext' },
      { text: '聞くことが多いが、求められれば話す', type: 'ambivert_int' },
      { text: 'じっくり考えてから発言したい', type: 'introvert' },
    ],
  },
  {
    id: 5,
    text: '電話とメール/LINE、どっちが好き？',
    options: [
      { text: '電話のほうが早くて楽', type: 'extrovert' },
      { text: 'どちらでも使い分ける', type: 'ambivert_ext' },
      { text: 'できればメールやLINEがいい', type: 'ambivert_int' },
      { text: 'メールやLINEが断然楽', type: 'introvert' },
    ],
  },
  {
    id: 6,
    text: '仕事や勉強の環境は？',
    options: [
      { text: '人がいる活気ある場所がいい', type: 'extrovert' },
      { text: 'カフェなど適度に人がいる場所', type: 'ambivert_ext' },
      { text: '静かな場所で集中したい', type: 'ambivert_int' },
      { text: '一人で誰にも邪魔されない場所がベスト', type: 'introvert' },
    ],
  },
  {
    id: 7,
    text: '考えを整理する時は？',
    options: [
      { text: '人に話しながら考える', type: 'extrovert' },
      { text: '誰かと意見交換する', type: 'ambivert_ext' },
      { text: 'ノートに書きながら一人で考える', type: 'ambivert_int' },
      { text: '静かに頭の中で整理する', type: 'introvert' },
    ],
  },
  {
    id: 8,
    text: '旅行するなら？',
    options: [
      { text: '大勢でわいわい旅行', type: 'extrovert' },
      { text: '友達と少人数で', type: 'ambivert_ext' },
      { text: '恋人や親友と二人で', type: 'ambivert_int' },
      { text: '一人旅で自由に', type: 'introvert' },
    ],
  },
  {
    id: 9,
    text: '長時間人と過ごした後は？',
    options: [
      { text: 'もっと一緒にいたい！', type: 'extrovert' },
      { text: '楽しかったけど、そろそろ解散でいいかな', type: 'ambivert_ext' },
      { text: '少し疲れたけど楽しかった', type: 'ambivert_int' },
      { text: '一人の時間が必要...', type: 'introvert' },
    ],
  },
  {
    id: 10,
    text: '自分を一言で表すと？',
    options: [
      { text: '社交的で活発', type: 'extrovert' },
      { text: '明るくて人当たりがいい', type: 'ambivert_ext' },
      { text: '穏やかで落ち着いている', type: 'ambivert_int' },
      { text: '物静かで思慮深い', type: 'introvert' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  personalityType: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  advice: string;
}> = {
  extrovert: {
    type: 'extrovert',
    title: '外向型タイプ',
    emoji: '☀️🎉',
    personalityType: '性格タイプ：完全外向型',
    description: 'あなたは人との交流からエネルギーを得る外向型です。社交的で活発、周りを明るくするムードメーカー的存在です。',
    characteristics: ['社交的', 'エネルギッシュ', '積極的', '行動派'],
    strengths: ['コミュニケーション能力', 'リーダーシップ', '人脈づくり', 'チームワーク'],
    advice: '時には一人の時間も作って、自分と向き合う時間も大切にしましょう。',
  },
  ambivert_ext: {
    type: 'ambivert_ext',
    title: '外向寄りの両向型',
    emoji: '🌤️✨',
    personalityType: '性格タイプ：外向寄りアンビバート',
    description: 'あなたは外向的な傾向が強いですが、状況に応じて内向的になれる柔軟性を持っています。社交的でありながら、自分の時間も大切にできるタイプです。',
    characteristics: ['社交的だけど疲れも感じる', '適度なバランス', '人当たりがいい', '柔軟性がある'],
    strengths: ['状況適応力', 'バランス感覚', '幅広い人間関係', '共感力'],
    advice: '自分のエネルギー残量を意識して、無理のない人付き合いを心がけましょう。',
  },
  ambivert_int: {
    type: 'ambivert_int',
    title: '内向寄りの両向型',
    emoji: '🌙✨',
    personalityType: '性格タイプ：内向寄りアンビバート',
    description: 'あなたは内向的な傾向が強いですが、必要な場面では外向的に振る舞える柔軟性があります。深い関係を大切にしながら、社会的にもうまくやっていけるタイプです。',
    characteristics: ['穏やかだけど社交もできる', '深い関係を好む', '思慮深い', '適応力がある'],
    strengths: ['深い人間関係', '傾聴力', '洞察力', '状況判断力'],
    advice: '無理して外向的になろうとせず、自分のペースを大切にしましょう。',
  },
  introvert: {
    type: 'introvert',
    title: '内向型タイプ',
    emoji: '🌙📚',
    personalityType: '性格タイプ：完全内向型',
    description: 'あなたは一人の時間からエネルギーを得る内向型です。深く考え、質の高い人間関係を築く、思慮深いタイプです。',
    characteristics: ['思慮深い', '独立心がある', '深い集中力', '一人の時間を大切にする'],
    strengths: ['深い思考力', '創造性', '集中力', '忠実な友人関係'],
    advice: '社交の場面では無理をせず、自分らしいペースで人と関わりましょう。あなたの深さは大きな魅力です。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { extrovert: 0, ambivert_ext: 0, ambivert_int: 0, introvert: 0 };

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
