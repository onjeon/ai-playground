// 視覚パズルIQテスト
export const questions = [
  {
    id: 1,
    text: '次の図形の規則性を見つけてください：□ → ◇ → □ → ◇ → ?',
    options: [
      { text: '□', type: 'A' },
      { text: '◇', type: 'B' },
      { text: '○', type: 'C' },
      { text: '△', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '9つのマスに○×が交互に入っています。4つ角に○、中央に×がある時、辺の中央のマスは？',
    options: [
      { text: 'すべて×', type: 'A' },
      { text: 'すべて○', type: 'B' },
      { text: '交互に○×', type: 'C' },
      { text: '空白', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '3×3のマス目で、各行・列・対角線の数字の和が15になる魔方陣。中央の数字は？',
    options: [
      { text: '5', type: 'A' },
      { text: '4', type: 'B' },
      { text: '6', type: 'C' },
      { text: '3', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'パターン：△△○ → △○○ → ○○○ の次は？',
    options: [
      { text: '△△△', type: 'A' },
      { text: '○△○', type: 'B' },
      { text: '△○△', type: 'C' },
      { text: '○○△', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '図形が回転しています：N → Z → N。次に来る向きは？',
    options: [
      { text: 'Z', type: 'A' },
      { text: 'N', type: 'B' },
      { text: 'S', type: 'C' },
      { text: 'M', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '○の数が1→3→6→10と増えています。三角形状に並んでいます。次は何個？',
    options: [
      { text: '15', type: 'A' },
      { text: '12', type: 'B' },
      { text: '14', type: 'C' },
      { text: '16', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '点対称の図形はどれ？',
    options: [
      { text: 'S', type: 'A' },
      { text: 'A', type: 'B' },
      { text: 'B', type: 'C' },
      { text: 'E', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '線対称でも点対称でもある図形は？',
    options: [
      { text: '正方形', type: 'A' },
      { text: '二等辺三角形', type: 'B' },
      { text: '平行四辺形', type: 'C' },
      { text: '台形', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '図形のパターン：●○○ → ○●○ → ○○● の次は？',
    options: [
      { text: '●○○', type: 'A' },
      { text: '○●○', type: 'B' },
      { text: '○○●', type: 'C' },
      { text: '●●○', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '図形が大きくなっていく：・→ ● → ⬤。パターンとして次に来るのは？',
    options: [
      { text: 'さらに大きい円', type: 'A' },
      { text: '小さい円に戻る', type: 'B' },
      { text: '正方形', type: 'C' },
      { text: '三角形', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '矢印のパターン：→ ↗ ↑ ↖ ← の次は？',
    options: [
      { text: '↙', type: 'A' },
      { text: '↓', type: 'B' },
      { text: '↘', type: 'C' },
      { text: '→', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '白黒のパターン：■□■ → □■□ → ■□■ の次は？',
    options: [
      { text: '□■□', type: 'A' },
      { text: '■□■', type: 'B' },
      { text: '■■■', type: 'C' },
      { text: '□□□', type: 'D' },
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
  A: {
    type: 'A',
    title: '視覚パズルの達人',
    emoji: '🧩',
    percentage: '視覚パズル力 95%',
    description: '視覚的なパターンを瞬時に認識し、規則性を見抜く達人です！複雑な図形問題も直感的に解くことができます。',
    characteristics: ['パターン認識', '視覚的推論', '空間認知', '直感力', '観察力'],
    advice: 'デザイン、建築、ゲーム開発など視覚的センスを活かせる分野で活躍できます。',
  },
  B: {
    type: 'B',
    title: '視覚パズル上級者',
    emoji: '🔷',
    percentage: '視覚パズル力 80%',
    description: '視覚的なパターン認識能力が高いです。規則性を見つけ出し、次のパターンを予測する力があります。',
    characteristics: ['パターン認識', '論理性', '集中力', '観察力', '分析力'],
    advice: 'より複雑なパズルに挑戦することで、さらにスキルが向上します。',
  },
  C: {
    type: 'C',
    title: '視覚パズル学習者',
    emoji: '📐',
    percentage: '視覚パズル力 65%',
    description: '基本的な視覚パターンは認識できます。練習を重ねることで、より複雑なパターンも見抜けるようになります。',
    characteristics: ['基礎力', '成長意欲', '努力家', '着実', '忍耐力'],
    advice: 'パズルゲームを日常的に楽しむことで、自然と能力が向上します。',
  },
  D: {
    type: 'D',
    title: '視覚パズルビギナー',
    emoji: '🌱',
    percentage: '視覚パズル力 50%',
    description: '視覚パズルはまだ発展途上ですが、訓練で大きく向上できます。簡単なパズルから始めて楽しみながら成長しましょう。',
    characteristics: ['発展途上', '可能性', '言語優位', '直感的', '柔軟'],
    advice: '簡単なパズルから始めて、成功体験を積み重ねましょう。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

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
