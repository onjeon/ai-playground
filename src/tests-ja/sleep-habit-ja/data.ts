// 睡眠習慣タイプ診断
export const questions = [
  {
    id: 1,
    text: '寝る前のルーティンは？',
    options: [
      { text: '決まった時間に同じ準備をする', type: 'disciplined' },
      { text: 'リラックスタイムを設ける', type: 'relaxer' },
      { text: '特に決まったことはしない', type: 'flexible' },
      { text: 'ギリギリまで何かしている', type: 'irregular' },
    ],
  },
  {
    id: 2,
    text: '就寝時間はどれくらい一定？',
    options: [
      { text: 'ほぼ毎日同じ時間', type: 'disciplined' },
      { text: '平日はだいたい同じ', type: 'relaxer' },
      { text: '日によってバラバラ', type: 'flexible' },
      { text: '全く不規則', type: 'irregular' },
    ],
  },
  {
    id: 3,
    text: '寝る前のスマホ使用は？',
    options: [
      { text: '寝る1時間前にはやめる', type: 'disciplined' },
      { text: '軽くチェックするくらい', type: 'relaxer' },
      { text: '結構見てしまう', type: 'flexible' },
      { text: '寝落ちするまで見ている', type: 'irregular' },
    ],
  },
  {
    id: 4,
    text: '睡眠時間は足りている？',
    options: [
      { text: '十分確保している', type: 'disciplined' },
      { text: 'だいたい足りている', type: 'relaxer' },
      { text: '少し足りないかも', type: 'flexible' },
      { text: '慢性的に睡眠不足', type: 'irregular' },
    ],
  },
  {
    id: 5,
    text: '寝つきはどう？',
    options: [
      { text: 'すぐに眠れる', type: 'disciplined' },
      { text: 'リラックスすれば眠れる', type: 'relaxer' },
      { text: '時々寝つきが悪い', type: 'flexible' },
      { text: '寝つきが悪いことが多い', type: 'irregular' },
    ],
  },
  {
    id: 6,
    text: '夜中に目が覚めることは？',
    options: [
      { text: 'ほとんどない', type: 'disciplined' },
      { text: 'たまにある', type: 'relaxer' },
      { text: '時々ある', type: 'flexible' },
      { text: 'よくある', type: 'irregular' },
    ],
  },
  {
    id: 7,
    text: '睡眠の質に気を使っている？',
    options: [
      { text: '寝具や環境にこだわる', type: 'disciplined' },
      { text: 'ある程度は気にする', type: 'relaxer' },
      { text: 'あまり意識しない', type: 'flexible' },
      { text: '全く気にしない', type: 'irregular' },
    ],
  },
  {
    id: 8,
    text: 'カフェインの摂取は？',
    options: [
      { text: '夕方以降は控える', type: 'disciplined' },
      { text: '夜は控えめにする', type: 'relaxer' },
      { text: '特に気にしない', type: 'flexible' },
      { text: '夜でも飲む', type: 'irregular' },
    ],
  },
  {
    id: 9,
    text: '休日の睡眠パターンは？',
    options: [
      { text: '平日と同じリズムを保つ', type: 'disciplined' },
      { text: '少しだけゆっくり寝る', type: 'relaxer' },
      { text: '寝だめする', type: 'flexible' },
      { text: '完全に崩れる', type: 'irregular' },
    ],
  },
  {
    id: 10,
    text: '朝の目覚めは？',
    options: [
      { text: 'スッキリ目覚める', type: 'disciplined' },
      { text: 'まあまあスッキリ', type: 'relaxer' },
      { text: '少しだるい', type: 'flexible' },
      { text: 'いつも辛い', type: 'irregular' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  quality: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  disciplined: {
    type: 'disciplined',
    title: '睡眠優等生タイプ',
    emoji: '😴✨',
    quality: '睡眠習慣度：★★★★★',
    description: '理想的な睡眠習慣を身につけています。規則正しい生活リズムと睡眠への意識の高さが、質の高い睡眠と日中のパフォーマンスにつながっています。',
    characteristics: ['規則正しい就寝時間', '睡眠環境にこだわる', '寝つきが良い', '朝スッキリ目覚める'],
    tips: ['今の習慣を維持して', 'ストレス時も睡眠を優先して', '周りにも良い習慣を広めて'],
  },
  relaxer: {
    type: 'relaxer',
    title: 'リラックス重視タイプ',
    emoji: '🛁🌙',
    quality: '睡眠習慣度：★★★★☆',
    description: 'リラックスを大切にした睡眠スタイル。入眠前のリラックスタイムが質の良い睡眠につながっています。もう少し規則性を意識すればさらに良くなります。',
    characteristics: ['リラックス時間を大切にする', 'まあまあ規則的', '睡眠は足りている', '寝つきは普通'],
    tips: ['就寝時間をもう少し固定して', 'リラックス法をさらに充実させて', 'スマホの使用時間を減らして'],
  },
  flexible: {
    type: 'flexible',
    title: '柔軟型・要改善タイプ',
    emoji: '🌓💭',
    quality: '睡眠習慣度：★★★☆☆',
    description: '睡眠習慣に少しムラがあるタイプ。忙しさや気分で睡眠パターンが変わりがち。もう少し意識することで、睡眠の質が大きく向上する可能性があります。',
    characteristics: ['睡眠パターンにムラがある', 'たまに睡眠不足', '寝つきが悪い時がある', '休日に寝だめしがち'],
    tips: ['就寝時間を少しずつ固定して', '寝る前のルーティンを作って', 'カフェインは夕方以降控えて'],
  },
  irregular: {
    type: 'irregular',
    title: '不規則型・改善推奨タイプ',
    emoji: '😵‍💫🌀',
    quality: '睡眠習慣度：★★☆☆☆',
    description: '睡眠習慣が不規則なタイプ。慢性的な睡眠不足や睡眠の質の低下が心配されます。少しずつでも睡眠環境を整えることが大切です。',
    characteristics: ['就寝時間がバラバラ', '慢性的な睡眠不足', '寝つきが悪い', '朝起きるのが辛い'],
    tips: ['まず就寝時間を決めることから', '寝る前のスマホを減らして', '睡眠を優先順位の上位に'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { disciplined: 0, relaxer: 0, flexible: 0, irregular: 0 };

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
