// スピリチュアルタイプ診断
export const questions = [
  {
    id: 1,
    text: '初めて会った人に対して感じることがある？',
    options: [
      { text: 'オーラや雰囲気を感じる', type: 'sensitive' },
      { text: '直感で相性がわかる', type: 'intuitive' },
      { text: '特に何も感じない', type: 'grounded' },
      { text: '論理的に観察する', type: 'analytical' },
    ],
  },
  {
    id: 2,
    text: '不思議な体験をしたことは？',
    options: [
      { text: 'よくある', type: 'sensitive' },
      { text: '何度かある', type: 'intuitive' },
      { text: 'あまりない', type: 'grounded' },
      { text: '偶然だと思う', type: 'analytical' },
    ],
  },
  {
    id: 3,
    text: '瞑想やマインドフルネスについて？',
    options: [
      { text: '日常的に実践している', type: 'sensitive' },
      { text: '興味があり時々する', type: 'intuitive' },
      { text: 'やったことがない', type: 'grounded' },
      { text: '科学的効果に興味', type: 'analytical' },
    ],
  },
  {
    id: 4,
    text: '夢をよく覚えている？',
    options: [
      { text: '鮮明に覚えていて意味を考える', type: 'sensitive' },
      { text: '印象的な夢は覚えている', type: 'intuitive' },
      { text: 'あまり覚えていない', type: 'grounded' },
      { text: '脳の情報整理だと思う', type: 'analytical' },
    ],
  },
  {
    id: 5,
    text: 'パワーストーンについてどう思う？',
    options: [
      { text: 'エネルギーを感じる', type: 'sensitive' },
      { text: 'お守りとして持っている', type: 'intuitive' },
      { text: 'きれいな石だと思う', type: 'grounded' },
      { text: 'プラシーボ効果', type: 'analytical' },
    ],
  },
  {
    id: 6,
    text: '「シンクロニシティ」を経験したことは？',
    options: [
      { text: 'よく意味のある偶然が起きる', type: 'sensitive' },
      { text: '時々不思議な一致がある', type: 'intuitive' },
      { text: 'あまり意識しない', type: 'grounded' },
      { text: '確率の問題', type: 'analytical' },
    ],
  },
  {
    id: 7,
    text: '自然の中にいると感じることは？',
    options: [
      { text: '宇宙との一体感', type: 'sensitive' },
      { text: '心が浄化される', type: 'intuitive' },
      { text: 'リフレッシュできる', type: 'grounded' },
      { text: '健康に良い', type: 'analytical' },
    ],
  },
  {
    id: 8,
    text: 'スピリチュアル系の本や動画は？',
    options: [
      { text: 'よく見る・読む', type: 'sensitive' },
      { text: '興味があれば見る', type: 'intuitive' },
      { text: 'あまり見ない', type: 'grounded' },
      { text: '懐疑的に見る', type: 'analytical' },
    ],
  },
  {
    id: 9,
    text: '人生の使命やソウルメイトを信じる？',
    options: [
      { text: '強く信じている', type: 'sensitive' },
      { text: 'あるかもしれない', type: 'intuitive' },
      { text: 'よくわからない', type: 'grounded' },
      { text: '概念として疑問', type: 'analytical' },
    ],
  },
  {
    id: 10,
    text: '目に見えない世界について？',
    options: [
      { text: '確実に存在する', type: 'sensitive' },
      { text: '何かはあると思う', type: 'intuitive' },
      { text: 'あまり考えない', type: 'grounded' },
      { text: '証明されていない', type: 'analytical' },
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
  guidance: string;
}> = {
  sensitive: {
    type: 'sensitive',
    title: '高感度スピリチュアルタイプ',
    emoji: '🌟',
    percentage: 'スピ感度 98%',
    description: '目に見えない世界との繋がりを強く感じるあなた。オーラやエネルギーを感じ取る能力があり、スピリチュアルな体験を日常的にしています。',
    characteristics: ['高い感受性', '直感力', 'エネルギー感知', '共感能力', '神秘体験'],
    guidance: 'グラウンディングを大切に。現実とのバランスも意識して',
  },
  intuitive: {
    type: 'intuitive',
    title: '直感派スピリチュアルタイプ',
    emoji: '✨',
    percentage: 'スピ感度 70%',
    description: '直感を大切にし、スピリチュアルな世界に興味があるあなた。完全には信じ切らないけど、不思議な力があることは認めています。',
    characteristics: ['直感重視', 'オープンマインド', '探求心', 'バランス感覚', '好奇心'],
    guidance: '直感をもっと信じてみて。メッセージを見逃さないで',
  },
  grounded: {
    type: 'grounded',
    title: '地に足タイプ',
    emoji: '🌍',
    percentage: 'スピ感度 30%',
    description: '現実世界を中心に生きるあなた。スピリチュアルなことにはあまり関心がなく、目に見えるものを大切にします。堅実で安定志向。',
    characteristics: ['現実重視', '安定志向', '堅実', '実践的', '地に足がついている'],
    guidance: 'たまには目に見えない世界にも目を向けてみては？',
  },
  analytical: {
    type: 'analytical',
    title: '分析派タイプ',
    emoji: '🔬',
    percentage: 'スピ感度 10%',
    description: '論理と科学を重視するあなた。スピリチュアルな現象も科学的に説明できると考えています。懐疑的だけど、完全否定はしない知的探求者。',
    characteristics: ['論理的', '科学重視', '懐疑的', '知的好奇心', '分析力'],
    guidance: '科学で説明できないことも世界にはある。少し心を開いてみて',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sensitive: 0, intuitive: 0, grounded: 0, analytical: 0 };

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
