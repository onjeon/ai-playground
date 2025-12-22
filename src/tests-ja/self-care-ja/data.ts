// セルフケア診断
export const questions = [
  {
    id: 1,
    text: '疲れた時のリフレッシュ方法は？',
    options: [
      { text: '温泉やスーパー銭湯でゆったり', type: 'bath' },
      { text: 'ジムやヨガで体を動かす', type: 'active' },
      { text: '美味しいものを食べに行く', type: 'indulge' },
      { text: '家でゴロゴロ、動画三昧', type: 'rest' },
    ],
  },
  {
    id: 2,
    text: 'ストレスを感じた時は？',
    options: [
      { text: 'お風呂に入浴剤を入れてゆっくり浸かる', type: 'bath' },
      { text: '散歩やランニングで汗を流す', type: 'active' },
      { text: 'スイーツやお気に入りの食事で発散', type: 'indulge' },
      { text: '布団に包まって眠る', type: 'rest' },
    ],
  },
  {
    id: 3,
    text: '休日の朝、理想の過ごし方は？',
    options: [
      { text: 'モーニング温泉に行く', type: 'bath' },
      { text: '朝活でジョギングやストレッチ', type: 'active' },
      { text: 'おしゃれなカフェでブランチ', type: 'indulge' },
      { text: 'アラームなしで自然に起きる', type: 'rest' },
    ],
  },
  {
    id: 4,
    text: '自分へのご褒美を買うなら？',
    options: [
      { text: '高級入浴剤やアロマオイル', type: 'bath' },
      { text: 'スポーツウェアやフィットネスグッズ', type: 'active' },
      { text: 'ちょっと高いスイーツや高級ディナー', type: 'indulge' },
      { text: '快適な寝具やリラックスグッズ', type: 'rest' },
    ],
  },
  {
    id: 5,
    text: '一人旅で行きたい場所は？',
    options: [
      { text: '有名な温泉地（箱根、別府など）', type: 'bath' },
      { text: 'ハイキングや自然の中でアクティビティ', type: 'active' },
      { text: 'グルメの街で食べ歩き', type: 'indulge' },
      { text: '静かなリゾートでのんびり', type: 'rest' },
    ],
  },
  {
    id: 6,
    text: '仕事終わりの「お疲れ様」は？',
    options: [
      { text: '銭湯で一日の疲れを流す', type: 'bath' },
      { text: 'ジムでトレーニングしてスッキリ', type: 'active' },
      { text: '居酒屋で一杯＆美味しいつまみ', type: 'indulge' },
      { text: '家でゆっくりテレビを見る', type: 'rest' },
    ],
  },
  {
    id: 7,
    text: '心身のバランスを整えるために大切にしていることは？',
    options: [
      { text: '毎日のお風呂タイム', type: 'bath' },
      { text: '定期的な運動習慣', type: 'active' },
      { text: '好きなものを我慢しない', type: 'indulge' },
      { text: '十分な睡眠時間の確保', type: 'rest' },
    ],
  },
  {
    id: 8,
    text: '風邪をひきそうな時の対処法は？',
    options: [
      { text: 'お風呂でしっかり温まる', type: 'bath' },
      { text: '軽い運動で血行促進', type: 'active' },
      { text: '栄養のあるものをたくさん食べる', type: 'indulge' },
      { text: 'とにかく寝る！', type: 'rest' },
    ],
  },
  {
    id: 9,
    text: 'セルフケアで一番投資しているのは？',
    options: [
      { text: 'お風呂グッズ、スキンケア用品', type: 'bath' },
      { text: 'ジム会費、スポーツ用品', type: 'active' },
      { text: '食費、外食代', type: 'indulge' },
      { text: '快適な住環境、睡眠環境', type: 'rest' },
    ],
  },
  {
    id: 10,
    text: '「自分を大切にする」とは？',
    options: [
      { text: '体を清潔に、心地よく保つこと', type: 'bath' },
      { text: '健康な体を維持すること', type: 'active' },
      { text: '好きなことを我慢しないこと', type: 'indulge' },
      { text: '無理をしないこと', type: 'rest' },
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
  recommendation: string;
}> = {
  bath: {
    type: 'bath',
    title: '入浴＆リラクゼーション派',
    emoji: '♨️',
    percentage: 'お風呂愛 95%',
    description: 'お風呂こそ至高のセルフケア！温泉、銭湯、自宅のバスタイム、どれも大好きなあなた。湯船に浸かることで心身ともにリセットできることを知っています。日本人の DNA を感じます。',
    characteristics: ['温泉好き', '入浴剤コレクター', '清潔感大事', 'リラックス上手', '和の心'],
    recommendation: '週末は少し足を伸ばして、秘湯巡りはいかが？心も体も温まりますよ。',
  },
  active: {
    type: 'active',
    title: 'アクティブ運動派',
    emoji: '🏃',
    percentage: '運動習慣度 92%',
    description: '体を動かすことが最高のセルフケア！運動で汗を流すとストレスも一緒に流れていくことを実感しているあなた。健康的なライフスタイルで、心身ともにタフです。',
    characteristics: ['運動好き', '健康志向', 'エネルギッシュ', 'ストレス発散上手', '自己管理能力高い'],
    recommendation: '運動後のストレッチやケアも忘れずに。体を労わることも大切です。',
  },
  indulge: {
    type: 'indulge',
    title: 'ご褒美グルメ派',
    emoji: '🍰',
    percentage: 'ご褒美度 90%',
    description: '美味しいものを食べることが一番のセルフケア！頑張った自分へのご褒美に、美味しいスイーツや豪華なディナーを楽しむあなた。食べることで幸せホルモンが出ることを知っています。',
    characteristics: ['グルメ', '自分にご褒美', '食で幸せ', '五感を大切に', '人生を楽しむ'],
    recommendation: '時には体に優しい食事も取り入れて、バランスを意識してみてくださいね。',
  },
  rest: {
    type: 'rest',
    title: 'おうちでゆっくり休息派',
    emoji: '😴',
    percentage: '休息力 93%',
    description: 'とにかく休むことが最優先のセルフケア！睡眠と休息の大切さを知っているあなた。無理をせず、自分のペースで過ごすことで心身のバランスを保っています。',
    characteristics: ['休息を大切に', 'おうち時間好き', '無理をしない', 'マイペース', 'エネルギー充電上手'],
    recommendation: '休息と活動のメリハリをつけると、もっと休息の質が上がりますよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { bath: 0, active: 0, indulge: 0, rest: 0 };

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
