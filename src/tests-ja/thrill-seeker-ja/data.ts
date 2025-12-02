// スリル追求度診断
export const questions = [
  {
    id: 1,
    text: 'ジェットコースターについて',
    options: [
      { text: '大好き！最前列希望', type: 'extreme' },
      { text: '楽しい、乗りたい', type: 'high' },
      { text: '乗れるけど怖い', type: 'moderate' },
      { text: '絶対乗らない', type: 'low' },
    ],
  },
  {
    id: 2,
    text: 'ホラー映画やお化け屋敷は？',
    options: [
      { text: '大好き！ゾクゾクする', type: 'extreme' },
      { text: '楽しめる', type: 'high' },
      { text: 'ちょっと苦手', type: 'moderate' },
      { text: '見られない、行けない', type: 'low' },
    ],
  },
  {
    id: 3,
    text: 'エクストリームスポーツ（スカイダイビング、バンジージャンプなど）は？',
    options: [
      { text: '最高！生きている実感', type: 'extreme' },
      { text: 'やってみたい', type: 'high' },
      { text: '怖いけど興味はある', type: 'moderate' },
      { text: '絶対にしない', type: 'low' },
    ],
  },
  {
    id: 4,
    text: 'ギャンブルや賭け事について',
    options: [
      { text: 'スリルがたまらない', type: 'extreme' },
      { text: 'たまにするのは楽しい', type: 'high' },
      { text: '少額なら', type: 'moderate' },
      { text: '興味がない', type: 'low' },
    ],
  },
  {
    id: 5,
    text: '車やバイクのスピードについて',
    options: [
      { text: 'スピードを出すのが好き', type: 'extreme' },
      { text: 'たまにはスピードを楽しみたい', type: 'high' },
      { text: '安全運転派', type: 'moderate' },
      { text: '速いのは怖い', type: 'low' },
    ],
  },
  {
    id: 6,
    text: '締め切りギリギリの状況は？',
    options: [
      { text: 'アドレナリンが出て集中できる', type: 'extreme' },
      { text: '追い込まれると力が出る', type: 'high' },
      { text: 'ストレスだけど何とかする', type: 'moderate' },
      { text: '早めに終わらせたい', type: 'low' },
    ],
  },
  {
    id: 7,
    text: '高所恐怖症について',
    options: [
      { text: '高いところ大好き！', type: 'extreme' },
      { text: '平気、むしろ楽しい', type: 'high' },
      { text: '少し怖いけど大丈夫', type: 'moderate' },
      { text: '高いところは苦手', type: 'low' },
    ],
  },
  {
    id: 8,
    text: 'サプライズについて',
    options: [
      { text: '大好き！予測不能が楽しい', type: 'extreme' },
      { text: '嬉しいサプライズは好き', type: 'high' },
      { text: 'たまにはいいかな', type: 'moderate' },
      { text: '予定通りがいい', type: 'low' },
    ],
  },
  {
    id: 9,
    text: '危険なスポーツや活動について',
    options: [
      { text: '危険だからこそ魅力的', type: 'extreme' },
      { text: '安全対策すればOK', type: 'high' },
      { text: 'リスクは最小限に', type: 'moderate' },
      { text: '避ける', type: 'low' },
    ],
  },
  {
    id: 10,
    text: '人生にスリルは必要？',
    options: [
      { text: '絶対必要！刺激がないと退屈', type: 'extreme' },
      { text: '適度なスリルは人生を豊かに', type: 'high' },
      { text: 'たまにあればいい', type: 'moderate' },
      { text: '平穏が一番', type: 'low' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  level: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  extreme: {
    type: 'extreme',
    title: '究極のスリルシーカー',
    emoji: '🎢🔥',
    level: 'スリル追求度：★★★★★',
    description: '極限のスリルを求めるタイプ！アドレナリン全開の体験が生きている実感を与えてくれます。危険と隣り合わせでも、その興奮がたまらない！',
    characteristics: ['極限体験を求める', 'アドレナリン中毒', '恐怖を楽しめる', '刺激がないと退屈'],
    tips: ['安全第一は忘れずに', '保険はしっかり', 'スリルを追求しつつも命は大切に'],
  },
  high: {
    type: 'high',
    title: 'スリル愛好家',
    emoji: '⚡✨',
    level: 'スリル追求度：★★★★☆',
    description: 'スリルを楽しめるタイプ！ジェットコースターやちょっとした冒険が好き。適度な刺激で人生を楽しみ、新しい体験にも積極的です。',
    characteristics: ['スリルを楽しむ', '新しい体験好き', '適度な刺激を求める', '冒険心がある'],
    tips: ['バランスが良いスリル追求', '色々な体験を楽しんで', '安全に気をつけながら'],
  },
  moderate: {
    type: 'moderate',
    title: '程よいスリル派',
    emoji: '🎯😊',
    level: 'スリル追求度：★★★☆☆',
    description: '強すぎるスリルは苦手だけど、適度な刺激は楽しめるタイプ。安全を確保しながら、たまには小さな冒険を楽しみます。',
    characteristics: ['適度なスリルは好き', '安全を重視', 'バランス型', '無理はしない'],
    tips: ['自分のペースでスリルを', '小さな挑戦から始めて', '無理する必要はない'],
  },
  low: {
    type: 'low',
    title: '平穏追求タイプ',
    emoji: '🌸😌',
    level: 'スリル追求度：★★☆☆☆',
    description: '刺激よりも平穏を好むタイプ。スリルは苦手でも、それは個性！安心できる環境で、穏やかな幸せを見つけることができます。',
    characteristics: ['平穏を好む', 'スリルは苦手', '安定志向', '慎重派'],
    tips: ['無理にスリルを求めなくてOK', '自分らしい楽しみ方を', '穏やかな幸せを大切に'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { extreme: 0, high: 0, moderate: 0, low: 0 };

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
