// 単語論理力テスト
export const questions = [
  {
    id: 1,
    text: '「海」と「波」の関係と同じ関係にあるのは？「空」と？',
    options: [
      { text: '雲', type: 'A' },
      { text: '星', type: 'B' },
      { text: '飛行機', type: 'C' },
      { text: '青', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '仲間はずれはどれ？「医者、看護師、薬剤師、弁護士」',
    options: [
      { text: '弁護士', type: 'A' },
      { text: '医者', type: 'B' },
      { text: '看護師', type: 'C' },
      { text: '薬剤師', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '「大きい」の反対は「小さい」。では「複雑」の反対は？',
    options: [
      { text: '単純', type: 'A' },
      { text: '簡単', type: 'B' },
      { text: '明快', type: 'C' },
      { text: '平凡', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '「本」と「読む」の関係と同じ関係にあるのは？「映画」と？',
    options: [
      { text: '観る', type: 'A' },
      { text: '作る', type: 'B' },
      { text: '俳優', type: 'C' },
      { text: '映画館', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '仲間はずれはどれ？「月曜、火曜、水曜、4月」',
    options: [
      { text: '4月', type: 'A' },
      { text: '月曜', type: 'B' },
      { text: '水曜', type: 'C' },
      { text: '火曜', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '「作家」と「小説」の関係と同じ関係にあるのは？「画家」と？',
    options: [
      { text: '絵画', type: 'A' },
      { text: '筆', type: 'B' },
      { text: '美術館', type: 'C' },
      { text: '芸術', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '次の言葉を正しく並べ替えると？「は・が・青い・空・きれいだ」',
    options: [
      { text: '空は青いがきれいだ / 青い空はきれいだ', type: 'A' },
      { text: 'きれいだが空は青い', type: 'C' },
      { text: '青いは空がきれいだ', type: 'D' },
      { text: '空がきれいだは青い', type: 'B' },
    ],
  },
  {
    id: 8,
    text: '「親」と「子」の関係と同じ関係にあるのは？「教師」と？',
    options: [
      { text: '生徒', type: 'A' },
      { text: '学校', type: 'B' },
      { text: '教科書', type: 'C' },
      { text: '授業', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '仲間はずれはどれ？「りんご、バナナ、にんじん、ぶどう」',
    options: [
      { text: 'にんじん', type: 'A' },
      { text: 'りんご', type: 'B' },
      { text: 'バナナ', type: 'C' },
      { text: 'ぶどう', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '「原因」と「結果」の関係と同じ関係にあるのは？「質問」と？',
    options: [
      { text: '回答', type: 'A' },
      { text: '疑問', type: 'B' },
      { text: '理解', type: 'C' },
      { text: '知識', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '「暑い」と「寒い」は反対語。では「上昇」の反対は？',
    options: [
      { text: '下降', type: 'A' },
      { text: '減少', type: 'B' },
      { text: '停止', type: 'C' },
      { text: '後退', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '仲間はずれはどれ？「走る、歩く、泳ぐ、眠る」',
    options: [
      { text: '眠る', type: 'A' },
      { text: '走る', type: 'B' },
      { text: '泳ぐ', type: 'C' },
      { text: '歩く', type: 'D' },
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
    title: '単語論理の達人',
    emoji: '📚',
    percentage: '単語論理力 95%',
    description: '言葉の関係性を瞬時に理解し、論理的に分析できる達人です！類推や分類が得意で、言語的な知性が非常に高いです。',
    characteristics: ['類推力', '分類能力', '言語理解', '論理性', '語彙力'],
    advice: '言語学、法律、教育など言葉を論理的に扱う分野で大きく活躍できます。',
  },
  B: {
    type: 'B',
    title: '単語論理上級者',
    emoji: '✏️',
    percentage: '単語論理力 80%',
    description: '言葉の関係性を理解する能力が高いです。類推問題や仲間はずれ問題を論理的に解くことができます。',
    characteristics: ['言語理解', '分析力', '論理性', '語彙力', '推論力'],
    advice: '読書を通じて語彙を増やすことで、さらに能力が向上します。',
  },
  C: {
    type: 'C',
    title: '単語論理学習者',
    emoji: '📖',
    percentage: '単語論理力 65%',
    description: '基本的な言葉の関係性は理解できます。より複雑な類推問題には練習が必要ですが、確実に成長できます。',
    characteristics: ['基礎力', '成長意欲', '素直', '努力家', '実践派'],
    advice: '言葉遊びやクイズを楽しみながら、論理的思考を鍛えましょう。',
  },
  D: {
    type: 'D',
    title: '単語論理ビギナー',
    emoji: '🌱',
    percentage: '単語論理力 50%',
    description: '単語論理はまだ発展途上ですが、訓練で向上できます。言葉の関係性に注目する習慣をつけましょう。',
    characteristics: ['発展途上', '可能性', '直感的', '感覚派', '柔軟'],
    advice: '身近な言葉の関係性（同義語、反義語など）から学び始めましょう。',
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
