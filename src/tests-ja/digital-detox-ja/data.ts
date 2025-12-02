// デジタルデトックス必要度診断 (디지털 디톡스 필요도 테스트)
export const questions = [
  {
    id: 1,
    text: '朝起きてまずすることは？',
    options: [
      { text: 'スマホを確認', type: 'high' },
      { text: 'SNSをチェック', type: 'veryhigh' },
      { text: '顔を洗う・トイレに行く', type: 'low' },
      { text: 'ゆっくり伸びをする', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'スマホのバッテリーが切れたら？',
    options: [
      { text: '不安になる', type: 'veryhigh' },
      { text: '落ち着かない', type: 'high' },
      { text: '困るけど何とかなる', type: 'low' },
      { text: '特に気にならない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '食事中のスマホ使用は？',
    options: [
      { text: '常に触っている', type: 'veryhigh' },
      { text: '通知が来たら見る', type: 'high' },
      { text: '緊急時以外は見ない', type: 'low' },
      { text: '食事中は触らない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '就寝前のスマホ習慣は？',
    options: [
      { text: '眠くなるまでずっと見る', type: 'veryhigh' },
      { text: '30分〜1時間は見る', type: 'high' },
      { text: '軽くチェックする程度', type: 'low' },
      { text: '寝室に持ち込まない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '1日のスクリーンタイムは？',
    options: [
      { text: '8時間以上', type: 'veryhigh' },
      { text: '5〜7時間', type: 'high' },
      { text: '3〜4時間', type: 'low' },
      { text: '2時間以下', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: 'SNSの通知設定は？',
    options: [
      { text: '全てオンにしている', type: 'veryhigh' },
      { text: '重要なものはオン', type: 'high' },
      { text: 'ほとんどオフ', type: 'low' },
      { text: '通知は全てオフ', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '休日のデジタル機器との付き合いは？',
    options: [
      { text: '平日と変わらず使う', type: 'veryhigh' },
      { text: '少し多めに使う', type: 'high' },
      { text: '意識して減らす', type: 'low' },
      { text: 'デジタルフリーの日を作る', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '目の疲れや肩こりは？',
    options: [
      { text: '常に感じる', type: 'veryhigh' },
      { text: 'よく感じる', type: 'high' },
      { text: 'たまに感じる', type: 'low' },
      { text: 'ほとんど感じない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '自然の中で過ごす時間は？',
    options: [
      { text: 'ほとんどない', type: 'veryhigh' },
      { text: '月に数回程度', type: 'high' },
      { text: '週に1回は外に出る', type: 'low' },
      { text: '頻繁に自然を楽しむ', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'デジタル機器なしで1日過ごせる？',
    options: [
      { text: '絶対無理', type: 'veryhigh' },
      { text: 'かなり辛い', type: 'high' },
      { text: 'やろうと思えばできる', type: 'low' },
      { text: '問題なくできる', type: 'minimal' },
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
  detoxAdvice: string;
}> = {
  veryhigh: {
    type: 'veryhigh',
    title: 'デジタル依存危険域',
    emoji: '🚨',
    percentage: 'デトックス必要度 95%',
    description: 'デジタル機器との距離を見直す時期です！スマホが手放せない状態は、心身に影響を与えている可能性があります。',
    characteristics: ['常時接続', '通知過敏', '睡眠不足', '目の疲れ', '焦燥感'],
    detoxAdvice: 'まずは1日1時間のオフライン時間を作ってみましょう',
  },
  high: {
    type: 'high',
    title: 'デジタル疲れ気味',
    emoji: '😓',
    percentage: 'デトックス必要度 70%',
    description: 'デジタル機器の使用がやや多めです。意識的に休憩を取り入れることで、より快適な毎日を過ごせるでしょう。',
    characteristics: ['習慣的使用', '通知チェック', '眼精疲労', 'ながらスマホ', '依存傾向'],
    detoxAdvice: '寝る1時間前からスマホを遠ざけてみては',
  },
  low: {
    type: 'low',
    title: 'バランス良好',
    emoji: '👍',
    percentage: 'デトックス必要度 40%',
    description: 'デジタル機器と適度な距離を保てています！必要な時に使い、オフの時間も大切にできるバランス感覚の持ち主。',
    characteristics: ['適度な距離感', '自己管理', 'オフ意識', '健康的', 'メリハリ'],
    detoxAdvice: '今のバランスを維持しつつ、さらにオフライン時間を楽しんで',
  },
  minimal: {
    type: 'minimal',
    title: 'デジタルミニマリスト',
    emoji: '🌿',
    percentage: 'デトックス必要度 15%',
    description: 'デジタル機器に縛られない自由な生活を送っています！現代社会では珍しい、健康的なデジタルとの付き合い方です。',
    characteristics: ['自然志向', 'オフライン重視', '心身健康', '自己管理', 'マインドフル'],
    detoxAdvice: 'その姿勢を周りにもシェアしてあげてください',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { veryhigh: 0, high: 0, low: 0, minimal: 0 };

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
