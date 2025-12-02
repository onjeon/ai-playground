// バーでの振る舞い診断
export const questions = [
  {
    id: 1,
    text: 'バーに入る時、まず何をする？',
    options: [
      { text: 'カウンターの端に座る', type: 'solo' },
      { text: 'バーテンダーに挨拶', type: 'regular' },
      { text: '友人とボックス席へ', type: 'social' },
      { text: 'メニューをじっくり見る', type: 'explorer' },
    ],
  },
  {
    id: 2,
    text: '最初の一杯は？',
    options: [
      { text: 'いつものを', type: 'solo' },
      { text: 'バーテンダーにおまかせ', type: 'regular' },
      { text: 'みんなで乾杯できるもの', type: 'social' },
      { text: '気になるカクテルに挑戦', type: 'explorer' },
    ],
  },
  {
    id: 3,
    text: 'バーでの過ごし方は？',
    options: [
      { text: '静かにお酒と向き合う', type: 'solo' },
      { text: 'バーテンダーと会話', type: 'regular' },
      { text: '仲間とワイワイ', type: 'social' },
      { text: 'お酒の世界を探求', type: 'explorer' },
    ],
  },
  {
    id: 4,
    text: 'バーで話しかけられたら？',
    options: [
      { text: '適度な距離感を保つ', type: 'solo' },
      { text: '自然に会話を楽しむ', type: 'regular' },
      { text: '盛り上がって友達に', type: 'social' },
      { text: 'お酒の話なら熱くなる', type: 'explorer' },
    ],
  },
  {
    id: 5,
    text: 'お気に入りのバーの選び方は？',
    options: [
      { text: '静かで落ち着ける場所', type: 'solo' },
      { text: 'バーテンダーとの相性', type: 'regular' },
      { text: '友人が集まりやすい場所', type: 'social' },
      { text: 'お酒の品揃え', type: 'explorer' },
    ],
  },
  {
    id: 6,
    text: 'バーに行く頻度は？',
    options: [
      { text: '週に1-2回、一人で', type: 'solo' },
      { text: '行きつけに定期的に', type: 'regular' },
      { text: '誘われたら', type: 'social' },
      { text: '新しいバーを開拓', type: 'explorer' },
    ],
  },
  {
    id: 7,
    text: 'バーでのお酒の頼み方は？',
    options: [
      { text: '決まったお酒をオーダー', type: 'solo' },
      { text: '今日の気分を伝えて作ってもらう', type: 'regular' },
      { text: '周りと同じものを', type: 'social' },
      { text: '珍しいものを試す', type: 'explorer' },
    ],
  },
  {
    id: 8,
    text: 'バーでの会計は？',
    options: [
      { text: '自分の分はきっちり', type: 'solo' },
      { text: 'ツケでお願い', type: 'regular' },
      { text: '割り勘か奢り奢られ', type: 'social' },
      { text: '飲んだ分だけ', type: 'explorer' },
    ],
  },
  {
    id: 9,
    text: 'バーでの時間の過ごし方',
    options: [
      { text: '考え事や内省の時間', type: 'solo' },
      { text: '日々のストレス発散', type: 'regular' },
      { text: '楽しい交流の時間', type: 'social' },
      { text: '新しい発見の時間', type: 'explorer' },
    ],
  },
  {
    id: 10,
    text: 'バーはあなたにとって？',
    options: [
      { text: '自分だけの空間', type: 'solo' },
      { text: '第二のリビング', type: 'regular' },
      { text: '人との出会いの場', type: 'social' },
      { text: 'お酒の学び舎', type: 'explorer' },
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
  solo: {
    type: 'solo',
    title: '一人バー派',
    emoji: '🥃',
    percentage: '孤高度 90%',
    description: 'バーは自分と向き合う場所。静かにお酒を楽しみ、考え事をする。一人の時間を大切にする大人のバースタイル。',
    characteristics: ['内省的', '自立している', '落ち着きがある', '自分の世界を持つ', 'ミステリアス'],
    advice: '素敵な大人の時間！たまには隣の人と会話してみるのも新しい発見があるかも♪',
  },
  regular: {
    type: 'regular',
    title: '常連タイプ',
    emoji: '🍸',
    percentage: '常連度 95%',
    description: '行きつけのバーがある。バーテンダーとの信頼関係を築き、自分の居場所として通う。名前を呼ばれる心地よさを知っている。',
    characteristics: ['人間関係を大切に', '安定志向', 'コミュニケーション上手', '信頼される', '帰る場所がある'],
    advice: '素晴らしい居場所！でもたまには新しいバーの開拓も楽しいかも♪',
  },
  social: {
    type: 'social',
    title: 'パーティータイプ',
    emoji: '🎉',
    percentage: '社交性 92%',
    description: 'バーは仲間と楽しむ場所！みんなで乾杯、おしゃべり、盛り上がり。人との繋がりを大切にする社交派バーライフ。',
    characteristics: ['社交的', '盛り上げ上手', '人脈豊富', 'ポジティブ', 'ムードメーカー'],
    advice: '楽しいバーライフ！たまには一人でしっぽり飲むのも大人の楽しみ♪',
  },
  explorer: {
    type: 'explorer',
    title: 'バー探求者タイプ',
    emoji: '🔍',
    percentage: '探究心 88%',
    description: 'お酒の世界を探求する冒険家。新しいカクテル、珍しいウイスキー、未知のバーを求めて。知識欲が旺盛なお酒のエクスプローラー。',
    characteristics: ['好奇心旺盛', '知識欲', '冒険心', 'こだわり', '探究心'],
    advice: 'お酒への情熱が素敵！お気に入りの一杯を見つける旅を楽しんで♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { solo: 0, regular: 0, social: 0, explorer: 0 };

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
