// スポーツファンタイプ診断 (스포츠 팬 유형 테스트)
export const questions = [
  {
    id: 1,
    text: 'スポーツ観戦のスタイルは？',
    options: [
      { text: '現地で熱狂的に応援', type: 'passionate' },
      { text: 'テレビやネットでじっくり分析', type: 'analytical' },
      { text: '友達と一緒にワイワイ', type: 'social' },
      { text: '大きな大会の時だけ見る', type: 'casual' },
    ],
  },
  {
    id: 2,
    text: '応援するチームや選手は？',
    options: [
      { text: '一途に応援し続ける', type: 'passionate' },
      { text: '戦術や技術で選ぶ', type: 'analytical' },
      { text: '周りの人と同じチーム', type: 'social' },
      { text: '特に決めていない', type: 'casual' },
    ],
  },
  {
    id: 3,
    text: 'スポーツの情報収集は？',
    options: [
      { text: 'ニュースや速報を常にチェック', type: 'passionate' },
      { text: 'データや統計を分析', type: 'analytical' },
      { text: '友達から聞く', type: 'social' },
      { text: '試合前にざっと確認', type: 'casual' },
    ],
  },
  {
    id: 4,
    text: '応援グッズは？',
    options: [
      { text: 'ユニフォームからタオルまで揃える', type: 'passionate' },
      { text: '必要最低限', type: 'analytical' },
      { text: '友達とお揃いで買う', type: 'social' },
      { text: '特に持っていない', type: 'casual' },
    ],
  },
  {
    id: 5,
    text: '贔屓チームが負けた時は？',
    options: [
      { text: '本気で落ち込む', type: 'passionate' },
      { text: '敗因を分析する', type: 'analytical' },
      { text: '友達と慰め合う', type: 'social' },
      { text: 'まあ次があるさ', type: 'casual' },
    ],
  },
  {
    id: 6,
    text: 'スポーツ観戦の楽しみは？',
    options: [
      { text: '勝利の感動を味わうこと', type: 'passionate' },
      { text: '戦術や技術を見ること', type: 'analytical' },
      { text: '皆で盛り上がること', type: 'social' },
      { text: '何となく見ること', type: 'casual' },
    ],
  },
  {
    id: 7,
    text: '観戦中の過ごし方は？',
    options: [
      { text: '声を出して応援', type: 'passionate' },
      { text: '静かに集中して見る', type: 'analytical' },
      { text: '友達とおしゃべりしながら', type: 'social' },
      { text: 'スマホをいじりながら', type: 'casual' },
    ],
  },
  {
    id: 8,
    text: 'スポーツについて語る時は？',
    options: [
      { text: '熱く語り始めると止まらない', type: 'passionate' },
      { text: 'データを交えて論理的に', type: 'analytical' },
      { text: '友達と楽しくおしゃべり', type: 'social' },
      { text: 'あまり詳しく語れない', type: 'casual' },
    ],
  },
  {
    id: 9,
    text: '好きなスポーツのニュースが出たら？',
    options: [
      { text: 'すぐにチェックしてSNSで語る', type: 'passionate' },
      { text: '背景や影響を考える', type: 'analytical' },
      { text: '友達に共有する', type: 'social' },
      { text: '後で見るかもしれない', type: 'casual' },
    ],
  },
  {
    id: 10,
    text: '理想のスポーツ観戦は？',
    options: [
      { text: '現地で勝利を見届ける', type: 'passionate' },
      { text: '解説付きでじっくり見る', type: 'analytical' },
      { text: '友達と一緒に楽しむ', type: 'social' },
      { text: '気楽にリラックスして', type: 'casual' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  fanStyle: string[];
  characteristics: string[];
  enjoymentTips: string[];
}> = {
  passionate: {
    type: 'passionate',
    title: '熱狂的サポータータイプ',
    emoji: '📣',
    description: 'あなたは心からチームを愛する熱狂的サポーター！勝利の感動も敗北の悔しさも全力で味わいます。その情熱がチームに届いているはず！',
    fanStyle: ['一途な応援', '現地観戦', '声出し応援'],
    characteristics: ['情熱的', '一途', '感情豊か'],
    enjoymentTips: ['たまには冷静に観戦も', '負けても引きずりすぎないで', '他のチームのファンも尊重して'],
  },
  analytical: {
    type: 'analytical',
    title: '分析派観戦マニアタイプ',
    emoji: '📊',
    description: 'あなたはデータと戦術で楽しむ分析派ファン！選手の技術や監督の戦術を読み解くのが醍醐味。スポーツを知的に楽しめるタイプです。',
    fanStyle: ['データ分析', '戦術理解', '解説好き'],
    characteristics: ['論理的', '知識豊富', '冷静'],
    enjoymentTips: ['感情も楽しんで', '熱くなることも大切', '純粋に楽しむ気持ちも忘れずに'],
  },
  social: {
    type: 'social',
    title: 'エンジョイ派ソーシャルファンタイプ',
    emoji: '🍻',
    description: 'あなたはスポーツを通じて仲間と楽しむソーシャルタイプ！観戦は友達との大切な時間。一緒に盛り上がることが何より楽しい！',
    fanStyle: ['友達と観戦', '盛り上がり重視', 'イベント好き'],
    characteristics: ['社交的', '楽しむ達人', '仲間想い'],
    enjoymentTips: ['スポーツ自体にも興味を持って', '一人観戦も試してみて', '詳しくなるともっと楽しい'],
  },
  casual: {
    type: 'casual',
    title: 'ゆるく楽しむカジュアルファンタイプ',
    emoji: '📺',
    description: 'あなたは気楽にスポーツを楽しむカジュアルタイプ！大きな大会や話題の試合を楽しみ、日常に彩りを添えます。無理なく楽しむのが一番！',
    fanStyle: ['気楽に観戦', '大会時だけ', 'のんびり'],
    characteristics: ['リラックス', 'マイペース', 'バランス良い'],
    enjoymentTips: ['推しチームを作ってみて', 'ルールを覚えるともっと楽しい', '現地観戦も試してみて'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { passionate: 0, analytical: 0, social: 0, casual: 0 };

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
