// 宿泊施設タイプ診断 - あなたの理想の宿は？
export const questions = [
  {
    id: 1,
    text: '旅行で一番重視することは？',
    options: [
      { text: '日本の伝統と和の雰囲気', type: 'ryokan' },
      { text: '快適さとサービスの質', type: 'hotel' },
      { text: '地元の人との交流', type: 'minpaku' },
      { text: 'コスパと気軽さ', type: 'hostel' },
    ],
  },
  {
    id: 2,
    text: '理想の夕食スタイルは？',
    options: [
      { text: '部屋食で懐石料理', type: 'ryokan' },
      { text: 'ホテルのレストランで優雅に', type: 'hotel' },
      { text: 'オーナーの手料理や地元の味', type: 'minpaku' },
      { text: '外で好きなものを食べる', type: 'hostel' },
    ],
  },
  {
    id: 3,
    text: '旅先でのお風呂、どうしたい？',
    options: [
      { text: '露天風呂や大浴場でゆったり', type: 'ryokan' },
      { text: '清潔なバスルームがあれば十分', type: 'hotel' },
      { text: '地元の銭湯を体験したい', type: 'minpaku' },
      { text: 'シャワーがあればOK', type: 'hostel' },
    ],
  },
  {
    id: 4,
    text: '宿泊先での過ごし方は？',
    options: [
      { text: '宿でゆっくりくつろぎたい', type: 'ryokan' },
      { text: '快適な空間で休息したい', type: 'hotel' },
      { text: 'ホストや他の宿泊者と交流したい', type: 'minpaku' },
      { text: '寝るだけ。観光重視！', type: 'hostel' },
    ],
  },
  {
    id: 5,
    text: '宿泊料金についての考えは？',
    options: [
      { text: '特別な体験には投資する', type: 'ryokan' },
      { text: '快適さのためにはそれなりに', type: 'hotel' },
      { text: 'ユニークな体験ができればOK', type: 'minpaku' },
      { text: 'なるべく安く抑えたい', type: 'hostel' },
    ],
  },
  {
    id: 6,
    text: '布団とベッド、どっち派？',
    options: [
      { text: '畳の上に敷く布団が落ち着く', type: 'ryokan' },
      { text: 'ふかふかのベッドが好き', type: 'hotel' },
      { text: '寝られればどちらでも', type: 'minpaku' },
      { text: '二段ベッドも平気', type: 'hostel' },
    ],
  },
  {
    id: 7,
    text: '旅先での服装は？',
    options: [
      { text: '浴衣でくつろぎたい', type: 'ryokan' },
      { text: '普段着でリラックス', type: 'hotel' },
      { text: 'ラフな格好で地元に溶け込む', type: 'minpaku' },
      { text: 'バックパッカースタイル', type: 'hostel' },
    ],
  },
  {
    id: 8,
    text: '宿泊先のスタッフとの関わり方は？',
    options: [
      { text: 'おもてなしを受けたい', type: 'ryokan' },
      { text: 'プロフェッショナルな対応希望', type: 'hotel' },
      { text: '親しみやすい関係がいい', type: 'minpaku' },
      { text: '必要最低限でOK', type: 'hostel' },
    ],
  },
  {
    id: 9,
    text: '理想の立地は？',
    options: [
      { text: '温泉地や風情ある場所', type: 'ryokan' },
      { text: '駅近や観光に便利な場所', type: 'hotel' },
      { text: '地元の生活が感じられる住宅街', type: 'minpaku' },
      { text: 'どこでも寝られればOK', type: 'hostel' },
    ],
  },
  {
    id: 10,
    text: '旅行の楽しみ方として大切なのは？',
    options: [
      { text: '非日常の贅沢体験', type: 'ryokan' },
      { text: '快適で安心できる空間', type: 'hotel' },
      { text: '地元文化との触れ合い', type: 'minpaku' },
      { text: '冒険と新しい出会い', type: 'hostel' },
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
  ryokan: {
    type: 'ryokan',
    title: '旅館・和の心タイプ',
    emoji: '🏯',
    percentage: '旅館適性 90%',
    description: '日本の伝統的なおもてなしを大切にするタイプ。温泉、懐石料理、畳の空間...和の文化に癒しを求める心があります。旅行は特別な体験として、宿そのものを楽しみたい人です。',
    characteristics: ['伝統重視', '和の心', 'ゆったり派', 'おもてなし好き', '非日常を求める'],
    advice: '老舗旅館や隠れ家的な温泉宿がおすすめ。予約は早めに！',
  },
  hotel: {
    type: 'hotel',
    title: 'ホテル・快適派タイプ',
    emoji: '🏨',
    percentage: 'ホテル適性 85%',
    description: '快適さと利便性を重視するタイプ。清潔で機能的な空間、プロフェッショナルなサービスを求めます。ビジネスでも観光でも、安定した品質を期待できるホテルが安心。',
    characteristics: ['快適重視', '機能的', '安定志向', 'プライバシー重視', '効率的'],
    advice: 'ロケーションと口コミをチェック。会員プログラムも活用して！',
  },
  minpaku: {
    type: 'minpaku',
    title: '民泊・ローカル体験タイプ',
    emoji: '🏡',
    percentage: '民泊適性 80%',
    description: '地元の生活や文化を体験したいタイプ。観光地だけでなく、その土地に暮らす人々との交流を楽しみたい。一般的な旅行では味わえないユニークな体験を求める冒険心があります。',
    characteristics: ['好奇心旺盛', '交流好き', 'ローカル志向', '柔軟', 'ユニーク体験重視'],
    advice: 'ホストの評価やコミュニケーションを重視して選んで！',
  },
  hostel: {
    type: 'hostel',
    title: 'ゲストハウス・旅人タイプ',
    emoji: '🎒',
    percentage: 'ゲストハウス適性 85%',
    description: 'コスパと出会いを重視するタイプ。宿にお金をかけるより、その分を観光や食事に回したい合理派。世界中の旅人との出会いや情報交換も旅の醍醐味として楽しめます。',
    characteristics: ['コスパ重視', '社交的', '冒険好き', 'フットワーク軽い', '自由人'],
    advice: '共有スペースが充実した宿を選ぶと出会いが広がる！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { ryokan: 0, hotel: 0, minpaku: 0, hostel: 0 };

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
