// 分析力テスト
export const questions = [
  {
    id: 1,
    text: '売上が下がった原因を探る時、まず何をする？',
    options: [
      { text: 'データを時系列で分析する', type: 'A' },
      { text: '競合の動向を調べる', type: 'B' },
      { text: '現場の声を聞く', type: 'C' },
      { text: '直感で判断する', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'グラフを見る時、最初に注目するのは？',
    options: [
      { text: '全体の傾向とパターン', type: 'A' },
      { text: '最大値と最小値', type: 'B' },
      { text: '異常値や外れ値', type: 'C' },
      { text: '見た目の印象', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'ニュースを読む時、どこに注目する？',
    options: [
      { text: '情報源と裏付けデータ', type: 'A' },
      { text: '事実と意見の区別', type: 'B' },
      { text: '見出しと結論', type: 'C' },
      { text: '興味のある部分だけ', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '複雑な問題を理解する時、どうする？',
    options: [
      { text: '要素に分解して整理する', type: 'A' },
      { text: '図や表で視覚化する', type: 'B' },
      { text: '専門家の意見を参考にする', type: 'C' },
      { text: '大まかに把握する', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '仮説を立てる時、何を重視する？',
    options: [
      { text: 'データに基づいた根拠', type: 'A' },
      { text: '論理的な整合性', type: 'B' },
      { text: '過去の経験', type: 'C' },
      { text: '直感やひらめき', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '2つの選択肢で迷った時、どう決める？',
    options: [
      { text: 'メリット・デメリットを比較表にする', type: 'A' },
      { text: '長期的な影響を考える', type: 'B' },
      { text: '他の人の意見を聞く', type: 'C' },
      { text: '直感で選ぶ', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'レポートを書く時、何から始める？',
    options: [
      { text: 'データ収集と分析', type: 'A' },
      { text: '全体の構成を考える', type: 'B' },
      { text: '参考文献を探す', type: 'C' },
      { text: 'とりあえず書き始める', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '相関関係と因果関係の違いは？',
    options: [
      { text: '相関は関連性、因果は原因と結果', type: 'A' },
      { text: '同じ意味', type: 'D' },
      { text: '相関の方が強い関係', type: 'C' },
      { text: 'よくわからない', type: 'B' },
    ],
  },
  {
    id: 9,
    text: '失敗した時、どう振り返る？',
    options: [
      { text: '原因を細かく分析する', type: 'A' },
      { text: '何が違えばよかったか考える', type: 'B' },
      { text: '反省して次に活かす', type: 'C' },
      { text: 'あまり振り返らない', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '議論の中で矛盾を見つけた時、どうする？',
    options: [
      { text: '論理的に指摘する', type: 'A' },
      { text: '質問して確認する', type: 'B' },
      { text: '黙っておく', type: 'C' },
      { text: '気にしない', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'アンケート結果を見る時、何を確認する？',
    options: [
      { text: 'サンプル数と偏り', type: 'A' },
      { text: '質問の設計', type: 'B' },
      { text: '回答の傾向', type: 'C' },
      { text: '結論だけ', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '新しい情報を得た時、どう処理する？',
    options: [
      { text: '既存の知識と照らし合わせて整理', type: 'A' },
      { text: '信頼性を確認する', type: 'B' },
      { text: 'メモしておく', type: 'C' },
      { text: '覚えているだけ', type: 'D' },
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
    title: '分析の達人',
    emoji: '📊',
    percentage: '分析力 95%',
    description: 'データを読み解き、本質を見抜く分析の達人です！複雑な情報も整理して、論理的な結論を導き出すことができます。',
    characteristics: ['データ分析', '論理的思考', '構造化', '客観性', '洞察力'],
    advice: 'データサイエンス、コンサルティング、研究など分析力を活かせる分野で大活躍できます。',
  },
  B: {
    type: 'B',
    title: '分析上級者',
    emoji: '🔬',
    percentage: '分析力 80%',
    description: '高い分析能力を持っています。情報を整理し、論理的に考える力があります。複雑な問題にも冷静に対処できます。',
    characteristics: ['論理性', '整理力', '客観性', '慎重さ', '正確性'],
    advice: '統計学やデータ分析のツールを学ぶと、さらに力を発揮できます。',
  },
  C: {
    type: 'C',
    title: '分析学習者',
    emoji: '📈',
    percentage: '分析力 65%',
    description: '基本的な分析能力は持っています。より深く考える習慣をつけることで、分析力が向上するでしょう。',
    characteristics: ['基礎力', '成長意欲', '協調性', '実践派', '素直'],
    advice: 'ニュースや記事を読む時に「なぜ？」と考える習慣をつけましょう。',
  },
  D: {
    type: 'D',
    title: '分析ビギナー',
    emoji: '🌱',
    percentage: '分析力 50%',
    description: '分析的思考はまだ発展途上です。でも、これは訓練で身につく能力です。日常生活で「なぜ」を考えることから始めましょう。',
    characteristics: ['発展途上', '可能性', '直感的', '感覚派', '柔軟'],
    advice: '身近な出来事について「なぜそうなるのか」を考える練習をしてみましょう。',
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
