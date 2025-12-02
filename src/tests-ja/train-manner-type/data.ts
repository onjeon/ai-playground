// 電車マナータイプ診断 (전철 매너 유형)
export const questions = [
  {
    id: 1,
    text: '電車に乗ったらまず何をする？',
    options: [
      { text: '空いている席を探す', type: 'comfort' },
      { text: 'スマホで時間を確認', type: 'busy' },
      { text: '周りの人を観察する', type: 'observer' },
      { text: '窓の外の景色を見る', type: 'dreamer' },
    ],
  },
  {
    id: 2,
    text: '満員電車での過ごし方は？',
    options: [
      { text: 'できるだけ楽な姿勢をキープ', type: 'comfort' },
      { text: 'スマホでニュースやSNSチェック', type: 'busy' },
      { text: '周りの人の会話が気になる', type: 'observer' },
      { text: '音楽を聴いて自分の世界に', type: 'dreamer' },
    ],
  },
  {
    id: 3,
    text: 'お年寄りや妊婦さんが乗ってきたら？',
    options: [
      { text: '優先席に座っていなければそのまま', type: 'comfort' },
      { text: '状況を見て判断する', type: 'busy' },
      { text: '周りの反応を見てから行動', type: 'observer' },
      { text: '迷わず席を譲る', type: 'dreamer' },
    ],
  },
  {
    id: 4,
    text: '電車内での電話について',
    options: [
      { text: '緊急時以外は出ない', type: 'comfort' },
      { text: 'マナーモードでLINEで返す', type: 'busy' },
      { text: '電話している人が気になる', type: 'observer' },
      { text: '電話自体あまりしない', type: 'dreamer' },
    ],
  },
  {
    id: 5,
    text: '電車が遅延したときの反応は？',
    options: [
      { text: '仕方ないと諦めて待つ', type: 'comfort' },
      { text: 'すぐに代替ルートを検索', type: 'busy' },
      { text: '周りの人の反応を見る', type: 'observer' },
      { text: '予定に遅れても焦らない', type: 'dreamer' },
    ],
  },
  {
    id: 6,
    text: '好きな車両の位置は？',
    options: [
      { text: '空いている車両', type: 'comfort' },
      { text: '降りる駅の階段に近い車両', type: 'busy' },
      { text: '人が見やすい位置', type: 'observer' },
      { text: '窓際で景色が見える位置', type: 'dreamer' },
    ],
  },
  {
    id: 7,
    text: '隣の人が眠って寄りかかってきたら？',
    options: [
      { text: 'そっと肩を動かして起こす', type: 'comfort' },
      { text: '次の駅で席を移動', type: 'busy' },
      { text: 'しばらく様子を見る', type: 'observer' },
      { text: '気にせず寝かせてあげる', type: 'dreamer' },
    ],
  },
  {
    id: 8,
    text: '電車内で読むものは？',
    options: [
      { text: '漫画やエンタメ系アプリ', type: 'comfort' },
      { text: 'ニュースやビジネス記事', type: 'busy' },
      { text: 'SNSで人のポストを見る', type: 'observer' },
      { text: '小説や音楽に没頭', type: 'dreamer' },
    ],
  },
  {
    id: 9,
    text: '電車内で見かけたくない行為は？',
    options: [
      { text: '大きな荷物で場所を取る人', type: 'comfort' },
      { text: '乗降に時間がかかる人', type: 'busy' },
      { text: '大声で話す人', type: 'observer' },
      { text: '特に気にならない', type: 'dreamer' },
    ],
  },
  {
    id: 10,
    text: 'あなたにとって電車の時間は？',
    options: [
      { text: '休息の時間', type: 'comfort' },
      { text: '有効活用すべき時間', type: 'busy' },
      { text: '人間観察の時間', type: 'observer' },
      { text: '考え事や妄想の時間', type: 'dreamer' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  trainBehavior: string[];
  stressLevel: string;
}> = {
  comfort: {
    type: 'comfort',
    title: '快適追求リラックスタイプ',
    emoji: '😌',
    description: 'あなたは電車内での快適さを最優先するタイプ。空いている席や車両を見つける嗅覚は抜群！ストレスを避けて、移動時間を少しでもリラックスできる時間にしたいと考えています。',
    traits: ['快適さ重視', 'ストレスに敏感', 'マイペース', '空間認識能力が高い', '自分を大切にする'],
    trainBehavior: ['空いている車両を選ぶ', '座れる電車を待つ', 'ラッシュ時間を避ける', '快適なポジションを確保'],
    stressLevel: '低め - 自分なりの対処法を持っている',
  },
  busy: {
    type: 'busy',
    title: '時間有効活用ビジネスタイプ',
    emoji: '💼',
    description: 'あなたは移動時間も無駄にしない効率重視タイプ。電車内でもニュースチェックやメール返信、常に時間を有効活用しています。遅延時の代替ルート検索も素早い！',
    traits: ['効率重視', '時間に厳しい', '情報収集好き', '計画的', 'マルチタスク得意'],
    trainBehavior: ['乗車位置を計算', 'スマホで作業', '遅延情報をチェック', '最短ルートを常に把握'],
    stressLevel: '中程度 - 予定通りいかないとストレス',
  },
  observer: {
    type: 'observer',
    title: '人間観察ウォッチャータイプ',
    emoji: '👀',
    description: 'あなたは電車内の人間模様を観察するのが好きなタイプ。周りの人の服装、会話、行動が気になって、つい目で追ってしまいます。小説家や漫画家の素質があるかも？',
    traits: ['観察力が高い', '好奇心旺盛', '人に興味がある', '想像力豊か', '共感力が高い'],
    trainBehavior: ['周りの人を観察', '会話に聞き耳', 'SNSで人の投稿を見る', '人の行動パターンを分析'],
    stressLevel: '低め - 人間観察で時間が潰せる',
  },
  dreamer: {
    type: 'dreamer',
    title: 'マイワールド没入ドリーマータイプ',
    emoji: '🎧',
    description: 'あなたは電車内で自分だけの世界に入るタイプ。音楽を聴いたり、窓の外を眺めたり、考え事をしたり…周りの喧騒を気にせず、移動時間を自分だけの特別な時間に変えられます。',
    traits: ['内省的', 'クリエイティブ', 'マイペース', '感受性豊か', '一人の時間が好き'],
    trainBehavior: ['イヤホンで音楽', '窓の外を眺める', '考え事に没頭', '周りをあまり気にしない'],
    stressLevel: '最低 - 自分の世界があるので平気',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { comfort: 0, busy: 0, observer: 0, dreamer: 0 };

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
