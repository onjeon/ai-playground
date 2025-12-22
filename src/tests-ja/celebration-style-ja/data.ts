// お祝いスタイル診断 - あなたはどうやってお祝いする？
export const questions = [
  {
    id: 1,
    text: '友達の誕生日、どうお祝いする？',
    options: [
      { text: 'サプライズパーティーを企画！', type: 'organizer' },
      { text: '心を込めたプレゼントを用意', type: 'thoughtful' },
      { text: '「おめでとう！」とLINEで祝う', type: 'casual' },
      { text: '一緒に美味しいものを食べに行く', type: 'experience' },
    ],
  },
  {
    id: 2,
    text: 'お正月はどう過ごしたい？',
    options: [
      { text: '親戚一同で盛大に集まる', type: 'organizer' },
      { text: '家族でゆっくりおせちを楽しむ', type: 'thoughtful' },
      { text: '特に何もせず、普通に過ごす', type: 'casual' },
      { text: '初詣に行ったり、旅行に出かけたり', type: 'experience' },
    ],
  },
  {
    id: 3,
    text: '自分の昇進が決まったら？',
    options: [
      { text: '同僚を集めて打ち上げを開催', type: 'organizer' },
      { text: '家族や恋人と静かにお祝い', type: 'thoughtful' },
      { text: '特に何もしない、照れくさい', type: 'casual' },
      { text: '自分へのご褒美に何か特別なことを', type: 'experience' },
    ],
  },
  {
    id: 4,
    text: '結婚式に招待されたら？',
    options: [
      { text: '二次会の幹事を買って出る！', type: 'organizer' },
      { text: '新郎新婦の思い出を振り返るスピーチを準備', type: 'thoughtful' },
      { text: '普通に参列して楽しむ', type: 'casual' },
      { text: '会場の雰囲気や料理を満喫', type: 'experience' },
    ],
  },
  {
    id: 5,
    text: 'クリスマスの過ごし方は？',
    options: [
      { text: 'ホームパーティーを主催する', type: 'organizer' },
      { text: '大切な人と特別なディナー', type: 'thoughtful' },
      { text: '普段と変わらず過ごす', type: 'casual' },
      { text: 'イルミネーションを見に行く', type: 'experience' },
    ],
  },
  {
    id: 6,
    text: '送別会を任されたら？',
    options: [
      { text: '全員参加の盛大な会を企画', type: 'organizer' },
      { text: '色紙や記念品を心を込めて準備', type: 'thoughtful' },
      { text: 'シンプルな飲み会でいいかな', type: 'casual' },
      { text: '思い出の場所での食事会を提案', type: 'experience' },
    ],
  },
  {
    id: 7,
    text: '子供の入学式、親としてどうする？',
    options: [
      { text: '両家の祖父母も招いて記念撮影', type: 'organizer' },
      { text: '子供の好きなケーキでお祝い', type: 'thoughtful' },
      { text: '式に参加するだけで十分', type: 'casual' },
      { text: '式の後は家族でお出かけ', type: 'experience' },
    ],
  },
  {
    id: 8,
    text: '還暦のお祝い、どう計画する？',
    options: [
      { text: '親戚一同を集めて祝賀会', type: 'organizer' },
      { text: '赤いちゃんちゃんこと感謝の手紙', type: 'thoughtful' },
      { text: '本人の希望を聞いてシンプルに', type: 'casual' },
      { text: '温泉旅行をプレゼント', type: 'experience' },
    ],
  },
  {
    id: 9,
    text: '何かいいことがあったとき、最初にすることは？',
    options: [
      { text: '友達を集めて報告会', type: 'organizer' },
      { text: '大切な人に真っ先に伝える', type: 'thoughtful' },
      { text: '特に言わない、自分の中で喜ぶ', type: 'casual' },
      { text: '美味しいものを食べに行く！', type: 'experience' },
    ],
  },
  {
    id: 10,
    text: 'お祝いで一番大切だと思うことは？',
    options: [
      { text: 'みんなで盛り上がること', type: 'organizer' },
      { text: '気持ちを込めること', type: 'thoughtful' },
      { text: '相手に負担をかけないこと', type: 'casual' },
      { text: '特別な体験を共有すること', type: 'experience' },
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
  organizer: {
    type: 'organizer',
    title: '盛り上げ幹事タイプ',
    emoji: '🎉',
    percentage: 'パーティー力 90%',
    description: 'お祝いごとには全力投球！みんなを集めて盛大に祝うのが大好きなタイプ。幹事力が高く、イベントを成功させる才能があります。忘年会や新年会では頼られる存在！',
    characteristics: ['リーダーシップ', '企画力', '社交的', 'エネルギッシュ', '面倒見が良い'],
    advice: 'あなたのおかげでみんなの思い出が輝く！でも幹事疲れには気をつけて。たまには主役になろう。',
  },
  thoughtful: {
    type: 'thoughtful',
    title: '心込め上手タイプ',
    emoji: '💝',
    percentage: '思いやり度 95%',
    description: '派手さより心を大切にするタイプ。相手のことを深く考え、一番喜んでもらえる方法を選びます。手書きの手紙やオーダーメイドのプレゼントを贈ることも。',
    characteristics: ['思いやり深い', '観察力', '丁寧', '誠実', '感受性豊か'],
    advice: 'あなたの心のこもったお祝いは一生の宝物になる。その優しさを自分にも向けてあげてね。',
  },
  casual: {
    type: 'casual',
    title: 'あっさりお祝いタイプ',
    emoji: '✌️',
    percentage: 'マイペース度 80%',
    description: '「おめでとう」の一言で十分！形式張ったお祝いより、自然体を大切にするタイプ。相手にも自分にも負担をかけない、現代的でスマートなスタイルです。',
    characteristics: ['さっぱり', '合理的', 'プレッシャーに強い', '自然体', '効率重視'],
    advice: 'シンプルでいい。でもたまには「ちょっと特別」を入れると、関係がもっと深まるかも。',
  },
  experience: {
    type: 'experience',
    title: '体験共有タイプ',
    emoji: '🌟',
    percentage: '思い出作り力 85%',
    description: 'モノより体験！一緒に特別な時間を過ごすことがお祝いだと考えるタイプ。旅行、食事、イベントなど、思い出に残る経験を大切にします。',
    characteristics: ['冒険心', '感性豊か', '今を生きる', '好奇心旺盛', 'グルメ'],
    advice: '共有した体験は色あせない宝物になる。写真を撮って、思い出を形に残すのも忘れずに！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { organizer: 0, thoughtful: 0, casual: 0, experience: 0 };

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
