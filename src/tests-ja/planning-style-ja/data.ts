// 計画スタイル診断
export const questions = [
  {
    id: 1,
    text: '新しいプロジェクトを始める時は？',
    options: [
      { text: '詳細な計画書を作成', type: 'detailed' },
      { text: '大枠の計画を立てる', type: 'structured' },
      { text: 'ざっくりと方向性だけ', type: 'flexible' },
      { text: 'やりながら考える', type: 'adaptive' },
    ],
  },
  {
    id: 2,
    text: 'To-Doリストの使い方は？',
    options: [
      { text: '細かいタスクまで全て書く', type: 'detailed' },
      { text: '主要なタスクをリスト化', type: 'structured' },
      { text: 'たまに使う', type: 'flexible' },
      { text: '使わない、頭で管理', type: 'adaptive' },
    ],
  },
  {
    id: 3,
    text: '旅行の計画は？',
    options: [
      { text: '時間単位でスケジュール', type: 'detailed' },
      { text: '日ごとの予定を立てる', type: 'structured' },
      { text: '行きたい場所だけリスト', type: 'flexible' },
      { text: '現地で決める', type: 'adaptive' },
    ],
  },
  {
    id: 4,
    text: '計画通りにいかない時は？',
    options: [
      { text: '計画を見直して修正', type: 'detailed' },
      { text: '状況に応じて調整', type: 'structured' },
      { text: '柔軟に対応', type: 'flexible' },
      { text: '全く気にしない', type: 'adaptive' },
    ],
  },
  {
    id: 5,
    text: '予定表やカレンダーの使い方は？',
    options: [
      { text: '全ての予定を細かく記入', type: 'detailed' },
      { text: '重要な予定は必ず記入', type: 'structured' },
      { text: '大事なものだけ', type: 'flexible' },
      { text: 'ほとんど使わない', type: 'adaptive' },
    ],
  },
  {
    id: 6,
    text: '目標設定の方法は？',
    options: [
      { text: 'SMART目標で具体的に', type: 'detailed' },
      { text: '明確な目標を設定', type: 'structured' },
      { text: '大まかな方向性', type: 'flexible' },
      { text: '流れに任せる', type: 'adaptive' },
    ],
  },
  {
    id: 7,
    text: '締め切りのある仕事は？',
    options: [
      { text: '逆算して細かくスケジュール', type: 'detailed' },
      { text: 'マイルストーンを設定', type: 'structured' },
      { text: '大まかな予定で進める', type: 'flexible' },
      { text: '締め切り前に集中', type: 'adaptive' },
    ],
  },
  {
    id: 8,
    text: '買い物リストは？',
    options: [
      { text: '必ず作る、詳細に', type: 'detailed' },
      { text: '大事なものはリスト化', type: 'structured' },
      { text: 'たまに作る', type: 'flexible' },
      { text: '作らない', type: 'adaptive' },
    ],
  },
  {
    id: 9,
    text: '1日の始め方は？',
    options: [
      { text: '今日のタスクを確認・整理', type: 'detailed' },
      { text: '優先順位を考える', type: 'structured' },
      { text: 'なんとなく始める', type: 'flexible' },
      { text: 'やりたいことから', type: 'adaptive' },
    ],
  },
  {
    id: 10,
    text: '計画を立てることについてどう思う？',
    options: [
      { text: '必須、計画がないと不安', type: 'detailed' },
      { text: '大切、効率が上がる', type: 'structured' },
      { text: '程々に必要', type: 'flexible' },
      { text: '縛られたくない', type: 'adaptive' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  style: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  detailed: {
    type: 'detailed',
    title: '緻密計画タイプ',
    emoji: '📋✨',
    style: '計画スタイル：超詳細型',
    description: '細部まで計画を立てる完璧主義者！To-Doリストやスケジュールを細かく管理し、計画通りに物事を進めます。準備万端で失敗が少ないタイプ。',
    characteristics: ['詳細な計画', '完璧主義', '準備万端', '管理能力が高い'],
    tips: ['計画力は大きな強み', '柔軟性も少し持って', '完璧を求めすぎないで'],
  },
  structured: {
    type: 'structured',
    title: '構造化計画タイプ',
    emoji: '🗂️🎯',
    style: '計画スタイル：構造化型',
    description: '大枠をしっかり計画し、詳細は柔軟に対応するタイプ。効率的な計画と適度な柔軟性を兼ね備え、バランスの取れた仕事ができます。',
    characteristics: ['構造化が得意', 'バランスが良い', '効率的', '柔軟性もある'],
    tips: ['理想的な計画スタイル', '状況に応じて調整を', 'チームでも活躍できる'],
  },
  flexible: {
    type: 'flexible',
    title: '柔軟計画タイプ',
    emoji: '🌊📝',
    style: '計画スタイル：ゆるやか型',
    description: '大まかな方向性だけ決めて、あとは状況に応じて対応するタイプ。縛られすぎず、臨機応変に動けます。変化に強い適応力の持ち主。',
    characteristics: ['柔軟性が高い', '適応力がある', '縛られない', '臨機応変'],
    tips: ['柔軟さは強み', '重要なことは計画を', 'タイムマネジメントを意識して'],
  },
  adaptive: {
    type: 'adaptive',
    title: '即興タイプ',
    emoji: '🎭⚡',
    style: '計画スタイル：即興型',
    description: '計画を立てずにその場で対応するタイプ。直感と瞬発力で行動し、型にはまらない自由さがあります。創造的で予測不能な展開を楽しめます。',
    characteristics: ['直感的', '即興力がある', '自由', '創造的'],
    tips: ['創造性は素晴らしい', '大事な予定は管理して', '締め切りには気をつけて'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { detailed: 0, structured: 0, flexible: 0, adaptive: 0 };

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
