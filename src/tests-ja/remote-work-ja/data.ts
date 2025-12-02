// リモートワーク適性診断 (원격 근무 적성 테스트)
export const questions = [
  {
    id: 1,
    text: '一人で作業するのは？',
    options: [
      { text: '集中できて最高', type: 'perfect' },
      { text: '問題なくできる', type: 'suitable' },
      { text: 'たまには人と話したい', type: 'moderate' },
      { text: '寂しくて辛い', type: 'office' },
    ],
  },
  {
    id: 2,
    text: '自宅での仕事環境は？',
    options: [
      { text: '完璧に整えている', type: 'perfect' },
      { text: 'まあまあ整っている', type: 'suitable' },
      { text: '最低限はある', type: 'moderate' },
      { text: '整っていない', type: 'office' },
    ],
  },
  {
    id: 3,
    text: '自己管理能力について？',
    options: [
      { text: 'スケジュール管理は得意', type: 'perfect' },
      { text: '意識すればできる', type: 'suitable' },
      { text: '苦手だが努力している', type: 'moderate' },
      { text: '誰かに管理してもらいたい', type: 'office' },
    ],
  },
  {
    id: 4,
    text: 'オンライン会議について？',
    options: [
      { text: '対面より効率的', type: 'perfect' },
      { text: '問題なく参加できる', type: 'suitable' },
      { text: '慣れてきた', type: 'moderate' },
      { text: '苦手・対面がいい', type: 'office' },
    ],
  },
  {
    id: 5,
    text: '通勤時間がなくなったら？',
    options: [
      { text: '時間が有効活用できて最高', type: 'perfect' },
      { text: '嬉しい', type: 'suitable' },
      { text: '良し悪しある', type: 'moderate' },
      { text: '切り替えがなくて困る', type: 'office' },
    ],
  },
  {
    id: 6,
    text: 'テキストでのコミュニケーションは？',
    options: [
      { text: '得意・むしろ好き', type: 'perfect' },
      { text: '問題なくできる', type: 'suitable' },
      { text: '難しい時もある', type: 'moderate' },
      { text: '苦手・誤解が生じやすい', type: 'office' },
    ],
  },
  {
    id: 7,
    text: '仕事とプライベートの切り替えは？',
    options: [
      { text: 'しっかり分けられる', type: 'perfect' },
      { text: '意識すればできる', type: 'suitable' },
      { text: '曖昧になりがち', type: 'moderate' },
      { text: '物理的に分けたい', type: 'office' },
    ],
  },
  {
    id: 8,
    text: 'チームの一体感について？',
    options: [
      { text: 'オンラインでも作れる', type: 'perfect' },
      { text: '工夫次第で可能', type: 'suitable' },
      { text: 'やや難しいと感じる', type: 'moderate' },
      { text: '対面でないと無理', type: 'office' },
    ],
  },
  {
    id: 9,
    text: '自宅で仕事中の誘惑は？',
    options: [
      { text: 'コントロールできる', type: 'perfect' },
      { text: 'ほぼ問題ない', type: 'suitable' },
      { text: 'たまに負ける', type: 'moderate' },
      { text: '誘惑に弱い', type: 'office' },
    ],
  },
  {
    id: 10,
    text: '理想の働き方は？',
    options: [
      { text: '完全リモート', type: 'perfect' },
      { text: 'リモート中心、たまに出社', type: 'suitable' },
      { text: '出社中心、たまにリモート', type: 'moderate' },
      { text: '毎日出社', type: 'office' },
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
  workAdvice: string;
}> = {
  perfect: {
    type: 'perfect',
    title: 'リモートワークの達人',
    emoji: '🏠',
    percentage: 'リモート適性 98%',
    description: 'リモートワークのために生まれてきた！自己管理能力が高く、どこでも生産性を発揮できます。デジタルノマドも夢じゃない。',
    characteristics: ['自己管理', '集中力', '効率重視', 'デジタルスキル', '自律性'],
    workAdvice: '定期的に人と会う機会も作ってリフレッシュを',
  },
  suitable: {
    type: 'suitable',
    title: 'リモートワーク適応型',
    emoji: '💻',
    percentage: 'リモート適性 80%',
    description: 'リモートワークに十分対応できるタイプ！多少の課題はあっても工夫次第でクリアできます。ハイブリッドが最適かも。',
    characteristics: ['適応力', 'バランス型', '柔軟性', '問題解決力', '自己調整'],
    workAdvice: '出社日も取り入れたハイブリッドでメリハリを',
  },
  moderate: {
    type: 'moderate',
    title: 'ハイブリッド向き',
    emoji: '🔄',
    percentage: 'リモート適性 55%',
    description: 'リモートもできるけど、対面の良さも感じるタイプ。週に何日かは出社して、人と直接交流する環境が合っています。',
    characteristics: ['バランス志向', '対面重視', '協調性', 'コミュニケーション', '柔軟対応'],
    workAdvice: '出社日を軸にリモートを活用するスタイルがおすすめ',
  },
  office: {
    type: 'office',
    title: 'オフィス派',
    emoji: '🏢',
    percentage: 'オフィス適性 90%',
    description: '仕事は会社でするもの！人との直接的な交流や、仕事モードへの切り替えができるオフィス環境が最も生産性が高いタイプ。',
    characteristics: ['対面重視', 'チームワーク', '環境依存', 'コミュニケーション', '切り替え上手'],
    workAdvice: 'オフィスの良さを活かしつつ、必要時のリモートスキルも磨いて',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { perfect: 0, suitable: 0, moderate: 0, office: 0 };

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
