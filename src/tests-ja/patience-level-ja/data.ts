// 忍耐力診断
export const questions = [
  {
    id: 1,
    text: 'レジで前の人がもたついている。あなたの反応は？',
    options: [
      { text: 'イライラして別のレジに移動', type: 'low' },
      { text: '少しイライラするけど待つ', type: 'medium' },
      { text: 'スマホを見ながらのんびり待つ', type: 'high' },
      { text: '全く気にならない、むしろ手伝いたくなる', type: 'zen' },
    ],
  },
  {
    id: 2,
    text: 'ダイエットや筋トレ、続けられる期間は？',
    options: [
      { text: '3日が限界...', type: 'low' },
      { text: '1ヶ月くらいなら', type: 'medium' },
      { text: '半年以上は継続できる', type: 'high' },
      { text: '目標達成まで何年でも', type: 'zen' },
    ],
  },
  {
    id: 3,
    text: 'ネットの読み込みが遅いとき、どうする？',
    options: [
      { text: '即座にリロード連打', type: 'low' },
      { text: '30秒くらいは待ってみる', type: 'medium' },
      { text: '他のことをしながら待つ', type: 'high' },
      { text: '読み込み中も別のこと考えて過ごせる', type: 'zen' },
    ],
  },
  {
    id: 4,
    text: '友達との待ち合わせで30分待たされたら？',
    options: [
      { text: 'かなり不機嫌になる', type: 'low' },
      { text: 'ちょっとイラっとするけど許す', type: 'medium' },
      { text: 'カフェでも入って時間を楽しむ', type: 'high' },
      { text: '「何かあったのかな」と心配する', type: 'zen' },
    ],
  },
  {
    id: 5,
    text: '欲しいものがあるとき、どうする？',
    options: [
      { text: '我慢できずすぐ買う', type: 'low' },
      { text: '1週間考えてから決める', type: 'medium' },
      { text: 'セールまで待てる', type: 'high' },
      { text: '本当に必要になるまで買わない', type: 'zen' },
    ],
  },
  {
    id: 6,
    text: '上司や先輩の長い話、どう対応する？',
    options: [
      { text: '早く終わらないかなとソワソワ', type: 'low' },
      { text: '適度に相槌を打ちながら耐える', type: 'medium' },
      { text: '何か学べることはないか探す', type: 'high' },
      { text: '相手の話に本気で興味を持って聞ける', type: 'zen' },
    ],
  },
  {
    id: 7,
    text: '難しいゲームやパズル、どうする？',
    options: [
      { text: 'すぐに攻略サイトを見る', type: 'low' },
      { text: '30分くらい試してダメなら調べる', type: 'medium' },
      { text: '何時間でも自力で挑戦し続ける', type: 'high' },
      { text: '解けなくても過程を楽しめる', type: 'zen' },
    ],
  },
  {
    id: 8,
    text: '新しいスキルを習得するのにかかる時間の感覚は？',
    options: [
      { text: 'すぐに上達しないとやる気なくす', type: 'low' },
      { text: '数ヶ月で結果が欲しい', type: 'medium' },
      { text: '1〜2年かかっても続けられる', type: 'high' },
      { text: '一生かけて極めたいと思える', type: 'zen' },
    ],
  },
  {
    id: 9,
    text: '渋滞にハマったときの気持ちは？',
    options: [
      { text: 'イライラMAX、クラクション鳴らしたくなる', type: 'low' },
      { text: 'ため息が出るけど仕方ない', type: 'medium' },
      { text: '音楽やラジオを楽しむ時間に', type: 'high' },
      { text: '流れに身を任せてリラックス', type: 'zen' },
    ],
  },
  {
    id: 10,
    text: '自分の忍耐力を一言で表すと？',
    options: [
      { text: '短気は損気...わかってるけど', type: 'low' },
      { text: '普通くらいだと思う', type: 'medium' },
      { text: 'けっこう我慢強い方', type: 'high' },
      { text: '仙人レベルで待てる', type: 'zen' },
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
  low: {
    type: 'low',
    title: 'せっかちスピードスター',
    emoji: '⚡',
    percentage: '忍耐力 25%',
    description: '待つことが苦手な即行動タイプ。でも、そのスピード感が強み！決断力があり、物事を素早く進められます。ただ、もう少しだけ待てると、より良い結果が得られることも。',
    characteristics: ['行動力抜群', '決断が早い', 'スピード重視', '効率的', 'じっとしていられない'],
    advice: '深呼吸して10秒数えてみて。意外と世界は変わらないから大丈夫。',
  },
  medium: {
    type: 'medium',
    title: 'バランス型ウェイター',
    emoji: '⏳',
    percentage: '忍耐力 55%',
    description: '状況に応じて待てる常識人タイプ。我慢のしすぎでもなく、せっかちすぎでもない。社会生活を送る上でちょうどいいバランス感覚の持ち主です。',
    characteristics: ['状況判断力', 'バランス感覚', '柔軟性', '現実的', '適応力'],
    advice: 'そのバランス感覚を大切に。でもたまには思い切りも必要かも。',
  },
  high: {
    type: 'high',
    title: '忍耐マイスター',
    emoji: '🧘',
    percentage: '忍耐力 80%',
    description: 'かなりの忍耐力の持ち主。長期的な目標に向かってコツコツ努力できるタイプです。周りからは「大人だね」と言われることも多いのでは？',
    characteristics: ['粘り強い', '計画的', '冷静', '信頼感', '長期的視点'],
    advice: '我慢しすぎてストレス溜めてない？たまには発散も大切。',
  },
  zen: {
    type: 'zen',
    title: '悟りの境地マスター',
    emoji: '🪷',
    percentage: '忍耐力 99%',
    description: '仙人レベルの忍耐力。どんな状況でも心の平穏を保てる稀有な存在。焦りとは無縁で、すべてを受け入れる寛容さを持っています。周りの人を癒す存在です。',
    characteristics: ['心が広い', '寛容', '穏やか', '悟り', '癒し系'],
    advice: 'その穏やかさは財産。でも、たまには急いでもいいんですよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { low: 0, medium: 0, high: 0, zen: 0 };

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
