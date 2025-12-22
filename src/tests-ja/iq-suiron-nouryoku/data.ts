// 推論能力テスト
export const questions = [
  {
    id: 1,
    text: '全ての鳥は飛べる。ペンギンは鳥である。したがってペンギンは飛べる。この推論は？',
    options: [
      { text: '形式的には正しいが、前提が間違い', type: 'A' },
      { text: '完全に正しい', type: 'C' },
      { text: '完全に間違い', type: 'D' },
      { text: '前提も結論も正しい', type: 'B' },
    ],
  },
  {
    id: 2,
    text: 'Aが正しければBも正しい。Bが間違いだった。Aについて言えることは？',
    options: [
      { text: 'Aは間違い', type: 'A' },
      { text: 'Aは正しい', type: 'C' },
      { text: '判断できない', type: 'D' },
      { text: 'Aは正しいかもしれない', type: 'B' },
    ],
  },
  {
    id: 3,
    text: '赤い服を着ている人は嘘をつかない。太郎は嘘をついた。したがって？',
    options: [
      { text: '太郎は赤い服を着ていない', type: 'A' },
      { text: '太郎は赤い服を着ている', type: 'C' },
      { text: '判断できない', type: 'D' },
      { text: '赤い服の人は嘘をつく', type: 'B' },
    ],
  },
  {
    id: 4,
    text: '雨が降ると地面が濡れる。地面が濡れている。したがって？',
    options: [
      { text: '雨が降ったとは限らない', type: 'A' },
      { text: '必ず雨が降った', type: 'C' },
      { text: '雨は降っていない', type: 'D' },
      { text: '判断できない', type: 'B' },
    ],
  },
  {
    id: 5,
    text: 'AはBより背が高い。CはBより背が低い。DはAより背が高い。最も背が低いのは？',
    options: [
      { text: 'C', type: 'A' },
      { text: 'B', type: 'B' },
      { text: 'A', type: 'C' },
      { text: '判断できない', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '毎日運動する人は健康である。花子は健康である。したがって花子は？',
    options: [
      { text: '毎日運動するとは限らない', type: 'A' },
      { text: '毎日運動している', type: 'C' },
      { text: '運動していない', type: 'D' },
      { text: '時々運動している', type: 'B' },
    ],
  },
  {
    id: 7,
    text: '5人の容疑者がいる。Aは無実、Bが犯人ならCも共犯、Dは単独犯、Eは目撃者。Bが犯人なら？',
    options: [
      { text: 'CもDも共犯', type: 'B' },
      { text: 'Cが共犯', type: 'A' },
      { text: 'Dが犯人', type: 'C' },
      { text: '判断できない', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '「明日雨なら遠足は中止」が真。遠足が行われた。言えることは？',
    options: [
      { text: '明日は雨ではなかった', type: 'A' },
      { text: '明日は雨だった', type: 'C' },
      { text: '判断できない', type: 'D' },
      { text: '遠足は中止になった', type: 'B' },
    ],
  },
  {
    id: 9,
    text: '猫好きは犬も好きである。太郎は犬が嫌いである。太郎について言えることは？',
    options: [
      { text: '太郎は猫も嫌い', type: 'A' },
      { text: '太郎は猫が好き', type: 'C' },
      { text: '判断できない', type: 'D' },
      { text: '太郎は猫も好きかもしれない', type: 'B' },
    ],
  },
  {
    id: 10,
    text: 'この店の常連は全員ポイントカードを持っている。次郎はポイントカードを持っていない。次郎は？',
    options: [
      { text: 'この店の常連ではない', type: 'A' },
      { text: 'この店の常連である', type: 'C' },
      { text: '判断できない', type: 'D' },
      { text: '時々この店に来る', type: 'B' },
    ],
  },
  {
    id: 11,
    text: 'AかBの少なくとも一方は正しい。Aが間違いだった。Bは？',
    options: [
      { text: 'Bは正しい', type: 'A' },
      { text: 'Bも間違い', type: 'C' },
      { text: '判断できない', type: 'D' },
      { text: 'Bは正しいかもしれない', type: 'B' },
    ],
  },
  {
    id: 12,
    text: '優秀な社員は全員昇進する。山田は昇進しなかった。山田について言えることは？',
    options: [
      { text: '山田は優秀ではない', type: 'A' },
      { text: '山田は優秀である', type: 'C' },
      { text: '判断できない', type: 'D' },
      { text: '山田は普通の社員', type: 'B' },
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
    title: '推論の達人',
    emoji: '🎯',
    percentage: '推論能力 95%',
    description: '論理的な推論を正確に行う達人です！複雑な前提から正しい結論を導き出し、誤った推論を見抜く力があります。',
    characteristics: ['論理的推論', '批判的思考', '正確性', '分析力', '洞察力'],
    advice: '法律、哲学、科学など論理的推論が求められる分野で大きく活躍できます。',
  },
  B: {
    type: 'B',
    title: '推論上級者',
    emoji: '🔍',
    percentage: '推論能力 80%',
    description: '推論能力が高く、論理的に考える力があります。複雑な条件でも落ち着いて正しい結論を導き出せます。',
    characteristics: ['論理性', '分析力', '慎重さ', '思考力', '判断力'],
    advice: '論理学の基礎を学ぶことで、さらに推論力が向上します。',
  },
  C: {
    type: 'C',
    title: '推論学習者',
    emoji: '📚',
    percentage: '推論能力 65%',
    description: '基本的な推論は理解できます。複雑な条件が重なると間違えることもありますが、練習で必ず向上します。',
    characteristics: ['基礎力', '成長意欲', '素直', '努力家', '実践派'],
    advice: '「〜ならば〜」という形式の文に注目して考える練習をしましょう。',
  },
  D: {
    type: 'D',
    title: '推論ビギナー',
    emoji: '🌱',
    percentage: '推論能力 50%',
    description: '推論能力はまだ発展途上です。論理的思考は訓練で身につく能力なので、焦らず学んでいきましょう。',
    characteristics: ['発展途上', '可能性', '直感的', '感覚派', '柔軟'],
    advice: '日常会話の中で「なぜそう言えるの？」と考える習慣をつけましょう。',
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
