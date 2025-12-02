// 節約タイプ診断
export const questions = [
  {
    id: 1,
    text: 'スーパーでの買い物スタイルは？',
    options: [
      { text: 'チラシをチェックして特売日に', type: 'strategic' },
      { text: '必要なものだけをリスト化して', type: 'minimalist' },
      { text: 'ポイントカードをフル活用', type: 'pointmaster' },
      { text: '特に気にせず買いたいものを', type: 'easygoing' },
    ],
  },
  {
    id: 2,
    text: 'コンビニの利用頻度は？',
    options: [
      { text: 'なるべく行かないようにしている', type: 'strategic' },
      { text: '本当に必要な時だけ', type: 'minimalist' },
      { text: 'ポイント還元デーに合わせて', type: 'pointmaster' },
      { text: '便利だから毎日のように', type: 'easygoing' },
    ],
  },
  {
    id: 3,
    text: '外食について？',
    options: [
      { text: 'クーポンや割引を必ず使う', type: 'strategic' },
      { text: '特別な日だけにしている', type: 'minimalist' },
      { text: 'ポイントが貯まるお店を選ぶ', type: 'pointmaster' },
      { text: '食べたい時に食べる', type: 'easygoing' },
    ],
  },
  {
    id: 4,
    text: '光熱費の節約は？',
    options: [
      { text: 'こまめに電気を消す習慣がある', type: 'strategic' },
      { text: '無駄なものは契約しない', type: 'minimalist' },
      { text: '電力会社のポイント制度を活用', type: 'pointmaster' },
      { text: '快適さ優先であまり気にしない', type: 'easygoing' },
    ],
  },
  {
    id: 5,
    text: '欲しいものがある時は？',
    options: [
      { text: 'セールやキャンペーンを待つ', type: 'strategic' },
      { text: '本当に必要か一週間考える', type: 'minimalist' },
      { text: 'ポイント還元率が高い時に購入', type: 'pointmaster' },
      { text: '欲しい時に買っちゃう', type: 'easygoing' },
    ],
  },
  {
    id: 6,
    text: 'サブスクリプションサービスは？',
    options: [
      { text: '無料期間だけ使って解約', type: 'strategic' },
      { text: '本当に使うものだけ厳選', type: 'minimalist' },
      { text: 'お得なプランを研究して加入', type: 'pointmaster' },
      { text: '気づいたら増えている', type: 'easygoing' },
    ],
  },
  {
    id: 7,
    text: '家計簿について？',
    options: [
      { text: '細かくつけて分析している', type: 'strategic' },
      { text: '大まかな収支は把握している', type: 'minimalist' },
      { text: 'ポイントの獲得履歴もチェック', type: 'pointmaster' },
      { text: 'つけたことがない', type: 'easygoing' },
    ],
  },
  {
    id: 8,
    text: '旅行の予約は？',
    options: [
      { text: '早割や比較サイトでお得に', type: 'strategic' },
      { text: '行く回数を減らして質を重視', type: 'minimalist' },
      { text: 'マイルやポイントを最大限活用', type: 'pointmaster' },
      { text: '行きたい時に予約', type: 'easygoing' },
    ],
  },
  {
    id: 9,
    text: 'お金に対する考え方は？',
    options: [
      { text: '少しでも賢く使いたい', type: 'strategic' },
      { text: '本当に価値あるものに使いたい', type: 'minimalist' },
      { text: '使いながら増やしたい', type: 'pointmaster' },
      { text: '楽しむために使いたい', type: 'easygoing' },
    ],
  },
  {
    id: 10,
    text: '節約のモチベーションは？',
    options: [
      { text: '貯金額が増えるのを見るのが好き', type: 'strategic' },
      { text: 'シンプルな暮らしに憧れる', type: 'minimalist' },
      { text: 'ポイントを貯めるのがゲーム感覚', type: 'pointmaster' },
      { text: '特にモチベーションはない', type: 'easygoing' },
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
  recommendation: string;
}> = {
  strategic: {
    type: 'strategic',
    title: '戦略的セーバー',
    emoji: '📊',
    percentage: '節約力 95%',
    description: 'セールやクーポンを駆使する節約の達人！情報収集力と計画性で、同じ買い物でも圧倒的にお得に。貯金額も着実に増えています！',
    characteristics: ['計画的', '情報通', '先読み力', 'コスパ重視', '堅実'],
    recommendation: 'たまには自分へのご褒美も忘れずに！',
  },
  minimalist: {
    type: 'minimalist',
    title: 'ミニマリスト節約',
    emoji: '🍃',
    percentage: 'シンプル度 90%',
    description: 'そもそも無駄なものを買わないタイプ。本当に必要なものだけを厳選して、質の高いシンプルライフを送っています。少ないもので豊かに暮らす！',
    characteristics: ['厳選', '質重視', 'シンプル', '断捨離上手', '本質主義'],
    recommendation: 'その哲学を周りにもシェアしてみては？',
  },
  pointmaster: {
    type: 'pointmaster',
    title: 'ポイントマスター',
    emoji: '💳',
    percentage: 'ポイ活力 92%',
    description: 'ポイントを貯めるのが趣味のポイ活の達人！クレジットカードや各種サービスのポイント制度を熟知し、賢く活用しています。お得に生きる！',
    characteristics: ['ポイント活用', 'お得情報に敏感', 'ゲーム感覚', '研究熱心', '還元率マニア'],
    recommendation: 'ポイントに縛られすぎないようにバランスも大切に！',
  },
  easygoing: {
    type: 'easygoing',
    title: 'おおらか消費派',
    emoji: '😊',
    percentage: 'おおらか度 85%',
    description: 'お金は使ってなんぼ！細かいことは気にせず、今を楽しむタイプ。ストレスフリーな消費スタイルで、人生を謳歌しています！',
    characteristics: ['楽観的', 'ストレスフリー', '今を楽しむ', '太っ腹', '気前がいい'],
    recommendation: '将来のために少しだけ貯金の習慣をつけてみては？',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { strategic: 0, minimalist: 0, pointmaster: 0, easygoing: 0 };

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
