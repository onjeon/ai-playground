// 受容力診断 - あなたはどれだけ物事を受け入れられる？
export const questions = [
  {
    id: 1,
    text: '友達の意見が自分と違ったとき、どう感じる？',
    options: [
      { text: '自分の考えが正しいと主張したい', type: 'rigid' },
      { text: '少しモヤモヤするけど聞く', type: 'growing' },
      { text: '「そういう考えもあるんだな」と思う', type: 'open' },
      { text: 'むしろ違う意見が面白い', type: 'master' },
    ],
  },
  {
    id: 2,
    text: '自分の失敗を指摘されたら？',
    options: [
      { text: '言い訳したくなる', type: 'rigid' },
      { text: '凹むけど受け止める', type: 'growing' },
      { text: '改善点として前向きに捉える', type: 'open' },
      { text: '「教えてくれてありがとう」と思える', type: 'master' },
    ],
  },
  {
    id: 3,
    text: '自分とは全く違うタイプの人について',
    options: [
      { text: '理解できないし、関わりたくない', type: 'rigid' },
      { text: '苦手だけど、表面的には付き合える', type: 'growing' },
      { text: '違いを認めて、尊重できる', type: 'open' },
      { text: 'むしろ自分にないものを持っていて興味深い', type: 'master' },
    ],
  },
  {
    id: 4,
    text: '過去の自分の黒歴史について',
    options: [
      { text: '思い出すと死にたくなる', type: 'rigid' },
      { text: '恥ずかしいけど仕方ない', type: 'growing' },
      { text: '成長の過程として受け入れている', type: 'open' },
      { text: 'ネタにして笑える', type: 'master' },
    ],
  },
  {
    id: 5,
    text: '予定通りにいかないことがあったとき',
    options: [
      { text: 'イライラが止まらない', type: 'rigid' },
      { text: 'モヤモヤするけど対応する', type: 'growing' },
      { text: '「まあ、そういうこともある」と思える', type: 'open' },
      { text: 'むしろ面白い展開かも、と楽しめる', type: 'master' },
    ],
  },
  {
    id: 6,
    text: '自分の弱点について',
    options: [
      { text: '認めたくない、隠したい', type: 'rigid' },
      { text: '分かっているけど向き合いたくない', type: 'growing' },
      { text: '弱点も自分の一部として認めている', type: 'open' },
      { text: '弱点をオープンにして助けを求められる', type: 'master' },
    ],
  },
  {
    id: 7,
    text: '世の中の理不尽なことに対して',
    options: [
      { text: '許せない、怒りを感じる', type: 'rigid' },
      { text: 'モヤモヤするけど仕方ないと思う', type: 'growing' },
      { text: '「世の中そういうもの」と割り切れる', type: 'open' },
      { text: '変えられないことには執着しない', type: 'master' },
    ],
  },
  {
    id: 8,
    text: '年齢を重ねることについて',
    options: [
      { text: '老いるのが怖い、認めたくない', type: 'rigid' },
      { text: '少し抵抗はあるけど受け入れつつある', type: 'growing' },
      { text: '自然なこととして受け入れている', type: 'open' },
      { text: '年齢を重ねることで得られるものを楽しみにしている', type: 'master' },
    ],
  },
  {
    id: 9,
    text: '自分の容姿について',
    options: [
      { text: 'コンプレックスだらけで辛い', type: 'rigid' },
      { text: '気になる部分はあるけど隠せばOK', type: 'growing' },
      { text: '「これが自分」と受け入れている', type: 'open' },
      { text: '個性として愛せている', type: 'master' },
    ],
  },
  {
    id: 10,
    text: '物事がうまくいかない時期について',
    options: [
      { text: '何で自分だけ…と被害者意識', type: 'rigid' },
      { text: '辛いけど時間が解決すると信じる', type: 'growing' },
      { text: '人生には波があると理解している', type: 'open' },
      { text: '成長の機会として感謝できる', type: 'master' },
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
  rigid: {
    type: 'rigid',
    title: 'ガード固めタイプ',
    emoji: '🛡️',
    percentage: '受容力 25%',
    description: '自分を守る壁が高いタイプ。傷つきたくないという気持ちが強く、物事を受け入れることに抵抗を感じます。でもそれは、繊細で傷つきやすい心の裏返しかも。',
    characteristics: ['自己防衛', '繊細', '慎重', 'プライド高め', '完璧主義'],
    advice: '完璧じゃなくても大丈夫。少しずつ心の壁を低くしてみて。',
  },
  growing: {
    type: 'growing',
    title: '成長途中タイプ',
    emoji: '🌱',
    percentage: '受容力 50%',
    description: '受け入れようとする気持ちはあるけど、まだ葛藤があるタイプ。「分かっているけど…」という状態が多いかも。でも、その意識があることが素晴らしい第一歩です。',
    characteristics: ['努力家', '葛藤', '自己成長意欲', '素直', '発展途上'],
    advice: '焦らなくて大丈夫。気づいている時点で、もう成長しています。',
  },
  open: {
    type: 'open',
    title: 'オープンマインドタイプ',
    emoji: '🌈',
    percentage: '受容力 75%',
    description: '物事をありのままに受け入れられる柔軟な心の持ち主。ネガティブなことも「そういうもの」と割り切れる強さがあります。周りからは穏やかで接しやすい人だと思われているはず。',
    characteristics: ['柔軟', '穏やか', '寛容', 'ストレス耐性', '客観的'],
    advice: '素晴らしい受容力！その姿勢が周りにも良い影響を与えています。',
  },
  master: {
    type: 'master',
    title: '悟りマスタータイプ',
    emoji: '🧘',
    percentage: '受容力 95%',
    description: 'どんなことも受け入れ、さらにそこから価値を見出せる達人レベル。ネガティブなことすら成長の糧にできる強さを持っています。まるで仏のような存在。',
    characteristics: ['達観', '感謝の心', '精神的成熟', '影響力', 'カリスマ性'],
    advice: 'あなたの存在が周りを癒しています。でもたまには弱音も吐いてね。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { rigid: 0, growing: 0, open: 0, master: 0 };

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
