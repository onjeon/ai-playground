// 写真の撮り方診断
export const questions = [
  {
    id: 1,
    text: '旅行先で最も撮りたいものは？',
    options: [
      { text: '絶景や名所の風景', type: 'landscape' },
      { text: '一緒にいる人との記念写真', type: 'people' },
      { text: '美味しそうな料理', type: 'lifestyle' },
      { text: '芸術的な構図やディテール', type: 'artistic' },
    ],
  },
  {
    id: 2,
    text: '写真を撮る時のこだわりは？',
    options: [
      { text: '光や構図を考えて撮る', type: 'landscape' },
      { text: '人の自然な表情を捉える', type: 'people' },
      { text: 'インスタ映えを意識', type: 'lifestyle' },
      { text: '独自の視点や表現', type: 'artistic' },
    ],
  },
  {
    id: 3,
    text: 'スマホのカメラロールには何が多い？',
    options: [
      { text: '風景や自然の写真', type: 'landscape' },
      { text: '友達や家族の写真', type: 'people' },
      { text: '食べ物やカフェの写真', type: 'lifestyle' },
      { text: '街角スナップやアート', type: 'artistic' },
    ],
  },
  {
    id: 4,
    text: '撮った写真をどうする？',
    options: [
      { text: '風景をプリントして飾る', type: 'landscape' },
      { text: '思い出として大切に保存', type: 'people' },
      { text: 'SNSに投稿してシェア', type: 'lifestyle' },
      { text: '作品として編集・加工', type: 'artistic' },
    ],
  },
  {
    id: 5,
    text: '写真の編集についてどう思う？',
    options: [
      { text: '自然な色味を大切に', type: 'landscape' },
      { text: '明るくキレイに補正', type: 'people' },
      { text: 'フィルターで雰囲気を出す', type: 'lifestyle' },
      { text: '芸術的に作り込む', type: 'artistic' },
    ],
  },
  {
    id: 6,
    text: '良い写真の定義は？',
    options: [
      { text: '美しい景色を忠実に捉えた', type: 'landscape' },
      { text: '大切な人の笑顔が写っている', type: 'people' },
      { text: 'いいねがたくさんもらえる', type: 'lifestyle' },
      { text: '独創的で印象的', type: 'artistic' },
    ],
  },
  {
    id: 7,
    text: 'カメラ機材へのこだわりは？',
    options: [
      { text: '高画質で撮れるカメラ', type: 'landscape' },
      { text: 'ポートレートに強いカメラ', type: 'people' },
      { text: 'スマホで十分', type: 'lifestyle' },
      { text: '表現に合った機材を選ぶ', type: 'artistic' },
    ],
  },
  {
    id: 8,
    text: '写真を撮る頻度は？',
    options: [
      { text: '絶景に出会った時だけ', type: 'landscape' },
      { text: '人と会う時はよく撮る', type: 'people' },
      { text: '日常的によく撮る', type: 'lifestyle' },
      { text: 'インスピレーションを感じた時', type: 'artistic' },
    ],
  },
  {
    id: 9,
    text: '自撮りについてどう思う？',
    options: [
      { text: '景色がメイン、人は添え物程度', type: 'landscape' },
      { text: '思い出に残したい時は撮る', type: 'people' },
      { text: '好き、よく撮る', type: 'lifestyle' },
      { text: 'セルフポートレートとして表現', type: 'artistic' },
    ],
  },
  {
    id: 10,
    text: '写真撮影で幸せを感じる瞬間は？',
    options: [
      { text: '雄大な景色を収めた時', type: 'landscape' },
      { text: '大切な人の良い表情が撮れた時', type: 'people' },
      { text: 'おしゃれな写真が撮れた時', type: 'lifestyle' },
      { text: '自分の世界観を表現できた時', type: 'artistic' },
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
  landscape: {
    type: 'landscape',
    title: '風景写真家タイプ',
    emoji: '🏔️📷',
    style: '写真の撮り方：風景重視型',
    description: 'あなたは雄大な風景や美しい自然を撮ることを好むタイプです。光や構図にこだわり、目の前の美しさを忠実に写真に収めます。旅先での絶景撮影が至福の時間です。',
    characteristics: ['自然を愛する', '光と構図にこだわる', '忍耐力がある', '美的センス'],
    tips: ['朝夕のゴールデンアワーを狙って', '三脚で安定した撮影を', '季節ごとの表情を楽しんで'],
  },
  people: {
    type: 'people',
    title: '人物写真家タイプ',
    emoji: '👨‍👩‍👧‍👦📷',
    style: '写真の撮り方：人物重視型',
    description: 'あなたは大切な人の表情を捉えることを大切にするタイプです。自然な笑顔や感情の瞬間を写真に残し、思い出を形にします。人とのつながりを写真で記録する心温まるスタイルです。',
    characteristics: ['人間観察力', '瞬間を捉える', '思い出を大切に', 'コミュニケーション上手'],
    tips: ['自然な表情を引き出して', 'ポートレートモードを活用', '撮った写真をシェアして喜びを'],
  },
  lifestyle: {
    type: 'lifestyle',
    title: 'ライフスタイル写真家タイプ',
    emoji: '☕📷',
    style: '写真の撮り方：日常映え型',
    description: 'あなたは日常をおしゃれに切り取るのが得意なタイプです。カフェやグルメ、日常の何気ない瞬間を素敵に撮影します。SNSでの発信も楽しみ、ライフスタイルを表現します。',
    characteristics: ['トレンド感覚', 'SNS活用上手', '日常を楽しむ', '美的センス'],
    tips: ['自然光を活かして', '構図の引き出しを増やして', '自分らしいスタイルを確立して'],
  },
  artistic: {
    type: 'artistic',
    title: 'アーティスト写真家タイプ',
    emoji: '🎨📷',
    style: '写真の撮り方：芸術表現型',
    description: 'あなたは写真を芸術表現として捉えるタイプです。独自の視点や世界観を大切にし、一般的な写真とは異なる作品を生み出します。写真で自己表現することに喜びを感じます。',
    characteristics: ['独創性', '表現力', 'こだわりが強い', '芸術的センス'],
    tips: ['自分の世界観を大切に', '様々な表現技法を試して', '作品として発表する機会も'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { landscape: 0, people: 0, lifestyle: 0, artistic: 0 };

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
