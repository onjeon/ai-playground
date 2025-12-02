// 緊急時行動タイプ診断
export const questions = [
  {
    id: 1,
    text: '地震が起きたら最初にすることは？',
    options: [
      { text: 'テーブルの下に隠れる', type: 'textbook' },
      { text: '家族の安全を確認する', type: 'protector' },
      { text: '出口を確保する', type: 'survivor' },
      { text: '固まってしまう', type: 'freeze' },
    ],
  },
  {
    id: 2,
    text: '火災報知器が鳴ったら？',
    options: [
      { text: '避難経路に従って避難', type: 'textbook' },
      { text: '周りの人に声をかけて一緒に避難', type: 'protector' },
      { text: '状況を見て最適な逃げ道を選ぶ', type: 'survivor' },
      { text: 'どうしていいかわからない', type: 'freeze' },
    ],
  },
  {
    id: 3,
    text: '目の前で人が倒れたら？',
    options: [
      { text: '119番して救急車を呼ぶ', type: 'textbook' },
      { text: 'すぐに駆け寄って声をかける', type: 'protector' },
      { text: '周りを見て助けを呼ぶ', type: 'survivor' },
      { text: '何もできず立ち尽くす', type: 'freeze' },
    ],
  },
  {
    id: 4,
    text: '災害時の避難訓練への参加は？',
    options: [
      { text: '真剣に参加している', type: 'textbook' },
      { text: '家族も一緒に確認する', type: 'protector' },
      { text: '自分なりに考えながら参加', type: 'survivor' },
      { text: '正直あまり真剣じゃない', type: 'freeze' },
    ],
  },
  {
    id: 5,
    text: '緊急時のマニュアルについて？',
    options: [
      { text: '熟知している', type: 'textbook' },
      { text: '家族と共有している', type: 'protector' },
      { text: '基本を押さえつつ臨機応変', type: 'survivor' },
      { text: 'よく知らない', type: 'freeze' },
    ],
  },
  {
    id: 6,
    text: '電車で急病人が出たら？',
    options: [
      { text: '非常ボタンを押す・車掌に連絡', type: 'textbook' },
      { text: '病人のそばで介助する', type: 'protector' },
      { text: 'できることを探して動く', type: 'survivor' },
      { text: '他の人が対応するのを見ている', type: 'freeze' },
    ],
  },
  {
    id: 7,
    text: '夜中に災害警報が鳴ったら？',
    options: [
      { text: 'すぐに避難準備を始める', type: 'textbook' },
      { text: '家族を起こして一緒に行動', type: 'protector' },
      { text: '情報を集めて判断する', type: 'survivor' },
      { text: 'もう少し様子を見る', type: 'freeze' },
    ],
  },
  {
    id: 8,
    text: '緊急時に一番大切だと思うことは？',
    options: [
      { text: '正しい行動をとること', type: 'textbook' },
      { text: '大切な人を守ること', type: 'protector' },
      { text: '生き延びること', type: 'survivor' },
      { text: 'パニックにならないこと', type: 'freeze' },
    ],
  },
  {
    id: 9,
    text: '緊急時の備えについて？',
    options: [
      { text: '防災グッズを揃えている', type: 'textbook' },
      { text: '家族との連絡方法を決めている', type: 'protector' },
      { text: 'いざという時動ける自信がある', type: 'survivor' },
      { text: 'あまり準備していない', type: 'freeze' },
    ],
  },
  {
    id: 10,
    text: '緊急時の自分を表すと？',
    options: [
      { text: 'マニュアル通りに動ける', type: 'textbook' },
      { text: '人を守りたい', type: 'protector' },
      { text: '臨機応変に対応できる', type: 'survivor' },
      { text: '正直自信がない', type: 'freeze' },
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
  emergencyTip: string;
}> = {
  textbook: {
    type: 'textbook',
    title: 'マニュアル遵守タイプ',
    emoji: '📖',
    percentage: '正確性 95%',
    description: '緊急時のマニュアルを熟知し、正しい行動をとれるタイプ！訓練や準備をしっかりしており、適切な対応ができます。',
    characteristics: ['準備万端', '正確', '冷静', '知識豊富', '信頼できる'],
    emergencyTip: '想定外の事態にも柔軟に対応を',
  },
  protector: {
    type: 'protector',
    title: '守護者タイプ',
    emoji: '🛡️',
    percentage: '保護本能 92%',
    description: '家族や周りの人を守ることを第一に考えるタイプ！大切な人の安全を確保するために動きます。',
    characteristics: ['保護本能', '責任感', '勇敢', '思いやり', 'リーダー'],
    emergencyTip: '自分の安全も忘れずに',
  },
  survivor: {
    type: 'survivor',
    title: 'サバイバータイプ',
    emoji: '🏃',
    percentage: '適応力 88%',
    description: '状況に応じて臨機応変に対応できるタイプ！本能的に最善の行動を選び、生き延びる力があります。',
    characteristics: ['臨機応変', '判断力', '本能的', '適応力', 'タフ'],
    emergencyTip: '基本的なマニュアルも確認しておこう',
  },
  freeze: {
    type: 'freeze',
    title: '模索中タイプ',
    emoji: '🌀',
    percentage: '成長余地 100%',
    description: '緊急時の対応にまだ自信がないタイプ。準備や訓練を通じて、対応力を高めていく余地があります。',
    characteristics: ['素直', '慎重', '成長途上', '真面目', '潜在力'],
    emergencyTip: '小さな準備から始めてみよう',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { textbook: 0, protector: 0, survivor: 0, freeze: 0 };

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
