// 就寝ルーティン診断
export const questions = [
  {
    id: 1,
    text: '寝る前の1時間、何をしている？',
    options: [
      { text: 'リラックス習慣（読書、ストレッチなど）', type: 'ritualist' },
      { text: 'テレビやスマホを見ている', type: 'entertainer' },
      { text: '仕事や家事の続き', type: 'workaholic' },
      { text: '特に決まっていない', type: 'casual' },
    ],
  },
  {
    id: 2,
    text: '寝室の環境づくりは？',
    options: [
      { text: '照明、温度、香りなどこだわる', type: 'ritualist' },
      { text: '快適にはしている', type: 'entertainer' },
      { text: 'あまり気にしない', type: 'workaholic' },
      { text: '寝られればいい', type: 'casual' },
    ],
  },
  {
    id: 3,
    text: '入眠前の飲み物は？',
    options: [
      { text: 'ハーブティーやホットミルク', type: 'ritualist' },
      { text: '水や白湯', type: 'entertainer' },
      { text: 'コーヒーやお茶も飲む', type: 'workaholic' },
      { text: '特に何も飲まない', type: 'casual' },
    ],
  },
  {
    id: 4,
    text: 'お風呂のタイミングは？',
    options: [
      { text: '寝る1〜2時間前にゆっくり入浴', type: 'ritualist' },
      { text: '夜に入るけど時間は様々', type: 'entertainer' },
      { text: '時間があれば入る', type: 'workaholic' },
      { text: '朝派、または適当', type: 'casual' },
    ],
  },
  {
    id: 5,
    text: 'スマホは寝る何分前にやめる？',
    options: [
      { text: '1時間以上前', type: 'ritualist' },
      { text: '30分〜1時間前', type: 'entertainer' },
      { text: '寝る直前まで見ている', type: 'workaholic' },
      { text: '寝落ちするまで見ている', type: 'casual' },
    ],
  },
  {
    id: 6,
    text: '明日の準備は？',
    options: [
      { text: '前夜にすべて準備しておく', type: 'ritualist' },
      { text: 'ある程度は準備する', type: 'entertainer' },
      { text: '朝やることが多い', type: 'workaholic' },
      { text: '準備しない、朝バタバタ', type: 'casual' },
    ],
  },
  {
    id: 7,
    text: '就寝時間の一貫性は？',
    options: [
      { text: 'ほぼ毎日同じ時間', type: 'ritualist' },
      { text: '平日はだいたい同じ', type: 'entertainer' },
      { text: '仕事次第でバラバラ', type: 'workaholic' },
      { text: '完全に不規則', type: 'casual' },
    ],
  },
  {
    id: 8,
    text: '寝る前の瞑想やマインドフルネスは？',
    options: [
      { text: '毎日実践している', type: 'ritualist' },
      { text: '時々やる', type: 'entertainer' },
      { text: '興味はあるけどしない', type: 'workaholic' },
      { text: '全くしない', type: 'casual' },
    ],
  },
  {
    id: 9,
    text: '寝室での活動は？',
    options: [
      { text: '睡眠専用の空間にしている', type: 'ritualist' },
      { text: '読書やリラックスもする', type: 'entertainer' },
      { text: '仕事やスマホもする', type: 'workaholic' },
      { text: '何でもする', type: 'casual' },
    ],
  },
  {
    id: 10,
    text: '寝る前に考えることは？',
    options: [
      { text: '今日の感謝、ポジティブなこと', type: 'ritualist' },
      { text: '楽しかったこと', type: 'entertainer' },
      { text: '明日の仕事や心配事', type: 'workaholic' },
      { text: '特に何も考えない', type: 'casual' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  routine: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  ritualist: {
    type: 'ritualist',
    title: '就寝儀式マスター',
    emoji: '🌙✨',
    routine: 'ルーティン度：★★★★★',
    description: '理想的な就寝ルーティンを確立しています。睡眠への意識が高く、心身をリラックスさせる習慣が身についています。質の高い睡眠で翌日のパフォーマンスも抜群！',
    characteristics: ['こだわりのルーティンがある', '睡眠環境を整える', 'リラックス習慣', '規則正しい就寝時間'],
    tips: ['今の習慣を維持して', 'ストレス時も睡眠を優先して', '周りにもコツを教えて'],
  },
  entertainer: {
    type: 'entertainer',
    title: 'リラックス重視タイプ',
    emoji: '📺🛋️',
    routine: 'ルーティン度：★★★★☆',
    description: '寝る前のリラックスタイムを楽しむタイプ。完璧ではないけど、自分なりの夜の過ごし方があります。少しの工夫でさらに良い睡眠が得られます。',
    characteristics: ['リラックス時間を大切にする', 'エンターテイメントを楽しむ', 'ゆるやかなルーティン', 'バランス型'],
    tips: ['スマホの時間を少し減らして', 'ブルーライトカット対策を', '寝る30分前からはリラックスモードに'],
  },
  workaholic: {
    type: 'workaholic',
    title: '仕事優先タイプ',
    emoji: '💼😵',
    routine: 'ルーティン度：★★★☆☆',
    description: '仕事や責任感が強く、寝る直前まで何かしているタイプ。切り替えが難しいかもしれませんが、睡眠の質を上げることで仕事効率も上がります。',
    characteristics: ['寝る直前まで働く', '切り替えが苦手', '責任感が強い', '睡眠を後回しにしがち'],
    tips: ['仕事の終了時間を決めて', '寝る1時間前からはオフモードに', '睡眠は投資と考えて'],
  },
  casual: {
    type: 'casual',
    title: '自由気ままタイプ',
    emoji: '🎲😴',
    routine: 'ルーティン度：★★☆☆☆',
    description: '就寝前の習慣が特に決まっていないタイプ。自由な分、睡眠の質にムラが出やすいかも。小さなルーティンを作ることで、睡眠が改善する可能性大！',
    characteristics: ['ルーティンがない', '気分次第', '不規則な就寝時間', '自由を好む'],
    tips: ['一つだけルーティンを決めてみて', '就寝時間を少し固定して', '寝室の環境を整えることから'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { ritualist: 0, entertainer: 0, workaholic: 0, casual: 0 };

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
