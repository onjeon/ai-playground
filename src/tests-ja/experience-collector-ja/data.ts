// 経験コレクタータイプ診断
export const questions = [
  {
    id: 1,
    text: '休日の過ごし方として理想的なのは？',
    options: [
      { text: '行ったことない場所を探検', type: 'explorer' },
      { text: '前から気になっていたお店に行く', type: 'planner' },
      { text: '友達と新しいことにチャレンジ', type: 'social' },
      { text: 'のんびり好きなことをする', type: 'comfort' },
    ],
  },
  {
    id: 2,
    text: '旅行の計画を立てる時は？',
    options: [
      { text: 'ノープランで現地で決める', type: 'explorer' },
      { text: 'やりたいことリストを作る', type: 'planner' },
      { text: '一緒に行く人と相談して決める', type: 'social' },
      { text: 'リラックスできる場所を選ぶ', type: 'comfort' },
    ],
  },
  {
    id: 3,
    text: '新しい体験への態度は？',
    options: [
      { text: '未知のものにワクワクする', type: 'explorer' },
      { text: '計画的に新しいことを取り入れる', type: 'planner' },
      { text: '誘われたら挑戦する', type: 'social' },
      { text: '慣れたことの方が好き', type: 'comfort' },
    ],
  },
  {
    id: 4,
    text: '思い出に残る経験とは？',
    options: [
      { text: '予想外のハプニングがあったこと', type: 'explorer' },
      { text: '目標を達成した体験', type: 'planner' },
      { text: '人との出会いがあったこと', type: 'social' },
      { text: '心からリラックスできたこと', type: 'comfort' },
    ],
  },
  {
    id: 5,
    text: '経験を記録する方法は？',
    options: [
      { text: '写真やSNSでリアルタイムに', type: 'explorer' },
      { text: '日記やアルバムで丁寧に', type: 'planner' },
      { text: '人に話すことで思い出す', type: 'social' },
      { text: '特に記録しない、心に残ればいい', type: 'comfort' },
    ],
  },
  {
    id: 6,
    text: '同じ場所に何度も行くことは？',
    options: [
      { text: '新しい場所の方が好き', type: 'explorer' },
      { text: '目的があれば何度でも', type: 'planner' },
      { text: '一緒に行く人が変われば楽しい', type: 'social' },
      { text: '気に入った場所にはリピートする', type: 'comfort' },
    ],
  },
  {
    id: 7,
    text: '経験を通じて得たいものは？',
    options: [
      { text: '刺激やワクワク感', type: 'explorer' },
      { text: 'スキルや知識', type: 'planner' },
      { text: '人とのつながり', type: 'social' },
      { text: '心の充実感', type: 'comfort' },
    ],
  },
  {
    id: 8,
    text: '挑戦したいことがある時は？',
    options: [
      { text: 'すぐにでも始めたい', type: 'explorer' },
      { text: '準備してからスタート', type: 'planner' },
      { text: '誰かを誘って一緒に', type: 'social' },
      { text: 'じっくり考えてから', type: 'comfort' },
    ],
  },
  {
    id: 9,
    text: '経験の豊富さをどう測る？',
    options: [
      { text: '行った場所やしたことの数', type: 'explorer' },
      { text: '達成した目標の数', type: 'planner' },
      { text: '出会った人の数', type: 'social' },
      { text: '心が満たされた回数', type: 'comfort' },
    ],
  },
  {
    id: 10,
    text: 'バケットリスト（やりたいことリスト）は？',
    options: [
      { text: 'どんどん追加している', type: 'explorer' },
      { text: '計画的に達成していく', type: 'planner' },
      { text: '人と共有して一緒に達成', type: 'social' },
      { text: '特に作っていない', type: 'comfort' },
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
  recommendation: string;
}> = {
  explorer: {
    type: 'explorer',
    title: '冒険型コレクター',
    emoji: '🧭',
    style: '経験収集スタイル：冒険型',
    description: '未知の体験を求めて飛び込む冒険家！予定調和を嫌い、ハプニングすら楽しむあなた。人生はサプライズの連続で輝きます。',
    characteristics: ['好奇心旺盛', '行動力', '柔軟性', '刺激好き', 'ノリがいい'],
    recommendation: 'たまには振り返りの時間も大切に。経験を味わい尽くそう！',
  },
  planner: {
    type: 'planner',
    title: '計画型コレクター',
    emoji: '📋',
    style: '経験収集スタイル：計画型',
    description: '目標を持って経験を積み上げる計画派！やりたいことリストを着実にクリアしていくあなた。充実した人生設計のプロ。',
    characteristics: ['計画性', '目標志向', '達成感重視', '効率的', '継続力'],
    recommendation: '時には計画外の寄り道も。予想外の発見があるかも！',
  },
  social: {
    type: 'social',
    title: 'ソーシャル型コレクター',
    emoji: '🎉',
    style: '経験収集スタイル：共有型',
    description: '人と一緒に経験を共有することで喜びを感じるあなた！思い出は人との絆。たくさんの人との出会いが人生を彩ります。',
    characteristics: ['社交性', '共感力', 'シェア好き', '協調性', '思い出づくり上手'],
    recommendation: '一人の時間も経験を深める大切な機会だよ！',
  },
  comfort: {
    type: 'comfort',
    title: '深掘り型コレクター',
    emoji: '🍵',
    style: '経験収集スタイル：深化型',
    description: '数より質を重視する深掘り派！好きなことを徹底的に味わうあなた。心からの満足を大切にする豊かな感性の持ち主。',
    characteristics: ['こだわり', '深い味わい', 'リピート派', '満足度重視', '自分軸'],
    recommendation: 'たまには新しい扉を開けてみて。新たな「好き」が見つかるかも！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { explorer: 0, planner: 0, social: 0, comfort: 0 };

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
