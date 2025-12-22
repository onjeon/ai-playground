// 順序推論テスト
export const questions = [
  {
    id: 1,
    text: 'A→B→C→D→Eの順番で並んでいます。Cの2つ前は？',
    options: [
      { text: 'A', type: 'A' },
      { text: 'B', type: 'B' },
      { text: 'D', type: 'C' },
      { text: 'E', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '太郎は次郎より前、三郎は太郎より後ろ、四郎は次郎より後ろ。正しい順序は？',
    options: [
      { text: '太郎→次郎→三郎→四郎 または 太郎→三郎→次郎→四郎', type: 'A' },
      { text: '次郎→太郎→三郎→四郎', type: 'C' },
      { text: '太郎→三郎→四郎→次郎', type: 'D' },
      { text: '三郎→太郎→次郎→四郎', type: 'B' },
    ],
  },
  {
    id: 3,
    text: '月曜日の3日後の2日前は何曜日？',
    options: [
      { text: '火曜日', type: 'A' },
      { text: '水曜日', type: 'B' },
      { text: '月曜日', type: 'C' },
      { text: '木曜日', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '5人がリレーで走ります。AはBの次、CはAの前、DはCの次、Eは最後。正しい順序は？',
    options: [
      { text: 'C→D→A→B→E または C→A→D→B→E', type: 'A' },
      { text: 'A→B→C→D→E', type: 'C' },
      { text: 'B→A→C→D→E', type: 'D' },
      { text: 'C→A→B→D→E', type: 'B' },
    ],
  },
  {
    id: 5,
    text: '1月から数えて7番目の月は？',
    options: [
      { text: '7月', type: 'A' },
      { text: '8月', type: 'B' },
      { text: '6月', type: 'C' },
      { text: '5月', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'アルファベットでMの3つ後ろの文字は？',
    options: [
      { text: 'P', type: 'A' },
      { text: 'O', type: 'B' },
      { text: 'Q', type: 'C' },
      { text: 'N', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '本棚に本が並んでいます。赤は青の左、黄は赤の右で青の左、緑は黄の右。左からの順序は？',
    options: [
      { text: '赤→黄→青→緑', type: 'A' },
      { text: '赤→青→黄→緑', type: 'B' },
      { text: '青→赤→黄→緑', type: 'C' },
      { text: '黄→赤→青→緑', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '試験の順位：田中>鈴木>山田>佐藤。山田は何位？',
    options: [
      { text: '3位', type: 'A' },
      { text: '2位', type: 'B' },
      { text: '4位', type: 'C' },
      { text: '1位', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '□→△→○→□→△→○→？ 次に来るのは？',
    options: [
      { text: '□', type: 'A' },
      { text: '△', type: 'B' },
      { text: '○', type: 'C' },
      { text: '☆', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '時系列で並べると？ ①昼食 ②起床 ③就寝 ④夕食 ⑤朝食',
    options: [
      { text: '②→⑤→①→④→③', type: 'A' },
      { text: '②→①→⑤→④→③', type: 'C' },
      { text: '⑤→②→①→④→③', type: 'D' },
      { text: '②→⑤→④→①→③', type: 'B' },
    ],
  },
  {
    id: 11,
    text: 'A、B、C、D、Eが円形に時計回りで座っている。Aの向かいはC、Bの右隣はA。Dの位置は？',
    options: [
      { text: 'Bの向かい', type: 'A' },
      { text: 'Cの左隣', type: 'B' },
      { text: 'Eの右隣', type: 'C' },
      { text: 'Aの左隣', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '駅から家まで：交差点を右→橋を渡る→坂を上る→左に曲がる。家から駅までの逆順は？',
    options: [
      { text: '右に曲がる→坂を下る→橋を渡る→交差点を左', type: 'A' },
      { text: '左に曲がる→坂を下る→橋を渡る→交差点を右', type: 'B' },
      { text: '右に曲がる→坂を上る→橋を渡る→交差点を左', type: 'C' },
      { text: '左に曲がる→坂を上る→橋を渡る→交差点を右', type: 'D' },
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
    title: '順序推論の達人',
    emoji: '🔢',
    percentage: '順序推論力 95%',
    description: '複雑な順序関係を瞬時に理解し、正確に並べ替えることができる達人です！時系列や位置関係の把握が得意で、論理的な思考力が非常に高いです。',
    characteristics: ['論理的思考', '空間把握', '時系列理解', '関係性把握', '正確性'],
    advice: 'プロジェクト管理、スケジューリング、物流など順序が重要な分野で大活躍できます。',
  },
  B: {
    type: 'B',
    title: '順序推論上級者',
    emoji: '📋',
    percentage: '順序推論力 80%',
    description: '順序関係を理解する能力が高いです。複雑な条件でも落ち着いて整理し、正しい順序を導き出せます。',
    characteristics: ['整理力', '論理性', '集中力', '正確性', '慎重さ'],
    advice: '図や表を使って視覚化する習慣をつけると、さらに効率的に解けます。',
  },
  C: {
    type: 'C',
    title: '順序推論学習者',
    emoji: '📝',
    percentage: '順序推論力 65%',
    description: '基本的な順序推論は理解できます。複雑な条件が重なると混乱することもありますが、練習で必ず向上します。',
    characteristics: ['基礎力', '成長意欲', '努力家', '素直', '実践派'],
    advice: 'メモを取りながら整理する習慣をつけると、複雑な問題にも対応できるようになります。',
  },
  D: {
    type: 'D',
    title: '順序推論ビギナー',
    emoji: '🌱',
    percentage: '順序推論力 50%',
    description: '順序推論はまだ発展途上です。でも、これは訓練で向上する能力です。簡単な問題から始めて、少しずつレベルアップしましょう。',
    characteristics: ['発展途上', '可能性', '直感的', '柔軟', '創造的'],
    advice: '日常生活で「順番」を意識することから始めてみましょう。',
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
