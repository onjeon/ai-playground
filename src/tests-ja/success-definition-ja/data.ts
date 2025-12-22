// 成功の定義診断
export const questions = [
  {
    id: 1,
    text: '「成功した人」と聞いて最初に思い浮かぶのは？',
    options: [
      { text: '大企業の社長や億万長者', type: 'wealth' },
      { text: '家族に囲まれて幸せそうな人', type: 'family' },
      { text: '好きなことを仕事にしている人', type: 'fulfillment' },
      { text: '社会に貢献している人', type: 'contribution' },
    ],
  },
  {
    id: 2,
    text: '10年後、どんな自分になっていたい？',
    options: [
      { text: '経済的に余裕があり、贅沢できる自分', type: 'wealth' },
      { text: '家庭を持ち、安定した生活を送る自分', type: 'family' },
      { text: '好きなことを追求し、充実している自分', type: 'fulfillment' },
      { text: '誰かの役に立っている自分', type: 'contribution' },
    ],
  },
  {
    id: 3,
    text: '仕事を選ぶ基準で一番大切なのは？',
    options: [
      { text: '給料・年収', type: 'wealth' },
      { text: '安定性・ワークライフバランス', type: 'family' },
      { text: 'やりがい・自己成長', type: 'fulfillment' },
      { text: '社会的意義・人の役に立つ', type: 'contribution' },
    ],
  },
  {
    id: 4,
    text: '宝くじで1億円当たったら？',
    options: [
      { text: '投資して更に増やす', type: 'wealth' },
      { text: '家を買って家族と暮らす', type: 'family' },
      { text: '仕事を辞めて好きなことに没頭', type: 'fulfillment' },
      { text: '寄付や社会貢献に使う', type: 'contribution' },
    ],
  },
  {
    id: 5,
    text: '人生の幸福度を測る指標は？',
    options: [
      { text: '資産額・年収', type: 'wealth' },
      { text: '家族との時間・人間関係', type: 'family' },
      { text: '自己実現度・充実感', type: 'fulfillment' },
      { text: '社会への貢献度', type: 'contribution' },
    ],
  },
  {
    id: 6,
    text: '尊敬する人のタイプは？',
    options: [
      { text: '起業家やビジネスで成功した人', type: 'wealth' },
      { text: '家族を大切にしている人', type: 'family' },
      { text: '自分の道を貫いている人', type: 'fulfillment' },
      { text: 'ボランティアや社会活動をしている人', type: 'contribution' },
    ],
  },
  {
    id: 7,
    text: '休日の理想の過ごし方は？',
    options: [
      { text: '高級レストランや旅行で贅沢を楽しむ', type: 'wealth' },
      { text: '家族や友人とゆっくり過ごす', type: 'family' },
      { text: '趣味や自己啓発に時間を使う', type: 'fulfillment' },
      { text: 'ボランティアや地域活動に参加', type: 'contribution' },
    ],
  },
  {
    id: 8,
    text: '人生で最も避けたいことは？',
    options: [
      { text: '貧困、お金に困ること', type: 'wealth' },
      { text: '孤独、大切な人がいないこと', type: 'family' },
      { text: 'やりたいことができないこと', type: 'fulfillment' },
      { text: '誰の役にも立てないこと', type: 'contribution' },
    ],
  },
  {
    id: 9,
    text: '老後の夢は？',
    options: [
      { text: '悠々自適に贅沢な暮らし', type: 'wealth' },
      { text: '孫に囲まれて穏やかに', type: 'family' },
      { text: '生涯現役で好きなことを続ける', type: 'fulfillment' },
      { text: '経験を活かして後進を育てる', type: 'contribution' },
    ],
  },
  {
    id: 10,
    text: '墓碑に刻みたい一言は？',
    options: [
      { text: '「財を成した」', type: 'wealth' },
      { text: '「愛に満ちた人生だった」', type: 'family' },
      { text: '「自分らしく生きた」', type: 'fulfillment' },
      { text: '「誰かの役に立てた」', type: 'contribution' },
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
  lifeAdvice: string;
}> = {
  wealth: {
    type: 'wealth',
    title: '経済的成功追求型',
    emoji: '💰',
    percentage: '経済重視度 90%',
    description: 'お金は自由と選択肢を広げる。そう考えるあなたにとって、経済的な成功は重要な目標。稼ぐ力を持ち、経済的自立を目指す姿勢は、現代社会で大切なスキル。ただし、お金だけが幸せではないことも忘れずに。',
    characteristics: ['野心的', '経済観念がしっかり', '目標志向', '成果主義', '投資思考'],
    lifeAdvice: 'お金を稼ぐ過程も楽しんで。経済的余裕ができたら、他の価値観も探求してみて。',
  },
  family: {
    type: 'family',
    title: '家族・人間関係重視型',
    emoji: '👨‍👩‍👧‍👦',
    percentage: '家族愛度 93%',
    description: '大切な人との時間、温かい人間関係こそが人生の成功。あなたにとって成功とは、愛する人に囲まれて穏やかに暮らすこと。日本の「和」の精神を大切にする、心温まる価値観の持ち主。',
    characteristics: ['家族思い', '人間関係重視', '安定志向', '愛情深い', '協調性がある'],
    lifeAdvice: '大切な人との時間を優先しつつ、自分自身の夢も大切にしてくださいね。',
  },
  fulfillment: {
    type: 'fulfillment',
    title: '自己実現追求型',
    emoji: '✨',
    percentage: '自己実現度 95%',
    description: '好きなことを追求し、自分らしく生きることが成功。あなたにとって、やりがいや充実感こそが人生の価値。お金や地位より、「今日も充実していた」と思える毎日が大切。',
    characteristics: ['情熱的', '自己成長重視', '独自性', '充実感を追求', '内発的動機'],
    lifeAdvice: '自分の道を進むあなた、時には周りのサポートも受け入れてみて。',
  },
  contribution: {
    type: 'contribution',
    title: '社会貢献重視型',
    emoji: '🌍',
    percentage: '貢献度 92%',
    description: '誰かの役に立つこと、社会に貢献することが人生の意義。あなたにとって成功とは、自分がいることで誰かが幸せになること。利他の精神を持つ、社会にとって貴重な存在。',
    characteristics: ['利他的', '社会意識が高い', '思いやり', '使命感', 'ボランティア精神'],
    lifeAdvice: '他者への貢献は素晴らしいですが、自分自身も大切にすることを忘れずに。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { wealth: 0, family: 0, fulfillment: 0, contribution: 0 };

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
