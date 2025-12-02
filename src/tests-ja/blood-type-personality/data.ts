// 血液型性格診断テスト (혈액형 성격 진단)
export const questions = [
  {
    id: 1,
    text: '約束の時間に遅れそうな時、あなたは？',
    options: [
      { text: '必ず連絡を入れて謝る', type: 'A' },
      { text: 'とりあえず急いで向かう', type: 'B' },
      { text: '冷静に状況を分析して対応', type: 'AB' },
      { text: 'まあなんとかなるでしょ', type: 'O' },
    ],
  },
  {
    id: 2,
    text: '友達との旅行計画を立てる時は？',
    options: [
      { text: '細かくスケジュールを決める', type: 'A' },
      { text: 'その場のノリで決める', type: 'B' },
      { text: '大まかな計画と自由時間を両立', type: 'AB' },
      { text: 'リーダーシップを取って決める', type: 'O' },
    ],
  },
  {
    id: 3,
    text: '失敗した時の反応は？',
    options: [
      { text: 'しばらく落ち込んで反省する', type: 'A' },
      { text: 'すぐ忘れて次に進む', type: 'B' },
      { text: '原因を分析して改善策を考える', type: 'AB' },
      { text: '「まあいいか」と楽観的に考える', type: 'O' },
    ],
  },
  {
    id: 4,
    text: '好きな人へのアプローチは？',
    options: [
      { text: 'じっくり様子を見てから行動', type: 'A' },
      { text: '気持ちが高まったら即行動', type: 'B' },
      { text: '相手の反応を見ながら慎重に', type: 'AB' },
      { text: '積極的にアピール', type: 'O' },
    ],
  },
  {
    id: 5,
    text: '仕事や作業のスタイルは？',
    options: [
      { text: '計画通りにコツコツ進める', type: 'A' },
      { text: '気分が乗った時に集中してやる', type: 'B' },
      { text: '効率的な方法を考えてから着手', type: 'AB' },
      { text: '目標に向かって一気に進む', type: 'O' },
    ],
  },
  {
    id: 6,
    text: 'ストレス解消法は？',
    options: [
      { text: '一人でゆっくり過ごす', type: 'A' },
      { text: '好きなことに没頭する', type: 'B' },
      { text: '趣味や芸術に触れる', type: 'AB' },
      { text: '友達とワイワイ騒ぐ', type: 'O' },
    ],
  },
  {
    id: 7,
    text: 'グループでの立ち位置は？',
    options: [
      { text: 'サポート役・調整役', type: 'A' },
      { text: 'ムードメーカー', type: 'B' },
      { text: '参謀・アドバイザー', type: 'AB' },
      { text: 'リーダー・中心人物', type: 'O' },
    ],
  },
  {
    id: 8,
    text: '部屋の片付けは？',
    options: [
      { text: 'いつも整理整頓されている', type: 'A' },
      { text: '散らかっているけど場所は分かる', type: 'B' },
      { text: 'こだわりの配置がある', type: 'AB' },
      { text: '大雑把だけど必要な時に片付ける', type: 'O' },
    ],
  },
  {
    id: 9,
    text: '人間関係で大切にすることは？',
    options: [
      { text: '信頼と誠実さ', type: 'A' },
      { text: '楽しさと自由', type: 'B' },
      { text: '適度な距離感', type: 'AB' },
      { text: '仲間意識と絆', type: 'O' },
    ],
  },
  {
    id: 10,
    text: '自分を一言で表すと？',
    options: [
      { text: '真面目で几帳面', type: 'A' },
      { text: 'マイペースで自由', type: 'B' },
      { text: '冷静で合理的', type: 'AB' },
      { text: '明るくて情熱的', type: 'O' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  personality: string[];
  loveStyle: string;
  compatibility: string;
}> = {
  A: {
    type: 'A',
    title: 'A型 - 几帳面な努力家',
    emoji: '🅰️',
    description: '真面目で責任感が強く、何事にも丁寧に取り組むあなた。計画性があり、細かいところまで気を配れる几帳面さが魅力です。',
    personality: ['真面目', '几帳面', '慎重', '気配り上手', '責任感が強い'],
    loveStyle: '一途で真剣な恋愛をするタイプ。相手を大切にし、長く続く関係を築きます。',
    compatibility: '相性が良い血液型：A型、O型',
  },
  B: {
    type: 'B',
    title: 'B型 - 自由奔放なマイペース',
    emoji: '🅱️',
    description: '自分のペースを大切にし、好きなことには没頭するあなた。独創的なアイデアと行動力で周りを驚かせます。',
    personality: ['マイペース', '独創的', '好奇心旺盛', '正直', '集中力がある'],
    loveStyle: '自然体で付き合えるタイプ。束縛を嫌い、お互いの自由を尊重する関係を好みます。',
    compatibility: '相性が良い血液型：B型、O型',
  },
  AB: {
    type: 'AB',
    title: 'AB型 - クールな天才肌',
    emoji: '🆎',
    description: '冷静な判断力と独特の感性を持つあなた。合理的でありながら芸術的な一面も持つミステリアスな魅力があります。',
    personality: ['冷静', '合理的', '独特', '多才', 'ミステリアス'],
    loveStyle: '理想が高く、精神的なつながりを重視。深い信頼関係を築けるパートナーを求めます。',
    compatibility: '相性が良い血液型：AB型、O型',
  },
  O: {
    type: 'O',
    title: 'O型 - 情熱的なリーダー',
    emoji: '🅾️',
    description: 'おおらかで社交的、リーダーシップを発揮するあなた。ポジティブなエネルギーで周りを引っ張る存在です。',
    personality: ['おおらか', '社交的', 'ポジティブ', 'リーダーシップ', '情熱的'],
    loveStyle: '積極的にアプローチするタイプ。一度好きになると一途で、情熱的な恋愛をします。',
    compatibility: '相性が良い血液型：全血液型と好相性！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { A: 0, B: 0, AB: 0, O: 0 };

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
