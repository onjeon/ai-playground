// 接客タイプ診断 - あなたのおもてなしスタイルは？
export const questions = [
  {
    id: 1,
    text: 'お客様が入店してきたら最初にどうする？',
    options: [
      { text: '明るく元気に「いらっしゃいませ！」', type: 'energetic' },
      { text: 'お客様のペースを見て、落ち着いて挨拶', type: 'calm' },
      { text: 'お客様が何を求めているか観察する', type: 'analytical' },
      { text: '困っていそうなら声をかける程度で', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'お客様から「おすすめは？」と聞かれたら',
    options: [
      { text: '「これ、絶対美味しいですよ！」と熱く', type: 'energetic' },
      { text: 'お客様の好みを聞いてから提案', type: 'calm' },
      { text: 'データや人気ランキングを元に説明', type: 'analytical' },
      { text: '「どれも良いですよ」と控えめに', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: 'クレームを受けたとき',
    options: [
      { text: '全力で謝罪、すぐに対応しようとする', type: 'energetic' },
      { text: 'まず落ち着いてお客様の話を聞く', type: 'calm' },
      { text: '原因を特定して論理的に解決策を提示', type: 'analytical' },
      { text: '上司や担当者に引き継ぐ', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '常連のお客様への対応は？',
    options: [
      { text: '「いつもありがとうございます！」と笑顔全開', type: 'energetic' },
      { text: '好みを覚えて、さりげなくサービス', type: 'calm' },
      { text: '購買履歴を把握して適切な提案', type: 'analytical' },
      { text: '他のお客様と同じように対応', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: 'お客様が迷っている様子のとき',
    options: [
      { text: '積極的に声をかけてアドバイス', type: 'energetic' },
      { text: 'タイミングを見てそっと声をかける', type: 'calm' },
      { text: '比較ポイントを整理して説明', type: 'analytical' },
      { text: '聞かれるまで待つ', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: '忙しい時間帯の接客は？',
    options: [
      { text: 'テンション上げて効率よく回す', type: 'energetic' },
      { text: '焦らず丁寧さを維持する', type: 'calm' },
      { text: 'オペレーションを最適化して対応', type: 'analytical' },
      { text: '必要最低限の対応に絞る', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '外国人のお客様への対応は？',
    options: [
      { text: 'ジェスチャーと笑顔でなんとかする！', type: 'energetic' },
      { text: 'ゆっくり分かりやすく説明する', type: 'calm' },
      { text: '翻訳アプリや写真を活用して正確に', type: 'analytical' },
      { text: '話せる同僚に助けを求める', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: 'お客様との会話について',
    options: [
      { text: '世間話も含めてたくさん話したい', type: 'energetic' },
      { text: '適度な距離感で心地よい会話', type: 'calm' },
      { text: '必要な情報を過不足なく伝える', type: 'analytical' },
      { text: '業務に必要なことだけで十分', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '接客で大切にしていることは？',
    options: [
      { text: 'お客様を笑顔にすること', type: 'energetic' },
      { text: 'お客様に安心感を与えること', type: 'calm' },
      { text: '正確で質の高いサービス', type: 'analytical' },
      { text: '迷惑をかけないこと', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'お客様からお礼を言われたとき',
    options: [
      { text: '「嬉しいです！また来てください！」', type: 'energetic' },
      { text: '「こちらこそ」と温かく返す', type: 'calm' },
      { text: '「お役に立てて良かったです」と丁寧に', type: 'analytical' },
      { text: '「いえいえ」と控えめに', type: 'minimal' },
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
  energetic: {
    type: 'energetic',
    title: '元気ハツラツ接客タイプ',
    emoji: '☀️',
    percentage: '接客エネルギー 95%',
    description: '明るさと元気でお客様を笑顔にするタイプ！あなたがいると場が華やぎます。居酒屋やアパレル、エンタメ系の接客で大活躍。ただし、静かなお店では少し抑えめに。',
    characteristics: ['元気', '明るい', '社交的', 'ムードメーカー', 'エネルギッシュ'],
    advice: 'その元気さは最高の武器！お客様のテンションに合わせる引き出しも持つと完璧。',
  },
  calm: {
    type: 'calm',
    title: '落ち着きおもてなしタイプ',
    emoji: '🍵',
    percentage: '接客エネルギー 70%',
    description: '穏やかで心地よい接客ができるタイプ。お客様に安心感を与え、高級店や年配のお客様からも信頼されます。日本の「おもてなし」を体現する存在。',
    characteristics: ['落ち着き', '丁寧', '観察力', '安心感', '品格'],
    advice: 'その落ち着きは貴重な才能。時には親しみやすさも見せると距離が縮まります。',
  },
  analytical: {
    type: 'analytical',
    title: 'プロフェッショナルタイプ',
    emoji: '💼',
    percentage: '接客エネルギー 60%',
    description: '正確さと効率を重視するタイプ。商品知識が豊富で、論理的な説明が得意。専門店やBtoB営業で信頼される存在。データを武器にした提案力が光ります。',
    characteristics: ['論理的', '正確', '知識豊富', '効率的', '信頼性'],
    advice: '専門性は大きな強み！感情面のつながりも意識するとより満足度アップ。',
  },
  minimal: {
    type: 'minimal',
    title: '控えめサポートタイプ',
    emoji: '🌿',
    percentage: '接客エネルギー 35%',
    description: '押しつけがましくない、さりげない接客スタイル。一人で静かに過ごしたいお客様には最適。ただ、もう少し積極性があると、お客様の満足度が上がるかも。',
    characteristics: ['控えめ', 'さりげない', '自然体', '邪魔しない', '謙虚'],
    advice: '控えめさも個性！でも「困ったら聞いてね」オーラは出せると良いですね。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { energetic: 0, calm: 0, analytical: 0, minimal: 0 };

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
