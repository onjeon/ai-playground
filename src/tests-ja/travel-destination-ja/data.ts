// 旅行先選びタイプ診断
export const questions = [
  {
    id: 1,
    text: '旅行先を決める時の基準は？',
    options: [
      { text: 'ずっと行きたかった場所', type: 'dreamer' },
      { text: 'コスパと効率', type: 'planner' },
      { text: 'SNSで話題の場所', type: 'trendy' },
      { text: 'その時の気分', type: 'spontaneous' },
    ],
  },
  {
    id: 2,
    text: '旅行の計画はいつ立てる？',
    options: [
      { text: '何ヶ月も前から', type: 'dreamer' },
      { text: '綿密に計画を立てる', type: 'planner' },
      { text: '直前に情報収集', type: 'trendy' },
      { text: '行き当たりばったり', type: 'spontaneous' },
    ],
  },
  {
    id: 3,
    text: '旅行先で絶対したいことは？',
    options: [
      { text: '念願の場所を訪れる', type: 'dreamer' },
      { text: '効率よく観光', type: 'planner' },
      { text: '映える写真を撮る', type: 'trendy' },
      { text: '偶然の出会いを楽しむ', type: 'spontaneous' },
    ],
  },
  {
    id: 4,
    text: '旅行情報の収集方法は？',
    options: [
      { text: 'ガイドブックを熟読', type: 'dreamer' },
      { text: '比較サイトで検討', type: 'planner' },
      { text: 'インスタやTikTok', type: 'trendy' },
      { text: '現地で聞く', type: 'spontaneous' },
    ],
  },
  {
    id: 5,
    text: '理想の旅行スタイルは？',
    options: [
      { text: 'テーマを持った旅', type: 'dreamer' },
      { text: 'パッケージツアー', type: 'planner' },
      { text: '人気スポット巡り', type: 'trendy' },
      { text: '気ままな一人旅', type: 'spontaneous' },
    ],
  },
  {
    id: 6,
    text: '旅行の予算について？',
    options: [
      { text: '夢のためなら奮発', type: 'dreamer' },
      { text: '事前にしっかり計算', type: 'planner' },
      { text: 'コスパ重視', type: 'trendy' },
      { text: '使いたい時に使う', type: 'spontaneous' },
    ],
  },
  {
    id: 7,
    text: '旅先でのトラブルには？',
    options: [
      { text: 'それも思い出', type: 'dreamer' },
      { text: '事前に対策済み', type: 'planner' },
      { text: 'SNSで解決策を検索', type: 'trendy' },
      { text: '何とかなる精神', type: 'spontaneous' },
    ],
  },
  {
    id: 8,
    text: '旅行から帰ってきたら？',
    options: [
      { text: '思い出を大切に振り返る', type: 'dreamer' },
      { text: '次の旅行を計画', type: 'planner' },
      { text: 'SNSに投稿', type: 'trendy' },
      { text: 'すぐ日常に戻る', type: 'spontaneous' },
    ],
  },
  {
    id: 9,
    text: '一緒に旅行するなら？',
    options: [
      { text: '同じ夢を持つ人', type: 'dreamer' },
      { text: '計画に協力的な人', type: 'planner' },
      { text: 'フットワークが軽い人', type: 'trendy' },
      { text: '誰とでもOK', type: 'spontaneous' },
    ],
  },
  {
    id: 10,
    text: '旅行で一番大切なものは？',
    options: [
      { text: '心に残る体験', type: 'dreamer' },
      { text: '予定通りの進行', type: 'planner' },
      { text: 'いい写真と思い出', type: 'trendy' },
      { text: '自由と解放感', type: 'spontaneous' },
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
  recommendedTrip: string;
}> = {
  dreamer: {
    type: 'dreamer',
    title: '夢追い旅人タイプ',
    emoji: '✨',
    percentage: 'ロマン度 95%',
    description: '憧れの場所へ行くことに情熱を燃やすあなた。旅はあなたにとって夢を叶える特別な体験。一生の思い出を作ることを大切にしています。',
    characteristics: ['ロマンチスト', '夢追い人', '思い出重視', '情熱的', 'こだわり'],
    recommendedTrip: '世界遺産巡りやオーロラ観測など夢を叶える旅を！',
  },
  planner: {
    type: 'planner',
    title: '計画派トラベラータイプ',
    emoji: '📋',
    percentage: '計画力 93%',
    description: '綿密な計画を立てて旅行を楽しむあなた。効率よく観光地を回り、予算管理もバッチリ。安心して旅を楽しめるのはあなたのおかげ。',
    characteristics: ['計画的', '効率重視', '予算管理', '準備万端', '安心志向'],
    recommendedTrip: 'パッケージツアーや周遊旅行がおすすめ！',
  },
  trendy: {
    type: 'trendy',
    title: 'トレンド追求タイプ',
    emoji: '📱',
    percentage: 'トレンド感度 91%',
    description: 'SNSで話題のスポットをチェックして旅行先を決めるあなた。映える写真を撮ることも旅の楽しみ。最新情報に敏感なインフルエンサー気質。',
    characteristics: ['トレンド敏感', 'SNS好き', 'フォトジェニック', '情報通', '発信力'],
    recommendedTrip: '話題のカフェやインスタ映えスポット巡り！',
  },
  spontaneous: {
    type: 'spontaneous',
    title: '気まま旅人タイプ',
    emoji: '🎒',
    percentage: '自由度 94%',
    description: '計画に縛られず、気の向くままに旅を楽しむあなた。偶然の出会いや発見を大切にし、旅そのものを冒険として楽しんでいます。',
    characteristics: ['自由', '冒険心', '柔軟性', '好奇心', 'オープンマインド'],
    recommendedTrip: 'バックパッカー旅行や島巡りがおすすめ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { dreamer: 0, planner: 0, trendy: 0, spontaneous: 0 };

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
