// 嫉妬タイプ診断 (질투 유형 진단)
export const questions = [
  {
    id: 1,
    text: '恋人が異性の友達と二人で食事に行くと言ったら？',
    options: [
      { text: '「誰？どこで？何時まで？」と質問攻め', type: 'intense' },
      { text: '「楽しんできてね」と言いつつモヤモヤ', type: 'hidden' },
      { text: '「いいね、行っておいで」と気にしない', type: 'cool' },
      { text: '「私も行きたい」とさりげなく参加', type: 'clever' },
    ],
  },
  {
    id: 2,
    text: '恋人のスマホに知らない異性からの通知が見えたら？',
    options: [
      { text: '「誰からのLINE？」とすぐ聞く', type: 'intense' },
      { text: '気になるけど何も言わない', type: 'hidden' },
      { text: '特に気にならない', type: 'cool' },
      { text: 'さりげなく話題を振って探る', type: 'clever' },
    ],
  },
  {
    id: 3,
    text: '恋人が元カレ/元カノの話をしたら？',
    options: [
      { text: '不機嫌になる、話題を変えてほしい', type: 'intense' },
      { text: '平静を装うけど内心複雑', type: 'hidden' },
      { text: '普通に聞ける、過去は過去', type: 'cool' },
      { text: '「私/俺の方がいいでしょ？」と冗談めかす', type: 'clever' },
    ],
  },
  {
    id: 4,
    text: '恋人がSNSで異性の投稿にいいねしていたら？',
    options: [
      { text: 'チェックして誰にいいねしてるか把握', type: 'intense' },
      { text: 'ちょっと気になるけどスルー', type: 'hidden' },
      { text: '別に何とも思わない', type: 'cool' },
      { text: '自分の投稿にもいいねしてと冗談で言う', type: 'clever' },
    ],
  },
  {
    id: 5,
    text: '恋人が「この人かっこいい/かわいい」と芸能人を褒めたら？',
    options: [
      { text: '「へー、そういうのが好きなんだ」と少し不機嫌', type: 'intense' },
      { text: '笑顔で聞くけど比べられてる気がする', type: 'hidden' },
      { text: '一緒に盛り上がる', type: 'cool' },
      { text: '「私/俺は？」と甘える', type: 'clever' },
    ],
  },
  {
    id: 6,
    text: '恋人の職場に魅力的な異性がいると知ったら？',
    options: [
      { text: 'どんな人か詳しく聞き出す', type: 'intense' },
      { text: '気にしてないフリして内心ドキドキ', type: 'hidden' },
      { text: '仕事は仕事、気にしない', type: 'cool' },
      { text: 'たまに職場にお弁当を届けに行く', type: 'clever' },
    ],
  },
  {
    id: 7,
    text: '恋人が返信遅い時、何を考える？',
    options: [
      { text: '誰かと一緒にいるのでは？と疑う', type: 'intense' },
      { text: 'ちょっと不安だけど待つ', type: 'hidden' },
      { text: '忙しいのかなと気楽に待つ', type: 'cool' },
      { text: '可愛いスタンプ連打で催促', type: 'clever' },
    ],
  },
  {
    id: 8,
    text: '友達から「あなたの恋人、モテそうだよね」と言われたら？',
    options: [
      { text: '「え、誰かに狙われてる？」と警戒', type: 'intense' },
      { text: '嬉しいような不安なような複雑な気持ち', type: 'hidden' },
      { text: '「でしょ？自慢の恋人」と嬉しい', type: 'cool' },
      { text: '「だから私/俺が捕まえたの」と得意げ', type: 'clever' },
    ],
  },
  {
    id: 9,
    text: '恋人が飲み会で帰りが遅くなったら？',
    options: [
      { text: '何度もLINEして居場所を確認', type: 'intense' },
      { text: '心配しながらも連絡を控える', type: 'hidden' },
      { text: '「気をつけてね」と一言送って待つ', type: 'cool' },
      { text: '「迎えに行こうか？」と提案', type: 'clever' },
    ],
  },
  {
    id: 10,
    text: '自分の嫉妬心について正直に言うと？',
    options: [
      { text: '嫉妬深い自覚あり、コントロールが難しい', type: 'intense' },
      { text: '嫉妬するけど表には出さない', type: 'hidden' },
      { text: 'あまり嫉妬しないタイプ', type: 'cool' },
      { text: '嫉妬は愛情表現の一つだと思う', type: 'clever' },
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
  intense: {
    type: 'intense',
    title: '情熱的ヤキモチタイプ',
    emoji: '🔥',
    percentage: '嫉妬度 95%',
    description: '好きすぎて嫉妬が止まらない情熱的なあなた。相手への愛が深いからこそ、不安になりやすいのです。その熱い気持ちは素敵ですが、相手を信じることも大切。',
    characteristics: ['情熱的', '独占欲が強い', '愛情深い', '不安になりやすい', 'ストレート'],
    advice: '嫉妬は愛の証拠。でも相手を縛りすぎないように、信頼関係を築いていきましょう。',
  },
  hidden: {
    type: 'hidden',
    title: '隠れヤキモチタイプ',
    emoji: '🌙',
    percentage: '嫉妬度 70%（内に秘めるタイプ）',
    description: '嫉妬してるのに平気なフリをするあなた。本当は気になって仕方ないのに、表には出さない奥ゆかしさ。でも、たまには素直に伝えた方が楽になりますよ。',
    characteristics: ['奥ゆかしい', '我慢強い', '感情を隠す', '繊細', '気遣い屋'],
    advice: '溜め込みすぎないで。「ちょっと寂しかった」と伝えるだけで、二人の絆は深まります。',
  },
  cool: {
    type: 'cool',
    title: '余裕のクールタイプ',
    emoji: '😎',
    percentage: '嫉妬度 20%',
    description: '恋人を信頼していて、嫉妬とは無縁のあなた。心に余裕があり、相手の自由を尊重できる大人な姿勢。ただ、たまには可愛く嫉妬してみても良いかも？',
    characteristics: ['心に余裕がある', '信頼上手', '自立している', '大人', 'ポジティブ'],
    advice: '素晴らしい信頼関係！たまにはヤキモチを見せると、相手は嬉しいかもしれませんよ。',
  },
  clever: {
    type: 'clever',
    title: '戦略的ヤキモチタイプ',
    emoji: '🦊',
    percentage: '嫉妬度 60%（スマートに対処）',
    description: '嫉妬はするけど、上手に対処できる賢いあなた。ヤキモチすら可愛く見せる術を知っています。相手をコントロールするのではなく、自分の魅力で惹きつけるタイプ。',
    characteristics: ['賢い', '要領がいい', 'チャーミング', '自己肯定感高め', '駆け引き上手'],
    advice: 'その器用さは武器！でも時には素直な気持ちをぶつけることも大切です。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { intense: 0, hidden: 0, cool: 0, clever: 0 };

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
