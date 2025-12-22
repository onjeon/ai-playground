// 健康意識診断 - あなたの健康への意識はどのくらい？
export const questions = [
  {
    id: 1,
    text: '朝食について、普段どうしている？',
    options: [
      { text: '栄養バランスを考えてしっかり食べる', type: 'high' },
      { text: '簡単なものでも必ず食べる', type: 'moderate' },
      { text: '食べたり食べなかったり', type: 'low' },
      { text: 'ほとんど食べない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '運動習慣はある？',
    options: [
      { text: '週3回以上、計画的に運動している', type: 'high' },
      { text: '週1-2回は何かしら体を動かす', type: 'moderate' },
      { text: '気が向いたときだけ', type: 'low' },
      { text: 'ほとんど運動しない', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '睡眠時間について',
    options: [
      { text: '毎日7-8時間、規則正しく', type: 'high' },
      { text: 'だいたい6時間以上は確保', type: 'moderate' },
      { text: '日によってバラバラ', type: 'low' },
      { text: '慢性的に睡眠不足', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '野菜の摂取について',
    options: [
      { text: '毎食、意識して野菜を食べる', type: 'high' },
      { text: '1日1回は野菜を摂るようにしている', type: 'moderate' },
      { text: '好きな野菜があれば食べる程度', type: 'low' },
      { text: 'あまり食べない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: 'お酒の飲み方は？',
    options: [
      { text: '飲まない、または節度を守って楽しむ', type: 'high' },
      { text: '週に数回、適量を飲む', type: 'moderate' },
      { text: '飲む機会があればつい飲みすぎる', type: 'low' },
      { text: 'ほぼ毎日、量も多め', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: 'ストレス対策について',
    options: [
      { text: '定期的にリラックス法を実践している', type: 'high' },
      { text: '趣味などで発散している', type: 'moderate' },
      { text: '特に対策はしていない', type: 'low' },
      { text: 'ストレスを溜め込みがち', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '健康に関する情報について',
    options: [
      { text: '積極的に学び、生活に取り入れている', type: 'high' },
      { text: 'テレビやネットで見たら参考にする', type: 'moderate' },
      { text: '特に興味がない', type: 'low' },
      { text: '健康情報は信じていない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: '定期的な健康チェックについて',
    options: [
      { text: '健康診断以外にも自主的にチェック', type: 'high' },
      { text: '年1回の健康診断は受ける', type: 'moderate' },
      { text: '体調が悪いときだけ病院に行く', type: 'low' },
      { text: 'よほどのことがないと病院に行かない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '食品の成分表示について',
    options: [
      { text: 'カロリーや添加物をしっかりチェック', type: 'high' },
      { text: '気になるときは見る', type: 'moderate' },
      { text: 'あまり見ない', type: 'low' },
      { text: '全く気にしない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: '自分の健康状態について',
    options: [
      { text: '常に意識して、予防に努めている', type: 'high' },
      { text: 'まあまあ気をつけている', type: 'moderate' },
      { text: '今は若いから大丈夫と思っている', type: 'low' },
      { text: '正直、あまり考えていない', type: 'minimal' },
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
  high: {
    type: 'high',
    title: '健康オタクタイプ',
    emoji: '🥗',
    percentage: '健康意識 95%',
    description: '健康に対する意識が非常に高いあなた。食事、運動、睡眠、ストレス管理まで、総合的に健康を考えられる素晴らしい生活習慣の持ち主。その姿勢は将来の自分への最高の投資です。',
    characteristics: ['自己管理力', '計画性', '知識豊富', '予防意識', '継続力'],
    advice: '素晴らしい健康意識！でもストイックになりすぎず、たまには自分を甘やかしても大丈夫。',
  },
  moderate: {
    type: 'moderate',
    title: 'ほどほど健康派タイプ',
    emoji: '😊',
    percentage: '健康意識 65%',
    description: '健康を意識しつつも、無理なく楽しく生活できているあなた。完璧を求めすぎず、バランスの良いアプローチは長続きする秘訣。今の姿勢を維持しながら、少しずつレベルアップしていこう。',
    characteristics: ['バランス型', '現実的', '柔軟', '継続可能', '楽しむ心'],
    advice: '良いバランス！無理なく続けられることが一番大切。今の調子でOK！',
  },
  low: {
    type: 'low',
    title: 'ちょっと無関心タイプ',
    emoji: '😅',
    percentage: '健康意識 35%',
    description: '健康について、あまり意識できていないあなた。「まだ大丈夫」「若いから平気」と思っているかもしれませんが、健康は貯金と同じで早めの対策が効果的。小さなことから始めてみませんか？',
    characteristics: ['楽観的', 'マイペース', '先延ばし傾向', '若さへの自信', '今を楽しむ'],
    advice: '今の体は未来への土台。小さな一歩、例えば水を多く飲むことから始めてみて。',
  },
  minimal: {
    type: 'minimal',
    title: '健康後回しタイプ',
    emoji: '⚠️',
    percentage: '健康意識 15%',
    description: '正直、健康についてあまり考えていないあなた。仕事や遊びを優先して、健康は二の次になっているかも。でも、体は資本です。少しずつでも意識を変えていくと、人生の質が大きく変わりますよ。',
    characteristics: ['目の前優先', '楽観的すぎる', '変化を嫌う', 'リスク軽視', '忙しさ重視'],
    advice: 'まずは睡眠時間の確保から。寝るだけで体は回復します。小さな一歩を踏み出して。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, moderate: 0, low: 0, minimal: 0 };

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
