// ブランド忠誠度診断 (브랜드 충성도 테스트)
export const questions = [
  {
    id: 1,
    text: 'お気に入りのブランドがある？',
    options: [
      { text: '絶対にこのブランド！', type: 'loyalist' },
      { text: 'いくつかお気に入りがある', type: 'preferrer' },
      { text: '特に決まっていない', type: 'explorer' },
      { text: 'ブランドは気にしない', type: 'pragmatist' },
    ],
  },
  {
    id: 2,
    text: 'いつも買うブランドが値上げしたら？',
    options: [
      { text: 'それでも買い続ける', type: 'loyalist' },
      { text: '悩むけど買う', type: 'preferrer' },
      { text: '他のブランドを探す', type: 'explorer' },
      { text: '安い方を買う', type: 'pragmatist' },
    ],
  },
  {
    id: 3,
    text: '新しいブランドを試すことは？',
    options: [
      { text: 'あまりしない', type: 'loyalist' },
      { text: '評判が良ければ試す', type: 'preferrer' },
      { text: '新しいもの好き', type: 'explorer' },
      { text: '安ければ試す', type: 'pragmatist' },
    ],
  },
  {
    id: 4,
    text: 'ブランドの会員プログラムは？',
    options: [
      { text: '複数登録している', type: 'loyalist' },
      { text: 'よく使うところは登録', type: 'preferrer' },
      { text: 'あまり登録していない', type: 'explorer' },
      { text: '興味がない', type: 'pragmatist' },
    ],
  },
  {
    id: 5,
    text: 'ブランドのSNSやニュースは？',
    options: [
      { text: 'フォローして情報収集', type: 'loyalist' },
      { text: '気になるものはチェック', type: 'preferrer' },
      { text: 'たまに見る程度', type: 'explorer' },
      { text: '興味がない', type: 'pragmatist' },
    ],
  },
  {
    id: 6,
    text: '好きなブランドを人に勧める？',
    options: [
      { text: 'よく勧める', type: 'loyalist' },
      { text: '聞かれたら教える', type: 'preferrer' },
      { text: 'あまり勧めない', type: 'explorer' },
      { text: 'ブランドの話はしない', type: 'pragmatist' },
    ],
  },
  {
    id: 7,
    text: 'ブランドが不祥事を起こしたら？',
    options: [
      { text: '内容による', type: 'loyalist' },
      { text: 'ちょっと考える', type: 'preferrer' },
      { text: '他に乗り換える', type: 'explorer' },
      { text: 'もともと気にしていない', type: 'pragmatist' },
    ],
  },
  {
    id: 8,
    text: 'ブランドの歴史やストーリーは？',
    options: [
      { text: '興味がある・調べる', type: 'loyalist' },
      { text: '知っていると親近感', type: 'preferrer' },
      { text: 'あまり興味がない', type: 'explorer' },
      { text: '全く興味がない', type: 'pragmatist' },
    ],
  },
  {
    id: 9,
    text: '同じカテゴリの商品を買う時は？',
    options: [
      { text: 'いつも同じブランド', type: 'loyalist' },
      { text: '基本は同じ、たまに変える', type: 'preferrer' },
      { text: 'その時の気分で', type: 'explorer' },
      { text: '安いものを買う', type: 'pragmatist' },
    ],
  },
  {
    id: 10,
    text: 'ブランドとの関係性は？',
    options: [
      { text: 'ファンとして応援したい', type: 'loyalist' },
      { text: '良い商品を提供してくれる存在', type: 'preferrer' },
      { text: '特に意識していない', type: 'explorer' },
      { text: '商品が良ければそれでいい', type: 'pragmatist' },
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
  brandAdvice: string;
}> = {
  loyalist: {
    type: 'loyalist',
    title: 'ブランドロイヤリスト',
    emoji: '❤️',
    percentage: 'ブランド忠誠度 95%',
    description: 'お気に入りブランドへの愛情は揺るぎない！品質への信頼と愛着で、長期的な関係を築いています。',
    characteristics: ['忠誠心', '信頼', '一途', 'ファン気質', '品質重視'],
    brandAdvice: 'たまには新しいブランドも試してみると発見があるかも',
  },
  preferrer: {
    type: 'preferrer',
    title: 'ブランド好感派',
    emoji: '👍',
    percentage: 'ブランド好感度 75%',
    description: 'いくつかのお気に入りブランドがあるタイプ。信頼できるブランドを使いながらも、柔軟に選択できます。',
    characteristics: ['バランス型', '柔軟性', '信頼重視', '比較検討', '経験値'],
    brandAdvice: 'お気に入りブランドの新商品もチェックしてみては',
  },
  explorer: {
    type: 'explorer',
    title: 'ブランド探検家',
    emoji: '🔍',
    percentage: '探索度 80%',
    description: '新しいブランドとの出会いを楽しむタイプ！トレンドに敏感で、様々な選択肢から最適なものを見つけます。',
    characteristics: ['好奇心旺盛', 'トレンド敏感', '冒険心', '多様性', '新しいもの好き'],
    brandAdvice: 'お気に入りが見つかったら深掘りしてみるのも楽しいですよ',
  },
  pragmatist: {
    type: 'pragmatist',
    title: '実用主義者',
    emoji: '🎯',
    percentage: '実用重視度 90%',
    description: 'ブランドより機能や価格を重視するタイプ。ブランドに左右されず、実質的な価値で判断する合理的な消費者。',
    characteristics: ['実用主義', '合理的', 'コスパ重視', '本質派', '冷静'],
    brandAdvice: 'ブランドの背景を知ると、より良い選択ができることも',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { loyalist: 0, preferrer: 0, explorer: 0, pragmatist: 0 };

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
