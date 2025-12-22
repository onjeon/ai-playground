// 学習スピード診断 - あなたの学び方のペースは？
export const questions = [
  {
    id: 1,
    text: '新しいスキルを学ぶとき、どのように始める？',
    options: [
      { text: 'まず全体像を把握してから始める', type: 'methodical' },
      { text: 'とりあえずやってみて覚える', type: 'fast' },
      { text: '基礎からじっくり学ぶ', type: 'steady' },
      { text: '興味のある部分から自由に学ぶ', type: 'creative' },
    ],
  },
  {
    id: 2,
    text: '新しいアプリやガジェットを手に入れたら？',
    options: [
      { text: 'まず説明書やチュートリアルを見る', type: 'methodical' },
      { text: 'とりあえず触って直感で使う', type: 'fast' },
      { text: '基本機能から順番に試す', type: 'steady' },
      { text: '面白そうな機能を探して試す', type: 'creative' },
    ],
  },
  {
    id: 3,
    text: '新しい料理を作るとき',
    options: [
      { text: 'レシピ通りに正確に作る', type: 'methodical' },
      { text: 'レシピをざっと見て感覚で作る', type: 'fast' },
      { text: '何度も作って少しずつ上達', type: 'steady' },
      { text: 'アレンジを加えて自分流に', type: 'creative' },
    ],
  },
  {
    id: 4,
    text: '語学学習について',
    options: [
      { text: '文法からしっかり学ぶ', type: 'methodical' },
      { text: '実際に使いながら覚える', type: 'fast' },
      { text: '毎日少しずつコツコツ続ける', type: 'steady' },
      { text: '好きなコンテンツで楽しく学ぶ', type: 'creative' },
    ],
  },
  {
    id: 5,
    text: '仕事で新しいプロジェクトを任されたら',
    options: [
      { text: 'まず計画を立ててから着手', type: 'methodical' },
      { text: 'すぐに動き出して調整していく', type: 'fast' },
      { text: '着実に一歩ずつ進める', type: 'steady' },
      { text: '新しいアイデアを試しながら進める', type: 'creative' },
    ],
  },
  {
    id: 6,
    text: '分からないことがあったとき',
    options: [
      { text: '調べてから質問する', type: 'methodical' },
      { text: 'すぐに人に聞く', type: 'fast' },
      { text: '自分で試行錯誤する', type: 'steady' },
      { text: '別の角度からアプローチしてみる', type: 'creative' },
    ],
  },
  {
    id: 7,
    text: '資格試験の勉強法は？',
    options: [
      { text: 'スケジュールを立てて計画的に', type: 'methodical' },
      { text: '過去問をガンガン解く', type: 'fast' },
      { text: '毎日少しずつ、長期間かけて', type: 'steady' },
      { text: '苦手分野を克服する工夫を考える', type: 'creative' },
    ],
  },
  {
    id: 8,
    text: '失敗から学ぶことについて',
    options: [
      { text: '原因を分析して次に活かす', type: 'methodical' },
      { text: '失敗したらすぐ次のやり方を試す', type: 'fast' },
      { text: '同じ失敗を繰り返さないよう注意', type: 'steady' },
      { text: '失敗から新しい発見を得ることも', type: 'creative' },
    ],
  },
  {
    id: 9,
    text: '新しい知識を定着させるには',
    options: [
      { text: 'ノートにまとめて整理する', type: 'methodical' },
      { text: 'すぐに実践で使ってみる', type: 'fast' },
      { text: '繰り返し復習する', type: 'steady' },
      { text: '人に教えたり応用したりする', type: 'creative' },
    ],
  },
  {
    id: 10,
    text: '自分の学習スタイルを一言で表すと？',
    options: [
      { text: '計画的・体系的', type: 'methodical' },
      { text: 'スピード重視・実践派', type: 'fast' },
      { text: 'コツコツ・継続重視', type: 'steady' },
      { text: '柔軟・創造的', type: 'creative' },
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
  methodical: {
    type: 'methodical',
    title: '計画的学習者タイプ',
    emoji: '📋',
    percentage: '計画性 90%',
    description: '全体像を把握し、体系的に学ぶあなた。基礎から応用へと順序立てて学ぶスタイルは、深い理解につながります。時間はかかっても、しっかりとした土台が築けるのが強みです。',
    characteristics: ['体系的', '論理的', '基礎重視', '計画性', '正確性'],
    advice: '着実な学び方は素晴らしい！たまには直感で動いてみると、新しい発見があるかも。',
  },
  fast: {
    type: 'fast',
    title: 'スピードラーナータイプ',
    emoji: '⚡',
    percentage: '学習スピード 95%',
    description: 'まず行動して、やりながら学ぶあなた。新しいことへの適応が早く、短期間で基本を習得できます。実践から学ぶスタイルは、変化の激しい現代に最適。ただし、基礎の抜けには注意。',
    characteristics: ['行動力', '適応力', '実践重視', '効率的', '大胆'],
    advice: 'その行動力は最大の武器！でもたまには立ち止まって、基礎を固める時間も。',
  },
  steady: {
    type: 'steady',
    title: 'コツコツ積み上げタイプ',
    emoji: '🐢',
    percentage: '継続力 95%',
    description: '毎日少しずつ、地道に学び続けるあなた。「継続は力なり」を体現するスタイルで、気づいたら大きな成果を出しています。短期間での成果は見えにくくても、長期的には最強の学習法です。',
    characteristics: ['継続力', '忍耐力', '着実', '堅実', '自己管理'],
    advice: 'その継続力は最強のスキル！たまにペースを上げてみると、新しい可能性が見えるかも。',
  },
  creative: {
    type: 'creative',
    title: 'クリエイティブ学習者タイプ',
    emoji: '🎨',
    percentage: '創造性 90%',
    description: '興味の赴くままに、自由に学ぶあなた。既存の枠にとらわれず、独自の学び方を見つけられます。アレンジや応用が得意で、学んだことを自分なりに発展させる力があります。',
    characteristics: ['創造性', '好奇心', '柔軟性', '独自性', '発想力'],
    advice: '自由な発想は素晴らしい！でもたまには基礎に立ち返ると、さらに創造性が広がるかも。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { methodical: 0, fast: 0, steady: 0, creative: 0 };

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
