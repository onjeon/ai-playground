// 拒絶からの回復診断
export const questions = [
  {
    id: 1,
    text: '告白してフラれた直後、どうする？',
    options: [
      { text: '友達に電話して話を聞いてもらう', type: 'social' },
      { text: '一人でカラオケに行って歌いまくる', type: 'active' },
      { text: '布団にくるまって一日中寝る', type: 'rest' },
      { text: '「次がある！」とすぐ切り替える', type: 'resilient' },
    ],
  },
  {
    id: 2,
    text: '就職の最終面接で落ちた時は？',
    options: [
      { text: '家族や友人に慰めてもらう', type: 'social' },
      { text: '次の会社の対策をすぐ始める', type: 'active' },
      { text: 'しばらく何もしたくない…', type: 'rest' },
      { text: '「縁がなかった」と受け入れる', type: 'resilient' },
    ],
  },
  {
    id: 3,
    text: '企画が上司に却下された時は？',
    options: [
      { text: '同僚に愚痴を聞いてもらう', type: 'social' },
      { text: '却下の理由を分析して改善案を考える', type: 'active' },
      { text: 'モチベーションが下がってしばらく停滞', type: 'rest' },
      { text: '「次のチャンスに活かそう」と前向き', type: 'resilient' },
    ],
  },
  {
    id: 4,
    text: '仲間外れにされた経験、どう乗り越えた？',
    options: [
      { text: '他のグループの人と仲良くなった', type: 'social' },
      { text: '自分磨きに没頭した', type: 'active' },
      { text: '時間が解決してくれるまで待った', type: 'rest' },
      { text: '気にしないように心を強く持った', type: 'resilient' },
    ],
  },
  {
    id: 5,
    text: 'SNSで投稿がスルーされた時は？',
    options: [
      { text: '友達にDMで「見て！」とアピール', type: 'social' },
      { text: 'もっといい投稿を作って再チャレンジ', type: 'active' },
      { text: 'しばらくSNSから離れる', type: 'rest' },
      { text: '「いいねの数が全てじゃない」と割り切る', type: 'resilient' },
    ],
  },
  {
    id: 6,
    text: '合コンで誰からも連絡先を聞かれなかった…',
    options: [
      { text: '友達と「今日はハズレだったね」と笑い話に', type: 'social' },
      { text: '次の合コンに向けてファッション研究', type: 'active' },
      { text: '自分に魅力がないのかと落ち込む', type: 'rest' },
      { text: '「タイミングの問題」と気にしない', type: 'resilient' },
    ],
  },
  {
    id: 7,
    text: '長年の夢が叶わないと分かった時は？',
    options: [
      { text: '大切な人に気持ちを打ち明ける', type: 'social' },
      { text: '新しい夢を見つけに動き出す', type: 'active' },
      { text: 'しばらく心の整理に時間をかける', type: 'rest' },
      { text: '経験を糧に別の道を歩む', type: 'resilient' },
    ],
  },
  {
    id: 8,
    text: '温泉旅行を断られた時の気持ちは？',
    options: [
      { text: '他の友達を誘ってみる', type: 'social' },
      { text: '一人旅もいいかも！と計画変更', type: 'active' },
      { text: 'ちょっとショック…また今度にしよう', type: 'rest' },
      { text: '「予定が合わなかっただけ」と思う', type: 'resilient' },
    ],
  },
  {
    id: 9,
    text: '自信作の料理を「イマイチ」と言われたら？',
    options: [
      { text: '「どこがダメだった？」と素直に聞く', type: 'social' },
      { text: 'レシピを研究してリベンジする', type: 'active' },
      { text: 'しばらく料理する気が失せる', type: 'rest' },
      { text: '「味の好みは人それぞれ」と思う', type: 'resilient' },
    ],
  },
  {
    id: 10,
    text: '拒絶された経験を振り返ると？',
    options: [
      { text: '周りの人に支えられて乗り越えた', type: 'social' },
      { text: '悔しさをバネに成長できた', type: 'active' },
      { text: '時間が癒してくれた', type: 'rest' },
      { text: '気にしすぎないのが一番', type: 'resilient' },
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
  recoveryTip: string;
}> = {
  social: {
    type: 'social',
    title: '人とのつながりで回復タイプ',
    emoji: '🤝',
    percentage: '社会的回復力 93%',
    description: '辛い時こそ人との繋がりを大切にするあなた。話を聞いてもらうことで心が軽くなり、周囲のサポートで立ち直る力を持っています。「一人で抱え込まない」が回復の鍵。',
    characteristics: ['話すことで癒される', '友達を大切にする', '共感力が高い', 'サポートを求められる', '人脈が財産'],
    recoveryTip: '信頼できる人に気持ちを打ち明けることが回復の近道！一人で抱え込まないで。',
  },
  active: {
    type: 'active',
    title: '行動で乗り越えるタイプ',
    emoji: '🔥',
    percentage: '行動力 95%',
    description: '落ち込んでいる暇があったら動く！というあなた。悔しさや悲しみを原動力に変え、次のチャレンジに向かうことで回復します。その前向きさは周囲の励みにも。',
    characteristics: ['悔しさをバネに', '行動で気分転換', '成長志向', 'ポジティブ変換', 'チャレンジ精神'],
    recoveryTip: '行動する前に少しだけ気持ちの整理を。走り出す前の一息が大切です。',
  },
  rest: {
    type: 'rest',
    title: '時間をかけて癒すタイプ',
    emoji: '🛁',
    percentage: '回復に必要な休息度 90%',
    description: '心の傷は時間が癒してくれると知っているあなた。無理に元気を出そうとせず、自分のペースで回復します。温泉でゆっくり、美味しいものを食べて、心身を休めることが大切。',
    characteristics: ['自分のペースを大切に', '無理をしない', 'セルフケア上手', '内省的', '回復に時間をかける'],
    recoveryTip: '休むことは弱さじゃない。心の充電期間を大切に、焦らずゆっくりと。',
  },
  resilient: {
    type: 'resilient',
    title: '強靭なメンタルタイプ',
    emoji: '💪',
    percentage: 'レジリエンス 97%',
    description: '拒絶をあまり引きずらないあなた。「縁がなかった」「タイミングの問題」と合理的に受け止め、すぐに次に進む強さを持っています。ただし、たまには感情を認めることも大切。',
    characteristics: ['切り替えが早い', '合理的思考', 'ストレス耐性が高い', '前向き', 'メンタル強者'],
    recoveryTip: '強さの中にも、時には「悲しい」と感じる自分を許してあげてくださいね。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { social: 0, active: 0, rest: 0, resilient: 0 };

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
