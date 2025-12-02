// 起業家適性診断 (창업가 적성 테스트)
export const questions = [
  {
    id: 1,
    text: 'リスクに対する考え方は？',
    options: [
      { text: 'リスクなしにリターンなし', type: 'founder' },
      { text: '計算されたリスクは取る', type: 'intrapreneur' },
      { text: 'できるだけリスクは避けたい', type: 'supporter' },
      { text: '安定が一番', type: 'employee' },
    ],
  },
  {
    id: 2,
    text: '新しいアイデアを思いついたら？',
    options: [
      { text: 'すぐに実行に移す', type: 'founder' },
      { text: '計画を立てて検証する', type: 'intrapreneur' },
      { text: '誰かに相談する', type: 'supporter' },
      { text: '実現可能性を慎重に検討', type: 'employee' },
    ],
  },
  {
    id: 3,
    text: '収入の不安定さについて？',
    options: [
      { text: '成功すれば問題ない', type: 'founder' },
      { text: '一時的なら耐えられる', type: 'intrapreneur' },
      { text: '不安を感じる', type: 'supporter' },
      { text: '安定収入がないと無理', type: 'employee' },
    ],
  },
  {
    id: 4,
    text: '失敗した時の対応は？',
    options: [
      { text: '学びを得て再挑戦', type: 'founder' },
      { text: '原因を分析して改善', type: 'intrapreneur' },
      { text: '落ち込むが立ち直る', type: 'supporter' },
      { text: '失敗は避けたい', type: 'employee' },
    ],
  },
  {
    id: 5,
    text: '働き方の理想は？',
    options: [
      { text: '自分でルールを作る', type: 'founder' },
      { text: '裁量のある環境', type: 'intrapreneur' },
      { text: 'チームで協力', type: 'supporter' },
      { text: '明確な役割がある', type: 'employee' },
    ],
  },
  {
    id: 6,
    text: '長時間労働について？',
    options: [
      { text: '情熱があれば苦にならない', type: 'founder' },
      { text: '必要なら頑張れる', type: 'intrapreneur' },
      { text: 'ワークライフバランスも大切', type: 'supporter' },
      { text: '定時で帰りたい', type: 'employee' },
    ],
  },
  {
    id: 7,
    text: '人を説得することは？',
    options: [
      { text: '得意・ビジョンを語れる', type: 'founder' },
      { text: '論理的に説明できる', type: 'intrapreneur' },
      { text: '苦手ではない', type: 'supporter' },
      { text: 'あまり得意ではない', type: 'employee' },
    ],
  },
  {
    id: 8,
    text: '決断を迫られた時は？',
    options: [
      { text: '即断即決できる', type: 'founder' },
      { text: '情報を集めて決める', type: 'intrapreneur' },
      { text: '相談してから決める', type: 'supporter' },
      { text: '迷うことが多い', type: 'employee' },
    ],
  },
  {
    id: 9,
    text: '自分のビジネスを持つことに？',
    options: [
      { text: '強い憧れがある', type: 'founder' },
      { text: '興味はある', type: 'intrapreneur' },
      { text: '起業する人を応援したい', type: 'supporter' },
      { text: 'あまり興味がない', type: 'employee' },
    ],
  },
  {
    id: 10,
    text: '成功の定義は？',
    options: [
      { text: '自分のビジョンの実現', type: 'founder' },
      { text: 'イノベーションを起こす', type: 'intrapreneur' },
      { text: 'チームの成功に貢献', type: 'supporter' },
      { text: '安定した生活', type: 'employee' },
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
  careerAdvice: string;
}> = {
  founder: {
    type: 'founder',
    title: '起業家タイプ',
    emoji: '🚀',
    percentage: '起業家適性 95%',
    description: 'あなたは生まれながらの起業家！リスクを恐れず、ビジョンを持って突き進む力があります。自分のビジネスで世界を変えられる可能性大。',
    characteristics: ['ビジョナリー', 'リスクテイカー', '決断力', '情熱', 'リーダーシップ'],
    careerAdvice: 'アイデアがあるなら今すぐ行動を！小さく始めて大きく育てよう',
  },
  intrapreneur: {
    type: 'intrapreneur',
    title: '社内起業家タイプ',
    emoji: '💡',
    percentage: '起業家適性 75%',
    description: '組織の中でイノベーションを起こせるタイプ！安定性を保ちながら新しい挑戦ができる社内起業や新規事業が向いています。',
    characteristics: ['イノベーター', 'バランス感覚', '計画性', '実行力', '適応力'],
    careerAdvice: '新規事業部門やスタートアップへの転職も選択肢に',
  },
  supporter: {
    type: 'supporter',
    title: 'スタートアップサポーター',
    emoji: '🤝',
    percentage: '起業家適性 50%',
    description: '起業家を支えるのに最適なタイプ！スタートアップの初期メンバーやベンチャー企業で力を発揮できます。',
    characteristics: ['協調性', 'サポート力', 'チームプレイ', '信頼性', '実務力'],
    careerAdvice: 'スタートアップの創業メンバーとして参加するのもあり',
  },
  employee: {
    type: 'employee',
    title: '安定志向型',
    emoji: '🏢',
    percentage: '起業家適性 25%',
    description: '安定した環境で力を発揮するタイプ。起業よりも、確立された組織でキャリアを築く方が合っているかもしれません。',
    characteristics: ['安定志向', '堅実', '専門性', '組織人', '着実'],
    careerAdvice: '専門性を高めて、組織内でのキャリアアップを目指しては',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { founder: 0, intrapreneur: 0, supporter: 0, employee: 0 };

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
