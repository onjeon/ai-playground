// 不安タイプ診断 - あなたの不安はどのタイプ？
export const questions = [
  {
    id: 1,
    text: '新しい環境に入るとき、最も気になるのは？',
    options: [
      { text: '周りの人にどう思われるか', type: 'social' },
      { text: '自分がちゃんとできるか', type: 'performance' },
      { text: '何か悪いことが起きないか', type: 'general' },
      { text: '慣れない場所への不安', type: 'situational' },
    ],
  },
  {
    id: 2,
    text: '夜、なかなか眠れないとき考えてしまうことは？',
    options: [
      { text: '明日の人間関係のこと', type: 'social' },
      { text: '仕事や勉強の進捗', type: 'performance' },
      { text: '漠然とした将来への不安', type: 'general' },
      { text: '特定の予定やイベント', type: 'situational' },
    ],
  },
  {
    id: 3,
    text: 'スマホに着信があったとき、最初に思うことは？',
    options: [
      { text: '誰からだろう…出たくないかも', type: 'social' },
      { text: '仕事関係かな、ミスしたかな', type: 'performance' },
      { text: '何か悪い知らせじゃないかな', type: 'general' },
      { text: '今は出られる状況じゃない', type: 'situational' },
    ],
  },
  {
    id: 4,
    text: '会議や発表の前日、どんな気持ち？',
    options: [
      { text: 'みんなの前で話すのが怖い', type: 'social' },
      { text: '完璧に準備できたか心配', type: 'performance' },
      { text: '何かトラブルが起きそうな予感', type: 'general' },
      { text: 'その場所に行くこと自体が憂鬱', type: 'situational' },
    ],
  },
  {
    id: 5,
    text: 'SNSを見ているとき、どんな不安を感じる？',
    options: [
      { text: '自分の投稿への反応が気になる', type: 'social' },
      { text: '他人と比べて焦りを感じる', type: 'performance' },
      { text: 'ネガティブなニュースで気分が沈む', type: 'general' },
      { text: '見ること自体が疲れる', type: 'situational' },
    ],
  },
  {
    id: 6,
    text: '休日の過ごし方について、不安を感じるのは？',
    options: [
      { text: '誰からも連絡がこないこと', type: 'social' },
      { text: '何も生産的なことをしていない罪悪感', type: 'performance' },
      { text: '何となく落ち着かない感じ', type: 'general' },
      { text: '外出する予定があるとき', type: 'situational' },
    ],
  },
  {
    id: 7,
    text: '上司や先輩からの「ちょっといい？」という言葉を聞くと？',
    options: [
      { text: '嫌われたかも…と不安になる', type: 'social' },
      { text: '何かミスしたか振り返る', type: 'performance' },
      { text: 'とにかく嫌な予感がする', type: 'general' },
      { text: '今この場で話すのかと身構える', type: 'situational' },
    ],
  },
  {
    id: 8,
    text: '健康診断の結果を待っているとき',
    options: [
      { text: '医師や看護師との会話が苦手', type: 'social' },
      { text: '自分の生活習慣を反省する', type: 'performance' },
      { text: '何か深刻な病気だったらどうしよう', type: 'general' },
      { text: '病院という場所自体が苦手', type: 'situational' },
    ],
  },
  {
    id: 9,
    text: '大切な人と連絡が取れないとき',
    options: [
      { text: '自分が何か悪いことしたかも', type: 'social' },
      { text: '相手に迷惑をかけてしまったか', type: 'performance' },
      { text: '事故にあってないか心配になる', type: 'general' },
      { text: '連絡手段がないことにパニック', type: 'situational' },
    ],
  },
  {
    id: 10,
    text: 'あなたの不安を一言で表すと？',
    options: [
      { text: '人目が怖い', type: 'social' },
      { text: '失敗が怖い', type: 'performance' },
      { text: '未知が怖い', type: 'general' },
      { text: '状況が怖い', type: 'situational' },
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
  social: {
    type: 'social',
    title: '対人不安タイプ',
    emoji: '👥',
    percentage: '対人感度 85%',
    description: '人の目や評価が気になりやすいタイプ。空気を読む力が高く、周りの反応に敏感です。それは優しさの裏返しでもありますが、自分を必要以上に追い込んでしまうことも。',
    characteristics: ['共感力が高い', '気配り上手', '繊細', '人の顔色を読む', '自己評価が厳しい'],
    advice: '他人の評価より、自分の心地よさを優先していい。あなたを嫌う人より、好きな人の声に耳を傾けて。',
  },
  performance: {
    type: 'performance',
    title: 'パフォーマンス不安タイプ',
    emoji: '📊',
    percentage: '完璧主義度 80%',
    description: '「ちゃんとできているか」が常に気になるタイプ。責任感が強く、期待に応えたいという気持ちが人一倍。その真面目さが時に自分を苦しめることも。',
    characteristics: ['責任感が強い', '努力家', '目標志向', '自分に厳しい', '高い基準を持つ'],
    advice: '80点でも十分すごい。完璧じゃなくても、あなたの頑張りはちゃんと伝わっています。',
  },
  general: {
    type: 'general',
    title: '漠然不安タイプ',
    emoji: '☁️',
    percentage: '先読み力 75%',
    description: '「何となく不安」という漠然とした心配を抱えやすいタイプ。先のことを考える力があるからこそ、まだ起きていないことにも不安を感じやすいのです。',
    characteristics: ['想像力豊か', '慎重', '準備力がある', '危機管理能力', '心配性'],
    advice: '「今この瞬間」に意識を向けてみて。未来の不安より、今日できることに集中しよう。',
  },
  situational: {
    type: 'situational',
    title: '状況特化型不安タイプ',
    emoji: '📍',
    percentage: '環境感度 70%',
    description: '特定の場所や状況で不安を感じやすいタイプ。慣れない環境に対してストレスを感じやすいですが、安心できる場所ではリラックスできる強さも持っています。',
    characteristics: ['自己理解がある', 'ルーティン重視', '安心基地を持つ', '環境に敏感', '回避傾向あり'],
    advice: '苦手な場所を避けてもOK。でも少しずつ挑戦することで、安心できる場所が増えていくよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { social: 0, performance: 0, general: 0, situational: 0 };

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
