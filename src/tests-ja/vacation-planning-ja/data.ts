// 休暇計画タイプ診断
export const questions = [
  {
    id: 1,
    text: '旅行の計画はいつ頃から始める？',
    options: [
      { text: '数ヶ月前からしっかり計画', type: 'planner' },
      { text: '1〜2ヶ月前から準備', type: 'balanced' },
      { text: '直前に決める', type: 'flexible' },
      { text: '行き当たりばったり', type: 'spontaneous' },
    ],
  },
  {
    id: 2,
    text: '旅行のスケジュールは？',
    options: [
      { text: '分刻みで詳細に計画', type: 'planner' },
      { text: '大まかな予定を立てる', type: 'balanced' },
      { text: '行きたい場所だけ決める', type: 'flexible' },
      { text: '何も決めない', type: 'spontaneous' },
    ],
  },
  {
    id: 3,
    text: '宿泊先の予約は？',
    options: [
      { text: '早期予約でお得に確保', type: 'planner' },
      { text: '出発前に予約する', type: 'balanced' },
      { text: '現地で探すことも', type: 'flexible' },
      { text: 'ノープラン、その時決める', type: 'spontaneous' },
    ],
  },
  {
    id: 4,
    text: '旅行先のリサーチは？',
    options: [
      { text: '徹底的に調べる', type: 'planner' },
      { text: 'ある程度調べる', type: 'balanced' },
      { text: '最低限だけ', type: 'flexible' },
      { text: '現地で発見する楽しみ', type: 'spontaneous' },
    ],
  },
  {
    id: 5,
    text: '旅行中の予定変更は？',
    options: [
      { text: '計画通りに進めたい', type: 'planner' },
      { text: '多少の変更はOK', type: 'balanced' },
      { text: '柔軟に対応する', type: 'flexible' },
      { text: '予定なんて変わるもの', type: 'spontaneous' },
    ],
  },
  {
    id: 6,
    text: '持ち物の準備は？',
    options: [
      { text: 'リストを作って完璧に', type: 'planner' },
      { text: '必要なものは確認する', type: 'balanced' },
      { text: '最低限パッと詰める', type: 'flexible' },
      { text: '忘れ物しても現地調達', type: 'spontaneous' },
    ],
  },
  {
    id: 7,
    text: '旅行先でのレストランは？',
    options: [
      { text: '事前に予約済み', type: 'planner' },
      { text: '人気店は調べておく', type: 'balanced' },
      { text: '現地で評判を聞いて', type: 'flexible' },
      { text: '歩いていて見つけたところ', type: 'spontaneous' },
    ],
  },
  {
    id: 8,
    text: '旅行の予算管理は？',
    options: [
      { text: '詳細な予算計画を立てる', type: 'planner' },
      { text: '大まかな予算を決める', type: 'balanced' },
      { text: 'ざっくり考える', type: 'flexible' },
      { text: '使いたい時に使う', type: 'spontaneous' },
    ],
  },
  {
    id: 9,
    text: '旅行ガイドブックは？',
    options: [
      { text: '何冊も読み込む', type: 'planner' },
      { text: '1冊は持っていく', type: 'balanced' },
      { text: 'スマホで十分', type: 'flexible' },
      { text: '必要ない', type: 'spontaneous' },
    ],
  },
  {
    id: 10,
    text: '理想の旅行スタイルは？',
    options: [
      { text: '完璧に計画された旅', type: 'planner' },
      { text: 'バランスの取れた旅', type: 'balanced' },
      { text: '自由度の高い旅', type: 'flexible' },
      { text: '冒険的な旅', type: 'spontaneous' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  style: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  planner: {
    type: 'planner',
    title: '完璧主義プランナー',
    emoji: '📋✈️',
    style: '計画度：★★★★★',
    description: '旅行は計画から始まる！詳細なスケジュールと予約で、最高の旅を実現します。準備万端で安心して旅を楽しめるタイプ。効率的に観光スポットを回れます。',
    characteristics: ['事前準備が完璧', '詳細なスケジュール', '予約はバッチリ', '効率的な旅'],
    tips: ['計画通りにいかない時も楽しんで', '余白の時間も作って', '現地の発見も大切に'],
  },
  balanced: {
    type: 'balanced',
    title: 'バランス型トラベラー',
    emoji: '🗺️⚖️',
    style: '計画度：★★★★☆',
    description: '計画と自由のバランスが取れたタイプ。大枠は決めつつ、現地での柔軟性も持ち合わせています。安心感と冒険心の両方を楽しめる旅上手！',
    characteristics: ['大まかな計画', '柔軟性もある', 'バランスが良い', '安心と冒険の両立'],
    tips: ['今のスタイルは理想的', '時には計画を手放してみて', '現地の人のおすすめも聞いて'],
  },
  flexible: {
    type: 'flexible',
    title: 'フレキシブル旅人',
    emoji: '🎒🌍',
    style: '計画度：★★★☆☆',
    description: '最低限だけ決めて、あとは現地で決めるタイプ。自由な旅を楽しみ、予想外の出会いや発見を大切にします。旅の醍醐味を知っている人！',
    characteristics: ['最低限の計画', '現地で決める', '予想外を楽しむ', '自由な旅'],
    tips: ['繁忙期は少し計画を', '人気スポットは早めに', '柔軟さは大きな強み'],
  },
  spontaneous: {
    type: 'spontaneous',
    title: '完全フリー冒険者',
    emoji: '🌟🚀',
    style: '計画度：★★☆☆☆',
    description: '計画なんて縛られない！行き当たりばったりの旅を楽しむタイプ。予測不能な展開と偶然の出会いが最高の思い出になります。真の冒険者！',
    characteristics: ['計画しない', '行き当たりばったり', '冒険心旺盛', '偶然を楽しむ'],
    tips: ['トラブル時の備えは最低限', '繁忙期は宿だけでも予約を', '冒険を楽しんで！'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { planner: 0, balanced: 0, flexible: 0, spontaneous: 0 };

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
