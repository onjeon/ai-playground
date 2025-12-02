// 夜型生活度診断
export const questions = [
  {
    id: 1,
    text: '深夜0時を過ぎても全然眠くないことは？',
    options: [
      { text: 'ほぼ毎日、深夜でも元気', type: 'super_night' },
      { text: 'よくある', type: 'night' },
      { text: 'たまにある', type: 'neutral' },
      { text: '0時前には眠くなる', type: 'morning' },
    ],
  },
  {
    id: 2,
    text: '夜の静かな時間についてどう思う？',
    options: [
      { text: '最高に集中できる黄金時間', type: 'super_night' },
      { text: '落ち着いて好き', type: 'night' },
      { text: '特に何も感じない', type: 'neutral' },
      { text: 'その時間は寝ていたい', type: 'morning' },
    ],
  },
  {
    id: 3,
    text: '創作活動や深い思考をするなら何時頃？',
    options: [
      { text: '深夜〜明け方が最高', type: 'super_night' },
      { text: '夜の方が捗る', type: 'night' },
      { text: '時間帯は関係ない', type: 'neutral' },
      { text: '朝や午前中の方がいい', type: 'morning' },
    ],
  },
  {
    id: 4,
    text: '徹夜することについて',
    options: [
      { text: '全然平気、むしろ得意', type: 'super_night' },
      { text: '必要なら問題なくできる', type: 'night' },
      { text: 'できるけど翌日辛い', type: 'neutral' },
      { text: '絶対無理、体調を崩す', type: 'morning' },
    ],
  },
  {
    id: 5,
    text: '夜更かしして映画やドラマを見ることは？',
    options: [
      { text: '日常茶飯事、夜は趣味の時間', type: 'super_night' },
      { text: 'よくある、楽しい時間', type: 'night' },
      { text: 'たまにする', type: 'neutral' },
      { text: 'ほとんどしない、眠くなる', type: 'morning' },
    ],
  },
  {
    id: 6,
    text: '夜のテンションは？',
    options: [
      { text: '夜になるほど元気になる', type: 'super_night' },
      { text: '夜は調子がいい', type: 'night' },
      { text: '朝も夜も変わらない', type: 'neutral' },
      { text: '夜は疲れて眠くなる', type: 'morning' },
    ],
  },
  {
    id: 7,
    text: '深夜のコンビニやファミレスについて',
    options: [
      { text: '深夜の雰囲気が好き、よく行く', type: 'super_night' },
      { text: '夜遅くでも抵抗なく行ける', type: 'night' },
      { text: '必要があれば行く', type: 'neutral' },
      { text: 'その時間は家で寝ている', type: 'morning' },
    ],
  },
  {
    id: 8,
    text: '仕事や勉強の締め切り前は？',
    options: [
      { text: '夜通し作業するのが効率的', type: 'super_night' },
      { text: '夜遅くまでやることが多い', type: 'night' },
      { text: '時間帯は意識しない', type: 'neutral' },
      { text: '早起きして朝にやる', type: 'morning' },
    ],
  },
  {
    id: 9,
    text: '深夜2時〜3時頃の状態は？',
    options: [
      { text: 'まだまだ元気、ここからが本番', type: 'super_night' },
      { text: 'まだ活動できる', type: 'night' },
      { text: 'さすがに眠い', type: 'neutral' },
      { text: 'とっくに寝ている', type: 'morning' },
    ],
  },
  {
    id: 10,
    text: '理想の就寝時間は？',
    options: [
      { text: '3時〜明け方', type: 'super_night' },
      { text: '1時〜2時頃', type: 'night' },
      { text: '0時前後', type: 'neutral' },
      { text: '22時〜23時頃', type: 'morning' },
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
  super_night: {
    type: 'super_night',
    title: '真の夜型フクロウ',
    emoji: '🦉🌃',
    level: '夜型度：★★★★★',
    description: 'あなたは正真正銘の夜型人間。深夜に最もクリエイティブな力を発揮し、静かな夜の時間こそが黄金時間です。アーティストや作家に多いタイプ。',
    characteristics: ['深夜でも全然眠くない', '夜になるほど元気', '徹夜が得意', '夜の創造性が高い'],
    tips: ['無理に朝型に変えなくていい', '睡眠時間は確保して', '夜型を活かせる仕事を探して'],
  },
  night: {
    type: 'night',
    title: '夜型生活者',
    emoji: '🌙✨',
    level: '夜型度：★★★★☆',
    description: '夜の方が調子がいい夜型タイプ。静かな夜の時間に集中力が高まり、深い思考ができます。夜更かしも苦にならない体質です。',
    characteristics: ['夜の方が集中できる', '夜更かしが得意', '朝は少し苦手', '夜のリラックス時間が大切'],
    tips: ['夜の時間を有効活用して', '朝の予定は余裕を持って', '質の良い睡眠を心がけて'],
  },
  neutral: {
    type: 'neutral',
    title: 'バランス型',
    emoji: '🌗⚖️',
    level: '夜型度：★★★☆☆',
    description: '朝型でも夜型でもない中間タイプ。状況に応じて柔軟に対応できる適応力があります。自分のペースで生活リズムを調整できます。',
    characteristics: ['柔軟に対応できる', '朝も夜もそこそこ', '環境に適応しやすい', 'バランスが取れている'],
    tips: ['自分のベストな時間帯を見つけて', '規則正しい生活を心がけて', '無理のないリズムを維持して'],
  },
  morning: {
    type: 'morning',
    title: '朝型・夜は苦手',
    emoji: '🌅😴',
    level: '夜型度：★★☆☆☆',
    description: '夜は早めに眠くなる朝型タイプ。無理な夜更かしはストレスになるので、朝の時間を活用する方が効率的です。早寝早起きが体に合っています。',
    characteristics: ['夜は眠くなる', '朝の方が調子がいい', '規則正しい生活', '夜更かしが苦手'],
    tips: ['無理な夜更かしは避けて', '朝の時間を活用して', '早めの就寝を心がけて'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { super_night: 0, night: 0, neutral: 0, morning: 0 };

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
