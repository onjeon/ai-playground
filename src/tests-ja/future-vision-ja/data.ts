// 将来のビジョン診断テスト (미래 비전 테스트)
export const questions = [
  {
    id: 1,
    text: '5年後の自分をイメージできる？',
    options: [
      { text: '明確なビジョンがある', type: 'visionary' },
      { text: 'なんとなくイメージできる', type: 'planner' },
      { text: 'いくつかの可能性を考えている', type: 'explorer' },
      { text: '正直わからない', type: 'present' },
    ],
  },
  {
    id: 2,
    text: '将来について考えるとどんな気持ち？',
    options: [
      { text: 'ワクワクする', type: 'visionary' },
      { text: '計画を立てたくなる', type: 'planner' },
      { text: '色々な可能性を探したい', type: 'explorer' },
      { text: '今を楽しみたい', type: 'present' },
    ],
  },
  {
    id: 3,
    text: '人生の目標はある？',
    options: [
      { text: '大きな夢や志がある', type: 'visionary' },
      { text: '具体的な目標を設定している', type: 'planner' },
      { text: '探している最中', type: 'explorer' },
      { text: 'あまり考えていない', type: 'present' },
    ],
  },
  {
    id: 4,
    text: 'キャリアについてどう考えている？',
    options: [
      { text: '自分のビジョンを実現したい', type: 'visionary' },
      { text: 'ステップバイステップで成長したい', type: 'planner' },
      { text: '色々な経験を積みたい', type: 'explorer' },
      { text: '今の仕事に集中したい', type: 'present' },
    ],
  },
  {
    id: 5,
    text: '理想のライフスタイルは？',
    options: [
      { text: '大きな影響を与える人生', type: 'visionary' },
      { text: '安定と成長のバランス', type: 'planner' },
      { text: '自由で冒険に満ちた生活', type: 'explorer' },
      { text: '今を楽しむシンプルな生活', type: 'present' },
    ],
  },
  {
    id: 6,
    text: '将来の不安にどう対処する？',
    options: [
      { text: 'ビジョンに向かって進めば大丈夫と信じる', type: 'visionary' },
      { text: '計画を立てて準備する', type: 'planner' },
      { text: '柔軟に対応できると思う', type: 'explorer' },
      { text: 'その時になったら考える', type: 'present' },
    ],
  },
  {
    id: 7,
    text: '人生で一番大切にしたいことは？',
    options: [
      { text: '使命や志を果たすこと', type: 'visionary' },
      { text: '目標を達成すること', type: 'planner' },
      { text: '新しい経験と成長', type: 'explorer' },
      { text: '今この瞬間の幸せ', type: 'present' },
    ],
  },
  {
    id: 8,
    text: '10年後、何をしていたい？',
    options: [
      { text: '世界を変えるような仕事をしていたい', type: 'visionary' },
      { text: '今の努力が実を結んでいてほしい', type: 'planner' },
      { text: '予想もしなかった面白い場所にいたい', type: 'explorer' },
      { text: '幸せでいられればいい', type: 'present' },
    ],
  },
  {
    id: 9,
    text: '将来の自分へのメッセージは？',
    options: [
      { text: '夢を忘れないで', type: 'visionary' },
      { text: '計画通りに頑張って', type: 'planner' },
      { text: '冒険を楽しんで', type: 'explorer' },
      { text: '今を大切に', type: 'present' },
    ],
  },
  {
    id: 10,
    text: '将来への備えは？',
    options: [
      { text: 'ビジョンボードや目標リストを作っている', type: 'visionary' },
      { text: '貯金やスキルアップを計画的にしている', type: 'planner' },
      { text: '色々な選択肢を残しておく', type: 'explorer' },
      { text: '特に準備はしていない', type: 'present' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  visionType: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  advice: string;
}> = {
  visionary: {
    type: 'visionary',
    title: 'ビジョナリータイプ',
    emoji: '🔭🌟',
    visionType: '将来ビジョン：夢追い人',
    description: 'あなたは大きな夢や志を持ち、未来に向かって力強く進むビジョナリーです。世界を変えるような大きな目標があなたを動かしています。',
    characteristics: ['大きな志がある', 'インスピレーションを与える', '長期的視点', '情熱的'],
    strengths: ['リーダーシップ', 'モチベーション', '影響力', '変革を起こす力'],
    advice: '大きな夢を追いながらも、小さな一歩を大切にしましょう。周りの人と一緒に夢を実現してください。',
  },
  planner: {
    type: 'planner',
    title: 'プランナータイプ',
    emoji: '📋✅',
    visionType: '将来ビジョン：計画家',
    description: 'あなたは具体的な目標を設定し、着実に実現していくプランナーです。計画性と実行力で、確実に未来を切り開いていきます。',
    characteristics: ['計画的', '目標志向', '着実', '実行力がある'],
    strengths: ['目標達成力', '時間管理', 'リスク管理', '継続力'],
    advice: '計画も大切ですが、時には予想外の出来事も楽しんでみてください。柔軟性がさらなる成長をもたらします。',
  },
  explorer: {
    type: 'explorer',
    title: 'エクスプローラータイプ',
    emoji: '🧭🌍',
    visionType: '将来ビジョン：冒険家',
    description: 'あなたは固定された未来ではなく、様々な可能性を探求するエクスプローラーです。柔軟性と好奇心で、予想外の素晴らしい未来を見つけるかもしれません。',
    characteristics: ['好奇心旺盛', '柔軟性がある', 'オープンマインド', '冒険好き'],
    strengths: ['適応力', '多様な経験', '創造性', '変化を楽しめる'],
    advice: 'たくさんの可能性を探りながらも、時には一つに集中することで、より深い成果が得られます。',
  },
  present: {
    type: 'present',
    title: 'プレゼンティストタイプ',
    emoji: '🌸😊',
    visionType: '将来ビジョン：今を生きる人',
    description: 'あなたは未来よりも「今」を大切に生きるプレゼンティストです。この瞬間の幸せを感じられることは、とても素敵な才能です。',
    characteristics: ['今を楽しむ', 'マインドフルネス', 'シンプル', 'ストレスフリー'],
    strengths: ['心の平穏', 'プレッシャーに強い', '日常の幸せを感じる', '自然体'],
    advice: '今を大切にしながらも、少しだけ将来のことも考えてみると、より安心して「今」を楽しめるかもしれません。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { visionary: 0, planner: 0, explorer: 0, present: 0 };

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
