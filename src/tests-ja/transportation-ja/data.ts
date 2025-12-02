// 移動手段タイプ診断
export const questions = [
  {
    id: 1,
    text: '旅行での移動手段として好きなのは？',
    options: [
      { text: '自分で運転するドライブ', type: 'driver' },
      { text: '電車でのんびり', type: 'train' },
      { text: '飛行機でパッと移動', type: 'flyer' },
      { text: '徒歩や自転車でゆっくり', type: 'slow' },
    ],
  },
  {
    id: 2,
    text: '移動中の過ごし方は？',
    options: [
      { text: '景色を楽しみながら', type: 'driver' },
      { text: '読書や音楽を楽しむ', type: 'train' },
      { text: '映画を見たり寝たり', type: 'flyer' },
      { text: '周りを観察する', type: 'slow' },
    ],
  },
  {
    id: 3,
    text: '通勤・通学の移動時間は？',
    options: [
      { text: '車で快適に', type: 'driver' },
      { text: '電車で有効活用', type: 'train' },
      { text: 'できるだけ短く', type: 'flyer' },
      { text: '歩くのも好き', type: 'slow' },
    ],
  },
  {
    id: 4,
    text: '長距離移動で重視することは？',
    options: [
      { text: '自由に動けること', type: 'driver' },
      { text: '安全と快適さ', type: 'train' },
      { text: '時間の効率', type: 'flyer' },
      { text: '旅の過程を楽しむ', type: 'slow' },
    ],
  },
  {
    id: 5,
    text: '初めての場所への移動は？',
    options: [
      { text: 'ナビを頼りにドライブ', type: 'driver' },
      { text: '乗り換えアプリで確認', type: 'train' },
      { text: 'タクシーやUber', type: 'flyer' },
      { text: '歩いて探検', type: 'slow' },
    ],
  },
  {
    id: 6,
    text: '移動中のストレスになることは？',
    options: [
      { text: '渋滞', type: 'driver' },
      { text: '満員電車', type: 'train' },
      { text: '遅延やキャンセル', type: 'flyer' },
      { text: '長時間歩くこと', type: 'slow' },
    ],
  },
  {
    id: 7,
    text: 'ドライブについてどう思う？',
    options: [
      { text: '最高の趣味', type: 'driver' },
      { text: '必要なら運転する', type: 'train' },
      { text: 'できれば乗せてもらう', type: 'flyer' },
      { text: 'あまり好きではない', type: 'slow' },
    ],
  },
  {
    id: 8,
    text: '新幹線や特急列車は？',
    options: [
      { text: '車窓を楽しめていい', type: 'driver' },
      { text: '快適で大好き', type: 'train' },
      { text: '飛行機の方が速い', type: 'flyer' },
      { text: '普通列車の旅が好き', type: 'slow' },
    ],
  },
  {
    id: 9,
    text: '移動にかける費用は？',
    options: [
      { text: '車関連は惜しまない', type: 'driver' },
      { text: 'コスパ重視', type: 'train' },
      { text: '時間をお金で買う', type: 'flyer' },
      { text: '節約して歩く', type: 'slow' },
    ],
  },
  {
    id: 10,
    text: '理想の週末のお出かけは？',
    options: [
      { text: '愛車でドライブ', type: 'driver' },
      { text: '電車で日帰り旅行', type: 'train' },
      { text: '飛行機で遠くへ', type: 'flyer' },
      { text: '近所を散歩', type: 'slow' },
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
  recommendedRoute: string;
}> = {
  driver: {
    type: 'driver',
    title: 'ドライバータイプ',
    emoji: '🚗',
    percentage: 'ドライブ愛 95%',
    description: '自分のペースで自由に移動したいあなた。車の運転が好きで、ドライブそのものを楽しみます。行き先を自由に変えられる柔軟さが魅力。',
    characteristics: ['自由', '独立心', '車好き', 'アウトドア', '冒険心'],
    recommendedRoute: '海沿いや山道のドライブコースがおすすめ！',
  },
  train: {
    type: 'train',
    title: '鉄道旅人タイプ',
    emoji: '🚃',
    percentage: '鉄道愛 93%',
    description: '電車での移動が好きなあなた。車窓からの景色を楽しんだり、移動時間を有効活用したりするのが得意。エコ意識も高め。',
    characteristics: ['効率的', '読書好き', 'エコ意識', '時間活用', '安全志向'],
    recommendedRoute: 'ローカル線の旅や青春18きっぷがおすすめ！',
  },
  flyer: {
    type: 'flyer',
    title: 'スピード重視タイプ',
    emoji: '✈️',
    percentage: 'スピード重視度 91%',
    description: '時間を大切にし、効率よく移動したいあなた。飛行機やタクシーで素早く目的地へ。ビジネスパーソン気質で時間をお金で買う派。',
    characteristics: ['効率重視', '時間意識', 'ビジネス志向', 'スピード', '合理的'],
    recommendedRoute: 'LCCを活用した弾丸旅行がおすすめ！',
  },
  slow: {
    type: 'slow',
    title: 'スローモビリティタイプ',
    emoji: '🚶',
    percentage: 'スロー度 90%',
    description: '徒歩や自転車でゆっくり移動するのが好きなあなた。道中の発見や出会いを大切にし、旅の過程そのものを楽しみます。',
    characteristics: ['スローライフ', '発見力', '健康志向', 'エコ', 'マイペース'],
    recommendedRoute: '古い街並みの散策やサイクリングがおすすめ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { driver: 0, train: 0, flyer: 0, slow: 0 };

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
