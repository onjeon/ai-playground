// おうち時間タイプ診断 (집에서 보내는 시간 타입 진단)
export const questions = [
  {
    id: 1,
    text: '休日、家にいる時の過ごし方は？',
    options: [
      { text: '映画やドラマを一気見', type: 'entertainment' },
      { text: '趣味に没頭（読書、ゲームなど）', type: 'hobby' },
      { text: '掃除や料理、家事を楽しむ', type: 'productive' },
      { text: 'ゴロゴロ、何もしない', type: 'relax' },
    ],
  },
  {
    id: 2,
    text: 'おうち時間で欠かせないものは？',
    options: [
      { text: 'Netflix、YouTube、動画配信', type: 'entertainment' },
      { text: '本、ゲーム、趣味の道具', type: 'hobby' },
      { text: 'キッチン用品、掃除道具', type: 'productive' },
      { text: 'ソファ、ベッド、クッション', type: 'relax' },
    ],
  },
  {
    id: 3,
    text: '家での服装は？',
    options: [
      { text: 'お気に入りのルームウェア', type: 'entertainment' },
      { text: '趣味しやすい楽な服', type: 'hobby' },
      { text: '動きやすい格好', type: 'productive' },
      { text: 'パジャマのまま一日', type: 'relax' },
    ],
  },
  {
    id: 4,
    text: '一人の時間の使い方は？',
    options: [
      { text: 'コンテンツを消費', type: 'entertainment' },
      { text: '自分の好きなことに集中', type: 'hobby' },
      { text: '家の環境を整える', type: 'productive' },
      { text: '休息、充電', type: 'relax' },
    ],
  },
  {
    id: 5,
    text: '家にいる時の食事は？',
    options: [
      { text: 'Uber Eatsやデリバリー', type: 'entertainment' },
      { text: '趣味の合間に簡単に', type: 'hobby' },
      { text: '手料理を楽しむ', type: 'productive' },
      { text: 'あるもので済ませる', type: 'relax' },
    ],
  },
  {
    id: 6,
    text: '理想のおうち時間は？',
    options: [
      { text: '好きなコンテンツを楽しむ至福の時間', type: 'entertainment' },
      { text: '誰にも邪魔されず趣味に没頭', type: 'hobby' },
      { text: '家をきれいにして心もスッキリ', type: 'productive' },
      { text: '何もしなくていい解放感', type: 'relax' },
    ],
  },
  {
    id: 7,
    text: '家にいる時のBGMは？',
    options: [
      { text: 'お気に入りの映画やドラマの音', type: 'entertainment' },
      { text: '作業用BGM、集中できる音楽', type: 'hobby' },
      { text: 'ラジオや音楽を流しながら家事', type: 'productive' },
      { text: '静かに、または何も流さない', type: 'relax' },
    ],
  },
  {
    id: 8,
    text: '長時間家にいると？',
    options: [
      { text: '全然飽きない、むしろ幸せ', type: 'entertainment' },
      { text: '趣味があるから大丈夫', type: 'hobby' },
      { text: 'やることがあるから充実', type: 'productive' },
      { text: '最高、ずっと家にいたい', type: 'relax' },
    ],
  },
  {
    id: 9,
    text: 'インテリアへのこだわりは？',
    options: [
      { text: 'おしゃれで映える空間', type: 'entertainment' },
      { text: '趣味のものが並ぶ空間', type: 'hobby' },
      { text: '整理整頓された機能的な空間', type: 'productive' },
      { text: '居心地良ければOK', type: 'relax' },
    ],
  },
  {
    id: 10,
    text: 'あなたにとっておうち時間とは？',
    options: [
      { text: 'エンタメを楽しむ時間', type: 'entertainment' },
      { text: '好きなことに没頭する時間', type: 'hobby' },
      { text: '生活を整える時間', type: 'productive' },
      { text: '何もしない贅沢な時間', type: 'relax' },
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
  entertainment: {
    type: 'entertainment',
    title: 'エンタメ満喫タイプ',
    emoji: '🎬',
    percentage: 'エンタメ充実度 95%',
    description: 'Netflix、YouTube、映画にドラマ…おうち時間はエンタメ三昧！好きなコンテンツに囲まれて過ごす至福の時間。トレンドの作品もしっかりチェック。',
    characteristics: ['コンテンツ好き', 'トレンド敏感', 'インドア派', '情報通', '没入型'],
    advice: '最高の楽しみ方！たまには体を動かしたり、外の空気を吸うのも大切に。',
  },
  hobby: {
    type: 'hobby',
    title: '趣味没頭タイプ',
    emoji: '🎮',
    percentage: '趣味充実度 100%',
    description: '読書、ゲーム、手芸、プラモ…自分の趣味に没頭するのが至福。誰にも邪魔されない一人の時間を大切にする。家にいても退屈とは無縁。',
    characteristics: ['趣味人', '集中力高い', '一人時間好き', 'こだわり派', '充実'],
    advice: '素敵な趣味時間！たまには新しいことにもチャレンジしてみては。',
  },
  productive: {
    type: 'productive',
    title: '生産的おうちマスタータイプ',
    emoji: '🧹',
    percentage: '生産性 90%',
    description: '掃除、料理、整理整頓…家にいる時間を有効活用！きれいな空間で過ごすことで心もスッキリ。丁寧な暮らしを実践する充実派。',
    characteristics: ['生産的', '整理整頓', '料理好き', '丁寧な暮らし', '充実感'],
    advice: '素晴らしい生活力！たまには何もしない時間も自分に許してあげて。',
  },
  relax: {
    type: 'relax',
    title: '究極リラックスタイプ',
    emoji: '😴',
    percentage: 'リラックス度 100%',
    description: '家では徹底的にダラダラ！何もしない贅沢を知っている。休息は最高の回復方法。仕事や外出で消耗した分、おうちでしっかり充電。',
    characteristics: ['リラックス', '休息上手', 'のんびり', 'ストレスフリー', '回復重視'],
    advice: '休息は大切！でも、たまには体を動かすと、さらに良い休息が取れますよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { entertainment: 0, hobby: 0, productive: 0, relax: 0 };

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
