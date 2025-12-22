// 論理パズルIQテスト
export const questions = [
  {
    id: 1,
    text: 'すべての犬は動物である。すべての動物は生きている。したがって...',
    options: [
      { text: 'すべての犬は生きている', type: 'A' },
      { text: '一部の犬は生きている', type: 'C' },
      { text: '生きているものは犬である', type: 'D' },
      { text: '動物は犬である', type: 'B' },
    ],
  },
  {
    id: 2,
    text: 'AはBより背が高い。CはBより背が低い。正しいのは？',
    options: [
      { text: 'AはCより背が高い', type: 'A' },
      { text: 'CはAより背が高い', type: 'D' },
      { text: 'BはAより背が高い', type: 'C' },
      { text: '判断できない', type: 'B' },
    ],
  },
  {
    id: 3,
    text: '赤い箱にはリンゴが入っている。青い箱にはミカンが入っている。黄色い箱は空である。リンゴを取りたいなら？',
    options: [
      { text: '赤い箱を開ける', type: 'A' },
      { text: '青い箱を開ける', type: 'D' },
      { text: '黄色い箱を開ける', type: 'C' },
      { text: 'すべての箱を開ける', type: 'B' },
    ],
  },
  {
    id: 4,
    text: '「雨が降れば試合は中止」が真のとき、正しいのは？',
    options: [
      { text: '試合が行われれば雨は降っていない', type: 'A' },
      { text: '雨が降らなければ試合は行われる', type: 'C' },
      { text: '試合が中止なら雨が降っている', type: 'D' },
      { text: '晴れなら試合は必ず行われる', type: 'B' },
    ],
  },
  {
    id: 5,
    text: '3人の中で1人だけ嘘をついている。太郎「次郎は嘘つき」、次郎「三郎は嘘つき」、三郎「太郎は嘘つき」。嘘つきは？',
    options: [
      { text: '三郎', type: 'B' },
      { text: '太郎', type: 'A' },
      { text: '次郎', type: 'C' },
      { text: '判断できない', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '月曜日の次の次の日の前日は？',
    options: [
      { text: '火曜日', type: 'A' },
      { text: '水曜日', type: 'B' },
      { text: '月曜日', type: 'C' },
      { text: '木曜日', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'すべての花は美しい。このバラは花である。したがって...',
    options: [
      { text: 'このバラは美しい', type: 'A' },
      { text: 'すべてのバラは美しい', type: 'B' },
      { text: '美しいものはすべてバラである', type: 'D' },
      { text: '花はすべてバラである', type: 'C' },
    ],
  },
  {
    id: 8,
    text: '5人が円形に座っている。AはBの右隣、CはAの向かい、DはCの左隣。Eの位置は？',
    options: [
      { text: 'Bの向かい', type: 'A' },
      { text: 'Aの左隣', type: 'C' },
      { text: 'Dの向かい', type: 'B' },
      { text: 'Cの右隣', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '「AかつB」の否定は？',
    options: [
      { text: '「Aでない」または「Bでない」', type: 'A' },
      { text: '「Aでない」かつ「Bでない」', type: 'C' },
      { text: '「A」または「B」', type: 'D' },
      { text: '「Aでない」かつ「B」', type: 'B' },
    ],
  },
  {
    id: 10,
    text: 'ある数の2倍に3を足すと11になる。その数は？',
    options: [
      { text: '4', type: 'A' },
      { text: '5', type: 'B' },
      { text: '3', type: 'C' },
      { text: '6', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '時計が12時を示している。3時間後の5時間前は何時？',
    options: [
      { text: '10時', type: 'A' },
      { text: '8時', type: 'B' },
      { text: '7時', type: 'C' },
      { text: '12時', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'AとBとCの年齢の合計は60歳。AはBより5歳年上で、CはBより5歳年下。Bの年齢は？',
    options: [
      { text: '20歳', type: 'A' },
      { text: '25歳', type: 'B' },
      { text: '15歳', type: 'C' },
      { text: '30歳', type: 'D' },
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
  A: {
    type: 'A',
    title: '論理の達人',
    emoji: '🎯',
    percentage: '論理的思考力 95%',
    description: '複雑な論理パズルを瞬時に解く天才的な頭脳の持ち主です！三段論法や命題論理を直感的に理解し、正確な結論を導き出せます。',
    characteristics: ['演繹的思考', '論理的分析', '正確な推論', '構造的理解', '批判的思考'],
    advice: '法律、哲学、数学など論理を重視する分野で大きく活躍できます。',
  },
  B: {
    type: 'B',
    title: '論理派思考者',
    emoji: '🔍',
    percentage: '論理的思考力 80%',
    description: '論理的な思考が得意で、複雑な問題も筋道立てて解決できます。時間をかければ難問にも対応できる実力者です。',
    characteristics: ['分析力', '推論力', '問題解決', '慎重さ', '粘り強さ'],
    advice: '論理パズルを日常的に解くことで、さらに思考力が磨かれます。',
  },
  C: {
    type: 'C',
    title: '論理学習者',
    emoji: '📚',
    percentage: '論理的思考力 65%',
    description: '基本的な論理問題は解けますが、複雑な問題には苦戦することも。トレーニングで大きく成長できる可能性を秘めています。',
    characteristics: ['成長意欲', '基礎力', '素直さ', '学習熱心', '忍耐力'],
    advice: '論理学の基本を学ぶことで、飛躍的な成長が期待できます。',
  },
  D: {
    type: 'D',
    title: '直感派思考者',
    emoji: '💫',
    percentage: '論理的思考力 50%',
    description: '論理より直感で判断するタイプです。論理的思考は訓練で向上できますが、あなたの直感力も大きな武器です。',
    characteristics: ['直感的', '創造的', '柔軟', '感性豊か', '独創的'],
    advice: '論理と直感のバランスを取ることで、より強力な問題解決能力が身につきます。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

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
