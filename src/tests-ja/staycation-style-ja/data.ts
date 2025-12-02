// ステイケーションタイプ診断
export const questions = [
  {
    id: 1,
    text: '休日を家で過ごす時、何をする？',
    options: [
      { text: '趣味や自己啓発に没頭', type: 'productive' },
      { text: 'リラックス、ゴロゴロ', type: 'relaxer' },
      { text: '家事や整理整頓', type: 'organizer' },
      { text: '映画やゲームを楽しむ', type: 'entertainer' },
    ],
  },
  {
    id: 2,
    text: '理想的な家での休日は？',
    options: [
      { text: '新しいスキルを学ぶ', type: 'productive' },
      { text: 'とにかく休む', type: 'relaxer' },
      { text: '普段できない掃除や整理', type: 'organizer' },
      { text: 'エンタメ三昧', type: 'entertainer' },
    ],
  },
  {
    id: 3,
    text: 'ステイケーション中の服装は？',
    options: [
      { text: 'ある程度整った服', type: 'productive' },
      { text: '一日中パジャマ', type: 'relaxer' },
      { text: '動きやすい服', type: 'organizer' },
      { text: 'リラックスできる部屋着', type: 'entertainer' },
    ],
  },
  {
    id: 4,
    text: '家での食事は？',
    options: [
      { text: '料理にこだわる', type: 'productive' },
      { text: 'デリバリーや簡単なもの', type: 'relaxer' },
      { text: '作り置きや整理を兼ねて', type: 'organizer' },
      { text: '好きなものを食べる', type: 'entertainer' },
    ],
  },
  {
    id: 5,
    text: '家で過ごした後の気分は？',
    options: [
      { text: '充実感、何か達成した', type: 'productive' },
      { text: 'スッキリ休めた', type: 'relaxer' },
      { text: '家がキレイになって満足', type: 'organizer' },
      { text: '楽しかった', type: 'entertainer' },
    ],
  },
  {
    id: 6,
    text: 'SNSへの投稿は？',
    options: [
      { text: '学んだことや作ったものを投稿', type: 'productive' },
      { text: 'あまりしない、休んでいる', type: 'relaxer' },
      { text: 'ビフォーアフターを投稿', type: 'organizer' },
      { text: '見ている映画やゲームを投稿', type: 'entertainer' },
    ],
  },
  {
    id: 7,
    text: '一人の時間と誰かとの時間、どちらが好き？',
    options: [
      { text: '一人で集中する時間', type: 'productive' },
      { text: '一人でゆっくり', type: 'relaxer' },
      { text: '一人で黙々と作業', type: 'organizer' },
      { text: '誰かと一緒に楽しむ', type: 'entertainer' },
    ],
  },
  {
    id: 8,
    text: '休日の起床時間は？',
    options: [
      { text: '普段と同じか早め', type: 'productive' },
      { text: '目が覚めるまで寝る', type: 'relaxer' },
      { text: '朝から活動開始', type: 'organizer' },
      { text: '遅めに起きてのんびり', type: 'entertainer' },
    ],
  },
  {
    id: 9,
    text: '家での過ごし方で大切にしていることは？',
    options: [
      { text: '時間を有意義に使う', type: 'productive' },
      { text: '心身を休める', type: 'relaxer' },
      { text: '生活環境を整える', type: 'organizer' },
      { text: '楽しむこと', type: 'entertainer' },
    ],
  },
  {
    id: 10,
    text: 'ステイケーションの満足度は？',
    options: [
      { text: '何か成し遂げた時', type: 'productive' },
      { text: '十分に休めた時', type: 'relaxer' },
      { text: '家が整った時', type: 'organizer' },
      { text: '楽しい時間を過ごせた時', type: 'entertainer' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  style: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  productive: {
    type: 'productive',
    title: '充実追求タイプ',
    emoji: '📚💡',
    style: 'ステイケーション：生産的',
    description: '家での時間も有意義に過ごしたいタイプ。趣味、学習、料理など、何かに取り組むことで充実感を得ます。休日も自己成長の機会！',
    characteristics: ['時間を有効活用', '学びや趣味に没頭', '充実感を重視', '自己成長志向'],
    tips: ['たまには何もしない日も', '完璧を求めすぎないで', '休むことも大切な時間'],
  },
  relaxer: {
    type: 'relaxer',
    title: '完全リラックスタイプ',
    emoji: '😴🛋️',
    style: 'ステイケーション：休息重視',
    description: '休日は徹底的に休むタイプ。心身の疲れを癒し、次の一週間に備えます。何もしない贅沢を知っている人！回復力を高める達人。',
    characteristics: ['休息を最優先', 'ゴロゴロ大好き', '回復に集中', '無理しない'],
    tips: ['罪悪感を感じなくてOK', '体が求めている休息を', '時には軽い運動も'],
  },
  organizer: {
    type: 'organizer',
    title: '整理整頓タイプ',
    emoji: '🧹✨',
    style: 'ステイケーション：整理整頓',
    description: '家での時間を使って環境を整えるタイプ。掃除、片付け、整理整頓で気分もスッキリ。キレイな空間で過ごすことに喜びを感じます。',
    characteristics: ['掃除・整理が好き', '環境を整える', '達成感を得る', 'きれい好き'],
    tips: ['完璧を目指しすぎないで', '休憩も入れながら', '整った空間を楽しんで'],
  },
  entertainer: {
    type: 'entertainer',
    title: 'エンタメ満喫タイプ',
    emoji: '🎬🎮',
    style: 'ステイケーション：楽しみ重視',
    description: '家での時間を思いっきり楽しむタイプ。映画、ドラマ、ゲーム、音楽など、好きなエンターテイメントに浸ります。楽しむことが一番！',
    characteristics: ['エンタメ大好き', '楽しむことが最優先', '好きなことに没頭', 'ストレス発散上手'],
    tips: ['好きなことを楽しんで', '時間を忘れて夢中に', '適度に体も動かして'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { productive: 0, relaxer: 0, organizer: 0, entertainer: 0 };

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
