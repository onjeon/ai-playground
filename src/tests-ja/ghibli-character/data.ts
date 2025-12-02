// ジブリキャラ診断 (지브리 캐릭터 테스트 - 어떤 지브리 캐릭터와 닮았는지)
export const questions = [
  {
    id: 1,
    text: '困っている人を見かけたら？',
    options: [
      { text: '迷わず助けに行く', type: 'chihiro' },
      { text: '空から颯爽と助けに来る', type: 'nausicaa' },
      { text: 'まずは観察して状況を把握', type: 'howl' },
      { text: 'ちょっと照れながらも手を差し伸べる', type: 'totoro' },
    ],
  },
  {
    id: 2,
    text: '新しい環境に放り込まれたら？',
    options: [
      { text: '最初は戸惑うけど、必死に適応する', type: 'chihiro' },
      { text: '自分の信念を貫いて行動する', type: 'nausicaa' },
      { text: '自分らしいやり方で切り抜ける', type: 'howl' },
      { text: 'マイペースにゆっくり馴染む', type: 'totoro' },
    ],
  },
  {
    id: 3,
    text: '理想の休日の過ごし方は？',
    options: [
      { text: '家族や大切な人と過ごす', type: 'chihiro' },
      { text: '自然の中で冒険', type: 'nausicaa' },
      { text: '自分の趣味に没頭', type: 'howl' },
      { text: 'お昼寝と森林浴', type: 'totoro' },
    ],
  },
  {
    id: 4,
    text: '人間関係で大切にしていることは？',
    options: [
      { text: '約束を守ること', type: 'chihiro' },
      { text: 'すべての命を尊重すること', type: 'nausicaa' },
      { text: '自由でいること', type: 'howl' },
      { text: 'のんびりした関係性', type: 'totoro' },
    ],
  },
  {
    id: 5,
    text: '魔法が使えるとしたら？',
    options: [
      { text: '大切な人を守るために使う', type: 'chihiro' },
      { text: '世界を救うために使う', type: 'nausicaa' },
      { text: '自分の城を建てる', type: 'howl' },
      { text: '森や動物と話したい', type: 'totoro' },
    ],
  },
  {
    id: 6,
    text: '強敵と対峙した時は？',
    options: [
      { text: '怖くても逃げない', type: 'chihiro' },
      { text: '対話で解決しようとする', type: 'nausicaa' },
      { text: '華麗に戦う、でも逃げることもある', type: 'howl' },
      { text: '戦わない、でも守るべきものは守る', type: 'totoro' },
    ],
  },
  {
    id: 7,
    text: 'あなたの性格を一言で言うと？',
    options: [
      { text: '一生懸命', type: 'chihiro' },
      { text: '正義感が強い', type: 'nausicaa' },
      { text: 'ナルシスト...いや、自信家', type: 'howl' },
      { text: 'おおらか', type: 'totoro' },
    ],
  },
  {
    id: 8,
    text: '食べ物の好みは？',
    options: [
      { text: '両親が作ってくれたご飯', type: 'chihiro' },
      { text: '自然の恵み、野菜中心', type: 'nausicaa' },
      { text: '見た目も美しい料理', type: 'howl' },
      { text: 'シンプルで美味しいもの', type: 'totoro' },
    ],
  },
  {
    id: 9,
    text: '住むならどんな場所？',
    options: [
      { text: '家族と暮らせる温かい家', type: 'chihiro' },
      { text: '風の吹く高台', type: 'nausicaa' },
      { text: '動く城のような不思議な場所', type: 'howl' },
      { text: '大きな木のある森', type: 'totoro' },
    ],
  },
  {
    id: 10,
    text: '人生で一番大切なものは？',
    options: [
      { text: '愛する人との絆', type: 'chihiro' },
      { text: 'すべての生命', type: 'nausicaa' },
      { text: '自分らしく生きること', type: 'howl' },
      { text: '穏やかな毎日', type: 'totoro' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  movie: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  famousQuote: string;
}> = {
  chihiro: {
    type: 'chihiro',
    title: '千尋タイプ',
    emoji: '🏮',
    movie: '千と千尋の神隠し',
    description: '最初は頼りなくても、困難に立ち向かう中で成長していくあなた。大切な人のためなら、どんな試練も乗り越えられる強さを持っています。純粋な心と一生懸命さが周りを動かします。',
    characteristics: ['成長する力', '純粋な心', '一生懸命', '約束を守る', '愛情深い'],
    strengths: ['逆境での成長力', '周りを味方にする力', '諦めない心'],
    famousQuote: '「お父さんとお母さんを助けに来ました」',
  },
  nausicaa: {
    type: 'nausicaa',
    title: 'ナウシカタイプ',
    emoji: '🌿',
    movie: '風の谷のナウシカ',
    description: 'すべての命を愛し、争いよりも共存を選ぶあなた。強い正義感と慈悲の心を持ち、自らの身を呈してでも大切なものを守ろうとします。自然を愛し、理想のために行動できるリーダータイプです。',
    characteristics: ['正義感', '慈悲深い', '勇敢', '自然を愛する', 'リーダーシップ'],
    strengths: ['揺るがない信念', '他者への共感力', '行動力'],
    famousQuote: '「その子は関係ないわ！その子を放して！」',
  },
  howl: {
    type: 'howl',
    title: 'ハウルタイプ',
    emoji: '🔮',
    movie: 'ハウルの動く城',
    description: '自由を愛し、自分らしく生きることを大切にするあなた。一見わがままに見えても、実は繊細で優しい心の持ち主。美しいものを愛し、本当に大切な人のためなら全力で戦います。',
    characteristics: ['自由人', '美意識が高い', '繊細', '実は優しい', 'ミステリアス'],
    strengths: ['独自の感性', 'ここぞという時の行動力', '多才'],
    famousQuote: '「美しくなければ生きている意味がない」',
  },
  totoro: {
    type: 'totoro',
    title: 'トトロタイプ',
    emoji: '🌳',
    movie: 'となりのトトロ',
    description: 'おおらかで穏やかなあなた。慌てず騒がず、マイペースに人生を楽しんでいます。存在するだけで周りを癒す、不思議な安心感があります。自然を愛し、純粋な心を忘れません。',
    characteristics: ['おおらか', 'マイペース', '癒し系', '自然を愛する', '優しい'],
    strengths: ['安定感', '癒し力', '純粋さを忘れない'],
    famousQuote: '（大きな木と共に静かに佇む）',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { chihiro: 0, nausicaa: 0, howl: 0, totoro: 0 };

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
