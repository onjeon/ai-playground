// メッセージスタイル診断
export const questions = [
  {
    id: 1,
    text: 'LINEやメッセージの返信速度は？',
    options: [
      { text: '気づいたらすぐ返信', type: 'instant' },
      { text: '内容を考えてから丁寧に', type: 'thoughtful' },
      { text: 'まとめて返信することが多い', type: 'efficient' },
      { text: '忘れて遅くなりがち', type: 'casual' },
    ],
  },
  {
    id: 2,
    text: 'スタンプや絵文字の使い方は？',
    options: [
      { text: 'たくさん使ってテンション高め', type: 'instant' },
      { text: '場面に合わせて適度に', type: 'thoughtful' },
      { text: '必要最低限', type: 'efficient' },
      { text: '文字だけでもOK', type: 'casual' },
    ],
  },
  {
    id: 3,
    text: 'メッセージの長さは？',
    options: [
      { text: '短文を何通も送る', type: 'instant' },
      { text: 'ちょうどいい長さでまとまりよく', type: 'thoughtful' },
      { text: '用件だけ簡潔に', type: 'efficient' },
      { text: 'その時の気分次第', type: 'casual' },
    ],
  },
  {
    id: 4,
    text: 'グループLINEでの振る舞いは？',
    options: [
      { text: '積極的に発言して盛り上げる', type: 'instant' },
      { text: '流れを見て適切にコメント', type: 'thoughtful' },
      { text: '必要な時だけ反応', type: 'efficient' },
      { text: 'ROM専（見るだけ）が多い', type: 'casual' },
    ],
  },
  {
    id: 5,
    text: '既読スルーについて？',
    options: [
      { text: 'されるとちょっと気になる', type: 'instant' },
      { text: '相手も忙しいと理解している', type: 'thoughtful' },
      { text: '自分もするのでお互い様', type: 'efficient' },
      { text: '全然気にしない', type: 'casual' },
    ],
  },
  {
    id: 6,
    text: '大事な話をする時は？',
    options: [
      { text: 'まずはLINEで話し始める', type: 'instant' },
      { text: '文章を練ってから送る', type: 'thoughtful' },
      { text: '電話か直接会って話す', type: 'efficient' },
      { text: '相手に任せる', type: 'casual' },
    ],
  },
  {
    id: 7,
    text: '友達からの相談メッセージには？',
    options: [
      { text: 'すぐに寄り添う返信をする', type: 'instant' },
      { text: 'じっくり読んで考えてから返す', type: 'thoughtful' },
      { text: '必要なら電話に切り替える', type: 'efficient' },
      { text: 'どう返していいか悩む', type: 'casual' },
    ],
  },
  {
    id: 8,
    text: '未読メッセージが溜まると？',
    options: [
      { text: 'すぐ全部チェックしたい', type: 'instant' },
      { text: '優先順位をつけて対応', type: 'thoughtful' },
      { text: '重要なものだけ先に', type: 'efficient' },
      { text: 'あまり気にならない', type: 'casual' },
    ],
  },
  {
    id: 9,
    text: '会話の終わらせ方は？',
    options: [
      { text: 'スタンプで余韻を残す', type: 'instant' },
      { text: 'きちんと締めの言葉を入れる', type: 'thoughtful' },
      { text: '用件が終われば自然と終了', type: 'efficient' },
      { text: 'なんとなくフェードアウト', type: 'casual' },
    ],
  },
  {
    id: 10,
    text: 'メッセージツールへの考え方は？',
    options: [
      { text: '大切なコミュニケーション手段', type: 'instant' },
      { text: '相手との関係を深めるツール', type: 'thoughtful' },
      { text: '連絡のための便利ツール', type: 'efficient' },
      { text: 'あくまで補助的なもの', type: 'casual' },
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
  recommendation: string;
}> = {
  instant: {
    type: 'instant',
    title: '即レスマスター',
    emoji: '⚡',
    percentage: '反応速度 100%',
    description: '通知が来たら即チェック、即返信！スタンプや絵文字を駆使してテンション高くやりとりします。相手を待たせない気配り上手！',
    characteristics: ['即レス', 'アクティブ', 'テンション高め', 'マメ', '気配り'],
    recommendation: '時には返信を遅らせて自分の時間も大切に！',
  },
  thoughtful: {
    type: 'thoughtful',
    title: '丁寧メッセンジャー',
    emoji: '💌',
    percentage: '丁寧度 95%',
    description: '相手や状況に合わせて、適切な言葉を選んで送るタイプ。文章の構成も絵文字の使い方も絶妙。コミュニケーション上手な思いやりタイプ！',
    characteristics: ['丁寧', '気遣い', '適度', 'バランス感覚', '配慮'],
    recommendation: 'その丁寧さ、相手にちゃんと伝わっていますよ！',
  },
  efficient: {
    type: 'efficient',
    title: '効率重視タイパー',
    emoji: '📱',
    percentage: '効率性 92%',
    description: '用件を簡潔に、必要な情報だけを伝える効率派。無駄なやりとりは省いて、重要な話は直接がモットー。時間を大切にする合理主義者！',
    characteristics: ['効率的', '簡潔', '合理的', '時間重視', 'ビジネスライク'],
    recommendation: 'たまには雑談も楽しんでみては？',
  },
  casual: {
    type: 'casual',
    title: 'マイペーステキスター',
    emoji: '🌙',
    percentage: 'マイペース度 88%',
    description: '返信は自分のペースで、焦らず気負わずのんびりスタイル。メッセージに縛られすぎない自由なコミュニケーション。リアルを大切にするタイプ！',
    characteristics: ['マイペース', 'ゆるい', '自然体', 'リアル重視', '気楽'],
    recommendation: '大事な連絡の返信だけは忘れずに！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { instant: 0, thoughtful: 0, efficient: 0, casual: 0 };

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
