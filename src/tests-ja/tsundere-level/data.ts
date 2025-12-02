// ツンデレ度診断テスト (츤데레 레벨 테스트)
export const questions = [
  {
    id: 1,
    text: '好きな人に褒められたら？',
    options: [
      { text: '「べ、別に嬉しくないし」と言いながら照れる', type: 'tsun' },
      { text: '「ありがとう！」と素直に喜ぶ', type: 'dere' },
      { text: '無表情だけど内心めっちゃ嬉しい', type: 'kuu' },
      { text: '照れ隠しで軽く冗談を言う', type: 'mild' },
    ],
  },
  {
    id: 2,
    text: '友達が落ち込んでいる時は？',
    options: [
      { text: '「しょうがないな」と言いつつ助ける', type: 'tsun' },
      { text: '「大丈夫？」と優しく寄り添う', type: 'dere' },
      { text: '黙ってそばにいる', type: 'kuu' },
      { text: '励ましながらも少し照れる', type: 'mild' },
    ],
  },
  {
    id: 3,
    text: 'プレゼントをもらったら？',
    options: [
      { text: '「別に欲しくなかったけど」と言いつつ大事にする', type: 'tsun' },
      { text: '「嬉しい！ありがとう！」と大喜び', type: 'dere' },
      { text: '淡々と「ありがとう」と言う', type: 'kuu' },
      { text: '照れながらお礼を言う', type: 'mild' },
    ],
  },
  {
    id: 4,
    text: '好きな人と目が合ったら？',
    options: [
      { text: 'プイッとそっぽを向く', type: 'tsun' },
      { text: 'ニコッと微笑む', type: 'dere' },
      { text: '平静を装って目をそらす', type: 'kuu' },
      { text: '少し恥ずかしそうに笑う', type: 'mild' },
    ],
  },
  {
    id: 5,
    text: '好きな人からLINEが来たら？',
    options: [
      { text: 'すぐ見るけど返信は少し待ってから', type: 'tsun' },
      { text: 'すぐに返信する', type: 'dere' },
      { text: '落ち着いてから返信', type: 'kuu' },
      { text: 'ちょっとドキドキしながら返信', type: 'mild' },
    ],
  },
  {
    id: 6,
    text: '告白するなら？',
    options: [
      { text: '「勘違いしないでよね！」と前置きしてから', type: 'tsun' },
      { text: 'ストレートに気持ちを伝える', type: 'dere' },
      { text: '冷静に簡潔に伝える', type: 'kuu' },
      { text: '緊張しながらも頑張って伝える', type: 'mild' },
    ],
  },
  {
    id: 7,
    text: '好きな人が他の異性と話していたら？',
    options: [
      { text: 'わざと無関心なフリをする（内心気になる）', type: 'tsun' },
      { text: '正直にモヤモヤする', type: 'dere' },
      { text: '特に何も感じないフリをする', type: 'kuu' },
      { text: 'ちょっと気になるけど我慢', type: 'mild' },
    ],
  },
  {
    id: 8,
    text: 'デートに誘われたら？',
    options: [
      { text: '「暇だからいいけど」と言って内心ワクワク', type: 'tsun' },
      { text: '「行きたい！」と即答', type: 'dere' },
      { text: '「いいよ」とクールに承諾', type: 'kuu' },
      { text: '嬉しそうにOKする', type: 'mild' },
    ],
  },
  {
    id: 9,
    text: '好きな人に頼りにされたら？',
    options: [
      { text: '「仕方ないな」と言いながら全力で助ける', type: 'tsun' },
      { text: '喜んで力になる', type: 'dere' },
      { text: '淡々と手伝う', type: 'kuu' },
      { text: '照れながらも嬉しそうに手伝う', type: 'mild' },
    ],
  },
  {
    id: 10,
    text: '自分の恋愛スタイルは？',
    options: [
      { text: '素直になれないけど、一途に想い続ける', type: 'tsun' },
      { text: '好きな気持ちは隠さない', type: 'dere' },
      { text: '感情を表に出さないけど、ちゃんと想ってる', type: 'kuu' },
      { text: '時々素直になれないけど、基本は正直', type: 'mild' },
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
  famousCharacter: string;
}> = {
  tsun: {
    type: 'tsun',
    title: '王道ツンデレ',
    emoji: '😤💕',
    percentage: 'ツンデレ度 90%',
    description: '「べ、別にあんたのためじゃないんだからね！」が口癖になりそうなあなた。素直になれない不器用さが魅力です。本当は誰よりも優しいのに、それを見せるのが恥ずかしいタイプ。',
    characteristics: ['素直になれない', '照れ屋', '一途', '不器用だけど優しい', '内心はデレデレ'],
    famousCharacter: '代表キャラ：御坂美琴（とある科学の超電磁砲）',
  },
  dere: {
    type: 'dere',
    title: '素直デレデレ',
    emoji: '🥰',
    percentage: 'ツンデレ度 10%',
    description: '好きな気持ちを隠さない素直なあなた。相手への愛情をストレートに表現できる貴重な存在です。周りからは「可愛い」と言われることが多いのでは？',
    characteristics: ['素直', '愛情表現が豊か', '明るい', 'ポジティブ', '甘え上手'],
    famousCharacter: '代表キャラ：中野四葉（五等分の花嫁）',
  },
  kuu: {
    type: 'kuu',
    title: 'クールデレ',
    emoji: '😐💗',
    percentage: 'ツンデレ度 60%（クール系）',
    description: '表情には出さないけど、内心はちゃんと想っているタイプ。感情を表に出すのが苦手で、クールに見られがちですが、行動で愛を示します。',
    characteristics: ['クール', '感情を出さない', '行動で示す', 'ギャップ萌え', '一途'],
    famousCharacter: '代表キャラ：綾波レイ（エヴァンゲリオン）',
  },
  mild: {
    type: 'mild',
    title: 'マイルドツンデレ',
    emoji: '☺️',
    percentage: 'ツンデレ度 40%',
    description: '時々素直になれないけど、基本的には正直なあなた。バランスの取れたツンデレで、相手を困らせすぎない絶妙な可愛さがあります。',
    characteristics: ['バランス型', '時々照れ屋', '基本は素直', '可愛げがある', '親しみやすい'],
    famousCharacter: '代表キャラ：桐崎千棘（ニセコイ）',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { tsun: 0, dere: 0, kuu: 0, mild: 0 };

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
