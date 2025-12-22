// コレクター診断 - あなたの収集癖は？
export const questions = [
  {
    id: 1,
    text: '買い物するとき、ついやってしまうことは？',
    options: [
      { text: 'シリーズものは全部揃えたくなる', type: 'complete' },
      { text: 'レアものや限定品をチェック', type: 'rare' },
      { text: '思い出になるものを買う', type: 'memory' },
      { text: '特にこだわりはない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '旅行先でのお土産選び、どうする？',
    options: [
      { text: 'ご当地限定グッズを必ず買う', type: 'complete' },
      { text: '珍しいものを探す', type: 'rare' },
      { text: '思い出の品や写真を大切にする', type: 'memory' },
      { text: 'あまり買わない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '好きなアーティストやキャラのグッズ、どうしてる？',
    options: [
      { text: '全種類コンプリートを目指す', type: 'complete' },
      { text: '本当に欲しいレアものだけ厳選', type: 'rare' },
      { text: 'ライブやイベントの記念品を集める', type: 'memory' },
      { text: 'あまり買わない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: 'ガチャガチャ（カプセルトイ）の前で…',
    options: [
      { text: 'コンプするまで回してしまう', type: 'complete' },
      { text: 'シークレットが出るまで頑張る', type: 'rare' },
      { text: '一回だけ回して思い出に', type: 'memory' },
      { text: '興味がない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: 'スマホの写真フォルダ、どんな感じ？',
    options: [
      { text: 'カテゴリ別にきっちり整理', type: 'complete' },
      { text: 'ベストショットだけ厳選保存', type: 'rare' },
      { text: '思い出の写真がいっぱい', type: 'memory' },
      { text: '必要最低限しかない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '本やマンガの買い方は？',
    options: [
      { text: 'シリーズは全巻揃える', type: 'complete' },
      { text: '初版や限定版を狙う', type: 'rare' },
      { text: '好きなシーンや思い出のある本を大切に', type: 'memory' },
      { text: '電子書籍か図書館で済ます', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'ポイントカードについて',
    options: [
      { text: '全店舗のカードを持っている', type: 'complete' },
      { text: 'お得なカードだけ厳選', type: 'rare' },
      { text: '思い入れのあるお店のカードは持つ', type: 'memory' },
      { text: 'ポイントカード自体作らない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '御朱印やスタンプラリーに対する姿勢は？',
    options: [
      { text: '全制覇を目指す！', type: 'complete' },
      { text: '特別な御朱印や限定スタンプだけ集める', type: 'rare' },
      { text: '訪れた場所の思い出として', type: 'memory' },
      { text: '興味がない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '使わなくなったものへの態度は？',
    options: [
      { text: 'コレクションだから捨てられない', type: 'complete' },
      { text: '価値があるものは保管、他は処分', type: 'rare' },
      { text: '思い出があるものは取っておく', type: 'memory' },
      { text: '使わないものはすぐ処分', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'あなたの収集欲を一言で表すと？',
    options: [
      { text: '揃えたい', type: 'complete' },
      { text: '希少価値', type: 'rare' },
      { text: '思い出', type: 'memory' },
      { text: '必要最低限', type: 'minimal' },
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
  complete: {
    type: 'complete',
    title: 'コンプリートマスタータイプ',
    emoji: '🏆',
    percentage: 'コレクター度 100%',
    description: '全部揃えないと気が済まない！完璧主義のコレクター。シリーズものやセットは必ずコンプリートを目指します。日本のカプセルトイ文化やトレーディングカードと相性抜群！',
    characteristics: ['完璧主義', '根気強い', '達成感重視', '計画的', '情熱的'],
    advice: 'その情熱は素晴らしい！でも予算と置き場所には気をつけて。本当に大切なものを見極めよう。',
  },
  rare: {
    type: 'rare',
    title: 'レアハンタータイプ',
    emoji: '💎',
    percentage: 'コレクター度 80%',
    description: '量より質！希少価値の高いものだけを厳選して集めるタイプ。目利き力があり、本当に価値あるものを見抜く力があります。将来的に価値が上がるかも？',
    characteristics: ['審美眼', '厳選派', '投資センス', 'こだわり派', '知識豊富'],
    advice: '良い目利き！その審美眼を活かして、本物の価値を見極め続けてね。',
  },
  memory: {
    type: 'memory',
    title: '思い出コレクタータイプ',
    emoji: '📸',
    percentage: 'コレクター度 60%',
    description: 'モノより思い出を大切にするタイプ。旅行の記念品やイベントのグッズなど、体験に紐づいたものを集めます。それぞれのアイテムにストーリーがある！',
    characteristics: ['感性豊か', '思い出重視', 'ストーリー性', '感傷的', '経験重視'],
    advice: '思い出は色あせない宝物。写真や日記と一緒に保管すると、さらに価値が増すよ。',
  },
  minimal: {
    type: 'minimal',
    title: 'ミニマリストタイプ',
    emoji: '🍃',
    percentage: 'コレクター度 20%',
    description: 'モノを持たない美学を持つタイプ。必要なものだけで暮らし、物欲に振り回されません。断捨離上手で、シンプルライフを楽しんでいます。',
    characteristics: ['シンプル志向', '合理的', 'すっきり好き', '断捨離上手', '経験重視'],
    advice: 'スッキリした暮らしは素敵！でもたまには「ときめく」何かを持つのも人生を豊かにするよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { complete: 0, rare: 0, memory: 0, minimal: 0 };

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
