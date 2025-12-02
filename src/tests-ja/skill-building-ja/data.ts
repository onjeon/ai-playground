// スキルビルディングタイプ診断
export const questions = [
  {
    id: 1,
    text: '新しいスキルを学ぶ時のアプローチは？',
    options: [
      { text: '本や教材でしっかり基礎から学ぶ', type: 'systematic' },
      { text: 'まず実践して試行錯誤する', type: 'practical' },
      { text: '得意な人に教えてもらう', type: 'social' },
      { text: '直感で必要な部分だけつまみ食い', type: 'intuitive' },
    ],
  },
  {
    id: 2,
    text: 'スキルアップの動機は？',
    options: [
      { text: 'キャリアアップや収入アップのため', type: 'systematic' },
      { text: '実際の問題を解決したいから', type: 'practical' },
      { text: '仲間と一緒に成長したいから', type: 'social' },
      { text: '興味があるから、楽しいから', type: 'intuitive' },
    ],
  },
  {
    id: 3,
    text: '学習の継続方法は？',
    options: [
      { text: '計画を立ててスケジュール管理', type: 'systematic' },
      { text: '実際のプロジェクトで使いながら', type: 'practical' },
      { text: '勉強会やコミュニティに参加', type: 'social' },
      { text: '気分が乗った時に集中して', type: 'intuitive' },
    ],
  },
  {
    id: 4,
    text: '壁にぶつかった時は？',
    options: [
      { text: '資料を調べて理論から理解する', type: 'systematic' },
      { text: 'いろんなやり方を試してみる', type: 'practical' },
      { text: '詳しい人に質問する', type: 'social' },
      { text: 'しばらく寝かせてひらめきを待つ', type: 'intuitive' },
    ],
  },
  {
    id: 5,
    text: '得意なスキルの磨き方は？',
    options: [
      { text: '更に深く専門性を高める', type: 'systematic' },
      { text: '実戦で使いまくって精度を上げる', type: 'practical' },
      { text: '人に教えることでアウトプット', type: 'social' },
      { text: '関連する新しい分野に広げる', type: 'intuitive' },
    ],
  },
  {
    id: 6,
    text: '理想的な学習環境は？',
    options: [
      { text: '静かな場所で一人で集中', type: 'systematic' },
      { text: '実際の現場や作業スペース', type: 'practical' },
      { text: 'グループやチームでの学習', type: 'social' },
      { text: 'カフェなど気分転換できる場所', type: 'intuitive' },
    ],
  },
  {
    id: 7,
    text: 'スキルの証明で重視するのは？',
    options: [
      { text: '資格や認定証', type: 'systematic' },
      { text: '実績やポートフォリオ', type: 'practical' },
      { text: '周りからの評価や推薦', type: 'social' },
      { text: '自分の満足感', type: 'intuitive' },
    ],
  },
  {
    id: 8,
    text: '複数のスキルを持つことについて？',
    options: [
      { text: '一つを極めてから次へ', type: 'systematic' },
      { text: '必要に応じて並行して習得', type: 'practical' },
      { text: '仲間と得意分野を分担', type: 'social' },
      { text: '興味の赴くまま色々手を出す', type: 'intuitive' },
    ],
  },
  {
    id: 9,
    text: 'スキルが身についたと感じる瞬間は？',
    options: [
      { text: 'テストや試験に合格した時', type: 'systematic' },
      { text: '実際に使えた時', type: 'practical' },
      { text: '人に教えられるようになった時', type: 'social' },
      { text: '自然とできるようになった時', type: 'intuitive' },
    ],
  },
  {
    id: 10,
    text: '新しいスキルを選ぶ基準は？',
    options: [
      { text: '将来性や市場価値', type: 'systematic' },
      { text: '今すぐ使えるかどうか', type: 'practical' },
      { text: '周りで流行っているか', type: 'social' },
      { text: 'ワクワクするかどうか', type: 'intuitive' },
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
  recommendation: string;
}> = {
  systematic: {
    type: 'systematic',
    title: '体系的学習者',
    emoji: '📚',
    style: 'スキル習得スタイル：体系型',
    description: '計画を立ててステップバイステップで学ぶあなた。基礎からしっかり積み上げ、確実にスキルを身につけます。資格取得も得意！',
    characteristics: ['計画的', '基礎重視', '継続力', '論理的', '着実'],
    recommendation: '時には実践から入るのも効果的！完璧を目指しすぎず、まず始めてみよう。',
  },
  practical: {
    type: 'practical',
    title: '実践型学習者',
    emoji: '🔧',
    style: 'スキル習得スタイル：実践型',
    description: 'やりながら覚える実践派のあなた。実際のプロジェクトや課題を通じて、効率よくスキルを習得します。現場で強い！',
    characteristics: ['行動力', '問題解決', '応用力', '効率重視', '結果志向'],
    recommendation: '時には基礎理論も学ぶと、応用力がさらにアップするよ！',
  },
  social: {
    type: 'social',
    title: 'ソーシャル学習者',
    emoji: '👥',
    style: 'スキル習得スタイル：協働型',
    description: '人と一緒に学ぶことで力を発揮するあなた。教え合い、刺激し合いながら成長します。コミュニティの力を活かすのが得意！',
    characteristics: ['協調性', 'コミュニケーション', 'アウトプット上手', 'ネットワーク', '共感力'],
    recommendation: '一人で集中する時間も作ると、さらに深い理解が得られるよ！',
  },
  intuitive: {
    type: 'intuitive',
    title: '直感型学習者',
    emoji: '💡',
    style: 'スキル習得スタイル：直感型',
    description: '興味と直感に従って学ぶあなた。好奇心が原動力で、ひらめきで物事を理解します。クリエイティブな発想が魅力！',
    characteristics: ['好奇心旺盛', '創造性', '柔軟性', '発想力', '自由'],
    recommendation: '興味を持続させる工夫と、少しの計画性を加えるとさらに効果的！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { systematic: 0, practical: 0, social: 0, intuitive: 0 };

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
