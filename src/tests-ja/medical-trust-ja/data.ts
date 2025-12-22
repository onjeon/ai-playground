// 医療への信頼度診断
export const questions = [
  {
    id: 1,
    text: '体調が悪い時、まず何をする？',
    options: [
      { text: 'すぐに病院に行く', type: 'high' },
      { text: 'しばらく様子を見てから受診', type: 'moderate' },
      { text: '市販薬で対処してみる', type: 'low' },
      { text: '自然治癒力に任せる', type: 'alternative' },
    ],
  },
  {
    id: 2,
    text: '医師の診断についてどう思う？',
    options: [
      { text: '専門家なので信頼している', type: 'high' },
      { text: '基本的には信頼するが確認もする', type: 'moderate' },
      { text: 'セカンドオピニオンを求めたい', type: 'low' },
      { text: '自分でも調べて判断する', type: 'alternative' },
    ],
  },
  {
    id: 3,
    text: '処方された薬についての姿勢は？',
    options: [
      { text: '指示通りにきちんと服用', type: 'high' },
      { text: '説明を聞いてから服用を決める', type: 'moderate' },
      { text: '副作用が心配で慎重になる', type: 'low' },
      { text: 'できれば薬は飲みたくない', type: 'alternative' },
    ],
  },
  {
    id: 4,
    text: '健康診断についてどう思う？',
    options: [
      { text: '毎年必ず受けている', type: 'high' },
      { text: '会社の健診は受ける', type: 'moderate' },
      { text: '必要性を感じた時だけ', type: 'low' },
      { text: '特に受けていない', type: 'alternative' },
    ],
  },
  {
    id: 5,
    text: 'ワクチン接種についての考えは？',
    options: [
      { text: '推奨されるものは積極的に接種', type: 'high' },
      { text: '情報を集めて判断する', type: 'moderate' },
      { text: '慎重に検討する', type: 'low' },
      { text: '自然免疫を重視したい', type: 'alternative' },
    ],
  },
  {
    id: 6,
    text: '健康情報の入手方法は？',
    options: [
      { text: '医師や医療機関から', type: 'high' },
      { text: '信頼できる医療サイトから', type: 'moderate' },
      { text: 'SNSや口コミも参考に', type: 'low' },
      { text: '代替医療や民間療法の情報も', type: 'alternative' },
    ],
  },
  {
    id: 7,
    text: '軽い風邪の時の対処法は？',
    options: [
      { text: '念のため病院に行く', type: 'high' },
      { text: '市販薬を飲んで休む', type: 'moderate' },
      { text: '栄養と睡眠で治す', type: 'low' },
      { text: '民間療法を試す', type: 'alternative' },
    ],
  },
  {
    id: 8,
    text: '医療費についての考えは？',
    options: [
      { text: '健康のためなら惜しまない', type: 'high' },
      { text: '必要な医療にはお金をかける', type: 'moderate' },
      { text: 'なるべく抑えたい', type: 'low' },
      { text: '予防や生活習慣改善に投資', type: 'alternative' },
    ],
  },
  {
    id: 9,
    text: '代替医療（漢方、鍼灸など）への関心は？',
    options: [
      { text: 'あまり関心がない', type: 'high' },
      { text: '西洋医学と併用したい', type: 'moderate' },
      { text: '積極的に取り入れたい', type: 'low' },
      { text: '西洋医学より好む', type: 'alternative' },
    ],
  },
  {
    id: 10,
    text: '日本の医療システムについてどう思う？',
    options: [
      { text: '世界的に見て優れている', type: 'high' },
      { text: '概ね良いが改善点もある', type: 'moderate' },
      { text: '問題点が多いと思う', type: 'low' },
      { text: 'より多様な選択肢がほしい', type: 'alternative' },
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
  high: {
    type: 'high',
    title: '医療信頼派タイプ',
    emoji: '🏥💯',
    style: '医療への信頼度：高信頼型',
    description: 'あなたは現代医療を強く信頼しているタイプです。医師の専門性を尊重し、医療機関を積極的に利用します。健康管理において科学的なアプローチを重視する姿勢を持っています。',
    characteristics: ['医療への高い信頼', '専門家を尊重', '定期検診を重視', '予防医療に積極的'],
    tips: ['信頼は大切だが疑問も大事', '自分の体の声も聞いて', 'セカンドオピニオンも選択肢に'],
  },
  moderate: {
    type: 'moderate',
    title: 'バランス重視タイプ',
    emoji: '⚖️🩺',
    style: '医療への信頼度：バランス型',
    description: 'あなたは医療を信頼しつつも、自分でも情報を集めて判断するバランスの取れたタイプです。医師との対話を大切にし、納得した上で治療を受けたいと考えています。',
    characteristics: ['バランスの取れた姿勢', '情報収集を重視', '医師との対話を大切に', '主体的な判断'],
    tips: ['理想的なバランス感覚', '信頼できる医師を見つけて', '情報の質にも注意を'],
  },
  low: {
    type: 'low',
    title: '慎重派タイプ',
    emoji: '🤔💊',
    style: '医療への信頼度：慎重型',
    description: 'あなたは医療に対して慎重な姿勢を持つタイプです。治療や薬について詳しく調べ、複数の意見を聞いてから判断したいと考えています。医療への過度な依存を避けたい傾向があります。',
    characteristics: ['慎重な姿勢', '自己判断を重視', '薬への慎重さ', '複数の情報源を参照'],
    tips: ['慎重さは悪くないが', '重症時は早めの受診を', '信頼できる医療者を探して'],
  },
  alternative: {
    type: 'alternative',
    title: '自然療法派タイプ',
    emoji: '🌿🙏',
    style: '医療への信頼度：自然志向型',
    description: 'あなたは自然治癒力や代替医療を重視するタイプです。できるだけ薬に頼らず、生活習慣や自然療法で健康を維持したいと考えています。ホリスティックな健康観を持っています。',
    characteristics: ['自然治癒力を信じる', '代替医療に関心', '薬に頼らない姿勢', 'ホリスティックな視点'],
    tips: ['自然療法も有効な場合あり', '緊急時は西洋医学も活用を', '科学的根拠も確認して'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, moderate: 0, low: 0, alternative: 0 };

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
