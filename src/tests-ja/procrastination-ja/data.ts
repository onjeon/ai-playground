// 先延ばし診断
export const questions = [
  {
    id: 1,
    text: '締め切りのある課題、いつ始める？',
    options: [
      { text: 'もらったらすぐに着手', type: 'proactive' },
      { text: '計画を立てて余裕を持って', type: 'planner' },
      { text: '締め切り数日前から', type: 'moderate' },
      { text: '締め切り直前、むしろ当日', type: 'procrastinator' },
    ],
  },
  {
    id: 2,
    text: '返信しなきゃいけないメール、どうする？',
    options: [
      { text: '見たらすぐに返信', type: 'proactive' },
      { text: 'その日のうちには返す', type: 'planner' },
      { text: '「後で返そう」と思って忘れがち', type: 'moderate' },
      { text: '何日も放置してしまう', type: 'procrastinator' },
    ],
  },
  {
    id: 3,
    text: '部屋の掃除、いつする？',
    options: [
      { text: '毎日少しずつ', type: 'proactive' },
      { text: '週末に定期的に', type: 'planner' },
      { text: '気が向いたとき', type: 'moderate' },
      { text: '限界が来るまでしない', type: 'procrastinator' },
    ],
  },
  {
    id: 4,
    text: '「明日やろう」と思うことは？',
    options: [
      { text: 'ほとんどない、今日できることは今日', type: 'proactive' },
      { text: 'たまにある', type: 'planner' },
      { text: 'よくある', type: 'moderate' },
      { text: '毎日のように思う', type: 'procrastinator' },
    ],
  },
  {
    id: 5,
    text: '夏休みの宿題、どうだった？',
    options: [
      { text: '7月中に終わらせていた', type: 'proactive' },
      { text: '計画通りにコツコツ', type: 'planner' },
      { text: '8月後半から焦り始める', type: 'moderate' },
      { text: '8月31日は地獄だった', type: 'procrastinator' },
    ],
  },
  {
    id: 6,
    text: 'やらなきゃいけないことがあるとき？',
    options: [
      { text: 'すぐに取りかかる', type: 'proactive' },
      { text: 'ToDoリストに書いて管理', type: 'planner' },
      { text: '他のことをしてしまう', type: 'moderate' },
      { text: 'SNSや動画を見てしまう', type: 'procrastinator' },
    ],
  },
  {
    id: 7,
    text: '「あとでいいや」と思う頻度は？',
    options: [
      { text: 'ほぼ思わない', type: 'proactive' },
      { text: 'たまに', type: 'planner' },
      { text: 'けっこう頻繁に', type: 'moderate' },
      { text: '口癖レベル', type: 'procrastinator' },
    ],
  },
  {
    id: 8,
    text: '期限ギリギリの方が集中できる？',
    options: [
      { text: '全くそう思わない', type: 'proactive' },
      { text: 'そうでもない', type: 'planner' },
      { text: '正直そうかも', type: 'moderate' },
      { text: 'むしろギリギリじゃないとやる気出ない', type: 'procrastinator' },
    ],
  },
  {
    id: 9,
    text: 'やりたくないことがあるとき？',
    options: [
      { text: '先に片付けてしまう', type: 'proactive' },
      { text: '計画に組み込んでこなす', type: 'planner' },
      { text: '後回しにしがち', type: 'moderate' },
      { text: '限界までやらない', type: 'procrastinator' },
    ],
  },
  {
    id: 10,
    text: '自分の先延ばし度を一言で？',
    options: [
      { text: '先延ばしとは無縁', type: 'proactive' },
      { text: '計画的に行動できる', type: 'planner' },
      { text: '先延ばし気味かも', type: 'moderate' },
      { text: '先延ばしの達人です', type: 'procrastinator' },
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
  proactive: {
    type: 'proactive',
    title: '即行動タイプ',
    emoji: '🚀',
    percentage: '先延ばし度 5%',
    description: 'やるべきことはすぐにやる、行動力の塊。先延ばしとは無縁の生活を送っています。素晴らしい実行力ですが、たまには休憩も大切。自分を追い込みすぎないようにね。',
    characteristics: ['行動力', '実行力', '効率的', '責任感', '自己管理力'],
    advice: '素晴らしい実行力！でも、リラックスする時間も忘れずに。',
  },
  planner: {
    type: 'planner',
    title: '計画的行動タイプ',
    emoji: '📋',
    percentage: '先延ばし度 25%',
    description: '計画を立ててコツコツ進められるタイプ。締め切りに余裕を持って行動でき、周りからは「しっかりしている」と思われています。理想的な時間管理ができています。',
    characteristics: ['計画性', '堅実', '信頼性', 'コツコツ型', '自己管理'],
    advice: 'その調子！でも、計画通りにいかなくても大丈夫ですよ。',
  },
  moderate: {
    type: 'moderate',
    title: 'ちょい先延ばしタイプ',
    emoji: '⏰',
    percentage: '先延ばし度 60%',
    description: 'ついつい先延ばしにしてしまうけど、最終的にはなんとかするタイプ。「明日やろう」が口癖かも？締め切りパワーで乗り切ることが多いですが、もう少し早めの行動で楽になれます。',
    characteristics: ['柔軟', '楽観的', '締め切り駆動', 'マイペース', '適応力'],
    advice: '小さなタスクから始めてみて。動き出せば意外と進みます。',
  },
  procrastinator: {
    type: 'procrastinator',
    title: '先延ばしマスター',
    emoji: '🦥',
    percentage: '先延ばし度 95%',
    description: '先延ばしの達人。締め切り直前の集中力は凄まじいものがありますが、それまでの心理的負担も大きいはず。「やらなきゃ」と思いながら動けない自分を責めないで。少しずつ改善していきましょう。',
    characteristics: ['創造性', '締め切りパワー', '楽観的', '瞬発力', 'マイペース'],
    advice: '2分ルールを試して。2分でできることは今すぐやってみて。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { proactive: 0, planner: 0, moderate: 0, procrastinator: 0 };

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
