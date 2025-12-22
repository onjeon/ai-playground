// 縁起担ぎ度診断
export const questions = [
  {
    id: 1,
    text: '大事な試験や面接の前日、何をする？',
    options: [
      { text: 'カツ丼を食べる（勝つ！）', type: 'high' },
      { text: '神社にお参りに行く', type: 'medium' },
      { text: '特に何もしない、実力勝負', type: 'low' },
      { text: '縁起は気にしない', type: 'none' },
    ],
  },
  {
    id: 2,
    text: 'お正月の初詣は？',
    options: [
      { text: '絶対に行く、おみくじも必須', type: 'high' },
      { text: '家族や友達と行く習慣がある', type: 'medium' },
      { text: '気が向いたら行く', type: 'low' },
      { text: '特に行かない', type: 'none' },
    ],
  },
  {
    id: 3,
    text: '四つ葉のクローバーを見つけたら？',
    options: [
      { text: '絶対に持ち帰る！幸運の印', type: 'high' },
      { text: '嬉しいけど、記念に写真だけ', type: 'medium' },
      { text: '「珍しいな」と思うだけ', type: 'low' },
      { text: '特に何も感じない', type: 'none' },
    ],
  },
  {
    id: 4,
    text: 'お財布を買う時、気にすることは？',
    options: [
      { text: '色（黄色で金運UP）や購入日', type: 'high' },
      { text: '長財布がいいとか、なんとなく気にする', type: 'medium' },
      { text: 'デザインや使いやすさ重視', type: 'low' },
      { text: '何も気にしない', type: 'none' },
    ],
  },
  {
    id: 5,
    text: '「仏滅」に大事な予定を入れる？',
    options: [
      { text: '絶対に避ける！大安を選ぶ', type: 'high' },
      { text: 'できれば避けたい', type: 'medium' },
      { text: 'あまり気にしない', type: 'low' },
      { text: '六曜って何？', type: 'none' },
    ],
  },
  {
    id: 6,
    text: '黒猫が目の前を横切ったら？',
    options: [
      { text: 'ちょっとドキッとする、道を変える', type: 'high' },
      { text: '少し気にはなるけど進む', type: 'medium' },
      { text: '「猫だ、可愛い」と思うだけ', type: 'low' },
      { text: '何も思わない', type: 'none' },
    ],
  },
  {
    id: 7,
    text: 'お守りや縁起物について？',
    options: [
      { text: 'いくつか持っていて大切にしている', type: 'high' },
      { text: '一つくらいは持っている', type: 'medium' },
      { text: 'もらったら持つ程度', type: 'low' },
      { text: '持っていない', type: 'none' },
    ],
  },
  {
    id: 8,
    text: 'ラッキーカラーやラッキーアイテムは？',
    options: [
      { text: '毎日占いでチェックする', type: 'high' },
      { text: 'たまに気にする', type: 'medium' },
      { text: 'ほとんど気にしない', type: 'low' },
      { text: '全く信じない', type: 'none' },
    ],
  },
  {
    id: 9,
    text: '引っ越しや車の購入時、方角を気にする？',
    options: [
      { text: '風水や方位学を参考にする', type: 'high' },
      { text: 'なんとなく気になることも', type: 'medium' },
      { text: '実用性重視で気にしない', type: 'low' },
      { text: '全く気にしない', type: 'none' },
    ],
  },
  {
    id: 10,
    text: '縁起担ぎについてどう思う？',
    options: [
      { text: '大切！心の支えになる', type: 'high' },
      { text: '日本の文化として尊重している', type: 'medium' },
      { text: '科学的根拠はないけど否定もしない', type: 'low' },
      { text: '全く意味がないと思う', type: 'none' },
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
  luckyItem: string;
}> = {
  high: {
    type: 'high',
    title: '縁起担ぎマスター',
    emoji: '🍀',
    percentage: '縁起担ぎ度 98%',
    description: '日本の縁起文化を愛するあなた！お守り、おみくじ、六曜、風水…全てを大切にしています。「カツ丼で勝つ！」「財布は長財布で金運UP」など、縁起担ぎは心の支え。信じる者は救われる！',
    characteristics: ['伝統を大切に', 'お守りコレクター', '六曜を気にする', '神社仏閣好き', 'ポジティブ思考'],
    luckyItem: 'お守り、招き猫、だるま。神社の絵馬にも願いを込めて！',
  },
  medium: {
    type: 'medium',
    title: '適度な縁起担ぎ派',
    emoji: '⛩️',
    percentage: '縁起担ぎ度 65%',
    description: '縁起担ぎは日本の文化として尊重しつつ、適度に取り入れるあなた。初詣には行くし、お守りも持っているけど、がんじがらめにはならない。バランス感覚の良い現代人スタイル。',
    characteristics: ['バランス感覚', '文化を尊重', '柔軟', '程よく信じる', '現実的'],
    luckyItem: 'お気に入りのお守りを一つ。大切なシーンで身につけてみて。',
  },
  low: {
    type: 'low',
    title: '合理的思考派',
    emoji: '🔬',
    percentage: '縁起担ぎ度 30%',
    description: '縁起担ぎより実力を信じるあなた。科学的根拠を重視し、結果は自分の努力次第と考えます。ただ、日本の文化や風習は否定せず、付き合いでは参加することも。',
    characteristics: ['合理的', '実力主義', '科学的思考', '現実的', '柔軟性もある'],
    luckyItem: '自分を信じる心が一番のラッキーアイテム。努力は裏切りません！',
  },
  none: {
    type: 'none',
    title: '完全実力主義者',
    emoji: '💪',
    percentage: '縁起担ぎ度 5%',
    description: '縁起や運に頼らず、全ては自分の実力と努力次第と考えるあなた。迷信やジンクスは全く信じず、論理的に物事を判断します。自分の力を信じる強い心の持ち主。',
    characteristics: ['実力主義', '論理的', '自己信頼', '迷信を信じない', '独立心が強い'],
    luckyItem: '運に頼らないあなただけど、たまには「流れに乗る」のもアリかも？',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, medium: 0, low: 0, none: 0 };

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
