// 構造化ニーズ診断
export const questions = [
  {
    id: 1,
    text: '旅行の計画はどうする？',
    options: [
      { text: '分刻みでスケジュールを立てる', type: 'high' },
      { text: '大まかな予定だけ決める', type: 'medium' },
      { text: 'ホテルだけ取って後は現地で', type: 'low' },
      { text: '完全にノープラン、その時の気分で', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '仕事のやり方は？',
    options: [
      { text: 'ToDoリストを細かく作成して管理', type: 'high' },
      { text: '大きなタスクだけ書き出す', type: 'medium' },
      { text: '頭の中で把握している', type: 'low' },
      { text: '締め切りだけ覚えて自由にやる', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '休日の過ごし方は？',
    options: [
      { text: '予定を立てて効率よく過ごす', type: 'high' },
      { text: 'なんとなく「これやろう」と決める', type: 'medium' },
      { text: '起きてから考える', type: 'low' },
      { text: '何もしない日があってもいい', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '部屋の整理整頓は？',
    options: [
      { text: '物の定位置が決まっている', type: 'high' },
      { text: 'ある程度整理されている', type: 'medium' },
      { text: '使いやすければOK', type: 'low' },
      { text: '創造的な混沌がある', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '予定外のことが起きた時は？',
    options: [
      { text: 'ストレスを感じる、計画が崩れる', type: 'high' },
      { text: '少し困るけど対応できる', type: 'medium' },
      { text: '「まあいっか」と柔軟に対応', type: 'low' },
      { text: 'むしろ予定外の方が楽しい', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '食事はどうする？',
    options: [
      { text: '週間の献立を立てる', type: 'high' },
      { text: '当日に何を作るか決める', type: 'medium' },
      { text: '冷蔵庫を見て決める', type: 'low' },
      { text: 'その時食べたいものを買いに行く', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '友達との約束は？',
    options: [
      { text: '日時・場所・お店まで事前に確定', type: 'high' },
      { text: '日時と大まかな場所だけ決める', type: 'medium' },
      { text: '「今週どこかで」くらいの約束', type: 'low' },
      { text: '「暇な時連絡して」スタイル', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: 'ルールや規則について？',
    options: [
      { text: 'ルールは守るべき、秩序は大切', type: 'high' },
      { text: '基本は守るけど臨機応変に', type: 'medium' },
      { text: 'ルールより状況判断', type: 'low' },
      { text: '縛られたくない、自由が一番', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '新しい環境に行く時は？',
    options: [
      { text: '事前に情報収集してシミュレーション', type: 'high' },
      { text: '最低限の準備はしておく', type: 'medium' },
      { text: '現地で対応すればいい', type: 'low' },
      { text: '行ってからのお楽しみ', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '人生において大切なのは？',
    options: [
      { text: '計画と目標に向かって進むこと', type: 'high' },
      { text: 'ある程度の方向性を持つこと', type: 'medium' },
      { text: '流れに身を任せること', type: 'low' },
      { text: '今この瞬間を楽しむこと', type: 'minimal' },
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
  workStyle: string;
}> = {
  high: {
    type: 'high',
    title: '高構造化タイプ',
    emoji: '📊',
    percentage: '構造化ニーズ 95%',
    description: '計画・ルール・秩序を重視するあなた。スケジュールは細かく立て、ToDoリストは必須。予定通りに物事が進むと安心し、想定外のことにストレスを感じやすい面も。日本の「報連相」文化にぴったり。',
    characteristics: ['計画的', '整理整頓好き', 'ルール重視', '時間管理上手', '安定志向'],
    workStyle: 'プロジェクト管理、経理、品質管理など、正確さが求められる仕事に向いています。',
  },
  medium: {
    type: 'medium',
    title: '適度な構造化タイプ',
    emoji: '⚖️',
    percentage: '構造化ニーズ 65%',
    description: '大枠は決めるけど、細部は柔軟に対応できるバランス型。計画は立てるけど、変更にもそれなりに対応できる。多くの日本企業で求められる「計画性と柔軟性の両立」ができるタイプ。',
    characteristics: ['バランス感覚', '柔軟性あり', '大枠は決める', '臨機応変', '適応力がある'],
    workStyle: '営業、企画、チームリーダーなど、計画と対応力が両方必要な仕事に向いています。',
  },
  low: {
    type: 'low',
    title: '低構造化タイプ',
    emoji: '🌊',
    percentage: '構造化ニーズ 35%',
    description: 'あまり細かい計画は立てず、状況に応じて動くタイプ。ルールより「その時の最適解」を優先し、柔軟な発想ができる。スタートアップや変化の多い環境で力を発揮。',
    characteristics: ['柔軟', '状況判断重視', 'アドリブ力', '変化に強い', '自由な発想'],
    workStyle: 'クリエイティブ職、スタートアップ、コンサルなど、変化対応力が必要な仕事に向いています。',
  },
  minimal: {
    type: 'minimal',
    title: '自由奔放タイプ',
    emoji: '🦋',
    percentage: '構造化ニーズ 15%',
    description: '計画やルールに縛られることを好まず、その瞬間を大切にするあなた。「今日何する？」から始まる毎日も楽しめる。創造性や自由な発想は誰にも負けない。',
    characteristics: ['自由人', 'クリエイティブ', '直感重視', '今を生きる', '型にはまらない'],
    workStyle: 'アーティスト、フリーランス、企画・発想が重要な仕事に向いています。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, medium: 0, low: 0, minimal: 0 };

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
