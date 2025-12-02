// 朝型夜型診断 (아침 루틴 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '一番調子が良いと感じる時間帯は？',
    options: [
      { text: '早朝（5〜8時）', type: 'earlybird' },
      { text: '午前中（9〜12時）', type: 'morning' },
      { text: '午後〜夕方（13〜18時）', type: 'afternoon' },
      { text: '夜〜深夜（20時以降）', type: 'nightowl' },
    ],
  },
  {
    id: 2,
    text: '休日の朝、目覚まし無しで起きる時間は？',
    options: [
      { text: '6時前には自然に目が覚める', type: 'earlybird' },
      { text: '7〜8時くらい', type: 'morning' },
      { text: '9〜10時くらい', type: 'afternoon' },
      { text: '昼近くまで寝てる', type: 'nightowl' },
    ],
  },
  {
    id: 3,
    text: '大事な仕事や勉強をするなら？',
    options: [
      { text: '早朝の静かな時間', type: 'earlybird' },
      { text: '午前中の頭がスッキリした時', type: 'morning' },
      { text: '午後、エンジンがかかってから', type: 'afternoon' },
      { text: '夜、集中できる時間', type: 'nightowl' },
    ],
  },
  {
    id: 4,
    text: '朝起きた時の気分は？',
    options: [
      { text: 'スッキリ爽快！すぐ動ける', type: 'earlybird' },
      { text: '普通、少しすれば調子が出る', type: 'morning' },
      { text: 'ちょっとだるい、時間がかかる', type: 'afternoon' },
      { text: '辛い、もっと寝ていたい', type: 'nightowl' },
    ],
  },
  {
    id: 5,
    text: '夜、眠くなる時間は？',
    options: [
      { text: '21時頃にはもう眠い', type: 'earlybird' },
      { text: '22〜23時くらい', type: 'morning' },
      { text: '0時頃', type: 'afternoon' },
      { text: '1時過ぎても平気', type: 'nightowl' },
    ],
  },
  {
    id: 6,
    text: '朝ごはんについては？',
    options: [
      { text: 'しっかり食べる派', type: 'earlybird' },
      { text: '軽く食べる', type: 'morning' },
      { text: '食べたり食べなかったり', type: 'afternoon' },
      { text: 'ほとんど食べない', type: 'nightowl' },
    ],
  },
  {
    id: 7,
    text: '徹夜について',
    options: [
      { text: '絶対無理、体調を崩す', type: 'earlybird' },
      { text: 'できるけど翌日辛い', type: 'morning' },
      { text: '必要ならできる', type: 'afternoon' },
      { text: '割と平気、夜が好き', type: 'nightowl' },
    ],
  },
  {
    id: 8,
    text: '朝のルーティンは？',
    options: [
      { text: '運動や読書など自己投資の時間', type: 'earlybird' },
      { text: 'ゆっくり準備する', type: 'morning' },
      { text: '最低限の準備だけ', type: 'afternoon' },
      { text: 'ギリギリまで寝てバタバタ', type: 'nightowl' },
    ],
  },
  {
    id: 9,
    text: '午後3時頃の状態は？',
    options: [
      { text: 'そろそろ疲れてくる', type: 'earlybird' },
      { text: 'まだ大丈夫', type: 'morning' },
      { text: '一番調子がいい時間', type: 'afternoon' },
      { text: 'やっとエンジンがかかってきた', type: 'nightowl' },
    ],
  },
  {
    id: 10,
    text: '理想の生活リズムは？',
    options: [
      { text: '早寝早起き、朝活充実', type: 'earlybird' },
      { text: '規則正しい生活', type: 'morning' },
      { text: 'ゆっくりスタート、マイペース', type: 'afternoon' },
      { text: '夜型生活、夜の時間を楽しむ', type: 'nightowl' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  chronotype: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  earlybird: {
    type: 'earlybird',
    title: '超朝型・ヒバリタイプ',
    emoji: '🌅🐦',
    chronotype: '朝型度：★★★★★',
    description: '朝が大好きな真の早起き。日の出とともに活動を始め、午前中に最高のパフォーマンスを発揮します。「早起きは三文の徳」を体現するタイプ！',
    characteristics: ['早起き得意', '朝から元気', '計画的', '健康的な生活習慣'],
    tips: ['朝の時間を最大限活用して', '夜の予定は早めに切り上げよう', '朝活仲間を見つけてみて'],
  },
  morning: {
    type: 'morning',
    title: '朝型・ライオンタイプ',
    emoji: '☀️🦁',
    chronotype: '朝型度：★★★★☆',
    description: '午前中が得意な朝型人間。無理なく早起きでき、午前中に重要なタスクをこなせます。バランスの取れた生活リズムの持ち主です。',
    characteristics: ['午前中が得意', '規則正しい', 'バランスが良い', '安定している'],
    tips: ['午前中に大事な仕事を', '昼食後の眠気に注意', '夜更かしは控えめに'],
  },
  afternoon: {
    type: 'afternoon',
    title: '中間型・クマタイプ',
    emoji: '🌤️🐻',
    chronotype: '朝型度：★★☆☆☆',
    description: '午後から調子が出てくるタイプ。朝はゆっくりスタートして、午後〜夕方にかけてエンジンがかかります。多くの人がこのタイプです。',
    characteristics: ['午後が得意', '柔軟性がある', 'マイペース', '適応力がある'],
    tips: ['午後に重要な予定を入れて', '朝は無理せずウォームアップ', '自分のペースを大切に'],
  },
  nightowl: {
    type: 'nightowl',
    title: '夜型・フクロウタイプ',
    emoji: '🌙🦉',
    chronotype: '朝型度：★☆☆☆☆',
    description: '夜こそ本領発揮の夜型人間。静かな夜の時間に集中力が高まり、クリエイティブな作業がはかどります。アーティストや作家に多いタイプ！',
    characteristics: ['夜が得意', 'クリエイティブ', '集中力が高い（夜）', '独自の感性'],
    tips: ['無理な早起きはストレスに', '夜の時間を有効活用して', '睡眠時間は確保しよう'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { earlybird: 0, morning: 0, afternoon: 0, nightowl: 0 };

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
