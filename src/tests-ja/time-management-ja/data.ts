// 時間管理タイプ診断 (시간 관리 타입 진단)
export const questions = [
  {
    id: 1,
    text: '締め切りに対するあなたのスタンスは？',
    options: [
      { text: '早めに終わらせて余裕を持つ', type: 'planner' },
      { text: 'スケジュール通りに進める', type: 'steady' },
      { text: '締め切り直前に本気出す', type: 'lastminute' },
      { text: '締め切り？何それ美味しいの？', type: 'chaotic' },
    ],
  },
  {
    id: 2,
    text: '朝の過ごし方は？',
    options: [
      { text: '早起きしてルーティンをこなす', type: 'planner' },
      { text: '決まった時間に起きて準備', type: 'steady' },
      { text: 'ギリギリまで寝てダッシュ', type: 'lastminute' },
      { text: '日によってバラバラ', type: 'chaotic' },
    ],
  },
  {
    id: 3,
    text: 'ToDoリストについて',
    options: [
      { text: '詳細に作成して管理', type: 'planner' },
      { text: 'シンプルなリストは作る', type: 'steady' },
      { text: '頭の中でなんとなく', type: 'lastminute' },
      { text: '作っても見ない、忘れる', type: 'chaotic' },
    ],
  },
  {
    id: 4,
    text: '約束の時間には？',
    options: [
      { text: '10分前には到着', type: 'planner' },
      { text: 'ちょうどか少し前', type: 'steady' },
      { text: 'ギリギリセーフ', type: 'lastminute' },
      { text: '遅刻常習犯かも…', type: 'chaotic' },
    ],
  },
  {
    id: 5,
    text: '予定が重なった時は？',
    options: [
      { text: '事前に調整して回避', type: 'planner' },
      { text: '優先順位をつけて対応', type: 'steady' },
      { text: 'なんとかなる精神で挑む', type: 'lastminute' },
      { text: 'パニック、どうしよう', type: 'chaotic' },
    ],
  },
  {
    id: 6,
    text: '長期プロジェクトの進め方は？',
    options: [
      { text: '計画を立てて毎日コツコツ', type: 'planner' },
      { text: 'マイルストーンを決めて進める', type: 'steady' },
      { text: '最初はゆっくり、終盤で追い込む', type: 'lastminute' },
      { text: '気分次第で進み具合がバラバラ', type: 'chaotic' },
    ],
  },
  {
    id: 7,
    text: '休日の予定は？',
    options: [
      { text: '事前に計画を立てる', type: 'planner' },
      { text: 'ゆるく予定を決める', type: 'steady' },
      { text: '当日の朝決める', type: 'lastminute' },
      { text: '気づいたら終わってる', type: 'chaotic' },
    ],
  },
  {
    id: 8,
    text: 'マルチタスクについて',
    options: [
      { text: '一つずつ片付ける派', type: 'planner' },
      { text: '関連するものはまとめて', type: 'steady' },
      { text: '同時進行で効率化', type: 'lastminute' },
      { text: 'あれこれ手を出して収拾つかない', type: 'chaotic' },
    ],
  },
  {
    id: 9,
    text: '1日の終わりに感じることは？',
    options: [
      { text: '予定通り完了、達成感', type: 'planner' },
      { text: 'まあまあ満足', type: 'steady' },
      { text: 'もっと時間があれば…', type: 'lastminute' },
      { text: '何してたっけ？', type: 'chaotic' },
    ],
  },
  {
    id: 10,
    text: '自分の時間管理を一言で言うと？',
    options: [
      { text: '計画的、効率重視', type: 'planner' },
      { text: 'バランス型、無理しない', type: 'steady' },
      { text: '追い込み型、火事場の馬鹿力', type: 'lastminute' },
      { text: '自由人、時間に縛られない', type: 'chaotic' },
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
  planner: {
    type: 'planner',
    title: '完璧プランナータイプ',
    emoji: '📊',
    percentage: '計画性 100%',
    description: '時間管理の達人！事前計画と効率的な実行で、締め切りに追われることはありません。余裕を持った行動で、ストレスフリーな毎日を過ごせます。',
    characteristics: ['計画的', '効率的', '余裕がある', '信頼される', 'ストレスフリー'],
    advice: '素晴らしい計画性！たまには計画を手放して、偶発性を楽しむのも良いですよ。',
  },
  steady: {
    type: 'steady',
    title: 'バランスキーパータイプ',
    emoji: '⚖️',
    percentage: 'バランス度 85%',
    description: '無理なく続けられるペースで時間を管理。完璧主義ではないけれど、やるべきことはちゃんとこなす。持続可能なスタイルで安定した成果を出せます。',
    characteristics: ['バランス型', '持続可能', '柔軟', '安定', '無理しない'],
    advice: 'いいバランス！少しだけ前倒しを意識すると、さらに余裕が生まれますよ。',
  },
  lastminute: {
    type: 'lastminute',
    title: '追い込みスプリンタータイプ',
    emoji: '🏃',
    percentage: '追い込み力 95%',
    description: '締め切り直前に本領発揮！プレッシャーがかかると集中力が爆発するタイプ。ギリギリだけど、なぜか帳尻を合わせる謎の能力の持ち主。',
    characteristics: ['瞬発力', '集中力', 'プレッシャーに強い', '本番に強い', 'ギリギリセーフ'],
    advice: 'その集中力は武器！でも、もう少し余裕を持つと心臓に優しいですよ。',
  },
  chaotic: {
    type: 'chaotic',
    title: '自由奔放アーティストタイプ',
    emoji: '🌀',
    percentage: '自由度 100%',
    description: '時間に縛られない自由人！計画通りにいかないことも多いけど、独自のリズムで生きています。創造性や直感を大切にするタイプかも。',
    characteristics: ['自由', '直感的', 'マイペース', '創造的', '予測不能'],
    advice: 'その自由さも魅力！でも、最低限の締め切りだけは守ると周りも安心しますよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { planner: 0, steady: 0, lastminute: 0, chaotic: 0 };

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
