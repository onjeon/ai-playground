// キャリア意欲診断 - あなたの仕事へのモチベーションは？
export const questions = [
  {
    id: 1,
    text: '朝、仕事に向かうときの気持ちは？',
    options: [
      { text: '今日も成長できるチャンス！', type: 'ambitious' },
      { text: 'やるべきことをこなそう', type: 'steady' },
      { text: 'できれば家にいたい…', type: 'balanced' },
      { text: '何か新しいことが起きないかな', type: 'explorer' },
    ],
  },
  {
    id: 2,
    text: '理想の上司像は？',
    options: [
      { text: '厳しくても成長させてくれる人', type: 'ambitious' },
      { text: '安定した環境を作ってくれる人', type: 'steady' },
      { text: 'プライベートも尊重してくれる人', type: 'balanced' },
      { text: '新しいチャレンジを任せてくれる人', type: 'explorer' },
    ],
  },
  {
    id: 3,
    text: '昇進の話が来たら？',
    options: [
      { text: '即答でYES！待ってました！', type: 'ambitious' },
      { text: '条件を確認してから判断', type: 'steady' },
      { text: '責任が増えるのはちょっと…', type: 'balanced' },
      { text: '面白そうならやってみたい', type: 'explorer' },
    ],
  },
  {
    id: 4,
    text: '残業について、どう思う？',
    options: [
      { text: '成果のためなら惜しまない', type: 'ambitious' },
      { text: '必要なら仕方ないけど基本は定時', type: 'steady' },
      { text: '極力避けたい、時間は大切', type: 'balanced' },
      { text: 'プロジェクトによる、面白ければOK', type: 'explorer' },
    ],
  },
  {
    id: 5,
    text: '転職について考えることは？',
    options: [
      { text: 'キャリアアップのためなら積極的に', type: 'ambitious' },
      { text: '今の会社で長く働きたい', type: 'steady' },
      { text: '条件が良ければ考える', type: 'balanced' },
      { text: '常に新しい可能性を探している', type: 'explorer' },
    ],
  },
  {
    id: 6,
    text: '仕事で一番大切にしていることは？',
    options: [
      { text: '成果と評価', type: 'ambitious' },
      { text: '安定と信頼', type: 'steady' },
      { text: '働きやすさとワークライフバランス', type: 'balanced' },
      { text: 'やりがいと新しい経験', type: 'explorer' },
    ],
  },
  {
    id: 7,
    text: '難しいプロジェクトを任されたら？',
    options: [
      { text: '認められた証拠！全力で取り組む', type: 'ambitious' },
      { text: '計画を立てて着実に進める', type: 'steady' },
      { text: 'サポートがあるか確認したい', type: 'balanced' },
      { text: 'ワクワクする！やってみたい', type: 'explorer' },
    ],
  },
  {
    id: 8,
    text: '5年後の自分に期待することは？',
    options: [
      { text: 'リーダーとして活躍していたい', type: 'ambitious' },
      { text: '今のポジションで信頼される存在に', type: 'steady' },
      { text: 'プライベートも充実させたい', type: 'balanced' },
      { text: '今とは違う分野にチャレンジしていたい', type: 'explorer' },
    ],
  },
  {
    id: 9,
    text: '同期が先に昇進したら？',
    options: [
      { text: '悔しい！次は自分の番だ', type: 'ambitious' },
      { text: '自分のペースで進めばいい', type: 'steady' },
      { text: '正直あまり気にならない', type: 'balanced' },
      { text: 'お祝いしつつ、自分の道を行く', type: 'explorer' },
    ],
  },
  {
    id: 10,
    text: '仕事を選ぶ基準で最も重視するのは？',
    options: [
      { text: 'キャリアパスと成長機会', type: 'ambitious' },
      { text: '安定性と福利厚生', type: 'steady' },
      { text: '勤務時間と休暇制度', type: 'balanced' },
      { text: '仕事内容の面白さと裁量', type: 'explorer' },
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
  ambitious: {
    type: 'ambitious',
    title: '上昇志向バリバリタイプ',
    emoji: '🚀',
    percentage: 'キャリア意欲 95%',
    description: '仕事への情熱がメラメラ燃えているタイプ！出世欲も向上心も人一倍。成果を出すことに喜びを感じ、常に高みを目指しています。日本の企業戦士を体現する存在。',
    characteristics: ['向上心が強い', '負けず嫌い', 'リーダーシップ', '行動力', '目標達成力'],
    advice: '素晴らしい意欲！でも燃え尽き症候群には注意。たまには立ち止まって自分を労ってね。',
  },
  steady: {
    type: 'steady',
    title: '堅実キャリアタイプ',
    emoji: '🏢',
    percentage: 'キャリア意欲 70%',
    description: '安定した環境で着実に成長していきたいタイプ。信頼を積み重ねて、長期的な視点でキャリアを築いていきます。日本企業の終身雇用と相性抜群！',
    characteristics: ['計画的', '誠実', '継続力', '協調性', '安定志向'],
    advice: 'あなたの堅実さは組織の土台。でも時には新しい挑戦も自分の可能性を広げてくれるよ。',
  },
  balanced: {
    type: 'balanced',
    title: 'ワークライフバランス重視タイプ',
    emoji: '⚖️',
    percentage: 'キャリア意欲 45%',
    description: '仕事は大事だけど、人生の全てじゃない！プライベートの充実も大切にするタイプ。働き方改革の申し子とも言える、現代的な価値観を持っています。',
    characteristics: ['自分軸がある', 'ストレス管理上手', '趣味充実', '効率重視', 'メリハリ'],
    advice: 'バランス感覚は現代に必要な能力。無理せず自分らしいキャリアを築いていこう。',
  },
  explorer: {
    type: 'explorer',
    title: '冒険キャリアタイプ',
    emoji: '🗺️',
    percentage: 'キャリア意欲 75%',
    description: '新しいことへの好奇心が原動力のタイプ！従来の出世コースより、やりがいや面白さを重視します。副業やフリーランスにも興味津々かも？',
    characteristics: ['好奇心旺盛', '柔軟性', 'チャレンジ精神', '独立心', '多様な経験'],
    advice: '冒険心は素晴らしい武器！いろんな経験が将来の選択肢を広げてくれるよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { ambitious: 0, steady: 0, balanced: 0, explorer: 0 };

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
