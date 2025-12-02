// 会議での役割診断
export const questions = [
  {
    id: 1,
    text: '会議が始まる時、あなたは？',
    options: [
      { text: 'アジェンダを確認して進行を仕切る', type: 'leader' },
      { text: '発言のポイントを整理している', type: 'contributor' },
      { text: 'メモを取る準備をする', type: 'supporter' },
      { text: '周りの様子を見ている', type: 'observer' },
    ],
  },
  {
    id: 2,
    text: '会議中の発言頻度は？',
    options: [
      { text: '積極的に意見を述べる', type: 'leader' },
      { text: '自分の専門分野では発言', type: 'contributor' },
      { text: '質問されたら答える', type: 'supporter' },
      { text: 'あまり発言しない', type: 'observer' },
    ],
  },
  {
    id: 3,
    text: '意見が対立した時は？',
    options: [
      { text: '議論をまとめて結論に導く', type: 'leader' },
      { text: '自分の意見をしっかり主張', type: 'contributor' },
      { text: '両者の意見を整理して提示', type: 'supporter' },
      { text: '静かに見守る', type: 'observer' },
    ],
  },
  {
    id: 4,
    text: '会議の準備は？',
    options: [
      { text: 'アジェンダや資料を用意', type: 'leader' },
      { text: '自分の発表部分を準備', type: 'contributor' },
      { text: '前回の議事録を確認', type: 'supporter' },
      { text: '特に準備しない', type: 'observer' },
    ],
  },
  {
    id: 5,
    text: '会議が脱線した時は？',
    options: [
      { text: '本題に戻すよう促す', type: 'leader' },
      { text: '脱線の中にもヒントを見つける', type: 'contributor' },
      { text: '時間を気にしつつ見守る', type: 'supporter' },
      { text: '流れに任せる', type: 'observer' },
    ],
  },
  {
    id: 6,
    text: '新しいアイデアが出た時は？',
    options: [
      { text: '実行可能性を検討する', type: 'leader' },
      { text: 'さらにアイデアを追加する', type: 'contributor' },
      { text: '具体的な課題を整理', type: 'supporter' },
      { text: '興味深く聞いている', type: 'observer' },
    ],
  },
  {
    id: 7,
    text: '会議後のフォローは？',
    options: [
      { text: 'タスクを割り振って進捗管理', type: 'leader' },
      { text: '自分の担当をすぐ着手', type: 'contributor' },
      { text: '議事録を作成して共有', type: 'supporter' },
      { text: '指示を待つ', type: 'observer' },
    ],
  },
  {
    id: 8,
    text: '長時間会議への対応は？',
    options: [
      { text: '時間配分を調整して効率化', type: 'leader' },
      { text: '重要な議題に集中', type: 'contributor' },
      { text: '休憩を提案したりフォロー', type: 'supporter' },
      { text: '耐えて終わるのを待つ', type: 'observer' },
    ],
  },
  {
    id: 9,
    text: 'オンライン会議では？',
    options: [
      { text: '画面共有しながら仕切る', type: 'leader' },
      { text: 'カメラONで積極的に参加', type: 'contributor' },
      { text: 'チャットでサポート', type: 'supporter' },
      { text: 'カメラOFFで聞いている', type: 'observer' },
    ],
  },
  {
    id: 10,
    text: '会議に対する考え方は？',
    options: [
      { text: '目標達成のための重要な場', type: 'leader' },
      { text: '自分の意見を伝える機会', type: 'contributor' },
      { text: 'チームの情報共有の場', type: 'supporter' },
      { text: '必要な時だけ参加したい', type: 'observer' },
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
  leader: {
    type: 'leader',
    title: '会議のリーダー',
    emoji: '👔',
    percentage: 'リーダーシップ 95%',
    description: '会議を仕切り、目標に向かって議論を導く司令塔タイプ。時間管理もタスク配分もお手の物。あなたがいると会議が締まります！',
    characteristics: ['統率力', '時間管理', '決断力', '責任感', '目標志向'],
    recommendation: '他のメンバーにも発言機会を与えてあげて！',
  },
  contributor: {
    type: 'contributor',
    title: 'アイデアメーカー',
    emoji: '💡',
    percentage: '貢献度 92%',
    description: '会議に新しい視点やアイデアをもたらす発信型タイプ。自分の意見をしっかり持ち、議論を活性化させます。チームの知恵袋！',
    characteristics: ['発想力', '積極性', '専門性', '自己主張', 'クリエイティブ'],
    recommendation: '他の人の意見にも耳を傾けるとさらに良い！',
  },
  supporter: {
    type: 'supporter',
    title: '縁の下のサポーター',
    emoji: '📋',
    percentage: 'サポート力 90%',
    description: '議事録作成や情報整理で会議を支えるサポートタイプ。細やかな気配りで会議を円滑に進めます。いないと困る存在！',
    characteristics: ['サポート力', '気配り', '正確性', '協調性', '裏方力'],
    recommendation: '時には自分の意見も積極的に発言してみて！',
  },
  observer: {
    type: 'observer',
    title: '静かなる観察者',
    emoji: '👀',
    percentage: '観察力 88%',
    description: '会議全体を俯瞰して見ている観察者タイプ。多くは語らないけど、ここぞという時に鋭い意見を出すことも。実は全部見ています！',
    characteristics: ['観察力', '冷静', '分析的', '慎重', '聞き上手'],
    recommendation: '気づいたことは積極的にシェアしてみて！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { leader: 0, contributor: 0, supporter: 0, observer: 0 };

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
