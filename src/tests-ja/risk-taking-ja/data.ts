// リスク許容度診断 (리스크 허용도 진단)
export const questions = [
  {
    id: 1,
    text: '新しいことに挑戦する時、最初に考えるのは？',
    options: [
      { text: 'ワクワクする可能性', type: 'daredevil' },
      { text: 'メリットとデメリット両方', type: 'balanced' },
      { text: '失敗した時のリスク', type: 'cautious' },
      { text: 'やめておこうかな…', type: 'safe' },
    ],
  },
  {
    id: 2,
    text: '投資や資産運用について',
    options: [
      { text: 'ハイリスク・ハイリターンを狙う', type: 'daredevil' },
      { text: '分散投資でバランスよく', type: 'balanced' },
      { text: '安全な商品を選ぶ', type: 'cautious' },
      { text: '貯金が一番安心', type: 'safe' },
    ],
  },
  {
    id: 3,
    text: '転職や独立についてどう思う？',
    options: [
      { text: 'チャンスがあれば飛び込む', type: 'daredevil' },
      { text: '準備ができたら考える', type: 'balanced' },
      { text: 'リスクを十分検討してから', type: 'cautious' },
      { text: '今の安定を手放したくない', type: 'safe' },
    ],
  },
  {
    id: 4,
    text: 'ギャンブルに対する姿勢は？',
    options: [
      { text: 'スリルが好き、勝負する', type: 'daredevil' },
      { text: '遊び程度ならOK', type: 'balanced' },
      { text: '損するかもと思うと気が引ける', type: 'cautious' },
      { text: 'しない、興味ない', type: 'safe' },
    ],
  },
  {
    id: 5,
    text: '旅行の予約について',
    options: [
      { text: '直前でも予約なしでも行く', type: 'daredevil' },
      { text: '大まかに決めてあとは現地で', type: 'balanced' },
      { text: 'しっかり事前予約', type: 'cautious' },
      { text: 'ツアーが安心', type: 'safe' },
    ],
  },
  {
    id: 6,
    text: '期限のある大きな決断を迫られたら？',
    options: [
      { text: '直感で決める', type: 'daredevil' },
      { text: '必要な情報を集めて決める', type: 'balanced' },
      { text: 'できるだけ延長を交渉', type: 'cautious' },
      { text: '決断を避けたい', type: 'safe' },
    ],
  },
  {
    id: 7,
    text: 'スポーツやアクティビティで挑戦したいのは？',
    options: [
      { text: 'スカイダイビング、バンジージャンプ', type: 'daredevil' },
      { text: 'サーフィン、スノボなど', type: 'balanced' },
      { text: 'ハイキング、サイクリング', type: 'cautious' },
      { text: '室内でできるもの', type: 'safe' },
    ],
  },
  {
    id: 8,
    text: '「やらずに後悔」と「やって後悔」どっち？',
    options: [
      { text: 'やらずに後悔の方が嫌、やる！', type: 'daredevil' },
      { text: 'ケースバイケース', type: 'balanced' },
      { text: 'やって後悔の方が嫌、慎重に', type: 'cautious' },
      { text: '後悔自体を避けたい', type: 'safe' },
    ],
  },
  {
    id: 9,
    text: '未知の料理を出されたら？',
    options: [
      { text: '迷わず食べる、好奇心', type: 'daredevil' },
      { text: '少し味見してみる', type: 'balanced' },
      { text: '何か聞いてから決める', type: 'cautious' },
      { text: '知ってるものを食べる', type: 'safe' },
    ],
  },
  {
    id: 10,
    text: 'あなたのリスクに対するスタンスは？',
    options: [
      { text: 'リスクは成長のチャンス', type: 'daredevil' },
      { text: '計算されたリスクは取る', type: 'balanced' },
      { text: 'リスクは最小限に', type: 'cautious' },
      { text: 'リスクは避けたい', type: 'safe' },
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
  daredevil: {
    type: 'daredevil',
    title: 'リスクテイカータイプ',
    emoji: '🚀',
    percentage: 'チャレンジ精神 100%',
    description: 'リスクを恐れない大胆な挑戦者！「やらずに後悔するより、やって後悔」がモットー。失敗を恐れず、新しい経験に飛び込む冒険家精神の持ち主。',
    characteristics: ['大胆', '冒険家', '行動派', '楽観的', 'スリル好き'],
    advice: '素晴らしいチャレンジ精神！ただ、たまには立ち止まってリスク評価も大切に。',
  },
  balanced: {
    type: 'balanced',
    title: 'バランスリスカータイプ',
    emoji: '⚖️',
    percentage: 'バランス度 85%',
    description: 'メリットとデメリットを天秤にかけて判断する賢明派。計算されたリスクは取るけど、無謀な挑戦はしない。堅実さと挑戦心のバランスが絶妙。',
    characteristics: ['バランス型', '計算高い', '賢明', '柔軟', '判断力'],
    advice: '理想的なバランス感覚！その判断力を活かして、新しいことにも挑戦を。',
  },
  cautious: {
    type: 'cautious',
    title: '慎重派タイプ',
    emoji: '🛡️',
    percentage: '慎重度 90%',
    description: '石橋を叩いて渡る慎重派。リスクを十分に検討し、準備万端で臨む。失敗は少ないけど、チャンスを逃すこともあるかも？でも、その堅実さは強み。',
    characteristics: ['慎重', '計画的', '堅実', '準備万端', '安全志向'],
    advice: '堅実さは大切な強み！でも、時には直感を信じて飛び込んでみては？',
  },
  safe: {
    type: 'safe',
    title: '安全第一タイプ',
    emoji: '🏠',
    percentage: '安全志向 95%',
    description: 'リスクは極力避けたい安全第一主義。変化より安定を好み、確実な道を選ぶ。その姿勢は決して悪いことではなく、平穏な日々を大切にする証拠。',
    characteristics: ['安全志向', '安定重視', '変化を好まない', '平穏', '守り型'],
    advice: '安全志向も一つの価値観！でも、小さな挑戦から始めてみると世界が広がるかも。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { daredevil: 0, balanced: 0, cautious: 0, safe: 0 };

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
