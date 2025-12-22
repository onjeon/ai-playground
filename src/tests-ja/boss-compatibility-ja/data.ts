// 上司との相性診断 - あなたはどんな上司と相性がいい？
export const questions = [
  {
    id: 1,
    text: '理想の上司は？',
    options: [
      { text: '優しくサポートしてくれる人', type: 'supportive' },
      { text: '一緒に目標達成を目指す人', type: 'achiever' },
      { text: '自由にやらせてくれる人', type: 'hands_off' },
      { text: '成長を導いてくれる人', type: 'mentor' },
    ],
  },
  {
    id: 2,
    text: '上司に一番求めることは？',
    options: [
      { text: '困ったときに助けてくれる', type: 'supportive' },
      { text: '明確な目標を示してくれる', type: 'achiever' },
      { text: '干渉しないでくれる', type: 'hands_off' },
      { text: '的確なアドバイスをくれる', type: 'mentor' },
    ],
  },
  {
    id: 3,
    text: '怒られるとき、どう受け止める？',
    options: [
      { text: '傷つくから優しく言ってほしい', type: 'supportive' },
      { text: '結果を出せば問題ない', type: 'achiever' },
      { text: '理由を説明してくれれば納得', type: 'hands_off' },
      { text: '学びとして受け止めたい', type: 'mentor' },
    ],
  },
  {
    id: 4,
    text: '報告・相談について',
    options: [
      { text: 'こまめに相談したい', type: 'supportive' },
      { text: '必要なときだけでいい', type: 'achiever' },
      { text: '自分で判断して進めたい', type: 'hands_off' },
      { text: '方向性を確認しながら進めたい', type: 'mentor' },
    ],
  },
  {
    id: 5,
    text: '評価されるポイントは？',
    options: [
      { text: '頑張りを見てほしい', type: 'supportive' },
      { text: '成果で評価してほしい', type: 'achiever' },
      { text: 'プロセスより結果で判断してほしい', type: 'hands_off' },
      { text: '成長を評価してほしい', type: 'mentor' },
    ],
  },
  {
    id: 6,
    text: '上司との距離感は？',
    options: [
      { text: '親しみやすい関係がいい', type: 'supportive' },
      { text: '信頼できるパートナー', type: 'achiever' },
      { text: '適度な距離を保ちたい', type: 'hands_off' },
      { text: '師弟関係のような感じ', type: 'mentor' },
    ],
  },
  {
    id: 7,
    text: '仕事の指示について',
    options: [
      { text: '丁寧に教えてほしい', type: 'supportive' },
      { text: '目標だけ示してほしい', type: 'achiever' },
      { text: '任せてほしい', type: 'hands_off' },
      { text: '考え方を共有してほしい', type: 'mentor' },
    ],
  },
  {
    id: 8,
    text: '上司に一番求めるスキルは？',
    options: [
      { text: 'コミュニケーション力', type: 'supportive' },
      { text: 'リーダーシップ', type: 'achiever' },
      { text: '判断力・決断力', type: 'hands_off' },
      { text: '育成力', type: 'mentor' },
    ],
  },
  {
    id: 9,
    text: 'ミスしたとき、上司にどうしてほしい？',
    options: [
      { text: 'フォローしてほしい', type: 'supportive' },
      { text: '次の目標を示してほしい', type: 'achiever' },
      { text: '自分で挽回させてほしい', type: 'hands_off' },
      { text: '原因を一緒に分析してほしい', type: 'mentor' },
    ],
  },
  {
    id: 10,
    text: '上司との1on1について',
    options: [
      { text: '悩みを聞いてほしい', type: 'supportive' },
      { text: '目標の進捗確認をしたい', type: 'achiever' },
      { text: '短時間で終わらせたい', type: 'hands_off' },
      { text: 'キャリアの相談をしたい', type: 'mentor' },
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
  supportive: {
    type: 'supportive',
    title: 'サポート型上司と相性◎',
    emoji: '🤗',
    percentage: 'サポート重視度 85%',
    description: '優しくサポートしてくれる上司と相性抜群。困ったときに助けてくれて、頑張りを認めてくれる環境で力を発揮します。安心感が大切。',
    characteristics: ['安心感重視', 'チームワーク', 'サポート好き', '協調性', '信頼関係'],
    advice: '相談しやすい上司を見つけて。あなたの強みを理解してくれる人が最高のパートナー。',
  },
  achiever: {
    type: 'achiever',
    title: '目標達成型上司と相性◎',
    emoji: '🎯',
    percentage: '目標志向度 85%',
    description: '明確な目標を示してくれるリーダータイプの上司と相性良好。一緒に成果を追いかける環境でモチベーションが上がります。',
    characteristics: ['目標志向', '成果重視', '競争心', '向上心', 'アクション派'],
    advice: 'ビジョンを持った上司と働くと、あなたの力は何倍にもなります！',
  },
  hands_off: {
    type: 'hands_off',
    title: '放任型上司と相性◎',
    emoji: '🦅',
    percentage: '自律度 90%',
    description: '自由にやらせてくれる上司と相性抜群。自分の裁量で仕事を進められる環境で最大のパフォーマンスを発揮。細かい管理は苦手。',
    characteristics: ['自立型', '自由重視', '責任感', '自己管理', '裁量好き'],
    advice: '自由度の高い職場を選ぼう。あなたは自分で道を切り開けるタイプ！',
  },
  mentor: {
    type: 'mentor',
    title: 'メンター型上司と相性◎',
    emoji: '📚',
    percentage: '成長志向度 85%',
    description: '成長を導いてくれる師匠タイプの上司と相性良好。学びを得ながら、長期的なキャリアを築ける環境が最適。',
    characteristics: ['成長志向', '学習意欲', '長期視点', '素直', '吸収力'],
    advice: '尊敬できる上司を見つけて。その人から学べることは宝物になります。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { supportive: 0, achiever: 0, hands_off: 0, mentor: 0 };

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
