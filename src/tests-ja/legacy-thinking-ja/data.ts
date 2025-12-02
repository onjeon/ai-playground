// 遺産思考タイプ診断
export const questions = [
  {
    id: 1,
    text: '自分が残したいものは？',
    options: [
      { text: '財産や資産', type: 'material' },
      { text: '作品や業績', type: 'achievement' },
      { text: '思い出や教え', type: 'wisdom' },
      { text: '特に考えていない', type: 'present' },
    ],
  },
  {
    id: 2,
    text: '後世に伝えたいことは？',
    options: [
      { text: '経済的な安定の重要性', type: 'material' },
      { text: '努力と成功の経験', type: 'achievement' },
      { text: '人生の知恵や価値観', type: 'wisdom' },
      { text: '自分で見つけてほしい', type: 'present' },
    ],
  },
  {
    id: 3,
    text: '遺言書について？',
    options: [
      { text: '財産分配を明確にしたい', type: 'material' },
      { text: '自分の意志を残したい', type: 'achievement' },
      { text: 'メッセージを添えたい', type: 'wisdom' },
      { text: 'あまり考えていない', type: 'present' },
    ],
  },
  {
    id: 4,
    text: '人生で達成したい「遺産」は？',
    options: [
      { text: '家族に残せる財産', type: 'material' },
      { text: '社会的な功績', type: 'achievement' },
      { text: '人々の心に残る影響', type: 'wisdom' },
      { text: '今を精一杯生きること', type: 'present' },
    ],
  },
  {
    id: 5,
    text: '自分が去った後、どう思われたい？',
    options: [
      { text: '家族を守ってくれた人', type: 'material' },
      { text: 'すごいことを成し遂げた人', type: 'achievement' },
      { text: '温かい人だった', type: 'wisdom' },
      { text: '自然に忘れられていい', type: 'present' },
    ],
  },
  {
    id: 6,
    text: '子供や後輩に一番伝えたいことは？',
    options: [
      { text: 'お金の大切さと使い方', type: 'material' },
      { text: '目標を達成する方法', type: 'achievement' },
      { text: '人との関わり方や愛', type: 'wisdom' },
      { text: '自分らしく生きること', type: 'present' },
    ],
  },
  {
    id: 7,
    text: '寄付や社会貢献について？',
    options: [
      { text: '計画的に資産を分配したい', type: 'material' },
      { text: '自分の名前を残したい', type: 'achievement' },
      { text: '誰かの役に立てれば', type: 'wisdom' },
      { text: '特に考えていない', type: 'present' },
    ],
  },
  {
    id: 8,
    text: '写真や手紙の保管は？',
    options: [
      { text: '資産価値のあるものを保管', type: 'material' },
      { text: '業績の記録を残す', type: 'achievement' },
      { text: '思い出として大切に保管', type: 'wisdom' },
      { text: '整理はあまりしない', type: 'present' },
    ],
  },
  {
    id: 9,
    text: '人生の終わりに何を感じたい？',
    options: [
      { text: '家族に安心を残せた', type: 'material' },
      { text: 'やり遂げた達成感', type: 'achievement' },
      { text: '愛を与えられた満足感', type: 'wisdom' },
      { text: '十分に生きた実感', type: 'present' },
    ],
  },
  {
    id: 10,
    text: '「遺産」という言葉から連想するのは？',
    options: [
      { text: '相続、財産', type: 'material' },
      { text: '功績、記録', type: 'achievement' },
      { text: '思い出、教訓', type: 'wisdom' },
      { text: '過去のこと', type: 'present' },
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
  legacyAdvice: string;
}> = {
  material: {
    type: 'material',
    title: '物質的遺産型',
    emoji: '💎',
    percentage: '資産重視度 90%',
    description: '家族や次世代に財産を残すことを重視するタイプ。経済的な安定を与えることで、大切な人を守りたいと考えます。',
    characteristics: ['計画的', '責任感', '家族思い', '現実的', '堅実'],
    legacyAdvice: '心の遺産も一緒に残して',
  },
  achievement: {
    type: 'achievement',
    title: '業績・功績型',
    emoji: '🏅',
    percentage: '達成志向 88%',
    description: '仕事や社会での功績を残したいタイプ。自分の名前と共に、成し遂げたことを後世に伝えたいと願います。',
    characteristics: ['野心的', '目標志向', '努力家', '自己実現', '影響力'],
    legacyAdvice: '業績と共に人間性も大切に',
  },
  wisdom: {
    type: 'wisdom',
    title: '知恵・愛情型',
    emoji: '💝',
    percentage: '精神的遺産度 85%',
    description: '物質よりも思い出や教えを残したいタイプ。人の心に残る影響や、人生の知恵を伝えることを大切にします。',
    characteristics: ['温かい', '教育的', '思いやり', '精神性', '深い'],
    legacyAdvice: 'その優しさは永遠に受け継がれます',
  },
  present: {
    type: 'present',
    title: '今を生きる型',
    emoji: '🌸',
    percentage: '現在志向度 80%',
    description: '遺産より今この瞬間を大切にするタイプ。後のことより、今を精一杯生きることに価値を置きます。',
    characteristics: ['自由', '自然体', '執着しない', 'シンプル', '現実主義'],
    legacyAdvice: '今を生きる姿そのものが遺産になる',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { material: 0, achievement: 0, wisdom: 0, present: 0 };

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
