// 夢を見る頻度診断
export const questions = [
  {
    id: 1,
    text: '夢を覚えている頻度は？',
    options: [
      { text: 'ほぼ毎日覚えている', type: 'frequent' },
      { text: '週に数回は覚えている', type: 'regular' },
      { text: '月に数回程度', type: 'occasional' },
      { text: 'ほとんど覚えていない', type: 'rare' },
    ],
  },
  {
    id: 2,
    text: '夢の内容はどれくらい鮮明？',
    options: [
      { text: 'まるで現実のように鮮明', type: 'frequent' },
      { text: 'かなり詳しく覚えている', type: 'regular' },
      { text: '断片的に覚えている', type: 'occasional' },
      { text: 'ぼんやりとしか覚えていない', type: 'rare' },
    ],
  },
  {
    id: 3,
    text: '夢の中で「これは夢だ」と気づくことは？',
    options: [
      { text: 'よくある（明晰夢）', type: 'frequent' },
      { text: '時々ある', type: 'regular' },
      { text: 'たまにある', type: 'occasional' },
      { text: 'ほとんどない', type: 'rare' },
    ],
  },
  {
    id: 4,
    text: '夢日記をつけたことは？',
    options: [
      { text: '継続的につけている', type: 'frequent' },
      { text: '過去につけていた', type: 'regular' },
      { text: '興味はある', type: 'occasional' },
      { text: '考えたこともない', type: 'rare' },
    ],
  },
  {
    id: 5,
    text: '悪夢を見ることは？',
    options: [
      { text: 'よくある', type: 'frequent' },
      { text: '時々ある', type: 'regular' },
      { text: 'たまにある', type: 'occasional' },
      { text: 'ほとんどない', type: 'rare' },
    ],
  },
  {
    id: 6,
    text: '繰り返し見る夢はある？',
    options: [
      { text: '何度も同じ夢を見る', type: 'frequent' },
      { text: '似たようなテーマの夢がある', type: 'regular' },
      { text: 'たまにある気がする', type: 'occasional' },
      { text: '特にない', type: 'rare' },
    ],
  },
  {
    id: 7,
    text: '夢の中で感情を強く感じることは？',
    options: [
      { text: '目覚めても残るほど強く感じる', type: 'frequent' },
      { text: 'かなり感情的になる', type: 'regular' },
      { text: '少し感じる', type: 'occasional' },
      { text: 'あまり感じない', type: 'rare' },
    ],
  },
  {
    id: 8,
    text: '夢に色はついている？',
    options: [
      { text: 'いつもカラフル', type: 'frequent' },
      { text: '色がついていることが多い', type: 'regular' },
      { text: '時々色がある', type: 'occasional' },
      { text: '白黒かわからない', type: 'rare' },
    ],
  },
  {
    id: 9,
    text: '夢の内容を人に話すことは？',
    options: [
      { text: 'よく話す、面白い夢が多い', type: 'frequent' },
      { text: '印象的な夢は話す', type: 'regular' },
      { text: 'たまに話す', type: 'occasional' },
      { text: 'ほとんど話さない', type: 'rare' },
    ],
  },
  {
    id: 10,
    text: '夢と現実が混同することは？',
    options: [
      { text: '時々ある、夢が現実味を帯びている', type: 'frequent' },
      { text: 'たまにある', type: 'regular' },
      { text: 'ほとんどない', type: 'occasional' },
      { text: '全くない', type: 'rare' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  frequency: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  frequent: {
    type: 'frequent',
    title: '夢見る人・ドリーマー',
    emoji: '🌟💭',
    frequency: '夢頻度：★★★★★',
    description: 'あなたは夢の世界と深くつながっている人。毎晩のように鮮明な夢を見て、その内容を覚えています。創造性が豊かで、無意識の世界からメッセージを受け取りやすいタイプ。',
    characteristics: ['毎日のように夢を見る', '夢が鮮明', '明晰夢を見ることも', '感受性が豊か'],
    tips: ['夢日記をつけてみて', '夢からインスピレーションを得て', '睡眠の質も大切に'],
  },
  regular: {
    type: 'regular',
    title: '定期的な夢見人',
    emoji: '🌙✨',
    frequency: '夢頻度：★★★★☆',
    description: '定期的に夢を見て覚えているタイプ。印象的な夢は鮮明に記憶に残り、時には夢の意味を考えることも。バランスの取れた夢見体験を持っています。',
    characteristics: ['週に数回夢を見る', '印象的な夢を覚えている', '夢に興味がある', '創造性がある'],
    tips: ['夢のパターンを観察してみて', '寝る前のリラックスを大切に', '夢の象徴を調べてみても面白い'],
  },
  occasional: {
    type: 'occasional',
    title: '時々の夢見人',
    emoji: '🌓💤',
    frequency: '夢頻度：★★★☆☆',
    description: 'たまに夢を覚えているタイプ。夢を見ていても忘れてしまうことが多いかも。ストレスや睡眠状態によって夢の頻度が変わることがあります。',
    characteristics: ['月に数回夢を覚えている', '断片的な記憶', '夢への関心は普通', '現実重視'],
    tips: ['起きた直後に夢を思い出す練習を', '睡眠の質を上げると夢も変わるかも', '興味があれば夢日記を試して'],
  },
  rare: {
    type: 'rare',
    title: '夢をあまり見ないタイプ',
    emoji: '😴🌑',
    frequency: '夢頻度：★★☆☆☆',
    description: '夢をほとんど覚えていないタイプ。実は誰でも夢を見ていますが、覚えていないだけかも。深い睡眠が取れている証拠でもあります。',
    characteristics: ['夢をほとんど覚えていない', '熟睡タイプ', '現実的な思考', '睡眠効率が良い'],
    tips: ['夢を見ないわけではないかも', '興味があれば起床直後にメモを', '今のまま良い睡眠を続けて'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { frequent: 0, regular: 0, occasional: 0, rare: 0 };

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
