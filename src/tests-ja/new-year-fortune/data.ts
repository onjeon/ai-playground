// 新年運勢タイプ診断 (신년 운세 타입 테스트)
export const questions = [
  {
    id: 1,
    text: 'お正月、あなたは何をする？',
    options: [
      { text: '初詣に行っておみくじ', type: 'spiritual' },
      { text: '家族とおせちを食べる', type: 'family' },
      { text: '友達と初売りに行く', type: 'active' },
      { text: '家でゴロゴロ', type: 'relaxed' },
    ],
  },
  {
    id: 2,
    text: 'おみくじを引いたら？',
    options: [
      { text: '内容を熟読して心に刻む', type: 'spiritual' },
      { text: '家族に見せて話題にする', type: 'family' },
      { text: '写真を撮ってSNSに', type: 'active' },
      { text: 'サッと見てポケットに', type: 'relaxed' },
    ],
  },
  {
    id: 3,
    text: '新年の目標は？',
    options: [
      { text: '心身の成長と内面磨き', type: 'spiritual' },
      { text: '家族との時間を大切に', type: 'family' },
      { text: '新しいことにチャレンジ', type: 'active' },
      { text: '今年も無理せずマイペース', type: 'relaxed' },
    ],
  },
  {
    id: 4,
    text: 'お年玉をもらったら？',
    options: [
      { text: 'お守りやパワーストーンに', type: 'spiritual' },
      { text: '家族へのプレゼントを買う', type: 'family' },
      { text: '欲しかったものを即買い', type: 'active' },
      { text: '貯金する', type: 'relaxed' },
    ],
  },
  {
    id: 5,
    text: '年賀状について、あなたは？',
    options: [
      { text: '手書きで丁寧に書く', type: 'spiritual' },
      { text: '家族写真入りで作る', type: 'family' },
      { text: 'LINEで「あけおめ」', type: 'active' },
      { text: '来たら返す程度', type: 'relaxed' },
    ],
  },
  {
    id: 6,
    text: '初夢で見たいのは？',
    options: [
      { text: '神秘的な夢や予知夢', type: 'spiritual' },
      { text: '家族との幸せな夢', type: 'family' },
      { text: '冒険やワクワクする夢', type: 'active' },
      { text: '何でもいい、ぐっすり寝たい', type: 'relaxed' },
    ],
  },
  {
    id: 7,
    text: '新年に食べたいものは？',
    options: [
      { text: '縁起物を意識したおせち', type: 'spiritual' },
      { text: '家族の手作り料理', type: 'family' },
      { text: '話題のお店の限定メニュー', type: 'active' },
      { text: '好きなものを好きなだけ', type: 'relaxed' },
    ],
  },
  {
    id: 8,
    text: '今年の運勢を占うなら？',
    options: [
      { text: '本格的な占いで詳しく', type: 'spiritual' },
      { text: '家族と一緒にテレビの占いを見る', type: 'family' },
      { text: 'アプリで気軽にチェック', type: 'active' },
      { text: '特に気にしない', type: 'relaxed' },
    ],
  },
  {
    id: 9,
    text: '新年の挨拶回り、あなたは？',
    options: [
      { text: 'ご先祖様のお墓参りも', type: 'spiritual' },
      { text: '親戚の家を順番に', type: 'family' },
      { text: '友達とパーティー', type: 'active' },
      { text: '電話かLINEで済ませる', type: 'relaxed' },
    ],
  },
  {
    id: 10,
    text: '元旦の朝、何時に起きる？',
    options: [
      { text: '初日の出を見るため早起き', type: 'spiritual' },
      { text: '家族と一緒に適度な時間に', type: 'family' },
      { text: '予定があるので普通に', type: 'active' },
      { text: '昼過ぎまで寝ている', type: 'relaxed' },
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
  fortune: string;
}> = {
  spiritual: {
    type: 'spiritual',
    title: '開運パワー全開タイプ',
    emoji: '⛩️',
    percentage: 'スピリチュアル度 95%',
    description: '新年は特別な時間と捉え、縁起や開運を大切にするタイプ。おみくじや初詣を欠かさず、新しい年を神聖な気持ちで迎えます。',
    characteristics: ['信心深い', '伝統を重視', '縁起担ぎ', '感謝の心', '丁寧'],
    fortune: '今年は思いが通じる年！誠実な行動が幸運を呼びます。',
  },
  family: {
    type: 'family',
    title: '家族円満タイプ',
    emoji: '👨‍👩‍👧‍👦',
    percentage: '家族愛度 90%',
    description: 'お正月は家族と過ごすのが一番と考えるタイプ。温かい家庭の中で新年を迎え、絆を深めることを大切にします。',
    characteristics: ['家族思い', '温かい', '協調性', '安定志向', '思いやり'],
    fortune: '今年は家庭運絶好調！大切な人との時間が幸せを呼びます。',
  },
  active: {
    type: 'active',
    title: 'アクティブ新年タイプ',
    emoji: '🎊',
    percentage: 'アクティブ度 88%',
    description: 'お正月も休んでいられない行動派。初売り、イベント、友達との予定でスケジュールはぎっしり。新年からフルスロットル！',
    characteristics: ['行動的', '社交的', 'トレンド好き', 'エネルギッシュ', '好奇心旺盛'],
    fortune: '今年はチャンス到来の年！積極的な行動が大吉を呼びます。',
  },
  relaxed: {
    type: 'relaxed',
    title: 'のんびり正月タイプ',
    emoji: '🍵',
    percentage: 'まったり度 85%',
    description: 'お正月くらいゆっくりしたい派。こたつでみかんを食べながら、テレビを見て過ごす至福の時間を大切にします。',
    characteristics: ['マイペース', 'リラックス上手', '自然体', '癒し系', '穏やか'],
    fortune: '今年はマイペースが吉！焦らず進むことで運気上昇。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { spiritual: 0, family: 0, active: 0, relaxed: 0 };

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
