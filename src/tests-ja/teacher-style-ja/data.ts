// 先生タイプ診断 (선생님 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '授業で大切にしていることは？',
    options: [
      { text: '分かりやすく教えること', type: 'expert' },
      { text: '生徒のやる気を引き出すこと', type: 'motivator' },
      { text: '生徒との信頼関係', type: 'counselor' },
      { text: '楽しい授業にすること', type: 'entertainer' },
    ],
  },
  {
    id: 2,
    text: '生徒が問題を起こしたら？',
    options: [
      { text: '何が問題か論理的に説明', type: 'expert' },
      { text: '成長の機会として捉える', type: 'motivator' },
      { text: 'まず話を聞く', type: 'counselor' },
      { text: 'ユーモアで場を和ませる', type: 'entertainer' },
    ],
  },
  {
    id: 3,
    text: '授業中の雰囲気は？',
    options: [
      { text: '集中した真剣な雰囲気', type: 'expert' },
      { text: '活気があり積極的', type: 'motivator' },
      { text: '和やかでリラックス', type: 'counselor' },
      { text: '笑いがある楽しい雰囲気', type: 'entertainer' },
    ],
  },
  {
    id: 4,
    text: '生徒へのフィードバックは？',
    options: [
      { text: '的確で具体的なアドバイス', type: 'expert' },
      { text: '良いところを褒めて伸ばす', type: 'motivator' },
      { text: '気持ちに寄り添いながら', type: 'counselor' },
      { text: 'ユーモアを交えて', type: 'entertainer' },
    ],
  },
  {
    id: 5,
    text: '生徒との距離感は？',
    options: [
      { text: '尊敬される存在でありたい', type: 'expert' },
      { text: '刺激し合える関係', type: 'motivator' },
      { text: '相談しやすい存在', type: 'counselor' },
      { text: '友達のような存在', type: 'entertainer' },
    ],
  },
  {
    id: 6,
    text: 'モチベーションが低い生徒には？',
    options: [
      { text: '学ぶことの意義を説く', type: 'expert' },
      { text: '小さな成功体験を積ませる', type: 'motivator' },
      { text: '悩みを聞いて寄り添う', type: 'counselor' },
      { text: '楽しさで引き込む', type: 'entertainer' },
    ],
  },
  {
    id: 7,
    text: '授業の準備は？',
    options: [
      { text: '内容の正確さを重視', type: 'expert' },
      { text: '生徒が主体的に学べる工夫', type: 'motivator' },
      { text: '生徒の状態を把握してから', type: 'counselor' },
      { text: '面白いネタを仕込む', type: 'entertainer' },
    ],
  },
  {
    id: 8,
    text: '教師として嬉しいことは？',
    options: [
      { text: '生徒が深く理解した時', type: 'expert' },
      { text: '生徒が目標を達成した時', type: 'motivator' },
      { text: '生徒が心を開いてくれた時', type: 'counselor' },
      { text: '生徒が笑顔になった時', type: 'entertainer' },
    ],
  },
  {
    id: 9,
    text: '理想の教師像は？',
    options: [
      { text: '知識豊富な専門家', type: 'expert' },
      { text: '可能性を引き出すコーチ', type: 'motivator' },
      { text: '心の支えになる存在', type: 'counselor' },
      { text: '人気者の先生', type: 'entertainer' },
    ],
  },
  {
    id: 10,
    text: '生徒に伝えたいことは？',
    options: [
      { text: '学ぶことの素晴らしさ', type: 'expert' },
      { text: '夢を追いかける力', type: 'motivator' },
      { text: 'あなたは一人じゃない', type: 'counselor' },
      { text: '人生は楽しんだもの勝ち', type: 'entertainer' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  teachingStyle: string[];
  strengths: string[];
  challenges: string[];
}> = {
  expert: {
    type: 'expert',
    title: '知識豊富な専門家タイプ',
    emoji: '🎓',
    description: 'あなたは深い知識で生徒を導く専門家タイプの先生！正確で分かりやすい授業で、生徒の理解を深めます。尊敬される存在。',
    teachingStyle: ['正確な知識を伝える', '論理的な説明', '専門性を活かす'],
    strengths: ['信頼性が高い', '深い学びを提供', '生徒の成績向上'],
    challenges: ['親しみやすさも大切に', '楽しさも取り入れて', '生徒の気持ちにも注目'],
  },
  motivator: {
    type: 'motivator',
    title: 'やる気引き出しタイプ',
    emoji: '🔥',
    description: 'あなたは生徒のやる気を引き出す熱血タイプの先生！ポジティブなエネルギーで生徒を鼓舞し、可能性を最大限に引き出します。',
    teachingStyle: ['褒めて伸ばす', '成功体験を積ませる', 'チャレンジを促す'],
    strengths: ['生徒が積極的になる', 'モチベーションUP', '夢を応援'],
    challenges: ['プレッシャーをかけすぎないで', '個人差も考慮して', '休息も大切に'],
  },
  counselor: {
    type: 'counselor',
    title: '心に寄り添うカウンセラータイプ',
    emoji: '💚',
    description: 'あなたは生徒の心に寄り添うカウンセラータイプの先生！信頼関係を大切にし、生徒が安心して学べる環境を作ります。',
    teachingStyle: ['話を聞く', '信頼関係を築く', '安心感を与える'],
    strengths: ['生徒が相談しやすい', '心のケアができる', '居場所を作れる'],
    challenges: ['時には厳しさも必要', '学習面も忘れずに', '一人で抱え込まないで'],
  },
  entertainer: {
    type: 'entertainer',
    title: '楽しい授業の人気者タイプ',
    emoji: '🎪',
    description: 'あなたは授業を楽しくする人気者タイプの先生！ユーモアと工夫で生徒を惹きつけ、学ぶことの楽しさを伝えます。',
    teachingStyle: ['ユーモアを交える', '楽しい雰囲気作り', '興味を引く工夫'],
    strengths: ['生徒に人気', '学校が楽しくなる', '記憶に残る授業'],
    challenges: ['学習内容も確実に', 'ふざけすぎに注意', 'メリハリをつけて'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { expert: 0, motivator: 0, counselor: 0, entertainer: 0 };

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
