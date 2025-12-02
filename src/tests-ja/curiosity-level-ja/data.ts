// 好奇心度診断
export const questions = [
  {
    id: 1,
    text: '本屋に行ったとき、どうする？',
    options: [
      { text: '目当ての本だけ買って帰る', type: 'low' },
      { text: '少しだけ他のコーナーも見る', type: 'medium' },
      { text: '気づいたら色んなジャンルを見てる', type: 'high' },
      { text: '興味の赴くまま何時間でもいられる', type: 'explorer' },
    ],
  },
  {
    id: 2,
    text: '知らない言葉を聞いたとき？',
    options: [
      { text: '特に気にしない、スルー', type: 'low' },
      { text: '気になるけど後で調べようと思って忘れる', type: 'medium' },
      { text: 'その場でスマホで調べる', type: 'high' },
      { text: '調べるだけでなく関連情報まで深掘り', type: 'explorer' },
    ],
  },
  {
    id: 3,
    text: '新しいお店ができた。どうする？',
    options: [
      { text: 'いつものお店で十分', type: 'low' },
      { text: '評判が良ければ行ってみる', type: 'medium' },
      { text: 'とりあえず行ってみたい', type: 'high' },
      { text: 'オープン初日に並んででも行く', type: 'explorer' },
    ],
  },
  {
    id: 4,
    text: '旅行先での過ごし方は？',
    options: [
      { text: 'ガイドブック通りに観光', type: 'low' },
      { text: '有名スポット＋少し散策', type: 'medium' },
      { text: '地元の人に話しかけて穴場を聞く', type: 'high' },
      { text: '地図なしで迷子になるのも楽しい', type: 'explorer' },
    ],
  },
  {
    id: 5,
    text: 'YouTubeを見ていて、関連動画をどこまで見る？',
    options: [
      { text: '目的の動画だけ見て終わり', type: 'low' },
      { text: '1〜2本くらいは見ることも', type: 'medium' },
      { text: '気づいたら1時間経ってる', type: 'high' },
      { text: '沼にハマって3時間コース', type: 'explorer' },
    ],
  },
  {
    id: 6,
    text: '友達が知らない趣味の話をしてきたら？',
    options: [
      { text: '興味ないので聞き流す', type: 'low' },
      { text: '相槌は打つけど深くは聞かない', type: 'medium' },
      { text: '質問していろいろ聞いてみる', type: 'high' },
      { text: '自分もやってみたくなる', type: 'explorer' },
    ],
  },
  {
    id: 7,
    text: '子供の「なんで？なんで？」攻撃、どう思う？',
    options: [
      { text: '正直面倒くさい', type: 'low' },
      { text: '適当に答える', type: 'medium' },
      { text: '一緒に考えるのが楽しい', type: 'high' },
      { text: '自分も「なんでだろう」って思う側', type: 'explorer' },
    ],
  },
  {
    id: 8,
    text: '仕事で新しいツールを導入することになったら？',
    options: [
      { text: 'できれば今のままがいい', type: 'low' },
      { text: '必要なら使えるようになる', type: 'medium' },
      { text: '新機能を色々試してみたい', type: 'high' },
      { text: '誰よりも先に使いこなしたい', type: 'explorer' },
    ],
  },
  {
    id: 9,
    text: '休日の予定がなかったら？',
    options: [
      { text: '家でゆっくり過ごす', type: 'low' },
      { text: 'なんとなくスマホをいじる', type: 'medium' },
      { text: '何か新しいことを始めてみる', type: 'high' },
      { text: '行ったことない場所に出かける', type: 'explorer' },
    ],
  },
  {
    id: 10,
    text: '人生で一番ワクワクするのは？',
    options: [
      { text: '安定した日常', type: 'low' },
      { text: 'たまにある非日常', type: 'medium' },
      { text: '新しい発見があるとき', type: 'high' },
      { text: '未知の世界に飛び込むとき', type: 'explorer' },
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
  low: {
    type: 'low',
    title: '安定重視タイプ',
    emoji: '🏡',
    percentage: '好奇心度 25%',
    description: '安定した環境で着実に進むことを好むタイプ。新しいものより慣れ親しんだものに安心感を覚えます。それは決して悪いことではなく、深く物事を極められる強みでもあります。',
    characteristics: ['堅実', '安定志向', '専門特化', '慎重', '落ち着き'],
    advice: 'たまには新しいことを試してみると、意外な発見があるかも。',
  },
  medium: {
    type: 'medium',
    title: 'バランス好奇心タイプ',
    emoji: '🌱',
    percentage: '好奇心度 50%',
    description: '必要に応じて新しいことにも挑戦できるバランスの取れたタイプ。無理のない範囲で好奇心を満たしながら、安定も大切にしています。',
    characteristics: ['バランス感覚', '適度な挑戦', '現実的', '柔軟', '堅実'],
    advice: 'もう少しだけ「なぜ？」を増やしてみると世界が広がりますよ。',
  },
  high: {
    type: 'high',
    title: '旺盛な好奇心タイプ',
    emoji: '🔍',
    percentage: '好奇心度 80%',
    description: '「知りたい」「試してみたい」という気持ちが強いタイプ。新しい情報や体験を積極的に求め、学び続けることに喜びを感じます。知識欲旺盛なあなたは、会話も楽しい人です。',
    characteristics: ['学習意欲', '探求心', '多趣味', '柔軟性', '成長志向'],
    advice: '広く浅くなりがち？たまには深掘りも楽しいですよ。',
  },
  explorer: {
    type: 'explorer',
    title: '探検家タイプ',
    emoji: '🧭',
    percentage: '好奇心度 99%',
    description: '未知への好奇心が止められない真の探検家。「なぜ？」「どうして？」が口癖で、常に新しい発見を求めています。あなたの好奇心は周りの人にも刺激を与える存在です。',
    characteristics: ['冒険心', '無限の探求心', '先駆者', 'イノベーター', '影響力'],
    advice: '素晴らしい好奇心！でも、たまには立ち止まって整理も大切。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { low: 0, medium: 0, high: 0, explorer: 0 };

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
