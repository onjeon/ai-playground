// 色彩心理診断 - あなたの心を映す色は？
export const questions = [
  {
    id: 1,
    text: '今の気分に最も近い色は？',
    options: [
      { text: '情熱的な赤', type: 'red' },
      { text: '穏やかな青', type: 'blue' },
      { text: '明るい黄色', type: 'yellow' },
      { text: '癒しの緑', type: 'green' },
    ],
  },
  {
    id: 2,
    text: '部屋のインテリア、どんな色が落ち着く？',
    options: [
      { text: '暖色系（赤、オレンジ）', type: 'red' },
      { text: '寒色系（青、水色）', type: 'blue' },
      { text: '明るい色（黄色、クリーム）', type: 'yellow' },
      { text: 'ナチュラル系（緑、茶色）', type: 'green' },
    ],
  },
  {
    id: 3,
    text: '服を選ぶとき、つい手に取る色は？',
    options: [
      { text: 'ビビッドで目立つ色', type: 'red' },
      { text: '落ち着いたクールな色', type: 'blue' },
      { text: '明るく元気な色', type: 'yellow' },
      { text: '自然な優しい色', type: 'green' },
    ],
  },
  {
    id: 4,
    text: '理想の夕焼けの色は？',
    options: [
      { text: '燃えるような真っ赤', type: 'red' },
      { text: '紫がかった幻想的な空', type: 'blue' },
      { text: 'オレンジとピンクのグラデーション', type: 'yellow' },
      { text: '緑が映える穏やかな夕暮れ', type: 'green' },
    ],
  },
  {
    id: 5,
    text: '好きな花の色は？',
    options: [
      { text: 'バラのような深紅', type: 'red' },
      { text: '紫陽花のような青紫', type: 'blue' },
      { text: 'ひまわりのような黄色', type: 'yellow' },
      { text: '新緑のような若葉色', type: 'green' },
    ],
  },
  {
    id: 6,
    text: '元気を出したいとき、惹かれる色は？',
    options: [
      { text: 'パワフルな赤', type: 'red' },
      { text: '冷静になれる青', type: 'blue' },
      { text: '前向きになれる黄色', type: 'yellow' },
      { text: 'リフレッシュできる緑', type: 'green' },
    ],
  },
  {
    id: 7,
    text: 'ストレスを感じたとき、見たい風景の色は？',
    options: [
      { text: '夕日に染まる赤い空', type: 'red' },
      { text: '広がる青い海や空', type: 'blue' },
      { text: '菜の花畑の黄色', type: 'yellow' },
      { text: '深い森の緑', type: 'green' },
    ],
  },
  {
    id: 8,
    text: '宝石を選ぶなら？',
    options: [
      { text: 'ルビー（赤）', type: 'red' },
      { text: 'サファイア（青）', type: 'blue' },
      { text: 'シトリン（黄）', type: 'yellow' },
      { text: 'エメラルド（緑）', type: 'green' },
    ],
  },
  {
    id: 9,
    text: '好きな季節とその理由に近いのは？',
    options: [
      { text: '紅葉の秋、燃える赤が好き', type: 'red' },
      { text: '澄んだ冬、青い空が好き', type: 'blue' },
      { text: '明るい夏、太陽の黄色が好き', type: 'yellow' },
      { text: '芽吹く春、新緑が好き', type: 'green' },
    ],
  },
  {
    id: 10,
    text: '自分の性格を色で例えるなら？',
    options: [
      { text: '熱くて情熱的な赤', type: 'red' },
      { text: '冷静で知的な青', type: 'blue' },
      { text: '明るくポジティブな黄色', type: 'yellow' },
      { text: '穏やかで調和的な緑', type: 'green' },
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
  red: {
    type: 'red',
    title: '情熱の赤タイプ',
    emoji: '❤️',
    percentage: '情熱指数 90%',
    description: 'エネルギッシュで行動力のある赤の持ち主。リーダーシップがあり、目標に向かって突き進む力を持っています。日本の「勝負」の色でもあり、ここぞという時に力を発揮！',
    characteristics: ['情熱的', 'リーダーシップ', '行動力', '決断力', 'エネルギッシュ'],
    advice: 'その情熱で周りを巻き込む力がある！でも時には青の冷静さも取り入れてみて。',
  },
  blue: {
    type: 'blue',
    title: '知性の青タイプ',
    emoji: '💙',
    percentage: '冷静指数 85%',
    description: '冷静沈着で知的な青の持ち主。深く考え、慎重に判断する力があります。日本の「誠実」「信頼」を象徴する色で、周りから頼りにされる存在！',
    characteristics: ['冷静', '知的', '誠実', '分析力', '信頼感'],
    advice: '冷静さは武器。でも時には赤の情熱や黄色の明るさで心を解放してみて。',
  },
  yellow: {
    type: 'yellow',
    title: '希望の黄色タイプ',
    emoji: '💛',
    percentage: 'ポジティブ指数 95%',
    description: '明るく前向きな黄色の持ち主。周りを元気にするムードメーカー的存在！好奇心旺盛で、新しいことにも積極的にチャレンジします。',
    characteristics: ['明るい', '楽観的', '社交的', '創造的', 'ユーモア'],
    advice: 'その明るさが周りの太陽になっている！疲れたときは緑の癒しでリフレッシュを。',
  },
  green: {
    type: 'green',
    title: '調和の緑タイプ',
    emoji: '💚',
    percentage: '癒し指数 90%',
    description: '穏やかで調和を大切にする緑の持ち主。自然を愛し、バランス感覚に優れています。日本の「和」の精神を体現する色で、人々の心を癒す存在！',
    characteristics: ['穏やか', '調和的', '癒し系', 'バランス感覚', '自然体'],
    advice: 'その癒しの力は貴重な才能。でも自分自身も大切にして、時には主張することも忘れずに。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { red: 0, blue: 0, yellow: 0, green: 0 };

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
