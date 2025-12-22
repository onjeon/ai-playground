// 幸福の源診断 - あなたの幸せはどこから来る？
export const questions = [
  {
    id: 1,
    text: '「今日は幸せだった」と感じるのはどんな日？',
    options: [
      { text: '仕事や勉強で成果を出せた日', type: 'achievement' },
      { text: '大切な人と楽しい時間を過ごした日', type: 'connection' },
      { text: '好きなことに没頭できた日', type: 'passion' },
      { text: '心穏やかに過ごせた日', type: 'peace' },
    ],
  },
  {
    id: 2,
    text: '理想の休日の過ごし方は？',
    options: [
      { text: 'スキルアップや自己投資の時間', type: 'achievement' },
      { text: '家族や友人との団らん', type: 'connection' },
      { text: '趣味に思いっきり没頭', type: 'passion' },
      { text: '何もしない贅沢な時間', type: 'peace' },
    ],
  },
  {
    id: 3,
    text: 'お金があったら何に使いたい？',
    options: [
      { text: '自分の成長につながる投資', type: 'achievement' },
      { text: '大切な人へのプレゼントや体験', type: 'connection' },
      { text: '趣味や好きなことへの投資', type: 'passion' },
      { text: '心地よい住環境や健康', type: 'peace' },
    ],
  },
  {
    id: 4,
    text: 'ストレスを感じるのはどんなとき？',
    options: [
      { text: '目標が達成できないとき', type: 'achievement' },
      { text: '人間関係がうまくいかないとき', type: 'connection' },
      { text: '好きなことができないとき', type: 'passion' },
      { text: '心が落ち着かないとき', type: 'peace' },
    ],
  },
  {
    id: 5,
    text: 'SNSで「いいね」が多いと嬉しい投稿は？',
    options: [
      { text: '仕事や勉強の成果報告', type: 'achievement' },
      { text: '友達や家族との楽しい写真', type: 'connection' },
      { text: '趣味や推し活の投稿', type: 'passion' },
      { text: '穏やかな日常や風景', type: 'peace' },
    ],
  },
  {
    id: 6,
    text: '人生で最も大切だと思うものは？',
    options: [
      { text: '目標達成と自己成長', type: 'achievement' },
      { text: '愛情と人とのつながり', type: 'connection' },
      { text: '情熱と好きなこと', type: 'passion' },
      { text: '心の平和と健康', type: 'peace' },
    ],
  },
  {
    id: 7,
    text: '辛いとき、何で回復する？',
    options: [
      { text: '仕事や勉強に打ち込む', type: 'achievement' },
      { text: '誰かと話す、支えてもらう', type: 'connection' },
      { text: '趣味に没頭して忘れる', type: 'passion' },
      { text: '一人で静かに過ごす', type: 'peace' },
    ],
  },
  {
    id: 8,
    text: '10年後の理想の自分は？',
    options: [
      { text: 'キャリアで成功している', type: 'achievement' },
      { text: '大切な人に囲まれている', type: 'connection' },
      { text: '好きなことで生きている', type: 'passion' },
      { text: '穏やかで満たされている', type: 'peace' },
    ],
  },
  {
    id: 9,
    text: '幸せを感じる瞬間は？',
    options: [
      { text: '目標を達成したとき', type: 'achievement' },
      { text: '愛されていると感じたとき', type: 'connection' },
      { text: '夢中になれているとき', type: 'passion' },
      { text: '何も心配がないとき', type: 'peace' },
    ],
  },
  {
    id: 10,
    text: '幸せの秘訣は？',
    options: [
      { text: '常に目標を持って前進すること', type: 'achievement' },
      { text: '人とのつながりを大切にすること', type: 'connection' },
      { text: '好きなことを見つけて追求すること', type: 'passion' },
      { text: '今ある幸せに気づくこと', type: 'peace' },
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
  achievement: {
    type: 'achievement',
    title: '達成型幸福タイプ',
    emoji: '🏆',
    percentage: '達成志向 90%',
    description: '目標を達成することで幸福を感じるあなた。「成長している」「結果を出している」という実感が、人生の原動力になっています。向上心が高く、常に次のステージを目指す生き方は素敵です。',
    characteristics: ['向上心', '目標志向', '努力家', '結果重視', '自己成長'],
    advice: '達成も大事だけど、過程も楽しんで。たまには立ち止まって今の幸せを味わおう。',
  },
  connection: {
    type: 'connection',
    title: 'つながり型幸福タイプ',
    emoji: '💞',
    percentage: '人間関係重視 95%',
    description: '人とのつながりから幸福を感じるあなた。愛する人と過ごす時間、誰かの役に立てた瞬間、支え合える関係性が人生を豊かにしています。人を大切にできるあなたは、周りにも幸せを与えています。',
    characteristics: ['共感力', '愛情深い', '思いやり', 'コミュニティ重視', '利他的'],
    advice: '人を大切にするその心を忘れずに。でも自分も大切にしてね。',
  },
  passion: {
    type: 'passion',
    title: '情熱型幸福タイプ',
    emoji: '🔥',
    percentage: '情熱度 100%',
    description: '好きなことに没頭しているときに最も幸せを感じるあなた。趣味、創作、推し活など、熱中できるものがあることが人生の喜び。その情熱は周りにもエネルギーを与えています。',
    characteristics: ['熱中力', '好奇心旺盛', '創造性', 'マイペース', '自己表現'],
    advice: 'その情熱を大切に！好きなことを追求する人生は最高に幸せ。',
  },
  peace: {
    type: 'peace',
    title: '平穏型幸福タイプ',
    emoji: '🕊️',
    percentage: '心の平和度 95%',
    description: '心穏やかに過ごせることに幸せを感じるあなた。争いを避け、今あるものに感謝し、小さな幸せを見つけられる豊かな感性の持ち主。その穏やかさは周りにも安らぎを与えています。',
    characteristics: ['穏やか', '感謝の心', '知足', 'バランス感覚', '癒し系'],
    advice: '今の幸せに気づけるあなたは素敵。でもたまには新しい刺激も楽しんでみて。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { achievement: 0, connection: 0, passion: 0, peace: 0 };

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
