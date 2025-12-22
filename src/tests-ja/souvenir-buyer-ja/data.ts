// お土産購入タイプ診断
export const questions = [
  {
    id: 1,
    text: '旅行のお土産、いつ買う？',
    options: [
      { text: '事前にネットでリサーチして計画的に', type: 'planner' },
      { text: '現地で見て回って直感で選ぶ', type: 'explorer' },
      { text: '最終日や空港でまとめて買う', type: 'lastminute' },
      { text: '誰に何を買うか決めてから行く', type: 'thoughtful' },
    ],
  },
  {
    id: 2,
    text: '職場へのお土産は？',
    options: [
      { text: '定番で外さないものを選ぶ', type: 'planner' },
      { text: '現地ならではの珍しいものを', type: 'explorer' },
      { text: '個包装で配りやすいお菓子', type: 'lastminute' },
      { text: '部署ごとに違うものを用意', type: 'thoughtful' },
    ],
  },
  {
    id: 3,
    text: '家族へのお土産選びの基準は？',
    options: [
      { text: 'ハズレのない定番商品', type: 'planner' },
      { text: 'その土地でしか買えない限定品', type: 'explorer' },
      { text: '空港や駅で見つけた人気商品', type: 'lastminute' },
      { text: '一人一人の好みに合わせて選ぶ', type: 'thoughtful' },
    ],
  },
  {
    id: 4,
    text: '温泉旅行でのお土産は？',
    options: [
      { text: '温泉まんじゅうや定番銘菓', type: 'planner' },
      { text: '地元の工芸品や温泉コスメ', type: 'explorer' },
      { text: '旅館の売店で最後に選ぶ', type: 'lastminute' },
      { text: '入浴剤や温泉の素を相手に合わせて', type: 'thoughtful' },
    ],
  },
  {
    id: 5,
    text: 'お土産の予算は？',
    options: [
      { text: '事前に決めて計画的に使う', type: 'planner' },
      { text: '良いものがあれば予算オーバーもOK', type: 'explorer' },
      { text: 'あまり考えず、帰りにまとめて', type: 'lastminute' },
      { text: '相手によって変える', type: 'thoughtful' },
    ],
  },
  {
    id: 6,
    text: '海外旅行のお土産は？',
    options: [
      { text: 'ガイドブックに載っている定番', type: 'planner' },
      { text: '現地のスーパーで地元の人が買うもの', type: 'explorer' },
      { text: '空港の免税店でまとめ買い', type: 'lastminute' },
      { text: '相手の趣味に合わせた雑貨やコスメ', type: 'thoughtful' },
    ],
  },
  {
    id: 7,
    text: '自分用のお土産は？',
    options: [
      { text: '買わないことが多い', type: 'planner' },
      { text: 'むしろ自分用がメイン！', type: 'explorer' },
      { text: '余裕があれば買う', type: 'lastminute' },
      { text: '記念になるものを厳選して', type: 'thoughtful' },
    ],
  },
  {
    id: 8,
    text: '「ここでしか買えない」限定商品を見つけたら？',
    options: [
      { text: '本当に必要か冷静に考える', type: 'planner' },
      { text: '即購入！限定に弱い', type: 'explorer' },
      { text: '悩んで結局買わないことも', type: 'lastminute' },
      { text: '誰かが喜びそうなら買う', type: 'thoughtful' },
    ],
  },
  {
    id: 9,
    text: 'お土産を渡す時は？',
    options: [
      { text: '「定番ですが」と謙遜しながら', type: 'planner' },
      { text: '「珍しいでしょ！」と自慢気に', type: 'explorer' },
      { text: '「とりあえず買ってきた」とさらっと', type: 'lastminute' },
      { text: '「○○さんに合うと思って」と一言添えて', type: 'thoughtful' },
    ],
  },
  {
    id: 10,
    text: 'お土産選びで一番大切にしていることは？',
    options: [
      { text: '失敗しないこと、無難さ', type: 'planner' },
      { text: '現地ならではの特別感', type: 'explorer' },
      { text: '手軽さ、買いやすさ', type: 'lastminute' },
      { text: '相手が喜ぶかどうか', type: 'thoughtful' },
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
  recommendedSouvenir: string;
}> = {
  planner: {
    type: 'planner',
    title: '計画的定番派',
    emoji: '📋',
    percentage: '計画性 95%',
    description: 'お土産は事前リサーチと計画で失敗なし！「白い恋人」「赤福」など、定番で間違いない選択をするあなた。職場へのお土産も完璧に計算。みんなが安心して受け取れる選択眼の持ち主。',
    characteristics: ['リサーチ上手', '失敗しない', '定番を熟知', '計画的', '無難だけど確実'],
    recommendedSouvenir: '各地の定番銘菓をコンプリートする「お土産マスター」を目指しては？',
  },
  explorer: {
    type: 'explorer',
    title: '探検型レア物ハンター',
    emoji: '🔍',
    percentage: '探求心 92%',
    description: 'ガイドブックに載っていない、現地でしか見つからないレアなお土産を求めるあなた！地元のスーパーや市場を巡り、「これどこで買ったの？」と聞かれるのが快感。お土産話も面白い。',
    characteristics: ['レア物好き', '現地探索', 'オリジナリティ重視', '冒険心', 'お土産話が豊富'],
    recommendedSouvenir: '地元の市場やローカルショップで見つけた一品を。ストーリーも一緒に渡して！',
  },
  lastminute: {
    type: 'lastminute',
    title: 'ラストスパート型',
    emoji: '🏃',
    percentage: 'ギリギリ度 88%',
    description: '旅行中はお土産より観光優先！帰りの空港や駅でまとめて買うあなた。「個包装で配りやすい」が最優先基準。効率的といえば効率的だけど、たまには余裕を持ってみては？',
    characteristics: ['効率重視', '旅行を満喫', '帰り際にまとめ買い', '個包装派', 'シンプル'],
    recommendedSouvenir: '空港限定商品を狙うのも手！「空港でしか買えない」もある意味レア。',
  },
  thoughtful: {
    type: 'thoughtful',
    title: '思いやり型パーソナルセレクト',
    emoji: '🎁',
    percentage: '思いやり度 97%',
    description: '「この人にはこれ」と一人一人に合わせてお土産を選ぶあなた。相手の好みや趣味を覚えていて、喜ぶ顔を想像しながら選ぶ時間も楽しみ。お土産を渡す時の一言も心温まる。',
    characteristics: ['相手思い', 'パーソナライズ', '観察力がある', '愛情込めて選ぶ', '渡し方も上手'],
    recommendedSouvenir: '相手の趣味に合わせた一品を。メッセージカードを添えると更に喜ばれます！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { planner: 0, explorer: 0, lastminute: 0, thoughtful: 0 };

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
