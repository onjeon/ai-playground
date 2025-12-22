// 抽象的思考力テスト
export const questions = [
  {
    id: 1,
    text: '「時間」と「お金」の共通点は？',
    options: [
      { text: '使うと減る有限な資源', type: 'A' },
      { text: '数字で表せる', type: 'B' },
      { text: '大人が持っている', type: 'C' },
      { text: '共通点はない', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '「木」と「会社」の共通点は？',
    options: [
      { text: '成長し、枝分かれする組織構造', type: 'A' },
      { text: '大きくなる', type: 'B' },
      { text: '人が関わる', type: 'C' },
      { text: '共通点はない', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'A:B = C:? のとき、「本:知識 = 食事:?」の?に入るのは？',
    options: [
      { text: '栄養/エネルギー', type: 'A' },
      { text: 'レストラン', type: 'C' },
      { text: '料理人', type: 'D' },
      { text: 'お腹', type: 'B' },
    ],
  },
  {
    id: 4,
    text: '「自由」の反対は「束縛」。では「秩序」の反対は？',
    options: [
      { text: '混沌/カオス', type: 'A' },
      { text: 'ルール', type: 'C' },
      { text: '平和', type: 'D' },
      { text: '規律', type: 'B' },
    ],
  },
  {
    id: 5,
    text: '次の概念を抽象度の高い順に並べると？「ゴールデンレトリバー、動物、犬、生き物」',
    options: [
      { text: '生き物→動物→犬→ゴールデンレトリバー', type: 'A' },
      { text: '動物→生き物→犬→ゴールデンレトリバー', type: 'B' },
      { text: '犬→ゴールデンレトリバー→動物→生き物', type: 'C' },
      { text: 'ゴールデンレトリバー→犬→動物→生き物', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '「橋」が象徴するものとして最も適切なのは？',
    options: [
      { text: '異なるものを繋ぐ架け橋', type: 'A' },
      { text: '建築技術', type: 'C' },
      { text: '川', type: 'D' },
      { text: '道路', type: 'B' },
    ],
  },
  {
    id: 7,
    text: '「1+1=2」と「努力+才能=成功」。この2つの式の違いは？',
    options: [
      { text: '前者は絶対的真理、後者は比喩的表現', type: 'A' },
      { text: '両方とも正しい', type: 'C' },
      { text: '両方とも間違い', type: 'D' },
      { text: '違いはない', type: 'B' },
    ],
  },
  {
    id: 8,
    text: '「氷山の一角」という表現が示す抽象的概念は？',
    options: [
      { text: '見えている部分は全体のごく一部', type: 'A' },
      { text: '冷たいもの', type: 'C' },
      { text: '海に浮かぶもの', type: 'D' },
      { text: '北極の風景', type: 'B' },
    ],
  },
  {
    id: 9,
    text: '「円」「循環」「輪廻」に共通する抽象的概念は？',
    options: [
      { text: '終わりがなく繰り返される', type: 'A' },
      { text: '丸い形', type: 'B' },
      { text: '仏教の教え', type: 'C' },
      { text: '自然現象', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '「言葉」と「音楽」の本質的な共通点は？',
    options: [
      { text: '感情や意味を伝えるコミュニケーション手段', type: 'A' },
      { text: '音を使う', type: 'B' },
      { text: '人間が作った', type: 'C' },
      { text: '学校で習う', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '「問題」を「機会」と捉え直すことは何を示す？',
    options: [
      { text: '視点を変えることで価値が変わる', type: 'A' },
      { text: '楽観的である', type: 'B' },
      { text: '現実逃避', type: 'C' },
      { text: '無責任', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '「地図は領土ではない」という言葉の意味は？',
    options: [
      { text: '表現や記号は現実そのものではない', type: 'A' },
      { text: '地図は不正確だ', type: 'B' },
      { text: '実際に行くべきだ', type: 'C' },
      { text: '地図は役に立たない', type: 'D' },
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
    title: '抽象思考の達人',
    emoji: '🌌',
    percentage: '抽象的思考力 95%',
    description: '具体的な事象から本質を見抜き、抽象的な概念を自在に操る達人です！メタファーや象徴を理解し、異なる分野の知識を統合できます。',
    characteristics: ['概念化', '本質把握', '統合思考', '象徴理解', '哲学的思考'],
    advice: '哲学、戦略立案、クリエイティブな分野で大きな才能を発揮できます。',
  },
  B: {
    type: 'B',
    title: '抽象思考上級者',
    emoji: '💭',
    percentage: '抽象的思考力 80%',
    description: '抽象的な概念を理解し、活用する能力が高いです。比喩や象徴の意味を把握し、概念間の関係性を見出せます。',
    characteristics: ['概念理解', '関連付け', '洞察力', '思考の柔軟性', '知的好奇心'],
    advice: '異分野の知識を学ぶことで、抽象的思考がさらに深まります。',
  },
  C: {
    type: 'C',
    title: '抽象思考学習者',
    emoji: '📖',
    percentage: '抽象的思考力 65%',
    description: '基本的な抽象概念は理解できます。より複雑な概念については、具体例を通じて理解を深めることで成長できます。',
    characteristics: ['基礎力', '成長意欲', '具体的', '実践派', '素直'],
    advice: '本を読んだり、深い議論をすることで抽象的思考力が養われます。',
  },
  D: {
    type: 'D',
    title: '抽象思考ビギナー',
    emoji: '🌱',
    percentage: '抽象的思考力 50%',
    description: '抽象的思考はまだ発展途上です。具体的な事象をしっかり理解し、そこから本質を考える練習を続けましょう。',
    characteristics: ['発展途上', '可能性', '具体思考', '実践的', '行動派'],
    advice: '「なぜ」「つまり」と考える習慣をつけると、抽象的思考が育ちます。',
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
