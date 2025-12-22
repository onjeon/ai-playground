// 朝型・夜型診断 - あなたの本当の生活リズムは？
export const questions = [
  {
    id: 1,
    text: '自然に目が覚める時間は？',
    options: [
      { text: '6時前には自然と起きる', type: 'morning' },
      { text: '7〜8時くらい', type: 'balanced' },
      { text: '9時以降、できればもっと寝たい', type: 'night' },
      { text: '昼過ぎまで寝ていたい', type: 'extreme_night' },
    ],
  },
  {
    id: 2,
    text: '一番頭が冴えている時間帯は？',
    options: [
      { text: '午前中（特に朝イチ）', type: 'morning' },
      { text: '昼前後', type: 'balanced' },
      { text: '夕方〜夜', type: 'night' },
      { text: '深夜0時以降', type: 'extreme_night' },
    ],
  },
  {
    id: 3,
    text: '休日の予定、何時スタートが理想？',
    options: [
      { text: '朝から動きたい！9時集合OK', type: 'morning' },
      { text: '11時くらいがちょうどいい', type: 'balanced' },
      { text: '午後からがいい', type: 'night' },
      { text: '夕方以降が本番', type: 'extreme_night' },
    ],
  },
  {
    id: 4,
    text: '深夜2時、あなたは何してる？',
    options: [
      { text: '熟睡中、夢の中', type: 'morning' },
      { text: 'とっくに寝てる', type: 'balanced' },
      { text: 'まだ起きてるけどそろそろ寝る', type: 'night' },
      { text: '絶好調で活動中', type: 'extreme_night' },
    ],
  },
  {
    id: 5,
    text: '朝ごはんについて',
    options: [
      { text: 'しっかり食べないと1日始まらない', type: 'morning' },
      { text: '軽く食べる', type: 'balanced' },
      { text: 'あまり食欲がない', type: 'night' },
      { text: '朝ごはん？昼ごはんが最初の食事', type: 'extreme_night' },
    ],
  },
  {
    id: 6,
    text: '月曜日の朝、どんな気分？',
    options: [
      { text: '新しい週！やる気満々', type: 'morning' },
      { text: '普通に対応できる', type: 'balanced' },
      { text: 'ちょっと憂鬱…', type: 'night' },
      { text: '地獄。存在しないでほしい', type: 'extreme_night' },
    ],
  },
  {
    id: 7,
    text: 'オールナイト（徹夜）について',
    options: [
      { text: '絶対無理、体が持たない', type: 'morning' },
      { text: '若い頃はできたけど今は…', type: 'balanced' },
      { text: 'たまにならできる', type: 'night' },
      { text: '余裕。むしろ夜が本番', type: 'extreme_night' },
    ],
  },
  {
    id: 8,
    text: '夜10時、あなたの状態は？',
    options: [
      { text: 'もう眠い、寝る準備', type: 'morning' },
      { text: 'そろそろリラックスタイム', type: 'balanced' },
      { text: 'まだまだこれから', type: 'night' },
      { text: '1日の本番スタート', type: 'extreme_night' },
    ],
  },
  {
    id: 9,
    text: '早起きして活動することについて',
    options: [
      { text: '最高！1日が長く使える', type: 'morning' },
      { text: '必要なら問題なくできる', type: 'balanced' },
      { text: '辛いけど頑張ればできる', type: 'night' },
      { text: '拷問。早起きは人権侵害', type: 'extreme_night' },
    ],
  },
  {
    id: 10,
    text: '理想の仕事の時間帯は？',
    options: [
      { text: '朝8時〜夕方5時', type: 'morning' },
      { text: '10時〜19時くらい', type: 'balanced' },
      { text: '昼〜夜', type: 'night' },
      { text: '夜勤・深夜シフト最高', type: 'extreme_night' },
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
  morning: {
    type: 'morning',
    title: '完全朝型タイプ',
    emoji: '🌅',
    percentage: '朝型度 95%',
    description: '太陽とともに目覚める真の朝型人間。「早起きは三文の徳」を体現するタイプで、午前中のパフォーマンスは抜群。ただし夜のイベントは苦手かも…。',
    characteristics: ['規則正しい', '健康的', '計画的', '真面目', '生産性高い'],
    advice: '朝の時間を最大限活用して！でも夜更かしイベントも時には楽しんで。',
  },
  balanced: {
    type: 'balanced',
    title: 'バランス型タイプ',
    emoji: '⚖️',
    percentage: '朝型度 55%',
    description: '朝も夜もそこそこ対応できるバランス型。社会生活に最も適応しやすいタイプです。どちらにも偏らない柔軟さが強み。',
    characteristics: ['適応力', '柔軟', '社会性', 'バランス感覚', '協調性'],
    advice: '何事もほどほどが一番！その柔軟性を大切に。',
  },
  night: {
    type: 'night',
    title: '夜型タイプ',
    emoji: '🌙',
    percentage: '夜型度 75%',
    description: '夜になると本領発揮する夜行性タイプ。創造性は夜に高まり、静かな夜の時間が大好き。朝は苦手だけど、夜の集中力は半端ない。',
    characteristics: ['創造的', 'クリエイティブ', '集中力', '独創性', 'アーティスト気質'],
    advice: '夜の創造性を活かして！でも健康のために少し朝型にシフトも検討を。',
  },
  extreme_night: {
    type: 'extreme_night',
    title: '完全夜型フクロウタイプ',
    emoji: '🦉',
    percentage: '夜型度 99%',
    description: '月と星が友達の完全夜行性タイプ。深夜が一番元気で、太陽は天敵かもしれません。世界が寝静まった後が、あなたのゴールデンタイム。',
    characteristics: ['深夜型', '独自の世界観', '非conformist', 'ミステリアス', '深い思考'],
    advice: '夜の時間を楽しんで！でも社会との折り合いは上手につけてね。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { morning: 0, balanced: 0, night: 0, extreme_night: 0 };

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
