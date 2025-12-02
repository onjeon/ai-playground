// 締切への対応診断
export const questions = [
  {
    id: 1,
    text: '締切がある仕事を任された時は？',
    options: [
      { text: 'すぐに計画を立てて着手', type: 'planner' },
      { text: '余裕を持って少しずつ進める', type: 'steady' },
      { text: '一気に集中してやるタイプ', type: 'sprinter' },
      { text: 'まだ時間があると思ってしまう', type: 'lastminute' },
    ],
  },
  {
    id: 2,
    text: '締切までの時間配分は？',
    options: [
      { text: 'マイルストーンを設定して管理', type: 'planner' },
      { text: '毎日少しずつコツコツと', type: 'steady' },
      { text: '後半に集中して追い込む', type: 'sprinter' },
      { text: '気づいたら残り時間が少ない', type: 'lastminute' },
    ],
  },
  {
    id: 3,
    text: '想定外のトラブルが発生したら？',
    options: [
      { text: 'バッファを見込んでいたので対応可能', type: 'planner' },
      { text: '早めに進めていたので余裕あり', type: 'steady' },
      { text: '徹夜してでも間に合わせる', type: 'sprinter' },
      { text: '焦って何とかしようとする', type: 'lastminute' },
    ],
  },
  {
    id: 4,
    text: '締切前日の過ごし方は？',
    options: [
      { text: '最終確認と微調整', type: 'planner' },
      { text: 'ほぼ完成しているので余裕', type: 'steady' },
      { text: '最後の追い込み真っ最中', type: 'sprinter' },
      { text: 'まだ半分くらいしか終わってない', type: 'lastminute' },
    ],
  },
  {
    id: 5,
    text: '複数の締切が重なった時は？',
    options: [
      { text: '優先順位をつけてスケジュール管理', type: 'planner' },
      { text: '早めに始めて並行して進める', type: 'steady' },
      { text: '集中して一つずつ片付ける', type: 'sprinter' },
      { text: 'パニックになりそう', type: 'lastminute' },
    ],
  },
  {
    id: 6,
    text: '締切を守れた時の気持ちは？',
    options: [
      { text: '計画通りで当然', type: 'planner' },
      { text: 'コツコツやってよかった', type: 'steady' },
      { text: '達成感がすごい', type: 'sprinter' },
      { text: 'ホッとした、ギリギリだった', type: 'lastminute' },
    ],
  },
  {
    id: 7,
    text: 'タスク管理ツールは？',
    options: [
      { text: 'しっかり活用している', type: 'planner' },
      { text: 'シンプルなリストで管理', type: 'steady' },
      { text: '頭の中で管理', type: 'sprinter' },
      { text: 'あまり使っていない', type: 'lastminute' },
    ],
  },
  {
    id: 8,
    text: '締切に遅れそうな時は？',
    options: [
      { text: '早めに相談して調整', type: 'planner' },
      { text: '残業して間に合わせる', type: 'steady' },
      { text: '火事場の馬鹿力で何とか', type: 'sprinter' },
      { text: 'ギリギリまで言い出せない', type: 'lastminute' },
    ],
  },
  {
    id: 9,
    text: '夏休みの宿題タイプだったら？',
    options: [
      { text: '計画表を作って進めた', type: 'planner' },
      { text: '毎日少しずつやっていた', type: 'steady' },
      { text: 'お盆明けから一気にやった', type: 'sprinter' },
      { text: '8月31日の夜が勝負', type: 'lastminute' },
    ],
  },
  {
    id: 10,
    text: '締切に対する考え方は？',
    options: [
      { text: '必ず守るべきもの', type: 'planner' },
      { text: '余裕を持って臨みたい', type: 'steady' },
      { text: 'プレッシャーが力になる', type: 'sprinter' },
      { text: '目安程度に考えている', type: 'lastminute' },
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
  planner: {
    type: 'planner',
    title: '完璧プランナー',
    emoji: '📅',
    percentage: '計画力 98%',
    description: '締切から逆算して完璧な計画を立てるタイプ。バッファも見込んで、想定外にも対応可能。上司や取引先からの信頼も厚い！',
    characteristics: ['計画的', '先読み力', '信頼性', 'バッファ確保', '安定感'],
    recommendation: '計画に縛られすぎず、柔軟性も忘れずに！',
  },
  steady: {
    type: 'steady',
    title: 'コツコツ職人',
    emoji: '🐢',
    percentage: '着実度 95%',
    description: '毎日コツコツと進める堅実タイプ。焦らず騒がず、確実にゴールに向かいます。「継続は力なり」を体現する人！',
    characteristics: ['継続力', '堅実', '安定', 'マイペース', '地道'],
    recommendation: 'その安定感、周りの良いお手本になっています！',
  },
  sprinter: {
    type: 'sprinter',
    title: '短距離スプリンター',
    emoji: '🏃',
    percentage: '瞬発力 92%',
    description: '締切が近づくと本領発揮するタイプ。プレッシャーが集中力に変わり、驚異的なスピードで仕上げます。火事場の馬鹿力タイプ！',
    characteristics: ['瞬発力', '集中力', 'プレッシャーに強い', '追い込み力', '底力'],
    recommendation: '早めに始めれば、もっとクオリティが上がるかも！',
  },
  lastminute: {
    type: 'lastminute',
    title: 'ギリギリ王',
    emoji: '😱',
    percentage: 'ギリギリ度 100%',
    description: '気づいたら締切直前になっているタイプ。毎回ヒヤヒヤするけど、なんとか間に合わせる（間に合わないことも）。スリル満点の人生！',
    characteristics: ['楽観的', 'スリル耐性', '土壇場力', 'なんとかなる精神', '経験豊富'],
    recommendation: '一度、余裕を持って終わらせる快感を味わってみて！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { planner: 0, steady: 0, sprinter: 0, lastminute: 0 };

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
