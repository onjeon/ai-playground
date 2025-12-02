// 料理スキル診断
export const questions = [
  {
    id: 1,
    text: '冷蔵庫に食材が少ない時は？',
    options: [
      { text: 'あるもので何か作る', type: 'creative' },
      { text: 'レシピ通りの材料を買いに行く', type: 'precise' },
      { text: '冷凍食品やレトルトを活用', type: 'practical' },
      { text: 'デリバリーを注文', type: 'beginner' },
    ],
  },
  {
    id: 2,
    text: 'レシピを見る時は？',
    options: [
      { text: '参考程度にアレンジする', type: 'creative' },
      { text: '分量まで正確に計る', type: 'precise' },
      { text: '簡単なレシピだけ見る', type: 'practical' },
      { text: 'レシピがないと作れない', type: 'beginner' },
    ],
  },
  {
    id: 3,
    text: '料理の味付けは？',
    options: [
      { text: '目分量で感覚的に', type: 'creative' },
      { text: '計量スプーンで正確に', type: 'precise' },
      { text: '市販のタレや素を使う', type: 'practical' },
      { text: 'いつも味が安定しない', type: 'beginner' },
    ],
  },
  {
    id: 4,
    text: '得意な料理ジャンルは？',
    options: [
      { text: '創作料理やフュージョン', type: 'creative' },
      { text: '本格的な和食や洋食', type: 'precise' },
      { text: '時短・簡単レシピ', type: 'practical' },
      { text: 'カレーや炒め物くらい', type: 'beginner' },
    ],
  },
  {
    id: 5,
    text: '料理を作る頻度は？',
    options: [
      { text: 'ほぼ毎日、趣味として楽しむ', type: 'creative' },
      { text: '週に数回、丁寧に作る', type: 'precise' },
      { text: '必要な時にパパっと', type: 'practical' },
      { text: 'めったに作らない', type: 'beginner' },
    ],
  },
  {
    id: 6,
    text: 'キッチンの道具は？',
    options: [
      { text: 'こだわりの調理器具がたくさん', type: 'creative' },
      { text: '基本的なものは一通り揃っている', type: 'precise' },
      { text: '電子レンジとフライパンがあればOK', type: 'practical' },
      { text: '最低限のものだけ', type: 'beginner' },
    ],
  },
  {
    id: 7,
    text: '人に料理を振る舞う時は？',
    options: [
      { text: 'オリジナルメニューで勝負', type: 'creative' },
      { text: '得意料理を完璧に仕上げる', type: 'precise' },
      { text: '手軽だけど美味しいものを', type: 'practical' },
      { text: '緊張して上手く作れない', type: 'beginner' },
    ],
  },
  {
    id: 8,
    text: '料理で失敗した時は？',
    options: [
      { text: 'リカバリーして別の料理に変身', type: 'creative' },
      { text: '原因を分析して次に活かす', type: 'precise' },
      { text: 'まあ食べられればOK', type: 'practical' },
      { text: '落ち込んで外食に切り替え', type: 'beginner' },
    ],
  },
  {
    id: 9,
    text: '新しい料理に挑戦する時は？',
    options: [
      { text: 'オリジナルレシピを考案', type: 'creative' },
      { text: '本やプロのレシピで練習', type: 'precise' },
      { text: 'SNSで人気の簡単レシピから', type: 'practical' },
      { text: 'あまり挑戦しない', type: 'beginner' },
    ],
  },
  {
    id: 10,
    text: '料理に対する思いは？',
    options: [
      { text: '自己表現の手段', type: 'creative' },
      { text: '技術を磨く喜び', type: 'precise' },
      { text: '日々の必要な作業', type: 'practical' },
      { text: 'できれば避けたい', type: 'beginner' },
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
  recommendation: string;
}> = {
  creative: {
    type: 'creative',
    title: 'クリエイティブシェフ',
    emoji: '👨‍🍳',
    percentage: '創造力 95%',
    description: '冷蔵庫の余り物から美味しい料理を生み出す天才タイプ！レシピにとらわれず、自由な発想でオリジナル料理を作り出します。料理は芸術だ！',
    characteristics: ['創造的', 'アレンジ上手', '冒険心', '発想力', '食材を無駄にしない'],
    recommendation: 'いつかオリジナルレシピ本を出版できるかも！',
  },
  precise: {
    type: 'precise',
    title: '精密派料理人',
    emoji: '📏',
    percentage: '正確性 92%',
    description: '分量も手順も完璧に守る職人タイプ。基本に忠実だからこそ、安定した美味しさを再現できます。料理上手の王道スタイル！',
    characteristics: ['正確', '丁寧', '再現性が高い', '基本に忠実', '失敗が少ない'],
    recommendation: 'たまには計量なしで作ってみると新しい発見があるかも！',
  },
  practical: {
    type: 'practical',
    title: '効率重視クッカー',
    emoji: '⏱️',
    percentage: '効率性 88%',
    description: '時短テクと便利アイテムを駆使する実用派。忙しい中でもパパっと美味しいご飯を作れる、現代人の鏡です！',
    characteristics: ['効率的', '時短上手', '実用的', '柔軟', 'バランス感覚'],
    recommendation: '週末はゆっくり本格料理に挑戦してみては？',
  },
  beginner: {
    type: 'beginner',
    title: '料理ビギナー',
    emoji: '🔰',
    percentage: '伸びしろ 100%',
    description: 'まだ料理経験は浅いけど、伸びしろは無限大！簡単なレシピから始めて、少しずつスキルアップしていきましょう。誰でも最初は初心者です！',
    characteristics: ['素直', '学ぶ姿勢', 'ポテンシャル', 'チャレンジ精神', '成長中'],
    recommendation: '卵料理から始めてみましょう。目玉焼きからオムレツへ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { creative: 0, precise: 0, practical: 0, beginner: 0 };

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
