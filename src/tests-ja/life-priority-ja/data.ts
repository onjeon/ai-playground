// 人生の優先順位診断
export const questions = [
  {
    id: 1,
    text: '人生で最も大切にしていることは？',
    options: [
      { text: '家族との絆と時間', type: 'family' },
      { text: 'キャリアでの成功', type: 'career' },
      { text: '自己成長と学び', type: 'growth' },
      { text: '楽しさと経験', type: 'experience' },
    ],
  },
  {
    id: 2,
    text: '理想の1日の過ごし方は？',
    options: [
      { text: '家族や大切な人と過ごす', type: 'family' },
      { text: '仕事に没頭して成果を出す', type: 'career' },
      { text: '新しいことを学ぶ', type: 'growth' },
      { text: '趣味や旅行を楽しむ', type: 'experience' },
    ],
  },
  {
    id: 3,
    text: '転職の決め手として最も重要なのは？',
    options: [
      { text: '家庭との両立のしやすさ', type: 'family' },
      { text: '年収と地位の向上', type: 'career' },
      { text: 'スキルアップの機会', type: 'growth' },
      { text: '仕事の面白さや自由度', type: 'experience' },
    ],
  },
  {
    id: 4,
    text: '10年後の自分に期待することは？',
    options: [
      { text: '温かい家庭を築いている', type: 'family' },
      { text: '社会的地位や影響力を得ている', type: 'career' },
      { text: '専門性や知識が深まっている', type: 'growth' },
      { text: '豊かな経験を積んでいる', type: 'experience' },
    ],
  },
  {
    id: 5,
    text: '休日の理想の過ごし方は？',
    options: [
      { text: '家族とゆっくり過ごす', type: 'family' },
      { text: 'スキルアップの勉強や副業', type: 'career' },
      { text: '読書やセミナーで自己投資', type: 'growth' },
      { text: '旅行やアクティビティ', type: 'experience' },
    ],
  },
  {
    id: 6,
    text: 'お金の使い方の優先順位は？',
    options: [
      { text: '家族のための貯蓄や教育費', type: 'family' },
      { text: '投資やビジネスへの投資', type: 'career' },
      { text: '資格取得や学習への投資', type: 'growth' },
      { text: '体験や思い出作りへの投資', type: 'experience' },
    ],
  },
  {
    id: 7,
    text: '成功の定義として近いのは？',
    options: [
      { text: '愛する人に囲まれている', type: 'family' },
      { text: '社会的に認められている', type: 'career' },
      { text: '常に成長し続けている', type: 'growth' },
      { text: '人生を楽しんでいる', type: 'experience' },
    ],
  },
  {
    id: 8,
    text: '困難に直面した時の対処法は？',
    options: [
      { text: '家族や親しい人に相談', type: 'family' },
      { text: '目標達成のために突破する', type: 'career' },
      { text: '学びの機会として捉える', type: 'growth' },
      { text: '気分転換して乗り越える', type: 'experience' },
    ],
  },
  {
    id: 9,
    text: '人生で後悔したくないことは？',
    options: [
      { text: '家族との時間を大切にしなかったこと', type: 'family' },
      { text: '挑戦しなかったこと', type: 'career' },
      { text: '学ぶことを怠ったこと', type: 'growth' },
      { text: '楽しむことを忘れたこと', type: 'experience' },
    ],
  },
  {
    id: 10,
    text: '老後の理想の姿は？',
    options: [
      { text: '孫に囲まれて穏やかに暮らす', type: 'family' },
      { text: '築いた財産や名声で悠々自適', type: 'career' },
      { text: '生涯学習を続けている', type: 'growth' },
      { text: '世界中を旅している', type: 'experience' },
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
  family: {
    type: 'family',
    title: '家族・絆優先タイプ',
    emoji: '👨‍👩‍👧‍👦💕',
    style: '人生の優先順位：家族第一型',
    description: 'あなたにとって人生で最も大切なのは家族や大切な人との絆です。愛する人との時間を何よりも優先し、温かい人間関係を築くことに幸せを感じます。周囲から信頼され、人の支えになれる存在です。',
    characteristics: ['家族思い', '人間関係を大切にする', '信頼される存在', '温かい心の持ち主'],
    tips: ['その愛情深さは素晴らしい財産', '自分の時間も大切に', '大切な人との思い出を作り続けて'],
  },
  career: {
    type: 'career',
    title: 'キャリア・成功優先タイプ',
    emoji: '🏆💼',
    style: '人生の優先順位：成功追求型',
    description: 'あなたは野心的でキャリアでの成功を重視するタイプです。目標に向かって努力し、社会的な地位や経済的成功を達成することにやりがいを感じます。強い意志と実行力の持ち主です。',
    characteristics: ['野心的', '目標志向', '努力家', '行動力がある'],
    tips: ['その向上心は大きな武器', 'プライベートとのバランスも', '成功の先にある幸せも考えて'],
  },
  growth: {
    type: 'growth',
    title: '成長・学び優先タイプ',
    emoji: '📚🌱',
    style: '人生の優先順位：自己成長型',
    description: 'あなたは自己成長と学びを人生の中心に置くタイプです。新しい知識やスキルを身につけることに喜びを感じ、常に進化し続けることを大切にしています。知的好奇心旺盛な探求者です。',
    characteristics: ['知的好奇心旺盛', '向学心が強い', '内省的', '成長志向'],
    tips: ['学び続ける姿勢は素晴らしい', '学んだことを実践に活かして', '完璧を求めすぎないで'],
  },
  experience: {
    type: 'experience',
    title: '体験・楽しさ優先タイプ',
    emoji: '✈️🎉',
    style: '人生の優先順位：体験重視型',
    description: 'あなたは人生を楽しむことを最優先にするタイプです。新しい体験や冒険を求め、思い出に残る経験を積むことに価値を見出します。ポジティブで人生を豊かに彩る達人です。',
    characteristics: ['冒険好き', 'ポジティブ', '行動的', '人生を楽しむ達人'],
    tips: ['その生き方は人を元気にする', '将来への備えも忘れずに', '経験を周りの人とシェアして'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { family: 0, career: 0, growth: 0, experience: 0 };

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
