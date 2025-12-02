// 友達との付き合い方診断 (우정 스타일 테스트)
export const questions = [
  {
    id: 1,
    text: '友達との約束、どのくらい前に決める？',
    options: [
      { text: '思いついたらすぐ連絡', type: 'spontaneous' },
      { text: '1週間くらい前', type: 'balanced' },
      { text: 'かなり前から計画', type: 'planner' },
      { text: '相手に合わせる', type: 'adaptive' },
    ],
  },
  {
    id: 2,
    text: '友達の数について、理想は？',
    options: [
      { text: '多ければ多いほどいい', type: 'spontaneous' },
      { text: '適度な人数がいい', type: 'balanced' },
      { text: '少数の親友がいればいい', type: 'planner' },
      { text: '深く考えたことない', type: 'adaptive' },
    ],
  },
  {
    id: 3,
    text: '友達が困っている時は？',
    options: [
      { text: 'すぐ駆けつける', type: 'spontaneous' },
      { text: 'できる範囲で助ける', type: 'balanced' },
      { text: 'じっくり話を聞いてアドバイス', type: 'planner' },
      { text: '相手が望む形でサポート', type: 'adaptive' },
    ],
  },
  {
    id: 4,
    text: '友達との連絡頻度は？',
    options: [
      { text: 'ほぼ毎日何かしら連絡', type: 'spontaneous' },
      { text: '週に数回', type: 'balanced' },
      { text: '用事がある時だけ', type: 'planner' },
      { text: '相手次第', type: 'adaptive' },
    ],
  },
  {
    id: 5,
    text: '新しい友達を作ることについて',
    options: [
      { text: '積極的に話しかける', type: 'spontaneous' },
      { text: '機会があれば', type: 'balanced' },
      { text: '慎重に時間をかけて', type: 'planner' },
      { text: '自然に任せる', type: 'adaptive' },
    ],
  },
  {
    id: 6,
    text: '友達との喧嘩、どう対処する？',
    options: [
      { text: 'すぐに話し合って解決', type: 'spontaneous' },
      { text: '少し冷却期間を置いてから', type: 'balanced' },
      { text: 'じっくり考えてから行動', type: 'planner' },
      { text: '相手の出方を見る', type: 'adaptive' },
    ],
  },
  {
    id: 7,
    text: '友達と過ごす時間は？',
    options: [
      { text: 'ワイワイ盛り上がりたい', type: 'spontaneous' },
      { text: '楽しくゆったり', type: 'balanced' },
      { text: '落ち着いて深い話', type: 'planner' },
      { text: 'その時の雰囲気で', type: 'adaptive' },
    ],
  },
  {
    id: 8,
    text: '友達へのプレゼントは？',
    options: [
      { text: '思いついたらすぐ買う', type: 'spontaneous' },
      { text: '予算内で喜びそうなもの', type: 'balanced' },
      { text: '時間をかけて選ぶ', type: 'planner' },
      { text: '相手の好みに合わせて', type: 'adaptive' },
    ],
  },
  {
    id: 9,
    text: 'グループ内でのあなたの役割は？',
    options: [
      { text: '盛り上げ役', type: 'spontaneous' },
      { text: '調整役', type: 'balanced' },
      { text: '相談役', type: 'planner' },
      { text: '特に役割は決まってない', type: 'adaptive' },
    ],
  },
  {
    id: 10,
    text: '理想の友達関係は？',
    options: [
      { text: '一緒にいて楽しい関係', type: 'spontaneous' },
      { text: '信頼できる関係', type: 'balanced' },
      { text: '深く理解し合える関係', type: 'planner' },
      { text: '自然体でいられる関係', type: 'adaptive' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  friendshipLevel: string;
  description: string;
  characteristics: string[];
  advice: string[];
}> = {
  spontaneous: {
    type: 'spontaneous',
    title: 'アクティブフレンドタイプ',
    emoji: '🎉👋',
    friendshipLevel: '社交性：★★★★★',
    description: '友達と過ごす時間が大好きな社交派！いつでも連絡を取り合い、一緒に楽しむことを大切にします。周りを明るくするムードメーカー的存在です。',
    characteristics: ['社交的', '行動力がある', '明るい', '友達が多い'],
    advice: ['たまには一人の時間も', '深い関係も大切に', '質より量にならないように'],
  },
  balanced: {
    type: 'balanced',
    title: 'バランスフレンドタイプ',
    emoji: '🤝✨',
    friendshipLevel: '社交性：★★★★☆',
    description: '友達との関係をバランスよく保てるタイプ。親しき仲にも礼儀ありを実践し、心地よい距離感で付き合えます。長続きする友情を築けるでしょう。',
    characteristics: ['バランス感覚', '信頼される', '安定している', '気配りができる'],
    advice: ['その調和を大切に', '新しい出会いにもオープンに', '自分の気持ちも大切に'],
  },
  planner: {
    type: 'planner',
    title: 'ディープフレンドタイプ',
    emoji: '💝🌟',
    friendshipLevel: '社交性：★★★☆☆',
    description: '量より質を重視するタイプ。少数の親友との深い絆を大切にします。友達のことを本当に理解し、頼れる存在になれるでしょう。',
    characteristics: ['深い絆を重視', '思慮深い', '一途', '信頼できる'],
    advice: ['新しい出会いも大切に', '心を開くことを恐れないで', '友達を信じてみて'],
  },
  adaptive: {
    type: 'adaptive',
    title: 'フレキシブルフレンドタイプ',
    emoji: '🌊😌',
    friendshipLevel: '社交性：★★★★☆',
    description: '相手に合わせて柔軟に付き合えるタイプ。どんな人とも心地よい関係を築けます。自然体で無理のない友情を大切にします。',
    characteristics: ['柔軟性がある', '適応力が高い', '自然体', '受容力がある'],
    advice: ['自分の意見も大切に', '時には主張することも', '自分らしさを忘れずに'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { spontaneous: 0, balanced: 0, planner: 0, adaptive: 0 };

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
