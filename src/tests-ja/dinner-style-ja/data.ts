// 夕食スタイル診断
export const questions = [
  {
    id: 1,
    text: '平日の夕食、どうやって準備する？',
    options: [
      { text: '帰宅してから自炊する', type: 'homemade' },
      { text: 'お惣菜やテイクアウト', type: 'convenient' },
      { text: '外食することが多い', type: 'dining' },
      { text: '冷蔵庫にあるもので簡単に', type: 'simple' },
    ],
  },
  {
    id: 2,
    text: '夕食の理想的な時間は？',
    options: [
      { text: '18時〜19時くらい', type: 'homemade' },
      { text: '帰宅してすぐ食べたい', type: 'convenient' },
      { text: '予約した時間に合わせる', type: 'dining' },
      { text: 'お腹が空いた時', type: 'simple' },
    ],
  },
  {
    id: 3,
    text: '夕食で大切にしていることは？',
    options: [
      { text: '栄養バランス', type: 'homemade' },
      { text: '手軽さ', type: 'convenient' },
      { text: '美味しさと雰囲気', type: 'dining' },
      { text: '食費を抑えること', type: 'simple' },
    ],
  },
  {
    id: 4,
    text: '夕食の献立はどう決める？',
    options: [
      { text: '事前に考えておく', type: 'homemade' },
      { text: 'その日の気分とお店次第', type: 'convenient' },
      { text: 'お店のおすすめを参考に', type: 'dining' },
      { text: 'あるものでなんとかする', type: 'simple' },
    ],
  },
  {
    id: 5,
    text: '夕食は誰と食べることが多い？',
    options: [
      { text: '家族と一緒に', type: 'homemade' },
      { text: '一人で手軽に', type: 'convenient' },
      { text: '友人や同僚と', type: 'dining' },
      { text: 'その日による', type: 'simple' },
    ],
  },
  {
    id: 6,
    text: '夕食の量について',
    options: [
      { text: 'しっかり食べる', type: 'homemade' },
      { text: '程よい量で', type: 'convenient' },
      { text: 'お酒と一緒につまむ程度', type: 'dining' },
      { text: '軽めでOK', type: 'simple' },
    ],
  },
  {
    id: 7,
    text: '残業で遅くなった日の夕食は？',
    options: [
      { text: 'それでも自炊する', type: 'homemade' },
      { text: 'コンビニで買って帰る', type: 'convenient' },
      { text: '外で食べてから帰る', type: 'dining' },
      { text: '食べないか軽いものだけ', type: 'simple' },
    ],
  },
  {
    id: 8,
    text: '週末の夕食はどう過ごす？',
    options: [
      { text: '凝った料理を作る', type: 'homemade' },
      { text: '普段行かないお店のテイクアウト', type: 'convenient' },
      { text: '少し良いレストランへ', type: 'dining' },
      { text: '平日と変わらない', type: 'simple' },
    ],
  },
  {
    id: 9,
    text: '夕食後の過ごし方は？',
    options: [
      { text: '家族との団らん', type: 'homemade' },
      { text: 'テレビやスマホを見ながらリラックス', type: 'convenient' },
      { text: 'そのまま二次会やバーへ', type: 'dining' },
      { text: '早めに寝る準備', type: 'simple' },
    ],
  },
  {
    id: 10,
    text: 'あなたにとって夕食とは？',
    options: [
      { text: '一日の締めくくり、家族との時間', type: 'homemade' },
      { text: 'エネルギー補給の時間', type: 'convenient' },
      { text: '人との交流を楽しむ時間', type: 'dining' },
      { text: 'シンプルに必要な食事', type: 'simple' },
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
  homemade: {
    type: 'homemade',
    title: '手作り派ディナー',
    emoji: '🍳',
    percentage: '家庭力 95%',
    description: '夕食は手作りで家族や自分のために！栄養も愛情もたっぷり。キッチンに立つ時間が好きな料理上手タイプ。',
    characteristics: ['家庭的', '料理好き', '健康意識高い', '計画的', '愛情深い'],
    advice: 'たまには手を抜いて、外食やテイクアウトも楽しみましょう！',
  },
  convenient: {
    type: 'convenient',
    title: 'お手軽派ディナー',
    emoji: '🍱',
    percentage: '効率性 92%',
    description: '忙しい毎日、夕食は手軽に済ませたい！お惣菜やテイクアウトを上手に活用。時間を有効に使う現代人タイプ。',
    characteristics: ['効率的', '現実的', '時間重視', '柔軟', '実用的'],
    advice: 'たまには自炊で、料理の楽しさを再発見してみては？',
  },
  dining: {
    type: 'dining',
    title: '外食派ディナー',
    emoji: '🍽️',
    percentage: '社交性 90%',
    description: '夕食は外で楽しく！美味しいお店を開拓したり、人との交流を楽しんだり。食事を通じてコミュニケーションを大切にするタイプ。',
    characteristics: ['社交的', 'グルメ', '情報通', 'アクティブ', '人脈豊富'],
    advice: 'たまには家でゆっくり食事をして、リラックスする時間も大切に！',
  },
  simple: {
    type: 'simple',
    title: 'シンプル派ディナー',
    emoji: '🍙',
    percentage: 'ミニマル度 88%',
    description: '夕食はシンプルでOK！あるもので簡単に済ませる無理のないスタイル。食事にそこまでこだわらない合理派。',
    characteristics: ['シンプル', '節約上手', 'ミニマリスト', 'ストレスフリー', '自由'],
    advice: 'たまには栄養バランスを意識した食事も取り入れてみましょう！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { homemade: 0, convenient: 0, dining: 0, simple: 0 };

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
