// 学生時代診断
export const questions = [
  {
    id: 1,
    text: '学生時代、授業中の態度は？',
    options: [
      { text: '積極的に発言していた', type: 'leader' },
      { text: 'ノートを綺麗にまとめていた', type: 'diligent' },
      { text: '友達とこっそり話していた', type: 'social' },
      { text: 'ぼーっと空想していた', type: 'dreamer' },
    ],
  },
  {
    id: 2,
    text: '学校行事での役割は？',
    options: [
      { text: '実行委員やリーダー', type: 'leader' },
      { text: '裏方でサポート', type: 'diligent' },
      { text: '盛り上げ役', type: 'social' },
      { text: '参加するだけ', type: 'dreamer' },
    ],
  },
  {
    id: 3,
    text: '好きだった科目は？',
    options: [
      { text: '体育や社会', type: 'leader' },
      { text: '数学や理科', type: 'diligent' },
      { text: '音楽や美術', type: 'social' },
      { text: '国語や文学', type: 'dreamer' },
    ],
  },
  {
    id: 4,
    text: 'テスト前の過ごし方は？',
    options: [
      { text: '友達と教え合い', type: 'leader' },
      { text: '一人で集中して勉強', type: 'diligent' },
      { text: 'みんなで勉強会', type: 'social' },
      { text: '一夜漬け派', type: 'dreamer' },
    ],
  },
  {
    id: 5,
    text: '先生との関係は？',
    options: [
      { text: '信頼されていた', type: 'leader' },
      { text: '評価されていた', type: 'diligent' },
      { text: 'フレンドリーだった', type: 'social' },
      { text: '特に印象に残っていない', type: 'dreamer' },
    ],
  },
  {
    id: 6,
    text: '学生時代の昼休みは？',
    options: [
      { text: 'クラスのみんなと過ごす', type: 'leader' },
      { text: '図書室で読書', type: 'diligent' },
      { text: '友達とおしゃべり', type: 'social' },
      { text: '一人で散歩', type: 'dreamer' },
    ],
  },
  {
    id: 7,
    text: '学校の思い出で一番は？',
    options: [
      { text: 'リーダーとして活躍したこと', type: 'leader' },
      { text: '成績が上がったこと', type: 'diligent' },
      { text: '友達との思い出', type: 'social' },
      { text: '自分だけの特別な時間', type: 'dreamer' },
    ],
  },
  {
    id: 8,
    text: '学生時代の悩みは？',
    options: [
      { text: '責任の重さ', type: 'leader' },
      { text: '成績やプレッシャー', type: 'diligent' },
      { text: '人間関係', type: 'social' },
      { text: '将来への不安', type: 'dreamer' },
    ],
  },
  {
    id: 9,
    text: '卒業式の日は？',
    options: [
      { text: 'みんなに声をかけていた', type: 'leader' },
      { text: '感謝の手紙を渡した', type: 'diligent' },
      { text: '泣きながら写真撮影', type: 'social' },
      { text: '静かに感慨に浸った', type: 'dreamer' },
    ],
  },
  {
    id: 10,
    text: '学生時代を一言で表すと？',
    options: [
      { text: '充実', type: 'leader' },
      { text: '努力', type: 'diligent' },
      { text: '青春', type: 'social' },
      { text: '成長', type: 'dreamer' },
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
  schoolMemory: string;
}> = {
  leader: {
    type: 'leader',
    title: '学級委員タイプ',
    emoji: '👑',
    percentage: 'リーダーシップ 95%',
    description: '責任感が強く、クラスをまとめていた頼れる存在！先生からも生徒からも信頼されていました。',
    characteristics: ['責任感', 'リーダーシップ', '信頼', '行動力', '決断力'],
    schoolMemory: 'みんなをまとめた達成感',
  },
  diligent: {
    type: 'diligent',
    title: '優等生タイプ',
    emoji: '📖',
    percentage: '勤勉度 92%',
    description: 'コツコツ努力を積み重ね、成績優秀だった努力家！ノートまとめの達人でした。',
    characteristics: ['努力家', '真面目', '計画的', '几帳面', '忍耐力'],
    schoolMemory: '努力が実を結んだ瞬間',
  },
  social: {
    type: 'social',
    title: '人気者タイプ',
    emoji: '🌟',
    percentage: '社交性 88%',
    description: '友達がたくさんいて、いつも笑顔で楽しそうだった人気者！青春を謳歌していました。',
    characteristics: ['社交的', '明るい', '楽しい', '友達多い', 'ムードメーカー'],
    schoolMemory: '友達との笑い合った時間',
  },
  dreamer: {
    type: 'dreamer',
    title: '夢想家タイプ',
    emoji: '☁️',
    percentage: '想像力 85%',
    description: '独自の世界を持ち、自分のペースで過ごしていたマイペース派！内面の豊かさが魅力でした。',
    characteristics: ['想像力', 'マイペース', '独創的', '内省的', '芸術的'],
    schoolMemory: '一人で過ごした特別な時間',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { leader: 0, diligent: 0, social: 0, dreamer: 0 };

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
