// 日本愛度診断
export const questions = [
  {
    id: 1,
    text: '日本のどんなところが好き？',
    options: [
      { text: '四季の美しさ', type: 'nature' },
      { text: '伝統文化と歴史', type: 'culture' },
      { text: '食べ物のおいしさ', type: 'food' },
      { text: '治安と便利さ', type: 'lifestyle' },
    ],
  },
  {
    id: 2,
    text: '外国人に日本を紹介するなら？',
    options: [
      { text: '富士山や桜の名所', type: 'nature' },
      { text: '京都や奈良の寺社', type: 'culture' },
      { text: '寿司やラーメン', type: 'food' },
      { text: '新幹線や秋葉原', type: 'lifestyle' },
    ],
  },
  {
    id: 3,
    text: '日本で一番誇りに思うことは？',
    options: [
      { text: '自然との共生', type: 'nature' },
      { text: '長い歴史と伝統', type: 'culture' },
      { text: '和食の素晴らしさ', type: 'food' },
      { text: 'おもてなしの心', type: 'lifestyle' },
    ],
  },
  {
    id: 4,
    text: '好きな日本の季節行事は？',
    options: [
      { text: 'お花見', type: 'nature' },
      { text: 'お正月', type: 'culture' },
      { text: '七夕やお盆', type: 'food' },
      { text: '年末年始', type: 'lifestyle' },
    ],
  },
  {
    id: 5,
    text: '日本国内旅行で重視することは？',
    options: [
      { text: '絶景スポット', type: 'nature' },
      { text: '歴史的建造物', type: 'culture' },
      { text: 'ご当地グルメ', type: 'food' },
      { text: '温泉やリラックス', type: 'lifestyle' },
    ],
  },
  {
    id: 6,
    text: '日本製品へのこだわりは？',
    options: [
      { text: '国産の食材を選ぶ', type: 'nature' },
      { text: '伝統工芸品が好き', type: 'culture' },
      { text: '地元産の食品を応援', type: 'food' },
      { text: '日本企業を応援', type: 'lifestyle' },
    ],
  },
  {
    id: 7,
    text: '日本の良さを感じる瞬間は？',
    options: [
      { text: '季節の変化を感じた時', type: 'nature' },
      { text: '祭りや伝統行事に参加', type: 'culture' },
      { text: '美味しい和食を食べた時', type: 'food' },
      { text: '電車が時間通りに来た時', type: 'lifestyle' },
    ],
  },
  {
    id: 8,
    text: '日本で守りたいものは？',
    options: [
      { text: '美しい自然環境', type: 'nature' },
      { text: '伝統文化や技術', type: 'culture' },
      { text: '食文化', type: 'food' },
      { text: '安全で平和な社会', type: 'lifestyle' },
    ],
  },
  {
    id: 9,
    text: '日本のアイデンティティとは？',
    options: [
      { text: '自然との調和', type: 'nature' },
      { text: '和の精神', type: 'culture' },
      { text: '食への情熱', type: 'food' },
      { text: '勤勉さと礼儀', type: 'lifestyle' },
    ],
  },
  {
    id: 10,
    text: '日本に生まれてよかったと思う時は？',
    options: [
      { text: '四季の美しさを感じる時', type: 'nature' },
      { text: '伝統文化に触れた時', type: 'culture' },
      { text: '美味しいものを食べた時', type: 'food' },
      { text: '安心して暮らせる時', type: 'lifestyle' },
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
  japanLove: string;
}> = {
  nature: {
    type: 'nature',
    title: '自然愛日本派',
    emoji: '🗻',
    percentage: '日本愛度 95%',
    description: '日本の四季や自然の美しさに心を奪われているあなた。桜、紅葉、雪景色...季節の移ろいに日本の魅力を感じています。',
    characteristics: ['自然愛', '四季を楽しむ', '風景好き', '環境意識', '感性豊か'],
    japanLove: '季節ごとの絶景巡りがおすすめ！',
  },
  culture: {
    type: 'culture',
    title: '文化愛日本派',
    emoji: '🎎',
    percentage: '日本愛度 93%',
    description: '日本の長い歴史と伝統文化を愛するあなた。神社仏閣、茶道、華道など、日本独自の文化に深い敬意を持っています。',
    characteristics: ['伝統尊重', '歴史好き', '文化継承', '教養', '和の心'],
    japanLove: '伝統文化体験で日本の心を深めて！',
  },
  food: {
    type: 'food',
    title: '食愛日本派',
    emoji: '🍣',
    percentage: '日本愛度 91%',
    description: '和食の素晴らしさに魅了されているあなた。出汁の旨味、季節の食材、職人の技...日本の食文化を心から愛しています。',
    characteristics: ['グルメ', '食へのこだわり', '旬を大切に', '地産地消', '職人尊敬'],
    japanLove: '各地のご当地グルメ巡りがおすすめ！',
  },
  lifestyle: {
    type: 'lifestyle',
    title: '暮らし愛日本派',
    emoji: '🏠',
    percentage: '日本愛度 90%',
    description: '日本の便利で安全な暮らしに感謝しているあなた。おもてなしの心や勤勉さなど、日本人の美徳を大切にしています。',
    characteristics: ['生活満足', '安心感', '便利さ', 'マナー重視', '社会貢献'],
    japanLove: '日々の暮らしの中で日本の良さを再発見！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { nature: 0, culture: 0, food: 0, lifestyle: 0 };

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
