// 成長マインドセット診断 - あなたの成長への考え方は？
export const questions = [
  {
    id: 1,
    text: '新しいことに挑戦して失敗したとき、どう思う？',
    options: [
      { text: '自分には向いてなかったんだ', type: 'fixed' },
      { text: '恥ずかしいけど、まあ仕方ない', type: 'developing' },
      { text: '次はどうすればうまくいくかな', type: 'growth' },
      { text: '失敗から学べた、やってよかった', type: 'master' },
    ],
  },
  {
    id: 2,
    text: '「才能がない」と言われたら？',
    options: [
      { text: 'そうかも…と落ち込む', type: 'fixed' },
      { text: '少し傷つくけど気にしないようにする', type: 'developing' },
      { text: '努力で補えばいいと思う', type: 'growth' },
      { text: '才能より努力と工夫が大事だと反論', type: 'master' },
    ],
  },
  {
    id: 3,
    text: '苦手なことについてどう考える？',
    options: [
      { text: '避けて、得意なことだけやりたい', type: 'fixed' },
      { text: '必要なら最低限やる', type: 'developing' },
      { text: '克服できるよう練習する', type: 'growth' },
      { text: '苦手を強みに変えるチャンス', type: 'master' },
    ],
  },
  {
    id: 4,
    text: '他人の成功を見たとき',
    options: [
      { text: 'あの人は才能があるから…と羨む', type: 'fixed' },
      { text: 'すごいな、と思うけど自分とは違う', type: 'developing' },
      { text: '何を学べるか考える', type: 'growth' },
      { text: '刺激をもらえて自分も頑張れる', type: 'master' },
    ],
  },
  {
    id: 5,
    text: '難しい課題に直面したとき',
    options: [
      { text: '無理そうならすぐ諦める', type: 'fixed' },
      { text: 'やってみるけど期待はしない', type: 'developing' },
      { text: '難しいからこそやりがいを感じる', type: 'growth' },
      { text: '自分を成長させる最高の機会', type: 'master' },
    ],
  },
  {
    id: 6,
    text: 'フィードバックや批判をもらったら',
    options: [
      { text: '傷つくし聞きたくない', type: 'fixed' },
      { text: '一応聞くけど、あまり響かない', type: 'developing' },
      { text: '改善のヒントとして受け止める', type: 'growth' },
      { text: 'もっと詳しく聞いて成長に活かす', type: 'master' },
    ],
  },
  {
    id: 7,
    text: '努力しても結果が出ないとき',
    options: [
      { text: '「やっぱり無理だった」と諦める', type: 'fixed' },
      { text: '少し休んでまた考える', type: 'developing' },
      { text: '方法を変えて再挑戦する', type: 'growth' },
      { text: '結果より過程での成長を実感する', type: 'master' },
    ],
  },
  {
    id: 8,
    text: '年齢を重ねることと成長について',
    options: [
      { text: '若いうちしか成長できない', type: 'fixed' },
      { text: '年齢とともに成長は緩やかになる', type: 'developing' },
      { text: '何歳でも学び続けられる', type: 'growth' },
      { text: '年齢を重ねるほど深い成長ができる', type: 'master' },
    ],
  },
  {
    id: 9,
    text: 'コンフォートゾーン（安全圏）について',
    options: [
      { text: '居心地がいいから出たくない', type: 'fixed' },
      { text: '必要があれば出ることもある', type: 'developing' },
      { text: '定期的に外に出るようにしている', type: 'growth' },
      { text: '外に出続けることで成長を実感', type: 'master' },
    ],
  },
  {
    id: 10,
    text: '「人は変われる」という言葉についてどう思う？',
    options: [
      { text: '本質は変わらないと思う', type: 'fixed' },
      { text: '少しは変われるかもしれない', type: 'developing' },
      { text: '努力次第で変われると信じている', type: 'growth' },
      { text: '変わり続けることこそ人間の本質', type: 'master' },
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
  fixed: {
    type: 'fixed',
    title: '固定マインドセットタイプ',
    emoji: '🪨',
    percentage: '成長マインド 20%',
    description: '能力は生まれつき決まっていると考えがちなあなた。失敗を恐れて挑戦を避ける傾向がありますが、それは傷つきたくないという自己防衛の表れ。まずは小さな成功体験から始めてみて。',
    characteristics: ['慎重', '安定志向', '自己防衛', '完璧主義', '繊細'],
    advice: '小さな挑戦から始めてみて。「できた」という経験が、マインドを変えるきっかけに。',
  },
  developing: {
    type: 'developing',
    title: '発展途上タイプ',
    emoji: '🌱',
    percentage: '成長マインド 50%',
    description: '成長の可能性は理解しているけど、まだ確信が持てないあなた。「やってみよう」と「どうせ無理」の間で揺れ動いています。成功体験を積み重ねることで、成長マインドが育っていきます。',
    characteristics: ['バランス型', '現実的', '慎重', '可能性を模索中', '自己認識がある'],
    advice: '今のあなたは変化の入り口に立っている。小さな成功を積み重ねていこう。',
  },
  growth: {
    type: 'growth',
    title: '成長マインドセットタイプ',
    emoji: '🌳',
    percentage: '成長マインド 80%',
    description: '努力と経験で人は成長できると信じているあなた。失敗を学びの機会と捉え、挑戦を楽しめる健全なマインドの持ち主です。その姿勢が、確実に成果につながっています。',
    characteristics: ['向上心', '粘り強い', '好奇心旺盛', '前向き', '学び続ける'],
    advice: '素晴らしい成長マインド！その姿勢を周りにも広げていってください。',
  },
  master: {
    type: 'master',
    title: '成長マスタータイプ',
    emoji: '🦅',
    percentage: '成長マインド 100%',
    description: '成長こそ人生の醍醐味だと理解しているあなた。失敗も困難も全て糧にできる達人レベルのマインドセット。その姿勢は周りにもポジティブな影響を与えています。',
    characteristics: ['達観', 'レジリエンス', '影響力', '自己実現', 'メンター気質'],
    advice: 'あなたの存在が周りを成長させています。その姿勢を後進にも伝えていって。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { fixed: 0, developing: 0, growth: 0, master: 0 };

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
