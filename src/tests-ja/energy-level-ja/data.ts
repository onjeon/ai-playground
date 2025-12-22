// エネルギーレベル診断 - あなたの日常エネルギー量は？
export const questions = [
  {
    id: 1,
    text: '朝起きた時の状態は？',
    options: [
      { text: '目覚ましが鳴る前に自然に起きる', type: 'high' },
      { text: '目覚ましで起きて、すぐ活動開始', type: 'moderate_high' },
      { text: '何度かスヌーズを押してから起きる', type: 'moderate_low' },
      { text: '起きるのが辛い、布団から出たくない', type: 'low' },
    ],
  },
  {
    id: 2,
    text: '仕事や学校が終わった後の平日夜は？',
    options: [
      { text: 'ジムに行ったり、予定を入れる', type: 'high' },
      { text: '趣味や家事をする余裕がある', type: 'moderate_high' },
      { text: 'とりあえず家でゆっくりしたい', type: 'moderate_low' },
      { text: '何もできずソファでぐったり', type: 'low' },
    ],
  },
  {
    id: 3,
    text: '週末の予定の入れ方は？',
    options: [
      { text: '予定をパンパンに入れる', type: 'high' },
      { text: '外出と休息をバランスよく', type: 'moderate_high' },
      { text: '基本は家でゆっくり、たまに外出', type: 'moderate_low' },
      { text: '週末は回復に充てたい', type: 'low' },
    ],
  },
  {
    id: 4,
    text: '「今から飲みに行こう！」と急に誘われたら？',
    options: [
      { text: '「行く行く！」と即答', type: 'high' },
      { text: '状況次第だけど、割と行く', type: 'moderate_high' },
      { text: '疲れてたら断ることが多い', type: 'moderate_low' },
      { text: '急な誘いは基本的に無理', type: 'low' },
    ],
  },
  {
    id: 5,
    text: '1日に集中できる時間は？',
    options: [
      { text: '8時間以上集中できる', type: 'high' },
      { text: '5〜6時間くらい', type: 'moderate_high' },
      { text: '3〜4時間が限界', type: 'moderate_low' },
      { text: '2時間持てば良い方', type: 'low' },
    ],
  },
  {
    id: 6,
    text: '運動への意欲は？',
    options: [
      { text: '毎日体を動かしたい', type: 'high' },
      { text: '週に数回は運動する', type: 'moderate_high' },
      { text: 'たまに運動したいと思う', type: 'moderate_low' },
      { text: '運動する気力がない', type: 'low' },
    ],
  },
  {
    id: 7,
    text: '疲れた時の回復方法は？',
    options: [
      { text: '軽い運動でリフレッシュ', type: 'high' },
      { text: '好きなことをして気分転換', type: 'moderate_high' },
      { text: 'とにかく寝る', type: 'moderate_low' },
      { text: '何をしても疲れが取れない', type: 'low' },
    ],
  },
  {
    id: 8,
    text: '新しいことを始めることについて',
    options: [
      { text: '常に何か新しいことにチャレンジしてる', type: 'high' },
      { text: '興味があれば始める', type: 'moderate_high' },
      { text: '余裕がある時だけ', type: 'moderate_low' },
      { text: '今は新しいことを始める元気がない', type: 'low' },
    ],
  },
  {
    id: 9,
    text: '食事の準備について',
    options: [
      { text: '自炊が好き、料理を楽しむ', type: 'high' },
      { text: '簡単なものなら作る', type: 'moderate_high' },
      { text: '面倒だからコンビニや外食が多い', type: 'moderate_low' },
      { text: '食べること自体が面倒', type: 'low' },
    ],
  },
  {
    id: 10,
    text: '今の自分のエネルギー状態を一言で言うと？',
    options: [
      { text: '充電満タン！', type: 'high' },
      { text: 'まあまあ元気', type: 'moderate_high' },
      { text: 'ちょっと疲れ気味', type: 'moderate_low' },
      { text: '常にエネルギー不足', type: 'low' },
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
  high: {
    type: 'high',
    title: 'エネルギー満タンタイプ',
    emoji: '⚡',
    percentage: 'エネルギー 95%',
    description: '常にパワフルで活動的なあなた。周りが驚くほどのエネルギーで、仕事もプライベートも全力投球！その元気さは周囲にも良い影響を与えています。',
    characteristics: ['活動的', 'ポジティブ', '行動力抜群', '影響力がある', 'パワフル'],
    advice: 'その素晴らしいエネルギーを活かして！ただし燃え尽きないよう、たまには意識的に休息を。',
  },
  moderate_high: {
    type: 'moderate_high',
    title: 'バランスエネルギータイプ',
    emoji: '🌟',
    percentage: 'エネルギー 70%',
    description: '活動と休息のバランスが取れた理想的な状態。やるべきことはこなしつつ、自分のペースを守れています。持続可能なエネルギーマネジメントができています。',
    characteristics: ['バランス良好', '安定感', '持続力あり', '自己管理上手', '効率的'],
    advice: '良いバランスが取れています！この状態を維持するために、今の生活リズムを大切に。',
  },
  moderate_low: {
    type: 'moderate_low',
    title: '省エネモードタイプ',
    emoji: '🔋',
    percentage: 'エネルギー 40%',
    description: '少しエネルギーが低下気味。日々の疲れが溜まっているかもしれません。無理は禁物、今は回復を優先すべき時期です。',
    characteristics: ['疲れ気味', '回復が必要', '無理は禁物', '休息を求めてる', 'ペースダウン中'],
    advice: '睡眠の質を上げる、軽い運動を取り入れるなど、少しずつエネルギーを取り戻しましょう。',
  },
  low: {
    type: 'low',
    title: '充電切れタイプ',
    emoji: '🪫',
    percentage: 'エネルギー 15%',
    description: 'エネルギーがかなり枯渇している状態。心身ともに疲弊しているサインかもしれません。今は何よりも休息と回復を最優先にすべき時期です。',
    characteristics: ['疲労困憊', '休息最優先', '回復モード', 'セルフケアが必要', '無理は厳禁'],
    advice: '自分を責めないで。まずは十分な睡眠と栄養を。長く続くなら専門家に相談することも検討を。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, moderate_high: 0, moderate_low: 0, low: 0 };

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
