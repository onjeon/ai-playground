// 同僚タイプ診断 - あなたは職場でどんな存在？
export const questions = [
  {
    id: 1,
    text: '職場での自分の役割は？',
    options: [
      { text: 'みんなをサポートする', type: 'helper' },
      { text: '引っ張っていく', type: 'leader' },
      { text: 'アイデアを出す', type: 'creative' },
      { text: '分析・チェックする', type: 'analyst' },
    ],
  },
  {
    id: 2,
    text: 'チームで困っている人がいたら？',
    options: [
      { text: 'すぐ助けに行く', type: 'helper' },
      { text: '解決策を提案する', type: 'leader' },
      { text: '違うアプローチを考える', type: 'creative' },
      { text: '原因を分析する', type: 'analyst' },
    ],
  },
  {
    id: 3,
    text: '会議での発言スタイルは？',
    options: [
      { text: 'みんなの意見をまとめる', type: 'helper' },
      { text: '方向性を示す', type: 'leader' },
      { text: '新しいアイデアを出す', type: 'creative' },
      { text: 'データで裏付ける', type: 'analyst' },
    ],
  },
  {
    id: 4,
    text: 'プロジェクトで担当したいのは？',
    options: [
      { text: '調整・サポート役', type: 'helper' },
      { text: 'リーダー・推進役', type: 'leader' },
      { text: '企画・発想役', type: 'creative' },
      { text: '分析・品質管理役', type: 'analyst' },
    ],
  },
  {
    id: 5,
    text: '職場で褒められると嬉しいのは？',
    options: [
      { text: '「助かった！」', type: 'helper' },
      { text: '「頼りになる！」', type: 'leader' },
      { text: '「面白い！」', type: 'creative' },
      { text: '「正確だね！」', type: 'analyst' },
    ],
  },
  {
    id: 6,
    text: '後輩への接し方は？',
    options: [
      { text: '優しくサポートする', type: 'helper' },
      { text: '目標を示して導く', type: 'leader' },
      { text: '自由にやらせる', type: 'creative' },
      { text: '丁寧に教える', type: 'analyst' },
    ],
  },
  {
    id: 7,
    text: 'ストレスを感じるのは？',
    options: [
      { text: '誰かが困っているのに助けられないとき', type: 'helper' },
      { text: 'プロジェクトが停滞しているとき', type: 'leader' },
      { text: 'マンネリ化しているとき', type: 'creative' },
      { text: 'ミスやエラーがあるとき', type: 'analyst' },
    ],
  },
  {
    id: 8,
    text: '同僚との雑談は？',
    options: [
      { text: '聞き役が多い', type: 'helper' },
      { text: '話題を振ることが多い', type: 'leader' },
      { text: '面白い話をする', type: 'creative' },
      { text: '情報を共有する', type: 'analyst' },
    ],
  },
  {
    id: 9,
    text: '職場での強みは？',
    options: [
      { text: '協調性', type: 'helper' },
      { text: 'リーダーシップ', type: 'leader' },
      { text: '創造性', type: 'creative' },
      { text: '正確性', type: 'analyst' },
    ],
  },
  {
    id: 10,
    text: '理想のチームは？',
    options: [
      { text: '助け合えるチーム', type: 'helper' },
      { text: '目標に向かうチーム', type: 'leader' },
      { text: '自由なチーム', type: 'creative' },
      { text: '質を追求するチーム', type: 'analyst' },
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
  helper: {
    type: 'helper',
    title: 'サポーター同僚',
    emoji: '🤝',
    percentage: 'サポート力 90%',
    description: 'みんなを助ける縁の下の力持ちタイプ。困っている人を放っておけず、チームの潤滑油として欠かせない存在。感謝されることが何よりの喜び。',
    characteristics: ['協調性', 'サポート力', '気配り', '優しさ', 'チームワーク'],
    advice: 'あなたの存在がチームを支えています。でも、自分のことも大切にしてね。',
  },
  leader: {
    type: 'leader',
    title: 'リーダー同僚',
    emoji: '👑',
    percentage: 'リーダーシップ 85%',
    description: 'チームを引っ張るリーダータイプ。方向性を示し、みんなをまとめる力があります。頼られる存在として、自然と中心に立っている。',
    characteristics: ['リーダーシップ', '決断力', '推進力', '責任感', 'ビジョン'],
    advice: 'その推進力は武器！でも、メンバーの声にも耳を傾けることを忘れずに。',
  },
  creative: {
    type: 'creative',
    title: 'クリエイティブ同僚',
    emoji: '💡',
    percentage: '創造性 90%',
    description: '新しいアイデアを生み出すクリエイタータイプ。マンネリを打破し、チームに新しい風を吹き込みます。「それ面白い！」と言われることが多い。',
    characteristics: ['創造性', '発想力', '革新性', '柔軟', 'ユニーク'],
    advice: 'あなたのアイデアがチームを活性化させます。どんどん発信して！',
  },
  analyst: {
    type: 'analyst',
    title: 'アナリスト同僚',
    emoji: '📊',
    percentage: '分析力 90%',
    description: '分析と品質を担うアナリストタイプ。データと事実に基づいて判断し、チームの質を高めます。「あの人がチェックしたなら大丈夫」と信頼される存在。',
    characteristics: ['分析力', '正確性', '論理的', '慎重', '品質重視'],
    advice: 'あなたの正確さがチームの品質を保っています。その目を大切に！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { helper: 0, leader: 0, creative: 0, analyst: 0 };

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
