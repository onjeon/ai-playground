// 都会派田舎派診断 (도시/시골 테스트)
export const questions = [
  {
    id: 1,
    text: '理想の住環境は？',
    options: [
      { text: '高層マンション、都心の便利な場所', type: 'city' },
      { text: '郊外の住宅街、程よく便利', type: 'suburban' },
      { text: '自然に囲まれた静かな場所', type: 'country' },
      { text: '完全な田舎、自給自足もあり', type: 'rural' },
    ],
  },
  {
    id: 2,
    text: '通勤・通学の許容時間は？',
    options: [
      { text: '15分以内、時間は貴重', type: 'city' },
      { text: '30分くらいなら', type: 'suburban' },
      { text: '1時間かかっても自然の中に住みたい', type: 'country' },
      { text: '働く場所も住む場所と一緒がいい', type: 'rural' },
    ],
  },
  {
    id: 3,
    text: '買い物について？',
    options: [
      { text: '24時間営業のコンビニ必須', type: 'city' },
      { text: '車で行けるスーパーがあれば', type: 'suburban' },
      { text: '週に一度の買い出しでOK', type: 'country' },
      { text: '自分で育てたものを食べたい', type: 'rural' },
    ],
  },
  {
    id: 4,
    text: '休日の過ごし方は？',
    options: [
      { text: 'ショッピングやカフェ巡り', type: 'city' },
      { text: '公園でのんびり', type: 'suburban' },
      { text: '山や川で自然を満喫', type: 'country' },
      { text: '畑仕事やDIY', type: 'rural' },
    ],
  },
  {
    id: 5,
    text: '人混みについて？',
    options: [
      { text: '活気があって好き', type: 'city' },
      { text: 'たまには良い', type: 'suburban' },
      { text: 'あまり得意ではない', type: 'country' },
      { text: '絶対無理', type: 'rural' },
    ],
  },
  {
    id: 6,
    text: '近所付き合いは？',
    options: [
      { text: 'プライバシー重視、最小限で', type: 'city' },
      { text: '挨拶程度で適度に', type: 'suburban' },
      { text: '助け合いの関係が良い', type: 'country' },
      { text: '濃密なコミュニティが好き', type: 'rural' },
    ],
  },
  {
    id: 7,
    text: '車について？',
    options: [
      { text: '必要ない、公共交通機関で十分', type: 'city' },
      { text: 'あると便利', type: 'suburban' },
      { text: '必須、日常の足', type: 'country' },
      { text: '軽トラが欲しい', type: 'rural' },
    ],
  },
  {
    id: 8,
    text: '自然との関わりは？',
    options: [
      { text: '公園やカフェテラスで十分', type: 'city' },
      { text: '庭があるといい', type: 'suburban' },
      { text: '日常的に自然に触れたい', type: 'country' },
      { text: '自然の中で暮らしたい', type: 'rural' },
    ],
  },
  {
    id: 9,
    text: '娯楽について？',
    options: [
      { text: '映画館・ライブ・レストランが近くに欲しい', type: 'city' },
      { text: '車で行ける範囲にあれば', type: 'suburban' },
      { text: '自然が最高の娯楽', type: 'country' },
      { text: '自分で楽しみを作る', type: 'rural' },
    ],
  },
  {
    id: 10,
    text: '将来の夢は？',
    options: [
      { text: '都会で成功してタワマンに住む', type: 'city' },
      { text: '家族で住める広い家', type: 'suburban' },
      { text: '自然の中でスローライフ', type: 'country' },
      { text: '完全自給自足の暮らし', type: 'rural' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  lifestyle: string[];
  idealLife: string[];
  considerations: string[];
}> = {
  city: {
    type: 'city',
    title: '都会派シティライフ',
    emoji: '🏙️',
    description: 'あなたは便利さと刺激を求める都会派！24時間動き続ける街のエネルギーが大好き。時間を有効に使い、最新のトレンドを楽しみます。',
    lifestyle: ['便利さ重視', '刺激的な毎日', 'トレンド敏感'],
    idealLife: ['駅近タワマン', '徒歩圏内に何でもある', '公共交通機関で移動'],
    considerations: ['自然に触れる機会も', 'ストレス発散を', '住宅費は覚悟して'],
  },
  suburban: {
    type: 'suburban',
    title: '郊外派バランスライフ',
    emoji: '🏡',
    description: 'あなたは便利さと落ち着きの両立を求める郊外派！都会へのアクセスもありつつ、ゆとりある生活を楽しみます。バランス重視のあなたにぴったり。',
    lifestyle: ['便利さと落ち着き', 'バランス重視', '家族向け'],
    idealLife: ['郊外の一軒家', '車があると便利', '適度な自然と都会へのアクセス'],
    considerations: ['通勤時間を考慮して', '車の維持費も', '買い物の利便性を確認'],
  },
  country: {
    type: 'country',
    title: '田舎派スローライフ',
    emoji: '🌲',
    description: 'あなたは自然に囲まれた暮らしを求める田舎派！喧騒を離れ、ゆっくりと流れる時間の中で生活したい。心の豊かさを大切にするあなたにぴったり。',
    lifestyle: ['自然に囲まれる', 'スローライフ', '心の豊かさ'],
    idealLife: ['山や海の近く', '広い庭付きの家', '地域コミュニティとの繋がり'],
    considerations: ['買い物の不便さ', '車は必須', '仕事の確保'],
  },
  rural: {
    type: 'rural',
    title: '完全田舎派自給自足',
    emoji: '🌾',
    description: 'あなたは都会を完全に離れて暮らしたい完全田舎派！自給自足や土に触れる生活に憧れ、本当の豊かさを追求します。独立心の強いあなたにぴったり。',
    lifestyle: ['自給自足', '完全な田舎暮らし', '独立した生活'],
    idealLife: ['山奥や離島', '畑や田んぼ付きの古民家', '地域に根ざした生活'],
    considerations: ['インフラの確認', '収入源の確保', '孤立しないように'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { city: 0, suburban: 0, country: 0, rural: 0 };

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
