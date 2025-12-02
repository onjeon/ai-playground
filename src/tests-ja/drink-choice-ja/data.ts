// 飲み物選びタイプ診断
export const questions = [
  {
    id: 1,
    text: '朝起きて最初に飲むものは？',
    options: [
      { text: 'コーヒーで目覚める', type: 'coffee' },
      { text: 'お茶で落ち着く', type: 'tea' },
      { text: '水で体を潤す', type: 'water' },
      { text: 'ジュースやスムージー', type: 'variety' },
    ],
  },
  {
    id: 2,
    text: 'カフェで飲み物を頼むなら？',
    options: [
      { text: 'エスプレッソ系ドリンク', type: 'coffee' },
      { text: '紅茶やハーブティー', type: 'tea' },
      { text: 'ミネラルウォーター', type: 'water' },
      { text: '季節限定のドリンク', type: 'variety' },
    ],
  },
  {
    id: 3,
    text: '仕事中のお供は？',
    options: [
      { text: 'コーヒーは何杯も飲む', type: 'coffee' },
      { text: 'お茶をデスクに常備', type: 'tea' },
      { text: '水筒の水をこまめに', type: 'water' },
      { text: '気分で色々変える', type: 'variety' },
    ],
  },
  {
    id: 4,
    text: 'リラックスタイムの飲み物は？',
    options: [
      { text: 'コーヒーでホッと一息', type: 'coffee' },
      { text: 'ハーブティーで癒される', type: 'tea' },
      { text: '白湯でデトックス', type: 'water' },
      { text: 'その時の気分次第', type: 'variety' },
    ],
  },
  {
    id: 5,
    text: '飲み物へのこだわりは？',
    options: [
      { text: '豆の産地やローストにこだわる', type: 'coffee' },
      { text: '茶葉の種類や淹れ方にこだわる', type: 'tea' },
      { text: '水質や温度にこだわる', type: 'water' },
      { text: '新商品は必ずチェック', type: 'variety' },
    ],
  },
  {
    id: 6,
    text: 'コンビニで飲み物を買うなら？',
    options: [
      { text: 'コーヒーコーナーへ', type: 'coffee' },
      { text: 'お茶のペットボトル', type: 'tea' },
      { text: '水を選ぶことが多い', type: 'water' },
      { text: '新発売を試してみる', type: 'variety' },
    ],
  },
  {
    id: 7,
    text: '眠気覚ましには？',
    options: [
      { text: '濃いめのコーヒー', type: 'coffee' },
      { text: '緑茶で集中力アップ', type: 'tea' },
      { text: '冷たい水で顔を洗う', type: 'water' },
      { text: 'エナジードリンク', type: 'variety' },
    ],
  },
  {
    id: 8,
    text: '家での飲み物の準備は？',
    options: [
      { text: 'コーヒーメーカーは必須', type: 'coffee' },
      { text: 'ティーポットがある', type: 'tea' },
      { text: 'ウォーターサーバー設置', type: 'water' },
      { text: '冷蔵庫に色々ストック', type: 'variety' },
    ],
  },
  {
    id: 9,
    text: '一日の水分摂取量は？',
    options: [
      { text: 'コーヒーでほぼ賄う', type: 'coffee' },
      { text: 'お茶中心で適度に', type: 'tea' },
      { text: '水を意識して2L以上', type: 'water' },
      { text: '色んな飲み物でトータル', type: 'variety' },
    ],
  },
  {
    id: 10,
    text: '飲み物に求めるものは？',
    options: [
      { text: 'カフェインで覚醒', type: 'coffee' },
      { text: '香りと味わいで癒し', type: 'tea' },
      { text: '純粋な水分補給', type: 'water' },
      { text: '楽しさとバリエーション', type: 'variety' },
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
  coffee: {
    type: 'coffee',
    title: 'コーヒー党タイプ',
    emoji: '☕',
    percentage: 'コーヒー愛 98%',
    description: '朝はコーヒーがないと始まらない！カフェイン依存かも？でも至福の一杯があるから頑張れる。豆や淹れ方にもこだわりあり。',
    characteristics: ['集中力高い', 'こだわり派', '仕事熱心', 'カフェ通', 'ルーティン重視'],
    advice: 'カフェインの取りすぎに注意！夕方以降はデカフェもおすすめです。',
  },
  tea: {
    type: 'tea',
    title: 'お茶派タイプ',
    emoji: '🍵',
    percentage: 'お茶愛 95%',
    description: '緑茶、紅茶、ハーブティー…お茶の世界は奥深い。香りを楽しみながら心を落ち着ける、優雅なティータイムが好き。',
    characteristics: ['落ち着きがある', '教養がある', '健康意識高い', '香り好き', '繊細'],
    advice: 'お茶の種類をもっと広げて、新しい味との出会いを楽しんで！',
  },
  water: {
    type: 'water',
    title: 'ピュアウォーター派',
    emoji: '💧',
    percentage: '健康意識 92%',
    description: '体に一番いいのは水！余計なものは要らない、シンプルイズベスト。水分補給の大切さを知っている健康意識の高いタイプ。',
    characteristics: ['健康志向', 'シンプル好き', '自己管理上手', 'ストイック', 'ナチュラル'],
    advice: 'たまには美味しい飲み物で息抜きもいいですよ♪',
  },
  variety: {
    type: 'variety',
    title: 'ドリンクエクスプローラー',
    emoji: '🧃',
    percentage: '好奇心 90%',
    description: '新商品は必ずチェック！気分で飲み物を変える冒険家タイプ。コンビニの飲料コーナーは宝探しのよう。',
    characteristics: ['好奇心旺盛', 'トレンド敏感', '冒険好き', '飽きっぽい', '情報通'],
    advice: '自分の「定番」を見つけると、日常がもっと豊かになりますよ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { coffee: 0, tea: 0, water: 0, variety: 0 };

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
