// 子供時代タイプ診断
export const questions = [
  {
    id: 1,
    text: '子供の頃、放課後は何をしていた？',
    options: [
      { text: '外で友達と遊んでいた', type: 'active' },
      { text: '本を読んだり絵を描いていた', type: 'creative' },
      { text: '習い事に通っていた', type: 'studious' },
      { text: '家でゲームやテレビを見ていた', type: 'homebody' },
    ],
  },
  {
    id: 2,
    text: '子供時代の一番の思い出は？',
    options: [
      { text: '友達との冒険', type: 'active' },
      { text: '創作活動や発表会', type: 'creative' },
      { text: 'テストで良い点を取ったこと', type: 'studious' },
      { text: '家族との穏やかな時間', type: 'homebody' },
    ],
  },
  {
    id: 3,
    text: '学校での休み時間の過ごし方は？',
    options: [
      { text: '校庭で走り回っていた', type: 'active' },
      { text: '教室で友達とおしゃべり', type: 'creative' },
      { text: '次の授業の準備', type: 'studious' },
      { text: '静かに過ごしていた', type: 'homebody' },
    ],
  },
  {
    id: 4,
    text: '子供の頃の夢は？',
    options: [
      { text: 'スポーツ選手', type: 'active' },
      { text: '芸術家や作家', type: 'creative' },
      { text: '医者や先生', type: 'studious' },
      { text: '特に決めていなかった', type: 'homebody' },
    ],
  },
  {
    id: 5,
    text: '夏休みの宿題のやり方は？',
    options: [
      { text: '最後にまとめて', type: 'active' },
      { text: '自由研究に熱中', type: 'creative' },
      { text: '計画的にコツコツ', type: 'studious' },
      { text: '親に手伝ってもらった', type: 'homebody' },
    ],
  },
  {
    id: 6,
    text: '子供の頃、よく遊んだ場所は？',
    options: [
      { text: '公園や野原', type: 'active' },
      { text: '図書館や児童館', type: 'creative' },
      { text: '塾や習い事の教室', type: 'studious' },
      { text: '自分の部屋', type: 'homebody' },
    ],
  },
  {
    id: 7,
    text: '子供の頃の性格は？',
    options: [
      { text: '活発で元気', type: 'active' },
      { text: '好奇心旺盛', type: 'creative' },
      { text: '真面目で努力家', type: 'studious' },
      { text: 'おとなしくてマイペース', type: 'homebody' },
    ],
  },
  {
    id: 8,
    text: '先生からどう思われていた？',
    options: [
      { text: '元気すぎて注意された', type: 'active' },
      { text: 'ユニークだと言われた', type: 'creative' },
      { text: '優等生と言われた', type: 'studious' },
      { text: 'おとなしいと言われた', type: 'homebody' },
    ],
  },
  {
    id: 9,
    text: '子供の頃の友達関係は？',
    options: [
      { text: 'グループのリーダー的存在', type: 'active' },
      { text: '少数の親友と深い関係', type: 'creative' },
      { text: '勉強仲間がいた', type: 'studious' },
      { text: '一人でいることも多かった', type: 'homebody' },
    ],
  },
  {
    id: 10,
    text: '子供時代を振り返ると？',
    options: [
      { text: 'とにかく楽しかった！', type: 'active' },
      { text: '自分らしく過ごせた', type: 'creative' },
      { text: '一生懸命頑張った', type: 'studious' },
      { text: '穏やかで平和だった', type: 'homebody' },
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
  childhoodMemory: string;
}> = {
  active: {
    type: 'active',
    title: '冒険児タイプ',
    emoji: '🏃',
    percentage: '活動度 95%',
    description: '外で走り回り、友達と冒険を楽しんだ活発な子供時代！エネルギーに満ちて、好奇心で世界を探検していました。',
    characteristics: ['活発', '社交的', 'リーダーシップ', '冒険心', '体を動かすのが好き'],
    childhoodMemory: '友達との外遊びが一番の宝物',
  },
  creative: {
    type: 'creative',
    title: '創造児タイプ',
    emoji: '🎨',
    percentage: '創造力 92%',
    description: '絵を描いたり、物語を作ったり、創作活動に夢中だった子供時代！独自の世界観を持ち、自分らしく過ごしていました。',
    characteristics: ['想像力豊か', '芸術的', '感受性が強い', '個性的', '夢見がち'],
    childhoodMemory: '自分だけの作品や創作の時間',
  },
  studious: {
    type: 'studious',
    title: '優等生タイプ',
    emoji: '📚',
    percentage: '勤勉度 88%',
    description: '勉強や習い事を頑張った努力家の子供時代！目標を立てて達成する喜びを知っていました。',
    characteristics: ['真面目', '努力家', '責任感', '向上心', '計画的'],
    childhoodMemory: '努力が報われた瞬間の達成感',
  },
  homebody: {
    type: 'homebody',
    title: 'のんびり児タイプ',
    emoji: '🏠',
    percentage: 'マイペース度 85%',
    description: '自分のペースで穏やかに過ごした子供時代！家での時間や一人の時間を大切にしていました。',
    characteristics: ['穏やか', 'マイペース', '内向的', '観察力', '独立心'],
    childhoodMemory: '家族と過ごした温かい時間',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { active: 0, creative: 0, studious: 0, homebody: 0 };

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
