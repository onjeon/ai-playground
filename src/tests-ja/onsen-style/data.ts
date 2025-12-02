// 温泉スタイル診断 (온천 스타일 테스트)
export const questions = [
  {
    id: 1,
    text: '温泉に行く目的は？',
    options: [
      { text: '日頃の疲れを癒したい', type: 'healing' },
      { text: '美肌効果や健康のため', type: 'health' },
      { text: '友達や家族との思い出作り', type: 'social' },
      { text: '非日常の雰囲気を楽しみたい', type: 'luxury' },
    ],
  },
  {
    id: 2,
    text: '理想の温泉旅館は？',
    options: [
      { text: '静かでゆったりできる宿', type: 'healing' },
      { text: '源泉かけ流しの本格派', type: 'health' },
      { text: '大浴場が充実した大型旅館', type: 'social' },
      { text: '高級感のある露天風呂付き客室', type: 'luxury' },
    ],
  },
  {
    id: 3,
    text: '温泉での過ごし方は？',
    options: [
      { text: 'ひたすらお湯に浸かる', type: 'healing' },
      { text: '効能を意識して入浴', type: 'health' },
      { text: '友達とおしゃべりしながら', type: 'social' },
      { text: '露天風呂で景色を楽しむ', type: 'luxury' },
    ],
  },
  {
    id: 4,
    text: '温泉で欠かせないものは？',
    options: [
      { text: '入浴後のマッサージ', type: 'healing' },
      { text: '温泉の成分表チェック', type: 'health' },
      { text: '湯上りの生ビール', type: 'social' },
      { text: '高級なアメニティ', type: 'luxury' },
    ],
  },
  {
    id: 5,
    text: '温泉旅行の食事で重視するのは？',
    options: [
      { text: '消化が良く体に優しいもの', type: 'healing' },
      { text: '地元の健康食材', type: 'health' },
      { text: 'みんなで楽しめる量', type: 'social' },
      { text: '豪華な会席料理', type: 'luxury' },
    ],
  },
  {
    id: 6,
    text: '朝風呂について？',
    options: [
      { text: '静かな時間が最高', type: 'healing' },
      { text: '血行促進に効果的', type: 'health' },
      { text: '友達と一緒なら行く', type: 'social' },
      { text: '朝日を見ながらの露天風呂', type: 'luxury' },
    ],
  },
  {
    id: 7,
    text: '温泉地で行きたいのは？',
    options: [
      { text: '足湯でのんびり', type: 'healing' },
      { text: '飲泉所で温泉水を飲む', type: 'health' },
      { text: '温泉街の散策', type: 'social' },
      { text: '絶景スポット', type: 'luxury' },
    ],
  },
  {
    id: 8,
    text: 'お土産に選ぶなら？',
    options: [
      { text: '入浴剤で自宅でも温泉気分', type: 'healing' },
      { text: '温泉コスメ', type: 'health' },
      { text: '名物のお菓子を大量に', type: 'social' },
      { text: '高級な地元の特産品', type: 'luxury' },
    ],
  },
  {
    id: 9,
    text: '温泉での滞在時間は？',
    options: [
      { text: 'できれば連泊したい', type: 'healing' },
      { text: '効能を得るには最低2泊', type: 'health' },
      { text: '日帰りでもOK', type: 'social' },
      { text: '一泊二日でゆったり', type: 'luxury' },
    ],
  },
  {
    id: 10,
    text: '温泉後の過ごし方は？',
    options: [
      { text: '部屋でゆっくり昼寝', type: 'healing' },
      { text: '水分補給とストレッチ', type: 'health' },
      { text: '卓球やゲームコーナーへ', type: 'social' },
      { text: '絶景を眺めながら読書', type: 'luxury' },
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
  recommendedOnsen: string;
}> = {
  healing: {
    type: 'healing',
    title: '癒しの湯治タイプ',
    emoji: '♨️',
    percentage: '癒し追求度 95%',
    description: '温泉は心身を癒す場所と考えるタイプ。静かな環境でひたすら湯に浸かり、日常のストレスを洗い流します。理想は連泊でのんびり。',
    characteristics: ['癒し重視', 'のんびり', '静けさ好き', 'リラックス上手', '自分時間'],
    recommendedOnsen: '秘湯や静かな山間の温泉がおすすめ！',
  },
  health: {
    type: 'health',
    title: '健康志向タイプ',
    emoji: '💪',
    percentage: '健康意識度 92%',
    description: '温泉の効能を重視する健康志向派。泉質や成分をチェックし、美肌や健康のために入浴。温泉は最高の健康法と信じています。',
    characteristics: ['健康志向', '知識豊富', '効能重視', '計画的', '美意識'],
    recommendedOnsen: '草津や有馬など名湯で本格湯治！',
  },
  social: {
    type: 'social',
    title: 'わいわい温泉タイプ',
    emoji: '🎊',
    percentage: 'ソーシャル度 88%',
    description: '温泉は友達や家族と楽しむイベント。大浴場で語り合い、湯上りにビールで乾杯。温泉街の散策も大事な思い出作り！',
    characteristics: ['社交的', 'イベント好き', '思い出重視', '楽しさ優先', '仲間意識'],
    recommendedOnsen: '大型リゾート温泉で仲間とわいわい！',
  },
  luxury: {
    type: 'luxury',
    title: '贅沢リゾートタイプ',
    emoji: '👑',
    percentage: 'ラグジュアリー度 90%',
    description: '温泉は非日常を味わう贅沢な時間。露天風呂付き客室、豪華な会席料理、絶景ロケーション。特別な体験を求める上質志向。',
    characteristics: ['上質志向', '審美眼', '特別感重視', '贅沢好き', 'こだわり'],
    recommendedOnsen: '高級温泉旅館で極上のひとときを！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { healing: 0, health: 0, social: 0, luxury: 0 };

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
