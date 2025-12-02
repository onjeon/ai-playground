// ボランティア適性診断 (봉사활동 적성 테스트)
export const questions = [
  {
    id: 1,
    text: 'ボランティア活動で惹かれるのは？',
    options: [
      { text: '困っている人を直接助ける活動', type: 'direct' },
      { text: '社会課題を解決するプロジェクト', type: 'project' },
      { text: '自分のスキルを活かせる活動', type: 'skill' },
      { text: '仲間と一緒にできる活動', type: 'community' },
    ],
  },
  {
    id: 2,
    text: 'ボランティアで活かしたい強みは？',
    options: [
      { text: '思いやりと優しさ', type: 'direct' },
      { text: '企画力や問題解決力', type: 'project' },
      { text: '専門的なスキル', type: 'skill' },
      { text: 'コミュニケーション力', type: 'community' },
    ],
  },
  {
    id: 3,
    text: 'ボランティアの頻度は？',
    options: [
      { text: '定期的に継続したい', type: 'direct' },
      { text: 'プロジェクト単位で関わる', type: 'project' },
      { text: '自分の都合に合わせて', type: 'skill' },
      { text: '仲間がいれば参加', type: 'community' },
    ],
  },
  {
    id: 4,
    text: 'やりがいを感じる瞬間は？',
    options: [
      { text: '「ありがとう」と言われた時', type: 'direct' },
      { text: '社会に変化を起こせた時', type: 'project' },
      { text: '自分のスキルが役立った時', type: 'skill' },
      { text: '仲間と達成感を分かち合った時', type: 'community' },
    ],
  },
  {
    id: 5,
    text: '興味のある分野は？',
    options: [
      { text: '福祉・介護・医療', type: 'direct' },
      { text: '環境・教育・国際協力', type: 'project' },
      { text: 'IT・デザイン・専門分野', type: 'skill' },
      { text: '地域活性化・イベント', type: 'community' },
    ],
  },
  {
    id: 6,
    text: 'ボランティアで大切にすることは？',
    options: [
      { text: '相手の気持ちに寄り添う', type: 'direct' },
      { text: '効果的なインパクト', type: 'project' },
      { text: '質の高い貢献', type: 'skill' },
      { text: '楽しくやること', type: 'community' },
    ],
  },
  {
    id: 7,
    text: 'ボランティア組織での役割は？',
    options: [
      { text: '現場で活動する', type: 'direct' },
      { text: '企画・運営を担当', type: 'project' },
      { text: '専門的なアドバイス', type: 'skill' },
      { text: '仲間集めやPR', type: 'community' },
    ],
  },
  {
    id: 8,
    text: 'ボランティアを始めたきっかけは？',
    options: [
      { text: '誰かの役に立ちたかった', type: 'direct' },
      { text: '社会問題に興味があった', type: 'project' },
      { text: '自分のスキルを社会に還元したかった', type: 'skill' },
      { text: '友達に誘われた', type: 'community' },
    ],
  },
  {
    id: 9,
    text: 'ボランティアで得たいものは？',
    options: [
      { text: '感謝される喜び', type: 'direct' },
      { text: '社会貢献の実感', type: 'project' },
      { text: '経験とスキルアップ', type: 'skill' },
      { text: '新しい出会いと繋がり', type: 'community' },
    ],
  },
  {
    id: 10,
    text: '理想のボランティア活動は？',
    options: [
      { text: '人と人との温かい繋がり', type: 'direct' },
      { text: '社会を変えるプロジェクト', type: 'project' },
      { text: '専門性を活かした貢献', type: 'skill' },
      { text: '楽しい仲間との活動', type: 'community' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  volunteerStyle: string[];
  suitableActivities: string[];
  motivation: string[];
}> = {
  direct: {
    type: 'direct',
    title: '現場密着型ボランティア',
    emoji: '🤲',
    description: 'あなたは人と直接関わることにやりがいを感じるタイプ！困っている人のそばで支え、温かい繋がりを大切にします。思いやりの心が溢れています。',
    volunteerStyle: ['直接支援', '継続的な関わり', '人との繋がり重視'],
    suitableActivities: ['介護施設でのボランティア', '子ども食堂', '被災地支援', 'ホームレス支援'],
    motivation: ['感謝されること', '人の笑顔', '直接役に立つ実感'],
  },
  project: {
    type: 'project',
    title: '社会変革型ボランティア',
    emoji: '🌍',
    description: 'あなたは社会課題の解決にコミットするタイプ！問題の根本に取り組み、持続可能な変化を起こしたいと考えます。企画力と行動力が武器。',
    volunteerStyle: ['企画・運営', 'プロジェクト型', '社会インパクト重視'],
    suitableActivities: ['NPO・NGO活動', '環境保護プロジェクト', '教育支援', '国際協力'],
    motivation: ['社会を変える実感', '大きなインパクト', '問題解決'],
  },
  skill: {
    type: 'skill',
    title: 'スキル提供型ボランティア',
    emoji: '💼',
    description: 'あなたは専門スキルで貢献するタイプ！自分の得意分野を活かして、質の高いサポートを提供します。プロボノ活動に最適。',
    volunteerStyle: ['専門スキル提供', '効率的な貢献', '質重視'],
    suitableActivities: ['プロボノ活動', 'IT・デザイン支援', '語学ボランティア', '専門相談'],
    motivation: ['スキルが役立つ実感', '成長機会', '効率的な貢献'],
  },
  community: {
    type: 'community',
    title: 'コミュニティ型ボランティア',
    emoji: '🎉',
    description: 'あなたは仲間と一緒に活動を楽しむタイプ！ボランティアを通じて新しい出会いや繋がりを大切にします。明るいエネルギーでチームを盛り上げます。',
    volunteerStyle: ['チームで活動', '楽しさ重視', '新しい出会いを求める'],
    suitableActivities: ['地域イベント', 'お祭りボランティア', 'スポーツイベント', '交流活動'],
    motivation: ['仲間との一体感', '新しい出会い', '楽しい経験'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { direct: 0, project: 0, skill: 0, community: 0 };

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
